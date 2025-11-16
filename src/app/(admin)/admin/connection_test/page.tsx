'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { environments } from '@/envs';
import { PATH } from '@/constants/path';
import { ApolloClient, InMemoryCache, HttpLink, ApolloError } from '@apollo/client';
import { HeartBeatDocument } from '@/graphql/generated/generated';

export default function Test() {
  const router = useRouter();

  const [data, setRestData] = useState<string | null>(null);
  const [error, setRestError] = useState<string | null>(null);

  const [gqlData, setGqlData] = useState<string | null>(null);
  const [gqlError, setGqlError] = useState<string | null>(null);

  const restEndpoint = `${environments.origin.backend}/heartbeat`;
  const gqlEndpoint = environments.endpoint.graphql;

  const handleRestRequest = async () => {
    try {
      setRestError(null);
      setRestData(null);
      const response = await axios.get(restEndpoint);
      setRestData(JSON.stringify(response.data, null, 2));
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setRestError(JSON.stringify(e.response?.data ?? e.message, null, 2));
      } else {
        setRestError(String(e));
      }
    }
  };

  const handleGqlRequest = async () => {
    try {
      setGqlError(null);
      setGqlData(null);

      const link = new HttpLink({ uri: gqlEndpoint });

      const client = new ApolloClient({
        link: link,
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: HeartBeatDocument,
      });

      setGqlData(JSON.stringify(response.data, null, 2));
    } catch (e: unknown) {
      if (e instanceof ApolloError) {
        setGqlError(JSON.stringify(e, null, 2));
      } else {
        setGqlError(String(e));
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>接続テストページ</h1>
      <h2>Rest API用HeartBeat</h2>
      <p>
        ボタンをクリックすると <code>{restEndpoint}</code> にリクエストを送信します。
      </p>
      <button onClick={handleRestRequest}>RestAPIリクエスト送信</button>

      {data && (
        <div>
          <h2>結果:</h2>
          <pre>{data}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>エラー:</h2>
          <pre style={{ color: 'red' }}>{error}</pre>
        </div>
      )}

      <hr style={{ margin: '40px 0' }} />

      <h2>GraphQL用HeartBeat</h2>
      <p>
        ボタンをクリックすると <code>{gqlEndpoint}</code> にリクエストを送信します。
      </p>
      <button onClick={handleGqlRequest}>GraphQLリクエスト送信</button>

      {gqlData && (
        <div>
          <h2>結果:</h2>
          <pre>{gqlData}</pre>
        </div>
      )}
      {gqlError && (
        <div>
          <h2>エラー:</h2>
          <pre style={{ color: 'red' }}>{gqlError}</pre>
        </div>
      )}
      <hr style={{ margin: '40px 0' }} />
      <button onClick={() => router.push(PATH.ADMIN_ROOT)}>戻る</button>
    </div>
  );
}

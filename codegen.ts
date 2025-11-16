import type { CodegenConfig } from '@graphql-codegen/cli';
import { environments } from './src/envs';

const config: CodegenConfig = {
  // GraphQLスキーマの取得元
  schema: environments.endpoint.graphql || 'http://localhost:3001/api/graphql',
  documents: 'src/graphql/**/*.graphql',
  // 出力先と利用プラグイン
  generates: {
    'src/graphql/generated/generated.ts': {
      plugins: [
        'typescript', // スキーマ → TypeScript型
        'typescript-operations', // クエリ・ミューテーションの型
        'typescript-react-apollo', // Apollo用React Hooksを生成
      ],
      config: {
        withHooks: true, // useQuery/useMutationなどを自動生成
        addDocBlocks: false, // コメントを省略（軽量化）
        reactApolloVersion: 3, // Apollo Client v3対応
        avoidOptionals: true, // ?を減らして扱いやすく
      },
    },
  },
  ignoreNoDocuments: true, // .graphqlファイルがなくてもエラーにしない
};

export default config;

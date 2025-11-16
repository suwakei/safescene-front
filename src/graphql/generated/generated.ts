import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};

export type NewTodo = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  heartbeat: Scalars['String']['output'];
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type HeartBeatQueryVariables = Exact<{ [key: string]: never; }>;


export type HeartBeatQuery = { __typename?: 'Query', heartbeat: string };


export const HeartBeatDocument = gql`
    query HeartBeat {
  heartbeat
}
    `;
export function useHeartBeatQuery(baseOptions?: Apollo.QueryHookOptions<HeartBeatQuery, HeartBeatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeartBeatQuery, HeartBeatQueryVariables>(HeartBeatDocument, options);
      }
export function useHeartBeatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeartBeatQuery, HeartBeatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeartBeatQuery, HeartBeatQueryVariables>(HeartBeatDocument, options);
        }
export function useHeartBeatSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HeartBeatQuery, HeartBeatQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HeartBeatQuery, HeartBeatQueryVariables>(HeartBeatDocument, options);
        }
export type HeartBeatQueryHookResult = ReturnType<typeof useHeartBeatQuery>;
export type HeartBeatLazyQueryHookResult = ReturnType<typeof useHeartBeatLazyQuery>;
export type HeartBeatSuspenseQueryHookResult = ReturnType<typeof useHeartBeatSuspenseQuery>;
export type HeartBeatQueryResult = Apollo.QueryResult<HeartBeatQuery, HeartBeatQueryVariables>;
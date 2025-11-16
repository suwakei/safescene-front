/**
 * APIのベースURL
 * 環境変数 REACT_APP_API_URL が設定されていればその値を、なければローカル開発用のURLを使用。
 */
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

/**
 * APIエンドポイントのURL一覧
 */
export const API_URL = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  USER_INFO: `${API_BASE_URL}/users/me`,
  INCIDENTS: `${API_BASE_URL}/incidents`,
  INCIDENT_DETAIL: (id: string | number) => `${API_BASE_URL}/incidents/${id}`,
} as const;

export const PATH = {
  // 一般ページ
  MAIN: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  MYPAGE: '/mypage',
  INCIDENT: '/incident',
  INCIDENT_REGISTRATION: '/incident/registration',
  FORBIDDEN: '/403',
  NOT_FOUND: '/404',
  INTERNAL_SERVER_ERROR: '/500',
  // 管理者ページ
  ADMIN_ROOT: '/admin',
  ADMIN_CONNECTION_TEST: '/admin/connection_test',
} as const;

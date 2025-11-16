'use client'

import { useRouter } from "next/navigation"
import { PATH } from '@/constants/path'

export default function Admin() {
  const router = useRouter()
  return (
    <div>
      <h1>管理者ページ</h1>
      <button onClick={() => router.push(PATH.ADMIN_CONNECTION_TEST)}>接続テストページへ移動する</button>
    </div>
  )
}
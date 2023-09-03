import { Head } from '@/components/layout/Head'
import { SITE_NAME, SITE_DESCRIPTION } from '@/utils/config'

import { Profile } from '@/components/siwe/Profile'

export default function Home() {
  return (
    <>
      <Head />
      <main className="grid min-h-screen items-center justify-center">
        <div className="container w-80 items-center rounded-lg bg-white p-4 text-center shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-700">{SITE_NAME}</h1>
          <p className="p-4 text-gray-600">{SITE_DESCRIPTION}</p>

          <Profile />
        </div>
      </main>
    </>
  )
}

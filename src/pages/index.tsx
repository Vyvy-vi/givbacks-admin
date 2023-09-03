import { Head } from '@/components/layout/Head'
import { SITE_NAME, SITE_DESCRIPTION } from '@/utils/config'

import { Profile } from '@/components/siwe/Profile'

export default function Home() {
  return (
    <>
      <Head />
      <main className='grid justify-center items-center min-h-screen'>
        <div className="container rounded-lg bg-white p-4 shadow-md w-80 items-center justify-content text-center">

          <h1 className="text-3xl font-semibold text-gray-700">{SITE_NAME}</h1>
          <p className="text-gray-600 p-4">{SITE_DESCRIPTION}</p>

          <Profile />
        </div>
      </main>
    </>
  )
}

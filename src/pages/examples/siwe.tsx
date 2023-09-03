

export default function Siwe() {
  return (
    <>
      <Head
        description="Example on how to use Sign-In with Ethereum."
        title="Sign-In with Ethereum"
      />
      <main className="mx-auto max-w-xl overflow-hidden px-1 text-lg">
        <h1 className="mt-10 text-4xl font-bold">Sign-In with Ethereum</h1>
        <h2 className="mt-2">
          This example shows how to use Sign-In with Ethereum to create user
          sessions based on a wallet conenction.
        </h2>
        <h3>More info:</h3>
        <ul className="mt-2 list-inside list-disc text-xl">
          <li>
            <a
              className="transition duration-200 hover:opacity-60"
              href="https://login.xyz/"
              rel="noreferrer"
              target="_blank">
              SIWE
            </a>
          </li>
          <li>
            <a
              className="transition duration-200 hover:opacity-60"
              href="https://wagmi.sh/examples/sign-in-with-ethereum"
              rel="noreferrer"
              target="_blank">
              Wagmi docs
            </a>
          </li>
        </ul>
        <Profile />
      </main>
    </>
  )
}

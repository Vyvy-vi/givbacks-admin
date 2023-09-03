import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { SignInButton } from './SignInButton'
import { DateSelector } from './DateSelector'

export function Profile() {
  const { isConnected } = useAccount()
  // State added to avoid hydration errors see more: https://nextjs.org/docs/messages/react-hydration-error
  const [isConnectedAccount, setIsConnectedAccounts] = useState<boolean>()
  const [state, setState] = useState<{
    address?: string
    error?: Error
    loading?: boolean
  }>({})

  // Fetch user when:
  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch('/api/siwe/user')
        const json = await res.json()
        setState((x) => ({ ...x, address: json.address }))
      } catch (_error) {}
    }
    // 1. page loads
    handler()

    // 2. window is focused (in case user logs out of another window)
    if (typeof window !== 'undefined') {
      globalThis.addEventListener('focus', handler)
      return () => globalThis.removeEventListener('focus', handler)
    }
  }, [])

  useEffect(() => {
    setIsConnectedAccounts(isConnected)
  }, [isConnected])

  // // Don't render component in the first render to avoid flash of content
  if (isConnectedAccount === undefined) return null

  if (isConnectedAccount) {
    return (
      <div>
        {!state.address && (
          <SignInButton
            onError={({ error }) => setState((x) => ({ ...x, error }))}
            onSuccess={({ address }) => setState((x) => ({ ...x, address }))}
          />
        )}
        {state.address && (
          <div className="mt-6 text-slate-700">
            <DateSelector />
            <h3 className="text-2xl font-medium">Signed in as</h3>
            <h4 className="break-words">{state.address}</h4>
            <button
              className="mt-4 w-full rounded-xl bg-red-200 p-3 text-lg font-semibold text-red-700 transition  duration-300 focus:ring-2 focus:ring-red-500 enabled:hover:bg-red-300 disabled:opacity-70"
              onClick={async () => {
                await fetch('/api/logout')
                setState({})
              }}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className='flex flex-col items-center gap-2'>
      <p className="mt-8 text-lg text-slate-800">
        Connect your wallet to Sign-In with Ethereum.
      </p>
      <ConnectButton chainStatus="none" showBalance={false} />
    </div>
  )
}

import { ChainOptions, ApiEndpoints } from '@/pages/api/givbacks/apiCall'

interface eligibleDonationData {
  amount: string
  currency: string
  createdAt: string
  valueUsd: number
  givbackFactor: number
  projectRank?: number
  bottomRankInRound?: number
  givbacksRound?: number
  giverAddress: string
  txHash: string
  network: string
  source: string
  giverName: string
  giverEmail?: string
  projectLink?: string
  niceTokens?: string
  info?: string
  isReferrerGivbackEligible?: boolean
  referrerWallet?: string
  referrer?: boolean
  referred?: boolean
}

export async function getData(
  endpoint: ApiEndpoints | undefined,
  startDate: string,
  endDate: string,
  chain: ChainOptions
): Promise<eligibleDonationData | undefined> {
  try {
    const res = await fetch(
      `/api/givbacks/apiCall?endpoint=${endpoint}&startDate=${startDate}&endDate=${endDate}&chain=${chain}`
    )
    const json = await res.json()
    return json
  } catch (_error) {
    return undefined
  }
}

export async function performCalculations(startDate: string, endDate: string) {
  const eligibleDonationsGeneral = await getData(
    ApiEndpoints.eligibleDonations,
    startDate,
    endDate,
    ChainOptions.allOtherChains
  )
  const eligibleDonationsOptimism = await getData(
    ApiEndpoints.eligibleDonations,
    startDate,
    endDate,
    ChainOptions.optimism
  )

  const notEligibleDonationsGeneral = await getData(
    ApiEndpoints.notEligibleDonations,
    startDate,
    endDate,
    ChainOptions.allOtherChains
  )

  const notEligibleDonationsOptimism = await getData(
    ApiEndpoints.notEligibleDonations,
    startDate,
    endDate,
    ChainOptions.optimism
  )
}

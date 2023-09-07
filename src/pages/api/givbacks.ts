export enum ChainOptions {
  allOtherChains = 'all-other-chains',
  optimism = 'optimism',
}

export enum ApiEndpoints {
  eligibleDonations = 'eligible-donations',
  notEligibleDonations = 'not-eligible-donations',
  purpleListDonationsToVerifiedProjects = 'purplelist-donations-to-verifiedProjects',
  purpleList = 'purple-list',
}

interface QueryParams {
  startDate?: string
  endDate?: string
}

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
;[]

interface purpleList {
  purpleList: string[]
}

export async function getData<T>(
  endpoint: ApiEndpoints,
  startDate?: string,
  endDate?: string,
  chain?: ChainOptions
): Promise<T | undefined> {
  const params = []
  if (chain) params.push(`chain=${chain}`)
  if (startDate) params.push(`startDate=${encodeURIComponent(startDate)}`)
  if (endDate) params.push(`endDate=${encodeURIComponent(endDate)}`)

  params.push('download=no')

  const queryString = params.length > 0 ? params.join('&') : ''

  let url = `https://givback.develop.giveth.io/${endpoint}?${queryString}`

  try {
    const data = await fetch(url)
    const json = (await data.json()) as Promise<T>
    return json
  } catch (_) {
    console.log(_)
    return undefined
  }
}

import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { IRON_SESSION_CONFIG } from '@/utils/config'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { startDate, endDate } = req.query as QueryParams

    if (!startDate || !endDate)
      return res.status(404).end(`startDate and endDate are required params`)

    const eligibleDonationsGeneral = await getData<eligibleDonationData>(
      ApiEndpoints.eligibleDonations,
      startDate,
      endDate,
      ChainOptions.allOtherChains
    )
    const eligibleDonationsOptimism = await getData<eligibleDonationData>(
      ApiEndpoints.eligibleDonations,
      startDate,
      endDate,
      ChainOptions.optimism
    )

    const notEligibleDonationsGeneral = await getData<eligibleDonationData>(
      ApiEndpoints.notEligibleDonations,
      startDate,
      endDate,
      ChainOptions.allOtherChains
    )

    const notEligibleDonationsOptimism = await getData<eligibleDonationData>(
      ApiEndpoints.notEligibleDonations,
      startDate,
      endDate,
      ChainOptions.optimism
    )

    const purpleListDonationsToVerifiedProjects = await getData<purpleList>(
      ApiEndpoints.purpleListDonationsToVerifiedProjects,
      startDate,
      endDate
    )
  }
  res.setHeader('Allow', ['GET'])
  return res.status(405).end(`Method ${req.method} Not Allowed`)
}

export default withIronSessionApiRoute(handler, IRON_SESSION_CONFIG)

import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { IRON_SESSION_CONFIG } from '@/utils/config'

export enum ChainOptions {
  allOtherChains = 'All Other Chains',
  optimism = 'optimism',
}

export enum ApiEndpoints {
  eligibleDonations = 'eligible-donations',
  notEligibleDonations = 'not-eligible-donations',
}

interface QueryParams {
  endpoint?: ApiEndpoints
  startDate?: string
  endDate?: string
  chain?: ChainOptions
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { endpoint, startDate, endDate, chain } = req.query as QueryParams

    if (!endpoint || !startDate || !endDate || !chain)
      return res
        .status(400)
        .end(
          `Parameters missing. endpoint, startDate, endDate and chain all need to be present in query -\n ${JSON.stringify(
            req.query
          )}`
        )
    const url = `https://givback.develop.giveth.io/${endpoint}?chain=${chain}&startDate=${encodeURIComponent(
      startDate
    )}&endDate=${encodeURIComponent(endDate)}&download=no`
    const data = await fetch(url)
    const json = await data.json()
    console.log(url, json)
    return res.send(json)
  }
  res.setHeader('Allow', ['GET'])
  return res.status(405).end(`Method ${req.method} Not Allowed`)
}

export default withIronSessionApiRoute(handler, IRON_SESSION_CONFIG)

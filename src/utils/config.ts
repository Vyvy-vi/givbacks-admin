import { mainnet, goerli } from '@wagmi/chains'

export const SITE_NAME = 'Givbacks Admin'
export const SITE_DESCRIPTION = 'Admin Application for processing Givbacks'
export const SITE_URL = process.env.SITE_URL

export const SOCIAL_TWITTER = 'generalmagicio'
export const SOCIAL_GITHUB = 'GeneralMagicio/next-web3-starter'

export const WEB3_CHAINS = [mainnet, goerli]

export const IRON_SESSION_CONFIG = {
  cookieName: `siwe ${SITE_NAME}`,
  password:
    process.env.IRON_SESSION_PASSWORD ??
    // UPDATE fallback password
    'oMTmFByjX3x?3SefHXgMPRTE!rBtg6dM',
  cookieOptions: {
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    secure: process.env.NODE_ENV === 'production',
  },
}

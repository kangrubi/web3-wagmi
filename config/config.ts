'use client'
import { http } from 'wagmi';
import {
  mainnet,
  bsc,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = process.env.NEXT_PUBLIC_WAGMI_PROJECT_ID as string // https://cloud.walletconnect.com/ id 발급

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: projectId,
  chains: [mainnet, bsc, polygon, optimism, arbitrum, base],
  ssr: true, // 디앱이 서버 측 렌더링(SSR)을 사용하는 경우
  transports: {
    [mainnet.id]: http()
  }
})
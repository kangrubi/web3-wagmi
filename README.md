# RainbowKit + Wagmi
rainbowkit, wagmi 사용하여 wallet connect 연결

## Getting Started

```bash
npm run dev
# or
pnpm dev
```

## wagmi hydration error
- wagmi는 빠른 초기 데이터를 위해 클라이언트 측 저장소를 사용함
- next.js와 같은 SSR 프레임워크에서 문제를 일으킴

#### 해결방안
1. 조건부 렌더링 - 클라이언트에서만 렌더링할 필요가 있는 컴포넌트는 useEffect를 사용하여 클라이언트에서만 로드되도록 하기
2. config에 ssr: true 설정을 사용하여 하이드레이션 문제 완화하기

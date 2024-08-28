'use client'
import React, { useEffect, useState } from 'react';
import { Connector, useConnect } from 'wagmi'
import { Button } from './ui/button';

const WalletButton = () => {
  const { connectors, connect } = useConnect()
  const [mounted, setMounted] = useState<boolean>(false);

  const onConnect = (connector: Connector) => {
    connect({ connector })
  }

  // useConnect 클라이언트 훅으로 클라이언트에서만 렌더링 되어야함
  // 클라이언트와 서버에서 동시에 렌더링 시도로 인하여 하이드레이션 오류 발생으로 인한 처리
  useEffect(() => {
    // 클라이언트 측에서만 렌더링하도록 설정
    setMounted(true)
  }, [])

  // 클라이언트에서 렌더링될 때까지 아무것도 렌더링하지 않음
  if (!mounted) return null

  return (
    <div>
      {
        connectors.map((connector) => (
          <Button key={connector.id} onClick={() => onConnect(connector)}>
            {connector.name}
          </Button>
        ))
      }
    </div>
  );
};

export default WalletButton;
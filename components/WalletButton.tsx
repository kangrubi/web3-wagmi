'use client'
import React from 'react';
import { Connector, useConnect } from 'wagmi'
import { Button } from './ui/button';

const WalletButton = () => {
  const { connectors, connect } = useConnect()

  const onConnect = (connector: Connector) => {
    connect({ connector })
  }

  return (
    <>
      {
        connectors.map((connector) => (
          <Button key={connector.id} onClick={() => onConnect(connector)}>
            {connector.name}
          </Button>
        ))
      }
    </>
  );
};

export default WalletButton;
'use client'
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Header = () => {
  return (
    <div>
      <ConnectButton label='connect' accountStatus="address" chainStatus="none" />
    </div>

  );
};

export default Header;
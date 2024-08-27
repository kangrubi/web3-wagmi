'use client'
import { useEffect } from 'react';

const MockServiceWorkerProvider = () => {
  useEffect(() => {
    const startWorker = async () => {
      if (typeof window !== 'undefined') {
        if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
          // require 사용 권장하지 않아서 import로 사용
          const { default: worker } = await import("@/mocks/browser");
          await worker.start();
        }
      }

    }
    startWorker()
  }, []);

  return null;
};

export default MockServiceWorkerProvider;
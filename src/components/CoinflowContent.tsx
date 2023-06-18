import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { CoinflowEnvs, CoinflowWithdraw } from '@coinflowlabs/react';

const CoinflowContent = () => {
    const {connection} = useConnection();
    const wallet = useWallet();
  
    return (
        <CoinflowWithdraw
            wallet={wallet}
            merchantId={process.env.REACT_APP_MERCHANT_ID as string}
            env={process.env.REACT_APP_ENV as CoinflowEnvs}
            connection={connection}
            onSuccess={() => console.log('Withdraw Success')}
            blockchain={'solana'}
            email={'user-email@email.com'}
        />
    );
}

export default CoinflowContent;
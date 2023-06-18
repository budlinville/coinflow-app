import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { Wallet } from './components/Wallet';
import CoinflowContent from './components/CoinflowContent';


const App = () => (
    <Wallet>
        <div className="App">
            <WalletMultiButton />
            <div style={{ height: '100vh' }}>
                <CoinflowContent />
            </div>
        </div>
    </Wallet>
);

export default App;

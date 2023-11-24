import './styles/app.scss';

import { getMetaMaskProvider, getBalance, transfer } from './components/utils/MetaMaskService';

import { useEffect, useState } from 'react';

import WalletConnect from './components/wallet-connect/WalletConnet';
import WalletTransfer from './components/wallet-transfer/WalletTransfer';

function App() {
  const [connectedWallet, setConnectedWallet] = useState(false);
  const [balance, setBalance] = useState('');
  const [wallet, setWallet] = useState('');
  const [destinationWallet, setDestinationWallet] = useState('');
  const [value, setValue] = useState('');

  function handleConnectWallet() {
    getMetaMaskProvider();
  }

  function handleTransferArea() {
    window.ethereum._state.accounts >= 1 ? setConnectedWallet(true) : window.alert('No wallet connected.')
  }

  function handleTransfer() {
    transfer(wallet, destinationWallet, value)
    .then(hashCode => window.alert(`Hash da transação: ${hashCode}`))
    .catch(err => window.alert(err.mensage))
  }

  useEffect(() => {
    if(window.ethereum._state.accounts >= 1) setConnectedWallet(true);

    function handleGetBalance() {
      getBalance(wallet)
      .then(balance => setBalance(balance))
      .catch(err => setBalance(err.mensage))
    }

    handleGetBalance();
  }, [connectedWallet, wallet])

  return (
    <main id='app'>
      {
      !connectedWallet ?

      <WalletConnect 
        handleConnectWallet={() => handleConnectWallet()}
        handleTransferArea={() => handleTransferArea()}
      /> :

      <WalletTransfer
        balance={balance}
        handleTransfer={() => handleTransfer()}
        wallet={wallet}
        setWallet={setWallet}
        destinationWallet={destinationWallet}
        setDestinationWallet={setDestinationWallet}
        value={value}
        setValue={setValue}
      />
      }
    </main>
  )
}

export default App

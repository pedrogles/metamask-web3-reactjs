import { DefaultButton } from "../buttons/Buttons";

import "./walletconnect.scss";

export default function WalletConnect({handleConnectWallet, handleTransferArea}) {
    return (
        <section id="wallet-connect-card">
            <h1 className="title">Hello, there!</h1>
            <p className="paragraph">For the next step, connect your Wallet.</p>
            <div className="action-buttons">
                <DefaultButton
                    value="Connect Wallet"
                    onClick={handleConnectWallet}
                />
                <DefaultButton
                    value="Transfer Area"
                    onClick={handleTransferArea}
                />
            </div>
        </section>
    )
}
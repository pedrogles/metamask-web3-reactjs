import { useEffect, useState } from "react";
import { LargeButton } from "../buttons/Buttons";

import "./wallettransfer.scss";

export default function WalletTransfer({
        balance,
        handleTransfer,
        wallet,
        setWallet,
        destinationWallet,
        setDestinationWallet,
        value,
        setValue 
        }) {
        const [disabled, setDisabled] = useState(true);

        useEffect(() => {
            wallet && destinationWallet && value !== '' ?
            setDisabled(false) : 
            setDisabled(true)
        }, [wallet, destinationWallet, value])

    return (
        <section id="wallet-transfer">
            <h2 className="title">Transfer</h2>
            <section className="balance-section">
                <span className="balance-title">Balance:</span>
                <span className="balance-paragraph">{balance}</span>
            </section>
            <section className="input-component">
                <label className="label" htmlFor="wallet">
                    Wallet:
                </label>
                <input
                    className="input"
                    id="wallet"
                    type="text"
                    value={wallet}
                    placeholder="0x24510EF996e94309aeb670D112AE0fb4f375e631"
                    onChange={e => setWallet(e.target.value)}
                />
            </section>
            <section className="input-component">
                <label className="label" htmlFor="destination">
                    Destination Wallet:
                </label>
                <input
                    className="input"
                    id="destination"
                    type="text"
                    value={destinationWallet}
                    placeholder="0x4e4C4f89402Dc1810974CE8A238777c597D7f9D5"
                    onChange={e => setDestinationWallet(e.target.value)}
                />
            </section>
            <section className="input-component">
                <label className="label" htmlFor="value">
                    Value:
                </label>
                <input
                    className="input"
                    id="value"
                    type="number"
                    value={value}
                    placeholder="0.01"
                    onChange={e => setValue(e.target.value)}
                />
            </section>
            <LargeButton
                value={"Send"}
                onClick={handleTransfer}
                disabled={disabled}
            />
            <p className="balance-info">Paste your wallet address to see your balance.</p>
        </section>
    )
}
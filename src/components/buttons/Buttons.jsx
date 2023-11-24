import "./buttons.scss";

export function DefaultButton({value, onClick}) {
    return (
        <button className="default-button" onClick={onClick}>
            {value}
        </button>
    )
}
export function LargeButton({value, onClick, disabled}) {
    return (
        <button className="large-button" onClick={onClick} disabled={disabled}>
            {value}
        </button>
    )
}
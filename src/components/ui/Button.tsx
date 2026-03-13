'use client'

type ButtonType = {
    label: string,
    onClick: () => void,
    type?: string
}
const Button = ({ label, onClick, type = "primary" }: ButtonType) => {
    return (
        <button onClick={onClick}
            className={`z-button ${type}`}>
            <span>{label}</span>
            <span>i</span>
        </button>
    )
}
export default Button
function Button({ text, onClick, type = "button" }) {
    return (
        <button
            type={type}
            className="custom-button"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
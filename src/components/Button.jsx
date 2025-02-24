function Button({text='Click Me' , onClick}){
    return (
        <button className="btn" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
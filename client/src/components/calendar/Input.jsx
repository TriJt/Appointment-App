const Input = ({ type = 'text', placeholder, name, onChange, value, children, ...props }) => {
    return (
        <div className="input">
            {(type == 'text' || type == 'datetime-local') &&
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...props}
                />}
            {
                type == 'select' && <select
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...props}
                >
                    {children}
                </select>
            }
            {
                type == 'textarea' && <textarea
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...props}>
                </textarea>
            }
            {props.error && <p className="error">{props.error}</p>}
        </div>
    )
}

export default Input;
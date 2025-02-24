function InputField({type='text', label='label', placeHolder='', value, onChange })
{
    return (
        <div className="inputField">
             <label htmlFor="">{label}</label>
             <input type={type}  value={value} onChange={e=> onChange(e.target.value)} placeholder={placeHolder}/>
        </div>
    )
}

export default InputField
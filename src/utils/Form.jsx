function Form({label,value, onChange }) {
    return (
        <div>
            <label >{label}</label>
            <input type="text" 
            
            value={value}
            onChange={onChange}/>
        </div>
    )
}

export default Form

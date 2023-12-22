


const Checkbox = ({label, value, onChange}) => {
    return (
        <label className="checkbox-label">
            
            <input 
            type="checkbox" 
            checked={value} 
            onChange={onChange} />

            <p className="label">{label}</p>
        </label>
    );
};

export default Checkbox;
const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Escribe algo aquí"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
    )
}

export default Input
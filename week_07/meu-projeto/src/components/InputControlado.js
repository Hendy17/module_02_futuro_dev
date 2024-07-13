import React, { useState } from 'react';

const InputControlado = () => {
    const [texto, setTexto] = useState('');

    const handleChange = (e) => {
        setTexto(e.target.value);
    };

    return (
        <div>
            <input type="text" value={texto} onChange={handleChange} />
            <p>Texto digitado: {texto}</p>
        </div>
    );
};

export default InputControlado;

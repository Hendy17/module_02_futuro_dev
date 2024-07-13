import React, { useState } from 'react';

const ListaInputs = () => {
    const [input, setInput] = useState('');
    const [lista, setLista] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        setLista([...lista, input]);
        setInput('');
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={handleClick}>Adicionar à Lista</button>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaInputs;

import React, { useState, useEffect } from 'react';

const FormularioValidado = () => {
    const [formulario, setFormulario] = useState({
        nome: '',
        email: '',
        idade: ''
    });

    const [formularioPreenchido, setFormularioPreenchido] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    useEffect(() => {
        const todosCamposPreenchidos = Object.values(formulario).every(value => value !== '');
        setFormularioPreenchido(todosCamposPreenchidos);
    }, [formulario]);

    return (
        <div>
            <form>
                <input type="text" name="nome" placeholder="Nome" value={formulario.nome} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formulario.email} onChange={handleChange} />
                <input type="number" name="idade" placeholder="Idade" value={formulario.idade} onChange={handleChange} />
            </form>
            {formularioPreenchido && <p>Formulário totalmente preenchido!</p>}
        </div>
    );
};

export default FormularioValidado;

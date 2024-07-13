import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoticiasIBGE = () => {
    const [titulo, setTitulo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=1');
            setTitulo(response.data.items[0].titulo);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Notícia de Destaque: {titulo}</h2>
        </div>
    );
};

export default NoticiasIBGE;

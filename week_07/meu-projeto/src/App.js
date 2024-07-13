import React from 'react';
import Contador from './components/Contador';
import NoticiasIBGE from './components/NoticiasIBGE';
import ListaInputs from './components/ListaInputs'; 
import FormularioValidado from './components/FormularioValidado';
import InputControlado from './components/InputControlado';
import styles from './styles.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <h1>Aplicativo React</h1>
            <Contador />
            <NoticiasIBGE />
            <ListaInputs />
            <FormularioValidado />
            <InputControlado />
        </div>
    );
};

export default App;

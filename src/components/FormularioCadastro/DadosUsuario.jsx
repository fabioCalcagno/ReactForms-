import React , { useState, useContext }from 'react';
import {TextField,Button }from '@material-ui/core';

import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario ({aoEnviar}){

    const validacoes = useContext(ValidacoesCadastro);
    const [ erros, validarCampos, possoEnviar ] = useErros(validacoes)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <form onSubmit={(event)=>{
            event.preventDefault()
            if(possoEnviar()){
                aoEnviar({email, password});
            }
           
            }}>

            <TextField 
            id="email" 
            name="email" 
            label="E-mail" 
            type="email" 
            value={email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={e=>{
                setEmail(e.target.value)
            }}
            />
            <TextField 
            id="passwd" 
            name="password" 
            label="Senha" 
            type="password" 
            value={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={!erros.password.valido}
            helperText={erros.password.texto}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            onBlur={(e)=>{
                validarCampos(e)
            }}

            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Cadastrar</Button>
        
        </form>
    );
}

export default DadosUsuario;
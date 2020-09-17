import React, {useState} from 'react';
import { TextField, Button} from '@material-ui/core';


function DadosEntrega({aoEnviar}) {

const [cep, setCep] = useState("");
const [endereco, setEndereco] = useState("");
const [numero, setNumero] = useState("");
const [cidade, setCidade] = useState("");
const [estado, setEstado] = useState("");

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            aoEnviar({cep, endereco, numero, cidade, estado});
            console.log(cep, endereco, numero, cidade, estado);
        }} >

            <TextField 
            id="cep"
            name="cep"
            value={cep}
            label="CEP"
            type="number"
            variant="outlined"
            margin="normal" 
            fullWidth
            onChange={e=>{
                setCep(e.target.value)
            }}
            />
            <TextField 
            id="endereco"
            name="endereco"
            value={endereco}
            label="Endereço"
            type="text"
            variant="outlined"
            margin="normal" 
            fullWidth
            onChange={e=>{
                setEndereco(e.target.value)
            }}
            />
            <TextField 
            id="numero"
            name="numero"
            value={numero}
            label="Numero"
            type="number"
            variant="outlined"
            margin="normal" 
            fullWidth
            onChange={e=>{
                setNumero(e.target.value)
            }}
            />
            <TextField 
            id="cidade"
            name="cidade"
            value={cidade}
            label="Cidade"
            type="text"
            variant="outlined"
            margin="normal" 
            fullWidth
            onChange={e=>{
                setCidade(e.target.value)
            }}
            />
            <TextField 
            id="estado"
            name="estado"
            value={estado}
            label="Estado"
            type="text"
            variant="outlined"
            margin="normal" 
            fullWidth
            onChange={e=>{
                setEstado(e.target.value)
            }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth >Cadastrar</Button>

        </form>
    );
}

export default DadosEntrega;
import React , {useState, useEffect} from "react";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography, Stepper, StepLabel,Step } from "@material-ui/core";


function FormularioCadastro({aoEnviar}) {

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [data, setData] = useState({});

  useEffect(()=>{
    if(etapaAtual === formularios.length-1){
      aoEnviar(data);
    }
  })

  const formularios = [
    <DadosUsuario  aoEnviar={getDados}/>,
    <DadosPessoais aoEnviar={getDados}/>,
    <DadosEntrega  aoEnviar={getDados}/>,
    <Typography variant="h5" >Obrigado pelo cadastro!</Typography>
  ];



  function getDados(dados){
    console.log(data,dados)
    setData({...data, ...dados});
    console.log(data,dados)
    nextStepForm();

    

  }

 function nextStepForm() {
   setEtapaAtual(etapaAtual+1)
 }

  return( <>
  <Stepper activeStep={etapaAtual} >
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Final</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>);
  

}

export default FormularioCadastro;

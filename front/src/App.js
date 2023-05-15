import {useState, useEffect} from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const pessoa = {
    id : 0,
    name : '',
    email : '',
    cpf : '',
    age : ''
  }

  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [pessoas, setPessoas] = useState([]);
  const [objPessoa, setObjPessoa] = useState(pessoa)

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setPessoas(retorno_convertido));
  },[])

  const paraDigitar = (e) => {
    setObjPessoa({...objPessoa, [e.target.name]:e.target.value});
  }
  
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar",{
      method:'post',
      body:JSON.stringify(objPessoa),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      console.log(retorno_convertido);
    })
  }


  return (
    <div>      
      <Formulario botao={btnCadastrar} eventoTeclado={paraDigitar} cadastrar={cadastrar}/>
      <Tabela vetor={pessoas} />
    </div>
  );
}

export default App;

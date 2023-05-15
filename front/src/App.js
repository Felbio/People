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
  // UseState
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
  //Cadastrar pessoa
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
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);        
      }else{
        setPessoas([...pessoas, retorno_convertido]);
        alert('Produto cadastrado com sucesso!');
        limpaFormulario();
      }
    })
  }

  //Limpar formulário
  const limpaFormulario = () => {
    setObjPessoa(pessoa);
    setBtnCadastrar(true);
  }

  //Selecionar pessoa
  const selecionarPessoa = (indice) => {
    setObjPessoa(pessoas[indice]);
    setBtnCadastrar(false);
  }

  //Retorno
  return (
    <div>      
      <Formulario botao={btnCadastrar} eventoTeclado={paraDigitar} cadastrar={cadastrar} obj={objPessoa} cancelar={limpaFormulario} />
      <Tabela vetor={pessoas} selecionar={selecionarPessoa} />
    </div>
  );
}

export default App;

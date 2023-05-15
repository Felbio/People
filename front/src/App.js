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

  //Remover
  const remover = () => {
    fetch("http://localhost:8080/remover/"+objPessoa.id,{
      method:'delete',
      
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      //Mensagem 
      alert(retorno_convertido.mensagem);

      //copia do vetor pessoa
      let vetorTemporario = [...pessoas];

      //Índice
      let indice = vetorTemporario.findIndex((p) =>{
        return p.id === objPessoa.id;
      });

      //Remover pessoa do vetorTemporário
      vetorTemporario.splice(indice, 1);

      //atualizar o vetor de Pessoas
      setPessoas(vetorTemporario);

      //Limpar formulário
      limpaFormulario();
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
      <Formulario botao={btnCadastrar} eventoTeclado={paraDigitar} cadastrar={cadastrar} obj={objPessoa} cancelar={limpaFormulario} remover={remover}/>
      <Tabela vetor={pessoas} selecionar={selecionarPessoa} />
    </div>
  );
}

export default App;

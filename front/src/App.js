import {useState, useEffect} from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const [btnInserir, setBtnInserir] = useState(true)
  const [pessoas, setPessoas] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setPessoas(retorno_convertido));
  },[])


  return (
    <div>      
      <Formulario botao={btnInserir} />
      <Tabela vetor={pessoas} />
    </div>
  );
}

export default App;

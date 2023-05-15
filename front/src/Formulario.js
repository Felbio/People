function Formulario({botao, eventoTeclado, cadastrar, obj}){
  return(
    <form>
      <input type='text' value={obj.name} onChange={eventoTeclado} name='name' placeholder='Nome' className='form-control'/>
      <input type='text' value={obj.email} onChange={eventoTeclado} name='email' placeholder='Email' className='form-control'/>
      <input type='text' value={obj.cpf} onChange={eventoTeclado} name='cpf' placeholder='CPF' className='form-control'/>
      <input type='text' value={obj.age} onChange={eventoTeclado} name='age' placeholder='Idade' className='form-control'/>
      {/* <input type='text' value={obj.address}onChange={eventoTeclado} name='address' placeholder='Endereço' className='form-control'/> */}

      {
        botao
        ?
        <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
        :
        <div>
          <input type='button' value='Alterar'  className='btn btn-warning' />
          <input type='button' value='Remover'  className='btn btn-danger' />
          <input type='button' value='Cancelar' className='btn btn-secondary' /> 
        </div>
      }      
    </form>
  )
}

export default Formulario;
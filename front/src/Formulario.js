function Formulario(){
  return(
    <form>
      <input type='text' placeholder='Nome' className='form-control' />
      <input type='text' placeholder='Email' className='form-control'/>
      <input type='text' placeholder='CPF' className='form-control'/>
      <input type='text' placeholder='Idade' className='form-control'/>
      <input type='text' placeholder='Endereço' className='form-control'/>

      <input type='text' value='Cadastrar' className='btn btn-primary'/>
      <input type='text' value='Alterar' className='btn btn-warning'/>
      <input type='text' value='Remover' className='btn btn-danger'/>
      <input type='text' value='Cancelar' className='btn btn-secondary'/>     

    </form>
  )
}

export default Formulario;
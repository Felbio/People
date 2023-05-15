function Tabela({vetor}){
  return(
      <table className='table'>
          <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Idade</th>                
                <th>Endereço</th>
                <th>Selecionar</th>                
              </tr>
          </thead>
          <tbody>
             {
                vetor.map((obj, indice) => (
                <tr key={indice}>
                  <td>{indice+1}</td>
                  <td>{obj.name}</td>
                  <td>{obj.email}</td>
                  <td>{obj.cpf}</td>
                  <td>{obj.age}</td>
                  <td></td>
                  <td></td>
                  <td><button className="btn btn-success">Selecionar</button></td>
                </tr>

                ))
             }
          </tbody>
      </table>
  )
}

export default Tabela
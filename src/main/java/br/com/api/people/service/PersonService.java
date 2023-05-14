package br.com.api.people.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.people.model.PersonModel;
import br.com.api.people.model.ResponseModel;
import br.com.api.people.repository.PersonRepository;

@Service
public class PersonService {

    @Autowired
    private PersonRepository pr;

    @Autowired
    private ResponseModel rm;

    public Iterable<PersonModel> listar(){
      return pr.findAll();
    }

    public ResponseEntity<?> cadastrar(PersonModel pm){
      if(pm.getCpf().equals("")){
        rm.setMensage("O CPF é Obrigatório!");
        return new ResponseEntity<ResponseModel>(rm,HttpStatus.BAD_REQUEST);        
      }else if(pm.getEmail().equals("")){
        rm.setMensage("O email é obrigatório");
        return new ResponseEntity<ResponseModel>(rm,HttpStatus.BAD_REQUEST); 
      }else{
        return new ResponseEntity<PersonModel>(pr.save(pm),HttpStatus.CREATED);
      }
    }
}

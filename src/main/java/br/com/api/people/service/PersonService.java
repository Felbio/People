package br.com.api.people.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.people.model.PersonModel;
import br.com.api.people.repository.PersonRepository;

@Service
public class PersonService {

    @Autowired
    private PersonRepository pr;

    public Iterable<PersonModel> listar(){
      return pr.findAll();
    }
}

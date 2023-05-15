package br.com.api.people.repository;

import org.springframework.data.repository.CrudRepository;
import br.com.api.people.model.PersonModel;


public interface PersonRepository extends CrudRepository<PersonModel, Long> {
  
}

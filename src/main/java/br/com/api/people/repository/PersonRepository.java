package br.com.api.people.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.people.model.PersonModel;

@Repository
public interface PersonRepository extends CrudRepository<PersonModel, Long> {
  
}

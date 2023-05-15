package br.com.api.people.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.api.people.model.AddressModel;

public interface AddressRepository extends CrudRepository<AddressModel, Long> {
  
}

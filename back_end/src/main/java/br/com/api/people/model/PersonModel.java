package br.com.api.people.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pessoas")
@Getter //recurso lombok
@Setter //recurso lombok



public class PersonModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String email;
  private String cpf;
  private Integer age;

  // @OneToMany(mappedBy = "person")
  // private List<AddressModel> address = new ArrayList<>();
  // // private Address address;
  
}

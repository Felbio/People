package br.com.api.people.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.people.model.PersonModel;
import br.com.api.people.service.PersonService;

@RestController
public class PersonController {

  @Autowired
  private PersonService ps;

  @GetMapping("/listar")
  public Iterable<PersonModel>listar(){
      return ps.listar();
  }
   
  @GetMapping("pessoas")
  public String route(){
    return "API de Pessoas funcionando";
   }

}

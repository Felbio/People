package br.com.api.people.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.people.model.PersonModel;
import br.com.api.people.service.PersonService;

@RestController
public class PersonController {

  @Autowired
  private PersonService ps;

  @PostMapping("/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody PersonModel pm){
    return ps.cadastrarAlterar(pm, "cadastrar");
  }

  @GetMapping("/listar")
  public Iterable<PersonModel>listar(){
      return ps.listar();
  }
   
  @GetMapping("pessoas")
  public String route(){
    return "API de Pessoas funcionando";
   }

}

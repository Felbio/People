package br.com.api.people.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.people.model.PersonModel;
import br.com.api.people.model.ResponseModel;
import br.com.api.people.service.PersonService;

@RestController
@CrossOrigin(origins = "*")
public class PersonController {

  @Autowired
  private PersonService ps;

  @DeleteMapping("/remover/{id}")
  public ResponseEntity<ResponseModel> remover(@PathVariable long id){
      return ps.remover(id);
  }

  @PutMapping("/alterar")
  public ResponseEntity<?> alterar(@RequestBody PersonModel pm){
    return ps.cadastrarAlterar(pm, "alterar");
  }

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

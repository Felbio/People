package br.com.api.people.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
   
  @GetMapping("pessoas")
  public String route(){
    return "API de Pessoas funcionando";
   }

}

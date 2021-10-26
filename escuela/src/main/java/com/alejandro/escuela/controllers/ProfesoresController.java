package com.alejandro.escuela.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.alejandro.escuela.entity.service.ProfesoresService;
import com.alejandro.escuela.entity.models.Profesores;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class ProfesoresController {
	
	@Autowired
	ProfesoresService profesoresService;
	
	@GetMapping("/profesores")
	public List<Profesores> getAllProfesores(){
		return profesoresService.getAll();
	}
	
	@GetMapping("/profesores/{idprofesores}")
	public Profesores getOne(@PathVariable(value = "idprofesores")long idprofesores) {
		return profesoresService.get(idprofesores);
	}
	
	@PostMapping("/profesores")
	public void post(Profesores profesores) {
		profesoresService.post(profesores);
	}
	
	@PutMapping("/profesores/{idprofesores}")
	public void put(Profesores profesores,  @PathVariable(value = "idprofesores")long idprofesores) {
		profesoresService.put(profesores, idprofesores);
	}
	
	@DeleteMapping("/profesores/{idprofesores}")
	public void delete(@PathVariable(value = "idprofesores")long idprofesores) {
		profesoresService.delete(idprofesores);
	}
}

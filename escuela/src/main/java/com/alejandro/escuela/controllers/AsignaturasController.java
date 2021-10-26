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

import com.alejandro.escuela.entity.models.Asignaturas;
import com.alejandro.escuela.entity.service.AsignaturasService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class AsignaturasController {
	
	@Autowired
	AsignaturasService asignaturasService;
	
	@GetMapping("/asignaturas")
	public List<Asignaturas> getAllAsignaturas(){
		return asignaturasService.getAll();
	}
	
	@GetMapping("/asignaturas/{idasignaturas}")
	public Asignaturas getOne(@PathVariable(value = "idasignaturas") long idasignaturas) {
		return asignaturasService.get(idasignaturas);
	}
	
	@PostMapping("/asignaturas")
	public void post(Asignaturas asignaturas) {
		asignaturasService.post(asignaturas);
	}
	
	@PutMapping("/asignaturas/{idasignaturas}")
	public void put(Asignaturas asignaturas, @PathVariable(value = "idasignaturas")long idasignaturas) {
		asignaturasService.put(asignaturas, idasignaturas);
	}
	
	@DeleteMapping("/asignaturas/{idasignaturas}")
	public void delete(@PathVariable(value = "idasignaturas")long idasignaturas) {
		asignaturasService.delete(idasignaturas);
	}
}

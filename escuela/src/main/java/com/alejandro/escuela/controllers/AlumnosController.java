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

import com.alejandro.escuela.entity.models.Alumnos;
import com.alejandro.escuela.entity.service.AlumnosService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class AlumnosController {
	
	@Autowired
	AlumnosService alumnosService;
	
	@GetMapping("/alumnos")
	public List<Alumnos> getAllAlumnos(){
		return alumnosService.getAll();
	}
	
	@GetMapping("/alumnos/{idalumnos}")
	public Alumnos getOne(@PathVariable(value = "idalumnos")long idalumnos) {
		return alumnosService.get(idalumnos);
	}
	
	@PostMapping("/alumnos")
	public void post(Alumnos alumnos) {
		alumnosService.post(alumnos);
	}
	
	@PutMapping("/alumnos/{idalumnos}")
	public void put(Alumnos alumno, @PathVariable(value = "idalumnos") long idalumnos) {
		alumnosService.put(alumno, idalumnos);
	}
	
	@DeleteMapping("/alumnos/{idalumnos}")
	public void delete(@PathVariable(value = "idalumnos") long idalumnos) {
		alumnosService.delete(idalumnos);
	}
}

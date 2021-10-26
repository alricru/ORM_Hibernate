package com.alejandro.escuela.entity.service;

import java.util.List;

import com.alejandro.escuela.entity.models.Profesores;

public interface ProfesoresService {
	public Profesores get(long idprofesores);
	public List<Profesores> getAll();
	public void post(Profesores profesores);
	public void put(Profesores profesores, long idprofesores);
	public void delete(long idprofesores);
}

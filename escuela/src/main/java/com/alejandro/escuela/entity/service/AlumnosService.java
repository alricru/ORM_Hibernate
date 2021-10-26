package com.alejandro.escuela.entity.service;

import java.util.List;

import com.alejandro.escuela.entity.models.Alumnos;

public interface AlumnosService {
	public Alumnos get(long idalumnos);
	public List<Alumnos> getAll();
	public void post(Alumnos alumnos);
	public void put(Alumnos alumnos, long idalumnos);
	public void delete(long idalumnos);

}

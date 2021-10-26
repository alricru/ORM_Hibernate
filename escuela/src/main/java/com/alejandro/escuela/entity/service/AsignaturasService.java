package com.alejandro.escuela.entity.service;

import java.util.List;

import com.alejandro.escuela.entity.models.Asignaturas;

public interface AsignaturasService {
	
	public Asignaturas get(long idasignaturas);
	public List<Asignaturas> getAll();
	public void post(Asignaturas asignaturas);
	public void put(Asignaturas asignaturas, long idasignaturas);
	public void delete(long idasignaturas);

}

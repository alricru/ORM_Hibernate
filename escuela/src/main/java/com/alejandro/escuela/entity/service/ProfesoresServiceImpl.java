package com.alejandro.escuela.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.escuela.entity.models.Profesores;
import com.alejandro.escuela.entity.dao.ProfesoresDao;

@Service
public class ProfesoresServiceImpl implements ProfesoresService{
	
	@Autowired
	private ProfesoresDao profesoresDao;

	@Override
	public Profesores get(long idprofesores) {
		return profesoresDao.findById(idprofesores).get();
	}

	@Override
	public List<Profesores> getAll() {
		return (List<Profesores>) profesoresDao.findAll();
	}

	@Override
	public void post(Profesores profesores) {
		profesoresDao.save(profesores);
		
	}

	@Override
	public void put(Profesores profesores, long idprofesores) {
		profesoresDao.findById(idprofesores).ifPresent((x)->{
			profesores.setIdprofesores(idprofesores);
			profesoresDao.save(profesores);
		});
		
	}

	@Override
	public void delete(long idprofesores) {
		profesoresDao.deleteById(idprofesores);
		
	}

}

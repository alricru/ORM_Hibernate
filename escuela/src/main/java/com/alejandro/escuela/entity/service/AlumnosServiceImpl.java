package com.alejandro.escuela.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.escuela.entity.dao.AlumnosDao;
import com.alejandro.escuela.entity.models.Alumnos;

@Service
public class AlumnosServiceImpl implements AlumnosService {
	
	@Autowired
	private AlumnosDao alumnosDao;
	
	@Override
	public Alumnos get(long idalumnos) {
		return alumnosDao.findById(idalumnos).get();
	}

	@Override
	public List<Alumnos> getAll() {
		return (List<Alumnos>) alumnosDao.findAll();
	}

	@Override
	public void post(Alumnos alumnos) {
		alumnosDao.save(alumnos);
	}

	@Override
	public void put(Alumnos alumnos, long idalumnos) {
		alumnosDao.findById(idalumnos).ifPresent((x)->{
			alumnos.setIdalumnos(idalumnos);
			alumnosDao.save(alumnos);
		});
	}

	@Override
	public void delete(long idalumnos) {
		alumnosDao.deleteById(idalumnos);
	}
}

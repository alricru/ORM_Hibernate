package com.alejandro.escuela.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.escuela.entity.dao.AsignaturasDao;
import com.alejandro.escuela.entity.dao.AlumnosDao;
import com.alejandro.escuela.entity.models.Asignaturas;

@Service
public class AsignaturasServiceImpl implements AsignaturasService{
	
	@Autowired
	private AsignaturasDao asignaturasDao;
	
	@Autowired
	private AlumnosDao alumnosDao;

	@Override
	public Asignaturas get(long idasignaturas) {
		return asignaturasDao.findById(idasignaturas).get();
	}

	@Override
	public List<Asignaturas> getAll() {
		return (List<Asignaturas>) asignaturasDao.findAll()
;	}

	@Override
	public void post(Asignaturas asignaturas) {
		asignaturasDao.save(asignaturas);
		
	}

	@Override
	public void put(Asignaturas asignaturas, long idasignaturas) {
		asignaturasDao.findById(idasignaturas).ifPresent((x)->{
			asignaturas.setIdasignaturas(idasignaturas);
			asignaturasDao.save(asignaturas);
		});
		
	}

	@Override
	public void delete(long idasignaturas) {
		asignaturasDao.deleteById(idasignaturas);
		
	}
	

}

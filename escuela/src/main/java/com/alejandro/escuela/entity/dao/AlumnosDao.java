package com.alejandro.escuela.entity.dao;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.alejandro.escuela.entity.models.Alumnos;

public interface AlumnosDao extends CrudRepository<Alumnos, Long>{
	

}

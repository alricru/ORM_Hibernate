package com.alejandro.escuela.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "profesores")
public class Profesores implements Serializable{

	public Profesores(long idprofesores, String nombre, String apellido) {
		super();
		this.idprofesores = idprofesores;
		this.nombre = nombre;
		this.apellido = apellido;
	}

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idprofesores;
	
	private String nombre;
	
	private String apellido;

	public long getIdprofesores() {
		return idprofesores;
	}

	public void setIdprofesores(long idprofesores) {
		this.idprofesores = idprofesores;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	
	public Profesores() {}
}

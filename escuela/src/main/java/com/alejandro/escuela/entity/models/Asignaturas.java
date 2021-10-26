package com.alejandro.escuela.entity.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "asignaturas")
public class Asignaturas implements Serializable {

	public Asignaturas(long idasignaturas, String nombre, int horas, int aula) {
		super();
		this.idasignaturas = idasignaturas;
		this.nombre = nombre;
		this.horas = horas;
		this.aula = aula;
	}

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idasignaturas;
	
	private String nombre;
	
	private int horas;
	
	private int aula;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "idprofesores", nullable = false)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	Profesores profesores;
	

	public Asignaturas() {}

	public long getIdasignaturas() {
		return idasignaturas;
	}

	public void setIdasignaturas(long idasignaturas) {
		this.idasignaturas = idasignaturas;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getHoras() {
		return horas;
	}

	public void setHoras(int horas) {
		this.horas = horas;
	}

	public int getAula() {
		return aula;
	}

	public void setAula(int aula) {
		this.aula = aula;
	}

	public Profesores getProfesores() {
		return profesores;
	}

	public void setProfesores(Profesores profesores) {
		this.profesores = profesores;
	}
	
}


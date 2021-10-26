package com.alejandro.escuela.entity.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "alumnos")
public class Alumnos implements Serializable{
	
	public Alumnos(long idalumnos, String nombre, String apellido) {
		super();
		this.idalumnos = idalumnos;
		this.nombre = nombre;
		this.apellido = apellido;
	}

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idalumnos;
	
	private String nombre;
	
	private String apellido;
	
	@ManyToMany
    @JoinTable(name = "alumnosasignaturas",
            joinColumns = @JoinColumn(name = "idalumnos"),
            inverseJoinColumns = @JoinColumn(name = "idasignaturas"))
    private Set<Asignaturas> AsignaturasDeAlumnos = new HashSet<>();

	public Set<Asignaturas> getAsignaturasDeAlumnos() {
		return AsignaturasDeAlumnos;
	}

	public void setAsignaturasDeAlumnos(Set<Asignaturas> asignaturasDeAlumnos) {
		AsignaturasDeAlumnos = asignaturasDeAlumnos;
	}

	public long getIdalumnos() {
		return idalumnos;
	}

	public void setIdalumnos(long idalumnos) {
		this.idalumnos = idalumnos;
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
	
	public Alumnos() {
		
	}
}

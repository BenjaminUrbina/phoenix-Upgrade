package cl.phoenix.phoenix.carrera;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "carrera")
public class Carrera {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "carrera_seq")
    @SequenceGenerator(name = "carrera_seq", sequenceName = "carrera_id_carrera_seq", allocationSize = 1)
    @Column(name = "id_carrera", nullable = false)
    private Integer idCarrera;

    @Column(name = "nombre", nullable = false, length = 100)
    @NotBlank @Size(max = 100)
    private String nombre;

    public Integer getIdCarrera() {
        return idCarrera;
    }

    public void setIdCarrera(Integer idCarrera) {
        this.idCarrera = idCarrera;
    }

    public @NotBlank @Size(max = 100) String getNombre() {
        return nombre;
    }

    public void setNombre(@NotBlank @Size(max = 100) String nombre) {
        this.nombre = nombre;
    }
}


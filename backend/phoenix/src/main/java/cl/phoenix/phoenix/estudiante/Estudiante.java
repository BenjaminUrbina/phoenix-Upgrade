package cl.phoenix.phoenix.estudiante;

import cl.phoenix.phoenix.carrera.Carrera;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(
        name = "estudiante",
        // refleja la unicidad de email (opcional, la BD ya lo impone)
        uniqueConstraints = @UniqueConstraint(name = "estudiante_email_key", columnNames = "email")
)
public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "estudiante_seq")
    @SequenceGenerator(
            name = "estudiante_seq",
            sequenceName = "estudiante_id_estudiante_seq",
            allocationSize = 1
    )
    @Column(name = "id_estudiante", nullable = false)
    private Integer idEstudiante;

    @Column(name = "nombre", nullable = false, length = 50)
    @NotBlank
    @Size(max = 50)
    private String nombre;

    @Column(name = "apellido_paterno", nullable = false, length = 50)
    @NotBlank @Size(max = 50)
    private String apellidoPaterno;

    @Column(name = "apellido_materno", nullable = false, length = 50)
    @NotBlank @Size(max = 50)
    private String apellidoMaterno;

    // Usamos unicode escape para la ñ: año_ingreso -> a\u00F1o_ingreso
    @Column(name = "a\u00F1o_ingreso", nullable = false)
    @Min(1900) // el máximo dinámico lo validamos en Service (año_actual + 1)
    private Integer anioIngreso;

    // FK -> carrera.id_carrera
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_carrera", nullable = false,
            foreignKey = @ForeignKey(name = "fk_estudiante_carrera"))
    private Carrera carrera;

    // Default en BD: CURRENT_TIMESTAMP. Dejamos que la BD lo ponga.
    @Column(name = "fecha_registro", insertable = false, updatable = false)
    private LocalDateTime fechaRegistro;

    @Column(name = "email", length = 100, unique = true)
    @Email
    @Size(max = 100)
    private String email;

    @Column(name = "telefono", length = 20)
    @Size(max = 20)
    private String telefono;

    // --- getters y setters ---

    public Integer getIdEstudiante() { return idEstudiante; }
    public void setIdEstudiante(Integer idEstudiante) { this.idEstudiante = idEstudiante; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getApellidoPaterno() { return apellidoPaterno; }
    public void setApellidoPaterno(String apellidoPaterno) { this.apellidoPaterno = apellidoPaterno; }

    public String getApellidoMaterno() { return apellidoMaterno; }
    public void setApellidoMaterno(String apellidoMaterno) { this.apellidoMaterno = apellidoMaterno; }

    public Integer getAnioIngreso() { return anioIngreso; }
    public void setAnioIngreso(Integer anioIngreso) { this.anioIngreso = anioIngreso; }

    public Carrera getCarrera() { return carrera; }
    public void setCarrera(Carrera carrera) { this.carrera = carrera; }

    public LocalDateTime getFechaRegistro() { return fechaRegistro; }
    public void setFechaRegistro(LocalDateTime fechaRegistro) { this.fechaRegistro = fechaRegistro; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    // equals/hashCode SOLO por id (cuando no es null)
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Estudiante)) return false;
        Estudiante that = (Estudiante) o;
        return idEstudiante != null && idEstudiante.equals(that.idEstudiante);
    }
    @Override
    public int hashCode() { return 31; }
}

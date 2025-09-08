package cl.phoenix.phoenix.estudiante.dto;

//clase inmutable y compacta que proporciona beneficios
// de seguridad y eficiencia a la hora de declarar simplemente grupos de campos.
public record EstudianteDTO (
    Integer id,
    String nombre,
    String apellidoPaterno,
    String apellidoMaterno,
    Integer anioIngreso,
    Integer idCarrera,
    String telefono
){}

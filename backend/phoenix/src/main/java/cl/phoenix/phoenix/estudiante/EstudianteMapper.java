package cl.phoenix.phoenix.estudiante;

import cl.phoenix.phoenix.estudiante.dto.EstudianteDTO;

final class EstudianteMapper {
    private EstudianteMapper(){}
    static EstudianteDTO toDTO(Estudiante e){
        return new EstudianteDTO(
                e.getIdEstudiante(),
                e.getNombre(),
                e.getApellidoPaterno(),
                e.getApellidoMaterno(),
                e.getAnioIngreso(),
                e.getCarrera() != null ? e.getCarrera().getIdCarrera() : null,
                e.getTelefono()
        );
    }
}

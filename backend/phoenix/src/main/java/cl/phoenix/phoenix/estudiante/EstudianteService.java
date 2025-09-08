package cl.phoenix.phoenix.estudiante;
import cl.phoenix.phoenix.estudiante.dto.EstudianteDTO;
import org.springframework.stereotype.Service;

@Service
public class EstudianteService {
    private final EstudianteRepository repo;

    public EstudianteService(EstudianteRepository repo) {
        this.repo = repo;
    }

    public EstudianteDTO obtenerPorId(Integer id) {
        var e = repo.findById(id)
                .orElseThrow(() -> new EstudianteNoEncontradoException("No existe estudiante con id " + id));
        return EstudianteMapper.toDTO(e);
    }

    public EstudianteDTO obtenerPorEmail(String email) {
        var e = repo.findByEmail(email)
                .orElseThrow(() -> new EstudianteNoEncontradoException("No existe estudiante con email " + email));
        return EstudianteMapper.toDTO(e);
    }
}

package cl.phoenix.phoenix.estudiante;
import cl.phoenix.phoenix.estudiante.dto.EstudianteDTO;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//Ruta donde se mapeara la pregunta
@RequestMapping("/api/estudiantes")
public class EstudianteController {
    // Final, referencia inmutable de EstudianteService
    private final EstudianteService service;

    public EstudianteController(EstudianteService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public EstudianteDTO getPorId(@PathVariable Integer id) {
        return service.obtenerPorId(id);
    }

    @GetMapping(params = "email")
    public EstudianteDTO getPorEmail(@RequestParam String email) {
        return service.obtenerPorEmail(email);
    }
}

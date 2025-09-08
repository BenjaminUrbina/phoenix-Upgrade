package cl.phoenix.phoenix.estudiante;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EstudianteRepository extends JpaRepository<Estudiante,Integer> {
    Optional<Estudiante> findByEmail(String email);
}

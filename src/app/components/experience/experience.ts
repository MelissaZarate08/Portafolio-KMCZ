import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  jobs = [
    {
      period: 'Enero 2024 — Presente',
      role: 'Full Stack Developer & UI/UX Designer',
      company: 'Freelance · Remoto · Tiempo completo',
      items: [
        'Liderazgo del proceso completo: requerimientos, arquitectura y documentación técnica.',
        'Diseño de interfaces modernas en Figma priorizando usabilidad y estética visual (UI/UX).',
        'Desarrollo de aplicaciones web responsivas con integración fluida Frontend ↔ Backend.',
        'Gestión de juntas con stakeholders asegurando estándares de calidad.'
      ]
    },
    {
      period: 'Marzo 2024 — Presente',
      role: 'Backend Developer — API Maintenance',
      company: 'Beblis · Google Play Store',
      items: [
        'Desarrollo y optimización de servicios para la API de una app en producción en Google Play Store.',
        'Mejoras en lógica del servidor y gestión de bases de datos escalables con Python y Firebase.',
        'Resolución de bugs y actualización de endpoints para mejorar rendimiento de la app móvil.'
      ]
    }
  ];
}
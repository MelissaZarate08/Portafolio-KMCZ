import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
  {
    icon: 'shield', badge: 'Web', name: 'Vigitech',
    desc: 'Sistema de seguridad para hogares con dashboard intuitivo y visualización de datos en tiempo real.',
    tags: ['React','CSS Moderno','Dashboard','IoT'],
    link: 'https://github.com/MelissaZarate08/VigiTech_Frontend'
  },
  {
    icon: 'flask', badge: 'Web', name: 'Vigitech LAB',
    desc: 'Sistema de seguridad especializado para laboratorios. Control de accesos y visualización de datos en tiempo real.',
    tags: ['React','Tiempo Real','UI/UX','Dashboard'],
    link: 'https://github.com/MelissaZarate08/VigiTechLab_Frontend'
  },
  {
    icon: 'gamepad', badge: 'Mobile', name: 'Mounsters',
    desc: 'Juego móvil estilo "Pokémon Go" en Kotlin. Usa sensores del dispositivo y GPS para interactuar con el mundo físico.',
    tags: ['Kotlin','GPS','Sensores','Android'],
    link: 'https://github.com/sayuzucha/Mounsters'
  },
  {
    icon: 'syringe', badge: 'Mobile', name: 'VaxSafe',
    desc: 'App móvil nativa para control y registro de vacunas. Enfocada en impacto social con UX clara y accesible.',
    tags: ['Kotlin','Android','Salud','UX'],
    link: 'https://github.com/MelissaZarate08/VaxSafe-Project1'
  },
  {
    icon: 'droplets', badge: 'Mobile', name: 'BloodBoond',
    desc: 'App móvil para gestión de donación de sangre. Conecta donadores con receptores.',
    tags: ['Kotlin','Android','Social','UX'],
    link: 'https://github.com/MelissaZarate08/BloodBoond-Project'
  },
  {
    icon: 'smartphone', badge: 'API', name: 'Beblis — Backend API',
    desc: 'Mantenimiento y desarrollo de servicios para la API de Beblis, app en producción en Google Play Store.',
    tags: ['Python','Firebase','REST API','Play Store'],
    link: 'https://github.com/DevGabriel23/beblis_backend'
  }
];

miniProjects = [
  {
    icon: 'palette', name: 'LandingPage-HappyToon',
    stack: 'HTML · CSS · JavaScript',
    link: 'https://github.com/MelissaZarate08/LandingPage-HappyToon'
  },
  {
    icon: 'image', name: 'LandingPage_Arte',
    stack: 'Angular · TypeScript · SCSS',
    link: 'https://github.com/MelissaZarate08/LandingPage_Arte'
  },
  { icon: 'building2', name: 'Arquitecturas UML',       stack: 'Draw.io · Documentación técnica', link: null },
  { icon: 'figma',     name: 'Diseños UI en Figma',     stack: 'Figma · Adobe Suite',             link: null },
  { icon: 'settings',  name: 'Scripts & Utilidades',    stack: 'Python · Bash / Linux',           link: null },
  { icon: 'database',  name: 'Modelos de BD',           stack: 'MySQL · PostgreSQL · MongoDB',    link: null }
];
}
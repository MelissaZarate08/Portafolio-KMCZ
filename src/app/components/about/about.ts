import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements AfterViewInit {
  skills = [
    { cat: 'Frontend & Diseño · Especialidad', items: [
      { name: 'React', pct: 93 }, { name: 'Angular', pct: 88 },
      { name: 'HTML5 / CSS3', pct: 95 }, { name: 'Figma / UI/UX', pct: 90 },
      { name: 'Tailwind / Bootstrap', pct: 88 }
    ]},
    { cat: 'Backend & Bases de Datos', items: [
      { name: 'Node.js / Express', pct: 80 }, { name: 'Python', pct: 78 },
      { name: 'MySQL / PostgreSQL', pct: 78 }, { name: 'MongoDB / Firebase', pct: 75 },
      { name: 'REST APIs', pct: 85 }
    ]},
    { cat: 'Herramientas & Cloud', items: [
      { name: 'AWS', pct: 72 }, { name: 'Docker / Git', pct: 75 },
      { name: 'Kotlin / Android', pct: 70 }
    ]}
  ];

  techTags = [
    'React','Angular','TypeScript','JavaScript ES6+','HTML5/CSS3','Tailwind',
    'Bootstrap','Figma','Adobe Suite','Node.js','Express','Python',
    'Java','C#','C++','MySQL','PostgreSQL','MongoDB','Firebase',
    'Docker','AWS','Git / GitHub','Kotlin','Bash/Linux','Draw.io (UML)','Scrum / Kanban'
  ];

  softSkills = [
    'Resolución creativa de problemas','Comunicación efectiva','Gestión del tiempo',
    'Liderazgo técnico','Trabajo en equipo','Pensamiento analítico',
    'Adaptabilidad','Atención al detalle'
  ];

  ngAfterViewInit() {
    const bars = document.querySelectorAll<HTMLElement>('.skill-bar-inner');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.width = el.getAttribute('data-w') + '%';
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => io.observe(b));
  }
}
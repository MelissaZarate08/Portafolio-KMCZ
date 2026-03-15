import { Component, OnInit } from '@angular/core';
import { NavComponent } from './components/nav/nav';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent, HeroComponent, AboutComponent,
    ExperienceComponent, ProjectsComponent,
    EducationComponent, ContactComponent, FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {  ngOnInit() {
    this.initScrollReveal();
  }

  initScrollReveal() {
    setTimeout(() => {
      const els = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      els.forEach(el => io.observe(el));
    }, 100);
  }
}
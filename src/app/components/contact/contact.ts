import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  links = [
  {
    icon: 'mail',
    label: 'Email',
    val: 'melissacorralzarate@gmail.com',
    href: 'mailto:melissacorralzarate@gmail.com'
  },
  {
    icon: 'github',
    label: 'GitHub',
    val: 'github.com/MelissaZarate08',
    href: 'https://github.com/MelissaZarate08'
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    val: 'linkedin.com/in/karla-melissa-corral',
    href: 'https://www.linkedin.com/in/karla-melissa-corral-z%C3%A1rate-274b5529b'
  },
  {
    icon: 'phone',
    label: 'Teléfono',
    val: '+52 967 164 5751',
    href: 'tel:+529671645751'
  }
];
}
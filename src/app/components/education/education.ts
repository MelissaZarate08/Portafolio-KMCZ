import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  certs = [
    { icon: 'cloud', name: 'AWS Cloud Architecting', by: 'Amazon Web Services', year: '2025' },
    { icon: 'bot', name: 'AWS Gen AI Foundations', by: 'Amazon Web Services', year: '2025' },
    { icon: 'wrench', name: 'AWS Developing', by: 'Amazon Web Services', year: '2024' },
    { icon: 'cloud', name: 'AWS Cloud Foundations', by: 'Amazon Web Services', year: '2023' },
    { icon: 'network', name: 'Networking Basics', by: 'Cisco Networking Academy', year: '2025' },
    { icon: 'monitor', name: 'OS Support', by: 'Cisco Networking Academy', year: '2025' },
    { icon: 'monitor', name: 'OS Basics', by: 'Cisco Networking Academy', year: '2025' }
  ];
}
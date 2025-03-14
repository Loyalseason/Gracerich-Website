import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  imports: [CommonModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  staffMembers = [
    {
      name: 'Richard Asante',
      position: 'Founder & CEO',
      image: 'images/bakerybackground.jpg'
    },
    {
      name: 'Grace Asante',
      position: 'COO',
      image: 'images/bakerybackground.jpg'
    },
    {
      name: 'Abigail Asante',
      position: 'Administrative Support',
      image: 'images/Abigail.jpg'
    },
    {
      name: 'David Okonkwo',
      position: 'Prodution Supervisor',
      image: 'images/bakerybackground.jpg'
    },
    {
      name: 'Emmanuel Asante',
      position: 'Technical Supervisor',
      image: 'images/bakerybackground.jpg'
    },
    {
      name: 'Emmanuel Asante',
      position: 'Technical Support',
      image: 'images/Emmanuel.jpg'
    }
  ];
}

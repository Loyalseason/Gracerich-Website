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
      position: 'Head Baker',
      image: 'images/bakerybackground.jpg'
    },
    {
      name: 'Abigail Asante',
      position: 'Operations Manager',
      image: 'images/bakerybackground.jpg'
    },
    {
      name: 'David Okonkwo',
      position: 'Sales & Marketing',
      image: 'images/bakerybackground.jpg'
    }
  ];
}

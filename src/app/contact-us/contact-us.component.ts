import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Implement form submission logic
      console.log(form.value);
      // Reset form after submission
      form.resetForm();
    }
  }
}
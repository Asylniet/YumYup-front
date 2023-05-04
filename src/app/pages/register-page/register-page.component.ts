import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  api = 'http://127.0.0.1:8000/user/register';
  form = new FormGroup({
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  })

  constructor(private authService: AuthService) {}

  onClick(): void {
    const {email, password} = this.form.value;
    this.authService.register(email!, password!).subscribe({
      next: data => {
        console.log(data);
      },
    });
  }
}

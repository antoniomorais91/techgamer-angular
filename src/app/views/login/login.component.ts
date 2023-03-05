import { Component } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;

  mudarlogin() {
    document.getElementById("section-signIn").style.display = "none";
    document.getElementById("section-signUp").style.display = "initial";
  }

}

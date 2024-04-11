import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
email: String | undefined;
contrase: any;
contrase2: any;
mostrardatos(){
  window.alert("Email" + this.email);
}
validarContra(){
  if(this.contrase === this.contrase2){
    window.alert("Bienvenidoo");
  
  }else{
    window.alert("Las contraseñas no coinciden");
  }
}

}

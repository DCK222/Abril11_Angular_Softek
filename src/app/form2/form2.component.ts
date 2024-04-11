import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
stock: any;
codigo: any;
precioCosto: any;
precioVenta: any;

validarStock(){
  if(this.stock <= 8){
    window.alert("El stock no es lo suficiente")
  }else{
    window.alert("Correcto !!\n" + "Codigo : " + this.codigo + "\n" + "Precio Costo : " + this.precioCosto + "\n" + 
    "Precio Venta : " + this.precioVenta + "\n" + 
    "Stock : " + this.stock);
  }
}

}

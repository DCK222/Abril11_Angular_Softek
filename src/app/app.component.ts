import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Ts01Component } from './ts01/ts01.component';
import { Angular01Component } from "./angular01/angular01.component";
import { Form1Component } from "./form1/form1.component";
import { Form2Component } from "./form2/form2.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Ts01Component, Angular01Component, Form1Component, Form2Component]
})
export class AppComponent {
  title = 'funcamentos';
}

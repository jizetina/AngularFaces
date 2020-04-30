import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  clase:string = "alert-info";
  danger = true;
  estilos = {
    peligro:false
  }
  loading = false;
  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService : UsuariosService) {
    
   }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  numeroUsuarios:number=10;
  usuarios:any[]=[];

  cargarUsuarios(){    
    this.usuariosService.obtenerUsuarios(this.numeroUsuarios)
    .subscribe((data:any) => {this.usuarios = data},(error) => console.error(error));
  }

  actualizar(numeroUsuarios:number)
  {
    this.numeroUsuarios = numeroUsuarios;
    this.cargarUsuarios();
    console.log(numeroUsuarios);
  }
}

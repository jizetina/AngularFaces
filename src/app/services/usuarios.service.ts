import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient : HttpClient) { }
  
  obtenerUsuarios(numeroUsuarios:number = 10){
      return this.getQuery(`?inc=name,dob,location,picture&results=${numeroUsuarios}`)
      .pipe(map(data => data['results']));      
  }

  getQuery(query:string){
    const URL = `https://randomuser.me/api${query}`;

    return this.httpClient.get(URL);
  }
}

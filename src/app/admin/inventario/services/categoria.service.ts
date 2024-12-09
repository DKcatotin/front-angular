import { Inject, inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  private baseUrl = environment.urlServidor
  private http=inject(HttpClient)

  funlistar(){
    return this.http.get(`${this.baseUrl}/categorias`)
  }
  funGuardar(registro:any){
    return this.http.post(`${this.baseUrl}/categoria`,registro)
  }
}

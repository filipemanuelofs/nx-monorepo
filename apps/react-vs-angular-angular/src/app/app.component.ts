import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { ESTADOS_ENDPOINT, UnidadeFederativa } from '@hypeit-brasil/ibge-api';


@Component({
  selector: 'hypeit-brasil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  estados: UnidadeFederativa[] = [];

  pesquisa = '';

  get estadosFiltrados() {
    return this.estados.filter(estado => estado.nome.includes(this.pesquisa))
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<UnidadeFederativa[]>(ESTADOS_ENDPOINT).subscribe({
      next: estados => {
        this.estados = estados
      }
    })

  }


}



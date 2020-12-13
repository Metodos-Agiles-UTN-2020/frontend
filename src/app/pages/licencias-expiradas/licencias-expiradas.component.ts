import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-licencias-expiradas',
  templateUrl: './licencias-expiradas.component.html',
  styleUrls: ['./licencias-expiradas.component.scss'],
})
export class LicenciasExpiradasComponent implements OnInit {
  public licencias: number[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get('/api/licencias?expirada=true').subscribe(
      (result) => {
        //this.licencias = result.body['pagina'];
        console.log(result.body);
        console.log(result.body['cantidadResultadosTotales']);
      },
      (error) => {
        switch (error.status) {
          case 403:
            console.log('FORBIDDEN');
            break;
          case 400:
            console.log('BAD REQUEST');
            break;
        }
      }
    );
  }

  getLicencias() {
    return this.licencias;
  }
}

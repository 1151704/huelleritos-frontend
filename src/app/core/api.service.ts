import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificacionService } from './notificacion.service';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, public notifService: NotificacionService, public utilService: UtilsService) {
  }

}

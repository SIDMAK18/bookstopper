import { Injectable } from '@angular/core';
import { FictionBook } from '../shared/models/ficbook';
import { ficBooks } from '../../ficdata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FIC_DATA_ID_URL, FIC_DATA_SEARCH_URL, FIC_DATA_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FicbookService {
  constructor(private http:HttpClient) { }

  getAll():Observable<FictionBook[]>{
    return this.http.get<FictionBook[]>(FIC_DATA_URL);
  }
  getAllFicBooksBySearchTerm(searchTerm:string){
    return this.http.get<FictionBook[]>(FIC_DATA_SEARCH_URL + searchTerm);
  }

  getFicbooksById(ficbookid:string):Observable<FictionBook>{
    return this.http.get<FictionBook>(FIC_DATA_ID_URL + ficbookid);
  }
}

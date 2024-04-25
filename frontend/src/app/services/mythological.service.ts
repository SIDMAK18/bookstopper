import { Injectable } from '@angular/core';
import { MythologicalBook } from '../shared/models/mytholobook';
import { mythoBooks } from '../../mythologydata';
import { HttpClient } from '@angular/common/http';
import { MYTHOLOGY_DATA_ID_URL, MYTHOLOGY_DATA_SEARCH_URL, MYTHOLOGY_DATA_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MythologicalService {

  constructor(private http:HttpClient) { }
  getAll():Observable<MythologicalBook[]>{
    return this.http.get<MythologicalBook[]>(MYTHOLOGY_DATA_URL);
  }
  getAllMythBooksBySearchTerm(searchTerm:string){
    return this.http.get<MythologicalBook[]>(MYTHOLOGY_DATA_SEARCH_URL + searchTerm);
  }

  getMythbooksById(mythbookid:string):Observable<MythologicalBook>{
    return this.http.get<MythologicalBook>(MYTHOLOGY_DATA_ID_URL + mythbookid);
  }
}

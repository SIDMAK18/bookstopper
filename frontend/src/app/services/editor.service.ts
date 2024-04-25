import { Injectable } from '@angular/core';
import { EditorsBook } from '../shared/models/edibook';
import { editBooks } from '../../editordata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EDITOR_DATA_ID_URL, EDITOR_DATA_SEARCH_URL, EDITOR_DATA_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http : HttpClient) { }
  getAll():Observable<EditorsBook[]>{
    return this.http.get<EditorsBook[]>(EDITOR_DATA_URL);
  }

  getAllEditBooksBySearchTerm(searchTerm:string){
    return this.http.get<EditorsBook[]>(EDITOR_DATA_SEARCH_URL + searchTerm);
  }

  getEditbooksById(editbookId:string):Observable<EditorsBook>{
    return this.http.get<EditorsBook>(EDITOR_DATA_ID_URL + editbookId);
  }
}

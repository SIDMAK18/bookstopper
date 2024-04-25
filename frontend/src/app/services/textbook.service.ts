import { Injectable } from '@angular/core';
import { Textbook } from '../shared/models/textbook';
import { textBooks } from '../../textbook';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TEXTBOOK_DATA_ID_URL, TEXTBOOK_DATA_SEARCH_URL, TEXTBOOK_DATA_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TextbookService {
  constructor(private http:HttpClient) { }

  getAll():Observable<Textbook[]>{
    return this.http.get<Textbook[]>(TEXTBOOK_DATA_URL);
  }

  getAllTextBooksBySearchTerm(searchTerm:string){
    return this.http.get<Textbook[]>(TEXTBOOK_DATA_SEARCH_URL + searchTerm);
  }

  getTextbooksById(textbookid:string):Observable<Textbook>{
    return this.http.get<Textbook>(TEXTBOOK_DATA_ID_URL + textbookid);
  }
}

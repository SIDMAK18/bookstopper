import { Injectable } from '@angular/core';
import { ChildrenBook } from '../shared/models/childbook';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CHILD_DATA_ID_URL, CHILD_DATA_SEARCH_URL, CHILD_DATA_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';
import { childBooks } from '../../childdata';

@Injectable({
  providedIn: 'root',
})
export class ChildrenService {

  constructor(private http : HttpClient) { }
  getAll():Observable<ChildrenBook[]>{
    return this.http.get<ChildrenBook[]>(CHILD_DATA_URL);
  }

  getAllChildBooksBySearchTerm(searchTerm:string){
    return this.http.get<ChildrenBook[]>(CHILD_DATA_SEARCH_URL+ searchTerm)
  }

  getChildbooksById(childbookId:string):Observable<ChildrenBook>{
    return this.http.get<ChildrenBook>(CHILD_DATA_ID_URL + childbookId);
  }
}

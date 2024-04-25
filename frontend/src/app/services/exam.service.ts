import { Injectable } from '@angular/core';
import { ExamBook } from '../shared/models/exambook';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EXAM_DATA_ID_URL, EXAM_DATA_SEARCH_URL, EXAM_DATA_URL } from '../shared/constants/urls';
import { examBooks } from '../../exambookdata';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }
  getAll():Observable<ExamBook[]>{
    return this.http.get<ExamBook[]>(EXAM_DATA_URL);
  }
  getAllExamBooksBySearchTerm(searchTerm:string){
    return this.http.get<ExamBook[]>(EXAM_DATA_SEARCH_URL + searchTerm);
  }

  getExambooksById(exambookid:string):Observable<ExamBook>{
    return this.http.get<ExamBook>(EXAM_DATA_ID_URL + exambookid);
  }
}

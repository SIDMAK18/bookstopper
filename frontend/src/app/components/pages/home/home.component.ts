import { Component } from '@angular/core';
import { FictionBook } from '../../../shared/models/ficbook';
import { FicbookService } from '../../../services/ficbook.service';
import { Textbook } from '../../../shared/models/textbook';
import { TextbookService } from '../../../services/textbook.service';
import { ChildrenBook } from '../../../shared/models/childbook';
import { ChildrenService } from '../../../services/children.service';
import { EditorsBook } from '../../../shared/models/edibook';
import { EditorService } from '../../../services/editor.service';
import { ExamBook } from '../../../shared/models/exambook';
import { ExamService } from '../../../services/exam.service';
import { MythologicalBook } from '../../../shared/models/mytholobook';
import { MythologicalService } from '../../../services/mythological.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { HeaderComponent } from '../../partials/header/header.component';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,SearchComponent,RouterModule,HeaderComponent,NgIf,HttpClientModule,NotfoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ficbooks:FictionBook[] = [];
  textbooks:Textbook[] = [];
  childrenbooks:ChildrenBook[] = [];
  editorsbooks:EditorsBook[] = [];
  exambooks:ExamBook[] = [];
  mythologicalbooks:MythologicalBook[] = [];
  constructor(private ficbookService: FicbookService,private textbookService: TextbookService,private childrenService: ChildrenService,private editorService: EditorService,private examService: ExamService,private mythologicalService: MythologicalService,activatedRoute:ActivatedRoute) {
    let childbookObservable :Observable<ChildrenBook[]>;
    let textbookObservable :Observable<Textbook[]>;
    let ficbookObservable :Observable<FictionBook[]>;
    let editorObservable :Observable<EditorsBook[]>;
    let examObservable :Observable<ExamBook[]>;
    let mythologicalObservable :Observable<MythologicalBook[]>;
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']){
        ficbookObservable = this.ficbookService.getAllFicBooksBySearchTerm(params['searchTerm']);
        textbookObservable = textbookService.getAllTextBooksBySearchTerm(params['searchTerm']);
        childbookObservable = childrenService.getAllChildBooksBySearchTerm(params['searchTerm']);
        editorObservable = editorService.getAllEditBooksBySearchTerm(params['searchTerm']);
        examObservable = examService.getAllExamBooksBySearchTerm(params['searchTerm']);
        mythologicalObservable = mythologicalService.getAllMythBooksBySearchTerm(params['searchTerm']);
      }
    else{
      ficbookObservable = ficbookService.getAll();
      textbookObservable = textbookService.getAll();
      childbookObservable = childrenService.getAll();
      editorObservable = editorService.getAll();
      examObservable = examService.getAll();
      mythologicalObservable = mythologicalService.getAll();
    }
    childbookObservable.subscribe((childbooks) => {
      this.childrenbooks = childbooks;
    });
    examObservable.subscribe((exambooks) => {
      this.exambooks = exambooks;
    });
    ficbookObservable.subscribe((ficbooks) => {
      this.ficbooks = ficbooks;
    });
    textbookObservable.subscribe((textbooks) => {
      this.textbooks = textbooks;
    }); 
    editorObservable.subscribe((editorsbooks) => {
      this.editorsbooks = editorsbooks;
    }); 
    mythologicalObservable.subscribe((mythologicalbooks) => {
      this.mythologicalbooks = mythologicalbooks; 
    });
});
}
}


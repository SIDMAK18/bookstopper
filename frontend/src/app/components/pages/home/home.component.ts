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
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,CommonModule,RouterModule,HeaderComponent,NgIf,HttpClientModule,NotfoundComponent,NgImageSliderModule],
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

imageObject = [{
  image: 'https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-world-book-day-celebration_23-2150230804.jpg?t=st=1714366101~exp=1714369701~hmac=4377f58fd9c3a6d1b9b761391a73ef103505c00c91bc5032a1988c65f9bc91af&w=1380',
  thumbImage: 'https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-world-book-day-celebration_23-2150230804.jpg?t=st=1714366101~exp=1714369701~hmac=4377f58fd9c3a6d1b9b761391a73ef103505c00c91bc5032a1988c65f9bc91af&w=1380',
}, {
  image: 'https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150181295.jpg?w=1380&t=st=1714360647~exp=1714361247~hmac=991f3272347165847a2b5d5bb42ceac23cbc159d6e53bf8f797db64d79851bb3',
  thumbImage: 'https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150181295.jpg?w=1380&t=st=1714360647~exp=1714361247~hmac=991f3272347165847a2b5d5bb42ceac23cbc159d6e53bf8f797db64d79851bb3'
}, {
  image: 'https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150226036.jpg?t=st=1714366066~exp=1714369666~hmac=6dc0337041bd3574ee48879b1f95453bb5b797ecc93f96b574605ecbdf6b93e2&w=1380',
  thumbImage: 'https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150226036.jpg?t=st=1714366066~exp=1714369666~hmac=6dc0337041bd3574ee48879b1f95453bb5b797ecc93f96b574605ecbdf6b93e2&w=1380',
},{
  image: 'https://img.freepik.com/free-vector/literature-book-club-sale-banner-template_23-2149715783.jpg?t=st=1714366205~exp=1714369805~hmac=ebea2f59e644c0c413f83fdfd9189289933f38d81398a7b5649ac11695e51b1f&w=1380',
  thumbImage: 'https://img.freepik.com/free-vector/literature-book-club-sale-banner-template_23-2149715783.jpg?t=st=1714366205~exp=1714369805~hmac=ebea2f59e644c0c413f83fdfd9189289933f38d81398a7b5649ac11695e51b1f&w=1380',
}];
}


import { Component, Input, OnChanges, OnInit, SimpleChanges, ɵɵNgOnChangesFeature } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NgIf,NgFor } from '@angular/common';
const VALIDATORS_MESSAGES:any={
  required:'Should not be empty',
  email:'Invalid email',
  minlength:'Should be at least 5 characters',
  notMatch:'Passwords do not match'
}
@Component({
  selector: 'input-validation',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input()
  control!:AbstractControl;
@Input()
showErrorsWhen:boolean=true;
errorMessages:string[]=[];

ngOnChanges(changes:SimpleChanges):void{
  this.checkValidation();
}

ngOnInit():void{
  this.control.statusChanges.subscribe(()=>{
    this.checkValidation();
  });
  this.control.valueChanges.subscribe(()=>{
    this.checkValidation();
});
}
checkValidation(){
  const errors=this.control.errors;
  if(!errors){
    this.errorMessages=[];
    return;
  }
  const errorKeys=Object.keys(errors);
  this.errorMessages=errorKeys.map(key=>VALIDATORS_MESSAGES[key]);
}
}

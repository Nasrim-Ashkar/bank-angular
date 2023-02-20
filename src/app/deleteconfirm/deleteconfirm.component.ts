import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {
  @Input()  item:String|undefined//parennt to child decorator @input
  
  //event creation
  @Output() oncancel=new EventEmitter//child to parent
  constructor(){}
  ngOnInit():void{

}
 onCancel(){

  //start event
  this.oncancel.emit()
 }
}

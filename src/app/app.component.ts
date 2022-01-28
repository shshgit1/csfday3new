import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { todoObject } from './todoObject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3new';

  groupedform:FormGroup;

  taskn:string="";
  dued:string="";
  prioritylvl="";
  idnum:number =0;
  todomap=new Map();

  priority = ["low", "medium", "high"];

  constructor(private fb:FormBuilder){
      this.groupedform=this.fb.group({
      taskname:new FormControl(),
      dueDate:new FormControl(),
      prioritylevel:new FormControl(),
      //idid:new FormControl()
    })
  }

  onsubmit():void{

    this.taskn=this.groupedform.value.taskname;
    this.dued=this.groupedform.value.dueDate;
    this.prioritylvl=this.groupedform.value.prioritylevel;
    this.idnum=this.idnum+1;
    //this.idnum=this.groupedform.value.idid;

    let todoagenda=new todoObject(
      this.groupedform.value.taskname,
      this.groupedform.value.dueDate,
      this.groupedform.value.prioritylevel,
      //this.groupedform.value.idid
      this.idnum
    );

    this.todomap.set(this.idnum,todoagenda);
    console.log("map is "+this.todomap.get(1).taskname)
  }

  onremove(idid:number):void{
    this.todomap.delete(idid);

  }
}

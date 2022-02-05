import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { todoObject } from './todoObject';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3new';
  today=new Date;

  groupedform:FormGroup;

  taskn:string="";
  dued:Date=new Date;
  prioritylvl="";
  idnum:number =0;
  todomap=new Map();

  priority = ["low", "medium", "high"];

      taskname=new FormControl('',[Validators.required]);
      dueDate=new FormControl('',[Validators.required]);
      prioritylevel=new FormControl('',[Validators.required]);

  constructor(private fb:FormBuilder){

    /*  this.groupedform=this.fb.group({
      taskname:new FormControl(),
      dueDate:new FormControl([Validators.required]),
      prioritylevel:new FormControl(),

    }
    ) */
    this.groupedform=this.fb.group({
      taskname:this.taskname,
      dueDate:this.dueDate,
      prioritylevel:this.prioritylevel
    })
  }

  onsubmit():void{
    this.dued=this.groupedform.value.dueDate;
    if (this.groupedform.value.dueDate<this.today){
      console.log("fail, date is wrong");
    } //end if
    else{
    this.taskn=this.groupedform.value.taskname;

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
    }//end else
  }

  onremove(idid:number):void{
    this.todomap.delete(idid);

  }
}

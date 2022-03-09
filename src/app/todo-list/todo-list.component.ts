import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  inputField = ""
  disable = true
  todolist = [""]
  temp = false
  inputvalue= ""
  tem = false
  list=[""]
  msg:string=""
message:string="vishnu"
b:boolean=false
myEvent(){
  this.b= true;
}


  ngOnInit(): void {
  }

  submit(){
    this.temp = true
    this.todolist.push(this.inputField)
    console.log(this.todolist)

  }

    constructor() {}

    sumit(){
      this.tem = true
      this.list.push(this.inputvalue)
      console.log(this.list)
    }


  onKey(event:any){
    if(this.inputField !== ''){
      this.disable = false
    }
    else{
      this.disable = true
    }
  }

  remove(li:any){
    this.todolist.splice(1)


}

}

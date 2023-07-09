import { Component, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoArray:string[] = [
    "Clean house",
    "Feed Cat",
    "Hire Mika Vee"
  ]

  newTodo:string= '';
  

  // just for debugging and testing
 indexNumber: number = 0;
  


  addNew(){
    
    // just for debugging and testing
    this.indexNumber = this.todoArray.length + 1;
    console.log("Array Index Number: " + this.indexNumber);
    // Testing code ended, go ahead...
    if(this.newTodo){
      this.todoArray.push(this.newTodo);
      this.newTodo= '';
    }
    
  }

  onDelete(i:number){
    this.todoArray.splice(i, 1);
  }
  


}

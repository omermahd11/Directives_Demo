import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from '../../User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives Example 1';
 
  newItem = ""

  items : string[] = ["Item 1", "Item 2"]

  addItem(){

    this.items.push(this.newItem)
  }

  getColor(item : string){

    if(item == "Item 1" || item == "item 2"){

      return "red"
    } else {

      return 'blue'
    }
  }
  

  names = ["Tim" , "Jane" , "Reem" , "Mark"]


  applyClass( name :string): boolean {

    if (name == "Tim"){
      return true; 
    }else{
      return false;
    }
  }


  users :User[] = [ new User(100, "Jane" , 25) ,  new User(200, "Reem" , 20),  new User(300, "Tim" , 22)]
}


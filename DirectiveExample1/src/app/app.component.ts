import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives Example 1';
 
  newItem = ""

  items = [" Item 1", "Item 2" , "Item 3", "Item 4"]

  addItem(){

    this.items.push(this.newItem)
  }

  
}

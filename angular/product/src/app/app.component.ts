import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template : `<h3 [style.color] = 'color'>{{name}}</h3>
  <input [value] = 'name'>
  <input [value] = 'name' #storeval (input) = 'name = storeval.value' >
  <input [value] = 'name' (input) = 'name = $event.target.value' >
  <input [value] = 'name' (keyup) = 'name = $event.target.value' >
  <input [value] = 'name' (keyup.enter) = 'name = $event.target.value' 
                          (blur) = 'name = $event.target.value' >
  <input [(ngModel)] = 'name'>
  <select (change)= 'Choosecolor($event.target.value)'>
    <option>red </option>
    <option>Blue </option>
    <option>Orange </option>
  </select>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name  = 'Ravi';
  color = 'red';
  Choosecolor(e ) {
    this.color = e;
  }
}

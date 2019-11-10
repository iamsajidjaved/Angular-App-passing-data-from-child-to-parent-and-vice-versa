import { TestService } from './../test.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "[app-test]",
  template: `
  {{title}}
  {{__serviceError}}
  <ul *ngFor="let employee of _serviceEmployees">
    <li>{{employee.name}}-{{employee.age}}-{{employee.country}}</li>
  </ul>
  <button (click)="FireEvent()">FIRE EVENT</button>
    <div *ngFor='let color of colors; index as i'>
      <p>{{i}}-{{color}}</p>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  constructor(private _testService: TestService) {}

  ngOnInit() {
    this._testService.getTestData().subscribe(
      data =>this._serviceEmployees = data,
      error=>this.__serviceError=error
    );
  }
  public _serviceEmployees;
  public __serviceError;

  @Input('parentData') public title;
  @Output() public childEvent=new EventEmitter()
  public colors= ['blue', 'red', 'green', 'yellow'];

  FireEvent(){
    this.childEvent.emit('Data from Parent');
    alert('pak');
  }

}

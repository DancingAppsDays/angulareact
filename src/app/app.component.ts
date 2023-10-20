import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as ReactDOM from 'react-dom';
import MyReact from './ReactComponent';
import * as React from 'react';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges,AfterViewInit,OnDestroy{
  title = 'angulareact';

  public rootId ='rootId'   //should be private but cant?

  ngOnChanges(changes: SimpleChanges){
    this.render();
  }
  ngOnDestroy(): void {
      
  }
  ngAfterViewInit(): void {
      this.render();
  }

  private render(){
    ReactDOM.render(React.createElement(MyReact),document.getElementById(this.rootId))
  }
}
//manage rendering of react

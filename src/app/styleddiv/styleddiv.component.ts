import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleddiv',
  templateUrl: './styleddiv.component.html',
  styleUrls: ['./styleddiv.component.scss']
})
export class StyleddivComponent implements OnInit,AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    const ele = document.getElementById('styledDiv');
    if(ele){
      ele.textContent = 'Testing Styled Div'
    }
  }

  ngOnInit(): void {
    
  }

}

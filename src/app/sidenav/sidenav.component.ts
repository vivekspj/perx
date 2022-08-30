import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StyleddivComponent } from '../styleddiv/styleddiv.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    isComponent : boolean = false;
    isStyled : boolean = false;
  

  constructor(private breakpointObserver: BreakpointObserver,private route : ActivatedRoute) {
  }

  click(ele : HTMLAnchorElement){
    this.isComponent = false;
    this.isStyled = true;
  }

}

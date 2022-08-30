import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { dash } from '../dashboard.interface';
import { DashtableDataSource } from './dashtable-datasource';

@Component({
  selector: 'app-dashtable',
  templateUrl: './dashtable.component.html',
  styleUrls: ['./dashtable.component.scss']
})
export class DashtableComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<dash>;

  displayedColumns: string[] = ['id', 'type', 'content', 'createdAt','updatedAt'];
  myData: dash[] = [];
  dataSource = new MatTableDataSource<dash>(this.myData);

  constructor(private client : HttpClient) {
   
  }
  ngOnInit(): void {
    this.getJSON().subscribe((data : any) => {
      for(let item of data.data){
        this.myData.push({
          id:item.id,
          type:item.type,
          createdAt:item.attributes['created_at'],
          updatedAt:item.attributes['created_at'],
          content:item.attributes['content'],
          authorsSelf:item.relationships['authors']['links']['self'],
          authorsRelated:item.relationships['authors']['links']['related'],
          publishersSelf:item.relationships['publishers']['links']['self'],
          publishersRelated:item.relationships['publishers']['links']['related']
        });
      }
      this.dataSource.data = this.myData;
      this.dataSource.sort = this.sort;
    });
  }

  public getJSON(): Observable<any> {
    return this.client.get("./assets/example.json");
  }

  applyFilter(ele : HTMLInputElement){
    this.dataSource.filter = ele.value;
  }

}

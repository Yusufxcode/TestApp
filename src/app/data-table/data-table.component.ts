import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'email', 'phone_number'];
  dataSource: any[] = [];
  pageSize = 10;
  currentPage = 1;
  totalItems = 0;

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiservice.getData(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.dataSource = data;
      this.totalItems = data.length;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
  
}

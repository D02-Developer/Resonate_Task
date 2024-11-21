import { Component, OnInit } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonService } from './common.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Contact Application';
  
  contactData: any;
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'username', 'website', 'address', 'company'];
  dataSource = new MatTableDataSource();

  constructor(private CommonService: CommonService) { }

  ngOnInit(): void {
    this.CommonService.getUsers().subscribe((result) => {
      this.contactData = result;
      this.dataSource = new MatTableDataSource(this.contactData);
      console.log(this.contactData);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ViewService } from '../view.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  constructor(private view: ViewService, private http: HttpClient) { }
  itemss: any;

  ngOnInit(): void {
    this.http.get("http://localhost:8080/payroll").subscribe(
      (Response) => { this.itemss = Response },
      (error) => { console.log(error); }
    );
    console.log(this.itemss);
  }


  update(n: number) {
    this.view.index[0] = n;
  }

  del(a: number) {
    const params = new HttpParams().set("id", a);
    this.http.delete("http://localhost:8080/payroll", { params }).subscribe(
      (Response) => { console.log(Response) },
      (error) => { console.log(error); }
    );
    window.alert("Employee Details Deleted Successfully");
    window.location.reload();
  }

}

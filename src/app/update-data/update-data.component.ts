import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ViewService } from '../view.service';


@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  constructor(private service: ViewService, private http: HttpClient) { }
  dataform: any;
  number: any;
  ngOnInit(): void {

    this.dataform = new FormGroup({
      // id: new FormControl(),
      name: new FormControl(""),
      age: new FormControl(""),
      gender: new FormControl(""),
      roles: new FormControl("")

    })
    this.number=this.service.index[0];
    this.http.get("http://localhost:8080/payroll/" + this.number).subscribe(
      (Response) => { 
        this.service.items.push(Response) ;
        this.setData();
      },
       (error) => { 
        console.log(error); 
      });
  }
  
  setData() {
    this.dataform.setValue({
      name: this.service.items[0].name,
      age: this.service.items[0].age,
      gender: this.service.items[0].gender,
      roles: this.service.items[0].roles
    })
    console.log(this.service.items);
    
  }

  share() {
    this.number = this.service.index[0];
    const params = new HttpParams().set("id", this.number);
    this.http.put("http://localhost:8080/payroll", this.dataform.value, { params }).subscribe(
      (Response) => { console.log(Response) },
      (error) => { console.log(error); }
    );
    window.alert('Employee Details Updated');
  }
}


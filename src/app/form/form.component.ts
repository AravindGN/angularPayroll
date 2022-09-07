import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ViewService } from '../view.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service: ViewService,private http: HttpClient) { }
  dataform: any;
  ngOnInit(): void {
    this.dataform = new FormGroup({
      // id: new FormControl(),
      name: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      roles: new FormControl()

    })
    
  }

  share() {
    console.log(this.dataform.value);
    // this.service.items.push(this.dataform.value) ;
    this.http.post('http://localhost:8080/payroll', this.dataform.value).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  window.alert('Employee Details Added');
  }
  

}

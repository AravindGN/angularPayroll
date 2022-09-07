import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private httpClient: HttpClient) { }
 items: any =[];
 index:any=[];

}

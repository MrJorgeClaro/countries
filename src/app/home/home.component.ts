import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../userResponse';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Countries';
  results= '';

  @Input()
  searchTerm: String; 

  constructor(private restService: RestService) {}

  
  displayData : UserResponse[] = [];

  ngOnInit(): void {
    this.restService.getData()
    .subscribe(data => {
      this.displayData = data;

    });
  }


}

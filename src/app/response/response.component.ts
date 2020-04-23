import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  finalAnswer: string;
  
  
  constructor(private route :ActivatedRoute) { }
 

  ngOnInit() {
    this.finalAnswer = this.route.snapshot.paramMap.get('answer');
    console.log("Got token from link " + this.finalAnswer);
  }

}

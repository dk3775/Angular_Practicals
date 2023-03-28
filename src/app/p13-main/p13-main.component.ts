import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-p13-main',
  templateUrl: './p13-main.component.html',
  styleUrls: ['./p13-main.component.css']
})
export class P13MainComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {
		// API Call
		let headers = new HttpHeaders({
			'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
			'x-rapidapi-key': '9d8888a88amsha2dc8128aafbe29p121216jsnf98e78e474ff'
		});
		this.http.get<any>('https://streaming-availability.p.rapidapi.com/v2/search/title?title=rings&country=us&show_type=movie&output_language=en', { headers: headers })
		.subscribe(data => {
				console.log(data);
			});
	}
}

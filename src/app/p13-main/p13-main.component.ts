import { Component } from '@angular/core';
import axios from 'axios';

@Component({
	selector: 'app-p13-main',
	templateUrl: './p13-main.component.html',
	styleUrls: ['./p13-main.component.css'],
})
export class P13MainComponent {
	action = false;
	horror = false;
	comedy = false;
	thriller = false;
	romance = false;

	recmovies = new Array<Movie>();
	
	search() {
		this.recmovies = [];

		if(this.action){
			this.recmovies.push(new Movie('John Wick 1', 'Action'));
			this.recmovies.push(new Movie('John Wick 2', 'Action'));
			this.recmovies.push(new Movie('John Wick 3', 'Action'));
		}

		if(this.horror){
			this.recmovies.push(new Movie('The Conjuring', 'Horror'));
			this.recmovies.push(new Movie('The Conjuring 2', 'Horror'));
			this.recmovies.push(new Movie('The Conjuring 3', 'Horror'));
		}

		if(this.comedy){
			this.recmovies.push(new Movie('The Hangover', 'Comedy'));
			this.recmovies.push(new Movie('The Hangover 2', 'Comedy'));
			this.recmovies.push(new Movie('The Hangover 3', 'Comedy'));
		}

		if(this.thriller){
			this.recmovies.push(new Movie('The Silence of the Lambs', 'Thriller'));
			this.recmovies.push(new Movie('The Silence of the Lambs 2', 'Thriller'));
			this.recmovies.push(new Movie('The Silence of the Lambs 3', 'Thriller'));
		}

		if(this.romance){
			this.recmovies.push(new Movie('The Notebook', 'Romance'));
			this.recmovies.push(new Movie('The Notebook 2', 'Romance'));
			this.recmovies.push(new Movie('The Notebook 3', 'Romance'));
		}
	}

	doDisplay() {
		if(this.recmovies.length > 0){
			return true;
		}
		return false;
	}

}

class Movie {
	constructor(
		public title: string,
		public genre: string,
	) {
		this.title = title;
		this.genre = genre;
	}
	getCard(){
		let card = '<div class="card my-1" style="width: 18rem; "><div class="card-body"><h5 class="card-title" >';
		card=card.concat(this.title);
		card =card.concat('</h5><p class="card-text" >');
		card =card.concat(this.genre);
		card =card.concat('</p></div></div>');
		return card;
	}
	card = this.getCard();
}

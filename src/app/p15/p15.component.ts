import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-p15',
  templateUrl: './p15.component.html',
  styleUrls: ['./p15.component.css']
})
export class P15Component {
  obs1 = new Observable((observer) => {
    console.log('Observable is created!');
    let count = 0;
  
    
    setInterval(() => {
      observer.next(count);
      count++;
      if (count == 5) {
        observer.complete();
      }
      if (count > 5) {
        observer.error(new Error('Count is greater than 5!'));
      }
    });

  });

  ngOnInit() {
    // Subscribe to the observable
  this.obs1.subscribe({
    next: (nextValue) => console.log(nextValue),
    error: (error) => console.error(error),
    complete: () => console.log('Complete')
  });
  }
}

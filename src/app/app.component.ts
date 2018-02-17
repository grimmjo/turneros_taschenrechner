import {Component, EventEmitter, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  matrix: number[][] = new Array(4);

  results: Subject<number[][]>;

  ngOnInit(): void {
    for (let i = 0; i < this.matrix.length; i++) {
      this.matrix[i] = new Array(6);
    }
    this.results = new Subject<number[][]>();
  }

  reset(): void {
    this.matrix = new Array<number[]>(4);
    for (let i = 0; i < this.matrix.length; i++) {
      this.matrix[i] = new Array<number>(6);
    }
    this.results.next();
  }

  calculate(): void {
    console.log('Start calculating:');
    const sums: number[][] = [];
    for (let i = 0; i < this.matrix[0].length; i++) {
      if (this.matrix[0][i] === undefined || !this.matrix[0][i]) {
        continue;
      }
      for (let j = 0; j < this.matrix[1].length; j++) {
        if (this.matrix[1][j] === undefined || !this.matrix[1][j]) {
          continue;
        }
        for (let k = 0; k < this.matrix[2].length; k++) {
          if (this.matrix[2][k] === undefined || !this.matrix[2][k]) {
            continue;
          }
          for (let l = 0; l < this.matrix[3].length; l++) {
            if (this.matrix[3][l] === undefined || !this.matrix[3][l]) {
              continue;
            }
            const sum = this.matrix[0][i] + this.matrix[1][j] + this.matrix[2][k] + this.matrix[3][l];
            console.log(sum);
            const numbers: number[] = [];
            numbers.push(this.matrix[0][i]);
            numbers.push(this.matrix[1][j]);
            numbers.push(this.matrix[2][k]);
            numbers.push(this.matrix[3][l]);
            numbers.push(sum);
            sums.push(numbers);
            sums.sort((n1, n2) => n1[4] - n2[4]);
            this.results.next(sums);
          }
        }
      }
    }
  }
}

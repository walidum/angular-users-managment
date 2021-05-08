import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-demo-animation',
  templateUrl: './demo-animation.component.html',
  styleUrls: ['./demo-animation.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      state('end', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'blue'
      })),
      transition('open -> closed', [
        animate('1s')
      ]),
      transition('open -> end', [
        animate('1s')
      ]),
      transition('closed -> open', [
        animate('0.5s')
      ]),

    ])
  ]

})

export class DemoAnimationComponent implements OnInit {
  isOpen = true;
  current = 'open'

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle = () => {
    this.isOpen = !this.isOpen
  }
  choose = (s: string) => {
    switch (s) {
      case 'open':
        this.current = 'open'
        break;
      case 'closed':
        this.current = 'closed';
        break;
      case 'end' :
        this.current = 'end';
        break;
    }
  }
}

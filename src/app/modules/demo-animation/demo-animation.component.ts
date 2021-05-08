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
      transition('open -> closed', [
        animate('1s')
      ]),
      transition('closed -> open', [
        animate('0.5s')
      ])
    ])
  ]

})

export class DemoAnimationComponent implements OnInit {
  isOpen = true

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle = () => {
    this.isOpen = !this.isOpen
  }
}

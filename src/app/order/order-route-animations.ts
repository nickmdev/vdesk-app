import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const routeSlideTrigger = trigger('routeState', [
  transition('customize => payment', [
    group([
      query(':enter', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('300ms ease-out')
      ], { optional: true })
    ])
  ]),
  transition('payment => customize', [
    group([
      query(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate('300ms ease-out')
      ], { optional: true })
    ])
  ]),

  transition('payment => review', [
    group([
      query(':enter', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('300ms ease-out')
      ], { optional: true })
    ])
  ]),
  transition('review => payment', [
    group([
      query(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate('300ms ease-out')
      ], { optional: true })
    ])
  ]),

  transition('review => confirm', [
    group([
      query(':enter', [
        style({
          transform: 'translateY(100%)',
          opacity: 0
        }),
        animate('300ms ease-out')
      ], { optional: true })
    ])
  ]),
  transition('confirm => review', [
    group([
      query(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate('300ms ease-out')
      ], { optional: true })
    ])
  ])
]);

import { Product } from '../../app/_models/product.model';

export let products: Product[] = [
  {
    id: 1,
    name: 'Pro Plus',
    sizeOptions: [
      {
        size: 30,
        cost: 375
      },
      {
        size: 36,
        cost: 395
      },
      {
        size: 48,
        cost: 495
      }
    ],
    colorOptions: ['black', 'butcherblock', 'darkwood', 'white']
  },
  {
    id: 2,
    name: 'Pro Plus Electric',
    sizeOptions: [30, 36],
    colorOptions: ['black']
  }
];

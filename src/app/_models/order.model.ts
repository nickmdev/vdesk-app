export class Order {
  constructor(
    public id: string = Math.floor((1 + Math.random()) * 0x10000).toString(16),
    public quantity: number = 1,
    public size?: string,
    public color?: string,
    public total?: number,
    public billing: {
      name: string,
      card: string,
      expMonth: string,
      expYear: string,
      cvv: string
    } = {
      name: null,
      card: null,
      expMonth: null,
      expYear: null,
      cvv: null
    }
  ) {}
}

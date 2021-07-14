import { createServer } from 'miragejs';

createServer({
    routes() {
      this.namespace = 'api';
  
      this.get('/plan', () => {
        return [
          {
            id:1,
            name:'IHC White',
            description:'25% de Desconto',
            discount: 0.25,
            price: 100.0
          },
          {
            id:2,
            name:'IHC Silver',
            description:'50% de desconto',
            discount: 0.50,
            price: 300.0
          },
          {
            id:3,
            name:'IHC Black',
            description:'100% de desconto',
            discount: 1.0,
            price: 500.0
          }
        ]
      })
  
      this.get('/city', () => {
        return [
          {
            id: 1,
            name: 'Belo Horizonte',
          },
          {
            id: 2,
            name: 'Itabira',
          },
          {
            id: 3,
            name: 'João Monlevade',
          },
          {
            id: 4,
            name: 'Nova Era',
          }
        ]
      })
  
      this.get('/route', () => {
        return [
          {
            id: 1,
            origin: 1,
            destination: 2,
            ticketPrice: 10.0
          },
          {
            id: 2,
            origin: 2,
            destination: 1,
            ticketPrice: 10.0
          },
          {
            id: 3,
            origin: 1,
            destination: 3,
            ticketPrice: 13.5
          },
          {
            id: 4,
            origin: 3,
            destination: 1,
            ticketPrice: 13.5
          },
          {
            id: 5,
            origin: 1,
            destination: 4,
            ticketPrice: 30.0
          },
          {
            id: 6,
            origin: 4,
            destination: 1,
            ticketPrice: 30.0
          },
          {
            id: 7,
            origin: 2,
            destination: 3,
            ticketPrice: 10.0
          }
        ]
      })
      this.namespace = "/";
      this.passthrough();

    }
  })
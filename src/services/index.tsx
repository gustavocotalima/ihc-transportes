import { createServer } from 'miragejs';

createServer({
    routes() {
      //this.urlPrefix = 'https://ihc-transportes.herokuapp.com/';
      this.namespace = 'api';
  
      this.get('/plan', () => {
        return [
          {
            id:1,
            name:'IHC+ White',
            description:'25% de Desconto',
            discount: 0.25,
            price: 349.90
          },
          {
            id:2,
            name:'IHC+ Silver',
            description:'50% de desconto',
            discount: 0.50,
            price: 599.90
          },
          {
            id:3,
            name:'IHC+ Black',
            description:'100% de desconto',
            discount: 1.0,
            price: 999.90
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
            ticketPrice: 40.0
          },
          {
            id: 2,
            origin: 2,
            destination: 1,
            ticketPrice: 38.0
          },
          {
            id: 3,
            origin: 1,
            destination: 3,
            ticketPrice: 38.0
          },
          {
            id: 4,
            origin: 3,
            destination: 1,
            ticketPrice: 38.0
          },
          {
            id: 5,
            origin: 2,
            destination: 3,
            ticketPrice: 15.0
          },
          {
            id: 6,
            origin: 3,
            destination: 2,
            ticketPrice: 15.0
          },
          {
            id: 7,
            origin: 2,
            destination: 4,
            ticketPrice: 16.0
          },
          {
            id: 8,
            origin: 4,
            destination: 2,
            ticketPrice: 15.0
          },
          {
            id: 9,
            origin: 3,
            destination: 4,
            ticketPrice: 15.0
          },
          {
            id: 10,
            origin: 4,
            destination: 3,
            ticketPrice: 15.0
          }
        ]
      })
      this.namespace = "/";
      this.passthrough();

    }
  })
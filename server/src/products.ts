export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Classic Ad',
    price: 269.99,
    description: 'Offers the most basic level of advertisement',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      'The Classic Ad offers the most basic level of advertisement',
  },
  {
    id: 2,
    name: 'Stand out Ad',
    price: 322.99,
    description: 'Allows advertisers to use a company logo and use a longer presentation text',
    image: 'http://localhost:8080/fidget-2.jpg',
    longDescription:
      'The Stand out Ad allows advertisers to use a company logo and use a longer presentation text',
  },
  {
    id: 3,
    name: 'Premium Ad',
    price: 394.99,
    description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
    image: 'http://localhost:8080/fidget-3.jpg',
    longDescription:
      'The Premium Ad has not only benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
  },
  
];

export default products;

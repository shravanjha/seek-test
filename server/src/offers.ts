export interface Offer {
  id: number;
  name: string;
  discount?: number;
  freeItemNumber?: number;
  description: string;
  productId: number;
  type: OfferType
}

export enum OfferType{
  Discount,
  Item
}
const offers: Offer[] = [
  {
    id: 1,
    name: '3 for 2 Classic Ad',
    freeItemNumber: 3,
    description: 'Gets a 3 for 2 deal on Classic Ads',
    productId: 1,
    type: OfferType.Item,
  },
  {
    id: 2, 
    name: '5 for 4 Stand Out Ad',
    freeItemNumber: 5,
    description: 'Gets a 5 for 4 deal on Stand out Ads',
    productId: 2,
    type: OfferType.Item,
  },
  {
    id: 3,
    name: '$23 discount on Stand out Ad',
    discount: 23.00,
    description: 'Gets a discount on Stand out Ads where the discount drops to $299.99 per ad',
    productId: 2,
    type: OfferType.Discount
  },
  {
    id: 4,
    name: '$5 discount Premium Ad',
    discount: 5.00,
    description: 'Gets a discount on Premium Ads where the discount drops to $389.99 per ad',
    productId: 3,
    type: OfferType.Discount
  },
  
];

export default offers;

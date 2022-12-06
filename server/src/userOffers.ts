export interface UserOffer {
  userId: number;
  offerId: number;
}

const userOffers: UserOffer[] = [
  {
    userId: 2,
    offerId: 1
  },
  {
    userId: 3,
    offerId: 3
  },
  {
    userId: 4,
    offerId: 2
  },
  {
    userId: 4,
    offerId: 4
  },
  
];

export default userOffers;

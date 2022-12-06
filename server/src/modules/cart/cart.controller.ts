import {
  Controller,
  Get,
  Request,
  UseGuards,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from '../../products';

import offers, { Offer, OfferType } from '../../offers';
import userOffers, { UserOffer } from '../../userOffers';

interface CartItem extends Product {
  quantity: number;
  discount: number;
}

interface Cart {
  cartItems: CartItem[];
}

const calculateDiscount = (productId: number, productPrice: number, itemsCount: number, userId: number): number => {
  const uOffer = userOffers.filter(a=> a.userId === userId)
  //console.log(JSON.stringify(uOffer))
  var discount: number = 0.00
  offers
    .filter((f) =>
    uOffer?.length > 0
        ? uOffer.some((item) => item.offerId === f.id && productId === f.productId)
        : false
    )
    .map((c) => {
      if (c.type === OfferType.Discount)
      {
        discount = c.discount*itemsCount;
        console.log("discount: "+ discount + " for productId: "+ productId +  " with quantity: "+ itemsCount + " for userId: "+ userId + " with discount as "+ discount)
      }
      else if (c.type === OfferType.Item)
      {
        if(c.freeItemNumber && itemsCount % c.freeItemNumber === 0 )
        discount = productPrice * (itemsCount / c.freeItemNumber);
        console.log("discount: "+ discount + " for productId: "+ productId +  " with quantity: "+ itemsCount + " for userId: "+ userId + " with discount as "+ discount)
      }
        
    })
  return discount;
};

const initialCart = (indexes: number[], quantities: number[], userId: number): Cart => ({
  cartItems: indexes.map((element, index) => ({
    ...products[element],
    quantity: quantities[index],
    discount: calculateDiscount(products[element].id, products[element].price, quantities[index], userId)
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 1, 2], [1, 1, 1], 1),
    2: initialCart([0, 2], [3, 1], 2),
    3: initialCart([1, 2], [3, 1], 3),
    4: initialCart([1, 2], [5, 1], 4),
  };

  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find(
      (cartItem) => cartItem.id === parseInt(id),
    );
    if (cartItem) {
      cartItem.quantity += 1;
      cartItem.discount = calculateDiscount(cartItem.id, cartItem.price, cartItem.quantity, req.user.userId)
    } else {
      cart.cartItems.push({
        ...products.find((product) => product.id === parseInt(id)),
        quantity: 1,
        discount: calculateDiscount(products.filter(product => product.id === parseInt(id))[0].id, products.filter(product => product.id === parseInt(id))[0].price, 1, req.user.userId)
      });
    }
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = { cartItems: [] };
    return this.carts[req.user.userId];
  }
}

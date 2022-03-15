import { Context, Logger } from '@vue-storefront/core';
import { Cart } from '@vue-storefront/magento-api';

export const removeCouponCommand = {
  execute: async (context: Context, { currentCart, customQuery = { removeCouponFromCart: 'removeCouponFromCart' } }) => {
    Logger.debug('[Magento]: Remove coupon from cart', { currentCart });

    const { data } = await context.$magento.api.removeCouponFromCart({
      cart_id: currentCart.id,
    }, customQuery);

    Logger.debug('[Result]:', { data });

    return {
      updatedCart: data.removeCouponFromCart.cart as unknown as Cart,
      updatedCoupon: { code: '' },
    };
  },
};
// for...i
// reduce

export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < cartItemList.length; i++) {
    const cartItem = cartItemList[i];
    const cartItemTotal = cartItem.product.price * cartItem.quantity;
    sum += cartItemTotal;
  }

  return sum;
}

// export function calcCartTotal(cartItemList) {
//   if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

//   return cartItemList.reduce((sum, cartItem) => {
//     const itemTotal = cartItem.product.price * cartItem.quantity;

//     return sum + itemTotal;
//   }, 0);
// }

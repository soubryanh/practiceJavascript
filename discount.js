const calculteDiscountPrice = (price, discount) => {
  const discountPercentage = 100 - discount;
  const discountPrice = (discountPercentage * price) / 100;
  return discountPrice;
  //   console.log(discountPrice);
};

const onclickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("price");
  const inputDiscount = document.getElementById("discount");
  const valuePrice = inputPrice.value;
  const valueDiscount = inputDiscount.value;
  const priceDiscount = calculteDiscountPrice(valuePrice, valueDiscount);
  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = `Discount: ${priceDiscount}`;
};

const calculteDiscountPrice = (price, discount) => {
  const discountPercentage = 100 - discount;
  const discountPrice = (discountPercentage * price) / 100;
  return discountPrice;
  //   console.log(discountPrice);
};

// const onclickButtonPriceDiscount = () => {
//   const inputPrice = document.getElementById("price");
//   const inputDiscount = document.getElementById("discount");
//   const valuePrice = inputPrice.value;
//   const valueDiscount = inputDiscount.value;
//   const priceDiscount = calculteDiscountPrice(valuePrice, valueDiscount);
//   const resultPrice = document.getElementById("resultPrice");
//   resultPrice.innerText = `Discount: ${priceDiscount}`;
// };

onclickCalculateCupon = () => {
  const coupons = [
    {
      name: "freetrial",
      discount: 90,
    },
    {
      name: "haflprice",
      discount: 50,
    },
    {
      name: "sexy",
      discount: 20,
    },
  ];
  const inputPrice = document.getElementById("price");
  const valuePrice = inputPrice.value;

  const inputCupon = document.getElementById("cupon");
  const valueCupon = inputCupon.value;

  const isCouponValueValid = (coupons) => {
    return coupons.name === valueCupon;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert(`El cupon ${valueCupon} no es valido`);
  } else {
    const discount = userCoupon.discount;
    const priceDiscount = calculteDiscountPrice(valuePrice, discount);
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = `Result: ${priceDiscount}`;
  }
};

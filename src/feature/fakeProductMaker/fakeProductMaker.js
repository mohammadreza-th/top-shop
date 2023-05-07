export function fakeProductMaker(pLength) {
  let products = [];
  let productsType = ["Foods", "Drinks", "Souce", "Snacks", "Other"];
  if (pLength && pLength > 0) {
    for (let i = 1; i <= pLength; i++) {
      products.push({
        id: i,
        title: i < 9 ? `title_0${i}` : `title_${i}`,
        price: 300 + i * i,
        imgSrc: `/images/${i < 13 ? i : (i % 11) + 1}.png`,
        type: `${productsType[Math.floor(Math.random() * 5)]}`,
      });
    }
  }
  return products;
}

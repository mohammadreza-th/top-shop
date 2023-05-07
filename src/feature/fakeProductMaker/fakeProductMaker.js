export function fakeProductMaker(pLength) {
  let products = [];
  if (pLength && pLength > 0) {
    for (let i = 1; i <= pLength; i++) {
      i < 9
        ? products.push({
            id: i ,
            title: `title_0${i }`,
            price: 300 + i * i,
            imgSrc: `/images/${i<13?i:i%13}.png`,
        })
        : products.push({
            id: i,
            title: `title_${i }`,
            // price: Math.ceil(Math.random() * 300) + 200,
            price: 300 + i * i,
            imgSrc: `/images/${i<13?i:i%13}.png`,
          });
    }
  }
  return products;
}

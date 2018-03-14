new WOW().init();
// swipes enable on iOS in Bootstrap4 carousel
$('#carouselBikeIndicators').bcSwipe({ threshold: 30 });
const productList = new ProductList('products.json', $('.products-container'), cart);
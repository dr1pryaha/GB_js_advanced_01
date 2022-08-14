const products = [
  { id: 1, title: "Notebook", price: 2000, link: "/img/notebook.jpg" },
  { id: 2, title: "Mouse", price: 20, link: "/img/mouse.jpg" },
  { id: 3, title: "Keyboard", price: 200, link: "/img/keyboard.jpg" },
  { id: 4, title: "Gamepad", price: 50, link: "/img/gamepad.jpg" },
  { id: 4, title: "Headphones", price: 500, link: "/img/headphones.jpg" },
  { id: 4, title: "Monitor", price: 1500, link: "/img/monitor.jpg" },
  { id: 4, title: "Monitor", price: 1500, link: "/img/monitor.jpg" },
  { id: 4, title: "Monitor", price: 1500, link: "/img/monitor.jpg" },
  { id: 4, title: "Monitor", price: 1500, link: "/img/monitor.jpg" },
  { id: 4, title: "Monitor", price: 1500, link: "/img/monitor.jpg" },
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, link) => {
  return `<div class="products-item">
                  <img class="products-image" src="${link}" alt="product">
                  <h3 class="products-title">${title}</h3>
                  <p class="products-price">${price}</p>
                  <button class="products-buy-btn">Купить</button>
              </div>`;
};

const renderPage = list => {
  const productsList = list.map(item =>
    renderProduct(item.title, item.price, item.link)
  );
  console.log(productsList);
  document.querySelector(".products").innerHTML = productsList.join("");
  //
};

renderPage(products);

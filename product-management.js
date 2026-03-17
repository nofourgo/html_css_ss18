// let products = [
//   {
//     id: 1,
//     name: "Khô gà",
//     category: "Thực phẩm",
//     price: 18000,
//     description: "Bã mía",
//   },
//   {
//     id: 2,
//     name: "Mực Cao Bằng",
//     category: "Thực phẩm",
//     price: 200000,
//     description: "Mực ống Cao Bằng",
//   },
//   {
//     id: 3,
//     name: "Bình nước Mixi Gaming",
//     category: "Đồ gia dụng",
//     price: 50000,
//     description: "Bình nước 20l",
//   },
// ];

// localStorage.setItem("products", JSON.stringify(products));
let products = JSON.parse(localStorage.getItem("products"));
// console.log(data);

let inputSearch = document.getElementById(`searchInput`);
inputSearch.addEventListener("input", (e) => {
  //   e.preventDefault();
  let productFiltered = products.filter((product) =>
    product.name.toLowerCase().includes(inputSearch.value.toLowerCase()),
  );
  console.log(productFiltered);
});
let selectCategory = document.getElementById(`filterCategory`);
console.log(selectCategory);

selectCategory.addEventListener(`change`, (e) => {
  e.preventDefault();
  console.log(selectCategory.value);
  let filterCategory = products.filter(
    (product) => product.category === selectCategory.value,
  );
  console.log(filterCategory);
});

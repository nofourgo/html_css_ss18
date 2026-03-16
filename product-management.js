let products = [
  //   {
  //     id: 1,
  //     name: "Khô gà",
  //     type: "Thực phẩm",
  //     price: 100000,
  //     quantity: 100,
  //     description: "Đây là bã mía",
  //   },
  //   {
  //     id: 2,
  //     name: "Mực Cao Bằng",
  //     type: "Thực phẩm",
  //     price: 200000,
  //     quantity: 100,
  //     description: "Mực nhập khẩu từ Thái Lan",
  //   },
  //   {
  //     id: 3,
  //     name: "Cốc Mixi Gaming",
  //     type: "Đồ gia dụng",
  //     price: 80000,
  //     quantity: 100,
  //     description: "Cốc in hình Pharaoh có nốt ruồi cạnh mép",
  //   },
  //   {
  //     id: 1,
  //     name: "Màn hình Xiaomi",
  //     type: "Thực phẩm",
  //     price: 1800000,
  //     quantity: 20,
  //     description: "Màn hình 120HZ",
  //   },
  //   {
  //     id: 1,
  //     name: "Bí kíp làm giàu",
  //     type: "Sách",
  //     price: 2000,
  //     quantity: 36,
  //     description: "Sách của Huấn Hoa Hồng viết",
  //   },
  //   {
  //     id: 1,
  //     name: "Khinh khí cầu",
  //     type: "Khác",
  //     price: 999999999,
  //     quantity: 45,
  //     description: "Bay cao nào nhảy cao nào bay cao nào nhảy cao nào",
  //   },
];
let tableContainer = document.getElementById(`table-container`);
console.log(tableContainer);

let renderProduct = (products) => {
  let html = "";
  if (products.length === 0) {
    html = `<div class="empty-state show" id="emptyState">
            <div class="empty-state-icon">📦</div>
            <div class="empty-state-text">
              Chưa có sản phẩm nào. Hãy thêm sản phẩm mới!
            </div>
          </div>`;
  }
  else{
    products.map((product)=>{
        html+=``
    })
  }
  tableContainer.innerHTML = html;
};
renderProduct(products);

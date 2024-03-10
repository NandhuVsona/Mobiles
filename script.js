let container = document.querySelector(".container");

async function getdata() {
  const request = await fetch("https://dummyjson.com/products");
  const response = await request.json();
  let products = response.products;
  console.log(products)
  products.forEach(mobile => {
    let template = `<div class="card">
<div class="img">
  <img src="${mobile.thumbnail}" alt="" />
</div>
<div class="details">
  <h1>${mobile.brand.slice(0,15)}</h1>
  <p>${mobile.description.slice(0,50)}....</p>
  <h3>Price ${mobile.price}</h3>
  <button>Show More</button>
</div>
</div>`;
  container.innerHTML += template;
  })
}
getdata();



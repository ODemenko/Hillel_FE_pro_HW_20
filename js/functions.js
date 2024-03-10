function showProducts(category) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  
  productsData[category].forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = product.name;
    listItem.onclick = function() {
      showProductInfo(product);
    };
    productList.appendChild(listItem);
  });
  
  document.getElementById('productInfo').style.display = 'none';
}

function showProductInfo(product) {
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productInfo').style.display = 'block';
}

function buyProduct() {
  alert('Product purchased successfully!');
  document.getElementById('productInfo').style.display = 'none';
}
async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error();
    const products = await res.json();
    const container = document.createElement('div');
    container.id = 'product-container';
    document.body.appendChild(container);
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      const img = document.createElement('img');
      img.src = p.image;
      const title = document.createElement('div');
      title.className = 'product-title';
      title.textContent = p.title;
      const price = document.createElement('div');
      price.className = 'product-price';
      price.textContent = '$' + p.price;
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      container.appendChild(card);
    });
  } catch (err) {
    document.body.innerHTML = 'Failed to load products. Please try again.';
  }
}

fetchProducts();

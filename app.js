function Product(title, price, description, image) {
    this.productTitle = title;
    this.productPrice = price;
    this.productDescription = description;
    this.productImg = image;
  }
  
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
      const products = json.map(item => 
        new Product(item.title, item.price, item.description, item.image)
      );
  
      console.log(products);
  
      let mainDiv = document.querySelector(".card-container");
      let mainCard=document.createElement("div");
      mainCard.className="card";


      mainDiv.appendChild(mainCard);
  
      products.forEach(item => {
        let imag = document.createElement("img");
        imag.src = item.productImg;
        imag.className="img";
        mainCard.appendChild(imag);

        let h1=document.createElement("h1");
 
        h1.textContent=item.productTitle;

 mainCard.appendChild(h1);

let p= document.createElement("p");

p.textContent=item.productPrice+"$";

mainCard.appendChild(p);


let p2= document.createElement("p");

p2.textContent=item.productDescription+"$";

mainCard.appendChild(p2);



      });
    })
    .catch(error => console.error('Error fetching products:', error));
  
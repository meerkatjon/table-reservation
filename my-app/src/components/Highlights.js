function Highlights () {
   const divStyle={
      display:"flex"
   }
     return (
      <section>
      <div>   
      <article>
        <h1>This week specials </h1>
        </article>
      <article><button>Online Menu</button></article>
      </div>
      <div style={divStyle}><article >
         <h1>Greek Salad</h1>
         <h2>12.99</h2>
         <p>Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
         <button>Order for Delivery</button>
      </article>
      <article>
         <h1>Bruschetta</h1>
         <h2>16.99</h2>
         <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
         <button>Order for Delivery</button>
      </article>
      <article>
         <h1>Lemon Dessert</h1>
         <h2>8.50</h2>
         <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
         <button>Order for Delivery</button>
      </article></div>
      </section>  
     )
}
export default Highlights;
import './styles.css';
import greeksalad from '../Images/greeksalad.jpg'
import menu from '../Images/menu.webp'

function Highlights () {

     return (
      <main >
      <section className='hl-specials'>
      <article className='hl-art'>
            <h1 className='hl-art-h1'>Specials </h1>
      </article>
      <article className='hl-art-button'> 
             {/* //<button className="buttonStyle">Online Menu</button> */}
            <button> <a href={menu} class="button"  target="_blank" rel="noreferrer">Menu Card</a>
            </button>
      </article>
      </section>
      <section className='hl-section'>
         <article className='h1-art'>
            <img className='hl-images' src={greeksalad} alt="Greek Salad" />
         <h1 className='hl-art-h1'>Greek Salad</h1>
         <h2 className='hl-p'>12.99</h2>
         <p className='hl-p'>Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
         <p className='hl-orderText'>Order for Delivery</p>
         </article>
         <article className='h1-art'>
         <h1>Bruschetta</h1>
         <h2>16.99</h2>
         <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
         <button>Order for Delivery</button>
      </article>
      <article className='h1-art'>
         <h1>Lemon Dessert</h1>
         <h2>8.50</h2>
         <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
         <button>Order for Delivery</button>
      </article>
      </section>
      </main>
     )
}
export default Highlights;
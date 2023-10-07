import './styles.css';
import menu from '../Images/menu.webp'

function Highlights () {

     return (
      <body >
      <section className='hl-specials'>
      <article className='hl-art'>
            <h1 className='hl-art-h1'>Specials </h1>
      </article>
      <article className='hl-art-button'> 
            <button> <a href={menu} class="button"  target="_blank" rel="noreferrer">Menu Card</a>
            </button>
      </article>
      </section>
      </body>
     )
      
      
     
}
export default Highlights;
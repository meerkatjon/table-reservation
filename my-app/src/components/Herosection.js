import './styles.css';
import  food1 from '../Images/food1.png';
//import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Herosection() {
    return (
        <main>
        <section className="heroStyle">
            <article className="banner">
                <h2 className='heroText-h2'>Little Lemon</h2>
                <h3 className='heroText-h3'>Chicago</h3>
                <p className="subsection">We are a family owned Mediterranean restaurant,  <br></br>located on Maldove Street in Chicago, Illionis.  <br></br>We focus on traditional recipes served with a modern twist.</p>
                <Link to ="/booking"><button aria-label="buttonStyle">Reserve a table</button></Link>
            </article>
            <article >
                <img className="heroImage" src={food1} alt="Little Lemon" />
            </article>
        </section>
        </main>
        )
}
export default Herosection;
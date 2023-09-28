import './styles.css';
import MarioandAdrianA from '../Images/MarioandAdrianA.jpg'

function Testimonials(){
    
    // const h1Style = {
    //     backgroundcolor: "aliceblue",
    //     fontfamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    //     marginright: "5%",
    //     margintop: "3em",
    //     marginbottom: "3em",
    //     marginleft: "5%",
    //     textalign:"center"
    // }
    return(
        <main className="heroStyle">
        <section  >
            <article>
                 <h1 className='test-h1'>Testimonials</h1>
            </article>
        </section>
        <section className='testStyle'>
            <article className='test-art'>
                {/* <img className="test-img" src={MarioandAdrianA} alt="Mario" /> */}
                <h3 className='test-h3'>Micheal Caldwell</h3>
                <p className='test-p'>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className='test-art'><h3 className='test-h3'>Alan Chen</h3>
            <p className='test-p'>My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.!</p>
            </article>
            <article className='test-art'><h3 className='test-h3'>Casey Lau</h3>
            <p className='test-p'>I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.</p>
            </article>
            <article className='test-art'><h3 className='test-h3'>John Rosenblum</h3>
            <p className='test-p'>Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.</p>
            </article>
            <article className='test-art'><h3 className='test-h3'>Jim Reynor</h3>
            <p className='test-p'>The food here really refreshed me after a late night shift at the local supply depot.</p>
            </article>
            <article className='test-art'><h3 className='test-h3'>Brian Dean</h3>
            <p className='test-p'>I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.</p>
            </article>
            <article className='test-art'><h3 className='test-h3'>Tyler Tohmine</h3>
            <p className='test-p'>The food here was fire!! Everyone should try this place out at least once if they live in Chicago.</p>
            </article>
            <article className='test-art'><h3 className='test-h3'>Jack Hu</h3>
            <p className='test-p'> This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!</p>
            </article> 

        </section>
        </main>
    )

}
export default Testimonials;
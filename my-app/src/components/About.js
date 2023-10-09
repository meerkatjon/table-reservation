import React from 'react';
import chef from '../Images/Mario and Adrian b.jpg';
import restaurant from '../Images/restaurant.jpg';


function About(){
    return (
        
        <section>
         <div className='about'>   
        <h2 className='about-h1'>Little Lemon</h2>
        <h3 className='about-h2'>Chicago </h3>
        <p className='about-p'>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        </div>
        <div className='about-img'>
            <img className='chef' src={chef} alt="chef pic" />
            <img className='restaurant' src={restaurant} alt="restaurant pic" />
        </div>
        </section>
      
    )
}
export default About;
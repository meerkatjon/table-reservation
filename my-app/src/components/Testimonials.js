function Testimonials(){
    const testStyle = {
        display:"flex"
    }
    const h1Style = {
        backgroundcolor: "aliceblue",
        fontfamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        marginright: "5%",
        margintop: "3em",
        marginbottom: "3em",
        marginleft: "5%",
        textalign:"center"
    }
    return(
        <section>
        <h1 style={h1Style}>Testimonials</h1>
        <div style={testStyle}>
            <article><h3>Micheal Caldwell</h3>
            <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article><h3>Alan Chen</h3>
            <p>My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.!</p>
            </article>
            <article><h3>Casey Lau</h3>
            <p>I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.</p>
            </article>
            <article><h3>John Rosenblum</h3>
            <p>Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.</p>
            </article>
            <article><h3>Jim Reynor</h3>
            <p>The food here really refreshed me after a late night shift at the local supply depot.</p>
            </article>
            <article><h3>Brian Dean</h3>
            <p>I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.</p>
            </article>
            <article><h3>Tyler Tohmine</h3>
            <p>The food here was fire!! Everyone should try this place out at least once if they live in Chicago.</p>
            </article>
            <article><h3>Jack Hu</h3>
            <p>This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!</p>
            </article>
        </div>
        </section>
    )

}
export default Testimonials;
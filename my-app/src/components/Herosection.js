function Herosection() {
    const heroStyle = {
        display: "flex",
        flex: "1",
        backgroundcolor: "rgb(231, 240, 182)",
        borderradius: "2em",
        margintop: "5em",
        paddingleft: ".2em",
        marginright: "1em",
        marginbottom: "1em",
        textalign: "left"
    }
    const imageStyle = {
        backgroundimage: "url(food1.png)",
        display: "block",
    }
    return (
        <section>
        <div style={heroStyle}>
        <h1>Little Lemon</h1>
        </div>
        <div style={heroStyle}>
        <h2>Chicago</h2>
        </div>
        <div style={heroStyle}>
        <p style={imageStyle}>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
        </div>
        <button>Reserve a table</button>
        
        </section>
        )
}
export default Herosection;
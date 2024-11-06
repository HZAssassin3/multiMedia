export default function Hero() {

    let herStyle = {
           backgroundColor: "dodgerblue",
             padding: "50px",
              textAlign: "center",
               marginBottom: "30px" 
    }
    return (
        <div style={herStyle}>
            <h1 className="mb-5">Welcome to our Store</h1>
            <a className="btn btn-light me-3" href="#" role="button">Learn More</a>
            <a className="btn btn-outline-light" href="#" role="button">Contact Us</a>
        </div>
    );
}

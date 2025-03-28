import "../css/Mobile.css"

const Mobile = (props)=>{
    return(
      <>
      
        <div className="parent">
             <div id="child1">
              <img src={props.src} alt="img-1" width='250'/>
             </div>

             <div id="child2">
                 <h2>{props.name}</h2>
                 <button id="rating-btn">4.3★</button>
                 <span>100 Ratings & 12 Reviews</span>
                 <ul>
                    <li>{props.f1}</li>
                    <li>{props.f2}</li>
                    <li>{props.f3}</li>
                    <li>{props.f4}</li>
                    <li>{props.f5}</li>
                 </ul>
             </div>
             <div id="child3">
                 <h1>₹{props.price}</h1>
                <div id="max-price">
                 <p id="ac-price">{props.discount}</p>
                 <span>9% off</span>
                </div>
                <p>Free delivery</p>
                <p>Save extra with combo offers
                 Upto ₹8,900 Off on Exchange</p>
             </div>
        </div>
     
      </>

    );
}
export default Mobile;

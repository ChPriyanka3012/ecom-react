import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
function Block(){
    return (
    <div className="main-cont">
        <div className="block1">
            <img src={img1} alt="Kerala" height="120px" width="200px"></img>
            <h3>Written By- Ashok kumar</h3>
            <p>Price: 1800rs</p>
            <button className="btn">Add to Cart</button>
        </div>
        <div className="block2">
        <img src={img2}alt="Pondicherry" height="120px" width="200px"></img>
            <h3>Written By- Anthony Deorr</h3>
            <p>Price: 1500rs</p>
            <button className="btn">Add to Cart</button>
        </div>
        <div className="block3">
        <img src={img3} alt="Coorg" height="120px" width="200px"></img>
            <h3>Written By- Willingam</h3>
            <p>Price: 1900rs</p>
            <button className="btn">Add to Cart</button>
        </div>
        <div className="block4">
        <img src={img4} alt="Coorg" height="120px" width="200px"></img>
            <h3>Written By- Audren Blake</h3>
            <p>Price: 1200rs</p>
            <button className="btn">Add to Cart</button>
        </div>
        <div className="block5">
        <img src={img5} alt="Coorg" height="120px" width="200px"></img>
            <h3>Written By- Gareth Brown</h3>
            <p>Price: 800rs</p>
            <button className="btn">Add to Cart</button>
        </div>
        <div className="block6">
        <img src={img6} alt="Coorg" height="120px" width="200px"></img>
            <h3>Written By- Akshat Gupta</h3>
            <p>Price: 2100rs</p>
            <button className="btn">Add to Cart</button>
        </div>
    </div>)
}
export default Block
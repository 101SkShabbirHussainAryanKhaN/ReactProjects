import "../components/Product.css";
const Product = (props) => {
    let isLogin = false;
    if(isLogin)
    {
        return (
            <div>
                <h1>
                    You are login in.
                </h1>
                <button>Logout</button>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>
                    You are not login in.
                </h1>
                <button>Login</button>
            </div>
        );
    }
const demo = ()=>{
        console.log("This is demo function");
    }
    return (
        <div>
            <div className="sk">
                <div className="container">
                    <h1>{props.title}</h1>
                    <p>Price : {props.price}</p>
                    {props.children}
                    <button onClick={demo}>SK Shabbir Hussain</button>
                    <ProfileBox />
                </div>
            </div>
        </div>
    );
}
const ProfileBox = () => {
    return (
        <div>
                <h1>This is Profile</h1>
                <p>I am web developer since one year.</p>
               
        </div>
    );
}
export default Product;
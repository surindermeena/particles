import { Link, useLocation } from "react-router-dom";

const Error = () => {
    const location = useLocation();
    const message = location.state?.message || "Something went wrong";

    return (
        <>
        <div style={errorStyle}>
            <h3><span style={{color:"red", textTransform:"uppercase"}}>Error</span> : {message}<br/></h3>
            <h3><Link to={"/"}>Go Home</Link></h3>
        </div>
        </>
    )
}

const errorStyle = {display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"80vh", flexDirection:"column"}

export default Error;
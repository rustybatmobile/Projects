import styled from "./Banner.module.css";
import img from "../../assets/man_working.png"

const Banner = () => {
    return (
        <div className= {styled.banner_container}>
            <div className={styled.taglines}>
                <h1 className= {styled.tagLinePrimary}>More than just shorter links.</h1>
                <h3 className= {styled.tagLineSecondary}>Build your brand's recognition and get detailed insights on how your links are performing.</h3>
                <button className= {styled.button}>START YOUR FREE TRIAL</button>
            </div>
            <div className= {styled.imgContainer}>
                <img src = {img} alt = {"Man working"}  />
            </div> 
        </div>
    )
}

export default Banner;
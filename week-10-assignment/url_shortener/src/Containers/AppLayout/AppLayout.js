import { useState } from "react"
import Banner from "../../Components/Banner/Banner";
import ShortenedUrlListView from "../../Components/ShortenedUrlListView/ShortenedUrlListView";
import UrlInputComponent from "../../Components/UrlInputComponent/UrlInputComponent";
import styled from "./AppLayout.module.css";


const MainContainer = (props) => {

    const [shortenedList, setShortenedList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleErrorMessage = (err) => {
        setErrorMessage(err);
        setTimeout(() => {
            setErrorMessage("");
        }, 2000);
    }

    const addShortenedLink = async (link) => {
        try {
            setIsLoading(true);
            const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
            const data = await result.json();
            if(data.ok) {
                const shortenedUrl = data.result.short_link;
                setShortenedList([...shortenedList, shortenedUrl]);
                setIsLoading(false);
            } else {
                const errorMessage = data.error;
                throw errorMessage
            }
        } catch(err) {
            handleErrorMessage(err);
            setIsLoading(false);
        }
    }

    return (
        <div className={styled.app_layout}>
            <div className= {styled.app_layout_container}> 
                <Banner />
                <UrlInputComponent onClick = {addShortenedLink} shortenedList={shortenedList}/>
                {!isLoading ?
                errorMessage !== "" ? <div>{errorMessage} </div> : null 
                    : <div> Processing. Please wait </div>}
                <ShortenedUrlListView isLoading = {isLoading} urls = {shortenedList}/>
            </div>
        </div>
    )
}

export default MainContainer;
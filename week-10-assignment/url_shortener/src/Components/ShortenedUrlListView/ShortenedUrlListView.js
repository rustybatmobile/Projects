const ShortenedUrlListView = ({urls, isLoading}) => {

    return (
        <div>
            {urls.map(url => {
                return (
                    <li key = {url}>{url}</li>
                )
            })}
        </div>
    )
}

export default ShortenedUrlListView
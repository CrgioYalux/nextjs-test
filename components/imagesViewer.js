const ImagesViewer = ({ images }) => {
    return (
        <div>
            {
                images.map(image => {
                    const key = images.indexOf(image)
                    return <img src={image} alt={`image no.${key}`} key={key}/>
                })
            }
        </div>
    )
}

export default ImagesViewer

// "key={new Date().toMilliseconds()}"
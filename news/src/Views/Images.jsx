import React, {useEffect, useState} from 'react'

function Images() {

    // const [images, setImages] = useState(null);

    // useEffect(() => {
    //     fetchImage();
    //     async function fetchImage() {
    //         const res = await fetch(`http://hubblesite.org/api/v3/images`);
    //         const data = await res.json();
    //         setImages(data);
    //     }
    // }, []);

    // if(!images) return <div />;

    // async function postData(url = '') {
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         mode: 'no-cors'
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Success: ", data);
    //     })
    //     .catch((error) => {
    //         console.log("Error: ", error);
    //     });
    //     console.log(response);
    // }

    // postData('http://hubblesite.org/api/v3/images')
    //     .then(data => {
    //         console.log(data);
    //     });

    return (
        <div>
            <h1>Images</h1>
        </div>
    )
}

export default Images

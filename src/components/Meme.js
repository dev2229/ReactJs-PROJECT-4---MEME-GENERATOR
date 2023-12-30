import React from "react";
// import memedata from "../memedata";


export default function Meme(){

    // const [memeImage , setMemeImage ]=React.useState("https://i.imgflip.com/30b1gx.jpg")
    const[meme , setmemem]=React.useState({
        toptext:"",
        bottomtext:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const[allMeme , setallMeme]=React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMeme(data.data.memes))
    }, [])

    function getMemeImage() {
        // const memearray = allMeme.data.memes;
        const randomIndex = Math.floor(Math.random() *allMeme.length);
        const url = allMeme[randomIndex].url
        setmemem(prememe=>({
            ...prememe,
            randomImage:url
        }))
    }

    function handlechange(event){
        const {name,value}=event.target
        setmemem(prememe=>({
            ...prememe,
            [name]:value
        }))
    }
    
    return (
        <main>
            <div className="FORM">
                <input className="form-input" placeholder="TOP-TEXT" type="text" name="toptext" value={meme.toptext} onChange={handlechange}/>
                <input className="form-input" placeholder="BOTTOM-TEXT" type="text" name="bottomtext" value={meme.bottomtext} onChange={handlechange}/>
                <button className="form-button" onClick={getMemeImage}>GET A NEW MEME IMAGE</button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} alt="MEME"/>
                <h1 className="meme-text top">{meme.toptext}</h1>
                <h1 className="meme-text bottom">{meme.bottomtext}</h1>
            </div>
        </main>

    );
}
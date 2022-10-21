import React from 'react'
import memedata from '../memedata'

var url
export default function Meme(){
    var [memeimage , setmemeimage] = React.useState({
        topText :"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
    var [allmemeimages , setallmemeimages] = React.useState(memedata)
    function handleclick(){
        var memesarray = allmemeimages.data.memes;
        var randomnumber = Math.floor(Math.random() * memesarray.length)
        url = memesarray[randomnumber].url
        setmemeimage (prevmemeimage =>({
            ...prevmemeimage,
            randomImage : url
        }))
    }
    function handleChange(event){
        var{name,value}=event.target
        setmemeimage(function(prevmemeimage){
            return{
                ...prevmemeimage,
                [name]: value
            }
        })
    }

    return(
        <main>
            <div className='form'>
            <input 
            type="text" 
            placeholder='top text' 
            className='input'
            name="topText"
            value={memeimage.topText}
            onChange={handleChange}
            />
            <input 
            type="text" 
            placeholder='bottom text' 
            className='input'
            name='bottomText'
            value={memeimage.bottomText}
            onChange={handleChange}
            />

            <button className='button' onClick={handleclick}>Get a new meme image 🖼</button>
            </div>
        <div className="meme">
            <img src={memeimage.randomImage} className='memeimage'></img>
            <h1 className='meme--text top'>{memeimage.topText}</h1>
            <h1 className='meme--text bottom'>{memeimage.bottomText}</h1>
        </div>
        </main>

    )
}

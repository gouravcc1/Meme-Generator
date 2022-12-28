import React from 'react';
import ReactDOM from 'react-dom/client';
import './Memeimg.css'; 
import Text from './Text'

export default function Memeimg(){
    const [allmemes , SetAllmemesdata]=React.useState([]);
    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => SetAllmemesdata(data))
    }, []);
    function changememe(){
        let x = Math.floor((Math.random() * 99) + 1);
        SetMeme(old=>({
            ...old,
            imgscr:allmemes.data.memes[x].url
        }
        ))
    }
    const [meme , SetMeme]=React.useState(
        {
            toptext:"hey !",
            bottomtext:"What Are you looking at",
            imgscr:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAXaUMjmiyLhrEqP66xs1njLUYYHTgsP27Q&usqp=CAU"
        }
    );
    function toggle(event){
        SetMeme(old=>(
            {
                ...old,
                [event.target.name]:event.target.value
            }
        ))
    }
    return(
        <div>
            <Text   
            toggle={toggle}
            toptext={meme.toptext}
            bottomtext={meme.bottomtext}
             />
             <div className='imgbutton'>
                <button className='mybutton' onClick={changememe}>Generate A New Image</button>
             </div>
            <div className='memeimge'>
                <img className='mymemeimg' src={meme.imgscr} />
                <h1 className='meme--text top' > {meme.toptext}</h1>
                <h1 className='meme--text bottom' >{meme.bottomtext}</h1>
            </div>
        </div>
    )
}
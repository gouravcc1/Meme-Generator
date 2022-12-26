import React from 'react';
import ReactDOM from 'react-dom/client';
import './Text.css';

export default function Text(props){
    return(
        <div className='mydiv'>
           <input 
           type="text"  
           className='textinput'
           name = 'toptext'
           value={props.toptext}
           onChange={props.toggle}                    
             />
           <input 
           type="text"  
           className='textinput'
           name = 'bottomtext'
           value={props.bottomtext}
            onChange={props.toggle}                        
             />
        </div>
    )
}
import * as React from 'react'  //USED  npm install react react-dom   AND  npm install -D @types/react @types/react-dom

import {useState} from 'react'

const ReactComponent =() =>{
    const[text,seText] = useState('first text')

    const onclick =() =>{
        seText('ButtonCLicked');
    }
  


    return(
        <div>
             

            {text}
            <br />
            <button 
            onClick={onclick}
            >Changetext</button>
        </div>

    )
}

export default ReactComponent;
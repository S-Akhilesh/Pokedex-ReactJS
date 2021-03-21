import React,{useState, useEffect} from 'react'
import './Card.css';
import axios from 'axios';
import PokeInfo from './PokeInfo';


function Card({name,handleClick, url}) {

    const [id, setId] =useState();
    const [image, setImage] =useState("");

    useEffect(() => {
        axios.get(url).then(res => {
          setId(res.data.id);
          setImage(res.data.sprites.front_default);
        })
      }, [image,url]);
    

      function hClick(){
          handleClick(id);
      }

    return (
        <div className="card" key={name} > 
            <div className="imgBx" >
                <img src={image} alt=""/>
            </div>
            <div className="content">
                <button onClick={hClick} >{name}</button>
            </div>
        </div>
    )
}

export default Card

import React,{useEffect,useState} from 'react'
import './PokemonInfo.css'
import axios from 'axios'
export default function PokeInfo({id,handleClick}) {
    const [name,setName] = useState("");
    const [weight,setWeight] =useState("");
    const [height,setHeight] =useState("");
    const [ability,setAbility] =useState("");
    const [move,setMove] =useState("");
    const [image,setImage] =useState("");

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
            setName(res.data.name)
            setWeight(res.data.weight)
            setHeight(res.data.height)
            setAbility(res.data.abilities[0].name)
            setMove(res.data.moves[0].move.name)
            setImage(res.data.sprites.front_default)
        })
    },[])

    return (
        <div className="pokeinfo">
            <div className="container">
                <div className="imgBx">
                    <img src={image} alt=""/>
                </div>
                <div className="content">
                <div className="name">Name: {name}</div>
                <div className="weight">weight: {weight}</div>
                <div className="height">height: {height}</div>
                <div className="ability">ability: {ability}</div>
                <div className="move">move: {move}</div>
                </div>
            </div>
            <div className="btn">
            <button onClick={handleClick}>BACK</button>
            </div>
        </div>
    )
}

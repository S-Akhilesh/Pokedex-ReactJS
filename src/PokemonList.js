import React,{useState} from 'react'
import Card from './Card'
import Pagination from './Pagination'
import PokeInfo from './PokeInfo';
import './PokemonList.css';


export default function PokemonList({pokemon,nextPage,prevPage}) {
    const [open,setOpen] =useState(false);
    const [id, setId] = useState();
    const [aOpen, setaOpnen] =useState(true)

    function handleClick(id) {
        setOpen(!open);
        setaOpnen(!aOpen);
        setId(id);
    }


    return  (
        <div>
            {aOpen?
                (
                <>
                <div className={`${open && "hide"} pokemonList`}>
                    {pokemon.map(p=> (
                        <Card name={p.name} handleClick={handleClick} url={p.url} />
                    ))}
                </div>
                <Pagination nextPage={nextPage} prevPage={prevPage} />
                </>
                )
                :
                (<PokeInfo id={id} handleClick={handleClick}/>)
            }
        </div>
    )
}

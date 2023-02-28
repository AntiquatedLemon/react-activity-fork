import React from 'react'
import { Pokemon } from '../../models/Pokemon'

// export default function PokemonBox(props:Pokemon) {
//   return (
//          <div>
//             <img src={props.img}/>
//             <h4>{props.name}</h4>
//             <p>Level: {props.level}</p>
//             <p>Health: {props.health}</p>
//             <p>Damage: {props.damage}</p>
//          </div>
//          )
// }

interface Props extends Pokemon {
   onDelete?: () => void;
}

export default function PokemonBox(props: Props) {
   const { name, img, level, health, damage, onDelete } = props;

   return (
      <div className="pokemon-box">
         <img src={img} alt={name} />
         <div className="pokemon-details">
            <h4>{name}</h4>
            <p>Level: {level}</p>
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            {onDelete && <button onClick={onDelete}>Delete</button>}
         </div>
      </div>
   );
}

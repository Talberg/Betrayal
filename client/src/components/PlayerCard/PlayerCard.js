import React from 'react'
import './PlayerCard.scss'

function PlayerCard(props) {

    let character = props.character
    return (<div className='playerCard'>
        <div className='playerNumber'>
            <p> {props.player}</p>
        </div>
        <div className="characterName">
            <p >{props.character.name}</p>
        </div>
        <hr className='line1'></hr>
        <div className='speedMight'>
            <ul>
                <li>Speed: {character.speed} </li>
                <li>Might: {character.might} </li>
            </ul>
        </div>
        <div className='knowledgeSanity'>
            <ul>
                <li>Knowledge: {character.knowledge} </li>
                <li>Sanity: {character.sanity} </li>
            </ul>
        </div>
        <hr className='line2'  ></hr>



        <div className='companions' > {character.companions}</div>

        <div className='items' > {character.companions}</div>

    </div>)

}


export default PlayerCard
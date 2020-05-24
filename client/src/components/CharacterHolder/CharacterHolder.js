import React from 'react'
import './CharacterHolder.scss'
import Player1Dot from '../Player1Dot/Player1Dot'

function CharacterHolder(props){
    //need to put in the player icons player 1-6  
    return(<div className='characterHolder'> <Player1Dot props={props} ></Player1Dot> </div>)
}
export default CharacterHolder
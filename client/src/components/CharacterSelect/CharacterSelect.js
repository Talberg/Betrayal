import React from 'react'
import './CharacterSelect.scss'
import CharacterCard from '../CharacterCard/CharacterCard'
import Ready from '../Ready/Ready'

function CharacterSelect(props) {

    console.log(props.rooms.CharacterArray)


    return (
        <div className='characterSelect'>
<CharacterCard save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms} ></CharacterCard>
<Ready save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms}></Ready>


       







        </div>
    )
}
export default CharacterSelect
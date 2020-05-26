import React from 'react'
import './Start.scss'
import LeftDoor from '../Doors/LeftDoor/LeftDoor'
import Room from '../Room/Room'

function Start (props){let trueBoi

    
    //set the allready to true 
    function AllReady (event){
    event.preventDefault()
        trueBoi = true
        Object.keys(props.rooms.players).map(ready=>
            {
                let ifReady = props.rooms.players[ready]
                if(!ifReady){
                    trueBoi = false
                }

            }
            
        )
        console.log(trueBoi)
    }







    props.changeState(
        {...props.rooms,allReady:trueBoi}
    )
function startTheGame(event){
    
}

    return (<div className='start'>
        <button onClick={AllReady} className='startButton'>Start Your Game</button>
    </div>)
}

export default Start 
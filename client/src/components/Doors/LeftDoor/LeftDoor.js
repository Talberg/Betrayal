import React from 'react'   
import './LeftDoor.scss'

function LeftDoor(props){
    console.log(props.x)
    function goLeft(){
let splitX = props.x.split('x')

let newX =`x${splitX[1]-1}`
console.log(newX+props.y)


 console.log(props.open)


        

    }
    return (<><button onClick={goLeft} className='leftDoor' ></button></>)
}

export default LeftDoor
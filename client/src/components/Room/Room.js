import React from 'react'
import './Room.scss'
import { PromiseProvider } from 'mongoose'
import LeftDoor from '../Doors/LeftDoor/LeftDoor'

function Room(props){
    console.log('Room Props')
    console.log(props)

    function pickRoom(){
        switch(props.doors){
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 'r' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 'b' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 'l' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}><LeftDoor open={props.open} x={`${props.x} `} y={`${props.y}`}  location={`${props.coor}`} ></LeftDoor></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            case 't' : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>);
            default : return(  <div className={`${props.x} ${props.color} room ${props.y}`}></div>)


        }
    }





return(<>{pickRoom()}</>)
}

export default Room
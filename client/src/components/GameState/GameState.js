import React,{useEffect,useState} from 'react'   
import './GameState.scss'
import GameCard from '../GameCard/GameCard'
import Map from '../Map/Map'
import API from '../../utils/API'

function GameState(props){
    const [game,saveGame]=useState()
    const [loaded,setLoaded] = useState({
        loaded:false
    })
    const [rooms, setRooms] = useState(
     
    )



    function loadGame(){
     return( API.loadGame(window.location.pathname))
    }
    function fullLoad(){
        setLoaded({loaded:true})
        setRooms({
            ...game.game
        })

    }


useEffect(()=>{
    //need to get the data from the DB  by using _id passed through then grabbed by the rec.params part of a GET route 
    loadGame().then(res=>{
        console.log(res)
        //save the data that is coming back in the state
        saveGame(res.data)
       
        
    }).then(log=>{
        
    })


    console.log(window.location.pathname)
},[])
useEffect(()=>{
    //need to save the new opject to the database everytime the rooms object is updated 
console.log('not saving')
console.log(game)
console.log(rooms)
{game ? fullLoad()  :
   console.log('didnt work') }

},[game])




return(<div  >
    {console.log(rooms)}
    {rooms ? <><Map changeState={setRooms} rooms={rooms} ></Map></>:<> <h1>LOADING!!!!</h1></>}
</div>)
}


export default GameState
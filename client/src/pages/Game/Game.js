import React, { useState, useEffect } from 'react'
import './Game.scss'
import GameCard from '../../components/GameCard/GameCard'
import Map from '../../components/Map/Map'
import API from "../../utils/API"

function Game(props) {
    const [user, setUser] = useState({


    })
    const [rooms, setRooms] = useState({
        open: {
'x0y0' : false,
'x1y0' : false,
'x2y0' : false,
'x3y0' : false,
'x4y0' : false,
'x5y0' : false,
'x6y0' : false,
'x7y0' : false,
'x8y0' : false,
'x9y0' : false,
'x10y0': false,
'x11y0': false,
'x12y0': false,
'x13y0': false,
'x14y0': false,
'x0y1' : false,
'x1y1' : false,
'x2y1' : false,
'x3y1' : false,
'x4y1' : false,
'x5y1' : false,
'x6y1' : false,
'x7y1' : false,
'x8y1' : false,
'x9y1' : false,
'x10y1': false,
'x11y1': false,
'x12y1': false,
'x13y1': false,
'x14y1': false,
'x0y2' : false,
'x1y2' : false,
'x2y2' : false,
'x3y2' : false,
'x4y2' : false,
'x5y2' : false,
'x6y2' : false,
'x7y2' : false,
'x8y2' : false,
'x9y2' : false,
'x10y2': false,
'x11y2': false,
'x12y2': false,
'x13y2': false,
'x14y2': false,
'x0y3' : false,
'x1y3' : false,
'x2y3' : false,
'x3y3' : false,
'x4y3' : false,
'x5y3' : false,
'x6y3' : false,
'x7y3' : false,
'x8y3' : false,
'x9y3' : false,
'x10y3': false,
'x11y3': false,
'x12y3': false,
'x13y3': false,
'x14y3': false,
'x0y4' : false,
'x1y4' : false,
'x2y4' : false,
'x3y4' : false,
'x4y4' : false,
'x5y4' : false,
'x6y4' : false,
'x7y4' : false,
'x8y4' : false,
'x9y4' : false,
'x10y4': false,
'x11y4': false,
'x12y4': false,
'x13y4': false,
'x14y4': false,
'x0y5' : false,
'x1y5' : false,
'x2y5' : false,
'x3y5' : false,
'x4y5' : false,
'x5y5' : false,
'x6y5' : false,
'x7y5' :true,
'x8y5' : false,
'x9y5' : false,
'x10y5': false,
'x11y5': false,
'x12y5': false,
'x13y5': false,
'x14y5': false,
'x0y6' : false,
'x1y6' : false,
'x2y6' : false,
'x3y6' : false,
'x4y6' : false,
'x5y6' : false,
'x6y6' : false,
'x7y6' : false,
'x8y6' : false,
'x9y6' : false,
'x10y6': false,
'x11y6': false,
'x12y6': false,
'x13y6': false,
'x14y6': false,
'x0y7' : false,
'x1y7' : false,
'x2y7' : false,
'x3y7' : false,
'x4y7' : false,
'x5y7' : false,
'x6y7' : false,
'x7y7' : false,
'x8y7' : false,
'x9y7' : false,
'x10y7': false,
'x11y7': false,
'x12y7': false,
'x13y7': false,
'x14y7': false,
'x0y8' : false,
'x1y8' : false,
'x2y8' : false,
'x3y8' : false,
'x4y8' : false,
'x5y8' : false,
'x6y8' : false,
'x7y8' : false,
'x8y8' : false,
'x9y8' : false,
'x10y8': false,
'x11y8': false,
'x12y8': false,
'x13y8': false,
'x14y8': false,
'x0y9' : false,
'x1y9' : false,
'x2y9' : false,
'x3y9' : false,
'x4y9' : false,
'x5y9' : false,
'x6y9' : false,
'x7y9' : false,
'x8y9' : false,
'x9y9' : false,
'x10y9': false,
'x11y9': false,
'x12y9': false,
'x13y9': false,
'x14y9': false,
'x0y10': false,
'x1y10': false,
'x2y10': false,
'x3y10': false,
'x4y10': false,
'x5y10': false,
'x6y10': false,
'x7y10': false,
'x8y10': false,
'x9y10': false,
'x10y10': false,
'x11y10':  false,
'x12y10': false,
'x13y10': false,
'x14y10': false,
       },
       doors:{
           
'x0y0' : 'trbl',
'x1y0' : 'trbl',
'x2y0' : 'trbl',
'x3y0' : 'trbl',
'x4y0' : 'trbl',
'x5y0' : 'trbl',
'x6y0' : 'trbl',
'x7y0' : 'trbl',
'x8y0' : 'trbl',
'x9y0' : 'trbl',
'x10y0': 'trbl',
'x11y0': 'trbl',
'x12y0': 'trbl',
'x13y0': 'trbl',
'x14y0': 'trbl',
'x0y1' : 'trbl',
'x1y1' : 'trbl',
'x2y1' : 'trbl',
'x3y1' : 'trbl',
'x4y1' : 'trbl',
'x5y1' : 'trbl',
'x6y1' : 'trbl',
'x7y1' : 'trbl',
'x8y1' : 'trbl',
'x9y1' : 'trbl',
'x10y1': 'trbl',
'x11y1': 'trbl',
'x12y1': 'trbl',
'x13y1': 'trbl',
'x14y1': 'trbl',
'x0y2' : 'trbl',
'x1y2' : 'trbl',
'x2y2' : 'trbl',
'x3y2' : 'trbl',
'x4y2' : 'trbl',
'x5y2' : 'trbl',
'x6y2' : 'trbl',
'x7y2' : 'trbl',
'x8y2' : 'trbl',
'x9y2' : 'trbl',
'x10y2': 'trbl',
'x11y2': 'trbl',
'x12y2': 'trbl',
'x13y2': 'trbl',
'x14y2': 'trbl',
'x0y3' : 'trbl',
'x1y3' : 'trbl',
'x2y3' : 'trbl',
'x3y3' : 'trbl',
'x4y3' : 'trbl',
'x5y3' : 'trbl',
'x6y3' : 'trbl',
'x7y3' : 'trbl',
'x8y3' : 'trbl',
'x9y3' : 'trbl',
'x10y3': 'trbl',
'x11y3': 'trbl',
'x12y3': 'trbl',
'x13y3': 'trbl',
'x14y3': 'trbl',
'x0y4' : 'trbl',
'x1y4' : 'trbl',
'x2y4' : 'trbl',
'x3y4' : 'trbl',
'x4y4' : 'trbl',
'x5y4' : 'trbl',
'x6y4' : 'trbl',
'x7y4' : 'trbl',
'x8y4' : 'trbl',
'x9y4' : 'trbl',
'x10y4': 'trbl',
'x11y4': 'trbl',
'x12y4': 'trbl',
'x13y4': 'trbl',
'x14y4': 'trbl',
'x0y5' : 'trbl',
'x1y5' : 'trbl',
'x2y5' : 'trbl',
'x3y5' : 'trbl',
'x4y5' : 'trbl',
'x5y5' : 'trbl',
'x6y5' : 'trbl',
'x7y5' : 'trbl',
'x8y5' : 'trbl',
'x9y5' : 'trbl',
'x10y5': 'trbl',
'x11y5': 'trbl',
'x12y5': 'trbl',
'x13y5': 'trbl',
'x14y5': 'trbl',
'x0y6' : 'trbl',
'x1y6' : 'trbl',
'x2y6' : 'trbl',
'x3y6' : 'trbl',
'x4y6' : 'trbl',
'x5y6' : 'trbl',
'x6y6' : 'trbl',
'x7y6' : 'trbl',
'x8y6' : 'trbl',
'x9y6' : 'trbl',
'x10y6': 'trbl',
'x11y6': 'trbl',
'x12y6': 'trbl',
'x13y6': 'trbl',
'x14y6': 'trbl',
'x0y7' : 'trbl',
'x1y7' : 'trbl',
'x2y7' : 'trbl',
'x3y7' : 'trbl',
'x4y7' : 'trbl',
'x5y7' : 'trbl',
'x6y7' : 'trbl',
'x7y7' : 'trbl',
'x8y7' : 'trbl',
'x9y7' : 'trbl',
'x10y7': 'trbl',
'x11y7': 'trbl',
'x12y7': 'trbl',
'x13y7': 'trbl',
'x14y7': 'trbl',
'x0y8' : 'trbl',
'x1y8' : 'trbl',
'x2y8' : 'trbl',
'x3y8' : 'trbl',
'x4y8' : 'trbl',
'x5y8' : 'trbl',
'x6y8' : 'trbl',
'x7y8' : 'trbl',
'x8y8' : 'trbl',
'x9y8' : 'trbl',
'x10y8': 'trbl',
'x11y8': 'trbl',
'x12y8': 'trbl',
'x13y8': 'trbl',
'x14y8': 'trbl',
'x0y9' : 'trbl',
'x1y9' : 'trbl',
'x2y9' : 'trbl',
'x3y9' : 'trbl',
'x4y9' : 'trbl',
'x5y9' : 'trbl',
'x6y9' : 'trbl',
'x7y9' : 'trbl',
'x8y9' : 'trbl',
'x9y9' : 'trbl',
'x10y9': 'trbl',
'x11y9': 'trbl',
'x12y9': 'trbl',
'x13y9': 'trbl',
'x14y9': 'trbl',
'x0y10': 'trbl',
'x1y10': 'trbl',
'x2y10': 'trbl',
'x3y10': 'trbl',
'x4y10': 'trbl',
'x5y10': 'trbl',
'x6y10': 'trbl',
'x7y10': 'trbl',
'x8y10': 'trbl',
'x9y10': 'trbl',
'x10y10': 'trbl',
'x11y10':  'trbl',
'x12y10': 'trbl',
'x13y10': 'trbl',
'x14y10': 'trbl',
       
       }
    })

    useEffect(() => {
        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                setUser({
                    loggedIn: true,
                    user: user.data.user
                });
                console.log(user.data)
            }
        },
        )
    }, [])


    return (<>
        <GameCard></GameCard>
        <Map changeState={setRooms} rooms={rooms} />
    </>)
}

export default Game
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React from 'react'
import './Room.scss'
import { PromiseProvider } from 'mongoose'
import LeftDoor from '../Doors/LeftDoor/LeftDoor'
import RightDoor from '../Doors/RightDoor/RightDoor'
import BottomDoor from '../Doors/BottomDoor/BottomDoor'
import TopDoor from '../Doors/TopDoor/TopDoor'
import RoomName from '../RoomName/RoomName'

function Room(props) {
    let coor = props.coor
    console.log(coor)
    let doorString = props.rooms.doors[coor]
    console.log(props.rooms.GroundFloor[coor])
    let currentRoom = props.rooms.GroundFloor[coor]
    console.log(currentRoom)
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }



    function pickRoom() {
        switch (currentRoom.numDoors) {
            // eslint-disable-next-line default-case
            case 1: switch (currentRoom.doors) {
                case 'r': return (<div className={`${props.x} ${props.color} room ${props.y}`}><RightDoor rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor></div>);
                case 't': return (<div className={`${props.x} ${props.color} room ${props.y}`}><TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} /> </div>);
                case 'b': return (<div className={`${props.x} ${props.color} room ${props.y}`}><BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor> </div>);
                case 'l': return (<div className={`${props.x} ${props.color} room ${props.y}`}><LeftDoor rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor></div>);

            };
            // eslint-disable-next-line no-fallthrough
            // eslint-disable-next-line default-case
            // eslint-disable-next-line no-fallthrough
            // eslint-disable-next-line default-case
            // eslint-disable-next-line no-fallthrough
            // eslint-disable-next-line default-case
            // eslint-disable-next-line no-fallthrough
            case 2: switch (props.room.entry) {
                case 'r':
                    // eslint-disable-next-line default-case
                    switch (currentRoom.doors) {
                        case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <RightDoor doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <LeftDoor doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        </div>);
                        case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <RightDoor doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <BottomDoor doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        </div>);
                        case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <TopDoor doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                            <RightDoor doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        </div>);

                    };
                // eslint-disable-next-line no-fallthrough
                case 't': switch (currentRoom.doors) {
                    case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                    </div>);
                    case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                    case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>

                    </div>);


                };
                // eslint-disable-next-line no-fallthrough
                case 'b': switch (currentRoom.doors) {
                    case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                    case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                    case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);

                }
                    ;
                case 'l': switch (currentRoom.doors) {
                    case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                    case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>

                    </div>);
                    case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                };

            };
            case 3: switch (props.room.doors) {

            };
            case 4: return (<div className={`${props.x} ${props.color} room ${props.y}`}>
            <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
            <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
            <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
        </div>);

            case 't': return (<div className={`${props.x} ${props.color} room ${props.y}`}><TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} /> </div>);
            case 'r': return (<div className={`${props.x} ${props.color} room ${props.y}`}><RightDoor rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor></div>);
            case 'b': return (<div className={`${props.x} ${props.color} room ${props.y}`}><BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor> </div>);
            case 'l': return (<div className={`${props.x} ${props.color} room ${props.y}`}><LeftDoor rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor></div>);
            case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
            </div>);
            case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>

            </div>);
            case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'trbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
          





            // eslint-disable-next-line default-case

            // eslint-disable-next-line no-fallthrough
            case 4: return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor doors={props.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            default: return (<div className={`${props.x} ${props.color} room ${props.y}`}></div>)


        }
    }





    return (<>

        {props.open ? <> {pickRoom()} </> : <></>}
    </>)
}

export default Room
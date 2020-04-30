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

    let doorString = props.rooms.doors[coor]

    let currentRoom = props.rooms.GroundFloor[coor]

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }



    function pickRoom() {
        switch (currentRoom.numDoors) {
            // eslint-disable-next-line default-case
            case 1: switch (currentRoom.entry) {
                case 'r': return (<div className={`${props.x} ${props.color} room ${props.y}`}><RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor></div>);
                case 't': return (<div className={`${props.x} ${props.color} room ${props.y}`}><TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} /> </div>);
                case 'b': return (<div className={`${props.x} ${props.color} room ${props.y}`}><BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor> </div>);
                case 'l': return (<div className={`${props.x} ${props.color} room ${props.y}`}><LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor></div>);

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
                            <RightDoor  user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <LeftDoor user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        </div>);
                        case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <RightDoor  user={props.user} save={props.save} doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <BottomDoor user={props.user} save={props.save} doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        </div>);
                        case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <TopDoor user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                            <RightDoor  user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        </div>);

                    };
                // eslint-disable-next-line no-fallthrough
                case 't': switch (currentRoom.doors) {
                    case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                    </div>);
                    case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                    case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>

                    </div>);


                };
                // eslint-disable-next-line no-fallthrough
                case 'b': switch (currentRoom.doors) {
                    case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                    case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                    case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);

                }
                    ;
                case 'l': switch (currentRoom.doors) {
                    case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                    case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>

                    </div>);
                    case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                };

            };
            case 3: switch (props.room.entry) {
                case 't': switch (currentRoom.doors) {
                    case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                    case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);

                }
                case 'r': switch (currentRoom.doors) {
                    case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                        case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);


                }
                case 'l': switch (currentRoom.doors) {
                    case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                    </div>);
                    case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    </div>);
                          case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                          <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                          <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                          <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                      </div>);
                }
                case 'b' : switch(currentRoom.doors){
                    case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                    <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                    <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                    <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                </div>);
                case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
                case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
                  case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                  <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                  <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                  <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
              </div>);
                    
                }


            };
            case 4: return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);

            case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
            </div>);
            case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>

            </div>);
            case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'trbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);






            // eslint-disable-next-line default-case

            // eslint-disable-next-line no-fallthrough
            case 4: return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            default: return (<div className={`${props.x} ${props.color} room ${props.y}`}></div>)


        }
    }





    return (<>

        {props.open ? <> {pickRoom()} </> : <></>}
    </>)
}

export default Room
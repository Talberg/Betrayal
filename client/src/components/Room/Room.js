import React from 'react'
import './Room.scss'
import { PromiseProvider } from 'mongoose'
import LeftDoor from '../Doors/LeftDoor/LeftDoor'
import RightDoor from '../Doors/RightDoor/RightDoor'
import BottomDoor from '../Doors/BottomDoor/BottomDoor'
import TopDoor from '../Doors/TopDoor/TopDoor'

function Room(props) {
   
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }



    function pickRoom() {
        switch (props.doors) {
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
            case 2: switch (props.room.entry) {
                case 'r':
                    let rArray = ['rl', 'rb', 'tr']

                    // eslint-disable-next-line default-case
                    switch (rArray[getRandomInt(3)]) {
                        case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <RightDoor doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <LeftDoor doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        </div>);
                        case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <RightDoor doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <BottomDoor doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        </div>);
                        case 'tr' : return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor doors='tr' rooms='tr' changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                    </div>);

                    };
                case 't': return ('allt cases');
                case 'b': return ('all b cases ');
                case 'l': return ('all l cases');

            };
            // eslint-disable-next-line no-fallthrough
            case 4: return (<div className={`${props.x} ${props.color} room ${props.y}`}>>
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
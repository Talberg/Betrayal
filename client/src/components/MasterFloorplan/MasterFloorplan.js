import React from 'react'
import './MasterFloorplan.scss'
import Start from '../Start/Start'
import Room from '../Room/Room'

function MasterFloorplan(props){

console.log(`MasterFloorplan props below`)
console.log(props.rooms.doors)



    return(<><div className='masterFloorplan'>
        
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y0'  open= {props.rooms.open.x0y0}    
         doors= {props.rooms.doors.x0y0}     x='x0 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y0'  open= {props.rooms.open.x1y0}     doors= {props.rooms.doors.x1y0}     x='x1 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y0'  open= {props.rooms.open.x2y0}     doors= {props.rooms.doors.x2y0}     x='x2 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y0'  open= {props.rooms.open.x3y0}     doors= {props.rooms.doors.x3y0}     x='x3 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y0'  open= {props.rooms.open.x4y0}     doors= {props.rooms.doors.x4y0}     x='x4 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y0'  open= {props.rooms.open.x5y0}     doors= {props.rooms.doors.x5y0}     x='x5 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y0'  open= {props.rooms.open.x6y0}     doors= {props.rooms.doors.x6y0}     x='x6 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y0'  open= {props.rooms.open.x7y0}     doors= {props.rooms.doors.x7y0}     x='x7 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y0'  open= {props.rooms.open.x8y0}     doors= {props.rooms.doors.x8y0}     x='x8 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y0'  open= {props.rooms.open.x9y0}     doors= {props.rooms.doors.x9y0}     x='x9 ' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y0' open= {props.rooms.open.x10y0}    doors= {props.rooms.doors.x10y0}      x='x10' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y0' open= {props.rooms.open.x11y0}    doors= {props.rooms.doors.x11y0}      x='x11' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y0' open= {props.rooms.open.x12y0}    doors= {props.rooms.doors.x12y0}      x='x12' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y0' open= {props.rooms.open.x13y0}    doors= {props.rooms.doors.x13y0}      x='x13' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y0' open= {props.rooms.open.x14y0}    doors= {props.rooms.doors.x14y0}      x='x14' y= 'y0' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y1'  open= {props.rooms.open.x0y1}     doors= {props.rooms.doors.x0y1}      x='x0' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y1'  open= {props.rooms.open.x1y1}     doors= {props.rooms.doors.x1y1}      x='x1' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y1'  open= {props.rooms.open.x2y1}     doors= {props.rooms.doors.x2y1}      x='x2' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y1'  open= {props.rooms.open.x3y1}     doors= {props.rooms.doors.x3y1}      x='x3' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y1'  open= {props.rooms.open.x4y1}     doors= {props.rooms.doors.x4y1}      x='x4' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y1'  open= {props.rooms.open.x5y1}     doors= {props.rooms.doors.x5y1}      x='x5' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y1'  open= {props.rooms.open.x6y1}     doors= {props.rooms.doors.x6y1}      x='x6' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y1'  open= {props.rooms.open.x7y1}     doors= {props.rooms.doors.x7y1}      x='x7' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y1'  open= {props.rooms.open.x8y1}     doors= {props.rooms.doors.x8y1}      x='x8' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y1'  open= {props.rooms.open.x9y1}     doors= {props.rooms.doors.x9y1}      x='x9' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y1' open= {props.rooms.open.x10y1}    doors= {props.rooms.doors.x10y1}      x='x10' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y1' open= {props.rooms.open.x11y1}    doors= {props.rooms.doors.x11y1}      x='x11' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y1' open= {props.rooms.open.x12y1}    doors= {props.rooms.doors.x12y1}      x='x12' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y1' open= {props.rooms.open.x13y1}    doors= {props.rooms.doors.x13y1}      x='x13' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y1' open= {props.rooms.open.x14y1}    doors= {props.rooms.doors.x14y1}      x='x14' y= 'y1' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y2'  open= {props.rooms.open.x0y2}     doors= {props.rooms.doors.x0y2}     x='x0' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y2'  open= {props.rooms.open.x1y2}     doors= {props.rooms.doors.x1y2}     x='x1' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y2'  open= {props.rooms.open.x2y2}     doors= {props.rooms.doors.x2y2}     x='x2' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y2'  open= {props.rooms.open.x3y2}     doors= {props.rooms.doors.x3y2}     x='x3' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y2'  open= {props.rooms.open.x4y2}     doors= {props.rooms.doors.x4y2}     x='x4' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y2'  open= {props.rooms.open.x5y2}     doors= {props.rooms.doors.x5y2}     x='x5' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y2'  open= {props.rooms.open.x6y2}     doors= {props.rooms.doors.x6y2}     x='x6' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y2'  open= {props.rooms.open.x7y2}     doors= {props.rooms.doors.x7y2}     x='x7' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y2'  open= {props.rooms.open.x8y2}     doors= {props.rooms.doors.x8y2}     x='x8' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y2'  open= {props.rooms.open.x9y2}     doors= {props.rooms.doors.x9y2}     x='x9' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y2' open= {props.rooms.open.x10y2}    doors= {props.rooms.doors.x10y2}     x='x10' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y2' open= {props.rooms.open.x11y2}    doors= {props.rooms.doors.x11y2}     x='x11' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y2' open= {props.rooms.open.x12y2}    doors= {props.rooms.doors.x12y2}     x='x12' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y2' open= {props.rooms.open.x13y2}    doors= {props.rooms.doors.x13y2}     x='x13' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y2' open= {props.rooms.open.x14y2}    doors= {props.rooms.doors.x14y2}     x='x14' y= 'y2' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y3'  open= {props.rooms.open.x0y3}     doors= {props.rooms.doors.x0y3}     x='x0' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y3'  open= {props.rooms.open.x1y3}     doors= {props.rooms.doors.x1y3}     x='x1' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y3'  open= {props.rooms.open.x2y3}     doors= {props.rooms.doors.x2y3}     x='x2' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y3'  open= {props.rooms.open.x3y3}     doors= {props.rooms.doors.x3y3}     x='x3' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y3'  open= {props.rooms.open.x4y3}     doors= {props.rooms.doors.x4y3}     x='x4' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y3'  open= {props.rooms.open.x5y3}     doors= {props.rooms.doors.x5y3}     x='x5' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y3'  open= {props.rooms.open.x6y3}     doors= {props.rooms.doors.x6y3}     x='x6' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y3'  open= {props.rooms.open.x7y3}     doors= {props.rooms.doors.x7y3}     x='x7' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y3'  open= {props.rooms.open.x8y3}     doors= {props.rooms.doors.x8y3}     x='x8' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y3'  open= {props.rooms.open.x9y3}     doors= {props.rooms.doors.x9y3}     x='x9' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y3' open= {props.rooms.open.x10y3}    doors= {props.rooms.doors.x10y3}     x='x10' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y3' open= {props.rooms.open.x11y3}    doors= {props.rooms.doors.x11y3}     x='x11' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y3' open= {props.rooms.open.x12y3}    doors= {props.rooms.doors.x12y3}     x='x12' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y3' open= {props.rooms.open.x13y3}    doors= {props.rooms.doors.x13y3}     x='x13' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y3' open= {props.rooms.open.x14y3}    doors= {props.rooms.doors.x14y3}     x='x14' y= 'y3' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y4'  open= {props.rooms.open.x0y4}     doors= {props.rooms.doors.x0y4}      x='x0' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y4'  open= {props.rooms.open.x1y4}     doors= {props.rooms.doors.x1y4}      x='x1' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y4'  open= {props.rooms.open.x2y4}     doors= {props.rooms.doors.x2y4}      x='x2' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y4'  open= {props.rooms.open.x3y4}     doors= {props.rooms.doors.x3y4}      x='x3' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y4'  open= {props.rooms.open.x4y4}     doors= {props.rooms.doors.x4y4}      x='x4' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y4'  open= {props.rooms.open.x5y4}     doors= {props.rooms.doors.x5y4}      x='x5' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y4'  open= {props.rooms.open.x6y4}     doors= {props.rooms.doors.x6y4}      x='x6' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y4'  open= {props.rooms.open.x7y4}     doors= {props.rooms.doors.x7y4}      x='x7' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y4'  open= {props.rooms.open.x8y4}     doors= {props.rooms.doors.x8y4}      x='x8' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y4'  open= {props.rooms.open.x9y4}     doors= {props.rooms.doors.x9y4}      x='x9' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y4' open= {props.rooms.open.x10y4}    doors= {props.rooms.doors.x10y4}      x='x10' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y4' open= {props.rooms.open.x11y4}    doors= {props.rooms.doors.x11y4}      x='x11' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y4' open= {props.rooms.open.x12y4}    doors= {props.rooms.doors.x12y4}      x='x12' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y4' open= {props.rooms.open.x13y4}    doors= {props.rooms.doors.x13y4}      x='x13' y= 'y4' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y4' open= {props.rooms.open.x14y4}    doors= {props.rooms.doors.x14y4}      x='x14' y= 'y4' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y5'  open= {props.rooms.open.x0y5}     doors= {props.rooms.doors.x0y5}     x='x0' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y5'  open= {props.rooms.open.x1y5}     doors= {props.rooms.doors.x1y5}     x='x1' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y5'  open= {props.rooms.open.x2y5}     doors= {props.rooms.doors.x2y5}     x='x2' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y5'  open= {props.rooms.open.x3y5}     doors= {props.rooms.doors.x3y5}     x='x3' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y5'  open= {props.rooms.open.x4y5}     doors= {props.rooms.doors.x4y5}     x='x4' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y5'  open= {props.rooms.open.x5y5}     doors= {props.rooms.doors.x5y5}     x='x5' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y5'  open= {props.rooms.open.x6y5}     doors= {props.rooms.doors.x6y5}     x='x6' y= 'y5' ></Room>
        <Room  color='black' doors='trbl'   rooms={props.rooms} changeState={props.changeState} coor='x7y5'  open= {props.rooms.open.x7y5}         x='x7' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y5'  open= {props.rooms.open.x8y5}     doors= {props.rooms.doors.x8y5}     x='x8' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y5'  open= {props.rooms.open.x9y5}     doors= {props.rooms.doors.x9y5}     x='x9' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y5' open= {props.rooms.open.x10y5}    doors= {props.rooms.doors.x10y5}     x='x10' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y5' open= {props.rooms.open.x11y5}    doors= {props.rooms.doors.x11y5}     x='x11' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y5' open= {props.rooms.open.x12y5}    doors= {props.rooms.doors.x12y5}     x='x12' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y5' open= {props.rooms.open.x13y5}    doors= {props.rooms.doors.x13y5}     x='x13' y= 'y5' ></Room>
        <Room  color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y5' open= {props.rooms.open.x14y5}    doors= {props.rooms.doors.x14y5}     x='x14' y= 'y5' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y6'  open= {props.rooms.open.x0y6}     doors= {props.rooms.doors.x0y6}     x='x0' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y6'  open= {props.rooms.open.x1y6}     doors= {props.rooms.doors.x1y6}     x='x1' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y6'  open= {props.rooms.open.x2y6}     doors= {props.rooms.doors.x2y6}     x='x2' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y6'  open= {props.rooms.open.x3y6}     doors= {props.rooms.doors.x3y6}     x='x3' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y6'  open= {props.rooms.open.x4y6}     doors= {props.rooms.doors.x4y6}     x='x4' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y6'  open= {props.rooms.open.x5y6}     doors= {props.rooms.doors.x5y6}     x='x5' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y6'  open= {props.rooms.open.x6y6}     doors= {props.rooms.doors.x6y6}     x='x6' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y6'  open= {props.rooms.open.x7y6}     doors= {props.rooms.doors.x7y6}     x='x7' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y6'  open= {props.rooms.open.x8y6}     doors= {props.rooms.doors.x8y6}     x='x8' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y6'  open= {props.rooms.open.x9y6}     doors= {props.rooms.doors.x9y6}     x='x9' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y6' open= {props.rooms.open.x10y6}    doors= {props.rooms.doors.x10y6}     x='x10' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y6' open= {props.rooms.open.x11y6}    doors= {props.rooms.doors.x11y6}     x='x11' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y6' open= {props.rooms.open.x12y6}    doors= {props.rooms.doors.x12y6}     x='x12' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y6' open= {props.rooms.open.x13y6}    doors= {props.rooms.doors.x13y6}     x='x13' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y6' open= {props.rooms.open.x14y6}    doors= {props.rooms.doors.x14y6}     x='x14' y= 'y6' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y7'  open= {props.rooms.open.x0y7}     doors= {props.rooms.doors.x0y7}     x='x0' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y7'  open= {props.rooms.open.x1y7}     doors= {props.rooms.doors.x1y7}     x='x1' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y7'  open= {props.rooms.open.x2y7}     doors= {props.rooms.doors.x2y7}     x='x2' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y7'  open= {props.rooms.open.x3y7}     doors= {props.rooms.doors.x3y7}     x='x3' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y7'  open= {props.rooms.open.x4y7}     doors= {props.rooms.doors.x4y7}     x='x4' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y7'  open= {props.rooms.open.x5y7}     doors= {props.rooms.doors.x5y7}     x='x5' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y7'  open= {props.rooms.open.x6y7}     doors= {props.rooms.doors.x6y7}     x='x6' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y7'  open= {props.rooms.open.x7y7}     doors= {props.rooms.doors.x7y7}     x='x7' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y7'  open= {props.rooms.open.x8y7}     doors= {props.rooms.doors.x8y7}     x='x8' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y7'  open= {props.rooms.open.x9y7}     doors= {props.rooms.doors.x9y7}     x='x9' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y7' open= {props.rooms.open.x10y7}    doors= {props.rooms.doors.x10y7}     x='x10' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y7' open= {props.rooms.open.x11y7}    doors= {props.rooms.doors.x11y7}     x='x11' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y7' open= {props.rooms.open.x12y7}    doors= {props.rooms.doors.x12y7}     x='x12' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y7' open= {props.rooms.open.x13y7}    doors= {props.rooms.doors.x13y7}     x='x13' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y7' open= {props.rooms.open.x14y7}    doors= {props.rooms.doors.x14y7}     x='x14' y= 'y7' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y8'  open= {props.rooms.open.x0y8}     doors= {props.rooms.doors.x0y8}     x='x0' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y8'  open= {props.rooms.open.x1y8}     doors= {props.rooms.doors.x1y8}     x='x1' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y8'  open= {props.rooms.open.x2y8}     doors= {props.rooms.doors.x2y8}     x='x2' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y8'  open= {props.rooms.open.x3y8}     doors= {props.rooms.doors.x3y8}     x='x3' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y8'  open= {props.rooms.open.x4y8}     doors= {props.rooms.doors.x4y8}     x='x4' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y8'  open= {props.rooms.open.x5y8}     doors= {props.rooms.doors.x5y8}     x='x5' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y8'  open= {props.rooms.open.x6y8}     doors= {props.rooms.doors.x6y8}     x='x6' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y8'  open= {props.rooms.open.x7y8}     doors= {props.rooms.doors.x7y8}     x='x7' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y8'  open= {props.rooms.open.x8y8}     doors= {props.rooms.doors.x8y8}     x='x8' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y8'  open= {props.rooms.open.x9y8}     doors= {props.rooms.doors.x9y8}     x='x9' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y8' open= {props.rooms.open.x10y8}    doors= {props.rooms.doors.x10y8}     x='x10' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y8' open= {props.rooms.open.x11y8}    doors= {props.rooms.doors.x11y8}     x='x11' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y8' open= {props.rooms.open.x12y8}    doors= {props.rooms.doors.x12y8}     x='x12' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y8' open= {props.rooms.open.x13y8}    doors= {props.rooms.doors.x13y8}     x='x13' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y8' open= {props.rooms.open.x14y8}    doors= {props.rooms.doors.x14y8}     x='x14' y= 'y8' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y9'  open= {props.rooms.open.x0y9}     doors= {props.rooms.doors.x0y9}     x='x0' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y9'  open= {props.rooms.open.x1y9}     doors= {props.rooms.doors.x1y9}     x='x1' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y9'  open= {props.rooms.open.x2y9}     doors= {props.rooms.doors.x2y9}     x='x2' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y9'  open= {props.rooms.open.x3y9}     doors= {props.rooms.doors.x3y9}     x='x3' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y9'  open= {props.rooms.open.x4y9}     doors= {props.rooms.doors.x4y9}     x='x4' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y9'  open= {props.rooms.open.x5y9}     doors= {props.rooms.doors.x5y9}     x='x5' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y9'  open= {props.rooms.open.x6y9}     doors= {props.rooms.doors.x6y9}     x='x6' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y9'  open= {props.rooms.open.x7y9}     doors= {props.rooms.doors.x7y9}     x='x7' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y9'  open= {props.rooms.open.x8y9}     doors= {props.rooms.doors.x8y9}     x='x8' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y9'  open= {props.rooms.open.x9y9}     doors= {props.rooms.doors.x9y9}     x='x9' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y9' open= {props.rooms.open.x10y9}    doors= {props.rooms.doors.x10y9}     x='x10' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y9' open= {props.rooms.open.x11y9}    doors= {props.rooms.doors.x11y9}     x='x11' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y9' open= {props.rooms.open.x12y9}    doors= {props.rooms.doors.x12y9}     x='x12' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y9' open= {props.rooms.open.x13y9}    doors= {props.rooms.doors.x13y9}     x='x13' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y9' open= {props.rooms.open.x14y9}    doors= {props.rooms.doors.x14y9}     x='x14' y= 'y9' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x0y10' open= {props.rooms.open.x0y10}    doors= {props.rooms.doors.x0y10}      x='x0' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x1y10' open= {props.rooms.open.x1y10}    doors= {props.rooms.doors.x1y10}      x='x1' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x2y10' open= {props.rooms.open.x2y10}    doors= {props.rooms.doors.x2y10}      x='x2' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x3y10' open= {props.rooms.open.x3y10}    doors= {props.rooms.doors.x3y10}      x='x3' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x4y10' open= {props.rooms.open.x4y10}    doors= {props.rooms.doors.x4y10}      x='x4' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x5y10' open= {props.rooms.open.x5y10}    doors= {props.rooms.doors.x5y10}      x='x5' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x6y10' open= {props.rooms.open.x6y10}    doors= {props.rooms.doors.x6y10}      x='x6' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x7y10' open= {props.rooms.open.x7y10}    doors= {props.rooms.doors.x7y10}      x='x7' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x8y10' open= {props.rooms.open.x8y10}    doors= {props.rooms.doors.x8y10}      x='x8' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x9y10' open= {props.rooms.open.x9y10}    doors= {props.rooms.doors.x9y10}      x='x9' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x10y10' open= {props.rooms.open.x10y1}    doors= {props.rooms.doors.x10y1}      x='x10' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x11y10' open= {props.rooms.open.x11y1}    doors= {props.rooms.doors.x11y1}      x='x11' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x12y10' open= {props.rooms.open.x12y1}    doors= {props.rooms.doors.x12y1}      x='x12' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x13y10' open= {props.rooms.open.x13y1}    doors= {props.rooms.doors.x13y1}      x='x13' y= 'y10' ></Room>
        <Room color='black'   rooms={props.rooms} changeState={props.changeState} coor='x14y10' open= {props.rooms.open.x14y1}    doors= {props.rooms.doors.x14y1}      x='x14' y= 'y10' ></Room>
       
        



    
    </div></>)
}
export default MasterFloorplan
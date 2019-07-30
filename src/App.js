import React, { useState, useEffect } from 'react';
import './App.min.css';

document.title = "Trolleybus";
//let mainSize = 8;
//let mainSizeStyle = {fontSize: mainSize + 'px'};
//let trolleybusBlocksItemsNum = 5;

//document.body.classList.add('ddd');

/* Screen */

function Screen(props){


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let startMainSize = 16;
  startMainSize = checkStartMainSize(windowWidth);
  const [mainSize, setMainSize] = useState(startMainSize);

  function checkStartMainSize(windowWidth) {
    for (let i=2; i < 17; i++) {
      if (windowWidth / i >= 100 ) {
        startMainSize = i;
      }
    }
    return startMainSize;
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    startMainSize = checkStartMainSize(windowWidth);
    const handleResizeMainSize = () => setMainSize(startMainSize);
    window.addEventListener('resize', handleResizeMainSize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResizeMainSize);
    };
  });

  const [itemsNum, setItemsNum] = useState(4);
  const [trolleybusColor, setTrolleybusColor] = useState('blue');
  const [btnMinusItemsNumDisabled, setBtnMinusItemsNumDisabled] = useState(true);
  const [btnMinusMainSizeDisabled, setBtnMinusMainSizeDisabled] = useState(mainSize <= 4 && true);

  function plusMainSize() {
    setMainSize(mainSize + 2);
    setBtnMinusMainSizeDisabled(false);
  }

  function minusMainSize(e) {
    mainSize > 2 && setMainSize(mainSize - 2);
    mainSize <= 4 && setBtnMinusMainSizeDisabled(true);
  }

  function plusSetItemsNum() {
    setItemsNum(itemsNum + 1);
    setBtnMinusItemsNumDisabled(false);
  }

  function minusSetItemsNum() {
    itemsNum > 4 && setItemsNum(itemsNum - 1);
    itemsNum <= 5 && setBtnMinusItemsNumDisabled(true);
  }

  return (
    <div>
      <div className="btns">
        <div className="btn-group btn-group-size">
          <button id="btnPlusMainSize" className="btn btn-plus" onClick={plusMainSize}>+</button>
          <button id="btnMinusMainSize" className="btn btn-minus" onClick={minusMainSize} disabled={btnMinusMainSizeDisabled}>-</button>
        </div>
        <div className="btn-group btn-group-items">
          <button className="btn btn-plus" onClick={plusSetItemsNum}>{itemsNum}</button>
          <button className="btn btn-minus" onClick={minusSetItemsNum} disabled={btnMinusItemsNumDisabled}>{itemsNum - 2}</button>
        </div>
        <div className="btn-group btn-group-color">
          <button className="btn btn-blue" onClick={() => setTrolleybusColor('blue')}></button>
          <button className="btn btn-red" onClick={() => setTrolleybusColor('red')}></button>
        </div>
      </div>
      <div className="trolleybuscontainer">
        <Trolleybus trolleybusBlocksItemsNum={itemsNum} mainSize={mainSize} trolleybusColor={trolleybusColor} />
      </div>
    </div>
  );
}

function Trolleybus(props){
  return (
      <div className={`trolleybus ${props.trolleybusColor}`} style={{fontSize: props.mainSize + 'px'}}>
        <TrolleybusTop />
        <TrolleybusBlocks trolleybusBlocksItemsNum={props.trolleybusBlocksItemsNum} />
      </div>
  );
}

function TrolleybusBlocks(props){
  let trolleybusBlocksItemsNum = props.trolleybusBlocksItemsNum;
  let trolleybusBlocksItems = [];
  for (let i = 0; i < trolleybusBlocksItemsNum; i++) {
    trolleybusBlocksItems.push(<TrolleybusBlocksItem key={i.toString()} itemNum={i} last={i === (trolleybusBlocksItemsNum-1) && true}  />)
  }

  return (
    <div className="trolleybus-blocks">
      {trolleybusBlocksItems}
    </div>
  );
}

function TrolleybusBlocksItem(props){
  let sideBottomItemsNum = 4;
  if (props.itemNum === 0 || props.last) {
    sideBottomItemsNum = 1;
  } else {
    sideBottomItemsNum = 4;
  }
  return (
    <div className={`trolleybus-blocks-item trolleybus-blocks-item-${props.itemNum}${props.last ? " last" : ""}`}>
      {props.itemNum === 0 &&
        <Front />
      }
      {(props.itemNum > 2 && !props.last) &&
        <Separator />
      }
      {(props.itemNum > 2 && !props.last) &&
        <Side sideSimple={true} sideBottomItemsNum={0} />
      }
      {props.itemNum > 0 &&
        <Door frontDoor={props.itemNum === 1 && true} />
      }
      <Side sideBottomItemsNum={sideBottomItemsNum} trolleybusBlocksLast={props.last} trolleybusBlocksFront={props.itemNum === 0} />
      {props.last &&
        <Back />
      }
    </div>
  );
}

/* TrolleybusTop */

function TrolleybusTop(props){
  return (
    <div className="trolleybus-top">
      <ul className="trolleybus-top-rectangles">
        <li className="trolleybus-top-rectangles-item"></li>
        <li className="trolleybus-top-rectangles-item"></li>
      </ul>
      <ul className="trolleybus-top-horns">
        <TrolleybusTopHorns />
        <TrolleybusTopHorns />
      </ul>
    </div>
  );
}

function TrolleybusTopHorns(props){
  let trolleybusTopHornsItemsParts = [];
  for (let i = 0; i < 10; i++) {
    trolleybusTopHornsItemsParts.push(<li key={i.toString()} className="trolleybus-top-horns-item-part"></li>);
  }
  return (
    <ul className="trolleybus-top-horns-item">
      {trolleybusTopHornsItemsParts}
    </ul>
  );
}

/* Front */

function Front(props) {
  return (
    <div className="front">
      <div className="mirrow"></div>
      <div className="wiper"></div>
      <div className="light"></div>
      <div className="bumper"></div>
    </div>
  );
}

/* Back */

function Back(props) {
  return (
    <div className="back">
      <div className="handle"></div>
      <div className="light"></div>
      <div className="bumper"></div>
    </div>
  );
}

/* Separator */

function Separator() {
  return (
    <div className="separator">
      <SeparatorBlock />
      <SeparatorBlock />
    </div>
  );
}

function SeparatorBlock() {
  let separatorBlockItems = [];
  for (let i = 0; i < 8; i++) {
    separatorBlockItems.push(
      <li key={i.toString()} className="separator-block-item">
        <div className="separator-block-item-right"></div>
        <div className="separator-block-item-left"></div>
      </li>
    )
  }
  return (
    <ul className="separator-block">
      {separatorBlockItems}
    </ul>
  );
}

/* Side */

function Side(props) {
  return (
    <div className={`side${props.sideSimple ? " side-simple" : ""}`}>
      {!props.sideSimple &&
        <SideWindows trolleybusBlocksLast={props.trolleybusBlocksLast} trolleybusBlocksFront={props.trolleybusBlocksFront} />
      }
      <SideMiddle />
      <SideBottom sideBottomItemsNum={props.sideBottomItemsNum} />
    </div>
  );
}

function SideWindows(props) {
  let sideWindowsItemsNum = !props.trolleybusBlocksLast ? 2 : 1;
  let sideWindowsItems = [];
  for (let i = 0; i < sideWindowsItemsNum; i++) {
    sideWindowsItems.push(<SideWindowsItem key={i.toString()} sideWindowsItemTop={!props.trolleybusBlocksFront && !props.trolleybusBlocksLast} />)
  }
  return (
    <div className="side-windows">
      {sideWindowsItems}
    </div>
  );
}

function SideWindowsItem(props) {
  return (
    <div className="side-windows-item">
      {props.sideWindowsItemTop &&
        <SideWindowsItemTop />
      }
    </div>
  );
}

function SideWindowsItemTop(props) {
  return (
      <ul className="side-windows-item-top">
        <li className="side-windows-item-top-right"></li>
        <li className="side-windows-item-top-left"></li>
      </ul>
  );
}
function SideBottom(props) {
  let sideBottomItems = [];
  let wheelExist = false;
  let sideBottomItemsNum = props.sideBottomItemsNum;
  for (let i = 0; i < sideBottomItemsNum; i++) {
    wheelExist = (i===2) ? true : false;
    sideBottomItems.push(<SideBottomItem key={i.toString()} wheelExist={wheelExist} keyNum={i} />)
  }
  return (
    <ul className="side-bottom">
      {sideBottomItems}
    </ul>
  );
}

function SideBottomItem(props) {
  return (
    <li key={props.keyNum.toString()} className={`side-bottom-item${props.wheelExist ? " wheel-exist" : ""}`}>
      {props.wheelExist && <Wheel />}
    </li>
  );
}

function SideMiddle(props) {
  return (
    <div className="side-middle"></div>
  );
}

/* Wheel */

function Wheel(props) {
  let wheelBodyExternalItems = [];
  let wheelBodyInternal1Items = [];
  let wheelBodyInternal2Items = [];
  for (let i = 0; i < 24; i++) {
    wheelBodyExternalItems.push(<li key={i.toString()} className="wheel-body-external-item"></li>)
  }
  for (let i = 0; i < 5; i++) {
    wheelBodyInternal1Items.push(<li key={i.toString()} className="wheel-body-internal1-item"></li>)
    wheelBodyInternal2Items.push(<li key={i.toString()} className="wheel-body-internal2-item"></li>)
  }
  return (
    <div className="wheel">
      <div className="wheel-frame"></div>
      <div className="wheel-body">
        <ul className="wheel-body-external">
          {wheelBodyExternalItems}
        </ul>
        <ul className="wheel-body-internal1">
          {wheelBodyInternal1Items}
        </ul>
        <ul className="wheel-body-internal2">
          {wheelBodyInternal2Items}
        </ul>
        <div className="wheel-body-circle1"></div>
        <div className="wheel-body-circle2"></div>
      </div>
    </div>
  );
}

/* Door */

function Door(props) {
  return (
    <div className="door">
      <DoorHalf frontDoor={props.frontDoor} />
      <DoorHalf frontDoor={props.frontDoor} />
    </div>
  );
}

function DoorHalf(props) {
  return (
    <div className="door-half">
      <DoorHalfItem />
    {!props.frontDoor &&
      <DoorHalfItem />
    }
    </div>
  );
}

function DoorHalfItem(props) {
  return (
    <div className="door-half-item">
      <DoorHalfItemWindow position="top" />
      <DoorHalfItemWindow position="bottom" />
    </div>
  );
}

function DoorHalfItemWindow(props) {
  return (
    <div className={`door-half-item-window position-${props.position}`}></div>
  );
}

/* app */

function App() {
  return (
    <div className="app">
      <Screen />
    </div>
  );
}

export default App;

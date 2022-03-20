import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// FUNCTION COMPONENTS =========================================================
function Hi(props) {
    return <div>Hello {props.name}!</div>
  }
  
  function GreetingsWithFullName({ firstName, lastName }) {
    // using destructuring to decompose the "props"  object and extracting it's properties! That's good because makes it clear which properties from "prop" this component here expects!
  
    return (
      <div>Hello {firstName} {lastName} </div>
    )
  }
  
  function GivesSalutation(props) {
    let salutation;
    if (props.name == '' || props.name == undefined) {
      salutation = "Hello stranger!"
    } else {
      salutation = `Hello ${props.name}!`;
    }
    return (
      <>
        <div>
          <strong>{salutation}</strong>
        </div>
      </>
    )
  }
  
  const HiUsingAnonymousFunction = function ({ name }) {
    // declaring the component as a const variable
    // using the keyword function with an anonymous function
    // using destructuring to decompose the "props" object and making it clear which properties we're taking from it! 
  
    return <div>Hello {name}</div>
  }
  
  const HiUsingArrowFunction = ({ name }) => {
    // declaring the component as a const variable
    // using the arrow function syntax
    // using destructuring to decompose the "props" object and making it clear which properties we're taking from it! 
  
    return <div>Hello {name}</div>
  }
  
  const HiUsingArrowFunctionWithNoReturn = ({ name }) => (
    // declaring the component as a const variable
    // using the arrow function syntax but removing the braces {}, which makes the return implicit, so we remove the return keyword too!
    // using destructuring to decompose the "props" object and making it clear which properties we're taking from it! 
  
    <div>Hello {name}!</div>
  )
  
  // using an arrow function syntax to make the component and assigning it to a variable
  const HiUsingArrowFunctionInOneLine = ({ name }) => <div> Hello {name}</div>;
  
  function MediaCard({ title, body, imageUrl }) {
    // component call passing JSX as props
    // <MediaCard 
    //   title='Here is the media card:' 
    //   body={<>Here is the body <b>with some words in bold without changing the implementation of the component!</b></>}
    //   imageUrl='https://avatars.githubusercontent.com/u/25039333?v=4'
    // />,
  
    return (
      <>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={imageUrl} />
      </>
    )
  }
  
  function Gate({ isOpen }) {
    // using destructuring to extract the "isOpen" property from the "props" object
    // property isOpen is a boolean
    // using ternary operator to change the render output based on isOpen passed value
  
    return (
      <>
        The component is now: {isOpen === true ? "Open!" : "Closed!"}
      </>
    )
  }
  
  function ShowsNamesInUpperCase(props) {
    let givenName = props.name;
    let upperCaseName = givenName.toUpperCase();
    return (
      <>
        <div>Given name: <strong>{givenName}</strong></div>
        <div>Uppercase name: <strong>{upperCaseName}</strong></div>
      </>
    )
  }
  
  function RenderBasicElements() {
    return (
      <>
        <h2>Header 2 here</h2>
        <ul>
          <li>li item 1 with ampersand: &amp;</li>
          <li>li item 2 with &nbsp;&nbsp;&nbsp;&nbsp;white spaces!</li>
          <li>li item 3 using JavaScript directly inside it to calculate 5 + 10: {5 + 10}</li>
          <li className="li-item-red li-item-underline">li item styled with className using two classes!</li>
        </ul>
      </>
    )
  }
  
  function CustomButton(props) {
    let className = '';
    if (props.isRed == true) {
      className = 'button-red';
    }
  
    return (
      <button className={className}>MY CUSTOM BUTTON</button>
    )
  }
  
  function Room() {
    // working!
    // uses hooks
    // controls background color from light to dark when clicking buttons
  
  
    // hooks declaration
    const [isLit, setLit] = useState(true);
    const [temperature, setTemperature] = useState(22);
  
    // hooks calling
    const changeBackgroundColor = () => {
      setLit(!isLit);
      console.log(isLit);
    };
  
    const turnLightsOn = () => {
      setLit(true);
    };
  
    const turnLightsOff = () => {
      setLit(false);
    };
  
    const increasesTemperature = () => {
      setTemperature(temperature + 1);
    }
  
    const decreasesTemperature = () => {
      setTemperature(temperature - 1);
    }
  
    // variables
    let backgroundClass = isLit ? 'lit' : 'dark';
  
    return (
      <>
        <div
          className={`room ${backgroundClass}`}>
          The room is now: <b>{isLit ? 'lit!' : 'dark!'}</b>
          <br />
          The div backgroundClass value currently is: <b>{backgroundClass}</b>
          <br />
          <button
            onClick={changeBackgroundColor}>
            Click to change lights!
          </button>
          <button
            onClick={turnLightsOn}>
            ON!
          </button>
          <button
            onClick={turnLightsOff}>
            OFF!
          </button>
          <br />
          <br />
          The current room temperature is: <b>{temperature}</b>
          <button onClick={increasesTemperature}>+</button>
          <button onClick={decreasesTemperature}>-</button>
        </div>
      </>
    )
  }
  
  export default function ShowsWindowWidthAsFunction() {
    // working!
    // using hooks
  
    // taking this value from another external function!
    const width = useWindowWidth();
  
    // rendering
    return (
      <>
        Current window size in pixels: {width}
      </>
    )
  
  }
  
  function useWindowWidth() {
    // returns the "width value"
    // using hooks
  
  
    // useState hook
    const [width, setWidth] = useState(window.innerWidth);
  
    // useEffect hook, equivalent to classes life cycle methods
    useEffect(() => {
      const handleResize = () => { setWidth(window.innerWidth) };
      window.addEventListener('resize', handleResize);
  
      // according to Dan Abramov, any effect can optionally return a function, and if it does return a function React will call this function to clean up after the effect
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  
    })
  
    // this returned value will be used by another component when calling this function component here!
    return width;
  }
  
  function CountClicks() {
    // using hooks
  
    // useState() hook:
    const [counter, setCounter] = useState(0);
  
  
  
    // useEffect hook: Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API    
      document.title = `You clicked ${counter} times!`;
    });
  
    return (
      <>
        <p>You clicked <b>{counter}</b> times!</p>
        <div>
          <button
            onClick={() => setCounter(counter + 1)}>
            Click me!
          </button>
        </div>
      </>
    )
  }
  
  function SlotMachineFunction() {
    // ====================================================================
    // Status: in development
  
    // Proposal: 
    // [] Displays a simple slot machine, with 3 slots for random values (initially numbers, but later figures too) to appear when the game starts.
    // [] Displays a button to play the game. 
    // [] After each play, checks if the 3 random vales are identical, and if yes, displays a message informing  the player won, otherwise inform that the player loses! In both cases the player may click to play again.
  
    // Problems encountered:
    // 1. This component was first wrote as a function, and it appeared a problem when managing state. It appears to be a kind of "delay" to rendering state, and on research I found out it is beause the useState() hook DOES NOT merge state automatically like classes. The possible fixes for that are too hard for me to comprehend right now, so I'll first re-write the component as a class to understand properly the functionalities, and then refactor it back again to a function to understand correctly where the fix should be! =)
    // ====================================================================
  
    // hooks
    const [slotOneValue, setSlotOne] = useState();
    const [slotTwoValue, setSlotTwo] = useState();
    const [slotThreeValue, setSlotThree] = useState();
  
    // CTRL+V FROM STACK OVERFLOW: EXTENDING PROTOTYPE OBJECT
    // NOW IT'S POSSIBLE TO CALL Array.sample() to draw a random item from the array
    Array.prototype.sample = function () {
      return this[Math.floor(Math.random() * this.length)];
    }
  
    // initially this array will contain only 7 numbers as possibilities for the machine!
    // const arrayOfPossibilities = [1, 2, 3, 4, 5, 6, 7];
  
    // 3 values only for testing
    const arrayOfPossibilities = [1, 2, 3];
  
    const drawsRandomNumber = () => {
      // console.log(arrayOfPossibilities.sample());
      return arrayOfPossibilities.sample();
    }
  
    const drawsAllSlotsTogether = () => {
      // handles slot 1
      setSlotOne(drawsRandomNumber());
  
      // handles slot 2
      setSlotTwo(drawsRandomNumber());
  
      // handles slot 3
      setSlotThree(drawsRandomNumber());
    }
  
    const declaresWinner = () => {
      if ((slotOneValue != null) && (slotOneValue === slotTwoValue) && (slotOneValue === slotThreeValue)) {
        alert('GANHOU!');
      } else return;
    }
  
  
  
    const handleClick = () => {
  
      // gets 3 random elements for the three slots at the same time
      drawsAllSlotsTogether();
  
      // testing
      console.log('slot 1 value: ' + slotOneValue);
      console.log('slot 2 value: ' + slotTwoValue);
      console.log('slot 3 value: ' + slotThreeValue);
  
      // displays winning message if the three values are identical and not null
      declaresWinner();
  
    }
  
    return (
      <>
        <div className='slot-machine'>
          <div className='slot-item'>{slotOneValue}</div>
          <div className='slot-item'>{slotTwoValue}</div>
          <div className='slot-item'>{slotThreeValue}</div>
          <div className='machine-score'>Score: </div>
          <button onClick={handleClick}>GO!</button>
        </div>
      </>
    )
  }
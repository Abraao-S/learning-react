import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CLASS COMPONENTS =========================================================
class TestsClass extends React.Component {
    // lifecycle methods:
    constructor(props) {
      super(props);
  
  
      // binding
      this.sum = this.sum.bind(this);
    }
  
    componentDidUpdate() {
    }
    // =============================================================================
  
    // custom methods
    sum = (a, b) => {
      return a + b;
    }
    // JSX calls:
    // {console.log('Calling this.sum: ' , this.sum )}
    // {console.log('Calling this.sum(): ' , this.sum() )}
    // {console.log('Calling this.sum(2, 3): ' , this.sum(2, 3) )}
  
  
  
    render() {
      return (
        <>
          Return of: TestsClass
          {console.log('Calling this.sum: ', this.sum)}
          {console.log('Calling this.sum(): ', this.sum())}
          {console.log('Calling this.sum(2, 3): ', this.sum(2, 3))}
        </>
      )
    }
  }
  
  class RenderingButtons extends React.Component {
  
  
  
    // Still don't know how to make this happen:
    // if (this.props.isActive == 'true') {
    //   buttonClassName += ' button-active';
    // } else {
    //   buttonClassName = 'button';
    // }
  
    render() {
      let buttonClassName = 'button-border-red';
      return (
        <button className={buttonClassName}>
          Click to change color!
        </button>
      )
    }
  
  }
  
  class LearningState extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     firstName: 'Bob',
    //     lastName: 'Sponge',
    //   }
    // }
  
    state = {
      firstName: 'Bob',
      lastName: 'Sponge',
    }
  
    render() {
      return (
        <>
          <p>First name is: {this.state.firstName}</p>
          <p>Last name is: {this.state.lastName}</p>
        </>
      )
    }
  }
  
  class Table extends React.Component {
    render() {
      return (
        <table>
          <tr>
            <Columns />
          </tr>
        </table>
      );
    }
  }
  
  class Columns extends React.Component {
    // using React.Fragment (which could be replaced with <> but with some few differences)
  
    render() {
      return (
        <React.Fragment key={'a'}>
          <td>Hello</td>
          <td>World</td>
        </React.Fragment>
      )
    }
  }
  
  class UpdatesTitle extends React.Component {
    // not working
  
    constructor(props) {
      super(props);
      this.state = {
        name: 'Abraão',
        surname: 'Silva',
        width: window.innerWidth,
      }
  
      // bindings
      // this.state.name = this.state.name.bind();
      // this.handleNameChange = this.handleNameChange.bind();
  
    }
  
    componentDidMount() {
    }
  
    handleNameChange(e) {
      this.setState({
        name: e.target.value
      });
    }
  
    render() {
      return (
        <>
          <h2>Name:</h2>
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
          >
          </input>
          <h2>
            Surname:
          </h2>
          <input></input>
          <h3>
            Width: {this.state.width}
          </h3>
        </>
      )
    }
  
  }
  
  class ShowsWindowWidth extends React.Component {
    // Status: working!
    // Proposal: shows the current window width using the "Window.resize" event
    // will be refactored as a function component!
  
    // class constructor
    constructor(props) {
      super(props);
      this.state = {
        width: window.innerWidth,
      }
  
      // binding
      this.handleResize = this.handleResize.bind(this);
  
    }
  
    // life cycle methods:
    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  
    // my own methods:
    handleResize() {
      this.setState({
        width: window.innerWidth
      });
    }
  
    render() {
      return (
        <> {/* empty fragment */}
          Current window size in pixels: {this.state.width}
        </>
      )
    }
  
  }
  
  class CalculateForMe extends React.Component {
    // created on 14/03/2022 to do "TOP CODERS BY BANCO SAFRA"
  
    constructor(props) {
      super(props);
      this.calculate = this.calculate.bind(this);
      this.calculateNow = this.calculateNow.bind(this);
    }
  
    calculate() {
      if (12 + 3 > 7 || 100 - 25 < 90) {
        console.log('true');
      } else {
        console.log('false');
      }
  
      if (30 < 45 && 50 - 30 > 100 / 2) {
        console.log('true');
      } else {
        console.log('false');
      }
  
      if (25 >= 20 && 25 <= 30) {
        console.log('true');
      } else {
        console.log('false');
      }
  
      if (-2 > 0 || 27 == 27 && 75 <= 300 / 4) {
        console.log('true');
      } else {
        console.log('false');
      }
  
  
    }
  
    calculateNow() {
      let a, b, c, i;
  
      a = 0
      b = 1
  
      for (i = 1; i >= 1; i++) {
  
        c = b
        b = b + a
        a = c
      }
  
      console.log(b)
  
    }
  
    calculateLetters() {
      let a;
      let b;
  
      a = 10;
      b = a + 1;
      a = b + 1;
      b = a + 1;
  
      console.log(a);
  
      a = b + 1;
  
      console.log(a, b);
    }
  
    render() {
      return (
        <>
          Resultado: {this.calculateNow()}
        </>
      )
    }
  
  }
  
  class SlotMachineClass extends React.Component {
    // Status: everything is working, but code needs refactoring!
    // Proposal: re-write the 'SlotMachineFunction' component to work as a class, in order to properly understand it's functionalities and lifecycle methods.
  
    // Checklist:
    // [X] Display a simple slot machine, with 3 slots for random values. The initial value for each slot will be "?".
    // [X] Display a field with the initial value "Rounds played: 0" that counts each time the player hits the "PLAY" button.
    // [X] Display a field called "Status" with the initial value "..." that will later be changed after each round played.
    // [X] Display a button called "Play!" that when clicked draws 3 random numbers from 1 to 7 (initially) and do the following:
    // [X] checks if these 3 random numbers are identical, and if yes, displays a message informing the player won! If not identical, displays a message informing the player to play again.
  
    // =================================================================================
    // Guideline:
  
    // function incrementCount(): void
    // - only increments in 1 the value for the counter each time a click happens.
  
    // function drawsRandomNumbers(): arrayOfRandomNumbers[]
    // - returns an array with 3 positions, each one containing a random number from 1 to 7.
  
    // function checksVictory( arrayOfRandomNumbers[] ): boolean
    // - receives an array with 3 numbers inside it, and returns a boolean indicating if they are identical.
  
    // still missing: where do I update the state to reflect the 3 random numbers?
    // =================================================================================
  
    // lifecycle methods:
    constructor(props) {
      super(props);
  
      this.state = {
        slotOneValue: '?',
        slotTwoValue: '?',
        slotThreeValue: '?',
        roundsPlayed: 0,
        statusMessage: '...',
      }
  
  
  
      // binding my own methods to this instance
      this.handleClick = this.handleClick.bind(this);
      this.incrementCount = this.incrementCount.bind(this);
      this.drawsRandomNumber = this.drawsRandomNumber.bind(this);
      this.checksVictory = this.checksVictory.bind(this);
  
      // CTRL+V FROM STACK OVERFLOW: EXTENDING PROTOTYPE OBJECT
      // NOW IT'S POSSIBLE TO CALL Array.sample() to draw a random item from any array
      Array.prototype.sample = function () {
        return this[Math.floor(Math.random() * this.length)];
      }
    }
  
    // need to make the setState() with conditional work here
    componentDidUpdate() {
      console.log('INSIDE FUNCTION: componentDidUpdate');
  
      if (this.checksVictory === true) {
        // console.log(this.checksVictory());
        console.log('INSIDE FUNCTION:componentDidUpdate AND YOU WIN!');
      } else {
        console.log('INSIDE FUNCTION:componentDidUpdate AND YOU DID NOT WIN!');
      }
  
      // this.setState({
      //   slotOneValue: slot1[0],
      //   slotTwoValue: slot2[1],
      //   slotThreeValue: slot3[2],
      // });
  
    };
    // =========================================================
  
    // initially this array will contain only 7 numbers as possibilities for the machine!
    arrayOfPossibilities = [1, 2, 3, 4, 5, 6, 7];
    // 2 numbers for quick testing:
    // arrayOfPossibilities = [1, 2];
  
    // =========================================================
    // Custom methods, binded inside the constructor:
    handleClick() {
      // console.log('inside function: handleClick()');
  
      this.incrementCount();
      this.drawsRandomNumber();
      this.checksVictory();
    }
  
    incrementCount() {
      // console.log('inside function: incrementCount()');
  
      // calling setState() with an object as parameter
      // this.setState({
      //   roundsPlayed: this.state.roundsPlayed + 1,
      // });
  
      // calling setState() with a function as parameter instead of an object, this ensures that it reads the current state value!
      this.setState((state) => {
        // important: according to React docs the parameter passed should be "state" instead of "this.state"!
        return { roundsPlayed: state.roundsPlayed + 1 }
      });
  
    }
  
    drawsRandomNumber = (index) => {
      // console.log('inside functon: drawsRandomNumber()');
      // console.log(this.arrayOfPossibilities);
      // console.log(this.arrayOfPossibilities.sample());
  
      // object as parameter
      // this.setState({
      //   slotOneValue: this.arrayOfPossibilities.sample(),
      //   slotTwoValue: this.arrayOfPossibilities.sample(),
      //   slotThreeValue: this.arrayOfPossibilities.sample(),
      // });
  
      // function as parameter
      // this.setState((state) => {
      //   return {
      //     slotOneValue: this.arrayOfPossibilities.sample(),
      //     slotTwoValue: this.arrayOfPossibilities.sample(),
      //     slotThreeValue: this.arrayOfPossibilities.sample(),
      //   }
      // });
  
      const arrayOfResults = [];
      const result = arrayOfResults[index] = this.arrayOfPossibilities.sample();
  
      return (
        result
      )
  
      // this.setState((state) => {
      //   return {
      //     slotOneValue: arrayOfResults[0],
      //     slotTwoValue: arrayOfResults[1],
      //     slotThreeValue: arrayOfResults[2],
      //   }
      // });
    }
  
    checksVictory() {
      // console.log('inside function: checksWinnerWinner()');
  
      let slot1 = this.drawsRandomNumber(0);
      let slot2 = this.drawsRandomNumber(1);
      let slot3 = this.drawsRandomNumber(2);
  
      // need to find a better way to perform this verification!
      if ((slot1 === slot2) && (slot1 === slot3)) {
        console.log(slot1, slot2, slot3);
        return true;
      } else {
        return false;
      }
  
    }
    // =========================================================
  
    render() {
      return (
        <>
          <div className='slot-machine-container'>
            <div className='slot-item'>{this.state.slotOneValue}</div>
            <div className='slot-item'>{this.state.slotTwoValue}</div>
            <div className='slot-item'>{this.state.slotThreeValue}</div>
            <button className='slot-machine-play-button' onClick={this.handleClick}>Play!</button>
            <div className='slot-machine-status'>Rounds played: {this.state.roundsPlayed} <br /> Status: {this.state.statusMessage} </div>
          </div>
        </>
      )
    }
  }
  
  class LearningReactClasses extends React.Component {
    // =========================================================
    // Status: in development. Finished the lifecycle methods, next in line is the error handling stuff.
  
    // Proposal:
    // [X] learn how to write React classes the right way!
    // [X] Learn the main lifecycle methods and their order!
    // [] learn how to handle errors inside the class component!
  
    // Note: not all methods will be detailed here, only the essential ones!
    // =========================================================
  
    // =========================================================
    // lifecycle methods order:
    // Lifecycle diagram: (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  
    // Phase 1: Mounting
    // 1.1: constructor()
    // 1.2: static getDerivedStateFromProps()
    // 1.3: render()
    // 1.4: componentDidMount()
  
    // Phase 2: Updating
    // 2.1: static getDerivedStateFromProps()
    // 2.2: shouldComponentUpdate()
    // 2.3: render()
    // 2.4: getSnapshotBeforeUpdate()
    // 2.5: componentDidUpdate()
  
    // Phase 3: Unmounting
    // 3.1: componentWillUnmount()
  
    // Special phase: Error handling
    // static getDerivedStateFromError()
    // componentDidCatch()
  
  
    // Deprecated lifecycle methods are (checked 07/03/2022, React v.17.0.2): 
    // a. UNSAFE_componentWillMount()
    // b. UNSAFE_componentWillReceiveProps()
    // c. UNSAFE_componentWillUpdate()
  
    // Phase 1: Mounting
    // - These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
  
    // 1.1: constructor()
    // - Important: if we don't initialize state and we don't bind methods, we don't need to implement a constructor for our React component
    // - Important: when defining a constructor for a React.Component subclass we should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor!
    // - Typically constructors are only used for two purposes:
    // a. Initializing local state by assigning an object to this.state.
    // b. Binding event handler methods to an instance.
    // - Important: we SHOULD NOT call setState() in the constructor()! Instead, if our component needs to use local state, we should assign the initial state to this.state directly in the constructor! 
    constructor(props) {
      // this call to super(props) should be in the first line inside the constructor!
      super(props);
  
      // Important: don't call this.setState() here! Instead, assign the initial state to this.state, like the code below:
      this.state = {
        counter: 0,
      };
      // Note: here inside the constructor() method is the ONLY PLACE where we should assign this.state directly! In all other methods, we need to use this.setState() instead!
  
      // Note: we should avoid introducing any side-effects or subscriptions in the constructor. For those use cases we should use componentDidMount() instead!
  
      // binding my custom methods to this class instance
      this.handleClick = this.handleClick.bind(this);
    }
  
    // 1.2: static getDerivedStateFromProps()
    // Optional method for specific uses: React docs says "You Probably Don't Need Derived State".(https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
    static getDerivedStateFromProps(props, state) {
      return null;
    }
  
    // 1.3: render()
    // - Only required method in a class component!
    // - Usually appears at the end of the component.
    // - When called, the render() method should examine this.props and this.state and return one of the following types:
    // a. React Elements. Typically created via JSX. For example, <div /> is an element that instructs React to render a DOM node. <MyComponent /> is an element that instructs React to render a user-defined component!
    // b. Arrays and fragments: let us return miltiple elements from render.
    // c. Portals: lets us render children into a different DOM subtree!(https://reactjs.org/docs/portals.html)
    // d. String and numbers: these are rendered as text nodes in the DOM.
    // e. Booleans or null: render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean)
    // - Important: the render() function should be pure! Meaning that it DOES NOT modify component state, it returns the SAME RESULT each time it's invoked, and it DOES NOT directly interacts with the browser!
    // - If we need to interact with the browser, we should perform that inside the componentDidMount() method or the other lifecycle methods instead! According to React Docs, keeping render() pure makes components easier to think about!
    // - Note: the render() method WILL NOT be invoked if shouldComponentUpdate() (lifecycle method 2.2) returns false!
    render() {
      return (
        <>
          {/* this click event is being binded inside the constructor! */}
          <button onClick={this.handleClick}>CLICK ME!</button>
        </>
      )
    }
  
    // 1.4: componentDidMount()
    // - Invoked immediately after a component is mounted (inserted into the tree)!
    // - Initialization that requires DOM nodes should go here!
    // - If we need to load data from a remote endpoint, this is a good place to instantiate the network request!
    // - Here is a good place to set up any subscriptions! But if we do that, it's important to remember to unsubscribe in componentWillUnmount() (lifecycle method 3.1!)
    // - We may optionally call setState() here, which causes the render() method to be called twice! And doing so will trigger an extra rendering that will happen BEFORE the browser updates the screen (so it's unperceptable to the user)! See DOCS for more info:(https://reactjs.org/docs/react-component.html#componentdidmount)
    componentDidMount() {
      // called immediately after a component is mounted!
    }
  
    // Phase 2: Updating
    // - An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
  
    // 2.1: static getDerivedStateFromProps()
    // Optional method for specific uses: React docs says "You Probably Don't Need Derived State".(https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
    static getDerivedStateFromProps(props, state) {
      return null;
    }
  
    // 2.2: shouldComponentUpdate()
    // - Used to let React know if a component's output is NOT AFFECTED by the current change in state or props.
    // - A component default behavior is to re-render on every state change, and that should cover most cases!
    // - Invoked BEFORE rendering, when new props or state are being received.
    // - Defaults to true!
    // - shouldComponentUpdate() is NOT CALLED for the initial render or when the forceUpdate() method is used!
    // - This method exists only as a performance optimization, so we should NOT rely on it to "prevent" a rendering! React docs recommend using PureComponent instead: (https://reactjs.org/docs/react-api.html#reactpurecomponent)
    shouldComponentUpdate() {
      // ...
    }
  
    // 2.3: render()
    // - Calling the render() method again, and any changes to props or state will be re-rendered normally!
    // - Writting this example I just discovered that multiple render() calls don't throw any error but only the last one inside the class is considered! Interesting.
    render() {
      return (
        <>
          {/* this click event is being binded inside the constructor! */}
          <button onClick={this.handleClick}>CLICK ME 2!</button>
        </>
      )
    }
  
    // 2.4: getSnapshotBeforeUpdate()
    // - Invoked right BEFORE the most recently rendered output is commited to the DOM!
    // - It enables the component to capture some information from the DOM (like scroll position) before it is potentially changed.
    // - Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate() method (lifecycle method 2.5).
    // - A snapshot value or null must be returned!
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // ...
      return null;
    }
  
    // 2.5: componentDidUpdate()
    // - Invoked immediately after updating occurs!
    // - It will NOT be invoked if shouldComponentUpdate() (lifecycle method 2.2) returns false!
    // - Not called for the initial render!
    // - Good place to operate on the DOM when the component has been updated.
    // - Good place to do network requests. Remember to compare the current props to previous props to check if new requests are actually necessary!
    // - According to React docs, here it's possible to call setState() immediately, but it MUST be wrapped in a condition, otherwise it will cause an infinite loop!
    // - If the component implements the lifecycle method 2.4 "getSnapshotBeforeUpdate()" (which according to React docs is rare), the value it returns will be passed as a third "snapshot" parameter to componentDidUpdate(). Otherwise this parameter will be undefined.
    componentDidUpdate() {
    }
  
  
    // Phase 3: Unmounting
    // - This method is called when a component in being removed from the DOM:
  
    // 3.1: componentWillUnmount()
    // - Invoked immediately BEFORE a component is unmounted and destroyed!
    // - Ideal place to perform any cleanup, such as:
    // a. Invalidating timers;
    // b. Canceling network requests;
    // c. Cleaning up any subscriptions that were created in lifecycle method 1.4: "componentDidMount()".
    // - We should NOT call setState() here because the component will never be re-rendered!
    // - Once a component instance is unmounted, it will never be mounted again!
    componentWillUnmount() {
  
    }
  
    // Special phase: Error handling
    // - These methods are called when there is an error during rendering, in a lifecyle method, or in the constructor of any child component.
  
    // static getDerivedStateFromError()
    // ...
  
    // componentDidCatch()
    // ...
  
    // =========================================================
  
  
    // My own functions that need to be binded:
    handleClick() {
      console.log('THE CLICK WORKED!');
      alert('THE CLICK WORKED!');
    }
  
    // Normally the render method would be here but in this example it's located above to respect the order the lifecycle methods appear!
  
  
  }

  export default LearningReactClasses;
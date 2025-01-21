import { useState } from 'react'
import { Component } from 'react'
import './App.css'

// using function
function App() {
  const [count, setCount] = useState(767973);

  return (
    <>
      <h1>Number is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App

// // using class
// class App2 extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//       name: 'John'
//     }
//   }

//   render() {
//     return (
//       <>
//         <h1>Number is {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
//       </>
//     )
//   }
// }

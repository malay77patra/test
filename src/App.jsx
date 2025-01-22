import React from "react"

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: this.props.starer
    }
  }

  render() {
    return (
      <>
        <button onClick={() => this.changeCount(1)}>+</button>
        <button>{this.state.count}</button>
        <button onClick={() => this.changeCount(-1)}>-</button>
      </>
    )
  }

  changeCount(val) {
    this.setState({ count: this.state.count + val })
    this.setState({ count: this.state.count + val })
    this.setState({ count: this.state.count + val })
    this.setState({ count: this.state.count + val })
    this.setState({ count: this.state.count + val })
    this.setState({ count: this.state.count + val })
  }

}


function App() {

  return (
    <>
      <Counter starer={10} />
    </>
  )
}

export default App
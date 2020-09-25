import React from "react"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 500)
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default Layout
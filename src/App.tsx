import React from "react"
import assetOrder from "./assets/order.json"
import Orders from "./Orders"

class App extends React.Component {
  state = {
    progress: false,
    assetOrder: {},
  }

  showProgress = () => this.setState({ ...this.state, progress: true })
  hideProgress = () => this.setState({ ...this.state, progress: false })

  updateAssetOrder = (assetOrder: object) => this.setState({ assetOrder })

  fetchMyOrder = (assetOrder: object) => {
    setTimeout(() => {
      this.updateAssetOrder(assetOrder)
    }, 1000)
  }

  componentDidMount() {
    this.showProgress()
    this.fetchMyOrder(assetOrder)
  }

  render() {
    return (
      <div>
        {this.state.progress && <div>Loading...</div>}
        <Orders {...{ assetOrder }} hideProgress={this.hideProgress} />
      </div>
    )
  }
}

export default App

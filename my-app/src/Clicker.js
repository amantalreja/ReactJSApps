import React,{Component} from 'react'

class Clicker extends Component{
    constructor(){
        super()
        this.state={
            message:"nothing",
        }
    }
    clickChanger(){
        this.setState({
            message:"somuch"
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.clickChanger.bind(this)}> click me{this.state.message}</button>
            </div>
        )
    }
}
export default Clicker
import React,{Component} from 'react'

class EventHandler extends Component{
    constructor(){
        super()
        this.state={
            detail:"none",
        }
       this.inputChanger= this.inputChanger.bind(this)
    }
    inputChanger(event){
        this.setState({
            detail:event.target.value
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.detail}</h1>
                <input type="text" value={this.state.detail} onChange={this.inputChanger}></input>
            </div>
        )
    }
}

export default EventHandler
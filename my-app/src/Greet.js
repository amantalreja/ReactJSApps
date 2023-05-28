import React, {Component} from 'react';

class Greet extends Component{
    constructor(props){
        super(props);
        var a= parseInt(props.count);
        this.state={
            count:a
        }
    }
    messageChanger(){
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log("updated"+this.state.count);
        })
        console.log(this.state.count)
    }
    render(){
        const a= this.state.count;
        return(<div>
            {a}{this.state.count}
            <button onClick={()=>this.messageChanger()}></button>
        </div>)
    }
}
export default Greet
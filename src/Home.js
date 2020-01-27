import React, {Component} from 'react';
import './Home.css';

class Home extends Component{
    state={
        title:["안","녕","하","세","요","."," ","최","인","호","의"," ","P","o","r","t","f","o","l","i","o"," ","입","니","다","."],
        data:[],
        value:"",
        result:""
    }
    render(){
        return(
            <div className="Home" id="Home">
                <h1>{this.state.result}</h1>
                {/* <input type="text" value={this.state.value} onChange={(e)=>this.setState({value: e.target.value})}></input> */}
            </div>
        );
    }
    componentDidMount(){
        let count=0;
        let insetText="";
        let repeat = setInterval( ()=>{
        let arr=this.state.title[count];
        insetText=insetText+arr;
            this.setState({
                result:insetText
            })
            count++;
            if(count===this.state.title.length){
                clearInterval(repeat);
            }
        },200)
        }
    }



export default Home;
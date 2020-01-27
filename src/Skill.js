import React, {Component} from 'react';
import './Skill.css';

class Skill extends Component{
    render(){
        const list=[
            {title:"Languege(WEB)", content:["html","css","javascript","php"], image:["https://ifh.cc/g/Cv1oj.png","https://ifh.cc/g/KvTta.png","https://ifh.cc/g/lo6gG.png","https://ifh.cc/g/HedlQ.png",]}, //html, css, javascript, php 로고 url
            {title:"FrameWork", content:["react","laravel"], image:["https://ifh.cc/g/XccDP.png", "https://ifh.cc/g/eQMSZ.png"]},                 //react , laravel 로고 url
            {title:"Database", content:["mysql"], image:["https://ifh.cc/g/sJeL3.png"]},                             //mysql 로고 url
            {title:"CloudService", content:["heroku"], image:["https://ifh.cc/g/Ta5CS.png"]},                        //heroku 로고 url
            {title:"etc", content:["git","github"], image:["https://ifh.cc/g/xVkbC.png","https://ifh.cc/g/3ZiEF.png"]}                            //git, github 로고 url
        ]
        
        const getList = list.map((skill, index)=>{
            return <SkillInfo
            title={skill.title}
            image={skill.image}
            key={index}/>
        })
        // console.log(list);
        return(
            <div className="Skill" id="Skill">
                <h3 className="Skill-header">S k i l l</h3>
                    {getList}
            </div>
        );
    }
}

class SkillInfo extends Component{
    render(){
        
        return(
           <div className="Skill-info">
             <div className="Skill-title">
                <h3>{this.props.title}</h3>
             </div>

             <div className="Skill-image">
                 <div className="Skill-image-flex">
                    {this.props.image.map((image,index) =>
                    <Skillimage image={image} key={index}/>)} 
                 </div>
             </div>
           </div>   
        );
    }
}

class Skillimage extends Component{
    render(){
        return(
                <img src={this.props.image} alt="" className="Skill-images"></img>
        );
    }
}


export default Skill;







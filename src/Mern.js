import React, {Component} from 'react';
import './mern.css';

class Mern extends Component{
    state={
        image:["https://ifh.cc/g/eCGK6o.png","https://ifh.cc/g/PSsgi5.png","https://ifh.cc/g/3YVS5c.png","https://ifh.cc/g/up6Ufq.png","https://ifh.cc/g/M9USrd.png","https://ifh.cc/g/J2z3Zz.png","https://ifh.cc/g/8JQdea.png"],
        data:"https://ifh.cc/g/eCGK6o.png" }

    render(){
        
        const list =[
            {title:"개발기간", content:["2020-03-01 ~ 2019-04-04 (약 5주)"]},
            {title:"기여도", content:["1명(100%)"]},
            {title:"주요기능", content:["#Node.js(Express)를 이용하여 user, board, todo, review 등에 대한 API 개발",
                                        "#React.js를 이용하여 Data 시각화 및 Redux로 상태 관리 등 작업수행",
                                        "#MongoDB에 데이터 저장",
                                        "#material-ui를 이용하여 디자인 작업"]},
            {title:"활용기술", content:["Node.js(Express), React.js, Redux, MongoDB, Heroku"]},
            {title:"github", content:["https://github.com/dlsgh120/choi-mern"]}  
        ];
        const lists=list.map((lists, index) => <ShoesContent title={lists.title} content={lists.content} key={index}/>);

        return(
            <div className="Mern" id="Mern">
                <div className="Mern-header">
                    <h2>Board & Todo</h2>
                </div>

                <div className="Mern-body row">
                
                    <div className="Mern-image">
                        <a href="https://choi-mern.herokuapp.com/">
                            <img src={this.state.data} alt=""></img>
                        </a>
                    </div>
                    <div className="Mern-content">
                        {lists}
                    </div>
               
               </div>

               <div className="Mern-bottom">
                   <div className="Mern-bottoms">
                        {this.state.image.map((image, index) =>
                            <img className="imageRender" key={index} src={image} alt="" onClick={()=>{this.setState({data:image})}}></img>    
                        )}
                   </div>
               </div>
            </div>
        );
    }
}

class ShoesContent extends Component{
    render(){
        return(
            <div className="Mern-contents">
                <div className="Mern-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="Mern-Sub">
                    {this.props.content.map((content, index)=><ShoesSubContent content={content} key={index}/>)}
                </div>
            </div>
        );
    }
}

class ShoesSubContent extends Component{
    render(){
        return(
            <p>{this.props.content}</p>

        );
    }
}


export default Mern;
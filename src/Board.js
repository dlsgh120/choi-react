import React, {Component} from 'react';
import './Board.css';

class Board extends Component{
    state={
        image:["https://ifh.cc/g/Qm8NI.png", "https://ifh.cc/g/mX8sB.png", "https://ifh.cc/g/fABlh.png",
               "https://ifh.cc/g/KlP4H.png", "https://ifh.cc/g/3lkSA.png", "https://ifh.cc/g/5QI5T.png",
               "https://ifh.cc/g/5XhE4.jpg"],
        data:"https://ifh.cc/g/Qm8NI.png" }

    render(){
        const list =[
            {title:"개발기간", content:["2019-11-29 ~ 2019-12-27 (약 4주)"]},
            {title:"기여도", content:["1명(100%)"]},
            {title:"주요기능", content:["Laravel을 이용한 회원가입, 로그인, 게시판 작성/수정/삭제, 댓글 등"]},
            {title:"활용기술", content:["Laravel(PHP), Mysql, Apache, Heroku"]},
            {title:"github", content:["https://github.com/dlsgh120/realheroku"]}       
        ];
        const lists=list.map((lists, index) => <BoardContent title={lists.title} content={lists.content} key={index}/>);
        return(
            <div className="Board" id="Board">
                <div className="Board-header">
                    <h2>Board</h2>
                    <p>커뮤니티(게시판)</p>
                </div>
                <div className="Board-body row">
                
                        <div className="Board-image">
                            <a href="https://pacific-lowlands-27517.herokuapp.com">
                                <img src={this.state.data} alt=""></img>
                            </a>
                        </div>
                        <div className="Board-content">
                            {lists}
                        </div>
                           
                </div>

                <div className="Board-bottom">
                    <div className="Board-bottoms">
                         {this.state.image.map((image, index) =>
                            <img className="imageRender" key={index} src={image} alt="" onClick={()=>{this.setState({data:image})}}></img>    
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

class BoardContent extends Component{
    render(){
        return(
            <div className="Board-contents">
                <div className="Board-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="Board-Sub">
                    {this.props.content.map((content, index)=><BoardSubContent content={content} key={index}/>)}
                </div>
            </div>
        );
    }
}

class BoardSubContent extends Component{
    render(){
        return(
            <p>{this.props.content}</p>
        );
    }
}

export default Board;
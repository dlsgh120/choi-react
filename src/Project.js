import React, {Component} from 'react';
import './Project.css';

class Project extends Component{
    render(){

        const project=[
            {url: "http://chldlsgh120.dothome.co.kr", src: "https://ifh.cc/g/KtAGG.jpg", 
            name:"신발 쇼핑몰", term:"2019-10-01 ~ 2019-11-15 (약 6주)",
            explain:"회원 가입을 한 고객은 등록된 제품을 장바구니, 구매를 하고, 구매 제품에 대한 리뷰 작성, 게시판 기능을 이용 할 수 있으며, 관리자는 상품등록, 변경, 삭제 및 재고관리 그리고 배송 관리 기능을 수행 ",
            use:["php","mysql","apache"]},
            {url: "https://pacific-lowlands-27517.herokuapp.com", src: "https://ifh.cc/g/Qm8NI.png", 
            name:"신발 커뮤니티(Board)", term:"2019-11-29 ~ 2019-12-27 (약 4주)",
            explain: "PHP FrameWork의 Laravel을 이용한 신발 커뮤니티(게시판) 회원가입한 고객은 게시판을 작성, 변경, 삭제 기능을 이용및 댓글작성을 수행",
            use:["Laravel","mysql","apache","heroku"],
            git: "https://github.com/dlsgh120/realheroku"}
        ];
        
        const projectList = project.map((project, index)=>{
            return <ProjectInfo
                url={project.url}
                src={project.src}
                name={project.name}
                term={project.term}
                explain={project.explain}
                use={project.use}
                git={project.git}
                key={index}
            />
        })
        return(
            <div className="Project">
                <p className="Project-header">Project</p>
                {projectList}
            </div>
        );
    }
}

class ProjectInfo extends Component{
    render(){
        return(
            <div className="Project-columms">
               <div className="Project-image">
                <a href={this.props.url} className="Project-image-link">
                <img src={this.props.src} alt=""></img></a>
             </div>
             <div className="Project-content">
                <div className="Project-name">
                    <p>{this.props.name}</p>
                </div>
                <div className="Project-term">
                    <p>Project Term : {this.props.term}</p>
                </div>
                <div className="Project-person">
                    <p>참여인원(기여도) : 1명(100%)</p>
                </div>
                <div className="Project-explain">
                    <p>{this.props.explain}</p>
                </div>
                <div className="Project-use">
                    {this.props.use.map((use, index)=><ProjectUse use={use} key={index}/>)}
                </div>
                <div className="Project-git">
                    <a href={this.props.git}>{this.props.git}</a>
                </div>
             </div>
            </div>
        );
    }
}

class ProjectUse extends Component{
    render(){
        return(
            <p className="Project-use-text">#{this.props.use}</p>
        );
    }
}

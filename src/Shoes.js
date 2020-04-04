import React, {Component} from 'react';
import './Shoes.css';

class Shoes extends Component{
    state={
        image:['../shoes_images/1.png','../shoes_images/2.png','../shoes_images/3.png','../shoes_images/4.png','../shoes_images/5.png',
               '../shoes_images/6.png','../shoes_images/7.png','../shoes_images/8.png','../shoes_images/9.png','../shoes_images/10.png'],
        data:'../shoes_images/1.png' }

    render(){
        
        const list =[
            {title:"개발기간", content:["2019-10-01 ~ 2019-11-15 (약 6주)"]},
            {title:"기여도", content:["1명(100%)"]},
            {title:"주요기능", content:["#고객 : 회원가입, 로그인, 정보수정, 장바구니, 상품구매, 게시판 기능, 댓글",
                                       "#관리자 : 상품 등록/수정/삭제, 재고관리, 배송관리 등"]},
            {title:"활용기술", content:["php, mysql, apache"]}     
        ];
        const lists=list.map((lists, index) => <ShoesContent title={lists.title} content={lists.content} key={index}/>);

        return(
            <div className="Shoes" id="Shoes">
                <div className="Shoes-header">
                    <h2>Shoes</h2>
                    <p>신발쇼핑몰</p>
                </div>

                <div className="Shoes-body row">
                
                    <div className="Shoes-image">
                        <a href="http://chldlsgh120.dothome.co.kr">
                            <img src={process.env.PUBLIC_URL+this.state.data} alt=""></img>
                        </a>
                    </div>
                    <div className="Shoes-content">
                        {lists}
                    </div>
               
               </div>

               <div className="Shoes-bottom">
                   <div className="Shoes-bottoms">
                        {this.state.image.map((image, index) =>
                            <img className="imageRender" key={index} src={process.env.PUBLIC_URL+image} alt="" onClick={()=>{this.setState({data:image})}}></img>    
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
            <div className="Shoes-contents">
                <div className="Shoes-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="Shoes-Sub">
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


export default Shoes;
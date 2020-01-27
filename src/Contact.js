import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div className="Contact" id="Contact">
                <div className="Contact-header">
                    <h5>Contact</h5>
                </div>
                <div className="Contact-content">
                    <p className="Contact-name">최인호</p>
                    <p className="Contact-email">Email : dlsgh120@gmail.com</p>
                    <p className="Contact-phone">Phone : 010 5288 3923</p>
                </div>
                <div className="Contact-bottom">
                    <a href="https://github.com/dlsgh120/choi-react">
                        <img src="./github_logo.png" alt="" className="github_logo"></img>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
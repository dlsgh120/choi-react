import React, {Component} from 'react';
import './Skill.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
class Skill extends Component{
    render(){
        return(
            <div className="Skill" id="Skill">
                <div className="s3">
                     <div className="Skill-header">Use Skill</div>
                 </div>

                <div className="s1">
                    <p className="skill-content">Back-End</p>
                   <div className="s4">
                   <div className="skill-subject">
                        <p>
                       <ArrowRightIcon style={{'verticalAlign':'middle'}} />Node.js(Express)
                        </p>
                        <p>
                        <ArrowRightIcon style={{'verticalAlign':'middle'}} />php(Laravel)
                        </p>
                    </div>
                   </div>
                </div> 

                <div className="s1">
                    <p className="skill-content">front-End</p>
                   <div className="s4">
                   <div className="skill-subject">
                        <p>
                           <ArrowRightIcon style={{'verticalAlign':'middle'}} />React.js
                        </p>
                        <p>
                           <ArrowRightIcon style={{'verticalAlign':'middle'}} />Redux(Redux-thunk)
                        </p>  
                        </div>
                   </div>
                </div>

                <div className="s1">
                    <p className="skill-content">DataBase</p>
                   <div className="s4">
                   <div className="skill-subject">
                        <p>
                          <ArrowRightIcon style={{'verticalAlign':'middle'}} />Mysql
                        </p>
                        <p>
                           <ArrowRightIcon style={{'verticalAlign':'middle'}} />MongoDB
                        </p>
                        </div>
                   </div>
                </div>

                <div className="s1">
                    <p className="skill-content">Design</p>
                       <div className="s4">
                       <div className="skill-subject">
                        <p>
                            <ArrowRightIcon style={{'verticalAlign':'middle'}} />Bootstrap
                        </p>
                        <p> 
                            <ArrowRightIcon style={{'verticalAlign':'middle'}} />material-ui
                        </p>
                        </div>
                       </div>
                </div>

                <div className="s1">
                    <p className="skill-content">Etc</p>
                       <div className="s4">
                       <div className="skill-subject">
                        <p>
                          <ArrowRightIcon style={{'verticalAlign':'middle'}} />git 
                        </p>
                        <p> 
                          <ArrowRightIcon style={{'verticalAlign':'middle'}} />github
                        </p>
                        <p> 
                          <ArrowRightIcon style={{'verticalAlign':'middle'}} />heroku
                        </p>
                        </div>
                       </div>
                </div>
            </div>
        );
    }
}


export default Skill;







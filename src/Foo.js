import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import actions from './actions/index'
import {connect} from 'react-redux';

const mapStateToProps = function(state){
  return {
    foo:state.foo
  }
}

/*

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    foo: actions.foo,
  }, dispatch)
}
*/



class Foo extends React.Component {
    	
constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmitValue  =this.handleSubmitValue.bind(this);
    }
    
handleChange(event) {
    this.props.dispatch({
			type: 'UPDATE-DATA',
            name:event.target.name,
            value:event.target.value
		});
    }   
 handleSubmit(event,props) {
    event.preventDefault();
     props.dispatch(actions.foo.init(props));
  } 
    handleSubmitValue(event) {
        console.log('fucntin allled');
        console.log(this.props)
     this.props.dispatch(actions.foo.addAtribute(this.props));
  } 
  render() {
      console.log('propss');
      console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME BAR</h1>
        </header>
            <div>
            <Link to='/'>Home</Link>
        <div>
            <span>{this.props.foo.error ?'provide the correct username/password':''}</span>
        </div>
            {
            this.props.foo.login_data==null ?
              <form onSubmit={(event,props) =>{this.handleSubmit(event,this.props)}}>
                <div>
                <label>
                  username:
                  <input type="text" name="username" value={this.props.foo.username} onChange={this.handleChange} />
                </label>
                </div>
                <div>
                <label>
                  password:
                  <input type="password" name="password" value={this.props.foo.password} onChange={this.handleChange} />
                </label>
                </div>
                <input type="submit" value="Submit" />
              </form>    
            : <div><span>You have sucessfully loggedIn</span>
                {this.props.foo.attributevalue ? <div><span>Attribute added successfully..</span></div> :
                <form>
                <div>
                    <label>
                      Attribute:
                      <input type="text" name="attribute" value={this.props.foo.attribute} onChange={this.handleChange} />
                    </label>
                </div>
                <a href="javascript:void(0)" onClick={this.handleSubmitValue} >Add Attribute</a>
              </form>  
                }
            </div>
            }
            </div>
      </div>
    );
  }
}

//export default Foo;
export default connect(mapStateToProps)(Foo)

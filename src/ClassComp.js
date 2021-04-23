import React,{Component} from 'react';
import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

import {SearchBox} from './components/searchbox/search-box.component';

class ClassComp extends Component {

   constructor(){
        super();

        this.state = {
          monsters:[],
          searchField:''
        };

        //this.handleChange1 = this.handleChange1.bind(this);
   }

  /**
   * This lifecycle method is called only once , initially after component is mounted/rendered on DOM
   */
   componentDidMount(){
    console.log("*****************Component Did Mount is called***************" + '<br>');

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => { 
        let jsonResponse = response.json();
        //console.log("--------JSON RESPONSE-------------------");
        //console.log(jsonResponse);
        return jsonResponse})
    .then(users => this.setState({monsters:users}))
   }

   //see here it is very important to set the context of this. I mean u have to bind this method to tell , 'this' points to which keyword or object
   //This activity is done insde constructor, becoz 'this' has refrence to ClassComp in constructor
   //this can be used directly in render() method or other lifecycle methods , bcoz they inherit from Component class, so in inherited methods 'this' will have reference
   // BUt if u define custom javascript method, 'this' looses the context
   handleChange1(e){
      this.setState({searchField:e.target.value});
   }

   // context setting for this in handlechange1 can be avoided using arrow function. It does it automatically as we cannot call bind function on arrow functions
   // this is set automatically to the conext in which it is defined
   handleChange = e=>  this.setState({searchField:e.target.value});

   //Note that after change in state is detected , render method is called every time
    render(){
      // Below statement in destructuring concept
      const {monsters, searchField} = this.state;
      /**
       * Above statment is equivalent to
       * const monsters = this.state.monsters;
       * const searchField = this.state.searchField;
       */
      const filteredMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      //console.log("*************filteredMonsters********" + filteredMonsters)

      

        
        console.log("************************render method is called************************"  + '<br>')
        //returning an expression, return is not a method here
        //Note we just assgin a function in eventhandlinge.g. this.handleChange so that it gets called only when event occurs.
        //If we write it like this.handleChange() then it will get executed automatically while render function gets called
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters} /> 
            </div>
          );
    }
    
  }

  export default ClassComp;
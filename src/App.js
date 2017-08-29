import React, { Component } from 'react';
import Heading from './Heading';
import Contact from './Contact'
import './App.css';


class App extends Component {

  render() {

    const users = [
      {
        firstName: "Ivan",
        lastName: "Rosario",
        phoneNumber: "980-207-6742",
      },

      {  
        firstName: "Jack",
        lastName: "Sharkey",
        phoneNumber: "980-537-6323",
      },

      {
        firstName: "Angel",
        lastName: "Lopez",
        phoneNumber: "704-787-3973",
      }
    ];

    const contactComponents = users.map(function(user, i){
      return (
          <Contact key={i} 
                   firstName={user.firstName} 
                   lastName={user.lastName}
                   phoneNumber={user.phoneNumber}/>
      );
    });

    return (
      <div className="App">
        <Heading name="Ian Powell" />
        <Contact firstName="Jack" lastName="Sharkey" phoneNumber="555-555-5555" />
        {contactComponents}
      </div>
    );
  }
}

export default App;



// VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.
// EASY:  Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}"
// MEDIUM: Create a child Contact component inside the original component you created that you pass in a firstName, lastName, and phoneNumber and print out "You need to contact {firstName} {lastName} at {phoneNumber}
// HARD: Using an array of contacts, loop through each one and create a new Contact component for each
// VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.

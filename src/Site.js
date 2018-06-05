import React from 'react';
import Login from './Login';
import './App.css';

class Site extends React.Component {

  storeToken(token) {
    localStorage.setItem('token', 'Token ' + token);
  }

  render() {
  return (
    <React.Fragment>
      {this.props.data.notes.map(note => {
        return (
          <div key={note}>
            <div>{note.title}</div>
            <div>{note.id}</div>
          </div>
        );
      })}
      <Login storeToken={this.storeToken} />
    </React.Fragment>
  )
  }
}

export default Site;
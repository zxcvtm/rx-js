import React from 'react';
import './App.css';
import { fetchUser } from './user-actions'
import { connect } from "react-redux";

function App(props) {
  const { users } = props;
  const user = users && users['zxcvtm'] || '';

  return (
    <div className="App">
      <h1>RxJS Example</h1>
      <button onClick={() => props.fetchUser('zxcvtm')}>Traer user</button> 
      {user &&
      <div style={styles}>
        <img src={user.avatar_url} width={300} height={300} style={imgStyle}/>
        <div>
          <span>Bio: </span>
          <p>{user.bio}</p>
        </div>
      </div>
      }
    </div>
  );
}
function mapStateToProps(state) {
  return {users: state.users};
}
function mapDispatchToProps(dispatch) {
  return {
    fetchUser: (user) => dispatch(fetchUser(user)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  height: '500px',
  margin: '2rem auto',
  border: '2px solid blue',
};
const imgStyle = {
  borderColor: 'red',
  borderWidth: '4px',
  borderTopStyle: 'dotted',
  borderRightStyle: 'solid',
  borderBottomStyle: 'dotted',
  borderLeftStyle: 'solid',
	content: 'url("https://ih1.redbubble.net/image.433970624.3802/flat,128x,075,f-pad,128x128,f8f8f8.u1.jpg")'
}
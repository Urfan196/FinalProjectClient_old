import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Welcome from './containers/Welcome'
import SignUpUser from './containers/SignUpUser'
import SignUpAddress from './containers/SignUpAddress'
import UpdateUserInfo from './containers/UpdateUserInfo'
import ItemContainer from './containers/ItemContainer'
import ShareItem from './containers/ShareItem'
import ItemInfo from './components/ItemInfo'
import EditItem from './containers/EditItem'
import MessageContainer from './containers/MessageContainer'
import Profile from './components/Profile'
import EditProfile from './containers/EditProfile'
import fetchAllItems from './actions/fetchAllItems'
import fetchAllUsers from './actions/fetchAllUsers'
import reAuth from './actions/reAuth'

import './App.css';



class App extends React.Component {

  componentDidMount () {
      this.props.reAuth()
      this.props.fetchAllItems()
      this.props.fetchAllUsers()
  }


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component ={Welcome}/>
            
            <Route exact path='/signup' component={SignUpUser}/>
            <Route exact path='/signup-user' render={props => <SignUpUser {...props}/>} />
            <Route exact path='/signup-address' component={SignUpAddress}/>
         
            { Object.keys(this.props.currentUser).length != 0 ?
            <>
              <Switch>
                <Route exact path='/home' component={ItemContainer}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/edit-profile' component={EditProfile}/>
                <Route exact path='/messages' component={MessageContainer}/>
                <Route exact path='/share-item' component={ShareItem}/>
                <Route exact path='/item-info' component={ItemInfo}/>
                <Route exact path='/edit-item' component={EditItem}/>
              </Switch>
            </> : 
            <p>Loading...</p>
            }
          
          </Switch>
        </Router>
      </div>
    );
  }



}
  
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapsToDispatchProps = dispatch => {
  return{
    reAuth: () => dispatch(reAuth()),
    fetchAllItems: ()=> dispatch(fetchAllItems()),
    fetchAllUsers: ()=> dispatch(fetchAllUsers())
  }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(App);

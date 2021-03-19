import React, { Component } from 'react'


const UserContext = React.createContext()
//Provider, Consumer

const reducer = (state, action) => {
    
    switch(action.type) {
        case "DELETE_USER":
            return {
                
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
            default:
                return state
    }

}

export class UserProvider extends Component {
    state = {
        users: [
          {id: 1, name:"Murat Gumus", salary:"5000", department:"Bilisim"},
          {id: 2, name:"Hakan Yilmaz", salary:"4000", department:"Pazarlama"},
          {id: 3, name:"Osman Turan", salary:"6000", department:"Uretim"}
        ],
        dispatch: action => {
            
            this.setState(state => reducer(state, action))
        }
      }

    render() {
        return (
            
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
            
        )
    }
}

const UserConsumer = UserContext.Consumer
export default UserConsumer

import React, { Component } from 'react'
import UserConsumer from '../Context'

class User extends Component {

    state = {
        isVisible : true
    }
    // constructor(props){
    // super(props)
    //this.onClickEvent = this.onClickEvent.bind(this)

    // this.state = {
    //     isVisible: true
    // }
    // }

    //ARROW FUNCTION bind etme islemini otomatik olarak yapiyort

    onClickEvent = (e) => {
       this.setState({
           isVisible: !this.state.isVisible
       })
    }

    onDeleteUser = (dispatch, e)=>{
        const {id} = this.props 
        //Consumer Dispatch
        dispatch({type: "DELETE_USER", payload:id})

    }


    render() {


        //Destructing
        const {name, department, salary} = this.props
        const {isVisible} = this.state
        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value
                         return (
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                                <i onClick={this.onDeleteUser.bind(this, dispatch)} className= "far fa-trash-alt" style={{cursor:"pointer"}}></i>
                            
                         </div>

                    {
                         isVisible ? <div className="card-body">
                         <p className="card-text">Maas : {salary}</p>
                         <p className="card-text">Department : {department}</p>
                        </div> : null
                     }
                
                 </div>
             </div>
         )

                    }
                }

            </UserConsumer>
        )
    }
}

export default User

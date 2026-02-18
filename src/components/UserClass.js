import React from 'react';
class UserClass extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="user-card">
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
                <h3>{this.props.location}</h3>
            </div>
        )
    }
}

export default UserClass;
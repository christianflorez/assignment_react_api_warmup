import React, { Component } from 'react';
import UserDeleteButton from "./UserDeleteButton";
import UserEditButton from "./UserEditButton";

class UserCard extends Component {
  constructor() {
    super();

    this.state = {
      editShow: null,
    }
  }

  onChangeEditShow = e => {
    e.preventDefault();

    if (!this.state.editShow) {
      this.setState({
        editShow: true
      });
    } else {
      this.setState({
        editShow: null
      });
    }
  };

  onSubmitEdit = e => {
    e.preventDefault();
    this.setState({
      editShow: null
    });
    this.props.onEditUser(e);
  };

  render() {
    const { user, onDeleteUser } = this.props;
    const { first_name, last_name, avatar, id } = user;
    return(
      <div className="UserCard card" style={{ maxWidth: "250px" }}>
        <img className="card-img-top img-responsive" src={avatar} alt="user avatar" />
        <div className="card-block">
          <h4>{first_name} {last_name}</h4>
          <UserDeleteButton id={id} onSubmit={onDeleteUser} />
          <UserEditButton 
            onChangeEditShow={this.onChangeEditShow}
            show={this.state.editShow}
            user={user}
            onSubmit={this.onSubmitEdit}
          />
        </div>
      </div>
    );
  }
}

export default UserCard;

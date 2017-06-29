import React from 'react';
import Button from "./elements/Button";
import UserEditForm from './UserEditForm';

const UserEditButton = ({show, onChangeEditShow, user, onSubmit}) => {
  if (!show) {
    return (
      <form onSubmit={onChangeEditShow}>
        <Button color="primary" type="submit">
          Edit
        </Button>
      </form>
    );
  }
  return (
    <div>
      <UserEditForm
        onSubmit={onSubmit}
        user={user}
      />
      <form onSubmit={onChangeEditShow}>
        <Button color="warning" type="submit">
          Hide
        </Button>
      </form>
    </div>
  );
};

export default UserEditButton;
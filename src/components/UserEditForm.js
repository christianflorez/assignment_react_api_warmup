import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import Alert from "./elements/Alert";
import Showable from "./elements/Showable";

const UserForm = ({ onSubmit, error, user }) => {
  const { first_name, last_name, avatar, id } = user;
  return (
    <form className="container" onSubmit={onSubmit}>
      <h4>Edit User</h4>
      <Showable show={error}>
        <Alert type="danger">
          Oops, there was a problem...
        </Alert>
      </Showable>
      <InputGroup name="first_name" labelText="First Name">
        <Input name="first_name" defaultValue={first_name}/>
      </InputGroup>
      <InputGroup name="last_name" labelText="Last Name">
        <Input name="last_name" defaultValue={last_name}/>
      </InputGroup>
      <InputGroup name="avatar" labelText="Photo Link">
        <Input name="avatar" defaultValue={avatar}/>
      </InputGroup>
      <Input name="id" type="hidden" value={id} />
      <Button type="submit" color="primary">Edit User</Button>
    </form>
  );
}
export default UserForm;

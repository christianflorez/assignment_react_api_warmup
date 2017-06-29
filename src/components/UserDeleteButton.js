import React from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";

const UserDeleteButton = ({ id, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input type="hidden" name="id" value={id} />
      <Button color="danger" type="submit">
        Delete
      </Button>
    </form>
  );
};

export default UserDeleteButton;

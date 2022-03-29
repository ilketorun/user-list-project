import UserForm from "./UserForm";
import Card from "../../UI/Card/Card";

const UserInput = (props) => {
  const submitedHandler = (userData) => {
    props.newUser(userData);
  };

  return (
    <div>
      <Card>
        <UserForm submited={submitedHandler} />
      </Card>
    </div>
  );
};

export default UserInput;

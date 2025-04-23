import { useContext, useState } from "react";
import { UserAccount } from "./UserAccount";
import AddTopicForm from "./AddTopicForm";

function AddTopic({ setTopicsUpdate }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {loggedInUser && (
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Add New Topic
        </button>
      )}

      {isVisible ? <AddTopicForm setTopicsUpdate={setTopicsUpdate} /> : null}
    </>
  );
}

export default AddTopic;

import { useState } from "react";
import { postTopic } from "../utils/api";
import TopicCard from "./TopicCard";

function AddTopicForm({ setTopicsUpdate }) {
  const [topicToAdd, setTopicToAdd] = useState({
    slug: "",
    description: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setTopicToAdd((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg(false);
    setTopicsUpdate(false);
    postTopic(topicToAdd)
      .then((response) => {
        <TopicCard topic={topicToAdd} />;
        setTopicsUpdate(true);
        setTopicToAdd({ slug: "", description: "" });
        setErrorMsg(false);
      })
      .catch((error) => {
        setErrorMsg(true);
        console.log(error);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="topic name"
          id="comment-box"
          name="slug"
          required
          value={topicToAdd.slug}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="topic description"
          id="comment-box"
          name="description"
          required
          value={topicToAdd.description}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {errorMsg ? <p>Something went wrong!</p> : null}
    </>
  );
}

export default AddTopicForm;

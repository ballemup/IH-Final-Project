import React, { useEffect, useState, useContext } from "react";
import TheContext from "./TheContext";
import axios from "axios";
import actions from "./api";
import Auth from "./Auth";

function Home(props) {
  const [messages, setMessages] = useState([]);

  const { user, setUser } = useContext(TheContext);

  const [message, setMessage] = useState("");

  useEffect(() => {
    actions.getMessages().then((data) => {
      setMessages(data);
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addMessage({ message }).then((res) => {
      props.history.push("/");
    });
  };

  const showMessages = () =>
    messages.map(({ message, _id }) => <li key={_id}>{message}</li>);

  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Slushie World</h1>
          <p class="lead">
            Enjoy the Best Slushies at home when you order from Slushie World!
            We deliver to your door in just a couple of clicks. Order from our
            set menu or Create your own drink!
          </p>
        </div>
      </div>
      <h3>Backend Message Test</h3>
      {user?.name}
      {user?.name && (
        <div>
          <p>Welcome {user?.name}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="post a message"
        />
        <button>Add Message</button>
      </form>
      {showMessages()}
    </div>
  );
}

export default Home;

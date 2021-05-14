import React, { useEffect, useState, useContext } from "react";
import TheContext from "./TheContext";
import axios from "axios";
import actions from "./api";
import Auth from "./Auth";
import HeroSection from './Components/HeroSection'
import Cards from './Components/Cards';


function Home(props) {

  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Footer /> */}
    </>
  );

  
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

/* eslint-disable */
import { useState } from "react";
import emojiDictionary from "./config/app-config";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

const emojisToDisplay = Object.keys(emojiDictionary).slice(0, 10);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here...");

  /**
   * Fucntion to handle emoji change
   * @param {*} event
   */
  function emojiChangeHandler(event) {
    const inputEmoji = event.target.value;

    /**regex for letters and numbers */
    const letterNumber = /^[0-9a-zA-Z]+$/;

    /**regex for special characters */
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    setEmoji(inputEmoji);

    if (inputEmoji.match(letterNumber) || inputEmoji.match(specialChars)) {
      setMeaning("please enter a valid emoji");
      return;
    } else if (inputEmoji.length === 0) {
      setMeaning("translation will appear here...");
      return;
    }

    inputEmoji in emojiDictionary
      ? setMeaning(emojiDictionary[inputEmoji])
      : setMeaning("failure to recognize this emoji!");
  }

  /**
   * Function to handle click event of emoji
   * @param {*} inputEmoji
   */
  function emojiClickHandler(inputEmoji) {
    setEmoji(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      {/* Header Begins*/}
      <Header></Header>
      {/* Header Ends*/}

      {/* Section Begins*/}
      <div className="section">
        <input
          className="emoji-input"
          onChange={emojiChangeHandler}
          value={emoji}
          placeholder={"Search your emoji"}
        />
        <h2> {emoji} </h2>
        <h3> {meaning} </h3>
        <div>
          {emojisToDisplay.map((emoji) => (
            <span
              className="emoji-disp"
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
      {/* Header Ends*/}

      {/* Footer Begins*/}
      <Footer></Footer>
      {/* Footer Ends*/}
    </div>
  );
}

export default App;

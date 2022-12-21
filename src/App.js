/* eslint-disable */
import { useState } from "react";
import * as AppConstants from "./config/app-config";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

const emojisToDisplay = Object.keys(AppConstants.EMOJI_DICTIONARY).slice(0, 10);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    AppConstants.EMOJI_INTERPRETATION.DEFAULT_MESSAGE
  );

  /**
   * Fucntion to handle emoji change
   * @param {*} event
   */
  function emojiChangeHandler(event) {
    const inputEmoji = event.target.value;

    setEmoji(inputEmoji);

    if (
      inputEmoji.match(AppConstants.LETTERS_NUMBERS) ||
      inputEmoji.match(AppConstants.SPECIAL_CHARACTERS)
    ) {
      setMeaning(AppConstants.EMOJI_INTERPRETATION.INVALID_INPUT_MESSAGE);
      return;
    } else if (inputEmoji.length === 0) {
      setMeaning(AppConstants.EMOJI_INTERPRETATION.DEFAULT_MESSAGE);
      return;
    }

    inputEmoji in AppConstants.EMOJI_DICTIONARY
      ? setMeaning(AppConstants.EMOJI_DICTIONARY[inputEmoji])
      : setMeaning(AppConstants.EMOJI_INTERPRETATION.FAILED_MESSAGE);
  }

  /**
   * Function to handle click event of emoji
   * @param {*} inputEmoji
   */
  function emojiClickHandler(inputEmoji) {
    setEmoji(inputEmoji);
    setMeaning(AppConstants.EMOJI_DICTIONARY[inputEmoji]);
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
          placeholder={"search one emoji at a time..."}
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
      {/* Section Ends*/}

      {/* Footer Begins*/}
      <Footer></Footer>
      {/* Footer Ends*/}
    </div>
  );
}

export default App;

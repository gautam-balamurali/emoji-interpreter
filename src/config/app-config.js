/* eslint-disable */

/**File to declare all the app constants */

const EMOJI_DICTIONARY = {
  "😊": "Smiling",
  "❤️": "Love",
  "🏏": "Cricket Game",
  "🙈": "See-No-Evil Monkey",
  "👍": "Thumbs Up",
  "🏳️‍🌈": "Rainbow Flag",
  "🔥": "Fire",
  "🎂": "Birthday Cake",
  "🎸": "Guitar",
  "🤣": "Rolling on the Floor Laughing",
  "👀": "Eyes",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🍕": "Pizza",
  "🍺": "Beer Mug",
  "✈️": "Airplane",
  "💻": "Laptop",
  "📧": "E-Mail",
  "👎": "Thumbs Down",
  "🙏": "Folded Hands",
  "💋": "Kiss Mark",
  "🥡": "Takeout Box",
  "😳": "Disbelief",
  "😑": "Annoyance",
  "😔": "Sad",
};

const EMOJI_INTERPRETATION = {
  DEFAULT_MESSAGE: "translation will appear here...",
  FAILED_MESSAGE:
    "failed to recognize this emoji, will update soon if it's valid...",
  INVALID_INPUT_MESSAGE: "please enter a valid emoji...",
};

/**regex for letters and numbers */
const LETTERS_NUMBERS = /^[0-9a-zA-Z]+$/;

/**regex for special characters */
const SPECIAL_CHARACTERS = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export {
  EMOJI_DICTIONARY,
  EMOJI_INTERPRETATION,
  LETTERS_NUMBERS,
  SPECIAL_CHARACTERS,
};

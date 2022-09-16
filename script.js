const { useState } = React;

const audioKeys = [
  {
    letter: "Q",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    letter: "W",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    letter: "E",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    letter: "A",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    letter: "S",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    letter: "D",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    letter: "Z",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    letter: "X",
    link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    letter: "C",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const Body = () => {
  const [song, setSong] = useState("");

  function playAudio(id) {
    document.getElementById(id).play();
    setSong(
      audioKeys
        .filter((i) => i.letter === id)[0]
        .link.split("//")[1]
        .split("/")[3]
        .replace(".mp3", "")
        .replace(/\-+/, " ")
        .replace("_", " ")
        .replace("_", " ")
    );
  }

  window.addEventListener("keypress", (event) => {
    playAudio(event.key.toUpperCase());
  });

  return (
    <div id="drum-machine">
      {audioKeys.map((item) => (
        <button
          id={"drum-" + item.letter}
          onClick={() => {
            playAudio(item.letter);
          }}
          className="drum-pad"
        >
          <audio id={item.letter} className="clip" src={item.link}></audio>
          {item.letter}
        </button>
      ))}
      <p id="display">{song}</p>
    </div>
  );
};

ReactDOM.render(<Body />, document.getElementById("root"));

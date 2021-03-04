import React from "react";
import Audio from "./theme.mp3";
import { Howl, Howler } from "howler";


function SoundButton() {
  const [playing, setPlaying] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("MUSIC");

  var sound = new Howl({
    src: [Audio],
    onplay: function() {
      setPlaying(true);
      setButtonText("STOP MUSIC!");
    },
    onstop: function() {
      setPlaying(false);
      setButtonText("PLAY MUSIC!");
    }
  });

  Howler.volume(0.1);

  const handleClick = () => {
    if(!playing){
      sound.play();
    } if(playing) {
      Howler.stop();
    }
  }

  return(
    <li className='nav-item pad nav-style' onClick={handleClick}>
      <span id="playbtn">{buttonText}</span>
    </li>
  )
}

export default SoundButton;
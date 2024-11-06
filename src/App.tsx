import {AudioClip} from "./types;"

interface DrumPadProps {
  audioClip: AudioClip;
}

function DrumPad({ audioClip }: DrumPadProps) {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
    .play()
    .then(() => {
      console.log("played");
    })
    .catch(console.error);
    document.getElementById("display")!.innerHTML = clip.description;
  };

  return(
    <button className="drum-pad" id = {`drum-${audioClip.keyTrigger}`} onClick ={() => playSound(audioClip)}>
      <audio src={audioClip.url}
      id = {audioClip.ketTrigger}
      className = "clip"
      ></audio>
      {audioClip.ketTrigger}
    </button>
  );
}

      

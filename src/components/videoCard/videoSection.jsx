import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="video-section">

      <h2>Watch Our Business in Action</h2>

      <div className="video-card">

        <video
          ref={videoRef}
          src="/src/assets/video/animation.mp4"   // 👉 put your video in public/videos/
          className="video"
        />

        {/* OVERLAY */}
        <div className="video-overlay" onClick={toggleVideo}>
          <button className="play-btn">
            {playing ? <FaPause /> : <FaPlay />}
          </button>
        </div>

      </div>

    </section>
  );
};

export default VideoSection;
import { useState } from "react";

export default function ImageOverlaySlide(props) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div
      className="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img src={props.src} alt="Your Image" />
      {showOverlay && <a className="overlay" href={props.link} target="_blank" rel="noreferrer noopener">Get this book!</a>}
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { Sprite } from "@pixi/react";
import KoalaImage from "../../assets/Koala.webp";

interface PlayProps {
  initialX: number; // Initial X position of the character
  initialY: number; // Initial Y position of the character
  scale?: number; // Scale of the character (optional)
  imagePath?: string; // Image path
}

const PlayerComponent: React.FC<PlayProps> = ({
  initialX,
  initialY,
  scale = 1,
  imagePath,
}) => {
  // Track the koala's position with state
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  // Handle keyboard input for controlling the character
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Arrow key controls for moving the character
      switch (e.key) {
        case "ArrowUp":
          setY((prevY) => prevY - 5); // Move up
          break;
        case "ArrowDown":
          setY((prevY) => prevY + 5); // Move down
          break;
        case "ArrowLeft":
          setX((prevX) => prevX - 5); // Move left
          break;
        case "ArrowRight":
          setX((prevX) => prevX + 5); // Move right
          break;
        default:
          break;
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <Sprite
      image={KoalaImage} // Use the path to your koala image
      x={x}
      y={y}
      width={100}
      height={100}
      anchor={0.5} // Center the character
      //   scale={scale}
    />
  );
};

export default PlayerComponent;

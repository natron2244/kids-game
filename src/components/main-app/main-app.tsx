// import { BlurFilter } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";
// import { useMemo } from "react";
// import KoalaImage from "../assets/Koala.webp";
import PlayerComponent from "../player/player";

export const MainAppComponent = () => {
  //   const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (
    <Stage options={{ background: 0xffffff }}>
      {/* <Sprite
        image={KoalaImage}
        x={400}
        y={270}
        width={100}
        height={100}
        anchor={{ x: 0.5, y: 0.5 }}
      /> */}

      <PlayerComponent
        initialX={400}
        initialY={270}
        imagePath="../../assets/Koala.webp"
      ></PlayerComponent>

      <Container x={400} y={330}>
        <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          //   filters={[blurFilter]}
        />
      </Container>
    </Stage>
  );
};

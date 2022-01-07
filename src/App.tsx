import "./styles.css";
import Image from "./assets/images.png";

export const App = () => {
  return (
    <>
      <h1>React Starter {process.env.name}</h1>
      <img src={Image} />
    </>
  );
};

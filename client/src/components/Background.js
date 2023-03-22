import image from "./assets/background.jpg"; 

function Background() {
  return (
    <div style={{ backgroundImage:`url(${image})` }}>
      Hello World
    </div>
  );
}

export { Background };
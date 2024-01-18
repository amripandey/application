import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Get from "./components/Get";
import { useState } from "react";

function App() {
  const [text, setText] = useState();
  const [clickEvent, setClickEvent] = useState(false);

  const changeClick = () => {
    setClickEvent(!clickEvent)
  };

  return (
    <main className="h-full w-full bg-green-500 pb-5">
      <NavBar />
      <div className="flex flex-col m-6 mx-20 gap-6">
        <Get changeText={setText} clickEvent={changeClick} />
        <Post data={text} event={clickEvent} />
      </div>
    </main>
  )
}

export default App

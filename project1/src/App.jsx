import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Get from "./components/Get";

function App() {
  return (
    <main className="h-full w-full bg-green-500 pb-5">
      <NavBar />
      <div className="flex flex-col m-6 mx-20 gap-6">
        <Get />
        <Post />
      </div>
    </main>
  )
}

export default App

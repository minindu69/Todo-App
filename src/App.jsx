import "./App.css";
import TodoList from "./Components/Todo List/TodoList";
import Footer from "./Components/Footer/Footer";
import { ParticlesBackground } from "./Components/Particles Background/ParticlesBackground";
import { particlesOptions } from "./config/particlesOptions";
import { fireworksParticlesOptions } from "./config/fireworksParticlesOptions";

function App() {
  return (
    <div>
      {/* Particles in the background */}
      <div className="-z-10">
        <ParticlesBackground
          particlesOptions={particlesOptions}
        ></ParticlesBackground>
        {/* <ParticlesBackground
          particlesOptions={fireworksParticlesOptions}
        ></ParticlesBackground> */}
      </div>

      {/*App Content */}
      <div className="app flex flex-col min-h-screen z-10">
        <div className="todo__list flex-1 z-10">
          <TodoList></TodoList>
        </div>
        <div className="z-10">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;

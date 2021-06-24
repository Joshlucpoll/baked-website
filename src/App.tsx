import NavBar from "./components/navBar";
import SocialBar from "./components/socialBar";
import GenerateLogo from "./components/logo";

import { motion } from "framer-motion";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar path="home"></NavBar>
      {/* to be fixed */}
      {/* <SocialBar></SocialBar> */}
      <div className="home-container">
        <div className="logo-container">
          <GenerateLogo timings={[0.5, 1.25, 2, 2.25, 2.5]} />
        </div>
        <div
          className="down-container"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            initial={{ y: -2 }}
            animate={{ y: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <path
              fill="white"
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
          </motion.svg>
        </div>
      </div>
      <GenerateLogo timings={[0.5, 1.25, 2, 2.25, 2.5]} />
      <GenerateLogo timings={[0.5, 1.25, 2, 2.25, 2.5]} />
      <GenerateLogo timings={[0.5, 1.25, 2, 2.25, 2.5]} />
    </div>
  );
}

export default App;

import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import Facebook from "../img/social_icons/facebook.svg";
import Instagram from "../img/social_icons/instagram.svg";

import "../styles/socialBar.css";

class SocialBar extends React.Component<
  {},
  { isOpen: boolean; width: number }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
      width: window.innerWidth,
    };
  }

  switchBar() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.setState({ width: window.innerWidth })
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.setState({ width: window.innerWidth })
    );
  }

  render() {
    if (this.state.width > 600) {
      return (
        <motion.div
          className="social-bar-container"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <a
            href="https://www.facebook.com/BAKEDbyemilydavis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="facebook social-icon-container" title="Facebook">
              <img className="invert" src={Facebook} alt="Facebook" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/baked_by_emily_davis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="instagram social-icon-container" title="Instagram">
              <img className="invert" src={Instagram} alt="Instagram" />
            </div>
          </a>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          className="social-bar-container"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <AnimatePresence>
            {this.state.isOpen && (
              <motion.div
                className="icons-container"
                initial={{ width: 0, opacity: -1 }}
                animate={{ width: "30vh", opacity: 1 }}
                exit={{ width: 0, opacity: -1 }}
                transition={{
                  duration: 0.2,
                  type: "tween",
                }}
              >
                <a
                  href="https://www.facebook.com/BAKEDbyemilydavis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="facebook social-icon-container"
                    title="Facebook"
                  >
                    <img className="invert" src={Facebook} alt="Facebook" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/baked_by_emily_davis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="instagram social-icon-container"
                    title="Instagram"
                  >
                    <img className="invert" src={Instagram} alt="Instagram" />
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.svg
            className="share-button"
            onClick={() => this.switchBar()}
            style={{ originX: 0 }}
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="4vh"
            height="4vh"
          >
            <motion.path
              opacity={this.state.isOpen ? "0" : "1"}
              d="M18 2A3 3 0 1 0 18 8 3 3 0 1 0 18 2zM18 16A3 3 0 1 0 18 22 3 3 0 1 0 18 16zM6 9A3 3 0 1 0 6 15 3 3 0 1 0 6 9z"
            />
            <path
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M18 19L6 12 18 5"
            />
          </motion.svg>
        </motion.div>
      );
    }
  }
}

export default SocialBar;

import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "../styles/navBar.css";
import BAKED_thumbnail from "../img/BAKED_thumbnail.png";

export default function NavBar(props: { path: string }) {
  const tempPage: string =
    props.path.charAt(0).toUpperCase() + props.path.slice(1);

  const items: string[] = ["Home", "Cakes", "Contact"];
  const currentPage: string = items.includes(tempPage) ? tempPage : "Home";
  const [selected, setSelected] = useState(currentPage);

  return (
    <nav>
      <div className="nav-row">
        <img className="nav-logo" src={BAKED_thumbnail} alt="Logo" />
        <AnimateSharedLayout>
          <ul className="nav-items-container">
            {["Home", "Cakes", "Contact"].map((item) => (
              <NavItem
                key={item}
                text={item}
                isActive={currentPage === item}
                isSelected={selected === item}
                onHover={() => setSelected(item)}
                onExit={() => setSelected(currentPage)}
              ></NavItem>
            ))}
          </ul>
        </AnimateSharedLayout>
      </div>
    </nav>
  );
}

function NavItem(props: {
  text: string;
  isSelected: boolean;
  isActive: boolean;
  onHover: any;
  onExit: any;
}) {
  return (
    <li
      className="nav-item-container"
      onMouseOver={props.onHover}
      onMouseLeave={props.onExit}
    >
      {props.isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}
      <div
        className="nav-item"
        // style={props.isActive ? { fontWeight: "bold" } : {}}
      >
        {props.text}
      </div>
    </li>
  );
}

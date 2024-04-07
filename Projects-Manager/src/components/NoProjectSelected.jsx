import { useState } from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
import { motion } from "framer-motion";
import imageList from "../assets/blue-cap-checklist.png";

export default function NoProjectSelected({ startAddProject }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="mt-24 text-center w-5/6 mx-auto">
      <motion.img
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ scale: isHovered ? 1.5 : 1 }}
        transition={{ duration: 0.8 }}
        src={noProjectImage}
        alt="empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected{" "}
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={startAddProject}>Create new project</Button>
      </p>
      <img
        src={imageList}
        alt="imageList"
        className="w-52 h-52 object-contain mx-auto mt-8"
      />
    </div>
  );
}

import node from "./node.png";
import js from "./js.png";
import react from "./react.png";
import mysql from "./mysql.png";
import python from "./python.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Skills = () => {
    const skills = [
      {
        name: "JavaScript",
        image: js,
      },
      {
        name: "React",
        image: react,
      },
      {
        name: "Node.js",
        image: node,
      },
      {
        name: "Python",
        image: python,
      },
      {
        name: "MySQL",
        image: mysql,
      },
    ];
  
    return (
      <div>
      <Navbar />
        <h1>Skills</h1>
        <ul>
          {skills.map((item) => (
            <li key={item.name} >
              <img src={item.image} width={"100px"} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    );
  };

  export default Skills;
const Skills = () => {
    const skills = [
      {
        name: "JavaScript",
        image: "./js.png",
      },
      {
        name: "React",
        image: "./react.png",
      },
      {
        name: "Node.js",
        image: "./node.png",
      },
      {
        name: "Python",
        image: "./python.png",
      },
      {
        name: "MySQL",
        image: "./mysql.png",
      },
    ];
  
    return (
      <div>
        <h1>Skills</h1>
        <ul>
          {skills.map((item) => (
            <li key={item.name}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Skills;
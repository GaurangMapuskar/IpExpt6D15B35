import styled from "styled-components";

const Education = () => {
  const education = [
    {
      name: "VN Sule Guruji Eng Med Sec School",
      degree: "High School Diploma",
      startYear: 2016,
      endYear: 2020,
    },
    {
      name: "VESIT",
      degree: "Bachelor of Engineering In Information technology",
      startYear: 2020,
      endYear: 2024,
    },
  ];

  return (
    <div>
      <h1>Education</h1>
      <EducationList>
        {education.map((item) => (
          <EducationItem key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.degree}</p>
            <p>{item.startYear} - {item.endYear}</p>
          </EducationItem>
        ))}
      </EducationList>
    </div>
  );
};

const EducationList = styled.ul`
  border: 1px solid black;
  align-items: left;
  list-style-type: none;
  padding: 0;
  border-radius:10px;
  margin:40px
`;

const EducationItem = styled.li`
  padding: 10px;
`;

export default Education;

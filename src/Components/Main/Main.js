import React, { useState, useEffect } from "react";
import "./Main.css";
import Tooltip from "../Tooltip/Tooltip";

function Main(props) {
  const [studentData, setstudentData] = useState([]);
  const [currentNode, setCurrentNode] = useState("");
  useEffect(() => {
    fetch("https://student-management-api-1u3cd4j7s.now.sh/students")
      .then((response) => response.json())
      .then((data) => {
        setstudentData(data);
      });
  }, []);

  let classes = studentData
    .map((item) => item.class)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort(function (a, b) {
      return a - b;
    });

  let datastd = [];

  for (let i = 0; i < classes.length; i++) {
    let classi = { className: i + 1, sections: [] };
    datastd.push(classi);
  }

  for (let i = 0; i < datastd.length; i++) {
    for (let j = 0; j < studentData.length; j++) {
      if (datastd[i].className === studentData[j].class) {
        let sexy = { section: studentData[j].section, students: [] };
        if (
          !datastd[i].sections
            .map((item) => item.section)
            .includes(sexy.section)
        ) {
          datastd[i].sections.push(sexy);
        }
      }
    }
    datastd[i].sections.sort((a, b) => (a.section > b.section ? 1 : -1));
  }

  for (let i = 0; i < datastd.length; i++) {
    for (let k = 0; k < datastd[i].sections.length; k++) {
      for (let j = 0; j < studentData.length; j++) {
        if (
          datastd[i].className === studentData[j].class &&
          datastd[i].sections[k].section === studentData[j].section
        ) {
          var newstd = {
            name: studentData[j].name,
            age: studentData[j].age,
            gender: studentData[j].gender,
            rollNumber: studentData[j].rollNumber,
            sports: studentData[j].sports,
          };

          datastd[i].sections[k].students.push(newstd);
        }
      }
    }
  }

  const handleDrawerData = (stud) => {
    props.openDrawer(stud);
  };
  return (
    <div>
      <ul>
        {datastd.map((item) => (
          <li>
            {`class ${item.className}`}
            <ul style={{}}>
              {item.sections.map((sec) => (
                <li>
                  {`Section ${sec.section}`}
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {sec.students.map((stud, index) => (
                      <Tooltip content={stud} direction="bottom">
                        <div
                          style={{
                            cursor: "context-menu",
                            border: "1px solid black",
                            textAlign: "center",
                            margin: "5px 10px 5px 10px",
                            width: "100px",
                            background:
                              stud.rollNumber !== currentNode
                                ? "#f8f5f1"
                                : "#808080",
                          }}
                          onClick={() => {
                            handleDrawerData(stud);
                            setCurrentNode(stud.rollNumber);
                          }}
                        >
                          {stud.name}
                        </div>
                      </Tooltip>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;

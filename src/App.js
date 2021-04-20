import { useState, useRef, useEffect } from "react";
import "./App.css";
import Drawer from "./Components/Drawer/Drawer";
import DrawerChild from "./Components/DrawerChild/DrawerChild";
import Main from "./Components/Main/Main";

function App() {
  const [drawer, setDrawer] = useState(false);

  const [drawerData, setDrawerData] = useState({});

  let Draw = null;
  if (drawer) {
    Draw = (
      <div>
        <Drawer
          compo={
            <DrawerChild
              data={drawerData}
              closeDrawer={() => setDrawer(false)}
            />
          }
        />
      </div>
    );
  }
  return (
    <div style={{ height: "100%" }}>
      {drawer ? (
        <div>
          <Drawer
            compo={<DrawerChild data={drawerData} />}
            closeDrawer={() => setDrawer(false)}
          />
        </div>
      ) : null}
      <div
        style={{
          maxWidth: drawer ? `${window.innerWidth - 600}px` : "100%",
          position: "relative",
          left: "5%",
        }}
      >
        <Main
          openDrawer={(stud) => {
            setDrawer(true);
            setDrawerData(stud);
          }}
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

import MetaWiki from "./components/MetaRadio";
import Calendar from "./components/Calendar";
// import MetaRadio from "./components/MetaRadio";
import Radio from "./components/Radio";
import SeedPool from "./components/SeedPool";

import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "./styles.css";

export type ViewId = "a" | "b" | "c" | "new";

const config = {
};

// const APP_MAP: Record<ViewId, string> = {
//   a: <MetaWiki />,
//   b: <SeedPool />,
//   c: <MetaRadio />,
//   new: "New Window"
// };

// export const mosaicWindow = (
//   <Mosaic<ViewId>
//     className="mosaic-blueprint-theme bp3-dark"
//     renderTile={(id, path) => (
//       <MosaicWindow<ViewId>
//         config={config}
//         path={path}
//         createNode={() => <Calendar />}
//         title={id}
//       >
//         <div style={{ width: "100%", height: "100%" }}>{APP_MAP[id]}</div>
//       </MosaicWindow>
//     )}
//     initialValue={{
//       direction: "row",
//       first: "a",
//       second: {
//         direction: "column",
//         first: "b",
//         second: "c"
//       }
//     }}
//   />
// );

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  a: <Radio />,
  b: <div>Top Right Window</div>,
  c: <div>Bottom Right Window</div>,
};

export const mosaicWindow = (
  <div id="app">
    <Mosaic<string>
      renderTile={(id) => ELEMENT_MAP[id]}
      initialValue={{
        direction: 'row',
        first: 'a',
        second: {
          direction: 'column',
          first: 'b',
          second: 'c',
        },
        splitPercentage: 40,
      }}
    />
  </div>
);

function App() {
  return mosaicWindow;
}

export default App;

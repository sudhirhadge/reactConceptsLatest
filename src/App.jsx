import React from "react";
import "./App.css";
import StartTransition from "./Examples/13. StartTransition";
// import HOCexample from "./Examples/1.HOC/3.HOCexample";
// import RenderProps from "./Examples/2.RenderPropsPattern/3.RenderProps";
// import Hooks from "./Examples/3.Hooks/Hooks";
// import TestingApp from "./Examples/4.Testing/0.TestingApp";
// import ImageUploader from "./Examples/5.ImageUpload/ImageUpload";
// import RouterApp from "./Examples/6. Router/RouterApp";
// import AppDataFetch from "./Examples/7.DataFetch/AppDataFetch";
// import ReduxApp from "./Examples/8. Redux/ReduxApp";
// import ReduxToolkitApp from "./Examples/9. Redux ToolKit/ReduxReduxToolKit";
// import AdvancedExamples from "./Examples/11.Advanced";
// import ForwardRefDemo from "./Examples/12.ForwardRef";
// import UseDeferedValue from "./Examples/3.Hooks/8. useDeferedValue";
// import UseTransition from "./Examples/3.Hooks/9. useTransition";

function App() {
  return (
    <div className="App">
      {/* Enable one demo at a time by uncommenting the component below */}
      {/* <HOCexample /> */}
      {/* <RenderProps /> */}
      {/* <Hooks /> */}
      {/* <TestingApp /> */}
      {/* <ImageUploader /> */}
      {/* <RouterApp /> */}
      {/* <AppDataFetch /> */}
      {/* <ReduxApp /> */}
      {/* <ReduxToolkitApp /> */}
      {/* <AdvancedExamples /> */}
      {/* <ForwardRefDemo /> */}
      {/* <UseDeferedValue/> */}
      {/* <UseTransition/> */}
      <StartTransition />
    </div>
  );
}

export default App;

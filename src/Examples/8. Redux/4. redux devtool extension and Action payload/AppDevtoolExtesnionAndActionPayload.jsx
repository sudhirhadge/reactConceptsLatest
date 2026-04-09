import "./App.css";
import React from "react";
import CakeContainer from "./Components/0.CakeContainer";
import { Provider } from "react-redux"; // Step 5
import store from "./Redux/4.store"; // Step 6
import HooksCakeContainer from "./Components/9.HooksCakeContainer";
import HooksIceCreamContainer from "./Components/13.HooksIceCreamContainer";
import CakeContainerWithInput from "./Components/18.cakeContainerWithInput";

export default function AppDevtoolExtesnionAndActionPayload() {
  return (
    <Provider store={store}>
      {/* step 6.1 wrapping in provider component*/}
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <CakeContainerWithInput />
      </div>
    </Provider>
  );
}

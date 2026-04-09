import React from "react";
import AppSingleReducer from "./1. single reducer/AppSingleReducer";
import AppMultipleReducer from "./2. multiple reducer/AppMultipleReducer";
import AppMiddleware from "./3. Middleware/AppMiddleware";
import AppReduxOwnProps from "./5. Redux handling ownProps/AppReduxOwnProps";
import AppDevtoolExtesnionAndActionPayload from "./4. redux devtool extension and Action payload/AppDevtoolExtesnionAndActionPayload";
import AppAsyncActions from "./6. Redux for Async actions/AppAsyncActions";

const ReduxApp = () => {
  return (
    <div>
      ReduxApp
      {/* <AppSingleReducer /> */}
      {/* <AppMultipleReducer /> */}
      {/* <AppMiddleware /> */}
      {/* <AppDevtoolExtesnionAndActionPayload /> */}
      {/* <AppReduxOwnProps /> */}
      <AppAsyncActions />
    </div>
  );
};

export default ReduxApp;

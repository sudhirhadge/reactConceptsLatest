import React from "react";
import AppMultipleReducer from "./ReduxExample/MultipleReducer/AppMultipleReducer";
import AppSingleReducer from "./ReduxExample/SingleReducer/AppSingleReducer";
import AppMultipleReducerReduxToolKit from "./ReduxToolKitExample/multipleReducer/AppMultipleReducerReduxToolKit";
import AppSingleReducerReduxToolKit from "./ReduxToolKitExample/SingleReducer/AppSingleReducerReduxToolKit";

const ReduxReduxToolKit = () => {
  return (
    <div>
      ReduxReduxToolKit
      {/* <AppSingleReducer /> */}
      {/* <AppMultipleReducer /> */}
      {/* <AppSingleReducerReduxToolKit /> */}
      <AppMultipleReducerReduxToolKit />
    </div>
  );
};

export default ReduxReduxToolKit;

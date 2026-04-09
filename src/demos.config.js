/*
  Centralized registry of demos.
  Keeps App component clean and scalable.
*/

import { lazy } from "react";

export const demos = [
  {
    name: "HOC Example",
    component: lazy(() => import("./Examples/1.HOC/3.HOCexample")),
  },
  {
    name: "Render Props",
    component: lazy(() =>
      import("./Examples/2.RenderPropsPattern/3.RenderProps")
    ),
  },
  {
    name: "Hooks",
    component: lazy(() => import("./Examples/3.Hooks/Hooks")),
  },
  {
    name: "Testing",
    component: lazy(() => import("./Examples/4.Testing/0.TestingApp")),
  },
  {
    name: "Image Upload",
    component: lazy(() =>
      import("./Examples/5.ImageUpload/ImageUpload")
    ),
  },
  {
    name: "Router",
    component: lazy(() => import("./Examples/6. Router/RouterApp")),
  },
  {
    name: "Data Fetch",
    component: lazy(() =>
      import("./Examples/7.DataFetch/AppDataFetch")
    ),
  },
  {
    name: "Redux",
    component: lazy(() => import("./Examples/8. Redux/ReduxApp")),
  },
  {
    name: "Redux Toolkit",
    component: lazy(() =>
      import("./Examples/9. Redux ToolKit/ReduxReduxToolKit")
    ),
  },
  {
    name: "Advanced",
    component: lazy(() => import("./Examples/11.Advanced")),
  },
  {
    name: "Forward Ref",
    component: lazy(() => import("./Examples/12.ForwardRef")),
  },
  {
    name: "useDeferredValue",
    component: lazy(() =>
      import("./Examples/3.Hooks/8. useDeferedValue")
    ),
  },
  {
    name: "useTransition",
    component: lazy(() =>
      import("./Examples/3.Hooks/9. useTransition")
    ),
  },
  {
    name: "startTransition",
    component: lazy(() =>
      import("./Examples/13. StartTransition")
    ),
  },
];



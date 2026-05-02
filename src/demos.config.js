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
    subTopics: [
      { name: "useState", component: lazy(() => import("./Examples/3.Hooks/1.UseStateHook/UseStateApp")) },
      { name: "useCallback", component: lazy(() => import("./Examples/3.Hooks/2.UseCallbackHook/useCallbackApp")) },
      { name: "useMemo", component: lazy(() => import("./Examples/3.Hooks/3.UseMemoHook/1.useMemoApp.jsx")) },
      { name: "useRef", component: lazy(() => import("./Examples/3.Hooks/4.UseRefHook/UseRefApp.jsx")) },
      { name: "useEffect", component: lazy(() => import("./Examples/3.Hooks/5.UseEffectHook/UseEffectHookApp.jsx")) },
      { name: "useContext", component: lazy(() => import("./Examples/3.Hooks/6.useContext/1.UseContextApp.jsx")) },
      { name: "useReducer", component: lazy(() => import("./Examples/3.Hooks/7.UseReducerHook/0.UseReducerApp.jsx")) },

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
      { name: "useOptimistic UI", component: lazy(() => import("./Examples/3.Hooks/10. useOptimistic/index.jsx")) },
      { name: "useActionState", component: lazy(() => import("./Examples/3.Hooks/11. useActionState/index.jsx")) },
      { name: "useFormStatus", component: lazy(() => import("./Examples/3.Hooks/12. useFormStatus/index.jsx")) },
      { name: "useFormState", component: lazy(() => import("./Examples/3.Hooks/13. useFormState/index.jsx")) },
      // { name: "useLayoutEffect", component: lazy(() => import("./Examples/3.Hooks/14. UseLayoutEffect/index.jsx")) },
    ]

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



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Concepts Project

This repository contains React concept demos and examples organized under src/Examples.

## Concepts Covered

- Higher Order Components (HOC)
  - Counter
  - Hover
  - HOC example / Updated component wrapping

- Render Props Pattern
  - Counter and hover reusable render props
  - Shared reusable logic components

- React Hooks
  - useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer, useOptimistic
  - useLayoutEffect, useImperativeHandle, custom hook patterns
  - Context API for shared state

- React Component Fundamentals
  - Functional components
  - Class components
  - JSX and conditional rendering
  - Lists and keys
  - Controlled/uncontrolled forms
  - Refs and forwarding refs
  - Fragments and strict mode

- Error Handling
  - Error boundaries
  - Error handling patterns in components

- Performance Optimizations
  - memo, useMemo, useCallback
  - lazy, Suspense, code splitting
  - React DevTools profiling

- React Router
  - Client-side routing, nested routes, 404 handling
  - Pages: Home, Blog, Article, Profile, Contact, Checkout flows

- Data Fetching
  - Fetch API and Axios examples
  - CRUD calls (GET/POST/PUT/DELETE)
  - GraphQL query example

- State Management
  - Local state with hooks
  - Global state with Context
  - Redux: Single reducer, multiple reducers, middleware, async actions, ownProps
  - Redux Toolkit: slices and thunks

- Testing
  - React testing basics with component snapshots and unit tests

- Image Upload
  - File upload component and style

- CSS Layouts
  - Flexbox and Grid examples
  - Responsive layouts

- Advanced Concepts
  - Portals
  - Strict mode
  - Server-side rendering fundamentals (concepts)
  - Concurrent mode (experimental concepts)
  - Error handling with functional components
  - Lazy loading with Suspense

- ForwardRef
  - Accessing child DOM elements from parent
  - useImperativeHandle for custom ref methods
  - Real-life: focus management, library integrations
  - Tradeoffs: imperative vs declarative, tight coupling

  

## Project Structure

- src/App.js / src/index.js: Root app setup
- src/Examples: Feature-specific module demos
- public/index.html: Application shell

## Examples with Direct Links

- [1. HOC](src/Examples/1.HOC)
- [2. Render Props](src/Examples/2.RenderPropsPattern)
- [3. Hooks](src/Examples/3.Hooks)
- [4. Testing](src/Examples/4.Testing)
- [5. Image Upload](src/Examples/5.ImageUpload)
- [6. Router](src/Examples/6.%20Router)
- [7. Data Fetch](src/Examples/7.DataFetch)
- [8. Redux](src/Examples/8.%20Redux)
- [9. Redux Toolkit](src/Examples/9.%20Redux%20ToolKit)
- [10. CSS](src/Examples/10.%20CSS)
- [11. Advanced](src/Examples/11.Advanced)
- [12. ForwardRef](src/Examples/12.ForwardRef)

## What to Run per Demo

1. HOC: open src/Examples/1.HOC/HOCexample.js in App.js, then 
npm run dev
2. Render Props: open src/Examples/2.RenderPropsPattern/RenderProps.js in App.js, then 
npm run dev
3. Hooks: open src/Examples/3.Hooks/Hooks.js in App.js, then 
npm run dev
4. Testing: run 
npm test; view src/Examples/4.Testing test files
5. Image Upload: open src/Examples/5.ImageUpload/ImageUpload.js in App.js, then 
npm run dev
6. Router: open src/Examples/6. Router/RouterApp.jsx in App.js, then 
npm run dev
7. Data Fetch: open src/Examples/7.DataFetch/AppDataFetch.jsx in App.js, then 
npm run dev
8. Redux: open src/Examples/8. Redux/ReduxApp.jsx in App.js, then 
npm run dev
9. Redux Toolkit: open src/Examples/9. Redux ToolKit/ReduxReduxToolKit.jsx in App.js, then 
npm run dev
10. CSS: open src/Examples/10. CSS/CSSApp.jsx in App.js, then 
npm run dev
11. Advanced: open src/Examples/11.Advanced/index.js in App.js, then npm run dev
12. ForwardRef: open src/Examples/12.ForwardRef/index.js in App.js, then npm run dev

## How to Run

1. 
npm install
2. 
npm run dev

## Notes

All example apps are playground projects meant for learning core React concepts.

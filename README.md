# **Crwn Clothing | Ecom Frontend**

## **Topics Covered**
- Rendering
  - components rerender anytime the state object or props of the component changes

- Class Components
  - doesn't rerun whole code, only the render & certain lifecycle method triggers
  - lifecycle methods
    - `onMount()`
    - `didUnmount()`
    - `render()`
    - etc.

- Functional Components
  - always runs full code on rerender
  - make small

- Props, passing state, prop-drilling (avoid)

- Creating a form & capturing state

- Hooks
  - `useState()`: used to track variables of a prop & conditionally render
  - `useContext()`: to help avoid prop-drilling, helps pass state around in the Virtual DOM.
    - can be used to wrap/segement off individal access to data (e.g. can determine which children have access to the context)
  - `useEffect()`: to trigger an effect based on some dependencies (e.g. what's in the []) when component renders
  - `useReducer()`: ideal for managing complex states at scale. Utilizies action types, dispatches, reducer hook, etc.

- Unidirectional data flow

### **React**

### **What is?**

### **Why?**

#### **Pillars of React**

### **Client-Side Routing**

#### **React Router**
- Hooks
  - `useNavigate()`: progammatically route in the client
  - `useParams()`: to help create parameterized routes (e.g. `:cateogry`)
    - params will be passed to the component in which `useParams()` is embedded in

### **Styling**
- SASS/SCSS
  - @mixin
  - variables
  - nesting
  - can run into naming collisions if no CSS system is used. Easier to used CSS-in-JS approach

- Styled Components (CSS-in-JS)
  - `css`: block to simulate @mixin (e.g. blocks of CSS passed around)
  - `style(Component)`: styling some component
  - using props to condtionally render styles in a StyledComponent
  - nested styled
  - targeting `${Components}` in a StyledComponent
  - help avoid naming collisions

### **Firebase Platform**
- Fetching to 3rd party API

- Security Rules
  - guarding the firestore

- Cloud Firestore (Firestore)
  - getting documents
  - uploading documents
  - querying the firestore
  - initializing the firestore

- Firebase Auth
  - Google Provider
  - Email & Password sign up
  - verifying users
  - creater authorized users so they can get the access token to make RESTFUL requests to Firestore

### **Hosting**
- Netlify
  - CI with netlify
  - redirects w/ netlify


## **Redux**
- "global context" - wraps the entire application (e.g. Redux store)
- Redux aggregates state & dispatch actions
  - reducer functions (passing state)
  - updates (e.g. batch updates "dispatch actions")
- Rooter Reducer
- A singular store to handle state & dispatch actions
- DO NOT mix Context & Redux. Can cause complexity when mangaging state.
- requires /store directory
- `useSelector()`: to extract values from Redux store

### **Misc**
- Semantic versioning of npm packages/libraries
  - package-lock.json
  - package.json

- npm scripts
  - creating custom scripts


- `Reselect`
  - uses memoized selectors for better performance
  - helps prevent the extra rerenders that `Redux` causes.
  - this happens because new objects are not created & pulled from a momized cache.
    > Since a new object is not returned, React won't rerender since components only rerender when a new state object is given or props change.

- `Redux-persist`: allows you to carry state over multiple sessions
  - needed b/c when navigate away from current session on X route, the browser will discard the current session & not
    remember if for future sessions. In this case, the persistorReduecer is used to keep the cart persistent based on the user.
    Allows them to navigate away & comeback as needed.
  - for local-storage persistence
  - Rehydration of local-storage

- `Redux-logger`
  - for logging Redux dispatches & state
  - middleware
  - possible to write your own logging middleware

- `Redux-thunk`
  - for asynchronous Redux
  - middleware
  - Great for when the app has a lot of asynchronous state that needs to be managed.
  - mainly used for LARAGE scale applications. Would be overkill for small projects.

- `Redux-saga`
  - helps coordinate asynchronous side effects
  - normal middleware flow of redux: action > apply middleware > send to reducers
  - Saga's flow: action > apply middlewares > send to reducers > send to Redux-saga
  - good for handling business logic that needs to happen before going to middleware again
  - Sagas can trigger Sagas
  - Setup
    - root-saga.saga.js
  - REPLACES redux-thunk || redux-observable
  - leverages JS generator functions
    

- `Memoization`: caching values the first time, then pulling from then on the next call. Core concept of dynamic programming.


- `Generator Functions`:
  - similar to async/await
  - requires `function*` with a function name, optional params, brackets.
  - returns a generator object
    - `[[GeneratorStatue]]` and many more props
    - holds a `value` (e.g. the value between instructions)
    - holds a `done` boolean flag, indicating if the function still has code to run or not
  - call `gen.next()` to run the generator function
  - `yield` keyword - holds & returns, used to stash. Pauses exeuction until the statement is done, like await.
  - Good for when you want to control the execution of some function block.
  - able to `return` a value

NOTES:
- Usually only want one asynchronous state management library when using Redux (i.e. saga, thunk, or observable)


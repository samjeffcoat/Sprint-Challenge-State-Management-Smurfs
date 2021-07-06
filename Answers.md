1. What problem does the context API help solve?

It helps us solve the problem of prop drilling and having to pass props to many different components. It allows us to access the props at many different levels of our application. 


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions- Actions are basically object or events that will change our state. They will be dispatched to our store and our the only thing that can update our state. Actions describe what will happen in our store.

Reducers- Reducers will describe how the changes will happen. Reducers are pure functions that take in the previous state and action and return the next state. 

  Store  // The store should have four parts
    // 1. The state
    // 2. Get the state. (getState)
    // 3. Listen to changes on the state. (subscribe)
    // 4. Update the state (dispatch) 

The single source of truth in our redux application is the state tree.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is held in the App and Component is held in the Component. If we have a small app then we can store it in the APP, but otherwise we should hold it in our App. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is basically middleware that allows you to communicate with the store asynchronously.
it allows us to write action creators that return functions instead of just actions. 


1. What is your favorite state management system you've learned and this sprint? Please explain why!

For simplicity state I like context API because it seems more simple to me. If I have a large scale app then I would probably use Redux. 
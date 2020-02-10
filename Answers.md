1. What problem does the context API help solve?

        Context API enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        Actions:
        - Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. Actions have a type field that tells what kind of action to perform and all other fields contain information or data.

        Reducers:
        - Reducers are the pure functions that take the current state and action and return the new state and tell the store how to do.

        Store:
        - The store is the object which holds the state of the application. It's known as the single source of truth because it helps to create universal apps. It means one app, one store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

        Application state is global, that means any component, anywhere in the app can access it as long as they hook into it.

        Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

        Application state should be used on larger projects. Component state is easier to set up and more practical when building a small application.  

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        Redux-thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

        This is still a tough question for me. I loved this unit from top to bottom and can't really decide on one system over the other, so I choose to stick with both for now, that way I'll be a more versatile developer and when my next environment requires me to use one over the other, I'll be ready.

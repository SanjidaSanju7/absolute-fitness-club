import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div >
            <h1>Questions-Answer Part</h1>
            <div className='questions'>
                <div className='single-question'>
                    <h2>1.How Does React work?</h2>
                    <p>Answer:Let’ssay one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
                </div>
                <div className='single-question'>
                    <h2>2.What is the difference between Props and State?</h2>
                    <p>Answer:Have you ever wondered how can we pass the data between the components in ReactJS? We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two. In props the data is passed from one component to another and in state the data is passed within the component only.Props is Immutable /cannot be modified and State is Mutable / can be modified.Props can be used with state and functional components and State can be used only with the state components/class component before 16.0. Props are read-only and State is both read and write. </p>
                </div>
                <div className='single-question'>
                    <h2>3.What does UseEffect do?</h2>
                    <p>Answer:Understanding how the useEffect Hook works is one of the most important concepts for mastering React today. If you have been working with React for several years, it is especially crucial to understand how working with useEffect differs from working with the lifecycle methods of class-based components. In fact, it is a wholesale shift in mindset!With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.What are effects, really? Examples are:
                        1.Fetching data
                        2.Reading from local storage
                        3.Registering and deregistering event listeners
                        React’s effects are a completely different animal than the lifecycle methods of class-based components. The abstraction level differs,too. </p>
                </div>

            </div>
        </div>
    );
};

export default Question;
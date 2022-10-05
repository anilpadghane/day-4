
import React,{useState,useRef,useEffect} from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
        <h3>1.What is useRef hook(Implementation)?</h3>
        <p>The useRef hooks allow you to persists values between renders.It can be used to store a mutable value that does not cause a re-render when updated it.</p>
        <p>It can be used to access a DOM elements directly.</p>
        <h5>Implementation</h5>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
      <h1>Render Count: {count.current}</h1>
      <hr/>
      <h3>2.What is Context API?</h3>
        <p>React context API is a react structurethat introduced with react v.16.3</p><br></br>
        <hr/>
        <h3>3.What is the difference between callback and useCallback Hook ?</h3>
        <p>
          <h4>callback</h4>
          <ul>
            <li>callback is a function which is to be executed after another function has finished their execution.</li>
          </ul>
          <h4>useCallback</h4>
          <ul>
            <li>useCallback is a hook that return a memoized callback when a passed a function and list of dependencies that sets a parameter.</li>
            <li>useCallback is useful when a component is passing a callback to its child component in order to prevent the re-rendering.</li>
          </ul>
        </p><br></br><hr/>
        <h3>4.What is Props Drilling Concept and State Uplifting concept?</h3>
        <p>
          <h4>propDrilling</h4>
          <ul>
            <li>Props drilling referes to the process of passing data from the parent components to the final destination of child component and if there is nested comonent present in the child component then in order to passing the components from parent then other components present in the child components owing the props just to pass it down to the chain.This process is known as props drilling.</li>
            <li>To avoid prop drilling,it is recommended to use useContext hook which is based on context API and it works with mechnism of provider and consumer.</li>
          </ul>
          <h4>State upLifting</h4>
          <ul>
            <li>State upLifting - when several components needs to share same changing data then its is recommended to lift the shared data state up to their closed ancestor.</li>
            <li>So,if two child component uses same data from its parents component,then move the state to parent instead of maintaing local state in both of the child component.</li>
          </ul>
        </p><br></br><hr/>
        <h3>5.What is the difference between useEffect hook and useContext hook?</h3>
        <p>
          <h4>useEffect()</h4>
          <ul>
            <li>useEffect hook allow us to implement the lifecycle methods in the functional components.</li>
            <li>CompoentDidMount(),componentDidUpdate() and compinentWillUnmount() methods gets triggered in the useEffect hook function.</li>
          </ul>
          <h4>useContext()</h4>
          <ul>
            <li>useContext() hook allow us to work with react's context API which itself a mechanism to allow us to share data within its components tree without passing data through props.</li>
          </ul>
        </p><br></br><hr/>
        <h3>6.What are React Life cycles Explain each one with Example?</h3>
        <p>Every react components has a lifecycles of its own.Lifecycle methods we used to monitored our components in different stages of the components existence.</p>
        <h5>Lifecycles has four phases that are mentioned below as:</h5>
        <ul>
          <li>Initialization:In Initialization stage,the components is contructed wth the given props and default stage.This is done in the constructor of a components class.</li>
          <li>Mounting:Munting is the stage of rendering the JSX returned by the render method itself.In this stage,componentDidMount() methods gets called.</li>
          <li>updating:Updating is the stage where the state of the components is updated.In this stage,componentDidUpdate() method gets called.</li>
          <li>Unmounting:This is the final stage of the component lifecycle whre the component is removed from or destoryed from the browser page.In this stage componentWillUnmount() method gets called.</li>
        </ul>
    </div>
  )
}


export default App;

import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react'

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {    
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {    
    console.log("I run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder='Search here...' 
      />
      <h2 className={styles.title}>{counter}</h2>
      <button onClick={onClick}>Click me</button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;

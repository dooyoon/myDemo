import './App.css';

function App() {
  const whatever = () => {
    alert('Button was clicked!!!');
  };

  return (
    <div>
      <h1>Hello Doo!</h1>
      <button onClick={whatever}>Click me</button>
    </div>
  );
}

export default App;

function App() {
  return (
      <h1>Hello World</h1>
  );
}

export default App;


// to render the time stamp along with the Hello World message
function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;

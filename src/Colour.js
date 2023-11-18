import './App.css';
import Content1 from './Components/Content1/Content1'
import ThemeContextProvider from './Context1/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Content1 />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

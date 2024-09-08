import "./App.css";
import Password from "./components/Password";
const App = () => {
  return (
    <div className="app">
      <h1 className="header">Password Validator</h1>
      <Password />
      <p className="footer">Made with ❤️ by Abhishek Gurjar </p>
    </div>
  );
};

export default App;

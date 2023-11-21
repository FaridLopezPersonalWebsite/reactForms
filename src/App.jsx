import './App.css';
import Authenticate from "../src/Components/Authenticate.jsx";
import SignUpForm from "../src/Components/SignUpForm.jsx";
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
};
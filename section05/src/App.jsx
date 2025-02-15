import './App.css';
// useState 리액트가 제공하는 내장함수
// import {useState} from "react";
// 리렌더링 조건 1. state, 2. props, 3. 부모컴포넌트

import HookExam from "./components/HookExam";

function App() {
  
  return ( // html을 반환 하는 App component
    <>
      <HookExam/>
    </>
  );
}

export default App

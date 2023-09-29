import React, { useState } from "react";
import { useState } from "react";
import './App.css';
import Editor from "@monaco-editor/react";
import Navbar from "./Components/Navbar";
import Axios from "axios";
import spinner from "./spinner.svg";

function App(){
    const [ userCode, setUserCode ] = useState(``);
    const [ userLang, setUserLang ] = useState("python");
    const [ userTheme, setUserTheme ] = useState("vs-dark");
    const [ fontSize, setFontSize ] = useState(20);
    
}
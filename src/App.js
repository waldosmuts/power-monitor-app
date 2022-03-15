import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(window.localStorage.getItem("darkMode")) === true ? true : false)

  function changeTheme() {
    setDarkMode((prevState) => (!prevState))
  }

  useEffect(() => {
    const topLevelElement = document.querySelector("html")
    darkMode === true ? topLevelElement.classList.add("dark") : topLevelElement.classList.remove("dark")
    window.localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  return (
    <div className="bg-zinc-300 dark:bg-zinc-800 h-screen font-josefin">
      <Navbar changeTheme={changeTheme} darkMode={darkMode} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
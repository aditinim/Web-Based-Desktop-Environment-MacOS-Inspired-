import { useState } from 'react'
import "./app.scss";
import Dock from './components/Dock';
import Navbar from './components/Navbar';
import MacWindow from './components/Windows/macWindow';
import Github from './components/Windows/Github';
import Note from './components/Windows/Note';
import Resume from './components/Windows/Resume';
import Spotify from './components/Windows/Spotify';
import Cli from './components/Windows/Cli';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';





function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,

  })


  return (
    <main>
      <Navbar/>
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && <Github windowName="github"   windowsState={windowsState} setWindowsState={setWindowsState}/>}
      {windowsState.note && <Note windowName="note"   windowsState={windowsState} setWindowsState={setWindowsState}/>}
      {windowsState.resume && <Resume windowName="resume"  windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify"   windowsState={windowsState} setWindowsState={setWindowsState}/>}
      {windowsState.cli && <Cli windowName="cli"  windowsState={windowsState} setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App

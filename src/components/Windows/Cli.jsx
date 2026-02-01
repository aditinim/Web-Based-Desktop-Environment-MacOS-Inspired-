import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, windowsState, setWindowsState }) => {
  const portfolioCommands = {
    about: {
      description: 'Learn about me.',
      usage: 'about',
      fn: () => 'Hi! I\'m Aditi Nim, a full-stack developer passionate about building beautiful and functional applications.'
    },
    skills: {
      description: 'Display my technical skills.',
      usage: 'skills',
      fn: () => 'Languages: JavaScript, Python, C#, Java\nFrameworks: React, Node.js, ASP.NET Core\nTools: Git, Docker, Figma, VS Code'
    },
    projects: {
      description: 'View my latest projects.',
      usage: 'projects',
      fn: () => 'Scheds - Course Schedule Generator\nFinTrack - Personal Finance Dashboard\nSecureAuth - Backend Identity Service\nChatStream - Real-time Messaging App\nTerminalX - CLI Productivity Tool'
    },
    experience: {
      description: 'Display my work experience.',
      usage: 'experience',
      fn: () => 'Full-Stack Developer at Tech Company (2022-Present)\nFrontend Developer Intern (2021-2022)\nSee portfolio for more details.'
    },
    contact: {
      description: 'Get contact information.',
      usage: 'contact',
      fn: () => 'Email: nimaditi7@gmail.com\nGitHub: github.com/aditinim\nLinkedIn: inkedin.com/in/aditinim7/'
    },
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    }
  }

  const welcomeMsg = `
╔════════════════════════════════════════════════════════════════╗
║          Welcome to Aditi's Portfolio Terminal! 👋             ║
║════════════════════════════════════════════════════════════════║
║                                                                ║
║  Type 'help' to see all available commands                     ║
║  Type 'about' to learn more about me                           ║
║  Type 'projects' to see my latest work                         ║
║                                                                ║
║  Let's explore my portfolio together!                          ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
`

  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
        <div className='cli-window'>
            <Terminal
                commands={portfolioCommands}
                welcomeMessage={welcomeMsg}
                promptLabel={'@Aditinim:~$'}
            />
        </div>
    </MacWindow>
  )
}

export default Cli

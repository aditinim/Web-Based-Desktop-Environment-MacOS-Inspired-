import React from 'react'
import MacWindow from './macWindow'
import githubData from "../../assets/github.json"
import './github.scss'


const GitCard= ({data={id:1, image:"", title:"", description:"", tags:[], repoLink:"", demoLink:""}})=>{
    return(
        <div className='card'>
            <img src={data.image} alt=""/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <div className='tags'>
                {
                    data.tags.map((tag, idx)=><p key={idx} className='tag'>{tag}</p>)
                }
            </div>

            <div className="urls">
                <a href={data.repoLink}>Repository</a>
                {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
            </div>
        </div>
    )
}

const Github = ({ windowName, windowsState, setWindowsState }) => {

        console.log(githubData);
    return (
        <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
                <div className='cards'>
                        {githubData.map((project)=>{
                                return <GitCard key={project.id} data={project}/>
                        })}
                        </div>
        </MacWindow>
    )
}

export default Github

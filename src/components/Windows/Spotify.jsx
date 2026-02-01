import React from 'react'
import MacWindow from './macWindow'
import "./spotify.scss"

const Spotify = ({ windowName, windowsState, setWindowsState }) => {
  return (
    <MacWindow width='max(20rem, 20vw)' windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
        <div className='spotify-window'>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify

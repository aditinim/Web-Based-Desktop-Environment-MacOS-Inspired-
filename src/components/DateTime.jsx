import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      const dayName = days[now.getDay()]
      const date = now.getDate()
      const monthName = months[now.getMonth()]
      
      let hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const period = hours >= 12 ? 'PM' : 'AM'
      
      hours = hours % 12 || 12
      
      const formattedDateTime = `${dayName} ${date} ${monthName}   ${hours}:${minutes}${period}`
      setDateTime(formattedDateTime)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui' }}>
      {dateTime}
    </div>
  )
}

export default DateTime

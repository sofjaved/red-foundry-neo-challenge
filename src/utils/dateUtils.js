// This file contains utility functions for formatting dates and numbers

export const formatDisplayDate = (date) => { 
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
  }

  export const formatVelocity = (velocity) => {
    return Number(parseFloat(velocity).toFixed(2)).toLocaleString()
  }
  
  export const formatDistance = (distance) => {
    return Number(parseFloat(distance).toFixed(2)).toLocaleString()
  }
  
  export const formatDiameter = (diameterMin, diameterMax) => {
    const average = (diameterMin + diameterMax) / 2
    return Number(average.toFixed(2)).toLocaleString()
  }
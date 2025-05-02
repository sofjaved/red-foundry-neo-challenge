import React, { useState } from 'react'
import WelcomeScreen from './src/screens/WelcomeScreen'
import MainScreen from './src/screens/MainScreen'

export default function App() {
  const [showMainScreen, setShowMainScreen] = useState(false)

  if (!showMainScreen) {
    return <WelcomeScreen onGetStarted={() => setShowMainScreen(true)} />
  }
  
  return <MainScreen onBack={() => setShowMainScreen(false)}/>
}
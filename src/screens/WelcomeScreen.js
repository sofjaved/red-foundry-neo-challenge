import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  StatusBar 
} from 'react-native'

const WelcomeScreen = ({ onGetStarted }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ImageBackground 
        source={{ uri: 'https://images.moneycontrol.com/static-mcnews/2025/01/20250108100138_Sheetal-Kumari-fi.png?impolicy=website&width=770&height=431'}} 
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>ASTEROID WATCH</Text>
            <Text style={styles.subtitle}>Track Near-Earth Objects</Text>
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Discover which space rocks are zooming past Earth today!
            </Text>
          </View>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={onGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
          
          <Text style={styles.poweredBy}>
            Powered by NASA NEO API
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E5A823',
    marginTop: 10,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'rgba(0, 26, 60, 0.39)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginBottom: 40,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#E5A823',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 40,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  poweredBy: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
})

export default WelcomeScreen
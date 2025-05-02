import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import DatePicker from '../components/DatePicker'
import NeoList from '../components/NeoList'
import { fetchNeosByDate } from '../api/nasaApi'
import { formatDisplayDate } from '../utils/dateUtils'

const MainScreen = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [neos, setNeos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadNeos(selectedDate)
  }, [selectedDate])

  const loadNeos = async (date) => {
    try {
      setLoading(true)
      setError(null)
      const neosData = await fetchNeosByDate(date)
      setNeos(neosData)
    } catch (err) {
      setError(err.message || 'Failed to load asteroid data')
    } finally {
      setLoading(false)
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
      
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        {onBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>&larr; Back</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>Near-Earth Objects</Text>
        <Text style={styles.subtitle}>Tracking asteroids passing by Earth</Text>
      </View>
      
      <DatePicker 
        onDateChange={handleDateChange} 
        currentDate={selectedDate} 
      />
      
      <View style={styles.dateDisplay}>
        <Text style={styles.dateText}>
          {formatDisplayDate(selectedDate)}
        </Text>
      </View>
      
      <View style={styles.listContainer}>
        <NeoList neos={neos} loading={loading} error={error} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1a237e',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 4,
  },
  dateDisplay: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 8,
    zIndex: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default MainScreen
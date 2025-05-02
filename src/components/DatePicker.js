import React, { useState } from 'react'
import { View, Button, Platform, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const DatePicker = ({ onDateChange, currentDate }) => {
  const [showPicker, setShowPicker] = useState(false)

  const onChange = (event, selectedDate) => {
    const date = selectedDate || currentDate

    if (Platform.OS === 'web') {
      onDateChange(new Date(event.target.value))
    } 

    if(Platform.OS === 'android') {
      setShowPicker(false)
    }

    if(selectedDate) {
      onDateChange(date)
      setShowPicker(false)
    }
  }

  return (
    <View style={styles.container}>

      {Platform.OS !== 'web' && (
      <Button 
        title={`Select Date`} 
        onPress={() => setShowPicker(true)} 
      />)}

      {Platform.OS === 'web' ? (
        <div style={styles.webDatePicker} >
          <label for="date">Select date:</label>
          <input
            id="date"
            type="date"
            value={currentDate.toISOString().substring(0, 10)}
            onChange={onChange}
            style={styles.webInput}
          />
        </div>
      ) : showPicker && (
        <DateTimePicker
          value={currentDate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
  },
  webDatePicker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default DatePicker
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { formatVelocity, formatDistance, formatDiameter } from '../utils/dateUtils'

const NeoItem = ({ neo }) => {
  const name = neo.name
  const diameterMin = neo.estimated_diameter.feet.estimated_diameter_min
  const diameterMax = neo.estimated_diameter.feet.estimated_diameter_max
  const velocity = neo.close_approach_data[0].relative_velocity.miles_per_hour
  const missDistance = neo.close_approach_data[0].miss_distance.miles
  const isHazardous = neo.is_potentially_hazardous_asteroid

  return (
    <View style={[styles.container, isHazardous && styles.hazardousContainer]}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Diameter:</Text>
          <Text style={styles.value}>{formatDiameter(diameterMin, diameterMax)} ft</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Velocity:</Text>
          <Text style={styles.value}>{formatVelocity(velocity)} mph</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Miss distance:</Text>
          <Text style={styles.value}>{formatDistance(missDistance)} miles</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Potentially hazardous:</Text>
          <Text style={[styles.value, isHazardous ? styles.hazardText : styles.safeText]}>
            {isHazardous ? 'YES' : 'No'}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  hazardousContainer: {
    backgroundColor: '#fff8e1',
    borderLeftWidth: 4,
    borderLeftColor: '#ff9800',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    marginTop: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  value: {
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },
  hazardText: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  safeText: {
    color: '#388e3c',
  },
})

export default NeoItem
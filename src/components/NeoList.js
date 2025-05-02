import React from 'react'
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import NeoItem from './NeoItem'

const NeoList = ({ neos, loading, error }) => {
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Loading asteroids data...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    )
  }

  if (neos.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.noDataText}>No asteroids found for this date.</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={neos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <NeoItem neo={item} />}
      style={styles.list}
      contentContainerStyle={styles.listContent}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  errorText: {
    color: '#d32f2f',
    textAlign: 'center',
  },
  noDataText: {
    color: '#666',
    textAlign: 'center',
  },
})

export default NeoList
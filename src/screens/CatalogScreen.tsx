import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';
import { vehiclesDatabase } from '../data/mockData';

export const CatalogScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Catálogo de Veículos</Text>
        <Text style={styles.subtitle}>Modelos cadastrados no sistema de inteligência</Text>

        {vehiclesDatabase.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.cardBody}>
              <Text style={styles.category}>{item.category.toUpperCase()}</Text>
              <Text style={styles.name}>{item.brand} {item.model} {item.version}</Text>
              {item.priceEstimate && <Text style={styles.price}>{item.priceEstimate}</Text>}
              <View style={styles.tagContainer}>
                {Object.keys(item.specs).slice(0, 3).map((key, i) => (
                  <Text key={i} style={styles.tag}>{key}: {item.specs[key]}</Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f4f5f7' },
  container: { padding: 16, paddingTop: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#002C6C' },
  subtitle: { fontSize: 13, color: '#4b5563', marginBottom: 16 },
  card: { backgroundColor: '#ffffff', borderRadius: 10, overflow: 'hidden', marginBottom: 16, elevation: 2 },
  image: { width: '100%', height: 150 },
  cardBody: { padding: 14 },
  category: { fontSize: 10, fontWeight: 'bold', color: '#002C6C' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginVertical: 2 },
  price: { fontSize: 14, fontWeight: 'bold', color: '#059669', marginBottom: 6 },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  tag: { backgroundColor: '#f3f4f6', fontSize: 11, color: '#4b5563', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
});
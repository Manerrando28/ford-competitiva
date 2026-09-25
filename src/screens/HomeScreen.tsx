import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { vehiclesDatabase } from '../data/mockData';

export const HomeScreen = ({ navigation }: any) => {
  const raptor = vehiclesDatabase[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Corporativo Ford */}
        <View style={styles.brandHeader}>
          <View>
            <Text style={styles.fordTitle}>FORD CONNECT</Text>
            <Text style={styles.subtitle}>Intelligence & Performance Hub</Text>
          </View>
          <View style={styles.statusBadge}>
            <View style={styles.greenDot} />
            <Text style={styles.statusText}>SYNC® 4 Connected</Text>
          </View>
        </View>

        {/* Hero Card - Ford Ranger Raptor */}
        <View style={styles.heroCard}>
          <Image source={{ uri: raptor.imageUrl }} style={styles.heroImage} />
          <View style={styles.heroContent}>
            <Text style={styles.raptorBadge}>PERFORMANCE RALLY</Text>
            <Text style={styles.heroTitle}>
              {raptor.brand} {raptor.model} {raptor.version}
            </Text>
            <Text style={styles.heroPrice}>{raptor.priceEstimate}</Text>

            {/* Telemetria no Estilo FordPass */}
            {raptor.telemetry && (
              <View style={styles.telemetryGrid}>
                <View style={styles.telemetryItem}>
                  <Text style={styles.telemetryLabel}>Autonomia</Text>
                  <Text style={styles.telemetryValue}>{raptor.telemetry.range}</Text>
                </View>
                <View style={styles.telemetryItem}>
                  <Text style={styles.telemetryLabel}>Combustível</Text>
                  <Text style={styles.telemetryValue}>{raptor.telemetry.fuelLevel}</Text>
                </View>
                <View style={styles.telemetryItem}>
                  <Text style={styles.telemetryLabel}>Pressão Pneus</Text>
                  <Text style={styles.telemetryValue}>{raptor.telemetry.tirePressure}</Text>
                </View>
              </View>
            )}

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Comparador')}
            >
              <Text style={styles.primaryButtonText}>Iniciar Inteligência Competitiva</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modos G.O.A.T. (Ícones Vetoriais) */}
        <Text style={styles.sectionHeader}>Modos de Terreno G.O.A.T. (Raptor)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.goatScroll}>
          {[
            { name: 'Normal', icon: 'car-outline' },
            { name: 'Sport', icon: 'flash-outline' },
            { name: 'Escorregadio', icon: 'water-outline' },
            { name: 'Lama/Trilhos', icon: 'leaf-outline' },
            { name: 'Areia', icon: 'sunny-outline' },
            { name: 'Baja', icon: 'trophy-outline' },
            { name: 'Rochas', icon: 'compass-outline' },
          ].map((mode, index) => (
            <View key={index} style={styles.goatCardModern}>
              <Ionicons name={mode.icon as any} size={22} color="#FFFFFF" />
              <Text style={styles.goatNameModern}>{mode.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Atalhos Rápidos */}
        <Text style={styles.sectionHeader}>Ações Rápidas</Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Comparador')}
          >
            <Ionicons name="search-outline" size={24} color="#002C6C" />
            <Text style={styles.actionTitle}>Comparar Ficha</Text>
            <Text style={styles.actionDesc}>Busca rápida por atributos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Catálogo')}
          >
            <Ionicons name="car-sport-outline" size={24} color="#002C6C" />
            <Text style={styles.actionTitle}>Ver Modelos</Text>
            <Text style={styles.actionDesc}>Base de concorrentes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0B1A30' },
  container: { padding: 16, paddingTop: 20 },
  brandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  fordTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', letterSpacing: 1.5 },
  subtitle: { fontSize: 12, color: '#9CA3AF' },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  greenDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981', marginRight: 6 },
  statusText: { color: '#E2E8F0', fontSize: 11, fontWeight: '600' },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    marginBottom: 20,
  },
  heroImage: { width: '100%', height: 210 },
  heroContent: { padding: 16 },
  raptorBadge: {
    backgroundColor: '#002C6C',
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  heroTitle: { fontSize: 22, fontWeight: 'bold', color: '#002C6C' },
  heroPrice: { fontSize: 16, fontWeight: 'bold', color: '#059669', marginBottom: 12 },
  telemetryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  telemetryItem: { alignItems: 'center' },
  telemetryLabel: { fontSize: 10, color: '#64748B', fontWeight: 'bold' },
  telemetryValue: { fontSize: 13, fontWeight: 'bold', color: '#0F172A', marginTop: 2 },
  primaryButton: {
    backgroundColor: '#002C6C',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  primaryButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
  sectionHeader: { fontSize: 15, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 12 },
  goatScroll: { marginBottom: 20 },
  goatCardModern: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 95,
    borderWidth: 1,
    borderColor: '#334155',
  },
  goatNameModern: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
  },
  actionGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  actionTitle: { fontWeight: 'bold', fontSize: 14, color: '#002C6C', marginTop: 8 },
  actionDesc: { fontSize: 11, color: '#6B7280', marginTop: 2 },
});
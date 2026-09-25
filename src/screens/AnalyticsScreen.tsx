import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const AnalyticsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Análise de Mercado</Text>
        <Text style={styles.subtitle}>Relatório comparativo de competitividade</Text>

        {/* Card de Posicionamento */}
        <View style={styles.metricCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="trophy-outline" size={24} color="#002C6C" />
            <Text style={styles.cardTitle}>Liderança em Performance</Text>
          </View>
          <Text style={styles.metricValue}>397 cv</Text>
          <Text style={styles.metricDesc}>
            A Ford Ranger Raptor lidera a categoria de picapes médias/esportivas com o maior motor V6 Bi-Turbo da categoria.
          </Text>
        </View>

        {/* Indicadores Competitivos */}
        <Text style={styles.sectionTitle}>Métricas de Comparação</Text>
        
        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Ionicons name="speedometer-outline" size={22} color="#002C6C" />
            <Text style={styles.smallTitle}>Potência Média</Text>
            <Text style={styles.smallValue}>+77%</Text>
            <Text style={styles.smallSub}>vs. Concorrentes</Text>
          </View>

          <View style={styles.smallCard}>
            <Ionicons name="shield-checkmark-outline" size={22} color="#059669" />
            <Text style={styles.smallTitle}>Suspensão</Text>
            <Text style={styles.smallValue}>FOX 2.5</Text>
            <Text style={styles.smallSub}>Exclusiva no segmento</Text>
          </View>
        </View>

        {/* Resumo Corporativo */}
        <View style={styles.infoBox}>
          <Ionicons name="analytics-outline" size={20} color="#002C6C" style={{ marginRight: 8 }} />
          <Text style={styles.infoText}>
            Dados sincronizados com o banco de inteligência da Ford Motor Company (Sprint 3).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F4F5F7' },
  container: { padding: 16, paddingTop: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#002C6C' },
  subtitle: { fontSize: 13, color: '#4B5563', marginBottom: 16 },
  metricCard: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 16, marginBottom: 16, elevation: 2, borderLeftWidth: 5, borderLeftColor: '#002C6C' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#002C6C', marginLeft: 8 },
  metricValue: { fontSize: 28, fontWeight: '900', color: '#002C6C', marginVertical: 4 },
  metricDesc: { fontSize: 12, color: '#4B5563', lineHeight: 18 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#1F2937', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  smallCard: { backgroundColor: '#FFFFFF', width: '48%', padding: 14, borderRadius: 10, elevation: 2 },
  smallTitle: { fontSize: 12, fontWeight: 'bold', color: '#4B5563', marginTop: 6 },
  smallValue: { fontSize: 18, fontWeight: 'bold', color: '#002C6C', marginVertical: 2 },
  smallSub: { fontSize: 10, color: '#6B7280' },
  infoBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E0E7FF', padding: 12, borderRadius: 8 },
  infoText: { fontSize: 12, color: '#002C6C', flex: 1, fontWeight: '500' },
});
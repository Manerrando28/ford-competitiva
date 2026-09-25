import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SupportScreen = () => {
  const handleCallSupport = (type: string) => {
    Alert.alert('Suporte Ford', `Iniciando atendimento para: ${type}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Suporte & Assistência</Text>
        <Text style={styles.subtitle}>Canais diretos da Ford Motor Company</Text>

        {/* Card Ford Assistance 24h */}
        <View style={styles.emergencyCard}>
          <View style={styles.emergencyHeader}>
            <Ionicons name="call" size={24} color="#FFFFFF" />
            <Text style={styles.emergencyTitle}>Ford Assistance 24h</Text>
          </View>
          <Text style={styles.emergencyDesc}>
            Atendimento emergencial para guincho, pane elétrica e suporte técnico.
          </Text>
          <TouchableOpacity
            style={styles.emergencyBtn}
            onPress={() => handleCallSupport('Ford Assistance 0800')}
          >
            <Text style={styles.emergencyBtnText}>Ligar 0800 703 3673</Text>
          </TouchableOpacity>
        </View>

        {/* Opções de Suporte */}
        <Text style={styles.sectionTitle}>Serviços Disponíveis</Text>

        <TouchableOpacity style={styles.optionCard} onPress={() => handleCallSupport('Manual do Proprietário')}>
          <View style={styles.iconCircle}>
            <Ionicons name="book-outline" size={20} color="#002C6C" />
          </View>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Manual Ranger Raptor</Text>
            <Text style={styles.optionSub}>Especificações, pressão e fluidos</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard} onPress={() => handleCallSupport('Agendamento de Revisão')}>
          <View style={styles.iconCircle}>
            <Ionicons name="build-outline" size={20} color="#002C6C" />
          </View>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Agendamento de Serviço</Text>
            <Text style={styles.optionSub}>Rede de concessionárias autorizadas</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard} onPress={() => handleCallSupport('Dúvidas do Desafio FIAP')}>
          <View style={styles.iconCircle}>
            <Ionicons name="chatbubbles-outline" size={20} color="#002C6C" />
          </View>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>FAQ de Inteligência Competitiva</Text>
            <Text style={styles.optionSub}>Guia de uso do aplicativo para a FIAP</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F4F5F7' },
  container: { padding: 16, paddingTop: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#002C6C' },
  subtitle: { fontSize: 13, color: '#4B5563', marginBottom: 16 },
  emergencyCard: { backgroundColor: '#002C6C', borderRadius: 12, padding: 16, marginBottom: 20, elevation: 3 },
  emergencyHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  emergencyTitle: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  emergencyDesc: { color: '#E2E8F0', fontSize: 12, lineHeight: 18, marginBottom: 14 },
  emergencyBtn: { backgroundColor: '#FFFFFF', paddingVertical: 10, borderRadius: 6, alignItems: 'center' },
  emergencyBtnText: { color: '#002C6C', fontWeight: 'bold', fontSize: 13 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#1F2937', marginBottom: 12 },
  optionCard: { backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 10, marginBottom: 10, elevation: 1 },
  iconCircle: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#E0E7FF', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  optionText: { flex: 1 },
  optionTitle: { fontSize: 14, fontWeight: 'bold', color: '#1E293B' },
  optionSub: { fontSize: 11, color: '#64748B', marginTop: 2 },
});
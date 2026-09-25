import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { getVehicleSpecifications, vehiclesDatabase } from '../data/mockData';

export const CompareScreen: React.FC = () => {
  const [brand, setBrand] = useState('Ford');
  const [model, setModel] = useState('Ranger');
  const [version, setVersion] = useState('Raptor');
  const [attributesText, setAttributesText] = useState(
    'Motor, Potência, Transmissão, Tração, Suspensão, Preço'
  );

  const [compareResult, setCompareResult] = useState<any>(null);

  const handleSearch = () => {
    const attributesArray = attributesText
      .split(',')
      .map((attr) => attr.trim())
      .filter((attr) => attr.length > 0);

    const target = getVehicleSpecifications(brand, model, version, attributesArray);
    const benchmarkRaptor = getVehicleSpecifications('Ford', 'Ranger', 'Raptor', attributesArray);

    setCompareResult({
      searched: { brand, model, version, ...target },
      benchmark: benchmarkRaptor,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Inteligência Competitiva</Text>
        <Text style={styles.headerSubtitle}>Desafio 01 - Matriz de Análise Automotiva</Text>

        {/* Botões de Atalhos Rápidos */}
        <View style={styles.shortcutRow}>
          {vehiclesDatabase.map((v) => (
            <TouchableOpacity
              key={v.id}
              style={[
                styles.shortcutChip,
                brand === v.brand && version === v.version && styles.shortcutChipActive,
              ]}
              onPress={() => {
                setBrand(v.brand);
                setModel(v.model);
                setVersion(v.version);
              }}
            >
              <Text style={[
                styles.shortcutText,
                brand === v.brand && version === v.version && styles.shortcutTextActive
              ]}>
                {v.brand} {v.version}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Formulário */}
        <View style={styles.formCard}>
          <View style={styles.inputRow}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={styles.label}>Marca</Text>
              <TextInput style={styles.input} value={brand} onChangeText={setBrand} />
            </View>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={styles.label}>Modelo</Text>
              <TextInput style={styles.input} value={model} onChangeText={setModel} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Versão</Text>
              <TextInput style={styles.input} value={version} onChangeText={setVersion} />
            </View>
          </View>

          <Text style={styles.label}>Atributos Mapeados</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={attributesText}
            onChangeText={setAttributesText}
            multiline
          />

          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Text style={styles.searchBtnText}>Executar Análise de Especificações</Text>
          </TouchableOpacity>
        </View>

        {/* Resultado */}
        {compareResult && (
          <View style={styles.resultContainer}>
            {compareResult.searched.vehicle && (
              <Image
                source={{ uri: compareResult.searched.vehicle.imageUrl }}
                style={styles.vehicleImg}
              />
            )}

            <Text style={styles.resultHeader}>
              {compareResult.searched.brand} {compareResult.searched.model} - {compareResult.searched.version}
            </Text>

            {compareResult.searched.specs.map((item: any, index: number) => (
              <View key={index} style={styles.specRow}>
                <Text style={styles.specLabel}>{item.attribute}</Text>
                <Text style={[styles.specValue, !item.value && styles.unavailable]}>
                  {item.value !== null ? item.value : 'Não disponível'}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F4F5F7' },
  container: { padding: 16, paddingTop: 20 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#002C6C' },
  headerSubtitle: { fontSize: 13, color: '#4B5563', marginBottom: 16 },
  shortcutRow: { flexDirection: 'row', marginBottom: 14 },
  shortcutChip: { backgroundColor: '#E2E8F0', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, marginRight: 8 },
  shortcutChipActive: { backgroundColor: '#002C6C' },
  shortcutText: { color: '#334155', fontWeight: 'bold', fontSize: 12 },
  shortcutTextActive: { color: '#FFFFFF' },
  formCard: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 10, elevation: 2 },
  inputRow: { flexDirection: 'row', marginBottom: 10 },
  label: { fontSize: 11, fontWeight: 'bold', color: '#475569', marginBottom: 4 },
  input: { borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 6, padding: 8, fontSize: 13, backgroundColor: '#F8FAFC' },
  textArea: { height: 50, marginBottom: 12 },
  searchBtn: { backgroundColor: '#002C6C', padding: 12, borderRadius: 6, alignItems: 'center' },
  searchBtnText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 13 },
  resultContainer: { marginTop: 16, backgroundColor: '#FFFFFF', borderRadius: 10, padding: 16, borderLeftWidth: 5, borderLeftColor: '#002C6C', elevation: 2 },
  vehicleImg: { width: '100%', height: 170, borderRadius: 8, marginBottom: 12 },
  resultHeader: { fontSize: 18, fontWeight: 'bold', color: '#002C6C', marginBottom: 12 },
  specRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  specLabel: { fontWeight: '600', color: '#334155', fontSize: 13 },
  specValue: { fontWeight: 'bold', color: '#002C6C', fontSize: 13 },
  unavailable: { color: '#94A3B8', fontStyle: 'italic', fontWeight: 'normal' },
});
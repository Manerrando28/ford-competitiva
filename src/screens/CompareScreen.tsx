import React, { useMemo, useState } from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import {
  getVehicleSpecifications,
  normalizeAttribute,
  vehiclesDatabase,
} from '../data/mockData';
import { SearchResult } from '../types/vehicle';

const ATTRIBUTE_GROUPS = [
  {
    title: 'Desempenho',
    items: [
      'Motor',
      'Potência',
      'Torque',
      'Transmissão',
      'Tração',
      '0–100 km/h',
    ],
  },
  {
    title: 'Técnico',
    items: ['Suspensão', 'Combustível'],
  },
  {
    title: 'Mercado',
    items: ['Preço'],
  },
];

const DEFAULT_ATTRIBUTES = [
  'Motor',
  'Potência',
  'Torque',
  'Transmissão',
  'Tração',
  'Suspensão',
  'Preço',
];

export const CompareScreen: React.FC = () => {
  const [brand, setBrand] = useState('Ford');
  const [model, setModel] = useState('Ranger');
  const [version, setVersion] = useState('Raptor');

  const [selectedAttributes, setSelectedAttributes] =
    useState<string[]>(DEFAULT_ATTRIBUTES);

  const [customAttribute, setCustomAttribute] = useState('');
  const [compareResult, setCompareResult] =
    useState<SearchResult | null>(null);

  const [showValidation, setShowValidation] = useState(false);

  const isSelected = (attribute: string) =>
    selectedAttributes.some(
      (item) =>
        normalizeAttribute(item) === normalizeAttribute(attribute)
    );

  const toggleAttribute = (attribute: string) => {
    setSelectedAttributes((current) =>
      isSelected(attribute)
        ? current.filter(
            (item) =>
              normalizeAttribute(item) !==
              normalizeAttribute(attribute)
          )
        : [...current, attribute]
    );
  };

  const addCustomAttribute = () => {
    const value = customAttribute.trim();

    if (!value || isSelected(value)) return;

    setSelectedAttributes((current) => [...current, value]);
    setCustomAttribute('');
  };

  const handleSearch = () => {
    if (
      !brand.trim() ||
      !model.trim() ||
      !version.trim() ||
      selectedAttributes.length === 0
    ) {
      return;
    }

    setCompareResult(
      getVehicleSpecifications(
        brand,
        model,
        version,
        selectedAttributes
      )
    );

    setShowValidation(false);
  };

  const validationResult = useMemo(
    () =>
      getVehicleSpecifications(
        'Ford',
        'Ranger',
        'Raptor',
        selectedAttributes
      ),
    [selectedAttributes]
  );

  const runRaptorValidation = () => {
    setBrand('Ford');
    setModel('Ranger');
    setVersion('Raptor');
    setCompareResult(validationResult);
    setShowValidation(true);
  };

  const selectVehicle = (
    vehicle: (typeof vehiclesDatabase)[number]
  ) => {
    setBrand(vehicle.brand);
    setModel(vehicle.model);
    setVersion(vehicle.version);
    setShowValidation(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <View style={styles.headerRow}>

          <View style={styles.headerTextContainer}>

            <View style={styles.titleRow}>
              <Ionicons
                name="analytics-outline"
                size={23}
                color="#E0E1DD"
              />

              <Text style={styles.headerTitle}>
                Inteligência Competitiva
              </Text>
            </View>

            <Text style={styles.headerSubtitle}>
              Pesquisa padronizada de especificações automotivas
            </Text>

          </View>

          <View style={styles.challengeBadge}>
            <Text style={styles.challengeBadgeText}>
              DESAFIO 01
            </Text>
          </View>

        </View>


        {/* ================================================= */}
        {/* BANNER */}
        {/* ================================================= */}

        <View style={styles.infoBanner}>

          <View style={styles.infoIcon}>
            <Ionicons
              name="sparkles-outline"
              size={19}
              color="#E0E1DD"
            />
          </View>

          <Text style={styles.infoText}>
            Informe um veículo e selecione os atributos que deseja
            pesquisar. A saída mantém sempre o mesmo formato.
          </Text>

        </View>


        {/* ================================================= */}
        {/* VEÍCULOS DE TESTE */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          Veículos de teste
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.shortcutRow}
        >

          {vehiclesDatabase.map((vehicle) => {

            const active =
              normalizeAttribute(brand) ===
                normalizeAttribute(vehicle.brand) &&
              normalizeAttribute(model) ===
                normalizeAttribute(vehicle.model) &&
              normalizeAttribute(version) ===
                normalizeAttribute(vehicle.version);

            return (
              <TouchableOpacity
                key={vehicle.id}
                style={[
                  styles.shortcutChip,
                  active && styles.shortcutChipActive,
                ]}
                onPress={() => selectVehicle(vehicle)}
                activeOpacity={0.8}
              >

                <Ionicons
                  name="car-outline"
                  size={14}
                  color={
                    active
                      ? '#0D1B2A'
                      : '#C7BEB6'
                  }
                />

                <Text
                  style={[
                    styles.shortcutText,
                    active && styles.shortcutTextActive,
                  ]}
                >
                  {vehicle.brand} {vehicle.model} {vehicle.version}
                </Text>

              </TouchableOpacity>
            );
          })}

        </ScrollView>


        {/* ================================================= */}
        {/* FORMULÁRIO */}
        {/* ================================================= */}

        <View style={styles.formCard}>

          <View style={styles.cardHeader}>

            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>
                1
              </Text>
            </View>

            <View>
              <Text style={styles.cardTitle}>
                Identificação do veículo
              </Text>

              <Text style={styles.cardSubtitle}>
                Informe marca, modelo e versão
              </Text>
            </View>

          </View>


          {/* INPUTS */}

          <View style={styles.inputRow}>

            <View style={styles.inputColumn}>

              <Text style={styles.label}>
                Marca
              </Text>

              <TextInput
                style={styles.input}
                value={brand}
                onChangeText={setBrand}
                placeholder="Ex.: Ford"
                placeholderTextColor="#687587"
              />

            </View>


            <View style={styles.inputColumn}>

              <Text style={styles.label}>
                Modelo
              </Text>

              <TextInput
                style={styles.input}
                value={model}
                onChangeText={setModel}
                placeholder="Ex.: Ranger"
                placeholderTextColor="#687587"
              />

            </View>


            <View style={styles.inputColumnLast}>

              <Text style={styles.label}>
                Versão
              </Text>

              <TextInput
                style={styles.input}
                value={version}
                onChangeText={setVersion}
                placeholder="Ex.: Raptor"
                placeholderTextColor="#687587"
              />

            </View>

          </View>


          {/* ================================================= */}
          {/* ATRIBUTOS */}
          {/* ================================================= */}

          <View style={styles.cardHeader}>

            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>
                2
              </Text>
            </View>

            <View>
              <Text style={styles.cardTitle}>
                Atributos da pesquisa
              </Text>

              <Text style={styles.cardSubtitle}>
                Selecione as informações que deseja consultar
              </Text>
            </View>

          </View>


          {ATTRIBUTE_GROUPS.map((group) => (

            <View
              key={group.title}
              style={styles.attributeGroup}
            >

              <View style={styles.groupHeader}>

                <Ionicons
                  name={
                    group.title === 'Desempenho'
                      ? 'speedometer-outline'
                      : group.title === 'Técnico'
                      ? 'construct-outline'
                      : 'pricetag-outline'
                  }
                  size={16}
                  color="#415A77"
                />

                <Text style={styles.groupTitle}>
                  {group.title}
                </Text>

              </View>


              <View style={styles.chipContainer}>

                {group.items.map((attribute) => {

                  const active = isSelected(attribute);

                  return (
                    <TouchableOpacity
                      key={attribute}
                      style={[
                        styles.attributeChip,
                        active &&
                          styles.attributeChipActive,
                      ]}
                      onPress={() =>
                        toggleAttribute(attribute)
                      }
                      activeOpacity={0.8}
                    >

                      <Ionicons
                        name={
                          active
                            ? 'checkmark-circle'
                            : 'add-circle-outline'
                        }
                        size={15}
                        color={
                          active
                            ? '#0D1B2A'
                            : '#C7BEB6'
                        }
                      />

                      <Text
                        style={[
                          styles.attributeChipText,
                          active &&
                            styles.attributeChipTextActive,
                        ]}
                      >
                        {attribute}
                      </Text>

                    </TouchableOpacity>
                  );
                })}

              </View>

            </View>
          ))}


          {/* ================================================= */}
          {/* ATRIBUTO PERSONALIZADO */}
          {/* ================================================= */}

          <View style={styles.customRow}>

            <TextInput
              style={[
                styles.input,
                styles.customInput,
              ]}
              value={customAttribute}
              onChangeText={setCustomAttribute}
              placeholder="Adicionar atributo personalizado..."
              placeholderTextColor="#687587"
              onSubmitEditing={addCustomAttribute}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={addCustomAttribute}
              activeOpacity={0.8}
            >

              <Ionicons
                name="add"
                size={22}
                color="#E0E1DD"
              />

            </TouchableOpacity>

          </View>


          {/* ================================================= */}
          {/* SELECIONADOS */}
          {/* ================================================= */}

          <View style={styles.selectedBox}>

            <View style={styles.selectedHeader}>

              <View style={styles.selectedTitleRow}>

                <Ionicons
                  name="checkmark-done-outline"
                  size={15}
                  color="#415A77"
                />

                <Text style={styles.selectedTitle}>
                  Selecionados
                </Text>

              </View>

              <View style={styles.selectedCountBox}>
                <Text style={styles.selectedCount}>
                  {selectedAttributes.length}
                </Text>
              </View>

            </View>


            <View style={styles.selectedList}>

              {selectedAttributes.map((attribute) => (

                <TouchableOpacity
                  key={attribute}
                  style={styles.selectedChip}
                  onPress={() =>
                    toggleAttribute(attribute)
                  }
                >

                  <Text style={styles.selectedChipText}>
                    {attribute}
                  </Text>

                  <Ionicons
                    name="close-circle"
                    size={15}
                    color="#687587"
                  />

                </TouchableOpacity>

              ))}

            </View>

          </View>


          {/* ================================================= */}
          {/* PESQUISAR */}
          {/* ================================================= */}

          <TouchableOpacity
            style={[
              styles.searchBtn,
              selectedAttributes.length === 0 &&
                styles.searchBtnDisabled,
            ]}
            onPress={handleSearch}
            disabled={selectedAttributes.length === 0}
            activeOpacity={0.8}
          >

            <Ionicons
              name="search"
              size={19}
              color="#0D1B2A"
            />

            <Text style={styles.searchBtnText}>
              Pesquisar especificações
            </Text>

            <Ionicons
              name="arrow-forward"
              size={17}
              color="#0D1B2A"
            />

          </TouchableOpacity>

        </View>





        {/* ================================================= */}
        {/* RESULTADO */}
        {/* ================================================= */}

        {compareResult && (

          <View style={styles.resultContainer}>

            {/* RESULTADO HEADER */}

            <View style={styles.resultHeaderRow}>

              <View style={styles.resultHeaderContent}>

                <Text style={styles.resultEyebrow}>
                  {showValidation
                    ? 'VALIDAÇÃO DO DESAFIO'
                    : 'RESULTADO DA PESQUISA'}
                </Text>

                <Text style={styles.resultHeader}>
                  {compareResult.brand}{' '}
                  {compareResult.model}{' '}
                  {compareResult.version}
                </Text>

              </View>

              <View style={styles.statusPill}>

                <View style={styles.statusDot} />

                <Text style={styles.statusPillText}>
                  Padronizado
                </Text>

              </View>

            </View>


            {/* IMAGEM */}

            {compareResult.vehicle?.imageUrl && (

              <Image
                source={{
                  uri: compareResult.vehicle.imageUrl,
                }}
                style={styles.vehicleImg}
              />

            )}


            {/* RESUMO */}

            <View style={styles.summaryRow}>

              <View style={styles.summaryItem}>

                <Ionicons
                  name="checkmark-circle-outline"
                  size={18}
                  color="#415A77"
                />

                <Text style={styles.summaryValue}>
                  {compareResult.foundCount}
                </Text>

                <Text style={styles.summaryLabel}>
                  Encontrados
                </Text>

              </View>


              <View style={styles.summaryDivider} />


              <View style={styles.summaryItem}>

                <Ionicons
                  name="remove-circle-outline"
                  size={18}
                  color="#C7BEB6"
                />

                <Text style={styles.summaryValue}>
                  {compareResult.unavailableCount}
                </Text>

                <Text style={styles.summaryLabel}>
                  Não disponíveis
                </Text>

              </View>


              <View style={styles.summaryDivider} />


              <View style={styles.summaryItem}>

                <Ionicons
                  name="list-outline"
                  size={18}
                  color="#415A77"
                />

                <Text style={styles.summaryValue}>
                  {compareResult.specifications.length}
                </Text>

                <Text style={styles.summaryLabel}>
                  Atributos
                </Text>

              </View>

            </View>


            {/* TABELA */}

            <View style={styles.tableHeader}>

              <Ionicons
                name="document-text-outline"
                size={17}
                color="#415A77"
              />

              <Text style={styles.tableTitle}>
                Lista padronizada de especificações
              </Text>

            </View>


            {compareResult.specifications.map(
              (item, index) => (

                <View
                  key={`${item.attribute}-${index}`}
                  style={styles.specRow}
                >

                  <View
                    style={styles.specLabelContainer}
                  >

                    <Text style={styles.specLabel}>
                      {item.attribute}
                    </Text>

                    <Text style={styles.sourceText}>
                      {item.source}
                    </Text>

                  </View>


                  <View
                    style={styles.specValueContainer}
                  >

                    <Text
                      style={[
                        styles.specValue,
                        !item.value &&
                          styles.unavailable,
                      ]}
                    >
                      {item.value ??
                        'Não disponível'}
                    </Text>

                    <Ionicons
                      name={
                        item.value
                          ? 'checkmark-circle'
                          : 'remove-circle-outline'
                      }
                      size={17}
                      color={
                        item.value
                          ? '#415A77'
                          : '#687587'
                      }
                    />

                  </View>

                </View>

              )
            )}


          


        

          </View>

        )}


        {/* FOOTER */}

        <Text style={styles.footer}>
          FORD CONNECT+ • INTELIGÊNCIA COMPETITIVA
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  // ==================================================
  // BASE
  // ==================================================

  safeArea: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },

  container: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 35,
  },


  // ==================================================
  // HEADER
  // ==================================================

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  headerTextContainer: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#E0E1DD',
    marginLeft: 8,
  },

  headerSubtitle: {
    fontSize: 11,
    color: '#C7BEB6',
    marginTop: 5,
    paddingRight: 8,
    lineHeight: 16,
  },

  challengeBadge: {
    backgroundColor: '#1B263B',
    borderWidth: 1,
    borderColor: '#415A77',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
  },

  challengeBadgeText: {
    color: '#C7BEB6',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.6,
  },


  // ==================================================
  // INFO BANNER
  // ==================================================

  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B263B',
    borderWidth: 1,
    borderColor: '#415A77',
    padding: 13,
    borderRadius: 13,
    marginBottom: 22,
  },

  infoIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: '#415A77',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoText: {
    flex: 1,
    marginLeft: 10,
    color: '#C7BEB6',
    fontSize: 11,
    lineHeight: 16,
  },


  // ==================================================
  // SEÇÕES
  // ==================================================

  sectionTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#E0E1DD',
    marginBottom: 10,
  },


  // ==================================================
  // VEÍCULOS
  // ==================================================

  shortcutRow: {
    paddingBottom: 20,
  },

  shortcutChip: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1B263B',

    borderWidth: 1,
    borderColor: '#415A77',

    paddingHorizontal: 12,
    paddingVertical: 9,

    borderRadius: 20,

    marginRight: 8,
  },

  shortcutChipActive: {
    backgroundColor: '#E0E1DD',
    borderColor: '#E0E1DD',
  },

  shortcutText: {
    color: '#C7BEB6',
    fontWeight: '700',
    fontSize: 10,
    marginLeft: 5,
  },

  shortcutTextActive: {
    color: '#0D1B2A',
  },


  // ==================================================
  // FORM CARD
  // ==================================================

  formCard: {
    backgroundColor: '#1B263B',

    padding: 16,

    borderRadius: 16,

    borderWidth: 1,
    borderColor: '#415A77',

    marginBottom: 16,

    elevation: 5,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  stepBadge: {
    width: 31,
    height: 31,
    borderRadius: 10,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  stepBadgeText: {
    color: '#E0E1DD',
    fontSize: 12,
    fontWeight: '900',
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#E0E1DD',
  },

  cardSubtitle: {
    fontSize: 9,
    color: '#C7BEB6',
    marginTop: 2,
  },


  // ==================================================
  // INPUTS
  // ==================================================

  inputRow: {
    flexDirection: 'row',
    marginBottom: 22,
  },

  inputColumn: {
    flex: 1,
    marginRight: 8,
  },

  inputColumnLast: {
    flex: 1,
  },

  label: {
    fontSize: 10,
    fontWeight: '800',
    color: '#C7BEB6',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#415A77',

    borderRadius: 9,

    paddingHorizontal: 10,
    paddingVertical: 10,

    fontSize: 12,

    backgroundColor: '#0D1B2A',

    color: '#E0E1DD',
  },


  // ==================================================
  // ATRIBUTOS
  // ==================================================

  attributeGroup: {
    marginBottom: 14,
  },

  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  groupTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#C7BEB6',
    textTransform: 'uppercase',
    marginLeft: 6,
    letterSpacing: 0.5,
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },

  attributeChip: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#0D1B2A',

    borderWidth: 1,
    borderColor: '#415A77',

    paddingHorizontal: 9,
    paddingVertical: 7,

    borderRadius: 18,
  },

  attributeChipActive: {
    backgroundColor: '#E0E1DD',
    borderColor: '#E0E1DD',
  },

  attributeChipText: {
    marginLeft: 5,
    color: '#C7BEB6',
    fontSize: 10,
    fontWeight: '700',
  },

  attributeChipTextActive: {
    color: '#0D1B2A',
  },


  // ==================================================
  // CUSTOM ATTRIBUTE
  // ==================================================

  customRow: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 13,
  },

  customInput: {
    flex: 1,
    marginRight: 8,
  },

  addButton: {
    width: 44,
    borderRadius: 9,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',
  },


  // ==================================================
  // SELECIONADOS
  // ==================================================

  selectedBox: {
    backgroundColor: '#0D1B2A',

    borderRadius: 11,

    borderWidth: 1,
    borderColor: '#415A77',

    padding: 11,

    marginBottom: 15,
  },

  selectedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 9,
  },

  selectedTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectedTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#C7BEB6',
    textTransform: 'uppercase',
    marginLeft: 5,
  },

  selectedCountBox: {
    minWidth: 25,
    height: 22,

    borderRadius: 11,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedCount: {
    color: '#E0E1DD',
    fontSize: 10,
    fontWeight: '900',
  },

  selectedList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },

  selectedChip: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1B263B',

    borderWidth: 1,
    borderColor: '#415A77',

    paddingHorizontal: 8,
    paddingVertical: 5,

    borderRadius: 14,
  },

  selectedChipText: {
    fontSize: 9,
    color: '#E0E1DD',
    marginRight: 4,
    fontWeight: '600',
  },


  // ==================================================
  // BOTÃO PESQUISA
  // ==================================================

  searchBtn: {
    height: 48,

    backgroundColor: '#E0E1DD',

    paddingHorizontal: 13,

    borderRadius: 10,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    gap: 8,
  },

  searchBtnDisabled: {
    opacity: 0.5,
  },

  searchBtnText: {
    color: '#0D1B2A',
    fontWeight: '900',
    fontSize: 12,
  },





  // ==================================================
  // RESULTADO
  // ==================================================

  resultContainer: {
    backgroundColor: '#1B263B',

    borderRadius: 16,

    padding: 16,

    borderWidth: 1,
    borderColor: '#415A77',

    elevation: 5,
  },

  resultHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  resultHeaderContent: {
    flex: 1,
  },

  resultEyebrow: {
    color: '#C7BEB6',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 3,
  },

  resultHeader: {
    fontSize: 18,
    fontWeight: '900',
    color: '#E0E1DD',
  },


  // ==================================================
  // STATUS
  // ==================================================

  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#0D1B2A',

    borderWidth: 1,
    borderColor: '#415A77',

    paddingHorizontal: 8,
    paddingVertical: 6,

    borderRadius: 20,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,

    backgroundColor: '#415A77',

    marginRight: 5,
  },

  statusPillText: {
    color: '#C7BEB6',
    fontSize: 8,
    fontWeight: '900',
  },


  // ==================================================
  // IMAGEM
  // ==================================================

  vehicleImg: {
    width: '100%',
    height: 165,

    borderRadius: 11,

    marginBottom: 13,

    backgroundColor: '#0D1B2A',
  },


  // ==================================================
  // RESUMO
  // ==================================================

  summaryRow: {
    flexDirection: 'row',

    backgroundColor: '#0D1B2A',

    borderRadius: 11,

    paddingVertical: 12,

    marginBottom: 17,

    borderWidth: 1,
    borderColor: '#415A77',
  },

  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },

  summaryValue: {
    color: '#E0E1DD',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 4,
  },

  summaryLabel: {
    color: '#C7BEB6',
    fontSize: 8,
    fontWeight: '700',
    marginTop: 2,
    textAlign: 'center',
  },

  summaryDivider: {
    width: 1,
    backgroundColor: '#415A77',
  },


  // ==================================================
  // TABELA
  // ==================================================

  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },

  tableTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#E0E1DD',
    marginLeft: 6,
  },

  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 11,

    borderBottomWidth: 1,
    borderBottomColor: '#2E3C52',
  },

  specLabelContainer: {
    flex: 0.9,
    paddingRight: 8,
  },

  specLabel: {
    fontWeight: '800',
    color: '#E0E1DD',
    fontSize: 11,
  },

  sourceText: {
    fontSize: 8,
    color: '#687587',
    marginTop: 3,
  },

  specValueContainer: {
    flex: 1.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  specValue: {
    fontWeight: '800',
    color: '#E0E1DD',
    fontSize: 10,
    textAlign: 'right',
    marginRight: 6,
  },

  unavailable: {
    color: '#687587',
    fontStyle: 'italic',
    fontWeight: '600',
  },


  // ==================================================
  // FONTE
  // ==================================================

  sourceBox: {
    flexDirection: 'row',

    backgroundColor: '#0D1B2A',

    padding: 10,

    borderRadius: 9,

    marginTop: 14,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  sourceBoxText: {
    flex: 1,

    color: '#C7BEB6',

    fontSize: 8,

    lineHeight: 13,

    marginLeft: 6,
  },


  // ==================================================
  // RESULTADO VALIDAÇÃO
  // ==================================================

  validationResultBox: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#415A77',

    borderRadius: 10,

    padding: 11,

    marginTop: 12,
  },

  validationResultIcon: {
    width: 35,
    height: 35,

    borderRadius: 10,

    backgroundColor: '#0D1B2A',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  validationResultTitle: {
    color: '#E0E1DD',
    fontWeight: '900',
    fontSize: 11,
    marginBottom: 2,
  },

  validationResultText: {
    color: '#E0E1DD',
    fontSize: 8,
    lineHeight: 13,
  },


  // ==================================================
  // FOOTER
  // ==================================================

  footer: {
    textAlign: 'center',

    color: '#687587',

    fontSize: 8,

    fontWeight: '700',

    letterSpacing: 0.6,

    marginTop: 24,
  },
});
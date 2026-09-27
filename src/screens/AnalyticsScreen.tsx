import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  getVehicleSpecifications,
  vehiclesDatabase,
} from '../data/mockData';

const COMPARED_ATTRIBUTES = [
  'Potência',
  'Torque',
  'Motor',
  'Transmissão',
  'Tração',
  'Suspensão',
  'Preço',
];

export const AnalyticsScreen = () => {
  const [selectedVehicleId, setSelectedVehicleId] =
    useState('ranger-raptor');

  const selectedVehicle =
    vehiclesDatabase.find(
      (vehicle) => vehicle.id === selectedVehicleId
    ) ?? vehiclesDatabase[0];

  const result = useMemo(
    () =>
      getVehicleSpecifications(
        selectedVehicle.brand,
        selectedVehicle.model,
        selectedVehicle.version,
        COMPARED_ATTRIBUTES
      ),
    [selectedVehicle]
  );

  const availabilityPercentage =
    COMPARED_ATTRIBUTES.length > 0
      ? Math.round(
          (result.foundCount / COMPARED_ATTRIBUTES.length) * 100
        )
      : 0;

  const getSpecification = (attribute: string) => {
    return result.specifications.find(
      (item) => item.attribute === attribute
    )?.value;
  };

  const power = getSpecification('Potência');
  const torque = getSpecification('Torque');
  const engine = getSpecification('Motor');
  const price = getSpecification('Preço');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons
              name="analytics-outline"
              size={24}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.title}>
              Análise de Mercado
            </Text>

            <Text style={styles.subtitle}>
              Inteligência competitiva automotiva
            </Text>
          </View>
        </View>


        {/* ================================================= */}
        {/* INTRODUÇÃO */}
        {/* ================================================= */}

        <View style={styles.introCard}>
          <View style={styles.introIcon}>
            <Ionicons
              name="bar-chart-outline"
              size={19}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.introContent}>
            <Text style={styles.introTitle}>
              Visão competitiva
            </Text>

            <Text style={styles.introText}>
              Consulte informações técnicas e comerciais
              dos veículos presentes na base para apoiar
              análises de mercado.
            </Text>
          </View>
        </View>


        {/* ================================================= */}
        {/* SELEÇÃO */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          Veículo analisado
        </Text>

        <Text style={styles.sectionSubtitle}>
          Selecione um veículo para visualizar seus principais
          indicadores.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.vehicleSelector}
        >
          {vehiclesDatabase.map((vehicle) => {
            const active =
              vehicle.id === selectedVehicleId;

            return (
              <TouchableOpacity
                key={vehicle.id}
                style={[
                  styles.vehicleChip,
                  active && styles.vehicleChipActive,
                ]}
                onPress={() =>
                  setSelectedVehicleId(vehicle.id)
                }
                activeOpacity={0.8}
              >
                <Ionicons
                  name="car-outline"
                  size={14}
                  color={
                    active
                      ? '#E0E1DD'
                      : '#C7BEB6'
                  }
                />

                <Text
                  style={[
                    styles.vehicleChipText,
                    active &&
                      styles.vehicleChipTextActive,
                  ]}
                  numberOfLines={1}
                >
                  {vehicle.brand} {vehicle.model}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>


        {/* ================================================= */}
        {/* IDENTIDADE */}
        {/* ================================================= */}

        <View style={styles.identityCard}>

          <View style={styles.identityIcon}>
            <Ionicons
              name="car-sport-outline"
              size={27}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.identityContent}>

            <Text style={styles.identityBrand}>
              {selectedVehicle.brand}
            </Text>

            <Text style={styles.identityName}>
              {selectedVehicle.model}
            </Text>

            <Text style={styles.identityVersion}>
              {selectedVehicle.version}
            </Text>

            <View style={styles.badgesRow}>

              <View style={styles.categoryBadge}>
                <Ionicons
                  name="pricetag-outline"
                  size={10}
                  color="#C7BEB6"
                />

                <Text style={styles.categoryText}>
                  {selectedVehicle.category}
                </Text>
              </View>

              <View style={styles.sourceBadge}>
                <Ionicons
                  name="basket-outline"
                  size={10}
                  color="#C7BEB6"
                />

                <Text style={styles.categoryText}>
                  BASE INTERNA
                </Text>
              </View>

            </View>

          </View>

        </View>


        {/* ================================================= */}
        {/* RESUMO EXECUTIVO */}
        {/* ================================================= */}

        <View style={styles.sectionHeaderRow}>
          <View>
            <Text style={styles.sectionTitle}>
              Resumo do veículo
            </Text>

            <Text style={styles.sectionSubtitle}>
              Principais indicadores disponíveis na base.
            </Text>
          </View>

          <View style={styles.availabilityBadge}>
            <Text style={styles.availabilityBadgeText}>
              {availabilityPercentage}% dados
            </Text>
          </View>
        </View>


        {/* ================================================= */}
        {/* INDICADORES */}
        {/* ================================================= */}

        <View style={styles.statsGrid}>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="flash-outline"
                size={19}
                color="#E0E1DD"
              />
            </View>

            <Text style={styles.statLabel}>
              POTÊNCIA
            </Text>

            <Text style={styles.statValue}>
              {power ?? 'N/D'}
            </Text>
          </View>


          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="speedometer-outline"
                size={19}
                color="#E0E1DD"
              />
            </View>

            <Text style={styles.statLabel}>
              TORQUE
            </Text>

            <Text style={styles.statValue}>
              {torque ?? 'N/D'}
            </Text>
          </View>


          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="settings-outline"
                size={19}
                color="#E0E1DD"
              />
            </View>

            <Text style={styles.statLabel}>
              MOTOR
            </Text>

            <Text
              style={styles.statValueSmall}
              numberOfLines={2}
            >
              {engine ?? 'N/D'}
            </Text>
          </View>


          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="cash-outline"
                size={19}
                color="#E0E1DD"
              />
            </View>

            <Text style={styles.statLabel}>
              PREÇO
            </Text>

            <Text
              style={styles.statValueSmall}
              numberOfLines={2}
            >
              {price ?? 'N/D'}
            </Text>
          </View>

        </View>


        {/* ================================================= */}
        {/* DISPONIBILIDADE */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          Qualidade da informação
        </Text>

        <View style={styles.availabilityCard}>

          <View style={styles.availabilityHeader}>

            <View>
              <Text style={styles.availabilityTitle}>
                Cobertura dos dados
              </Text>

              <Text style={styles.availabilityDescription}>
                Informações localizadas para este veículo.
              </Text>
            </View>

            <Text style={styles.availabilityNumber}>
              {result.foundCount}/{COMPARED_ATTRIBUTES.length}
            </Text>

          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${availabilityPercentage}%`,
                },
              ]}
            />
          </View>

          <View style={styles.availabilityLegend}>

            <View style={styles.legendItem}>
              <View style={styles.legendDotFound} />
              <Text style={styles.legendText}>
                {result.foundCount} encontrados
              </Text>
            </View>

            <View style={styles.legendItem}>
              <View style={styles.legendDotMissing} />
              <Text style={styles.legendText}>
                {result.unavailableCount} não disponíveis
              </Text>
            </View>

          </View>

        </View>


        {/* ================================================= */}
        {/* ESPECIFICAÇÕES */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          Especificações técnicas
        </Text>

        <Text style={styles.sectionSubtitle}>
          Dados padronizados para facilitar consultas
          e comparações entre veículos.
        </Text>

        <View style={styles.tableCard}>

          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderLeft}>
              ATRIBUTO
            </Text>

            <Text style={styles.tableHeaderRight}>
              VALOR
            </Text>
          </View>

          {result.specifications.map(
            (item, index) => {

              const isLast =
                index ===
                result.specifications.length - 1;

              const available =
                item.value !== null &&
                item.value !== undefined &&
                item.value !== '';

              return (
                <View
                  key={item.attribute}
                  style={[
                    styles.tableRow,
                    isLast && styles.lastTableRow,
                  ]}
                >

                  <View style={styles.attributeContainer}>

                    <View
                      style={[
                        styles.attributeDot,
                        available
                          ? styles.attributeDotActive
                          : styles.attributeDotMissing,
                      ]}
                    />

                    <Text style={styles.attribute}>
                      {item.attribute}
                    </Text>

                  </View>

                  <View style={styles.valueContainer}>

                    <Text
                      style={[
                        styles.value,
                        !available &&
                          styles.missing,
                      ]}
                    >
                      {available
                        ? String(item.value)
                        : 'Não disponível'}
                    </Text>

                    {available && (
                      <Ionicons
                        name="checkmark-circle"
                        size={14}
                        color="#778DA9"
                        style={styles.valueIcon}
                      />
                    )}

                  </View>

                </View>
              );
            }
          )}

        </View>


       


        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

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
    paddingBottom: 40,
  },


  // ==================================================
  // HEADER
  // ==================================================

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  headerIcon: {
    width: 48,
    height: 48,

    borderRadius: 14,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  headerContent: {
    flex: 1,
  },

  title: {
    fontSize: 21,
    fontWeight: '900',
    color: '#E0E1DD',
  },

  subtitle: {
    fontSize: 11,
    color: '#C7BEB6',

    marginTop: 3,

    lineHeight: 16,
  },


  // ==================================================
  // INTRO
  // ==================================================

  introCard: {
    flexDirection: 'row',

    backgroundColor: '#16263A',

    borderRadius: 15,

    padding: 13,

    marginBottom: 22,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  introIcon: {
    width: 37,
    height: 37,

    borderRadius: 10,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  introContent: {
    flex: 1,
  },

  introTitle: {
    color: '#E0E1DD',

    fontSize: 11,

    fontWeight: '900',

    marginBottom: 3,
  },

  introText: {
    color: '#AEB6C1',

    fontSize: 9,

    lineHeight: 14,
  },


  // ==================================================
  // SEÇÕES
  // ==================================================

  sectionTitle: {
    fontSize: 15,

    fontWeight: '900',

    color: '#E0E1DD',

    marginBottom: 4,
  },

  sectionSubtitle: {
    fontSize: 10,

    color: '#9EA8B5',

    marginBottom: 12,

    lineHeight: 15,
  },

  sectionHeaderRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',

    marginBottom: 2,
  },

  availabilityBadge: {
    backgroundColor: '#263B53',

    borderRadius: 10,

    paddingHorizontal: 9,
    paddingVertical: 5,

    borderWidth: 1,
    borderColor: '#415A77',
  },

  availabilityBadgeText: {
    color: '#C7D0DA',

    fontSize: 8,

    fontWeight: '900',
  },


  // ==================================================
  // SELETOR
  // ==================================================

  vehicleSelector: {
    paddingBottom: 17,
  },

  vehicleChip: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1B263B',

    borderWidth: 1,
    borderColor: '#33445B',

    paddingHorizontal: 12,
    paddingVertical: 9,

    borderRadius: 18,

    marginRight: 8,

    gap: 6,

    maxWidth: 175,
  },

  vehicleChipActive: {
    backgroundColor: '#415A77',

    borderColor: '#415A77',
  },

  vehicleChipText: {
    color: '#AEB6C1',

    fontSize: 10,

    fontWeight: '800',
  },

  vehicleChipTextActive: {
    color: '#E0E1DD',
  },


  // ==================================================
  // IDENTIDADE
  // ==================================================

  identityCard: {
    backgroundColor: '#1B263B',

    borderRadius: 17,

    padding: 16,

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 21,

    borderWidth: 1,
    borderColor: '#415A77',

    elevation: 5,
  },

  identityIcon: {
    width: 55,
    height: 55,

    borderRadius: 15,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },

  identityContent: {
    flex: 1,
  },

  identityBrand: {
    color: '#778DA9',

    fontSize: 9,

    fontWeight: '900',

    textTransform: 'uppercase',

    letterSpacing: 0.8,

    marginBottom: 1,
  },

  identityName: {
    fontSize: 18,

    fontWeight: '900',

    color: '#E0E1DD',
  },

  identityVersion: {
    fontSize: 10,

    color: '#AEB6C1',

    marginTop: 2,

    marginBottom: 8,
  },

  badgesRow: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 6,
  },

  categoryBadge: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 4,

    backgroundColor: '#0D1B2A',

    paddingHorizontal: 8,
    paddingVertical: 5,

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#33445B',
  },

  sourceBadge: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 4,

    backgroundColor: '#24344A',

    paddingHorizontal: 8,
    paddingVertical: 5,

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#33445B',
  },

  categoryText: {
    color: '#AEB6C1',

    fontSize: 7.5,

    fontWeight: '900',

    textTransform: 'uppercase',
  },


  // ==================================================
  // INDICADORES
  // ==================================================

  statsGrid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginBottom: 21,
  },

  statCard: {
    width: '48%',

    backgroundColor: '#1B263B',

    borderRadius: 15,

    padding: 13,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#2E3C52',

    minHeight: 118,

    elevation: 3,
  },

  statIcon: {
    width: 34,
    height: 34,

    borderRadius: 10,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 10,
  },

  statLabel: {
    color: '#778DA9',

    fontSize: 8,

    fontWeight: '900',

    letterSpacing: 0.6,

    marginBottom: 3,
  },

  statValue: {
    color: '#E0E1DD',

    fontSize: 16,

    fontWeight: '900',
  },

  statValueSmall: {
    color: '#E0E1DD',

    fontSize: 11,

    fontWeight: '900',

    lineHeight: 15,
  },


  // ==================================================
  // DISPONIBILIDADE
  // ==================================================

  availabilityCard: {
    backgroundColor: '#1B263B',

    borderRadius: 15,

    padding: 15,

    marginBottom: 21,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  availabilityHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: 13,
  },

  availabilityTitle: {
    color: '#E0E1DD',

    fontSize: 11,

    fontWeight: '900',

    marginBottom: 3,
  },

  availabilityDescription: {
    color: '#8F9BA9',

    fontSize: 9,
  },

  availabilityNumber: {
    color: '#E0E1DD',

    fontSize: 17,

    fontWeight: '900',
  },

  progressBackground: {
    height: 8,

    backgroundColor: '#0D1B2A',

    borderRadius: 5,

    overflow: 'hidden',

    marginBottom: 10,
  },

  progressFill: {
    height: '100%',

    backgroundColor: '#778DA9',

    borderRadius: 5,
  },

  availabilityLegend: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },

  legendItem: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  legendDotFound: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#778DA9',

    marginRight: 5,
  },

  legendDotMissing: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#455468',

    marginRight: 5,
  },

  legendText: {
    color: '#8F9BA9',

    fontSize: 8,

    fontWeight: '700',
  },


  // ==================================================
  // TABELA
  // ==================================================

  tableCard: {
    backgroundColor: '#1B263B',

    borderRadius: 15,

    paddingHorizontal: 14,

    marginBottom: 21,

    borderWidth: 1,
    borderColor: '#2E3C52',

    elevation: 3,
  },

  tableHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingVertical: 11,

    borderBottomWidth: 1,

    borderBottomColor: '#415A77',
  },

  tableHeaderLeft: {
    flex: 1,

    color: '#778DA9',

    fontSize: 8,

    fontWeight: '900',

    letterSpacing: 0.7,
  },

  tableHeaderRight: {
    flex: 1,

    color: '#778DA9',

    fontSize: 8,

    fontWeight: '900',

    letterSpacing: 0.7,

    textAlign: 'right',
  },

  tableRow: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    minHeight: 49,

    borderBottomWidth: 1,

    borderBottomColor: '#28374B',
  },

  lastTableRow: {
    borderBottomWidth: 0,
  },

  attributeContainer: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',
  },

  attributeDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    marginRight: 8,
  },

  attributeDotActive: {
    backgroundColor: '#778DA9',
  },

  attributeDotMissing: {
    backgroundColor: '#455468',
  },

  attribute: {
    color: '#C7BEB6',

    fontSize: 10,

    fontWeight: '800',
  },

  valueContainer: {
    flex: 1,

    flexDirection: 'row',

    justifyContent: 'flex-end',

    alignItems: 'center',
  },

  value: {
    color: '#E0E1DD',

    fontSize: 10,

    fontWeight: '900',

    textAlign: 'right',
  },

  valueIcon: {
    marginLeft: 5,
  },

  missing: {
    color: '#687587',

    fontStyle: 'italic',

    fontWeight: '700',
  },


  // ==================================================
  // ANÁLISE
  // ==================================================

  analysisCard: {
    backgroundColor: '#1B263B',

    borderRadius: 15,

    paddingHorizontal: 14,

    marginBottom: 21,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  analysisRow: {
    flexDirection: 'row',

    paddingVertical: 14,

    alignItems: 'flex-start',
  },

  analysisIcon: {
    width: 34,
    height: 34,

    borderRadius: 10,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  analysisContent: {
    flex: 1,
  },

  analysisTitle: {
    color: '#E0E1DD',

    fontSize: 10,

    fontWeight: '900',

    marginBottom: 3,
  },

  analysisText: {
    color: '#9EA8B5',

    fontSize: 9,

    lineHeight: 14,
  },

  analysisDivider: {
    height: 1,

    backgroundColor: '#2E3C52',
  },


  // ==================================================
  // INFORMAÇÃO
  // ==================================================

  infoBox: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    backgroundColor: '#16263A',

    borderRadius: 14,

    padding: 13,

    borderWidth: 1,
    borderColor: '#415A77',

    marginTop: 1,
  },

  infoIcon: {
    width: 38,
    height: 38,

    borderRadius: 11,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: '#E0E1DD',

    fontSize: 11,

    fontWeight: '900',

    marginBottom: 3,
  },

  infoText: {
    color: '#AEB6C1',

    fontSize: 9,

    lineHeight: 14,
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
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { vehiclesDatabase } from '../data/mockData';

export const CatalogScreen = () => {
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
              name="car-sport-outline"
              size={23}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.headerContent}>

            <Text style={styles.title}>
              Catálogo de Veículos
            </Text>

            <Text style={styles.subtitle}>
              Modelos cadastrados no sistema de inteligência
              competitiva.
            </Text>

          </View>

        </View>


        {/* ================================================= */}
        {/* RESUMO */}
        {/* ================================================= */}

        <View style={styles.summaryCard}>

          <View style={styles.summaryIcon}>

            <Ionicons
              name="layers-outline"
              size={20}
              color="#E0E1DD"
            />

          </View>

          <View style={styles.summaryContent}>

            <Text style={styles.summaryValue}>
              {vehiclesDatabase.length}
            </Text>

            <Text style={styles.summaryLabel}>
              veículos disponíveis para consulta
            </Text>

          </View>

        </View>


        {/* ================================================= */}
        {/* CATÁLOGO */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          Modelos cadastrados
        </Text>

        <Text style={styles.sectionSubtitle}>
          Consulte informações e especificações dos veículos
          disponíveis na base.
        </Text>


        {vehiclesDatabase.map((item) => (

          <View
            key={item.id}
            style={styles.card}
          >

            {/* ================================================= */}
            {/* IMAGEM */}
            {/* ================================================= */}

            <View style={styles.imageContainer}>

              <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />

              <View style={styles.categoryBadge}>

                <Text style={styles.category}>
                  {item.category.toUpperCase()}
                </Text>

              </View>

            </View>


            {/* ================================================= */}
            {/* CONTEÚDO */}
            {/* ================================================= */}

            <View style={styles.cardBody}>

              <Text style={styles.name}>
                {item.brand} {item.model}
              </Text>

              <Text style={styles.version}>
                {item.version}
              </Text>


              {/* PREÇO */}

              {item.priceEstimate && (

                <View style={styles.priceRow}>

                  <View style={styles.priceIcon}>

                    <Ionicons
                      name="pricetag-outline"
                      size={14}
                      color="#E0E1DD"
                    />

                  </View>

                  <Text style={styles.price}>
                    {item.priceEstimate}
                  </Text>

                </View>

              )}


              {/* DIVISOR */}

              <View style={styles.divider} />


              {/* ESPECIFICAÇÕES */}

              <Text style={styles.specTitle}>
                Principais especificações
              </Text>

              <View style={styles.tagContainer}>

                {Object.keys(item.specs)
                  .slice(0, 3)
                  .map((key) => (

                    <View
                      key={key}
                      style={styles.tag}
                    >

                      <Text style={styles.tagKey}>
                        {key}
                      </Text>

                      <Text style={styles.tagValue}>
                        {item.specs[key]}
                      </Text>

                    </View>

                  ))}

              </View>

            </View>

          </View>

        ))}


        {/* ================================================= */}
        {/* INFORMAÇÃO */}
        {/* ================================================= */}





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
    paddingBottom: 35,
  },


  // ==================================================
  // HEADER
  // ==================================================

  header: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 22,
  },

  headerIcon: {
    width: 46,
    height: 46,

    borderRadius: 13,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 11,
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

    marginTop: 4,

    lineHeight: 16,
  },


  // ==================================================
  // RESUMO
  // ==================================================

  summaryCard: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1B263B',

    borderRadius: 15,

    padding: 14,

    marginBottom: 22,

    borderWidth: 1,
    borderColor: '#415A77',

    elevation: 4,
  },

  summaryIcon: {
    width: 42,
    height: 42,

    borderRadius: 12,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 11,
  },

  summaryContent: {
    flex: 1,
  },

  summaryValue: {
    color: '#E0E1DD',

    fontSize: 20,

    fontWeight: '900',
  },

  summaryLabel: {
    color: '#C7BEB6',

    fontSize: 10,

    marginTop: 1,

    fontWeight: '700',
  },


  // ==================================================
  // SEÇÃO
  // ==================================================

  sectionTitle: {
    color: '#E0E1DD',

    fontSize: 15,

    fontWeight: '900',

    marginBottom: 4,
  },

  sectionSubtitle: {
    color: '#C7BEB6',

    fontSize: 10,

    lineHeight: 15,

    marginBottom: 13,
  },


  // ==================================================
  // CARD DO VEÍCULO
  // ==================================================

  card: {
    backgroundColor: '#1B263B',

    borderRadius: 17,

    overflow: 'hidden',

    marginBottom: 15,

    borderWidth: 1,
    borderColor: '#2E3C52',

    elevation: 5,
  },


  // ==================================================
  // IMAGEM
  // ==================================================

  imageContainer: {
    width: '100%',

    height: 175,

    backgroundColor: '#415A77',

    position: 'relative',
  },

  image: {
    width: '100%',

    height: '100%',
  },

  categoryBadge: {
    position: 'absolute',

    top: 12,
    left: 12,

    backgroundColor: '#0D1B2A',

    paddingHorizontal: 9,
    paddingVertical: 6,

    borderRadius: 9,

    borderWidth: 1,
    borderColor: '#415A77',
  },

  category: {
    color: '#E0E1DD',

    fontSize: 8,

    fontWeight: '900',

    letterSpacing: 0.6,
  },


  // ==================================================
  // CORPO DO CARD
  // ==================================================

  cardBody: {
    padding: 15,
  },

  name: {
    color: '#E0E1DD',

    fontSize: 17,

    fontWeight: '900',
  },

  version: {
    color: '#C7BEB6',

    fontSize: 10,

    fontWeight: '700',

    marginTop: 3,
  },


  // ==================================================
  // PREÇO
  // ==================================================

  priceRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 11,
  },

  priceIcon: {
    width: 27,
    height: 27,

    borderRadius: 8,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 7,
  },

  price: {
    color: '#E0E1DD',

    fontSize: 13,

    fontWeight: '900',
  },


  // ==================================================
  // DIVISOR
  // ==================================================

  divider: {
    height: 1,

    backgroundColor: '#2E3C52',

    marginVertical: 13,
  },


  // ==================================================
  // ESPECIFICAÇÕES
  // ==================================================

  specTitle: {
    color: '#C7BEB6',

    fontSize: 9,

    fontWeight: '900',

    textTransform: 'uppercase',

    letterSpacing: 0.5,

    marginBottom: 8,
  },

  tagContainer: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    gap: 7,
  },

  tag: {
    backgroundColor: '#0D1B2A',

    borderRadius: 9,

    paddingHorizontal: 9,
    paddingVertical: 7,

    borderWidth: 1,
    borderColor: '#2E3C52',

    minWidth: '30%',
  },

  tagKey: {
    color: '#687587',

    fontSize: 7,

    fontWeight: '800',

    textTransform: 'uppercase',

    marginBottom: 2,
  },

  tagValue: {
    color: '#E0E1DD',

    fontSize: 9,

    fontWeight: '800',
  },


  // ==================================================
  // INFORMAÇÃO
  // ==================================================

  infoCard: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1B263B',

    borderRadius: 14,

    padding: 13,

    marginTop: 3,

    borderWidth: 1,
    borderColor: '#415A77',
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
    color: '#C7BEB6',

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
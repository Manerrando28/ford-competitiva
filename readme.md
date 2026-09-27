# 🚗 Desafio 01 — Inteligência Competitiva Automotiva | Ford

Aplicação mobile corporativa desenvolvida para o **Desafio 01 de Inteligência Competitiva Automotiva da Ford**, utilizando **React Native, Expo e TypeScript**.

O aplicativo tem como objetivo centralizar informações de veículos, permitindo **consulta de especificações técnicas, comparação entre concorrentes, análise de mercado e suporte ao usuário**.

---

## 👥 Integrantes

| Nome | RM |
|---|---|
| Fernando Carlos Colque Huaranca | RM558095 |
| Gabriel Guilherme Leste | RM558638 |
| Gabriel Lacerda Araújo | RM558307 |
| Julia Carolina Ferreira Silva | RM558896 |

---

# 📱 Sobre o Projeto

<p align="center">
  <img
    width="302"
    height="655"
    alt="qemu-system-x86_64_YfsYasaKKT"
    src="https://github.com/user-attachments/assets/071ef7f3-adbc-4c1d-85b9-220396b84fed"
  />
</p>

O **Ford Connect+** é uma aplicação mobile voltada à inteligência competitiva automotiva.

A solução permite consultar veículos cadastrados, visualizar suas especificações técnicas, realizar comparações entre modelos e analisar o posicionamento de um veículo em relação aos seus concorrentes.

O projeto utiliza a **Ford Ranger Raptor** como principal veículo de referência para as análises.

---

# 🚀 Funcionalidades

### 🔐 Autenticação
- Tela de login corporativo;
- Validação de usuário e senha;
- Acesso à aplicação após autenticação.

### 🏠 Início — Ford Connect+
- Dashboard inspirado em sistemas de conectividade automotiva;
- Informações do veículo;
- Representação de conectividade **SYNC® 4**;
- Seletor de modos de terreno **G.O.A.T.**;
- Interface inspirada no ecossistema Ford.

### 🔍 Comparador
- Busca por **marca, modelo e versão**;
- Consulta de atributos técnicos;
- Comparação entre veículos;
- Tratamento de informações não disponíveis;
- Padronização dos atributos para facilitar a análise.

### 🚘 Catálogo
- Listagem dos veículos cadastrados;
- Imagens dos veículos;
- Marca, modelo e versão;
- Categoria;
- Preço estimado;
- Especificações técnicas.

### 📊 Análise de Mercado
- Seleção do veículo para análise;
- Indicadores técnicos;
- Consulta de potência, torque, motor e preço;
- Análise de disponibilidade dos dados;
- Comparação com veículos concorrentes;
- Referências como:
  - Toyota Hilux GR-Sport;
  - Chevrolet S10 Z71.

### 🛠️ Suporte
- Central de assistência;
- Informações de suporte;
- Manuais e orientações de serviço.

---

# 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **JavaScript**
- **Expo Vector Icons**
- **EAS Build**
- **Git**
- **GitHub**

---

# 📂 Estrutura do Projeto

```text
ford-competitiva/
│
├── assets/
│   └── imagens e recursos visuais
│
├── src/
│   ├── data/
│   │   └── mockData.ts
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── CompareScreen.tsx
│   │   ├── CatalogScreen.tsx
│   │   ├── AnalyticsScreen.tsx
│   │   ├── SupportScreen.tsx
│   │   └── LoginScreen.tsx
│   │
│   └── types/
│       └── vehicle.ts
│
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md

// readventure/packages/lib/src/config/config.js
import packageJson from '../../package.json'; 
import manifestJson from '../../../public/manifest.json'; 
import { StyleSheet } from 'react-native';

const SERVER_PORT = process.env.SERVER_PORT || 3000; 
const DEFAULT_ENVIRONMENT = process.env.DEFAULT_ENVIRONMENT || 'development';


const completeConfig = {
  default: {
    appSlug: packageJson.name,
    appVersion: packageJson.version,
    appUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000', 
    appName: packageJson.name,
    appTagline: manifestJson.description,
    appDescription: manifestJson.description,
    serverPort: SERVER_PORT, 
    locale: 'en_US', 
    fonts: [['Inter', 'wght@300;400;500;700']],

    apiBaseUrl: `${process.env.REACT_APP_API_BASE_URL}/api/`,

    debug: {
      fakeLocation: false,
      fakeAPI: false,
    },

    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000', 
    API_URL: 'http://localhost:3000',  
    APP_NAME: 'readventure', 
    ENV: { 
      API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, 
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    },
  },

  development: {
    appUrl: `http://localhost:${SERVER_PORT}/`,
  },

  production: {
    // In production, we could define tokens or special config
  },
};

// Combine the default with environment-specific config
const config = { ...completeConfig.default, ...completeConfig[DEFAULT_ENVIRONMENT] };


// Global Styles
config.globalStyles = {
  // ----- Size units -----
  UNIT_STANDARD: 16, 
  FONT_SIZE_STANDARD: 16, 
  FONT_SIZE_SMALL: 14, 

  MARGIN_SIDE_STANDARD: 16, 
  MARGIN_SIDE_WIDE: 26, 
  MARGIN_TOP: 60,

  SIZE_ICON: 48, 
  SIZE_PORTRAIT: 110,

  // ----- Colors: named -----
  COLOR_BLACK: '#000000',
  COLOR_GRAY_89: '#262626',
  COLOR_GRAY_76: '#4F4F4F',
  COLOR_GRAY_63: '#727272',
  COLOR_GRAY_50: '#919194',
  COLOR_GRAY_29: '#C1C1C5',
  COLOR_GRAY_07: '#F0F0F0',
  COLOR_WHITE_LIGHT: '#F9F9F9',
  COLOR_WHITE: '#FFFFFF',

  COLOR_RED: '#E50010',
  COLOR_ORANGE: '#FF9A01',
  COLOR_YELLOW: '#FFE396',
  COLOR_PURPLE_DARK: '#7E65B8',
  COLOR_PURPLE_LIGHT: '#B39CEE',

  GRADIENT_BLUE: '#2B59C6',
  GRADIENT_GREEN: '#03FCA5',
  GRADIENT_ORANGE: '#ED8003',
  GRADIENT_PINK: '#C136FA',

  // ----- Colors: functional -----
  COLOR_TEXT: '#262626', 
  COLOR_ACTION_PRIMARY: '#7E65B8', 
  COLOR_ACTION_PRIMARY_PRESSED: '#B39CEE', 
  COLOR_INPUT_BACKGROUND: '#F0F0F0', 

  // ----- Typography -----
  GLOBAL_STYLES: StyleSheet.create({
    PAGE_CONTAINER: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16, 
    },

    SPACING_FULL: {
      marginVertical: 16, 
    },
    SPACING_HALF: {
      marginVertical: 8, 
    },

    TEXT_CENTERED: {
      textAlign: 'center',
    },
    TEXT_UNDERLINED: {
      textDecorationLine: 'underline',
    },

    TEXT_LARGE_TITLE: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 30,
      letterSpacing: -0.5,
    },
  }),

  // ----- Debug -----
  DEBUG_STYLES: StyleSheet.create({
    RED_BACKGROUND: {
      backgroundColor: 'rgba(255,0,0, 0.3)',
    },
    GREEN_BACKGROUND: {
      backgroundColor: 'rgba(0,255,0, 0.3)',
    },
    BLUE_BACKGROUND: {
      backgroundColor: 'rgba(0,0,255, 0.3)',
    },
    WHITE_BORDER: {
      borderColor: 'white',
      borderWidth: 1,
    },
  }),
};

// ----- Headers -----
config.headerOptions = {
  HEADER_OPTIONS_DEFAULT: {
    headerShadowVisible: false,
  },

  HEADER_OPTIONS_DARK: {
    headerBackTitle: 'Back',
    headerStyle: {
      backgroundColor: '#000000', 
    },
    headerTintColor: '#FFFFFF', 
    headerShadowVisible: false,
  },
};

// API Endpoints
config.endpoints = {
  LOGIN: `${config.API_BASE_URL}/auth/login`,
  SIGNUP: `${config.API_BASE_URL}/auth/signup`,
  FETCH_PROGRESS: `${config.API_BASE_URL}/progress`,
};

export default config;
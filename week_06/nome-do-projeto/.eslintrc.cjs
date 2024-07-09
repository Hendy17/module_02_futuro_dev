module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Desativa a regra para React 18+
    'no-unused-vars': ['error', { 'varsIgnorePattern': '^React$' }] // Ignora vars não usadas chamadas React
  }
};

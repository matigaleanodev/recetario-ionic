# Development – Foodly Notes Frontend

This document describes how to run and work with the **Foodly Notes frontend** in a local environment.

---

## 📦 Requirements

- Node.js (LTS recommended)
- npm
- Angular CLI
- Ionic CLI (optional but recommended)

---

## 🚀 Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## ▶️ Run locally

Start the development server:

```bash
npm run start
```

The application will be available at:

```
http://localhost:4200
```

---

## 🧪 Testing

Run unit tests:

```bash
npm run test
```

---

## 🌍 i18n validation

Check for missing translation keys:

```bash
npm run i18n:check
```

This script validates that all translation keys used in templates
exist in both language files.

---

## 🏗️ Build

Generate a production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

---

## 📁 Project structure

The project follows a feature-based structure with:

- `pages/` for screens
- `shared/` for reusable components, services and utilities
- `environments/` for environment configuration
- `scripts/` for auxiliary tooling (i18n validation)

---

## 📌 Notes

- Environment-specific values are defined in `environment*.ts`
- App version and stage are resolved dynamically depending on platform
- Capacitor is used only for native-specific features

---
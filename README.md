# Contador de Calorias — React + TypeScript

A calorie tracking web application built with React 19 and TypeScript. Users can log food intake and physical exercise, and the app automatically calculates consumed calories, burned calories, and the resulting daily balance (surplus or deficit). All data is persisted in the browser's `localStorage` so it survives page refreshes.

---

## Description

**Calorie Tracker** allows you to:

- **Add activities** — register meals (food) or workouts (exercise) with a name and calorie value.
- **Edit activities** — select any logged activity to update its details.
- **Delete activities** — remove individual entries from the list.
- **Live calorie summary** — see at a glance how many calories you have consumed, burned, and whether you are in a caloric surplus or deficit.
- **Reset the app** — clear all activities with a single click.
- **Persistent storage** — the activity list is saved to `localStorage` and restored automatically on reload.

---

## Top 5 LinkedIn Skills

1. **React.js** — Built the entire UI with React 19 functional components, hooks (`useReducer`, `useState`, `useEffect`, `useMemo`) and a unidirectional data flow architecture.
2. **TypeScript** — Applied strict static typing across all components, reducers, action unions, and data models to catch errors at compile time and improve code maintainability.
3. **Tailwind CSS** — Styled the full application using utility-first classes with responsive layouts (`md:flex-row`), conditional styling, and a consistent design system.
4. **Front-End Development** — Delivered a complete SPA feature set: form handling, CRUD operations, derived state calculations, local data persistence, and accessible UI interactions.
5. **Vite** — Configured and used Vite as the build tool and dev server, leveraging its fast HMR for development and optimised production bundling.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0 | Static typing |
| [Vite](https://vite.dev/) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [Heroicons](https://heroicons.com/) | 2 | SVG icon set |
| [uuid](https://github.com/uuidjs/uuid) | 14 | Unique ID generation |

---

## Project Structure

```
src/
├── App.tsx                  # Root component — wires reducer, layout and sections
├── components/
│   ├── Form.tsx             # Activity form (add / edit)
│   ├── ActivityList.tsx     # Renders the list of logged activities
│   ├── CalorieTracker.tsx   # Computes and displays the calorie summary
│   └── CalorieDisplay.tsx   # Reusable display card for a single calorie metric
├── data/
│   └── categories.ts        # Static category data (Food / Exercise)
├── reducers/
│   └── activity-reducer.ts  # Reducer, action types, initial state
└── types/
    ├── activities.ts        # Activity type definition
    └── categories.ts        # Category type definition
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd calorie-tracker

# Install dependencies
npm install
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server (HMR enabled) |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## How It Works

1. **Add an activity** — fill in the form by choosing a category (Food or Exercise), entering a name and a calorie value, then click the submit button.
2. **Edit an activity** — click the pencil icon next to any activity; the form will pre-populate with its data. Submit to save changes.
3. **Delete an activity** — click the red X icon to remove it permanently.
4. **View summary** — the dark panel always shows up-to-date totals for consumed, burned, and net calories.
5. **Reset** — the "Reiniciar App" button in the header clears all entries (only enabled when the list is non-empty).

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

> Built as a learning project to practise React hooks, TypeScript typing patterns, and state management with `useReducer`.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

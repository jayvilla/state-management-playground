# State Management Playground

A small, interview-ready Next.js app that showcases **multiple React state management patterns** side by side — using the **same UI** but different internal implementations.

The goal: demonstrate that you deeply understand **how state flows in React**, how to structure state for growing apps, and when to choose each pattern.

---

## 🎯 Project Goal

Build a simple but polished app where you can:

- Interact with a small domain (e.g., **Tasks + Filters**)
- Switch between **different state management strategies**
- Inspect how each approach stores and updates state
- Talk through tradeoffs during an interview

This gives you a great live demo for:

- “Explain lifting state vs Context vs Zustand”
- “How would you structure state for a growing React app?”
- “How do you avoid prop drilling?”

---

## 🧱 Tech Stack

- **Frontend Framework:** Next.js 14 (App Router, TypeScript)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (or basic CSS, your choice)
- **State Management:**
  - `useState` + lifting state
  - `useReducer` + React Context
  - [`zustand`](https://github.com/pmndrs/zustand) store

_No backend required — this is a pure frontend state playground._

---

## 🖼️ App Concept

A small **Task Board** with:

- Add a task (title + optional tag)
- Toggle completion
- Filter: **All / Active / Completed**
- Clear completed
- Display stats: `X of Y tasks completed`

At the top of the page, you can choose the **state engine**:

- `useState` (Lifting State)
- `useReducer + Context`
- `Zustand`

The UI stays the same; only the implementation behind it changes.

---

## 🗂️ Suggested Folder Structure

```txt
state-management-playground/
  ├─ app/
  │   ├─ layout.tsx
  │   ├─ page.tsx
  │   └─ globals.css
  ├─ src/
  │   ├─ components/
  │   │   ├─ TaskInput.tsx
  │   │   ├─ TaskList.tsx
  │   │   ├─ TaskFilters.tsx
  │   │   ├─ TaskStats.tsx
  │   │   └─ StateModeToggle.tsx
  │   ├─ state/
  │   │   ├─ useState/
  │   │   │   └─ UseStateTasksProvider.tsx
  │   │   ├─ reducer/
  │   │   │   ├─ TaskReducerContext.tsx
  │   │   │   └─ taskReducer.ts
  │   │   └─ zustand/
  │   │       └─ useTaskStore.ts
  │   └─ types/
  │       └─ task.ts
  ├─ package.json
  ├─ tsconfig.json
  └─ README.md
```

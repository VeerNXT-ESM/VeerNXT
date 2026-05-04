# VeerNXT Reader: Design Specification

## Overview
The VeerNXT Reader is a premium, educational document engine designed to provide a distraction-free, "Kindle-style" reading and learning experience. It combines high-end ebook reading aesthetics with interactive assessment modules (quizzes).

## Design Philosophy
- **Typography First**: Focus on legibility and beautiful serif fonts for long-form reading.
- **Minimalism**: Eliminate UI clutter to focus on content.
- **Kindle Aesthetic**: Soft off-white backgrounds, high contrast text, and subtle shadows/glassmorphism for UI elements.
- **Integrated Learning**: Quizzes that feel like a natural extension of the book, not a separate "test" environment.

---

## 1. Design System (iOS AAA STYLE)

### Core Principles
- **White-First Design**: Clean, high-contrast layouts focused on white space rather than gray-heavy backgrounds.
- **High Spacing**: Apple-style breathing room with significant section and card padding.
- **Soft Shadows**: Elegant, barely-there depth (0px 4px 20px rgba(0,0,0,0.04)).
- **Subtle Gradients**: Barely visible transitions for premium feel.
- **Rounded Corners**: Generous 12–20px rounding on all UI elements.
- **Typography-Led Hierarchy**: Clear distinction between headers and body using weight and scale.

### Color System
| Purpose | Color |
| :--- | :--- |
| **Background** | `#FFFFFF` |
| **Secondary BG** | `#F7F7F8` |
| **Primary Text** | `#0A0A0A` |
| **Secondary Text** | `#6B7280` |
| **Accent (Military Subtle)** | `#1F3A2E` |
| **CTA / Primary Action** | `#111111` |

> [!IMPORTANT]
> **Avoid**: Dark green overload, camouflage clichés, or heavy military icons. Keep it sleek and professional.

### Typography
- **Primary Body & Headers**: **IBM Plex** (Sans/Serif) for scholarly yet modern feel.
- **Buttons & CTAs**: **Quicksand** for a friendly, approachable geometric touch.

### Spacing & Layout
- **Section Padding**: 80–120px
- **Card Padding**: 24–32px
- **Grid Spacing**: 20–24px
- **Border Radius**: 12px (Buttons) / 16–20px (Cards)

### UI Elements
- **Buttons**: Rounded (12px), solid black or dark green (`#1F3A2E`), minimalist hover animations.
- **Cards**: White background, subtle shadow (`0px 4px 20px rgba(0,0,0,0.04)`).
- **Icons**: Thin line icons (Lucide/Feather style). No heavy or filled icons.

---

---

## 2. Core Components

### A. The Library (Dashboard)
The entry point for the user.
- **Grid Layout**: Large, high-resolution book covers with subtle border-radius.
- **Progress Tracking**: A thin, subtle progress bar at the bottom of each cover.
- **Navigation**: Simple sidebar for 'Library', 'Collections', and 'Settings'.
- **Search**: Integrated top bar with glassmorphism blur effect.

### B. The Reader (Core Experience)
A distraction-free reading environment.
- **Immersive View**: UI elements (status bars, menus) fade out during reading.
- **Aa Menu**: Floating settings panel to adjust font size, line spacing, and theme (Light/Sepia/Dark).
- **Progress Indicator**: Floating footer showing percentage completed and "Estimated time left in chapter".
- **Interaction**: Tap/Click sides to turn pages, or vertical scroll option.

### C. The Quiz (Assessment)
Contextual quizzes embedded in the textbook flow.
- **Smooth Transition**: Reader content fades into a focused quiz card.
- **Feedback Loop**: Instant feedback with subtle animations. Correct answers glow emerald; incorrect ones highlight the right choice in muted grey.
- **Gamification**: Subtle progress points/badges for completed sections.

---

## 3. User Flow
1. **Discovery**: User browses the **Library** and selects a textbook.
2. **Engagement**: User enters the **Reader**, utilizing settings for optimal comfort.
3. **Validation**: At the end of a chapter or section, a **Quiz** is triggered.
4. **Progression**: Success updates the **Library** progress and unlocks the next module.

---

## 4. AI Generation Prompts (Reference)

### Kindle Library Mockup
> A premium, modern Kindle-style digital library UI for a web application. Clean grid layout of high-quality book covers. Each book has a subtle progress bar at the bottom. Minimalist top navigation with 'Library', 'Store', and 'Search'. A sidebar with categories like 'Recently Read', 'Collections', 'Unread'. Soft off-white background with elegant serif typography.

### Kindle Reader Mockup
> A high-end ebook reader interface for a web application, Kindle-inspired. Focus on beautiful serif typography. Clean margins, adjustable font settings menu (Aa) floating at the top. Subtle progress indicator at the bottom showing 'Page 45 of 300' and '12 mins left in chapter'.

### Quiz Section Mockup
> A sophisticated interactive quiz UI for an educational platform, following a premium Kindle aesthetic. Clean multiple-choice questions with elegant radio button styles. A sleek progress tracker at the top. 'Check Answer' button with a subtle glow. Feedback states: 'Correct' with a soft emerald accent.

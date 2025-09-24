# Changelog
All notable changes to this project will be documented here.

## [2025-09-24]
### Added
- Nav buttons highlight green when you’re on the current page
- Navigation is now centered with logo on the left
- French flag favicon added to browser tab

### Fixed
- Removed the extra BrowserRouter in App.jsx (kept only in main.jsx)
- Cleaned up App.jsx by moving the Welcome/Bienvenue flip logic fully into Home.jsx
- Fixed blank screen caused by duplicate routes

## [2025-09-23]
### Added
- Fixed header with **VERBA** logo (left) and centered navigation
- Pill-style nav with hover/focus states
- Route-based active highlighting with `NavLink`
- About page scaffold (`/about`) with basic content

### Fixed
- Home hero text swap no longer shifts layout (`inline-block` + `min-width: 9ch`)

## [2025-09-21]
### Added
- Initial Vite + React scaffold
- Home hero with “Welcome/Bienvenue” swap (`useState` + `useEffect`)
- Basic header with placeholder links

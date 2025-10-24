# Diamond Dynasty Lite - Sports Card Collection Game

A modern sports card collection game mode prototype built with Next.js 16, featuring player card management, pack opening mechanics, progression systems, and comprehensive analytics.

## 🎮 Overview

Diamond Dynasty Lite is a prototype implementation of a sports game mode focused on card collection mechanics similar to Ultimate Team modes found in popular sports games. Players can collect football player cards, open packs, track their progression, and analyze their gameplay statistics through an intuitive web interface.

## ✨ Features

### 🎴 Card Collection System
- **Dynamic Player Cards** with rarity tiers (Common, Uncommon, Rare, Epic, Legendary)
- Player stats including speed, power, defense, and stamina
- Overall ratings from 65-99+ based on rarity
- Visual card representation with team logos and player images
- Card browsing and management interface

### 📦 Pack Opening Mechanics
- **Multiple Pack Types:**
  - **Starter Pack**: 5 random cards (500 coins)
  - **Premium Pack**: 5 cards with guaranteed Rare+ (1,500 coins)
  - **Elite Pack**: 7 cards with guaranteed Epic+ (100 gems)
- Animated pack opening experience with reveal mechanics
- Rarity-based odds system:
  - Common: 50% drop rate
  - Uncommon: 30% drop rate
  - Rare: 15% drop rate
  - Epic: 4% drop rate
  - Legendary: 1% drop rate

### 📈 Progression System
- **Player Leveling**: XP-based progression with 20+ levels
- **Daily Tasks**: Complete objectives for rewards
- **Achievements System**: Track milestones and unlock bonuses
- **Level Rewards**: Unlock packs, coins, and exclusive cards
- Dynamic XP curve balancing

### 🎓 Onboarding Experience
- **Interactive Tutorial**: 4-step guided onboarding flow
- Learn about card rarities and game mechanics
- Understand the reward system and progression
- Free starter pack for new players
- Skip option for returning users

### 📊 Analytics Dashboard
- **Real-time Telemetry**: Track player engagement and behavior
- **Multiple Analytics Views:**
  - **Engagement Metrics**: Session length, daily active users
  - **Retention Analysis**: Day 1, Day 7, Day 30 retention curves
  - **Economy Tracking**: Pack openings, coin flow, rarity distribution
  - **Onboarding Funnel**: Tutorial completion rates and drop-off points
- Interactive charts with Recharts integration
- KPI monitoring with targets and comparisons

### 🎨 Modern UI/UX
- Responsive design for desktop and mobile devices
- Dark mode support with next-themes
- Smooth animations and transitions
- Radix UI components for accessibility
- Tailwind CSS for styling

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.0.0**: React framework with App Router
- **React 19.2.0**: Latest React with Server Components
- **TypeScript 5**: Type-safe development

### UI Components & Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS 4.1.9**: Utility-first CSS framework
- **Lucide React**: Beautiful icon set
- **class-variance-authority**: Component variants management
- **tailwindcss-animate**: Animation utilities

### Data Visualization
- **Recharts**: Composable charting library
- Bar charts, line charts, and pie charts for analytics

### Form Management
- **React Hook Form 7.60.0**: Performant form handling
- **Zod 3.25.76**: Schema validation
- **@hookform/resolvers**: Form validation integration

### Additional Features
- **next-themes**: Dark mode support
- **Vercel Analytics**: Performance monitoring
- **date-fns**: Date manipulation
- **embla-carousel-react**: Touch-friendly carousels
- **sonner**: Toast notifications

## 📁 Project Structure

```
Sports-Game-Mode-Prototype/
├── app/                          # Next.js App Router pages
│   ├── analytics/               # Analytics dashboard page
│   ├── onboarding/              # Tutorial/onboarding flow
│   ├── packs/                   # Pack store and opening pages
│   │   └── open/[id]/          # Dynamic pack opening route
│   ├── progression/            # Player progression dashboard
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Home page (card collection)
│
├── components/                  # React components
│   ├── ui/                     # Shadcn/ui component library
│   ├── analytics-dashboard.tsx # Analytics visualizations
│   ├── card-collection.tsx     # Card grid display
│   ├── navigation.tsx          # Main navigation bar
│   ├── onboarding-flow.tsx     # Tutorial component
│   ├── pack-opening.tsx        # Pack opening experience
│   ├── player-header.tsx       # Player stats header
│   ├── progression-dashboard.tsx # Progression tracking
│   └── theme-provider.tsx      # Theme management
│
├── lib/                        # Utility libraries
│   ├── mock-data.ts           # Mock player and pack data
│   ├── types.ts               # TypeScript type definitions
│   └── utils.ts               # Helper functions
│
├── public/                     # Static assets
│   ├── football-player-*.jpg  # Player images
│   ├── placeholder.svg        # Placeholder images
│   └── player-avatar.png      # User avatar
│
├── styles/                     # Additional stylesheets
├── components.json             # Shadcn/ui configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/johaankjis/Sports-Game-Mode-Prototype.git
   cd Sports-Game-Mode-Prototype
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎯 Usage

### Navigation
The app features five main sections accessible from the navigation bar:

1. **Collection** (`/`) - View and manage your player cards
2. **Packs** (`/packs`) - Browse and open card packs
3. **Progression** (`/progression`) - Track XP, levels, and achievements
4. **Analytics** (`/analytics`) - View engagement and economy metrics
5. **Tutorial** (`/onboarding`) - Access the onboarding flow

### Opening Packs
1. Navigate to the Packs section
2. Select a pack type based on your available currency
3. Click "Open Pack" to start the animation
4. Reveal cards one by one or skip to view all
5. Cards are automatically added to your collection

### Progression & Rewards
- Earn XP by completing daily tasks and playing games
- Level up to unlock milestone rewards
- Complete achievements for bonus coins and packs
- Track your stats in the progression dashboard

### Analytics Dashboard
- Monitor player engagement metrics
- Analyze retention curves and drop-off points
- Review economy balance and rarity distribution
- Optimize onboarding funnel completion rates

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Create production build
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint for code quality

### Key Configuration Files

- **next.config.mjs**: TypeScript build errors ignored for rapid prototyping
- **tsconfig.json**: TypeScript configuration with path aliases (`@/*`)
- **components.json**: Shadcn/ui component configuration
- **tailwind.config.js**: Tailwind CSS customization

### Type Definitions

Core types are defined in `lib/types.ts`:
- `PlayerCard`: Card data structure
- `Pack`: Pack configuration
- `CardRarity`: Rarity levels
- `PlayerProgress`: XP and leveling
- `PlayerStats`: Player statistics

## 🎨 Design System

### Color Scheme
The app uses CSS custom properties for theming:
- Primary colors for CTAs and emphasis
- Muted colors for backgrounds and borders
- Rarity-specific colors for card tiers
- Semantic colors for success/error states

### Component Library
Built with Radix UI primitives:
- Buttons, Cards, Badges
- Dialogs, Popovers, Tooltips
- Tabs, Accordions, Collapsibles
- Progress bars, Sliders
- Form controls (Input, Select, Checkbox)

## 📊 Mock Data

The prototype uses mock data generators in `lib/mock-data.ts`:
- Procedurally generated player names and stats
- Configurable rarity odds and drop rates
- XP curve for leveling (20 levels)
- Predefined pack configurations

## 🔮 Future Enhancements

Potential features for future iterations:
- [ ] Multiplayer head-to-head matches
- [ ] Team building with lineup constraints
- [ ] Trading and marketplace system
- [ ] Seasonal content and limited cards
- [ ] Backend integration with real data persistence
- [ ] Social features (leaderboards, friends)
- [ ] Advanced deck building strategies
- [ ] Live events and tournaments

## 📝 License

This is a prototype project for demonstration purposes.

## 🤝 Contributing

This is a prototype project. Feel free to fork and experiment with your own variations!

## 📧 Contact

For questions or feedback, please open an issue on the GitHub repository.

---

**Built with ❤️ using Next.js and modern web technologies**

<<<<<<< HEAD
# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with React, TypeScript, and Tailwind CSS. Features sound effects, score tracking, winning line highlighting, and a responsive design that works on all devices.

![Tic Tac Toe Game](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Tic+Tac+Toe+Game)

## ✨ Features

- **Classic Gameplay**: Traditional 3x3 Tic Tac Toe with X and O players
- **Sound Effects**: Audio feedback for moves, wins, and draws
- **Score Tracking**: Keeps track of wins, losses, and draws
- **Winning Line Highlighting**: Visual indication of winning combinations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, accessible interface using Shadcn UI components
- **TypeScript**: Fully typed for better development experience
- **Fast Development**: Built with Vite for lightning-fast hot reloading

## 🚀 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: React hooks (useState, useEffect)
- **Icons**: Lucide React
- **Audio**: Web Audio API for sound effects

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun** package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tic-tac-toe
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to see the game in action!

## 🎮 How to Play

1. **Start Playing**: The game begins with player X. Click on any empty cell to make your move.

2. **Take Turns**: Players alternate turns, with X going first.

3. **Win Condition**: Get three of your symbols in a row (horizontally, vertically, or diagonally) to win.

4. **Draw**: If all cells are filled without a winner, it's a draw.

5. **New Game**: Click "New Game" to start a fresh round while keeping scores.

6. **Reset Scores**: Click "Reset Scores" to clear all statistics and start over.

## 📁 Project Structure

```
tic-tac-toe/
├── public/
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── game/
│   │   │   ├── GameBoard.tsx      # Main game grid component
│   │   │   ├── GameCell.tsx       # Individual cell component
│   │   │   ├── GameControls.tsx   # New game and reset buttons
│   │   │   ├── GameStatus.tsx     # Current game status display
│   │   │   ├── ScoreBoard.tsx     # Score tracking component
│   │   │   └── WinningLine.tsx     # Winning line animation
│   │   └── ui/                    # Shadcn UI components
│   ├── hooks/
│   │   ├── useSoundEffects.ts     # Audio effects management
│   │   └── useTicTacToe.ts        # Game logic and state
│   ├── pages/
│   │   ├── Index.tsx              # Main game page
│   │   └── NotFound.tsx           # 404 error page
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # App entry point
│   └── index.css                  # Global styles
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## 🎵 Sound Effects

The game includes three distinct sound effects:

- **Move Sound**: Plays when a player makes a valid move
- **Win Sound**: Celebratory sound when a player wins
- **Draw Sound**: Neutral sound when the game ends in a draw

## 🎨 Customization

### Themes

The game uses CSS custom properties for theming. You can customize colors by modifying the CSS variables in `src/index.css`.

### Sound Effects

Replace the audio files in the `public/` directory to customize sound effects.

### Game Logic

Modify `src/hooks/useTicTacToe.ts` to change game rules or add new features.

## 📱 Responsive Design

The game is fully responsive and works on:

- **Desktop**: Full feature set with optimal layout
- **Tablet**: Adapted touch controls and spacing
- **Mobile**: Optimized for small screens with touch-friendly buttons

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Shadcn/ui](https://ui.shadcn.com/) for the UI components
- Icons from [Lucide React](https://lucide.dev/)
- Inspired by classic Tic Tac Toe games

---

**Enjoy playing Tic Tac Toe! 🎉**
=======
# Classic_Tic_Tac_Toe
>>>>>>> 49abbed80a6f86f9e8c722c89a2ff2e9a5f2e988

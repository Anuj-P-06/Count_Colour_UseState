# Counter and Color App

A simple and elegant React application featuring two interactive components: a counter and a random color generator. Built with React hooks and styled with Tailwind CSS in a beautiful teal color scheme.

## Features

###  Counter Component
- Increment count with +1 button
- Decrement count with -1 button
- Clean, centered display of current count
- Smooth hover effects on buttons

###  Color Generator Component  
- Generate random hex colors with a single click
- Visual color preview with rounded corners
- Display hex color code
- Instant color updates

## Screenshot
<img width="1919" height="913" alt="Image" src="https://github.com/user-attachments/assets/bf1186a0-da59-4efe-905d-c781cdc30086" />

## Technologies Used

- **React ** - Frontend framework
- **React Hooks** - useState for state management
- **Tailwind CSS** - CSS framework
- **Vite** - Build tool 

## Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Global styles
├── components/
│   ├── Counter.jsx      # Counter component
│   └── Color.jsx        # Color generator component
└── ...
```

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd counter-color-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## Components

### Counter Component (`components/Counter.jsx`)
- **State**: `count` (number, initial value: 0)
- **Functions**:
  - `handleIncr()` - Increments count by 1
  - `handleDecr()` - Decrements count by 1
- **Styling**: Teal-themed with shadow effects and rounded corners

### Color Component (`components/Color.jsx`)
- **State**: `color` (string, initial value: "#3498db")
- **Functions**:
  - `getRandomColor()` - Generates random 6-digit hex color
  - `handleClick()` - Updates color state with new random color
- **Styling**: Matches counter component with color preview area

## Color Scheme

The app uses a consistent teal color palette:
- **Primary**: `teal-600` (#0891b2)
- **Background**: `teal-200` (#99f6e4)
- **Text**: Various teal shades for contrast
- **Hover Effects**: `teal-500` (#14b8a6)

## Responsive Design

- Flexbox layout for proper alignment
- Components are sized consistently (52x52 Tailwind units)
- Mobile-friendly responsive design
- Clean, modern UI with shadows and borders

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with React and Tailwind CSS
- Inspired by simple, clean UI design principles
- Perfect for learning React hooks and component composition

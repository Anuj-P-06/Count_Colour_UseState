
import './App.css'
import Color from './Components/Color'
import Counter from './components/Counter'

function App() {

  return (
    
<div class="flex flex-col items-center justify-center min-h-screen bg-teal-200">
  <h1 class="text-4xl font-bold mb-8 text-teal-600 shadow-2xl border-4 border-teal-600 rounded-xl p-2">
    Counter and Color App
  </h1>

  <div class="flex flex-row gap-8">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl font-semibold text-teal-600 mb-2">
        Counter
      </h2>
      <Counter />
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-2xl font-semibold text-teal-600 mb-2">
        Color Randomizer
      </h2>
      <Color />
    </div>
  </div>
</div>


  )
}

export default App

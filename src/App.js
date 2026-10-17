import './App.css';
import PlayerChart from "./components/PlayerChart";
import { mockPlayerStats } from "./mockPlayerStats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          遊戲戰情儀表板 <code>(非真實資料，僅作為 React 學習用途。)</code>
        </p>
      </header>
      <PlayerChart data={mockPlayerStats} />
    </div>
  );
}

export default App;

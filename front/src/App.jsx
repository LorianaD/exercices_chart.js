import LineChart from "./assets/components/LineChart";
import PieChart from "./assets/components/PieChart";
import BarChart from "./assets/components/BarChart";

function App() {
  return (
    <>
      <h1>Mes Graphiques</h1>

      <div style={{ width: "600px" }}>
        <LineChart />
      </div>

      <div style={{ width: "400px", marginTop: "40px" }}>
        < PieChart />
      </div>
      <div style={{ width: "400px", marginTop: "40px" }}>
        <BarChart />
      </div>
    </>
  );
}

export default App;
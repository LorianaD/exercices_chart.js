import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import BarChart from "./Charts/BarChart";

function Home() {
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

export default Home;
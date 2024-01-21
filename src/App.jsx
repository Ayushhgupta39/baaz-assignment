import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen font-poppins">
      <div className="w-1/5">
        <Sidebar /> Hello world
      </div>
      <div className="w-4/5">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

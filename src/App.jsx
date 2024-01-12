import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen font-roboto">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

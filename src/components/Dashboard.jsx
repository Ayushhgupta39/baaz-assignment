import AddBatch from "./dashboard/AddBatch"
import DashboardNav from "./dashboard/DashboardNav"


function Dashboard() {
  return (
    <div className="flex flex-col">
      <div>
        <DashboardNav />
      </div>
      <div>
        <AddBatch />
      </div>
    </div>
  )
}

export default Dashboard
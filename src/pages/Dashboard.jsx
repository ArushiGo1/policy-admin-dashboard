import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

function Dashboard() {
    const statsData = [
  { id: 1, title: "Active Policies", value: 128 },
  { id: 2, title: "Expiring Soon", value: 12 },
  { id: 3, title: "Pending Validation", value: 8 },
  { id: 4, title: "Expired", value: 5 },
];
    return (
        <div>
            <Sidebar />
        
        <div>
            <Header />
            
            <div>Main Content</div>
            {statsData.map((stats) =>(
                <StatCard key ={stats.id} title={stats.title} value = {stats.value}/>
            ))}
        </div>

        </div>
    );
}

export default Dashboard;
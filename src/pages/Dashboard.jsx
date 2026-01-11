import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    return (
        <div>
            <Sidebar />
        
        <div>
            <Header />
            
            <div>Main Content</div>
        </div>
        </div>
    );
}

export default Dashboard;
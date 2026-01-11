import MenuItem from "./MenuItem";

function Sidebar() {
    const menuItems =[
        {id :1, name:"Dashboard"},
        {id :2, name:"Policies"},
        {id:3,name:"Users"},
        {id:4, name :"Reports"}
    ]
    return <div>
        <h2>Admin Panel</h2>
        <ul>
            {
                menuItems.map((item)=>(
                    <MenuItem key={item.id} name ={item.name}/>
                ))
            }
        </ul>
    </div>
}
export default Sidebar;
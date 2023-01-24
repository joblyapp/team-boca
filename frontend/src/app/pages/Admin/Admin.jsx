import {useState} from 'react'
import { useParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/sidebar/Sidebar';
import Suggestion from '../../components/Suggestion/Suggestion';
import "./Admin.css";
const Admin = () => {
    const [tab, setTab] = useState(true);
  return (
    <div className="admin">
        <Sidebar/>
        <div className="admin-container">
            <div className="admin-feed">
                <div className="admin-title">
                    <h1>Panel de Administración</h1>
                </div>
                <div className="admin-content">
                    <div className="tabs">
                        <button className={`tab ${tab ? "active" : ""}`} onClick={()=>setTab(true)}>Mis posts</button>
                        <button className={`tab ${!tab ? "active" : ""}`} onClick={()=>setTab(false)}>Posts de usuarios</button>
                    </div>

                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
            <div>
                <Suggestion/>
            </div>
        </div>
    </div>
  )
}

export default Admin
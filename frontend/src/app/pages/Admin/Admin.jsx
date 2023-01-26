import {useState} from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/sidebar/Sidebar';
import Suggestion from '../../components/Suggestion/Suggestion';
import Tabs from '../../components/Tabs/Tabs';
import "./Admin.css";
const Admin = () => {
    const [tab, setTab] = useState(true);
  return (
    <div className="admin">
        <div className="admin-sidebar">
            <Sidebar/>
        </div>
        <div className="admin-container">
            <div className="admin-feed">
                <Menu nombre="Panel administrador"/>
                <Tabs tab1="Mis posts" tab2="Posts de usuarios"/>
                <div className="admin-content">
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
            <div className="admin-suggestion">
                <Suggestion/>
            </div>
        </div>
    </div>
  )
}

export default Admin
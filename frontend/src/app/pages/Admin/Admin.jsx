import React from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Suggestion from '../../components/Suggestion/Suggestion';
import "./Admin.css";
const Admin = () => {
  return (
    <div className="admin">
        <Sidebar/>
        <div className="admin-container">
            <div className="admin-feed">
                <div className="title">
                    <h1>Panel de Administración</h1>
                </div>
                <div className="admin-content">
                    <div className="tabs">
                        <button className="tab active">Mis posts</button>
                        <button className="tab">Posts de usuarios</button>
                    </div>
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
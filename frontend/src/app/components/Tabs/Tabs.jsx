import {useState} from 'react'
import "./Tabs.css"
const Tabs = ({tab1, tab2}) => {
    const [tab, setTab] = useState(true);
  return (
    <div className="tabs">
        <button className={`tab ${tab ? "active-tab" : ""}`} onClick={()=>setTab(true)}>{tab1}</button>
        <button className={`tab ${!tab ? "active-tab" : ""}`} onClick={()=>setTab(false)}>{tab2}</button>
    </div>
  )
}

export default Tabs
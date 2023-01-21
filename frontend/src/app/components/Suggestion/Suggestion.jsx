import React from 'react'
import "./Suggestion.css"
const Suggestion = () => {
  return (
    <div className="suggestion-search">
        <form>
            <input type="text" className="search-bar" name="search" placeholder="Buscar..."/>
        </form>
        <div className="recomended">
            <h1>Recomendados</h1>
            <div className="users">
              <div className="user"></div>
              <div className="user"></div>
              <div className="user"></div>
            </div>
        </div>
    </div>
  )
}

export default Suggestion
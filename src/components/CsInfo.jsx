import React from "react";
// import { BrowserRouter as Route, Link } from 'react-router-dom';
// import Leaderboard from "../pages/Leaderboard";


function CsInfo ({isOpen,closeModal}) {
 


  function handleClick() {
    window.location.href = '/Leaderboard.jsx';
 
  }
  return (
    <>
   
    {isOpen&&
      
    <div className="modal-overlay">
      <div className="modal">
        <div className="details">
         <h2>Game: CS.GO</h2>
        <h2>Team Size: 5</h2>
        </div>

    
          <div className="input-content">
           
            <div className="input-container">
              <input type="text" placeholder="Enter your Steam Link" value={''} onChange={''} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Enter you nickname for the tournament" value={''} onChange={''} />
            </div>
            <button className="submit" onClick={handleClick}>
         
            {/* <Link  to="/leaderboard"> */}
               Submit
              
            {/* </Link> */}
            
    
            </button>
            </div>
         
        <p>Get ready for the ultimate CS:GO online tournament! Join players from around the world for an epic battle and a chance to win amazing prizes. Register now to secure your spot in the competition. Don't miss out on the action </p>
    
        <button className="close-btn" onClick={closeModal}> Close</button>
        
         
        
      </div>
    </div>
    }
    </>
  );
}

export default CsInfo;
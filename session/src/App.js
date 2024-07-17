import React from 'react';
import useSession from './UseSession';
function App(){
  const{session,saveSession,clearSession}=useSession(60000);
  const handleLogin=()=>{
    const sessionData={user:'John Doe', token:'abc123'};
    saveSession(sessionData);
  };
  const handleLogout=()=>{
    clearSession();
  };
  return(
    <div>
      <h1>Session Management in React</h1>
      {session?(
        <div>
          <p>Welcome,{session.user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ):(
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
export default App;
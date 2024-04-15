import { useState, useEffect } from 'react';
import { ChatEngine, ChatFeed } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import { UserOutlined } from '@ant-design/icons';

const projectID = 'fb4437b8-6172-40c9-b248-4901c6aef31c';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the username is stored in local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    window.location.reload();
  };

  if (!loggedIn) return <LoginForm onLogin={() => setLoggedIn(true)} />;

  return (
    <div style={{ height: '100vh', fontFamily: 'Avenir' }}>
      <div className="nav-bar">
        <div className="logo-tab">React Chat App</div>

        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
        <div className="profile-section">
          <UserOutlined /> Profile
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;

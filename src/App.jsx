import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
      userName="alan"
      userSecret="123"
    />
  );
}

export default App;

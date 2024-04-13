import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
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

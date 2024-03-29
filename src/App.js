import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine 
            height="100vh"
            projectID="b610ff7c-1609-44ab-bb04-58c5090214ec"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
};

export default App;
import Welcome from './components/Welcome';
import Universities from './components/Universities';

const App = () => {
    const fullName = localStorage.getItem('fullName');
    if (fullName) {
        return <Universities />;
    }
    return <Welcome />;
};

export default App;

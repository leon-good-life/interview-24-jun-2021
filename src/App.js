import React from 'react';
import Welcome from './components/Welcome';
import Universities from './components/Universities';

const App = () => {
    const [fullName, setFullName] = React.useState(null);

    const initRoute = () => {
        const fullNameFromLS = localStorage.getItem('fullName');
        if (fullNameFromLS) {
            setFullName(fullNameFromLS);
        }
    };
    React.useEffect(() => {
        initRoute();
    }, []);

    if (fullName) {
        return <Universities />;
    }
    return <Welcome changeRoute={initRoute} />;
};

export default App;

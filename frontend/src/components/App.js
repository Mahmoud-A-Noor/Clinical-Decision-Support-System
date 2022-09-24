import React from 'react';
import { createRoot }  from 'react-dom/client';
import PageNavigator from './PageNavigator';

export default function App(){
    
        return (
            <div>
                <PageNavigator />
            </div>
        );
}

const appDiv = createRoot(document.getElementById('app'));
appDiv.render(<App />);
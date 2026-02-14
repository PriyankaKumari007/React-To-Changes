import React from 'react';
import ReactDOM from 'react-dom/client';

{/* <div >
    <div>
        <h1>Hello World div1</h1>
    </div>
    <div>
        <h2>Hello Div2</h2>
        <h2></h2>
    </div>
</div> */}

const heading = React.createElement('div', { id: 'parent' }, [
    React.createElement(
        'div',
        { id: 'child1', key: 'child1' },   // ✅ added key
        React.createElement('h1', { id: 'h1' }, 'Hello World div1')
    ),
    React.createElement(
        'div',
        { id: 'child2', key: 'child2' },   // ✅ added key
        [
            React.createElement('h2', { id: 'h2', key: 'h2' }, 'Hello Div2'),
            React.createElement('h2', { id: 'h3', key: 'h3' }, 'Hello Div3')
        ]
    )
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

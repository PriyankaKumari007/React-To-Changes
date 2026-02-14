{/* <div >
    <div>
        <h1>Hello World div1</h1>
    </div>
    <div>
        <h2>Hello Div2</h2>
        <h2></h2>
    </div>
</div> */}

const heading = React.createElement('div', {id: 'parent'}, [
    React.createElement('div',{id:'child1'}, 
    React.createElement('h1', {}, 'Hello World div1')),
    React.createElement('div',{id:'child2'},
    React.createElement('h2', {}, 'Hello Div2'),
    React.createElement('h2', {}, 'Hello Div3')),
   
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
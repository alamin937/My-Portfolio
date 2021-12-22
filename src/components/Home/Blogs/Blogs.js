import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs'>
            <h1 style={{ color: 'white', marginTop: '40px', textAlign: 'center' }}>BLOGS</h1>
            <p style={{ color: 'white', width:'80%', margin:'0 auto', textAlign:'justify' }}>
                <p>
                   <span style={{fontSize:'20px'}}> Props</span> : props is mainly used for we can pass the data from one component to another component then we can use props and catch data then use this data. React component data flow unidirectional. Data can flow from parent component to child component.
                </p>

                <p>
                <span style={{fontSize:'20px'}}> JSX</span> : jsx is a javascript xml. It is used to directly write the html in react. It is easy to create and use the template and write the html in react. Jsx is faster than normal javascript. Jsx uses and easily converts the html tags in react.
                </p>

                <p>
                <span style={{fontSize:'20px'}}> Hooks</span> : we use different types of hooks in our react app. Hooks are mainly used for a functional component. Now we are know useState and useEffect hooks

                    If we are change the any state of our component then use the useState hooks. useState hooks provides two variable examples: number and setNumber. setNumber is a function. And it updates the value. useState hooks import the react app. useState hooks we can use the initial value and setName function to catch the value inside the setName function and then use the button and set the onclick and name variable use then click the button state change on time. Example

                    {/* const [name, setName] = useState('anik')

<h1>my name is {name}

<Button type='submit' onClick={() => setName("al amin")} */}

                    and also know the useEffect hooks. We can use the useEffect is fetch the api in our website and useEffect gives us data then this data set the useState variable and api data we can use the anywhere of our components.
                </p>

                <p>
                <span style={{fontSize:'20px'}}>Context Api</span> :  context api mainly use if fetch the api and use the data component to other component then use props and send the data parent component to child component this is called props drilling. We can't use the data component directly . This is a very big problem. Overcome this problem we can use context api if use this custom hooks we can directly uses the data in component. Create context gives us a provider this provider wrap the root component.
                </p>

                <p>
                    <p>Now we discuss about difference between real dom and virtual dom.</p>

                   <p> <span style={{fontSize:'20px'}}>Real Dom</span>: </p>
                    *Its update slow
                   * Html update directly
                   * Dom manipulation is very expensive
                    *Memory wastage

                   <p> <span style={{fontSize:'20px'}}>Virtual Dom</span>: </p>
                  *  Its update fast
                   * Html can't update directly
                   * Dom manipulation is easy
                   * Not memory wastage
                </p>
            </p>
        </div>
    );
};

export default Blogs;
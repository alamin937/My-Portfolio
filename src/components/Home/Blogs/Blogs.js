import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs'>
            <h1 style={{ color: 'white', marginTop: '40px', textAlign: 'center' }}>BLOGS</h1>
            <p style={{ color: 'white', width: '80%', margin: '0 auto', textAlign: 'justify' }}>
                <h2 style={{ color: 'white' }}>React</h2>
                <p>
                    <span style={{ fontSize: '20px' }}> Props</span> : props is mainly used for we can pass the data from one component to another component then we can use props and catch data then use this data. React component data flow unidirectional. Data can flow from parent component to child component.
                </p>

                <p>
                    <span style={{ fontSize: '20px' }}> JSX</span> : jsx is a javascript xml. It is used to directly write the html in react. It is easy to create and use the template and write the html in react. Jsx is faster than normal javascript. Jsx uses and easily converts the html tags in react.
                </p>

                <p>
                    <span style={{ fontSize: '20px' }}> Hooks</span> : we use different types of hooks in our react app. Hooks are mainly used for a functional component. Now we are know useState and useEffect hooks

                    If we are change the any state of our component then use the useState hooks. useState hooks provides two variable examples: number and setNumber. setNumber is a function. And it updates the value. useState hooks import the react app. useState hooks we can use the initial value and setName function to catch the value inside the setName function and then use the button and set the onclick and name variable use then click the button state change on time. Example

                    {/* const [name, setName] = useState('anik')

<h1>my name is {name}

<Button type='submit' onClick={() => setName("al amin")} */}

                    and also know the useEffect hooks. We can use the useEffect is fetch the api in our website and useEffect gives us data then this data set the useState variable and api data we can use the anywhere of our components.
                </p>

                <p>
                    <span style={{ fontSize: '20px' }}>Context Api</span> :  context api mainly use if fetch the api and use the data component to other component then use props and send the data parent component to child component this is called props drilling. We can't use the data component directly . This is a very big problem. Overcome this problem we can use context api if use this custom hooks we can directly uses the data in component. Create context gives us a provider this provider wrap the root component.
                </p>

                <p>
                    <p>Now we discuss about difference between real dom and virtual dom.</p>

                    <p> <span style={{ fontSize: '20px' }}>Real Dom</span>: </p>
                    *Its update slow
                    * Html update directly
                    * Dom manipulation is very expensive
                    *Memory wastage

                    <p> <span style={{ fontSize: '20px' }}>Virtual Dom</span>: </p>
                    *  Its update fast
                    * Html can't update directly
                    * Dom manipulation is easy
                    * Not memory wastage
                </p>
                <h2 style={{ color: 'white' }}>MongoDB</h2>
                <p>
                    <p>
                    Mongodb: mongodb is no-sql database. It is used to store the data in database. It is a collection of documents. Mongodb gives a default key in data.
                    </p>

                    <p>Crud operation: Crud full meaning create, read, update and delete.</p>

                   <p> Create or insert document means it is created a new document and added to the database. If you save the input filed value in database then use the post method and take the input field value and save the data in the database. First we write the server the post method then create the client site and use the operation and fetch the data and use the post method to save the data in the database.
                    collection.interstOne()
                    collection.insertMany()</p>

                    <p>
                    Read method means we are get the all data in database and this data use the website. First we are create the get method in server then we are get all the information that we are insert or save the data in the database. Get method or find method just use the server side. Not just all the information gate and find the database we are find specific id number data or specific email's data we are find all the data or find the specific data this is the read operation
                    collection.findOne()
                    collection.findMany()
                    </p>

                   <p>
                   Update operation means we are modify or update the data again. Update operation target the single data specific collection. If we are insert a document and data save the database after we are thinking saved data we are change or modified the data then use the update method and edit the saved collection and save the data and change the previous data and saved the edit the data. If we are update the data we are use the PUT method in server side and client side both. And we can set the role in admin panel we are saved the registration information and set the role and set the role admin in saved user.
                    collection.updateOne()
                    collection.updateMany()
                    collection.replaceOne()
                   </p>

                  <p>
                  Delete method use we can delete the collection of data in database. We can delete one data or many data. If we are delete the specific data in database then use the delete method server side and client side first filter the specific data using id fiter. Then use the delete operation. if we delete the data set the button and set onclick the button and assign the specific id the button.
                    collection.deleteOne()
                    collection.deleteMany()
                  </p>

                    <p>Now we are discuss the difference between sql and no-sql</p>
                    <p>SQL</p>
                    * Relational database
                    * Vertically scalable
                    * Fixed schema
                    * Use different types of queries
                    <p>No-sql</p>
                    * Distribute database
                    * Horizontally scalable
                    * Dynamic schema
                    * Don’t use queries

                </p>
            </p>
        </div>
    );
};

export default Blogs;
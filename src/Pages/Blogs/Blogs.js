import React from "react";


const Blogs = () => {
    return (
       
            <div className="container mx-auto p-10 ml-24">
                <div className="  mt-5 items-center">
                    <h4 className="text-start text-2xl">
                        Difference between javascript and nodejs?
                    </h4>
                    <p className="text-justify">
                        <b>Javascript:</b> <br />
                        1. A programming language is JavaScript. It works in any browser
                        that has a suitable browser engine. <br /> 2. Generally used for any
                        client-side activity in a web application, such as possible
                        attribute validation or refreshing the page at a set interval, or
                        providing some dynamic changes in web pages without refreshing the
                        page. <br />
                        3. JavaScript running any engine like Spider monkey (FireFox),
                        JavaScript Core (Safari), V8 (Google Chrome).
                        <br /> <br />
                        <b>Nodejs: </b> <br />
                        1. It's a JavaScript interpreter and environment with some important
                        libraries that JavaScript developers can use individually.
                        <br />
                        2. It is primarily used for accessing or conducting any non-blocking
                        operating system operation, such as writing or executing a shell
                        script, getting hardware-specific information, or running any
                        backend job.
                        <br />
                        3. Node JS only run in a V8 engine which mainly used by google
                        chrome. And javascript program which will be written under this Node
                        JS will be always run in V8 Engine.
                    </p>
                    <h4 className="text-start mt-5">
                        When should you use nodejs and when should you use mongodb?
                    </h4>
                    <p className="text-start py-2">
                        <b>Use Nodejs:</b> <br />
                        Any project requires a programming environment and a runtime library
                        that can build and/or interpret your code and provides basic
                        programming tools and support. Nodejs is a Javascript programming
                        language tool. Other languages with similar tools include Python,
                        Java, PHP, C#, C++, Go, and others. So, if you want to develop a
                        Javascript standalone program or server, you can utilize nodejs.
                        <br /> <br />
                        <b>Use mongodb:</b> <br />
                        If your application requires the capacity to save data so that it
                        can be efficiently queried or updated later, you'll almost certainly
                        need to use a database. There are numerous well-known databases. One
                        such database is MongoDB. Other databases include MariaDB, MySql,
                        CouchDB, DynamoDB (on AWS), and Postgres. Distinct databases have
                        different strengths (things they excel at) and separate methods of
                        being used, therefore picking the right/best database for your needs
                        is a completely different topic.
                    </p>
                    <h4 className="text-start mt-5">
                        What other services does firebase provide other than authentication?
                    </h4>
                    <p className="text-start py-3">
                        1. Relational databases are SQL, while non-relational databases are
                        NoSQL. <br />
                        2. SQL databases have a specified schema and use structured query
                        language. For unstructured data, NoSQL databases use dynamic
                        schemas. Remote Config <br />
                        3. SQL databases scale vertically, but NoSQL databases scale
                        horizontally.
                        <br />
                        4. NoSQL databases are document, key-value, graph, or wide-column
                        stores, whereas SQL databases are table-based.
                        <br />
                        5. SQL databases excel in multi-row transactions, while NoSQL excels
                        at unstructured data like documents and JSON.
                    </p>
                </div>
            </div>
       
    );
};

export default Blogs;
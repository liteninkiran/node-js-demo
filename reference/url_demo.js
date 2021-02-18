
    const url = require('url');

    const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

    // Serialised URL
    console.log(myUrl.href);

    // Host (root domain)
    console.log(myUrl.host);

    // Host name (root domain - no port)
    console.log(myUrl.hostname);

    // Path name
    console.log(myUrl.pathname);

    // Serialised query
    console.log(myUrl.search);

    // Parameter object
    console.log(myUrl.searchParams);

    // Add parameter
    myUrl.searchParams.append('abc', '123');

    // Parameter object
    console.log(myUrl.searchParams);

    // Loop through parameters
    myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));








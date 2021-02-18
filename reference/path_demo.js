
    const path = require('path');

    var filePath = __filename;
    var fileName = path.basename(filePath);
    var directory = path.dirname(filePath);
    var fileExtn = path.extname(fileName);

    // Write a blank line
    console.log();

    // Full file path
    console.log('File path: ' + filePath);

    // Base file name
    console.log('File name: ' + fileName);

    // File extension
    console.log('File extension: ' + fileExtn);

    // Directory name
    console.log('Directory: ' + directory);

    // Create object
    console.log(path.parse(filePath));

    // Concatenate path
    console.log('Concatenate (JOIN): ' + path.join(directory, 'test', 'hello.html'));

    // Write a blank line
    console.log();


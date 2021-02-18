
    const os = require('os');

    // Write a blank line
    console.log();

    // Platform
    console.log('Platform: ' + os.platform());

    // Arch
    console.log('Arch: ' + os.arch());

    // Core info
    //console.log(os.cpus());

    // Free memory
    console.log('Free memory: ' + os.freemem());

    // Total memory
    console.log('Total memory: ' + os.totalmem());

    // Home directory
    console.log('Home directory: ' + os.homedir());

    // Uptime
    console.log('Uptime: ' + os.uptime() + ' seconds');

    // Write a blank line
    console.log();

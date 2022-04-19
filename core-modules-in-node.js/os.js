//os provides information about the operating system.

const os = require('os');

console.log(os.platform()); //it returns the platform of os (win32)here
console.log(os.homedir()); //it returns the home directory of os
console.log(os.freemem()); //it returns the available free memory of os.(returns in bytes)
console.log(os.cpus()); //it returns the infornation about CPU core of os
console.log(os.hostname());//it returns the host name of os
console.log(os.version()); //it returns the version of os


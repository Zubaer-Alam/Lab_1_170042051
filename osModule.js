//OS module is a Global Module
const os = require('os');

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  upTime: os.uptime(),
};

console.log(currentOS);

//further can be learned through the documentation

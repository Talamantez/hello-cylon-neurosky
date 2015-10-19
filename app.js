var Cylon = require('cylon');

Cylon.robot({
 
  connections: {
    neurosky: { 
	adaptor: 'neurosky', 
	port: '/dev/rfcomm0'
    }
  },

  devices: {
    headset: { 
	driver: 'neurosky' 
    }
  },

  work: function(my) {
  	my.headset.on('packet', function(){
  		console.log('packet received');
  	});
  }

}).start();

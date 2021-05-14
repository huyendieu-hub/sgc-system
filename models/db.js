const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SgcSystem', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded!');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});

require('./account.model');
require('./user.model');
require('./waste_box.model');
require('./waste_type.model');
require('./waste_information.model');
require('./collectionMember.model');
require('./collection_order.model');
require('./points.model');
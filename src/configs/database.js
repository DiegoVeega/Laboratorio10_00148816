const mongose = require('mongoose');
const {mongoose} = require('./keys');

mongoose.connect(mongodb.URI, {
    useNewUriParser: true,
    useCreateIndex: true
})
.then(db=>console.log('connection success!'))
.catch(err=>console.log(err));
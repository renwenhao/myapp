const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/boss';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log('mongo connect success');
});

const models = {
    'user':{
        'username':{'type':String,require:true},
        'password':{'type':String,require:true},
        'value':{'type':String,require:true},
        'avatar':{'type':String},
        'desc':{'type':String},
        'title':{'type':String},
        'compony':{'type':String},
        'price':{'type':String}
    },
    chat:{

    }
}

for(let model in models){
    mongoose.model(model,new mongoose.Schema(models[model]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
} 
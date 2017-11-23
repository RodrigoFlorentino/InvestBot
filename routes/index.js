/*
 * GET home page.
 */
module.exports = {
    index : function(req,res){
        res.render('index.html');
    },
    chat : function(req,res){
        res.render('chat.html');
    },
    discovery : function(req,res){
        res.render('discovery.html');
    },
    nlu : function(req,res){
        res.render('nlu.html');
    },
    textToSpeech : function(req,res){
        res.render('sound.html');
    },
    user : function(req,res){
        res.render('user.html');
    }
}
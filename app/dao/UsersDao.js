/**
 * Created by Njara on 08/02/2015.
 */
var  Users=require('../models/Users');
var Badge=require('../models/Badge');
//var  TypeThemeDao=require('../mode  ls/TypeThemeDao');
var mongoose = require('mongoose');
var listeUser1;
module.exports.testLoginMembre=function(data,cb){
            Users.findOne(data).populate('badge_id').exec(function(err,cb1){
                if(err) return console.error( err);
                cb( cb1);
            });
};
module.exports.findAll= function(cb){

        Users.find({}).populate('badge_id').exec(function(err,cb1){
            if(err) return console.error( err);
            cb( cb1);
        });

}
module.exports.findById=function(id,cb){

    Users.findById(id,function (err, user) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
        cb(user);
    });

}
module.exports.save=function(data,cb){

    new  Users(data).save(function(err, site) {
        if(err)  console.error(err);
        else  cb(true);

    });

}
module.exports.update=function(data,cb){

    Users.findByIdAndUpdate(id, data, function (err, post) {
        if (err) return next(err);
        // res.json(post);
        else   cb(true);
    });

}
module.exports.delete=function(id,cb){

    Users.findByIdAndRemove( id, function(err) {
        if (err) return console.dir(err);
        // res.json(post);
        else  cb(true);

    });

}
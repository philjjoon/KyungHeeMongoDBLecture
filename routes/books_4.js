// reference http://mongoosejs.com/docs/guide.html
var express = require('express');
var router = express.Router();
var Book = require('../models/book');

// SELECT *
router.get(/**/, function(req, res, next) {
	console.log("SELECT ALL REQUEST");
	/**/
});

// SELECT WHERE book_id = $BOOK_ID
router.get(/**/, function(req, res){
	console.log("SELECT BOOK REQUEST");
	/**/
});

// SELECT WHERE author = $AUTHOR
router.get(/**/, function(req, res){
	console.log("SELECT AUTHOR REQUEST");
    /**/
});

// CREATE
router.post(/**/, function(req, res){
	console.log("CREATE REQUEST");	

	/**/

});

// UPDATEß
router.put(/**/, function(req, res){
	console.log("UPDATE REQUEST");

	/**/
});

router.delete('/:book_id', function(req, res){

	/**/

});

module.exports = router;

var express = require('express');
var router = express.Router();
var Book = require('../models/book');

// SELECT *
router.get(/**/, function(req, res, next) {
	console.log("SELECT ALL REQUEST");
	/**/(function(err, books){
		if(err) return /**/
		/**/
	})
});

// SELECT WHERE book_id = $BOOK_ID
router.get(/**/, function(req, res){
	console.log("SELECT BOOK REQUEST");
	/**/({_id: req.params.book_id}, function(err, book){
		if(err) return /**/
		if(!book) return /**/
		/**/
	})
});

// SELECT WHERE author = $AUTHOR
router.get(/**/, function(req, res){
	console.log("SELECT AUTHOR REQUEST");
    /**/{author: req.params.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
        if(err) return /**/
        if(books.length === 0) return /**/
        /**/
    })
});

// CREATE
router.post(/**/, function(req, res){
	console.log("CREATE REQUEST");

	var book = new Book();
	book.title = req.body.title;
	book.author = req.body.author;
	book.published_date = new Date(req.body.published_date);

	/**/(function(err){
		if(err){
			console.log(err);
			return /**/;
			
		}

		/**/
	});

});

// UPDATEß
router.put(/**/, function(req, res){
	console.log("UPDATE REQUEST");

	/**/(req.params.book_id, function(err, book){
        if(err) return /**/
        if(!book) return /**/

        if(req.body.title) book.title = req.body.title;
        if(req.body.author) book.author = req.body.author;
        if(req.body.published_date) book.published_date = req.body.published_date;

        /**/(function(err){
            if(err) /**/
            /**/
        });
    });
});

router.delete('/:book_id', function(req, res){

	/**/({_id: req.params.book_id}, function(err, result){
		if(err) return /**/
		/**/
	})

});

module.exports = router;

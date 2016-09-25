Router.configure({
	layoutTemplate: "baseLayout",
	notFoundTemplate: '404',
	waitOn: function() 
	{
		return Meteor.subscribe("postsApproved");
	}
});

/*Router.route('/home', {

	name: "home",
	date:{
		posts: function()
		{
			return Post.find();
	    }
	}   
});-*/

Router.route('/', {

	name: "home",
	date:{
		posts: function()
		{
			return Post.find();
	    }
	}   
});

Router.route('/preview', {

	name: "preview",
	date:{
		posts: function()
		{
			return Post.find();
	    }
	}   
});

Router.route('/cart', { name: "cartShow"});

Router.route('/login', { name: "login"});

Router.route('/contact', { 
	 name: "contact",
	 date:{
	 	posts: function()
	 	{
	 		return Post.find();
	 	}
	 }
});

/* ABOUT + PRODUCTOS[id]

Router.route('/about', function () {
  this.render('about');
});

Router.route('/products/:id', function () {
  var that = this;
  var product = _.find(Products, function(prod) {
    return (prod.id === that.params.id);
  });
  this.render('productDetail', {
    data: product
  });
});

/*

Router.route('/preview/:sku', function() {

	var that = this;
	var pelicula = _.find( Products, function(prod){
			return (prod.sku === that.params.sku);
		});

	console.log(that.params.sku);

	this.render('productDetail',{
		data: pelicula,
	});

});

*/


Router.route("/preview/:sku", {
  name : "productDetail",
  waitOn : function(){
    return Meteor.subscribe("products-by-sku", this.params.sku);
  },
  data : function(){
    return Products.findOne({sku : this.params.sku});
  }
});
// */

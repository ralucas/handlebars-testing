$(function(){
alert('DASKLASDLKJASDDASKLASDLKJASDDASKLASDLKDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASDDASKLASDLKJASD');
	Handlebars.registerHelper('list', function(items, options){
		var out = '<ul>';

		for(var i = 0, l=items.length; i<l; i++){
			out = out + "<li>" + options.fn(items[i]) + "</li>";
		}

		return out + "</ul>";
	});

	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);

	var context = {
		title: 'Handlebars Test',
		body:'its working',
		cities: cities
	};

	var html = template(context);

	$('.container').append(html);
	
	

});
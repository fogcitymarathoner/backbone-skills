/**
 * The declaration and extension of the main router for the application
 * @type {*}
 */
var RFMainRouter = Backbone.Router.extend({
        //the route package
        routes: {
            "":"home",
            "about":"about",
            "*path":"unrecognized"
        },



        about: function(){
            //display the about page template
            $("div#content").html(templateSimpleAbout);
        },

        //deal with paths we haven't defined
        unrecognized: function(path){
            //display a 404 page
            $("div#content").html(template404({path:path}));
        }
    });

//actually create the router so it is bound to Bootstrap
var router = new RFMainRouter();

router.on('route:home', function() {

    // render actor list
    skillListView.render();
    $("a#appName").text(position);

});
//start the routers
Backbone.history.start();
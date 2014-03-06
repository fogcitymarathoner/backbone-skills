/**
 * Created with IntelliJ IDEA.
 * User: Drew
 * Date: 3/26/13
 * Time: 8:11 AM
 * To change this template use File | Settings | File Templates.
 */

//The pre-compiled 404 template page
var template404 = _.template(
    "<div class=\"span12 text-center\">" +
        "<h1><b><span class=\"bigger\">404.</span> Page Not Found!</b></h1>" +
        "<br>" +
        "The resource \"<em><%= path %></em>\" is not available." +
    "</div>"
);

//A basic welcome to the application template
var templateBasicWelcome = _.template(
    "<div class=\"row first-row\">" +
        "<div class=\"span1 text-center\">" +
            "<span class=\"bigger\"></span>" +
        "</div>"+
        "<div class=\"span4 text-center\">" +
            "<span class=\"big\"><strong>Top 10 Skills in Demand</span>" +
        "</div>"+
        "<div class=\"span1 text-center\">" +
            "<span class=\"big\"></span>" +

        "</div>"+
        "<div class=\"span1 text-center\">" +
            "<span class=\"big\"></span>" +

        "</div>"+
        "<div class=\"span1 text-center\">" +
            "<span class=\"big\"></span>" +

        "</div>"+
    "</div>"+
    "<div class=\"row\">" +
        "<div class=\"span1 text-center\">" +
            "<span ><strong>POSITIONS REQUIRING THIS SKILL</strong></span>" +
        "</div>"+
        "<div class=\"span4 text-center\">" +

        "</div>"+
        "<div class=\"span1 text-center\">" +
            "<span ><strong>ALREADY HAVE</strong></span>" +

        "</div>"+
        "<div class=\"span1 text-center\">" +
            "<span ><strong>WANT TO IMPROVE</strong></span>" +

        "</div>"+
        "<div class=\"span1 text-center\">" +
            "<span ><strong>NOT INTERESTED</strong></span>" +

        "</div>"+
    "</div>"+
		"<% _.each(data.models, function(dat) { %> " +
            "<div class=\"row\">" +
                "<div class=\"span1 text-center\">" +
                    "<span class=\"big\"><strong><%= dat.get('count') %></strong></span>" +
                "</div>"+
                "<div class=\"span4\">" +
                    "<div class=\"progress\">"+
                    "  <div class=\"progress-bar\"  id=\"progress-bar-<%= dat.get('id') %>\" role=\"progressbar\" aria-valuenow=\"<%= dat.get('score') %>\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: <%= dat.get('score') %>%;\">"+
                    "    <span ><%= dat.get('name') %></span>"+
                    "  </div>"+
                    "</div>"+
                "</div>"+
                "<div class=\"span1 text-center\">" +
                    "<span class=\"big\"><strong>X</strong></span>" +

                "</div>"+
                "<div class=\"span1 text-center\">" +
                    "<span class=\"big\">" +

                        "<div id=\"improve-img-container-<%= dat.get('id') %>\" class=\"vote-improve vote-button " +

                            "<%= dat.get('improve') ?  'red-star' : 'red-outline-star' %>\">" +
                        "</div>" +

                    "</span>" +

                "</div>"+
                "<div class=\"span1 text-center\">" +
                    "<span class=\"big\"><strong>X</strong></span>" +

                "</div>"+
            "</div>"+
        "<% }); %>",

    {appName:_appProps.name, data: skills}
);

//A simple about template page
var templateSimpleAbout = _.template(
    "<div class=\"span8 \">" +
        "<span class=\"bigger\"><span class=\"underline\"><%= appName %></span></span>" +
        "<br>" +
        "<br>" +
        "<b>Description: </b>" +
        "<p><%= desc %></p>" +
        "<b>Author: </b>" +
        "<p><%= author %></p>" +
        "<b>Technologies Used:</b>" +
        "<ul>" +
            "<li><a href='http://twitter.github.com/bootstrap/index.html' target='_blank'>Twitter Bootstrap</a></li>" +
            "<li><a href='http://underscorejs.org/' target='_blank'>Underscore.js</a></li>" +
            "<li><a href='http://backbonejs.org/' target='_blank'>Backbone.js</a></li>" +
            "<li><a href='http://jquery.com/' target='_blank'>JQuery</a></li>" +
            //add additional technologies here
        "</ul>" +
    "</div>",
    {appName:_appProps.name, desc:_appProps.description, author:_appProps.author}
);
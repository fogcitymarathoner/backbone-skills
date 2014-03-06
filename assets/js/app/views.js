/**
 * Created by marc on 3/6/14.
 */
var SkillListView = Backbone.View.extend({
    el: '#content',
    render: function () {
        var that = this;

        var template = templateBasicWelcome;

        that.$el.html(template);
    },

    events: {
        "click  .vote-improve": "vote_improve"
    },

    vote_improve: function (ev) {
        /*
        modifies skill models interest field
        changes decorations
         */
        var that = this;

        id = ev.target.id;
        idarry = id.split("-");
        id = idarry[3];
        skill = skills.find(function(model) { return model.get('id') == id; });
        // record the vote and redecorate
        if (skill.get("improve", true))
        {
            skill.set("improve", false);
            $('#'+ev.target.id).removeClass('red-star');
            $('#'+ev.target.id).addClass('red-outline-star');
            $('#progress-bar-'+id).removeClass('progress-bar-interest');
            $('#progress-bar-'+id).addClass('progress-bar');
        } else {
            skill.set("improve", true);
            $('#'+ev.target.id).removeClass('red-outline-star');
            $('#'+ev.target.id).addClass('red-star');
            $('#progress-bar-'+id).removeClass('progress-bar');
            $('#progress-bar-'+id).addClass('progress-bar-interest');
        }
        
    } // vote_improve
});


var skillListView = new SkillListView();

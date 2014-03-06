
var position = '';
var Skill = Backbone.Model.extend({
        initialize: function(){
            //alert("Welcome to this world");
        },
		defaults: {
            id: null,
            name: null,
            score: null,
            count: null,
            have: null,
            improve: null,
            interest: null
		}
    });
var Skills = Backbone.Collection.extend({
        initialize: function(){

			$skill_title = $('div#raw-data.container h4');

			$("#display-skill-title").html($skill_title.html());
            $position = $("div#raw-data.container div.skill-list");
            // global space positio
            position = $position.attr('rel');
            $bar_list = $("div#raw-data.container div.skill-list div.skill-chart-bar.raw-data");

			// get list of skills off hidden dom
			$html = '';
			for (var i=0,len=$bar_list.length; i<len; i++)
			{

				$name = $bar_list[i].children[0];

				$html = $html + '<div class="skill-chart-bar" rel=""><div class="name">'+$name.innerHTML+'</div>';
				$html = $html + '<div id="pbar-'+i+'"></div>';

				$html = $html + '</div>';
			}
			// add empty elements for progress bars
			$("#skill-list").html($html);


			// fill out the progress bars
			for (var i=0,len=$bar_list.length; i<len; i++)
			{
                $score = $bar_list[i].getAttributeNode('score').nodeValue;
                $count = $bar_list[i].getAttributeNode('count').nodeValue;
                $name = $('.name')[i];//.children[0];

				if($score)
				{
					this.add({
                    'id': i,
                    'name': $name.innerHTML,
					'score': $score,
                    'count': $count,
                    'have': false,
                    'improve': false,
                    'interest': false
					});
				}
			}
			
				
            //console.log(this);

        },
	model: Skill,
	url : "/skills"

});

var skills = new Skills();

(function($, ko){

	(function(ns) {

        var TalentTree = ns.TalentTree = function(_e){
			var e = _e || {};
            var self = function(){};
            
            self.skills = ko.observableArray(ko.utils.arrayMap(e.skills, function(item){
				return new Skill(item, self.skills);
			}));
			function getSkillById(id) {
				return ko.utils.arrayFirst(self.skills(), function(item){
					return item.id == id;
				});
			}
			//Wire up dependency references
			ko.utils.arrayForEach(e.skills, function(item){
				if(item.dependsOn) {
					var dependent = getSkillById(item.id);
					ko.utils.arrayForEach(item.dependsOn, function(dependencyId){
						var dependency = getSkillById(dependencyId);
						dependent.dependencies.push(dependency);
						dependency.dependents.push(dependent);
					});
				}
            });
        }
	}) (namespace('tft.dnd'));

	
	$(function () {

	    if (isInvalidIEVersion())
	        return;
;

		var vm = new tft.dnd.TalentTree(tft.dnd.data); //Make a new Talent Tree VM based on the data in tft.dnd.data.js
		ko.applyBindings(vm);

		//Allow a split second for binding before turning on animated transitions for the UI
		setTimeout(function(){
			$('.page').addClass('animated');
		}, 50);
	});
})
(window.jQuery, window.ko);
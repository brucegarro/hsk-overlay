'use strict';

var wrapTextInSpan = function(targetText) {
	var targetDivs = "p";
	var html = $(targetDivs).html();

	// if (!html) {
	// 	html = $(targetDivs).text();
	// }

	$(targetDivs).html(
		html.replace(targetText, `<span style="color: red">${targetText}</span>`)
	);
	// targetDivs.contents().filter(function(){
	//     return this.nodeType == 3 && $.trim(this.nodeValue).length;
	// }).wrap('<span style="color:red;"/>');
}

var main = function() {
	var targetText = "计算";
	console.log("Begin Main");
	wrapTextInSpan(targetText);
	console.log("End Main");
};

$(function() {
	main();
});

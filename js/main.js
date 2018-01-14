'use strict';

var wrapPhrase = function(matchedText) {
	return (
		'<text class="hsk-keyword-highlight">'+
		matchedText+
		'</text>'
	);
}

var highlightVocab = function() {
	// remove <a> tag's title attribute
	$('a').prop('title','');
	// remove image alternative text
	$('img').prop('alt','');

	let targetDivs = "p,span,li";
	var excludeAttrs = "data-foreign-title data-orig-title"; // Wikipedia foreign language links

	$(targetDivs).each(function(i,e){
		$(e).removeAttr(excludeAttrs);
		let html = $(e).html();
		html = html.replace(level5Regex, wrapPhrase);
		$(e).html(html);
	});
}

var main = function() {
	highlightVocab();
};

$(function() {
	main();
});

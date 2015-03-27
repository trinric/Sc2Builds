/**
*
*
*/
function nl2br (str, is_xhtml) {   
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}

Template.singleBuildPage.rendered = function() {
	var buildOrder = document.getElementById('build');
	buildOrder.innerHTML = nl2br(buildOrder.innerHTML);
}
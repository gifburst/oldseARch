var searchButton = document.getElementById("searchbar");

searchButton.addEventListener("submit", function(e) {
    search(searchButton.children[0].value);});

var baseurl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCp1dxZRcPudb_wTmFa3OjetjAYsi21y48&cx=001012682094247960828:uwm8yxbcki7&q=";

function search(searchTerm) {
    var res = document.getElementsByClassName("results")[0].innerHTML = "";
    var url = baseurl + searchTerm;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    console.log("searching...");
    request.onload = function () {
	console.log("loaded");
	var data = JSON.parse(this.response);
	if (request.status === 200) {
	    var results = document.getElementsByClassName("results")[0];
	    for (var i = 0; i < data["items"].length; i++) {
		var container = document.createElement("div");
                container.className = "result";
                var checkb = document.createElement("input");
                checkb.type = "checkbox";
                var link = document.createElement("a");
                link.href = data["items"][i].formattedUrl;
                link.innerHTML = data["items"][i].title;
                var url = document.createElement("p");
                url.className = "url";
                url.innerHTML = data["items"][i].formattedUrl;
                var desc = document.createElement("p");
                desc.className = "desc";
                desc.innerHTML = data["items"][i].snippet;
                var br = document.createElement("br");
		container.appendChild(checkb);
		container.appendChild(link);
		container.appendChild(url);
		container.appendChild(desc);
		container.appendChild(br);
		results.appendChild(container);
	    }
	}
    }
    request.send();
}
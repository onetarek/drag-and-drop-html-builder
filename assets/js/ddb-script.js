function getBlockHtmlElm(data) {
	if(data.block_name == 'row') {
		var element = document.createElement("div");
		element.innerHTML = "Row";
		element.classList.add("ddb-row");
		element.classList.add("blank");
		element.setAttribute("ondrop", "drop(event)");
		element.setAttribute("ondragover", "allowDrop(event)");
		
	} else if( data.block_name == 'image' ) {
		var element = document.createElement("img");
		element.src="assets/images/ddb-test-image-600x400.jpeg"
		element.classList.add("ddb-img");
	}
	return element;
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
	var data = ev.target.getAttribute('ddb-data');
	//var data = JSON.parse(d);
  ev.dataTransfer.setData("ddb-data", data );
}

function drop(ev) {
  ev.preventDefault();
  var d = ev.dataTransfer.getData("ddb-data");
  var data = JSON.parse(d);
  var htmlObj = getBlockHtmlElm(data);
  ev.target.appendChild(htmlObj);
}
/* display partners */
var logos = [];
var fileNames = [];
var imgList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";

for (var i=0; i<6; i++) {
    fileNames.push("partner" + (i+1));
    logos.push("<img src='images/partners/" + fileNames[i] + ".png'>");
    image = openList + logos[i] + closeList;
    imgList.push(image);
}

document.getElementById("partners").innerHTML = imgList;

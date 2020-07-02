//JS and CSS stuff

//Add the list of images

var images = ["1280_00.159.223_PS1.jpg",
            //  "1280_14ChrismMassFW20.jpg",         - commenting these images out so that only the ordination photos appear on the site
            //  "1280_holythursday.jpg",             - edit made 7/2/2020 - dml
            //  "1280_imgdavincilastsupper.jpg",
              "untitled-63.jpg",
              "untitled-48.jpg",
              "P6060296.jpg",
              "P6060243.jpg"
              ];

var sorted_images = images;

var random_bg = Math.trunc(Math.random()*images.length);

for (var i = 0; i < images.length; i++)
{
  if (i+random_bg < images.length)
  {
    sorted_images[i] = images[i + random_bg];
  }
  else
  {
    sorted_images[i] = images[i + random_bg - images.length];
  }
}

images = sorted_images;

var newelement='';
var delay = 5;

//add image divs
for (var i = 0; i < images.length-1; i++)
{
  var style_element = "";
  var bg_element = '<div class="bg" id="bgimage' + (images.length-i-1) + '" style="opacity: 0; background-image: url(' + images[i] + ');"></div>';
  newelement = bg_element + style_element + newelement;
  console.log(newelement)
}

for (var i = images.length-1; i < images.length; i++)
{
  var style_element = "";
  var bg_element = '<div class="bg" id="bgimage' + (images.length-i-1) + '" style="background-image: url(' + images[i] + ');"></div>';
  newelement = bg_element + style_element + newelement;
  console.log(newelement)
}

document.getElementById("body").innerHTML = newelement + document.getElementById("body").innerHTML;

//loop through on timer and animate
var bg = 1;

function animateBG()
{
  if (bg == images.length)
    bg = 0;

  console.log(bg);
  if (bg == 0)
  {
    for (var i = 1/*NOT zero cuz that's the one on the bottom*/; i < images.length; i++)
    {
      document.getElementById("bgimage" + i).style["animation-name"] = "bgfadeout";
      document.getElementById("bgimage" + i).style["animation-duration"] = "2s";
    }

    bg++;
  }
  else
  {
    $("#" + "bgimage" + bg).css("opacity", "");
    document.getElementById("bgimage" + bg).style["animation-name"] = "bgfadein";
    document.getElementById("bgimage" + bg).style["animation-duration"] = "2s";
    
    bg++;
  }

  
}

setInterval(animateBG, delay*1000);

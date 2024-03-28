let landscape = [
  "https://external-preview.redd.it/grass-slides-in-hulunbuir-prairie-inner-mongolia-v0-CKA_-aOGW-Z66Yupw-tsWqG07XHiLhGZMuqAS-tObZU.png?format=pjpg&auto=webp&s=922e2dd7a2ee76da686e8f1440bc62918e38e350",
  "https://lh3.googleusercontent.com/p/AF1QipOQsElfK1E8wqF9i4qpikFliO9q_dxavBHnK1hh=s680-w680-h510",
  "https://images.prismic.io/visiticeland/db573a32-bb7d-4ef7-9101-2fdb13441150_Silfra-fissure-Thingvellir.jpg?auto=compress,format"
];

for (let i = 0; i < landscape.length; i++) {
  $(".gallery").append("<div class='picture'><img src=" + landscape[i] + "><p>" + getCaption(i) + "</p></div>");
}

$(".add").click(function() {
  let landpics = $(".picture-url").val();
  let caption = $(".picture-caption").val();

  if (landpics && caption) {
    landscape.push(landpics);
    $(".gallery").append("<div class='picture'><img src=" + landpics + "><p>" + caption + "</p></div>");
    $(".picture-url, .picture-caption").val("");
  } else {
    alert("Please enter both a picture URL and a caption.");
  }
});

function getCaption(index) {
  return "";
}
$(".delete").click(function() {
  if (landscape.length > 0) {
    landscape.pop();
    $(".gallery").children().last().remove();
  } else {
    alert("There are no images to delete.");
  }
});
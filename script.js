$("#expo").hover(function() {
    $(".title").fadeIn(2000);
    $(".yes").fadeIn(2000);
    $(".no").fadeIn(2000);
    $("#expo").fadeOut(1000);
});
$(".yes").click(function() {
    $("#food").fadeIn(2000);
    $(".rand").hide();
    $(".yes").fadeOut(1000);
    $(".no").fadeOut(1000);

});
$(".no").click(function() {
    $("#aisles").show();
    $("#goOn").show();
    $(".yes").fadeOut();
    $(".no").fadeOut();

});
$("#food").click(function() {
    $("#food").fadeOut(2000);
    $("#toys").fadeIn(2000);
    $("#pickone").fadeIn(2000);
});
$("#aisles").click(function() {
    $("#food").fadeOut(2000);
    $("#toys").fadeIn(4000);
    $("#pickone").fadeIn(4000);
    $("#goOn").hide();
});
$("#toys").dblclick(function() {
    $("#nerf").fadeIn(4000);
    $("#dog").fadeIn(4000);
    $("#toys").hide();
    $("#pickone").text("Place your mouse on the one you want.");
    $("#aisles").hide();
    $(".title").hide();
});
$("#nerf").mouseleave(function() {
	$("#pickone").text("Good Choice. Now time to pay.");
    $("#dog").hide();
});
$("#dog").mouseleave(function() {
	$("#pickone").text("Great Choice. Now time to pay.");
    $("#nerf").hide();
});
$("#dog").click(function() {
	$("#pay").show();
    $("#pickone").hide();
    $("#nerf").hide();
    $(".self").show();
    $(".reg").show();
    $("#dog").hide();
});
$("#nerf").click(function() {
	$("#pay").show();
    $("#pickone").hide();
    $("#nerf").hide();
    $(".self").show();
    $(".reg").show();
    $("#nerf").hide();
});
$(".self").click(function(){
    $("#pay").text("You showed up to your cousins party late, but he liked your gift. The End");
    $(".self").hide();
    $(".reg").hide();
});
$(".reg").click(function(){
    $("#pay").text("Nice time to go to your cousins party and give your gift. The End");
    $(".self").hide();
    $(".reg").hide();
});

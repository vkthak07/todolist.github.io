//alert("Connected man!!!!");
// check of specific to dos by Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
    // Video-note: if li is gray 
 /*   if($(this).css("color") === "rgb(128, 128, 128)"){
       // console.log("It is currently gray!")
      // $(this).css("color","black");
      $(this).css({
        color: "black",
        textDecoration: "none"
    });
    }
    //turn it black 
    //else
else{
    $(this).css({
        color: "gray",
        textDecoration: "Line-through"
    });
}*/
     //turn it gray
    //alert("Clicked li")
// $(this).css("color","gray");
 //$(this).css("text-decoration","line-through");            combining above 2 in 1 below line
 /* 
 Click on X to delete todo*/
    $("ul").on("click", "span", function(event){
        //$(this).parent().remove();
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
     event.stopPropagation();
     
 });
 /*$("ul").click(function(){
    alert("Clicked on a ul!");
});
$("#container").click(function(){
    alert("Clicked on a container div!");
});
$("body").click(function(){
    alert("Clicked on a body!");
});*/
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(); 
})

 


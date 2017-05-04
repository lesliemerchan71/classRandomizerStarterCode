$(document).ready( function(){
    
    var Students = ['Monserrat', 'Adonis', 'Leslie'];
    var Teachers = ['Julia', 'Zack', 'Aaron', 'Justin', 'Alyxe'];
    
    $('#studentButton').click( function() {
        var Random = Math.floor(Math.random()*Students.length);
        $("#studentDisplay").html(Students[Random]);
    });
    
    $("#teacherButton").click( function() {
        var Random = Math.floor(Math.random()*Teachers.length);
        $("#teacherDisplay").html(Teachers[Random]);
    });
    
//change to jquery to do append//
});


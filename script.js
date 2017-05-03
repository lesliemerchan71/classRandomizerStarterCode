$(document).ready(function(){
    
    var Students = ['Monserrat', 'Adonis', 'Leslie'];
    var Teachers = ['Julia', 'Zack', 'Aaron', 'Justin', 'Alyxe'];
    
    var RandomOne = Math.floor(Math.random()*Students.length);
    var RandomTwo = Math.floor(Math.random()*Teachers.length);
    
    
    $('#studentButton').click(function() {
        var RandomOne = Math.floor(Math.random()*Students.length);
        $("#studentDisplay").append(Students[RandomOne]);
    }
    
    $('#teacherButton').click(function() {
        var RandomTwo = Math.floor(Math.random()*Teachers.length);
        $("#teacherDisplay").append(Teachers[RandomTwo]);
    }
    
//change to jquery to do append//
});

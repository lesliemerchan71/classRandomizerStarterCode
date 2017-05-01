$(document).ready(function(){
    var Students = ['Monserrat', 'Adonis', 'Leslie'];
    var Teachers = ['Julia', 'Zack', 'Aaron', 'Justin', 'Alyxe'];
    
    var RandomOne = Math.floor(Math.random()*Students.length);
    var RandomTwo = Math.floor(Math.random()*Teachers.length);
    
    console.log(Students[RandomOne]);
    console.log(Teachers[RandomTwo]);


});

/* var person = {
    firstName:"Vitor",
    lastName:"Ferreira",

    showFullName: function () {
        console.log(this.firstName + " " + this.lastName )
    }
} 
console.log(this.fistName);
person.showFullName(); */
$(document).ready(function () {
    $('#example').DataTable(/* {
        "bFilter":false,
        "bLengthChange": false
    } */);
    $('#example_filter label').addClass('yourclass teste');
});
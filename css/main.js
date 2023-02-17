var addtToDoButton = document.querySelectorAll('.btn');
var inputfiled = document.querySelectorAll('#inputfiled');
var toDoContainrt = document.querySelectorAll('#toDoContainer')

addtToDoButton.addEventListener('click',function(){
    inner_task(value,parent_section){
        var paragraph = document.createElement('p');
        var paragraph_value =document.createTextNode(value);
        paragraph.append(paragraph_value);
        parent_section.append(paragraph);
    }
    addtToDoButton[0].addEventListener('click',function(){
        inner_task(inputfiled[0].value,toDoContainrt[0]);
    })
})

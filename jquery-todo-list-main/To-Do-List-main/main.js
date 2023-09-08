$(function(){
   
    //adding new task list 
    $('.add-btn').click(function(){
        let input = $('.imp').val();

        //tried to save the input in local storage but Everytime I typed in an input the Localstorage gets the latest input and removes the earlier input basically it stores only one item.
      /*  let todosArray = [];
        localStorage.setItem("todos", JSON.stringify(input));
        todosArray.push(input);
        todosArray = JSON.parse(localStorage.getItem("todos"))
        */
    if(input!=''){
    $('.to-do-list').append('<li  list-name class="mt-2 position-relative ">'+ '<input type="text" class="edit" style="display:none"/>'+ input + '<i class="bi bi-check-lg fa-2x check-btn position-absolute top-0 end-0 me-5"></i>' +'<i class="bi bi-pencil-square edit-btn position-absolute top-0 end-0 me-4 "></i>'+'<i class="bi bi-trash remove-btn position-absolute top-0 end-0 me-1"></i></li>');
    $(".imp").val(null);
    };
   
    });


    //remove button function
    $('ol').on('click', '.remove-btn',function(){
        $(this).parent('li').remove();

    });

    //check button function
    $('ol').on('click', '.check-btn',function(){
        $(this).parent('li').toggleClass('checked');

    });
   
    
    //edit button function
    $('ol').on('click', '.edit-btn',function(){

     //hide the buttons and text and shows input field
     $(this).parent('li').show().html('<input class="edit-input" type="text" value="'+ $(this).text() +'">'+ '<button class="btn btn-success m-2 save-btn" type="button">Save</button>')
         
    });
     //after edit - save function 
    $('ol').on('click', '.save-btn',function(){
        let editInput = $('.edit-input').val();
        if(editInput!=''){
       
        $(this).parent('li').html('<input type="text" class="edit" style="display:none"/>'+ editInput + '<i class="bi bi-check-lg fa-2x check-btn position-absolute top-0 end-0 me-5"></i>' +'<i class="bi bi-pencil-square edit-btn position-absolute top-0 end-0 me-4 "></i>'+'<i class="bi bi-trash remove-btn position-absolute top-0 end-0 me-1 "></i></li>');
        
    };
    
        
     });

    //adding drag and drop for ordered list
     $('#sortable').sortable();({

     });

});









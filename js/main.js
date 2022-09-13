$('.close-alert').click(function(){
    console.log($(this).parents('.alert'))
    $(this).parents('.alert').addClass('closed')
})
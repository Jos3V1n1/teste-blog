$(document).ready(function() {
    //move the last list item before the first item. The purpose of this is if the user clicks to slide left he will be able to see the last item.
    $('#category li:first').before($('#category li:last')); 
    
    //when user clicks the image for sliding right        
    $('#right_scroll').click(function(){
    
        //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
        var item_width = $('#category li').outerWidth() + 10;
      $('this').css('opacity','0.5')
        
        //calculae the new left indent of the unordered list
        var left_indent = parseInt($('#category').css('left')) - item_width;
        
        //make the sliding effect using jquery's anumate function '
        $('#category:not(:animated)').animate({'left' : left_indent},900,function(){    
            
            //get the first list item and put it after the last list item (that's how the infinite effects is made) '
            $('#category li:last').after($('#category li:first')); 
            
            //and get the left indent to the default -210px
            $('#category').css({'left' : '-210px'});
        }); 
    });
    
    //when user clicks the image for sliding left
    $('#left_scroll').click(function(){
        
        var item_width = $('#category li').outerWidth() + 50;
        
        /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
        var left_indent = parseInt($('#category').css('left')) + item_width;
        
        $('#category:not(:animated)').animate({'left' : left_indent},900,function(){    
        
        /* when sliding to left we are moving the last item before the first list item */            
        $('#category li:first').before($('#category li:last')); 
        
        /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
        $('#category').css({'left' : '-210px'});
        });
        
        
    });
});




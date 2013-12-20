$(document).ready(function(){
  // detect scrolling
      var current_page= 1;
      $(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
         if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
      current_page++;
       $.ajax({
      type: "GET",
      url: "/posts?page="+current_page,
      });
   }
    }, 200));
});
      //show comments
  $( document ).on( "click", ".showcm", function() {
  showComments($(this).attr('commid'));
});
  //hide modal on post and display comment
  $( document ).on( "click", ".btn-modal", function() {
    var id = $(this).attr('postid');
    var content = $("#content"+id).val();;
    $("#comments"+$(this).attr('postid')).prepend('<div class="comment"><span class="com-text">'+ content + '</span><small> Posted just now. </small></div>');
   hideModal($(this).attr('postid'));
   // increment counter
   var current_num = parseInt($('#showcomments'+id).attr('numcom'));
   if (current_num == 0){
    $('#showcomments'+id).text('1 comment');
   }
   else{
    var new_num = current_num + 1;
    console.log(new_num);
    $('#showcomments'+id).text(new_num+' comments');
   }

  });
 // show modal
  $( document ).on( "click", ".new-commnt", function() {
   $('#myModal'+$(this).attr('postid')).modal();
  });
  // bump a post
  $( document ).on( "click", ".bump", function() {
   if (!($(this).hasClass('bumped'))){
        console.log('BUMPED');
      bump($(this).attr('bumpid'));
    }
    $(this).removeClass('bump').addClass('bumped');
    $(this).text('Bumped');
  });

  $( document ).on( "click", ".bumped", function() {

   if (!($(this).hasClass('bump'))){
        console.log('UN-BUMPED');
      unbump($(this).attr('bumpid'));
    }
    $(this).removeClass('bumped').addClass('bump');
    $(this).text('Bump');
  });
});

// shows comments for given post id
function showComments(id){
  $('#comments'+id).fadeToggle();
  console.log('#comments'+id);
}
// bumps post by given id
function bump(id){
  console.log($('#bump'+id).attr('bumpnum'));
  $('#bump_num'+id).text(parseInt($('#bump'+id).attr('bumpnum'))+1 + ' bumps');
  $.ajax({
      type: "POST",
      url: "/bump/"+id,
    });
}
// hide modal by id
function hideModal(id){
  var modalID = "#myModal"+id;
  $(modalID).modal('hide');
}
function unbump(id){
  $('#bump_num'+id).text(parseInt($('#bump'+id).attr('bumpnum')) + ' bumps');
  $.ajax({
      type: "POST",
      url: "/unbump/"+id,
    });
}









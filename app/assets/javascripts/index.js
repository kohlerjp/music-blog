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
    }, 150));
});

  // hide modal on post
  $(".btn-modal").click(function(){
    hideModal($(this).attr('postid'));
  });
  // show comments
  $(".showcm").click(function(){
    showComments($(this).attr('commid'));
  });
  // show modal
  $(".new-commnt").click(function(){
    $('#myModal'+$(this).attr('postid')).modal();
  });
  // bump a post
  $(".bump").click(function(){
    if (!($(this).hasClass('bumped'))){
      bump($(this).attr('bumpid'));
    }
    $(this).removeClass('bump').addClass('bumped');
    $(this).text('Bumped');
  });
});
// shows comments for given post id
function showComments(id){
  $('#comments'+id).fadeToggle();
  console.log('#comments'+id);
}
// bumps post by given id
function bump(id){
  console.log('Bumped ' + id);
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









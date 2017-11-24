(function($){

// slide for posting -> 34/38 look at nytimes to see how to get the data. Filter it to get random post -> 29/38
  $.ajax()

  $('#close-comments').on('click', function(event) {
    event.preventDefault();
    $.ajax({
       method: 'post',
       url: red_vars.rest_url + 'wp/v2/posts/' + red_vars.post_id,
       data: {
          comment_status: 'closed'
       },
       beforeSend: function(xhr) {
          xhr.setRequestHeader( 'X-WP-Nonce', red_vars.wpapi_nonce );
       }
    }).done( function(response) {
       alert('Success! Comments are closed for this post.');
    });
 });

})(jQuery);
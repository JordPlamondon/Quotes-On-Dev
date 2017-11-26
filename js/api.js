(function ($) {

  $('#new-quote-button').on('click', function (e) {
    e.preventDefault();

    $.ajax({
      method: 'GET',
      url: api_vars.root_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',
    })
      .done(function (data) {

        var slug = data[0].slug;
        var renderedPost = data.shift();

        $('.entry-title').html(renderedPost.title.rendered);
        $('.entry-content').html(renderedPost.content.rendered);
        $('.hentry').append(history.pushState(null, null, slug));

        if (renderedPost._qod_quote_source_url) {
          $('.source').html('<a href="' + renderedPost._qod_quote_source_url + '">' + renderedPost._qod_quote_source + '</a>');
        }

      })
  });

  //submit a quote
  $('#submit-quote').on('click', function (e) {

    e.preventDefault();

    var quoteAuthor = $('#quote-author').val();
    var quoteContent = $('#quote-content').val();
    var quoteSource = $('#quote-source').val();
    var quoteSourceUrl = $('#quote-source-url').val();

    $.ajax({
      method: 'POST',
      url: api_vars.root_url + 'wp/v2/posts',
      data: {
        title: quoteAuthor,
        content: quoteContent,
        _qod_quote_source: quoteSource,
        _qod_quote_source_url: quoteSourceUrl,
        status: 'draft'
      },

      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce);
      }

    }).done(function () {


    }).always(function () {
      $('#quote-submission-form').trigger('reset');
    });

  });

})(jQuery);
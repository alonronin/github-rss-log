(function($, global){
    $(function(){
        $.get('/rss', function(xml){
            var items = [];
            $(xml).find('entry').each(function(i, item){
                var o = {
                    id: $(this).find('id').text(),
                    title: $(this).find('title').text(),
                    link: $(this).find('link').attr('href'),
                    updated: $(this).find('updated').text(),
                    thumbnail: $(this).find('thumbnail').attr('url'),
                    author: {
                        name: $(this).find('author name').text(),
                        uri: $(this).find('author uri').text()
                    },
                    content: $(this).find('content').text()
                };

                dust.render('item', o, function(err, html){
                    if(!err) $('ul').append(html)
                });

            });
        })
    })
})(jQuery, window);
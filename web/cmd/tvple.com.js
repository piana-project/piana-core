function url2cmd(url) {
    if (!url.match(/^http:\/\/tvple\.com\/([a-zA-Z0-9_\-]+)\/embed)) {
        pne_url2a(url);
        return;
    }
    var id = RegExp.$1;
    var width = 425;
    var height = 350;
    main(id, width, height);
}

function main(id, width, height) {
    if (!id.match(/^[a-zA-Z0-9_\-]+$/)) {
        return;
    }
    if (!width) width = 0; else width = parseInt(width);
    if (!height) height = 0; else height = parseInt(height);
    if (width <= 0 || width > 425) {
        width = 425;
    }
    if (height <= 0 || height > 350) {
        height = 350;
    }
    var html = '<iframe width="'
            + width
            + '" height="'
            + height
            + '" src="//tvple.com/'
            + id
            + '/embed" frameborder="0" allowfullscreen=""></iframe>';
    document.write(html);
}

function tampilkanDaftarPost() {
    var daftarPost = "";
    var judulPost, urlPost, thumbnail;
    var jumlahPost = 6;
    
    $.ajax({
        url: "https://air.omasae.com/feeds/posts/default",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            for (var i = 0; i < jumlahPost; i++) {
                judulPost = data.feed.entry[i].title.$t;
                urlPost = data.feed.entry[i].link[4].href;
                thumbnail = data.feed.entry[i].media$thumbnail.url.replace("/s72-c/", "/s200/");
                daftarPost += "<div class='daftar-post'>";
                daftarPost += "<a target='_blank' href='" + urlPost + "'><img src='" + thumbnail + "'/></a>";
                daftarPost += "<a target='_blank' href='" + urlPost + "'>" + judulPost + "</a>";
                daftarPost += "</div>";
            }
            $("#daftar-post").html(daftarPost);
        }
    });
}

$(document).ready(function () {
    tampilkanDaftarPost();
});

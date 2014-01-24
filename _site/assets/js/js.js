jQuery(document).ready(function() {

    $("ul.list-fotos-box, ul.list-videos-box").simplecarousel({
      next: $('.fPrevious'),
      prev: $('.fNext'),
      width:176,
      height:134,
      visible: 4,
      fade: 400,
      pagination: true
    });


    $("ul.list-fotos-box-horario").simplecarousel({
      next: $('.hPrevious'),
      prev: $('.hNext'),
      vertical: true,
      width:164,
      height:134,
      visible: 5,
      fade: 400,
      pagination: false
    });
});
$(function () {

  imageHover();
  scrollToTop();

});

function imageHover() {
  $('.workImage').each(function() {
    var image = $(this).find('img');
    var altText = image.attr('alt');

    var hoverTextDiv = $('<div><h2>' + altText + '</h2></div>');
    hoverTextDiv.addClass('workImageHover');

    $(this).append(hoverTextDiv);

    var descriptionId = image.attr('description-id');
    hoverTextDiv.click(function() {
      var descriptionDiv = $('#' + descriptionId);
      descriptionDiv.addClass('workDescriptionExpanded');

      $('html, body').animate({
        scrollTop: descriptionDiv.offset().top
      }, 600);
    });
  });
}

function scrollToTop() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').addClass('scrollToTopVisible');
		} else {
			$('.scrollToTop').removeClass('scrollToTopVisible');
		}
	});

	$('.scrollToTop').click(function() {
		$('html, body').animate({
      scrollTop : 0
    }, 800);

		return false;
	});
}

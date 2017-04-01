$(document).ready(function(){

	$(window).scroll(function(){
		var height = $(window).scrollTop();
		if(height > 100){
			$('#backToTop').fadeIn();
		} else {
			$('#backToTop').fadeOut();
		}
	});

	$('#backToTop').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 'slow');
		return false;
	});

	$('.lpi-btn-1').hover(function(){
		$('.lpi-desc-1').slideToggle(250, 'linear').display(150, 'linear');
	});
	$('.lpi-btn-2').hover(function(){
		$('.lpi-desc-2').slideToggle(250, 'linear').display(150, 'linear');
	});	
	$('.lpi-btn-3').hover(function(){
		$('.lpi-desc-3').slideToggle(250, 'linear').display(150, 'linear');
	});
	$('.lpi-btn-4').hover(function(){
		$('.lpi-desc-4').slideToggle(250, 'linear').display(150, 'linear');
	});
	$('.lpi-btn-5').hover(function(){
		$('.lpi-desc-5').slideToggle(250, 'linear').display(150, 'linear');
	});

	$('.cw-btn-1').hover(function(){
		$('.cw-desc-1').slideToggle(250, 'linear').display(150, 'linear');
	});
	$('.cw-btn-2').hover(function(){
		$('.cw-desc-2').slideToggle(250, 'linear').display(150, 'linear');
	});	
	$('.cw-btn-3').hover(function(){
		$('.cw-desc-3').slideToggle(250, 'linear').display(150, 'linear');
	});
	$('.cw-btn-4').hover(function(){
		$('.cw-desc-4').slideToggle(250, 'linear').display(150, 'linear');
	});
	$('.cw-btn-5').hover(function(){
		$('.cw-desc-5').slideToggle(250, 'linear').display(150, 'linear');
	});

	$('.LPI1 .desc-btns').each(function(){
		$(this).hover(function(){
			$('.lpi-line').toggle(250, 'linear');
			$('.LPI1').toggleClass('br');
		})
	});
	$('.CW1 .desc-btns').each(function(){
		$(this).hover(function(){
			$('.cw-line').toggle(250, 'linear');
			$('.CW1').toggleClass('bl');
		})
	});		

	// absolutely position modal pop ups in center of screen
	$(function() {

	    function reposition() {

	        var modal = $(this),
	            dialog = modal.find('.modal-dialog');

	        modal.css('display', 'block');
	        
	        // Dividing by two centers the modal exactly, but dividing by three 
	        // or four works better for larger screens.
	        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));

	    }

	    // Reposition when a modal is shown
	    $('.modal').on('show.bs.modal', reposition);    

	    // Reposition when the window is resized
	    $(window).on('resize', function() {
	        $('.modal:visible').each(reposition);
	    });

	});

	$('.navbar-toggle').on('click', function(){
		$('.navbar').css('border', 'none');
	})

})

var app = app || {};
let scrollTop, scrollLeft = 0;

app.init = function () {
	app.tab();
	app.anchorLink();
	app.swiper();
	app.faq();
	app.inscrease();
	app.splitText();
};

app.tab = function () {
	$(document).on("click", ".tab a", function (e) {
		e.preventDefault();
		let target = $(this).attr("href").split('#')[1];

		$(this).parent().addClass("active").siblings().removeClass("active");
		$('[data-id="' + target + '"]').fadeIn(0).siblings().fadeOut(0);
		history.pushState({}, '', '#' + target);
	});

	if (location.hash && $(".tab li a[href='" + location.hash + "']").length) {
		$(".tab li a[href='" + location.hash + "']").trigger("click");

		$('.pagination a.page-numbers').each(function (i, a) {
			$(a).attr('href', $(a).attr('href') + '#' + $(a).parents('.tab-box').attr('data-id'));
		});
	} else {
		$(".tab li:first-child a").trigger("click");
		history.replaceState(null, null, ' ');
	}
}

app.anchorLink = function () {
	$('.anchor-link').click(function () {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			let box = document.querySelector('.p-header');
			let snum = document.querySelector('.h_number');

		}
	});


}
app.swiper = function () {
	$('.banner').slick({
		arrows: false,
		dots: true,
	});
	$('.product-js').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		appendArrows: $('.pickup-nav'),
	});
	$('.cate-js-01').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		appendArrows: $('.cate-nav-01'),
	});
	$('.cate-js-02').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		appendArrows: $('.cate-nav-02'),
	});
	$('.pr-viewed-js').slick({
		arrows:false,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	
}
app.inscrease = function () {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}

app.faq = function () {
	$('.faq-item__head').on('click', function () {
		var findElm = $(this).next(".faq-item__body");
		$(findElm).stop().slideToggle();
		$(this).children('.ic').stop().toggleClass('ic-minus');
	});
}

app.splitText = function () {
	$('.btn_buy_shoppe').each(function () {
		let i = 1;
		$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		$(this).find("span").each(function () {
			$(this).attr('style', `--i:${i}`)
			i++;
		});
	});

}
$(window).scroll(function () {
	if ($(this).scrollTop() > 160) {
		$('.scroll-top').fadeIn();
		
		$('.p-header__menu').addClass('fixed');

	} else {
		$('.scroll-top').fadeOut();
		$('.p-header__menu').removeClass('fixed');
	}
});
$(document).ready(function () {
	if ($(".wow").length > 0) {
		var wow = new WOW({
			animateClass: 'animate_animated'
		});
		wow.init();
	}
	$(".ic_menu ").click(function () {
		$(this).toggleClass('active');
		$(".menu_more").slideToggle();
	});
	$(".top-mb__ic").click(function () {
		$(".p-header__menu").addClass('show');
		$(".bg-close-menu").addClass('show');
	});

	$(".bg-close-menu").click(function () {
		$(".p-header__menu").removeClass('show');
		$(".cart-content").removeClass('show');
		$(this).removeClass('show');
	});
	$('.scroll-top').click(function () {
		$('html, body').animate({ scrollTop: 0 });
		return false;

	});

	$(".ic_search").click(function () {
		$(".p-header__search").slideToggle();
	});
	$('.ic_lv').on('click', function () {
		$(this).toggleClass('is-active');
		var findElm = $(this).next(".level_3");
		$(findElm).stop().slideToggle();
	});
	app.init();
});

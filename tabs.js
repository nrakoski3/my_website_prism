jQuery(document).ready(function() {
	jQuery(' .tablink a ').on('click',function(e) {
		var currentAttrValue= $(this).attr('href');

		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

e.preventDefault();
});
});

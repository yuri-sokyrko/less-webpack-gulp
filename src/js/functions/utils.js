import $ from 'jquery';

export function mobileNavToggle(dropDownBtn, navItem) {
	dropDownBtn.toggleClass('active');
	removeToggle(navItem);
}

export function dropDown(dropDownBtn) {
	dropDownBtn.toggleClass('active');
	var toggleBlock = dropDownBtn.parent().find('.js-dropdown');
	removeToggle(toggleBlock);
}

export function removeToggle(toggleBlock) {
	toggleBlock.slideToggle(300, function() {
		if ($(this).css('display') === 'none') {
			$(this).removeAttr('style');
		}
	});
}
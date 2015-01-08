/*!
 * Super Simple Tooltips
 * Version: 0.0.1
 *
 * Dependencies: jQuery
 *
 * Usage:
 * See github page: https://github.com/vennamo/supersimpletooltips
 *
 * Licence: What licence?
 *
 */

var superSimpleTooltips = (function() {
	
	return {
	
		init: function() {
            
            $('body').append('<div class="tooltip" id="tooltip"><div class="tooltip-content" id="tooltip-content"></div>');
			
			var $tooltipContainer = $('#tooltip'),
				$tooltipContent   = $('#tooltip-content'),
				$tooltips         = $('[data-tooltip=true]'),
				offset            = 10,
                hide              = 4000,
				timeout           = null;
			
			$tooltips.on({
				mouseenter: function() {
					
					var $trigger      = $(this),
						triggerCoords = $trigger.offset(),
						tooltipCoords = {},
						text          = $trigger.data('tooltip-text'),
						position      = $trigger.data('tooltip-position'),
						arrowPosition = $trigger.data('tooltip-arrow');	
		
					$tooltipContent.empty().html(text);
					
					$tooltipContent.attr('class', function(i, cl) { return cl.replace(/\arrow-\S+/g, ''); }).addClass('arrow-'+arrowPosition);
					
					switch(position) {
						case 'top':
							tooltipCoords = {
								top:  triggerCoords.top - $tooltipContainer.outerHeight() - offset,
								left: triggerCoords.left - ($tooltipContainer.outerWidth() / 2) + ($trigger.outerWidth() / 2)
							};
							break;
						case 'right':
							tooltipCoords = {
								top:  triggerCoords.top - ($tooltipContainer.outerHeight() / 2) + ($trigger.outerHeight() / 2),
								left: triggerCoords.left + $trigger.outerWidth() + offset
							};
							break;
						case 'bottom':
							tooltipCoords = {
								top:  triggerCoords.top + $trigger.outerHeight() + offset,
								left: triggerCoords.left - ($tooltipContainer.outerWidth() / 2) + ($trigger.outerWidth() / 2)
							};
							break;
						case 'left':
							tooltipCoords = {
								top:  triggerCoords.top - ($tooltipContainer.outerHeight() / 2) + ($trigger.outerHeight() / 2),
								left: triggerCoords.left - $tooltipContainer.outerWidth() - offset
							};
							break;
					}
						
					$tooltipContainer.css(tooltipCoords).addClass('show');
					
					timeout = setTimeout(hideTip, hide);
						
				},
				mouseleave: hideTip
			});
			
			function hideTip() {
				$tooltipContainer.css({left: 0, top: 0}).removeClass('show');
				clearTimeout(timeout);
			}
			
			$(document).on('click', function() {
			
				hideTip();
				
			});
		
		},
		
		destroy: function() {
						
			var $tooltips = $('[data-tooltip=true]');
			
			$tooltips.off('mouseenter');
            
            $('#tooltip').remove();
			
		}
	
	};  

})();
/*!
 * Super Simple Tooltips
 * Version: 0.0.1
 *
 * Dependencies: jQuery
 *
 * Usage:
 *
 * Add data-attributes to any element like so:
 * <span data-tooltip="true" data-tooltip-position="left" data-tooltip-arrow="right">Im have a tooltip</span>
 *
 * Possible positions: top, right, bottom and left. Use arrow positions respectively.
 * See more from github page: https://github.com/vennamo/supersimpletooltips
 *
 * Activation:
 * 
 * call superSimpleTooltips.init();
 * 
 * If you need to deactive maybe for responsive layouts you can call destroy function.
 *
 * You can change the settings and styles as you like. If you are happy for tooltip funtioning, you can grab the minified version from dist folder.
 *
 * Licence: What licence?
 *
 */

var superSimpleTooltips = (function() {
	
	return {
	
		init: function() {
			
			var $tooltipContainer = $('#tooltip'),
				$tooltipContent   = $('#tooltip-content'),
				$tooltips         = $('[data-tooltip=true]'),
				offset            = 10,
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
					
					timeout = setTimeout(hideTip, 4000);
						
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
			
		}
	
	};  

})();
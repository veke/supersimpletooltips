## Super Simple Tooltips

See in action: http://codepen.io/anon/pen/VYPpoZ

###Usage:
<code>

	<span data-tooltip="true" data-tooltip-position="right" data-tooltip-arrow="left" data-tooltip-text="My tooltip text">
		I am a tooltip!
	</span>
	
</code>

Call the init:
<code>

	superSimpleToolTips.init();
	
	If you wish to deactivate the tooltips, call the destroy:
	
	superSimpleToolTips.destroy();
	
</code>

###Settings

Possible tooltip positions: top, right, bottom and left. Same goes for the arrows. The tooltips hides automatically after 4 seconds or any click event.

If you are happy for the defaults, you can grab the minified version.
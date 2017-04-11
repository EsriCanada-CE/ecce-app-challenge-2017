<div class="row" id="statsrow">
	<div class="col-lg-2 col-xs-6 col-md-6 transport-stats gradient1"><img src="icon/003-plane.png"/>
		<div class = "stats-text-wrapper">
			<p>Every year over <b><span class="planenums"></span></b> people fly through YHZ.</p>
		</div>
	</div>
	  
	<div class="col-lg-2 col-xs-6 col-md-6 transport-stats gradient2"><img src="icon/002-train.png"/>	
		<div class = "stats-text-wrapper">
			<p>Recently, VIA rail use has increased on average <b><span class="vianums"></span> percent</b> per year.</p>
		</div>
	</div>
	  
	<div class="col-lg-2 col-xs-6 col-md-6 transport-stats gradient1"><img src="icon/005-car.png"/>
		<div class = "stats-text-wrapper">
			<p><b><span class="carsinglenums"></span></b> people drive their cars as their main means of transportation. <b><span class="carpoolnums"></span></b> Carpooled.</p>
		</div>
	
	</div>
	  
	<div class="col-lg-2 col-xs-6 col-md-6 transport-stats gradient2"><img src="icon/006-bus.png"/>
		<div class = "stats-text-wrapper">
			<p><b><span class="metronums"></span></b> people use Halifax Transit buses as their main means of transportation. <b><span class="ferrynums"></span></b> people regularly use the ferries.</p>
		</div>
	
	</div>
	  
	<div class="col-lg-2 col-xs-6 col-md-6 transport-stats gradient1"><img src="icon/004-bicycle.png"/>
		<div class = "stats-text-wrapper">
			<p><b><span class="cyclenums"></span></b> people cycle as their primary means of transportation.</p>
		</div>
	
	</div>
	  
	<div class="col-lg-2 col-xs-6 col-md-6 transport-stats gradient2"><img src="icon/001-walking.png"/>
		<div class = "stats-text-wrapper">
			<p><b><span class="walknums"></span></b> people walk as their primary means of transportation.</p>
		</div>
	</div>
	

<script>
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
	$( "#statsrow" ).mouseenter(function() {
        $('.planenums').countTo({
            from: 0,
            to: 3000000,
            speed: 600,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });	
		
		$('.cyclenums').countTo({
            from: 0,
            to: 2115,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		
        $('.vianums').countTo({
            from: 0,
            to: 12,
            speed: 500,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		
        $('.carsinglenums').countTo({
            from: 0,
            to: 100525,
            speed: 1000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        $('.carpoolnums').countTo({
            from: 0,
            to: 16000,
            speed: 500,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		$('.metronums').countTo({
            from: 0,
            to: 21940,
            speed: 600,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		
		$('.walknums').countTo({
            from: 0,
            to: 15585,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		
		$('.ferrynums').countTo({
            from: 0,
            to: 815,
            speed: 600,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
	})
    });
</script>	
	
</div>
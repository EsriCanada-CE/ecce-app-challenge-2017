#########################################################################
########################## CSS Style URLs ###############################
#########################################################################
#css2 <- "https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
css2 <- 'js/leaflet.css'
css3 <- 'js/routing/dist/leaflet-routing-machine.css'
css4 <- 'js/geocode/dist/Control.Geocoder.css'

css5 <- "html, body, #map, .panel {margin:0; padding: 0; width: 100%; height:100%; z-index:9999;}
         .selectize-control{left:20%; position: relative;}
         .panel {display: block; max-width: 450px; opacity: 0.78; background-color: white; border: 4px solid #D7DBDD; border-radius: 12px;}
         .panel:hover{opacity:0.95; background-color: white;   transition-delay: 0;}
         .shiny-input-container {right: -15%; position: relative;}
         .selectize-input {left: -20%; position: relative;}
         .control-label {left: 0%; position: relative; }
         #gasPrice, #dist{left: 5%; position: relative;}
         #go {left: 10%; position: relative; margin-bottom: 20px;}
         #lst {position: relative; margin-bottom: 20px;}
         #fuelR, #costR, #co2R {left: 15%; position: relative;}
         .far {left: 10%; position: relative;}
        .selectize-input {width: 70%;}
        .irs {max-width: 200px;}
        #sedan, #suv, #van, #truck, #compact {height: auto; width: auto; max-width: 60px; max-height: 60px; left: 70px; position: relative;}
        #bike {height: auto; width: auto; margin: auto; max-width: 60px; max-height: 60px; right: -70%; position:relative;}
        #co2, #gas, #gasM, #mechan, #groc, #gasD, #sequ, #calor, #pig, #wrench {height: auto; width: auto; max-width: 45px; max-height: 45px;}
        #co2, #sequ {margin-left: 0;}
        #sequ, #calor, #pig, #wrench {position: relative; left: 20px;}
        .panel, #gasPrice, .control-label, .item, #go, .result {font-family: 'Droid Sans', sans-serif; font-size: 20px;}
        .result {right: -28px; position: relative;}
        .result2 {right: -48px; position: relative;}
        .txt {font-size: 14px; font-family: 'Droid Sans', sans-serif;}
        .txt2 {font-size: 14px; font-family: 'Droid Sans', sans-serif; right: -20px; position: relative;}
"

css6 <- "https://fonts.googleapis.com/css?family=Droid+Sans"
#css6 <- "css/bootstrap.min.css"
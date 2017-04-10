library(shiny)
library(dplyr)

ui <- tags$html(
        tags$head(
          tags$title("Sustainable Transport"),
          tags$script(src = jsUrl),
          tags$script(src = jsUrl2),
          tags$link(rel = 'stylesheet', type = 'text/css', href = css3),
          tags$script(src = jsUrl3),
          tags$link(rel = 'stylesheet', type = 'text/css', href = css2),
          tags$script(src = jsUrl4),
          tags$link(rel = 'stylesheet', type = 'text/css', href = css4),
          tags$style(css5),
          tags$link(rel = 'stylesheet', href = css6)
        ),
        tags$body(
          div(id = "map"),
          absolutePanel(id = 'controls', class = 'panel panel-default',
                        fixed = TRUE, draggable = TRUE, top = 270, left = 33, bottom = "auto",
                        width = 300, height = "auto",
                        h2(HTML("<font color='green'>Describe Your Commute</font>"), align = "center"),
                        selectInput("car", "Car Type", choices = c("Sedan", "SUV", "Van", "Truck", "Compact")),
                        br(),
                        sliderInput("week", "# Trips per Week", min = 1, max = 18, value = 10, step = 1),
                        br(),
                        uiOutput("gasPrice"),
                        br(),
                        actionButton("go", "View Commute Summary")
                      ),
          absolutePanel(class = 'panel panel-default', 
                        fixed = TRUE, draggable = TRUE, top = 50, left = 350, bottom = "auto", 
                        width = 400, height = "auto", 
                        h2(HTML("<font color='#2980B9'>Commute Summary</font>"), align = "center"),
                        uiOutput("dist")
          ),
          uiOutput("bike"),
          tags$script(jsCode),
          tags$script(geo1),
          #tags$script(geo),
          tags$script(src = jsUrl7)
  )
)

server <- function(input, output){
  dist <- eventReactive(input$go, {
    a <- input$valDist
    if(grepl("km", a) == TRUE){
      b <- substr(a, 1, nchar(a)-2)
    }
    else{
      b <- substr(a, 1, nchar(a)-1)
      b <- round((as.numeric(b) / 1000), 2)
    }
    list(a = a, b = b)
  })
  
  output$gasPrice <- renderText({paste("<strong> Today's Gas Price (L)</strong>: ", gasPr, sep=" ")})
  
  maintCar <- reactive({
    expMan <- round((as.numeric(dist()$b) * 0.07 * input$week),2)
    list(expMan = expMan)
  })
  
  calcStuff <- reactive({
    if(input$car == "Sedan"){
      fuel <- round((as.numeric(dist()$b) / 7.23 * input$week),2)
      cost <- round((fuel * (gasPr / 100)),2)
      CO2 <- round((fuel * 5.28 * input$week),2) 
      var <- c("$", "Gas (L)", "Emission (CO2)")
      val <- c(cost, fuel, CO2)
      df <- data.frame(var, val)
      car <- "<center><img id='sedan' src='Icons/PNG/sedan.png'>"
      list(df = df, CO2 = CO2, cost = cost, fuel = fuel, car = car)
    }
    else if(input$car == "SUV"){
      fuel <- round((as.numeric(dist()$b) / 6.38 * input$week),2)   
      cost <- round((fuel * (gasPr / 100)),2)
      CO2 <- round((fuel * 5.28 * input$week),2)
      var <- c("$", "Gas (L)", "Emission (CO2)")
      val <- c(cost, fuel, CO2)
      df <- data.frame(var, val)
      car <- "<center><img id='suv' src='Icons/PNG/SUV-48.png'>"
      list(df = df, CO2 = CO2, cost = cost, fuel = fuel, car = car)
    }
    else if(input$car == "Van"){
      fuel <- round((as.numeric(dist()$b) / 7.65 * input$week),2)
      cost <- round((fuel * (gasPr / 100)),2) 
      CO2 <- round((fuel * 5.28 * input$week),2)
      var <- c("$", "Gas (L)", "Emission (CO2)")
      val <- c(cost, fuel, CO2)
      df <- data.frame(var, val)
      car <- "<center><img id='van' src='Icons/PNG/Van-48.png'>"
      list(df = df, CO2 = CO2, cost = cost, fuel = fuel, car = car)
    }
    else if(input$car == "Truck"){
      fuel <- round((as.numeric(dist()$b) / 6.38 * input$week),2) 
      cost <- round((fuel * (gasPr / 100)),2) 
      CO2 <- round((fuel * 5.28 * input$week),2) 
      var <- c("$", "Gas (L)", "Emission (CO2)")
      val <- c(cost, fuel, CO2)
      df <- data.frame(var, val)
      car <- "<center><img id='truck' src='Icons/PNG/truck.png'>"
      list(df = df, CO2 = CO2, cost = cost, fuel = fuel, car = car)
    }
    else if(input$car == "Compact"){
      fuel <- round((as.numeric(dist()$b) / 8.93 * input$week),2) #7.23 km/L
      cost <- round((fuel * (gasPr / 100)),2) 
      CO2 <- round((fuel * 5.28 * input$week),2)
      var <- c("$", "Gas (L)", "Emission (CO2)")
      val <- c(cost, fuel, CO2)
      df <- data.frame(var, val)
      car <- "<center><img id='compact' src='Icons/PNG/compac.png'>"
      list(df = df, CO2 = CO2, fuel = fuel, cost = cost, car = car)
    }
  })

  stuff <- eventReactive(
   input$green, {
     absolutePanel(class='panel panel-default', 
                   fixed = TRUE, draggable = TRUE, top = 50, right = 79, bottom = "auto", 
                   width = 450, height = "auto", 
                   h2(HTML("<font color='#2980B9'>If you biked this route instead...</font>"), align = "center"),
                   uiOutput("susTransp")
    )
   }
  )
  
  bikeCalc <- reactive({
    maintCost <- round((as.numeric(dist()$b) * 0.014 * input$week),2)
    minCal <- round(((as.numeric(dist()$b) * 32 * input$week)/1000),2)
    maxCal <- round(((as.numeric(dist()$b) * 38 * input$week)/1000),2)
    list(maintCost = maintCost, minCal = minCal, maxCal = maxCal)
  })
  
  saving <- reactive({
    dolla <- round(((calcStuff()$cost + maintCar()$expMan) - bikeCalc()$maintCost),1)
    list(dolla = dolla)
  })
  
  output$dist <- renderText({
    paste("
          <tr>
          <th></th>
          <th align='left' class = 'result'><strong>Weekly</strong></th>
          <th></th>
          <th class='result2' align='left'><strong>Annual</strong></th>
          </tr>
          <tr>
          <th align='left'><img id='co2' src = 'Icons/SVG/011-co2.svg'><font class='txt'><strong>CO2 Released (lbs):</strong></font></th>
          <th align='left'><font class='result' color = '#F39C12'><strong>", calcStuff()$CO2, "</strong></font></th>
          <th></th>
          <th align='left'><font class='result2' color = '#F39C12'><strong>", calcStuff()$CO2*50, "</strong></font></th>  
          </tr>
          <tr>
          <th align='left'><img id='gas' src= 'Icons/SVG/015-gas-station.svg'><font class='txt'><strong>Gas Consumed (L):</strong></font></th>
          <th align='left'><font class='result' color = '#F39C12'><strong>", calcStuff()$fuel, "</strong></font></th>
          <th></th>
          <th align='left'><font class='result2' color = '#F39C12'><strong>", calcStuff()$fuel*50, "</strong></font></th>
          </tr>
          <tr>
          <th align='left'><img id='gasM' src= 'Icons/SVG/004-change.svg'><font class='txt'><strong>Gas Cost ($):</strong></font></th>
          <th align='left'><font class='result' color = '#F39C12'><strong>", calcStuff()$cost, "</strong></font></th>
          <th></th>  
          <th align='left'><font class='result2' color = '#F39C12'><strong>", calcStuff()$cost*50, "</strong></font></th>
          </tr>
          <tr>
          <th align='left'><img id='mechan' src= 'Icons/SVG/017-mechanics.svg'><font class='txt'><strong>Maint. Cost ($):</strong></font></th>
          <th align='left'><font class='result' color = '#F39C12'><strong>", maintCar()$expMan, "</strong></font></th>
          <th></th>
          <th align='left'><font class='result2' color = '#F39C12'><strong>", maintCar()$expMan*50, "</strong></font></th>
          </tr>
          <br>
          <tr>
          <th colspan='4'><br>Have you considered biking to work <br>instead?</th>
          </tr>
          <tr>
          <th colspan='4'><br><button id='green' type='button' class='btn btn-default action-button'>Compare</button></th>
          </tr>
          ", sep="")
  })

  
  output$susTransp <- reactive({
    paste("
            <tr>
              <th></th>
              <th align='left' class = 'result'><strong>Weekly</strong></th>
              <th></th>
              <th class='result2' align='left'><strong>Annual</strong></th>
            </tr>
            <tr>
              <th align='left'><img id='sequ' src = 'Icons/SVG/009-hills.svg'><font class='txt2'><strong>CO2 Released (lbs):</strong></font></th>
              <th align='left'><font class='result' color = '#F39C12'><strong>", 0, "</strong></font></th>
              <th></th>
              <th align='left'><font class='result2' color = '#F39C12'><strong>", 0, "</strong></font></th>
            </tr>
            <tr>
              <th align='left'><img id='calor' src= 'Icons/PNG/calories.png'><font class='txt2'><strong>Calories Burned (kcal):</strong></font></th>
              <th align='left'><font class='result' color = '#F39C12'><strong>", bikeCalc()$minCal, " - ", bikeCalc()$maxCal,"</strong></font></th>
              <th></th>
              <th align='left'><font class='result2' color = '#F39C12'><strong>", bikeCalc()$minCal*50, " - ", bikeCalc()$maxCal*50,"</strong></font></th>
            </tr>
            <tr>
              <th align='left'><img id='wrench' src= 'Icons/SVG/019-wrench.svg'><font class='txt2'><strong>Maint. Cost:</strong></font></th>
              <th align='left'><font class='result' color = '#F39C12'><strong>$", bikeCalc()$maintCost, "</strong></font></th>
              <th></th>
              <th align='left'><font class='result2' color = '#F39C12'><strong>$", bikeCalc()$maintCost*50, "</strong></font></th>
            </tr>
            <br>
            <tr>
              <th align='left'><img id='pig' src= 'Icons/SVG/001-piggy-bank.svg'><font class='txt2' color = '#27AE60'><strong><u>Savings:</u></strong></font></th>
              <th align='left'><font class='result' color = '#27AE60'><strong>$", saving()$dolla, "</strong></font></th>
              <th></th>
              <th align='left'><font class='result2' color = '#27AE60'><strong>$", saving()$dolla*50, "</strong></font></th>
            </th>
            </tr>
          ", sep="")
  })
  
  output$bike <- renderUI({
    stuff()
  })
    
}

shinyApp(ui = ui, server = server)
################################################################
# Function: SetWD()
#
# Purpose: Set working directory of script and return directory
################################################################
this.dir <- setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

library(shiny)

source.dir   <- "www/"
source.files <- paste(source.dir, c("js.R", "css.R", "scrape.R"), sep="")

for(file in source.files)
  source(file)

runApp('app.R')
library(rvest)
library(xml2)
gas <- read_html("http://stockr.net/Toronto/GasPrice.aspx")

fnames <- html_nodes(x = gas, css = '#lPrice2') %>%
  html_text()

gasPr <- as.numeric(as.character(fnames))
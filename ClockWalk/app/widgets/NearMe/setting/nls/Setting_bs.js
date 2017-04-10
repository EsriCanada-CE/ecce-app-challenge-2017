// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Milje",acronym:"mi"},kilometers:{displayText:"Kilometri",acronym:"km"},feet:{displayText:"Stope",acronym:"ft"},meters:{displayText:"Metri",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Postavke izvora pretra\u017eivanja",searchSourceSettingTitle:"Postavke izvora pretra\u017eivanja",searchSourceSettingTitleHintText:"Dodajte i konfigurirajte usluge geokodiranja ili slojeve s geoobjektima kao izvorima pretra\u017eivanja. Ti odre\u0111eni izvori odre\u0111uju \u0161to se mo\u017ee pretra\u017eiti u okviru za pretra\u017eivanje",
addSearchSourceLabel:"Dodaj izvor pretra\u017eivanja",featureLayerLabel:"Sloj geoobjekta",geocoderLabel:"geokoder",nameTitle:"Naziv",generalSettingLabel:"Op\u0107e postavke",allPlaceholderLabel:"Mjesto za unos teksta za pretra\u017eivanje svega:",allPlaceholderHintText:"Savjet: unesite tekst koji \u0107e se prikazati kao mjesto za unos prilikom pretra\u017eivanja svih slojeva i geokodera",generalSettingCheckboxLabel:"Prika\u017ei sko\u010dni prozor za prona\u0111eni geoobjekt ili lokaciju",countryCode:"Pozivni broj za dr\u017eavu ili regiju",
countryCodeEg:"npr. ",countryCodeHint:"Ako ostavite ovu vrijednost praznom, pretra\u017eit \u0107e se sve dr\u017eave i regije",questionMark:"?",searchInCurrentMapExtent:"Pretra\u017ei samo trenuta\u010dni obuhvat karte",zoomScale:"Mjerilo uve\u0107anja",locatorUrl:"URL geokodera",locatorName:"Naziv geokodera",locatorExample:"Primjer",locatorWarning:"Ova verzija usluge geokodiranja nije podr\u017eana. Widget podr\u017eava verziju usluge geokodiranja 10.0 i novije verzije.",locatorTips:"Prijedlozi nisu dostupni jer usluga geokodiranja ne podr\u017eava mogu\u0107nost predlaganja.",
layerSource:"Izvor sloja",setLayerSource:"Postavi izvor sloja",setGeocoderURL:"Postavi URL geokodera",searchLayerTips:"Prijedlozi nisu dostupni jer usluga geoobjekata ne podr\u017eava mogu\u0107nost numeriranja stranica.",placeholder:"Mjesto za unos teksta",searchFields:"Polja za pretra\u017eivanje",displayField:"Polje za prikaz",exactMatch:"To\u010dno podudaranje",maxSuggestions:"Maksimalni prijedlozi",maxResults:"Maksimalni rezultati",enableLocalSearch:"Omogu\u0107i lokalno pretra\u017eivanje",
minScale:"Min. mjerilo",minScaleHint:"Kad je mjerilo karte ve\u0107e od ovog mjerila, primijenit \u0107e se lokalno pretra\u017eivanje",radius:"Polumjer",radiusHint:"Odre\u0111uje polumjer podru\u010dja oko trenuta\u010dnog sredi\u0161ta karte koje se upotrebljava za pove\u0107anje broja kandidata za geokodiranje kako bi se prvi prikazali kandidati koji su najbli\u017ei lokaciji",meters:"Metri",setSearchFields:"Postavi polja za pretra\u017eivanje",set:"Postavi",fieldName:"Naziv",invalidUrlTip:"URL ${URL} nije valjan ili dostupan."},
searchSetting:{searchSettingTabTitle:"Postavke pretra\u017eivanja",defaultBufferDistanceLabel:"Postavite zadanu udaljenost pojasa",maxResultCountLabel:"Ograni\u010di broj rezultata",maxResultCountHintLabel:"Savjet: postavite maksimalni broj vidljivih rezultata. Vrijednost od 1 vratit \u0107e najbli\u017ei geoobjekt",maxBufferDistanceLabel:"Postavi maksimalnu udaljenost pojasa",bufferDistanceUnitLabel:"Jedinice veli\u010dine pojasa",defaultBufferHintLabel:"Podsjetnik: postavite zadanu vrijednost za kliza\u010d pojasa",
maxBufferHintLabel:"Podsjetnik: postavite maksimalnu vrijednost za kliza\u010d pojasa",bufferUnitLabel:"Podsjetnik: definirajte jedinicu za stvaranje pojasa",selectGraphicLocationSymbol:"Simbol adrese ili lokacije",graphicLocationSymbolHintText:"Podsjetnik: simbol za pretra\u017eenu adresu ili odabranu lokaciju",fontColorLabel:"Odaberite boju fonta za rezultate pretra\u017eivanja",fontColorHintText:"Podsjetnik: boja fonta za rezultate pretra\u017eivanja",zoomToSelectedFeature:"Uve\u0107aj odabrani geoobjekt",
zoomToSelectedFeatureHintText:"Podsjetnik: uve\u0107aj odabrani geoobjekt umjesto pojasa",intersectSearchLocation:"Vrati poligon(e) koji se sijeku",intersectSearchLocationHintText:"Podsjetnik: vratite poligon(e) koji sadr\u017ee tra\u017eene lokacije umjesto poligone unutar pojasa",bufferVisibilityLabel:"Postavi vidljivost pojasa",bufferVisibilityHintText:"Podsjetnik: pojas \u0107e se prikazati na karti",bufferColorLabel:"Postavi simbol pojasa",bufferColorHintText:"Podsjetnik: odaberite boju i prozirnost pojasa",
searchLayerResultLabel:"Nacrtaj samo rezultate odabranog sloja",searchLayerResultHint:"Podsjetnik: samo \u0107e se odabrani sloj u rezultatima pretra\u017eivanja nacrtati na karti",showToolToSelectLabel:"Postavi gumb lokacije",showToolToSelectHintText:"Savjet: pru\u017ea gumb za postavljanje lokacije na karti umjesto postavljanja lokacije kad se klikne na kartu",geoDesicParamLabel:"Upotrijebite geodetski pojas",geoDesicParamHintText:"Savjet: upotrijebite geodetski pojas umjesto euklidskog pojasa (planarnog)"},
layerSelector:{selectLayerLabel:"Odaberite sloj(eve) koji se mogu pretra\u017eivati",layerSelectionHint:"Podsjetnik: upotrijebite gumb za postavljanje sloja(eva) za odabir",addLayerButton:"Postavi"},routeSetting:{routeSettingTabTitle:"Postavke uputa za vo\u017enju",routeServiceUrl:"Usluga rutiranja",buttonSet:"Postavi",routeServiceUrlHintText:"Podsjetnik: kliknite na \u00e2\u20ac\u02dcPostavi\u00e2\u20ac\u2122 kako biste pregledavali i odabrali uslugu rutiranja",directionLengthUnit:"Jedinice udaljenosti u uputama za vo\u017enju",
unitsForRouteHintText:"Posjetnik: upotrebljava se za prikaz jedinica rute",selectRouteSymbol:"Odaberi simbol za prikaz rute",routeSymbolHintText:"Podsjetnik: upotrebljava se za prikaz linije rute",routingDisabledMsg:"Da biste omogu\u0107ili upute za vo\u017enju, provjerite je li rutiranje omogu\u0107eno u ArcGIS Onlineu."},networkServiceChooser:{arcgislabel:"Dodaj iz ArcGIS Online",serviceURLabel:"Dodaj URL usluge",routeURL:"URL rute",validateRouteURL:"Provjera",exampleText:"Primjer",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Odredite va\u017ee\u0107u uslugu rutiranja.",rateLimitExceeded:"Prema\u0161eno ograni\u010denje ocjenjivanja. Poku\u0161ajte ponovno kasnije.",errorInvokingService:"Korisni\u010dko ime ili lozinka nije ispravna."},errorStrings:{bufferErrorString:"Unesite valjanu broj\u010danu vrijednost.",selectLayerErrorString:"Odaberite sloj(eve) za pretra\u017eivanje.",invalidDefaultValue:"Zadana veli\u010dina pojasa ne mo\u017ee biti prazna. Odredite veli\u010dinu pojasa",
invalidMaximumValue:"Maksimalna veli\u010dina pojasa ne mo\u017ee biti prazna. Odredite veli\u010dinu pojasa",defaultValueLessThanMax:"Odredite zadanu veli\u010dinu pojasa unutar maksimalnog ograni\u010denja",defaultBufferValueGreaterThanOne:"Zadana udaljenost pojasa ne mo\u017ee biti manja od 1",maximumBufferValueGreaterThanOne:"Odredite maksimalnu udaljenost pojasa koja je ve\u0107a od 1",invalidMaximumResultCountValue:"Odredite valjanu vrijednost za maksimalni zbroj rezultata",invalidSearchSources:"Neva\u017ee\u0107e postavke pretra\u017eivanja izvora"},
symbolPickerPreviewText:"Pretpregled:",_localized:{}}});
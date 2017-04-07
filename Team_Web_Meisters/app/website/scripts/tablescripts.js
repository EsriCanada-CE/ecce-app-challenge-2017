$(document).ready( function() {
  $(document).ready(function() {
    $('table.display').dataTable();
} );

  $('#doctable').dataTable( {
    "iDisplayLength": 100,
    "paging":  false,
    "sDom": '<"top">rt<"bottom"flp><"clear">',
    "bFooter": false,

  } );

} );
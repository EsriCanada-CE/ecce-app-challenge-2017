<!--********************************************************************** 
	ECCE Challenge 
	Property Online Project
	2017-02-27
	NSCC COGS
 **********************************************************************-->

<?php $title = 'ECCE APP CHALLENGE'?>
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/header.php';?>
<!--Page Body Contents-->
<body>
	<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/nav.php';?>
	
	
	<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/stats.php';?>
	
	<div class = "row" id="ecce-challenge-link">
		<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/jumbotron.php';?>
	</div>
	
	<a class ="anchor" id="gotomap"></a>
	<div class = "row" id="ecce-challenge-display">	
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/map.php';?>
	</div>
	
	<div class="row util-row" id ="color-line">
		<div class="util-row-center">
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/fuelcalc.php';?>
				
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/socialmedia.php';?>

		</div>
	</div>
	
	<div class ="row"></div>

	<div class="row">
	<a class ="anchor" id="gotooverview"></a>
	<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/missionstatement.php';?>
	</div>
	
	<div class="row">
	<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/references.php';?>
	</div>

	<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/sustainabletransit/inc/footer.php';?>
	
</div>
	

</body>
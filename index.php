<html>
<head>
	<title>Magic Mirror</title>
	<style type="text/css">
		<?php include('css/main.css') ?>
	</style>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
	<script type="text/javascript">
		var gitHash = '<?php echo trim(shell_exec('git rev-parse HEAD')) ?>';
	</script>
	<meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta http-equiv="Cache-control" content="no-cache">
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
</head>
<body>

	<div class="top right">
    <div class="windsun small dimmed"></div>
    <div class="temp"></div>
    <div class="forecast small dimmed"></div>
<!--    <iframe id="planefinder" width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://embed.planefinder.net"></iframe>-->
  </div>
  <div class="top left">
    <div class="date small dimmed"></div>
    <div class="time" id="time"></div>
    <div class="calendar xxsmall"></div>
  </div>
	<div class="center-ver center-hor">
<!--     <div class="dishwasher light">Vaatwasser is klaar!</div>-->
  </div>
	<div class="lower-third center-hor">
    <div class="compliment light"></div>
  </div>
	<div class="bottom center-hor">
<!--    <div class="news medium"></div>-->

    <div class="age xsmall">
      <div class="totalTimer"></div>
      <div class="yearsTimer"></div>
      <div class="monthsTimer"></div>
      <div class="weeksTimer"></div>
      <div class="daysTimer"></div>
      <div class="hoursTimer"></div>
      <div class="minutesTimer"></div>
      <div class="secondsTimer"></div>
      <!--      <div class="dow"></div>-->
      <div class="next-birthday"></div>
    </div>
  </div>

</div>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
<!--<script src="js/jquery.js"></script>-->
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/ical_parser.js"></script>
<script src="js/creds.js"></script>
<script src="js/moment-with-locales.min.js"></script>
<script src="js/config.js"></script>
<script src="js/rrule.js"></script>
<script src="js/version/version.js"></script>
<script src="js/calendar/calendar.js"></script>
<script src="js/compliments/compliments.js"></script>
<script src="js/weather/weather.js"></script>
<script src="js/time/time.js"></script>
<script src="js/news/news.js"></script>
<script src="js/countdown/age.js"></script>
<script src="js/countdown/countdown.min.js"></script>
<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!--<script src="js/planeFinder.js"></script>-->
<!-- <script src="js/socket.io.min.js"></script> -->
<?php  include(dirname(__FILE__).'/controllers/modules.php');?>
</body>
</html>

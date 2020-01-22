$(document).ready(function()	{
	$("form#fortuneIntake").submit(function(event)	{
		event.preventDefault();
		var badTotal = 0;
		$("input:checkbox[name=badEvents]:checked").each(function() {
			badTotal += 1;
		});
    
    var goodTotal = 0;
		$("input:checkbox[name=goodEvents]:checked").each(function() {
      goodTotal += 1;
    });
    
    
    if (goodTotal > badTotal){
      $("#goodReading").show()
      $("#badReading").hide()
      $("#neutralReading").hide()
    } else if (badTotal > goodTotal) {
      $("#badReading").show()
      $("#neutralReading").hide()
      $("#goodReading").hide()
    } else {
      $("#neutralReading").show()
      $("#goodReading").hide()
      $("#badReading").hide()
    }

	
	});
});
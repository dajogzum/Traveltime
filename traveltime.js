Module.register("traveltime",{

	defaults: {
	},

	start: function() {
		this.updater();
	},

	getStyles: function() {
		return ["style_traveltime.css"];
	},

	getDom: function() {
		self = this;
		var wrapper = document.createElement("div");
		wrapper.id = "traveltime";
		return wrapper;
	},

	updater: function() {
		var url = "https://maps.googleapis.com/maps/api/directions/json?origin=ryzowa%2049&destination=Smolenska%2087&departure_time=now&waypoints=via:52.215906%2020.960237|via:52.278655%2021.011689&language=pl&traffic_model=best_guess&key=%20AIzaSyA-j7teJoJlXDNDLfUGHbpUkfddAL39fcE"
		var readytime, valueInTraff, valueWoTraff, jam;
		setInterval(function () {
  			var xhttp = new XMLHttpRequest();
 			xhttp.open("get", url, true);
  			xhttp.send();
  			xhttp.onreadystatechange = function() {
    			if (this.readyState == 4) {
    				 if (this.readyState == 4) {
   					readytime = JSON.parse(this.response).routes[0].legs[0].duration_in_traffic.text;
					valueInTraff = JSON.parse(this.response).routes[0].legs[0].duration_in_traffic.value;
					valueWoTraff = JSON.parse(this.response).routes[0].legs[0].duration.value;
					valueInTraff = Math.round(valueInTraff/60);
					valueWoTraff = Math.round(valueWoTraff/60);
					jam = valueInTraff - valueWoTraff;
						if(jam>5 && jam<=12){
							document.getElementById("traveltime").innerHTML = "Szacowany czas przejazdu: <span style='color:orange'>"+readytime+"</span></br>Opóźnienie: "+jam+" min";
							console.log("JAM: "+jam);
							}else if(jam>12){
							document.getElementById("traveltime").innerHTML = "Szacowany czas przejazdu: <span style='color:red'>"+readytime+"</span></br>Opóźnienie: "+jam+" min";
							console.log("JAM: "+jam);
							}else{
							document.getElementById("traveltime").innerHTML = "Szacowany czas przejazdu: "+readytime;
							console.log("JAM: "+jam);
							}
   						}
    			}
    		}
    	}, 60*1000);
	},
});

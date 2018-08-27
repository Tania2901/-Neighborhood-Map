import fetchJsonp from "fetch-jsonp"

const wikiURL ='https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=wikiCallBack&search=';

export const Place = function(window, data, map, infoWindow, filterText){
	var self = this;
	this.position = data.position;
	this.title = data.title;
	this.wikiValue = data.search;
	this.content = '<h3>' + self.title + '</h3>';
	this.filterText = filterText;
	this.infoWindow = infoWindow;

	this.marker = new window.google.maps.Marker({
		position: self.position,
		animation: window.google.maps.Animation.DROP,
		title: self.title
	});

	window.google.maps.event.addListener(self.marker, 'click', function(){
		self.showInfo();
	});

	fetchJsonp(wikiURL+self.wikiValue, {
		timeout: 1000
	}).then((response) => response.json())
	.then(function(data) {
		  self.content = '<h3>' + self.title + '</h3>'+'<p>' + data[2][0] + '<span> more on' + '<a href=' + data[3][0] + ' target="blank"> Wikipedia</a></p>';
	}).catch(function() {
			alert("failed to get wikipedia resources");
	});

	this.showInfo = function() {
		self.toggleBounce();
		this.infoWindow.setContent(self.content);
		this.infoWindow.open(map, self.marker);
	}	

	this.visible = function(){
		if (this.filterText.length > 0){
			return (self.title.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
		}
		else{
			return true;
		}
	};

	this.setMarker = function(){
		if (self.visible()) {
			self.marker.setMap(map);
		} else {
			self.marker.setMap(null);
		}
	};

	this.toggleBounce = function() {
		if (self.marker.getAnimation() !== null) 
		{
			self.marker.setAnimation(null);
		} 
		else 
		{
			self.marker.setAnimation(window.google.maps.Animation.BOUNCE);
			setTimeout(function(){
				self.marker.setAnimation(null);
			}, 2000);
		}
	};
};
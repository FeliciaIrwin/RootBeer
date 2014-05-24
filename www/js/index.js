var mainIngredients = [
	"", "Creamy", "Rich", "Smooth", "Vanilla", "Caffeine Free", "High Caffeine", "Ginger", "Bold", "Cherry", "Wintergreen", "Clean", "Crisp", "Birch", "Spicy", "Sassafras", "Cinnamon", "Anise", "Black Pepper", "Mushroom", "Chocolate", "Coffee", "Caramel", "Licorice", "Diet", "Dark", "Strong", "Clove", "Molasses", "Cassia", "Sasaparilla", "Herbs", "Berries", "Honey", "Other"
];

var desserts = [
	{
		"name": "A&W Root Beer",
		"image": "img/R-AAW-1.jpg", 
		"ingredients": ["Creamy", "Rich", "Smooth"],
		"likes": 0
	},
	{
		"name": "Anchor Ginger Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Ginger", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Averys Root Beer",
		"image": "img/R-AV-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Barrel Brothers Creamy Vanilla Root Beer",
		"image": "img/R-BA-1.jpg", 
		"ingredients": ["Creamy", "Vanilla", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Bawls Guarana Root Beer",
		"image": "img/R-BA10-1.jpg", 
		"ingredients": ["High Caffeine"],
		"likes": 0
	},
	{
		"name": "Bedfords Root Beer",
		"image": "img/R-BD-1.jpg", 
		"ingredients": ["Bold", "Creamy", "Vanilla", "Cherry", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "Berghoff Root Beer",
		"image": "img/R-BE-1.jpg", 
		"ingredients": ["Caffeine Free", "Creamy", "Smooth", "Clean", "Crisp", "Birch", "Rich"],
		"likes": 0
	},
	{
		"name": "Big Ben Root Beer",
		"image": "img/R-BB-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
		
	},
	{
		"name": "Boylans Root Beer",
		"image": "img/R-BO-1.jpg", 
		"ingredients": ["Rich", "Spicy", "Sassafras", "Cinnamon", "Anise", "Black Pepper", "Mushroom", "Birch", "Chocolate", "Coffee", "Vanilla", "Wintergreen", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Boylands Birch Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Birch"],
		"likes": 0
	},
	{
		"name": "Brownie Caramel Root Beer",
		"image": "img/R-BRO-1.jpg", 
		"ingredients": ["Caramel", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Buckin' Root Beer",
		"image": "img/R-BU-1.jpg", 
		"ingredients": ["Rich", "Sassafras", "Spicy"],
		"likes": 0
	},
	{
		"name": "Bulldog Root Beer",
		"image": "img/R-BL-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Bundaberg Root Beer",
		"image": "img/R-BUN-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Capone Family Secret Root Beer",
		"image": "img/R-CAP-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Captn Elis Root Beer",
		"image": "img/R-CA-1.jpg", 
		"ingredients": ["Wintergreen", "Anise", "Vanilla"],
		"likes": 0
	},
	{
		"name": "Chicago Root Beer",
		"image": "img/R-CH-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Cool Mountain Gourmet Root Beer",
		"image": "img/R-CO-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Coopers Cave Root Beer",
		"image": "img/R-COO-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Crater Lake Root Beer",
		"image": "img/R-CRA-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Dad's Old Fashioned Root Beer",
		"image": "img/R-DA-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Dang! Butterscotch Root Beer",
		"image": "img/R-DANB-1.jpg", 
		"ingredients": ["Butterscotch"],
		"likes": 0
	},
	{
		"name": "Dang! Root Beer",
		"image": "img/R-DAN-1.jpg", 
		"ingredients": ["Licorice", "Smooth"],
		"likes": 0
	},
	{
		"name": "Death Valley Root Beer",
		"image": "img/R-DEA-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Diet Berghoff Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet","Caffeine Free", "Creamy", "Smooth", "Clean", "Crisp", "Birch", "Rich"],
		"likes": 0
	},
	{
		"name": "Diet Dad's Old Fashioned Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet","Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Diet Empire Bottling Workds Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet Filbert's Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet Fitz's St. Louis Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet Gray's Gourmet Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet IBC Amber Longnecks Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet Saranac Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet Sprecher Microbrews Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet Squamscot Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Diet Virgil's Root Beer Sweetened With Stevia",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Diet"],
		"likes": 0
	},
	{
		"name": "Dorothy's Root Beer",
		"image": "img/R-DOR-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Dr Browns Kosher Root Beer",
		"image": "img/R-DR-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Dr. McGillacuddy;s Root Beer",
		"image": "img/R-MC-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Empire Bottling Root Beer",
		"image": "img/R-EM-1.jpg", 
		"ingredients": ["Strong", "Dark", "Sassafras", "Licorice", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "Erics Famous Root Beer",
		"image": "img/R-ERI-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Faygo Root Beer",
		"image": "img/R-FA-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Filberts Root Beer",
		"image": "img/R-FIL-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Firemans Brew Root Beer",
		"image": "img/R-FIR-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Fitz's Root Beer",
		"image": "img/R-FI-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Foxon Park Root Beer",
		"image": "img/R-FOX-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Frostie Root Beer",
		"image": "img/R-FR-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Frostie Vanilla Root Beer",
		"image": "img/R-FR-V-1.jpg", 
		"ingredients": ["Vanilla", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Gales Root Beer",
		"image": "img/R-GA-1.jpg", 
		"ingredients": ["Cinnamon", "Ginger", "Vanilla", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Gene Autry Root Beer",
		"image": "img/R-GE-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Goose Island Root Beer",
		"image": "img/R-GO-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Hanks Root Beer",
		"image": "img/R-HK-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Henry Weinhards Root Beer",
		"image": "img/R-HE-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Hosmer Root Beer",
		"image": "img/R-HOS-1.jpg", 
		"ingredients": ["Rich", "Bold", "Creamy", "Cinnamon", "Vanilla", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "IBC Root Beer",
		"image": "img/R-IB-1.jpg", 
		"ingredients": ["Smooth", "Creamy", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "III Dachshund Root Beer",
		"image": "img/R-3D-1.jpg", 
		"ingredients": ["Creamy", "Sassafras", "Caramel", "Vanilla", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "Iron Horse Root Beer",
		"image": "img/R-IR-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Johnnie Ryan Root Beer",
		"image": "img/R-JOH-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Jones Root Beer",
		"image": "img/R-JON-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Judge Wapner Root Beer",
		"image": "img/R-JU-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Kutztown Root Beer",
		"image": "img/R-KU-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Langers Root Beer",
		"image": "img/R-LA-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Lion Brewery Root Beer",
		"image": "img/R-LIO-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Maine Root Organic Root Beer",
		"image": "img/R-MA-O-1.jpg", 
		"ingredients": ["Wintergreen", "Clove", "Anise", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Margo's Bark Root Beer",
		"image": "img/R-MAR-1.jpg", 
		"ingredients": ["Molasses", "Vanilla", "Clove", "Cassia", "Nutmeg", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "Mason's Kegbrewed Root Beer",
		"image": "img/R-MA-1.jpg", 
		"ingredients": ["Sassafras", "Wintergreen", "Vanilla", "Spicy", "Creamy", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Mount Angel Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Myers Avenue Red Root Beer",
		"image": "img/R-MY-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Natural Brew Draft Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Rich", "Creamy", "Vanilla", "Anise", "Sasaparilla", "Licorice", "Birch", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "O-So Butterscotch Root Beer",
		"image": "img/R-OSO-1.jpg", 
		"ingredients": ["Butterscotch", "Creamy"],
		"likes": 0
	},
	{
		"name": "Old Red Eye Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Old Town Root Beer",
		"image": "img/R-OT-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Olde Brooklyn Birch Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Caffeine Free", "Birch"],
		"likes": 0
	},
	{
		"name": "Olde Brooklyn Root Beer",
		"image": "img/R-OLD-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Olde Philadelphia Root Beer",
		"image": "img/R-PHI-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Olde Rhode Island Root Beer",
		"image": "img/R-OL-1.jpg", 
		"ingredients": ["Dark", "Rich", "Sassafras", "Molasses", "Vanilla", "Wintergreen", "Creamy"],
		"likes": 0
	},
	{
		"name": "Oogave Root Beer",
		"image": "img/R-OO-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Point Premium Root Beer",
		"image": "img/R-POI-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Pop Shoppe Root Beer",
		"image": "img/R-PS-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Red Arrow Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Dark", "Licorice", "Wintergreen", "Bold", "Strong", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "River City Root Beer",
		"image": "img/R-RI-1.jpg", 
		"ingredients": ["Rich", "Creamy", "Sassafras", "Wintergreen", "Vanilla", "Licorice", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Rocket Fizz Root Beer Float",
		"image": "img/R-BE-D-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Saranac Root Beer",
		"image": "img/R-SA-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Sea Dog Root Beer",
		"image": "img/R-SE-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Sioux City Root Beer",
		"image": "img/R-SI-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Snake River Sasparilla Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "So Duh! Root Beer",
		"image": "img/R-SD-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Sparky's Fresh Draft Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Sprecher Root Beer",
		"image": "img/R-SP16-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Spring Grove Root Beer",
		"image": "img/R-SPR-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Squamscot Root Beer",
		"image": "img/R-SQ-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Stewarts Root Beer",
		"image": "img/R-ST-1.jpg", 
		"ingredients": ["Herbs", "Berries", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Thomas Kemper Root Beer",
		"image": "img/R-TH-1.jpg", 
		"ingredients": ["Honey", "Vanilla", "Smooth"],
		"likes": 0
	},
	{
		"name": "TommyKnocker Root Beer",
		"image": "img/R-TK-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Trader Joes Vintage Root Beer",
		"image": "img/R-TJ-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Triple AAA Root Beer",
		"image": "img/R-DA-D-1.jpg", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Triple XXX Root Beer",
		"image": "img/R-TR-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Virgils Root Beer",
		"image": "img/R-VI-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Waialua Hawaiian Root Beer",
		"image": "img/R-WA-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Zuberfizz Creamy Root Beer",
		"image": "img/R-ZU-1.jpg", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	}
];

reloadRatings();
for(var i = 0; i < mainIngredients.length; i++) {
	var newOption = '<option value="' + mainIngredients[i] + '">' + mainIngredients[i] + '</option>';
	$("#main-ingredients").append(newOption);
}

$( "#main-ingredients" ).change(function() {
	$("#selected-desserts").children().remove();
	for(var j = 0; j < desserts.length; j++) {
		var ingredients = desserts[j] ["ingredients"];
		for(var k = 0; k < ingredients.length; k++) {
			if(ingredients[k] == $("#main-ingredients option:selected").text()) {
				var dessertRow = makeRow(desserts[j]["name"], desserts[j]["image"], desserts[j]["likes"]);

				$("#selected-desserts").append(dessertRow);
				// grabs likes count and reloads it
				var likesCount = desserts[j]["likes"]; 
				
				if ( likesCount > 0) {
					$(":radio[data-name='" + desserts[j]["name"] + "']").each(function(idx,val) {

						if (idx < likesCount) {
							$(this).prop("checked",true);
						}
					});				
					
				}			

			}
		}
	}
});

function makeRow(name, image, likes) {
	var row = '<tr>';
	row += '<td>' + name + '</td>';
	row += '<td><img src="' + image + '" /></td>';	
	row += '<td><span class="star-rating">';
  	row +=		'<input type="radio" name="rating" value="1" data-name="' + name + '"><i></i>';
  	row +=		'<input type="radio" name="rating" value="2" data-name="' + name + '"><i></i>';
  	row +=		'<input type="radio" name="rating" value="3" data-name="' + name + '"><i></i>';
  	row +=		'<input type="radio" name="rating" value="4" data-name="' + name + '"><i></i>';
  	row +=		'<input type="radio" name="rating" value="5" data-name="' + name + '"><i></i>';
	row +=		'</span>';
	row += '</tr>';	
	return row;
}

// $('table').on('click', 'button', function() {
// 	var dessert = $(this).data("name");
// 	for(var j = 0; j < desserts.length; j++) {
// 		if(dessert == desserts[j]["name"]) {
// 			desserts[j]["likes"]++;
// 			$(this).parent().prev().html(desserts[j]["likes"] + ' ' + 'likes');
// 			saveRatings();
// 			break;
// 		}
// 	}
// });

function reloadRatings () {
    if (Modernizr.localstorage) {
        if (localStorage["mainIngredients"] != null) {
            mainIngredients = JSON.parse(localStorage["mainIngredients"]);
            desserts = JSON.parse(localStorage["desserts"]);

        }
	}
}

function saveRatings () {
    if (Modernizr.localstorage) {
        localStorage.clear();
            localStorage["mainIngredients"] = JSON.stringify(mainIngredients);
            localStorage["desserts"] = JSON.stringify(desserts);
    }
}

// css-star-rating
$('table').on('change', ':radio', function(event) {
    var dessert = $(this).data("name");
    for(var j = 0; j < desserts.length; j++) {
		if(dessert == desserts[j]["name"]) {
			desserts[j]["likes"] = this.value;
			saveRatings();
			break;
		}
	}
});
var mainIngredients = [
	"", "Creamy", "Rich", "Smooth", "Vanilla", "Caffeine Free", "High Caffeine", "Ginger", "Bold", "Cherry", "Wintergreen", "Clean", "Crisp", "Birch", "Spicy", "Sassafras", "Cinnamon", "Anise", "Black Pepper", "Mushroom", "Chocolate", "Coffee", "Caramel", "Licorice", "Diet", "Dark", "Strong", "Clove", "Molasses", "Cassia", "Sasaparilla", "Herbs", "Berries", "Honey", "Other"
];

var desserts = [
	{
		"name": "A&W Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-AAW-1.jpg?1385392682", 
		"ingredients": ["Creamy", "Rich", "Smooth"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Anchor Ginger Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Ginger", "Caffeine Free"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Averys Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-AV-1.jpg?1385394386", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Barrel Brothers Creamy Vanilla Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BA-1.jpg?1342626022", 
		"ingredients": ["Creamy", "Vanilla", "Caffeine Free"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Bawls Guarana Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BA10-1.jpg?1385401934", 
		"ingredients": ["High Caffeine"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Bedfords Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BD-1.jpg?1342627756", 
		"ingredients": ["Bold", "Creamy", "Vanilla", "Cherry", "Wintergreen"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Berghoff Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BE-1.jpg?1342627925", 
		"ingredients": ["Caffeine Free", "Creamy", "Smooth", "Clean", "Crisp", "Birch", "Rich"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Big Ben Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BB-1.jpg?1385392798", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
		
	},
	{
		"name": "Boylans Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BO-1.jpg?1342628256", 
		"ingredients": ["Rich", "Spicy", "Sassafras", "Cinnamon", "Anise", "Black Pepper", "Mushroom", "Birch", "Chocolate", "Coffee", "Vanilla", "Wintergreen", "Caffeine Free"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Boylands Birch Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/templates/TRBS%20current/images/nophoto.gif?1323168167", 
		"ingredients": ["Birch"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Brownie Caramel Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BRO-1.jpg?1385394638", 
		"ingredients": ["Caramel", "Caffeine Free"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Buckin' Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BU-1.jpg?1342628412", 
		"ingredients": ["Rich", "Sassafras", "Spicy"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Bulldog Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BL-1.jpg?1342628085", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Bundaberg Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BUN-1.jpg?1342628523", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Capone Family Secret Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-CAP-1.jpg?1342629780", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Captn Elis Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-CA-1.jpg?1342789201", 
		"ingredients": ["Wintergreen", "Anise", "Vanilla"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Chicago Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-CH-1.jpg?1385394795", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Cool Mountain Gourmet Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-CO-1.jpg?1342631341", 
		"ingredients": ["Caffeine Free"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Coopers Cave Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-COO-1.jpg?1342631487", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Crater Lake Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-CRA-1.jpg?1342631848", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Dad's Old Fashioned Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-1.jpg?1342632545", 
		"ingredients": ["Caffeine Free"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Dang! Butterscotch Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DANB-1.jpg?1342632886", 
		"ingredients": ["Butterscotch"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Dang! Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DAN-1.jpg?1342634088", 
		"ingredients": ["Licorice", "Smooth"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Death Valley Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DEA-1.jpg?1342635338", 
		"ingredients": ["Other"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Berghoff Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet","Caffeine Free", "Creamy", "Smooth", "Clean", "Crisp", "Birch", "Rich"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Dad's Old Fashioned Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet","Caffeine Free"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Empire Bottling Workds Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-EM-D-1.jpg?1342906190", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Filbert's Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Fitz's St. Louis Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Gray's Gourmet Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet IBC Amber Longnecks Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Saranac Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Sprecher Microbrews Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Squamscot Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Diet Virgil's Root Beer Sweetened With Stevia",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Diet"],
		"likes": 0,
		"dislikes": 0
	},
	{
		"name": "Dorothy's Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DOR-1.jpg?1342636039", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Dr Browns Kosher Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DR-1.jpg?1342641576", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Dr. McGillacuddy;s Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-MC-1.jpg?1342904373", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Empire Bottling Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-EM-1.jpg?1342642364", 
		"ingredients": ["Strong", "Dark", "Sassafras", "Licorice", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "Erics Famous Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-ERI-1.jpg?1342642823", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Faygo Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-FA-1.jpg?1342643134", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Filberts Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-FIL-1.jpg?1342643694", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Firemans Brew Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-FIR-1.jpg?1385402246", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Fitz's Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-FI-1.jpg?1342643342", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Foxon Park Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-FOX-1.jpg?1342643836", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Frostie Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-FR-1.jpg?1342644000", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Frostie Vanilla Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-FR-V-1.jpg?1342644255", 
		"ingredients": ["Vanilla", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Gales Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-GA-1.jpg?1342645119", 
		"ingredients": ["Cinnamon", "Ginger", "Vanilla", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Gene Autry Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-GE-1.jpg?1385403986", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Goose Island Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-GO-1.jpg?1342645382", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Hanks Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-HK-1.jpg?1342647325", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Henry Weinhards Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-HE-1.jpg?1342647193", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Hosmer Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-HOS-1.jpg?1342647495", 
		"ingredients": ["Rich", "Bold", "Creamy", "Cinnamon", "Vanilla", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "IBC Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-IB-1.jpg?1342648758", 
		"ingredients": ["Smooth", "Creamy", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "III Dachshund Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-3D-1.jpg?1342904618", 
		"ingredients": ["Creamy", "Sassafras", "Caramel", "Vanilla", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "Iron Horse Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-IR-1.jpg?1342648931", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Johnnie Ryan Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-JOH-1.jpg?1342649901", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Jones Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-JON-1.jpg?1342650014", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Judge Wapner Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-JU-1.jpg?1342789655", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Kutztown Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-KU-1.jpg?1342650299", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Langers Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-LA-1.jpg?1342650477", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Lion Brewery Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-LIO-1.jpg?1342653150", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Maine Root Organic Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-MA-O-1.jpg?1342653705", 
		"ingredients": ["Wintergreen", "Clove", "Anise", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Margo's Bark Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-MAR-1.jpg?1385405039", 
		"ingredients": ["Molasses", "Vanilla", "Clove", "Cassia", "Nutmeg", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "Mason's Kegbrewed Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-MA-1.jpg?1342653336", 
		"ingredients": ["Sassafras", "Wintergreen", "Vanilla", "Spicy", "Creamy", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Mount Angel Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Myers Avenue Red Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-MY-1.jpg?1342789875", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Natural Brew Draft Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-NB-1.jpg?1372256565", 
		"ingredients": ["Rich", "Creamy", "Vanilla", "Anise", "Sasaparilla", "Licorice", "Birch", "Wintergreen"],
		"likes": 0
	},
	{
		"name": "O-So Butterscotch Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-OSO-1.jpg?1386237638", 
		"ingredients": ["Butterscotch", "Creamy"],
		"likes": 0
	},
	{
		"name": "Old Red Eye Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Old Town Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-OT-1.jpg?1323168167", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Olde Brooklyn Birch Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/templates/TRBS%20current/images/nophoto.gif?1323168167", 
		"ingredients": ["Caffeine Free", "Birch"],
		"likes": 0
	},
	{
		"name": "Olde Brooklyn Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-OLD-1.jpg?1342790375", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Olde Philadelphia Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-PHI-1.jpg?1342791083", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Olde Rhode Island Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-OL-1.jpg?1342789970", 
		"ingredients": ["Dark", "Rich", "Sassafras", "Molasses", "Vanilla", "Wintergreen", "Creamy"],
		"likes": 0
	},
	{
		"name": "Oogave Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-OO-1.jpg?1342790895", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Point Premium Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-POI-1.jpg?1342791322", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Pop Shoppe Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-PS-1.jpg?1342791588", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Red Arrow Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Dark", "Licorice", "Wintergreen", "Bold", "Strong", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "River City Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-RI-1.jpg?1342799545", 
		"ingredients": ["Rich", "Creamy", "Sassafras", "Wintergreen", "Vanilla", "Licorice", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Rocket Fizz Root Beer Float",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-BE-D-1.jpg?1385393978", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Saranac Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SA-1.jpg?1342801073", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Sea Dog Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SE-1.jpg?1342802574", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Sioux City Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SI-1.jpg?1342802901", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Snake River Sasparilla Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/templates/TRBS%20current/images/nophoto.gif?1323168167", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "So Duh! Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SD-1.jpg?1342802374", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Sparky's Fresh Draft Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SP22-1.jpg?1323168167", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Sprecher Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SP16-1.jpg?1342803434", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Spring Grove Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SPR-1.jpg?1342803559", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Squamscot Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-SQ-1.jpg?1342803721", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Stewarts Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-ST-1.jpg?1342803889", 
		"ingredients": ["Herbs", "Berries", "Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Thomas Kemper Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-TH-1.jpg?1342804008", 
		"ingredients": ["Honey", "Vanilla", "Smooth"],
		"likes": 0
	},
	{
		"name": "TommyKnocker Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-TK-1.jpg?1342804201", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Trader Joes Vintage Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-TJ-1.jpg?1342805681", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Triple AAA Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-DA-D-1.jpg?1342905973", 
		"ingredients": ["Other"],
		"likes": 0
	},
	{
		"name": "Triple XXX Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-TR-1.jpg?1342804377", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Virgils Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-VI-1.jpg?1342804557", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Waialua Hawaiian Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-WA-1.jpg?1342804924", 
		"ingredients": ["Caffeine Free"],
		"likes": 0
	},
	{
		"name": "Zuberfizz Creamy Root Beer",
		"image": "https://cdn3.volusion.com/xfore.gofgn/v/vspfiles/photos/R-ZU-1.jpg?1342805118", 
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
				var dessertRow = makeRow(desserts[j]["name"], 
					desserts[j]["image"], desserts[j]["likes"]);
				$("#selected-desserts").append(dessertRow);
			}
		}
	}
});

function makeRow(name, image, likes) {
	var row = '<tr>';
	row += '<td>' + name + '</td>';
	row += '<td><img src="' + image + '" /></td>';
	row += '<td>' + likes + ' ' +' likes</td>';
	row += '<td><button class="classname" data-name="' + name + '">Love It!</button></td>';
	row += '</tr>';
	return row;
}

$('table').on('click', 'button', function() {
	var dessert = $(this).data("name");
	for(var j = 0; j < desserts.length; j++) {
		if(dessert == desserts[j]["name"]) {
			desserts[j]["likes"]++;
			$(this).parent().prev().html(desserts[j]["likes"] + ' ' + 'likes');
			saveRatings();
			break;
		}
	}
});

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


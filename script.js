window.onload = function(){
	
	var productList, widgetSize, mainItem, mainItemPayCond, itemRecommended, addButton, singleListItem, productContainer, recommendedProductContainer, recommendedProductList;
	
	productContainer = document.getElementById("product-container");
	recommendedProductContainer = document.getElementById("recommended-products");
	recommendedProductList = document.getElementById("products-list");
	recommendedProductHeader = document.getElementById("product-header");
	singleListItem = document.getElementById("single-item");
	
	function myFunction(jFile){
		var myObj = JSON.parse(jFile.responseText);
		
		//Storing Json values in the variables to ease the process of consulting it.
		productList = myObj[0].data;
		widgetSize = productList.widget.size;
		mainItem = productList.item;
		itemRecommended = productList.recommendation;
		mainItemPayCond = mainItem.productInfo.paymentConditions;
		
		//Truncating text with ellipsis
		function truncateString(textElement){
			if(textElement.length > 100){
				return textElement.substring(0,100) + "...";
				
				}else{
				return textElement.substring(0,999);
			}
		}
		
		function splitString(textElementP){
			if(textElementP != false && textElementP != undefined){
				var findIndex1 = textElementP.indexOf("ou");
				var findIndex2 = textElementP.indexOf("sem");
				var findIndex3 = textElementP.indexOf("até");
				//Return the words OU
				var textVar1 = textElementP.substring(findIndex1, (findIndex1 + 3));
				//Return the words SEM JUROS
				var textVar2 = textElementP.substring(findIndex2, (findIndex2 + 9));
				//Return the words from ATÉ to right before SEM
				var textVar3 = textElementP.substring(findIndex3, (findIndex2 - findIndex3)+ 3);
				return textElementP = "<span>" + textVar1 + "</span><span class='highlightedPrice'>" + textVar3 + "</span><span>" + textVar2 + "</span>"
				}else{
				return alert("ops!");
			}
		}
		
		//Function responsible for defining obj's value and responsible for  creating the HTML code
		function builderBlock(){
			var formattedText = truncateString(mainItem.name);
			var formattedPrice = splitString(mainItemPayCond)
			var createStructure = "<div class='mainProductHeader'><h3>Voce visitou:</h3></div><div id='chosen-product' class='chosenProduct boxProducts'><img src='https:" + 
			mainItem.imageName +"' alt='" + mainItem.businessId + "' class='productImage' /><div id='product-description' class='mainProductBodyText'>" +
			formattedText + "</div><div id='product-price' class='productPrice'><span>Por:</span> <span class='itemPrice'>" +
			mainItem.price + "</span></div><div id='product-in-instalments' class='productInInst'>" +
			formattedPrice + "</div></div>";
			
			//Exihibiting the content on the screen
			productContainer.innerHTML = createStructure;
		}
		builderBlock();
		
		function builderBlockRec(){
			var formattedTextRed = "";
			var formattedPriceRed = "";
			var createStructureRec = "";
			var recommendedHeader = document.createElement("h3");
			var y = document.createTextNode("e talvez se interesse por:");
			recommendedHeader.appendChild(y);
			recommendedProductHeader.appendChild(recommendedHeader);
			
			//recommendedProductHeader.innerHTML = createStructureTitle
			
			for(var i=0; i<itemRecommended.length; i++){
				formattedPriceRed = splitString(itemRecommended[i].productInfo.paymentConditions);
				formattedTextRed = truncateString(itemRecommended[i].name);
				createStructureRec += "<li class='slide boxProducts slide" + i + "' id='single-item'><img src='https:" + itemRecommended[i].imageName +"' alt='" +
				itemRecommended[i].businessId +	"' class='productImage' /><div id='product-description'>" + formattedTextRed +
				"</div><div id='product-price' class='productPrice'><span>Por:</span> <span class='itemPrice'>" + itemRecommended[i].price +
				"</span></div><div id='product-in-instalments' class='productInInst'>" +
				formattedPriceRed +
				"</div><div class='addButton' id='add-button' ><span>adicionar ao carrinho</span><i class='material-icons md-18 orange600'>add_shopping_cart</i></div></li>";
			}
			recommendedProductList.innerHTML = createStructureRec;
		}
		builderBlockRec();
		
		
		//Make the slider to functionate forwardly
		document.getElementById("next-button").addEventListener("click", function(){
			var currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');;
			currentCssVarState = parseInt(currentCssVarState);
			//currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
			switch(currentCssVarState){
				case 0:
				recommendedProductList.style.setProperty('--selected-item', '1');
				currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
				currentCssVarState = parseInt(currentCssVarState);
				
				break;
				case 1:
				recommendedProductList.style.setProperty('--selected-item', '2');
				currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
				currentCssVarState = parseInt(currentCssVarState);
				
				break;
				
				default: 
				recommendedProductList.style.setProperty('--selected-item', '0');
				currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
				currentCssVarState = parseInt(currentCssVarState);
				
				break;
			}
			
		});
		//Make the slider to functionate forwardly
		document.getElementById("prev-button").addEventListener("click", function(){
			var currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');;
			currentCssVarState = parseInt(currentCssVarState);
			//currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
			switch(currentCssVarState){
				case 2:
				recommendedProductList.style.setProperty('--selected-item', '1');
				currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
				currentCssVarState = parseInt(currentCssVarState);
				
				break;
				case 1:
				recommendedProductList.style.setProperty('--selected-item', '0');
				currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
				currentCssVarState = parseInt(currentCssVarState);
				
				break;
				default:
				recommendedProductList.style.setProperty('--selected-item', '2');
				currentCssVarState = getComputedStyle(recommendedProductList).getPropertyValue('--selected-item');
				currentCssVarState = parseInt(currentCssVarState);
				
				break;
			}
			
		});
	}
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			myFunction(this);
		}
	};
	xhttp.open("GET", "https://raw.githubusercontent.com/johnnascimento/itelios-frontend-challenge/master/products.json", true);
	xhttp.send();
};
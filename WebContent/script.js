var cart = [['item', 0.00, 0]];

function addToCart(productName, productPrice) {

	/*
	var addQuantity = false;
	var count = 0;
	
	var product = new Object();
	product = {name: productName, price: productPrice, quantity: 1};
	
	if(cart === undefined) {
		cart = product;
	} else {
		for (var object of cart) {
			count = 0;
			for (var key of pair) {
				if (pair[key] === productName) {
					addQuantity = true;
				}
				if (addQuantity) {
					pair[key] += 1;
				}
				count++;
			}
		}
	}
	*/
	
	var present = false; 
	
	for (var item of cart) {
		console.log("2" + cart);
		if (item[2] === 0) {
			continue;
		}
		if (item[0] === productName) {
			item[1] += productPrice;
			item[2] += 1;
			present = true;
			console.log("3" + cart);
		}
	}
	if (present === false) {
		console.log("4" + cart);
		cart.push([productName, productPrice, 1]);
	}

	var cartAdd = document.getElementById('addHead');
	cartAdd.insertAdjacentHTML("afterend", "<tr id=\"omgWork\"></tr>");
	var omg = document.getElementById('omgWork');
	omg.insertAdjacentHTML("afterbegin", "<td>" + productName + "</td><td>" + productPrice + "</td><td><i><small>added to cart</small></i></td>");
}

function checkout() {
	/*
	var hide = document.getElementById('showAdded');
	hide.style.visibility = 'hidden';
	
	var show = document.getElementById('showCart');
	show.style.visibility = 'visible';
	*/
	
	if(cart[1][0] === undefined) {
		console.log("5" + cart);
		var cartShow = document.getElementById('cartHead');
		cartShow.insertAdjacentHTML("afterend", "<tr id=\"omgWork\">" + "<i>cart empty!</i>" + "</tr>");		
	} else {
		for(var item of cart) {
			if (item[2] === 0) {
				continue;
			}
			console.log("6" + cart);
			var cartShow = document.getElementById('cartHead');
			cartShow.insertAdjacentHTML("afterend", "<tr id=\"omfg\"></tr>");
			var omg = document.getElementById('omfg');
			omfg.insertAdjacentHTML("afterbegin", "<td>" + item[0] + "</td><td>" + item[1] + "</td><td>" + item[2] + "</td>");
		}
	}

}
const f = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
var cart = [['item', 0.00, 0]];

function addToCart(productName, productPrice) {
	
	var parent = document.getElementById("addBody");
	var child = document.getElementById("omgWork");
	if (child) {
		parent.removeChild(child);
	}
	
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

	var cartAdd = document.getElementById('addBody');
	cartAdd.insertAdjacentHTML("beforeend", "<tr id=\"omgWork\"></tr>");
	var omg = document.getElementById('omgWork');
	omg.insertAdjacentHTML("afterbegin", "<td><br>" + productName + "</td><td><br>" + f.format(productPrice) + "</td><td><i><small><br>added to cart</small></i></td>");
}

function checkout() {
	/*
	var hide = document.getElementById('showAdded');
	hide.style.visibility = 'hidden';
	
	var show = document.getElementById('showCart');
	show.style.visibility = 'visible';
	*/
	
	var parent = document.getElementById("cartDiv");
	var child = document.getElementById("table");
	if (child) {
		parent.removeChild(child);
	}

	var div = document.getElementById("cartDiv");
	var table = document.createElement("table");
	table.id = 'cart';
	table.style = "overflow-x:auto;"
	div.appendChild(table);
	var thead = document.createElement("thead");
	table.appendChild(thead);
	var tbody = document.createElement("tbody");
	tbody.id = 'cartContents';
	table.appendChild(tbody);
	var row = document.createElement("tr");
	row.id = 'cartHead';
	thead.appendChild(row);
	var head = document.createElement("th");
	row.appendChild(head);
	var header = document.createTextNode("Product")
	head.appendChild(header);
	head = document.createElement("th");
	row.appendChild(head);
	header = document.createTextNode("Price");
	head.appendChild(header);
	head = document.createElement("th");
	row.appendChild(head);
	header = document.createTextNode("Quantity")
	head.appendChild(header);
	
	var subTotal = 0;
	if(cart[1][0] === undefined) {
		console.log("5" + cart);
		var cartShow = document.getElementById('cartContents');
		cartShow.insertAdjacentHTML("afterbegin", "<tr></tr><tr id=\"omgWork\">" + "<i>cart empty!</i>" + "</tr><tr></tr>");		
	} else {
		for(var item of cart) {
			if (item[2] === 0) {
				continue;
			}
			console.log("6" + cart);
			var cartShow = document.getElementById('cartContents');
			cartShow.insertAdjacentHTML("afterbegin", "<tr id=\"omfg\"></tr>");
			var omg = document.getElementById('omfg');
			omg.insertAdjacentHTML("afterbegin", "<td>" + item[0] + "</td><td>" + f.format(item[1]) + "</td><td>" + item[2] + "</td>");
			subTotal += item[1];
		}
	}
	var tax = subTotal * 0.06;
	var cartSubTotal = document.getElementById('cartContents');
	cartSubTotal.insertAdjacentHTML("beforeend", "<tr id=\"omfgSubTotal\"></tr>");
	var omfg = document.getElementById('omfgSubTotal');
	omfg.insertAdjacentHTML("afterbegin", "<td><br>" + item[0].length + " items</td><td><br>subtotal: " + f.format(subTotal) + "</td><td><br>tax: " + f.format(tax) + "</td>");

	var total = subTotal + tax;
	var cartTotal = document.getElementById('cartContents');
	cartTotal.insertAdjacentHTML("beforeend", "<tr id=\"omfgTotal\"></tr>");
	var omfg = document.getElementById('omfgTotal');
	omfg.insertAdjacentHTML("afterbegin", "<td><br></td><td><br></td><td><br>Total: " + f.format(total) + "</td>");
}

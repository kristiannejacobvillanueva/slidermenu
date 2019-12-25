var index = 1;

showimages(index);

var timer = setInterval(function()
	{
		buttons(1)
	}, 3000);

// previous and next buttons
function buttons(button_selected)
	{
		clearInterval(timer);
		
		if(button_selected < 0)
			{
				showimages(index -= 1);
			}
		else
			{
				showimages(index += 1);
			}

		if(button_selected === -1)
			{
				timer = setInterval(function()
					{
						buttons(button_selected + 2)
					}, 3000);
			}
		else
			{
				timer = setInterval(function()
					{
						buttons(button_selected + 1)
					}, 3000);
			}
	}

// will still loop when indicators are clicked or selected
function indicators(indicator_selected)
	{
		clearInterval(timer);
		timer = setInterval(function(){buttons(indicator_selected + 1)}, 3000);
		showimages(index = indicator_selected);
	}

function showimages(si) // si = show images
	{
		var images = document.getElementsByClassName("images");
		var indicators = document.getElementsByClassName("indicators");

		// infinite loop when using the right button
		if(si > images.length)
			{
				index = 1;
			}

		// infinite loop when using the left button
		if(si < 1)
			{
				index = images.length;
			}

		// keeping all 'images' hidden that doesn't have a display of 'block'
		for(i = 0; i < images.length; i++)
			{
				images[i].style.display = "none";
			}

		// keeping all 'indicators' not to have a class named 'active' when it's not selected
		for(i = 0; i < indicators.length; i++)
			{
				indicators[i].className = indicators[i].className.replace(" active", "");
			}

		// show images by updating the display from 'none' to 'block'
		images[index - 1].style.display = "block";

		// adding class named 'active' to 'indicators' to track which is active
		indicators[index - 1].className += " active";
	}
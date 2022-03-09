# DotProgress

DotProgress is a simple and somewhat hypnotic progress indicator. It's 2.2 kb (gziped), customizable, and has no dependencies. [Demos](https://jiggmin.com/projects/dot-progress/examples.html)

## Simple Example

	//create a DotProgress instance
	var elm = document.getElementById('dot-holder')
	var dots = new DotProgress(elm)

	//set progress as things load
	dots.setProgress(.5)


## Using images

	//javascript
	var options = {
		activeDisplay: '',
		inactiveDisplay: '',
	}
	var elm = document.getElementById('dot-holder')
	var dots = new DotProgress(elm, options)
	dots.setProgress(.5)

	//css
	.dot-inactive {
		background: url('/img/dot-sprite.png')
		width: 12px
		height: 12px
	}

	.dot-active {
		background: url('/img/dot-sprite.png') -12px 0px
		width: 12px
		height: 12px
	}


## Methods

**start()**
Start animating

**stop()**
Stop animating

**setProgress(num)**
Update the display with the current progress

**remove()**
Stop animating, and remove DotProgress from the DOM


## Options

There are several options that you can pass in to the constructor:

	var options = {
		inactiveDisplay: 'X',
		activeDisplay: 'O',
		width: 150,
		height: 150,
		spacing: 10,
		rows: 5,
		columns: 5,
		depth: 5,
		xRotVel: 0.015,
		yRotVel: 0.021,
		zRotVel: 0,
		transitionVel: 1,
		shuffle: true
	}
	var elm = document.getElementById('dot-holder')
	var dots = new DotProgress(elm, options)

**inactiveDisplay**
[String]
Dots representing uncompleted progress will display this html.

**activeDisplay**
[String]
Dots representing completed progress will display this html.

**width**
[Number]
Total width of the DotProgress display area.

**height**
[Number]
Total height of the DotProgress display area.

**spacing**
[Number]
Space in pixels between dots.

**rows**
[Number]
Number of rows of dots.

**columns**
[Number]
Number of columns of dots.

**depth**
[Number]
Distance between active dots and inactive dots.

**xRotVel**
[Number]
Speed that the dots rotate around the x axis.

**yRotVel**
[Number]
Speed that the dots rotate around the y axis.

**zRotVel**
[Number]
Speed that the dots rotate around the z axis.

**transitionVel**
[Number]
Controls how fast dots transition from their inactive position to their active position.

**shuffle**
[Boolean]
Determines whether the order that dots activate is random or orderly.


## Support
* See working examples at [jiggmin.com/projects/dot-progress/examples.html](https://jiggmin.com/projects/dot-progress/examples.html)

DotProgress was built by [Jacob Grahn](https://jiggmin.com), and is released for free under the MIT license, which means you can use it for almost any commercial or non-commercial purpose. Credit is welcome, but not required.
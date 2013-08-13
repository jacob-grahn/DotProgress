# DotProgress

DotProgress is a simple and somewhat hypnotic progress indicator. It's customizable, and has no dependencies. [Demos.](https://jiggmin.com/projects/dot-progress/examples.html)

## Simple Example

	//create a DotProgress instance
	var elm = document.getElementById('dot-holder');
	var dots = new dotProgress.DotProgress(elm);

	//set progress as things load
	dots.setProgress(.5);

## Using images

	//javascript
	var options = {
		activeDisplay: '',
		inactiveDisplay: '',
	};
	var elm = document.getElementById('dot-holder');
	var dots = new dotProgress.DotProgress(elm, options);
	dots.setProgress(.5);

	//css
	.dot-inactive {
		background: url('/img/dot-sprite.png');
		width: 12px;
		height: 12px;
	}

	.dot-active {
		background: url('/img/dot-sprite.png') -12px 0px;
		width: 12px;
		height: 12px;
	}

## Customization

There are several options that you can pass in to the constructor:

**inactiveDisplay**
(String) (Default='X')
Dots representing uncompleted progress will display this html.

**activeDisplay**
(String) (Default='Y')
Dots representing completed progress will display this html.

**width**
(Number) (Default=150)
Total width of the DotProgress display area.

**height**
(Number) (Default=150)
Total height of the DotProgress display area.

**spacing**
(Number) (Default=10)
Space in pixels between dots.

**rows**
(Number) (Default=5)
Number of rows of dots.

**columns**
(Number) (Default=5)
Number of columns of dots.

**depth**
(Number) (Default=5)
Distance between active dots and inactive dots.

**xRotVel**
(Number) (Default=0.015)
Speed that the dots rotate around the x axis.

**yRotVel**
(Number) (Default=0.021)
Speed that the dots rotate around the y axis.

**zRotVel**
(Number) (Default=0)
Speed that the dots rotate around the z axis.

**transitionVel**
(Number) (Default=1)
Controls how fast dots transition from their inactive position to their active position.

**shuffle**
(Boolean) (Default=true)
Determines whether the order that dots activate is random or orderly.



## Support
* See working examples at [jiggmin.com/projects/dot-progress/examples.html](https://jiggmin.com/projects/dot-progress/examples.html)

DotProgress was built by [Jacob Grahn](https://jiggmin.com), and is released for free under the MIT license, which means you can use it for almost any commercial or non-commercial purpose. Credit is welcome, but not required.
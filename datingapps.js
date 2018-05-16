$(document).ready(function() {

  

/* ===============swipe=============== */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card(props) {
		_classCallCheck(this, Card);

		var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

		_this.state = {
			active: false,
			move: false,
			limit: false,
			mouseStartPosX: null,
			mouseStartPosY: null,
			mouseCurrPosX: null,
			mouseCurrPosY: null,
			Posx: null,
			Posy: null,
			k: 0.2,
			restX: 0,
			restY: 0,
			fx: 0,
			fy: 0,
			ax: 0,
			ay: 0,
			vx: 0.0,
			vy: 0.0,
			mass: 0.7,
			damping: 0.8
		};
		_this.handleDown = _this.handleDown.bind(_this);
		_this.handleUp = _this.handleUp.bind(_this);
		_this.handleMove = _this.handleMove.bind(_this);
		_this.animate = _this.animate.bind(_this);
		_this.updateCard = _this.updateCard.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		return _this;
	}

	_createClass(Card, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.animate();
		}
	}, {
		key: "handleDown",
		value: function handleDown(e) {
			this.setState({
				move: true,
				active: true,
				mouseStartPosX: e.clientX,
				mouseStartPosY: e.clientY
			});
		}
	}, {
		key: "handleTouchStart",
		value: function handleTouchStart(e) {
			e.persist();
			this.setState({
				move: true,
				active: true,
				mouseStartPosX: e.touches[0].screenX,
				mouseStartPosY: e.touches[0].screenY
			});
			console.log(this.state.mouseStartPosX);
		}
	}, {
		key: "handleMove",
		value: function handleMove(e) {
			var _this2 = this;

			if (!this.state.limit) {
				if (this.state.move) {
					var map_range = function map_range(value, low1, high1, low2, high2) {
						return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
					};

					var mouseCurrPosX = e.clientX;
					var mouseCurrPosY = e.clientY;
					var Posx = mouseCurrPosX - this.state.mouseStartPosX;
					var Posy = mouseCurrPosY - this.state.mouseStartPosY;
					var el = document.getElementById("card" + this.props.no);
					var height = window.innerHeight;
					var width = window.innerWidth;
					var maxX = width - width * 20 / 100;

					var mouseRange = mouseCurrPosX;
					if (mouseRange < width / 2) {
						mouseRange = width - mouseRange;
					}
					var damping = map_range(mouseRange, width / 2, width - width * 10 / 100, 0.6, 0.8);

					this.setState({
						Posx: Posx,
						Posy: Posy,
						damping: damping,
						mouseCurrPosX: mouseCurrPosX,
						mouseCurrPosY: mouseCurrPosY
					});

					if (mouseCurrPosX > width - width * 20 / 100) {
						var restX = void 0,
						    restY = void 0;
						if (mouseCurrPosX > width / 2) {
							restX = this.state.Posx * 5;
						} else {
							restX = -this.state.Posx * 5;
						}
						if (mouseCurrPosY > height / 2) {
							restY = this.state.Posy * 5;
						} else {
							restY = this.state.Posy * 5;
						}
						var limit = true;
						var move = false;
						var _damping = 0.06;
						this.setState({
							restX: restX,
							restY: restY,
							limit: limit,
							move: move,
							damping: _damping
						}, function () {
							setTimeout(function () {
								window.cancelAnimationFrame(_this2.animate);
							}, 10);
						});
					} else if (mouseCurrPosX < width * 20 / 100) {
						var _restX = void 0,
						    _restY = void 0;
						if (mouseCurrPosX > width / 2) {
							_restX = -this.state.Posx * 5;
						} else {
							_restX = this.state.Posx * 5;
						}
						if (mouseCurrPosY > height / 2) {
							_restY = this.state.Posy * 5;
						} else {
							_restY = this.state.Posy * 5;
						}
						var _limit = true;
						var _move = false;
						var _damping2 = 0.06;
						this.setState({
							restX: _restX,
							restY: _restY,
							limit: _limit,
							move: _move,
							damping: _damping2
						});
					}
				}
			}
		}
	}, {
		key: "handleTouchMove",
		value: function handleTouchMove(e) {
			var _this3 = this;

			e.persist();
			if (!this.state.limit) {
				if (this.state.move) {
					var map_range = function map_range(value, low1, high1, low2, high2) {
						return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
					};

					var mouseCurrPosX = e.touches[0].screenX;
					var mouseCurrPosY = e.touches[0].screenY;
					var Posx = mouseCurrPosX - this.state.mouseStartPosX;
					var Posy = mouseCurrPosY - this.state.mouseStartPosY;
					var el = document.getElementById("card" + this.props.no);
					var height = window.innerHeight;
					var width = window.innerWidth;
					var maxX = width - width * 20 / 100;

					var mouseRange = mouseCurrPosX;
					if (mouseRange < width / 2) {
						mouseRange = width - mouseRange;
					}
					var damping = map_range(mouseRange, width / 2, width - width * 10 / 100, 0.6, 0.8);

					this.setState({
						Posx: Posx,
						Posy: Posy,
						damping: damping,
						mouseCurrPosX: mouseCurrPosX,
						mouseCurrPosY: mouseCurrPosY
					});

					if (mouseCurrPosX > width - width * 10 / 100) {
						var restX = void 0,
						    restY = void 0;
						if (mouseCurrPosX > width / 2) {
							restX = this.state.Posx * 5;
						} else {
							restX = -this.state.Posx * 5;
						}
						if (mouseCurrPosY > height / 2) {
							restY = this.state.Posy * 5;
						} else {
							restY = this.state.Posy * 5;
						}
						var limit = true;
						var move = false;
						var _damping3 = 0.08;
						this.setState({
							restX: restX,
							restY: restY,
							limit: limit,
							move: move,
							damping: _damping3
						}, function () {
							setTimeout(function () {
								window.cancelAnimationFrame(_this3.animate);
							}, 10);
						});
					} else if (mouseCurrPosX < width * 10 / 100) {
						var _restX2 = void 0,
						    _restY2 = void 0;
						if (mouseCurrPosX > width / 2) {
							_restX2 = -this.state.Posx * 5;
						} else {
							_restX2 = this.state.Posx * 5;
						}
						if (mouseCurrPosY > height / 2) {
							_restY2 = this.state.Posy * 5;
						} else {
							_restY2 = this.state.Posy * 5;
						}
						var _limit2 = true;
						var _move2 = false;
						var _damping4 = 0.08;
						this.setState({
							restX: _restX2,
							restY: _restY2,
							limit: _limit2,
							move: _move2,
							damping: _damping4
						});
					}
				}
			}
		}
	}, {
		key: "handleUp",
		value: function handleUp() {
			this.setState({
				move: false
			});
		}
	}, {
		key: "handleTouchEnd",
		value: function handleTouchEnd() {
			this.setState({
				move: false
			});
		}
	}, {
		key: "updateCard",
		value: function updateCard() {
			var _this4 = this;

			if (!this.state.move) {
				this.setState({
					fx: -this.state.k * (this.state.Posx - this.state.restX),
					fy: -this.state.k * (this.state.Posy - this.state.restY)
				}, function () {
					_this4.setState({
						ax: _this4.state.fx / _this4.state.mass,
						ay: _this4.state.fy / _this4.state.mass
					}, function () {
						_this4.setState({
							vx: _this4.state.damping * (_this4.state.vx + _this4.state.ax),
							vy: _this4.state.damping * (_this4.state.vy + _this4.state.ay)
						}, function () {
							_this4.setState({
								Posx: _this4.state.Posx + _this4.state.vx,
								Posy: _this4.state.Posy + _this4.state.vy
							});
						});
					});
				});
			}
		}
	}, {
		key: "animate",
		value: function animate() {
			var el = document.getElementById("card" + this.props.no);
			if (this.state.Posx > window.innerWidth + 400 || this.state.Posx < -window.innerWidth - 400) {
				cancelAnimationFrame(this.animate);
			} else {
				requestAnimationFrame(this.animate);
			}
			if (this.state.active) {
				el.style.transform = "translate(" + this.state.Posx + "px" + "," + this.state.Posy + "px) rotate(" + this.state.Posx / 9 + "deg) perspective(800px)";
				this.updateCard();
			}
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{
					id: "card" + this.props.no,
					className: "card color" + this.props.no,
					onMouseDown: this.handleDown,
					onMouseMove: this.handleMove,
					onMouseUp: this.handleUp,
					onMouseLeave: this.handleUp,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd
				},
				React.createElement(
					"div",
					{ className: "text" },
					/*"DRAG THE CARD LEFT OR RIGHT"==========*/
				)
			);
		}
	}]);

	return Card;
}(React.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App(props) {
		_classCallCheck(this, App);

		var _this5 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this5.state = {
			data: [0, 1, 2, 3, 4]
		};
		return _this5;
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			var box = this.state.data.map(function (item, i) {
				return React.createElement(Card, { key: i, no: i });
			});
			return React.createElement(
				"div",
				{ className: "app" },
				box
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));


/* =================End Swipe=============== */






/* ===============HotSpot=============== */


/*function used in several places to show slide info in photo1*/
	var showInfo = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X1-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	/*nots info*/
	$('#circle_rednots').click(function () {
		showInfo();
		$('#popIn').text("Having to swipe every person one by one rather than picking from a list creates a rhythm that keeps you on the app longer." ).addClass('popIn-info');
	});


	/*apps info*/
	$('#circle_redapps').click(function () {
		showInfo();
		$('#popIn').text("It's not just notifications. The colors of app icons are also chosen to stimulate our brains, according to design ethicist Tristan Harris.").addClass('popIn-info');
	});

	/*close info window*/

	$('#X1-close').click(function () {
		$('#X1-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 1*/





	/*Start functions for photo2*/

	var showInfo2 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X2-close').addClass('btn_close_show');
		$('#slide2').addClass('info_slides_show');
	}

	/*human info*/
	 $('#circle_human').click(function () {
		showInfo2();
		$('#popIn2').text("Coffee Meets Bagel tries to keep you coming back with streaks, points to earn, and countdowns.").addClass('popIn-info');
	});  






	$('#X2-close').click(function () {
		$('#X2-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide2').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo2*/





	/*Start functions for photo3*/

	var showInfo3 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X3-close').addClass('btn_close_show');
		$('#slide3').addClass('info_slides_show');
	}

	/*autopplay info*/
/*	$('#circle_autoplay').click(function () {
		showInfo3();
		$('#popIn3').text('“You get a show or a movie you’re really dying to watch, and you end up staying up late at night, so we actually compete with sleep." —Netflix CEO Reed Hastings.').addClass('popIn-info');
	}); */


	/*recommended info*/
	$('#circle_recommended').click(function () {
		showInfo3();
		$('#popIn3').text('Rather than swiping, Hinge uses a scrolling feature, allowing direct interaction with the dater’s profile where you can “heart” their photos or little tidbits they write, and immediately start a natural conversation.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X3-close').click(function () {
		$('#X3-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide3').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo3*/




		/*Start functions for photo4*/

	var showInfo4 = function () {
		$('.circle').addClass('hide_btn');
		/*.circle so it closes all circles.*/
		$('#X4-close').addClass('btn_close_show');
		$('#slide4').addClass('info_slides_show');
		

		$()
	}

	/*autopplay info*/
	$('#circle_device').click(function () {
		showInfo4();
		$('#popIn4').text("hi").addClass('popIn-info2');
	}); 


	/*recommended info*/
	$('#circle_society').click(function () {
		showInfo4();
		$('#popIn4').text("hi2").addClass('popIn-info2');
	});

	/*close info window*/

	$('#X4-close').click(function () {
		$('#X4-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide4').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/


	});

	/*closes functions for photo4*/

/* =================End HotSpot=============== */

});

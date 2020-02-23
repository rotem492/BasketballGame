(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BasketballGame_atlas_", frames: [[990,638,32,32],[0,833,343,298],[992,377,32,32],[457,833,121,40],[580,833,117,41],[457,875,115,34],[345,833,110,49],[802,0,222,375],[0,0,800,831],[802,377,188,259],[802,638,186,260]]}
];


// symbols:



(lib.ComboBox = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.crearNone = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.DISP_NAME_TEXTINPUT = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.downLine = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.noLine = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.onLine = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.overLine = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.plant = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.עיקרוןהדמותרקע = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.תמונהלמסיחH = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.תמונהלמסיחR = function() {
	this.spriteSheet = ss["BasketballGame_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.player2win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2C2C").ss(2.5,1,1).p("ADaARQgCgYgPgUQgQgVgXgKQhKgfhYgBIgBAAQhVABhHAcQgXAKgPATQgQAUgDAYQgGAoACAmQAAAAAKgOQAPgRAVgOQBDgtBpAAQBoAABEAsQAiAWAOAWQAAgwgCgXg");
	this.shape.setTransform(92.9,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6D638").s().p("AjWAMQADgXAQgVQAPgTAXgJQBHgdBVAAIABAAQBYAABKAfQAXAKAQAVQAPAUACAZQACAWAAAxQgOgXgigVQhEgthoAAQhpAAhDAtQgVAOgPARIgKAPQgCgnAGgog");
	this.shape_1.setTransform(92.9,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("ABVjFQg1gHg2AWQgRAGgPAJIgLAHQgGgEgHgDQgQgHgLACQg2ALggBZQgQAtgFApIABgBQgBAIAAAIIAABrIATAAIAABAIAOgWIAAiWIAKgMQANgPASgMQA4goBSgBQBSABA5AoQAcATAMAUIAACWIAPAWIAAhAIASAAIAAhgQADhGgdhGQgkhahBgHg");
	this.shape_2.setTransform(92.8,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACzCyIAAiWQgMgUgcgTQg5gohSgBQhSABg4AoQgSAMgNAPIgKAMIAACWIgOAWIAAhAIgTAAIAAhrIABgQIgBABQAFgpAQgtQAghZA2gLQALgCAQAHIANAHIALgHQAPgJARgGQA2gWA1AHQBBAHAkBaQAdBGgDBGIAABgIgSAAIAABAg");
	this.shape_3.setTransform(92.8,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B3A3B").s().p("AgGAdQgogBghgcIgagcIBjARIBvgRQgOAPgVANQgqAdggAAIgCAAg");
	this.shape_4.setTransform(93,54.4,0.485,0.999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B3A3B").s().p("AhOAAIgdgJIBrAJIBsgJQgLAFgTAEQgmAKgoAAQgoAAgmgKg");
	this.shape_5.setTransform(92.9,52.4,0.485,0.999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_6.setTransform(104.4,39.2,0.485,0.485);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_7.setTransform(103.2,39.9,0.485,0.485);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_8.setTransform(83.5,39.2,0.485,0.485);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_9.setTransform(82.3,39.9,0.485,0.485);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_10.setTransform(92.8,41.6,0.485,0.485);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AApATIgCgBIgSgHIgLgDIgKgCIgLgBIgKAAIgFAAIgFABIgIACIgCABIgBAAIgTgEIACgFIAEgIIAEgEIACgBIACgBIAMgDIAMgCIANAAIANACIANACIAMAEIAVAIIACABIACABIADADIAEAIIACAFIAAACIgTADIgBAAIgBgBg");
	this.shape_11.setTransform(103.4,32.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqAUIgTgDIAAgCIACgFIAEgIIADgDIACgBIACgBIAVgIIAMgEIANgCIANgCIANAAIAMACIAMADIACABIACABIADAEIAFAIIACAFIgSAEIgCAAIgCgBIgIgCIgFgBIgFAAIgKAAIgLABIgKACIgLADIgSAHIgCABIgBABIgBAAg");
	this.shape_12.setTransform(82.2,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_13.setTransform(92.8,37.5,0.485,0.485);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_14.setTransform(92.8,37.5,0.485,0.485);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_15.setTransform(92.8,41.7,0.485,0.485);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_16.setTransform(92.8,41.7,0.485,0.485);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(3.7,1,1).p("Ag3gaIBvA1");
	this.shape_17.setTransform(54.5,272.5,0.618,0.618);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(3.7,1,1).p("Ag5gTIBzAn");
	this.shape_18.setTransform(52.8,275.9,0.618,0.618);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#838587").ss(3.7,1,1).p("Ag3gLIBvAX");
	this.shape_19.setTransform(53.2,279,0.618,0.618);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#838587").ss(3.7,1,1).p("AgvgIIBfAR");
	this.shape_20.setTransform(53.8,281.9,0.618,0.618);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#838587").ss(3.7,1,1).p("Ag0gIIBpAR");
	this.shape_21.setTransform(54.5,285.6,0.618,0.618);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#838587").ss(3.7,1,1).p("AgsgEIBaAJ");
	this.shape_22.setTransform(55,288.3,0.618,0.618);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#201F1F").ss(3.7,1,1).p("AiZjIIAdEuIAIAdQALAjASAdQA3BcBcgFQBdgGABhOQAAgYgKgdIhBjQQgMgmgBgqIACgjIgrBQIAZBeQAEARgMAMQgNAMgRgFQgOgFgEgOQg4iegEgGQgBgDgBg9QAAg5gKgFQgTgJgSAIQgfAOgHBAg");
	this.shape_23.setTransform(53.8,285.2,0.618,0.618);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#606163","#322F2F"],[0,1],-21.9,-8.8,20.4,11.4).s().p("AhXDDQgSgdgLgjIgIgdIgdkuQAHhAAfgOQASgIATAJQAKAFAAA5QABA9ABADQAEAGA4CeQAEAOAOAFQARAFANgMQAMgMgEgRIgZheIArhQIgCAjQABAqAMAmIBBDQQAKAdAAAYQgBBOhdAGIgLAAQhUAAg0hXg");
	this.shape_24.setTransform(53.8,285.2,0.618,0.618);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#201F1F").ss(3.7,1,1).p("AhkgcQgEgYADgeQAFg6AigVQAlgYA9ATQA3ARALAXQAHAPghBCQgRAhgSAdIAxCeIhQgXg");
	this.shape_25.setTransform(52.8,278,0.618,0.618);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#322F2F","#606163"],[0,1],-11.6,-7.5,14.9,5.2).s().p("AAKCYIhui0QgEgYADgeQAFg6AigVQAlgYA9ATQA3ARALAXQAHAPghBCQgRAhgSAdIAxCeg");
	this.shape_26.setTransform(52.8,278,0.618,0.618);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#838587").ss(3.7,1,1).p("Ag9gBIB7AD");
	this.shape_27.setTransform(122.5,288.5,0.618,0.618);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#838587").ss(3.7,1,1).p("Ag8AEIB5gH");
	this.shape_28.setTransform(122.3,292.3,0.618,0.618);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(3.7,1,1).p("Ag3ALIBvgV");
	this.shape_29.setTransform(123.9,295,0.618,0.618);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(3.7,1,1).p("AgvALIBfgV");
	this.shape_30.setTransform(125.7,297.4,0.618,0.618);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#838587").ss(3.7,1,1).p("AgzANIBngZ");
	this.shape_31.setTransform(127.8,300.5,0.618,0.618);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#838587").ss(3.7,1,1).p("AgrANIBXgZ");
	this.shape_32.setTransform(129.3,302.8,0.618,0.618);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#201F1F").ss(3.7,1,1).p("AjFhbIADBQQAIBVAXAjQArAHAoAeQATAPALANIBJALQBUAKAzgDQAzgEgCgyIgLgxIh+iTQgbgegRgnIgMggIgIBbIA9BLQALAOgHAQQgHAQgRACQgPADgLgMQhwh6gHgEQgDgCgYg4QgYg1gKAAQgWAAgNAOQgXAZAUA9g");
	this.shape_33.setTransform(125.5,298.5,0.618,0.618);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#606163","#322F2F"],[0,1],-21.1,-0.7,21.2,0.8).s().p("AAXC5IhJgLQgLgNgTgPQgogegrgHQgXgjgIhVIgDhQQgUg9AXgZQANgOAWAAQAKAAAYA1QAYA4ADACQAHAEBwB6QALAMAPgDQARgCAHgQQAHgQgLgOIg9hLIAIhbIAMAgQARAnAbAeIB+CTIALAxQACAygzAEIgdAAQgsAAg+gHg");
	this.shape_34.setTransform(125.5,298.5,0.618,0.618);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#201F1F").ss(3.7,1,1).p("AhwAfQgOgVgJgbQgSg3AXgiQAZgkA/gIQA5gGATAQQANAMgEBJQgCAlgFAiIBsB+IhTAKg");
	this.shape_35.setTransform(123.7,293.3,0.618,0.618);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#322F2F","#606163"],[0,1],-14.5,-0.5,14.9,0.5).s().p("AhwAfQgOgVgJgbQgSg3AXgiQAZgkA/gIQA5gGATAQQANAMgEBJQgCAlgFAiIBsB+IhTAKg");
	this.shape_36.setTransform(123.7,293.3,0.618,0.618);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#60605B").ss(3.7,1,1).p("Ai5hFIgBAMQAAATAKAPQALAPASAFQAZAGAQAPQA2AxBxADQATABAegBQAigCAXgZQAWgZgCghIgCgeg");
	this.shape_37.setTransform(126.9,309.6,0.618,0.618);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-18.8,-0.4,18.7,0.9).s().p("AA9BGQhxgDg2gxQgQgPgZgGQgSgFgLgPQgKgPAAgTIABgMIFyAYIACAeQACAhgWAZQgXAZgiACIgjAAIgOAAg");
	this.shape_38.setTransform(126.9,309.6,0.618,0.618);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(3,1,1).p("Ag8DcIhrmjICBAOQCKAGA2goIAOG3g");
	this.shape_39.setTransform(117.6,278.6,0.618,0.618);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-16.7,0,16.8,0).s().p("Ag8DcIhqmjICAAOQCLAGA0goIAPG3g");
	this.shape_40.setTransform(117.6,278.6,0.618,0.618);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#60605B").ss(3,1,1).p("AiVDyIgFnjIAbAWQAhAaAkAVQBzBBBigTIiYFwg");
	this.shape_41.setTransform(56.8,262.1,0.618,0.618);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-15.4,0,15.5,0).s().p("AiVDyIgFnjIAbAWQAhAaAkAVQBzBBBigTIiYFwg");
	this.shape_42.setTransform(56.8,262.1,0.618,0.618);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiOEOQg+giAAhGIAAhFQAAgWASgMIgHgGQgMgNABgQIARkfQABgQAMgLQAMgLAPAAIE4AAQAQAAAMAMQAMALAAARIAABZQAAARgMAMQgMAMgQAAIhMAAQAtAHAdAXQAaATAKA1QAGAZAAAZIAACNQAABHg+AhQgyAchdAAQhcAAgygcgAikCmQAABcCkAAQClAAAAhcIAAiNQAAgZgHgaQgHgegMgKQgggXg7gDIgOgBQgxABgeASIAIheIDKAAIAAhZIk4AAIgREeIBzAAIABgRQAEgPAjgBIAKAAQAXAAAIADQASACAAAYIAAB7QAAAegyAAIAAAAQgxAAAAgeIAAgzIhzAAgAgbA/QASAMAAAWIAAAoIAJAAIAKAAIAAhmIgTAAQgDATgPAJg");
	this.shape_43.setTransform(82.2,114.1,0.405,0.559,0,0,9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D6D638").s().p("Ai4CmIAAhFQAAgJAGgFQAGgGAIgBIBzAAQAIABAGAGQAGAFAAAJIAAAzQAAAJAdAAQAeAAAAgJIAAh7IgBgIIgBAAQgJgCgSAAIgJAAQgOAAgGADIgBANQgBAIgFAFQgGAGgIgBIhzAAQgJAAgFgFQgHgHABgIIARkgQABgIAGgEQAFgGAIAAIE4AAQAIAAAGAGQAGAGAAAIIAABZQAAAJgGAGQgGAFgIAAIi3AAIgEArQAZgIAfAAIAPABQBDAEAjAbQASANAJAoQAHAbAAAaIAACNQAABwi5AAQi4AAAAhwg");
	this.shape_44.setTransform(82.2,114.1,0.405,0.559,0,0,9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#D6D638").ss(5.5,1,1).p("ABrjUQg3Aog1BKQhsCRADCm");
	this.shape_45.setTransform(70.6,79.3,0.618,0.618);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#D6D638").ss(5.5,1,1).p("AB9BsQgSAsgYAtQgyBagiADQgVACgeg0Qgeg3gUhSQgzjUBCi1");
	this.shape_46.setTransform(116.4,84.8,0.618,0.618);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#D6D638").ss(5.5,1,1).p("ADYiPQghA3g7A/Qh2B+iAAsQgugkgch3IgThw");
	this.shape_47.setTransform(93.8,73.8,0.618,0.618);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#D6D638").ss(5.5,1,1).p("AkGA6IDGgWQDbgiBsg7");
	this.shape_48.setTransform(67.7,206.8,0.618,0.618);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D6D638").ss(5.5,1,1).p("Aj5CkQgMg7AVhEQAriIClgqQCpgrBLAoQAmATAEAd");
	this.shape_49.setTransform(103,182.1,0.618,0.618);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3,1,1).p("Ah8mbQgiAYghAuQhDBaACBmQgOB3gjCuQgSBagUBbQgDAQAVAUQAWAUAoAQQBkAnCOgOQCBgNBQgzQAngZAOgXIBnnVQgLAcgPAbQgfA4gWACQgNABgSggQgTgigMgzQggiEAphvIglgTQgVAigkAnQhJBPhPAaQgcgWgShKIgLhFg");
	this.shape_50.setTransform(89.7,107.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#575700","#000000"],[0,1],0,42.5,0,-42.5).s().p("AkHGNQgogQgWgUQgVgUADgQIAmi1QAjiuAOh3QgChmBDhaQAhguAigYIAhAAIALBFQASBKAcAWQBPgaBJhPQAkgnAVgiIAlATQgpBvAgCEQAMAzATAiQASAgANgBQAWgCAfg4QAPgbALgcIhnHVQgOAXgnAZQhQAziBANQglADgjAAQhgAAhKgcg");
	this.shape_51.setTransform(89.7,107.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(3,1,1).p("Aj5hEIgHBLIALAOQAPARAUAOQBAAsBfgCQBegCB0gzQA6gZAogYIgShVg");
	this.shape_52.setTransform(85.7,146.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#575700","#000000"],[0,1],-25.6,0,25.7,0).s().p("AjSA0QgUgOgPgRIgKgOIAGhLIHogZIASBVQgoAYg6AZQh0AzheACIgKAAQhYAAg9gqg");
	this.shape_53.setTransform(85.7,146.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3,1,1).p("AgSBDIABAOIAAABIgBgPIgEg9AgRBSIAvBZQgIgqAMgtQAahZBogMQBpgMAvASQAXAJADALQAHgngGg5QgLhzhAhZQhBhajlAsQhIAOhRAaIhBAWQgEACgFAGQgLAMgLAWQgjBHgUCRQgUCQAIB/QAEBAAIAjIB6gOQCIgVBDglg");
	this.shape_54.setTransform(84.5,175.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#575700","#000000"],[0,1],0.1,35.3,0.1,-35.2).s().p("AlWD+QgIh/AUiRQAUiQAjhHQALgWALgMQAFgGAEgCIBBgXQBRgZBIgOQDlgsBBBZQBABaALBzQAGA5gHAnQgDgLgXgJQgvgShpALQhoAMgaBaQgMAsAIArIgvhZIAMDHQhDAliIAVIh6AOQgIgjgEhAgAgSBDIABAOIAAABIgBgPIgEg+g");
	this.shape_55.setTransform(84.5,175.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],1.9,27.9,1.9,-42.6).s().p("AAAAHIAAgOIAAAPg");
	this.shape_56.setTransform(82.7,182.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al/tnIFzKRIg5FQIDgOyIDlAAIgs13Iihrgg");
	this.shape_57.setTransform(104.2,226.2,0.618,0.618);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,106.8,0,-106.7).s().p("ACbQsIjguyIA5lQIlzqRIIyjEIChLgIAsV3g");
	this.shape_58.setTransform(104.2,226.2,0.618,0.618);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BE9075").ss(2.5,1,1).p("AiRojIAGHWIh/BFIAALLICZAAIEmrLIBWq6g");
	this.shape_59.setTransform(64,233.4,0.618,0.618);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.7,0,-70.6).s().p("AkKLDIAArLIB/hFIgGnWIGcifIhWK6IkmLLg");
	this.shape_60.setTransform(64,233.4,0.618,0.618);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAkAYIALhOAAkAYIAAAEIBHgBIgKALQgKALABAOQAAAPALAKQALALAQgBQARgBAJgNIAtg4QARgWgEgbQgFgdgZgPIg0ggIgbhJIkTAUQgPABgKALQgKALAAAPIAAB1IA+BXQAFAGAHAAQAJAAAEgIQAEgHgEgHIgohDIADhqAgzB/IALhzIAShtACDAAIgYAbAg/B0IgnhhIARh0Ag0CEIABgFIgBAEQAAAAAAABQgBAPALAMQALAMAQAAQANAAAKgJQAKgJACgOIAQhzAg/B0IAKAYIABgIAiiAJIAtBIQATAfAjAE");
	this.shape_61.setTransform(13,128.7,0.618,0.618);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#DBA585","#FDE2CD"],[0,1],21,0,-21,0).s().p("AgqCfQgLgMABgPIAAgBIAAAAIABgEIALhzIAShtIgSBtIgLBzIgBAEIAAAAIAAABIgBAIIgKgYIgnhhIARh0IgRB0IAnBhQgjgEgTgfIgthIIADhqIgDBqIAoBDQAEAHgEAHQgEAIgJAAQgHAAgFgGIg+hXIAAh1QAAgPAKgLQAKgLAPgBIETgUIAbBJIA0AgQAZAPAFAdQAEAbgRAWIgtA4QgJANgRABQgQABgLgLQgLgKAAgPQgBgOAKgLIAKgLIhHABIAAgEIALhOIgLBOIgQBzQgCAOgKAJQgKAJgNAAQgQAAgLgMgAg0CEIABgFgABrAbIAYgbgAiiAJg");
	this.shape_62.setTransform(13,128.7,0.618,0.618);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEoAyIEWn6QhOAAhIAdQhHAdg5A2InKG7IiNAQIkOENICFBJID/gog");
	this.shape_63.setTransform(45,94.4,0.618,0.618);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#DBA585","#FDE2CD"],[0,1],57.4,0,-57.4,0).s().p("Ao9GAIEOkNICNgQIHLm7QA4g2BHgdQBIgdBOAAIkVH6IniFvIj+Aog");
	this.shape_64.setTransform(45,94.4,0.618,0.618);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjYirIgNA7QgOBIgFA+QgQDHBPAgQBQAgC6jcQBehtBNh1Ihyhgg");
	this.shape_65.setTransform(93.9,76.8,0.618,0.618);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,25.8,0,-25.7).s().p("Ai5D9QhPggAQjHQAFg+AOhIIANg7IFihWIByBgQhNB1heBtQijDBhRAAQgMAAgKgFg");
	this.shape_66.setTransform(93.9,76.8,0.618,0.618);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACzBiIApnbIkIiuQgIgFgEgJQgEgIACgKQADgPAOgHQAOgHAOAHIBNAmQAXAMAUgQQAUgQgGgZIgvjEQgDgLAFgKQAGgKAKgEQAMgFALAFQALAFAFAMIBDCuIgTjaQgBgPALgLQALgLAPABQAMABAJAJQAJAIABAMIARDRIAkioQADgPAOgIQANgHAPAFQALAEAHAKQAHALgCAMIgcDEIA3hBQAHgJALgDQAMgCAKAFQAMAGAEAMQAFAMgFALIhWDwIA1JbQAFA5giAuQgjAug4ALIm1BcIiPAeACzBiIA5BiAiMGzIAEgBIizHZQg7iHgpigQhQk/Bdh3IJFhM");
	this.shape_67.setTransform(135.8,56.1,0.618,0.618);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#DBA585","#FDE2CD"],[0,1],61.4,-25.9,-58.9,20.8).s().p("AmfJkQhQk/Bdh3IJFhMIA5BiIg5hiIApnbIkIiuQgIgFgEgJQgEgIACgKQADgPAOgHQAOgHAOAHIBNAmQAXAMAUgQQAUgQgGgZIgvjEQgDgLAFgKQAGgKAKgEQAMgFALAFQAMAFAEAMIBDCuIgTjaQgBgPALgLQALgLAPABQAMABAJAJQAJAIABAMIARDRIAkioQADgPAOgIQANgHAPAFQAMAEAGAKQAHALgCAMIgcDEIA3hBQAHgJALgDQAMgCAKAFQAMAGAEAMQAFAMgFALIhWDwIA1JbQAFA5giAuQgjAug4ALIm1BcIiPAeICPgeIAEgBIizHZQg7iHgpigg");
	this.shape_68.setTransform(135.8,56.1,0.618,0.618);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#173A2E").ss(3,1,1).p("Aj3DeIAEAPQAJAQAVAIQBDAZCohAQCohAAyhpQAZg1gJgmQgBhLglhAQhKh/i0A0Qi0A0ghDYQgRBsATBig");
	this.shape_69.setTransform(102.9,178.5,0.618,0.618);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#035C46").s().p("AjVEFQgVgIgJgQIgEgPQgThiARhsQAhjYC0g0QC0g0BKB/QAlBAABBLQAJAmgZA1QgyBpioBAQh4AuhFAAQgbAAgTgHg");
	this.shape_70.setTransform(102.9,178.5,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2win, new cjs.Rectangle(-1.2,-1.2,166.3,317), null);


(lib.player2sit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFCCQgegQAAghIAAgiQAAgLAJgGIgEgCQgFgHAAgIIAJiKQAAgHAGgGQAFgFAIAAICXAAQAIAAAGAGQAGAFAAAJIAAArQAAAIgGAFQgGAGgIAAIglAAQAWAEAOALQANAIAFAaQADAMAAAMIAABFQAAAhgeAQQgZAOgtAAQgsAAgZgOgAhPBRQAAAsBPAAQBQAAAAgsIAAhFQAAgMgDgMQgEgPgFgEQgPgMgegBIgHAAQgXAAgOAJIAEgtIBhAAIAAgrIiXAAIgICJIA4AAIAAgIQACgHARAAIAEAAIAQABQAIABAAALIAAA8QAAAOgYAAQgXAAAAgOIAAgZIg4AAgAgNAeQAJAGAAALIAAATIAEAAIAFAAIAAgxIgFAAIgDAAIgBAAQgBAJgIAEg");
	this.shape.setTransform(55.7,97.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6D638").s().p("AhZBRIAAgiQAAgEADgDQADgDAEAAIA4AAQAEAAACADQADADAAAEIAAAZQAAAEAOAAQAOAAAAgEIAAg/IgBgBIgNgBIgEABQgGAAgDABIgBAGQAAAEgDACQgDADgDAAIg4AAQgEAAgEgDQgCgEAAgDIAIiKQABgEACgDQADgCAEAAICXAAQAEAAADACQADADAAAFIAAArQAAAEgDADQgDADgEAAIhYAAIgCATQAMgCAOAAIAIAAQAgABASANQAIAHAFASQADAOAAAMIAABFQAAA2haAAQhZAAAAg2g");
	this.shape_1.setTransform(55.7,97.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2C2C2C").ss(3,1,1).p("ADThXQgpgRi4AZQi4AZgjAcQgJAkAFAuQADAXAEAQQAMgOAigRQBFgiBygRQCGgTBRASQALADAIgIQAIgHgCgLQgIgkgUgog");
	this.shape_2.setTransform(58.9,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6D638").s().p("AjtA4QgFguAJgkQAjgcC4gZQC4gZApARQAUAoAIAkQACALgIAHQgIAIgLgDQhRgSiGATQhyARhFAiQgiARgMAOQgEgQgDgXg");
	this.shape_3.setTransform(58.9,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BE9075").ss(4,1,1).p("Ag6BRIA3AAQAgAAAXgYQAXgYAAghQAAghgYgYQgXgXggAAIhGAA");
	this.shape_4.setTransform(59.7,35.9,0.586,0.586,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2.5,1,1).p("AjNh5QgVA1AIBGQAGBCAcBBQAcBAAmAoQAoAqAnAAQgIhvBMgpIgWAAQgSAAgOgOQgNgOAAgUQAAgTAOgOQAOgOASAAIApABIABBLIAUgWIABinIgUgWQgNgNAHgSQAHgRASgBIB4gEQAbgBAEgXQAEgWgUgXQgkgpgvgJQg4gMguAtIgagCQgiAAgeAIQhiAXglBcg");
	this.shape_5.setTransform(59.2,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah2DtQgmgogchAQgchBgGhCQgIhGAVg1QAlhcBigXQAegIAiAAIAaACQAugtA4AMQAvAJAkApQAUAXgEAWQgEAXgbABIh4AEQgSABgHARQgHASANANIAUAWIgBCnIgUAWIgBhLIgpgBQgSAAgOAOQgOAOAAATQAAAUANAOQAOAOASAAIAWAAQhMApAIBvQgnAAgogqg");
	this.shape_6.setTransform(59.2,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F4137").s().p("AgigPIBFAAQgSAQgbAJIgYAGg");
	this.shape_7.setTransform(78.6,48.7,0.586,0.586,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLASQgFgHAAgLQgBgJAGgIQAFgIAGAAQAHAAAFAIQAFAHAAAKQABAKgFAIQgGAHgHABQgGAAgFgIg");
	this.shape_8.setTransform(76.6,33.9,0.586,0.586,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgfAjQgOgPAAgUQAAgTAOgOQANgPASAAQATAAANAOQAOAOAAAUQAAAUgNAPQgOAOgTAAQgSAAgNgOg");
	this.shape_9.setTransform(75.5,34.6,0.586,0.586,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAXIgFgBIgQgDIgBgIIAAgKIABgEQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIACgBIAKgGIALgFIANgDIAMgCIAMgBIAMAAIAVADIADAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAKATIAAABIgBACIgFAEIgLAIIgCAAIgCgBIgRgCIgJAAIgJABIgRAEIgIACIgFAEIgCABIAAABIgBgBg");
	this.shape_10.setTransform(75.8,28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BE9075").ss(2,1,1).p("AA8G3IjIABQgmABgbgbQgcgbgBgnIgGjUIhEABQgcAAgOgYQgPgZAOgZIBjimIBIj4IDshZQB8AABYBYQBYBZABB/IABENQABB+hYBaQhXBah8AAg");
	this.shape_11.setTransform(67.7,32.4,0.586,0.586,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0.2,44,-0.2,-44).s().p("AjNGeQgcgbgBgnIgGjUIhEABQgcAAgOgYQgPgZAOgZIBjimIBIj4IDshZQB8AABYBYQBYBZABB/IABENQABB+hYBaQhXBah8AAIjIABIgBABQglAAgbgbg");
	this.shape_12.setTransform(67.7,32.4,0.586,0.586,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#838587").ss(3,1,1).p("Ag8gOIB5Ad");
	this.shape_13.setTransform(22,207.8,0.586,0.586,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#838587").ss(3,1,1).p("Ag+gGIB9AN");
	this.shape_14.setTransform(23.1,210.8,0.586,0.586,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#838587").ss(3,1,1).p("Ag8ACIB4gC");
	this.shape_15.setTransform(22.2,213.1,0.586,0.586,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#838587").ss(3,1,1).p("Ag0AEIBpgH");
	this.shape_16.setTransform(21.1,215.3,0.586,0.586,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(3,1,1).p("Ag7AHIB3gN");
	this.shape_17.setTransform(19.8,217.9,0.586,0.586,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(3,1,1).p("AgzAKIBngT");
	this.shape_18.setTransform(18.8,219.8,0.586,0.586,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#201F1F").ss(3,1,1).p("AinhiIgXBNQgVBTAMAlQAsAKAgAfQAQAQAIANIBQAJQBbAHA8gHQA9gIAKgnQADgMgCgOIgDgMQhHhMgigpQgVgcgJggIgGgbIgdBHIAuBDQAIALgLAOQgMANgTABQgRABgIgLQgNgQgmg2QgkgygCgDQgDgDgJg1QgIgzgKgDQgUgHgRAJQgdAQAAA9g");
	this.shape_19.setTransform(21.9,215.3,0.586,0.586,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#606163","#322F2F"],[0,1],-20,-4.2,21,11.4).s().p("AgTCyIhQgJQgIgNgQgQQgggfgsgKQgMglAVhTIAXhNQAAg9AdgQQARgJAUAHQAKADAIAzQAJA1ADADIAmA1IAzBGQAIALARgBQATgBAMgNQALgOgIgLIguhDIAdhHIAGAbQAJAgAVAcQAiApBHBMIADAMQACAOgDAMQgKAng9AIQgdADgkAAQgnAAgvgDg");
	this.shape_20.setTransform(21.9,215.3,0.586,0.586,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#201F1F").ss(3,1,1).p("Ah0AHQgHgVAAgbQgCg1AfgYQAggXA/ALQA3AJARASQAKALgVA5QgLAcgMAZIBVBuIheAGg");
	this.shape_21.setTransform(22.4,211.7,0.586,0.586,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#322F2F","#606163"],[0,1],-12.9,-5.5,15.3,5.2).s().p("Ah0AHQgHgVAAgbQgCg1AfgYQAggXA/ALQA3AJARASQAKALgVA5QgLAcgMAZIBVBuIheAGg");
	this.shape_22.setTransform(22.4,211.7,0.586,0.586,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#60605B").ss(3,1,1).p("AjEhDIgFAMQgIATAGAQQAHAQARAFQAYAIANAPQAVAXArALQAtAMBAgCQAYgBAjgEQAogFAhgYQAigXAFgaIAEgYg");
	this.shape_23.setTransform(22.1,225,0.586,0.586,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-18.9,-8.6,17.7,5.3).s().p("AhOA6QgrgLgVgXQgNgPgYgIQgRgFgHgQQgGgQAIgTIAFgMIGSAcIgEAYQgFAagiAXQghAYgoAFQgjAEgYABIgSAAQg0AAgngKg");
	this.shape_24.setTransform(22.1,225,0.586,0.586,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#60605B").ss(4,1,1).p("AApDFIBpmJQgrAPg3AIQhuAOg5glIgaGJg");
	this.shape_25.setTransform(23,203.5,0.586,0.586,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-14.6,0,14.7,0).s().p("AiRDFIAamJQA5AlBugOQA3gIArgPIhpGJg");
	this.shape_26.setTransform(23,203.5,0.586,0.586,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BE9075").ss(4,1,1).p("AEJp/IlWT/Ii7AAIAxwIICajG");
	this.shape_27.setTransform(16.1,177.5,0.586,0.586,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,64,0,-64).s().p("AkIKAIAxwIICajGIFGgxIlWT/g");
	this.shape_28.setTransform(16.1,177.5,0.586,0.586,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(3,1,1).p("AA9gOIh5Ad");
	this.shape_29.setTransform(91.1,207.8,0.586,0.586,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(3,1,1).p("AA/gGIh9AN");
	this.shape_30.setTransform(89.9,210.8,0.586,0.586,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#838587").ss(3,1,1).p("AA9ACIh4gC");
	this.shape_31.setTransform(90.8,213.1,0.586,0.586,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#838587").ss(3,1,1).p("AA1AEIhpgH");
	this.shape_32.setTransform(91.9,215.3,0.586,0.586,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#838587").ss(3,1,1).p("AA8AHIh3gN");
	this.shape_33.setTransform(93.3,217.9,0.586,0.586,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#838587").ss(3,1,1).p("AA0AKIhngT");
	this.shape_34.setTransform(94.2,219.8,0.586,0.586,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#201F1F").ss(3,1,1).p("ACohiIAXBMQAVBTgMAlQgrALghAfQgQAPgIAOQgiAFguADQhbAHg8gGQg9gIgKgnQgDgNACgOIADgLQBIhNAigpQAUgbAKggIAFgbIAdBGIgtBDQgJAMAMANQALANAUABQARABAIgKQAMgPAmg3QAkgzADgDQACgCAJg2QAJgzAJgDQAVgGAQAJQAdAQAAA9g");
	this.shape_35.setTransform(91.1,215.3,0.586,0.586,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#606163","#322F2F"],[0,1],20.1,-4.3,-20.9,11.3).s().p("AiDCyQg9gIgKgnQgDgNACgOIADgLQBIhNAigpQAUgbAKggIAFgbIAdBGIgtBDQgJAMAMANQALANAUABQARABAIgKQAMgPAmg3IAng2QACgCAJg2QAJgzAJgDQAVgGAQAJQAdAQAAA9IAXBMQAVBTgMAlQgrALghAfQgQAPgIAOQgiAFguADQguAEgoAAQgkAAgdgDg");
	this.shape_36.setTransform(91.1,215.3,0.586,0.586,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#201F1F").ss(3,1,1).p("AB1AHQAHgVAAgbQACg1gggYQgggXg+ALQg4AJgQASQgKALAVA5QAKAcANAZIhVBuIBeAGg");
	this.shape_37.setTransform(90.6,211.7,0.586,0.586,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#322F2F","#606163"],[0,1],13,-5.5,-15.3,5.2).s().p("Ah7CAIBVhuQgNgZgKgcQgVg5AKgLQAQgSA4gJQA+gLAgAXQAgAYgCA1QAAAbgHAVIiSB/g");
	this.shape_38.setTransform(90.6,211.7,0.586,0.586,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(3,1,1).p("ADGhDIAFAMQAHATgGAQQgHAQgRAFQgYAIgNAPQgVAXgqALQgtAMhBgCQgXgBgjgEQgpgFghgYQghgXgGgaIgEgYg");
	this.shape_39.setTransform(91,225,0.586,0.586,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],19.1,-8.6,-17.6,5.3).s().p("AgeBEQgXgBgjgEQgpgFghgYQghgXgGgaIgEgYIGTgcIAFAMQAHATgGAQQgHAQgRAFQgYAIgNAPQgVAXgqALQgnAKg1AAIgSAAg");
	this.shape_40.setTransform(91,225,0.586,0.586,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#60605B").ss(4,1,1).p("AgoDFIhqmJIBjAXQBuAOA5glIAbGJg");
	this.shape_41.setTransform(90,203.5,0.586,0.586,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-14.6,0,14.7,0).s().p("AgoDFIhqmJIBkAXQBtAOA5glIAaGJg");
	this.shape_42.setTransform(90,203.5,0.586,0.586,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BE9075").ss(4,1,1).p("AkIp/IFWT/IC7AAIgxwIIiajG");
	this.shape_43.setTransform(97,177.5,0.586,0.586,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,64,0,-64).s().p("ABOKAIlWz/IFGAxICaDGIAxQIg");
	this.shape_44.setTransform(97,177.5,0.586,0.586,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#D6D638").ss(5,1,1).p("AgOkAQgdCcALBqQALBkA5CX");
	this.shape_45.setTransform(28.9,72.2,0.586,0.586,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#D6D638").ss(5,1,1).p("AAQkAQAcCdgLBpQgLBlg5CW");
	this.shape_46.setTransform(82.4,72.2,0.586,0.586,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BE9075").ss(3,1,1).p("AGRJ0IAmA9QAHAKgEAMQgDAMgMAFQgIAEgJgDQgJgDgGgIIhdiKIg2guIAyBpIAQBiQABAKgGAIQgGAJgKABQgJACgIgFQgIgFgDgJIgsiBIg4hFIAjBCIgQBjQgCAMgKAHQgKAGgMgDQgKgCgGgJQgFgIAAgKIAHhKIhQgfIgggzIlaiRQhTgjgphPQgohQAUhXIArpoQAFhQAyg/QAxhABMgZICEgrQAcCdgLBqQgLBlg6CWIg3GrIA4APIFMD8ICAABICpDCQAKALgFANQgEAOgNADQgIACgIgDQgHgDgFgHIgagoIgshEIhRg8AjmCtIhygfAjaCwIAAAAIgMgDg");
	this.shape_47.setTransform(74.9,102,0.586,0.586,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,76.6,0,-76.5).s().p("AEUL6QgIgFgDgJIgsiBIg4hFIAjBCIgQBjQgCAMgKAHQgKAGgMgDQgKgCgGgJQgFgIAAgKIAHhKIhQgfIgggzIlaiRQhTgjgphPQgohQAUhXIArpoQAFhQAyg/QAxhABMgZICEgrQAcCdgLBqQgLBlg6CWIg3GrIAAAAIgMgDIAMADIgMgDIAMADIAAAAIA4APIFMD8ICAABICpDCQAKALgFANQgEAOgNADQgIACgIgDQgHgDgFgHIgagoIAmA9QAHAKgEAMQgDAMgMAFQgIAEgJgDQgJgDgGgIIhdiKIg2guIAyBpIAQBiQABAKgGAIQgGAJgKABIgFABQgGAAgGgEgAFlIwIAsBEIgshEIhRg8gAjmCtIhygfg");
	this.shape_48.setTransform(74.9,102,0.586,0.586,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BE9075").ss(3,1,1).p("AmHJmIgvBLQgHAKAEAMQADAMAMAFQAIAEAJgDQAKgDAFgIIBdiKIA2guIgzBpIgPBiQgBAKAGAIQAGAJAKABQAJACAIgFQAIgFADgJIAriBIA5hFIgjBCIAQBjQACAMAKAHQAKAGAMgDQAKgCAGgJQAGgIgBgKIgHhKIBQgfIAggzIFaiRQBTgjAphPQAphQgVhXIgrpoQgFhQgyg/QgxhAhMgZIiEgrQgcCcALBrQALBkA6CXIA3GrIg5APIlLD8IiAABIiqDCQgJALAEANQAEAOAOADQAIACAIgDQAHgDAEgHIAkg2IAjg2IBRg8ADmCtIBygfADmCtIgLADIAAAAg");
	this.shape_49.setTransform(36.4,102,0.586,0.586,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,76.6,0,-76.5).s().p("AkkL9QgKgBgGgJQgGgIABgKIAPhiIAzhpIg2AuIhdCKQgFAIgKADQgJADgIgEQgMgFgDgMQgEgMAHgKIAvhLIAjg2IBRg8IhRA8IgjA2IgkA2QgEAHgHADQgIADgIgCQgOgDgEgOQgEgNAJgLICqjCICAgBIFLj8IA5gPIg3mrQg6iXgLhkQgLhrAcicICEArQBMAZAxBAQAyA/AFBQIArJoQAVBXgpBQQgpBPhTAjIlaCRIggAzIhQAfIAHBKQABAKgGAIQgGAJgKACQgMADgKgGQgKgHgCgMIgQhjIAjhCIg5BFIgrCBQgDAJgIAFQgGAEgGAAIgFgBgADmCtIgLADIAAAAIALgDIgLADIAAAAIALgDIBygfg");
	this.shape_50.setTransform(36.4,102,0.586,0.586,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#D6D638").ss(5,1,1).p("AhrEzQgziIA4iwQBAjHCqhm");
	this.shape_51.setTransform(24.4,141.3,0.586,0.586,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#D6D638").ss(5,1,1).p("AiDkyQCqBmBADHQA4CwgzCI");
	this.shape_52.setTransform(90.2,141.3,0.586,0.586,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#D6D638").ss(5,1,1).p("AjViRIA4BvQBMB9BdBMQA8gvBNiTIBBiL");
	this.shape_53.setTransform(56.6,63,0.586,0.586,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3,1,1).p("AkJCWQAfhQgihnQglh1hkg7QCLgICOAiQAsALAoANIAeAMIAWAAQAqgTBHgRQCNgiCMAIQhkA7glB1QghBnAeBQQAWA7AngOQALgFANgLIAJgLIgIAQQgNAQgYAHQhOAWichUIihAAQicBUhOgWQgmgLgHgcQAOATAUAIQAmAOAWg7g");
	this.shape_54.setTransform(57.3,144.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#575700","#000000"],[0,1],0,21.1,0,-21.1).s().p("ABRCRIihAAQicBUhOgWQgmgLgHgcQAOATAUAIQAmAOAWg7QAfhQgihnQglh1hkg7QCLgICOAiQAsALAoANIAeAMIAWAAQAqgTBHgRQCNgiCMAIQhkA7glB1QghBnAeBQQAWA7AngOQALgFANgLIAJgLIgIAQQgNAQgYAHQgQAEgUAAQhKAAh8hCg");
	this.shape_55.setTransform(57.3,144.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BE9075").ss(4,1,1).p("Aicj4IgIBSIioiqIEVm9ICcgCQBxgBBGBaQBGBZgeBuIlWT/Ii7AAIAxwIICajG");
	this.shape_56.setTransform(19.5,169.1,0.586,0.586,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DBA585").s().p("AjNMQIAxwIICajGIiaDGIgIBSIioiqIEVm9ICcgCQBxgBBGBaQBGBZgeBuIlWT/g");
	this.shape_57.setTransform(19.5,169.1,0.586,0.586,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE9075").ss(3,1,1).p("ACdj4IAIBSICoiqIkVm9IicgCQhxgBhGBaQhGBZAeBuIFWT/IC7AAIgxwIIiajG");
	this.shape_58.setTransform(93.5,169.1,0.586,0.586,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DBA585").s().p("AATMQIlWz/QgehuBGhZQBGhaBxABICcACIEVG9IioCqIgIhSIiajGICaDGIAxQIg");
	this.shape_59.setTransform(93.5,169.1,0.586,0.586,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(3,1,1).p("ADmgkIgHAtIgLAFQgPAFgYAEQhNAOiEAAQiFgBgrgGQgVgCAFgDIADgng");
	this.shape_60.setTransform(50.9,125.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#575700","#000000"],[0,1],23,0,-23,0).s().p("AgkAlQiFgBgrgGQgVgCAFgDIADgnIHHgWIgHAtIgLAFQgPAFgYAEQhLAOh9AAIgJAAg");
	this.shape_61.setTransform(50.9,125.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(3,1,1).p("AElk1IiJgmIghBBQgtBKg3AtQgigcgthWIgmhSIiPAnIhWESIBHGNQBmAKBxgBQDggCA1gyQAFg3AWhcQAWheAYhDQAVg4gSiEg");
	this.shape_62.setTransform(53.6,89.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#575700","#000000"],[0,1],0,36,0,-36).s().p("Aj8FfIhHmNIBWkSICPgnIAmBSQAtBWAiAcQA3gtAthKIAhhBICJAmIAXB5QASCEgVA4QgYBDgWBeQgWBcgFA3Qg1AyjgACIgWAAQhlAAhcgJg");
	this.shape_63.setTransform(53.6,89.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BE9075").ss(4,1,1).p("AiFjrIjdFbIAYAXQAgAbAoAXQB/BICbAAQCcAABnixQAgg4AXhCIAQg3Iiwifg");
	this.shape_64.setTransform(56.4,67.1,0.586,0.586,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,25.7,0,-25.7).s().p("AkCC5QgogXgfgbIgZgXIDelbIE2gVICwCfIgQA3QgXBCggA4QhnCxicAAQibAAh/hIg");
	this.shape_65.setTransform(56.4,67.1,0.586,0.586,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#ECA92F").ss(4,1,1).p("ABBEDIgQAdQgVAggcAUQhcA/iChYQhLgyADh3QADhvBDh6QBFh+BmhMQBwhVBzAJQDKARiHEyQhECYhsCVg");
	this.shape_66.setTransform(23,143.6,0.586,0.586,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#035C46").s().p("AjeE7QhLgyADh3QADhvBDh6QBFh+BmhMQBwhVBzAJQDKARiHEyQhECYhsCVIgQAdQgVAggcAUQgmAbguAAQg+AAhMg0g");
	this.shape_67.setTransform(23,143.6,0.586,0.586,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#ECA92F").ss(4,1,1).p("Ag/EDIAQAdQAVAgAbAUQBaA/CBhYQBKgygEh3QgDhvhCh6QhDh+hlhMQhuhVhxAJQjHARCFEyQBDCYBqCVg");
	this.shape_68.setTransform(90.5,143.6,0.586,0.586,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#035C46").s().p("AABFUQgbgUgVggIgQgdQhqiVhDiYQiFkyDHgRQBxgJBuBVQBlBMBDB+QBCB6ADBvQAEB3hKAyQhLA0g+AAQgsAAgmgbg");
	this.shape_69.setTransform(90.5,143.6,0.586,0.586,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#52758E").ss(2,1,1).p("AlCB4IOVAAQAoAAAMgmQANglgggYIi6iMIxEAAIE2DoQAIAHAKAAg");
	this.shape_70.setTransform(52.8,152.4,0.586,0.586,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#849EB6","#CFD9E1"],[0,1],0,-11.9,0,12).s().p("AlCB4QgKgBgIgGIk2joIREAAIC6CMQAgAXgNAmQgMAmgoAAg");
	this.shape_71.setTransform(52.8,152.4,0.586,0.586,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#52758E").ss(2,1,1).p("AlCCXIOVAAQAXAAAPgOQAOgNADgUIAAhIIjQh3IxDg/IAAA/IE1DoQAJAGAJAAg");
	this.shape_72.setTransform(52.8,154.2,0.586,0.586,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#849EB6","#CFD9E1"],[0,1],0,-15.1,0,15.1).s().p("AlCCXQgJAAgJgGIk1joIAAg/IRDA/IDQB3IAABIQgDAUgPANQgOAOgXAAg");
	this.shape_73.setTransform(52.8,154.2,0.586,0.586,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#566675","#849EB6"],[0,1],0,-76,0,76).s().p("AGkLxQgJgHgBgLIi5zvQgLhLg3gxQg2gxhKAAIjyAAQgqAAglARQglAQgcAgQgdAggOAqQgNAqAEAsIB8S0QABAMgIAKQgHAJgNABQgMACgJgJQgJgHgCgMIh7y0QgGg4ASg2QARg2AmgqQAkgoAwgVQAxgXA2AAIDyAAQBgAABHA/QBHBAAOBhIC4TuQACAMgHALQgHAJgMACIgFAAQgKAAgIgHg");
	this.shape_74.setTransform(51.8,155.2,1,1,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#566675").ss(5,1,1).p("AJ1AAIzpAA");
	this.shape_75.setTransform(48.8,200.8,0.586,0.586,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#566675","#849EB6"],[0,1],0,-73.9,0,74).s().p("AhMLjQgUgCgNgQQgOgQACgVICP1iQACgUAQgNQAQgNAVACQAUACANAQQAOAQgDAVIiOViQgCATgOANQgPAMgTAAg");
	this.shape_76.setTransform(28.3,158.4,0.586,0.586,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#52758E").ss(2,1,1).p("AjgkyIGeAAQCPAABtBgQBsBgAVCRIAnEUQpvhPpABPIgSivQgSivBziDQBziECrAAg");
	this.shape_77.setTransform(59.8,100,0.586,0.586,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#CFD9E1","#6589A6"],[0,1],0,-30.6,0,30.7).s().p("ApNEzIgSivQgSivBziDQBziECrAAIGeAAQCPAABtBgQBsBgAVCRIAnEUQpvhPpABPg");
	this.shape_78.setTransform(59.8,100,0.586,0.586,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#566675","#849EB6"],[0,1],0,-73.9,0,74).s().p("AhMLjQgVgCgNgQQgNgQACgVICP1iQACgUAQgNQAQgNAVACQAUACANAQQAOAQgDAVIiOViQgCATgPANQgOAMgTAAg");
	this.shape_79.setTransform(97.7,158.4,0.586,0.586,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#566675").ss(5,1,1).p("AJRAAIyhAA");
	this.shape_80.setTransform(65.6,183.1,0.586,0.586,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2sit, new cjs.Rectangle(-2,-1.2,116.5,232.5), null);


(lib.player2ready = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D638").ss(5,1,1).p("AkLgnQAegoBTgJQBWgKBsAbQBsAbBBAuQBAAvgKAr");
	this.shape.setTransform(52.7,147.3,0.517,0.517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D6D638").ss(5,1,1).p("AkKBcQgKgrBAgvQBBguBsgbQBsgbBWAKQBTAJAeAo");
	this.shape_1.setTransform(119,147.3,0.517,0.517);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2C2C2C").ss(2.5,1,1).p("ADoASQgCgagQgVQgRgWgYgLQhPghheAAIgBAAQhbAAhLAeQgZAKgQAVQgRAWgDAZQgGArACAoQAAAAALgPQAPgTAXgOQBHgwBwAAQBuAABJAvQAlAYAOAXQABgzgDgZg");
	this.shape_2.setTransform(86,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6D638").s().p("AjkANQADgZARgWQAQgVAZgKQBLgeBbAAIABAAQBeAABPAhQAYALARAWQAQAVACAaQADAZgBAzQgOgXglgYQhJgvhuAAQhwAAhHAwQgXAOgPATIgLAPQgCgoAGgrg");
	this.shape_3.setTransform(86,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.5,1,1).p("ABajSQg4gHg5AXQgSAHgQAJIgNAIQgFgEgJgEQgQgHgMACQg5ALgiBfQgRAwgGAsIABgBQgBAJAAAIIAAByIAUAAIAABEIAQgXIAAigIAKgNQAOgQASgNQA9grBXAAQBXAAA9ArQAeAVAMAVIAACgIAQAXIAAhEIAUAAIAAhnQAChKgehLQgnhfhFgIg");
	this.shape_4.setTransform(85.9,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AC+C+IAAigQgMgVgegVQg9grhXAAQhXAAg9ArQgSANgOAQIgKANIAACgIgQAXIAAhEIgUAAIAAhyIABgRIgBABQAGgsARgwQAihfA5gLQAMgCAQAHIAOAIIANgIQAQgJASgHQA5gXA4AHQBFAIAnBfQAeBLgCBKIAABnIgUAAIAABEg");
	this.shape_5.setTransform(85.9,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B3A3B").s().p("AhUAAIglgRIB5AGIB5gGQgNAJgXAIQgtASgoAAQgoAAgsgSg");
	this.shape_6.setTransform(85.9,53.3,0.517,0.517);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_7.setTransform(98.2,38.5,0.517,0.517);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_8.setTransform(97,39.3,0.517,0.517);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_9.setTransform(76,38.5,0.517,0.517);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_10.setTransform(74.8,39.3,0.517,0.517);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_11.setTransform(85.9,41.1,0.517,0.517);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAsAUIgCgBIgUgHIgLgDIgLgDIgLgBIgMAAIgFABIgFAAIgIACIgCABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgFgCIgPgCIADgHIAEgIIADgEIADgCIADAAIALgEIAOgBIAOAAIANABIAOADIANAEIAWAIIADABIACACIADADIAEAIIACAFIAAACIgUAEIgCgBg");
	this.shape_12.setTransform(97.1,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhXApIgogHIABgEIAEgLIAIgPIAFgIIAEgCIAFgCQAYgKATgGQAMgFANgDQAJgCASgDIAbgDIAbAAIAaADIAXAGIAFACQAEABABABIAGAJQAEAFAFALIAFANIgmAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEgCIgQgEQgFgBgFAAIgKgBIgVgBIgXADIgWAFIgWAGIglAOIgEACIgDACIgBAAg");
	this.shape_13.setTransform(74.6,31.7,0.517,0.517);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_14.setTransform(85.9,36.8,0.517,0.517);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_15.setTransform(85.9,36.8,0.517,0.517);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_16.setTransform(85.9,41.2,0.517,0.517);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_17.setTransform(85.9,41.2,0.517,0.517);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOBxQgtgDgagMQgggOgDgaIgEgaQgBgIAIgEIgEgCQgGgFgBgGIgGhqQgBgGAFgEQAGgEAHABICYAIQAIAAAHAFQAGAEABAHIAFAhQAAAGgEAEQgGAEgIAAIglgCQAXAEAPAJQAOAIAIAUQADAJACAJIAHA1QAEAagcALQgTAHgiAAIgQAAgAhJA7QAFAiBPAFQBRAEgEgiIgIg1QgBgKgEgIQgGgMgGgDQgRgKgdgDIgHgBQgXgBgOAGIgBgiIBiAFIgFghIiYgIIAHBpIA4ADIAAgGQABgFARAAIAFAAIAPABQAJACABAJIAHAuQABALgYgBIgBgBQgXgBgCgLIgDgTIg4gDgAALA1IgGgmIgJgBQAAAHgHADQAJAFABAIIACAPIAFABIAFAAg");
	this.shape_18.setTransform(88.4,99.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D6D638").s().p("AAMBpQhZgFgFgpIgEgaQAAgDACgDQACgBAEAAIA4ADQAFAAADACQADADAAADIADATQABADANABQAPABAAgEIgHguIgBgCIAAgBIgNgBIgEAAIgKAAIAAAFQAAADgCACQgDACgEAAIg4gDQgEAAgDgDQgEgCAAgEIgHhpQAAgDADgCQACgCAEAAICYAIQAFAAADADQADACAAADIAFAiQABADgDACQgCACgFAAIhZgFIAAAPQANgBAOAAIAIABQAgADATALQAKAFAGAPQAFAKABAJIAIA1QAFAmhKAAIgRgBg");
	this.shape_19.setTransform(88.4,99.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D6D638").ss(5,1,1).p("AANj9QA2DbhiEg");
	this.shape_20.setTransform(58.6,67.3,0.517,0.517);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D6D638").ss(5,1,1).p("AAvDQQh0jZAdjG");
	this.shape_21.setTransform(115.6,64,0.517,0.517);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D6D638").ss(5,1,1).p("Akyi9QAJBdB3CPQB2CPA8gBQBTgRB2iPQB5iQgRhK");
	this.shape_22.setTransform(85.9,67.5,0.517,0.517);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D9A493").ss(3.4,1,1).p("ABzENIhzBPIhyhPQg2gmgZg9Qgag9ANhBIAXh8IAAkLIFvAAIAAELIAXB8QANBBgaA9QgZA9g2Amg");
	this.shape_23.setTransform(85.8,59.3,0.517,0.517);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,68.7,0,23.6).s().p("AhyENQg2gmgZg9Qgag9ANhCIAXh7IAAkLIFvAAIAAELIAXB7QANBCgaA9QgZA9g2AmIhzBPg");
	this.shape_24.setTransform(85.8,59.3,0.517,0.517);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2.5,1,1).p("AEFlBQAFgPhFgRQhTgUh/AAQh3AAhVAfQgbAJgUALIgPAJQAcByg0CVIAIA+QAGBGgOAhQgEAKAEBHQACAjACAiQBGA+BeAbQBTAYBZgGQBSgFBBgeQBAgdAXgqQACgiACgkQAEhHgFgKQgNghAVhhIAYhcQg8hwAPhmg");
	this.shape_25.setTransform(87.3,85.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#575700","#000000"],[0,1],0,37.4,0,-37.3).s().p("AiHFiQhegbhGg+IgEhFQgEhHAEgKQAOghgGhGIgIg+QA0iVgchyIAPgJQAUgLAbgJQBVgfB3AAQB/AABTAUQBFARgFAPQgPBmA8BwIgYBcQgVBhANAhQAFAKgEBHIgEBGQgXAqhAAdQhBAehSAFIgkACQhGAAhCgUg");
	this.shape_26.setTransform(87.3,85.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#D6D638").ss(5,1,1).p("ADXlbQiYBgh9DiQhjCyg1DD");
	this.shape_27.setTransform(49.9,127.3,0.517,0.517);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D6D638").ss(5,1,1).p("ADWFcQg0jDhkiyQh8jiiXhg");
	this.shape_28.setTransform(121.8,127.3,0.517,0.517);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(2,1,1).p("AhqgDIDUAH");
	this.shape_29.setTransform(144.5,215.7,0.517,0.517);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(2,1,1).p("AhoAEIDRgG");
	this.shape_30.setTransform(143.5,219.1,0.517,0.517);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#838587").ss(2,1,1).p("AhhAMIDDgX");
	this.shape_31.setTransform(145.3,221.6,0.517,0.517);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#838587").ss(2,1,1).p("AhUANICpgZ");
	this.shape_32.setTransform(147.3,223.8,0.517,0.517);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#838587").ss(2,1,1).p("AhdARIC6gh");
	this.shape_33.setTransform(149.8,226.5,0.517,0.517);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#838587").ss(2,1,1).p("AhOATICdgl");
	this.shape_34.setTransform(151.5,228.6,0.517,0.517);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#201F1F").ss(2,1,1).p("Ak+hoIgKBaQgDBgAhApQBGAKA6AkQAeARAPAQIB6AHQCKAGBagMQBcgPALg4QADgRgFgTIgGgQQh8hdhAgxQgngggWgnIgPgiIggBgIBYBPQAQAOgQATQgPASgfAEQgaADgQgMQg+gzglgdQhGg3gIgFQgEgCgfg+Qgeg6gSgBQgkgDgZAOQgrAZAWBFg");
	this.shape_35.setTransform(147.1,224.6,0.517,0.517);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#606163","#322F2F"],[0,1],-35.9,-5.2,34,9.6).s().p("AgDDRIh6gHQgPgQgegRQg6gkhGgKQghgpADhgIAKhaQgWhFArgZQAZgOAkADQASABAeA6QAfA+AEACQAIAFBGA3IBjBQQAQAMAagDQAfgEAPgSQAQgTgQgOIhYhPIAghgIAPAiQAWAnAnAgQBAAxB8BdIAGAQQAFATgDARQgLA4hcAPQg9AIhTAAQgoAAgsgCg");
	this.shape_36.setTransform(147.1,224.6,0.517,0.517);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#201F1F").ss(2,1,1).p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_37.setTransform(144.9,220.1,0.517,0.517);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#322F2F","#606163"],[0,1],-23,-6,25.7,4.3).s().p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_38.setTransform(144.9,220.1,0.517,0.517);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(2,1,1).p("Ak3hOIgDAOQgEAWAPASQAPASAcAGQAmAIAYASQBQA6C5gFQAigBAzgGQA8gIAvgiQAvghAFgnIAFghg");
	this.shape_39.setTransform(147.7,235.1,0.517,0.517);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-30.7,-9.2,28.9,3.4).s().p("AjGAaQgYgSgmgIQgcgGgPgSQgPgSAEgWIADgOIJzADIgFAhQgFAngvAhQgvAig8AIQgzAGgiABIgdAAQijAAhJg1g");
	this.shape_40.setTransform(147.7,235.1,0.517,0.517);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#838587").ss(2.5,1,1).p("ABqgDIjUAH");
	this.shape_41.setTransform(29.5,215.7,0.517,0.517);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#838587").ss(2.5,1,1).p("ABpAEIjRgG");
	this.shape_42.setTransform(30.4,219.1,0.517,0.517);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#838587").ss(2.5,1,1).p("ABiAMIjDgX");
	this.shape_43.setTransform(28.6,221.6,0.517,0.517);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#838587").ss(2.5,1,1).p("ABVANIipgZ");
	this.shape_44.setTransform(26.6,223.8,0.517,0.517);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#838587").ss(2.5,1,1).p("ABeARIi7gh");
	this.shape_45.setTransform(24.1,226.5,0.517,0.517);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#838587").ss(2.5,1,1).p("ABPATIidgl");
	this.shape_46.setTransform(22.4,228.6,0.517,0.517);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#201F1F").ss(2,1,1).p("AFAhoIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQiLAGhZgMQhdgPgLg4QgDgRAFgTIAGgQIBGg1QBOg6AogfQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFg");
	this.shape_47.setTransform(26.9,224.6,0.517,0.517);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#606163","#322F2F"],[0,1],36,-5.2,-33.9,9.6).s().p("AjfDLQhdgPgLg4QgDgRAFgTIAGgQIBGg1IB2hZQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQgtACgoAAQhTAAg8gIg");
	this.shape_48.setTransform(26.9,224.6,0.517,0.517);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#201F1F").ss(2.5,1,1).p("AC/AcQATgYAJgfQAUg+gsgiQgwgkhwgDQhigDgfARQgVAMAXBNQAMAmAPAjIifCCICTATg");
	this.shape_49.setTransform(29.1,220.1,0.517,0.517);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#322F2F","#606163"],[0,1],23,-6,-25.7,4.3).s().p("AjgCQICfiCQgPgjgMgmQgXhNAVgMQAfgRBiADQBwADAwAkQAsAigUA+QgJAfgTAYIkMCHg");
	this.shape_50.setTransform(29.1,220.1,0.517,0.517);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#60605B").ss(2.5,1,1).p("AE4hOIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhQA6i5gFQgkgBgygGQg7gIgvgiQgwghgFgnIgFghg");
	this.shape_51.setTransform(26.2,235.1,0.517,0.517);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],30.8,-9.2,-28.8,3.4).s().p("AhBBPQgkgBgygGQg7gIgvgiQgwghgFgnIgFghIJzgDIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhKA1ijAAIgcAAg");
	this.shape_52.setTransform(26.2,235.1,0.517,0.517);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2.5,1,1).p("AD5jVQg4AZjBASQjAgSg4gZQhPAyhAB0Qg0BcgaBkIAAAAQAPgUArgFQAtgFA4AOQA4AOAhAYQAiAYgGAWICAiPQANgOARgIQARgHASAAQASAAARAHQASAIAMAOICACPQgFgWAhgYQAigYA4gOQA4gOAtAFQArAFAPAUIAAAAQgbhkgzhcQhBh0hOgyg");
	this.shape_53.setTransform(85.9,130.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#575700","#000000"],[0,1],0,21.3,0,-21.4).s().p("ABBBGQgMgNgRgJQgRgHgTAAQgSAAgRAHQgRAJgNANIiACPQAFgVghgZQghgYg4gOQg4gOgtAFQgrAFgPAVIAAAAQAbhlAzhcQBBh0BOgyQA4AZDAASQDBgSA4gZQBOAyBAB0QA0BcAbBlIAAAAQgQgVgqgFQgtgFg4AOQg4AOgiAYQggAZAEAVg");
	this.shape_54.setTransform(85.9,130.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#60605B").ss(2.5,1,1).p("AC5CWIgilZQhhA5g9AZQhRAhhgAKIByEKg");
	this.shape_55.setTransform(135.9,213.1,0.517,0.517);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],18.6,0.6,-18.5,0.6).s().p("Ai4hFQBggLBRghQA9gZBhg5IAiFZIj/Aug");
	this.shape_56.setTransform(135.9,213.1,0.517,0.517);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#60605B").ss(2.5,1,1).p("AjDCzIAwmTQBvBCAzAYQBZAoBdAKIiIE1g");
	this.shape_57.setTransform(36.3,211.6,0.517,0.517);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.6,0.1,19.7,0.1).s().p("AjDCzIAwmTQBvBCAzAYQBZAoBcAKIiIE1g");
	this.shape_58.setTransform(36.3,211.6,0.517,0.517);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aj7vQIF3GxQARAUA1BpQA2BpAFAZICrTxIj1AAIlGvrIAAisIkUoHg");
	this.shape_59.setTransform(122.8,170.4,0.517,0.517);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,-97.7,0,97.7).s().p("ACzPRIlGvrIAAisIkUoHICrkDIF4GxQAQAUA2BpQA2BpAFAZICrTxg");
	this.shape_60.setTransform(122.8,170.4,0.517,0.517);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(3.4,1,1).p("ACKghQAFAWgkAYQglAag5AOQg4AOgsgFQgsgGgGgWQgFgWAlgYQAkgaA5gOQA4gOAsAFQAtAGAFAWg");
	this.shape_61.setTransform(118.8,148.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#575700","#000000"],[0,1],-13.8,0,13.9,0).s().p("AhXA+QgsgGgGgWQgFgWAlgYQAkgaA5gOQA4gOAsAFQAtAGAFAWQAFAWgkAYQglAag5AOQgpAKgjAAIgYgBg");
	this.shape_62.setTransform(118.8,148.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BE9075").ss(2.5,1,1).p("AD8vQIl2GxQgRAUg2BpQg2BpgFAZIirTxID1AAIFGvrIAAisIEUoHg");
	this.shape_63.setTransform(48.7,170.4,0.517,0.517);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,97.7,0,-97.7).s().p("AmnPRICrzxQAFgZA2hpQA2hpARgUIF2mxICsEDIkUIHIAACsIlGPrg");
	this.shape_64.setTransform(48.7,170.4,0.517,0.517);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2.5,1,1).p("AiIghQgGAWAlAYQAkAaA5AOQA4AOAsgFQAsgGAGgWQAFgWgkgYQgkgag6gOQg4gOgsAFQgsAGgFAWg");
	this.shape_65.setTransform(52.7,148.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#575700","#000000"],[0,1],-13.8,0,13.9,0).s().p("AgMA1Qg5gOgkgaQglgYAFgWQAGgWAsgGQAsgFA4AOQA6AOAjAaQAlAYgFAWQgGAWgsAGIgYABQgjAAgpgKg");
	this.shape_66.setTransform(52.7,148.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE9075").ss(2.5,1,1).p("ApoLkQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgQAHgQgJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hn");
	this.shape_67.setTransform(34.1,98.3,0.517,0.517);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-35.4,-23.7,23.2,9.8).s().p("AohOJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hnIg7BnQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgHADgHAAQgJAAgJgFg");
	this.shape_68.setTransform(34.1,98.3,0.517,0.517);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BE9075").ss(2.5,1,1).p("AJrLmQAIALAPgCQAQgEACgRQABgJgGgIIikjBIhCp5IqcpqQg+g5hNgaIkVhfIC/IHIIQEVIDyJ4IiNDgQgIANADAPQADAPANAJQANAIAOgDQAPgCAJgMIBMhkQALgPASAEQASAEAEASIAmC1QACAKAIAGQAIAHAKgBQAMAAAHgIQAIgIAAgLIABjhIAzDqQAEASAQAHQAQAHAPgJIAJgFQALgGAEgMQAEgMgEgLIgxiTIBIB+QAHAMAOAEQAOAEANgHQAMgHAEgOQAEgOgHgNgAJmLeIADAFQABACABABIgFgIIg4hh");
	this.shape_69.setTransform(141.5,98.3,0.517,0.517);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-23.1,9.8,35.5,-23.7).s().p("AIDOLQgQgHgEgSIgzjqIgBDhQAAALgIAIQgHAIgMAAQgKABgIgHQgIgGgCgKIgmi1QgEgSgSgEQgSgEgLAPIhMBkQgJAMgPACQgOADgNgIQgNgJgDgPQgDgPAIgNICNjgIjyp4IoQkVIi/oHIEVBfQBNAaA+A5IKcJqIBCJ5ICkDBQAGAIgBAJQgCARgQAEQgPACgIgLIAjA9QAHANgEAOQgEAOgMAHQgNAHgOgEQgOgEgHgMIhIh+IAxCTQAEALgEAMQgEAMgLAGIgJAFQgJAFgJAAQgGAAgHgDgAJrLmIgFgIIg4hhIA4BhIADAFIACADgAJpLjIgDgFIAFAIIgCgDgAJmLeg");
	this.shape_70.setTransform(141.5,98.3,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2ready, new cjs.Rectangle(-1.2,-1.2,178.1,241.7), null);


(lib.player1win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9C701F").ss(2.5,1,1).p("AHBAkQgFgzgfgqQgfgrgwgUQiYhBi4AAIgBAAQiwAAiSA7QgwATgfApQggApgHAyQgMBTAEBOQAAAAAWgeQAegjArgcQCJhdDZAAQDXAACNBbQBHAuAbAtQAChjgFgvg");
	this.shape.setTransform(70.8,20,0.485,0.485,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA92F").s().p("Am7AZQAHgyAggpQAfgpAwgTQCSg7CwAAIABAAQC4AACYBBQAwAUAfArQAfAqAFAzQAFAvgCBjQgbgthHguQiNhbjXAAQjZAAiJBdQgrAcgeAjIgWAeQgEhOAMhTg");
	this.shape_1.setTransform(70.8,20,0.485,0.485,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#352B2C").ss(2.5,1,1).p("ACvmZQhtgNhvAsQgjAOgfASIgYAPQgLgIgQgHQgggOgXAEQhvAWhBC4QghBcgLBWIABgBQgBAQAAARIAADcIAnAAIAACEIAdgtIAAk2IAUgaQAbgfAkgYQB1hTCpgBQCqABB1BTQA6AoAYApIAAE2IAeAtIAAiEIAnAAIAAjHQAFiQg7iSQhLi4iGgQg");
	this.shape_2.setTransform(70.9,23,0.485,0.485,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B3A3B").s().p("AFxFvIAAk2QgYgpg6goQh1hTiqgBQipABh1BTQgkAYgbAfIgUAaIAAE2IgdAtIAAiEIgnAAIAAjcQAAgRABgQIgBABQALhWAhhcQBBi4BvgWQAXgEAgAOQAQAHALAIIAYgPQAfgSAjgOQBvgsBtANQCGAQBLC4QA7CSgFCQIAADHIgnAAIAACEg");
	this.shape_3.setTransform(70.9,23,0.485,0.485,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B3A3B").s().p("AgGAdQgogBghgcIgagcIBjARIBvgRQgOAPgVANQgqAdggAAIgCAAg");
	this.shape_4.setTransform(70.7,54.4,0.485,0.999,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B3A3B").s().p("AhOAAIgdgJIBrAJIBsgJQgLAFgTAEQgmAKgoAAQgoAAgmgKg");
	this.shape_5.setTransform(70.8,52.4,0.485,0.999,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_6.setTransform(59.3,39.2,0.485,0.485,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_7.setTransform(60.5,39.9,0.485,0.485,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_8.setTransform(80.2,39.2,0.485,0.485,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_9.setTransform(81.4,39.9,0.485,0.485,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_10.setTransform(70.9,41.6,0.485,0.485,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F4137").s().p("ABUAnIgEgCQgXgKgOgEIgWgGIgWgFIgWgDQgPAAgHABIgKABQgFAAgEABQgMACgFACIgEACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgJgDIgegFIAFgNQAFgLAEgFIAGgJQABgBAEgBIAFgCIAXgGIAagDIAbAAIAbADIAbAFQANADAMAFQATAGAYAKIAFACQADABABABIAFAIIAIAPIAEALIABAEIgoAHIgBAAIgDgCg");
	this.shape_11.setTransform(60.3,32.8,0.485,0.485,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F4137").s().p("AhXApIgogHIABgEIAEgLIAIgPIAFgIIAEgCIAFgCQAYgKATgGQAMgFANgDQAJgCASgDIAbgDIAbAAIAaADIAXAGIAFACQAEABABABIAGAJQAEAFAFALIAFANIgmAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEgCIgQgEQgFgBgFAAIgKgBIgVgBIgXADIgWAFIgWAGIglAOIgEACIgDACIgBAAg");
	this.shape_12.setTransform(81.5,32.8,0.485,0.485,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_13.setTransform(70.9,37.5,0.485,0.485,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_14.setTransform(70.9,37.5,0.485,0.485,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_15.setTransform(70.9,41.7,0.485,0.485,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_16.setTransform(70.9,41.7,0.485,0.485,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(3.7,1,1).p("Ag3gaIBvA1");
	this.shape_17.setTransform(109.2,272.5,0.618,0.618,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(3.7,1,1).p("Ag5gTIBzAn");
	this.shape_18.setTransform(110.9,275.9,0.618,0.618,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#838587").ss(3.7,1,1).p("Ag3gLIBvAX");
	this.shape_19.setTransform(110.5,279,0.618,0.618,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#838587").ss(3.7,1,1).p("AgvgIIBfAR");
	this.shape_20.setTransform(109.9,281.9,0.618,0.618,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#838587").ss(3.7,1,1).p("Ag0gIIBpAR");
	this.shape_21.setTransform(109.2,285.6,0.618,0.618,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#838587").ss(3.7,1,1).p("AgsgEIBaAJ");
	this.shape_22.setTransform(108.7,288.3,0.618,0.618,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#201F1F").ss(3.7,1,1).p("AiZjIIAdEuIAIAdQALAjASAdQA3BcBcgFQBdgGABhOQAAgYgKgdIhBjQQgMgmgBgqIACgjIgrBQIAZBeQAEARgMAMQgNAMgRgFQgOgFgEgOQg4iegEgGQgBgDgBg9QAAg5gKgFQgTgJgSAIQgfAOgHBAg");
	this.shape_23.setTransform(109.9,285.2,0.618,0.618,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#606163","#322F2F"],[0,1],-21.9,-8.8,20.4,11.4).s().p("AhXDDQgSgdgLgjIgIgdIgdkuQAHhAAfgOQASgIATAJQAKAFAAA5QABA9ABADQAEAGA4CeQAEAOAOAFQARAFANgMQAMgMgEgRIgZheIArhQIgCAjQABAqAMAmIBBDQQAKAdAAAYQgBBOhdAGIgLAAQhUAAg0hXg");
	this.shape_24.setTransform(109.9,285.2,0.618,0.618,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#201F1F").ss(3.7,1,1).p("AhkgcQgEgYADgeQAFg6AigVQAlgYA9ATQA3ARALAXQAHAPghBCQgRAhgSAdIAxCeIhQgXg");
	this.shape_25.setTransform(110.9,278,0.618,0.618,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#322F2F","#606163"],[0,1],-11.6,-7.5,14.9,5.2).s().p("AAKCYIhui0QgEgYADgeQAFg6AigVQAlgYA9ATQA3ARALAXQAHAPghBCQgRAhgSAdIAxCeg");
	this.shape_26.setTransform(110.9,278,0.618,0.618,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#838587").ss(3.7,1,1).p("Ag9gBIB7AD");
	this.shape_27.setTransform(41.2,288.5,0.618,0.618,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#838587").ss(3.7,1,1).p("Ag8AEIB5gH");
	this.shape_28.setTransform(41.4,292.3,0.618,0.618,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(3.7,1,1).p("Ag3ALIBvgV");
	this.shape_29.setTransform(39.8,295,0.618,0.618,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(3.7,1,1).p("AgvALIBfgV");
	this.shape_30.setTransform(38,297.4,0.618,0.618,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#838587").ss(3.7,1,1).p("AgzANIBngZ");
	this.shape_31.setTransform(35.9,300.5,0.618,0.618,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#838587").ss(3.7,1,1).p("AgrANIBXgZ");
	this.shape_32.setTransform(34.4,302.8,0.618,0.618,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#201F1F").ss(3.7,1,1).p("AjFhbIADBQQAIBVAXAjQArAHAoAeQATAPALANIBJALQBUAKAzgDQAzgEgCgyIgLgxIh+iTQgbgegRgnIgMggIgIBbIA9BLQALAOgHAQQgHAQgRACQgPADgLgMQhwh6gHgEQgDgCgYg4QgYg1gKAAQgWAAgNAOQgXAZAUA9g");
	this.shape_33.setTransform(38.2,298.5,0.618,0.618,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#606163","#322F2F"],[0,1],-21.1,-0.7,21.2,0.8).s().p("AAXC5IhJgLQgLgNgTgPQgogegrgHQgXgjgIhVIgDhQQgUg9AXgZQANgOAWAAQAKAAAYA1QAYA4ADACQAHAEBwB6QALAMAPgDQARgCAHgQQAHgQgLgOIg9hLIAIhbIAMAgQARAnAbAeIB+CTIALAxQACAygzAEIgdAAQgsAAg+gHg");
	this.shape_34.setTransform(38.2,298.5,0.618,0.618,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#201F1F").ss(3.7,1,1).p("AhwAfQgOgVgJgbQgSg3AXgiQAZgkA/gIQA5gGATAQQANAMgEBJQgCAlgFAiIBsB+IhTAKg");
	this.shape_35.setTransform(40,293.3,0.618,0.618,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#322F2F","#606163"],[0,1],-14.5,-0.5,14.9,0.5).s().p("AhwAfQgOgVgJgbQgSg3AXgiQAZgkA/gIQA5gGATAQQANAMgEBJQgCAlgFAiIBsB+IhTAKg");
	this.shape_36.setTransform(40,293.3,0.618,0.618,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#60605B").ss(3.7,1,1).p("Ai5hFIgBAMQAAATAKAPQALAPASAFQAZAGAQAPQA2AxBxADQATABAegBQAigCAXgZQAWgZgCghIgCgeg");
	this.shape_37.setTransform(36.8,309.6,0.618,0.618,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-18.8,-0.4,18.7,0.9).s().p("AA9BGQhxgDg2gxQgQgPgZgGQgSgFgLgPQgKgPAAgTIABgMIFyAYIACAeQACAhgWAZQgXAZgiACIgjAAIgOAAg");
	this.shape_38.setTransform(36.8,309.6,0.618,0.618,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(3,1,1).p("Ag8DcIhrmjICBAOQCKAGA2goIAOG3g");
	this.shape_39.setTransform(46.1,278.6,0.618,0.618,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-16.7,0,16.8,0).s().p("Ag8DcIhqmjICAAOQCLAGA0goIAPG3g");
	this.shape_40.setTransform(46.1,278.6,0.618,0.618,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#60605B").ss(3,1,1).p("AiVDyIgFnjIAbAWQAhAaAkAVQBzBBBigTIiYFwg");
	this.shape_41.setTransform(106.9,262.1,0.618,0.618,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-15.4,0,15.5,0).s().p("AiVDyIgFnjIAbAWQAhAaAkAVQBzBBBigTIiYFwg");
	this.shape_42.setTransform(106.9,262.1,0.618,0.618,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaCiQgPgDgMgLQgNgLgIgPQgIgRAAgWIAAgWQAAgKAHgHQAGgGAJgBIApAAQAKABAIAHIgBgJIgJAAQgKAAgGgHQgHgGAAgJIAAgjQAAgJAGgHIggAAQgJAAgGgHQgHgGAAgKIAAgXQAAgRAGgQQAHgPAMgLQAMgLAOgGQAPgHARABQAXAAAQAJQAPAJAIAKIAJAMQAEAHADAKIADATIABAaIgBAZQAAALgEAMIgHAMQAFAGADAIQAEAKAAANIAAAaIgBAZQAAALgBAHQgCAIgEAHIgHANQgJAOgQALQgSALgZAAQgLAAgPgFgAg8BTQAAARAHAMQAFAKAJAJQAIAHAMADQAJADAKAAQATAAALgIQANgHAGgLQAEgFACgEIADgLIACgPIABgXIgBgZQgBgKgCgHQgCgGgFgGQgFgFgJgFQAJgFAEgEQAFgFADgGQACgGABgJIABgYIgCgXIgCgQIgFgMIgHgJQgGgHgLgGQgLgHgQAAQgMAAgLAFQgLAFgJAHQgIAIgEALQgGALAAANIAAAXIApAAIAAgWQAAgHAFgHQAFgGAJAAQAJgBAGAGQAFAGAAAJIAAAkQAAAQgHAEQgHAFgRAAIAAAjIAPABQAGABADACQAEADABAFQACAGAAAIIAAAoQAAALgFAGQgFAHgKAAQgIAAgGgHQgFgGAAgKIAAgUIgpAAg");
	this.shape_43.setTransform(79.5,114.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ECA92F").s().p("AgXCYQgNgEgKgJQgLgJgGgNQgIgOAAgTIAAgXQAAgFADgDQAEgEAEAAIApAAQAFAAADAEQADADABAFIAAAVQAAAFACADQACACADAAQAFAAABgCQACgDABgGIAAgpQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgFgBIgNgBQgFAAgDgDQgEgDAAgFIAAgjQAAgFAEgDQADgDAFAAQAPAAADgDQABgCABgJIAAgkQAAgEgCgDQgCgCgFAAQgDAAgCACQgCAEAAADIAAAXQgBAEgDAEQgDADgFAAIgpAAQgEAAgEgDQgDgEAAgEIAAgYQAAgOAGgOQAGgNAKgJQAKgKANgFQAMgGAPAAQAUAAANAIQAMAHAIAJQAEAFAEAGQAEAHABAHQADAHABALQABAJAAAPIAAAZQgBALgEAIQgEAJgGAFIgCACIADADQAHAGADAJQADAJABALIAAAxIgDARQgBAHgDAGIgGALQgIAMgOAJQgQAJgVAAQgKAAgNgDg");
	this.shape_44.setTransform(79.5,114.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#ECA92F").ss(5.5,1,1).p("ABrjUQg3Aog1BKQhsCRADCm");
	this.shape_45.setTransform(93.1,79.3,0.618,0.618,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#ECA92F").ss(5.5,1,1).p("AB9BsQgSAsgYAtQgyBagiADQgVACgeg0Qgeg3gUhSQgzjUBCi1");
	this.shape_46.setTransform(47.3,84.8,0.618,0.618,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#ECA92F").ss(5.5,1,1).p("ADYiPQghA3g7A/Qh2B+iAAsQgugkgch3IgThw");
	this.shape_47.setTransform(69.9,73.8,0.618,0.618,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#ECA92F").ss(5.5,1,1).p("AkGA6IDGgWQDbgiBsg7");
	this.shape_48.setTransform(96,206.8,0.618,0.618,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#ECA92F").ss(5.5,1,1).p("Aj5CkQgMg7AVhEQAriIClgqQCpgrBLAoQAmATAEAd");
	this.shape_49.setTransform(60.7,182.1,0.618,0.618,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#6F047E").ss(3,1,1).p("Ah8mbQgiAYghAuQhDBaACBmQgOB3gjCuQgSBagUBbQgDAQAVAUQAWAUAoAQQBkAnCOgOQCBgNBQgzQAngZAOgXIBnnVQgLAcgPAbQgfA4gWACQgNABgSggQgTgigMgzQggiEAphvIglgTQgVAigkAnQhJBPhPAaQgcgWgShKIgLhFg");
	this.shape_50.setTransform(74,107.4,1,1,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,42.5,0,-42.5).s().p("AkHGNQgogQgWgUQgVgUADgQIAmi1QAjiuAOh3QgChmBDhaQAhguAigYIAhAAIALBFQASBKAcAWQBPgaBJhPQAkgnAVgiIAlATQgpBvAgCEQAMAzATAiQASAgANgBQAWgCAfg4QAPgbALgcIhnHVQgOAXgnAZQhQAziBANQglADgjAAQhgAAhKgcg");
	this.shape_51.setTransform(74,107.4,1,1,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#6F047E").ss(3,1,1).p("AmThvIgLB6IARAXQAYAbAhAXQBoBHCZgEQCYgDC9hSQBdgpBAgoIgdiIg");
	this.shape_52.setTransform(78.1,146.8,0.618,0.618,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-41.5,0,41.5,0).s().p("AlUBUQgggXgZgbIgRgXIAMh6IMUgoIAdCIQhAAohdApQi9BSiYADIgQABQiOAAhjhEg");
	this.shape_53.setTransform(78.1,146.8,0.618,0.618,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#6F047E").ss(3,1,1).p("AgcCDIBMCRQgNhFAUhIQApiRCqgTQCpgUBMAeQAmAPAEASQAMg/gKhdQgSi7hoiQQhpiQl0BHQh0AWiCAqIhqAkQgGADgJAKQgRATgSAkQg4BzghDqQggDpANDPQAGBnANA4IDGgWQDcgiBsg8IgTlDIgCgYIABAXgAgeBrIgGhi");
	this.shape_54.setTransform(79.1,175.2,0.618,0.618,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,57,0,-57).s().p("AoqGbQgNjPAgjpQAhjqA4hzQASgkARgTQAJgKAGgDIBqgkQCCgqB0gWQF0hHBpCQQBoCQASC7QAKBdgMA/QgEgSgmgPQhMgeipAUQiqATgpCRQgUBIANBFIhMiRIgCgYIABAXIABABIATFDQhsA8jcAiIjGAWQgNg4gGhngAgeBrIgGhigAgcCDgAgdCCIgBgXIACAYg");
	this.shape_55.setTransform(79.1,175.2,0.618,0.618,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al/tnIFzKRIg5FQIDgOyIDlAAIgs13Iihrgg");
	this.shape_56.setTransform(59.5,226.2,0.618,0.618,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,106.8,0,-106.7).s().p("ACbQsIjguyIA5lQIlzqRIIyjEIChLgIAsV3g");
	this.shape_57.setTransform(59.5,226.2,0.618,0.618,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE9075").ss(2.5,1,1).p("AiRojIAGHWIh/BFIAALLICZAAIEmrLIBWq6g");
	this.shape_58.setTransform(99.7,233.4,0.618,0.618,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.7,0,-70.6).s().p("AkKLDIAArLIB/hFIgGnWIGcifIhWK6IkmLLg");
	this.shape_59.setTransform(99.7,233.4,0.618,0.618,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAkAYIALhOAAkAYIAAAEIBHgBIgKALQgKALABAOQAAAPALAKQALALAQgBQARgBAJgNIAtg4QARgWgEgbQgFgdgZgPIg0ggIgbhJIkTAUQgPABgKALQgKALAAAPIAAB1IA+BXQAFAGAHAAQAJAAAEgIQAEgHgEgHIgohDIADhqAgzB/IALhzIAShtACDAAIgYAbAg/B0IgnhhIARh0Ag0CEIABgFIgBAEQAAAAAAABQgBAPALAMQALAMAQAAQANAAAKgJQAKgJACgOIAQhzAg/B0IAKAYIABgIAiiAJIAtBIQATAfAjAE");
	this.shape_60.setTransform(150.7,128.7,0.618,0.618,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DBA585","#FDE2CD"],[0,1],21,0,-21,0).s().p("AgqCfQgLgMABgPIAAgBIAAAAIABgEIALhzIAShtIgSBtIgLBzIgBAEIAAAAIAAABIgBAIIgKgYIgnhhIARh0IgRB0IAnBhQgjgEgTgfIgthIIADhqIgDBqIAoBDQAEAHgEAHQgEAIgJAAQgHAAgFgGIg+hXIAAh1QAAgPAKgLQAKgLAPgBIETgUIAbBJIA0AgQAZAPAFAdQAEAbgRAWIgtA4QgJANgRABQgQABgLgLQgLgKAAgPQgBgOAKgLIAKgLIhHABIAAgEIALhOIgLBOIgQBzQgCAOgKAJQgKAJgNAAQgQAAgLgMgAg0CEIABgFgABrAbIAYgbgAiiAJg");
	this.shape_61.setTransform(150.7,128.7,0.618,0.618,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEoAyIEWn6QhOAAhIAdQhHAdg5A2InKG7IiNAQIkOENICFBJID/gog");
	this.shape_62.setTransform(118.7,94.4,0.618,0.618,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#DBA585","#FDE2CD"],[0,1],57.4,0,-57.4,0).s().p("Ao9GAIEOkNICNgQIHLm7QA4g2BHgdQBIgdBOAAIkVH6IniFvIj+Aog");
	this.shape_63.setTransform(118.7,94.4,0.618,0.618,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjYirIgNA7QgOBIgFA+QgQDHBPAgQBQAgC6jcQBehtBNh1Ihyhgg");
	this.shape_64.setTransform(69.8,76.8,0.618,0.618,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,25.8,0,-25.7).s().p("Ai5D9QhPggAQjHQAFg+AOhIIANg7IFihWIByBgQhNB1heBtQijDBhRAAQgMAAgKgFg");
	this.shape_65.setTransform(69.8,76.8,0.618,0.618,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACzBiIApnbIkIiuQgIgFgEgJQgEgIACgKQADgPAOgHQAOgHAOAHIBNAmQAXAMAUgQQAUgQgGgZIgvjEQgDgLAFgKQAGgKAKgEQAMgFALAFQALAFAFAMIBDCuIgTjaQgBgPALgLQALgLAPABQAMABAJAJQAJAIABAMIARDRIAkioQADgPAOgIQANgHAPAFQALAEAHAKQAHALgCAMIgcDEIA3hBQAHgJALgDQAMgCAKAFQAMAGAEAMQAFAMgFALIhWDwIA1JbQAFA5giAuQgjAug4ALIm1BcIiPAeACzBiIA5BiAiMGzIAEgBIizHZQg7iHgpigQhQk/Bdh3IJFhM");
	this.shape_66.setTransform(27.9,56.1,0.618,0.618,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#DBA585","#FDE2CD"],[0,1],61.4,-25.9,-58.9,20.8).s().p("AmfJkQhQk/Bdh3IJFhMIA5BiIg5hiIApnbIkIiuQgIgFgEgJQgEgIACgKQADgPAOgHQAOgHAOAHIBNAmQAXAMAUgQQAUgQgGgZIgvjEQgDgLAFgKQAGgKAKgEQAMgFALAFQAMAFAEAMIBDCuIgTjaQgBgPALgLQALgLAPABQAMABAJAJQAJAIABAMIARDRIAkioQADgPAOgIQANgHAPAFQAMAEAGAKQAHALgCAMIgcDEIA3hBQAHgJALgDQAMgCAKAFQAMAGAEAMQAFAMgFALIhWDwIA1JbQAFA5giAuQgjAug4ALIm1BcIiPAeICPgeIAEgBIizHZQg7iHgpigg");
	this.shape_67.setTransform(27.9,56.1,0.618,0.618,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#173A2E").ss(3,1,1).p("Aj3DeIAEAPQAJAQAVAIQBDAZCohAQCohAAyhpQAZg1gJgmQgBhLglhAQhKh/i0A0Qi0A0ghDYQgRBsATBig");
	this.shape_68.setTransform(60.8,178.5,0.618,0.618,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#035C46").s().p("AjVEFQgVgIgJgQIgEgPQgThiARhsQAhjYC0g0QC0g0BKB/QAlBAABBLQAJAmgZA1QgyBpioBAQh4AuhFAAQgbAAgTgHg");
	this.shape_69.setTransform(60.8,178.5,0.618,0.618,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player1win, new cjs.Rectangle(-1.3,-1.2,166.3,317), null);


(lib.player1sit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGD1QgXAAgbgHQgcgGgYgOQgZgOgSgZQgTgbABgmIABggQABgRALgLQAMgLAQAAIBJACQgKgMAAgQIABgyQAAgHADgHIhAgCQgQAAgMgMQgLgMAAgRIABghQABgdARgaQAQgXAZgPQAYgPAcgHQAZgGAdAAIAHAAQApAAAgAOQAdANAPANQAKAJAJAKQAKAMAGARQAEAKAEAVQABARAAAWQAAATgCATQgDAWgLARIgGAIQAFAGADAHQAJARAAAXQABAPgBAXQgBAagBALQgCAPgEANQgFAQgIALQgHAKgJAIQgXAVggANQgeALgpAAgAiBB0QgBAWAMASQALAQATAMQATALAVAEQAXAGAUAAIAHAAQAiAAAXgJQAZgJARgQIALgNQAFgGACgJQADgIABgNQACgRAAgQQABgVgBgPQAAgMgFgMQgEgKgLgHQgKgIgUgIIAdgNQAKgGAHgIQAFgKACgMQACgQAAgSQAAgYgBgJQgBgKgEgNQgEgKgGgGQgFgHgJgIQgLgJgYgKQgWgKgjgBIgGAAQgYAAgUAFQgZAHgQAKQgSALgLAQQgKAPgBASIgBAhIBWADIABghQAAgKAKgJQAJgJAUAAIACAAQAUABALAIQALAJgBAMIgBA0QAAAXgPAGQgOAFgcAAIgLgBIgBAyIAhADQALABAJAFQAHAEADAIQADAGAAANIgCA6QgBAPgLAIQgLAIgQAAIgDAAQgUgBgKgIQgLgJAAgOIABgeIhVgCgAgDBWIAAAVIADAAIABgvIgNgBQAJAMAAAPgAABhVQAAAHgCAGIAFAAIABgjIgEAAg");
	this.shape.setTransform(57.3,97.4,0.586,0.586);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA92F").s().p("AgDCEQgOgBgNgDQgPgDgMgHQgNgIgIgLQgJgOAAgSIABgTQAAgFADgDQAEgDAEAAIAzABQAFABADADQADADAAAFIAAASQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAFACAGAAIABAAQAGAAADgBQADgCAAgDIABgiQAAgFgBgCIgBgBQgDgCgFAAIgRgCQgFAAgDgDQgEgEAAgFIABgcQAAgFAEgDQADgEAFAAIAGABQAQAAAEgDQABAAAAgGIABgfQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgEgDgHAAIgCAAQgGAAgCACIgDADIAAATQAAAEgDAEQgFADgEABIgzgCQgEAAgEgEQgDgDABgFIAAgTQAAgNAIgOQAJgLALgHQANgHAPgEQAOgEAOAAIAEAAQAWABAQAGQAPAHAJAHIAJAKQAEAFAEAHQACAHABAKIABAUIgBAWQgCAKgFAIQgDAGgHAEQAHAGAEAHQAEAJABAKIAAAWIgCAUIgDAPQgCAGgDAFIgJAKQgKALgSAGQgQAGgWAAg");
	this.shape_1.setTransform(57.3,97.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9C701F").ss(3,1,1).p("AloiVQBHgeE6ArQE7AsA7AvQAPA+gIBPQgFAngHAbQgUgYg7gdQh1g6jDgdQjkggiKAfQgTAFgOgOQgOgNAEgTQANg8AhhFg");
	this.shape_2.setTransform(54.1,20.9,0.586,0.586);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECA92F").s().p("AE7BtQh1g6jDgdQjkggiKAfQgTAFgOgOQgOgNAEgTQANg8AhhFQBHgeE6ArQE7AsA7AvQAPA+gIBPQgFAngHAbQgUgYg7gdg");
	this.shape_3.setTransform(54.1,20.9,0.586,0.586);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BE9075").ss(4,1,1).p("Ag6BRIA3AAQAgAAAXgYQAXgYAAghQAAghgYgYQgXgXggAAIhGAA");
	this.shape_4.setTransform(53.3,35.9,0.586,0.586);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#352B2C").ss(2.5,1,1).p("AFfjPQAkBagNB5QgLBxgwBvQgvBshBBEQhEBIhCAAQANi9iDhGIAmAAQAgAAAXgYQAXgYAAghQAAgigYgXQgXgYggAAIhGABIgCCBIgjgmIgBkeIAiglQAWgXgLgdQgMgdgfgDIjNgGQgvgCgGgoQgGgmAhgmQA/hGBOgQQBhgUBPBNIAtgDQA5gBA0ANQCnApA+Ccg");
	this.shape_5.setTransform(53.8,27.9,0.586,0.586);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B3A3B").s().p("AgxDZIAmAAQAgAAAXgYQAXgYAAghQAAgigYgXQgXgYggAAIhGABIgCCBIgjgmIgBkeIAiglQAWgXgLgdQgMgdgfgDIjNgGQgvgCgGgoQgGgmAhgmQA/hGBOgQQBhgUBPBNIAtgDQA5gBA0ANQCnApA+CcQAkBagNB5QgLBxgwBvQgvBshBBEQhEBIhCAAQANi9iDhGg");
	this.shape_6.setTransform(53.8,27.9,0.586,0.586);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F4137").s().p("AgigPIBFAAQgSAQgbAJIgYAGg");
	this.shape_7.setTransform(34.4,48.7,0.586,0.586);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLASQgFgHAAgLQgBgJAGgIQAFgIAGAAQAHAAAFAIQAFAHAAAKQABAKgFAIQgGAHgHABQgGAAgFgIg");
	this.shape_8.setTransform(36.4,33.9,0.586,0.586);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgfAjQgOgPAAgUQAAgTAOgOQANgPASAAQATAAANAOQAOAOAAAUQAAAUgNAPQgOAOgTAAQgSAAgNgOg");
	this.shape_9.setTransform(37.5,34.6,0.586,0.586);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F4137").s().p("AA4AnIgCgBIgKgGIgNgFIgegHIgPAAIgQAAQgNAAgQADIgDABQgBAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAIgTgOIgIgHIgDgCIABgDIAMgYIAFgIQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAEAAIAjgEIAVAAIAVABIAVADIAWAGIATAIIARAKIADACQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAIACAJIABAQIgCAOIgcAFIgIACIgBABQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_10.setTransform(37.2,28,0.586,0.586);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BE9075").ss(2,1,1).p("AA8G3IjIABQgmABgbgbQgcgbgBgnIgGjUIhEABQgcAAgOgYQgPgZAOgZIBjimIBIj4IDshZQB8AABYBYQBYBZABB/IABENQABB+hYBaQhXBah8AAg");
	this.shape_11.setTransform(45.3,32.4,0.586,0.586);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0.2,44,-0.2,-44).s().p("AjNGeQgcgbgBgnIgGjUIhEABQgcAAgOgYQgPgZAOgZIBjimIBIj4IDshZQB8AABYBYQBYBZABB/IABENQABB+hYBaQhXBah8AAIjIABIgBABQglAAgbgbg");
	this.shape_12.setTransform(45.3,32.4,0.586,0.586);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#838587").ss(3,1,1).p("Ag8gOIB5Ad");
	this.shape_13.setTransform(91,207.8,0.586,0.586);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#838587").ss(3,1,1).p("Ag+gGIB9AN");
	this.shape_14.setTransform(89.9,210.8,0.586,0.586);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#838587").ss(3,1,1).p("Ag8ACIB4gC");
	this.shape_15.setTransform(90.8,213.1,0.586,0.586);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#838587").ss(3,1,1).p("Ag0AEIBpgH");
	this.shape_16.setTransform(91.9,215.3,0.586,0.586);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(3,1,1).p("Ag7AHIB3gN");
	this.shape_17.setTransform(93.2,217.9,0.586,0.586);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(3,1,1).p("AgzAKIBngT");
	this.shape_18.setTransform(94.2,219.8,0.586,0.586);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#201F1F").ss(3,1,1).p("AinhiIgXBNQgVBTAMAlQAsAKAgAfQAQAQAIANIBQAJQBbAHA8gHQA9gIAKgnQADgMgCgOIgDgMQhHhMgigpQgVgcgJggIgGgbIgdBHIAuBDQAIALgLAOQgMANgTABQgRABgIgLQgNgQgmg2QgkgygCgDQgDgDgJg1QgIgzgKgDQgUgHgRAJQgdAQAAA9g");
	this.shape_19.setTransform(91.1,215.3,0.586,0.586);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#606163","#322F2F"],[0,1],-20,-4.2,21,11.4).s().p("AgTCyIhQgJQgIgNgQgQQgggfgsgKQgMglAVhTIAXhNQAAg9AdgQQARgJAUAHQAKADAIAzQAJA1ADADIAmA1IAzBGQAIALARgBQATgBAMgNQALgOgIgLIguhDIAdhHIAGAbQAJAgAVAcQAiApBHBMIADAMQACAOgDAMQgKAng9AIQgdADgkAAQgnAAgvgDg");
	this.shape_20.setTransform(91.1,215.3,0.586,0.586);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#201F1F").ss(3,1,1).p("Ah0AHQgHgVAAgbQgCg1AfgYQAggXA/ALQA3AJARASQAKALgVA5QgLAcgMAZIBVBuIheAGg");
	this.shape_21.setTransform(90.6,211.7,0.586,0.586);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#322F2F","#606163"],[0,1],-12.9,-5.5,15.3,5.2).s().p("Ah0AHQgHgVAAgbQgCg1AfgYQAggXA/ALQA3AJARASQAKALgVA5QgLAcgMAZIBVBuIheAGg");
	this.shape_22.setTransform(90.6,211.7,0.586,0.586);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#60605B").ss(3,1,1).p("AjEhDIgFAMQgIATAGAQQAHAQARAFQAYAIANAPQAVAXArALQAtAMBAgCQAYgBAjgEQAogFAhgYQAigXAFgaIAEgYg");
	this.shape_23.setTransform(90.9,225,0.586,0.586);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-18.9,-8.6,17.7,5.3).s().p("AhOA6QgrgLgVgXQgNgPgYgIQgRgFgHgQQgGgQAIgTIAFgMIGSAcIgEAYQgFAagiAXQghAYgoAFQgjAEgYABIgSAAQg0AAgngKg");
	this.shape_24.setTransform(90.9,225,0.586,0.586);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#60605B").ss(4,1,1).p("AApDFIBpmJQgrAPg3AIQhuAOg5glIgaGJg");
	this.shape_25.setTransform(90,203.5,0.586,0.586);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-14.6,0,14.7,0).s().p("AiRDFIAamJQA5AlBugOQA3gIArgPIhpGJg");
	this.shape_26.setTransform(90,203.5,0.586,0.586);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BE9075").ss(4,1,1).p("AEJp/IlWT/Ii7AAIAxwIICajG");
	this.shape_27.setTransform(96.9,177.5,0.586,0.586);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,64,0,-64).s().p("AkIKAIAxwIICajGIFGgxIlWT/g");
	this.shape_28.setTransform(96.9,177.5,0.586,0.586);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(3,1,1).p("AA9gOIh5Ad");
	this.shape_29.setTransform(21.9,207.8,0.586,0.586);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(3,1,1).p("AA/gGIh9AN");
	this.shape_30.setTransform(23.1,210.8,0.586,0.586);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#838587").ss(3,1,1).p("AA9ACIh4gC");
	this.shape_31.setTransform(22.2,213.1,0.586,0.586);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#838587").ss(3,1,1).p("AA1AEIhpgH");
	this.shape_32.setTransform(21.1,215.3,0.586,0.586);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#838587").ss(3,1,1).p("AA8AHIh3gN");
	this.shape_33.setTransform(19.7,217.9,0.586,0.586);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#838587").ss(3,1,1).p("AA0AKIhngT");
	this.shape_34.setTransform(18.8,219.8,0.586,0.586);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#201F1F").ss(3,1,1).p("ACohiIAXBMQAVBTgMAlQgrALghAfQgQAPgIAOQgiAFguADQhbAHg8gGQg9gIgKgnQgDgNACgOIADgLQBIhNAigpQAUgbAKggIAFgbIAdBGIgtBDQgJAMAMANQALANAUABQARABAIgKQAMgPAmg3QAkgzADgDQACgCAJg2QAJgzAJgDQAVgGAQAJQAdAQAAA9g");
	this.shape_35.setTransform(21.9,215.3,0.586,0.586);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#606163","#322F2F"],[0,1],20.1,-4.3,-20.9,11.3).s().p("AiDCyQg9gIgKgnQgDgNACgOIADgLQBIhNAigpQAUgbAKggIAFgbIAdBGIgtBDQgJAMAMANQALANAUABQARABAIgKQAMgPAmg3IAng2QACgCAJg2QAJgzAJgDQAVgGAQAJQAdAQAAA9IAXBMQAVBTgMAlQgrALghAfQgQAPgIAOQgiAFguADQguAEgoAAQgkAAgdgDg");
	this.shape_36.setTransform(21.9,215.3,0.586,0.586);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#201F1F").ss(3,1,1).p("AB1AHQAHgVAAgbQACg1gggYQgggXg+ALQg4AJgQASQgKALAVA5QAKAcANAZIhVBuIBeAGg");
	this.shape_37.setTransform(22.4,211.7,0.586,0.586);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#322F2F","#606163"],[0,1],13,-5.5,-15.3,5.2).s().p("Ah7CAIBVhuQgNgZgKgcQgVg5AKgLQAQgSA4gJQA+gLAgAXQAgAYgCA1QAAAbgHAVIiSB/g");
	this.shape_38.setTransform(22.4,211.7,0.586,0.586);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(3,1,1).p("ADGhDIAFAMQAHATgGAQQgHAQgRAFQgYAIgNAPQgVAXgqALQgtAMhBgCQgXgBgjgEQgpgFghgYQghgXgGgaIgEgYg");
	this.shape_39.setTransform(22,225,0.586,0.586);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],19.1,-8.6,-17.6,5.3).s().p("AgeBEQgXgBgjgEQgpgFghgYQghgXgGgaIgEgYIGTgcIAFAMQAHATgGAQQgHAQgRAFQgYAIgNAPQgVAXgqALQgnAKg1AAIgSAAg");
	this.shape_40.setTransform(22,225,0.586,0.586);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#60605B").ss(4,1,1).p("AgoDFIhqmJIBjAXQBuAOA5glIAbGJg");
	this.shape_41.setTransform(23,203.5,0.586,0.586);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-14.6,0,14.7,0).s().p("AgoDFIhqmJIBkAXQBtAOA5glIAaGJg");
	this.shape_42.setTransform(23,203.5,0.586,0.586);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BE9075").ss(4,1,1).p("AkIp/IFWT/IC7AAIgxwIIiajG");
	this.shape_43.setTransform(16,177.5,0.586,0.586);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,64,0,-64).s().p("ABOKAIlWz/IFGAxICaDGIAxQIg");
	this.shape_44.setTransform(16,177.5,0.586,0.586);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#ECA92F").ss(5,1,1).p("AgOkAQgdCcALBqQALBkA5CX");
	this.shape_45.setTransform(84.1,72.2,0.586,0.586);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#ECA92F").ss(5,1,1).p("AAQkAQAcCdgLBpQgLBlg5CW");
	this.shape_46.setTransform(30.6,72.2,0.586,0.586);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BE9075").ss(3,1,1).p("AGRJ0IAmA9QAHAKgEAMQgDAMgMAFQgIAEgJgDQgJgDgGgIIhdiKIg2guIAyBpIAQBiQABAKgGAIQgGAJgKABQgJACgIgFQgIgFgDgJIgsiBIg4hFIAjBCIgQBjQgCAMgKAHQgKAGgMgDQgKgCgGgJQgFgIAAgKIAHhKIhQgfIgggzIlaiRQhTgjgphPQgohQAUhXIArpoQAFhQAyg/QAxhABMgZICEgrQAcCdgLBqQgLBlg6CWIg3GrIA4APIFMD8ICAABICpDCQAKALgFANQgEAOgNADQgIACgIgDQgHgDgFgHIgagoIgshEIhRg8AjmCtIhygfAjaCwIAAAAIgMgDg");
	this.shape_47.setTransform(38.1,102,0.586,0.586);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,76.6,0,-76.5).s().p("AEUL6QgIgFgDgJIgsiBIg4hFIAjBCIgQBjQgCAMgKAHQgKAGgMgDQgKgCgGgJQgFgIAAgKIAHhKIhQgfIgggzIlaiRQhTgjgphPQgohQAUhXIArpoQAFhQAyg/QAxhABMgZICEgrQAcCdgLBqQgLBlg6CWIg3GrIAAAAIgMgDIAMADIgMgDIAMADIAAAAIA4APIFMD8ICAABICpDCQAKALgFANQgEAOgNADQgIACgIgDQgHgDgFgHIgagoIAmA9QAHAKgEAMQgDAMgMAFQgIAEgJgDQgJgDgGgIIhdiKIg2guIAyBpIAQBiQABAKgGAIQgGAJgKABIgFABQgGAAgGgEgAFlIwIAsBEIgshEIhRg8gAjmCtIhygfg");
	this.shape_48.setTransform(38.1,102,0.586,0.586);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BE9075").ss(3,1,1).p("AmHJmIgvBLQgHAKAEAMQADAMAMAFQAIAEAJgDQAKgDAFgIIBdiKIA2guIgzBpIgPBiQgBAKAGAIQAGAJAKABQAJACAIgFQAIgFADgJIAriBIA5hFIgjBCIAQBjQACAMAKAHQAKAGAMgDQAKgCAGgJQAGgIgBgKIgHhKIBQgfIAggzIFaiRQBTgjAphPQAphQgVhXIgrpoQgFhQgyg/QgxhAhMgZIiEgrQgcCcALBrQALBkA6CXIA3GrIg5APIlLD8IiAABIiqDCQgJALAEANQAEAOAOADQAIACAIgDQAHgDAEgHIAkg2IAjg2IBRg8ADmCtIBygfADmCtIgLADIAAAAg");
	this.shape_49.setTransform(76.6,102,0.586,0.586);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,76.6,0,-76.5).s().p("AkkL9QgKgBgGgJQgGgIABgKIAPhiIAzhpIg2AuIhdCKQgFAIgKADQgJADgIgEQgMgFgDgMQgEgMAHgKIAvhLIAjg2IBRg8IhRA8IgjA2IgkA2QgEAHgHADQgIADgIgCQgOgDgEgOQgEgNAJgLICqjCICAgBIFLj8IA5gPIg3mrQg6iXgLhkQgLhrAcicICEArQBMAZAxBAQAyA/AFBQIArJoQAVBXgpBQQgpBPhTAjIlaCRIggAzIhQAfIAHBKQABAKgGAIQgGAJgKACQgMADgKgGQgKgHgCgMIgQhjIAjhCIg5BFIgrCBQgDAJgIAFQgGAEgGAAIgFgBgADmCtIgLADIAAAAIALgDIgLADIAAAAIALgDIBygfg");
	this.shape_50.setTransform(76.6,102,0.586,0.586);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#ECA92F").ss(5,1,1).p("AhrEzQgziIA4iwQBAjHCqhm");
	this.shape_51.setTransform(88.6,141.3,0.586,0.586);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#ECA92F").ss(5,1,1).p("AiDkyQCqBmBADHQA4CwgzCI");
	this.shape_52.setTransform(22.8,141.3,0.586,0.586);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#ECA92F").ss(5,1,1).p("AjViRIA4BvQBMB9BdBMQA8gvBNiTIBBiL");
	this.shape_53.setTransform(56.4,63,0.586,0.586);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#6F047E").ss(3,1,1).p("AEKCWQgfhQAihnQAlh1Bkg7QiLgIiOAiQgsALgoANIgeAMIgWAAQgqgThHgRQiNgiiMAIQBkA7AlB1QAhBngeBQQgWA7gngOQgLgFgNgLIgJgLIAIAQQANAQAYAHQBOAWCchUIChAAQCcBUBOgWQAmgLAHgcQgOATgUAIQgmAOgWg7g");
	this.shape_54.setTransform(55.7,144.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,21.1,0,-21.1).s().p("ABRCRIihAAQicBUhOgWQgYgHgNgQIgIgQIAJALQANALALAFQAnAOAWg7QAehQghhnQglh1hkg7QCMgICNAiQBHARAqATIAWAAIAegMQAogNAsgLQCOgiCLAIQhkA7glB1QgiBnAfBQQAWA7AmgOQAUgIAOgTQgHAcgmALQgQAEgUAAQhKAAh8hCg");
	this.shape_55.setTransform(55.7,144.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BE9075").ss(4,1,1).p("Aicj4IgIBSIioiqIEVm9ICcgCQBxgBBGBaQBGBZgeBuIlWT/Ii7AAIAxwIICajG");
	this.shape_56.setTransform(93.5,169.1,0.586,0.586);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DBA585").s().p("AjNMQIAxwIICajGIiaDGIgIBSIioiqIEVm9ICcgCQBxgBBGBaQBGBZgeBuIlWT/g");
	this.shape_57.setTransform(93.5,169.1,0.586,0.586);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE9075").ss(3,1,1).p("ACdj4IAIBSICoiqIkVm9IicgCQhxgBhGBaQhGBZAeBuIFWT/IC7AAIgxwIIiajG");
	this.shape_58.setTransform(19.5,169.1,0.586,0.586);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DBA585").s().p("AATMQIlWz/QgehuBGhZQBGhaBxABICcACIEVG9IioCqIgIhSIiajGICaDGIAxQIg");
	this.shape_59.setTransform(19.5,169.1,0.586,0.586);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#6F047E").ss(3,1,1).p("AmHg+IANBOIASAHQAaAJApAHQCDAYDjgBQDjgBBIgKQAkgEgJgFIgEhCg");
	this.shape_60.setTransform(62,125.8,0.586,0.586);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-39.2,0,39.3,0).s().p("AklAnQgpgHgagJIgSgHIgNhOIMKAmIAEBCQAJAFgkAEQhIAKjjABIgKABQjcAAiAgYg");
	this.shape_61.setTransform(62,125.8,0.586,0.586);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#6F047E").ss(3,1,1).p("Akkk1ICJgmIAhBBQAtBKA3AtQAigcAthWIAmhSICPAnIBWESIhHGNQhmAKhxgBQjggCg1gyQgFg3gWhcQgWhegYhDQgVg4ASiEg");
	this.shape_62.setTransform(59.4,89.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,36,0,-36).s().p("AAmFoQjggCg1gyQgFg3gWhcQgWhegYhDQgVg4ASiEIAXh5ICJgmIAhBBQAtBKA3AtQAigcAthWIAmhSICPAnIBWESIhHGNQhcAJhlAAIgWAAg");
	this.shape_63.setTransform(59.4,89.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BE9075").ss(4,1,1).p("AiFjrIjdFbIAYAXQAgAbAoAXQB/BICbAAQCcAABnixQAgg4AXhCIAQg3Iiwifg");
	this.shape_64.setTransform(56.6,67.1,0.586,0.586);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,25.7,0,-25.7).s().p("AkCC5QgogXgfgbIgZgXIDelbIE2gVICwCfIgQA3QgXBCggA4QhnCxicAAQibAAh/hIg");
	this.shape_65.setTransform(56.6,67.1,0.586,0.586);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#ECA92F").ss(4,1,1).p("ABBEDIgQAdQgVAggcAUQhcA/iChYQhLgyADh3QADhvBDh6QBFh+BmhMQBwhVBzAJQDKARiHEyQhECYhsCVg");
	this.shape_66.setTransform(90,143.6,0.586,0.586);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#035C46").s().p("AjeE7QhLgyADh3QADhvBDh6QBFh+BmhMQBwhVBzAJQDKARiHEyQhECYhsCVIgQAdQgVAggcAUQgmAbguAAQg+AAhMg0g");
	this.shape_67.setTransform(90,143.6,0.586,0.586);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#ECA92F").ss(4,1,1).p("Ag/EDIAQAdQAVAgAbAUQBaA/CBhYQBKgygEh3QgDhvhCh6QhDh+hlhMQhuhVhxAJQjHARCFEyQBDCYBqCVg");
	this.shape_68.setTransform(22.5,143.6,0.586,0.586);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#035C46").s().p("AABFUQgbgUgVggIgQgdQhqiVhDiYQiFkyDHgRQBxgJBuBVQBlBMBDB+QBCB6ADBvQAEB3hKAyQhLA0g+AAQgsAAgmgbg");
	this.shape_69.setTransform(22.5,143.6,0.586,0.586);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#52758E").ss(2,1,1).p("AlCB4IOVAAQAoAAAMgmQANglgggYIi6iMIxEAAIE2DoQAIAHAKAAg");
	this.shape_70.setTransform(60.2,152.4,0.586,0.586);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#849EB6","#CFD9E1"],[0,1],0,-11.9,0,12).s().p("AlCB4QgKgBgIgGIk2joIREAAIC6CMQAgAXgNAmQgMAmgoAAg");
	this.shape_71.setTransform(60.2,152.4,0.586,0.586);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#52758E").ss(2,1,1).p("AlCCXIOVAAQAXAAAPgOQAOgNADgUIAAhIIjQh3IxDg/IAAA/IE1DoQAJAGAJAAg");
	this.shape_72.setTransform(60.2,154.2,0.586,0.586);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#849EB6","#CFD9E1"],[0,1],0,-15.1,0,15.1).s().p("AlCCXQgJAAgJgGIk1joIAAg/IRDA/IDQB3IAABIQgDAUgPANQgOAOgXAAg");
	this.shape_73.setTransform(60.2,154.2,0.586,0.586);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#566675","#849EB6"],[0,1],0,-76,0,76).s().p("AGkLxQgJgHgBgLIi5zvQgLhLg3gxQg2gxhKAAIjyAAQgqAAglARQglAQgcAgQgdAggOAqQgNAqAEAsIB8S0QABAMgIAKQgHAJgNABQgMACgJgJQgJgHgCgMIh7y0QgGg4ASg2QARg2AmgqQAkgoAwgVQAxgXA2AAIDyAAQBgAABHA/QBHBAAOBhIC4TuQACAMgHALQgHAJgMACIgFAAQgKAAgIgHg");
	this.shape_74.setTransform(61.2,155.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#566675").ss(5,1,1).p("AJ1AAIzpAA");
	this.shape_75.setTransform(64.2,200.8,0.586,0.586);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#566675","#849EB6"],[0,1],0,-73.9,0,74).s().p("AhMLjQgUgCgNgQQgOgQACgVICP1iQACgUAQgNQAQgNAVACQAUACANAQQAOAQgDAVIiOViQgCATgOANQgPAMgTAAg");
	this.shape_76.setTransform(84.7,158.4,0.586,0.586);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#52758E").ss(2,1,1).p("AjgkyIGeAAQCPAABtBgQBsBgAVCRIAnEUQpvhPpABPIgSivQgSivBziDQBziECrAAg");
	this.shape_77.setTransform(53.2,100,0.586,0.586);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#CFD9E1","#6589A6"],[0,1],0,-30.6,0,30.7).s().p("ApNEzIgSivQgSivBziDQBziECrAAIGeAAQCPAABtBgQBsBgAVCRIAnEUQpvhPpABPg");
	this.shape_78.setTransform(53.2,100,0.586,0.586);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#566675","#849EB6"],[0,1],0,-73.9,0,74).s().p("AhMLjQgVgCgNgQQgNgQACgVICP1iQACgUAQgNQAQgNAVACQAUACANAQQAOAQgDAVIiOViQgCATgPANQgOAMgTAAg");
	this.shape_79.setTransform(15.3,158.4,0.586,0.586);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#566675").ss(5,1,1).p("AJRAAIyhAA");
	this.shape_80.setTransform(47.4,183.1,0.586,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player1sit, new cjs.Rectangle(-1.5,-1.2,116.5,232.5), null);


(lib.player1ready = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ECA92F").ss(5,1,1).p("AkLgnQAegoBTgJQBWgKBsAbQBsAbBBAuQBAAvgKAr");
	this.shape.setTransform(52.7,147.3,0.517,0.517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ECA92F").ss(5,1,1).p("AkKBcQgKgrBAgvQBBguBsgbQBsgbBWAKQBTAJAeAo");
	this.shape_1.setTransform(119,147.3,0.517,0.517);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9C701F").ss(2.5,1,1).p("AHBAkQgFgzgfgqQgfgrgwgUQiYhBi4AAIgBAAQiwAAiSA7QgwATgfApQggApgHAyQgMBTAEBOQAAAAAWgeQAegjArgcQCJhdDZAAQDXAACNBbQBHAuAbAtQAChjgFgvg");
	this.shape_2.setTransform(86,18.1,0.517,0.517);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECA92F").s().p("Am7AZQAHgyAggpQAfgpAwgTQCSg7CwAAIABAAQC4AACYBBQAwAUAfArQAfAqAFAzQAFAvgCBjQgbgthHguQiNhbjXAAQjZAAiJBdQgrAcgeAjIgWAeQgEhOAMhTg");
	this.shape_3.setTransform(86,18.1,0.517,0.517);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#352B2C").ss(2.5,1,1).p("ACvmZQhtgNhvAsQgjAOgfASIgYAPQgLgIgQgHQgggOgXAEQhvAWhBC4QghBcgLBWIABgBQgBAQAAARIAADcIAnAAIAACEIAdgtIAAk2IAUgaQAbgfAkgYQB1hTCpgBQCqABB1BTQA6AoAYApIAAE2IAeAtIAAiEIAnAAIAAjHQAFiQg7iSQhLi4iGgQg");
	this.shape_4.setTransform(85.9,21.3,0.517,0.517);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B3A3B").s().p("AFxFvIAAk2QgYgpg6goQh1hTiqgBQipABh1BTQgkAYgbAfIgUAaIAAE2IgdAtIAAiEIgnAAIAAjcQAAgRABgQIgBABQALhWAhhcQBBi4BvgWQAXgEAgAOQAQAHALAIIAYgPQAfgSAjgOQBvgsBtANQCGAQBLC4QA7CSgFCQIAADHIgnAAIAACEg");
	this.shape_5.setTransform(85.9,21.3,0.517,0.517);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B3A3B").s().p("AhUAAIglgRIB5AGIB5gGQgNAJgXAIQgtASgoAAQgoAAgsgSg");
	this.shape_6.setTransform(85.9,53.3,0.517,0.517);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_7.setTransform(98.2,38.5,0.517,0.517);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_8.setTransform(97,39.3,0.517,0.517);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_9.setTransform(76,38.5,0.517,0.517);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_10.setTransform(74.8,39.3,0.517,0.517);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_11.setTransform(85.9,41.1,0.517,0.517);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F4137").s().p("ABUAnIgEgCQgXgKgOgEIgWgGIgWgFIgWgDQgPAAgHABIgKABQgFAAgEABQgMACgFACIgEACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgJgDIgegFIAFgNQAFgLAEgFIAGgJQABgBAEgBIAFgCIAXgGIAagDIAbAAIAbADIAbAFQANADAMAFQATAGAYAKIAFACQADABABABIAFAIIAIAPIAEALIABAEIgoAHIgBAAIgDgCg");
	this.shape_12.setTransform(97.1,31.7,0.517,0.517);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F4137").s().p("AhXApIgogHIABgEIAEgLIAIgPIAFgIIAEgCIAFgCQAYgKATgGQAMgFANgDQAJgCASgDIAbgDIAbAAIAaADIAXAGIAFACQAEABABABIAGAJQAEAFAFALIAFANIgmAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEgCIgQgEQgFgBgFAAIgKgBIgVgBIgXADIgWAFIgWAGIglAOIgEACIgDACIgBAAg");
	this.shape_13.setTransform(74.6,31.7,0.517,0.517);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_14.setTransform(85.9,36.8,0.517,0.517);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_15.setTransform(85.9,36.8,0.517,0.517);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_16.setTransform(85.9,41.2,0.517,0.517);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_17.setTransform(85.9,41.2,0.517,0.517);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGDYQgbAAgegGQghgFgZgLQgegNgTgTQgYgaABgjIAAgdQABgPAKgJQAJgKAOAAIBpAEQgLgKAAgQIABgtQABgKADgFIhggCQgOgBgJgKQgKgKABgOIAAgeQABgcAWgXQARgTAdgNQAbgLAggGQAfgFAcAAIAJAAQAwABAiALQAgAKASAMQAMAHAKAIQAMALAIAOQAHAOADAQQACAOAAAWQAAAVgDAOQgDAWgOAPIgEAEQADACAEAHQALAPACAXQABANgBAVQAAATgDAPQgDAPgEANQgHAOgJAJQgHAIgMAHQgZARglAKQgfAJgtAAgAigBmQAAAVAPAPQAOAPAXAKQAUAJAeAGQAfAFAWAAIAMAAQAoAAAcgIQAegHAVgPQAKgGAEgFQAFgFAEgIQADgJACgLQABgHABgVIAAggQgBgNgGgIQgGgKgNgHQgMgGgZgHQAUgGAQgGQANgGAHgHQAHgIACgLQACgMAAgTQABgQgCgNQgCgKgFgKQgFgIgHgHIgSgMQgOgJgdgKQgdgJgrgBIgIAAQgcAAgZAEQgcAGgYAJQgWAKgNANQgNAOAAAQIgBAeIBqACIABgcQAAgJAMgIQAMgIAYAAIAEAAQAYACANAGQAOAIAAALIgBAuQgBAVgSAFQgPAEggAAIgSAAIgBAsQAVAAAUACQAQACAJAFQAJADAEAHQADAIAAAKIgCAzQAAANgOAIQgNAGgWABIgCAAQgYgBgOgIQgOgIAAgNIABgbIhqgCgAgTBMIgBATQAJACAKABIABAAIAQgCIABgqIgLgCIgkgCQAMALgBAPgAgOhgIgBATQgBAKgDAFIAHAAQAXAAAJgBIABggQgHgBgLgBIgDAAIgOABg");
	this.shape_18.setTransform(87.8,99.4,0.517,0.517);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECA92F").s().p("AgFDHQgeAAgZgFQgggFgXgLQgagLgRgRQgTgUABgcIAAgeQAAgHAGgFQAFgFAGAAIBrAEQAGAAAFAEQAFAGAAAHIgBAbQAAABAGAEQAJAFAUABIACAAQASABAJgGQAGgDAAgCIABg0QAAgIgBgBIgFgDQgGgDgOgCQgRgCgXAAQgHAAgFgFQgEgFAAgIIABgsQAAgGAFgFQAFgFAHAAIASAAQAdAAANgDIAFgDQACgCAAgFIABguIgFgEQgJgFgVAAIgDAAQgTgBgHAFIgFAEIgBAcQAAAIgFAEQgFAFgHgBIhqgDQgHAAgFgEQgFgFAAgIIABgdQABgWARgTQAPgQAagMQAZgJAegGQAagFAeAAIAJAAQAvACAdAJQAeAJARALQAMAHAIAHQAJAIAHAMQAFALADAOQADAQgBARQgBAXgBAJQgDASgKAKQgIAJgNAGQAPAIAHALQAJAOABAQIAAAhQAAATgDANQgBAKgFAMQgFAMgHAHQgGAGgKAIQgYAPghAJQgfAIgpAAg");
	this.shape_19.setTransform(87.8,99.4,0.517,0.517);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#ECA92F").ss(5,1,1).p("AANj9QA2DbhiEg");
	this.shape_20.setTransform(58.6,67.3,0.517,0.517);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#ECA92F").ss(5,1,1).p("AAvDQQh0jZAdjG");
	this.shape_21.setTransform(115.6,64,0.517,0.517);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#ECA92F").ss(5,1,1).p("Akyi9QAJBdB3CPQB2CPA8gBQBTgRB2iPQB5iQgRhK");
	this.shape_22.setTransform(85.9,67.5,0.517,0.517);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D9A493").ss(3.4,1,1).p("ABzENIhzBPIhyhPQg2gmgZg9Qgag9ANhBIAXh8IAAkLIFvAAIAAELIAXB8QANBBgaA9QgZA9g2Amg");
	this.shape_23.setTransform(85.8,59.3,0.517,0.517);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,68.7,0,23.6).s().p("AhyENQg2gmgZg9Qgag9ANhCIAXh7IAAkLIFvAAIAAELIAXB7QANBCgaA9QgZA9g2AmIhzBPg");
	this.shape_24.setTransform(85.8,59.3,0.517,0.517);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#6F047E").ss(2.5,1,1).p("AH5pvQAKgciGghQihgmj2AAQjmAAimA6Qg0ASgnAWIgdASQA2DchjEhIAQB5QALCHgbA/QgIAUAHCJQAEBFAFBBQCGB3C2A1QCiAvCsgLQCggLB9g5QB8g5ArhSQAGhBADhFQAHiKgIgUQgbg/Aqi9IAviyQh1jZAdjGg");
	this.shape_25.setTransform(87.3,85.5,0.517,0.517);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,72.3,0,-72.3).s().p("AkHKtQi2g1iGh3IgJiGQgHiJAIgUQAbg/gLiHIgQh5QBjkhg2jcIAdgSQAngWA0gSQCmg6DmAAQD2AAChAmQCGAhgKAcQgdDGB1DZIgvCyQgqC9AbA/QAIAUgHCKQgDBFgGBBQgrBSh8A5Qh9A5igALQgiACgiAAQiIAAiCgmg");
	this.shape_26.setTransform(87.3,85.5,0.517,0.517);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#ECA92F").ss(5,1,1).p("ADXlbQiYBgh9DiQhjCyg1DD");
	this.shape_27.setTransform(49.9,127.3,0.517,0.517);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#ECA92F").ss(5,1,1).p("ADWFcQg0jDhkiyQh8jiiXhg");
	this.shape_28.setTransform(121.8,127.3,0.517,0.517);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(2,1,1).p("AhqgDIDUAH");
	this.shape_29.setTransform(144.5,215.7,0.517,0.517);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(2,1,1).p("AhoAEIDRgG");
	this.shape_30.setTransform(143.5,219.1,0.517,0.517);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#838587").ss(2,1,1).p("AhhAMIDDgX");
	this.shape_31.setTransform(145.3,221.6,0.517,0.517);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#838587").ss(2,1,1).p("AhUANICpgZ");
	this.shape_32.setTransform(147.3,223.8,0.517,0.517);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#838587").ss(2,1,1).p("AhdARIC6gh");
	this.shape_33.setTransform(149.8,226.5,0.517,0.517);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#838587").ss(2,1,1).p("AhOATICdgl");
	this.shape_34.setTransform(151.5,228.6,0.517,0.517);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#201F1F").ss(2,1,1).p("Ak+hoIgKBaQgDBgAhApQBGAKA6AkQAeARAPAQIB6AHQCKAGBagMQBcgPALg4QADgRgFgTIgGgQQh8hdhAgxQgngggWgnIgPgiIggBgIBYBPQAQAOgQATQgPASgfAEQgaADgQgMQg+gzglgdQhGg3gIgFQgEgCgfg+Qgeg6gSgBQgkgDgZAOQgrAZAWBFg");
	this.shape_35.setTransform(147.1,224.6,0.517,0.517);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#606163","#322F2F"],[0,1],-35.9,-5.2,34,9.6).s().p("AgDDRIh6gHQgPgQgegRQg6gkhGgKQghgpADhgIAKhaQgWhFArgZQAZgOAkADQASABAeA6QAfA+AEACQAIAFBGA3IBjBQQAQAMAagDQAfgEAPgSQAQgTgQgOIhYhPIAghgIAPAiQAWAnAnAgQBAAxB8BdIAGAQQAFATgDARQgLA4hcAPQg9AIhTAAQgoAAgsgCg");
	this.shape_36.setTransform(147.1,224.6,0.517,0.517);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#201F1F").ss(2,1,1).p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_37.setTransform(144.9,220.1,0.517,0.517);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#322F2F","#606163"],[0,1],-23,-6,25.7,4.3).s().p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_38.setTransform(144.9,220.1,0.517,0.517);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(2,1,1).p("Ak3hOIgDAOQgEAWAPASQAPASAcAGQAmAIAYASQBQA6C5gFQAigBAzgGQA8gIAvgiQAvghAFgnIAFghg");
	this.shape_39.setTransform(147.7,235.1,0.517,0.517);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-30.7,-9.2,28.9,3.4).s().p("AjGAaQgYgSgmgIQgcgGgPgSQgPgSAEgWIADgOIJzADIgFAhQgFAngvAhQgvAig8AIQgzAGgiABIgdAAQijAAhJg1g");
	this.shape_40.setTransform(147.7,235.1,0.517,0.517);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#838587").ss(2.5,1,1).p("ABqgDIjUAH");
	this.shape_41.setTransform(29.5,215.7,0.517,0.517);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#838587").ss(2.5,1,1).p("ABpAEIjRgG");
	this.shape_42.setTransform(30.4,219.1,0.517,0.517);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#838587").ss(2.5,1,1).p("ABiAMIjDgX");
	this.shape_43.setTransform(28.6,221.6,0.517,0.517);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#838587").ss(2.5,1,1).p("ABVANIipgZ");
	this.shape_44.setTransform(26.6,223.8,0.517,0.517);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#838587").ss(2.5,1,1).p("ABeARIi7gh");
	this.shape_45.setTransform(24.1,226.5,0.517,0.517);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#838587").ss(2.5,1,1).p("ABPATIidgl");
	this.shape_46.setTransform(22.4,228.6,0.517,0.517);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#201F1F").ss(2,1,1).p("AFAhoIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQiLAGhZgMQhdgPgLg4QgDgRAFgTIAGgQIBGg1QBOg6AogfQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFg");
	this.shape_47.setTransform(26.9,224.6,0.517,0.517);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#606163","#322F2F"],[0,1],36,-5.2,-33.9,9.6).s().p("AjfDLQhdgPgLg4QgDgRAFgTIAGgQIBGg1IB2hZQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQgtACgoAAQhTAAg8gIg");
	this.shape_48.setTransform(26.9,224.6,0.517,0.517);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#201F1F").ss(2.5,1,1).p("AC/AcQATgYAJgfQAUg+gsgiQgwgkhwgDQhigDgfARQgVAMAXBNQAMAmAPAjIifCCICTATg");
	this.shape_49.setTransform(29.1,220.1,0.517,0.517);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#322F2F","#606163"],[0,1],23,-6,-25.7,4.3).s().p("AjgCQICfiCQgPgjgMgmQgXhNAVgMQAfgRBiADQBwADAwAkQAsAigUA+QgJAfgTAYIkMCHg");
	this.shape_50.setTransform(29.1,220.1,0.517,0.517);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#60605B").ss(2.5,1,1).p("AE4hOIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhQA6i5gFQgkgBgygGQg7gIgvgiQgwghgFgnIgFghg");
	this.shape_51.setTransform(26.2,235.1,0.517,0.517);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],30.8,-9.2,-28.8,3.4).s().p("AhBBPQgkgBgygGQg7gIgvgiQgwghgFgnIgFghIJzgDIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhKA1ijAAIgcAAg");
	this.shape_52.setTransform(26.2,235.1,0.517,0.517);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#6F047E").ss(2.5,1,1).p("AHimcQhtAwl1AjQl0gjhsgwQiYBfh9DjQhkCxg0DDIABAAQAegoBTgJQBWgKBtAbQBsAbBBAvQBAAvgKArID3kWQAYgbAigPQAhgPAjAAQAlAAAhAPQAhAPAYAbID4EWQgKgrBAgvQBBgvBsgbQBtgbBWAKQBTAJAeAoIABAAQg1jDhjixQh9jjiYhfg");
	this.shape_53.setTransform(85.8,130.7,0.517,0.517);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,41.4,0,-41.3).s().p("AB/CIQgYgbgigPQgggPglAAQgjAAghAPQgiAPgYAbIj3EWQAKgshAguQhBgvhsgcQhtgbhWALQhTAJgeAnIgCABQA1jDBjixQB+jiCXhgQBsAvF1AkQF1gkBtgvQCYBgB9DiQBjCxA1DDIgBgBQgfgnhSgJQhWgLhtAbQhsAchCAvQg/AuAKAsg");
	this.shape_54.setTransform(85.8,130.7,0.517,0.517);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#60605B").ss(2.5,1,1).p("AC5CWIgilZQhhA5g9AZQhRAhhgAKIByEKg");
	this.shape_55.setTransform(135.9,213.1,0.517,0.517);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],18.6,0.6,-18.5,0.6).s().p("Ai4hFQBggLBRghQA9gZBhg5IAiFZIj/Aug");
	this.shape_56.setTransform(135.9,213.1,0.517,0.517);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#60605B").ss(2.5,1,1).p("AjDCzIAwmTQBvBCAzAYQBZAoBdAKIiIE1g");
	this.shape_57.setTransform(36.3,211.6,0.517,0.517);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.6,0.1,19.7,0.1).s().p("AjDCzIAwmTQBvBCAzAYQBZAoBcAKIiIE1g");
	this.shape_58.setTransform(36.3,211.6,0.517,0.517);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aj7vQIF3GxQARAUA1BpQA2BpAFAZICrTxIj1AAIlGvrIAAisIkUoHg");
	this.shape_59.setTransform(122.8,170.4,0.517,0.517);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,-97.7,0,97.7).s().p("ACzPRIlGvrIAAisIkUoHICrkDIF4GxQAQAUA2BpQA2BpAFAZICrTxg");
	this.shape_60.setTransform(122.8,170.4,0.517,0.517);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#6F047E").ss(3.4,1,1).p("AEKhBQALAqhHAxQhGAxhvAbQhtAchWgLQhVgKgLgrQgKgqBGgwQBHgyBugbQBugcBVALQBWAKAKArg");
	this.shape_61.setTransform(118.8,148.7,0.517,0.517);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-26.8,0,26.8,0).s().p("AiqB3QhVgKgKgrQgLgqBGgwQBIgyBtgbQBugcBVALQBWAKAKArQALAqhHAxQhGAxhvAbQhOAUhDAAQgaAAgYgDg");
	this.shape_62.setTransform(118.8,148.7,0.517,0.517);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BE9075").ss(2.5,1,1).p("AD8vQIl2GxQgRAUg2BpQg2BpgFAZIirTxID1AAIFGvrIAAisIEUoHg");
	this.shape_63.setTransform(48.7,170.4,0.517,0.517);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,97.7,0,-97.7).s().p("AmnPRICrzxQAFgZA2hpQA2hpARgUIF2mxICsEDIkUIHIAACsIlGPrg");
	this.shape_64.setTransform(48.7,170.4,0.517,0.517);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#6F047E").ss(2.5,1,1).p("AkKhBQgKAqBGAxQBIAxBuAbQBtAcBVgLQBVgKAMgrQAKgqhGgwQhHgyhvgbQhtgchVALQhWAKgLArg");
	this.shape_65.setTransform(52.7,148.7,0.517,0.517);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-26.8,0,26.8,0).s().p("AgZBmQhtgbhIgxQhGgxALgqQAKgrBVgKQBWgLBtAcQBvAbBGAyQBHAwgKAqQgMArhVAKQgXADgaAAQhDAAhPgUg");
	this.shape_66.setTransform(52.7,148.7,0.517,0.517);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE9075").ss(2.5,1,1).p("ApoLkQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgQAHgQgJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hn");
	this.shape_67.setTransform(34.1,98.3,0.517,0.517);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-35.4,-23.7,23.2,9.8).s().p("AohOJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hnIg7BnQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgHADgHAAQgJAAgJgFg");
	this.shape_68.setTransform(34.1,98.3,0.517,0.517);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BE9075").ss(2.5,1,1).p("AJrLmQAIALAPgCQAQgEACgRQABgJgGgIIikjBIhCp5IqcpqQg+g5hNgaIkVhfIC/IHIIQEVIDyJ4IiNDgQgIANADAPQADAPANAJQANAIAOgDQAPgCAJgMIBMhkQALgPASAEQASAEAEASIAmC1QACAKAIAGQAIAHAKgBQAMAAAHgIQAIgIAAgLIABjhIAzDqQAEASAQAHQAQAHAPgJIAJgFQALgGAEgMQAEgMgEgLIgxiTIBIB+QAHAMAOAEQAOAEANgHQAMgHAEgOQAEgOgHgNgAJmLeIADAFQABACABABIgFgIIg4hh");
	this.shape_69.setTransform(141.5,98.3,0.517,0.517);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-23.1,9.8,35.5,-23.7).s().p("AIDOLQgQgHgEgSIgzjqIgBDhQAAALgIAIQgHAIgMAAQgKABgIgHQgIgGgCgKIgmi1QgEgSgSgEQgSgEgLAPIhMBkQgJAMgPACQgOADgNgIQgNgJgDgPQgDgPAIgNICNjgIjyp4IoQkVIi/oHIEVBfQBNAaA+A5IKcJqIBCJ5ICkDBQAGAIgBAJQgCARgQAEQgPACgIgLIAjA9QAHANgEAOQgEAOgMAHQgNAHgOgEQgOgEgHgMIhIh+IAxCTQAEALgEAMQgEAMgLAGIgJAFQgJAFgJAAQgGAAgHgDgAJrLmIgFgIIg4hhIA4BhIADAFIACADgAJpLjIgDgFIAFAIIgCgDgAJmLeg");
	this.shape_70.setTransform(141.5,98.3,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player1ready, new cjs.Rectangle(-1.2,-1.2,178.1,241.7), null);


(lib.RfromH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.תמונהלמסיחH();
	this.instance.parent = this;
	this.instance.setTransform(-30,-41,0.314,0.314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RfromH, new cjs.Rectangle(-30,-41,59.1,81.4), null);


(lib.Q_plant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.plant();
	this.instance.parent = this;
	this.instance.setTransform(6,0,0.302,0.302);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Q_plant, new cjs.Rectangle(6,0,67.1,113.4), null);


(lib.Q_crearNone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.crearNone();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.222,0.222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Q_crearNone, new cjs.Rectangle(0,0,76.2,66.2), null);


(lib.people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.עיקרוןהדמותרקע();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.095,0.095);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.people, new cjs.Rectangle(0,0,76,79), null);


(lib.HfromR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.תמונהלמסיחR();
	this.instance.parent = this;
	this.instance.setTransform(-30,-41,0.318,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HfromR, new cjs.Rectangle(-30,-41,59.1,81.4), null);


(lib.A_overLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.overLine();
	this.instance.parent = this;
	this.instance.setTransform(-55,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_overLine, new cjs.Rectangle(-55,-25,110,49), null);


(lib.A_onLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.onLine();
	this.instance.parent = this;
	this.instance.setTransform(-58,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_onLine, new cjs.Rectangle(-58,-17,115,34), null);


(lib.A_noLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.noLine();
	this.instance.parent = this;
	this.instance.setTransform(-59,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_noLine, new cjs.Rectangle(-59,-21,117,41), null);


(lib.A_downLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.downLine();
	this.instance.parent = this;
	this.instance.setTransform(-61,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_downLine, new cjs.Rectangle(-61,-20,121,40), null);


(lib.wrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlPD3ID4j3Ij4j3IBZhYID2D3ID3j2IBZBYIj3D2ID3D3IhZBYIj3j2Ij2D3g");
	this.shape.setTransform(33.6,33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wrong, new cjs.Rectangle(0,0,67.2,67.2), null);


(lib.tbord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvsJxIAAzhIfZAAIAAThg");
	this.shape.setTransform(60.6,87.2,0.585,0.585);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9BB4C6").s().p("Av3JxIAAzhIfvAAIAAThg");
	this.shape_1.setTransform(60.7,87.2,0.585,0.585);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4D4E2").s().p("AwMKGIAA0LMAgZAAAIAAULg");
	this.shape_2.setTransform(60.7,87.2,0.585,0.585);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9BB4C6").s().p("AgTKGIAA0LIAnAAIAAULg");
	this.shape_3.setTransform(120.1,87.2,0.585,0.585);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AE+lrIBeAAIAALXIheAAgAmblrIBeAAIAALXIheAAg");
	this.shape_4.setTransform(60.9,36.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AE+FsIAArXIBeAAIAALXgAmbFsIAArXIBeAAIAALXg");
	this.shape_5.setTransform(60.9,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tbord, new cjs.Rectangle(0,-1,121.4,126), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AgQAgQgGgFgCgFQgBgGACgIQAIgVAbgXQgEAcAJAJQAJALAAAGQgBAGgFAGQgGAHgMAAQgMAAgGgFg");
	this.shape.setTransform(4.6,0.5,1,1,0,0,0,2.1,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,5.1,7.4), null);


(lib.right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AlsBWIBJhaIC7CVIF8nFIBZBLInFIdIAAgBIgBACg");
	this.shape.setTransform(36.5,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(0,0,73,61.7), null);


(lib.notPalying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EgOmA4QMAAAhwfIdNAAMAAABwfg");
	this.shape.setTransform(93.5,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.notPalying, new cjs.Rectangle(0,0,187,720), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(184,232,233,0.447)","rgba(111,184,184,0.298)","rgba(7,130,131,0.098)","rgba(7,130,131,0.098)","rgba(7,130,131,0.047)","rgba(7,130,131,0)"],[0.004,0.416,0.792,0.792,0.902,1],11.9,0,0,11.9,0,168.9).s().p("Av0MFQn9j9gbmVQgcmUHUlAQHVlAKzgwQKzgwH8D9QC0BaB4BsIAAP6QhXBWh2BQQnUFBq0AvQhuAIhoAAQotAAmrjVg");
	this.shape.setTransform(155.1,98.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,310.2,197.2), null);


(lib.glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9A4200").ss(1.4,1,1).p("AgyAzIAdAAQAAgfAVgUQAVgVAeAAIAAgdQgqAAgdAeQgeAcAAArg");
	this.shape.setTransform(7.9,7.8,0.635,0.635,0,-90,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6D00").s().p("AgyAzQAAgrAegcQAdgeAqAAIAAAdQgeAAgVAVQgVAUAAAfg");
	this.shape_1.setTransform(7.9,7.8,0.635,0.635,0,-90,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9A4200").ss(1.4,1,1).p("AAACDQg1AAgmgmQgngnAAg2QAAg1AngmQAmgnA1AAQA2AAAmAnQAnAmAAA1QAAA2gnAnQgmAmg2AAgACvAAQAAhHg0gzQgzg0hIAAQhHAAgzA0Qg0AzAABHQAABIA0A0QAzAzBHAAQBIAAAzgzQA0g0AAhIg");
	this.shape_2.setTransform(11.1,11.1,0.635,0.635,0,-90,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6D00").s().p("Ah6B8Qg0g0AAhIQAAhHA0gzQAzg0BHAAQBIAAAzA0QA0AzAABHQAABIg0A0QgzAzhIAAQhHAAgzgzgAhbhbQgnAmAAA1QAAA2AnAnQAmAmA1AAQA2AAAmgmQAngnAAg2QAAg1gngmQgmgng2AAQg1AAgmAng");
	this.shape_3.setTransform(11.1,11.1,0.635,0.635,0,-90,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9A4200").ss(1.4,1,1).p("ABOAQIhqhqQgZAlglAZIBqBqQANANASAAQASAAANgNQANgNAAgSQAAgSgNgNg");
	this.shape_4.setTransform(23.8,23.8,0.635,0.635,0,-90,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6D00").s().p("AAQBOIhqhqQAlgZAZglIBqBqQANANAAASQAAASgNANQgNANgSAAQgSAAgNgNg");
	this.shape_5.setTransform(23.8,23.8,0.635,0.635,0,-90,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.008)").s().p("AiTCUIAAknIEnAAIAAEng");
	this.shape_6.setTransform(14.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glass, new cjs.Rectangle(-1,-1,31.6,31.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7R2QkZgjlehiQiugxh3gqMACZggTIBKgLIXUdFQA8ExkABnQh/A0jKAAQh6AAiUgTg");
	this.shape.setTransform(86.6,116.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,173.1,232.2), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7TvQkZgjlehiQiugxh3gqMAGrgkFIBJgLMATDAg3QA8ExkABnQh/A0jKAAQh5AAiVgTg");
	this.shape.setTransform(86.6,128.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,173.1,256.4), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqRTOQkAhnA8kxMATDgg3IBJALMAGrAkFQh3AqiuAxQleBikZAjQiVATh5AAQjKAAh/g0g");
	this.shape.setTransform(86.5,128.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,173.1,256.4), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7S3QkZgklehhQiugxh3gqMAElgiVIBKgKIVIfGQA8EwkABoQh/AzjKAAQh5AAiVgSg");
	this.shape.setTransform(86.6,122.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,173.1,245.1), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqRSWQkAhoA8kwIVI/GIBKAKMAElAiVQh3AqiuAxQleBhkZAkQiVASh5AAQjKAAh/gzg");
	this.shape.setTransform(86.5,122.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,173.1,245.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABZTyQkZgklehhQiugxh3gqMgA8gkLIBJgKMAaqAg8QA8EwkABoQh/AzjKAAQh5AAiVgSg");
	this.shape.setTransform(89.6,128.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,179.1,256.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqvTRQkAhoA8kwMAaqgg8IBJAKMgA8AkLQh3AqiuAxQleBhkZAkQiVASh5AAQjKAAh/gzg");
	this.shape.setTransform(89.5,128.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,179.1,256.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqRRVQkAhnA8kxIXU9FIBKALMACZAgTQh3AqiuAxQleBikZAjQiUATh6AAQjKAAh/g0g");
	this.shape.setTransform(86.5,116.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,173.1,232.2), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(250,249,249,0)","rgba(250,249,249,0)","rgba(236,235,236,0)","rgba(219,217,219,0)","rgba(198,194,198,0)","rgba(173,168,174,0.149)","rgba(145,139,147,0.2)","rgba(116,111,120,0.298)","rgba(89,85,94,0.4)","rgba(66,66,66,0.498)","rgba(49,49,60,0.498)","rgba(49,49,60,0.6)"],[0.38,0.451,0.537,0.612,0.678,0.737,0.8,0.859,0.922,0.965,1,1],0,0,0,0,0,266.6).s().p("EghNAZIMAAAgyQMBCbAAAMAAAAyQg");
	this.shape.setTransform(647.6,160.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(435.1,0,425.2,321.7), null);


(lib.Group_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3694B1").s().p("AiUBMIAAj0IEoAYIAAE5g");
	this.shape.setTransform(14.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_0, new cjs.Rectangle(0,0,29.7,33.8), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3694B1").s().p("AiUiQIEogYIAAD0IkoBdg");
	this.shape.setTransform(14.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,29.7,33.8), null);


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB3hqQhogSiQgXIEDAZIAAEOg");
	this.shape.setTransform(13,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,26.1,29.7), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBh6IEDgZQiQAXhoASIgLD+g");
	this.shape.setTransform(13,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,26.1,29.7), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/hmIgCgtIAYAEQB3B/B0CkQiBiQiAhqg");
	this.shape.setTransform(13,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,26,29.6), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABqiPIAYgEIgCAtQiDBth+CNQB0ikB3h/g");
	this.shape.setTransform(13,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,26,29.6), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EghNADsIAAibIA9gUIQeAAIC1h5IthAAIITivMAkVAAAIPEE9IAACagEAgOAA9Ilyh5ItgAAIC1B5IQdAAg");
	this.shape.setTransform(212.6,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,425.2,47.3), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwiMIAoAFQBdB9BcCWQh3iohqhwg");
	this.shape.setTransform(11.3,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,22.5,28.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABJiHIAngFQhpBwh2CoQBbiWBdh9g");
	this.shape.setTransform(11.2,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,22.5,28.1), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao8VdQiugBh3gMMACZgqfIBKgNIXUchQA8F6kADkQjMC2mLBOQkPA2lPAAIgZAAg");
	this.shape_1.setTransform(86.6,137.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,173.1,274.6), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao8XzQiugBh3gMMAGrgvLIBJgNMATDAhNQA8F6kADkQjMC2mLBOQkPA2lPAAIgZAAg");
	this.shape.setTransform(86.6,152.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,173.1,304.6), null);


(lib.Path_3_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6W9QmLhOjMi2QkAjkA8l6MATDghNIBJANMAGrAvLQh3AMiuABIgZAAQlPAAkPg2g");
	this.shape_1.setTransform(86.5,152.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0_1, new cjs.Rectangle(0,0,173.1,304.6), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3694B1").s().p("AlwD+IAAn7ILhAAIAAH7g");
	this.shape_1.setTransform(36.9,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,73.8,50.8), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao8WtQiugBh3gMMAElgs/IBKgNIVIfBQA8F6kADkQjMC2mLBOQkPA2lPAAIgZAAg");
	this.shape.setTransform(86.6,145.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,173.1,290.6), null);


(lib.Path_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6V3QmLhOjMi2QkAjkA8l6IVI/BIBKANMAElAs/Qh3AMiuABIgZAAQlPAAkPg2g");
	this.shape_1.setTransform(86.5,145.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0_1, new cjs.Rectangle(0,0,173.1,290.6), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlCjeIKFAAIpoAdIgdGfg");
	this.shape_1.setTransform(32.3,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,64.7,44.5), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoeX2QiugBh3gMMgA8gvRIBJgOMAaqAhVQA8F6kADjQjMC3mLBOQkPA2lPAAIgZgBg");
	this.shape.setTransform(89.6,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,179.1,305.3), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYXBQmLhOjMi3QkAjjA8l6MAaqghVIBJAOMgA8AvRQh3AMiuABIgZABQlPAAkPg2g");
	this.shape_1.setTransform(89.5,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,179.1,305.3), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEGjZIA9gEIgGBbIp/Ffg");
	this.shape_1.setTransform(32.3,22.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,64.5,44.3), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6UnQmLhOjMi2QkAjkA8l6IXU8hIBKANMACZAqfQh3AMiuABIgZAAQlPAAkPg2g");
	this.shape_1.setTransform(86.5,137.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,173.1,274.6), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC0jTIBjgBIotGog");
	this.shape_1.setTransform(27.9,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,55.8,42.5), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A8FJdILky5IMQAAIhgJlILkAAIhiplIMRAAILjS5g");
	this.shape_1.setTransform(179.8,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,359.5,121.1), null);


(lib.Group_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDAHIAujJIAmAeIAzFng");
	this.shape_1.setTransform(6.8,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBTIgzlyIBMBFIB5H6g");
	this.shape_2.setTransform(20.8,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,30.7,62.8), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQikIAngeIAtDJIiHC8g");
	this.shape_1.setTransform(23.9,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWjaIBNhFIgzFyIiSDNg");
	this.shape_2.setTransform(9.9,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,30.7,62.8), null);


(lib.basket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#703751").s().p("Al3AYIAAgvILvAAIAAAvg");
	this.shape.setTransform(0,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#485B7F").s().p("AA0ApIgIgfIgNAcIgCABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgIgcIgKAYQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCgBIgFgVIgEAVIgCABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgKgYIgIAcQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBIgNgcIgIAfIgCABIgCgBIgSgeIgBABIgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAEgWgBgbIAGAAIAHAQIAHgQIAFAAIgKAVIAOASIgCgnIAEAAIACAjIAJgTIgJgQIAFAAIAGALIADgLIAEAAIgEAPIAGASIAAghIAFAAIAAAdIAFgTIgEgKIAFAAIACAEIABgEIAEAAIgDAKIAEANIAAgXIAFAAIAAAXIAEgNIgDgKIAEAAIABAEIACgEIAFAAIgEAKIAFATIAAgdIAFAAIAAAhIAGgSIgEgPIAEAAIADALIAGgLIAFAAIgJAQIAJATIACgjIAEAAIgCAnIAOgSIgKgVIAFAAIAHAQIAHgQIAGAAQgBAbAEAWQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBAAIgBgBIgSAeIgCABgAAuAFIAJAdIAQgbIgJgVgAhGAHIAQAbIAJgdIgQgTgAAWADIAAACIAIAaIALgZIAAgDIgKgXgAgoADIAAADIALAZIAIgaIAAgCIgJgXgAADgDIAAAFIgBACIAGAWIAJgWIAAgBIgIgbgAgQADIAAABIAJAWIAGgWIgBgCIAAgFIgGgVgABIgBQgCgQAAgQIgGAOIAIASIAAAAgAhHgBIAIgSIgGgOQAAAQgCAQg");
	this.shape_1.setTransform(0,26.7,2.264,2.139);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B34349").s().p("ABEAhIADgGIAAgDIgFgYIgQASIgBABIAHAOIgFAAIgCgFIgBAFIgFAAIABgFIgDAFIgFAAIAIgPIgIgWIgMASIAFATIgFAAIgCgHIAAAHIgFAAIAAgFIgCAFIgFAAIAIgSIAAgBIgJgUIgGATIAAABIAGATIgFAAIgBgEIAAAEIgFAAIAAgEIgBAEIgFAAIAGgTIAAgBIgGgTIgJAUIAAABIAIASIgFAAIgCgFIAAAFIgFAAIAAgHIgCAHIgFAAIAFgTIgMgSIgIAWIAIAPIgFAAIgDgFIABAFIgFAAIgBgFIgCAFIgFAAIAHgOIgBgBIgQgSIgFAYIAAADIADAGIgHAAIAAgGIgBAAIAAgBQAAgYgGgbIAAgBIgCgHIAHAAIgBAGIABABIAKARIAJgYIAIAAIANAVIAHgVIALAAIAJAQIAFgQIAJAAIAFAQIAJgQIALAAIAHAVIANgVIAIAAIAJAYIAKgRIABgBIgBgGIAHAAIgCAHIAAABQgGAbAAAYIAAABIgBAAIAAAGgAAzAKIANgPIgIgUIgFAjgAAngHIAHARQACgSAEgTgAgtAKIAHgRIgNgUQAEATACASgAgyAKIgFgjIgIAUIANAPIAAAAgABFgEIADAOIADgYgAhHAKIADgOIgGgKQACAMABAMgAAXAIIAKgQIgHgXIgDAngAgWAIIgDgnIgHAXIAKAQIAAAAgAALgMIAIARIADgigAgSAFIAIgRIgLgRQADARAAARgAADAAIAEgMIgEgOgAgGgMIAEAMIAAgag");
	this.shape_2.setTransform(0,11.2,2.264,2.139);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABNBaIgDgcIgQAVIAAADIABAEIgLAAIAEgGIgHgbIgRAXIADAKIgEAAIgBgBIAAABIgJAAIAGgKIAAgCIgKgaIgKAWIAAADIADANIgLAAIADgNIAAgDIgKgWIgKAaIAAACIAGAKIgJAAIAAgBIgBABIgEAAIADgKIgRgXIgHAbIAEAGIgLAAIABgEIAAgDIgQgVIgDAcIgGAAQgNg9ggg7IgegxQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQAAAAABABQAAAAAAAAIAUAfQAXAmAQAoIAFgXIABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABIAMAMQgLgjgNghQgKgZgBgBQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIAMAdQAPAkAKAlIANgVIACAAIACAAIAOAOQgIgjgJggIgIgaQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQACADAHAYQAKAiAHAkIANgUIACgBIACABIAOAPIgBhhQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAIAAABIAAgBQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIgBBhIAOgPIACgBIACABIANAUQAHgkAKgiQAHgYACgDQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgIAaQgJAggIAjIAOgOIACAAIACAAIANAVQAKglAPgkIAMgdQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBABgKAZQgNAhgLAjIAMgMQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABACIAFAXQAQgoAXgmQALgTAJgMQAAAAAAAAQAAgBABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgOATgQAeQggA7gNA9gABOA5IADAWQADgQAIgWgAhQBPIADgWIgOgQQAIAWADAQgAAwA2IAHAWQAEgVAGgWgAg2BMIAHgWIgRgVQAGAWAEAVgAA8BJIAOgRIgFgTgAg7BJIgJgkIgFATIAOARgAAdBHIANgTIgHgUIgGAngAgcBHIgGgnIgHAUIANATIAAAAgAAQAvIAIAWIAGgngAgXBFIAIgWIgOgRgAADBAIAIgRIgJgTgAgKAvIAIARIABgkgABIAZIgBADIAGAXIAPgSIABgBIgGgXgAhcAgIABABIAPASIAGgXIgBgDIgQgQgAAlAXIAJAaIAUgYIgMgUgAhBAZIAUAYIAJgaIgRgSgAADARIALAaIARgVIgNgWgAgeAWIARAVIALgaIgPgRg");
	this.shape_3.setTransform(0,-14.6,2.264,2.139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.basket, new cjs.Rectangle(-37.6,-35.6,75.3,71.2), null);


(lib.bamaWithYellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AnuHhQjNgqAAg7IABgEIAAgBIgBgDIABgDIgBAAIAAt7IABAAICdBXIAvALQDNAqEhAAQEiAADNgqQBfgTAygXQAdgMAOgPIARgdIAAN7IgBAAIABADIAAADIgBACIABADQAAAgg8AbQgyAXhfATQjNAqkiAAQkhAAjNgqg");
	this.shape.setTransform(70,66.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AnuBlIgvgKIidhYIAAAAIgBgDQAAg6DNgqQBHgOBRgKQCZgSC9AAQC+AACZASQBSAKBGAOQBfAUAyAXQA8AaAAAfIAAADIAAAAIgRAdQgOAOgdANQgyAXhfATQjNAqkiAAQkhAAjNgqg");
	this.shape_1.setTransform(70,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bamaWithYellow, new cjs.Rectangle(0,0,140,119.2), null);


(lib.bama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnuHhQjNgqAAg7IABgEIAAgBIgBgDIABgDIgBAAIAAt7IABAAICdBXIAvALQDNAqEhAAQEiAADNgqQBfgTAygXQAdgMAOgPIARgdIAAN7IgBAAIABADIAAADIgBACIABADQAAAgg8AbQgyAXhfATQjNAqkiAAQkhAAjNgqg");
	this.shape.setTransform(70,66.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AnuBlIgvgKIidhYIAAAAIgBgDQAAg6DNgqQBHgOBRgKQCZgSC9AAQC+AACZASQBSAKBGAOQBfAUAyAXQA8AaAAAfIAAADIAAAAIgRAdQgOAOgdANQgyAXhfATQjNAqkiAAQkhAAjNgqg");
	this.shape_1.setTransform(70,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bama, new cjs.Rectangle(0,0,140,119.2), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#152E49").s().p("AgGEkQgahmgEhxIAEiFQAMiHAshmIANgBQgtBpgMCGIgECEQAEBzAbBng");
	this.shape.setTransform(24.9,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#152E49").s().p("Ag8gaIgVAAQhyADhiAXIAAgMQBlgYBvgCIAVgBQDIAACaBDIgCALQiYhCjIABg");
	this.shape_1.setTransform(29.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#152E49").s().p("ACAgiQhEg2hVAAIgKABIgMAAQg0AFguAaQgtAZghAnIgGgKQAjgqAugZQAvgZA2gFIAWgBQBYAABHA3QBFA0AbBVIgKAJQgZhThDg0g");
	this.shape_2.setTransform(26,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#152E49").s().p("AgsBfQg1gEgwgYQgugYgigoIAGgKQAhAmAtAYQAuAYA0AEIASABQBSAABDgzQBCgwAahQIAKAIQgdBShEAxQhGA0hUAAg");
	this.shape_3.setTransform(26,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCEDE3").s().p("AghAdQgGgHAGgNQAFgNAPgMQANgMAOgEQAOgDAGAHQAGAHgGANQgFANgPAMQgOAMgNAEIgIABQgIAAgEgFg");
	this.shape_4.setTransform(15,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6D00").s().p("AgiD4IgLgBQgPgDgRgGQg7gSgrguQgZgagPgcIgFgKQgVgrgEgwIgBgTQAAg8Adg3IAFgKQAfg1AzghQA1ghA+gFIALAAIAIgBQBVAABDAzIAVASQAtAqATA6QAOAnAAAqQAAAXgEAUIgCAKQgRBThBA3IgIAGQhEA2hXAAQgPAAgTgDg");
	this.shape_5.setTransform(26.3,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF5000").s().p("AgmEUIgNgDQgSgCgRgHQhDgVgugyQgcgdgQgfIgHgLQgXgwgEg1IgBgVQAAhEAhg8IAFgKQAig7A5glQA7glBFgGIAVgBQBfAABKA5IAXAVQAyAvAVBAQAQAsgBAtQAAAWgDAaIgDALQgTBbhIA+IgKAHQhKA8hhgBQgSAAgUgCg");
	this.shape_6.setTransform(30,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6D00").s().p("AgoEmIgOgDQgQgCgWgHQhGgYgzg0QgagbgVgmIgGgLQgYgzgFg4IgBgXQAAhHAihCIAGgLQAkg+A9gnQA+goBKgGIAXgBQBkAABQA9IAZAVQA1AzAXBEQAQAtAAAyQAAAagFAZIgCAMQgVBhhMBBIgKAJQhRA/hmAAQgUAAgUgDg");
	this.shape_7.setTransform(29.7,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(0,0,59.4,59.4), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,0,107.5,34.9);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.stopBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B34D00").s().p("AAUA8IAAh3IAoAAIAAB3gAg7A8IAAh3IAoAAIAAB3g");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B34D00").ss(2,1,1).p("ABuAAQAAAuggAgQggAgguAAQgtAAggggQgbgbgEglQgBgHAAgHQAAgGABgHQAEgkAbgcQAgggAtAAQAuAAAgAgQAgAgAAAtg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7D19").s().p("AhMBOQgcgbgEglIgBgOIABgNQAEgkAcgbQAgghAsAAQAtAAAhAhQAgAgAAAsQAAAtggAhQghAggtAAQgsAAggggg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B34D00").s().p("AAYBJIAAiRIAxAAIAACRgAhIBJIAAiRIAwAAIAACRg");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B34D00").ss(2,1,1).p("ACHAAQAAA4gnAoQgoAng4AAQg3AAgngnQgigigFgtQgBgIAAgJQAAgHABgJQAFgtAighQAngoA3AAQA4AAAoAoQAnAnAAA3g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7D19").s().p("AheBgQgigigFgtIgBgRIABgQQAFgsAigiQAngoA3AAQA4AAAoAoQAnAnAAA3QAAA4gnAoQgoAng4AAQg3AAgngng");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF7D19").s().p("AATA8IAAh3IApAAIAAB3gAg7A8IAAh3IAoAAIAAB3g");
	this.shape_6.setTransform(0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF7D19").ss(2,1,1).p("ABuAAQAAAuggAgQggAgguAAQgtAAggggQgbgbgEglQgBgHAAgHQAAgGABgHQAEgkAbgcQAgggAtAAQAuAAAgAgQAgAgAAAtg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B34D00").s().p("AhMBOQgcgbgEglIgBgOIABgNQAEgkAcgbQAgghAsAAQAtAAAhAhQAgAgAAAsQAAAtggAhQghAggtAAQgsAAggggg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAUA8IAAh3IAoAAIAAB3gAg7A8IAAh3IAoAAIAAB3g");
	this.shape_9.setTransform(0,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(2,1,1).p("ABuAAQAAAuggAgQggAgguAAQgtAAggggQgbgbgEglQgBgHAAgHQAAgGABgHQAEgkAbgcQAgggAtAAQAuAAAgAgQAgAgAAAtg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhMBOQgcgbgEglIgBgOIABgNQAEgkAcgbQAgghAsAAQAtAAAhAhQAgAgAAAsQAAAtggAhQghAggtAAQgsAAggggg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.startBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("התחל", "42px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 139;
	this.text.parent = this;
	this.text.setTransform(0,-22);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C29F").s("#DA620A").ss(3,1,1).rr(-111.95,-31.9,223.9,63.8,14.7);
	this.shape.setTransform(0,0,0.742,0.742);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA620A").s("#F8C29F").ss(4,1,1).rr(-105.8,-30.15,211.6,60.3,14.7);
	this.shape_1.setTransform(0,0,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:0.742,scaleY:0.742}},{t:this.text,p:{y:-22,font:"42px 'Arial'",lineHeight:48.9}}]}).to({state:[{t:this.shape,p:{scaleX:0.832,scaleY:0.832}},{t:this.text,p:{y:-27.9,font:"bold 50px 'Arial'",lineHeight:57.85}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{y:-23.4,font:"bold 42px 'Arial'",lineHeight:48.9}}]},1).to({state:[{t:this.shape,p:{scaleX:0.742,scaleY:0.742}},{t:this.text,p:{y:-23.4,font:"42px 'Arial'",lineHeight:48.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-25.1,169.1,52);


(lib.replayBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B34D00").s().p("AhuhxIDdBxIjcBxg");
	this.shape.setTransform(3.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B34D00").ss(2,1,1).p("ADhAAQAABdhBBDQhDBBhdAAQhcAAhChBQg4g4gIhMQgCgNAAgPQAAgNACgOQAIhLA4g4QBChCBcAAQBdAABDBCQBBBCAABcg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7D19").s().p("AidCfQg5g4gIhLQgCgNAAgPQAAgNACgOQAIhKA5g4QBBhDBcAAQBdAABCBDQBCBBAABcQAABdhCBCQhCBChdAAQhcAAhBhCg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B34D00").s().p("Ah6h9ID1B9IjzB+g");
	this.shape_3.setTransform(3.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B34D00").ss(2,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhIhJQg/g+gJhUQgCgPAAgQQAAgOACgQQAJhTA/g+QBIhKBnAAQBoAABJBKQBJBIAABng");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7D19").s().p("AivCxQg/g+gJhUQgCgPAAgQQAAgOACgQQAJhTA/g+QBIhKBnAAQBnAABKBKQBJBIAABnQAABnhJBKQhKBJhnAAQhnAAhIhJg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF7D19").s().p("AhuhxIDdBxIjcBxg");
	this.shape_6.setTransform(3.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF7D19").ss(2,1,1).p("ADhAAQAABdhBBDQhDBBhdAAQhcAAhChBQg4g4gIhMQgCgNAAgPQAAgNACgOQAIhLA4g4QBChCBcAAQBdAABDBCQBBBCAABcg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B34D00").s().p("AidCfQg5g4gIhLQgCgNAAgPQAAgNACgOQAIhKA5g4QBBhDBcAAQBdAABCBDQBCBBAABcQAABdhCBCQhCBChdAAQhcAAhBhCg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhuhxIDdBxIjcBxg");
	this.shape_9.setTransform(3.2,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(2,1,1).p("ADhAAQAABdhBBDQhDBBhdAAQhcAAhChBQg4g4gIhMQgCgNAAgPQAAgNACgOQAIhLA4g4QBChCBcAAQBdAABDBCQBBBCAABcg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AidCfQg5g4gIhLQgCgNAAgPQAAgNACgOQAIhKA5g4QBBhDBcAAQBdAABCBDQBCBBAABcQAABdhCBCQhCBChdAAQhcAAhBhCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.5,47,47);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("המשך לשחקן הבא", "25px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 190;
	this.text.parent = this;
	this.text.setTransform(0,-10,0.717,0.717);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C29F").s("#DA620A").ss(3,1,1).rr(-111.95,-31.9,223.9,63.8,14.7);
	this.shape.setTransform(0,0,0.662,0.532);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C29F").s("#DA620A").ss(3,1,1).rr(-113.05,-31.9,226.1,63.8,14.7);
	this.shape_1.setTransform(0,0,0.818,0.658);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA620A").s("#F8C29F").ss(4,1,1).rr(-94.3,-21.65,188.6,43.3,10.4);
	this.shape_2.setTransform(0,0,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:0.717,scaleY:0.717,y:-10,font:"25px 'Arial'",lineHeight:29.95,lineWidth:190}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:0.813,scaleY:0.813,y:-13.8,font:"bold 29px 'Arial'",lineHeight:34.4,lineWidth:231}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{scaleX:0.717,scaleY:0.717,y:-10,font:"bold 25px 'Arial'",lineHeight:29.95,lineWidth:190}}]},1).to({state:[{t:this.shape},{t:this.text,p:{scaleX:0.717,scaleY:0.717,y:-10,font:"25px 'Arial'",lineHeight:29.95,lineWidth:190}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-18.4,151.1,37);


(lib.gameBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("כניסה", "42px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 139;
	this.text.parent = this;
	this.text.setTransform(-0.1,-23.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C29F").s("#DA620A").ss(3,1,1).rr(-111.95,-31.9,223.9,63.8,14.7);
	this.shape.setTransform(0,0,0.742,0.742);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA620A").s("#F8C29F").ss(4,1,1).rr(-105.8,-30.15,211.6,60.3,14.7);
	this.shape_1.setTransform(0,0,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:0.742,scaleY:0.742}},{t:this.text,p:{y:-23.4,font:"42px 'Arial'",lineHeight:48.9}}]}).to({state:[{t:this.shape,p:{scaleX:0.832,scaleY:0.832}},{t:this.text,p:{y:-27.9,font:"bold 50px 'Arial'",lineHeight:57.85}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{y:-24.1,font:"bold 42px 'Arial'",lineHeight:48.9}}]},1).to({state:[{t:this.shape,p:{scaleX:0.742,scaleY:0.742}},{t:this.text,p:{y:-23.4,font:"42px 'Arial'",lineHeight:48.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-25.4,169.1,50.9);


(lib.exitBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B34D00").ss(2,1,1).p("AhthtIDbAAIAADbIjbAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7D19").s().p("AhtBuIAAjbIDbAAIAADbgAAsBLIAfgfIgtgsIAtgsIgfgeIgsAsIgrgsIgfAfIAsArIgsAsIAeAfIAsgtg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B34D00").s().p("AAAAeIgsAtIgegfIAsgsIgsgrIAfgfIArAsIAsgsIAfAeIgtAsIAtAsIgfAfg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B34D00").ss(2,1,1).p("Ah8h8ID5AAIAAD5Ij5AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7D19").s().p("Ah8B9IAAj5ID5AAIAAD5gAAyBWIAjgkIgzgyIAzgyIgjgiIgyAzIgygzIgjAjIAzAxIgzAyIAjAjIAygzg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B34D00").s().p("AAAAiIgyAzIgigjIAygyIgygyIAigiIAyAyIAzgyIAiAiIgzAyIAzAyIgiAjg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF7D19").ss(2,1,1).p("AhyhyIDlAAIAADlIjlAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B34D00").s().p("AhyBzIAAjlIDlAAIAADlgAAvBOIAfgfIgvgvIAvguIgfgfIgvAuIguguIgfAfIAuAuIguAvIAfAfIAugvg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF7D19").s().p("AAAAfIguAvIgfgfIAugvIguguIAfgfIAuAuIAvguIAfAfIgvAuIAvAvIgfAfg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(2,1,1).p("AhthtIDbAAIAADbIjbAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhtBuIAAjbIDbAAIAADbgAAsBLIAfgfIgtgsIAtgsIgfgeIgsAsIgrgsIgfAfIAsArIgsAsIAeAfIAsgtg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAAAeIgsAtIgegfIAsgsIgsgrIAfgfIArAsIAsgsIAfAeIgtAsIAtAsIgfAfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.end_BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("סיום", "42px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 139;
	this.text.parent = this;
	this.text.setTransform(0,-23.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C29F").s("#DA620A").ss(3,1,1).rr(-111.95,-31.9,223.9,63.8,14.7);
	this.shape.setTransform(0,0,0.742,0.742);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA620A").s("#F8C29F").ss(4,1,1).rr(-105.8,-30.15,211.6,60.3,14.7);
	this.shape_1.setTransform(0,0,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:0.742,scaleY:0.742}},{t:this.text,p:{x:0,y:-23.4,font:"42px 'Arial'",lineHeight:48.9}}]}).to({state:[{t:this.shape,p:{scaleX:0.832,scaleY:0.832}},{t:this.text,p:{x:-0.1,y:-30.4,font:"bold 50px 'Arial'",lineHeight:57.85}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{x:0,y:-25.5,font:"bold 42px 'Arial'",lineHeight:48.9}}]},1).to({state:[{t:this.shape,p:{scaleX:0.742,scaleY:0.742}},{t:this.text,p:{x:-0.1,y:-23.4,font:"42px 'Arial'",lineHeight:48.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-25.4,169.1,50.9);


(lib.check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("בדוק תשובה", "17px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(0,-10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C29F").s("#DA620A").ss(3,1,1).rr(-111.95,-31.9,223.9,63.8,14.7);
	this.shape.setTransform(0,0,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C29F").s("#DA620A").ss(3,1,1).rr(-134.2,-38.25,268.4,76.5,14.7);
	this.shape_1.setTransform(0,0,0.453,0.453);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA620A").s("#F8C29F").ss(4,1,1).rr(-64.6,-18.4,129.2,36.8,10.5);
	this.shape_2.setTransform(0,0,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{y:-10,font:"17px 'Arial'",lineHeight:21,lineWidth:89}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{y:-11.7,font:"bold 21px 'Arial'",lineHeight:25.45,lineWidth:111}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{y:-10,font:"bold 17px 'Arial'",lineHeight:21,lineWidth:89}}]},1).to({state:[{t:this.shape},{t:this.text,p:{y:-10,font:"17px 'Arial'",lineHeight:21,lineWidth:89}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-15.9,104.5,31.9);


(lib.openingStage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(361.9,455.7,3.011,2.238,0,0,0,86.5,116);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(352.8,428.1,3.011,2.238,0,0,0,89.5,128.4);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(361.9,441.3,3.011,2.238,0,0,0,86.5,122.5);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(361.9,428.8,3.011,2.238,0,0,0,86.5,128.2);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.Path_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(917.8,455.7,3.011,2.238,0,0,0,86.5,116);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.Path_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(926.8,428.1,3.011,2.238,0,0,0,89.5,128.4);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.Path_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(917.8,441.3,3.011,2.238,0,0,0,86.5,122.5);
	this.instance_6.alpha = 0.102;

	this.instance_7 = new lib.Path_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(917.8,428.8,3.011,2.238,0,0,0,86.5,128.2);
	this.instance_7.alpha = 0.102;

	this.instance_8 = new lib.Path();
	this.instance_8.parent = this;
	this.instance_8.setTransform(639.9,359.9,3.011,2.238,0,0,0,647.6,160.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.2,0,0,0.2,0,24.3).s().p("AipCrQhIhGAAhlQAAhjBIhHQBGhGBjgBQBkABBHBGQBHBHAABjQAABlhHBGQhHBGhkABQhjgBhGhGg");
	this.shape.setTransform(106.2,202.8,1,1,0,0,0,0.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.2,0,0,0.2,0,24.3).s().p("AipCrQhIhHAAhkQAAhjBIhIQBHhFBiAAQBkAABIBFQBGBIAABjQAABkhGBHQhIBGhkAAQhiAAhHhGg");
	this.shape_1.setTransform(104.4,154.9,1,1,0,0,0,0.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.2,0,0,0.2,0,25.9).s().p("Ai0CrQhNhGAAhlQAAhjBNhGQBJhIBrAAQBqAABMBIQBMBGgBBjQABBlhMBGQhMBHhqAAQhrAAhJhHg");
	this.shape_2.setTransform(101.3,107.2,1,1,0,0,0,0.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.2,0,0,0.2,0,21.6).s().p("AiWCYQhAg+AAhaQAAhXBAhAQA+g/BYAAQBZAAA/A/QA/BAAABXQAABag/A+Qg/A/hZAAQhYAAg+g/g");
	this.shape_3.setTransform(155,199.5,1,1,0,0,0,0.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.2,0,0,0.2,0,21.6).s().p("AiVCYQhBg/AAhZQAAhYBBg/QA+g/BXAAQBaAAA/A/QA+A/AABYQAABZg+A/Qg/A/haAAQhXAAg+g/g");
	this.shape_4.setTransform(152.5,157.1,1,1,0,0,0,0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.2,0,0,0.2,0,23).s().p("AigCYQhEg/AAhZQAAhYBEg/QBCg/BeAAQBfAABDA/QBDA/AABYQAABZhDA/QhDA/hfAAQheAAhCg/g");
	this.shape_5.setTransform(149.8,114.7,1,1,0,0,0,0.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.1,0,0,0.1,0,19.2).s().p("AiFCGQg4g2AAhQQAAhOA4g4QA3g3BOAAQBPAAA3A3QA4A4AABOQAABQg4A2Qg3A4hPAAQhOAAg3g4g");
	this.shape_6.setTransform(201,193.1,1,1,0,0,0,0.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.1,0,0,0.1,0,19.2).s().p("AiECGQg5g3AAhPQAAhOA5g4QA2g3BOAAQBQAAA3A3QA3A4AABOQAABPg3A3Qg3A4hQAAQhOAAg2g4g");
	this.shape_7.setTransform(198.6,155.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.1,-0.1,0,0.1,-0.1,20.4).s().p("AiOCGQg8g3ABhPQgBhOA8g3QA6g4BUAAQBUAAA7A4QA7A3ABBOQgBBPg7A3Qg7A4hUAAQhUAAg6g4g");
	this.shape_8.setTransform(196.6,117.9,1,1,0,0,0,0.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.1,0,0,0.1,0,17.9).s().p("Ah8B+Qg1g0AAhKQAAhIA1g1QAzg0BJAAQBKAAA0A0QA0A1AABIQAABKg0A0Qg0A0hKAAQhJAAgzg0g");
	this.shape_9.setTransform(244.3,190.2,1,1,0,0,0,0.2,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.1,0,0,0.1,0,17.9).s().p("Ah8B+Qg1g0AAhKQAAhIA1g1QA0g0BIAAQBKAAA0A0QA0A1AABIQAABKg0A0Qg0A0hKAAQhIAAg0g0g");
	this.shape_10.setTransform(243.8,155.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0.1,0,0,0.1,0,19.1).s().p("AiFB+Qg3g0AAhKQAAhJA3g0QA3g0BOAAQBPAAA3A0QA3A0AABJQAABKg3A0Qg3A0hPAAQhOAAg3g0g");
	this.shape_11.setTransform(241.6,119.9,1,1,0,0,0,0.1,-0.1);

	this.instance_9 = new lib.light();
	this.instance_9.parent = this;
	this.instance_9.setTransform(170.5,140.7,1.099,1.099,0,0,180,155.1,98.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(182,215,226,1)",0,0,4);
	this.instance_9.filters = [new cjs.BlurFilter(25, 25, 3)];
	this.instance_9.cache(-2,-2,314,201);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.2,0,0,-0.2,0,24.3).s().p("AiqCrQhHhGAAhlQAAhjBHhHQBHhGBjgBQBkABBGBGQBIBHAABjQAABlhIBGQhGBGhkABQhjgBhHhGg");
	this.shape_12.setTransform(1174.9,202.8,1,1,0,0,0,-0.4,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.2,0,0,-0.2,0,24.3).s().p("AirCrQhGhHAAhkQAAhjBGhIQBIhFBjAAQBjAABHBFQBIBIAABjQAABkhIBHQhHBGhjAAQhjAAhIhGg");
	this.shape_13.setTransform(1176.7,154.9,1,1,0,0,0,-0.2,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.2,0,0,-0.2,0,25.9).s().p("Ai0CrQhNhGAAhlQAAhjBNhGQBKhIBqAAQBsAABJBIQBNBGAABjQAABlhNBGQhJBHhsAAQhqAAhKhHg");
	this.shape_14.setTransform(1179.8,107.2,1,1,0,0,0,-0.2,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.1,0,0,-0.1,0,21.6).s().p("AiXCYQg/g+AAhaQAAhXA/hAQA/g/BYAAQBZAAA+A/QBABAAABXQAABahAA+Qg+A/hZAAQhYAAg/g/g");
	this.shape_15.setTransform(1126.1,199.5,1,1,0,0,0,-0.2,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.1,0,0,-0.1,0,21.6).s().p("AiYCYQg+g/AAhZQAAhYA+g/QA/g/BZAAQBYAAA+A/QBBA/AABYQAABZhBA/Qg+A/hYAAQhZAAg/g/g");
	this.shape_16.setTransform(1128.6,157.1,1,1,0,0,0,-0.1,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.1,0,0,-0.1,0,23).s().p("AihCYQhDg/AAhZQAAhYBDg/QBDg/BeAAQBfAABCA/QBEA/AABYQAABZhEA/QhCA/hfAAQheAAhDg/g");
	this.shape_17.setTransform(1131.3,114.7,1,1,0,0,0,-0.2,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.1,0,0,-0.1,0,19.2).s().p("AiFCGQg4g2AAhQQAAhOA4g4QA3g3BPAAQBOAAA3A3QA4A4AABOQAABQg4A2Qg3A4hOAAQhPAAg3g4g");
	this.shape_18.setTransform(1080.1,193.1,1,1,0,0,0,-0.2,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.1,0,0,-0.1,0,19.2).s().p("AiGCGQg3g3AAhPQAAhOA3g4QA4g3BOAAQBOAAA3A3QA5A4AABOQAABPg5A3Qg3A4hOAAQhOAAg4g4g");
	this.shape_19.setTransform(1082.5,155.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],-0.1,-0.1,0,-0.1,-0.1,20.4).s().p("AiOCGQg8g3AAhPQAAhOA8g3QA7g4BTAAQBUAAA7A4QA7A3AABOQAABPg7A3Qg7A4hUAAQhTAAg7g4g");
	this.shape_20.setTransform(1084.5,117.9,1,1,0,0,0,-0.2,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0,0,0,0,0,17.9).s().p("Ah9B+Qg0g0AAhKQAAhIA0g1QA0g0BJAAQBKAAAzA0QA1A1AABIQAABKg1A0QgzA0hKAAQhJAAg0g0g");
	this.shape_21.setTransform(1036.8,190.2,1,1,0,0,0,-0.2,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0,0,0,0,0,17.9).s().p("Ah9B+Qg0g0AAhKQAAhIA0g1QA0g0BJAAQBJAAA0A0QA1A1AABIQAABKg1A0Qg0A0hJAAQhJAAg0g0g");
	this.shape_22.setTransform(1037.2,155.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.408,0.902],0,0,0,0,0,19.1).s().p("AiFB+Qg3g0AAhKQAAhJA3g0QA3g0BOAAQBPAAA3A0QA3A0AABJQAABKg3A0Qg3A0hPAAQhOAAg3g0g");
	this.shape_23.setTransform(1039.4,119.9,1,1,0,0,0,-0.1,-0.1);

	this.instance_10 = new lib.light();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1110.6,140.7,1.099,1.099,0,0,0,155.1,98.6);
	this.instance_10.shadow = new cjs.Shadow("rgba(182,215,226,1)",0,0,4);
	this.instance_10.filters = [new cjs.BlurFilter(25, 25, 3)];
	this.instance_10.cache(-2,-2,314,201);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E2030").s().p("Ao2hOIRtgfIAABOIxtCNg");
	this.shape_24.setTransform(170.8,198.5,3.011,2.238);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E2030").s().p("Ao2iUIRtDJIAABQIxtAQg");
	this.shape_25.setTransform(170.8,130.3,3.011,2.238);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E2030").s().p("Ao2gfIAAhOIRtAfIAAC8g");
	this.shape_26.setTransform(1109.2,198.5,3.011,2.238);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E2030").s().p("Ao2CFIAAhQIRtjJIAAEpg");
	this.shape_27.setTransform(1109.2,130.3,3.011,2.238);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#141520").s().p("AvsAoIAAhPIfZAAIAABPg");
	this.shape_28.setTransform(640,151.1,3.011,2.238);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#141520").s().p("AvsAoIAAhPIfZAAIAABPg");
	this.shape_29.setTransform(640,182.4,3.011,2.238);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#703751").s().p("Ag+AYQgagKAAgOQAAgNAagKQAagKAkAAQAlAAAaAKQAaAKAAANQAAAOgaAKQgaAKglAAQgkAAgagKgAg1gUQgWAJAAALQAAAMAWAJQAWAIAfAAQAgAAAWgIQAXgJAAgMQAAgLgXgJQgWgIgggBQgeABgXAIg");
	this.shape_30.setTransform(1099.9,432.1,3.011,2.238);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4B2A39").s().p("Ag+AYQgagKAAgOQAAgNAagKQAagKAkAAQAlAAAaAKQAaAKAAANQAAAOgaAKQgaAKglAAQgkAAgagKgAg1gUQgWAJAAALQAAAMAWAJQAWAIAfAAQAgAAAWgIQAXgJAAgMQAAgLgXgJQgWgIggAAQgfAAgWAIg");
	this.shape_31.setTransform(1099.9,432.8,3.011,2.238);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#485B7F").s().p("AAdAXIAAgBIgFgRIgHAQIgBAAIgBAAIgEgQIgGAOIgBAAIgBgBIgDgMIgBAMIgBABIgBAAIgGgOIgEAQIgBAAIgBAAIgHgQIgFARIgBABIgBgBIgJgQIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQABgPAAgMIADAAIAEAJIAEgJIACAAIgFAMIAHAKIgBgWIADAAIABATIAEgKIgEgJIACAAIADAGIACgGIADAAIgDAJIAEAJIAAgSIACAAIAAAQIADgKIgCgGIACAAIABACIABgCIACAAIgBAGIACAHIAAgNIACAAIAAANIACgHIgCgGIADAAIAAACIABgCIADAAIgCAGIADAKIAAgQIACAAIAAASIAEgJIgDgJIADAAIABAGIADgGIADAAIgFAJIAFAKIABgTIACAAIgBAWIAHgKIgFgMIADAAIAEAJIAEgJIADAAQAAAOABANIgBABIAAAAIgBAAIgJAQIgBABgAAZADIAFAQIAJgPIgFgMgAglAEIAJAPIAEgQIgIgLgAAMACIAAABIAEAOIAHgOIAAgBIgGgNgAgVACIAAABIAGAOIAEgOIAAgBIgEgNgAACgBIAAACIAAABIACAMIAGgMIAAgBIgFgOgAgIABIAAABIAFAMIADgMIAAgBIAAgCIgEgMgAAngBIgBgRIgDAIIAEAJgAglgBIAEgJIgEgIIAAARg");
	this.shape_32.setTransform(1100.1,468.5,3.011,2.238);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B34349").s().p("AAlATIACgGIgEgNIgIAKIAAABIADAIIgCAAIgCgEIAAAEIgDAAIAAgEIgBAEIgCAAIAEgJIgFgMIgGAKIACALIgBAAIgCgFIAAAFIgCAAIAAgEIgCAEIgDAAIAFgKIAAgBIgFgLIgDAKIAAABIADALIgCAAIgBgDIAAADIgDAAIAAgDIAAADIgDAAIADgLIAAgBIgDgKIgFALIAAABIAFAKIgDAAIgCgEIABAEIgDAAIAAgFIgBAFIgCAAIACgLIgGgKIgEAMIADAJIgCAAIgBgEIAAAEIgDAAIAAgEIgCAEIgCAAIAEgIIAAgBIgJgKIgDANIAAACIABAEIgDAAIAAgFQgBgLgDgRIAAAAIgBgDIAEAAIAAADIAFAJIAFgMIAEAAIAHALIAEgLIAGAAIAFAIIACgIIAFAAIACAIIAFgIIAGAAIAEALIAHgLIAEAAIAGAMIAFgJIAAgBIgBgCIAEAAIgBADIAAAAQgCAMgBAQIAAABIgBAEgAAcAFIAGgHIgDgMQgDALAAAIgAAVgEIAEAJIADgTgAgXAFIADgJIgHgKgAgaAFIgDgTIgEAMIAHAHgAAmgCIABAHIABgMgAgmAFIACgHIgDgFgAANAEIAFgIIgEgMgAgMAEIgBgUIgEAMIAFAIgAAGgGIAEAJIACgSgAgJADIAEgJIgGgJgAACAAIACgGIgCgIgAgDgGIACAGIAAgOg");
	this.shape_33.setTransform(1100.1,459.5,3.011,2.238);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAqBCIgCgPIgJALIAAACIABACIgGAAIACgDIgEgPIgJAMIACAGIgIAAIADgGIAAAAIgFgPIgGAMIAAACIACAHIgFAAIABgHIAAgCIgFgMIgFAPIAAAAIADAGIgIAAIACgGIgJgMIgEAPIACADIgGAAIABgCIgBgCIgIgLIgCAPIgDAAQgHghgRghIgQgbQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIACAAIAKARQANAVAIAWIADgNIABgBIABABIAGAHQgFgUgHgiIgGgfQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACABIAHAgQAHAkAGAVIAHgMIABgBIABABIAHAIIgNhUIABgCQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIAOBWIAHgMIABAAIABAAIAIAJIgBhWQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIAAAAIABABIAABWIAIgJIABAAIABAAIAHAMIANhWIACgBIABACIgFAfIgJA1IAIgIIABgBIABABIAHAMQAGgVAMggIALgcIACAAIAAACIgKAaQgMAegGAUIAHgHIABgBIABABIADANQAIgXAMgUIALgRIACAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABQgHAKgJARQgRAggHAigAAqAwIABAMIAGgVgAgrA8IACgMIgIgJQAEAJACAMgAAaAuIADANIAGgYgAgdA7IAEgNIgJgLgAAgA5IAIgKIgDgKgAggA5IgEgUIgDAKIAHAKgAAPA4IAIgLIgEgLgAgPA4IgDgWIgEALIAHALgAAJAqIAEAMIADgVgAgMA2IAEgMIgHgJgAABA0IAFgKIgFgKgAgFAqIAFAKIAAgUgAAnAeIgBACIADANIAIgLIABAAIgDgNgAgxAiIAAAAIAIALIADgNIAAgCIgIgJgAAUAdIAFAOIAKgNIgGgLgAgiAeIAKANIAFgOIgJgKgAABAaIAGAOIAKgMIgIgMgAgQAcIAJAMIAGgOIgIgKg");
	this.shape_34.setTransform(1100.2,440.8,3.011,2.238);

	this.instance_11 = new lib.Group_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1123.9,407.2,3.011,2.238,0,0,0,11.3,14.1);
	this.instance_11.alpha = 0.102;

	this.instance_12 = new lib.Group_1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1119.1,407.6,3.011,2.238,0,0,0,13,14.8);
	this.instance_12.alpha = 0.102;

	this.instance_13 = new lib.Group_2_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1120.4,406.8,3.011,2.238,0,0,0,13,14.8);
	this.instance_13.alpha = 0.102;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCC39E").s().p("AiYBNIAAj6IExAXIAAFEgAiPBGIEfBZIAAkpIkfgZg");
	this.shape_35.setTransform(1120,407.4,3.011,2.238);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCC39E").s().p("AhBAoIAAh1ICDAZIAACCgAg5AiIB0AhIAAhwIh0gWg");
	this.shape_36.setTransform(1120.1,414.8,3.011,2.238);

	this.instance_14 = new lib.Group_5_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1120.7,406.9,3.011,2.238,0,0,0,14.8,16.9);
	this.instance_14.alpha = 0.5;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D5787D").s().p("AiRBLIAAjwIEjAYIAAEzgAiIBEIERBUIAAkZIkRgZg");
	this.shape_37.setTransform(1120.1,407,3.011,2.238);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C29275").s().p("ACNCuIklhhIAAj6IExAXIAAFEgAh7A8ID3BMIAAj/Ij3gVg");
	this.shape_38.setTransform(1123.7,407.4,3.011,2.238);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FBBA94").s().p("AgbHlIgSvJIAnAWIAzOzg");
	this.shape_39.setTransform(1215.6,551,3.011,2.238);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FBBA94").s().p("Ah6hBIAAgmID1CCIAABNg");
	this.shape_40.setTransform(1164.7,436.5,3.011,2.238);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C29275").s().p("ABvBoIjjipIgXAAIAAgmIAjAAIDXCCIAdAAIAABNg");
	this.shape_41.setTransform(1159.2,436.5,3.011,2.238);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C29275").s().p("AgfHVIATupIAsAAIgFAxIAEN4g");
	this.shape_42.setTransform(1197.7,554.6,3.011,2.238);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#703751").s().p("Ag+AYQgagKAAgOQAAgNAagKQAagKAkAAQAlAAAaAKQAaAKAAANQAAAOgaAKQgaAKglAAQgkAAgagKgAg1gUQgXAJAAALQAAAMAXAJQAWAIAfAAQAgAAAWgIQAWgJAAgMQAAgLgWgJQgXgIgfgBQgfABgWAIg");
	this.shape_43.setTransform(176.4,432.1,3.011,2.238);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4B2A39").s().p("Ag+AYQgagKAAgOQAAgNAagKQAagKAkAAQAlAAAaAKQAaAKAAANQAAAOgaAKQgaAKglAAQgkAAgagKgAg1gUQgXAJAAALQAAAMAXAJQAWAIAfAAQAgAAAWgIQAWgJAAgMQAAgLgWgJQgWgIggAAQgfAAgWAIg");
	this.shape_44.setTransform(176.4,432.8,3.011,2.238);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#485B7F").s().p("AAcAWIgEgRIgHAQIgBAAIgBAAIgFgQIgFAOIgBAAIgBgBIgDgMIgCAMIgBABIgBAAIgFgOIgFAQIgBAAIgBAAIgGgQIgBAAIgEARIgBABIgBgBIgKgQIgBAAIgBgBQACgPgBgMIAEAAIAEAJIAEgJIACAAIgFAMIAHAKIgBgWIADAAIABATIAEgKIgFgJIADAAIADAGIACgGIACAAIgCAJIADAJIAAgSIADAAIAAAQIADgKIgDgGIADAAIABACIABgCIACAAIgCAGIACAHIAAgNIADAAIACAAIABACIABgCIADAAIgDAGIADAKIAAgQIADAAIAAASIADgJIgCgJIACAAIACAGIADgGIADAAIgFAJIAEAKIACgTIACAAIgBAWIAHgKIgFgMIADAAIADAJIAEgJIAEAAQgBAMACAPIgBABIgBAAIgKAQIgBABgAAZADIAFAQIAIgPIgFgMgAglAEIAIAPIAFgQIgIgLgAAMACIAAABIAEAOIAGgOIAAgBIgFgNgAgVACIAAABIAGAOIAEgOIAAgBIgFgNgAACgBIAAACIgBABIADAMIAFgMIAAgBIgEgOgAgIABIAAABIAFAMIADgMIgBgBIAAgCIgDgMgAAngBIgBgRIgDAIIAEAJgAgmgBIAEgJIgDgIgAACgJIACgHIgCgGg");
	this.shape_45.setTransform(176,468.5,3.011,2.238);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B34349").s().p("AAlATIABgEIAAgCIgDgNIgIAKIAAABIADAIIgCAAIgCgEIAAAEIgDAAIABgEIgCAEIgDAAIAFgJIgFgMIgGAKIADALIgDAAIgBgFIAAAFIgDAAIAAgEIgBAEIgCAAIAEgKIAAgBIgFgLIgDAKIAAABIADALIgDAAIAAgDIAAADIgDAAIAAgDIAAADIgDAAIADgLIABAAIAAgBIgEgKIgFALIAAABIAFAKIgDAAIgBgEIAAAEIgDAAIAAgFIgBAFIgDAAIADgLIgGgKIgFAMIAFAJIgDAAIgCgEIABAEIgDAAIAAgEIgBAEIgDAAIADgIIAAgBIgIgKIgDANIAAACIABAEIgDAAIgBgEIAAgBQgBgQgCgMIAAAAIgBgDIAEAAIgBACIAAABIAGAJIAFgMIAEAAIAHALIAEgLIAGAAIAFAIIACgIIAFAAIACAIIAFgIIAGAAIAEALIAHgLIAEAAIAFAMIAGgJIAAgDIADAAIgBADIAAAAQgCAMgBAQIAAAFgAAbAFIAIgHIgFgMgAAVgEIAEAJIADgTgAgYAFIAEgJIgHgKgAgaAFIgDgTIgFAMIAIAHgAAlgCIACAHIACgMgAgmAFIACgHIgDgFgAAMAEIAGgIIgEgMgAgLAEIgCgUIgEAMIAGAIgAAGgGIAEAJQAAgKACgIgAgJADIAEgJIgGgJgAACAAIACgGIgDgIgAgDgGIADAGIAAgOg");
	this.shape_46.setTransform(176,459.5,3.011,2.238);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAqBCIgCgPIgJALIAAACIABACIgGAAIACgDIgEgPIgJAMIACAGIgIAAIADgGIAAAAIgFgPIgGAMIAAACIACAHIgFAAIACgHIAAgCIgGgMIgFAPIAAAAIADAGIgIAAIACgGIgJgMIgEAPIACADIgGAAIABgCIAAgCIgJgLIgCAPIgDAAQgHgigRggIgQgbQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIACAAIALARQAMAUAIAXIADgNIABgBIABABIAHAHQgGgUgMgeIgKgaIAAgCIACAAIALAcQAMAfAGAWIAHgMIABgBIABABIAHAIIgNhUIABgCIACABIANBWIAHgMIABAAIABAAIAIAJIAAhWIAAgBIAAAAIACABIgBBWIAIgJIABAAIABAAIAHAMIAJg3IAFgfQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABACIgNBUIAHgIIABgBIABABIAHAMIANg5IAHggIACgBIAAACIgGAfQgHAigGAUIAHgHIABgBIABABIADANQAIgWANgVIAKgRIACAAQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAABIgQAbQgRAggHAigAAqAwIABAMIAGgVgAgqA8IABgMIgHgJgAAaAuIAEANIAFgYgAgcA7IADgNIgJgLgAAhA5IAHgKIgDgKIgEAUgAgfA5IgFgUIgDAKIAIAKgAAPA4IAIgLIgEgLgAgOA4IgEgWIgEALIAIALgAAJAqIAEAMIADgVgAgMA2IAEgMIgHgJIADAVgAABA0IAFgKIgFgKgAgFAqIAFAKIAAgUgAAnAeIAAACIADANIAIgLIAAAAIgDgNgAgxAiIAAAAIAIALIAEgNIgBgCIgIgJgAAUAdIAFAOIAKgNIgGgLgAgiAeIAKANIAFgOIgJgKgAACAaIAGAOIAJgMIgHgMgAgQAcIAJAMIAHgOIgJgKg");
	this.shape_47.setTransform(176,440.8,3.011,2.238);

	this.instance_15 = new lib.Group();
	this.instance_15.parent = this;
	this.instance_15.setTransform(152.3,407.2,3.011,2.238,0,0,0,11.2,14.1);
	this.instance_15.alpha = 0.102;

	this.instance_16 = new lib.Group_1_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(157.3,407.6,3.011,2.238,0,0,0,13,14.8);
	this.instance_16.alpha = 0.102;

	this.instance_17 = new lib.Group_2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(155.7,406.8,3.011,2.238,0,0,0,13,14.8);
	this.instance_17.alpha = 0.102;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCC39E").s().p("AiYiWIExgXIAAD6IkxBhgAiPiKIAAEpIEfhZIAAjpg");
	this.shape_48.setTransform(156,407.4,3.011,2.238);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCC39E").s().p("AhBg0ICDgZIAAB1IiDAmgAg6gtIAABwIB0ghIAAhlg");
	this.shape_49.setTransform(156.1,414.8,3.011,2.238);

	this.instance_18 = new lib.Group_5();
	this.instance_18.parent = this;
	this.instance_18.setTransform(155.2,406.9,3.011,2.238,0,0,0,14.8,16.9);
	this.instance_18.alpha = 0.5;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D5787D").s().p("AiRiNIEjgYIAADwIkjBbgAiIiBIAAEZIERhUIAAjeg");
	this.shape_50.setTransform(156.1,407,3.011,2.238);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C29275").s().p("AiYCuIAAlEIExgXIAAD6IklBhgAh7h3IAAD/ID2hMIAAjIg");
	this.shape_51.setTransform(152.6,407.4,3.011,2.238);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBBA94").s().p("AgtHlIA0uzIAngWIgRPJg");
	this.shape_52.setTransform(60.6,551,3.011,2.238);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FBBA94").s().p("Ah6AbID1iCIAAAmIj1Cpg");
	this.shape_53.setTransform(111.6,436.5,3.011,2.238);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C29275").s().p("AiLBoIAAhNIAdAAIDXiCIAjAAIAAAmIgXAAIjjCpg");
	this.shape_54.setTransform(117,436.5,3.011,2.238);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C29275").s().p("AgeHVIAEt4IgFgxIAtAAIATOpg");
	this.shape_55.setTransform(78.4,554.6,3.011,2.238);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXADIAngHIAIACQgUACgQAFg");
	this.shape_56.setTransform(312.9,651.4,3.011,2.238);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgRAFIATgJIAQAAIgSAJg");
	this.shape_57.setTransform(277.3,659.4,3.011,2.238);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWACIAqgFIADADIgoAFg");
	this.shape_58.setTransform(337.2,648.4,3.011,2.238);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgVgBIASgCQAHACASACIgPADQgQgCgMgDg");
	this.shape_59.setTransform(285,670.5,3.011,2.238);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHgDIATgBQgEAEAAAEIgTABQAAgEAEgEg");
	this.shape_60.setTransform(270.4,663.7,3.011,2.238);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgVAEIAegIIANABIgcAIg");
	this.shape_61.setTransform(292,655.1,3.011,2.238);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPgCIASgCQAFAEAHACIgRADQgKgEgDgDg");
	this.shape_62.setTransform(272.9,667.4,3.011,2.238);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgVABIAagEIARACQgMADgPACg");
	this.shape_63.setTransform(994.2,670.5,3.011,2.238);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWAAIADgDIAqAFIgGADg");
	this.shape_64.setTransform(942,648.4,3.011,2.238);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAAAFIgRgJIAQAAQAHADADABIAJAFg");
	this.shape_65.setTransform(1002,659.4,3.011,2.238);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgHAEQAAgEgEgEIASABQAEADABAFg");
	this.shape_66.setTransform(1008.7,663.7,3.011,2.238);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVgDIAMgBIAfAIIgPABg");
	this.shape_67.setTransform(987.1,655.1,3.011,2.238);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgPACQAJgCADgEIATACQgEADgJAEg");
	this.shape_68.setTransform(1006.2,667.4,3.011,2.238);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgWgCIAHgCIAmAHIgKACQgQgFgTgCg");
	this.shape_69.setTransform(966.3,651.4,3.011,2.238);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("EghNADuIAAgEMAhBAAAIACh7Qh/gDicgXQjugiAigzQArhBCsgaQBSgMDBgHIACh7IyGAAIjKBDIFWAAQClAGBLAPQC1AmgnBgQgCAGgGAFQgGAGgMAGQhUA3iOAcQBhgaBSgoQh6AginACIgBAAIhQAAIgNAIIgUAAIAOgIIh1AAIgPAIIgUAAIAPgIIh1AAIgQAIIgUAAIARgIIhsAAIgSAIIgmAAIASgIIobAAIhAAVIAAgGIPDk7MAkUAAAIPEE7IAAAHIhCgWIocAAIASAIIgmAAIgSgIIhsAAIARAIIgUAAIgQgIIh1AAIAPAIIgUAAIgOgIIh1AAIANAIIgUAAIgNgIIhQAAIAAAAQiogCh6ggQBUAoBfAaQiOgchUg3QgNgHgFgFQgFgEgCgHQgohgC1gmQBMgPClgGIFXAAIjKhDIyGAAIACB7QDBAHBRAMQCtAaArBBQAiAzjuAiQicAXh/ADIACB7MAhCAAAIAAAEgAAKBrQB9gDCZgYQDUghgUgvQgYg2iugcQhugSilgGgAngAAQgUAuDUAiQCaAYB8ADIADjVQmyAPgnBbgAf/A7Illh1Ir6AAIALABIAAADIgogCIgBgCIgnAAIAAAAIgVAAICxB1IBIAAIgEgBIAmgDIAOADIgLABIObAAgAw9A6IgEABIBIAAICxh1IgVAAIABAAIgnAAIgBACIgpACIAAgDIALgBIr6AAIllB1IObAAIgKgBIANgDgAPkA7Iith1QhPACgtANQguANAEAUIALAKIAOAMQBAAcBaAKQA+AIBiABgAvmA7QBigBA+gIQBagKBAgcIAPgMIAKgKQAEgUgtgNQgugNhOgCgAMoiUQiXAcgKBcQARgPAsgJQAtgJBAgBIBBAAIgLgHIAPAAIAMAHIBgAAIgNgHIAPAAIANAHIBgAAIgPgHIAQAAIAOAHIBYAAIgQgHIAfAAIAQAHIG5AAIkvhkIlbAAQizAGgrAIgAqJgcQgJhciXgcQgsgIizgGIlZAAIkvBkIG3AAIAQgHIAfAAIgQAHIBYAAIAPgHIAPAAIgOAHIBfAAIANgHIAQAAIgNAHIBfAAIAMgHIAQAAIgMAHIBCAAQBAABAtAJQArAJARAPIAAAAg");
	this.shape_70.setTransform(640,659.4,3.011,2.238);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag6ACQhzAAhzgDIJBAAIAAADg");
	this.shape_71.setTransform(1193,696.3,3.011,2.238);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgDAUQi4gPiMgmQAlAICHATQDTAeERAKQjIgCiEgMg");
	this.shape_72.setTransform(1007.1,688.3,3.011,2.238);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ACcgGQCHgTAmgIQiMAmi5APQiEAMjHACQEPgKDUgeg");
	this.shape_73.setTransform(272,688.3,3.011,2.238);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AkfACIAAgDII/AAQhzADh0AAg");
	this.shape_74.setTransform(86.6,696.3,3.011,2.238);

	this.instance_19 = new lib.Group_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(640.1,659.3,3.011,2.238,0,0,0,212.6,23.6);
	this.instance_19.alpha = 0.301;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C0784E").s().p("AjjAJIAAgRIHHAAIglARg");
	this.shape_75.setTransform(68.6,710,3.011,2.238);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B77A4A").s().p("An/AJIAlgRIPbAAIgQARg");
	this.shape_76.setTransform(278,710,3.011,2.238);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C4834F").s().p("AlHAJIAAgRIKPAAIggARg");
	this.shape_77.setTransform(98.7,713.9,3.011,2.238);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C0784E").s().p("AoHAJIAfgRIPxAAIgLARg");
	this.shape_78.setTransform(340.7,713.9,3.011,2.238);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CB9059").s().p("AnuAJIAOgRIPJAAIAHARg");
	this.shape_79.setTransform(578.8,710,3.011,2.238);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CB9059").s().p("AmvAJIAAgRINfAAIgbARg");
	this.shape_80.setTransform(130,718,3.011,2.238);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C4834F").s().p("AoQAJIAbgRIQFAAIgEARg");
	this.shape_81.setTransform(409.8,718,3.011,2.238);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C0784E").s().p("An1AJIgGgRIPbAAIAcARg");
	this.shape_82.setTransform(879.7,710,3.011,2.238);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C4834F").s().p("AmQAJIgcgRINZAAIAAARg");
	this.shape_83.setTransform(1150.8,710,3.011,2.238);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C4834F").s().p("An8AJIgMgRIPwAAIAhARg");
	this.shape_84.setTransform(956,713.9,3.011,2.238);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C0784E").s().p("AoCAJIAKgRIPwAAIALARg");
	this.shape_85.setTransform(646.2,713.9,3.011,2.238);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C0784E").s().p("AkKAJIgigRIJZAAIAAARg");
	this.shape_86.setTransform(1189.5,713.9,3.011,2.238);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CB9059").s().p("AoFAJIgQgRIQFAAIAmARg");
	this.shape_87.setTransform(1035.6,718,3.011,2.238);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B77A4A").s().p("AoNAJIAFgRIQFAAIARARg");
	this.shape_88.setTransform(725.2,718,3.011,2.238);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B77A4A").s().p("Ah5AJIgmgRIE/AAIAAARg");
	this.shape_89.setTransform(1231.8,718,3.011,2.238);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C0784E").s().p("AjQAJIglgRIHrAAIAAARg");
	this.shape_90.setTransform(1205.9,706.1,3.011,2.238);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B77A4A").s().p("AnmAJIgPgRIPGAAIAlARg");
	this.shape_91.setTransform(994.2,706.1,3.011,2.238);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C4834F").s().p("AlVAJIgfgRILqAAIAAARg");
	this.shape_92.setTransform(1167.5,702.1,3.011,2.238);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C0784E").s().p("AneAJIgKgRIOxAAIAgARg");
	this.shape_93.setTransform(920.9,702.1,3.011,2.238);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C4834F").s().p("AnlAJIAHgRIO0AAIAPARg");
	this.shape_94.setTransform(699.5,706.1,3.011,2.238);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CB9059").s().p("AnLAJIgbgRIOcAAIAxARg");
	this.shape_95.setTransform(1127.3,698,3.011,2.238);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B77A4A").s().p("AAIAJIgvgRIBPAAIAAARg");
	this.shape_96.setTransform(1267.9,698,3.011,2.238);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B77A4A").s().p("AnWAJIgFgRIOcAAIAbARg");
	this.shape_97.setTransform(846.7,698,3.011,2.238);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C0784E").s().p("AnxAJIAcgRIPHAAIgHARg");
	this.shape_98.setTransform(404.9,706.1,3.011,2.238);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C4834F").s().p("Am5AJIAAgRINyAAIgbARg");
	this.shape_99.setTransform(132.9,706.1,3.011,2.238);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C4834F").s().p("AnpAJIAhgRIOyAAIgLARg");
	this.shape_100.setTransform(342.7,702.1,3.011,2.238);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C0784E").s().p("AnjAJIALgRIOyAAIAKARg");
	this.shape_101.setTransform(633.8,702.1,3.011,2.238);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C0784E").s().p("AlaAJIAAgRIK0AAIghARg");
	this.shape_102.setTransform(104.3,702.1,3.011,2.238);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CB9059").s().p("AngAJIAmgRIOcAAIgRARg");
	this.shape_103.setTransform(283.9,698,3.011,2.238);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B77A4A").s().p("AnYAJIAQgRIOcAAIAGARg");
	this.shape_104.setTransform(563,698,3.011,2.238);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B77A4A").s().p("Aj7AJIAAgRIH3AAIgnARg");
	this.shape_105.setTransform(75.8,698,3.011,2.238);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C0784E").s().p("AlPAJIAAgRIKfAAIgkARg");
	this.shape_106.setTransform(101.2,685.7,3.011,2.238);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B77A4A").s().p("AnAAJIAlgRINcAAIgQARg");
	this.shape_107.setTransform(324.3,685.7,3.011,2.238);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C4834F").s().p("AmkAJIAAgRINJAAIgfARg");
	this.shape_108.setTransform(126.8,689.6,3.011,2.238);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C0784E").s().p("AnHAJIAggRINvAAIgKARg");
	this.shape_109.setTransform(378.1,689.6,3.011,2.238);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CB9059").s().p("AmwAJIAPgRINLAAIAHARg");
	this.shape_110.setTransform(586.6,685.7,3.011,2.238);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CB9059").s().p("AnaAJIAwgRIOFAAIgaARg");
	this.shape_111.setTransform(164.2,693.7,3.011,2.238);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B77A4A").s().p("AhAAJIAAgRICBAAIgwARg");
	this.shape_112.setTransform(19.5,693.7,3.011,2.238);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C4834F").s().p("AnPAJIAagRIOFAAIgEARg");
	this.shape_113.setTransform(437.9,693.7,3.011,2.238);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C0784E").s().p("Am1AJIgGgRINbAAIAcARg");
	this.shape_114.setTransform(849.1,685.7,3.011,2.238);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C4834F").s().p("AmqAJIgcgRINbAAIAyARg");
	this.shape_115.setTransform(1109.1,685.7,3.011,2.238);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C4834F").s().p("Am8AJIgMgRINwAAIAhARg");
	this.shape_116.setTransform(916.4,689.6,3.011,2.238);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C0784E").s().p("AnCAJIAKgRINwAAIALARg");
	this.shape_117.setTransform(645.3,689.6,3.011,2.238);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C0784E").s().p("AlsAJIgggRIMaAAIAAARg");
	this.shape_118.setTransform(1160.3,689.6,3.011,2.238);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B77A4A").s().p("AgcAJIgygRICdAAIAAARg");
	this.shape_119.setTransform(1256.3,685.7,3.011,2.238);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CB9059").s().p("AnFAJIgQgRIOFAAIAmARg");
	this.shape_120.setTransform(987,693.7,3.011,2.238);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B77A4A").s().p("AnNAJIAFgRIOGAAIAQARg");
	this.shape_121.setTransform(714.7,693.7,3.011,2.238);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B77A4A").s().p("AjpAJIgngRIIhAAIAAARg");
	this.shape_122.setTransform(1198,693.7,3.011,2.238);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C0784E").s().p("Ak9AJIglgRILFAAIAAARg");
	this.shape_123.setTransform(1173.3,681.8,3.011,2.238);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B77A4A").s().p("AmmAJIgPgRINGAAIAlARg");
	this.shape_124.setTransform(947.9,681.8,3.011,2.238);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C4834F").s().p("AmTAJIgggRIMyAAIA1ARg");
	this.shape_125.setTransform(1130.1,677.9,3.011,2.238);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C0784E").s().p("AgBAJIg2gRIBvAAIAAARg");
	this.shape_126.setTransform(1263.1,677.9,3.011,2.238);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C0784E").s().p("AmeAJIgKgRIMxAAIAgARg");
	this.shape_127.setTransform(883.4,677.9,3.011,2.238);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C4834F").s().p("AmlAJIAGgRIM2AAIAQARg");
	this.shape_128.setTransform(691.9,681.8,3.011,2.238);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CB9059").s().p("AmLAJIgbgRIMcAAIAxARg");
	this.shape_129.setTransform(1060.7,673.7,3.011,2.238);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B77A4A").s().p("AiFAJIgwgRIFrAAIAAARg");
	this.shape_130.setTransform(1225.2,673.7,3.011,2.238);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B77A4A").s().p("AmWAJIgFgRIMcAAIAbARg");
	this.shape_131.setTransform(818.5,673.7,3.011,2.238);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C0784E").s().p("AmxAJIAcgRINHAAIgHARg");
	this.shape_132.setTransform(435.4,681.8,3.011,2.238);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C4834F").s().p("Am8AJIAzgRINGAAIgcARg");
	this.shape_133.setTransform(181.5,681.8,3.011,2.238);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C4834F").s().p("AmpAJIAhgRIMyAAIgMARg");
	this.shape_134.setTransform(382.3,677.9,3.011,2.238);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C0784E").s().p("AmjAJIALgRIMyAAIAKARg");
	this.shape_135.setTransform(634.6,677.9,3.011,2.238);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C0784E").s().p("AmzAJIA2gRIMyAAIghARg");
	this.shape_136.setTransform(135.6,677.9,3.011,2.238);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B77A4A").s().p("AhlAJIAAgRIDLAAIgyARg");
	this.shape_137.setTransform(30.6,681.8,3.011,2.238);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CB9059").s().p("AmgAJIAmgRIMcAAIgRARg");
	this.shape_138.setTransform(332.4,673.7,3.011,2.238);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B77A4A").s().p("AmYAJIARgRIMbAAIAFARg");
	this.shape_139.setTransform(573.3,673.7,3.011,2.238);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B77A4A").s().p("AlrAJIAAgRILXAAIgmARg");
	this.shape_140.setTransform(109.6,673.7,3.011,2.238);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C0784E").s().p("AmKAJIA7gRILaAAIglARg");
	this.shape_141.setTransform(148.8,661.4,3.011,2.238);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B77A4A").s().p("Al/AJIAkgRILbAAIgPARg");
	this.shape_142.setTransform(370.5,661.4,3.011,2.238);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C4834F").s().p("AmSAJIA2gRILvAAIggARg");
	this.shape_143.setTransform(188.6,665.3,3.011,2.238);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C0784E").s().p("AmHAJIAggRILvAAIgKARg");
	this.shape_144.setTransform(415.5,665.3,3.011,2.238);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CB9059").s().p("AlwAJIAOgRILNAAIAHARg");
	this.shape_145.setTransform(594.3,661.4,3.011,2.238);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CB9059").s().p("AmaAJIAwgRIMFAAIgaARg");
	this.shape_146.setTransform(230.8,669.4,3.011,2.238);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B77A4A").s().p("AjOAJIAAgRIGdAAIgwARg");
	this.shape_147.setTransform(62.2,669.4,3.011,2.238);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C4834F").s().p("AmQAJIAbgRIMFAAIgFARg");
	this.shape_148.setTransform(466.1,669.4,3.011,2.238);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C0784E").s().p("Al1AJIgGgRILbAAIAcARg");
	this.shape_149.setTransform(818.5,661.4,3.011,2.238);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C4834F").s().p("AlqAJIgcgRILbAAIAyARg");
	this.shape_150.setTransform(1040.2,661.4,3.011,2.238);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C4834F").s().p("Al8AJIgMgRILwAAIAhARg");
	this.shape_151.setTransform(876.8,665.3,3.011,2.238);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C0784E").s().p("AmCAJIALgRILuAAIAMARg");
	this.shape_152.setTransform(644.6,665.3,3.011,2.238);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C0784E").s().p("AlxAJIgigRILwAAIA3ARg");
	this.shape_153.setTransform(1103.7,665.3,3.011,2.238);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#B77A4A").s().p("AiVAJIgxgRIFRAAIA8ARg");
	this.shape_154.setTransform(1204.2,661.4,3.011,2.238);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CB9059").s().p("AmFAJIgQgRIMFAAIAmARg");
	this.shape_155.setTransform(938.5,669.4,3.011,2.238);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#B77A4A").s().p("AmNAJIAFgRIMFAAIARARg");
	this.shape_156.setTransform(704.3,669.4,3.011,2.238);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B77A4A").s().p("AlaAJIgmgRIMBAAIAAARg");
	this.shape_157.setTransform(1164.2,669.4,3.011,2.238);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C0784E").s().p("AlbAJIglgRILGAAIA7ARg");
	this.shape_158.setTransform(1117.2,657.5,3.011,2.238);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B77A4A").s().p("AlmAJIgPgRILGAAIAlARg");
	this.shape_159.setTransform(901.7,657.5,3.011,2.238);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C4834F").s().p("AlTAJIgggRIKyAAIA1ARg");
	this.shape_160.setTransform(1054.5,653.6,3.011,2.238);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C0784E").s().p("AhMAJIg2gRIDJAAIA8ARg");
	this.shape_161.setTransform(1190.6,653.6,3.011,2.238);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C0784E").s().p("AleAJIgKgRIKxAAIAgARg");
	this.shape_162.setTransform(846,653.6,3.011,2.238);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C4834F").s().p("AlmAJIAGgRIK4AAIAQARg");
	this.shape_163.setTransform(684,657.5,3.011,2.238);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CB9059").s().p("AlLAJIgagRIKbAAIAwARg");
	this.shape_164.setTransform(994.1,649.4,3.011,2.238);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B77A4A").s().p("AiiAJIgwgRIFpAAIA8ARg");
	this.shape_165.setTransform(1148.5,649.4,3.011,2.238);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#B77A4A").s().p("AlWAJIgFgRIKcAAIAaARg");
	this.shape_166.setTransform(790.5,649.4,3.011,2.238);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#C0784E").s().p("AlxAJIAdgRILGAAIgHARg");
	this.shape_167.setTransform(466.1,657.5,3.011,2.238);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C4834F").s().p("Al7AJIAxgRILGAAIgcARg");
	this.shape_168.setTransform(250.5,657.5,3.011,2.238);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C4834F").s().p("AlpAJIAhgRIKyAAIgMARg");
	this.shape_169.setTransform(421.9,653.6,3.011,2.238);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C0784E").s().p("AljAJIALgRIKyAAIAKARg");
	this.shape_170.setTransform(635.4,653.6,3.011,2.238);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C0784E").s().p("Al0AJIA3gRIKxAAIghARg");
	this.shape_171.setTransform(213.3,653.6,3.011,2.238);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B77A4A").s().p("AjBAJIA8gRIFHAAIgxARg");
	this.shape_172.setTransform(91.1,657.5,3.011,2.238);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CB9059").s().p("AlhAJIAngRIKcAAIgRARg");
	this.shape_173.setTransform(381,649.4,3.011,2.238);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#B77A4A").s().p("AlYAJIAQgRIKcAAIAFARg");
	this.shape_174.setTransform(583.8,649.4,3.011,2.238);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B77A4A").s().p("AlrAJIA8gRIKbAAIgmARg");
	this.shape_175.setTransform(177.3,649.4,3.011,2.238);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C0784E").s().p("AlKAJIA6gRIJbAAIglARg");
	this.shape_176.setTransform(233.3,637,3.011,2.238);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B77A4A").s().p("Ak/AJIAlgRIJaAAIgPARg");
	this.shape_177.setTransform(416.8,637,3.011,2.238);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C4834F").s().p("AlRAJIA1gRIJuAAIgfARg");
	this.shape_178.setTransform(264.2,640.9,3.011,2.238);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C0784E").s().p("AlHAJIAggRIJvAAIgLARg");
	this.shape_179.setTransform(453,640.9,3.011,2.238);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CB9059").s().p("AkyAJIAPgRIJPAAIAHARg");
	this.shape_180.setTransform(602.1,637,3.011,2.238);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CB9059").s().p("AlaAJIAxgRIKEAAIgbARg");
	this.shape_181.setTransform(297.3,645.1,3.011,2.238);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#B77A4A").s().p("AjMAJIA8gRIFdAAIgwARg");
	this.shape_182.setTransform(148.2,645.1,3.011,2.238);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C4834F").s().p("AlPAJIAbgRIKEAAIgFARg");
	this.shape_183.setTransform(494.1,645.1,3.011,2.238);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#C0784E").s().p("Ak0AJIgHgRIJaAAIAcARg");
	this.shape_184.setTransform(787.9,637,3.011,2.238);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C4834F").s().p("AkpAJIgcgRIJaAAIAxARg");
	this.shape_185.setTransform(971.2,637,3.011,2.238);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#C4834F").s().p("Ak8AJIgMgRIJvAAIAhARg");
	this.shape_186.setTransform(837.3,640.9,3.011,2.238);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#C0784E").s().p("AlCAJIALgRIJvAAIALARg");
	this.shape_187.setTransform(643.8,640.9,3.011,2.238);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#C0784E").s().p("AkxAJIghgRIJvAAIA2ARg");
	this.shape_188.setTransform(1026,640.9,3.011,2.238);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B77A4A").s().p("Ah3AJIgygRIEXAAIA8ARg");
	this.shape_189.setTransform(1106.8,637,3.011,2.238);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CB9059").s().p("AlEAJIgRgRIKFAAIAmARg");
	this.shape_190.setTransform(890,645.1,3.011,2.238);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#B77A4A").s().p("AlMAJIAEgRIKFAAIARARg");
	this.shape_191.setTransform(694,645.1,3.011,2.238);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B77A4A").s().p("Ak6AJIgmgRIKFAAIA8ARg");
	this.shape_192.setTransform(1086.8,645.1,3.011,2.238);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C0784E").s().p("AkbAJIglgRIJGAAIA6ARg");
	this.shape_193.setTransform(1032.7,633.2,3.011,2.238);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#B77A4A").s().p("AkmAJIgPgRIJGAAIAlARg");
	this.shape_194.setTransform(855.4,633.2,3.011,2.238);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C4834F").s().p("AkTAJIgggRIIxAAIA2ARg");
	this.shape_195.setTransform(979,629.3,3.011,2.238);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C0784E").s().p("Ag5AJIg2gRICjAAIA8ARg");
	this.shape_196.setTransform(1089.9,629.3,3.011,2.238);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C0784E").s().p("AkeAJIgKgRIIxAAIAgARg");
	this.shape_197.setTransform(808.7,629.3,3.011,2.238);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#C4834F").s().p("AkoAJIAHgRII7AAIAPARg");
	this.shape_198.setTransform(676.3,633.2,3.011,2.238);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CB9059").s().p("AkLAJIgagRIIbAAIAwARg");
	this.shape_199.setTransform(927.5,625.2,3.011,2.238);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#B77A4A").s().p("Ah/AJIgwgRIEjAAIA8ARg");
	this.shape_200.setTransform(1052.6,625.2,3.011,2.238);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#B77A4A").s().p("AkVAJIgGgRIIcAAIAaARg");
	this.shape_201.setTransform(762.3,625.2,3.011,2.238);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#C0784E").s().p("AkxAJIAcgRIJGAAIgGARg");
	this.shape_202.setTransform(496.6,633.2,3.011,2.238);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C4834F").s().p("Ak7AJIAygRIJFAAIgcARg");
	this.shape_203.setTransform(319.4,633.2,3.011,2.238);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#C4834F").s().p("AkpAJIAigRIIwAAIgLARg");
	this.shape_204.setTransform(461.4,629.3,3.011,2.238);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C0784E").s().p("AkjAJIALgRIIyAAIAKARg");
	this.shape_205.setTransform(636.2,629.3,3.011,2.238);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C0784E").s().p("AkzAJIA2gRIIxAAIghARg");
	this.shape_206.setTransform(291.1,629.3,3.011,2.238);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#B77A4A").s().p("AikAJIA8gRIENAAIgyARg");
	this.shape_207.setTransform(188.4,633.2,3.011,2.238);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#CB9059").s().p("AkgAJIAmgRIIbAAIgQARg");
	this.shape_208.setTransform(429.5,625.2,3.011,2.238);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#B77A4A").s().p("AkYAJIARgRIIbAAIAFARg");
	this.shape_209.setTransform(594.2,625.2,3.011,2.238);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B77A4A").s().p("AkrAJIA8gRIIbAAIgmARg");
	this.shape_210.setTransform(264.3,625.2,3.011,2.238);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C0784E").s().p("AkKAJIA7gRIHaAAIglARg");
	this.shape_211.setTransform(317.9,612.7,3.011,2.238);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B77A4A").s().p("Aj/AJIAlgRIHaAAIgPARg");
	this.shape_212.setTransform(463,612.7,3.011,2.238);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C4834F").s().p("AkRAJIA1gRIHvAAIggARg");
	this.shape_213.setTransform(339.8,616.7,3.011,2.238);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#C0784E").s().p("AkHAJIAggRIHvAAIgKARg");
	this.shape_214.setTransform(490.4,616.7,3.011,2.238);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#CB9059").s().p("AjzAJIAPgRIHSAAIAGARg");
	this.shape_215.setTransform(609.7,612.7,3.011,2.238);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CB9059").s().p("AkaAJIAwgRIIFAAIgbARg");
	this.shape_216.setTransform(363.9,620.8,3.011,2.238);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#B77A4A").s().p("AipAJIA8gRIEXAAIgwARg");
	this.shape_217.setTransform(244.1,620.8,3.011,2.238);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#C4834F").s().p("AkPAJIAagRIIFAAIgFARg");
	this.shape_218.setTransform(522.4,620.8,3.011,2.238);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#C0784E").s().p("Aj1AJIgFgRIHZAAIAcARg");
	this.shape_219.setTransform(757.3,612.7,3.011,2.238);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#C4834F").s().p("AjpAJIgcgRIHaAAIAxARg");
	this.shape_220.setTransform(902.4,612.7,3.011,2.238);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#C4834F").s().p("Aj8AJIgLgRIHuAAIAiARg");
	this.shape_221.setTransform(797.7,616.7,3.011,2.238);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#C0784E").s().p("AkCAJIALgRIHuAAIAMARg");
	this.shape_222.setTransform(643,616.7,3.011,2.238);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C0784E").s().p("AjxAJIghgRIHvAAIA2ARg");
	this.shape_223.setTransform(948.3,616.7,3.011,2.238);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#B77A4A").s().p("AhZAJIgygRIDbAAIA8ARg");
	this.shape_224.setTransform(1009.4,612.7,3.011,2.238);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#CB9059").s().p("AkEAJIgRgRIIEAAIAnARg");
	this.shape_225.setTransform(841.4,620.8,3.011,2.238);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B77A4A").s().p("AkNAJIAGgRIIDAAIARARg");
	this.shape_226.setTransform(683.6,620.8,3.011,2.238);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#B77A4A").s().p("Aj5AJIgngRIIFAAIA8ARg");
	this.shape_227.setTransform(999.8,620.8,3.011,2.238);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C0784E").s().p("AjbAJIgkgRIHFAAIA7ARg");
	this.shape_228.setTransform(948.1,608.8,3.011,2.238);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#B77A4A").s().p("AjmAJIgPgRIHGAAIAlARg");
	this.shape_229.setTransform(809.2,608.8,3.011,2.238);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#C4834F").s().p("AjTAJIgggRIGxAAIA2ARg");
	this.shape_230.setTransform(903.4,605,3.011,2.238);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#C0784E").s().p("AgnAJIg1gRIB+AAIA7ARg");
	this.shape_231.setTransform(989.2,605,3.011,2.238);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#C0784E").s().p("AjdAJIgLgRIGxAAIAgARg");
	this.shape_232.setTransform(771.2,605,3.011,2.238);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C4834F").s().p("AjpAJIAGgRIG9AAIAQARg");
	this.shape_233.setTransform(668.6,608.8,3.011,2.238);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#CB9059").s().p("AjLAJIgagRIGbAAIAwARg");
	this.shape_234.setTransform(861,600.9,3.011,2.238);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B77A4A").s().p("AhdAJIgvgRIDeAAIA7ARg");
	this.shape_235.setTransform(956.8,600.9,3.011,2.238);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#B77A4A").s().p("AjWAJIgEgRIGaAAIAbARg");
	this.shape_236.setTransform(734.2,600.9,3.011,2.238);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C0784E").s().p("AjwAJIAcgRIHFAAIgGARg");
	this.shape_237.setTransform(527.2,608.8,3.011,2.238);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C4834F").s().p("Aj7AJIAygRIHFAAIgcARg");
	this.shape_238.setTransform(388.2,608.8,3.011,2.238);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C4834F").s().p("AjpAJIAhgRIGxAAIgLARg");
	this.shape_239.setTransform(501,605,3.011,2.238);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C0784E").s().p("AjjAJIALgRIGxAAIALARg");
	this.shape_240.setTransform(637,605,3.011,2.238);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C0784E").s().p("AjzAJIA2gRIGxAAIghARg");
	this.shape_241.setTransform(368.7,605,3.011,2.238);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B77A4A").s().p("AiGAJIA8gRIDRAAIgyARg");
	this.shape_242.setTransform(285.8,608.8,3.011,2.238);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#CB9059").s().p("AjgAJIAmgRIGbAAIgRARg");
	this.shape_243.setTransform(478.1,600.9,3.011,2.238);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#B77A4A").s().p("AjYAJIARgRIGbAAIAFARg");
	this.shape_244.setTransform(604.5,600.9,3.011,2.238);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B77A4A").s().p("AjrAJIA8gRIGbAAIgmARg");
	this.shape_245.setTransform(351.3,600.9,3.011,2.238);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#C18750").s().p("EghNAENIAAjqIPfkvMAjcAAAIPgEwIAADpg");
	this.shape_246.setTransform(640,659,3.011,2.238);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(255,255,255,0.4)").s().p("AgnBRIADi5IAkAGIAoDLg");
	this.shape_247.setTransform(1122.4,598.2,3.011,2.238);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(255,255,255,0.4)").s().p("AgZBZIgtjOIAlAHIBoDkg");
	this.shape_248.setTransform(1148.1,602.9,3.011,2.238);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(255,255,255,0.4)").s().p("AAAhiIAlgGIADC5IhPAYg");
	this.shape_249.setTransform(158.6,598.2,3.011,2.238);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(255,255,255,0.4)").s().p("AAjhuIAkgHIgtDOIhgAdg");
	this.shape_250.setTransform(132.9,602.9,3.011,2.238);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#141520").s().p("AnbAeIN/hwIA4AAIu3Clg");
	this.shape_251.setTransform(143.3,578.1,3.011,2.238);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#22243D").s().p("AnbhRIO3iAIAACNIu3EWg");
	this.shape_252.setTransform(143.3,606.5,3.011,2.238);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#141520").s().p("AnbhSIA4AAIN/BwIAAA1g");
	this.shape_253.setTransform(1136.7,578.1,3.011,2.238);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#22243D").s().p("AnbhEIAAiNIO3CAIAAEjg");
	this.shape_254.setTransform(1136.7,606.5,3.011,2.238);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#1E2030").s().p("AyUBGIAAiLMAkqAAAIAACLg");
	this.shape_255.setTransform(640.1,575.4,3.011,2.238);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#242738").s().p("Az7ANICggaMAi7AAAICdAag");
	this.shape_256.setTransform(634.8,558,3.011,2.238);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#22243D").s().p("Ag/MKIiL6DIBtANIEnbmg");
	this.shape_257.setTransform(965.4,389.1,3.011,2.238);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#22243D").s().p("ABdtrIBugOIiLaCIkJBxg");
	this.shape_258.setTransform(314.6,389.2,3.011,2.238);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#30445A").s().p("AwaN4IBg7UQC1gfEaAGIHrANQCkAAFAgOQEXgHC0AeIBsbXg");
	this.shape_259.setTransform(640,377.8,3.011,2.238);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#2D343E").s().p("EghNAFEIAAocINuhsMAnEAAAINpBsIAAIcg");
	this.shape_260.setTransform(640,647.4,3.011,2.238);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#17182A").s().p("EghNAFRIAAqiMBCbAAAIAAKig");
	this.shape_261.setTransform(640,75.5,3.011,2.238);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#293B4F").s().p("EghNAW1MAAAgtpMBCbAAAMAAAAtpg");
	this.shape_262.setTransform(640,393.1,3.011,2.238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_19},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_18},{t:this.shape_49},{t:this.shape_48},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.instance_14},{t:this.shape_36},{t:this.shape_35},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_10},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_9},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.openingStage, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.ODOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.exitBTN();
	this.instance.parent = this;
	this.instance.setTransform(195.5,139.6,2.25,2.25);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.exitBTN(), 3);

	this.text = new cjs.Text("מכון טכנולוגי חולון", "17px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(701.4,537.8);

	this.text_1 = new cjs.Text("הפקולטה לטכנולוגיות למידה", "17px 'Arial'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 341;
	this.text_1.parent = this;
	this.text_1.setTransform(701.4,514.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00868A").s().p("AhHCfQgjAAgagaQgagaABgkIAAiOQgBgkAagZQAagaAjAAICOAAQAlAAAZAaQAaAZgBAkIAACOQABAkgaAaQgZAaglAAg");
	this.shape.setTransform(757.6,572.4,0.471,0.471);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00868A").s().p("AhHCfQgkAAgZgaQgagaABgkIAAiOQgBgkAagZQAZgaAkAAICOAAQAlAAAZAaQAaAZgBAkIAACOQABAkgaAaQgZAaglAAg");
	this.shape_1.setTransform(813,572.4,0.471,0.471);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00868A").s().p("AhHCfQgkgBgZgZQgZgZAAglIAAiOQAAgjAZgaQAZgZAkAAICOAAQAlAAAZAZQAZAaABAjIAACOQgBAlgZAZQgZAZglABg");
	this.shape_2.setTransform(780.2,500.4,0.471,0.471);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00868A").s().p("AmjObQgkAAgZgZQgagaAAgkIAAywQAAgkAagZQAZgaAkAAICQAAQAkAAAZAaQAZAZAAAkIAAB5QAAAYAQAQQARAQAXAAIEKAAQAZAAAQgRQAPgQAAgXIAApRQAAgkAagZQAZgZAkAAICQAAQAkAAAZAZQAaAZAAAkIAASyQAAAjgaAaQgaAZgkAAIiPAAQgkAAgZgZQgagaAAgjIAAkFQAAgWgPgRQgQgRgZgBIkKAAQgXAAgRAQQgQARAAAYIAALbQAAAkgZAaQgZAZgkAAg");
	this.shape_3.setTransform(741.3,536.4,0.471,0.471);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00868A").s().p("AhGKvQglAAgZgZQgZgZgBgkIAAyxQABgkAZgZQAZgaAlAAICOAAQAjAAAaAaQAZAZAAAkIAASxQAAAkgZAZQgaAZgjAAg");
	this.shape_4.setTransform(780.3,547.5,0.471,0.471);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00868A").s().p("AhHHEQgkAAgZgZQgagaAAgjIAAm7QAAgZgSgQQgRgQgWAAIhRAAQgngBgZgbQgWgZAAghIAAiRQAAglAZgYQAZgZAjAAIJSAAQAkAAAZAZQAZAYAAAlIAACRQAAAhgXAZQgYAbgnABIhSAAQgVAAgRAQQgSAQAAAZIAAG7QAAAjgaAaQgZAZgkAAg");
	this.shape_5.setTransform(813,536.4,0.471,0.471);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqDHtIAAvZIUGAAIAAPZg");
	this.shape_6.setTransform(773.5,536.4);

	this.text_2 = new cjs.Text("קלע לסל", "bold 48px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 56;
	this.text_2.lineWidth = 247;
	this.text_2.parent = this;
	this.text_2.setTransform(640.6,193.6);

	this.text_3 = new cjs.Text("אודות", "bold 55px 'Arial'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 63;
	this.text_3.lineWidth = 425;
	this.text_3.parent = this;
	this.text_3.setTransform(1099.4,105.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.498)").s().p("EhMlAFuIAArbMCZLAAAIAALbg");
	this.shape_7.setTransform(640.6,139.5);

	this.text_4 = new cjs.Text("אפיון ופיתוח: שרית זחרוב ורותם הלימי\nאופיין ופותח במסגרת פרויקט בקורסים:\nסביבות לימוד אינטראקטיביות 1 + תכנות אינטראקטיבי 1\nתש\"פ", "23px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 37;
	this.text_4.lineWidth = 736;
	this.text_4.parent = this;
	this.text_4.setTransform(640.6,285);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.647)").s().p("EhMlAoLMAAAhQVMCZLAAAMAAABQVg");
	this.shape_8.setTransform(640.6,360);

	this.instance_1 = new lib.openingStage();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640.5,360,1,1,0,0,0,640.5,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_8},{t:this.text_4},{t:this.shape_7},{t:this.text_3},{t:this.text_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ODOT, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.names = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFCCQgegQAAghIAAgiQAAgLAJgGIgEgCQgFgHAAgIIAJiKQAAgHAGgGQAFgFAIAAICXAAQAIAAAGAGQAGAFAAAJIAAArQAAAIgGAFQgGAGgIAAIglAAQAWAEAOALQANAIAFAaQADAMAAAMIAABFQAAAhgeAQQgZAOgtAAQgsAAgZgOgAhPBRQAAAsBPAAQBQAAAAgsIAAhFQAAgMgDgMQgEgPgFgEQgPgMgegBIgHAAQgXAAgOAJIAEgtIBhAAIAAgrIiXAAIgICJIA4AAIAAgIQACgHARAAIAEAAIAQABQAIABAAALIAAA8QAAAOgYAAQgXAAAAgOIAAgZIg4AAgAgNAeQAJAGAAALIAAATIAEAAIAFAAIAAgxIgFAAIgDAAIgBAAQgBAJgIAEg");
	this.shape.setTransform(182.8,515.8,0.82,0.818);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6D638").s().p("AhZBRIAAgiQAAgEADgDQADgDAEAAIA4AAQAEAAACADQADADAAAEIAAAZQAAAEAOAAQAOAAAAgEIAAg/IgBgBIgNgBIgEABQgGAAgDABIgBAGQAAAEgDACQgDADgDAAIg4AAQgEAAgEgDQgCgEAAgDIAIiKQABgEACgDQADgCAEAAICXAAQAEAAADACQADADAAAFIAAArQAAAEgDADQgDADgEAAIhYAAIgCATQAMgCAOAAIAIAAQAgABASANQAIAHAFASQADAOAAAMIAABFQAAA2haAAQhZAAAAg2g");
	this.shape_1.setTransform(182.8,515.8,0.82,0.818);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2C2C2C").ss(3,1,1).p("ADbARQgDgYgPgUQgPgVgXgKQhLgfhYgBIgBAAQhXABhGAdQgXAJgQAUQgPATgDAZQgGAoACAmQAMgXAigXQBDgtBpAAQBpAABFAtQAiAWANAWQAAg1gBgTg");
	this.shape_2.setTransform(182.8,433.7,0.819,0.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6D638").s().p("AjXANQADgZAQgTQAPgUAXgJQBGgdBYgBIAAAAQBYABBLAfQAXAKAPAVQAPAUADAYQACATgBA1QgNgWgigWQhFgthoAAQhqAAhDAtQgiAXgMAXQgCgmAGgog");
	this.shape_3.setTransform(182.8,433.7,0.819,0.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D6D638").ss(5.5,1,1).p("AAMjAQAqCVgoCEQgSBDgcAl");
	this.shape_4.setTransform(161.4,490.3,0.665,0.665);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhlgwIBlFsIBsg6IAAApIhIAfIBAgVQBTgSBkAQQAHABAFAGQAFAFAAAIQAAAKgHAGQgHAGgJgBQgogGghACQgwADgYATIAxAGQA+AMA8AZQAOAFAAAOQAAAKgIAGQgHAHgKgBQh8gTg1AJIAhAMQAlAVASAmQAAABARAaQAHALgDANQgCANgMAHQgKAGgMgDQgMgCgHgKQgrg/ghgHIhIAAQgmAAgggUQgggUgRgiIjImXQgWgqAGgxQAFgwAfgmIEsl0ICLg6QAqB/gsClIkED1IhiAA");
	this.shape_5.setTransform(151.6,516.5,0.665,0.665);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-7,-53.2,4,60.1).s().p("AC8JJQgMgCgHgKQgrg/ghgHIhIAAQgmAAgggUQgggUgRgiIjImXQgWgqAGgxQAFgwAfgmIEsl0ICLg6QAqB/gsClIkED1IhiAAIBiAAIBlFsIBsg6IAAApIhIAfIBAgVQBTgSBkAQQAHABAFAGQAFAFAAAIQAAAKgHAGQgHAGgJgBQgogGghACQgwADgYATIAxAGQA+AMA8AZQAOAFAAAOQAAAKgIAGQgHAHgKgBQh8gTg1AJIAhAMQAlAVASAmIARAbQAHALgDANQgCANgMAHQgHAEgIAAIgHgBg");
	this.shape_6.setTransform(151.6,516.5,0.665,0.665);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D6D638").ss(5.5,1,1).p("AAhDBQgcglgShDQgoiEAqiV");
	this.shape_7.setTransform(203.7,490.3,0.665,0.665);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D6D638").ss(5.5,1,1).p("ADDiGQAJBxhlBZQgzAtg0AWQgzgWgzgtQhkhZAIhx");
	this.shape_8.setTransform(182.6,483.9,0.665,0.665);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("ABGiiQgsgFgrASIgkASQgFgDgGgDQgNgGgJACQgsAJgaBJQgNAkgFAiIABAAIgBBlIAQAAIAAA1IAMgSIAAh8QAJgQAYgQQAughBDAAQBEAAAuAhQAYAQAJAQIAAB8IAMASIAAg1IAQAAIAAhPQACg5gXg6QgehKg2gGg");
	this.shape_9.setTransform(182.7,436.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACTCTIAAh8QgJgQgYgQQgughhEAAQhDAAguAhQgYAQgJAQIAAB8IgMASIAAg1IgQAAIABhlIgBAAQAFgiANgkQAahJAsgJQAJgCANAGIALAGIAkgSQArgSAsAFQA2AGAeBKQAXA6gCA5IAABPIgQAAIAAA1g");
	this.shape_10.setTransform(182.7,436.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4B3A3B").s().p("AgyAAIgWgKIBIADIBJgDQgJAGgNAEQgbALgYAAQgYAAgagLg");
	this.shape_11.setTransform(182.6,460.9,0.665,0.665);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgHAEgGQAEgGAFAAQAGAAAEAGQAEAGAAAHQAAAIgEAGQgEAGgGAAQgFAAgEgGg");
	this.shape_12.setTransform(192.2,449.5,0.665,0.665);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgZAbQgLgLAAgQQAAgPALgLQALgMAOAAQAPAAALAMQALALAAAPQAAAQgLALQgLAMgPAAQgOAAgLgMg");
	this.shape_13.setTransform(191.2,450.1,0.665,0.665);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAOQgEgGAAgIQAAgHAEgGQAFgGAEAAQAGAAAEAGQAEAGAAAHQAAAJgEAFQgEAGgGAAQgEAAgFgGg");
	this.shape_14.setTransform(175,449.5,0.665,0.665);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgZAbQgLgLAAgQQAAgPALgLQAKgMAPAAQAPAAALAMQALALAAAPQAAAQgLALQgLAMgPAAQgPAAgKgMg");
	this.shape_15.setTransform(174.1,450.1,0.665,0.665);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A8796B").s().p("AgDBeQgGgNgDgKQgJgiAAglQAAgmAJggIAJgXIADgJIAEAJIAJAXQAJAgAAAmQAAAogJAfQgEANgFAKIgEAJg");
	this.shape_16.setTransform(182.6,451.5,0.665,0.665);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAwAeIgDgBQgKgFgMgEIgMgDIgNgDIgZgBIgKABIgKACIgBABQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgGgDIgUgIIACgJIAEgMIAEgHQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAEgBIAOgEIARgCIAiABIAfAIQAJADASAIIADABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIADAHIAGAVIgbALIgBAAIgBgBg");
	this.shape_17.setTransform(191.3,444.3,0.665,0.665);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgxAfIgbgLIAGgVIACgHQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIADgBIAagLIAggIIAigBIAQACIAPAEIAEABQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAEAHIAEAMIACAJIgUAIIgFADQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIgCgBIgJgCIgXgBIgNABIgLADIgOADIgVAJIgCABIgCABIgBAAg");
	this.shape_18.setTransform(173.9,444.3,0.665,0.665);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAEZQhPAAg6g5Qg5g5AAhRIAAirQAAhRA5g5QA6g4BPAAQBQAAA6A4QA5A5AABRIAACrQAABRg5A5Qg6A5hQAAg");
	this.shape_19.setTransform(182.7,448.1,0.819,0.819);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,28,0,-28).s().p("AiIDgQg6g6AAhRIAAiqQAAhRA6g5QA5g4BPAAQBRAAA4A4QA6A5AABRIAACqQAABRg6A6Qg4A5hRAAQhPAAg5g5g");
	this.shape_20.setTransform(182.7,448.1,0.819,0.819);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BE9075").ss(3,1,1).p("AjTg+Ig3AAQgaAAgSATQgTASAAAZQAAAaATASQASATAaAAIA3AAQAaAAASgTQATgSAAgaQAAgZgTgSQgSgTgaAAgAELg+Ig3AAQgaAAgSATQgTASAAAZQAAAaATASQASATAaAAIA3AAQAaAAASgTQATgSAAgaQAAgZgTgSQgSgTgaAAg");
	this.shape_21.setTransform(182.6,451.6,0.665,0.665);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,6.3,0,-6.2).s().p("ADUA/QgagBgSgSQgTgSAAgaQAAgZATgSQASgSAaAAIA3AAQAaAAASASQATASAAAZQAAAagTASQgSASgaABgAkKA/QgagBgSgSQgTgSAAgaQAAgZATgSQASgSAaAAIA3AAQAaAAASASQATASAAAZQAAAagTASQgSASgaABg");
	this.shape_22.setTransform(182.6,451.6,0.665,0.665);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,1,1).p("AEiFcIgFmVQgWgegQg2QgghsAhh5IhaggQAHBchSBJQgoAkgrATQgqgTgogkQhShJAHhcIhaAgQAiB5ghBsQgQA2gWAeIgFGVQCRA3CQAAIAAAAQCRAACRg3g");
	this.shape_23.setTransform(182.7,507.8,0.819,0.819);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#575700","#000000"],[0,1],0,40.3,0,-40.2).s().p("AAAGTQiQAAiRg3IAEmVQAXgeARg2QAghsgih5IBaggQgHBcBSBJQAoAkAqATQAqgTApgkQBShJgGhcIBZAgQghB5AgBsQAPA2AYAeIAEGVQiQA3iSAAg");
	this.shape_24.setTransform(182.7,507.8,0.819,0.819);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BE9075").ss(2.5,1,1).p("ADMgcIjMEqIjLkqIBthmIAAiLIC9AAIAACLg");
	this.shape_25.setTransform(182.7,481.9,0.819,0.819);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,15.6,0,-26.7).s().p("AjLgcIBshmIAAiLIC/AAIAACLIBsBmIjMEqg");
	this.shape_26.setTransform(182.7,481.9,0.819,0.819);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACVLJQAOgIANgTQAagkgCgvQgCgvgJhVIgJhKIBDoTIj4o1Ij1hhIBqEmICxGhIAiH0IgdAfQgkAogVAyQgWAygGA2IgDAcQAAAKAGAHQAGAIAKABQAJABAHgGQAIgFABgJIAWhiIACAeQAAAmgHAuQgHApgLAgQgDAJAEAJQAGAJAKABQAPABAGgNQAag0ALgtQAEgQACgOACnKPQAAgGABgHACnKPIgBAHQgBAHgCAHQADgKABgLgACjKkQgFATgJASIAAAAQAKgRAEgUgABZMGQADgFADgGQAKgSAIgUIAFgPQADgJADgKIgBADQgCAIgDAIABZMGQATgIATgVQANgPAJgRABLKrIAAADQgLAqgTAnQgFAJAFAJQAFAKALABQAMABAHgKQAFgGAEgHAB8KzQAEgPACgP");
	this.shape_27.setTransform(212,527.9,0.665,0.665);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-10.7,77.9,3.9,-72.7).s().p("AA9McQgLgBgFgKQgFgJAFgJQATgnALgqIABgDQADgQACgOQgCAOgDAQQgMAtgaA0QgGANgPgBQgKgBgGgJQgEgJADgJQALggAHgpQAHguAAgmIgCgeIgWBiQgBAJgIAFQgHAGgJgBQgKgBgGgIQgGgHAAgKIADgcQAGg2AWgyQAVgyAkgoIAdgfIgin0IixmhIhqkmID1BhID4I1IhDITIAJBKQAJBVACAvQACAvgaAkQgNATgNAIQAJgRAEgUIADgOIABgHIABgNIgBANIgEAVQgFATgJASIABAAQgKARgNAPQgTAVgTAIIAGgLQAKgSAIgUIAFgPIAFgQIABgDIgGATIgFAPQgIAUgKASIgGALIgJANQgGAKgLAAIgCgBgAB8KzQAEgPACgPQgCAPgEAPgACjKkQgEAUgJARIgBAAQAJgSAFgTgAB8KzIgBADIgFAQIAGgTgACnKPIgBAHIgDAOIAEgVg");
	this.shape_28.setTransform(212,527.9,0.665,0.665);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#D6D638").ss(4.5,1,1).p("AjEAAIGJAA");
	this.shape_29.setTransform(200.5,582.6,0.665,0.665);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#D6D638").ss(4.5,1,1).p("AjDAAIGHAA");
	this.shape_30.setTransform(167.5,582.6,0.665,0.665);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,1,1).p("AkEAVQAwAYDUAAQDVAAAwgYIAAhCIoJAAg");
	this.shape_31.setTransform(184.1,539.9,0.819,0.819);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#575700","#000000"],[0,1],-26,0,26.1,0).s().p("AkEAVIAAhBIIJAAIAABBQgwAZjVAAQjUAAgwgZg");
	this.shape_32.setTransform(184.1,539.9,0.819,0.819);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D6D638").ss(5.5,1,1).p("AAwj5Qg4CegTBYQggCLATBy");
	this.shape_33.setTransform(158.9,562.1,0.819,0.819);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#D6D638").ss(5.5,1,1).p("AAyE0QAYiNgmirQgYhshGjD");
	this.shape_34.setTransform(209.2,562.1,0.665,0.665);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3.3,1,1).p("ADVjMImpAAQgvCCgPBIQgaBxAPBeIEGAAIAHjYIAhAAIAHDYIEGAAQAPhegZhxQgQhIgviCg");
	this.shape_35.setTransform(184.1,562.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#575700","#000000"],[0,1],0,20.5,0,-20.4).s().p("AAYDNIgHjYIghAAIgHDYIkGAAQgPheAahxQAPhIAviCIGpAAQAvCCAQBIQAZBxgPBeg");
	this.shape_36.setTransform(184.1,562.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#838587").ss(3.3,1,1).p("AA7AAIh1AA");
	this.shape_37.setTransform(161.5,656.8,0.665,0.665);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#838587").ss(3.3,1,1).p("AA5AGIhxgL");
	this.shape_38.setTransform(161.6,660.6,0.665,0.665);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#838587").ss(3.3,1,1).p("AA0AMIhngX");
	this.shape_39.setTransform(159.8,663.2,0.665,0.665);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#838587").ss(3.3,1,1).p("AAtAMIhZgX");
	this.shape_40.setTransform(158,665.7,0.665,0.665);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#838587").ss(3.3,1,1).p("AAxANIhhga");
	this.shape_41.setTransform(155.8,668.7,0.665,0.665);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#838587").ss(3.3,1,1).p("AApAOIhRga");
	this.shape_42.setTransform(154.2,670.9,0.665,0.665);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#201F1F").ss(3.3,1,1).p("AC+hPIgGBKQgKBQgXAgQgpAFgmAaQgTAOgLAMQgeAEgnAEQhPAGgwgFQgwgFAEguIAMguIB7iFQAagcASgjIAMgeIAFBVIg8BFQgLAMAGAQQAGAPAQADQAOABALgJQBnhqANgJQADgBAZg0QAXgwAKAAQAUAAAMAOQAVAYgUA5g");
	this.shape_43.setTransform(158.1,666.8,0.665,0.665);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#606163","#322F2F"],[0,1],20,0,-19.9,0).s().p("AiaCtQgwgFAEguIAMguIB7iFQAagcASgjIAMgeIAFBVIg8BFQgLAMAGAQQAGAPAQADQAOABALgJQBnhqANgJQADgBAZg0QAXgwAKAAQAUAAAMAOQAVAYgUA5IgGBKQgKBQgXAgQgpAFgmAaQgTAOgLAMQgeAEgnAEQgtADgiAAQgbAAgVgCg");
	this.shape_44.setTransform(158.1,666.8,0.665,0.665);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#201F1F").ss(3.3,1,1).p("ABqAiQAOgTAJgZQATg0gUggQgWgjg8gIQg1gIgSAPQgNAKACBFQABAiADAgIhqByIBOAMg");
	this.shape_45.setTransform(160,661.4,0.665,0.665);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#322F2F","#606163"],[0,1],13.9,0,-13.8,0).s().p("AiKCBIBqhyQgDgggBgiQgChFANgKQASgPA1AIQA8AIAWAjQAUAggTA0QgJAZgOATIimBrg");
	this.shape_46.setTransform(160,661.4,0.665,0.665);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#60605B").ss(3.3,1,1).p("ACxg9IAAAMQAAARgLAOQgLAOgRAEQgXAFgQANQg1AshpgBQgTAAgcgCQgggCgUgZQgUgYADgfIADgcg");
	this.shape_47.setTransform(156.4,678,0.665,0.665);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],17.7,0,-17.6,0).s().p("Ag7A9QgTAAgcgCQgggCgUgZQgUgYADgfIADgcIFdgKIAAAMQAAASgLANQgLAOgRAEQgXAFgQAOQg1AqhnAAIgCAAg");
	this.shape_48.setTransform(156.4,678,0.665,0.665);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#60605B").ss(2.5,1,1).p("AApCrIBalVQgeARgwAKQheAVhZgdIAzFCg");
	this.shape_49.setTransform(165.9,652.3,0.665,0.665);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],0.6,16.3,0.6,-14.7).s().p("AhPCrIgzlCQBZAdBegVQAwgKAegRIhaFVg");
	this.shape_50.setTransform(165.9,652.3,0.665,0.665);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BE9075").ss(2.5,1,1).p("AiHqQIg3HOIBWObIB4AAICQqwIhWjVIB0osg");
	this.shape_51.setTransform(167.6,615.2,0.665,0.665);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,-62.1,0,69.7).s().p("AhoLZIhWubIA3nOIFFhIIh0IsIBWDVIiQKwg");
	this.shape_52.setTransform(167.6,615.2,0.665,0.665);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#838587").ss(3.3,1,1).p("Ag5AAIBzAA");
	this.shape_53.setTransform(206.6,656.8,0.665,0.665);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#838587").ss(3.3,1,1).p("Ag4AGIBxgL");
	this.shape_54.setTransform(206.5,660.6,0.665,0.665);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#838587").ss(3.3,1,1).p("AgzAMIBngX");
	this.shape_55.setTransform(208.2,663.2,0.665,0.665);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#838587").ss(3.3,1,1).p("AgrAMIBYgX");
	this.shape_56.setTransform(210.1,665.7,0.665,0.665);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#838587").ss(3.3,1,1).p("AgwANIBhga");
	this.shape_57.setTransform(212.3,668.7,0.665,0.665);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#838587").ss(3.3,1,1).p("AgoAOIBRga");
	this.shape_58.setTransform(213.9,670.9,0.665,0.665);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#201F1F").ss(3.3,1,1).p("Ai8hPIAGBKQAKBQAXAgQApAFAmAaQATAOAKAMIBFAIQBOAGAwgFQAvgFgDguIgMguIh7iFQgagcgRgjIgMgeIgFBVIA8BFQAKAMgFAQQgGAPgRADQgNABgLgJQhphrgKgIQgDgBgZg0QgYgwgKAAQgTAAgMAOQgVAYAUA5g");
	this.shape_59.setTransform(210,666.8,0.665,0.665);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#606163","#322F2F"],[0,1],-19.8,0,19.9,0).s().p("AAcCsIhFgIQgKgMgTgOQgmgagpgFQgXgggKhQIgGhKQgUg5AVgYQAMgOATAAQAKAAAYAwQAZA0ADABQAKAIBpBrQALAJANgBQARgDAGgPQAFgQgKgMIg8hFIAFhVIAMAeQARAjAaAcIB7CFIAMAuQADAugvAFQgVACgaAAQgjAAgsgDg");
	this.shape_60.setTransform(210,666.8,0.665,0.665);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#201F1F").ss(3.3,1,1).p("AhpAiQgOgTgJgZQgTg0AUggQAWgjA8gIQA0gIATAPQAMAKgBBFQgBAigEAgIBqByIhOAMg");
	this.shape_61.setTransform(208,661.4,0.665,0.665);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#322F2F","#606163"],[0,1],-13.7,0,13.8,0).s().p("AhpAiQgOgTgJgZQgTg0AUggQAWgjA8gIQA0gIATAPQAMAKgBBFQgBAigEAgIBqByIhOAMg");
	this.shape_62.setTransform(208,661.4,0.665,0.665);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#60605B").ss(3.3,1,1).p("Aivg9IAAAMQAAARALAOQAKAOARAEQAYAFAPANQA1AsBpgBQASAAAcgCQAggCAUgZQAUgYgDgfIgDgcg");
	this.shape_63.setTransform(211.7,678,0.665,0.665);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-17.5,0,17.6,0).s().p("AhiATQgPgOgYgFQgRgEgKgOQgLgNAAgSIAAgMIFbAKIADAcQADAfgUAYQgUAZggACQgcACgSAAIgCAAQhnAAg1gqg");
	this.shape_64.setTransform(211.7,678,0.665,0.665);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#60605B").ss(2.5,1,1).p("AggCJIhLkRIBBAUQBOAOBIgYIgrEHg");
	this.shape_65.setTransform(202.3,652.4,0.819,0.819);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-0.5,-12,-0.5,13).s().p("AggCJIhLkRIBBAUQBPAOBHgYIgrEHg");
	this.shape_66.setTransform(202.3,652.4,0.819,0.819);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACHqQIA3HOIhVObIh4AAIiPqwIBVjVIh0osg");
	this.shape_67.setTransform(200.6,615.2,0.665,0.665);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,69.4,0,-61.7).s().p("AgPLZIiPqwIBVjVIh0osIFEBIIA3HOIhVObg");
	this.shape_68.setTransform(200.6,615.2,0.665,0.665);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGD1QgXAAgbgHQgcgGgYgOQgZgOgSgZQgTgbABgmIABggQABgRALgLQAMgLAQAAIBJACQgKgMAAgQIABgyQAAgHADgHIhAgCQgQAAgMgMQgLgMAAgRIABghQABgdARgaQAQgXAZgPQAYgPAcgHQAZgGAdAAIAHAAQApAAAgAOQAdANAPANQAKAJAJAKQAKAMAGARQAEAKAEAVQABARAAAWQAAATgCATQgDAWgLARIgGAIQAFAGADAHQAJARAAAXQABAPgBAXQgBAagBALQgCAPgEANQgFAQgIALQgHAKgJAIQgXAVggANQgeALgpAAgAiBB0QgBAWAMASQALAQATAMQATALAVAEQAXAGAUAAIAHAAQAiAAAXgJQAZgJARgQIALgNQAFgGACgJQADgIABgNQACgRAAgQQABgVgBgPQAAgMgFgMQgEgKgLgHQgKgIgUgIIAdgNQAKgGAHgIQAFgKACgMQACgQAAgSQAAgYgBgJQgBgKgEgNQgEgKgGgGQgFgHgJgIQgLgJgYgKQgWgKgjgBIgGAAQgYAAgUAFQgZAHgQAKQgSALgLAQQgKAPgBASIgBAhIBWADIABghQAAgKAKgJQAJgJAUAAIACAAQAUABALAIQALAJgBAMIgBA0QAAAXgPAGQgOAFgcAAIgLgBIgBAyIAhADQALABAJAFQAHAEADAIQADAGAAANIgCA6QgBAPgLAIQgLAIgQAAIgDAAQgUgBgKgIQgLgJAAgOIABgeIhVgCgAgDBWIAAAVIADAAIABgvIgNgBQAJAMAAAPgAABhVQAAAHgCAGIAFAAIABgjIgEAAg");
	this.shape_69.setTransform(1098.2,515.8,0.48,0.48);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#ECA92F").s().p("AgDCEQgOgBgNgDQgPgDgMgHQgNgIgIgLQgJgOAAgSIABgTQAAgFADgDQAEgDAEAAIAzABQAFABADADQADADAAAFIAAASQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAFACAGAAIABAAQAGAAADgBQADgCAAgDIABgiQAAgFgBgCIgBgBQgDgCgFAAIgRgCQgFAAgDgDQgEgEAAgFIABgcQAAgFAEgDQADgEAFAAIAGABQAQAAAEgDQABAAAAgGIABgfQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgEgDgHAAIgCAAQgGAAgCACIgDADIAAATQAAAEgDAEQgFADgEABIgzgCQgEAAgEgEQgDgDABgFIAAgTQAAgNAIgOQAJgLALgHQANgHAPgEQAOgEAOAAIAEAAQAWABAQAGQAPAHAJAHIAJAKQAEAFAEAHQACAHABAKIABAUIgBAWQgCAKgFAIQgDAGgHAEQAHAGAEAHQAEAJABAKIAAAWIgCAUIgDAPQgCAGgDAFIgJAKQgKALgSAGQgQAGgWAAg");
	this.shape_70.setTransform(1098.1,515.7,0.819,0.819);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#9C701F").ss(3,1,1).p("ADbARQgDgYgPgUQgPgVgXgKQhLgfhYgBIgBAAQhXABhGAdQgXAJgQAUQgPATgDAZQgGAoACAmQAMgXAigXQBDgtBpAAQBpAABFAtQAiAWANAWQAAg1gBgTg");
	this.shape_71.setTransform(1098.3,433.7,0.819,0.819,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#ECA92F").s().p("AjXANQADgZAQgTQAPgUAXgJQBGgdBYgBIAAAAQBYABBLAfQAXAKAPAVQAPAUADAYQACATgBA1QgNgWgigWQhFgthoAAQhqAAhDAtQgiAXgMAXQgCgmAGgog");
	this.shape_72.setTransform(1098.3,433.7,0.819,0.819,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#ECA92F").ss(5.5,1,1).p("AAMjAQAqCVgoCEQgSBDgcAl");
	this.shape_73.setTransform(1119.6,490.3,0.665,0.665,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhlgwIBlFsIBsg6IAAApIhIAfIBAgVQBTgSBkAQQAHABAFAGQAFAFAAAIQAAAKgHAGQgHAGgJgBQgogGghACQgwADgYATIAxAGQA+AMA8AZQAOAFAAAOQAAAKgIAGQgHAHgKgBQh8gTg1AJIAhAMQAlAVASAmQAAABARAaQAHALgDANQgCANgMAHQgKAGgMgDQgMgCgHgKQgrg/ghgHIhIAAQgmAAgggUQgggUgRgiIjImXQgWgqAGgxQAFgwAfgmIEsl0ICLg6QAqB/gsClIkED1IhiAA");
	this.shape_74.setTransform(1129.5,516.5,0.665,0.665,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-7,-53.2,4,60.1).s().p("AC8JJQgMgCgHgKQgrg/ghgHIhIAAQgmAAgggUQgggUgRgiIjImXQgWgqAGgxQAFgwAfgmIEsl0ICLg6QAqB/gsClIkED1IhiAAIBiAAIBlFsIBsg6IAAApIhIAfIBAgVQBTgSBkAQQAHABAFAGQAFAFAAAIQAAAKgHAGQgHAGgJgBQgogGghACQgwADgYATIAxAGQA+AMA8AZQAOAFAAAOQAAAKgIAGQgHAHgKgBQh8gTg1AJIAhAMQAlAVASAmIARAbQAHALgDANQgCANgMAHQgHAEgIAAIgHgBg");
	this.shape_75.setTransform(1129.5,516.5,0.665,0.665,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#ECA92F").ss(5.5,1,1).p("AAhDBQgcglgShDQgoiEAqiV");
	this.shape_76.setTransform(1077.4,490.3,0.665,0.665,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#ECA92F").ss(5.5,1,1).p("ADDiGQAJBxhlBZQgzAtg0AWQgzgWgzgtQhkhZAIhx");
	this.shape_77.setTransform(1098.4,483.8,0.665,0.665,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#352B2C").ss(3,1,1).p("ABVjHQg1gGg2AWIgsAWQgFgEgIgDQgPgHgLACQg2ALggBZQgQAtgGApIABAAIgBB7IATAAIAABBIAPgWIAAiXQAMgUAcgTQA5gpBSAAQBSAAA5ApQAdATAMAUIAACXIAOAWIAAhBIATAAIAAhhQADhFgdhHQgkhahCgIg");
	this.shape_78.setTransform(1098.4,436.2,0.819,0.819,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4B3A3B").s().p("AC0CzIAAiXQgMgUgdgTQg5gphSAAQhSAAg5ApQgcATgMAUIAACXIgPAWIAAhBIgTAAIABh7IgBAAQAGgpAQgtQAghZA2gLQALgCAPAHIANAHIAsgWQA2gWA1AGQBCAIAkBaQAdBHgDBFIAABhIgTAAIAABBg");
	this.shape_79.setTransform(1098.4,436.2,0.819,0.819,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4B3A3B").s().p("AgyAAIgWgKIBIADIBJgDQgJAGgNAEQgbALgYAAQgYAAgagLg");
	this.shape_80.setTransform(1098.4,460.9,0.665,0.665,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgHAEgGQAEgGAFAAQAGAAAEAGQAEAGAAAHQAAAIgEAGQgEAGgGAAQgFAAgEgGg");
	this.shape_81.setTransform(1088.9,449.5,0.665,0.665,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgZAbQgLgLAAgQQAAgPALgLQALgMAOAAQAPAAALAMQALALAAAPQAAAQgLALQgLAMgPAAQgOAAgLgMg");
	this.shape_82.setTransform(1089.8,450.1,0.665,0.665,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgJAOQgEgGAAgIQAAgHAEgGQAFgGAEAAQAGAAAEAGQAEAGAAAHQAAAJgEAFQgEAGgGAAQgEAAgFgGg");
	this.shape_83.setTransform(1106.1,449.5,0.665,0.665,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgZAbQgLgLAAgQQAAgPALgLQAKgMAPAAQAPAAALAMQALALAAAPQAAAQgLALQgLAMgPAAQgPAAgKgMg");
	this.shape_84.setTransform(1107,450.1,0.665,0.665,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A8796B").s().p("AgDBeQgGgNgDgKQgJgiAAglQAAgmAJggIAJgXIADgJIAEAJIAJAXQAJAgAAAmQAAAogJAfQgEANgFAKIgEAJg");
	this.shape_85.setTransform(1098.4,451.5,0.665,0.665,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5F4137").s().p("AAwAeIgDgBQgKgFgMgEIgMgDIgNgDIgZgBIgKABIgKACIgBABQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgGgDIgUgIIACgJIAEgMIAEgHQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAEgBIAOgEIARgCIAiABIAfAIQAJADASAIIADABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIADAHIAGAVIgbALIgBAAIgBgBg");
	this.shape_86.setTransform(1089.7,444.2,0.665,0.665,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5F4137").s().p("AgxAfIgbgLIAGgVIACgHQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIADgBIAagLIAggIIAigBIAQACIAPAEIAEABQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAEAHIAEAMIACAJIgUAIIgFADQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIgCgBIgJgCIgXgBIgNABIgLADIgOADIgVAJIgCABIgCABIgBAAg");
	this.shape_87.setTransform(1107.1,444.2,0.665,0.665,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAEZQhPAAg6g5Qg5g5AAhRIAAirQAAhRA5g5QA6g4BPAAQBQAAA6A4QA5A5AABRIAACrQAABRg5A5Qg6A5hQAAg");
	this.shape_88.setTransform(1098.4,448.2,0.819,0.819,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,28,0,-28).s().p("AiIDgQg6g6AAhRIAAiqQAAhRA6g5QA5g4BPAAQBRAAA4A4QA6A5AABRIAACqQAABRg6A6Qg4A5hRAAQhPAAg5g5g");
	this.shape_89.setTransform(1098.4,448.2,0.819,0.819,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BE9075").ss(3,1,1).p("AjTg+Ig3AAQgaAAgSATQgTASAAAZQAAAaATASQASATAaAAIA3AAQAaAAASgTQATgSAAgaQAAgZgTgSQgSgTgaAAgAELg+Ig3AAQgaAAgSATQgTASAAAZQAAAaATASQASATAaAAIA3AAQAaAAASgTQATgSAAgaQAAgZgTgSQgSgTgaAAg");
	this.shape_90.setTransform(1098.4,451.6,0.665,0.665,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,6.3,0,-6.2).s().p("ADUA/QgagBgSgSQgTgSAAgaQAAgZATgSQASgSAaAAIA3AAQAaAAASASQATASAAAZQAAAagTASQgSASgaABgAkKA/QgagBgSgSQgTgSAAgaQAAgZATgSQASgSAaAAIA3AAQAaAAASASQATASAAAZQAAAagTASQgSASgaABg");
	this.shape_91.setTransform(1098.4,451.6,0.665,0.665,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#6F047E").ss(3,1,1).p("AEiFcIgFmVQgWgegQg2QgghsAhh5IhaggQAHBchSBJQgoAkgrATQgqgTgogkQhShJAHhcIhaAgQAiB5ghBsQgQA2gWAeIgFGVQCRA3CQAAIAAAAQCRAACRg3g");
	this.shape_92.setTransform(1098.4,507.8,0.819,0.819,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,40.3,0,-40.2).s().p("AAAGTQiQAAiRg3IAEmVQAXgeARg2QAghsgih5IBaggQgHBcBSBJQAoAkAqATQAqgTApgkQBShJgGhcIBZAgQghB5AgBsQAPA2AYAeIAEGVQiQA3iSAAg");
	this.shape_93.setTransform(1098.4,507.8,0.819,0.819,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BE9075").ss(2.5,1,1).p("ADMgcIjMEqIjLkqIBthmIAAiLIC9AAIAACLg");
	this.shape_94.setTransform(1098.4,481.9,0.819,0.819,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,15.6,0,-26.7).s().p("AjLgcIBshmIAAiLIC/AAIAACLIBsBmIjMEqg");
	this.shape_95.setTransform(1098.4,481.9,0.819,0.819,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACVLJQAOgIANgTQAagkgCgvQgCgvgJhVIgJhKIBDoTIj4o1Ij1hhIBqEmICxGhIAiH0IgdAfQgkAogVAyQgWAygGA2IgDAcQAAAKAGAHQAGAIAKABQAJABAHgGQAIgFABgJIAWhiIACAeQAAAmgHAuQgHApgLAgQgDAJAEAJQAGAJAKABQAPABAGgNQAag0ALgtQAEgQACgOACnKPQAAgGABgHACnKPIgBAHQgBAHgCAHQADgKABgLgACjKkQgFATgJASIAAAAQAKgRAEgUgABZMGQADgFADgGQAKgSAIgUIAFgPQADgJADgKIgBADQgCAIgDAIABZMGQATgIATgVQANgPAJgRABLKrIAAADQgLAqgTAnQgFAJAFAJQAFAKALABQAMABAHgKQAFgGAEgHAB8KzQAEgPACgP");
	this.shape_96.setTransform(1069,527.9,0.665,0.665,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-10.7,77.9,3.9,-72.7).s().p("AA9McQgLgBgFgKQgFgJAFgJQATgnALgqIABgDQADgQACgOQgCAOgDAQQgMAtgaA0QgGANgPgBQgKgBgGgJQgEgJADgJQALggAHgpQAHguAAgmIgCgeIgWBiQgBAJgIAFQgHAGgJgBQgKgBgGgIQgGgHAAgKIADgcQAGg2AWgyQAVgyAkgoIAdgfIgin0IixmhIhqkmID1BhID4I1IhDITIAJBKQAJBVACAvQACAvgaAkQgNATgNAIQAJgRAEgUIADgOIABgHIABgNIgBANIgEAVQgFATgJASIABAAQgKARgNAPQgTAVgTAIIAGgLQAKgSAIgUIAFgPIAFgQIABgDIgGATIgFAPQgIAUgKASIgGALIgJANQgGAKgLAAIgCgBgAB8KzQAEgPACgPQgCAPgEAPgACjKkQgEAUgJARIgBAAQAJgSAFgTgAB8KzIgBADIgFAQIAGgTgACnKPIgBAHIgDAOIAEgVg");
	this.shape_97.setTransform(1069,527.9,0.665,0.665,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#ECA92F").ss(4.5,1,1).p("AjEAAIGJAA");
	this.shape_98.setTransform(1080.5,582.6,0.665,0.665,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#ECA92F").ss(4.5,1,1).p("AjDAAIGHAA");
	this.shape_99.setTransform(1113.6,582.6,0.665,0.665,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#6F047E").ss(3,1,1).p("AkEAVQAwAYDUAAQDVAAAwgYIAAhCIoJAAg");
	this.shape_100.setTransform(1097.1,539.9,0.819,0.819,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-26,0,26.1,0).s().p("AkEAVIAAhBIIJAAIAABBQgwAZjVAAQjUAAgwgZg");
	this.shape_101.setTransform(1097.1,539.9,0.819,0.819,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#ECA92F").ss(5.5,1,1).p("AAwj5Qg4CegTBYQggCLATBy");
	this.shape_102.setTransform(1122.3,562.1,0.819,0.819,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#ECA92F").ss(5.5,1,1).p("AAyE0QAYiNgmirQgYhshGjD");
	this.shape_103.setTransform(1071.8,562.1,0.665,0.665,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#ECA92F").ss(3.3,1,1).p("AEEj5IoHAAQg6CegTBYQgfCLATByIFAAAIAIkHIApAAIAIEHIFAAAQAThygfiLQgThYg6ieg");
	this.shape_104.setTransform(1097,562.1,0.819,0.819,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,25.1,0,-25).s().p("AAdD6IgIkHIgpAAIgIEHIlAAAQgThyAfiLQAThYA6ieIIHAAQA6CeATBYQAfCLgTByg");
	this.shape_105.setTransform(1097,562.1,0.819,0.819,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#838587").ss(3.3,1,1).p("AA7AAIh1AA");
	this.shape_106.setTransform(1119.6,656.7,0.665,0.665,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#838587").ss(3.3,1,1).p("AA5AGIhxgL");
	this.shape_107.setTransform(1119.5,660.6,0.665,0.665,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#838587").ss(3.3,1,1).p("AA0AMIhngX");
	this.shape_108.setTransform(1121.2,663.2,0.665,0.665,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#838587").ss(3.3,1,1).p("AAtAMIhZgX");
	this.shape_109.setTransform(1123,665.6,0.665,0.665,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#838587").ss(3.3,1,1).p("AAxANIhhga");
	this.shape_110.setTransform(1125.2,668.6,0.665,0.665,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#838587").ss(3.3,1,1).p("AApAOIhRga");
	this.shape_111.setTransform(1126.9,670.9,0.665,0.665,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#201F1F").ss(3.3,1,1).p("AC+hPIgGBKQgKBQgXAgQgpAFgmAaQgTAOgLAMQgeAEgnAEQhPAGgwgFQgwgFAEguIAMguIB7iFQAagcASgjIAMgeIAFBVIg8BFQgLAMAGAQQAGAPAQADQAOABALgJQBnhqANgJQADgBAZg0QAXgwAKAAQAUAAAMAOQAVAYgUA5g");
	this.shape_112.setTransform(1122.9,666.8,0.665,0.665,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#606163","#322F2F"],[0,1],20,0,-19.9,0).s().p("AiaCtQgwgFAEguIAMguIB7iFQAagcASgjIAMgeIAFBVIg8BFQgLAMAGAQQAGAPAQADQAOABALgJQBnhqANgJQADgBAZg0QAXgwAKAAQAUAAAMAOQAVAYgUA5IgGBKQgKBQgXAgQgpAFgmAaQgTAOgLAMQgeAEgnAEQgtADgiAAQgbAAgVgCg");
	this.shape_113.setTransform(1122.9,666.8,0.665,0.665,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#201F1F").ss(3.3,1,1).p("ABqAiQAOgTAJgZQATg0gUggQgWgjg8gIQg1gIgSAPQgNAKACBFQABAiADAgIhqByIBOAMg");
	this.shape_114.setTransform(1121,661.4,0.665,0.665,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#322F2F","#606163"],[0,1],13.9,0,-13.8,0).s().p("AiKCBIBqhyQgDgggBgiQgChFANgKQASgPA1AIQA8AIAWAjQAUAggTA0QgJAZgOATIimBrg");
	this.shape_115.setTransform(1121,661.4,0.665,0.665,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#60605B").ss(3.3,1,1).p("ACxg9IAAAMQAAARgLAOQgLAOgRAEQgXAFgQANQg1AshpgBQgTAAgcgCQgggCgUgZQgUgYADgfIADgcg");
	this.shape_116.setTransform(1124.7,677.9,0.665,0.665,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],17.7,0,-17.6,0).s().p("Ag7A9QgTAAgcgCQgggCgUgZQgUgYADgfIADgcIFdgKIAAAMQAAASgLANQgLAOgRAEQgXAFgQAOQg1AqhnAAIgCAAg");
	this.shape_117.setTransform(1124.7,677.9,0.665,0.665,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#60605B").ss(2.5,1,1).p("AApCrIBalVQgeARgwAKQheAVhZgdIAzFCg");
	this.shape_118.setTransform(1115.1,652.3,0.665,0.665,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],0.6,16.3,0.6,-14.7).s().p("AhPCrIgzlCQBZAdBegVQAwgKAegRIhaFVg");
	this.shape_119.setTransform(1115.1,652.3,0.665,0.665,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BE9075").ss(2.5,1,1).p("AiHqQIg3HOIBWObIB4AAICQqwIhWjVIB0osg");
	this.shape_120.setTransform(1113.5,615.2,0.665,0.665,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,-62.1,0,69.7).s().p("AhoLZIhWubIA3nOIFFhIIh0IsIBWDVIiQKwg");
	this.shape_121.setTransform(1113.5,615.2,0.665,0.665,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#838587").ss(3.3,1,1).p("Ag5AAIBzAA");
	this.shape_122.setTransform(1074.4,656.7,0.665,0.665,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#838587").ss(3.3,1,1).p("Ag4AGIBxgL");
	this.shape_123.setTransform(1074.5,660.6,0.665,0.665,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#838587").ss(3.3,1,1).p("AgzAMIBngX");
	this.shape_124.setTransform(1072.8,663.2,0.665,0.665,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#838587").ss(3.3,1,1).p("AgrAMIBYgX");
	this.shape_125.setTransform(1071,665.6,0.665,0.665,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#838587").ss(3.3,1,1).p("AgwANIBhga");
	this.shape_126.setTransform(1068.7,668.6,0.665,0.665,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#838587").ss(3.3,1,1).p("AgoAOIBRga");
	this.shape_127.setTransform(1067.2,670.9,0.665,0.665,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#201F1F").ss(3.3,1,1).p("Ai8hPIAGBKQAKBQAXAgQApAFAmAaQATAOAKAMIBFAIQBOAGAwgFQAvgFgDguIgMguIh7iFQgagcgRgjIgMgeIgFBVIA8BFQAKAMgFAQQgGAPgRADQgNABgLgJQhphrgKgIQgDgBgZg0QgYgwgKAAQgTAAgMAOQgVAYAUA5g");
	this.shape_128.setTransform(1071.1,666.8,0.665,0.665,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#606163","#322F2F"],[0,1],-19.8,0,19.9,0).s().p("AAcCsIhFgIQgKgMgTgOQgmgagpgFQgXgggKhQIgGhKQgUg5AVgYQAMgOATAAQAKAAAYAwQAZA0ADABQAKAIBpBrQALAJANgBQARgDAGgPQAFgQgKgMIg8hFIAFhVIAMAeQARAjAaAcIB7CFIAMAuQADAugvAFQgVACgaAAQgjAAgsgDg");
	this.shape_129.setTransform(1071.1,666.8,0.665,0.665,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#201F1F").ss(3.3,1,1).p("AhpAiQgOgTgJgZQgTg0AUggQAWgjA8gIQA0gIATAPQAMAKgBBFQgBAigEAgIBqByIhOAMg");
	this.shape_130.setTransform(1073,661.4,0.665,0.665,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#322F2F","#606163"],[0,1],-13.7,0,13.8,0).s().p("AhpAiQgOgTgJgZQgTg0AUggQAWgjA8gIQA0gIATAPQAMAKgBBFQgBAigEAgIBqByIhOAMg");
	this.shape_131.setTransform(1073,661.4,0.665,0.665,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#60605B").ss(3.3,1,1).p("Aivg9IAAAMQAAARALAOQAKAOARAEQAYAFAPANQA1AsBpgBQASAAAcgCQAggCAUgZQAUgYgDgfIgDgcg");
	this.shape_132.setTransform(1069.3,677.9,0.665,0.665,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-17.5,0,17.6,0).s().p("AhiATQgPgOgYgFQgRgEgKgOQgLgNAAgSIAAgMIFbAKIADAcQADAfgUAYQgUAZggACQgcACgSAAIgCAAQhnAAg1gqg");
	this.shape_133.setTransform(1069.3,677.9,0.665,0.665,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#60605B").ss(2.5,1,1).p("AggCJIhLkRIBBAUQBOAOBIgYIgrEHg");
	this.shape_134.setTransform(1078.8,652.4,0.819,0.819,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-0.5,-12,-0.5,13).s().p("AggCJIhLkRIBBAUQBPAOBHgYIgrEHg");
	this.shape_135.setTransform(1078.8,652.4,0.819,0.819,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACHqQIA3HOIhVObIh4AAIiPqwIBVjVIh0osg");
	this.shape_136.setTransform(1080.5,615.2,0.665,0.665,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#FDE2CD","#DBA585"],[0,1],0,69.4,0,-61.7).s().p("AgPLZIiPqwIBVjVIh0osIFEBIIA3HOIhVObg");
	this.shape_137.setTransform(1080.5,615.2,0.665,0.665,0,0,180);

	this.text = new cjs.Text("הקלד את שמך", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 223;
	this.text.parent = this;
	this.text.setTransform(358,247.9,0.885,0.885);

	this.text_1 = new cjs.Text("שחקן ב", "bold 70px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 80;
	this.text_1.lineWidth = 371;
	this.text_1.parent = this;
	this.text_1.setTransform(358,125.1,0.885,0.885);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.647)").s().p("EggGAgHMAAAhANMBANAAAMAAABANg");
	this.shape_138.setTransform(358,316.2);

	this.text_2 = new cjs.Text("הקלד את שמך", "bold 30px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 36;
	this.text_2.lineWidth = 223;
	this.text_2.parent = this;
	this.text_2.setTransform(923,247.9,0.885,0.885);

	this.text_3 = new cjs.Text("שחקן א", "bold 70px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 80;
	this.text_3.lineWidth = 371;
	this.text_3.parent = this;
	this.text_3.setTransform(923,125.1,0.885,0.885);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.647)").s().p("EggGAgHMAAAhANMBANAAAMAAABANg");
	this.shape_139.setTransform(923,316.2);

	this.instance = new lib.openingStage();
	this.instance.parent = this;
	this.instance.setTransform(640.5,360,1,1,0,0,0,640.5,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_139},{t:this.text_3},{t:this.text_2},{t:this.shape_138},{t:this.text_1},{t:this.text},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.names, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.mainStage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283859").s().p("AIBOkIAFisID/gBIAACtgAh0OkIg5isIKhAAIgFCsgADQpHIg4lSIF0gCIAWFWgAsEujINwAKIA0FSIr2ACg");
	this.shape.setTransform(534,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1123").s().p("AGeOjIBaihIungOQu+gQhxgFMAlrAAAIhqDGgAKMpvIgBAFICPk6ILFAFIkAFCIpagCIrgAEg");
	this.shape_1.setTransform(672.7,96);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BADEBA").s().p("AmRFVIIegBIAihcIgZBngAGFk7IhHgjIBUAcIifI6g");
	this.shape_2.setTransform(707.8,115.3,3.221,2.169);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BADEBA").s().p("AhPkPIBXgcIhJAjICRI0g");
	this.shape_3.setTransform(468.3,104.2,3.221,2.169);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#45495D","#363849"],[0,1],-7.4,0,7.5,0).s().p("AABkrIBJAYIiTI/g");
	this.shape_4.setTransform(810,104.2,3.221,2.169);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#45495D","#363849"],[0,1],0,30,0,-29.9).s().p("AhPkPIBXgcIBIJXg");
	this.shape_5.setTransform(468.3,104.2,3.221,2.169);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#45495D","#363849"],[0,1],-4.4,0,4.5,0).s().p("AgsEsIAypXIAnAAIhKJXg");
	this.shape_6.setTransform(795.8,104.2,3.221,2.169);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#45495D","#363849"],[0,1],-4.1,0,4.1,0).s().p("AAfEsIhHpXIAiAAIAvJXg");
	this.shape_7.setTransform(484,104.2,3.221,2.169);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#45495D","#363849"],[0,1],-59.6,0,59.7,0).s().p("AoRBaIhDizISoAAIhICzg");
	this.shape_8.setTransform(641.5,19.6,3.221,2.169);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#45495D","#363849"],[0,1],-39.6,0,39.6,0).s().p("AlpAuIgihbIMXAAIgiBbg");
	this.shape_9.setTransform(636.5,179.1,3.221,2.169);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F2E39").s().p("AnZjXIOyAAIAAAHIuoADIAZGlg");
	this.shape_10.setTransform(639.8,88.2,3.221,2.169);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmsEfIgto9IOyAAIgwI9g");
	this.shape_11.setTransform(639.8,103.5,3.221,2.169);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#4B717E","#4B6F7D","#486A79","#456273","#40576B","#3A4A60","#343B55","#2F2F4A"],[0,0.333,0.498,0.627,0.741,0.839,0.925,1],-0.9,20.3,0,-0.9,20.3,40.7).s().p("Am6EsIgwpXIPUAAIgzJXg");
	this.shape_12.setTransform(639.8,104.2,3.221,2.169);

	this.instance = new lib.Path_4_1();
	this.instance.parent = this;
	this.instance.setTransform(443,364.9,2.134,2.016,0,0,0,86.5,137.3);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(436.6,334,2.134,2.016,0,0,0,89.5,152.7);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(443,348.7,2.134,2.016,0,0,0,86.5,145.3);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(443,334.6,2.134,2.016,0,0,0,86.5,152.3);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.Path_0_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(837,364.9,2.134,2.016,0,0,0,86.5,137.3);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.Path_1_0_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(843.4,334,2.134,2.016,0,0,0,89.5,152.7);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.Path_2_0_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(837,348.7,2.134,2.016,0,0,0,86.5,145.3);
	this.instance_6.alpha = 0.102;

	this.instance_7 = new lib.Path_3_0_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(837,334.6,2.134,2.016,0,0,0,86.5,152.3);
	this.instance_7.alpha = 0.102;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4967B").s().p("AiGAMIAAgXIENAAIAAAXg");
	this.shape_13.setTransform(640,486.3,2.056,1.943);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#703751").s().p("AilALIAAgVIFLAAIAAAVg");
	this.shape_14.setTransform(640,291,2.056,1.943);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#485B7F").s().p("AA0ApIgIgfIgNAcIgCABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgIgcIgKAYQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCgBIgFgVIgEAVIgCABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgKgYIgIAcQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBIgNgcIgIAfIgCABIgCgBIgSgeIgBABIgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAEgWgBgbIAGAAIAHAQIAHgQIAFAAIgKAVIAOASIgCgnIAEAAIACAjIAJgTIgJgQIAFAAIAGALIADgLIAEAAIgEAPIAGASIAAghIAFAAIAAAdIAFgTIgEgKIAFAAIACAEIABgEIAEAAIgDAKIAEANIAAgXIAFAAIAAAXIAEgNIgDgKIAEAAIABAEIACgEIAFAAIgEAKIAFATIAAgdIAFAAIAAAhIAGgSIgEgPIAEAAIADALIAGgLIAFAAIgJAQIAJATIACgjIAEAAIgCAnIAOgSIgKgVIAFAAIAHAQIAHgQIAGAAQgBAbAEAWQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBAAIgBgBIgSAeIgCABgAAuAFIAJAdIAQgbIgJgVgAhGAHIAQAbIAJgdIgQgTgAAWADIAAACIAIAaIALgZIAAgDIgKgXgAgoADIAAADIALAZIAIgaIAAgCIgJgXgAADgDIAAAFIgBACIAGAWIAJgWIAAgBIgIgbgAgQADIAAABIAJAWIAGgWIgBgCIAAgFIgGgVgABIgBQgCgQAAgQIgGAOIAIASIAAAAgAhHgBIAIgSIgGgOQAAAQgCAQg");
	this.shape_15.setTransform(640,345.4,2.056,1.943);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B34349").s().p("ABEAhIADgGIAAgDIgFgYIgQASIgBABIAHAOIgFAAIgCgFIgBAFIgFAAIABgFIgDAFIgFAAIAIgPIgIgWIgMASIAFATIgFAAIgCgHIAAAHIgFAAIAAgFIgCAFIgFAAIAIgSIAAgBIgJgUIgGATIAAABIAGATIgFAAIgBgEIAAAEIgFAAIAAgEIgBAEIgFAAIAGgTIAAgBIgGgTIgJAUIAAABIAIASIgFAAIgCgFIAAAFIgFAAIAAgHIgCAHIgFAAIAFgTIgMgSIgIAWIAIAPIgFAAIgDgFIABAFIgFAAIgBgFIgCAFIgFAAIAHgOIgBgBIgQgSIgFAYIAAADIADAGIgHAAIAAgGIgBAAIAAgBQAAgYgGgbIAAgBIgCgHIAHAAIgBAGIABABIAKARIAJgYIAIAAIANAVIAHgVIALAAIAJAQIAFgQIAJAAIAFAQIAJgQIALAAIAHAVIANgVIAIAAIAJAYIAKgRIABgBIgBgGIAHAAIgCAHIAAABQgGAbAAAYIAAABIgBAAIAAAGgAAzAKIANgPIgIgUIgFAjgAAngHIAHARQACgSAEgTgAgtAKIAHgRIgNgUQAEATACASgAgyAKIgFgjIgIAUIANAPIAAAAgABFgEIADAOIADgYgAhHAKIADgOIgGgKQACAMABAMgAAXAIIAKgQIgHgXIgDAngAgWAIIgDgnIgHAXIAKAQIAAAAgAALgMIAIARIADgigAgSAFIAIgRIgLgRQADARAAARgAADAAIAEgMIgEgOgAgGgMIAEAMIAAgag");
	this.shape_16.setTransform(640,331.3,2.056,1.943);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABNBaIgDgcIgQAVIAAADIABAEIgLAAIAEgGIgHgbIgRAXIADAKIgEAAIgBgBIAAABIgJAAIAGgKIAAgCIgKgaIgKAWIAAADIADANIgLAAIADgNIAAgDIgKgWIgKAaIAAACIAGAKIgJAAIAAgBIgBABIgEAAIADgKIgRgXIgHAbIAEAGIgLAAIABgEIAAgDIgQgVIgDAcIgGAAQgNg9ggg7IgegxQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQAAAAABABQAAAAAAAAIAUAfQAXAmAQAoIAFgXIABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABIAMAMQgLgjgNghQgKgZgBgBQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIAMAdQAPAkAKAlIANgVIACAAIACAAIAOAOQgIgjgJggIgIgaQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQACADAHAYQAKAiAHAkIANgUIACgBIACABIAOAPIgBhhQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAIAAABIAAgBQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIgBBhIAOgPIACgBIACABIANAUQAHgkAKgiQAHgYACgDQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgIAaQgJAggIAjIAOgOIACAAIACAAIANAVQAKglAPgkIAMgdQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBABgKAZQgNAhgLAjIAMgMQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABACIAFAXQAQgoAXgmQALgTAJgMQAAAAAAAAQAAgBABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgOATgQAeQggA7gNA9gABOA5IADAWQADgQAIgWgAhQBPIADgWIgOgQQAIAWADAQgAAwA2IAHAWQAEgVAGgWgAg2BMIAHgWIgRgVQAGAWAEAVgAA8BJIAOgRIgFgTgAg7BJIgJgkIgFATIAOARgAAdBHIANgTIgHgUIgGAngAgcBHIgGgnIgHAUIANATIAAAAgAAQAvIAIAWIAGgngAgXBFIAIgWIgOgRgAADBAIAIgRIgJgTgAgKAvIAIARIABgkgABIAZIgBADIAGAXIAPgSIABgBIgGgXgAhcAgIABABIAPASIAGgXIgBgDIgQgQgAAlAXIAJAaIAUgYIgMgUgAhBAZIAUAYIAJgaIgRgSgAADARIALAaIARgVIgNgWgAgeAWIARAVIALgaIgPgRg");
	this.shape_17.setTransform(640,307.9,2.056,1.943);

	this.instance_8 = new lib.Path_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(633.8,251.4,2.056,1.943,0,0,0,27.9,21.3);
	this.instance_8.alpha = 0.102;

	this.instance_9 = new lib.Path_1_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(642,252.6,2.056,1.943,0,0,0,32.3,22.3);
	this.instance_9.alpha = 0.102;

	this.instance_10 = new lib.Path_2_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(639.4,250.9,2.056,1.943,0,0,0,32.3,22.3);
	this.instance_10.alpha = 0.102;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCC39E").s().p("Al6EGIAAoLIL1AAIAAILgAllDyILLAAIAAnjIrLAAg");
	this.shape_18.setTransform(640,249.9,2.056,1.943);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCC39E").s().p("AiiBxIAAjhIFFAAIAADhgAiQBiIEhAAIAAjCIkhAAg");
	this.shape_19.setTransform(640,266.9,2.056,1.943);

	this.instance_11 = new lib.Path_3_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(638.8,249.3,2.056,1.943,0,0,0,36.9,25.4);
	this.instance_11.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D5787D").s().p("AloD6IAAnzILRAAIAAHzgAlTDmIKnAAIAAnLIqnAAg");
	this.shape_20.setTransform(640,249.9,2.056,1.943);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3E4048").s().p("AgHCtIAAlZIAPAAIAAFZg");
	this.shape_21.setTransform(676.7,251.1,2.056,1.943);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3E4048").s().p("AgHCtIAAlZIAPAAIAAFZg");
	this.shape_22.setTransform(603.4,251.1,2.056,1.943);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4967B").s().p("AgaFOIAAqbIA1AAIAAKbg");
	this.shape_23.setTransform(640,421.6,2.056,1.943);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBBC98").s().p("AgiFOIAAqbIBFAAIAAKbg");
	this.shape_24.setTransform(640,421.6,2.056,1.943);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3E4048").s().p("AhZBWIAAirICzAAIAACrg");
	this.shape_25.setTransform(640,279.7,2.056,1.943);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C4967B").s().p("AgZCyIAKljIAfAAIAKFjg");
	this.shape_26.setTransform(640,323.6,2.056,1.943);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBBC98").s().p("AgjCyIAOljIArAAIAOFjg");
	this.shape_27.setTransform(640,323.6,2.056,1.943);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcgCIALgJQAZAHAVAIIgNAJQgSgIgagHg");
	this.shape_28.setTransform(686,569.9,2.134,2.016);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAGIgCgLIA3AAIgCALg");
	this.shape_29.setTransform(642.5,563.2,2.134,2.016);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZgGIAQgIQATAMAQALIgSAGQgRgOgQgHg");
	this.shape_30.setTransform(703.4,577.7,2.134,2.016);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZAJQARgMASgLIAQAHQgYANgJAJg");
	this.shape_31.setTransform(581.4,577.7,2.134,2.016);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcAAQAagFAagEIAFALQgdADgUAEg");
	this.shape_32.setTransform(619.7,564.9,2.134,2.016);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcACIAEgLQAjAGASADIgIAJIgxgHg");
	this.shape_33.setTransform(665.2,564.9,2.134,2.016);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAEQAcgKASgGIALAKQgdAJgOAGg");
	this.shape_34.setTransform(598.8,569.9,2.134,2.016);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ab3JgIgBgBIupAAIABABIgeAAIAAgBI5fAAIAAABIgdAAIAAgBIupAAIgBABIgdAAILty/MAhNAAAILtS/gAIUFxQByApBDApQBlBAAcBQIOlAAIrSynIktAAICCEtQBwEAluCBQjjBQlDAMQglADgpAAQgnAAgmgDQlDgMjjhQQltiBBvkAICCktIktAAIrSSnIOlAAQAbhLBbg8QA+gpBngnQD6hhE0gBQEiABDyBWgAMtJTQgahLhdg7Qg8gnhqgoQjthZkjAAQkiAAjtBZQhpAog9AnQhdA7gZBLIZYAAIAAAAgAj2CIQA+AXBvAMQAlABAkAAQAmAAAlgBQBugMA+gXQBvgpABhNIrMAAQABBNBuApgAE4B3QgpAYhSAWQEfgaC5hQQEph/hgjjIh/ktInEAAIAzE5IAnAAIAEAXIgnAAIAKA+IAoAAIACALIgoAAIALBFIAqAAIACALIgqAAIALBDIArAAIACAMIgrAAIAHAuIgBAAQABA8hHApgAtcknQhhDjEpB/QC5BQEfAaQhRgXgqgXQhGgpAAg8IgBAAIAIguIgyAAIACgMIAxAAIAMhDIgwAAIACgLIAvAAIALhFIgtAAIACgLIAtAAIAKg+IgsAAIAEgXIAsAAIAzk5InDAAgAljgHIABAAIgDAMIAAACILLAAIAAgCIgDgMIABAAIgEgbIgKAAQgHgLgNgOIAUgEIAGAGIhSobIoSAAIhTIbIAGgGIAVAEQgNANgIAMIgJAAg");
	this.shape_35.setTransform(642.4,597.4,2.134,2.016);

	this.instance_12 = new lib.Group_1_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(642.6,598,2.134,2.016,0,0,0,179.8,60.5);
	this.instance_12.alpha = 0.301;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C0784E").s().p("Ai2DqIEdnUIBQAAIkGHUg");
	this.shape_36.setTransform(403.2,511.7,2.134,2.016);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B77A4A").s().p("AjBDqIEdnUIBlAAIkGHUg");
	this.shape_37.setTransform(345.3,605.5,2.134,2.016);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C4834F").s().p("AjDDqIExnUIBVAAIkaHUg");
	this.shape_38.setTransform(370.3,533.6,2.134,2.016);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C0784E").s().p("AjNDqIExnUIBrAAIkcHUg");
	this.shape_39.setTransform(308.1,627.1,2.134,2.016);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CB9059").s().p("AiiCmIDIlLIB9AAIi5FLg");
	this.shape_40.setTransform(295.4,686.6,2.134,2.016);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CB9059").s().p("AjQDrIFHnVIBaAAIkxHVg");
	this.shape_41.setTransform(334,555.7,2.134,2.016);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B77A4A").s().p("Ah/B/ICxj9IBOAAIikD9g");
	this.shape_42.setTransform(385.8,484,2.134,2.016);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C4834F").s().p("AjcDrIFInUIBwAAIkxHUg");
	this.shape_43.setTransform(266.6,649.8,2.134,2.016);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C0784E").s().p("AiLB0ICWjnICBAAIiMDng");
	this.shape_44.setTransform(262.3,696.7,2.134,2.016);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B77A4A").s().p("AhrA5IBRhxICFAAIhKBxg");
	this.shape_45.setTransform(225.4,708.4,2.134,2.016);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C4834F").s().p("AhqBHIBQiNICFAAIhKCNg");
	this.shape_46.setTransform(311.9,705.6,2.134,2.016);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C0784E").s().p("Ai6DqIEGnUIBwAAIjxHUg");
	this.shape_47.setTransform(346.3,643.8,2.134,2.016);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C4834F").s().p("AivDrIEHnUIBYAAIjwHUg");
	this.shape_48.setTransform(399.8,550.1,2.134,2.016);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C4834F").s().p("AitDqIDxnUIBqAAIjbHUg");
	this.shape_49.setTransform(382.5,621.8,2.134,2.016);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C0784E").s().p("AiAB9ICBj5ICAAAIh1D5g");
	this.shape_50.setTransform(344.9,694.7,2.134,2.016);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C0784E").s().p("AiiDqIDynUIBTAAIjbHUg");
	this.shape_51.setTransform(431.2,528.4,2.134,2.016);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B77A4A").s().p("AhjBtIB5jZIBOAAIhvDZg");
	this.shape_52.setTransform(440.2,480.3,2.134,2.016);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CB9059").s().p("AifDqIDanUIBlAAIjFHUg");
	this.shape_53.setTransform(417.8,599.9,2.134,2.016);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B77A4A").s().p("AiSC4ICrlvIB7AAIibFvg");
	this.shape_54.setTransform(378.8,682.9,2.134,2.016);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B77A4A").s().p("AiUDrIDbnUIBOAAIjFHUg");
	this.shape_55.setTransform(462.3,505.6,2.134,2.016);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C0784E").s().p("Ah0DqICZnUIBQAAIiDHUg");
	this.shape_56.setTransform(517.6,511.7,2.134,2.016);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B77A4A").s().p("Ah/DqICZnUIBmAAIiDHUg");
	this.shape_57.setTransform(487.6,605.5,2.134,2.016);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C4834F").s().p("AiBDqICunUIBVAAIiYHUg");
	this.shape_58.setTransform(491.2,533.6,2.134,2.016);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C0784E").s().p("AiMDqICunUIBrAAIiYHUg");
	this.shape_59.setTransform(456.7,627.1,2.134,2.016);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CB9059").s().p("Ah0CmIBtlLIB7AAIhcFLg");
	this.shape_60.setTransform(461.8,686.6,2.134,2.016);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CB9059").s().p("AiPDrIDEnVIBaAAIitHVg");
	this.shape_61.setTransform(461.4,555.7,2.134,2.016);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B77A4A").s().p("AhcB/IBqj9IBPAAIheD9g");
	this.shape_62.setTransform(492,484,2.134,2.016);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C4834F").s().p("AiaDrIDEnUIBxAAIiuHUg");
	this.shape_63.setTransform(422,649.8,2.134,2.016);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C0784E").s().p("AhrB0IBWjnICBAAIhMDng");
	this.shape_64.setTransform(431.7,696.7,2.134,2.016);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B77A4A").s().p("AhaA5IAwhxICFAAIgqBxg");
	this.shape_65.setTransform(398.3,708.4,2.134,2.016);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C4834F").s().p("AhWBHIApiNICEAAIgiCNg");
	this.shape_66.setTransform(483.8,705.6,2.134,2.016);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C0784E").s().p("Ah5DqICEnUIBvAAIhuHUg");
	this.shape_67.setTransform(499.9,643.8,2.134,2.016);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C4834F").s().p("AhuDrICEnUIBZAAIhuHUg");
	this.shape_68.setTransform(525.5,550.1,2.134,2.016);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C4834F").s().p("AhsDqIBvnUIBpAAIhYHUg");
	this.shape_69.setTransform(529.5,621.8,2.134,2.016);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C0784E").s().p("AhdB9IA7j5ICAAAIgwD5g");
	this.shape_70.setTransform(513.7,694.7,2.134,2.016);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C0784E").s().p("AhgDqIBunUIBTAAIhYHUg");
	this.shape_71.setTransform(550.6,528.4,2.134,2.016);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B77A4A").s().p("AhFBtIA9jZIBOAAIgzDZg");
	this.shape_72.setTransform(545.3,480.3,2.134,2.016);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CB9059").s().p("AheDqIBZnUIBkAAIhDHUg");
	this.shape_73.setTransform(558.4,599.9,2.134,2.016);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B77A4A").s().p("AhfC4IBGlvIB5AAIg0Fvg");
	this.shape_74.setTransform(544.1,682.9,2.134,2.016);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B77A4A").s().p("AhTDrIBYnUIBPAAIhDHUg");
	this.shape_75.setTransform(574.9,505.6,2.134,2.016);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C0784E").s().p("AgyDqIAWnUIBPAAIAAHUg");
	this.shape_76.setTransform(632.1,511.7,2.134,2.016);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B77A4A").s().p("Ag9DqIAWnUIBkAAIABHUg");
	this.shape_77.setTransform(629.8,605.5,2.134,2.016);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C4834F").s().p("Ag/DqIArnUIBUAAIgVHUg");
	this.shape_78.setTransform(612.1,533.6,2.134,2.016);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C0784E").s().p("AhKDqIArnUIBqAAIgVHUg");
	this.shape_79.setTransform(605.4,627.1,2.134,2.016);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CB9059").s().p("AhFCmIAPlLIB8AAIAAFLg");
	this.shape_80.setTransform(628.2,686.6,2.134,2.016);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CB9059").s().p("AhNDrIBCnVIBZAAIgrHVg");
	this.shape_81.setTransform(588.9,555.7,2.134,2.016);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B77A4A").s().p("Ag4B/IAjj9IBOAAIgYD9g");
	this.shape_82.setTransform(598.2,484,2.134,2.016);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C4834F").s().p("AhYDrIBBnUIBwAAIgrHUg");
	this.shape_83.setTransform(577.4,649.8,2.134,2.016);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C0784E").s().p("AhKB0IAVjnICAAAIgKDng");
	this.shape_84.setTransform(601,696.7,2.134,2.016);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B77A4A").s().p("AhKA5IAQhxICFAAIgKBxg");
	this.shape_85.setTransform(571.1,708.4,2.134,2.016);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C4834F").s().p("AhFBHIAAiNICFAAIAGCNg");
	this.shape_86.setTransform(656.6,705.6,2.134,2.016);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C0784E").s().p("AhCDqIABnUIBuAAIAWHUg");
	this.shape_87.setTransform(655.9,643.8,2.134,2.016);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C4834F").s().p("Ag3DrIABnUIBYAAIAVHUg");
	this.shape_88.setTransform(653.6,550.1,2.134,2.016);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C4834F").s().p("Ag1DqIgUnUIBoAAIArHUg");
	this.shape_89.setTransform(679.1,621.8,2.134,2.016);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C0784E").s().p("Ag/B9IgLj5IB/AAIAWD5g");
	this.shape_90.setTransform(683.7,694.7,2.134,2.016);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C0784E").s().p("AgqDqIgUnUIBTAAIAqHUg");
	this.shape_91.setTransform(672.3,528.4,2.134,2.016);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B77A4A").s().p("AgrBtIAAjZIBNAAIALDZg");
	this.shape_92.setTransform(651.4,480.3,2.134,2.016);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CB9059").s().p("AgnDqIgrnUIBkAAIBBHUg");
	this.shape_93.setTransform(701.3,599.9,2.134,2.016);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B77A4A").s().p("Ag1C4IghlvIB5AAIA0Fvg");
	this.shape_94.setTransform(711.2,682.9,2.134,2.016);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B77A4A").s().p("AgcDrIgrnUIBOAAIBBHUg");
	this.shape_95.setTransform(689.8,505.6,2.134,2.016);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C0784E").s().p("AAEDqIhtnUIBQAAICDHUg");
	this.shape_96.setTransform(748.8,511.7,2.134,2.016);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B77A4A").s().p("AgGDqIhunUIBmAAICDHUg");
	this.shape_97.setTransform(774.4,605.5,2.134,2.016);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C4834F").s().p("AgIDqIhZnUIBVAAIBuHUg");
	this.shape_98.setTransform(735.3,533.6,2.134,2.016);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C0784E").s().p("AgTDqIhZnUIBrAAIBuHUg");
	this.shape_99.setTransform(756.4,627.1,2.134,2.016);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CB9059").s().p("AgeCmIhOlLIB8AAIBdFLg");
	this.shape_100.setTransform(796.3,686.6,2.134,2.016);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CB9059").s().p("AgWDrIhDnVIBZAAIBZHVg");
	this.shape_101.setTransform(718.7,555.7,2.134,2.016);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B77A4A").s().p("AgaB/Igkj9IBNAAIAwD9g");
	this.shape_102.setTransform(705.6,484,2.134,2.016);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C4834F").s().p("AghDrIhDnUIBwAAIBZHUg");
	this.shape_103.setTransform(735.2,649.8,2.134,2.016);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C0784E").s().p("AgvB0IgsjnICAAAIA3Dng");
	this.shape_104.setTransform(771.5,696.7,2.134,2.016);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B77A4A").s().p("Ag9A5IgQhxICFAAIAWBxg");
	this.shape_105.setTransform(744.6,708.4,2.134,2.016);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C4834F").s().p("AgxBHIgoiNICEAAIAvCNg");
	this.shape_106.setTransform(828.6,705.6,2.134,2.016);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C0784E").s().p("AAADqIiDnUIBvAAICYHUg");
	this.shape_107.setTransform(809.5,643.8,2.134,2.016);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C4834F").s().p("AAKDrIiCnUIBZAAICYHUg");
	this.shape_108.setTransform(779.4,550.1,2.134,2.016);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C4834F").s().p("AAMDqIiXnUIBqAAICtHUg");
	this.shape_109.setTransform(826.2,621.8,2.134,2.016);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C0784E").s().p("AgcB9IhSj5IB/AAIBeD5g");
	this.shape_110.setTransform(852.5,694.7,2.134,2.016);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C0784E").s().p("AAXDqIiXnUIBUAAICtHUg");
	this.shape_111.setTransform(791.7,528.4,2.134,2.016);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B77A4A").s().p("AgNBtIg8jZIBMAAIBHDZg");
	this.shape_112.setTransform(756.5,480.3,2.134,2.016);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CB9059").s().p("AAaDqIiunUIBlAAIDEHUg");
	this.shape_113.setTransform(841.9,599.9,2.134,2.016);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B77A4A").s().p("AAAC4IiKlvIB7AAICZFvg");
	this.shape_114.setTransform(876.5,682.9,2.134,2.016);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B77A4A").s().p("AAlDrIiunUIBPAAIDEHUg");
	this.shape_115.setTransform(802.4,505.6,2.134,2.016);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C0784E").s().p("ABGDqIjxnUIBQAAIEHHUg");
	this.shape_116.setTransform(863.2,511.7,2.134,2.016);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B77A4A").s().p("AA7DqIjxnUIBmAAIEHHUg");
	this.shape_117.setTransform(916.6,605.5,2.134,2.016);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C4834F").s().p("AA5DqIjcnUIBVAAIDyHUg");
	this.shape_118.setTransform(856.3,533.6,2.134,2.016);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C0784E").s().p("AAuDqIjcnUIBrAAIDyHUg");
	this.shape_119.setTransform(905.1,627.1,2.134,2.016);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CB9059").s().p("AAPCmIiplLIB8AAIC5FLg");
	this.shape_120.setTransform(962.6,686.6,2.134,2.016);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CB9059").s().p("AArDrIjFnVIBaAAIDbHVg");
	this.shape_121.setTransform(846.1,555.7,2.134,2.016);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B77A4A").s().p("AAIB/Ihqj9IBOAAIB3D9g");
	this.shape_122.setTransform(811.8,484,2.134,2.016);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C4834F").s().p("AAgDrIjFnUIBwAAIDbHUg");
	this.shape_123.setTransform(890.6,649.8,2.134,2.016);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C0784E").s().p("AgPB0IhsjnICAAAIB3Dng");
	this.shape_124.setTransform(940.9,696.7,2.134,2.016);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B77A4A").s().p("AgtA5IgwhxICFAAIA2Bxg");
	this.shape_125.setTransform(917.4,708.4,2.134,2.016);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C4834F").s().p("AgdBHIhQiNICEAAIBXCNg");
	this.shape_126.setTransform(1000.6,705.6,2.134,2.016);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C0784E").s().p("ABBDqIkGnUIBvAAIEcHUg");
	this.shape_127.setTransform(963.2,643.8,2.134,2.016);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C4834F").s().p("ABMDrIkGnUIBZAAIEcHUg");
	this.shape_128.setTransform(905.2,550.1,2.134,2.016);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C4834F").s().p("ABODqIkbnUIBqAAIExHUg");
	this.shape_129.setTransform(973.2,621.8,2.134,2.016);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C0784E").s().p("AAGB9IiXj5ICBAAICiD5g");
	this.shape_130.setTransform(1021.2,694.7,2.134,2.016);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C0784E").s().p("ABZDqIkbnUIBUAAIExHUg");
	this.shape_131.setTransform(911,528.4,2.134,2.016);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B77A4A").s().p("AAQBtIh4jZIBOAAICDDZg");
	this.shape_132.setTransform(861.5,480.3,2.134,2.016);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CB9059").s().p("ABcDqIkynUIBlAAIFIHUg");
	this.shape_133.setTransform(982.5,599.9,2.134,2.016);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B77A4A").s().p("AAyC4IjvlvIB7AAIEAFvg");
	this.shape_134.setTransform(1041.7,682.9,2.134,2.016);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B77A4A").s().p("ABnDrIkxnUIBOAAIFHHUg");
	this.shape_135.setTransform(915,505.6,2.134,2.016);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C18750").s().p("A//KJIOB0RMAjxAAAIONURg");
	this.shape_136.setTransform(645.2,589.2,2.134,2.016);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#614830").s().p("EghKAKbIOi01MAlFAAAIOuU1g");
	this.shape_137.setTransform(640,585.5,2.134,2.016);

	this.instance_13 = new lib.Group_0_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(976.3,546.4,2.134,2.016,0,0,0,15.4,31.4);
	this.instance_13.alpha = 0.199;

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#141520").s().p("Av0tbIBrAAId+X6IAAC9g");
	this.shape_138.setTransform(992.3,515.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#22243D").s().p("Av0ysIAAkAIfpa3IgFSig");
	this.shape_139.setTransform(992.3,574.7);

	this.instance_14 = new lib.Group_3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(303.9,546.4,2.134,2.016,0,0,0,15.3,31.4);
	this.instance_14.alpha = 0.199;

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#141520").s().p("Av0KfId/36IBrAAI/qa3g");
	this.shape_140.setTransform(287.8,515.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#22243D").s().p("Av0ELIfq63IAAEAMgflApZg");
	this.shape_141.setTransform(287.8,574.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373945").s().p("AzMALIATgXMAltAAAIAZAZg");
	this.shape_142.setTransform(640.7,427.2,2.134,2.016);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#1E2030").s().p("EgnZAB6IAAjzMBOzAAAIAADzg");
	this.shape_143.setTransform(640,441.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#22243D").s().p("Ag/K2IiK3cIBtAOIEnY/g");
	this.shape_144.setTransform(870.6,286.9,2.134,2.016);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#22243D").s().p("ABdsYIBtgNIiKXaIkKByg");
	this.shape_145.setTransform(409.4,286.9,2.134,2.016);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#30445A").s().p("EgkyAZnMADWgxAQQNiNRPAAQQ8AAQECIMADyAxFg");
	this.shape_146.setTransform(640.2,277.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3B4858").s().p("EhG3AvYMAAAhTIQM/lbSQjDQS1jJUzAAQUrAAS3DGQSZDBM9FUMAAABTUg");
	this.shape_147.setTransform(640,416.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#353C66").s().p("EhG3AuzMAAAhTHQMelOSxisQR7ikVtAAQVmAAR8ChQS6CpMcFIMAAABTTg");
	this.shape_148.setTransform(640,390.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#17182A").s().p("EghNAb6MAAAg3zMBCbAAAMAAAA3zg");
	this.shape_149.setTransform(640,360,2.134,2.016);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#2C4459").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_150.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.instance_14},{t:this.shape_139},{t:this.shape_138},{t:this.instance_13},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_12},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_11},{t:this.shape_19},{t:this.shape_18},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainStage, new cjs.Rectangle(0,0,1280,720), null);


(lib.HORAOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.exitBTN();
	this.instance.parent = this;
	this.instance.setTransform(195.5,139.6,2.25,2.25);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.exitBTN(), 3);

	this.text = new cjs.Text("איך משחקים", "bold 55px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 63;
	this.text.lineWidth = 425;
	this.text.parent = this;
	this.text.setTransform(1099.4,105.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EhMlAFuIAArbMCZLAAAIAALbg");
	this.shape.setTransform(640.6,139.5);

	this.text_1 = new cjs.Text("עליכם לענות נכון על כמה שיותר שאלות ובכמה שפחות זמן \nהצד המואר הוא הצד של השחקן שתורו לשחק\nהזמן המוקצב לכל שאלה יופיע בחלק העליון של המסך \nאם לא יהיה מענה בזמן המוקצב – השאלה תיספר כטעות \nכדי לענות על שאלה בחרו את הכדור הנמצא מעל התשובה הרצויה, ולאחר מכן לחצו על \"בדוק תשובה\"\nכל תשובה נכונה תוסיף כדור אל מערום הכדורים שלכם", "25px 'Arial'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 53;
	this.text_1.lineWidth = 869;
	this.text_1.parent = this;
	this.text_1.setTransform(1099.4,200.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.647)").s().p("EhMlAoLMAAAhQVMCZLAAAMAAABQVg");
	this.shape_1.setTransform(640.6,360);

	this.instance_1 = new lib.openingStage();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640.5,360,1,1,0,0,0,640.5,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.text_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HORAOT, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.player2throw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgaARIA0gh");
	this.shape.setTransform(61.6,305.8,0.619,0.619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_1.setTransform(59.5,303.7,0.619,0.619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_2.setTransform(56.8,301.4,0.619,0.619);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_3.setTransform(55.1,299,0.619,0.619);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_4.setTransform(54.7,296,0.619,0.619);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_5.setTransform(55.3,293.2,0.619,0.619);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhvQBCBHgHBrIBLBEQBPA/AOgWQAPgWhLg/IhMg5IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAdQgMAPgHANg");
	this.shape_6.setTransform(58,297.4,0.619,0.619);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.4,1.4,-17.8).s().p("AAUCHIhLhEQAHhrhChHQAHgNAMgPQAWgdAUgJQATgJATAMQAJAGAFAIIgWDCIBMA5QBLA/gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_7.setTransform(58,297.4,0.619,0.619);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgdgJglQgFgShZhHIhZhDIg2hSQgMgbgSgbQgig1gZABQgpABgWgNg");
	this.shape_8.setTransform(53.2,300.5,0.619,0.619);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAiA1QASAbAMAbIA2BSIBZBDQBZBHAFASQAJAlgcAdQgVAVglAAQgeAAgogOg");
	this.shape_9.setTransform(53.2,300.5,0.619,0.619);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhSgrhVhAQgSgOgFgWQgEgWAKgTg");
	this.shape_10.setTransform(53,306.3,0.619,0.619);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.2).s().p("Ag+BVQhSgrhVhAQgSgOgFgWQgEgWAKgTIAbgxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_11.setTransform(53,306.3,0.619,0.619);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2C2C2C").ss(3,1,1).p("AC1hyQgpgKikAyQikAygcAdQgDAjALApQAGAWAGANQAJgPAdgUQA6gpBlggQBEgUA3gHQAqgGAfADQALAAAGgIQAGgJgDgJQgMgfgYgjg");
	this.shape_12.setTransform(21.8,33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6D638").s().p("AjQBRQgLgpADgjQAcgdCkgyQCkgyApAKQAYAjAMAfQADAJgGAJQgGAIgLAAQgfgDgqAGQg3AHhEAUQhlAgg6ApQgdAUgJAPQgGgNgGgWg");
	this.shape_13.setTransform(21.8,33.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BE9075").ss(3,1,1).p("ABABDIgwAHQgbAEgXgRQgYgRgEgdQgFgcASgYQARgYAcgEIA8gJ");
	this.shape_14.setTransform(24.5,46.8,0.619,0.619);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("Ai7hMQgMAzARA/QAQA8AjA3QAiA2ApAfQAqAgAjgFQgXhkBAgwIgUADQgSACgOgKQgNgLgDgSQgDgSAKgPQAKgOASgDIAmgGIAMBFIAPgXIgXiZIgWgQQgNgLADgRQADgQARgEIBtgVQAZgFAAgVQAAgVgVgSQgngggsgCQg1gDgkAwQgmAAgrASQhWAkgUBZg");
	this.shape_15.setTransform(21.3,39.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag4DuQgpgfgig2Qgjg3gQg8QgRg/AMgzQAUhZBWgkQArgSAmAAQAkgwA1ADQAsACAnAgQAVASAAAVQAAAVgZAFIhtAVQgRAEgDAQQgDARANALIAWAQIAXCZIgPAXIgMhFIgmAGQgSADgKAOQgKAPADASQADASANALQAOAKASgCIAUgDQhAAwAXBkIgLAAQgeAAgkgbg");
	this.shape_16.setTransform(21.3,39.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5F4137").s().p("AAMAMQgZgEgSgLIA8gKIADAaIgDABIgRgCg");
	this.shape_17.setTransform(43.7,55.8,0.619,0.619);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHARQgGgGgBgJQgBgIADgHQADgHAHgBQAFgBAGAGQAFAGABAJQABAIgDAHQgDAHgHABIgBAAQgFAAgEgFg");
	this.shape_18.setTransform(39.8,42.9,0.619,0.619);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgXAiQgNgKgCgSQgDgQAJgPQAKgOAQgCQAQgDAOALQANAKACASQADAQgJAPQgKAOgQACIgHABQgMAAgLgJg");
	this.shape_19.setTransform(39,43.6,0.619,0.619);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAcIgEgBIgJgBIgIAAIgBgCIgCgGIgCgKIAAgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIADAAIAHgHIALgGIALgFIALgDIAXgFIATAAIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAEAEIAFAHIADAGIABACIgPARQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIgQAAIgRADIgOAGIgGAEIgFADIgBABIAAABIgBAAg");
	this.shape_20.setTransform(38.2,37.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BE9075").ss(2,1,1).p("AAMF7ICugaQAhgFAUgbQAUgbgFgiIgXi4IA7gJQAYgDAJgXQAJgXgPgTIhsiDIhhjNIjXgtQhrARhABZQhBBZARBtIAkDpQAQBtBYBCQBYBCBqgRg");
	this.shape_21.setTransform(31.2,43.3,0.619,0.619);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-5.3,-38.9,6.3,37.2).s().p("Ai2FKQhYhCgQhtIgkjpQgRhtBBhZQBAhZBrgRIDXAtIBhDNIBsCDQAPATgJAXQgJAXgYADIg7AJIAXC4QAFAigUAbQgUAbghAFIiuAaQgVAEgUAAQhTAAhGg1g");
	this.shape_22.setTransform(31.2,43.3,0.619,0.619);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D6D638").ss(6,1,1).p("ACEENQgygIg4glQhwhIghiLQghiJA7hWQASgbAagTIAWgN");
	this.shape_23.setTransform(35.2,91,0.619,0.619);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhWmoIAJADADyCfImLg+QhVgOhPAkIhiArIgWANQgZATgTAbQg7BWAhCKQAhCLBxBIQA5AlAyAIIBljfQANgcAagRQAagRAfAAIHCAAQBHAAAlg9QAlg+gjg/Imir9QgsgqgagoQgYgkgFgbQgCgKgIgGQgJgGgKACQgJACgGAHQgFAHAAAKQADA6BFBYQhZgvgnhiQgGgOgPgFQgQgFgNAKQgIAGgEAKQgDAKADAKQAYBMBfBLQhYg9g9g7QgKgJgNgBQgOgBgLAIQgOAJgCASQgCARAMANQBtByBGAcQhHgahJhIQgIgIgKAAQgLgBgJAGQgLAIgCANQgBAOAJAJQAwA0BaAvQAsAXAjANIhDgBQgSgBgJAQQgKAPAJAQQAJAPASABIC4ADIBvCfIAaDmgAE3DvIhFhQ");
	this.shape_24.setTransform(59.2,64.3,0.619,0.619);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.1,0,-70.1).s().p("AlpKQQhxhIghiLQghiKA7hWQATgbAZgTIAWgNIBigrQBPgkBVAOIGLA+IBFBQIhFhQIgtg0IgajmIhvifIi4gDQgSgBgJgPQgJgQAKgPQAJgQASABIBDABQgjgNgsgXQhagvgwg0QgJgJABgOQACgNALgIQAJgGALABQAKAAAIAIQBJBIBHAaQhGgchthyQgMgNACgRQACgSAOgJQALgIAOABQANABAKAJQA9A7BYA9QhfhLgYhMQgDgKADgKQAEgKAIgGQANgKAQAFQAPAFAGAOQAnBiBZAvQhFhYgDg6QAAgKAFgHQAGgHAJgCQAKgCAJAGQAIAGACAKQAFAbAYAkQAaAoAsAqIGiL9QAjA/glA+QglA9hHAAInCAAQgfAAgaARQgaARgNAcIhlDfQgygIg5glgAhNmlIgJgDg");
	this.shape_25.setTransform(59.2,64.3,0.619,0.619);

	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(35.6,0,0.825,0.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D6D638").ss(6,1,1).p("ACfAFIk9gI");
	this.shape_26.setTransform(26.2,72.1,0.619,0.619);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3.5,1,1).p("AB9lpIjlgGQhKgDgrA3QgsA3AMBRIA4FlIAGCNIAeAQQAnASAvAIQCYAbC0hMIgHlmg");
	this.shape_27.setTransform(31.8,108.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#575700","#000000"],[0,1],-25.6,0,25.7,0).s().p("AhLFpQgvgIgngSIgegQIgGiNIg4llQgMhRAsg3QArg3BKADIDlAGIB9E7IAHFmQiFA4h3AAQgoAAgogHg");
	this.shape_28.setTransform(31.8,108.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEYDIIgvqEIiUgaIgtJVIkjAOIgcAOIBvE8IE6hTQA/gRAmg1QAmg1gFhBg");
	this.shape_29.setTransform(48.6,59.5,0.619,0.619);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,47.1,0,-47.1).s().p("AkXCbIAcgOIEjgOIAtpVICUAaIAvKEQAFBBgmA1QgmA1g/ARIk6BTg");
	this.shape_30.setTransform(48.6,59.5,0.619,0.619);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(2.5,1,1).p("AinjPIgbE1ID6BqICLlzg");
	this.shape_31.setTransform(27.8,72.4,0.619,0.619);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,20.9,0,-20.8).s().p("AjCBmIAbk1IFpAsIiKFzg");
	this.shape_32.setTransform(27.8,72.4,0.619,0.619);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3.5,1,1).p("AjSAQIAAgnIGlgsIgICAQgQAEgmACQhKAEhqgKQhrgJgvgTQgPgGgHgGg");
	this.shape_33.setTransform(34.4,144);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#575700","#000000"],[0,1],-21.1,0,21.1,0).s().p("AgfA9QhrgJgvgTQgOgGgIgGIgDgFIAAgnIGlgsIgICAQgRAEgkACIgrABQg9AAhNgHg");
	this.shape_34.setTransform(34.4,144);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#D6D638").ss(6,1,1).p("AEPh2QjGCAi/BEQg8AUg0ANIgoAI");
	this.shape_35.setTransform(52.7,211.9,0.619,0.619);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#D6D638").ss(6,1,1).p("AjvmuIAJAvQAOA8AVBAQBFDNB3CkQCCC0B1CN");
	this.shape_36.setTransform(53.1,179.4,0.619,0.619);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3.5,1,1).p("Ai6BFQhKg1gdhVQgfhZAdhdIAkh0IGcAtIgICVIAVAZQAZAhAWAqQBHCEASCiQh7BQh3AqQglANgfAIIgZAEg");
	this.shape_37.setTransform(38.9,182.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#575700","#000000"],[0,1],-30.6,0,30.6,0).s().p("Ai6BFQhKg1gdhVQgfhZAdhdIAkh0IGcAtIgICVIAVAZQAZAhAWAqQBHCEASCiQh7BQh3AqQglANgfAIIgZAEg");
	this.shape_38.setTransform(38.9,182.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#838587").ss(4,1,1).p("AgZARIA0gh");
	this.shape_39.setTransform(36.5,297.1,0.619,0.619);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_40.setTransform(34.3,295.1,0.619,0.619);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_41.setTransform(31.6,292.8,0.619,0.619);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_42.setTransform(29.9,290.3,0.619,0.619);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_43.setTransform(29.6,287.3,0.619,0.619);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_44.setTransform(30.2,284.5,0.619,0.619);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhuQBDBFgIBsIBLBEQBPA/AOgWQAPgWhKg+IhNg6IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAeQgMAPgHANg");
	this.shape_45.setTransform(32.8,288.8,0.619,0.619);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.5,1.4,-17.7).s().p("AAUCHIhLhEQAIhshDhFQAHgNAMgPQAWgeAUgJQATgJATAMQAJAGAFAIIgWDCIBNA6QBKA+gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_46.setTransform(32.8,288.8,0.619,0.619);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgegJgkQgFgShZhHIhZhDIg2hSQgMgbgRgbQgjg1gZABQgpABgWgNg");
	this.shape_47.setTransform(28.1,291.8,0.619,0.619);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAjA1QARAbAMAbIA2BSIBZBDQBZBHAFASQAJAkgcAeQgVAVglAAQgeAAgogOg");
	this.shape_48.setTransform(28.1,291.8,0.619,0.619);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhTgshUhAQgSgNgEgWQgFgWALgTg");
	this.shape_49.setTransform(27.8,297.6,0.619,0.619);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.3).s().p("Ag+BVQhTgshUhAQgSgNgEgWQgFgWALgTIAagxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgGgRIANARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_50.setTransform(27.8,297.6,0.619,0.619);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#60605B").ss(3,1,1).p("AiHCTIBGlEIA8AnQBJAmBFgFIidEbg");
	this.shape_51.setTransform(25.5,275.8,0.619,0.619);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-13.6,0,13.7,0).s().p("AiHCTIBFlEIA8AnQBJAmBGgFIieEbg");
	this.shape_52.setTransform(25.5,275.8,0.619,0.619);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#60605B").ss(3,1,1).p("AhrCpIAGlqIBFAWQBPAUA9gLIhsFkg");
	this.shape_53.setTransform(50.1,286.9,0.619,0.619);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.8,0,10.8,0).s().p("AhrCoIAGlpIBFAWQBPAUA9gLIhsFkg");
	this.shape_54.setTransform(50.1,286.9,0.619,0.619);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D6D638").ss(6,1,1).p("AiIA+QBOgGBpg6IBag7");
	this.shape_55.setTransform(33.9,215.5,0.619,0.619);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(3.5,1,1).p("AiRjOIAiCgQArCvAtBNQAvgDBCglIA4gkg");
	this.shape_56.setTransform(27.8,198.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#575700","#000000"],[0,1],-14.5,0,14.6,0).s().p("AhvguIgiifIEjFPIg4AkQhCAmgvACQgthNgrivg");
	this.shape_57.setTransform(27.8,198.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjNqIIBhGkIhhBqIgXPFIBrAZIFex9IhUpKg");
	this.shape_58.setTransform(57.6,245.2,0.619,0.619);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,86.9,0,-86.8).s().p("AjkNLIAXvFIBhhqIhhmkIFejbIBUJKIleR9g");
	this.shape_59.setTransform(57.6,245.2,0.619,0.619);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhqnAICKCYIioCFIiuMrIBzAfIH6uOIh+m/g");
	this.shape_60.setTransform(36.3,244.8,0.619,0.619);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67.9,0,-67.9).s().p("Ak2KIICusrICoiFIiKiYIEjjmIB+G/In6OOg");
	this.shape_61.setTransform(36.3,244.8,0.619,0.619);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2throw2, new cjs.Rectangle(-1.5,0,94.1,317.5), null);


(lib.player2throw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape.setTransform(79.4,285.2,0.576,0.576);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_1.setTransform(75.7,284.1,0.576,0.576);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_2.setTransform(71.3,282.8,0.576,0.576);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_3.setTransform(68,281,0.576,0.576);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AgnAKIBPgT");
	this.shape_4.setTransform(65.9,277.9,0.576,0.576);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_5.setTransform(64.7,274.8,0.576,0.576);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBnA6BBB5ICMAnQCOAhgCgfQgDgeiFgiIiFgbIhwjfQgJgHgLgEQgWgIgLAQQgKARgDApQgCAVABASg");
	this.shape_6.setTransform(72.3,277.2,0.576,0.576);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],4.5,21.3,-6.4,-20.5).s().p("ABVCbIiMgnQhBh5hng6QgBgSACgVQADgpAKgRQALgQAWAIQALAEAJAHIBwDfICFAbQCFAiADAeQABAPghAAQgiAAhKgRg");
	this.shape_7.setTransform(72.3,277.2,0.576,0.576);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBVAiCDgHQCUgOANg9QAEgWgOgYQgLgUgRgMQgWgQihgkIibgfIhuhGQgagbgegZQg8gygUAJQgiAOgKgNg");
	this.shape_8.setTransform(70.8,282.7,0.576,0.576);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.4,-8.7,-26.5).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIADAQQAKANAigOQAUgJA8AyQAeAZAaAbIBuBGICbAfQChAkAWAQQARAMALAUQAOAYgEAWQgNA9iUAOIgrABQhmAAhHgcg");
	this.shape_9.setTransform(70.8,282.7,0.576,0.576);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AliiGIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgugPgagLQgvgUAEgYg");
	this.shape_10.setTransform(71,288.8,0.576,0.576);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.2,17,-5.7,-21.1).s().p("AgRCBQiSgPh0goQgugPgagLQgvgUAEgYIAoiKIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh3AAQgyAAg3gGg");
	this.shape_11.setTransform(71,288.8,0.576,0.576);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D6D638").ss(6,1,1).p("ACWExQg5gKhAgpQh/hSglidQgmibBEhiQAVgeAcgVIAZgP");
	this.shape_12.setTransform(40.4,82.3,0.576,0.576);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BE9075").ss(2.5,1,1).p("AESEtIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQhLAphKgrInTkGIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIAtCKAFOlBIgGgJAi2FZIhLgq");
	this.shape_13.setTransform(64.3,71.9,0.576,0.576);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,62.8,0,-62.8).s().p("AEdJfInTkGIhLgqIBLAqIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQglAUglAAQgmAAglgWgAE/G3IgtiKgAFOlBIgGgJg");
	this.shape_14.setTransform(64.3,71.9,0.576,0.576);

	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(65.3,19,0.825,0.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2C2C2C").ss(3,1,1).p("AC+h4QgrgKisA0QiuA0gdAfQgDAlAMAsQAGAWAGAOQAJgPAfgWQA9grBqghQB+gnBRAGQALABAHgJQAHgJgEgKQgNgigZgjg");
	this.shape_15.setTransform(26.3,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D6D638").s().p("AjbBWQgMgsADglQAdgfCug0QCsg0ArAKQAZAjANAiQAEAKgHAJQgHAJgLgBQhRgGh+AnQhqAhg9ArQgfAWgJAPQgGgOgGgWg");
	this.shape_16.setTransform(26.3,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BE9075").ss(3,1,1).p("ABIBMIg1AIQgfAFgbgUQgagUgFggQgFggATgbQATgbAhgFIBEgK");
	this.shape_17.setTransform(29.2,35.7,0.576,0.576);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("AjGhRQgMA2ATBDQAQA+AlA6QAkA6AqAgQAtAiAkgFQgXhqBDgyIgVADQgSADgPgMQgPgLgDgTQgCgTAJgQQAMgPASgDIAogGIANBJIAQgZIgZihIgXgRQgOgLAEgSQAEgRARgEIBzgWQAagFAAgXQAAgWgWgTQgpgigugCQg4gDgmAzQgoAAguATQhaAlgWBeg");
	this.shape_18.setTransform(25.8,28);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag8D6Qgqgggkg6Qglg6gQg+QgThDAMg2QAWheBaglQAugTAoAAQAmgzA4ADQAuACApAiQAWATAAAWQAAAXgaAFIhzAWQgRAEgEARQgEASAOALIAXARIAZChIgQAZIgNhJIgoAGQgSADgMAPQgJAQACATQADATAPALQAPAMASgDIAVgDQhDAyAXBqIgKABQggAAgngeg");
	this.shape_19.setTransform(25.8,28);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F4137").s().p("AANANQgcgEgVgNIBEgKIAFAdIgEAAQgJAAgLgCg");
	this.shape_20.setTransform(49.4,45.2,0.576,0.576);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAUQgGgHgBgKQgCgKAEgHQAEgJAHgBQAGgBAGAGQAGAHACAKQACAKgEAIQgEAIgHABIgCAAQgFAAgGgFg");
	this.shape_21.setTransform(45.3,31.6,0.576,0.576);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgZAnQgQgMgDgUQgDgTALgQQALgQATgDQARgDAPAMQAQAMADAUQADATgLAQQgLAQgTADIgGABQgOAAgMgKg");
	this.shape_22.setTransform(44.4,32.4,0.576,0.576);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAbIgFAAIgPAAIgBgCIgCgGIgBgKIAAgFQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIADgCIAIgGIAKgGIAMgFIAXgHIALgBIAVgBIACgBIADABIAJALIAEAHIgFAHIgGAFIgEADQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgBIgQABIgJABIgKACIgHADIgHADIgHAEIgFAEIgCACIAAABIgBgBg");
	this.shape_23.setTransform(43.7,26.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BE9075").ss(2,1,1).p("AAOGtIDEgeQAlgFAXgfQAXgfgFgmIgajRIBCgJQAbgEALgaQAKgbgRgVIh7iUIhtjoIj0gyQh5AShJBlQhIBkASB8IApEIQATB8BjBKQBjBLB5gTg");
	this.shape_24.setTransform(36.2,32,0.576,0.576);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-6,-44.1,7.1,42.1).s().p("AjOF1QhjhKgTh8IgpkIQgSh8BIhkQBJhlB5gSID0AyIBtDoIB7CUQARAVgKAbQgLAagbAEIhCAJIAaDRQAFAmgXAfQgXAfglAFIjEAeQgYAEgXAAQheAAhPg8g");
	this.shape_25.setTransform(36.2,32,0.576,0.576);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D6D638").ss(6,1,1).p("AC0AFIlngJ");
	this.shape_26.setTransform(30.9,62.4,0.576,0.576);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3.5,1,1).p("ABqlcIiagGQhMgDg5A1Qg4A0gDBNIgLFTIgVCFIAeAQQApATA1ALQCnAhDbg+IAjkag");
	this.shape_27.setTransform(30.7,97.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#575700","#000000"],[0,1],0,35.4,0,-35.5).s().p("AiUFXQg0gLgpgTIgfgQIAWiFIAKlTQADhNA5g0QA4g1BMADICbAGICmF8IgjEaQiPAph4AAQhBAAg6gMg");
	this.shape_28.setTransform(30.7,97.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlfgMIEsCLIFno/ICHBoIkkKeQgeBEhCAhQhBAhhIgQIlohSIA3l2");
	this.shape_29.setTransform(64.1,69,0.576,0.576);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,44.9,0,-44.8).s().p("AhSG8IlohSIA3l2IAkAAIEsCLIFno/ICHBoIkkKeQgeBEhCAhQgsAWguAAQgXAAgYgFg");
	this.shape_30.setTransform(64.1,69,0.576,0.576);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(2.5,1,1).p("Ai9jrIgeFfIEaB4ICdmkg");
	this.shape_31.setTransform(32.6,62.7,0.576,0.576);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,23.6,0,-23.5).s().p("AjbBzIAeleIGZAzIidGkg");
	this.shape_32.setTransform(32.6,62.7,0.576,0.576);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D6D638").ss(6,1,1).p("Ak3DlQAKACBGgbQBVgiBWgxQECiTByjL");
	this.shape_33.setTransform(57.8,196.3,0.576,0.576);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3.5,1,1).p("AjfgFIAAgrIG/AAIgMBaQgRADgnACQhPAEhwgJQhwgKgxgUQgPgHgIgFg");
	this.shape_34.setTransform(27.9,132.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#575700","#000000"],[0,1],-22.3,0,22.4,0).s().p("AgjAqQhwgKgxgUQgPgHgIgFIgEgFIAAgrIG/AAIgMBaQgRADgnACIgyACQg+AAhPgHg");
	this.shape_35.setTransform(27.9,132.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#D6D638").ss(6,1,1).p("AkPnnIALA1QAPBEAZBJQBNDoCHC6QCSDLCFCg");
	this.shape_36.setTransform(47.5,167.5,0.576,0.576);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3.5,1,1).p("ABni3IAJicImzgwIgmB6QgfBkAaBmQAaBlBKBKQEXESAHACQAGABAogQQAxgTAxgdQCVhVBCh1QhNh7h/h3QgkgigkgegABAjWIAgAZQACABACACIADAD");
	this.shape_37.setTransform(37.9,170.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#575700","#000000"],[0,1],0,38.8,0,-38.7).s().p("AAUGEQgHgCkXkSQhKhKgahlQgahmAfhkIAmh6IGzAwIgJCcIgDgDIgEgDIgggZIAgAZIAEADIADADQAkAeAkAiQB/B3BNB7QhCB1iVBVQgxAdgxATQgmAPgHAAIgBAAg");
	this.shape_38.setTransform(37.9,170.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(3,1,1).p("AhcBwIAljtIAPATQAWAVAgAFQAiAFAagEQANgBAGgDIhPDRg");
	this.shape_39.setTransform(61.7,267.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-9.3,0,9.3,0).s().p("AhcBwIAmjuIAOAUQAWAVAgAEQAiAGAagEQANgBAGgDIhPDRg");
	this.shape_40.setTransform(61.7,267.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al8nuIFrEvIhaBkIiWO4IC7AZIG0yUQAXg9gMhAQgLg/grgxIk+lqg");
	this.shape_41.setTransform(67.2,229,0.576,0.576);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,88.6,0,-88.6).s().p("AkBNdICWu4IBahkIlrkwIGBmGIE+FqQArAwALBAQAMBAgXA8Im0SVg");
	this.shape_42.setTransform(67.2,229,0.576,0.576);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_43.setTransform(53.2,273.4,0.576,0.576);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_44.setTransform(49.4,272.3,0.576,0.576);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_45.setTransform(45,271,0.576,0.576);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_46.setTransform(41.8,269.1,0.576,0.576);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#838587").ss(4,1,1).p("AgmAKIBOgT");
	this.shape_47.setTransform(39.6,266.1,0.576,0.576);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_48.setTransform(38.4,263,0.576,0.576);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBmA5BBB6ICNAnQCNAhgBgfQgDgeiGgiIiEgbIhwjfQgJgHgLgEQgXgIgKAQQgLARgDApQgBAVABASg");
	this.shape_49.setTransform(46.1,265.4,0.576,0.576);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#606163","#322F2F"],[0,1],4.4,21.4,-6.4,-20.5).s().p("ABVCbIiNgnQhBh6hmg5IAAgnQADgpALgRQAKgQAXAIQALAEAJAHIBwDfICEAbQCGAiADAeQAAAPggAAQgjAAhJgRg");
	this.shape_50.setTransform(46.1,265.4,0.576,0.576);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBWAiCDgHQCUgOAMg9QAFgWgOgYQgMgVgRgLQgWgQihgkIibgfIhthGQgagbgegZQg8gygVAJQghAOgKgNg");
	this.shape_51.setTransform(44.6,270.9,0.576,0.576);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.3,-8.7,-26.6).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIAEAQQAKANAhgOQAVgJA8AyQAeAZAaAbIBtBGICbAfQChAkAWAQQARALAMAVQAOAYgFAWQgMA9iUAOIgsABQhmAAhHgcg");
	this.shape_52.setTransform(44.6,270.9,0.576,0.576);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#60605B").ss(4,1,1).p("AljiGIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgvgPgZgLQgvgUAEgYg");
	this.shape_53.setTransform(44.7,277,0.576,0.576);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.1,17,-5.8,-21.1).s().p("AgRCBQiSgPh0goQgvgPgZgLQgvgUAEgYIAniKIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh2AAQgyAAg4gGg");
	this.shape_54.setTransform(44.7,277,0.576,0.576);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#60605B").ss(3,1,1).p("AjACxICCmFIARASQAXAVAZAQQBXA0BngNIj/FLg");
	this.shape_55.setTransform(36.2,254.8,0.576,0.576);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.2,0,19.3,0).s().p("AjACxICDmFIAQASQAXAVAZAQQBXA0BmgNIj9FLg");
	this.shape_56.setTransform(36.2,254.8,0.576,0.576);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhXmZIBtCaIiSBuIkEMLICCAkIJ/tAIiPn7g");
	this.shape_57.setTransform(47.3,228.5,0.576,0.576);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67,0,-66.9).s().p("AmAJ6IEEsLICRhuIhsiaIFJkEICPH7Ip/M/g");
	this.shape_58.setTransform(47.3,228.5,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2throw1, new cjs.Rectangle(-1.7,-1.5,116,300.1), null);


(lib.player2NotPlaying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.notPalying();
	this.instance.parent = this;
	this.instance.setTransform(93.5,360,1,1,0,0,0,93.5,360);

	this.instance_1 = new lib.player2sit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.3,580.7,1,1,0,0,0,56.3,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2NotPlaying, new cjs.Rectangle(0,0,187,720), null);


(lib.player2ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(52.1,109.9,0.825,0.825);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2C2C").ss(2.5,1,1).p("ADoASQgCgagQgVQgRgWgYgLQhPghheAAIgBAAQhbAAhLAeQgZAKgQAVQgRAWgDAZQgGArACAoQAAAAALgPQAPgTAXgOQBHgwBwAAQBuAABJAvQAlAYAOAXQABgzgDgZg");
	this.shape.setTransform(76.2,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6D638").s().p("AjkANQADgZARgWQAQgVAZgKQBLgeBbAAIABAAQBeAABPAhQAYALARAWQAQAVACAaQADAZgBAzQgOgXglgYQhJgvhuAAQhwAAhHAwQgXAOgPATIgLAPQgCgoAGgrg");
	this.shape_1.setTransform(76.2,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("ACvmZQhtgNhvAsQgjAOgfASIgYAPQgLgIgQgHQgggOgXAEQhvAWhBC4QghBcgLBWIABgBQgBAQAAARIAADcIAnAAIAACEIAdgtIAAk2IAUgaQAbgfAkgYQB1hTCpgBQCqABB1BTQA6AoAYApIAAE2IAeAtIAAiEIAnAAIAAjHQAFiQg7iSQhLi4iGgQg");
	this.shape_2.setTransform(76.1,21.3,0.517,0.517);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AFxFvIAAk2QgYgpg6goQh1hTiqgBQipABh1BTQgkAYgbAfIgUAaIAAE2IgdAtIAAiEIgnAAIAAjcQAAgRABgQIgBABQALhWAhhcQBBi4BvgWQAXgEAgAOQAQAHALAIIAYgPQAfgSAjgOQBvgsBtANQCGAQBLC4QA7CSgFCQIAADHIgnAAIAACEg");
	this.shape_3.setTransform(76.1,21.3,0.517,0.517);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B3A3B").s().p("AhUAAIglgRIB5AGIB5gGQgNAJgXAIQgtASgoAAQgoAAgsgSg");
	this.shape_4.setTransform(76,53.3,0.517,0.517);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_5.setTransform(88.4,38.5,0.517,0.517);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_6.setTransform(87.2,39.3,0.517,0.517);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_7.setTransform(66.1,38.5,0.517,0.517);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_8.setTransform(64.9,39.3,0.517,0.517);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_9.setTransform(76,41.1,0.517,0.517);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABUAnIgEgCQgXgKgOgEIgWgGIgWgFIgWgDQgPAAgHABIgKABQgFAAgEABQgMACgFACIgEACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgJgDIgegFIAFgNQAFgLAEgFIAGgJQABgBAEgBIAFgCIAXgGIAagDIAbAAIAbADIAbAFQANADAMAFQATAGAYAKIAFACQADABABABIAFAIIAIAPIAEALIABAEIgoAHIgBAAIgDgCg");
	this.shape_10.setTransform(87.3,31.7,0.517,0.517);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhXApIgogHIABgEIAEgLIAIgPIAFgIIAEgCIAFgCQAYgKATgGQAMgFANgDQAJgCASgDIAbgDIAbAAIAaADIAXAGIAFACQAEABABABIAGAJQAEAFAFALIAFANIgmAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEgCIgQgEQgFgBgFAAIgKgBIgVgBIgXADIgWAFIgWAGIglAOIgEACIgDACIgBAAg");
	this.shape_11.setTransform(64.8,31.7,0.517,0.517);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_12.setTransform(76,36.8,0.517,0.517);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_13.setTransform(76,36.8,0.517,0.517);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_14.setTransform(76,41.2,0.517,0.517);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_15.setTransform(76,41.2,0.517,0.517);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOBxQgtgDgagMQgggOgDgaIgEgaQgBgIAIgEIgEgCQgGgFgBgGIgGhqQgBgGAFgEQAGgEAHABICYAIQAIAAAHAFQAGAEABAHIAFAhQAAAGgEAEQgGAEgIAAIglgCQAXAEAPAJQAOAIAIAUQADAJACAJIAHA1QAEAagcALQgTAHgiAAIgQAAgAhJA7QAFAiBPAFQBRAEgEgiIgIg1QgBgKgEgIQgGgMgGgDQgRgKgdgDIgHgBQgXgBgOAGIgBgiIBiAFIgFghIiYgIIAHBpIA4ADIAAgGQABgFARAAIAFAAIAPABQAJACABAJIAHAuQABALgYgBIgBgBQgXgBgCgLIgDgTIg4gDgAALA1IgGgmIgJgBQAAAHgHADQAJAFABAIIACAPIAFABIAFAAg");
	this.shape_16.setTransform(78.6,99.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6D638").s().p("AAMBpQhZgFgFgpIgEgaQAAgDACgDQACgBAEAAIA4ADQAFAAADACQADADAAADIADATQABADANABQAPABAAgEIgHguIgBgCIAAgBIgNgBIgEAAIgKAAIAAAFQAAADgCACQgDACgEAAIg4gDQgEAAgDgDQgEgCAAgEIgHhpQAAgDADgCQACgCAEAAICYAIQAFAAADADQADACAAADIAFAiQABADgDACQgCACgFAAIhZgFIAAAPQANgBAOAAIAIABQAgADATALQAKAFAGAPQAFAKABAJIAIA1QAFAmhKAAIgRgBg");
	this.shape_17.setTransform(78.6,99.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D6D638").ss(5,1,1).p("AANj9QA2DbhiEg");
	this.shape_18.setTransform(48.8,67.3,0.517,0.517);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D6D638").ss(5,1,1).p("AAvDQQh0jZAdjG");
	this.shape_19.setTransform(105.7,64,0.517,0.517);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D6D638").ss(5,1,1).p("Akyi9QAJBdB3CPQB2CPA8gBQBTgRB2iPQB5iQgRhK");
	this.shape_20.setTransform(76,67.5,0.517,0.517);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D9A493").ss(3.4,1,1).p("ABzENIhzBPIhyhPQg2gmgZg9Qgag9ANhBIAXh8IAAkLIFvAAIAAELIAXB8QANBBgaA9QgZA9g2Amg");
	this.shape_21.setTransform(76,59.3,0.517,0.517);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,68.7,0,23.6).s().p("AhyENQg2gmgZg9Qgag9ANhCIAXh7IAAkLIFvAAIAAELIAXB7QANBCgaA9QgZA9g2AmIhzBPg");
	this.shape_22.setTransform(76,59.3,0.517,0.517);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2.5,1,1).p("AEFlBQAFgPhFgRQhTgUh/AAQh3AAhVAfQgbAJgUALIgPAJQAcByg0CVIAIA+QAGBGgOAhQgEAKAEBHQACAjACAiQBGA+BeAbQBTAYBZgGQBSgFBBgeQBAgdAXgqQACgiACgkQAEhHgFgKQgNghAVhhIAYhcQg8hwAPhmg");
	this.shape_23.setTransform(77.5,85.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#575700","#000000"],[0,1],0,37.4,0,-37.3).s().p("AiHFiQhegbhGg+IgEhFQgEhHAEgKQAOghgGhGIgIg+QA0iVgchyIAPgJQAUgLAbgJQBVgfB3AAQB/AABTAUQBFARgFAPQgPBmA8BwIgYBcQgVBhANAhQAFAKgEBHIgEBGQgXAqhAAdQhBAehSAFIgkACQhGAAhCgUg");
	this.shape_24.setTransform(77.5,85.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#838587").ss(2,1,1).p("AhqgDIDUAH");
	this.shape_25.setTransform(134.6,215.7,0.517,0.517);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#838587").ss(2,1,1).p("AhoAEIDRgG");
	this.shape_26.setTransform(133.7,219.1,0.517,0.517);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#838587").ss(2,1,1).p("AhhAMIDDgX");
	this.shape_27.setTransform(135.5,221.6,0.517,0.517);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#838587").ss(2,1,1).p("AhUANICpgZ");
	this.shape_28.setTransform(137.5,223.8,0.517,0.517);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(2,1,1).p("AhdARIC6gh");
	this.shape_29.setTransform(140,226.5,0.517,0.517);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(2,1,1).p("AhOATICdgl");
	this.shape_30.setTransform(141.7,228.6,0.517,0.517);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#201F1F").ss(2,1,1).p("Ak+hoIgKBaQgDBgAhApQBGAKA6AkQAeARAPAQIB6AHQCKAGBagMQBcgPALg4QADgRgFgTIgGgQQh8hdhAgxQgngggWgnIgPgiIggBgIBYBPQAQAOgQATQgPASgfAEQgaADgQgMQg+gzglgdQhGg3gIgFQgEgCgfg+Qgeg6gSgBQgkgDgZAOQgrAZAWBFg");
	this.shape_31.setTransform(137.2,224.6,0.517,0.517);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#606163","#322F2F"],[0,1],-35.9,-5.2,34,9.6).s().p("AgDDRIh6gHQgPgQgegRQg6gkhGgKQghgpADhgIAKhaQgWhFArgZQAZgOAkADQASABAeA6QAfA+AEACQAIAFBGA3IBjBQQAQAMAagDQAfgEAPgSQAQgTgQgOIhYhPIAghgIAPAiQAWAnAnAgQBAAxB8BdIAGAQQAFATgDARQgLA4hcAPQg9AIhTAAQgoAAgsgCg");
	this.shape_32.setTransform(137.2,224.6,0.517,0.517);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#201F1F").ss(2,1,1).p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_33.setTransform(135,220.1,0.517,0.517);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#322F2F","#606163"],[0,1],-23,-6,25.7,4.3).s().p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_34.setTransform(135,220.1,0.517,0.517);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#60605B").ss(2,1,1).p("Ak3hOIgDAOQgEAWAPASQAPASAcAGQAmAIAYASQBQA6C5gFQAigBAzgGQA8gIAvgiQAvghAFgnIAFghg");
	this.shape_35.setTransform(137.9,235.1,0.517,0.517);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-30.7,-9.2,28.9,3.4).s().p("AjGAaQgYgSgmgIQgcgGgPgSQgPgSAEgWIADgOIJzADIgFAhQgFAngvAhQgvAig8AIQgzAGgiABIgdAAQijAAhJg1g");
	this.shape_36.setTransform(137.9,235.1,0.517,0.517);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#838587").ss(2.5,1,1).p("ABqgDIjUAH");
	this.shape_37.setTransform(19.6,215.7,0.517,0.517);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#838587").ss(2.5,1,1).p("ABpAEIjRgG");
	this.shape_38.setTransform(20.6,219.1,0.517,0.517);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#838587").ss(2.5,1,1).p("ABiAMIjDgX");
	this.shape_39.setTransform(18.8,221.6,0.517,0.517);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#838587").ss(2.5,1,1).p("ABVANIipgZ");
	this.shape_40.setTransform(16.7,223.8,0.517,0.517);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#838587").ss(2.5,1,1).p("ABeARIi7gh");
	this.shape_41.setTransform(14.3,226.5,0.517,0.517);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#838587").ss(2.5,1,1).p("ABPATIidgl");
	this.shape_42.setTransform(12.6,228.6,0.517,0.517);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#201F1F").ss(2,1,1).p("AFAhoIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQiLAGhZgMQhdgPgLg4QgDgRAFgTIAGgQIBGg1QBOg6AogfQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFg");
	this.shape_43.setTransform(17,224.6,0.517,0.517);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#606163","#322F2F"],[0,1],36,-5.2,-33.9,9.6).s().p("AjfDLQhdgPgLg4QgDgRAFgTIAGgQIBGg1IB2hZQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQgtACgoAAQhTAAg8gIg");
	this.shape_44.setTransform(17,224.6,0.517,0.517);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#201F1F").ss(2.5,1,1).p("AC/AcQATgYAJgfQAUg+gsgiQgwgkhwgDQhigDgfARQgVAMAXBNQAMAmAPAjIifCCICTATg");
	this.shape_45.setTransform(19.2,220.1,0.517,0.517);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#322F2F","#606163"],[0,1],23,-6,-25.7,4.3).s().p("AjgCQICfiCQgPgjgMgmQgXhNAVgMQAfgRBiADQBwADAwAkQAsAigUA+QgJAfgTAYIkMCHg");
	this.shape_46.setTransform(19.2,220.1,0.517,0.517);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#60605B").ss(2.5,1,1).p("AE4hOIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhQA6i5gFQgkgBgygGQg7gIgvgiQgwghgFgnIgFghg");
	this.shape_47.setTransform(16.4,235.1,0.517,0.517);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],30.8,-9.2,-28.8,3.4).s().p("AhBBPQgkgBgygGQg7gIgvgiQgwghgFgnIgFghIJzgDIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhKA1ijAAIgcAAg");
	this.shape_48.setTransform(16.4,235.1,0.517,0.517);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#60605B").ss(2.5,1,1).p("AC5CWIgilZQhhA5g9AZQhRAhhgAKIByEKg");
	this.shape_49.setTransform(126,213.1,0.517,0.517);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],18.6,0.6,-18.5,0.6).s().p("Ai4hFQBggLBRghQA9gZBhg5IAiFZIj/Aug");
	this.shape_50.setTransform(126,213.1,0.517,0.517);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#60605B").ss(2.5,1,1).p("AjDCzIAwmTQBvBCAzAYQBZAoBdAKIiIE1g");
	this.shape_51.setTransform(26.5,211.6,0.517,0.517);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.6,0.1,19.7,0.1).s().p("AjDCzIAwmTQBvBCAzAYQBZAoBcAKIiIE1g");
	this.shape_52.setTransform(26.5,211.6,0.517,0.517);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACEAoIirkBQgtgogmhGQhKiMAqiVIBcARQA1AKApAhQApAhAWAxIDkIJQAJAUgGAWQgGAWgTANIlMDuIhHDvQgCAIgIAEQgHAEgIgDQgIgCgDgIQgEgHADgHIAqiCIhKCRQgEAIgIADQgIADgIgEQgJgEgDgJQgDgIAEgJIBGiIIhbCMQgEAHgJACQgJABgGgFQgGgEgCgHQgBgGADgHIBAiNIg+BsQgFAKgKADQgKADgKgFQgLgFgDgMQgDgLAGgLIAmg5IgmgCQgOgBgEgOQgCgIAEgHQAEgHAIgCIAtgMIA5hVIFXkSIBdgLAkPHEIAFgHIgFAHgAkKG9IAshC");
	this.shape_53.setTransform(116.1,99.5,0.761,0.761);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-35.2,-53,10.5,51.8).s().p("AjHJnQgJgEgDgJQgDgIAEgJIBGiIIhbCMQgEAHgJACQgJABgGgFQgGgEgCgHQgBgGADgHIBAiNIg+BsQgFAKgKADQgKADgKgFQgLgFgDgMQgDgLAGgLIAmg5IAAAAIAFgHIgFAHIgmgCQgOgBgEgOQgCgIAEgHQAEgHAIgCIAtgMIA5hVIFXkSIBdgLIhdALIirkBQgtgogmhGQhKiMAqiVIBcARQA1AKApAhQApAhAWAxIDkIJQAJAUgGAWQgGAWgTANIlMDuIhHDvQgCAIgIAEQgHAEgIgDQgIgCgDgIQgEgHADgHIAqiCIhKCRQgEAIgIADIgHABQgFAAgEgCgAkKG9IAshCgAkPHEIAFgHIgFAHgAkPHEg");
	this.shape_54.setTransform(116.1,99.5,0.761,0.761);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D6D638").ss(5,1,1).p("AkKBcQgKgrBAgvQBBguBsgbQBsgbBWAKQBTAJAeAo");
	this.shape_55.setTransform(109.1,147.3,0.517,0.517);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#D6D638").ss(5,1,1).p("ADWFcQg0jDhkiyQh8jiiXhg");
	this.shape_56.setTransform(112,127.3,0.517,0.517);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BE9075").ss(2.5,1,1).p("AiDAoICqkBQAugoAmhGQBKiMgqiVIhdARQg0AKgpAhQgqAhgVAxIjkIJQgJAUAGAWQAGAWATANIFLDuIBIDvQACAIAIAEQAHAEAIgDQAHgCAEgIQAEgHgDgHIgriCIBLCRQAEAIAIADQAIADAIgEQAJgEADgJQADgIgEgJIhGiIIBaCMQAFAHAJACQAIABAHgFQAFgEACgHQACgGgDgHIhBiNIA/BsQAFAJAKADQAKAEAKgFQALgFADgMQADgMgHgKIglg5IAmgCQAGgBAFgEQAFgEACgGQACgIgEgHQgEgHgIgCIgtgMIg5hVIlXkSIhdgLAEQHEIgxhJ");
	this.shape_57.setTransform(41,101.2,0.761,0.761);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-10.5,51.8,35.2,-53).s().p("AC4JoQgIgDgEgIIhLiRIArCCQADAHgEAHQgEAIgHACQgIADgHgEQgIgEgCgIIhIjvIlLjuQgTgNgGgWQgGgWAJgUIDkoJQAVgxAqghQApghA0gKIBdgRQAqCVhKCMQgmBGguAoIiqEBIhdgLIBdALIFXESIA5BVIAtAMQAIACAEAHQAEAHgCAIQgCAGgFAEQgFAEgGABIgmACIAlA5QAHAKgDAMQgDAMgLAFQgKAFgKgEQgKgDgFgJIg/hsIBBCNQADAHgCAGQgCAHgFAEQgHAFgIgBQgJgCgFgHIhaiMIBGCIQAEAJgDAIQgDAJgJAEQgEACgEAAIgIgBgAEQHEIgxhJg");
	this.shape_58.setTransform(41,101.2,0.761,0.761);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D6D638").ss(5,1,1).p("AiJgUQAPgUArgFQAtgFA3AOQA4AOAhAXQAhAYgFAW");
	this.shape_59.setTransform(42.8,147.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#D6D638").ss(5,1,1).p("ADXlbQiYBgh9DiQhjCyg1DD");
	this.shape_60.setTransform(40,127.3,0.517,0.517);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2.5,1,1).p("AD5jVQg4AZjBASQjAgSg4gZQhOAyhBB0QgzBcgbBkIAAAAQAQgUArgFQAsgFA4AOQA4AOAiAYQAhAYgGAWICAiPQANgOARgIQARgHASAAQATAAARAHQARAIANAOICACPQgFgWAggYQAigYA4gOQA4gOAtAFQArAFAPAUIABAAQgchkgzhcQhBh0hOgyg");
	this.shape_61.setTransform(76,130.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#575700","#000000"],[0,1],0,21.3,0,-21.4).s().p("ABCBGQgNgNgRgJQgSgHgSAAQgSAAgRAHQgRAJgNANIiACPQAFgVgggZQgigYg4gOQg4gOgsAFQgrAFgQAVIgBAAQAbhlA0hcQBBh0BOgyQA4AZDAASQDAgSA5gZQBOAyBAB0QA0BcAcBlIgBAAQgQgVgrgFQgsgFg4AOQg4AOgiAYQghAZAFAVg");
	this.shape_62.setTransform(76,130.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aj7vQIF3GxQARAUA1BpQA2BpAFAZICrTxIj1AAIlGvrIAAisIkUoHg");
	this.shape_63.setTransform(113,170.4,0.517,0.517);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,-97.7,0,97.7).s().p("ACzPRIlGvrIAAisIkUoHICrkDIF4GxQAQAUA2BpQA2BpAFAZICrTxg");
	this.shape_64.setTransform(113,170.4,0.517,0.517);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(3.4,1,1).p("ACKghQAFAWgkAYQglAag5AOQg4AOgsgFQgsgGgGgWQgFgWAlgYQAkgaA5gOQA4gOAsAFQAtAGAFAWg");
	this.shape_65.setTransform(108.9,148.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#575700","#000000"],[0,1],-13.8,0,13.9,0).s().p("AhXA+QgsgGgGgWQgFgWAlgYQAkgaA5gOQA4gOAsAFQAtAGAFAWQAFAWgkAYQglAag5AOQgpAKgjAAIgYgBg");
	this.shape_66.setTransform(108.9,148.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE9075").ss(2.5,1,1).p("AD8vQIl2GxQgRAUg2BpQg2BpgFAZIirTxID1AAIFGvrIAAisIEUoHg");
	this.shape_67.setTransform(38.8,170.4,0.517,0.517);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,97.7,0,-97.7).s().p("AmnPRICrzxQAFgZA2hpQA2hpARgUIF2mxICsEDIkUIHIAACsIlGPrg");
	this.shape_68.setTransform(38.8,170.4,0.517,0.517);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2.5,1,1).p("AiJghQgFAWAkAYQAlAaA5AOQA4AOAsgFQAsgGAGgWQAFgWglgYQgkgag5gOQg4gOgsAFQgtAGgFAWg");
	this.shape_69.setTransform(42.9,148.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#575700","#000000"],[0,1],-13.8,0,13.9,0).s().p("AgMA1Qg5gOglgaQgkgYAGgWQAEgWAtgGQAsgFA4AOQA5AOAkAaQAlAYgFAWQgGAWgsAGIgYABQgjAAgpgKg");
	this.shape_70.setTransform(42.9,148.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2ball, new cjs.Rectangle(-1.2,-1.2,156.4,241.7), null);


(lib.player1throw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgaARIA0gh");
	this.shape.setTransform(29.7,305.8,0.619,0.619,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_1.setTransform(31.8,303.7,0.619,0.619,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_2.setTransform(34.5,301.4,0.619,0.619,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_3.setTransform(36.2,299,0.619,0.619,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_4.setTransform(36.6,296,0.619,0.619,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_5.setTransform(36,293.2,0.619,0.619,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhvQBCBHgHBrIBLBEQBPA/AOgWQAPgWhLg/IhMg5IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAdQgMAPgHANg");
	this.shape_6.setTransform(33.3,297.4,0.619,0.619,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.4,1.4,-17.8).s().p("AAUCHIhLhEQAHhrhChHQAHgNAMgPQAWgdAUgJQATgJATAMQAJAGAFAIIgWDCIBMA5QBLA/gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_7.setTransform(33.3,297.4,0.619,0.619,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgdgJglQgFgShZhHIhZhDIg2hSQgMgbgSgbQgig1gZABQgpABgWgNg");
	this.shape_8.setTransform(38.1,300.5,0.619,0.619,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAiA1QASAbAMAbIA2BSIBZBDQBZBHAFASQAJAlgcAdQgVAVglAAQgeAAgogOg");
	this.shape_9.setTransform(38.1,300.5,0.619,0.619,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhSgrhVhAQgSgOgFgWQgEgWAKgTg");
	this.shape_10.setTransform(38.3,306.3,0.619,0.619,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.2).s().p("Ag+BVQhSgrhVhAQgSgOgFgWQgEgWAKgTIAbgxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_11.setTransform(38.3,306.3,0.619,0.619,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#9C701F").ss(3,1,1).p("AEki4QhCgRkJBRQkKBQgtAwQgFA5ASBDQAJAiAKAWQAPgYAvghQBdhCCkg0QBtghBagMQBDgJAzAEQARABAKgNQALgOgGgQQgTgxgng4g");
	this.shape_12.setTransform(69.5,33.9,0.619,0.619,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECA92F").s().p("AlRCEQgShDAFg5QAtgwEKhQQEJhRBCARQAnA4ATAxQAGAQgLAOQgKANgRgBQgzgEhDAJQhaAMhtAhQikA0hdBCQgvAhgPAYQgKgWgJgig");
	this.shape_13.setTransform(69.5,33.9,0.619,0.619,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BE9075").ss(3,1,1).p("ABABDIgwAHQgbAEgXgRQgYgRgEgdQgFgcASgYQARgYAcgEIA8gJ");
	this.shape_14.setTransform(66.8,46.8,0.619,0.619,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#352B2C").ss(3,1,1).p("Akvh8QgTBSAcBoQAZBfA5BaQA3BXBBAyQBFA0A4gIQgliiBohOIggAFQgdAEgXgRQgWgRgFgdQgEgdAQgYQARgYAdgEIA8gJIAUBvIAYgmIglj3IgjgbQgWgRAGgbQAFgbAbgGICxgiQAogHAAgjQAAgigigcQg/g0hHgEQhWgEg6BNQg+AAhGAdQiLA6ggCQg");
	this.shape_15.setTransform(70,39.4,0.619,0.619,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4B3A3B").s().p("AhcGAQhBgyg3hXQg5hagZhfQgchoAThSQAgiQCLg6QBGgdA+AAQA6hNBWAEQBHAEA/A0QAiAcAAAiQAAAjgoAHIixAiQgbAGgFAbQgGAbAWARIAjAbIAlD3IgYAmIgUhvIg8AJQgdAEgRAYQgQAYAEAdQAFAdAWARQAXARAdgEIAggFQhoBOAlCiIgQABQgxAAg8gtg");
	this.shape_16.setTransform(70,39.4,0.619,0.619,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5F4137").s().p("AAMAMQgZgEgSgLIA8gKIADAaIgDABIgRgCg");
	this.shape_17.setTransform(47.6,55.8,0.619,0.619,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHARQgGgGgBgJQgBgIADgHQADgHAHgBQAFgBAGAGQAFAGABAJQABAIgDAHQgDAHgHABIgBAAQgFAAgEgFg");
	this.shape_18.setTransform(51.5,42.9,0.619,0.619,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgXAiQgNgKgCgSQgDgQAJgPQAKgOAQgCQAQgDAOALQANAKACASQADAQgJAPQgKAOgQACIgHABQgMAAgLgJg");
	this.shape_19.setTransform(52.3,43.6,0.619,0.619,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F4137").s().p("AgpAtIgHgBIgOgCIgNAAIgCgDIgDgKQgDgKABgFIgBgKQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAIACgCIAOgKIAQgKIASgIQAIgEALgCIAkgHIAfgBIAEgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIAGAHQAFAFAEAHIAEAJIACADIgXAcQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgaABIgbAEIgXAKIgJAGIgIAGIgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_20.setTransform(53.1,37.6,0.619,0.619,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BE9075").ss(2,1,1).p("AAMF7ICugaQAhgFAUgbQAUgbgFgiIgXi4IA7gJQAYgDAJgXQAJgXgPgTIhsiDIhhjNIjXgtQhrARhABZQhBBZARBtIAkDpQAQBtBYBCQBYBCBqgRg");
	this.shape_21.setTransform(60.1,43.3,0.619,0.619,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-5.3,-38.9,6.3,37.2).s().p("Ai2FKQhYhCgQhtIgkjpQgRhtBBhZQBAhZBrgRIDXAtIBhDNIBsCDQAPATgJAXQgJAXgYADIg7AJIAXC4QAFAigUAbQgUAbghAFIiuAaQgVAEgUAAQhTAAhGg1g");
	this.shape_22.setTransform(60.1,43.3,0.619,0.619,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#ECA92F").ss(6,1,1).p("ACEENQgygIg4glQhwhIghiLQghiJA7hWQASgbAagTIAWgN");
	this.shape_23.setTransform(56.1,91,0.619,0.619,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhWmoIAJADADyCfImLg+QhVgOhPAkIhiArIgWANQgZATgTAbQg7BWAhCKQAhCLBxBIQA5AlAyAIIBljfQANgcAagRQAagRAfAAIHCAAQBHAAAlg9QAlg+gjg/Imir9QgsgqgagoQgYgkgFgbQgCgKgIgGQgJgGgKACQgJACgGAHQgFAHAAAKQADA6BFBYQhZgvgnhiQgGgOgPgFQgQgFgNAKQgIAGgEAKQgDAKADAKQAYBMBfBLQhYg9g9g7QgKgJgNgBQgOgBgLAIQgOAJgCASQgCARAMANQBtByBGAcQhHgahJhIQgIgIgKAAQgLgBgJAGQgLAIgCANQgBAOAJAJQAwA0BaAvQAsAXAjANIhDgBQgSgBgJAQQgKAPAJAQQAJAPASABIC4ADIBvCfIAaDmgAE3DvIhFhQ");
	this.shape_24.setTransform(32.1,64.3,0.619,0.619,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.1,0,-70.1).s().p("AlpKQQhxhIghiLQghiKA7hWQATgbAZgTIAWgNIBigrQBPgkBVAOIGLA+IBFBQIhFhQIgtg0IgajmIhvifIi4gDQgSgBgJgPQgJgQAKgPQAJgQASABIBDABQgjgNgsgXQhagvgwg0QgJgJABgOQACgNALgIQAJgGALABQAKAAAIAIQBJBIBHAaQhGgchthyQgMgNACgRQACgSAOgJQALgIAOABQANABAKAJQA9A7BYA9QhfhLgYhMQgDgKADgKQAEgKAIgGQANgKAQAFQAPAFAGAOQAnBiBZAvQhFhYgDg6QAAgKAFgHQAGgHAJgCQAKgCAJAGQAIAGACAKQAFAbAYAkQAaAoAsAqIGiL9QAjA/glA+QglA9hHAAInCAAQgfAAgaARQgaARgNAcIhlDfQgygIg5glgAhNmlIgJgDg");
	this.shape_25.setTransform(32.1,64.3,0.619,0.619,0,0,180);

	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(55.7,0,0.825,0.825,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#ECA92F").ss(6,1,1).p("ACfAFIk9gI");
	this.shape_26.setTransform(65.1,72.1,0.619,0.619,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#6F047E").ss(3.5,1,1).p("ADKpJIlzgJQh3gFhHBZQhGBZAUCDIBZJBIAKDkIAwAaQA/AdBNANQD1AsEjh8IgLpDg");
	this.shape_27.setTransform(59.5,108.6,0.619,0.619,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-41.4,0,41.5,0).s().p("Ah6JHQhNgNg/gdIgwgaIgKjkIhZpBQgUiDBGhZQBHhZB3AFIFzAJIDJH9IALJDQjXBci/AAQhCAAhAgMg");
	this.shape_28.setTransform(59.5,108.6,0.619,0.619,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEYDIIgvqEIiUgaIgtJVIkjAOIgcAOIBvE8IE6hTQA/gRAmg1QAmg1gFhBg");
	this.shape_29.setTransform(42.7,59.5,0.619,0.619,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,47.1,0,-47.1).s().p("AkXCbIAcgOIEjgOIAtpVICUAaIAvKEQAFBBgmA1QgmA1g/ARIk6BTg");
	this.shape_30.setTransform(42.7,59.5,0.619,0.619,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(2.5,1,1).p("AinjPIgbE1ID6BqICLlzg");
	this.shape_31.setTransform(63.5,72.4,0.619,0.619,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,20.9,0,-20.8).s().p("AjCBmIAbk1IFpAsIiKFzg");
	this.shape_32.setTransform(63.5,72.4,0.619,0.619,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#6F047E").ss(3.5,1,1).p("AlUAaIAAhAIKphHIgODQQgaAGg8ADQh4AGisgPQitgOhLgfQgYgKgLgKg");
	this.shape_33.setTransform(56.9,144,0.619,0.619,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-34.1,0,34.1,0).s().p("AgzBjQitgOhLgfQgYgKgLgKIgGgIIAAhAIKphHIgODQQgaAGg8ADQgiACgnAAQhgAAh7gLg");
	this.shape_34.setTransform(56.9,144,0.619,0.619,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#ECA92F").ss(6,1,1).p("AEPh2QjGCAi/BEQg8AUg0ANIgoAI");
	this.shape_35.setTransform(38.6,211.9,0.619,0.619,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#ECA92F").ss(6,1,1).p("AjvmuIAJAvQAOA8AVBAQBFDNB3CkQCCC0B1CN");
	this.shape_36.setTransform(38.2,179.4,0.619,0.619,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#6F047E").ss(3.5,1,1).p("AksBvQh4hVgwiKQgxiQAuiXIA6i7IKbBKIgMDvIAhApQAoA2AkBDQBzDVAdEHQjHCBjABEQg8AUgzANIgoAIg");
	this.shape_37.setTransform(52.4,182.4,0.619,0.619,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-49.4,0,49.5,0).s().p("AksBvQh4hVgwiKQgxiQAuiXIA6i7IKbBKIgMDvIAhApQAoA2AkBDQBzDVAdEHQjHCBjABDQg8AWgzAMIgoAIg");
	this.shape_38.setTransform(52.4,182.4,0.619,0.619,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#838587").ss(4,1,1).p("AgZARIA0gh");
	this.shape_39.setTransform(54.8,297.1,0.619,0.619,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_40.setTransform(57,295.1,0.619,0.619,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_41.setTransform(59.7,292.8,0.619,0.619,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_42.setTransform(61.4,290.3,0.619,0.619,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_43.setTransform(61.7,287.3,0.619,0.619,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_44.setTransform(61.1,284.5,0.619,0.619,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhuQBDBFgIBsIBLBEQBPA/AOgWQAPgWhKg+IhNg6IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAeQgMAPgHANg");
	this.shape_45.setTransform(58.5,288.8,0.619,0.619,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.5,1.4,-17.7).s().p("AAUCHIhLhEQAIhshDhFQAHgNAMgPQAWgeAUgJQATgJATAMQAJAGAFAIIgWDCIBNA6QBKA+gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_46.setTransform(58.5,288.8,0.619,0.619,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgegJgkQgFgShZhHIhZhDIg2hSQgMgbgRgbQgjg1gZABQgpABgWgNg");
	this.shape_47.setTransform(63.2,291.8,0.619,0.619,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAjA1QARAbAMAbIA2BSIBZBDQBZBHAFASQAJAkgcAeQgVAVglAAQgeAAgogOg");
	this.shape_48.setTransform(63.2,291.8,0.619,0.619,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhTgshUhAQgSgNgEgWQgFgWALgTg");
	this.shape_49.setTransform(63.5,297.6,0.619,0.619,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.3).s().p("Ag+BVQhTgshUhAQgSgNgEgWQgFgWALgTIAagxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgGgRIANARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_50.setTransform(63.5,297.6,0.619,0.619,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#60605B").ss(3,1,1).p("AiHCTIBGlEIA8AnQBJAmBFgFIidEbg");
	this.shape_51.setTransform(65.8,275.8,0.619,0.619,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-13.6,0,13.7,0).s().p("AiHCTIBFlEIA8AnQBJAmBGgFIieEbg");
	this.shape_52.setTransform(65.8,275.8,0.619,0.619,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#60605B").ss(3,1,1).p("AhrCpIAGlqIBFAWQBPAUA9gLIhsFkg");
	this.shape_53.setTransform(41.2,286.9,0.619,0.619,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.8,0,10.8,0).s().p("AhrCoIAGlpIBFAWQBPAUA9gLIhsFkg");
	this.shape_54.setTransform(41.2,286.9,0.619,0.619,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#ECA92F").ss(6,1,1).p("AiIA+QBOgGBpg6IBag7");
	this.shape_55.setTransform(57.4,215.5,0.619,0.619,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#6F047E").ss(3.5,1,1).p("AjqlNIA2EDQBGEaBJB+QBNgGBqg7IBag7g");
	this.shape_56.setTransform(63.5,198.6,0.619,0.619,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-23.5,0,23.6,0).s().p("Ai0hKIg2kDIHVIfIhaA7QhqA7hMAGQhKh9hFkbg");
	this.shape_57.setTransform(63.5,198.6,0.619,0.619,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjNqIIBhGkIhhBqIgXPFIBrAZIFex9IhUpKg");
	this.shape_58.setTransform(33.7,245.2,0.619,0.619,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,86.9,0,-86.8).s().p("AjkNLIAXvFIBhhqIhhmkIFejbIBUJKIleR9g");
	this.shape_59.setTransform(33.7,245.2,0.619,0.619,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhqnAICKCYIioCFIiuMrIBzAfIH6uOIh+m/g");
	this.shape_60.setTransform(55,244.8,0.619,0.619,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67.9,0,-67.9).s().p("Ak2KIICusrICoiFIiKiYIEjjmIB+G/In6OOg");
	this.shape_61.setTransform(55,244.8,0.619,0.619,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player1throw2, new cjs.Rectangle(-1.3,0,94.1,317.5), null);


(lib.player1throw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape.setTransform(34.8,285.2,0.576,0.576,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_1.setTransform(38.5,284.1,0.576,0.576,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_2.setTransform(42.9,282.8,0.576,0.576,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_3.setTransform(46.2,281,0.576,0.576,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AgnAKIBPgT");
	this.shape_4.setTransform(48.3,277.9,0.576,0.576,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_5.setTransform(49.5,274.8,0.576,0.576,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBnA6BBB5ICMAnQCOAhgCgfQgDgeiFgiIiFgbIhwjfQgJgHgLgEQgWgIgLAQQgKARgDApQgCAVABASg");
	this.shape_6.setTransform(41.9,277.2,0.576,0.576,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],4.5,21.3,-6.4,-20.5).s().p("ABVCbIiMgnQhBh5hng6QgBgSACgVQADgpAKgRQALgQAWAIQALAEAJAHIBwDfICFAbQCFAiADAeQABAPghAAQgiAAhKgRg");
	this.shape_7.setTransform(41.9,277.2,0.576,0.576,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBVAiCDgHQCUgOANg9QAEgWgOgYQgLgUgRgMQgWgQihgkIibgfIhuhGQgagbgegZQg8gygUAJQgiAOgKgNg");
	this.shape_8.setTransform(43.4,282.7,0.576,0.576,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.4,-8.7,-26.5).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIADAQQAKANAigOQAUgJA8AyQAeAZAaAbIBuBGICbAfQChAkAWAQQARAMALAUQAOAYgEAWQgNA9iUAOIgrABQhmAAhHgcg");
	this.shape_9.setTransform(43.4,282.7,0.576,0.576,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AliiGIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgugPgagLQgvgUAEgYg");
	this.shape_10.setTransform(43.2,288.8,0.576,0.576,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.2,17,-5.7,-21.1).s().p("AgRCBQiSgPh0goQgugPgagLQgvgUAEgYIAoiKIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh3AAQgyAAg3gGg");
	this.shape_11.setTransform(43.2,288.8,0.576,0.576,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#ECA92F").ss(6,1,1).p("ACWExQg5gKhAgpQh/hSglidQgmibBEhiQAVgeAcgVIAZgP");
	this.shape_12.setTransform(73.8,82.3,0.576,0.576,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BE9075").ss(2.5,1,1).p("AESEtIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQhLAphKgrInTkGIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIAtCKAFOlBIgGgJAi2FZIhLgq");
	this.shape_13.setTransform(49.9,71.9,0.576,0.576,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,62.8,0,-62.8).s().p("AEdJfInTkGIhLgqIBLAqIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQglAUglAAQgmAAglgWgAE/G3IgtiKgAFOlBIgGgJg");
	this.shape_14.setTransform(49.9,71.9,0.576,0.576,0,0,180);

	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(48.9,19,0.825,0.825,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#9C701F").ss(3,1,1).p("AFKjQQhKgTktBbQktBbgzA3QgEBAAUBMQAKAmALAZQAQgbA1gmQBqhKC5g7QDchDCMAKQATACAMgQQAMgPgHgSQgXg7grg8g");
	this.shape_15.setTransform(87.9,22.2,0.576,0.576,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECA92F").s().p("Al9CWQgUhMAEhAQAzg3EthbQEthbBKATQArA8AXA7QAHASgMAPQgMAQgTgCQiMgKjcBDQi5A7hqBKQg1AmgQAbQgLgZgKgmg");
	this.shape_16.setTransform(87.9,22.2,0.576,0.576,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BE9075").ss(3,1,1).p("ABIBMIg1AIQgfAFgbgUQgagUgFggQgFggATgbQATgbAhgFIBEgK");
	this.shape_17.setTransform(85,35.7,0.576,0.576,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#352B2C").ss(3,1,1).p("AlYiNQgVBeAgB1QAcBsBABlQA/BjBKA4QBOA8A/gKQgpi3B1hYIgkAGQggAFgbgUQgZgUgFghQgFghASgbQATgaAhgFIBFgLIAVB/IAcgrIgrkYIgngfQgZgTAHgeQAGgfAegHIDIgmQAtgIABgpQAAgmgnggQhIg7hPgDQhigFhBBXQhHABhPAgQidBCglCig");
	this.shape_18.setTransform(88.4,27.9,0.576,0.576,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4B3A3B").s().p("AhoGyQhKg4g/hjQhAhlgchsQggh1AVheQAliiCdhCQBPggBHgBQBBhXBiAFQBPADBIA7QAnAgAAAmQgBApgtAIIjIAmQgeAHgGAfQgHAeAZATIAnAfIArEYIgcArIgVh/IhFALQghAFgTAaQgSAbAFAhQAFAhAZAUQAbAUAggFIAkgGQh1BYApC3IgSACQg4AAhDg0g");
	this.shape_19.setTransform(88.4,27.9,0.576,0.576,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F4137").s().p("AANANQgcgEgVgNIBEgKIAFAdIgEAAQgJAAgLgCg");
	this.shape_20.setTransform(64.8,45.2,0.576,0.576,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAUQgGgHgBgKQgCgKAEgHQAEgJAHgBQAGgBAGAGQAGAHACAKQACAKgEAIQgEAIgHABIgCAAQgFAAgGgFg");
	this.shape_21.setTransform(68.9,31.6,0.576,0.576,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgZAnQgQgMgDgUQgDgTALgQQALgQATgDQARgDAPAMQAQAMADAUQADATgLAQQgLAQgTADIgGABQgOAAgMgKg");
	this.shape_22.setTransform(69.8,32.4,0.576,0.576,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5F4137").s().p("AgyAwIgJgCIgcAAIgBgDIgDgKQgCgJAAgIIAAgJQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIADgDIAPgLIASgLIAUgJIApgLIAUgDQANgBAXAAIADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAQATIAIANIgKALIgKAJIgGAHQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAgBIgDAAQgTAAgKABIgQACQgGABgKADIgOAEIgNAGIgLAHIgJAHIgCACQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape_23.setTransform(70.5,26.1,0.576,0.576,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BE9075").ss(2,1,1).p("AAOGtIDEgeQAlgFAXgfQAXgfgFgmIgajRIBCgJQAbgEALgaQAKgbgRgVIh7iUIhtjoIj0gyQh5AShJBlQhIBkASB8IApEIQATB8BjBKQBjBLB5gTg");
	this.shape_24.setTransform(78,32,0.576,0.576,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-6,-44.1,7.1,42.1).s().p("AjOF1QhjhKgTh8IgpkIQgSh8BIhkQBJhlB5gSID0AyIBtDoIB7CUQARAVgKAbQgLAagbAEIhCAJIAaDRQAFAmgXAfQgXAfglAFIjEAeQgYAEgXAAQheAAhPg8g");
	this.shape_25.setTransform(78,32,0.576,0.576,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#ECA92F").ss(6,1,1).p("AC0AFIlngJ");
	this.shape_26.setTransform(83.3,62.4,0.576,0.576,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#6F047E").ss(3.5,1,1).p("AC5pcIkMgLQiGgFhhBbQhiBbgFCGIgTJNIglDnIA1AdQBHAhBbASQEjA6F8htIA9npg");
	this.shape_27.setTransform(83.5,97.5,0.576,0.576,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,61.6,0,-61.5).s().p("AkCJUQhbgShHghIg1gdIAmjnIASpNQAFiGBhhbQBihbCGAFIEMALIEhKUIg9HpQj3BHjRAAQhxAAhmgUg");
	this.shape_28.setTransform(83.5,97.5,0.576,0.576,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlfgMIEsCLIFno/ICHBoIkkKeQgeBEhCAhQhBAhhIgQIlohSIA3l2");
	this.shape_29.setTransform(50.1,69,0.576,0.576,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,44.9,0,-44.8).s().p("AhSG8IlohSIA3l2IAkAAIEsCLIFno/ICHBoIkkKeQgeBEhCAhQgsAWguAAQgXAAgYgFg");
	this.shape_30.setTransform(50.1,69,0.576,0.576,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(2.5,1,1).p("Ai9jrIgeFfIEaB4ICdmkg");
	this.shape_31.setTransform(81.6,62.7,0.576,0.576,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,23.6,0,-23.5).s().p("AjbBzIAeleIGZAzIidGkg");
	this.shape_32.setTransform(81.6,62.7,0.576,0.576,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#ECA92F").ss(6,1,1).p("Ak3DlQAKACBGgbQBVgiBWgxQECiTByjL");
	this.shape_33.setTransform(56.4,196.3,0.576,0.576,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#6F047E").ss(3.5,1,1).p("AmDgKIAAhJIMHAAIgUCcQgdAGhEAEQiJAGjDgQQjDgRhVgjQgbgLgMgKg");
	this.shape_34.setTransform(86.3,132.6,0.576,0.576,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-38.8,0,38.9,0).s().p("Ag9BJQjDgRhVgjQgbgLgMgKIgHgKIAAhJIMHAAIgUCcQgdAGhEAEQgnABgrAAQhuAAiMgLg");
	this.shape_35.setTransform(86.3,132.6,0.576,0.576,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#ECA92F").ss(6,1,1).p("AkPnnIALA1QAPBEAZBJQBNDoCHC6QCSDLCFCg");
	this.shape_36.setTransform(66.7,167.5,0.576,0.576,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#6F047E").ss(3.5,1,1).p("ACzk+IAPkPIrzhTIhCDUQg2CuAsCxQAtCvCCCAQHkHdAMACQAKACBGgbQBVgiBWgxQEDiUByjLQiGjWjcjQQg+g7g/gzgABul1IA4AsQADACAEADIAGAG");
	this.shape_37.setTransform(76.3,170.7,0.576,0.576,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,67.4,0,-67.3).s().p("AAiKhQgMgCnkndQiCiAgtivQgsixA2iuIBCjUILzBTIgPEPIgGgGIgHgFIg4gsIA4AsIAHAFIAGAGQA/AzA+A7QDcDQCGDWQhyDLkDCUQhWAxhVAiQhBAZgNAAIgCAAg");
	this.shape_38.setTransform(76.3,170.7,0.576,0.576,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#60605B").ss(3,1,1).p("AhcBwIAljtIAPATQAWAVAgAFQAiAFAagEQANgBAGgDIhPDRg");
	this.shape_39.setTransform(52.6,267.4,1,1,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-9.3,0,9.3,0).s().p("AhcBwIAmjuIAOAUQAWAVAgAEQAiAGAagEQANgBAGgDIhPDRg");
	this.shape_40.setTransform(52.6,267.4,1,1,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al8nuIFrEvIhaBkIiWO4IC7AZIG0yUQAXg9gMhAQgLg/grgxIk+lqg");
	this.shape_41.setTransform(47,229,0.576,0.576,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,88.6,0,-88.6).s().p("AkBNdICWu4IBahkIlrkwIGBmGIE+FqQArAwALBAQAMBAgXA8Im0SVg");
	this.shape_42.setTransform(47,229,0.576,0.576,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_43.setTransform(61,273.4,0.576,0.576,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_44.setTransform(64.8,272.3,0.576,0.576,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_45.setTransform(69.2,271,0.576,0.576,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_46.setTransform(72.4,269.1,0.576,0.576,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#838587").ss(4,1,1).p("AgmAKIBOgT");
	this.shape_47.setTransform(74.6,266.1,0.576,0.576,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_48.setTransform(75.8,263,0.576,0.576,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBmA5BBB6ICNAnQCNAhgBgfQgDgeiGgiIiEgbIhwjfQgJgHgLgEQgXgIgKAQQgLARgDApQgBAVABASg");
	this.shape_49.setTransform(68.1,265.4,0.576,0.576,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#606163","#322F2F"],[0,1],4.4,21.4,-6.4,-20.5).s().p("ABVCbIiNgnQhBh6hmg5IAAgnQADgpALgRQAKgQAXAIQALAEAJAHIBwDfICEAbQCGAiADAeQAAAPggAAQgjAAhJgRg");
	this.shape_50.setTransform(68.1,265.4,0.576,0.576,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBWAiCDgHQCUgOAMg9QAFgWgOgYQgMgVgRgLQgWgQihgkIibgfIhthGQgagbgegZQg8gygVAJQghAOgKgNg");
	this.shape_51.setTransform(69.6,270.9,0.576,0.576,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.3,-8.7,-26.6).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIAEAQQAKANAhgOQAVgJA8AyQAeAZAaAbIBtBGICbAfQChAkAWAQQARALAMAVQAOAYgFAWQgMA9iUAOIgsABQhmAAhHgcg");
	this.shape_52.setTransform(69.6,270.9,0.576,0.576,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#60605B").ss(4,1,1).p("AljiGIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgvgPgZgLQgvgUAEgYg");
	this.shape_53.setTransform(69.5,277,0.576,0.576,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.1,17,-5.8,-21.1).s().p("AgRCBQiSgPh0goQgvgPgZgLQgvgUAEgYIAniKIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh2AAQgyAAg4gGg");
	this.shape_54.setTransform(69.5,277,0.576,0.576,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#60605B").ss(3,1,1).p("AjACxICCmFIARASQAXAVAZAQQBXA0BngNIj/FLg");
	this.shape_55.setTransform(78,254.8,0.576,0.576,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.2,0,19.3,0).s().p("AjACxICDmFIAQASQAXAVAZAQQBXA0BmgNIj9FLg");
	this.shape_56.setTransform(78,254.8,0.576,0.576,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhXmZIBtCaIiSBuIkEMLICCAkIJ/tAIiPn7g");
	this.shape_57.setTransform(66.9,228.5,0.576,0.576,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67,0,-66.9).s().p("AmAJ6IEEsLICRhuIhsiaIFJkEICPH7Ip/M/g");
	this.shape_58.setTransform(66.9,228.5,0.576,0.576,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player1throw1, new cjs.Rectangle(0,-1.5,116,300.1), null);


(lib.player1NotPlaying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.notPalying();
	this.instance.parent = this;
	this.instance.setTransform(93.5,360,1,1,0,0,0,93.5,360);

	this.instance_1 = new lib.player1sit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.8,580.7,1,1,0,0,0,56.8,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player1NotPlaying, new cjs.Rectangle(0,0,187,720), null);


(lib.player1ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(52.1,109.9,0.825,0.825);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9C701F").ss(2.5,1,1).p("AHBAkQgFgzgfgqQgfgrgwgUQiYhBi4AAIgBAAQiwAAiSA7QgwATgfApQggApgHAyQgMBTAEBOQAAAAAWgeQAegjArgcQCJhdDZAAQDXAACNBbQBHAuAbAtQAChjgFgvg");
	this.shape.setTransform(76.2,18.1,0.517,0.517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA92F").s().p("Am7AZQAHgyAggpQAfgpAwgTQCSg7CwAAIABAAQC4AACYBBQAwAUAfArQAfAqAFAzQAFAvgCBjQgbgthHguQiNhbjXAAQjZAAiJBdQgrAcgeAjIgWAeQgEhOAMhTg");
	this.shape_1.setTransform(76.2,18.1,0.517,0.517);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#352B2C").ss(2.5,1,1).p("ACvmZQhtgNhvAsQgjAOgfASIgYAPQgLgIgQgHQgggOgXAEQhvAWhBC4QghBcgLBWIABgBQgBAQAAARIAADcIAnAAIAACEIAdgtIAAk2IAUgaQAbgfAkgYQB1hTCpgBQCqABB1BTQA6AoAYApIAAE2IAeAtIAAiEIAnAAIAAjHQAFiQg7iSQhLi4iGgQg");
	this.shape_2.setTransform(76.1,21.3,0.517,0.517);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B3A3B").s().p("AFxFvIAAk2QgYgpg6goQh1hTiqgBQipABh1BTQgkAYgbAfIgUAaIAAE2IgdAtIAAiEIgnAAIAAjcQAAgRABgQIgBABQALhWAhhcQBBi4BvgWQAXgEAgAOQAQAHALAIIAYgPQAfgSAjgOQBvgsBtANQCGAQBLC4QA7CSgFCQIAADHIgnAAIAACEg");
	this.shape_3.setTransform(76.1,21.3,0.517,0.517);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B3A3B").s().p("AhUAAIglgRIB5AGIB5gGQgNAJgXAIQgtASgoAAQgoAAgsgSg");
	this.shape_4.setTransform(76,53.3,0.517,0.517);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_5.setTransform(88.4,38.5,0.517,0.517);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_6.setTransform(87.2,39.3,0.517,0.517);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_7.setTransform(66.1,38.5,0.517,0.517);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_8.setTransform(64.9,39.3,0.517,0.517);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_9.setTransform(76,41.1,0.517,0.517);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F4137").s().p("ABUAnIgEgCQgXgKgOgEIgWgGIgWgFIgWgDQgPAAgHABIgKABQgFAAgEABQgMACgFACIgEACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgJgDIgegFIAFgNQAFgLAEgFIAGgJQABgBAEgBIAFgCIAXgGIAagDIAbAAIAbADIAbAFQANADAMAFQATAGAYAKIAFACQADABABABIAFAIIAIAPIAEALIABAEIgoAHIgBAAIgDgCg");
	this.shape_10.setTransform(87.3,31.7,0.517,0.517);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F4137").s().p("AhXApIgogHIABgEIAEgLIAIgPIAFgIIAEgCIAFgCQAYgKATgGQAMgFANgDQAJgCASgDIAbgDIAbAAIAaADIAXAGIAFACQAEABABABIAGAJQAEAFAFALIAFANIgmAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEgCIgQgEQgFgBgFAAIgKgBIgVgBIgXADIgWAFIgWAGIglAOIgEACIgDACIgBAAg");
	this.shape_11.setTransform(64.8,31.7,0.517,0.517);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_12.setTransform(76,36.8,0.517,0.517);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_13.setTransform(76,36.8,0.517,0.517);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_14.setTransform(76,41.2,0.517,0.517);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_15.setTransform(76,41.2,0.517,0.517);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGDYQgbAAgegGQghgFgZgLQgegNgTgTQgYgaABgjIAAgdQABgPAKgJQAJgKAOAAIBpAEQgLgKAAgQIABgtQABgKADgFIhggCQgOgBgJgKQgKgKABgOIAAgeQABgcAWgXQARgTAdgNQAbgLAggGQAfgFAcAAIAJAAQAwABAiALQAgAKASAMQAMAHAKAIQAMALAIAOQAHAOADAQQACAOAAAWQAAAVgDAOQgDAWgOAPIgEAEQADACAEAHQALAPACAXQABANgBAVQAAATgDAPQgDAPgEANQgHAOgJAJQgHAIgMAHQgZARglAKQgfAJgtAAgAigBmQAAAVAPAPQAOAPAXAKQAUAJAeAGQAfAFAWAAIAMAAQAoAAAcgIQAegHAVgPQAKgGAEgFQAFgFAEgIQADgJACgLQABgHABgVIAAggQgBgNgGgIQgGgKgNgHQgMgGgZgHQAUgGAQgGQANgGAHgHQAHgIACgLQACgMAAgTQABgQgCgNQgCgKgFgKQgFgIgHgHIgSgMQgOgJgdgKQgdgJgrgBIgIAAQgcAAgZAEQgcAGgYAJQgWAKgNANQgNAOAAAQIgBAeIBqACIABgcQAAgJAMgIQAMgIAYAAIAEAAQAYACANAGQAOAIAAALIgBAuQgBAVgSAFQgPAEggAAIgSAAIgBAsQAVAAAUACQAQACAJAFQAJADAEAHQADAIAAAKIgCAzQAAANgOAIQgNAGgWABIgCAAQgYgBgOgIQgOgIAAgNIABgbIhqgCgAgTBMIgBATQAJACAKABIABAAIAQgCIABgqIgLgCIgkgCQAMALgBAPgAgOhgIgBATQgBAKgDAFIAHAAQAXAAAJgBIABggQgHgBgLgBIgDAAIgOABg");
	this.shape_16.setTransform(77.9,99.4,0.517,0.517);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECA92F").s().p("AgFDHQgeAAgZgFQgggFgXgLQgagLgRgRQgTgUABgcIAAgeQAAgHAGgFQAFgFAGAAIBrAEQAGAAAFAEQAFAGAAAHIgBAbQAAABAGAEQAJAFAUABIACAAQASABAJgGQAGgDAAgCIABg0QAAgIgBgBIgFgDQgGgDgOgCQgRgCgXAAQgHAAgFgFQgEgFAAgIIABgsQAAgGAFgFQAFgFAHAAIASAAQAdAAANgDIAFgDQACgCAAgFIABguIgFgEQgJgFgVAAIgDAAQgTgBgHAFIgFAEIgBAcQAAAIgFAEQgFAFgHgBIhqgDQgHAAgFgEQgFgFAAgIIABgdQABgWARgTQAPgQAagMQAZgJAegGQAagFAeAAIAJAAQAvACAdAJQAeAJARALQAMAHAIAHQAJAIAHAMQAFALADAOQADAQgBARQgBAXgBAJQgDASgKAKQgIAJgNAGQAPAIAHALQAJAOABAQIAAAhQAAATgDANQgBAKgFAMQgFAMgHAHQgGAGgKAIQgYAPghAJQgfAIgpAAg");
	this.shape_17.setTransform(77.9,99.4,0.517,0.517);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#ECA92F").ss(5,1,1).p("AANj9QA2DbhiEg");
	this.shape_18.setTransform(48.8,67.3,0.517,0.517);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#ECA92F").ss(5,1,1).p("AAvDQQh0jZAdjG");
	this.shape_19.setTransform(105.7,64,0.517,0.517);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#ECA92F").ss(5,1,1).p("Akyi9QAJBdB3CPQB2CPA8gBQBTgRB2iPQB5iQgRhK");
	this.shape_20.setTransform(76,67.5,0.517,0.517);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D9A493").ss(3.4,1,1).p("ABzENIhzBPIhyhPQg2gmgZg9Qgag9ANhBIAXh8IAAkLIFvAAIAAELIAXB8QANBBgaA9QgZA9g2Amg");
	this.shape_21.setTransform(76,59.3,0.517,0.517);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,68.7,0,23.6).s().p("AhyENQg2gmgZg9Qgag9ANhCIAXh7IAAkLIFvAAIAAELIAXB7QANBCgaA9QgZA9g2AmIhzBPg");
	this.shape_22.setTransform(76,59.3,0.517,0.517);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#6F047E").ss(2.5,1,1).p("AH5pvQAKgciGghQihgmj2AAQjmAAimA6Qg0ASgnAWIgdASQA2DchjEhIAQB5QALCHgbA/QgIAUAHCJQAEBFAFBBQCGB3C2A1QCiAvCsgLQCggLB9g5QB8g5ArhSQAGhBADhFQAHiKgIgUQgbg/Aqi9IAviyQh1jZAdjGg");
	this.shape_23.setTransform(77.5,85.5,0.517,0.517);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,72.3,0,-72.3).s().p("AkHKtQi2g1iGh3IgJiGQgHiJAIgUQAbg/gLiHIgQh5QBjkhg2jcIAdgSQAngWA0gSQCmg6DmAAQD2AAChAmQCGAhgKAcQgdDGB1DZIgvCyQgqC9AbA/QAIAUgHCKQgDBFgGBBQgrBSh8A5Qh9A5igALQgiACgiAAQiIAAiCgmg");
	this.shape_24.setTransform(77.5,85.5,0.517,0.517);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#838587").ss(2,1,1).p("AhqgDIDUAH");
	this.shape_25.setTransform(134.6,215.7,0.517,0.517);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#838587").ss(2,1,1).p("AhoAEIDRgG");
	this.shape_26.setTransform(133.7,219.1,0.517,0.517);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#838587").ss(2,1,1).p("AhhAMIDDgX");
	this.shape_27.setTransform(135.5,221.6,0.517,0.517);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#838587").ss(2,1,1).p("AhUANICpgZ");
	this.shape_28.setTransform(137.5,223.8,0.517,0.517);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#838587").ss(2,1,1).p("AhdARIC6gh");
	this.shape_29.setTransform(140,226.5,0.517,0.517);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#838587").ss(2,1,1).p("AhOATICdgl");
	this.shape_30.setTransform(141.7,228.6,0.517,0.517);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#201F1F").ss(2,1,1).p("Ak+hoIgKBaQgDBgAhApQBGAKA6AkQAeARAPAQIB6AHQCKAGBagMQBcgPALg4QADgRgFgTIgGgQQh8hdhAgxQgngggWgnIgPgiIggBgIBYBPQAQAOgQATQgPASgfAEQgaADgQgMQg+gzglgdQhGg3gIgFQgEgCgfg+Qgeg6gSgBQgkgDgZAOQgrAZAWBFg");
	this.shape_31.setTransform(137.2,224.6,0.517,0.517);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#606163","#322F2F"],[0,1],-35.9,-5.2,34,9.6).s().p("AgDDRIh6gHQgPgQgegRQg6gkhGgKQghgpADhgIAKhaQgWhFArgZQAZgOAkADQASABAeA6QAfA+AEACQAIAFBGA3IBjBQQAQAMAagDQAfgEAPgSQAQgTgQgOIhYhPIAghgIAPAiQAWAnAnAgQBAAxB8BdIAGAQQAFATgDARQgLA4hcAPQg9AIhTAAQgoAAgsgCg");
	this.shape_32.setTransform(137.2,224.6,0.517,0.517);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#201F1F").ss(2,1,1).p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_33.setTransform(135,220.1,0.517,0.517);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#322F2F","#606163"],[0,1],-23,-6,25.7,4.3).s().p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_34.setTransform(135,220.1,0.517,0.517);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#60605B").ss(2,1,1).p("Ak3hOIgDAOQgEAWAPASQAPASAcAGQAmAIAYASQBQA6C5gFQAigBAzgGQA8gIAvgiQAvghAFgnIAFghg");
	this.shape_35.setTransform(137.9,235.1,0.517,0.517);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-30.7,-9.2,28.9,3.4).s().p("AjGAaQgYgSgmgIQgcgGgPgSQgPgSAEgWIADgOIJzADIgFAhQgFAngvAhQgvAig8AIQgzAGgiABIgdAAQijAAhJg1g");
	this.shape_36.setTransform(137.9,235.1,0.517,0.517);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#838587").ss(2.5,1,1).p("ABqgDIjUAH");
	this.shape_37.setTransform(19.6,215.7,0.517,0.517);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#838587").ss(2.5,1,1).p("ABpAEIjRgG");
	this.shape_38.setTransform(20.6,219.1,0.517,0.517);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#838587").ss(2.5,1,1).p("ABiAMIjDgX");
	this.shape_39.setTransform(18.8,221.6,0.517,0.517);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#838587").ss(2.5,1,1).p("ABVANIipgZ");
	this.shape_40.setTransform(16.7,223.8,0.517,0.517);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#838587").ss(2.5,1,1).p("ABeARIi7gh");
	this.shape_41.setTransform(14.3,226.5,0.517,0.517);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#838587").ss(2.5,1,1).p("ABPATIidgl");
	this.shape_42.setTransform(12.6,228.6,0.517,0.517);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#201F1F").ss(2,1,1).p("AFAhoIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQiLAGhZgMQhdgPgLg4QgDgRAFgTIAGgQIBGg1QBOg6AogfQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFg");
	this.shape_43.setTransform(17,224.6,0.517,0.517);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#606163","#322F2F"],[0,1],36,-5.2,-33.9,9.6).s().p("AjfDLQhdgPgLg4QgDgRAFgTIAGgQIBGg1IB2hZQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQgtACgoAAQhTAAg8gIg");
	this.shape_44.setTransform(17,224.6,0.517,0.517);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#201F1F").ss(2.5,1,1).p("AC/AcQATgYAJgfQAUg+gsgiQgwgkhwgDQhigDgfARQgVAMAXBNQAMAmAPAjIifCCICTATg");
	this.shape_45.setTransform(19.2,220.1,0.517,0.517);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#322F2F","#606163"],[0,1],23,-6,-25.7,4.3).s().p("AjgCQICfiCQgPgjgMgmQgXhNAVgMQAfgRBiADQBwADAwAkQAsAigUA+QgJAfgTAYIkMCHg");
	this.shape_46.setTransform(19.2,220.1,0.517,0.517);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#60605B").ss(2.5,1,1).p("AE4hOIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhQA6i5gFQgkgBgygGQg7gIgvgiQgwghgFgnIgFghg");
	this.shape_47.setTransform(16.4,235.1,0.517,0.517);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],30.8,-9.2,-28.8,3.4).s().p("AhBBPQgkgBgygGQg7gIgvgiQgwghgFgnIgFghIJzgDIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhKA1ijAAIgcAAg");
	this.shape_48.setTransform(16.4,235.1,0.517,0.517);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#60605B").ss(2.5,1,1).p("AC5CWIgilZQhhA5g9AZQhRAhhgAKIByEKg");
	this.shape_49.setTransform(126,213.1,0.517,0.517);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],18.6,0.6,-18.5,0.6).s().p("Ai4hFQBggLBRghQA9gZBhg5IAiFZIj/Aug");
	this.shape_50.setTransform(126,213.1,0.517,0.517);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#60605B").ss(2.5,1,1).p("AjDCzIAwmTQBvBCAzAYQBZAoBdAKIiIE1g");
	this.shape_51.setTransform(26.5,211.6,0.517,0.517);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.6,0.1,19.7,0.1).s().p("AjDCzIAwmTQBvBCAzAYQBZAoBcAKIiIE1g");
	this.shape_52.setTransform(26.5,211.6,0.517,0.517);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BE9075").ss(2.5,1,1).p("ACEAoIirkBQgtgogmhGQhKiMAqiVIBcARQA1AKApAhQApAhAWAxIDkIJQAJAUgGAWQgGAWgTANIlMDuIhHDvQgCAIgIAEQgHAEgIgDQgIgCgDgIQgEgHADgHIAqiCIhKCRQgEAIgIADQgIADgIgEQgJgEgDgJQgDgIAEgJIBGiIIhbCMQgEAHgJACQgJABgGgFQgGgEgCgHQgBgGADgHIBAiNIg+BsQgFAKgKADQgKADgKgFQgLgFgDgMQgDgLAGgLIAmg5IgmgCQgOgBgEgOQgCgIAEgHQAEgHAIgCIAtgMIA5hVIFXkSIBdgLAkPHEIAFgHIgFAHgAkKG9IAshC");
	this.shape_53.setTransform(116.1,99.5,0.761,0.761);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-35.2,-53,10.5,51.8).s().p("AjHJnQgJgEgDgJQgDgIAEgJIBGiIIhbCMQgEAHgJACQgJABgGgFQgGgEgCgHQgBgGADgHIBAiNIg+BsQgFAKgKADQgKADgKgFQgLgFgDgMQgDgLAGgLIAmg5IAAAAIAFgHIgFAHIgmgCQgOgBgEgOQgCgIAEgHQAEgHAIgCIAtgMIA5hVIFXkSIBdgLIhdALIirkBQgtgogmhGQhKiMAqiVIBcARQA1AKApAhQApAhAWAxIDkIJQAJAUgGAWQgGAWgTANIlMDuIhHDvQgCAIgIAEQgHAEgIgDQgIgCgDgIQgEgHADgHIAqiCIhKCRQgEAIgIADIgHABQgFAAgEgCgAkKG9IAshCgAkPHEIAFgHIgFAHgAkPHEg");
	this.shape_54.setTransform(116.1,99.5,0.761,0.761);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#ECA92F").ss(5,1,1).p("AkKBcQgKgrBAgvQBBguBsgbQBsgbBWAKQBTAJAeAo");
	this.shape_55.setTransform(109.1,147.3,0.517,0.517);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#ECA92F").ss(5,1,1).p("ADWFcQg0jDhkiyQh8jiiXhg");
	this.shape_56.setTransform(112,127.3,0.517,0.517);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BE9075").ss(2.5,1,1).p("AiDAoICqkBQAugoAmhGQBKiMgqiVIhdARQg0AKgpAhQgqAhgVAxIjkIJQgJAUAGAWQAGAWATANIFLDuIBIDvQACAIAIAEQAHAEAIgDQAHgCAEgIQAEgHgDgHIgriCIBLCRQAEAIAIADQAIADAIgEQAJgEADgJQADgIgEgJIhGiIIBaCMQAFAHAJACQAIABAHgFQAFgEACgHQACgGgDgHIhBiNIA/BsQAFAJAKADQAKAEAKgFQALgFADgMQADgMgHgKIglg5IAmgCQAGgBAFgEQAFgEACgGQACgIgEgHQgEgHgIgCIgtgMIg5hVIlXkSIhdgLAEQHEIgxhJ");
	this.shape_57.setTransform(41,101.2,0.761,0.761);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FDE2CD","#DBA585"],[0,1],-10.5,51.8,35.2,-53).s().p("AC4JoQgIgDgEgIIhLiRIArCCQADAHgEAHQgEAIgHACQgIADgHgEQgIgEgCgIIhIjvIlLjuQgTgNgGgWQgGgWAJgUIDkoJQAVgxAqghQApghA0gKIBdgRQAqCVhKCMQgmBGguAoIiqEBIhdgLIBdALIFXESIA5BVIAtAMQAIACAEAHQAEAHgCAIQgCAGgFAEQgFAEgGABIgmACIAlA5QAHAKgDAMQgDAMgLAFQgKAFgKgEQgKgDgFgJIg/hsIBBCNQADAHgCAGQgCAHgFAEQgHAFgIgBQgJgCgFgHIhaiMIBGCIQAEAJgDAIQgDAJgJAEQgEACgEAAIgIgBgAEQHEIgxhJg");
	this.shape_58.setTransform(41,101.2,0.761,0.761);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#ECA92F").ss(5,1,1).p("AkLgnQAegoBTgJQBWgKBsAbQBsAbBBAuQBAAvgKAr");
	this.shape_59.setTransform(42.8,147.3,0.517,0.517);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#ECA92F").ss(5,1,1).p("ADXlbQiYBgh9DiQhjCyg1DD");
	this.shape_60.setTransform(40,127.3,0.517,0.517);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#6F047E").ss(2.5,1,1).p("AHimcQhtAwl1AjQl0gjhsgwQiYBfh9DjQhkCxg0DDIABAAQAegoBTgJQBWgKBtAbQBsAbBBAvQBAAvgKArID3kWQAYgbAigPQAhgPAjAAQAlAAAhAPQAhAPAYAbID4EWQgKgrBAgvQBBgvBsgbQBtgbBWAKQBTAJAeAoIABAAQg1jDhjixQh9jjiYhfg");
	this.shape_61.setTransform(76,130.7,0.517,0.517);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,41.4,0,-41.3).s().p("AB/CIQgYgbgigPQgggPglAAQgjAAghAPQgiAPgYAbIj3EWQAKgshAguQhBgvhsgcQhtgbhWALQhTAJgeAnIgCABQA1jDBjixQB+jiCXhgQBsAvF1AkQF1gkBtgvQCYBgB9DiQBjCxA1DDIgBgBQgfgnhSgJQhWgLhtAbQhsAchCAvQg/AuAKAsg");
	this.shape_62.setTransform(76,130.7,0.517,0.517);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aj7vQIF3GxQARAUA1BpQA2BpAFAZICrTxIj1AAIlGvrIAAisIkUoHg");
	this.shape_63.setTransform(113,170.4,0.517,0.517);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,-97.7,0,97.7).s().p("ACzPRIlGvrIAAisIkUoHICrkDIF4GxQAQAUA2BpQA2BpAFAZICrTxg");
	this.shape_64.setTransform(113,170.4,0.517,0.517);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#6F047E").ss(3.4,1,1).p("AEKhBQALAqhHAxQhGAxhvAbQhtAchWgLQhVgKgLgrQgKgqBGgwQBHgyBugbQBugcBVALQBWAKAKArg");
	this.shape_65.setTransform(108.9,148.7,0.517,0.517);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-26.8,0,26.8,0).s().p("AiqB3QhVgKgKgrQgLgqBGgwQBIgyBtgbQBugcBVALQBWAKAKArQALAqhHAxQhGAxhvAbQhOAUhDAAQgaAAgYgDg");
	this.shape_66.setTransform(108.9,148.7,0.517,0.517);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE9075").ss(2.5,1,1).p("AD8vQIl2GxQgRAUg2BpQg2BpgFAZIirTxID1AAIFGvrIAAisIEUoHg");
	this.shape_67.setTransform(38.8,170.4,0.517,0.517);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,97.7,0,-97.7).s().p("AmnPRICrzxQAFgZA2hpQA2hpARgUIF2mxICsEDIkUIHIAACsIlGPrg");
	this.shape_68.setTransform(38.8,170.4,0.517,0.517);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#6F047E").ss(2.5,1,1).p("AkKhBQgKAqBGAxQBIAxBuAbQBtAcBVgLQBVgKAMgrQAKgqhGgwQhHgyhvgbQhtgchVALQhWAKgLArg");
	this.shape_69.setTransform(42.9,148.7,0.517,0.517);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-26.8,0,26.8,0).s().p("AgZBmQhtgbhIgxQhGgxALgqQAKgrBVgKQBWgLBtAcQBvAbBGAyQBHAwgKAqQgMArhVAKQgXADgaAAQhDAAhPgUg");
	this.shape_70.setTransform(42.9,148.7,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player1ball, new cjs.Rectangle(-1.2,-1.2,156.4,241.7), null);


(lib.P2stopTimeBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tbord();
	this.instance.parent = this;
	this.instance.setTransform(60.6,62.2,1,1,0,0,0,60.6,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.P2stopTimeBoard, new cjs.Rectangle(0,-0.5,121.4,125.5), null);


(lib.P1stopTimeBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tbord();
	this.instance.parent = this;
	this.instance.setTransform(60.6,62.2,1,1,0,0,0,60.6,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.P1stopTimeBoard, new cjs.Rectangle(0,-0.5,121.4,125.5), null);


(lib.input = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.player1name = new lib.an_TextInput({'id': 'player1name', 'value':'הכנס', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.player1name.setTransform(87.5,24.4,1.873,1.361,0,0,0,38.2,17.9);

	this.timeline.addTween(cjs.Tween.get(this.player1name).wait(1));

}).prototype = getMCSymbolPrototype(lib.input, new cjs.Rectangle(0,-0.7,204.1,49.6), null);


(lib.forcombo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.gameBTN();
	this.startbtn.name = "startbtn";
	this.startbtn.parent = this;
	this.startbtn.setTransform(0,120,0.831,0.831);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 2, false, new lib.gameBTN(), 3);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, פסיכולוגיה, 1, פיתוח אתרי אינטרנט, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(0.3,0.3,2.355,2.355,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcombo, new cjs.Rectangle(-118.9,-27.1,237.9,172), null);


(lib.stop_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stopBTN();
	this.instance.parent = this;
	this.instance.setTransform(60.7,97.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.stopBTN(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(201,201,201,0)").s().p("ApeJxIAAzhIS9AAIAAThg");
	this.shape.setTransform(60.7,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stop_btn, new cjs.Rectangle(0,0,121.4,125), null);


(lib.nextBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.next();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.next(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,153,51,0)").s().p("ArkCqIAAlTIXJAAIAAFTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nextBTN, new cjs.Rectangle(-95.4,-22.4,191,45), null);


(lib.endBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.end_BTN();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.end_BTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.endBTN, new cjs.Rectangle(-94.6,-32.4,189.3,64.9), null);


(lib.checkBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.check();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.check(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,153,51,0)").s().p("An6CRIAAkhIP1AAIAAEhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.checkBTN, new cjs.Rectangle(-62.3,-18.8,124.6,37.7), null);


(lib.timeOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("נגמר הזמן", "bold 86px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 98;
	this.text.lineWidth = 394;
	this.text.parent = this;
	this.text.setTransform(640.5,252.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("EgkRAkRMAAAhIhMBIiAAAMAAABIhg");
	this.shape.setTransform(640.5,360);

	this.instance = new lib.openingStage();
	this.instance.parent = this;
	this.instance.setTransform(640.5,360,1,1,0,0,0,640.5,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeOut, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.stopGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replayBTN = new lib.replayBTN();
	this.replayBTN.name = "replayBTN";
	this.replayBTN.parent = this;
	this.replayBTN.setTransform(640.5,522.8,1.973,1.973);
	new cjs.ButtonHelper(this.replayBTN, 0, 1, 2, false, new lib.replayBTN(), 3);

	this.text = new cjs.Text("כדי להמשיך את המשחק, לחץ על הכפתור Play", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 371;
	this.text.parent = this;
	this.text.setTransform(640.5,370.4);

	this.text_1 = new cjs.Text("קלע לסל", "bold 90px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 103;
	this.text_1.lineWidth = 371;
	this.text_1.parent = this;
	this.text_1.setTransform(640.5,146.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("EgkRAkRMAAAhIhMBIiAAAMAAABIhg");
	this.shape.setTransform(640.5,360);

	this.instance = new lib.openingStage();
	this.instance.parent = this;
	this.instance.setTransform(640.5,360,1,1,0,0,0,640.5,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.replayBTN}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stopGame, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.score = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("EggGAgHMAAAhANMBANAAAMAAABANg");
	this.shape.setTransform(358,316.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.647)").s().p("EggGAgHMAAAhANMBANAAAMAAABANg");
	this.shape_1.setTransform(923,316.2);

	this.instance = new lib.openingStage();
	this.instance.parent = this;
	this.instance.setTransform(640.5,360,1,1,0,0,0,640.5,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.score, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.picGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text(":בחר משחק", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 223;
	this.text.parent = this;
	this.text.setTransform(640.5,285.1);

	this.text_1 = new cjs.Text("קלע לסל", "bold 90px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 103;
	this.text_1.lineWidth = 371;
	this.text_1.parent = this;
	this.text_1.setTransform(640.5,146.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("EgkRAkRMAAAhIhMBIiAAAMAAABIhg");
	this.shape.setTransform(640.5,360);

	this.instance = new lib.openingStage();
	this.instance.parent = this;
	this.instance.setTransform(640.5,360,1,1,0,0,0,640.5,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.picGame, new cjs.Rectangle(-39,-6.7,1363.1,726.7), null);


(lib.player2out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// Layer_4
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(106.7,498.6,0.999,0.999,0,-29.8,150.2,3.8,1.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(1).to({regX:2.5,regY:3.7,scaleX:1,scaleY:1,skewX:-22.4,skewY:157.6,x:110.1,y:501},0).wait(1).to({skewX:-15,skewY:165,x:111.3,y:502.1},0).wait(1).to({skewX:-7.6,skewY:172.4,x:112.3,y:503.1},0).wait(1).to({skewX:-0.1,skewY:179.9,x:113.4,y:504.1},0).wait(1).to({skewX:-3.9,skewY:176.1,x:114.2,y:504.8},0).wait(1).to({skewX:-7.7,skewY:172.3,x:114.7,y:505.5},0).wait(1).to({skewX:-4,skewY:176,y:506.6},0).wait(1).to({skewX:-0.2,skewY:179.8,x:114.2,y:507.6},0).wait(1).to({skewX:10.1,skewY:190.1,x:113.8,y:510.2},0).wait(1).to({skewX:20.4,skewY:200.4,x:112.3,y:512.3},0).wait(1).to({skewX:21.7,skewY:201.7,x:111.8,y:513.5},0).wait(1).to({skewX:22.9,skewY:202.9,x:111.2,y:514.6},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.player2ball();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94,577.3,1,1,0,0,0,77,119.6);

	this.instance_2 = new lib.player2throw1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93.3,548.8,1,1,0,0,0,56.3,148.5);

	this.instance_3 = new lib.player2throw2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94,540.2,1,1,0,0,0,45.6,158.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape.setTransform(102.2,667.6,0.619,0.619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_1.setTransform(100.2,665.7,0.619,0.619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_2.setTransform(97.7,663.5,0.619,0.619);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgbAJIA3gR");
	this.shape_3.setTransform(96.1,661.2,0.619,0.619);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_4.setTransform(95.7,658.3,0.619,0.619);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_5.setTransform(96.3,655.7,0.619,0.619);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi3QgEgHgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_6.setTransform(98.8,659.7,0.619,0.619);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAHIgUC3IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_7.setTransform(98.8,659.7,0.619,0.619);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIhAC+ICeByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgRhUhDIhUg/IgzhNQgLgZgQgZQghgygYAAQgmACgVgNg");
	this.shape_8.setTransform(94.3,662.6,0.619,0.619);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIiehyIBAi+IAOANQAVANAmgCQAYAAAhAyQAQAZALAZIAzBNIBUA/QBUBDAEARQAJAjgaAbQgUAVgkAAQgcAAglgNg");
	this.shape_9.setTransform(94.3,662.6,0.619,0.619);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABQhRABhzg9QhNgphQg8QgRgNgEgVQgEgUAKgTg");
	this.shape_10.setTransform(94.1,668,0.619,0.619);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,0.9,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgVQgEgUAKgTIAZgtIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABIgCAAQhRAAhxg8g");
	this.shape_11.setTransform(94.1,668,0.619,0.619);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#60605B").ss(3,1,1).p("Ag2CdIgxlSIBHAOQBRAJA3gXIg4Frg");
	this.shape_12.setTransform(91.1,644.2,0.619,0.619);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.3,0,10.4,0).s().p("Ag2CdIgxlSIBHANQBRAKA3gXIg4Frg");
	this.shape_13.setTransform(91.1,644.2,0.619,0.619);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_14.setTransform(84.2,659.4,0.619,0.619);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_15.setTransform(82.2,657.5,0.619,0.619);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_16.setTransform(79.6,655.3,0.619,0.619);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(4,1,1).p("AgbAKIA3gT");
	this.shape_17.setTransform(78,653,0.619,0.619);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(4,1,1).p("AgjgDIBGAH");
	this.shape_18.setTransform(77.7,650.2,0.619,0.619);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_19.setTransform(78.3,647.6,0.619,0.619);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi2QgEgIgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_20.setTransform(80.8,651.6,0.619,0.619);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAIIgUC2IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_21.setTransform(80.8,651.6,0.619,0.619);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIg/C+ICdByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgQhUhDIhUg/IgzhNQgLgagQgZQghgygYABQgmABgVgNg");
	this.shape_22.setTransform(76.3,654.5,0.619,0.619);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIidhyIA/i+IAOANQAVANAmgBQAYgBAhAyQAQAZALAaIAzBNIBUA/QBUBDAEAQQAJAjgaAbQgVAVgjAAQgcAAglgNg");
	this.shape_23.setTransform(76.3,654.5,0.619,0.619);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABQhSABhzg9QhNgphQg8QgRgNgEgUQgEgVAKgTg");
	this.shape_24.setTransform(76.1,659.9,0.619,0.619);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,1,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgUQgEgVAKgTIAZgtIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABIgCAAQhRAAhyg8g");
	this.shape_25.setTransform(76.1,659.9,0.619,0.619);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#60605B").ss(3,1,1).p("AhPCnIgUlrIBGAZQBPAWAygSIhIFsg");
	this.shape_26.setTransform(72.9,641.3,0.619,0.619);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10,0,10.1,0).s().p("AhQCnIgUlrIBHAZQBPAVAzgRIhJFsg");
	this.shape_27.setTransform(72.9,641.3,0.619,0.619);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D6D638").ss(6,1,1).p("AEfg0Qi7B5jTgSQhDgGg9gTIgvgS");
	this.shape_28.setTransform(88.4,566.7,0.619,0.619);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2C2C2C").ss(3,1,1).p("ACTiPQgngBiNBPQiOBNgUAiQAFAhATAkQAJASAIALQAAgCAGgJQAIgNAOgQQAtgxBWgyQBmg4BJgLQAKgBAEgKQAEgJgFgIQgSgagcgbg");
	this.shape_29.setTransform(67.7,391.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D6D638").s().p("AirBzQgTgkgFghQAUgiCOhNQCNhPAnABQAcAbASAaQAFAIgEAJQgEAKgKABQhJALhmA4QhWAygtAxQgOAQgIANQgGAJAAACQgIgLgJgSg");
	this.shape_30.setTransform(67.7,391.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(3,1,1).p("ABCA2IgqAQQgYAKgZgLQgZgMgKgaQgKgaALgYQALgZAZgKIA1gU");
	this.shape_31.setTransform(73.5,402.6,0.619,0.619);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AijgWQAAAwAcA4QAaAzAsAsQAqArAqAUQAuAWAfgMQgphYAyg5IgSAHQgPAGgQgHQgPgHgHgQQgGgQAHgQQAHgQAQgFIAhgNIAZA9IAJgZIg0iHIgXgMQgPgGAAgQQAAgRAPgGIBggqQAWgJgEgUQgEgTgXgMQgrgWgoAHQgyAIgWAzQgkAIgkAaQhJAyAABWg");
	this.shape_32.setTransform(66.3,395.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATDwQgqgUgqgrQgsgsgagzQgcg4AAgwQAAhWBJgyQAkgaAkgIQAWgzAygIQAogHArAWQAXAMAEATQAEAUgWAJIhgAqQgPAGAAARQAAAQAPAGIAXAMIA0CHIgJAZIgZg9IghANQgQAFgHAQQgHAQAGAQQAHAQAPAHQAQAHAPgGIASgHQgyA5ApBYQgLAEgNAAQgXAAgegOg");
	this.shape_33.setTransform(66.3,395.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F4137").s().p("AgfAHIA1gUIAKAXQgOAEgNAAQgSAAgSgHg");
	this.shape_34.setTransform(92.7,407.1,0.619,0.619);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDARQgGgEgDgIQgEgHACgHQACgIAGgCQAFgCAFAEQAGAFADAIQAEAHgCAHQgCAHgFACIgEABQgEAAgDgDg");
	this.shape_35.setTransform(86.4,396.2,0.619,0.619);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgOAkQgOgHgGgPQgGgPAGgPQAGgPAOgGQAOgFAPAHQAOAHAGAQQAGAOgGAPQgGAPgPAGQgGACgHAAQgHAAgIgEg");
	this.shape_36.setTransform(85.8,397.1,0.619,0.619);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgpAbIgDgJIgCgGIABgBIABgCIAHgIIAIgHIATgNIAUgIIASgFIACAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIAKAKIAEAEIABACIgJATQAAAAAAAAQAAABAAAAQgBAAAAgBQAAAAAAAAIgCAAIgOAEIgIADIgNAHIgKAJIgEAEIAAABIgBABIgFgBIgOACIgCABg");
	this.shape_37.setTransform(83.8,391.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BE9075").ss(2,1,1).p("ABjFMICbg7QAdgMANgcQANgdgLgeIg6ilIA0gTQAWgIAEgXQADgXgSgPIh9hjIiCipIjPACQhfAkgqBfQgpBfAlBhIBQDPQAlBhBeArQBdArBfgkg");
	this.shape_38.setTransform(77.8,399.3,0.619,0.619);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-11.5,-36.3,14.4,31.5).s().p("AhZFFQhegrglhhIhQjPQglhhAphfQAqhfBfgkIDPgCICCCpIB9BjQASAPgDAXQgEAXgWAIIg0ATIA6ClQALAegNAdQgNAcgdAMIibA7QgrAQgsAAQgyAAgzgXg");
	this.shape_39.setTransform(77.8,399.3,0.619,0.619);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D6D638").ss(6,1,1).p("AB8D+QgvgIg1giQhphEgfiDQgfiBA3hRQAcgpAigP");
	this.shape_40.setTransform(86.7,442.8,0.619,0.619);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE9075").ss(4,1,1).p("AgpA8IAZhgQAEgRAQgFQAQgEAMALQAMAKgCAQIgBAJg");
	this.shape_41.setTransform(136.6,354.5,0.619,0.619);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEkocIg7AHQgIABgFAFIhcBWIAAAgIjtEVIAABSIjoEVQgVAJgRAaQgiAyATBRQATBRBCAqQAhAVAdAFIBGjNIFrrYICDhiIBGAAQAGAAAFgFQAEgEAAgHQAAgGgEgFQgFgEgGgBIACAAIg7gRQgRgFgSADIgDAAIAAAAQABAAACAAAGDoJIhOAAIg/AjAECoOQACgBADgBQAPgJAOgDAECoOQAAABgBAAIgaAUQAOgMANgJg");
	this.shape_42.setTransform(119.2,404.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,54.1,0,-54.2).s().p("Ak1IEQhCgqgThRQgThRAigyQARgaAVgJIDokVIAAhSIDtkVIAAggIBchWQAFgFAIgBIA7gHQgOADgPAJIgFACQgNAJgOAMIAagUIABgBIAFgCQAPgJAOgDIADAAIgDAAIAAAAIAAAAIADAAQASgDARAFIA7ARIgCAAQAGABAFAEQAEAFAAAGQAAAHgEAEQgFAFgGAAIhGAAIiDBiIlrLYIhGDNQgdgFghgVgAD2nmIA/gjIBOAAIhOAAg");
	this.shape_43.setTransform(119.2,404.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D6D638").ss(6,1,1).p("ACWAEIkrgI");
	this.shape_44.setTransform(72,427.4,0.619,0.619);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3.5,1,1).p("AB2lUIjYgFQhGgDgpA0QgpAzAMBNIA0FQIAGCFIAcAPQAkAQAtAIQCPAaCqhJIgHlvg");
	this.shape_45.setTransform(77.3,461.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#575700","#000000"],[0,1],0,34.7,0,-34.6).s().p("AhHFUQgtgIgkgQIgcgPIgGiFIg0lQQgMhNApgzQApg0BGADIDYAFIB1EKIAHFvQh+A2hvAAQgmAAgmgHg");
	this.shape_46.setTransform(77.3,461.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3.5,1,1).p("AjGARIAAglIGNgpIgMBIQgOAQgiAOQhEAbhkgIQhlgJgsgSQgOgGgGgGg");
	this.shape_47.setTransform(80.8,495.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#575700","#000000"],[0,1],-19.8,0,19.9,0).s().p("AgdA8QhlgJgsgSQgOgGgGgGIgEgEIAAglIGNgpIgMBJQgOAPgiAOQg0AVhHAAQgVAAgYgCg");
	this.shape_48.setTransform(80.8,495.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D6D638").ss(6,1,1).p("AhMn9IBEFaQBHGPAOES");
	this.shape_49.setTransform(94.5,533.1,0.619,0.619);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BE9075").ss(4,1,1).p("Ag3A2IA9iHQAEgJAJgEQAJgEAKADQAJADAFAJQAFAIgCAKQgVBnggA7");
	this.shape_50.setTransform(119.5,358.2,0.619,0.619);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BE9075").ss(2.5,1,1).p("AidjDIgZEjIDqBkICDldg");
	this.shape_51.setTransform(74.8,428.5,0.619,0.619);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,19.7,0,-19.6).s().p("Ai2BgIAZkjIFUAqIiDFdg");
	this.shape_52.setTransform(74.8,428.5,0.619,0.619);

	this.instance_4 = new lib.ball();
	this.instance_4.parent = this;
	this.instance_4.setTransform(118.3,321.4,0.825,0.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlZO0IhokqIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIg");
	this.shape_53.setTransform(101.4,404.4,0.619,0.619);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,94.8,0,-94.7).s().p("AnBKKIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIIkfL+g");
	this.shape_54.setTransform(101.4,404.4,0.619,0.619);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(3.5,1,1).p("AiKA0QhGgygbhQQgdhUAbhYIAihsIGBgJIgDCIIAOAqQAPA1ANA8QAnC/gLC7Qh0BLiDgLQgpgDglgMIgegLg");
	this.shape_55.setTransform(81.3,533.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#575700","#000000"],[0,1],0,36.7,0,-36.7).s().p("AACFuQgpgDglgMIgegLIggkgQhGgygbhQQgdhUAbhYIAihsIGBgJIgDCIIAOAqQAPA1ANA8QAnC/gLC7QhlBChwAAQgRAAgRgCg");
	this.shape_56.setTransform(81.3,533.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#D6D638").ss(6,1,1).p("AiMAAQBGAVBvgOQA6gHAqgM");
	this.shape_57.setTransform(70,567.1,0.619,0.619);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(3.5,1,1).p("AhbjsIgCC2QAADHANBTQArAOBFgJQAjgEAagIIgzl5g");
	this.shape_58.setTransform(69.4,544.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#575700","#000000"],[0,1],0,23.7,0,-23.7).s().p("AhQDkQgMhTAAjHIABi2ICFBQIA0F5QgbAIgjAEQgbAEgXAAQgkAAgagJg");
	this.shape_59.setTransform(69.4,544.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjTrKIB8JEIhMDXIB1MxIBkAYICevgIhctTg");
	this.shape_60.setTransform(90.6,598.4,0.619,0.619);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,92.2,0,-92.2).s().p("AguOCIh1sxIBMjXIh8pEIFLjPIBcNTIiePgg");
	this.shape_61.setTransform(90.6,598.4,0.619,0.619);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aihq2ICAIKIiRDaIAvNDIBsAeIDKv4IhDslg");
	this.shape_62.setTransform(76.1,597.1,0.619,0.619);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,91.1,0,-91.1).s().p("AiDNxIgvtDICRjaIiAoKIERjYIBDMlIjKP4g");
	this.shape_63.setTransform(76.1,597.1,0.619,0.619);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEkocIg7AHQgIABgFAFIhcBWIAAAgIjtEVIAABSIjoEVQgVAJgRAaQgiAyATBRQATBRBCAqQAhAVAdAFIBGjNIFrrYICDhiIBGAAQAGAAAFgFQAEgEAAgHQAAgGgEgFQgFgEgGgBIACAAIg7gRQgRgFgSADAEkocQABAAACAAIgDAAgAGDoJIhOAAIg/AjAECoOQAAABgBAAIgaAUQAOgMANgJQACgBADgBQAPgJAOgD");
	this.shape_64.setTransform(119.4,387.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,54.1,0,-54.2).s().p("Ak1IEQhCgqgThRQgThRAigyQARgaAVgJIDokVIAAhSIDtkVIAAggIBchWQAFgFAIgBIA7gHQgOADgPAJIgFACQgNAJgOAMIAagUIABgBIAFgCQAPgJAOgDIADAAQASgDARAFIA7ARIgCAAQAGABAFAEQAEAFAAAGQAAAHgEAEQgFAFgGAAIhGAAIiDBiIlrLYIhGDNQgdgFghgVgAD2nmIA/gjIBOAAIhOAAgAEkocIADAAIgDAAIAAAAg");
	this.shape_65.setTransform(119.4,387.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#838587").ss(4,1,1).p("AgaARIA0gh");
	this.shape_66.setTransform(110,687.1,0.619,0.619);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_67.setTransform(107.9,685.1,0.619,0.619);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_68.setTransform(105.2,682.8,0.619,0.619);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_69.setTransform(103.5,680.3,0.619,0.619);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_70.setTransform(103.1,677.3,0.619,0.619);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_71.setTransform(103.7,674.6,0.619,0.619);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhvQBCBHgHBrIBLBEQBPA/AOgWQAPgWhLg/IhMg5IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAdQgMAPgHANg");
	this.shape_72.setTransform(106.4,678.8,0.619,0.619);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.4,1.4,-17.8).s().p("AAUCHIhLhEQAHhrhChHQAHgNAMgPQAWgdAUgJQATgJATAMQAJAGAFAIIgWDCIBMA5QBLA/gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_73.setTransform(106.4,678.8,0.619,0.619);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgdgJglQgFgShZhHIhZhDIg2hSQgMgbgSgbQgig1gZABQgpABgWgNg");
	this.shape_74.setTransform(101.6,681.9,0.619,0.619);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAiA1QASAbAMAbIA2BSIBZBDQBZBHAFASQAJAlgcAdQgVAVglAAQgeAAgogOg");
	this.shape_75.setTransform(101.6,681.9,0.619,0.619);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhSgrhVhAQgSgOgFgWQgEgWAKgTg");
	this.shape_76.setTransform(101.4,687.6,0.619,0.619);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.2).s().p("Ag+BVQhSgrhVhAQgSgOgFgWQgEgWAKgTIAbgxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_77.setTransform(101.4,687.6,0.619,0.619);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#2C2C2C").ss(3,1,1).p("AC1hyQgpgKikAyQikAygcAdQgDAjALApQAGAWAGANQAJgPAdgUQA6gpBlggQBEgUA3gHQAqgGAfADQALAAAGgIQAGgJgDgJQgMgfgYgjg");
	this.shape_78.setTransform(70.2,415.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D6D638").s().p("AjQBRQgLgpADgjQAcgdCkgyQCkgyApAKQAYAjAMAfQADAJgGAJQgGAIgLAAQgfgDgqAGQg3AHhEAUQhlAgg6ApQgdAUgJAPQgGgNgGgWg");
	this.shape_79.setTransform(70.2,415.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BE9075").ss(3,1,1).p("ABABDIgwAHQgbAEgXgRQgYgRgEgdQgFgcASgYQARgYAcgEIA8gJ");
	this.shape_80.setTransform(72.9,428.1,0.619,0.619);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(3,1,1).p("Ai7hMQgMAzARA/QAQA8AjA3QAiA2ApAfQAqAgAjgFQgXhkBAgwIgUADQgSACgOgKQgNgLgDgSQgDgSAKgPQAKgOASgDIAmgGIAMBFIAPgXIgXiZIgWgQQgNgLADgRQADgQARgEIBtgVQAZgFAAgVQAAgVgVgSQgngggsgCQg1gDgkAwQgmAAgrASQhWAkgUBZg");
	this.shape_81.setTransform(69.7,420.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("Ag4DuQgpgfgig2Qgjg3gQg8QgRg/AMgzQAUhZBWgkQArgSAmAAQAkgwA1ADQAsACAnAgQAVASAAAVQAAAVgZAFIhtAVQgRAEgDAQQgDARANALIAWAQIAXCZIgPAXIgMhFIgmAGQgSADgKAOQgKAPADASQADASANALQAOAKASgCIAUgDQhAAwAXBkIgLAAQgeAAgkgbg");
	this.shape_82.setTransform(69.7,420.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5F4137").s().p("AAMAMQgZgEgSgLIA8gKIADAaIgDABIgRgCg");
	this.shape_83.setTransform(92.1,437.1,0.619,0.619);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgHARQgGgGgBgJQgBgIADgHQADgHAHgBQAFgBAGAGQAFAGABAJQABAIgDAHQgDAHgHABIgBAAQgFAAgEgFg");
	this.shape_84.setTransform(88.2,424.2,0.619,0.619);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgXAiQgNgKgCgSQgDgQAJgPQAKgOAQgCQAQgDAOALQANAKACASQADAQgJAPQgKAOgQACIgHABQgMAAgLgJg");
	this.shape_85.setTransform(87.4,425,0.619,0.619);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgZAcIgEgBIgJgBIgIAAIgBgCIgCgGIgCgKIAAgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIADAAIAHgHIALgGIALgFIALgDIAXgFIATAAIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAEAEIAFAHIADAGIABACIgPARQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIgQAAIgRADIgOAGIgGAEIgFADIgBABIAAABIgBAAg");
	this.shape_86.setTransform(86.6,418.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BE9075").ss(2,1,1).p("AAMF7ICugaQAhgFAUgbQAUgbgFgiIgXi4IA7gJQAYgDAJgXQAJgXgPgTIhsiDIhhjNIjXgtQhrARhABZQhBBZARBtIAkDpQAQBtBYBCQBYBCBqgRg");
	this.shape_87.setTransform(79.6,424.6,0.619,0.619);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-5.3,-38.9,6.3,37.2).s().p("Ai2FKQhYhCgQhtIgkjpQgRhtBBhZQBAhZBrgRIDXAtIBhDNIBsCDQAPATgJAXQgJAXgYADIg7AJIAXC4QAFAigUAbQgUAbghAFIiuAaQgVAEgUAAQhTAAhGg1g");
	this.shape_88.setTransform(79.6,424.6,0.619,0.619);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D6D638").ss(6,1,1).p("ACEENQgygIg4glQhwhIghiLQghiJA7hWQASgbAagTIAWgN");
	this.shape_89.setTransform(83.6,472.4,0.619,0.619);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BE9075").ss(2.5,1,1).p("ADyCfImLg+QhVgOhPAkIhiArIgWANQgZATgTAbQg7BWAhCKQAhCLBxBIQA5AlAyAIIBljfQANgcAagRQAagRAfAAIHCAAQBHAAAlg9QAlg+gjg/Imir9QgsgqgagoQgYgkgFgbQgCgKgIgGQgJgGgKACQgJACgGAHQgFAHAAAKQADA6BFBYQhZgvgnhiQgGgOgPgFQgQgFgNAKQgIAGgEAKQgDAKADAKQAYBMBfBLQhYg9g9g7QgKgJgNgBQgOgBgLAIQgOAJgCASQgCARAMANQBtByBGAcIAJADAhWmoQhHgahJhIQgIgIgKAAQgLgBgJAGQgLAIgCANQgBAOAJAJQAwA0BaAvQAsAXAjANIhDgBQgSgBgJAQQgKAPAJAQQAJAPASABIC4ADIBvCfIAaDmIAtA0AE3DvIhFhQ");
	this.shape_90.setTransform(107.6,445.7,0.619,0.619);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.1,0,-70.1).s().p("AlpKQQhxhIghiLQghiKA7hWQATgbAZgTIAWgNIBigrQBPgkBVAOIGLA+IBFBQIhFhQIgtg0IgajmIhvifIi4gDQgSgBgJgPQgJgQAKgPQAJgQASABIBDABQgjgNgsgXQhagvgwg0QgJgJABgOQACgNALgIQAJgGALABQAKAAAIAIQBJBIBHAaIAJADIgJgDQhGgchthyQgMgNACgRQACgSAOgJQALgIAOABQANABAKAJQA9A7BYA9QhfhLgYhMQgDgKADgKQAEgKAIgGQANgKAQAFQAPAFAGAOQAnBiBZAvQhFhYgDg6QAAgKAFgHQAGgHAJgCQAKgCAJAGQAIAGACAKQAFAbAYAkQAaAoAsAqIGiL9QAjA/glA+QglA9hHAAInCAAQgfAAgaARQgaARgNAcIhlDfQgygIg5glg");
	this.shape_91.setTransform(107.6,445.7,0.619,0.619);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#D6D638").ss(6,1,1).p("ACfAFIk9gI");
	this.shape_92.setTransform(74.6,453.4,0.619,0.619);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(3.5,1,1).p("AB9lpIjlgGQhKgDgrA3QgsA3AMBRIA4FlIAGCNIAeAQQAnASAvAIQCYAbC0hMIgHlmg");
	this.shape_93.setTransform(80.2,489.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#575700","#000000"],[0,1],-25.6,0,25.7,0).s().p("AhLFpQgvgIgngSIgegQIgGiNIg4llQgMhRAsg3QArg3BKADIDlAGIB9E7IAHFmQiFA4h3AAQgoAAgogHg");
	this.shape_94.setTransform(80.2,489.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEYDIIgvqEIiUgaIgtJVIkjAOIgcAOIBvE8IE6hTQA/gRAmg1QAmg1gFhBg");
	this.shape_95.setTransform(97,440.8,0.619,0.619);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,47.1,0,-47.1).s().p("AkXCbIAcgOIEjgOIAtpVICUAaIAvKEQAFBBgmA1QgmA1g/ARIk6BTg");
	this.shape_96.setTransform(97,440.8,0.619,0.619);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BE9075").ss(2.5,1,1).p("AinjPIgbE1ID6BqICLlzg");
	this.shape_97.setTransform(76.2,453.7,0.619,0.619);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,20.9,0,-20.8).s().p("AjCBmIAbk1IFpAsIiKFzg");
	this.shape_98.setTransform(76.2,453.7,0.619,0.619);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(3.5,1,1).p("AjSAQIAAgnIGlgsIgICAQgQAEgmACQhKAEhqgKQhrgJgvgTQgPgGgHgGg");
	this.shape_99.setTransform(82.8,525.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#575700","#000000"],[0,1],-21.1,0,21.1,0).s().p("AgfA9QhrgJgvgTQgOgGgIgGIgDgFIAAgnIGlgsIgICAQgRAEgkACIgrABQg9AAhNgHg");
	this.shape_100.setTransform(82.8,525.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#D6D638").ss(6,1,1).p("AEPh2QjGCAi/BEQg8AUg0ANIgoAI");
	this.shape_101.setTransform(101.1,593.3,0.619,0.619);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#D6D638").ss(6,1,1).p("AjvmuIAJAvQAOA8AVBAQBFDNB3CkQCCC0B1CN");
	this.shape_102.setTransform(101.5,560.8,0.619,0.619);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(3.5,1,1).p("Ai6BFQhKg1gdhVQgfhZAdhdIAkh0IGcAtIgICVIAVAZQAZAhAWAqQBHCEASCiQh7BQh3AqQglANgfAIIgZAEg");
	this.shape_103.setTransform(87.3,563.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#575700","#000000"],[0,1],-30.6,0,30.6,0).s().p("Ai6BFQhKg1gdhVQgfhZAdhdIAkh0IGcAtIgICVIAVAZQAZAhAWAqQBHCEASCiQh7BQh3AqQglANgfAIIgZAEg");
	this.shape_104.setTransform(87.3,563.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#838587").ss(4,1,1).p("AgZARIA0gh");
	this.shape_105.setTransform(84.9,678.5,0.619,0.619);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_106.setTransform(82.7,676.4,0.619,0.619);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_107.setTransform(80,674.1,0.619,0.619);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_108.setTransform(78.3,671.7,0.619,0.619);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_109.setTransform(78,668.7,0.619,0.619);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_110.setTransform(78.6,665.9,0.619,0.619);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhuQBDBFgIBsIBLBEQBPA/AOgWQAPgWhKg+IhNg6IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAeQgMAPgHANg");
	this.shape_111.setTransform(81.2,670.1,0.619,0.619);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.5,1.4,-17.7).s().p("AAUCHIhLhEQAIhshDhFQAHgNAMgPQAWgeAUgJQATgJATAMQAJAGAFAIIgWDCIBNA6QBKA+gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_112.setTransform(81.2,670.1,0.619,0.619);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgegJgkQgFgShZhHIhZhDIg2hSQgMgbgRgbQgjg1gZABQgpABgWgNg");
	this.shape_113.setTransform(76.5,673.2,0.619,0.619);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAjA1QARAbAMAbIA2BSIBZBDQBZBHAFASQAJAkgcAeQgVAVglAAQgeAAgogOg");
	this.shape_114.setTransform(76.5,673.2,0.619,0.619);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhTgshUhAQgSgNgEgWQgFgWALgTg");
	this.shape_115.setTransform(76.2,679,0.619,0.619);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.8,1,-13.3).s().p("Ag+BVQhTgshUhAQgSgNgEgWQgFgWALgTIAagxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgGgRIANARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_116.setTransform(76.2,679,0.619,0.619);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#60605B").ss(3,1,1).p("AiHCTIBGlEIA8AnQBJAmBFgFIidEbg");
	this.shape_117.setTransform(73.9,657.1,0.619,0.619);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-13.6,0,13.7,0).s().p("AiHCTIBFlEIA8AnQBJAmBGgFIieEbg");
	this.shape_118.setTransform(73.9,657.1,0.619,0.619);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#60605B").ss(3,1,1).p("AhrCpIAGlqIBFAWQBPAUA9gLIhsFkg");
	this.shape_119.setTransform(98.5,668.2,0.619,0.619);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.8,0,10.8,0).s().p("AhrCoIAGlpIBFAWQBPAUA9gLIhsFkg");
	this.shape_120.setTransform(98.5,668.2,0.619,0.619);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#D6D638").ss(6,1,1).p("AiIA+QBOgGBpg6IBag7");
	this.shape_121.setTransform(82.3,596.8,0.619,0.619);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(3.5,1,1).p("AiRjOIAiCgQArCvAtBNQAvgDBCglIA4gkg");
	this.shape_122.setTransform(76.2,580);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#575700","#000000"],[0,1],-14.5,0,14.6,0).s().p("AhvguIgiifIEjFPIg4AkQhCAmgvACQgthNgrivg");
	this.shape_123.setTransform(76.2,580);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjNqIIBhGkIhhBqIgXPFIBrAZIFex9IhUpKg");
	this.shape_124.setTransform(106,626.5,0.619,0.619);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,86.9,0,-86.8).s().p("AjkNLIAXvFIBhhqIhhmkIFejbIBUJKIleR9g");
	this.shape_125.setTransform(106,626.5,0.619,0.619);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhqnAICKCYIioCFIiuMrIBzAfIH6uOIh+m/g");
	this.shape_126.setTransform(84.7,626.1,0.619,0.619);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67.9,0,-67.9).s().p("Ak2KIICusrICoiFIiKiYIEjjmIB+G/In6OOg");
	this.shape_127.setTransform(84.7,626.1,0.619,0.619);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_128.setTransform(116.4,685.5,0.576,0.576);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_129.setTransform(112.6,684.4,0.576,0.576);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_130.setTransform(108.2,683.1,0.576,0.576);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_131.setTransform(105,681.3,0.576,0.576);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#838587").ss(4,1,1).p("AgnAKIBPgT");
	this.shape_132.setTransform(102.8,678.2,0.576,0.576);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_133.setTransform(101.7,675.1,0.576,0.576);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBnA6BBB5ICMAnQCOAhgCgfQgDgeiFgiIiFgbIhwjfQgJgHgLgEQgWgIgLAQQgKARgDApQgCAVABASg");
	this.shape_134.setTransform(109.3,677.5,0.576,0.576);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#606163","#322F2F"],[0,1],4.5,21.3,-6.4,-20.5).s().p("ABVCbIiMgnQhBh5hng6QgBgSACgVQADgpAKgRQALgQAWAIQALAEAJAHIBwDfICFAbQCFAiADAeQABAPghAAQgiAAhKgRg");
	this.shape_135.setTransform(109.3,677.5,0.576,0.576);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBVAiCDgHQCUgOANg9QAEgWgOgYQgLgUgRgMQgWgQihgkIibgfIhuhGQgagbgegZQg8gygUAJQgiAOgKgNg");
	this.shape_136.setTransform(107.8,683,0.576,0.576);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.4,-8.7,-26.5).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIADAQQAKANAigOQAUgJA8AyQAeAZAaAbIBuBGICbAfQChAkAWAQQARAMALAUQAOAYgEAWQgNA9iUAOIgrABQhmAAhHgcg");
	this.shape_137.setTransform(107.8,683,0.576,0.576);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#60605B").ss(4,1,1).p("AliiGIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgugPgagLQgvgUAEgYg");
	this.shape_138.setTransform(107.9,689.1,0.576,0.576);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.2,17,-5.7,-21.1).s().p("AgRCBQiSgPh0goQgugPgagLQgvgUAEgYIAoiKIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh3AAQgyAAg3gGg");
	this.shape_139.setTransform(107.9,689.1,0.576,0.576);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#D6D638").ss(6,1,1).p("ACWExQg5gKhAgpQh/hSglidQgmibBEhiQAVgeAcgVIAZgP");
	this.shape_140.setTransform(77.4,482.6,0.576,0.576);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#BE9075").ss(2.5,1,1).p("AESEtIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQhLAphKgrInTkGIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIAtCKAFOlBIgGgJAi2FZIhLgq");
	this.shape_141.setTransform(101.2,472.2,0.576,0.576);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,62.8,0,-62.8).s().p("AEdJfInTkGIhLgqIBLAqIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQglAUglAAQgmAAglgWgAE/G3IgtiKgAFOlBIgGgJg");
	this.shape_142.setTransform(101.2,472.2,0.576,0.576);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#2C2C2C").ss(3,1,1).p("AC+h4QgrgKisA0QiuA0gdAfQgDAlAMAsQAGAWAGAOQAJgPAfgWQA9grBqghQB+gnBRAGQALABAHgJQAHgJgEgKQgNgigZgjg");
	this.shape_143.setTransform(63.3,422.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D6D638").s().p("AjbBWQgMgsADglQAdgfCug0QCsg0ArAKQAZAjANAiQAEAKgHAJQgHAJgLgBQhRgGh+AnQhqAhg9ArQgfAWgJAPQgGgOgGgWg");
	this.shape_144.setTransform(63.3,422.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#BE9075").ss(3,1,1).p("ABIBMIg1AIQgfAFgbgUQgagUgFggQgFggATgbQATgbAhgFIBEgK");
	this.shape_145.setTransform(66.1,436,0.576,0.576);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(3,1,1).p("AjGhRQgMA2ATBDQAQA+AlA6QAkA6AqAgQAtAiAkgFQgXhqBDgyIgVADQgSADgPgMQgPgLgDgTQgCgTAJgQQAMgPASgDIAogGIANBJIAQgZIgZihIgXgRQgOgLAEgSQAEgRARgEIBzgWQAagFAAgXQAAgWgWgTQgpgigugCQg4gDgmAzQgoAAguATQhaAlgWBeg");
	this.shape_146.setTransform(62.8,428.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("Ag8D6Qgqgggkg6Qglg6gQg+QgThDAMg2QAWheBaglQAugTAoAAQAmgzA4ADQAuACApAiQAWATAAAWQAAAXgaAFIhzAWQgRAEgEARQgEASAOALIAXARIAZChIgQAZIgNhJIgoAGQgSADgMAPQgJAQACATQADATAPALQAPAMASgDIAVgDQhDAyAXBqIgKABQggAAgngeg");
	this.shape_147.setTransform(62.8,428.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#5F4137").s().p("AANANQgcgEgVgNIBEgKIAFAdIgEAAQgJAAgLgCg");
	this.shape_148.setTransform(86.4,445.5,0.576,0.576);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgJAUQgGgHgBgKQgCgKAEgHQAEgJAHgBQAGgBAGAGQAGAHACAKQACAKgEAIQgEAIgHABIgCAAQgFAAgGgFg");
	this.shape_149.setTransform(82.2,431.9,0.576,0.576);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AgZAnQgQgMgDgUQgDgTALgQQALgQATgDQARgDAPAMQAQAMADAUQADATgLAQQgLAQgTADIgGABQgOAAgMgKg");
	this.shape_150.setTransform(81.3,432.7,0.576,0.576);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgdAbIgFAAIgPAAIgBgCIgCgGIgBgKIAAgFQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIADgCIAIgGIAKgGIAMgFIAXgHIALgBIAVgBIACgBIADABIAJALIAEAHIgFAHIgGAFIgEADQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgBIgQABIgJABIgKACIgHADIgHADIgHAEIgFAEIgCACIAAABIgBgBg");
	this.shape_151.setTransform(80.6,426.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#BE9075").ss(2,1,1).p("AAOGtIDEgeQAlgFAXgfQAXgfgFgmIgajRIBCgJQAbgEALgaQAKgbgRgVIh7iUIhtjoIj0gyQh5AShJBlQhIBkASB8IApEIQATB8BjBKQBjBLB5gTg");
	this.shape_152.setTransform(73.2,432.3,0.576,0.576);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-6,-44.1,7.1,42.1).s().p("AjOF1QhjhKgTh8IgpkIQgSh8BIhkQBJhlB5gSID0AyIBtDoIB7CUQARAVgKAbQgLAagbAEIhCAJIAaDRQAFAmgXAfQgXAfglAFIjEAeQgYAEgXAAQheAAhPg8g");
	this.shape_153.setTransform(73.2,432.3,0.576,0.576);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#D6D638").ss(6,1,1).p("AC0AFIlngJ");
	this.shape_154.setTransform(67.9,462.7,0.576,0.576);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(3.5,1,1).p("ABqlcIiagGQhMgDg5A1Qg4A0gDBNIgLFTIgVCFIAeAQQApATA1ALQCnAhDbg+IAjkag");
	this.shape_155.setTransform(67.6,497.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#575700","#000000"],[0,1],0,35.4,0,-35.5).s().p("AiUFXQg0gLgpgTIgfgQIAWiFIAKlTQADhNA5g0QA4g1BMADICbAGICmF8IgjEaQiPAph4AAQhBAAg6gMg");
	this.shape_156.setTransform(67.6,497.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlfgMIEsCLIFno/ICHBoIkkKeQgeBEhCAhQhBAhhIgQIlohSIA3l2");
	this.shape_157.setTransform(101,469.3,0.576,0.576);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,44.9,0,-44.8).s().p("AhSG8IlohSIA3l2IAkAAIEsCLIFno/ICHBoIkkKeQgeBEhCAhQgsAWguAAQgXAAgYgFg");
	this.shape_158.setTransform(101,469.3,0.576,0.576);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#BE9075").ss(2.5,1,1).p("Ai9jrIgeFfIEaB4ICdmkg");
	this.shape_159.setTransform(69.5,463,0.576,0.576);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,23.6,0,-23.5).s().p("AjbBzIAeleIGZAzIidGkg");
	this.shape_160.setTransform(69.5,463,0.576,0.576);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#D6D638").ss(6,1,1).p("Ak3DlQAKACBGgbQBVgiBWgxQECiTByjL");
	this.shape_161.setTransform(94.8,596.6,0.576,0.576);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(3.5,1,1).p("AjfgFIAAgrIG/AAIgMBaQgRADgnACQhPAEhwgJQhwgKgxgUQgPgHgIgFg");
	this.shape_162.setTransform(64.8,532.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#575700","#000000"],[0,1],-22.3,0,22.4,0).s().p("AgjAqQhwgKgxgUQgPgHgIgFIgEgFIAAgrIG/AAIgMBaQgRADgnACIgyACQg+AAhPgHg");
	this.shape_163.setTransform(64.8,532.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#D6D638").ss(6,1,1).p("AkPnnIALA1QAPBEAZBJQBNDoCHC6QCSDLCFCg");
	this.shape_164.setTransform(84.4,567.8,0.576,0.576);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(3.5,1,1).p("ABAjWIAgAZQACABACACIADADIAJicImzgwIgmB6QgfBkAaBmQAaBlBKBKQEXESAHACQAGABAogQQAxgTAxgdQCVhVBCh1QhNh7h/h3Qgkgigkge");
	this.shape_165.setTransform(74.8,571);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#575700","#000000"],[0,1],0,38.8,0,-38.7).s().p("AAUGEQgHgCkXkSQhKhKgahlQgahmAfhkIAmh6IGzAwIgJCcQAkAeAkAiQB/B3BNB7QhCB1iVBVQgxAdgxATQgmAPgHAAIgBAAgABgi9IAEADIADADIgDgDIgEgDIgggZg");
	this.shape_166.setTransform(74.8,571);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#60605B").ss(3,1,1).p("AhcBwIAljtIAPATQAWAVAgAFQAiAFAagEQANgBAGgDIhPDRg");
	this.shape_167.setTransform(98.6,667.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-9.3,0,9.3,0).s().p("AhcBwIAmjuIAOAUQAWAVAgAEQAiAGAagEQANgBAGgDIhPDRg");
	this.shape_168.setTransform(98.6,667.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al8nuIFrEvIhaBkIiWO4IC7AZIG0yUQAXg9gMhAQgLg/grgxIk+lqg");
	this.shape_169.setTransform(104.2,629.3,0.576,0.576);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,88.6,0,-88.6).s().p("AkBNdICWu4IBahkIlrkwIGBmGIE+FqQArAwALBAQAMBAgXA8Im0SVg");
	this.shape_170.setTransform(104.2,629.3,0.576,0.576);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_171.setTransform(90.1,673.7,0.576,0.576);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_172.setTransform(86.4,672.6,0.576,0.576);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_173.setTransform(82,671.3,0.576,0.576);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_174.setTransform(78.7,669.4,0.576,0.576);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#838587").ss(4,1,1).p("AgmAKIBOgT");
	this.shape_175.setTransform(76.6,666.4,0.576,0.576);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_176.setTransform(75.4,663.3,0.576,0.576);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBmA5BBB6ICNAnQCNAhgBgfQgDgeiGgiIiEgbIhwjfQgJgHgLgEQgXgIgKAQQgLARgDApQgBAVABASg");
	this.shape_177.setTransform(83,665.7,0.576,0.576);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#606163","#322F2F"],[0,1],4.4,21.3,-6.4,-20.5).s().p("ABVCbIiNgnQhBh6hmg5IAAgnQADgpALgRQAKgQAXAIQALAEAJAHIBwDfICEAbQCGAiADAeQAAAPggAAQgjAAhJgRg");
	this.shape_178.setTransform(83,665.7,0.576,0.576);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBWAiCDgHQCUgOAMg9QAFgWgOgYQgMgVgRgLQgWgQihgkIibgfIhthGQgagbgegZQg8gygVAJQghAOgKgNg");
	this.shape_179.setTransform(81.5,671.2,0.576,0.576);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.3,-8.7,-26.6).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIAEAQQAKANAhgOQAVgJA8AyQAeAZAaAbIBtBGICbAfQChAkAWAQQARALAMAVQAOAYgFAWQgMA9iUAOIgsABQhmAAhHgcg");
	this.shape_180.setTransform(81.5,671.2,0.576,0.576);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#60605B").ss(4,1,1).p("AljiGIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgvgPgZgLQgvgUAEgYg");
	this.shape_181.setTransform(81.7,677.3,0.576,0.576);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.1,17,-5.8,-21.1).s().p("AgRCBQiSgPh0goQgvgPgZgLQgvgUAEgYIAniKIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh2AAQgyAAg4gGg");
	this.shape_182.setTransform(81.7,677.3,0.576,0.576);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#60605B").ss(3,1,1).p("AjACxICCmFIARASQAXAVAZAQQBXA0BngNIj/FLg");
	this.shape_183.setTransform(73.1,655.1,0.576,0.576);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.2,0,19.3,0).s().p("AjACxICDmFIAQASQAXAVAZAQQBXA0BmgNIj9FLg");
	this.shape_184.setTransform(73.1,655.1,0.576,0.576);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhXmZIBtCaIiSBuIkEMLICCAkIJ/tAIiPn7g");
	this.shape_185.setTransform(84.2,628.8,0.576,0.576);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67,0,-66.9).s().p("AmAJ6IEEsLICRhuIhsiaIFJkEICPH7Ip/M/g");
	this.shape_186.setTransform(84.2,628.8,0.576,0.576);

	this.instance_5 = new lib.player2ready();
	this.instance_5.parent = this;
	this.instance_5.setTransform(93.8,577.3,1,1,0,0,0,87.8,119.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#D6D638").ss(5,1,1).p("AkLgnQAegoBTgJQBWgKBsAbQBsAbBBAuQBAAvgKAr");
	this.shape_187.setTransform(58.7,605,0.517,0.517);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#D6D638").ss(5,1,1).p("AkKBcQgKgrBAgvQBBguBsgbQBsgbBWAKQBTAJAeAo");
	this.shape_188.setTransform(125,605,0.517,0.517);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#2C2C2C").ss(2.5,1,1).p("ADoASQgCgagQgVQgRgWgYgLQhPghheAAIgBAAQhbAAhLAeQgZAKgQAVQgRAWgDAZQgGArACAoQAAAAALgPQAPgTAXgOQBHgwBwAAQBuAABJAvQAlAYAOAXQABgzgDgZg");
	this.shape_189.setTransform(92,475.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D6D638").s().p("AjkANQADgZARgWQAQgVAZgKQBLgeBbAAIABAAQBeAABPAhQAYALARAWQAQAVACAaQADAZgBAzQgOgXglgYQhJgvhuAAQhwAAhHAwQgXAOgPATIgLAPQgCgoAGgrg");
	this.shape_190.setTransform(92,475.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(2.5,1,1).p("ABajSQg4gHg5AXQgSAHgQAJIgNAIQgFgEgJgEQgQgHgMACQg5ALgiBfQgRAwgGAsIABgBQgBAJAAAIIAAByIAUAAIAABEIAQgXIAAigIAKgNQAOgQASgNQA9grBXAAQBXAAA9ArQAeAVAMAVIAACgIAQAXIAAhEIAUAAIAAhnQAChKgehLQgnhfhFgIg");
	this.shape_191.setTransform(91.9,478.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AC+C+IAAigQgMgVgegVQg9grhXAAQhXAAg9ArQgSANgOAQIgKANIAACgIgQAXIAAhEIgUAAIAAhyIABgRIgBABQAGgsARgwQAihfA5gLQAMgCAQAHIAOAIIANgIQAQgJASgHQA5gXA4AHQBFAIAnBfQAeBLgCBKIAABnIgUAAIAABEg");
	this.shape_192.setTransform(91.9,478.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#4B3A3B").s().p("AhUAAIgkgXIB4ASIB5gGQgOAKgWAHQgtASgoAAQgoAAgsgYg");
	this.shape_193.setTransform(92,511.8,0.517,0.517,0,180,0);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_194.setTransform(104.2,496.2,0.517,0.517);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_195.setTransform(103,496.9,0.517,0.517);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_196.setTransform(82,496.2,0.517,0.517);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_197.setTransform(80.8,496.9,0.517,0.517);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_198.setTransform(91.9,498.7,0.517,0.517);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAsAUIgCgBIgUgHIgLgDIgLgDIgLgBIgMAAIgFABIgFAAIgIACIgCABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgFgCIgPgCIADgHIAEgIIADgEIADgCIADAAIALgEIAOgBIAOAAIANABIAOADIANAEIAWAIIADABIACACIADADIAEAIIACAFIAAACIgUAEIgCgBg");
	this.shape_199.setTransform(103.1,489.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AhXApIgogHIABgEIAEgLIAIgPIAFgIIAEgCIAFgCQAYgKATgGQAMgFANgDQAJgCASgDIAbgDIAbAAIAaADIAXAGIAFACQAEABABABIAGAJQAEAFAFALIAFANIgmAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEgCIgQgEQgFgBgFAAIgKgBIgVgBIgXADIgWAFIgWAGIglAOIgEACIgDACIgBAAg");
	this.shape_200.setTransform(80.6,489.4,0.517,0.517);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_201.setTransform(91.9,494.4,0.517,0.517);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_202.setTransform(91.9,494.4,0.517,0.517);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_203.setTransform(91.9,498.8,0.517,0.517);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_204.setTransform(91.9,498.8,0.517,0.517);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAOBxQgtgDgagMQgggOgDgaIgEgaQgBgIAIgEIgEgCQgGgFgBgGIgGhqQgBgGAFgEQAGgEAHABICYAIQAIAAAHAFQAGAEABAHIAFAhQAAAGgEAEQgGAEgIAAIglgCQAXAEAPAJQAOAIAIAUQADAJACAJIAHA1QAEAagcALQgTAHgiAAIgQAAgAhJA7QAFAiBPAFQBRAEgEgiIgIg1QgBgKgEgIQgGgMgGgDQgRgKgdgDIgHgBQgXgBgOAGIgBgiIBiAFIgFghIiYgIIAHBpIA4ADIAAgGQABgFARAAIAFAAIAPABQAJACABAJIAHAuQABALgYgBIgBgBQgXgBgCgLIgDgTIg4gDgAALA1IgGgmIgJgBQAAAHgHADQAJAFABAIIACAPIAFABIAFAAg");
	this.shape_205.setTransform(94.4,556.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D6D638").s().p("AAMBpQhZgFgFgpIgEgaQAAgDACgDQACgBAEAAIA4ADQAFAAADACQADADAAADIADATQABADANABQAPABAAgEIgHguIgBgCIAAgBIgNgBIgEAAIgKAAIAAAFQAAADgCACQgDACgEAAIg4gDQgEAAgDgDQgEgCAAgEIgHhpQAAgDADgCQACgCAEAAICYAIQAFAAADADQADACAAADIAFAiQABADgDACQgCACgFAAIhZgFIAAAPQANgBAOAAIAIABQAgADATALQAKAFAGAPQAFAKABAJIAIA1QAFAmhKAAIgRgBg");
	this.shape_206.setTransform(94.4,556.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#D6D638").ss(5,1,1).p("AANj9QA2DbhiEg");
	this.shape_207.setTransform(64.6,525,0.517,0.517);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#D6D638").ss(5,1,1).p("AAvDQQh0jZAdjG");
	this.shape_208.setTransform(121.6,521.7,0.517,0.517);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#D6D638").ss(5,1,1).p("Akyi9QAJBdB3CPQB2CPA8gBQBTgRB2iPQB5iQgRhK");
	this.shape_209.setTransform(91.9,525.1,0.517,0.517);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#D9A493").ss(3.4,1,1).p("ABzENIhzBPIhyhPQg2gmgZg9Qgag9ANhBIAXh8IAAkLIFvAAIAAELIAXB8QANBBgaA9QgZA9g2Amg");
	this.shape_210.setTransform(91.8,516.9,0.517,0.517);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,68.7,0,23.6).s().p("AhyENQg2gmgZg9Qgag9ANhCIAXh7IAAkLIFvAAIAAELIAXB7QANBCgaA9QgZA9g2AmIhzBPg");
	this.shape_211.setTransform(91.8,516.9,0.517,0.517);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(2.5,1,1).p("AEFlBQAFgPhFgRQhTgUh/AAQh3AAhVAfQgbAJgUALIgPAJQAcByg0CVIAIA+QAGBGgOAhQgEAKAEBHQACAjACAiQBGA+BeAbQBTAYBZgGQBSgFBBgeQBAgdAXgqQACgiACgkQAEhHgFgKQgNghAVhhIAYhcQg8hwAPhmg");
	this.shape_212.setTransform(93.3,543.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#575700","#000000"],[0,1],0,37.4,0,-37.3).s().p("AiHFiQhegbhGg+IgEhFQgEhHAEgKQAOghgGhGIgIg+QA0iVgchyIAPgJQAUgLAbgJQBVgfB3AAQB/AABTAUQBFARgFAPQgPBmA8BwIgYBcQgVBhANAhQAFAKgEBHIgEBGQgXAqhAAdQhBAehSAFIgkACQhGAAhCgUg");
	this.shape_213.setTransform(93.3,543.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#D6D638").ss(5,1,1).p("ADXlbQiYBgh9DiQhjCyg1DD");
	this.shape_214.setTransform(55.9,584.9,0.517,0.517);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#D6D638").ss(5,1,1).p("ADWFcQg0jDhkiyQh8jiiXhg");
	this.shape_215.setTransform(127.8,584.9,0.517,0.517);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#838587").ss(2,1,1).p("AhqgDIDUAH");
	this.shape_216.setTransform(150.5,673.4,0.517,0.517);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#838587").ss(2,1,1).p("AhoAEIDRgG");
	this.shape_217.setTransform(149.5,676.8,0.517,0.517);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#838587").ss(2,1,1).p("AhhAMIDDgX");
	this.shape_218.setTransform(151.3,679.2,0.517,0.517);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#838587").ss(2,1,1).p("AhUANICpgZ");
	this.shape_219.setTransform(153.3,681.4,0.517,0.517);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#838587").ss(2,1,1).p("AhdARIC6gh");
	this.shape_220.setTransform(155.8,684.2,0.517,0.517);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#838587").ss(2,1,1).p("AhOATICdgl");
	this.shape_221.setTransform(157.5,686.2,0.517,0.517);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#201F1F").ss(2,1,1).p("Ak+hoIgKBaQgDBgAhApQBGAKA6AkQAeARAPAQIB6AHQCKAGBagMQBcgPALg4QADgRgFgTIgGgQQh8hdhAgxQgngggWgnIgPgiIggBgIBYBPQAQAOgQATQgPASgfAEQgaADgQgMQg+gzglgdQhGg3gIgFQgEgCgfg+Qgeg6gSgBQgkgDgZAOQgrAZAWBFg");
	this.shape_222.setTransform(153.1,682.3,0.517,0.517);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#606163","#322F2F"],[0,1],-35.9,-5.2,34,9.6).s().p("AgDDRIh6gHQgPgQgegRQg6gkhGgKQghgpADhgIAKhaQgWhFArgZQAZgOAkADQASABAeA6QAfA+AEACQAIAFBGA3IBjBQQAQAMAagDQAfgEAPgSQAQgTgQgOIhYhPIAghgIAPAiQAWAnAnAgQBAAxB8BdIAGAQQAFATgDARQgLA4hcAPQg9AIhTAAQgoAAgsgCg");
	this.shape_223.setTransform(153.1,682.3,0.517,0.517);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#201F1F").ss(2,1,1).p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_224.setTransform(150.9,677.8,0.517,0.517);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#322F2F","#606163"],[0,1],-23,-6,25.7,4.3).s().p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_225.setTransform(150.9,677.8,0.517,0.517);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#60605B").ss(2,1,1).p("Ak3hOIgDAOQgEAWAPASQAPASAcAGQAmAIAYASQBQA6C5gFQAigBAzgGQA8gIAvgiQAvghAFgnIAFghg");
	this.shape_226.setTransform(153.7,692.8,0.517,0.517);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-30.7,-9.2,28.9,3.4).s().p("AjGAaQgYgSgmgIQgcgGgPgSQgPgSAEgWIADgOIJzADIgFAhQgFAngvAhQgvAig8AIQgzAGgiABIgdAAQijAAhJg1g");
	this.shape_227.setTransform(153.7,692.8,0.517,0.517);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#838587").ss(2.5,1,1).p("ABqgDIjUAH");
	this.shape_228.setTransform(35.5,673.4,0.517,0.517);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#838587").ss(2.5,1,1).p("ABpAEIjRgG");
	this.shape_229.setTransform(36.4,676.8,0.517,0.517);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#838587").ss(2.5,1,1).p("ABiAMIjDgX");
	this.shape_230.setTransform(34.6,679.2,0.517,0.517);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#838587").ss(2.5,1,1).p("ABVANIipgZ");
	this.shape_231.setTransform(32.6,681.4,0.517,0.517);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#838587").ss(2.5,1,1).p("ABeARIi7gh");
	this.shape_232.setTransform(30.1,684.2,0.517,0.517);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#838587").ss(2.5,1,1).p("ABPATIidgl");
	this.shape_233.setTransform(28.4,686.2,0.517,0.517);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#201F1F").ss(2,1,1).p("AFAhoIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQiLAGhZgMQhdgPgLg4QgDgRAFgTIAGgQIBGg1QBOg6AogfQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFg");
	this.shape_234.setTransform(32.9,682.3,0.517,0.517);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#606163","#322F2F"],[0,1],36,-5.2,-33.9,9.6).s().p("AjfDLQhdgPgLg4QgDgRAFgTIAGgQIBGg1IB2hZQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQgtACgoAAQhTAAg8gIg");
	this.shape_235.setTransform(32.9,682.3,0.517,0.517);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#201F1F").ss(2.5,1,1).p("AC/AcQATgYAJgfQAUg+gsgiQgwgkhwgDQhigDgfARQgVAMAXBNQAMAmAPAjIifCCICTATg");
	this.shape_236.setTransform(35.1,677.8,0.517,0.517);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#322F2F","#606163"],[0,1],23,-6,-25.7,4.3).s().p("AjgCQICfiCQgPgjgMgmQgXhNAVgMQAfgRBiADQBwADAwAkQAsAigUA+QgJAfgTAYIkMCHg");
	this.shape_237.setTransform(35.1,677.8,0.517,0.517);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#60605B").ss(2.5,1,1).p("AE4hOIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhQA6i5gFQgkgBgygGQg7gIgvgiQgwghgFgnIgFghg");
	this.shape_238.setTransform(32.2,692.8,0.517,0.517);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],30.8,-9.2,-28.8,3.4).s().p("AhBBPQgkgBgygGQg7gIgvgiQgwghgFgnIgFghIJzgDIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhKA1ijAAIgcAAg");
	this.shape_239.setTransform(32.2,692.8,0.517,0.517);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(2.5,1,1).p("AD5jVQg4AZjBASQjAgSg4gZQhPAyhAB0Qg0BcgaBkIAAAAQAPgUArgFQAtgFA4AOQA4AOAhAYQAiAYgGAWICAiPQANgOARgIQARgHASAAQASAAARAHQASAIAMAOICACPQgFgWAhgYQAigYA4gOQA4gOAtAFQArAFAPAUIAAAAQgbhkgzhcQhBh0hOgyg");
	this.shape_240.setTransform(91.9,588.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#575700","#000000"],[0,1],0,21.3,0,-21.4).s().p("ABBBGQgMgNgRgJQgRgHgTAAQgSAAgRAHQgRAJgNANIiACPQAFgVghgZQghgYg4gOQg4gOgtAFQgrAFgPAVIAAAAQAbhlAzhcQBBh0BOgyQA4AZDAASQDBgSA4gZQBOAyBAB0QA0BcAbBlIAAAAQgQgVgqgFQgtgFg4AOQg4AOgiAYQggAZAEAVg");
	this.shape_241.setTransform(91.9,588.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#60605B").ss(2.5,1,1).p("AC5CWIgilZQhhA5g9AZQhRAhhgAKIByEKg");
	this.shape_242.setTransform(141.9,670.7,0.517,0.517);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],18.6,0.6,-18.5,0.6).s().p("Ai4hFQBggLBRghQA9gZBhg5IAiFZIj/Aug");
	this.shape_243.setTransform(141.9,670.7,0.517,0.517);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#60605B").ss(2.5,1,1).p("AjDCzIAwmTQBvBCAzAYQBZAoBdAKIiIE1g");
	this.shape_244.setTransform(42.3,669.3,0.517,0.517);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.6,0.1,19.7,0.1).s().p("AjDCzIAwmTQBvBCAzAYQBZAoBcAKIiIE1g");
	this.shape_245.setTransform(42.3,669.3,0.517,0.517);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aj7vQIF3GxQARAUA1BpQA2BpAFAZICrTxIj1AAIlGvrIAAisIkUoHg");
	this.shape_246.setTransform(128.8,628,0.517,0.517);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,-97.7,0,97.7).s().p("ACzPRIlGvrIAAisIkUoHICrkDIF4GxQAQAUA2BpQA2BpAFAZICrTxg");
	this.shape_247.setTransform(128.8,628,0.517,0.517);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(3.4,1,1).p("ACKghQAFAWgkAYQglAag5AOQg4AOgsgFQgsgGgGgWQgFgWAlgYQAkgaA5gOQA4gOAsAFQAtAGAFAWg");
	this.shape_248.setTransform(124.8,606.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#575700","#000000"],[0,1],-13.8,0,13.9,0).s().p("AhXA+QgsgGgGgWQgFgWAlgYQAkgaA5gOQA4gOAsAFQAtAGAFAWQAFAWgkAYQglAag5AOQgpAKgjAAIgYgBg");
	this.shape_249.setTransform(124.8,606.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#BE9075").ss(2.5,1,1).p("AD8vQIl2GxQgRAUg2BpQg2BpgFAZIirTxID1AAIFGvrIAAisIEUoHg");
	this.shape_250.setTransform(54.7,628,0.517,0.517);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,97.7,0,-97.7).s().p("AmnPRICrzxQAFgZA2hpQA2hpARgUIF2mxICsEDIkUIHIAACsIlGPrg");
	this.shape_251.setTransform(54.7,628,0.517,0.517);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(2.5,1,1).p("AiIghQgGAWAlAYQAkAaA5AOQA4AOAsgFQAsgGAGgWQAFgWgkgYQgkgag6gOQg4gOgsAFQgsAGgFAWg");
	this.shape_252.setTransform(58.7,606.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#575700","#000000"],[0,1],-13.8,0,13.9,0).s().p("AgMA1Qg5gOgkgaQglgYAFgWQAGgWAsgGQAsgFA4AOQA6AOAjAaQAlAYgFAWQgGAWgsAGIgYABQgjAAgpgKg");
	this.shape_253.setTransform(58.7,606.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#BE9075").ss(2.5,1,1).p("ApoLkQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgQAHgQgJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hn");
	this.shape_254.setTransform(40.1,556,0.517,0.517);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-35.4,-23.7,23.2,9.8).s().p("AohOJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hnIg7BnQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgHADgHAAQgJAAgJgFg");
	this.shape_255.setTransform(40.1,556,0.517,0.517);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#BE9075").ss(2.5,1,1).p("AJrLmQAIALAPgCQAQgEACgRQABgJgGgIIikjBIhCp5IqcpqQg+g5hNgaIkVhfIC/IHIIQEVIDyJ4IiNDgQgIANADAPQADAPANAJQANAIAOgDQAPgCAJgMIBMhkQALgPASAEQASAEAEASIAmC1QACAKAIAGQAIAHAKgBQAMAAAHgIQAIgIAAgLIABjhIAzDqQAEASAQAHQAQAHAPgJIAJgFQALgGAEgMQAEgMgEgLIgxiTIBIB+QAHAMAOAEQAOAEANgHQAMgHAEgOQAEgOgHgNgAJmLeIADAFQABACABABIgFgIIg4hh");
	this.shape_256.setTransform(147.5,556,0.517,0.517);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-23.1,9.8,35.5,-23.7).s().p("AIDOLQgQgHgEgSIgzjqIgBDhQAAALgIAIQgHAIgMAAQgKABgIgHQgIgGgCgKIgmi1QgEgSgSgEQgSgEgLAPIhMBkQgJAMgPACQgOADgNgIQgNgJgDgPQgDgPAIgNICNjgIjyp4IoQkVIi/oHIEVBfQBNAaA+A5IKcJqIBCJ5ICkDBQAGAIgBAJQgCARgQAEQgPACgIgLIAjA9QAHANgEAOQgEAOgMAHQgNAHgOgEQgOgEgHgMIhIh+IAxCTQAEALgEAMQgEAMgLAGIgJAFQgJAFgJAAQgGAAgHgDgAJrLmIgFgIIg4hhIA4BhIADAFIACADgAJpLjIgDgFIAFAIIgCgDgAJmLeg");
	this.shape_257.setTransform(147.5,556,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3,p:{y:540.2}}]},3).to({state:[{t:this.instance_3,p:{y:530.9}}]},2).to({state:[{t:this.shape_63,p:{x:76.1,y:597.1}},{t:this.shape_62,p:{x:76.1,y:597.1}},{t:this.shape_61,p:{x:90.6,y:598.4}},{t:this.shape_60,p:{x:90.6,y:598.4}},{t:this.shape_59,p:{x:69.4,y:544.2}},{t:this.shape_58,p:{x:69.4,y:544.2}},{t:this.shape_57,p:{x:70,y:567.1}},{t:this.shape_56,p:{x:81.3,y:533.2}},{t:this.shape_55,p:{x:81.3,y:533.2}},{t:this.shape_54,p:{x:101.4,y:404.4}},{t:this.shape_53,p:{x:101.4,y:404.4}},{t:this.instance_4},{t:this.shape_52,p:{x:74.8,y:428.5}},{t:this.shape_51,p:{x:74.8,y:428.5}},{t:this.shape_50,p:{x:119.5,y:358.2}},{t:this.shape_49,p:{x:94.5,y:533.1}},{t:this.shape_48,p:{x:80.8,y:495.3}},{t:this.shape_47,p:{x:80.8,y:495.3}},{t:this.shape_46,p:{x:77.3,y:461.8}},{t:this.shape_45,p:{x:77.3,y:461.8}},{t:this.shape_44,p:{x:72,y:427.4}},{t:this.shape_43,p:{x:119.2,y:404.4}},{t:this.shape_42,p:{x:119.2,y:404.4}},{t:this.shape_41,p:{x:136.6,y:354.5}},{t:this.shape_40,p:{x:86.7,y:442.8}},{t:this.shape_39,p:{x:77.8,y:399.3}},{t:this.shape_38,p:{x:77.8,y:399.3}},{t:this.shape_37,p:{x:83.8,y:391.7}},{t:this.shape_36,p:{x:85.8,y:397.1}},{t:this.shape_35,p:{x:86.4,y:396.2}},{t:this.shape_34,p:{x:92.7,y:407.1}},{t:this.shape_33,p:{x:66.3,y:395.7}},{t:this.shape_32,p:{x:66.3,y:395.7}},{t:this.shape_31,p:{x:73.5,y:402.6}},{t:this.shape_30,p:{x:67.7,y:391.8}},{t:this.shape_29,p:{x:67.7,y:391.8}},{t:this.shape_28,p:{x:88.4,y:566.7}},{t:this.shape_27,p:{x:72.9,y:641.3}},{t:this.shape_26,p:{x:72.9,y:641.3}},{t:this.shape_25,p:{x:76.1,y:659.9}},{t:this.shape_24,p:{x:76.1,y:659.9}},{t:this.shape_23,p:{x:76.3,y:654.5}},{t:this.shape_22,p:{x:76.3,y:654.5}},{t:this.shape_21,p:{x:80.8,y:651.6}},{t:this.shape_20,p:{x:80.8,y:651.6}},{t:this.shape_19,p:{x:78.3,y:647.6}},{t:this.shape_18,p:{x:77.7,y:650.2}},{t:this.shape_17,p:{x:78,y:653}},{t:this.shape_16,p:{x:79.6,y:655.3}},{t:this.shape_15,p:{x:82.2,y:657.5}},{t:this.shape_14,p:{x:84.2,y:659.4}},{t:this.shape_13,p:{x:91.1,y:644.2}},{t:this.shape_12,p:{x:91.1,y:644.2}},{t:this.shape_11,p:{x:94.1,y:668}},{t:this.shape_10,p:{x:94.1,y:668}},{t:this.shape_9,p:{x:94.3,y:662.6}},{t:this.shape_8,p:{x:94.3,y:662.6}},{t:this.shape_7,p:{x:98.8,y:659.7}},{t:this.shape_6,p:{x:98.8,y:659.7}},{t:this.shape_5,p:{x:96.3,y:655.7}},{t:this.shape_4,p:{x:95.7,y:658.3}},{t:this.shape_3,p:{x:96.1,y:661.2}},{t:this.shape_2,p:{x:97.7,y:663.5}},{t:this.shape_1,p:{x:100.2,y:665.7}},{t:this.shape,p:{x:102.2,y:667.6}}]},2).to({state:[{t:this.shape_63,p:{x:76.3,y:580.7}},{t:this.shape_62,p:{x:76.3,y:580.7}},{t:this.shape_61,p:{x:90.9,y:581.9}},{t:this.shape_60,p:{x:90.9,y:581.9}},{t:this.shape_59,p:{x:69.6,y:527.8}},{t:this.shape_58,p:{x:69.6,y:527.8}},{t:this.shape_57,p:{x:70.2,y:550.7}},{t:this.shape_56,p:{x:81.6,y:516.8}},{t:this.shape_55,p:{x:81.6,y:516.8}},{t:this.shape_54,p:{x:101.7,y:388}},{t:this.shape_53,p:{x:101.7,y:388}},{t:this.shape_52,p:{x:75.1,y:412.1}},{t:this.shape_51,p:{x:75.1,y:412.1}},{t:this.shape_50,p:{x:119.8,y:341.8}},{t:this.shape_49,p:{x:94.7,y:516.6}},{t:this.shape_48,p:{x:81,y:478.9}},{t:this.shape_47,p:{x:81,y:478.9}},{t:this.shape_46,p:{x:77.6,y:445.3}},{t:this.shape_45,p:{x:77.6,y:445.3}},{t:this.shape_44,p:{x:72.2,y:411}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_41,p:{x:136.9,y:338.1}},{t:this.shape_40,p:{x:86.9,y:426.4}},{t:this.shape_39,p:{x:78.1,y:382.8}},{t:this.shape_38,p:{x:78.1,y:382.8}},{t:this.shape_37,p:{x:84,y:375.2}},{t:this.shape_36,p:{x:86.1,y:380.6}},{t:this.shape_35,p:{x:86.7,y:379.8}},{t:this.shape_34,p:{x:93,y:390.6}},{t:this.shape_33,p:{x:66.5,y:379.3}},{t:this.shape_32,p:{x:66.5,y:379.3}},{t:this.shape_31,p:{x:73.8,y:386.1}},{t:this.shape_30,p:{x:68,y:375.4}},{t:this.shape_29,p:{x:68,y:375.4}},{t:this.shape_28,p:{x:88.7,y:550.2}},{t:this.shape_27,p:{x:73.1,y:624.9}},{t:this.shape_26,p:{x:73.1,y:624.9}},{t:this.shape_25,p:{x:76.3,y:643.4}},{t:this.shape_24,p:{x:76.3,y:643.4}},{t:this.shape_23,p:{x:76.6,y:638}},{t:this.shape_22,p:{x:76.6,y:638}},{t:this.shape_21,p:{x:81,y:635.1}},{t:this.shape_20,p:{x:81,y:635.1}},{t:this.shape_19,p:{x:78.5,y:631.1}},{t:this.shape_18,p:{x:78,y:633.7}},{t:this.shape_17,p:{x:78.3,y:636.6}},{t:this.shape_16,p:{x:79.9,y:638.9}},{t:this.shape_15,p:{x:82.4,y:641}},{t:this.shape_14,p:{x:84.4,y:643}},{t:this.shape_13,p:{x:91.4,y:627.8}},{t:this.shape_12,p:{x:91.4,y:627.8}},{t:this.shape_11,p:{x:94.3,y:651.6}},{t:this.shape_10,p:{x:94.3,y:651.6}},{t:this.shape_9,p:{x:94.6,y:646.2}},{t:this.shape_8,p:{x:94.6,y:646.2}},{t:this.shape_7,p:{x:99,y:643.3}},{t:this.shape_6,p:{x:99,y:643.3}},{t:this.shape_5,p:{x:96.5,y:639.3}},{t:this.shape_4,p:{x:96,y:641.9}},{t:this.shape_3,p:{x:96.3,y:644.7}},{t:this.shape_2,p:{x:97.9,y:647}},{t:this.shape_1,p:{x:100.4,y:649.2}},{t:this.shape,p:{x:102.5,y:651.1}}]},2).to({state:[{t:this.shape_63,p:{x:76.3,y:597.1}},{t:this.shape_62,p:{x:76.3,y:597.1}},{t:this.shape_61,p:{x:90.9,y:598.4}},{t:this.shape_60,p:{x:90.9,y:598.4}},{t:this.shape_59,p:{x:69.6,y:544.2}},{t:this.shape_58,p:{x:69.6,y:544.2}},{t:this.shape_57,p:{x:70.2,y:567.1}},{t:this.shape_56,p:{x:81.6,y:533.2}},{t:this.shape_55,p:{x:81.6,y:533.2}},{t:this.shape_54,p:{x:101.7,y:404.4}},{t:this.shape_53,p:{x:101.7,y:404.4}},{t:this.shape_52,p:{x:75.1,y:428.5}},{t:this.shape_51,p:{x:75.1,y:428.5}},{t:this.shape_50,p:{x:119.8,y:358.2}},{t:this.shape_49,p:{x:94.7,y:533.1}},{t:this.shape_48,p:{x:81,y:495.3}},{t:this.shape_47,p:{x:81,y:495.3}},{t:this.shape_46,p:{x:77.6,y:461.8}},{t:this.shape_45,p:{x:77.6,y:461.8}},{t:this.shape_44,p:{x:72.2,y:427.4}},{t:this.shape_43,p:{x:119.4,y:404.4}},{t:this.shape_42,p:{x:119.4,y:404.4}},{t:this.shape_41,p:{x:136.9,y:354.5}},{t:this.shape_40,p:{x:86.9,y:442.8}},{t:this.shape_39,p:{x:78.1,y:399.3}},{t:this.shape_38,p:{x:78.1,y:399.3}},{t:this.shape_37,p:{x:84,y:391.7}},{t:this.shape_36,p:{x:86.1,y:397.1}},{t:this.shape_35,p:{x:86.7,y:396.2}},{t:this.shape_34,p:{x:93,y:407.1}},{t:this.shape_33,p:{x:66.5,y:395.7}},{t:this.shape_32,p:{x:66.5,y:395.7}},{t:this.shape_31,p:{x:73.8,y:402.6}},{t:this.shape_30,p:{x:68,y:391.8}},{t:this.shape_29,p:{x:68,y:391.8}},{t:this.shape_28,p:{x:88.7,y:566.7}},{t:this.shape_27,p:{x:73.1,y:641.3}},{t:this.shape_26,p:{x:73.1,y:641.3}},{t:this.shape_25,p:{x:76.3,y:659.9}},{t:this.shape_24,p:{x:76.3,y:659.9}},{t:this.shape_23,p:{x:76.6,y:654.5}},{t:this.shape_22,p:{x:76.6,y:654.5}},{t:this.shape_21,p:{x:81,y:651.6}},{t:this.shape_20,p:{x:81,y:651.6}},{t:this.shape_19,p:{x:78.5,y:647.6}},{t:this.shape_18,p:{x:78,y:650.2}},{t:this.shape_17,p:{x:78.3,y:653}},{t:this.shape_16,p:{x:79.9,y:655.3}},{t:this.shape_15,p:{x:82.4,y:657.5}},{t:this.shape_14,p:{x:84.4,y:659.4}},{t:this.shape_13,p:{x:91.4,y:644.2}},{t:this.shape_12,p:{x:91.4,y:644.2}},{t:this.shape_11,p:{x:94.3,y:668}},{t:this.shape_10,p:{x:94.3,y:668}},{t:this.shape_9,p:{x:94.6,y:662.6}},{t:this.shape_8,p:{x:94.6,y:662.6}},{t:this.shape_7,p:{x:99,y:659.7}},{t:this.shape_6,p:{x:99,y:659.7}},{t:this.shape_5,p:{x:96.5,y:655.7}},{t:this.shape_4,p:{x:96,y:658.3}},{t:this.shape_3,p:{x:96.3,y:661.2}},{t:this.shape_2,p:{x:97.9,y:663.5}},{t:this.shape_1,p:{x:100.4,y:665.7}},{t:this.shape,p:{x:102.5,y:667.6}}]},2).to({state:[{t:this.shape_63,p:{x:76.3,y:608}},{t:this.shape_62,p:{x:76.3,y:608}},{t:this.shape_61,p:{x:90.9,y:609.2}},{t:this.shape_60,p:{x:90.9,y:609.2}},{t:this.shape_59,p:{x:69.6,y:555.1}},{t:this.shape_58,p:{x:69.6,y:555.1}},{t:this.shape_57,p:{x:70.2,y:578}},{t:this.shape_56,p:{x:81.6,y:544.1}},{t:this.shape_55,p:{x:81.6,y:544.1}},{t:this.shape_54,p:{x:101.7,y:415.3}},{t:this.shape_53,p:{x:101.7,y:415.3}},{t:this.shape_52,p:{x:75.1,y:439.4}},{t:this.shape_51,p:{x:75.1,y:439.4}},{t:this.shape_50,p:{x:119.8,y:369.1}},{t:this.shape_49,p:{x:94.7,y:543.9}},{t:this.shape_48,p:{x:81,y:506.2}},{t:this.shape_47,p:{x:81,y:506.2}},{t:this.shape_46,p:{x:77.6,y:472.6}},{t:this.shape_45,p:{x:77.6,y:472.6}},{t:this.shape_44,p:{x:72.2,y:438.3}},{t:this.shape_43,p:{x:119.4,y:415.2}},{t:this.shape_42,p:{x:119.4,y:415.2}},{t:this.shape_41,p:{x:136.9,y:365.4}},{t:this.shape_40,p:{x:86.9,y:453.7}},{t:this.shape_39,p:{x:78.1,y:410.1}},{t:this.shape_38,p:{x:78.1,y:410.1}},{t:this.shape_37,p:{x:84,y:402.5}},{t:this.shape_36,p:{x:86.1,y:407.9}},{t:this.shape_35,p:{x:86.7,y:407.1}},{t:this.shape_34,p:{x:93,y:417.9}},{t:this.shape_33,p:{x:66.5,y:406.6}},{t:this.shape_32,p:{x:66.5,y:406.6}},{t:this.shape_31,p:{x:73.8,y:413.4}},{t:this.shape_30,p:{x:68,y:402.7}},{t:this.shape_29,p:{x:68,y:402.7}},{t:this.shape_28,p:{x:88.7,y:577.5}},{t:this.shape_27,p:{x:73.1,y:652.2}},{t:this.shape_26,p:{x:73.1,y:652.2}},{t:this.shape_25,p:{x:76.3,y:670.7}},{t:this.shape_24,p:{x:76.3,y:670.7}},{t:this.shape_23,p:{x:76.6,y:665.3}},{t:this.shape_22,p:{x:76.6,y:665.3}},{t:this.shape_21,p:{x:81,y:662.4}},{t:this.shape_20,p:{x:81,y:662.4}},{t:this.shape_19,p:{x:78.5,y:658.4}},{t:this.shape_18,p:{x:78,y:661}},{t:this.shape_17,p:{x:78.3,y:663.9}},{t:this.shape_16,p:{x:79.9,y:666.2}},{t:this.shape_15,p:{x:82.4,y:668.3}},{t:this.shape_14,p:{x:84.4,y:670.3}},{t:this.shape_13,p:{x:91.4,y:655.1}},{t:this.shape_12,p:{x:91.4,y:655.1}},{t:this.shape_11,p:{x:94.3,y:678.9}},{t:this.shape_10,p:{x:94.3,y:678.9}},{t:this.shape_9,p:{x:94.6,y:673.5}},{t:this.shape_8,p:{x:94.6,y:673.5}},{t:this.shape_7,p:{x:99,y:670.6}},{t:this.shape_6,p:{x:99,y:670.6}},{t:this.shape_5,p:{x:96.5,y:666.6}},{t:this.shape_4,p:{x:96,y:669.2}},{t:this.shape_3,p:{x:96.3,y:672}},{t:this.shape_2,p:{x:97.9,y:674.3}},{t:this.shape_1,p:{x:100.4,y:676.5}},{t:this.shape,p:{x:102.5,y:678.4}}]},2).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},2).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187}]},12).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187}]},13).wait(1));

	// Layer_2
	this.instance_6 = new lib.ball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(162.7,307,0.825,0.825,0,0,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).wait(1).to({regX:29.7,regY:29.7,x:159.7,y:304.5},0).wait(1).to({x:182.5,y:278.5},0).wait(1).to({x:206.8,y:253.8},0).wait(1).to({x:232.7,y:230.8},0).wait(1).to({x:260.5,y:210.3},0).wait(1).to({x:290.6,y:193.2},0).wait(1).to({x:322.9,y:181.1},0).wait(1).to({x:357.1,y:175.7},0).wait(1).to({x:391.5,y:178.5},0).wait(1).to({x:424.3,y:189.4},0).wait(1).to({x:454.1,y:206.7},0).wait(1).to({x:480.8,y:228.7},0).wait(1).to({x:504.7,y:253.8},0).wait(1).to({x:519.4,y:285.8},0).wait(1).to({x:534,y:317.8},0).wait(1).to({x:548.7,y:349.8},0).wait(1).to({x:563.4,y:381.8},0).wait(1).to({x:578.1,y:413.8},0).wait(1).to({x:592.7,y:445.8},0).wait(1).to({x:607.4,y:477.8},0).wait(1).to({x:633.3,y:449.2},0).wait(1).to({x:666.6,y:430.3},0).wait(1).to({x:703,y:438.5},0).wait(1).to({x:727.9,y:467.8},0).wait(1).to({x:744.4,y:502.7},0).wait(1).to({x:756.3,y:492},0).wait(1).to({x:769.1,y:481.7},0).wait(1).to({x:783.3,y:475.2},0).wait(1).to({x:796.4,y:475.1},0).wait(1).to({x:814,y:482.6},0).wait(6));

	// Layer_8
	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(255,255,255,0)").s().p("EhgrA4QQjUAAAAjcMAAAhpnQAAjcDUAAMDBXAAAQDUAAAADcMAAABpnQAADcjUAAg");
	this.shape_258.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_258).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.player2in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer_2
	this.instance = new lib.player2ball();
	this.instance.parent = this;
	this.instance.setTransform(94,577.3,1,1,0,0,0,77,119.6);

	this.instance_1 = new lib.player2throw1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.3,548.8,1,1,0,0,0,56.3,148.5);

	this.instance_2 = new lib.player2throw2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(94,540.2,1,1,0,0,0,45.6,158.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape.setTransform(102.2,667.6,0.619,0.619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_1.setTransform(100.2,665.7,0.619,0.619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_2.setTransform(97.7,663.5,0.619,0.619);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgbAJIA3gR");
	this.shape_3.setTransform(96.1,661.2,0.619,0.619);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_4.setTransform(95.7,658.3,0.619,0.619);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_5.setTransform(96.3,655.7,0.619,0.619);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi3QgEgHgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_6.setTransform(98.8,659.7,0.619,0.619);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAHIgUC3IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_7.setTransform(98.8,659.7,0.619,0.619);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIhAC+ICeByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgRhUhDIhUg/IgzhNQgLgZgQgZQghgygYAAQgmACgVgNg");
	this.shape_8.setTransform(94.3,662.6,0.619,0.619);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIiehyIBAi+IAOANQAVANAmgCQAYAAAhAyQAQAZALAZIAzBNIBUA/QBUBDAEARQAJAjgaAbQgUAVgkAAQgcAAglgNg");
	this.shape_9.setTransform(94.3,662.6,0.619,0.619);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABQhRABhzg9QhNgphQg8QgRgNgEgVQgEgUAKgTg");
	this.shape_10.setTransform(94.1,668,0.619,0.619);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,0.9,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgVQgEgUAKgTIAZgtIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABIgCAAQhRAAhxg8g");
	this.shape_11.setTransform(94.1,668,0.619,0.619);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#60605B").ss(3,1,1).p("Ag2CdIgxlSIBHAOQBRAJA3gXIg4Frg");
	this.shape_12.setTransform(91.1,644.2,0.619,0.619);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.3,0,10.4,0).s().p("Ag2CdIgxlSIBHANQBRAKA3gXIg4Frg");
	this.shape_13.setTransform(91.1,644.2,0.619,0.619);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_14.setTransform(84.2,659.4,0.619,0.619);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_15.setTransform(82.2,657.5,0.619,0.619);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_16.setTransform(79.6,655.3,0.619,0.619);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(4,1,1).p("AgbAKIA3gT");
	this.shape_17.setTransform(78,653,0.619,0.619);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(4,1,1).p("AgjgDIBGAH");
	this.shape_18.setTransform(77.7,650.2,0.619,0.619);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_19.setTransform(78.3,647.6,0.619,0.619);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi2QgEgIgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_20.setTransform(80.8,651.6,0.619,0.619);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAIIgUC2IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_21.setTransform(80.8,651.6,0.619,0.619);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIg/C+ICdByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgQhUhDIhUg/IgzhNQgLgagQgZQghgygYABQgmABgVgNg");
	this.shape_22.setTransform(76.3,654.5,0.619,0.619);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIidhyIA/i+IAOANQAVANAmgBQAYgBAhAyQAQAZALAaIAzBNIBUA/QBUBDAEAQQAJAjgaAbQgVAVgjAAQgcAAglgNg");
	this.shape_23.setTransform(76.3,654.5,0.619,0.619);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABQhSABhzg9QhNgphQg8QgRgNgEgUQgEgVAKgTg");
	this.shape_24.setTransform(76.1,659.9,0.619,0.619);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,1,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgUQgEgVAKgTIAZgtIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABIgCAAQhRAAhyg8g");
	this.shape_25.setTransform(76.1,659.9,0.619,0.619);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#60605B").ss(3,1,1).p("AhPCnIgUlrIBGAZQBPAWAygSIhIFsg");
	this.shape_26.setTransform(72.9,641.3,0.619,0.619);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10,0,10.1,0).s().p("AhQCnIgUlrIBHAZQBPAVAzgRIhJFsg");
	this.shape_27.setTransform(72.9,641.3,0.619,0.619);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D6D638").ss(6,1,1).p("AEfg0Qi7B5jTgSQhDgGg9gTIgvgS");
	this.shape_28.setTransform(88.4,566.7,0.619,0.619);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2C2C2C").ss(3,1,1).p("ACTiPQgngBiNBPQiOBNgUAiQAFAhATAkQAJASAIALQAAgCAGgJQAIgNAOgQQAtgxBWgyQBmg4BJgLQAKgBAEgKQAEgJgFgIQgSgagcgbg");
	this.shape_29.setTransform(67.7,391.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D6D638").s().p("AirBzQgTgkgFghQAUgiCOhNQCNhPAnABQAcAbASAaQAFAIgEAJQgEAKgKABQhJALhmA4QhWAygtAxQgOAQgIANQgGAJAAACQgIgLgJgSg");
	this.shape_30.setTransform(67.7,391.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(3,1,1).p("ABCA2IgqAQQgYAKgZgLQgZgMgKgaQgKgaALgYQALgZAZgKIA1gU");
	this.shape_31.setTransform(73.5,402.6,0.619,0.619);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AijgWQAAAwAcA4QAaAzAsAsQAqArAqAUQAuAWAfgMQgphYAyg5IgSAHQgPAGgQgHQgPgHgHgQQgGgQAHgQQAHgQAQgFIAhgNIAZA9IAJgZIg0iHIgXgMQgPgGAAgQQAAgRAPgGIBggqQAWgJgEgUQgEgTgXgMQgrgWgoAHQgyAIgWAzQgkAIgkAaQhJAyAABWg");
	this.shape_32.setTransform(66.3,395.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATDwQgqgUgqgrQgsgsgagzQgcg4AAgwQAAhWBJgyQAkgaAkgIQAWgzAygIQAogHArAWQAXAMAEATQAEAUgWAJIhgAqQgPAGAAARQAAAQAPAGIAXAMIA0CHIgJAZIgZg9IghANQgQAFgHAQQgHAQAGAQQAHAQAPAHQAQAHAPgGIASgHQgyA5ApBYQgLAEgNAAQgXAAgegOg");
	this.shape_33.setTransform(66.3,395.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F4137").s().p("AgfAHIA1gUIAKAXQgOAEgNAAQgSAAgSgHg");
	this.shape_34.setTransform(92.7,407.1,0.619,0.619);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDARQgGgEgDgIQgEgHACgHQACgIAGgCQAFgCAFAEQAGAFADAIQAEAHgCAHQgCAHgFACIgEABQgEAAgDgDg");
	this.shape_35.setTransform(86.4,396.2,0.619,0.619);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgOAkQgOgHgGgPQgGgPAGgPQAGgPAOgGQAOgFAPAHQAOAHAGAQQAGAOgGAPQgGAPgPAGQgGACgHAAQgHAAgIgEg");
	this.shape_36.setTransform(85.8,397.1,0.619,0.619);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgpAbIgDgJIgCgGIABgBIABgCIAHgIIAIgHIATgNIAUgIIASgFIACAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIAKAKIAEAEIABACIgJATQAAAAAAAAQAAABAAAAQgBAAAAgBQAAAAAAAAIgCAAIgOAEIgIADIgNAHIgKAJIgEAEIAAABIgBABIgFgBIgOACIgCABg");
	this.shape_37.setTransform(83.8,391.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BE9075").ss(2,1,1).p("ABjFMICbg7QAdgMANgcQANgdgLgeIg6ilIA0gTQAWgIAEgXQADgXgSgPIh9hjIiCipIjPACQhfAkgqBfQgpBfAlBhIBQDPQAlBhBeArQBdArBfgkg");
	this.shape_38.setTransform(77.8,399.3,0.619,0.619);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-11.5,-36.3,14.4,31.5).s().p("AhZFFQhegrglhhIhQjPQglhhAphfQAqhfBfgkIDPgCICCCpIB9BjQASAPgDAXQgEAXgWAIIg0ATIA6ClQALAegNAdQgNAcgdAMIibA7QgrAQgsAAQgyAAgzgXg");
	this.shape_39.setTransform(77.8,399.3,0.619,0.619);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D6D638").ss(6,1,1).p("AB8D+QgvgIg1giQhphEgfiDQgfiBA3hRQAcgpAigP");
	this.shape_40.setTransform(86.7,442.8,0.619,0.619);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE9075").ss(4,1,1).p("AgpA8IAZhgQAEgRAQgFQAQgEAMALQAMAKgCAQIgBAJg");
	this.shape_41.setTransform(136.6,354.5,0.619,0.619);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEkocIg7AHQgIABgFAFIhcBWIAAAgIjtEVIAABSIjoEVQgVAJgRAaQgiAyATBRQATBRBCAqQAhAVAdAFIBGjNIFrrYICDhiIBGAAQAGAAAFgFQAEgEAAgHQAAgGgEgFQgFgEgGgBIACAAIg7gRQgRgFgSADAEkocQABAAACAAIgDAAgAGDoJIhOAAIg/AjAECoOQAAABgBAAIgaAUQAOgMANgJQACgBADgBQAPgJAOgD");
	this.shape_42.setTransform(119.2,404.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,54.1,0,-54.2).s().p("Ak1IEQhCgqgThRQgThRAigyQARgaAVgJIDokVIAAhSIDtkVIAAggIBchWQAFgFAIgBIA7gHQgOADgPAJIgFACQgNAJgOAMIAagUIABgBIAFgCQAPgJAOgDIADAAQASgDARAFIA7ARIgCAAQAGABAFAEQAEAFAAAGQAAAHgEAEQgFAFgGAAIhGAAIiDBiIlrLYIhGDNQgdgFghgVgAD2nmIA/gjIBOAAIhOAAgAEkocIADAAIgDAAIAAAAg");
	this.shape_43.setTransform(119.2,404.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D6D638").ss(6,1,1).p("ACWAEIkrgI");
	this.shape_44.setTransform(72,427.4,0.619,0.619);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3.5,1,1).p("AB2lUIjYgFQhGgDgpA0QgpAzAMBNIA0FQIAGCFIAcAPQAkAQAtAIQCPAaCqhJIgHlvg");
	this.shape_45.setTransform(77.3,461.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#575700","#000000"],[0,1],0,34.7,0,-34.6).s().p("AhHFUQgtgIgkgQIgcgPIgGiFIg0lQQgMhNApgzQApg0BGADIDYAFIB1EKIAHFvQh+A2hvAAQgmAAgmgHg");
	this.shape_46.setTransform(77.3,461.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3.5,1,1).p("AjGARIAAglIGNgpIgMBIQgOAQgiAOQhEAbhkgIQhlgJgsgSQgOgGgGgGg");
	this.shape_47.setTransform(80.8,495.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#575700","#000000"],[0,1],-19.8,0,19.9,0).s().p("AgdA8QhlgJgsgSQgOgGgGgGIgEgEIAAglIGNgpIgMBJQgOAPgiAOQg0AVhHAAQgVAAgYgCg");
	this.shape_48.setTransform(80.8,495.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D6D638").ss(6,1,1).p("AhMn9IBEFaQBHGPAOES");
	this.shape_49.setTransform(94.5,533.1,0.619,0.619);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BE9075").ss(4,1,1).p("Ag3A2IA9iHQAEgJAJgEQAJgEAKADQAJADAFAJQAFAIgCAKQgVBnggA7");
	this.shape_50.setTransform(119.5,358.2,0.619,0.619);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BE9075").ss(2.5,1,1).p("AidjDIgZEjIDqBkICDldg");
	this.shape_51.setTransform(74.8,428.5,0.619,0.619);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,19.7,0,-19.6).s().p("Ai2BgIAZkjIFUAqIiDFdg");
	this.shape_52.setTransform(74.8,428.5,0.619,0.619);

	this.instance_3 = new lib.ball();
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.3,321.4,0.825,0.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlZO0IhokqIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIg");
	this.shape_53.setTransform(101.4,404.4,0.619,0.619);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,94.8,0,-94.7).s().p("AnBKKIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIIkfL+g");
	this.shape_54.setTransform(101.4,404.4,0.619,0.619);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(3.5,1,1).p("AiKA0QhGgygbhQQgdhUAbhYIAihsIGBgJIgDCIIAOAqQAPA1ANA8QAnC/gLC7Qh0BLiDgLQgpgDglgMIgegLg");
	this.shape_55.setTransform(81.3,533.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#575700","#000000"],[0,1],0,36.7,0,-36.7).s().p("AACFuQgpgDglgMIgegLIggkgQhGgygbhQQgdhUAbhYIAihsIGBgJIgDCIIAOAqQAPA1ANA8QAnC/gLC7QhlBChwAAQgRAAgRgCg");
	this.shape_56.setTransform(81.3,533.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#D6D638").ss(6,1,1).p("AiMAAQBGAVBvgOQA6gHAqgM");
	this.shape_57.setTransform(70,567.1,0.619,0.619);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(3.5,1,1).p("AhbjsIgCC2QAADHANBTQArAOBFgJQAjgEAagIIgzl5g");
	this.shape_58.setTransform(69.4,544.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#575700","#000000"],[0,1],0,23.7,0,-23.7).s().p("AhQDkQgMhTAAjHIABi2ICFBQIA0F5QgbAIgjAEQgbAEgXAAQgkAAgagJg");
	this.shape_59.setTransform(69.4,544.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjTrKIB8JEIhMDXIB1MxIBkAYICevgIhctTg");
	this.shape_60.setTransform(90.6,598.4,0.619,0.619);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,92.2,0,-92.2).s().p("AguOCIh1sxIBMjXIh8pEIFLjPIBcNTIiePgg");
	this.shape_61.setTransform(90.6,598.4,0.619,0.619);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aihq2ICAIKIiRDaIAvNDIBsAeIDKv4IhDslg");
	this.shape_62.setTransform(76.1,597.1,0.619,0.619);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,91.1,0,-91.1).s().p("AiDNxIgvtDICRjaIiAoKIERjYIBDMlIjKP4g");
	this.shape_63.setTransform(76.1,597.1,0.619,0.619);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEkocIg7AHQgIABgFAFIhcBWIAAAgIjtEVIAABSIjoEVQgVAJgRAaQgiAyATBRQATBRBCAqQAhAVAdAFIBGjNIFrrYICDhiIBGAAQAGAAAFgFQAEgEAAgHQAAgGgEgFQgFgEgGgBIACAAIg7gRQgRgFgSADIgDAAIAAAAQABAAACAAAGDoJIhOAAIg/AjAECoOQACgBADgBQAPgJAOgDAECoOQAAABgBAAIgaAUQAOgMANgJg");
	this.shape_64.setTransform(119.4,387.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,54.1,0,-54.2).s().p("Ak1IEQhCgqgThRQgThRAigyQARgaAVgJIDokVIAAhSIDtkVIAAggIBchWQAFgFAIgBIA7gHQgOADgPAJIgFACQgNAJgOAMIAagUIABgBIAFgCQAPgJAOgDIADAAIgDAAIAAAAIAAAAIADAAQASgDARAFIA7ARIgCAAQAGABAFAEQAEAFAAAGQAAAHgEAEQgFAFgGAAIhGAAIiDBiIlrLYIhGDNQgdgFghgVgAD2nmIA/gjIBOAAIhOAAg");
	this.shape_65.setTransform(119.4,387.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#838587").ss(4,1,1).p("AgaARIA0gh");
	this.shape_66.setTransform(110,687.1,0.619,0.619);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_67.setTransform(107.9,685.1,0.619,0.619);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_68.setTransform(105.2,682.8,0.619,0.619);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_69.setTransform(103.5,680.3,0.619,0.619);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_70.setTransform(103.1,677.3,0.619,0.619);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_71.setTransform(103.7,674.6,0.619,0.619);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhvQBCBHgHBrIBLBEQBPA/AOgWQAPgWhLg/IhMg5IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAdQgMAPgHANg");
	this.shape_72.setTransform(106.4,678.8,0.619,0.619);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.4,1.4,-17.8).s().p("AAUCHIhLhEQAHhrhChHQAHgNAMgPQAWgdAUgJQATgJATAMQAJAGAFAIIgWDCIBMA5QBLA/gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_73.setTransform(106.4,678.8,0.619,0.619);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgdgJglQgFgShZhHIhZhDIg2hSQgMgbgSgbQgig1gZABQgpABgWgNg");
	this.shape_74.setTransform(101.6,681.9,0.619,0.619);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAiA1QASAbAMAbIA2BSIBZBDQBZBHAFASQAJAlgcAdQgVAVglAAQgeAAgogOg");
	this.shape_75.setTransform(101.6,681.9,0.619,0.619);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhSgrhVhAQgSgOgFgWQgEgWAKgTg");
	this.shape_76.setTransform(101.4,687.6,0.619,0.619);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.2).s().p("Ag+BVQhSgrhVhAQgSgOgFgWQgEgWAKgTIAbgxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_77.setTransform(101.4,687.6,0.619,0.619);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#2C2C2C").ss(3,1,1).p("AC1hyQgpgKikAyQikAygcAdQgDAjALApQAGAWAGANQAJgPAdgUQA6gpBlggQBEgUA3gHQAqgGAfADQALAAAGgIQAGgJgDgJQgMgfgYgjg");
	this.shape_78.setTransform(70.2,415.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D6D638").s().p("AjQBRQgLgpADgjQAcgdCkgyQCkgyApAKQAYAjAMAfQADAJgGAJQgGAIgLAAQgfgDgqAGQg3AHhEAUQhlAgg6ApQgdAUgJAPQgGgNgGgWg");
	this.shape_79.setTransform(70.2,415.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BE9075").ss(3,1,1).p("ABABDIgwAHQgbAEgXgRQgYgRgEgdQgFgcASgYQARgYAcgEIA8gJ");
	this.shape_80.setTransform(72.9,428.1,0.619,0.619);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(3,1,1).p("Ai7hMQgMAzARA/QAQA8AjA3QAiA2ApAfQAqAgAjgFQgXhkBAgwIgUADQgSACgOgKQgNgLgDgSQgDgSAKgPQAKgOASgDIAmgGIAMBFIAPgXIgXiZIgWgQQgNgLADgRQADgQARgEIBtgVQAZgFAAgVQAAgVgVgSQgngggsgCQg1gDgkAwQgmAAgrASQhWAkgUBZg");
	this.shape_81.setTransform(69.7,420.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("Ag4DuQgpgfgig2Qgjg3gQg8QgRg/AMgzQAUhZBWgkQArgSAmAAQAkgwA1ADQAsACAnAgQAVASAAAVQAAAVgZAFIhtAVQgRAEgDAQQgDARANALIAWAQIAXCZIgPAXIgMhFIgmAGQgSADgKAOQgKAPADASQADASANALQAOAKASgCIAUgDQhAAwAXBkIgLAAQgeAAgkgbg");
	this.shape_82.setTransform(69.7,420.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5F4137").s().p("AAMAMQgZgEgSgLIA8gKIADAaIgDABIgRgCg");
	this.shape_83.setTransform(92.1,437.1,0.619,0.619);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgHARQgGgGgBgJQgBgIADgHQADgHAHgBQAFgBAGAGQAFAGABAJQABAIgDAHQgDAHgHABIgBAAQgFAAgEgFg");
	this.shape_84.setTransform(88.2,424.2,0.619,0.619);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgXAiQgNgKgCgSQgDgQAJgPQAKgOAQgCQAQgDAOALQANAKACASQADAQgJAPQgKAOgQACIgHABQgMAAgLgJg");
	this.shape_85.setTransform(87.4,425,0.619,0.619);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgZAcIgEgBIgJgBIgIAAIgBgCIgCgGIgCgKIAAgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIADAAIAHgHIALgGIALgFIALgDIAXgFIATAAIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAEAEIAFAHIADAGIABACIgPARQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIgQAAIgRADIgOAGIgGAEIgFADIgBABIAAABIgBAAg");
	this.shape_86.setTransform(86.6,418.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BE9075").ss(2,1,1).p("AAMF7ICugaQAhgFAUgbQAUgbgFgiIgXi4IA7gJQAYgDAJgXQAJgXgPgTIhsiDIhhjNIjXgtQhrARhABZQhBBZARBtIAkDpQAQBtBYBCQBYBCBqgRg");
	this.shape_87.setTransform(79.6,424.6,0.619,0.619);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-5.3,-38.9,6.3,37.2).s().p("Ai2FKQhYhCgQhtIgkjpQgRhtBBhZQBAhZBrgRIDXAtIBhDNIBsCDQAPATgJAXQgJAXgYADIg7AJIAXC4QAFAigUAbQgUAbghAFIiuAaQgVAEgUAAQhTAAhGg1g");
	this.shape_88.setTransform(79.6,424.6,0.619,0.619);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D6D638").ss(6,1,1).p("ACEENQgygIg4glQhwhIghiLQghiJA7hWQASgbAagTIAWgN");
	this.shape_89.setTransform(83.6,472.4,0.619,0.619);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhWmoIAJADADyCfImLg+QhVgOhPAkIhiArIgWANQgZATgTAbQg7BWAhCKQAhCLBxBIQA5AlAyAIIBljfQANgcAagRQAagRAfAAIHCAAQBHAAAlg9QAlg+gjg/Imir9QgsgqgagoQgYgkgFgbQgCgKgIgGQgJgGgKACQgJACgGAHQgFAHAAAKQADA6BFBYQhZgvgnhiQgGgOgPgFQgQgFgNAKQgIAGgEAKQgDAKADAKQAYBMBfBLQhYg9g9g7QgKgJgNgBQgOgBgLAIQgOAJgCASQgCARAMANQBtByBGAcQhHgahJhIQgIgIgKAAQgLgBgJAGQgLAIgCANQgBAOAJAJQAwA0BaAvQAsAXAjANIhDgBQgSgBgJAQQgKAPAJAQQAJAPASABIC4ADIBvCfIAaDmgAE3DvIhFhQ");
	this.shape_90.setTransform(107.6,445.7,0.619,0.619);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.1,0,-70.1).s().p("AlpKQQhxhIghiLQghiKA7hWQATgbAZgTIAWgNIBigrQBPgkBVAOIGLA+IBFBQIhFhQIgtg0IgajmIhvifIi4gDQgSgBgJgPQgJgQAKgPQAJgQASABIBDABQgjgNgsgXQhagvgwg0QgJgJABgOQACgNALgIQAJgGALABQAKAAAIAIQBJBIBHAaQhGgchthyQgMgNACgRQACgSAOgJQALgIAOABQANABAKAJQA9A7BYA9QhfhLgYhMQgDgKADgKQAEgKAIgGQANgKAQAFQAPAFAGAOQAnBiBZAvQhFhYgDg6QAAgKAFgHQAGgHAJgCQAKgCAJAGQAIAGACAKQAFAbAYAkQAaAoAsAqIGiL9QAjA/glA+QglA9hHAAInCAAQgfAAgaARQgaARgNAcIhlDfQgygIg5glgAhNmlIgJgDg");
	this.shape_91.setTransform(107.6,445.7,0.619,0.619);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#D6D638").ss(6,1,1).p("ACfAFIk9gI");
	this.shape_92.setTransform(74.6,453.4,0.619,0.619);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(3.5,1,1).p("AB9lpIjlgGQhKgDgrA3QgsA3AMBRIA4FlIAGCNIAeAQQAnASAvAIQCYAbC0hMIgHlmg");
	this.shape_93.setTransform(80.2,489.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#575700","#000000"],[0,1],-25.6,0,25.7,0).s().p("AhLFpQgvgIgngSIgegQIgGiNIg4llQgMhRAsg3QArg3BKADIDlAGIB9E7IAHFmQiFA4h3AAQgoAAgogHg");
	this.shape_94.setTransform(80.2,489.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEYDIIgvqEIiUgaIgtJVIkjAOIgcAOIBvE8IE6hTQA/gRAmg1QAmg1gFhBg");
	this.shape_95.setTransform(97,440.8,0.619,0.619);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,47.1,0,-47.1).s().p("AkXCbIAcgOIEjgOIAtpVICUAaIAvKEQAFBBgmA1QgmA1g/ARIk6BTg");
	this.shape_96.setTransform(97,440.8,0.619,0.619);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BE9075").ss(2.5,1,1).p("AinjPIgbE1ID6BqICLlzg");
	this.shape_97.setTransform(76.2,453.7,0.619,0.619);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,20.9,0,-20.8).s().p("AjCBmIAbk1IFpAsIiKFzg");
	this.shape_98.setTransform(76.2,453.7,0.619,0.619);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(3.5,1,1).p("AjSAQIAAgnIGlgsIgICAQgQAEgmACQhKAEhqgKQhrgJgvgTQgPgGgHgGg");
	this.shape_99.setTransform(82.8,525.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#575700","#000000"],[0,1],-21.1,0,21.1,0).s().p("AgfA9QhrgJgvgTQgOgGgIgGIgDgFIAAgnIGlgsIgICAQgRAEgkACIgrABQg9AAhNgHg");
	this.shape_100.setTransform(82.8,525.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#D6D638").ss(6,1,1).p("AEPh2QjGCAi/BEQg8AUg0ANIgoAI");
	this.shape_101.setTransform(101.1,593.3,0.619,0.619);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#D6D638").ss(6,1,1).p("AjvmuIAJAvQAOA8AVBAQBFDNB3CkQCCC0B1CN");
	this.shape_102.setTransform(101.5,560.8,0.619,0.619);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(3.5,1,1).p("Ai6BFQhKg1gdhVQgfhZAdhdIAkh0IGcAtIgICVIAVAZQAZAhAWAqQBHCEASCiQh7BQh3AqQglANgfAIIgZAEg");
	this.shape_103.setTransform(87.3,563.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#575700","#000000"],[0,1],-30.6,0,30.6,0).s().p("Ai6BFQhKg1gdhVQgfhZAdhdIAkh0IGcAtIgICVIAVAZQAZAhAWAqQBHCEASCiQh7BQh3AqQglANgfAIIgZAEg");
	this.shape_104.setTransform(87.3,563.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#838587").ss(4,1,1).p("AgZARIA0gh");
	this.shape_105.setTransform(84.9,678.5,0.619,0.619);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_106.setTransform(82.7,676.4,0.619,0.619);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_107.setTransform(80,674.1,0.619,0.619);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_108.setTransform(78.3,671.7,0.619,0.619);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_109.setTransform(78,668.7,0.619,0.619);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_110.setTransform(78.6,665.9,0.619,0.619);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhuQBDBFgIBsIBLBEQBPA/AOgWQAPgWhKg+IhNg6IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAeQgMAPgHANg");
	this.shape_111.setTransform(81.2,670.1,0.619,0.619);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.5,1.4,-17.7).s().p("AAUCHIhLhEQAIhshDhFQAHgNAMgPQAWgeAUgJQATgJATAMQAJAGAFAIIgWDCIBNA6QBKA+gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_112.setTransform(81.2,670.1,0.619,0.619);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgegJgkQgFgShZhHIhZhDIg2hSQgMgbgRgbQgjg1gZABQgpABgWgNg");
	this.shape_113.setTransform(76.5,673.2,0.619,0.619);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAjA1QARAbAMAbIA2BSIBZBDQBZBHAFASQAJAkgcAeQgVAVglAAQgeAAgogOg");
	this.shape_114.setTransform(76.5,673.2,0.619,0.619);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhTgshUhAQgSgNgEgWQgFgWALgTg");
	this.shape_115.setTransform(76.2,679,0.619,0.619);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.8,1,-13.3).s().p("Ag+BVQhTgshUhAQgSgNgEgWQgFgWALgTIAagxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgGgRIANARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_116.setTransform(76.2,679,0.619,0.619);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#60605B").ss(3,1,1).p("AiHCTIBGlEIA8AnQBJAmBFgFIidEbg");
	this.shape_117.setTransform(73.9,657.1,0.619,0.619);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-13.6,0,13.7,0).s().p("AiHCTIBFlEIA8AnQBJAmBGgFIieEbg");
	this.shape_118.setTransform(73.9,657.1,0.619,0.619);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#60605B").ss(3,1,1).p("AhrCpIAGlqIBFAWQBPAUA9gLIhsFkg");
	this.shape_119.setTransform(98.5,668.2,0.619,0.619);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.8,0,10.8,0).s().p("AhrCoIAGlpIBFAWQBPAUA9gLIhsFkg");
	this.shape_120.setTransform(98.5,668.2,0.619,0.619);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#D6D638").ss(6,1,1).p("AiIA+QBOgGBpg6IBag7");
	this.shape_121.setTransform(82.3,596.8,0.619,0.619);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(3.5,1,1).p("AiRjOIAiCgQArCvAtBNQAvgDBCglIA4gkg");
	this.shape_122.setTransform(76.2,580);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#575700","#000000"],[0,1],-14.5,0,14.6,0).s().p("AhvguIgiifIEjFPIg4AkQhCAmgvACQgthNgrivg");
	this.shape_123.setTransform(76.2,580);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjNqIIBhGkIhhBqIgXPFIBrAZIFex9IhUpKg");
	this.shape_124.setTransform(106,626.5,0.619,0.619);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,86.9,0,-86.8).s().p("AjkNLIAXvFIBhhqIhhmkIFejbIBUJKIleR9g");
	this.shape_125.setTransform(106,626.5,0.619,0.619);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhqnAICKCYIioCFIiuMrIBzAfIH6uOIh+m/g");
	this.shape_126.setTransform(84.7,626.1,0.619,0.619);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67.9,0,-67.9).s().p("Ak2KIICusrICoiFIiKiYIEjjmIB+G/In6OOg");
	this.shape_127.setTransform(84.7,626.1,0.619,0.619);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_128.setTransform(116.4,685.5,0.576,0.576);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_129.setTransform(112.6,684.4,0.576,0.576);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_130.setTransform(108.2,683.1,0.576,0.576);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_131.setTransform(105,681.3,0.576,0.576);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#838587").ss(4,1,1).p("AgnAKIBPgT");
	this.shape_132.setTransform(102.8,678.2,0.576,0.576);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_133.setTransform(101.7,675.1,0.576,0.576);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBnA6BBB5ICMAnQCOAhgCgfQgDgeiFgiIiFgbIhwjfQgJgHgLgEQgWgIgLAQQgKARgDApQgCAVABASg");
	this.shape_134.setTransform(109.3,677.5,0.576,0.576);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#606163","#322F2F"],[0,1],4.5,21.3,-6.4,-20.5).s().p("ABVCbIiMgnQhBh5hng6QgBgSACgVQADgpAKgRQALgQAWAIQALAEAJAHIBwDfICFAbQCFAiADAeQABAPghAAQgiAAhKgRg");
	this.shape_135.setTransform(109.3,677.5,0.576,0.576);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBVAiCDgHQCUgOANg9QAEgWgOgYQgLgUgRgMQgWgQihgkIibgfIhuhGQgagbgegZQg8gygUAJQgiAOgKgNg");
	this.shape_136.setTransform(107.8,683,0.576,0.576);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.4,-8.7,-26.5).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIADAQQAKANAigOQAUgJA8AyQAeAZAaAbIBuBGICbAfQChAkAWAQQARAMALAUQAOAYgEAWQgNA9iUAOIgrABQhmAAhHgcg");
	this.shape_137.setTransform(107.8,683,0.576,0.576);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#60605B").ss(4,1,1).p("AliiGIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgugPgagLQgvgUAEgYg");
	this.shape_138.setTransform(107.9,689.1,0.576,0.576);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.2,17,-5.7,-21.1).s().p("AgRCBQiSgPh0goQgugPgagLQgvgUAEgYIAoiKIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh3AAQgyAAg3gGg");
	this.shape_139.setTransform(107.9,689.1,0.576,0.576);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#D6D638").ss(6,1,1).p("ACWExQg5gKhAgpQh/hSglidQgmibBEhiQAVgeAcgVIAZgP");
	this.shape_140.setTransform(77.4,482.6,0.576,0.576);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#BE9075").ss(2.5,1,1).p("AESEtIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQhLAphKgrInTkGIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIAtCKAFOlBIgGgJAi2FZIhLgq");
	this.shape_141.setTransform(101.2,472.2,0.576,0.576);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,62.8,0,-62.8).s().p("AEdJfInTkGIhLgqIBLAqIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQglAUglAAQgmAAglgWgAE/G3IgtiKgAFOlBIgGgJg");
	this.shape_142.setTransform(101.2,472.2,0.576,0.576);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#2C2C2C").ss(3,1,1).p("AC+h4QgrgKisA0QiuA0gdAfQgDAlAMAsQAGAWAGAOQAJgPAfgWQA9grBqghQB+gnBRAGQALABAHgJQAHgJgEgKQgNgigZgjg");
	this.shape_143.setTransform(63.3,422.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D6D638").s().p("AjbBWQgMgsADglQAdgfCug0QCsg0ArAKQAZAjANAiQAEAKgHAJQgHAJgLgBQhRgGh+AnQhqAhg9ArQgfAWgJAPQgGgOgGgWg");
	this.shape_144.setTransform(63.3,422.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#BE9075").ss(3,1,1).p("ABIBMIg1AIQgfAFgbgUQgagUgFggQgFggATgbQATgbAhgFIBEgK");
	this.shape_145.setTransform(66.1,436,0.576,0.576);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(3,1,1).p("AjGhRQgMA2ATBDQAQA+AlA6QAkA6AqAgQAtAiAkgFQgXhqBDgyIgVADQgSADgPgMQgPgLgDgTQgCgTAJgQQAMgPASgDIAogGIANBJIAQgZIgZihIgXgRQgOgLAEgSQAEgRARgEIBzgWQAagFAAgXQAAgWgWgTQgpgigugCQg4gDgmAzQgoAAguATQhaAlgWBeg");
	this.shape_146.setTransform(62.8,428.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("Ag8D6Qgqgggkg6Qglg6gQg+QgThDAMg2QAWheBaglQAugTAoAAQAmgzA4ADQAuACApAiQAWATAAAWQAAAXgaAFIhzAWQgRAEgEARQgEASAOALIAXARIAZChIgQAZIgNhJIgoAGQgSADgMAPQgJAQACATQADATAPALQAPAMASgDIAVgDQhDAyAXBqIgKABQggAAgngeg");
	this.shape_147.setTransform(62.8,428.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#5F4137").s().p("AANANQgcgEgVgNIBEgKIAFAdIgEAAQgJAAgLgCg");
	this.shape_148.setTransform(86.4,445.5,0.576,0.576);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgJAUQgGgHgBgKQgCgKAEgHQAEgJAHgBQAGgBAGAGQAGAHACAKQACAKgEAIQgEAIgHABIgCAAQgFAAgGgFg");
	this.shape_149.setTransform(82.2,431.9,0.576,0.576);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AgZAnQgQgMgDgUQgDgTALgQQALgQATgDQARgDAPAMQAQAMADAUQADATgLAQQgLAQgTADIgGABQgOAAgMgKg");
	this.shape_150.setTransform(81.3,432.7,0.576,0.576);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgdAbIgFAAIgPAAIgBgCIgCgGIgBgKIAAgFQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIADgCIAIgGIAKgGIAMgFIAXgHIALgBIAVgBIACgBIADABIAJALIAEAHIgFAHIgGAFIgEADQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgBIgQABIgJABIgKACIgHADIgHADIgHAEIgFAEIgCACIAAABIgBgBg");
	this.shape_151.setTransform(80.6,426.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#BE9075").ss(2,1,1).p("AAOGtIDEgeQAlgFAXgfQAXgfgFgmIgajRIBCgJQAbgEALgaQAKgbgRgVIh7iUIhtjoIj0gyQh5AShJBlQhIBkASB8IApEIQATB8BjBKQBjBLB5gTg");
	this.shape_152.setTransform(73.2,432.3,0.576,0.576);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-6,-44.1,7.1,42.1).s().p("AjOF1QhjhKgTh8IgpkIQgSh8BIhkQBJhlB5gSID0AyIBtDoIB7CUQARAVgKAbQgLAagbAEIhCAJIAaDRQAFAmgXAfQgXAfglAFIjEAeQgYAEgXAAQheAAhPg8g");
	this.shape_153.setTransform(73.2,432.3,0.576,0.576);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#D6D638").ss(6,1,1).p("AC0AFIlngJ");
	this.shape_154.setTransform(67.9,462.7,0.576,0.576);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(3.5,1,1).p("ABqlcIiagGQhMgDg5A1Qg4A0gDBNIgLFTIgVCFIAeAQQApATA1ALQCnAhDbg+IAjkag");
	this.shape_155.setTransform(67.6,497.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#575700","#000000"],[0,1],0,35.4,0,-35.5).s().p("AiUFXQg0gLgpgTIgfgQIAWiFIAKlTQADhNA5g0QA4g1BMADICbAGICmF8IgjEaQiPAph4AAQhBAAg6gMg");
	this.shape_156.setTransform(67.6,497.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlfgMIEsCLIFno/ICHBoIkkKeQgeBEhCAhQhBAhhIgQIlohSIA3l2");
	this.shape_157.setTransform(101,469.3,0.576,0.576);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,44.9,0,-44.8).s().p("AhSG8IlohSIA3l2IAkAAIEsCLIFno/ICHBoIkkKeQgeBEhCAhQgsAWguAAQgXAAgYgFg");
	this.shape_158.setTransform(101,469.3,0.576,0.576);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#BE9075").ss(2.5,1,1).p("Ai9jrIgeFfIEaB4ICdmkg");
	this.shape_159.setTransform(69.5,463,0.576,0.576);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,23.6,0,-23.5).s().p("AjbBzIAeleIGZAzIidGkg");
	this.shape_160.setTransform(69.5,463,0.576,0.576);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#D6D638").ss(6,1,1).p("Ak3DlQAKACBGgbQBVgiBWgxQECiTByjL");
	this.shape_161.setTransform(94.8,596.6,0.576,0.576);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(3.5,1,1).p("AjfgFIAAgrIG/AAIgMBaQgRADgnACQhPAEhwgJQhwgKgxgUQgPgHgIgFg");
	this.shape_162.setTransform(64.8,532.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#575700","#000000"],[0,1],-22.3,0,22.4,0).s().p("AgjAqQhwgKgxgUQgPgHgIgFIgEgFIAAgrIG/AAIgMBaQgRADgnACIgyACQg+AAhPgHg");
	this.shape_163.setTransform(64.8,532.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#D6D638").ss(6,1,1).p("AkPnnIALA1QAPBEAZBJQBNDoCHC6QCSDLCFCg");
	this.shape_164.setTransform(84.4,567.8,0.576,0.576);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(3.5,1,1).p("ABni3IAJicImzgwIgmB6QgfBkAaBmQAaBlBKBKQEXESAHACQAGABAogQQAxgTAxgdQCVhVBCh1QhNh7h/h3QgkgigkgegABAjWIAgAZQACABACACIADAD");
	this.shape_165.setTransform(74.8,571);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#575700","#000000"],[0,1],0,38.8,0,-38.7).s().p("AAUGEQgHgCkXkSQhKhKgahlQgahmAfhkIAmh6IGzAwIgJCcIgDgDIgEgDIgggZIAgAZIAEADIADADQAkAeAkAiQB/B3BNB7QhCB1iVBVQgxAdgxATQgmAPgHAAIgBAAg");
	this.shape_166.setTransform(74.8,571);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#60605B").ss(3,1,1).p("AhcBwIAljtIAPATQAWAVAgAFQAiAFAagEQANgBAGgDIhPDRg");
	this.shape_167.setTransform(98.6,667.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-9.3,0,9.3,0).s().p("AhcBwIAmjuIAOAUQAWAVAgAEQAiAGAagEQANgBAGgDIhPDRg");
	this.shape_168.setTransform(98.6,667.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al8nuIFrEvIhaBkIiWO4IC7AZIG0yUQAXg9gMhAQgLg/grgxIk+lqg");
	this.shape_169.setTransform(104.2,629.3,0.576,0.576);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,88.6,0,-88.6).s().p("AkBNdICWu4IBahkIlrkwIGBmGIE+FqQArAwALBAQAMBAgXA8Im0SVg");
	this.shape_170.setTransform(104.2,629.3,0.576,0.576);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_171.setTransform(90.1,673.7,0.576,0.576);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_172.setTransform(86.4,672.6,0.576,0.576);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_173.setTransform(82,671.3,0.576,0.576);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_174.setTransform(78.7,669.4,0.576,0.576);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#838587").ss(4,1,1).p("AgmAKIBOgT");
	this.shape_175.setTransform(76.6,666.4,0.576,0.576);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_176.setTransform(75.4,663.3,0.576,0.576);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBmA5BBB6ICNAnQCNAhgBgfQgDgeiGgiIiEgbIhwjfQgJgHgLgEQgXgIgKAQQgLARgDApQgBAVABASg");
	this.shape_177.setTransform(83,665.7,0.576,0.576);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#606163","#322F2F"],[0,1],4.4,21.3,-6.4,-20.5).s().p("ABVCbIiNgnQhBh6hmg5IAAgnQADgpALgRQAKgQAXAIQALAEAJAHIBwDfICEAbQCGAiADAeQAAAPggAAQgjAAhJgRg");
	this.shape_178.setTransform(83,665.7,0.576,0.576);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBWAiCDgHQCUgOAMg9QAFgWgOgYQgMgVgRgLQgWgQihgkIibgfIhthGQgagbgegZQg8gygVAJQghAOgKgNg");
	this.shape_179.setTransform(81.5,671.2,0.576,0.576);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.3,-8.7,-26.6).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIAEAQQAKANAhgOQAVgJA8AyQAeAZAaAbIBtBGICbAfQChAkAWAQQARALAMAVQAOAYgFAWQgMA9iUAOIgsABQhmAAhHgcg");
	this.shape_180.setTransform(81.5,671.2,0.576,0.576);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#60605B").ss(4,1,1).p("AljiGIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgvgPgZgLQgvgUAEgYg");
	this.shape_181.setTransform(81.7,677.3,0.576,0.576);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.1,17,-5.8,-21.1).s().p("AgRCBQiSgPh0goQgvgPgZgLQgvgUAEgYIAniKIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh2AAQgyAAg4gGg");
	this.shape_182.setTransform(81.7,677.3,0.576,0.576);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#60605B").ss(3,1,1).p("AjACxICCmFIARASQAXAVAZAQQBXA0BngNIj/FLg");
	this.shape_183.setTransform(73.1,655.1,0.576,0.576);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.2,0,19.3,0).s().p("AjACxICDmFIAQASQAXAVAZAQQBXA0BmgNIj9FLg");
	this.shape_184.setTransform(73.1,655.1,0.576,0.576);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhXmZIBtCaIiSBuIkEMLICCAkIJ/tAIiPn7g");
	this.shape_185.setTransform(84.2,628.8,0.576,0.576);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67,0,-66.9).s().p("AmAJ6IEEsLICRhuIhsiaIFJkEICPH7Ip/M/g");
	this.shape_186.setTransform(84.2,628.8,0.576,0.576);

	this.instance_4 = new lib.player2ready();
	this.instance_4.parent = this;
	this.instance_4.setTransform(93.8,577.3,1,1,0,0,0,87.8,119.6);

	this.instance_5 = new lib.player2win();
	this.instance_5.parent = this;
	this.instance_5.setTransform(92.5,540.2,1,1,0,0,0,81.9,157.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2,p:{y:540.2}}]},2).to({state:[{t:this.instance_2,p:{y:530.9}}]},2).to({state:[{t:this.shape_63,p:{x:76.1,y:597.1}},{t:this.shape_62,p:{x:76.1,y:597.1}},{t:this.shape_61,p:{x:90.6,y:598.4}},{t:this.shape_60,p:{x:90.6,y:598.4}},{t:this.shape_59,p:{x:69.4,y:544.2}},{t:this.shape_58,p:{x:69.4,y:544.2}},{t:this.shape_57,p:{x:70,y:567.1}},{t:this.shape_56,p:{x:81.3,y:533.2}},{t:this.shape_55,p:{x:81.3,y:533.2}},{t:this.shape_54,p:{x:101.4,y:404.4}},{t:this.shape_53,p:{x:101.4,y:404.4}},{t:this.instance_3},{t:this.shape_52,p:{x:74.8,y:428.5}},{t:this.shape_51,p:{x:74.8,y:428.5}},{t:this.shape_50,p:{x:119.5,y:358.2}},{t:this.shape_49,p:{x:94.5,y:533.1}},{t:this.shape_48,p:{x:80.8,y:495.3}},{t:this.shape_47,p:{x:80.8,y:495.3}},{t:this.shape_46,p:{x:77.3,y:461.8}},{t:this.shape_45,p:{x:77.3,y:461.8}},{t:this.shape_44,p:{x:72,y:427.4}},{t:this.shape_43,p:{x:119.2,y:404.4}},{t:this.shape_42,p:{x:119.2,y:404.4}},{t:this.shape_41,p:{x:136.6,y:354.5}},{t:this.shape_40,p:{x:86.7,y:442.8}},{t:this.shape_39,p:{x:77.8,y:399.3}},{t:this.shape_38,p:{x:77.8,y:399.3}},{t:this.shape_37,p:{x:83.8,y:391.7}},{t:this.shape_36,p:{x:85.8,y:397.1}},{t:this.shape_35,p:{x:86.4,y:396.2}},{t:this.shape_34,p:{x:92.7,y:407.1}},{t:this.shape_33,p:{x:66.3,y:395.7}},{t:this.shape_32,p:{x:66.3,y:395.7}},{t:this.shape_31,p:{x:73.5,y:402.6}},{t:this.shape_30,p:{x:67.7,y:391.8}},{t:this.shape_29,p:{x:67.7,y:391.8}},{t:this.shape_28,p:{x:88.4,y:566.7}},{t:this.shape_27,p:{x:72.9,y:641.3}},{t:this.shape_26,p:{x:72.9,y:641.3}},{t:this.shape_25,p:{x:76.1,y:659.9}},{t:this.shape_24,p:{x:76.1,y:659.9}},{t:this.shape_23,p:{x:76.3,y:654.5}},{t:this.shape_22,p:{x:76.3,y:654.5}},{t:this.shape_21,p:{x:80.8,y:651.6}},{t:this.shape_20,p:{x:80.8,y:651.6}},{t:this.shape_19,p:{x:78.3,y:647.6}},{t:this.shape_18,p:{x:77.7,y:650.2}},{t:this.shape_17,p:{x:78,y:653}},{t:this.shape_16,p:{x:79.6,y:655.3}},{t:this.shape_15,p:{x:82.2,y:657.5}},{t:this.shape_14,p:{x:84.2,y:659.4}},{t:this.shape_13,p:{x:91.1,y:644.2}},{t:this.shape_12,p:{x:91.1,y:644.2}},{t:this.shape_11,p:{x:94.1,y:668}},{t:this.shape_10,p:{x:94.1,y:668}},{t:this.shape_9,p:{x:94.3,y:662.6}},{t:this.shape_8,p:{x:94.3,y:662.6}},{t:this.shape_7,p:{x:98.8,y:659.7}},{t:this.shape_6,p:{x:98.8,y:659.7}},{t:this.shape_5,p:{x:96.3,y:655.7}},{t:this.shape_4,p:{x:95.7,y:658.3}},{t:this.shape_3,p:{x:96.1,y:661.2}},{t:this.shape_2,p:{x:97.7,y:663.5}},{t:this.shape_1,p:{x:100.2,y:665.7}},{t:this.shape,p:{x:102.2,y:667.6}}]},2).to({state:[{t:this.shape_63,p:{x:76.3,y:580.7}},{t:this.shape_62,p:{x:76.3,y:580.7}},{t:this.shape_61,p:{x:90.9,y:581.9}},{t:this.shape_60,p:{x:90.9,y:581.9}},{t:this.shape_59,p:{x:69.6,y:527.8}},{t:this.shape_58,p:{x:69.6,y:527.8}},{t:this.shape_57,p:{x:70.2,y:550.7}},{t:this.shape_56,p:{x:81.6,y:516.8}},{t:this.shape_55,p:{x:81.6,y:516.8}},{t:this.shape_54,p:{x:101.7,y:388}},{t:this.shape_53,p:{x:101.7,y:388}},{t:this.shape_52,p:{x:75.1,y:412.1}},{t:this.shape_51,p:{x:75.1,y:412.1}},{t:this.shape_50,p:{x:119.8,y:341.8}},{t:this.shape_49,p:{x:94.7,y:516.6}},{t:this.shape_48,p:{x:81,y:478.9}},{t:this.shape_47,p:{x:81,y:478.9}},{t:this.shape_46,p:{x:77.6,y:445.3}},{t:this.shape_45,p:{x:77.6,y:445.3}},{t:this.shape_44,p:{x:72.2,y:411}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_41,p:{x:136.9,y:338.1}},{t:this.shape_40,p:{x:86.9,y:426.4}},{t:this.shape_39,p:{x:78.1,y:382.8}},{t:this.shape_38,p:{x:78.1,y:382.8}},{t:this.shape_37,p:{x:84,y:375.2}},{t:this.shape_36,p:{x:86.1,y:380.6}},{t:this.shape_35,p:{x:86.7,y:379.8}},{t:this.shape_34,p:{x:93,y:390.6}},{t:this.shape_33,p:{x:66.5,y:379.3}},{t:this.shape_32,p:{x:66.5,y:379.3}},{t:this.shape_31,p:{x:73.8,y:386.1}},{t:this.shape_30,p:{x:68,y:375.4}},{t:this.shape_29,p:{x:68,y:375.4}},{t:this.shape_28,p:{x:88.7,y:550.2}},{t:this.shape_27,p:{x:73.1,y:624.9}},{t:this.shape_26,p:{x:73.1,y:624.9}},{t:this.shape_25,p:{x:76.3,y:643.4}},{t:this.shape_24,p:{x:76.3,y:643.4}},{t:this.shape_23,p:{x:76.6,y:638}},{t:this.shape_22,p:{x:76.6,y:638}},{t:this.shape_21,p:{x:81,y:635.1}},{t:this.shape_20,p:{x:81,y:635.1}},{t:this.shape_19,p:{x:78.5,y:631.1}},{t:this.shape_18,p:{x:78,y:633.7}},{t:this.shape_17,p:{x:78.3,y:636.6}},{t:this.shape_16,p:{x:79.9,y:638.9}},{t:this.shape_15,p:{x:82.4,y:641}},{t:this.shape_14,p:{x:84.4,y:643}},{t:this.shape_13,p:{x:91.4,y:627.8}},{t:this.shape_12,p:{x:91.4,y:627.8}},{t:this.shape_11,p:{x:94.3,y:651.6}},{t:this.shape_10,p:{x:94.3,y:651.6}},{t:this.shape_9,p:{x:94.6,y:646.2}},{t:this.shape_8,p:{x:94.6,y:646.2}},{t:this.shape_7,p:{x:99,y:643.3}},{t:this.shape_6,p:{x:99,y:643.3}},{t:this.shape_5,p:{x:96.5,y:639.3}},{t:this.shape_4,p:{x:96,y:641.9}},{t:this.shape_3,p:{x:96.3,y:644.7}},{t:this.shape_2,p:{x:97.9,y:647}},{t:this.shape_1,p:{x:100.4,y:649.2}},{t:this.shape,p:{x:102.5,y:651.1}}]},2).to({state:[{t:this.shape_63,p:{x:76.3,y:597.1}},{t:this.shape_62,p:{x:76.3,y:597.1}},{t:this.shape_61,p:{x:90.9,y:598.4}},{t:this.shape_60,p:{x:90.9,y:598.4}},{t:this.shape_59,p:{x:69.6,y:544.2}},{t:this.shape_58,p:{x:69.6,y:544.2}},{t:this.shape_57,p:{x:70.2,y:567.1}},{t:this.shape_56,p:{x:81.6,y:533.2}},{t:this.shape_55,p:{x:81.6,y:533.2}},{t:this.shape_54,p:{x:101.7,y:404.4}},{t:this.shape_53,p:{x:101.7,y:404.4}},{t:this.shape_52,p:{x:75.1,y:428.5}},{t:this.shape_51,p:{x:75.1,y:428.5}},{t:this.shape_50,p:{x:119.8,y:358.2}},{t:this.shape_49,p:{x:94.7,y:533.1}},{t:this.shape_48,p:{x:81,y:495.3}},{t:this.shape_47,p:{x:81,y:495.3}},{t:this.shape_46,p:{x:77.6,y:461.8}},{t:this.shape_45,p:{x:77.6,y:461.8}},{t:this.shape_44,p:{x:72.2,y:427.4}},{t:this.shape_43,p:{x:119.4,y:404.4}},{t:this.shape_42,p:{x:119.4,y:404.4}},{t:this.shape_41,p:{x:136.9,y:354.5}},{t:this.shape_40,p:{x:86.9,y:442.8}},{t:this.shape_39,p:{x:78.1,y:399.3}},{t:this.shape_38,p:{x:78.1,y:399.3}},{t:this.shape_37,p:{x:84,y:391.7}},{t:this.shape_36,p:{x:86.1,y:397.1}},{t:this.shape_35,p:{x:86.7,y:396.2}},{t:this.shape_34,p:{x:93,y:407.1}},{t:this.shape_33,p:{x:66.5,y:395.7}},{t:this.shape_32,p:{x:66.5,y:395.7}},{t:this.shape_31,p:{x:73.8,y:402.6}},{t:this.shape_30,p:{x:68,y:391.8}},{t:this.shape_29,p:{x:68,y:391.8}},{t:this.shape_28,p:{x:88.7,y:566.7}},{t:this.shape_27,p:{x:73.1,y:641.3}},{t:this.shape_26,p:{x:73.1,y:641.3}},{t:this.shape_25,p:{x:76.3,y:659.9}},{t:this.shape_24,p:{x:76.3,y:659.9}},{t:this.shape_23,p:{x:76.6,y:654.5}},{t:this.shape_22,p:{x:76.6,y:654.5}},{t:this.shape_21,p:{x:81,y:651.6}},{t:this.shape_20,p:{x:81,y:651.6}},{t:this.shape_19,p:{x:78.5,y:647.6}},{t:this.shape_18,p:{x:78,y:650.2}},{t:this.shape_17,p:{x:78.3,y:653}},{t:this.shape_16,p:{x:79.9,y:655.3}},{t:this.shape_15,p:{x:82.4,y:657.5}},{t:this.shape_14,p:{x:84.4,y:659.4}},{t:this.shape_13,p:{x:91.4,y:644.2}},{t:this.shape_12,p:{x:91.4,y:644.2}},{t:this.shape_11,p:{x:94.3,y:668}},{t:this.shape_10,p:{x:94.3,y:668}},{t:this.shape_9,p:{x:94.6,y:662.6}},{t:this.shape_8,p:{x:94.6,y:662.6}},{t:this.shape_7,p:{x:99,y:659.7}},{t:this.shape_6,p:{x:99,y:659.7}},{t:this.shape_5,p:{x:96.5,y:655.7}},{t:this.shape_4,p:{x:96,y:658.3}},{t:this.shape_3,p:{x:96.3,y:661.2}},{t:this.shape_2,p:{x:97.9,y:663.5}},{t:this.shape_1,p:{x:100.4,y:665.7}},{t:this.shape,p:{x:102.5,y:667.6}}]},2).to({state:[{t:this.shape_63,p:{x:76.3,y:608}},{t:this.shape_62,p:{x:76.3,y:608}},{t:this.shape_61,p:{x:90.9,y:609.2}},{t:this.shape_60,p:{x:90.9,y:609.2}},{t:this.shape_59,p:{x:69.6,y:555.1}},{t:this.shape_58,p:{x:69.6,y:555.1}},{t:this.shape_57,p:{x:70.2,y:578}},{t:this.shape_56,p:{x:81.6,y:544.1}},{t:this.shape_55,p:{x:81.6,y:544.1}},{t:this.shape_54,p:{x:101.7,y:415.3}},{t:this.shape_53,p:{x:101.7,y:415.3}},{t:this.shape_52,p:{x:75.1,y:439.4}},{t:this.shape_51,p:{x:75.1,y:439.4}},{t:this.shape_50,p:{x:119.8,y:369.1}},{t:this.shape_49,p:{x:94.7,y:543.9}},{t:this.shape_48,p:{x:81,y:506.2}},{t:this.shape_47,p:{x:81,y:506.2}},{t:this.shape_46,p:{x:77.6,y:472.6}},{t:this.shape_45,p:{x:77.6,y:472.6}},{t:this.shape_44,p:{x:72.2,y:438.3}},{t:this.shape_43,p:{x:119.4,y:415.2}},{t:this.shape_42,p:{x:119.4,y:415.2}},{t:this.shape_41,p:{x:136.9,y:365.4}},{t:this.shape_40,p:{x:86.9,y:453.7}},{t:this.shape_39,p:{x:78.1,y:410.1}},{t:this.shape_38,p:{x:78.1,y:410.1}},{t:this.shape_37,p:{x:84,y:402.5}},{t:this.shape_36,p:{x:86.1,y:407.9}},{t:this.shape_35,p:{x:86.7,y:407.1}},{t:this.shape_34,p:{x:93,y:417.9}},{t:this.shape_33,p:{x:66.5,y:406.6}},{t:this.shape_32,p:{x:66.5,y:406.6}},{t:this.shape_31,p:{x:73.8,y:413.4}},{t:this.shape_30,p:{x:68,y:402.7}},{t:this.shape_29,p:{x:68,y:402.7}},{t:this.shape_28,p:{x:88.7,y:577.5}},{t:this.shape_27,p:{x:73.1,y:652.2}},{t:this.shape_26,p:{x:73.1,y:652.2}},{t:this.shape_25,p:{x:76.3,y:670.7}},{t:this.shape_24,p:{x:76.3,y:670.7}},{t:this.shape_23,p:{x:76.6,y:665.3}},{t:this.shape_22,p:{x:76.6,y:665.3}},{t:this.shape_21,p:{x:81,y:662.4}},{t:this.shape_20,p:{x:81,y:662.4}},{t:this.shape_19,p:{x:78.5,y:658.4}},{t:this.shape_18,p:{x:78,y:661}},{t:this.shape_17,p:{x:78.3,y:663.9}},{t:this.shape_16,p:{x:79.9,y:666.2}},{t:this.shape_15,p:{x:82.4,y:668.3}},{t:this.shape_14,p:{x:84.4,y:670.3}},{t:this.shape_13,p:{x:91.4,y:655.1}},{t:this.shape_12,p:{x:91.4,y:655.1}},{t:this.shape_11,p:{x:94.3,y:678.9}},{t:this.shape_10,p:{x:94.3,y:678.9}},{t:this.shape_9,p:{x:94.6,y:673.5}},{t:this.shape_8,p:{x:94.6,y:673.5}},{t:this.shape_7,p:{x:99,y:670.6}},{t:this.shape_6,p:{x:99,y:670.6}},{t:this.shape_5,p:{x:96.5,y:666.6}},{t:this.shape_4,p:{x:96,y:669.2}},{t:this.shape_3,p:{x:96.3,y:672}},{t:this.shape_2,p:{x:97.9,y:674.3}},{t:this.shape_1,p:{x:100.4,y:676.5}},{t:this.shape,p:{x:102.5,y:678.4}}]},2).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},2).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_5}]},5).wait(1));

	// Layer_3
	this.instance_6 = new lib.ball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(118.3,321.4,0.825,0.825);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(1).to({regX:29.7,regY:29.7,x:167.4,y:324.5},0).wait(1).to({x:192.9,y:304},0).wait(1).to({x:219.3,y:284.6},0).wait(1).to({x:246.6,y:266.5},0).wait(1).to({x:274.9,y:250.1},0).wait(1).to({x:304.2,y:235.5},0).wait(1).to({x:334.5,y:223.2},0).wait(1).to({x:365.8,y:213.6},0).wait(1).to({x:397.9,y:207.1},0).wait(1).to({x:430.4,y:204.1},0).wait(1).to({x:463.2,y:205},0).wait(1).to({x:495.5,y:209.9},0).wait(1).to({x:527,y:218.7},0).wait(1).to({x:557.3,y:231},0).wait(1).to({x:586.1,y:246.5},0).wait(1).to({x:613.4,y:264.6},0).wait(1).to({x:640,y:291.5},0).wait(1).to({regX:0,regY:0,skewY:180,x:664.5,y:266.7},0).wait(1).to({regX:29.7,regY:29.7,x:640,y:333.2},0).wait(1).to({y:375.2},0).wait(1).to({y:417.2},0).wait(1).to({y:459.2},0).wait(1).to({y:501.2},0).wait(1).to({regX:0,regY:0,x:664.5,y:476.7},0).wait(4));

	// Layer_4
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0)").s().p("EhgrA4QQjUAAAAjcMAAAhpnQAAjcDUAAMDBXAAAQDUAAAADcMAAABpnQAADcjUAAg");
	this.shape_187.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_187).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.player1out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// Layer_4
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(1170.3,498.6,1,1,0,0,0,4.2,0.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(1).to({regX:2.5,regY:3.7,rotation:7.5,x:1167.7,y:501.7},0).wait(1).to({rotation:15,x:1166.8,y:501.9},0).wait(1).to({rotation:22.5,x:1166,y:502.1},0).wait(1).to({rotation:30,x:1165.2,y:502.3},0).wait(1).to({rotation:26.2,x:1164.8,y:503.1},0).wait(1).to({rotation:22.4,x:1164.4,y:503.8},0).wait(1).to({rotation:18.6,x:1164,y:504.5},0).wait(1).to({rotation:14.9,x:1163.6,y:505.3},0).wait(1).to({rotation:-18.5,x:1163.5,y:510.5},0).wait(1).to({rotation:-19.7,x:1164,y:511.8},0).wait(1).to({rotation:-21,x:1164.5,y:513},0).wait(1).to({rotation:-22.2,x:1165.1,y:514.3},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.player1ball();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1185.8,577.3,1,1,0,0,0,77,119.6);

	this.instance_2 = new lib.player1throw1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1186.9,548.8,1,1,0,0,0,58,148.5);

	this.instance_3 = new lib.player1throw2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1186.1,540.2,1,1,0,0,0,45.8,158.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape.setTransform(1177.5,667.6,0.619,0.619,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_1.setTransform(1179.6,665.7,0.619,0.619,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_2.setTransform(1182.1,663.5,0.619,0.619,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgbAJIA3gR");
	this.shape_3.setTransform(1183.7,661.2,0.619,0.619,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_4.setTransform(1184,658.3,0.619,0.619,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_5.setTransform(1183.5,655.7,0.619,0.619,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi3QgEgHgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_6.setTransform(1181,659.7,0.619,0.619,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAHIgUC3IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_7.setTransform(1181,659.7,0.619,0.619,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIhAC+ICeByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgRhUhDIhUg/IgzhNQgLgZgQgZQghgygYAAQgmACgVgNg");
	this.shape_8.setTransform(1185.4,662.6,0.619,0.619,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIiehyIBAi+IAOANQAVANAmgCQAYAAAhAyQAQAZALAZIAzBNIBUA/QBUBDAEARQAJAjgaAbQgUAVgkAAQgcAAglgNg");
	this.shape_9.setTransform(1185.4,662.6,0.619,0.619,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABQhRABhzg9QhNgphQg8QgRgNgEgVQgEgUAKgTg");
	this.shape_10.setTransform(1185.7,668,0.619,0.619,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,0.9,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgVQgEgUAKgTIAZgtIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABIgCAAQhRAAhxg8g");
	this.shape_11.setTransform(1185.7,668,0.619,0.619,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#60605B").ss(3,1,1).p("Ag2CdIgxlSIBHAOQBRAJA3gXIg4Frg");
	this.shape_12.setTransform(1188.6,644.2,0.619,0.619,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.3,0,10.4,0).s().p("Ag2CdIgxlSIBHANQBRAKA3gXIg4Frg");
	this.shape_13.setTransform(1188.6,644.2,0.619,0.619,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_14.setTransform(1195.6,659.4,0.619,0.619,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_15.setTransform(1197.6,657.5,0.619,0.619,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_16.setTransform(1200.1,655.3,0.619,0.619,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(4,1,1).p("AgbAKIA3gT");
	this.shape_17.setTransform(1201.7,653,0.619,0.619,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(4,1,1).p("AgjgDIBGAH");
	this.shape_18.setTransform(1202,650.2,0.619,0.619,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_19.setTransform(1201.5,647.6,0.619,0.619,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi2QgEgIgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_20.setTransform(1199,651.6,0.619,0.619,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAIIgUC2IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_21.setTransform(1199,651.6,0.619,0.619,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIg/C+ICdByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgQhUhDIhUg/IgzhNQgLgagQgZQghgygYABQgmABgVgNg");
	this.shape_22.setTransform(1203.4,654.5,0.619,0.619,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIidhyIA/i+IAOANQAVANAmgBQAYgBAhAyQAQAZALAaIAzBNIBUA/QBUBDAEAQQAJAjgaAbQgVAVgjAAQgcAAglgNg");
	this.shape_23.setTransform(1203.4,654.5,0.619,0.619,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABQhSABhzg9QhNgphQg8QgRgNgEgUQgEgVAKgTg");
	this.shape_24.setTransform(1203.7,659.9,0.619,0.619,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,1,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgUQgEgVAKgTIAZgtIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABIgCAAQhRAAhyg8g");
	this.shape_25.setTransform(1203.7,659.9,0.619,0.619,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#60605B").ss(3,1,1).p("AhPCnIgUlrIBGAZQBPAWAygSIhIFsg");
	this.shape_26.setTransform(1206.9,641.3,0.619,0.619,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10,0,10.1,0).s().p("AhQCnIgUlrIBHAZQBPAVAzgRIhJFsg");
	this.shape_27.setTransform(1206.9,641.3,0.619,0.619,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#ECA92F").ss(6,1,1).p("AEfg0Qi7B5jTgSQhDgGg9gTIgvgS");
	this.shape_28.setTransform(1191.3,566.7,0.619,0.619,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#9C701F").ss(3,1,1).p("ADtjnQg/gCjlB/QjlB+gfA2QAHA1AeA6QAPAdAOATQAAgDAJgPQANgWAXgZQBIhPCNhQQCjhcB3gSQAQgCAHgPQAGgPgJgNQgcgqgugrg");
	this.shape_29.setTransform(1212,391.8,0.619,0.619,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ECA92F").s().p("AkWC5Qgeg6gHg1QAfg2Dlh+QDlh/A/ACQAuArAcAqQAJANgGAPQgHAPgQACQh3ASijBcQiNBQhIBPQgXAZgNAWQgJAPAAADQgOgTgPgdg");
	this.shape_30.setTransform(1212,391.8,0.619,0.619,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(3,1,1).p("ABCA2IgqAQQgYAKgZgLQgZgMgKgaQgKgaALgYQALgZAZgKIA1gU");
	this.shape_31.setTransform(1206.2,402.6,0.619,0.619,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#352B2C").ss(3,1,1).p("AkIglQgBBOAuBbQArBTBGBGQBEBGBFAhQBKAjAzgUQhDiNBRhdIgdALQgZAKgZgLQgZgMgKgaQgKgaALgZQALgZAZgKIA2gUIAoBjIAQgoIhVjcIglgSQgYgLAAgaQAAgaAXgLICchDQAjgPgHggQgGgfglgTQhFgkhBALQhRAOgkBSQg6ANg7ApQh0BRgBCLg");
	this.shape_32.setTransform(1213.5,395.8,0.619,0.619,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4B3A3B").s().p("AAfGEQhFghhEhGQhGhGgrhTQguhbABhOQABiLB0hRQA7gpA6gNQAkhSBRgOQBBgLBFAkQAlATAGAfQAHAggjAPIicBDQgXALAAAaQAAAaAYALIAlASIBVDcIgQAoIgohjIg2AUQgZAKgLAZQgLAZAKAaQAKAaAZAMQAZALAZgKIAdgLQhRBdBDCNQgSAHgVAAQgmAAgwgWg");
	this.shape_33.setTransform(1213.5,395.8,0.619,0.619,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F4137").s().p("AgfAHIA1gUIAKAXQgOAEgNAAQgSAAgSgHg");
	this.shape_34.setTransform(1187,407.1,0.619,0.619,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDARQgGgEgDgIQgEgHACgHQACgIAGgCQAFgCAFAEQAGAFADAIQAEAHgCAHQgCAHgFACIgEABQgEAAgDgDg");
	this.shape_35.setTransform(1193.3,396.2,0.619,0.619,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgOAkQgOgHgGgPQgGgPAGgPQAGgPAOgGQAOgFAPAHQAOAHAGAQQAGAOgGAPQgGAPgPAGQgGACgHAAQgHAAgIgEg");
	this.shape_36.setTransform(1193.9,397.1,0.619,0.619,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5F4137").s().p("AhDArIgGgOIgCgJQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIACgDIALgNIANgLIAfgVIAggNIAdgIIAEgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABIARAQIAGAHIACADIgPAgQAAAAAAAAQAAABgBAAQAAAAAAAAQgBgBAAAAIgDABIgWAGIgNAEIgVAMIgRAOIgGAHIgBACQABAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgIgBIgXADIgDABg");
	this.shape_37.setTransform(1196,391.6,0.619,0.619,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BE9075").ss(2,1,1).p("ABjFMICbg7QAdgMANgcQANgdgLgeIg6ilIA0gTQAWgIAEgXQADgXgSgPIh9hjIiCipIjPACQhfAkgqBfQgpBfAlBhIBQDPQAlBhBeArQBdArBfgkg");
	this.shape_38.setTransform(1201.9,399.3,0.619,0.619,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-11.5,-36.3,14.4,31.5).s().p("AhZFFQhegrglhhIhQjPQglhhAphfQAqhfBfgkIDPgCICCCpIB9BjQASAPgDAXQgEAXgWAIIg0ATIA6ClQALAegNAdQgNAcgdAMIibA7QgrAQgsAAQgyAAgzgXg");
	this.shape_39.setTransform(1201.9,399.3,0.619,0.619,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#ECA92F").ss(6,1,1).p("AB8D+QgvgIg1giQhphEgfiDQgfiBA3hRQAcgpAigP");
	this.shape_40.setTransform(1193.1,442.8,0.619,0.619,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE9075").ss(2.5,1,1).p("AHXtoIhfALQgMABgJAJIiVCKIAAA1Il/G/IAACEIl2HBQgiAPgcApQg4BRAfCCQAgCDBqBEQA1AiAvAIIBylKIJKyaIDTieIBxAAQALAAAHgIQAIgHAAgLQAAgKgIgIQgHgHgKAAIADAAIhfgcQgegJgfAGAGotWQgEADgEADIgsAhQAbgZAZgOQAcgQAZgDIgFABQgBAAAAAAQgZAFgWANgAJxtJIh9AAIhnA4");
	this.shape_41.setTransform(1160.6,404.3,0.619,0.619,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,87.6,0,-87.5).s().p("An0NCQhqhEggiDQgfiCA4hRQAcgpAigPIF2nBIAAiEIF/m/IAAg1ICViKQAJgJAMgBIBfgLQgZAFgWANQgZAOgbAZIAsghIAIgGQAcgQAZgDIgFABQAfgGAeAJIBfAcIgDAAQAKAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAIhxAAIjTCeIpKSaIhyFKQgvgIg1gigAGNsRIBng4IB9AAIh9AAgAHXtoIABAAIAFgBQgZADgcAQQAWgNAZgFgAHXtoIAAAAg");
	this.shape_42.setTransform(1160.6,404.3,0.619,0.619,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BE9075").ss(4,1,1).p("AgpA8IAZhgQAEgRAQgFQAQgEAMALQAMAKgCAQIgBAJg");
	this.shape_43.setTransform(1143.1,354.5,0.619,0.619,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#ECA92F").ss(6,1,1).p("ACWAEIkrgI");
	this.shape_44.setTransform(1207.8,427.4,0.619,0.619,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#6F047E").ss(3.5,1,1).p("AC+omIldgJQhwgFhDBUQhCBUATB7IBTIgIAKDWIAtAZQA8AbBIAMQDnApESh0IgLpTg");
	this.shape_45.setTransform(1202.4,461.8,0.619,0.619,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,56,0,-56).s().p("AhzIlQhIgMg8gbIgtgZIgKjWIhTogQgTh7BChUQBDhUBwAFIFdAJIC9GtIALJTQjLBWizAAQg+AAg9gLg");
	this.shape_46.setTransform(1202.4,461.8,0.619,0.619,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#6F047E").ss(3.5,1,1).p("AlAAcIAAg8IKBhDIgSB2QgXAZg3AXQhvAsiigOQijgOhHgdQgWgJgKgKg");
	this.shape_47.setTransform(1199,495.3,0.619,0.619,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-32.1,0,32.1,0).s().p("AgwBhQijgOhHgdQgWgJgKgKIgGgHIAAg8IKBhDIgTB2QgWAZg3AXQhVAhhyAAQgjAAgngDg");
	this.shape_48.setTransform(1199,495.3,0.619,0.619,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#ECA92F").ss(6,1,1).p("AhMn9IBEFaQBHGPAOES");
	this.shape_49.setTransform(1185.3,533.1,0.619,0.619,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BE9075").ss(4,1,1).p("Ag3A2IA9iHQAEgJAJgEQAJgEAKADQAJADAFAJQAFAIgCAKQgVBnggA7");
	this.shape_50.setTransform(1160.2,358.2,0.619,0.619,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BE9075").ss(2.5,1,1).p("AidjDIgZEjIDqBkICDldg");
	this.shape_51.setTransform(1204.9,428.5,0.619,0.619,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,19.7,0,-19.6).s().p("Ai2BgIAZkjIFUAqIiDFdg");
	this.shape_52.setTransform(1204.9,428.5,0.619,0.619,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#6F047E").ss(3.5,1,1).p("AjfBUQhxhQgtiCQguiIAsiOIA2iwIJvgNIgFDbIAWBDQAaBXAUBhQBAE1gTEuQi7B5jUgSQhCgFg9gTIgvgSg");
	this.shape_53.setTransform(1198.4,533.2,0.619,0.619,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,59.4,0,-59.3).s().p("AADJPQhCgFg9gTIgvgSIg0nRQhxhQgtiCQguiIAsiOIA2iwIJvgNIgFDbIAWBDQAaBXAUBhQBAE1gTEuQijBqi2AAQgbAAgbgDg");
	this.shape_54.setTransform(1198.4,533.2,0.619,0.619,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#ECA92F").ss(6,1,1).p("AiMAAQBGAVBvgOQA6gHAqgM");
	this.shape_55.setTransform(1209.8,567.1,0.619,0.619,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#6F047E").ss(3.5,1,1).p("AiTl+IgDEnQAAFBAUCHQBGAXBwgPQA5gHAqgMIhTpig");
	this.shape_56.setTransform(1210.4,544.2,0.619,0.619,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,38.3,0,-38.2).s().p("AiCFxQgUiHAAlBIADknIDXCCIBTJiQgqAMg5AHQgtAGgkAAQg6AAgrgOg");
	this.shape_57.setTransform(1210.4,544.2,0.619,0.619,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjTrKIB8JEIhMDXIB1MxIBkAYICevgIhctTg");
	this.shape_58.setTransform(1189.1,598.4,0.619,0.619,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,92.2,0,-92.2).s().p("AguOCIh1sxIBMjXIh8pEIFLjPIBcNTIiePgg");
	this.shape_59.setTransform(1189.1,598.4,0.619,0.619,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aihq2ICAIKIiRDaIAvNDIBsAeIDKv4IhDslg");
	this.shape_60.setTransform(1203.7,597.1,0.619,0.619,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,91.1,0,-91.1).s().p("AiDNxIgvtDICRjaIiAoKIERjYIBDMlIjKP4g");
	this.shape_61.setTransform(1203.7,597.1,0.619,0.619,0,0,180);

	this.instance_4 = new lib.ball();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1161.8,321.4,0.825,0.825,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlZO0IhokqIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIg");
	this.shape_62.setTransform(1178.3,404.4,0.619,0.619,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,94.8,0,-94.7).s().p("AnBKKIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIIkfL+g");
	this.shape_63.setTransform(1178.3,404.4,0.619,0.619,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#838587").ss(4,1,1).p("AgaARIA0gh");
	this.shape_64.setTransform(1170,687.1,0.619,0.619,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_65.setTransform(1172.1,685.1,0.619,0.619,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_66.setTransform(1174.8,682.8,0.619,0.619,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_67.setTransform(1176.5,680.3,0.619,0.619,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_68.setTransform(1176.9,677.3,0.619,0.619,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_69.setTransform(1176.3,674.6,0.619,0.619,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhvQBCBHgHBrIBLBEQBPA/AOgWQAPgWhLg/IhMg5IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAdQgMAPgHANg");
	this.shape_70.setTransform(1173.6,678.8,0.619,0.619,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.4,1.4,-17.8).s().p("AAUCHIhLhEQAHhrhChHQAHgNAMgPQAWgdAUgJQATgJATAMQAJAGAFAIIgWDCIBMA5QBLA/gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_71.setTransform(1173.6,678.8,0.619,0.619,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgdgJglQgFgShZhHIhZhDIg2hSQgMgbgSgbQgig1gZABQgpABgWgNg");
	this.shape_72.setTransform(1178.4,681.9,0.619,0.619,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAiA1QASAbAMAbIA2BSIBZBDQBZBHAFASQAJAlgcAdQgVAVglAAQgeAAgogOg");
	this.shape_73.setTransform(1178.4,681.9,0.619,0.619,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhSgrhVhAQgSgOgFgWQgEgWAKgTg");
	this.shape_74.setTransform(1178.6,687.6,0.619,0.619,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.2).s().p("Ag+BVQhSgrhVhAQgSgOgFgWQgEgWAKgTIAbgxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_75.setTransform(1178.6,687.6,0.619,0.619,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#9C701F").ss(3,1,1).p("AEki4QhCgRkJBRQkKBQgtAwQgFA5ASBDQAJAiAKAWQAPgYAvghQBdhCCkg0QBtghBagMQBDgJAzAEQARABAKgNQALgOgGgQQgTgxgng4g");
	this.shape_76.setTransform(1209.8,415.3,0.619,0.619,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#ECA92F").s().p("AlRCEQgShDAFg5QAtgwEKhQQEJhRBCARQAnA4ATAxQAGAQgLAOQgKANgRgBQgzgEhDAJQhaAMhtAhQikA0hdBCQgvAhgPAYQgKgWgJgig");
	this.shape_77.setTransform(1209.8,415.3,0.619,0.619,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BE9075").ss(3,1,1).p("ABABDIgwAHQgbAEgXgRQgYgRgEgdQgFgcASgYQARgYAcgEIA8gJ");
	this.shape_78.setTransform(1207.1,428.1,0.619,0.619,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#352B2C").ss(3,1,1).p("Akvh8QgTBSAcBoQAZBfA5BaQA3BXBBAyQBFA0A4gIQgliiBohOIggAFQgdAEgXgRQgWgRgFgdQgEgdAQgYQARgYAdgEIA8gJIAUBvIAYgmIglj3IgjgbQgWgRAGgbQAFgbAbgGICxgiQAogHAAgjQAAgigigcQg/g0hHgEQhWgEg6BNQg+AAhGAdQiLA6ggCQg");
	this.shape_79.setTransform(1210.3,420.7,0.619,0.619,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4B3A3B").s().p("AhcGAQhBgyg3hXQg5hagZhfQgchoAThSQAgiQCLg6QBGgdA+AAQA6hNBWAEQBHAEA/A0QAiAcAAAiQAAAjgoAHIixAiQgbAGgFAbQgGAbAWARIAjAbIAlD3IgYAmIgUhvIg8AJQgdAEgRAYQgQAYAEAdQAFAdAWARQAXARAdgEIAggFQhoBOAlCiIgQABQgxAAg8gtg");
	this.shape_80.setTransform(1210.3,420.7,0.619,0.619,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5F4137").s().p("AAMAMQgZgEgSgLIA8gKIADAaIgDABIgRgCg");
	this.shape_81.setTransform(1187.9,437.1,0.619,0.619,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHARQgGgGgBgJQgBgIADgHQADgHAHgBQAFgBAGAGQAFAGABAJQABAIgDAHQgDAHgHABIgBAAQgFAAgEgFg");
	this.shape_82.setTransform(1191.8,424.2,0.619,0.619,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgXAiQgNgKgCgSQgDgQAJgPQAKgOAQgCQAQgDAOALQANAKACASQADAQgJAPQgKAOgQACIgHABQgMAAgLgJg");
	this.shape_83.setTransform(1192.6,425,0.619,0.619,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5F4137").s().p("AgpAtIgHgBIgOgCIgNAAIgCgDIgDgKQgDgKABgFIgBgKQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAIACgCIAOgKIAQgKIASgIQAIgEALgCIAkgHIAfgBIAEgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIAGAHQAFAFAEAHIAEAJIACADIgXAcQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgaABIgbAEIgXAKIgJAGIgIAGIgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_84.setTransform(1193.4,418.9,0.619,0.619,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BE9075").ss(2,1,1).p("AAMF7ICugaQAhgFAUgbQAUgbgFgiIgXi4IA7gJQAYgDAJgXQAJgXgPgTIhsiDIhhjNIjXgtQhrARhABZQhBBZARBtIAkDpQAQBtBYBCQBYBCBqgRg");
	this.shape_85.setTransform(1200.4,424.6,0.619,0.619,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-5.3,-38.9,6.3,37.2).s().p("Ai2FKQhYhCgQhtIgkjpQgRhtBBhZQBAhZBrgRIDXAtIBhDNIBsCDQAPATgJAXQgJAXgYADIg7AJIAXC4QAFAigUAbQgUAbghAFIiuAaQgVAEgUAAQhTAAhGg1g");
	this.shape_86.setTransform(1200.4,424.6,0.619,0.619,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#ECA92F").ss(6,1,1).p("ACEENQgygIg4glQhwhIghiLQghiJA7hWQASgbAagTIAWgN");
	this.shape_87.setTransform(1196.4,472.4,0.619,0.619,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BE9075").ss(2.5,1,1).p("ADyCfImLg+QhVgOhPAkIhiArIgWANQgZATgTAbQg7BWAhCKQAhCLBxBIQA5AlAyAIIBljfQANgcAagRQAagRAfAAIHCAAQBHAAAlg9QAlg+gjg/Imir9QgsgqgagoQgYgkgFgbQgCgKgIgGQgJgGgKACQgJACgGAHQgFAHAAAKQADA6BFBYQhZgvgnhiQgGgOgPgFQgQgFgNAKQgIAGgEAKQgDAKADAKQAYBMBfBLQhYg9g9g7QgKgJgNgBQgOgBgLAIQgOAJgCASQgCARAMANQBtByBGAcIAJADAhWmoQhHgahJhIQgIgIgKAAQgLgBgJAGQgLAIgCANQgBAOAJAJQAwA0BaAvQAsAXAjANIhDgBQgSgBgJAQQgKAPAJAQQAJAPASABIC4ADIBvCfIAaDmIAtA0AE3DvIhFhQ");
	this.shape_88.setTransform(1172.4,445.7,0.619,0.619,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.1,0,-70.1).s().p("AlpKQQhxhIghiLQghiKA7hWQATgbAZgTIAWgNIBigrQBPgkBVAOIGLA+IBFBQIhFhQIgtg0IgajmIhvifIi4gDQgSgBgJgPQgJgQAKgPQAJgQASABIBDABQgjgNgsgXQhagvgwg0QgJgJABgOQACgNALgIQAJgGALABQAKAAAIAIQBJBIBHAaIAJADIgJgDQhGgchthyQgMgNACgRQACgSAOgJQALgIAOABQANABAKAJQA9A7BYA9QhfhLgYhMQgDgKADgKQAEgKAIgGQANgKAQAFQAPAFAGAOQAnBiBZAvQhFhYgDg6QAAgKAFgHQAGgHAJgCQAKgCAJAGQAIAGACAKQAFAbAYAkQAaAoAsAqIGiL9QAjA/glA+QglA9hHAAInCAAQgfAAgaARQgaARgNAcIhlDfQgygIg5glg");
	this.shape_89.setTransform(1172.4,445.7,0.619,0.619,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#ECA92F").ss(6,1,1).p("ACfAFIk9gI");
	this.shape_90.setTransform(1205.4,453.4,0.619,0.619,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#6F047E").ss(3.5,1,1).p("ADKpJIlzgJQh3gFhHBZQhGBZAUCDIBZJBIAKDkIAwAaQA/AdBNANQD1AsEjh8IgLpDg");
	this.shape_91.setTransform(1199.8,490,0.619,0.619,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-41.4,0,41.5,0).s().p("Ah6JHQhNgNg/gdIgwgaIgKjkIhZpBQgUiDBGhZQBHhZB3AFIFzAJIDJH9IALJDQjXBci/AAQhCAAhAgMg");
	this.shape_92.setTransform(1199.8,490,0.619,0.619,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEYDIIgvqEIiUgaIgtJVIkjAOIgcAOIBvE8IE6hTQA/gRAmg1QAmg1gFhBg");
	this.shape_93.setTransform(1183,440.8,0.619,0.619,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,47.1,0,-47.1).s().p("AkXCbIAcgOIEjgOIAtpVICUAaIAvKEQAFBBgmA1QgmA1g/ARIk6BTg");
	this.shape_94.setTransform(1183,440.8,0.619,0.619,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BE9075").ss(2.5,1,1).p("AinjPIgbE1ID6BqICLlzg");
	this.shape_95.setTransform(1203.8,453.7,0.619,0.619,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,20.9,0,-20.8).s().p("AjCBmIAbk1IFpAsIiKFzg");
	this.shape_96.setTransform(1203.8,453.7,0.619,0.619,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#6F047E").ss(3.5,1,1).p("AlUAaIAAhAIKphHIgODQQgaAGg8ADQh4AGisgPQitgOhLgfQgYgKgLgKg");
	this.shape_97.setTransform(1197.2,525.4,0.619,0.619,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-34.1,0,34.1,0).s().p("AgzBjQitgOhLgfQgYgKgLgKIgGgIIAAhAIKphHIgODQQgaAGg8ADQgiACgnAAQhgAAh7gLg");
	this.shape_98.setTransform(1197.2,525.4,0.619,0.619,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#ECA92F").ss(6,1,1).p("AEPh2QjGCAi/BEQg8AUg0ANIgoAI");
	this.shape_99.setTransform(1178.9,593.3,0.619,0.619,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#ECA92F").ss(6,1,1).p("AjvmuIAJAvQAOA8AVBAQBFDNB3CkQCCC0B1CN");
	this.shape_100.setTransform(1178.5,560.8,0.619,0.619,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#6F047E").ss(3.5,1,1).p("AksBvQh4hVgwiKQgxiQAuiXIA6i7IKbBKIgMDvIAhApQAoA2AkBDQBzDVAdEHQjHCBjABEQg8AUgzANIgoAIg");
	this.shape_101.setTransform(1192.7,563.8,0.619,0.619,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-49.4,0,49.5,0).s().p("AksBvQh4hVgwiKQgxiQAuiXIA6i7IKbBKIgMDvIAhApQAoA2AkBDQBzDVAdEHQjHCBjABDQg8AWgzAMIgoAIg");
	this.shape_102.setTransform(1192.7,563.8,0.619,0.619,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#838587").ss(4,1,1).p("AgZARIA0gh");
	this.shape_103.setTransform(1195.1,678.5,0.619,0.619,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_104.setTransform(1197.3,676.4,0.619,0.619,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_105.setTransform(1200,674.1,0.619,0.619,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_106.setTransform(1201.7,671.7,0.619,0.619,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_107.setTransform(1202,668.7,0.619,0.619,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_108.setTransform(1201.4,665.9,0.619,0.619,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhuQBDBFgIBsIBLBEQBPA/AOgWQAPgWhKg+IhNg6IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAeQgMAPgHANg");
	this.shape_109.setTransform(1198.8,670.1,0.619,0.619,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.5,1.4,-17.7).s().p("AAUCHIhLhEQAIhshDhFQAHgNAMgPQAWgeAUgJQATgJATAMQAJAGAFAIIgWDCIBNA6QBKA+gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_110.setTransform(1198.8,670.1,0.619,0.619,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgegJgkQgFgShZhHIhZhDIg2hSQgMgbgRgbQgjg1gZABQgpABgWgNg");
	this.shape_111.setTransform(1203.5,673.2,0.619,0.619,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAjA1QARAbAMAbIA2BSIBZBDQBZBHAFASQAJAkgcAeQgVAVglAAQgeAAgogOg");
	this.shape_112.setTransform(1203.5,673.2,0.619,0.619,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhTgshUhAQgSgNgEgWQgFgWALgTg");
	this.shape_113.setTransform(1203.8,679,0.619,0.619,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.8,1,-13.3).s().p("Ag+BVQhTgshUhAQgSgNgEgWQgFgWALgTIAagxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgGgRIANARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_114.setTransform(1203.8,679,0.619,0.619,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#60605B").ss(3,1,1).p("AiHCTIBGlEIA8AnQBJAmBFgFIidEbg");
	this.shape_115.setTransform(1206.1,657.1,0.619,0.619,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-13.6,0,13.7,0).s().p("AiHCTIBFlEIA8AnQBJAmBGgFIieEbg");
	this.shape_116.setTransform(1206.1,657.1,0.619,0.619,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#60605B").ss(3,1,1).p("AhrCpIAGlqIBFAWQBPAUA9gLIhsFkg");
	this.shape_117.setTransform(1181.5,668.2,0.619,0.619,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.8,0,10.8,0).s().p("AhrCoIAGlpIBFAWQBPAUA9gLIhsFkg");
	this.shape_118.setTransform(1181.5,668.2,0.619,0.619,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#ECA92F").ss(6,1,1).p("AiIA+QBOgGBpg6IBag7");
	this.shape_119.setTransform(1197.7,596.8,0.619,0.619,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#6F047E").ss(3.5,1,1).p("AjqlNIA2EDQBGEaBJB+QBNgGBqg7IBag7g");
	this.shape_120.setTransform(1203.8,580,0.619,0.619,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-23.5,0,23.6,0).s().p("Ai0hKIg2kDIHVIfIhaA7QhqA7hMAGQhKh9hFkbg");
	this.shape_121.setTransform(1203.8,580,0.619,0.619,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjNqIIBhGkIhhBqIgXPFIBrAZIFex9IhUpKg");
	this.shape_122.setTransform(1174,626.5,0.619,0.619,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,86.9,0,-86.8).s().p("AjkNLIAXvFIBhhqIhhmkIFejbIBUJKIleR9g");
	this.shape_123.setTransform(1174,626.5,0.619,0.619,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhqnAICKCYIioCFIiuMrIBzAfIH6uOIh+m/g");
	this.shape_124.setTransform(1195.3,626.1,0.619,0.619,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67.9,0,-67.9).s().p("Ak2KIICusrICoiFIiKiYIEjjmIB+G/In6OOg");
	this.shape_125.setTransform(1195.3,626.1,0.619,0.619,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_126.setTransform(1163.6,685.5,0.576,0.576,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_127.setTransform(1167.4,684.4,0.576,0.576,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_128.setTransform(1171.8,683.1,0.576,0.576,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_129.setTransform(1175,681.3,0.576,0.576,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#838587").ss(4,1,1).p("AgnAKIBPgT");
	this.shape_130.setTransform(1177.2,678.2,0.576,0.576,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_131.setTransform(1178.3,675.1,0.576,0.576,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBnA6BBB5ICMAnQCOAhgCgfQgDgeiFgiIiFgbIhwjfQgJgHgLgEQgWgIgLAQQgKARgDApQgCAVABASg");
	this.shape_132.setTransform(1170.7,677.5,0.576,0.576,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#606163","#322F2F"],[0,1],4.5,21.3,-6.4,-20.5).s().p("ABVCbIiMgnQhBh5hng6QgBgSACgVQADgpAKgRQALgQAWAIQALAEAJAHIBwDfICFAbQCFAiADAeQABAPghAAQgiAAhKgRg");
	this.shape_133.setTransform(1170.7,677.5,0.576,0.576,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBVAiCDgHQCUgOANg9QAEgWgOgYQgLgUgRgMQgWgQihgkIibgfIhuhGQgagbgegZQg8gygUAJQgiAOgKgNg");
	this.shape_134.setTransform(1172.2,683,0.576,0.576,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.4,-8.7,-26.5).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIADAQQAKANAigOQAUgJA8AyQAeAZAaAbIBuBGICbAfQChAkAWAQQARAMALAUQAOAYgEAWQgNA9iUAOIgrABQhmAAhHgcg");
	this.shape_135.setTransform(1172.2,683,0.576,0.576,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#60605B").ss(4,1,1).p("AliiGIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgugPgagLQgvgUAEgYg");
	this.shape_136.setTransform(1172.1,689.1,0.576,0.576,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.2,17,-5.7,-21.1).s().p("AgRCBQiSgPh0goQgugPgagLQgvgUAEgYIAoiKIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh3AAQgyAAg3gGg");
	this.shape_137.setTransform(1172.1,689.1,0.576,0.576,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#ECA92F").ss(6,1,1).p("ACWExQg5gKhAgpQh/hSglidQgmibBEhiQAVgeAcgVIAZgP");
	this.shape_138.setTransform(1202.6,482.6,0.576,0.576,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#BE9075").ss(2.5,1,1).p("AESEtIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQhLAphKgrInTkGIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIAtCKAFOlBIgGgJAi2FZIhLgq");
	this.shape_139.setTransform(1178.8,472.2,0.576,0.576,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,62.8,0,-62.8).s().p("AEdJfInTkGIhLgqIBLAqIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQglAUglAAQgmAAglgWgAE/G3IgtiKgAFOlBIgGgJg");
	this.shape_140.setTransform(1178.8,472.2,0.576,0.576,0,0,180);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#9C701F").ss(3,1,1).p("AFKjQQhKgTktBbQktBbgzA3QgEBAAUBMQAKAmALAZQAQgbA1gmQBqhKC5g7QDchDCMAKQATACAMgQQAMgPgHgSQgXg7grg8g");
	this.shape_141.setTransform(1216.7,422.5,0.576,0.576,0,0,180);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#ECA92F").s().p("Al9CWQgUhMAEhAQAzg3EthbQEthbBKATQArA8AXA7QAHASgMAPQgMAQgTgCQiMgKjcBDQi5A7hqBKQg1AmgQAbQgLgZgKgmg");
	this.shape_142.setTransform(1216.7,422.5,0.576,0.576,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#BE9075").ss(3,1,1).p("ABIBMIg1AIQgfAFgbgUQgagUgFggQgFggATgbQATgbAhgFIBEgK");
	this.shape_143.setTransform(1213.9,436,0.576,0.576,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#352B2C").ss(3,1,1).p("AlYiNQgVBeAgB1QAcBsBABlQA/BjBKA4QBOA8A/gKQgpi3B1hYIgkAGQggAFgbgUQgZgUgFghQgFghASgbQATgaAhgFIBFgLIAVB/IAcgrIgrkYIgngfQgZgTAHgeQAGgfAegHIDIgmQAtgIABgpQAAgmgnggQhIg7hPgDQhigFhBBXQhHABhPAgQidBCglCig");
	this.shape_144.setTransform(1217.2,428.2,0.576,0.576,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4B3A3B").s().p("AhoGyQhKg4g/hjQhAhlgchsQggh1AVheQAliiCdhCQBPggBHgBQBBhXBiAFQBPADBIA7QAnAgAAAmQgBApgtAIIjIAmQgeAHgGAfQgHAeAZATIAnAfIArEYIgcArIgVh/IhFALQghAFgTAaQgSAbAFAhQAFAhAZAUQAbAUAggFIAkgGQh1BYApC3IgSACQg4AAhDg0g");
	this.shape_145.setTransform(1217.2,428.2,0.576,0.576,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5F4137").s().p("AANANQgcgEgVgNIBEgKIAFAdIgEAAQgJAAgLgCg");
	this.shape_146.setTransform(1193.6,445.5,0.576,0.576,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgJAUQgGgHgBgKQgCgKAEgHQAEgJAHgBQAGgBAGAGQAGAHACAKQACAKgEAIQgEAIgHABIgCAAQgFAAgGgFg");
	this.shape_147.setTransform(1197.8,431.9,0.576,0.576,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AgZAnQgQgMgDgUQgDgTALgQQALgQATgDQARgDAPAMQAQAMADAUQADATgLAQQgLAQgTADIgGABQgOAAgMgKg");
	this.shape_148.setTransform(1198.7,432.7,0.576,0.576,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#5F4137").s().p("AgyAwIgJgCIgcAAIgBgDIgDgKQgCgJAAgIIAAgJQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIADgDIAPgLIASgLIAUgJIApgLIAUgDQANgBAXAAIADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAQATIAIANIgKALIgKAJIgGAHQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAgBIgDAAQgTAAgKABIgQACQgGABgKADIgOAEIgNAGIgLAHIgJAHIgCACQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape_149.setTransform(1199.4,426.4,0.576,0.576,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#BE9075").ss(2,1,1).p("AAOGtIDEgeQAlgFAXgfQAXgfgFgmIgajRIBCgJQAbgEALgaQAKgbgRgVIh7iUIhtjoIj0gyQh5AShJBlQhIBkASB8IApEIQATB8BjBKQBjBLB5gTg");
	this.shape_150.setTransform(1206.8,432.3,0.576,0.576,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-6,-44.1,7.1,42.1).s().p("AjOF1QhjhKgTh8IgpkIQgSh8BIhkQBJhlB5gSID0AyIBtDoIB7CUQARAVgKAbQgLAagbAEIhCAJIAaDRQAFAmgXAfQgXAfglAFIjEAeQgYAEgXAAQheAAhPg8g");
	this.shape_151.setTransform(1206.8,432.3,0.576,0.576,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#ECA92F").ss(6,1,1).p("AC0AFIlngJ");
	this.shape_152.setTransform(1212.1,462.7,0.576,0.576,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#6F047E").ss(3.5,1,1).p("AC5pcIkMgLQiGgFhhBbQhiBbgFCGIgTJNIglDnIA1AdQBHAhBbASQEjA6F8htIA9npg");
	this.shape_153.setTransform(1212.4,497.8,0.576,0.576,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,61.6,0,-61.5).s().p("AkCJUQhbgShHghIg1gdIAmjnIASpNQAFiGBhhbQBihbCGAFIEMALIEhKUIg9HpQj3BHjRAAQhxAAhmgUg");
	this.shape_154.setTransform(1212.4,497.8,0.576,0.576,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlfgMIEsCLIFno/ICHBoIkkKeQgeBEhCAhQhBAhhIgQIlohSIA3l2");
	this.shape_155.setTransform(1179,469.3,0.576,0.576,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,44.9,0,-44.8).s().p("AhSG8IlohSIA3l2IAkAAIEsCLIFno/ICHBoIkkKeQgeBEhCAhQgsAWguAAQgXAAgYgFg");
	this.shape_156.setTransform(1179,469.3,0.576,0.576,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BE9075").ss(2.5,1,1).p("Ai9jrIgeFfIEaB4ICdmkg");
	this.shape_157.setTransform(1210.5,463,0.576,0.576,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,23.6,0,-23.5).s().p("AjbBzIAeleIGZAzIidGkg");
	this.shape_158.setTransform(1210.5,463,0.576,0.576,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#ECA92F").ss(6,1,1).p("Ak3DlQAKACBGgbQBVgiBWgxQECiTByjL");
	this.shape_159.setTransform(1185.2,596.6,0.576,0.576,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#6F047E").ss(3.5,1,1).p("AmDgKIAAhJIMHAAIgUCcQgdAGhEAEQiJAGjDgQQjDgRhVgjQgbgLgMgKg");
	this.shape_160.setTransform(1215.2,532.9,0.576,0.576,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-38.8,0,38.9,0).s().p("Ag9BJQjDgRhVgjQgbgLgMgKIgHgKIAAhJIMHAAIgUCcQgdAGhEAEQgnABgrAAQhuAAiMgLg");
	this.shape_161.setTransform(1215.2,532.9,0.576,0.576,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#ECA92F").ss(6,1,1).p("AkPnnIALA1QAPBEAZBJQBNDoCHC6QCSDLCFCg");
	this.shape_162.setTransform(1195.6,567.8,0.576,0.576,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#6F047E").ss(3.5,1,1).p("ABul1IA4AsQADACAEADIAGAGIAPkPIrzhTIhCDUQg2CuAsCxQAtCvCCCAQHkHdAMACQAKACBGgbQBVgiBWgxQEDiUByjLQiGjWjcjQQg+g7g/gz");
	this.shape_163.setTransform(1205.2,571,0.576,0.576,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,67.4,0,-67.3).s().p("AAiKhQgMgCnkndQiCiAgtivQgsixA2iuIBCjUILzBTIgPEPQA/AzA+A7QDcDQCGDWQhyDLkDCUQhWAxhVAiQhBAZgNAAIgCAAgACmlJIAHAFIAGAGIgGgGIgHgFIg4gsg");
	this.shape_164.setTransform(1205.2,571,0.576,0.576,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#60605B").ss(3,1,1).p("AhcBwIAljtIAPATQAWAVAgAFQAiAFAagEQANgBAGgDIhPDRg");
	this.shape_165.setTransform(1181.4,667.7,1,1,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-9.3,0,9.3,0).s().p("AhcBwIAmjuIAOAUQAWAVAgAEQAiAGAagEQANgBAGgDIhPDRg");
	this.shape_166.setTransform(1181.4,667.7,1,1,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al8nuIFrEvIhaBkIiWO4IC7AZIG0yUQAXg9gMhAQgLg/grgxIk+lqg");
	this.shape_167.setTransform(1175.8,629.3,0.576,0.576,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,88.6,0,-88.6).s().p("AkBNdICWu4IBahkIlrkwIGBmGIE+FqQArAwALBAQAMBAgXA8Im0SVg");
	this.shape_168.setTransform(1175.8,629.3,0.576,0.576,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_169.setTransform(1189.9,673.7,0.576,0.576,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_170.setTransform(1193.6,672.6,0.576,0.576,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_171.setTransform(1198,671.3,0.576,0.576,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_172.setTransform(1201.3,669.4,0.576,0.576,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#838587").ss(4,1,1).p("AgmAKIBOgT");
	this.shape_173.setTransform(1203.4,666.4,0.576,0.576,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_174.setTransform(1204.6,663.3,0.576,0.576,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBmA5BBB6ICNAnQCNAhgBgfQgDgeiGgiIiEgbIhwjfQgJgHgLgEQgXgIgKAQQgLARgDApQgBAVABASg");
	this.shape_175.setTransform(1197,665.7,0.576,0.576,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#606163","#322F2F"],[0,1],4.4,21.3,-6.4,-20.5).s().p("ABVCbIiNgnQhBh6hmg5IAAgnQADgpALgRQAKgQAXAIQALAEAJAHIBwDfICEAbQCGAiADAeQAAAPggAAQgjAAhJgRg");
	this.shape_176.setTransform(1197,665.7,0.576,0.576,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBWAiCDgHQCUgOAMg9QAFgWgOgYQgMgVgRgLQgWgQihgkIibgfIhthGQgagbgegZQg8gygVAJQghAOgKgNg");
	this.shape_177.setTransform(1198.5,671.2,0.576,0.576,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.3,-8.7,-26.6).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIAEAQQAKANAhgOQAVgJA8AyQAeAZAaAbIBtBGICbAfQChAkAWAQQARALAMAVQAOAYgFAWQgMA9iUAOIgsABQhmAAhHgcg");
	this.shape_178.setTransform(1198.5,671.2,0.576,0.576,0,0,180);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#60605B").ss(4,1,1).p("AljiGIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgvgPgZgLQgvgUAEgYg");
	this.shape_179.setTransform(1198.3,677.3,0.576,0.576,0,0,180);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.1,17,-5.8,-21.1).s().p("AgRCBQiSgPh0goQgvgPgZgLQgvgUAEgYIAniKIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh2AAQgyAAg4gGg");
	this.shape_180.setTransform(1198.3,677.3,0.576,0.576,0,0,180);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#60605B").ss(3,1,1).p("AjACxICCmFIARASQAXAVAZAQQBXA0BngNIj/FLg");
	this.shape_181.setTransform(1206.9,655.1,0.576,0.576,0,0,180);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.2,0,19.3,0).s().p("AjACxICDmFIAQASQAXAVAZAQQBXA0BmgNIj9FLg");
	this.shape_182.setTransform(1206.9,655.1,0.576,0.576,0,0,180);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhXmZIBtCaIiSBuIkEMLICCAkIJ/tAIiPn7g");
	this.shape_183.setTransform(1195.8,628.8,0.576,0.576,0,0,180);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67,0,-66.9).s().p("AmAJ6IEEsLICRhuIhsiaIFJkEICPH7Ip/M/g");
	this.shape_184.setTransform(1195.8,628.8,0.576,0.576,0,0,180);

	this.instance_5 = new lib.player1ready();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1185.9,577.3,1,1,0,0,0,87.8,119.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#ECA92F").ss(5,1,1).p("AkLgnQAegoBTgJQBWgKBsAbQBsAbBBAuQBAAvgKAr");
	this.shape_185.setTransform(1150.8,605,0.517,0.517);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#ECA92F").ss(5,1,1).p("AkKBcQgKgrBAgvQBBguBsgbQBsgbBWAKQBTAJAeAo");
	this.shape_186.setTransform(1217.1,605,0.517,0.517);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#9C701F").ss(2.5,1,1).p("AHBAkQgFgzgfgqQgfgrgwgUQiYhBi4AAIgBAAQiwAAiSA7QgwATgfApQggApgHAyQgMBTAEBOQAAAAAWgeQAegjArgcQCJhdDZAAQDXAACNBbQBHAuAbAtQAChjgFgvg");
	this.shape_187.setTransform(1184.1,475.8,0.517,0.517);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#ECA92F").s().p("Am7AZQAHgyAggpQAfgpAwgTQCSg7CwAAIABAAQC4AACYBBQAwAUAfArQAfAqAFAzQAFAvgCBjQgbgthHguQiNhbjXAAQjZAAiJBdQgrAcgeAjIgWAeQgEhOAMhTg");
	this.shape_188.setTransform(1184.1,475.8,0.517,0.517);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#352B2C").ss(2.5,1,1).p("ACvmZQhtgNhvAsQgjAOgfASIgYAPQgLgIgQgHQgggOgXAEQhvAWhBC4QghBcgLBWIABgBQgBAQAAARIAADcIAnAAIAACEIAdgtIAAk2IAUgaQAbgfAkgYQB1hTCpgBQCqABB1BTQA6AoAYApIAAE2IAeAtIAAiEIAnAAIAAjHQAFiQg7iSQhLi4iGgQg");
	this.shape_189.setTransform(1184,479,0.517,0.517);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#4B3A3B").s().p("AFxFvIAAk2QgYgpg6goQh1hTiqgBQipABh1BTQgkAYgbAfIgUAaIAAE2IgdAtIAAiEIgnAAIAAjcQAAgRABgQIgBABQALhWAhhcQBBi4BvgWQAXgEAgAOQAQAHALAIIAYgPQAfgSAjgOQBvgsBtANQCGAQBLC4QA7CSgFCQIAADHIgnAAIAACEg");
	this.shape_190.setTransform(1184,479,0.517,0.517);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4B3A3B").s().p("AhUAAIgkgXIB4ASIB5gGQgOAKgWAHQgtASgoAAQgoAAgsgYg");
	this.shape_191.setTransform(1184,511.3,0.517,0.517,0,180,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAIgJAIgBQAKABAHAJQAGAKABANQgBAOgGAKQgHAJgKABQgIgBgIgJg");
	this.shape_192.setTransform(1196.3,496.2,0.517,0.517);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgrAtQgSgTAAgaQAAgaASgTQASgSAZAAQAZAAATASQARATABAaQgBAagRATQgTATgZAAQgZAAgSgTg");
	this.shape_193.setTransform(1195.1,496.9,0.517,0.517);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAHgJAJgBQAKABAGAJQAIAKAAANQAAAOgIAKQgGAJgKABQgJgBgHgJg");
	this.shape_194.setTransform(1174.1,496.2,0.517,0.517);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgqAtQgSgTAAgaQAAgaASgTQARgSAZAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgZAAgRgTg");
	this.shape_195.setTransform(1172.9,496.9,0.517,0.517);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A8796B").s().p("AgECdQgHgSgEgVQgGgagDgdIgDg/IABgfIACgfQADgaAGgdQAGgbAFgMIAEgPIAFAPQAHAPAEAYQAGAZADAeIADA+IgDA/QgDAdgGAaQgEAVgHASIgFAPg");
	this.shape_196.setTransform(1184,498.7,0.517,0.517);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5F4137").s().p("ABUAnIgEgCQgXgKgOgEIgWgGIgWgFIgWgDQgPAAgHABIgKABQgFAAgEABQgMACgFACIgEACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgJgDIgegFIAFgNQAFgLAEgFIAGgJQABgBAEgBIAFgCIAXgGIAagDIAbAAIAbADIAbAFQANADAMAFQATAGAYAKIAFACQADABABABIAFAIIAIAPIAEALIABAEIgoAHIgBAAIgDgCg");
	this.shape_197.setTransform(1195.2,489.4,0.517,0.517);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#5F4137").s().p("AhXApIgogHIABgEIAEgLIAIgPIAFgIIAEgCIAFgCQAYgKATgGQAMgFANgDQAJgCASgDIAbgDIAbAAIAaADIAXAGIAFACQAEABABABIAGAJQAEAFAFALIAFANIgmAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEgCIgQgEQgFgBgFAAIgKgBIgVgBIgXADIgWAFIgWAGIglAOIgEACIgDACIgBAAg");
	this.shape_198.setTransform(1172.7,489.4,0.517,0.517);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#BE9075").ss(2.5,1,1).p("AAAJAQilAAh0h1Qh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAg");
	this.shape_199.setTransform(1184,494.4,0.517,0.517);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,57.6,0,-57.5).s().p("AkZHLQh1h1AAilIAAlhQAAilB1h1QB0h1ClAAQClAAB1B1QB1B1AAClIAAFhQAAClh1B1Qh1B1ilAAQilAAh0h1g");
	this.shape_200.setTransform(1184,494.4,0.517,0.517);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlghnIhcAAQgsAAgeAeQgfAfAAAqQAAArAfAfQAeAeAsAAIBcAAQArAAAegeQAfgfAAgrQAAgqgfgfQgegegrAAgAG9hnIhcAAQgrAAgeAeQgfAfAAAqQAAArAfAfQAeAeArAAIBcAAQArAAAfgeQAfgfAAgrQAAgqgfgfQgfgegrAAg");
	this.shape_201.setTransform(1184,498.8,0.517,0.517);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,10.4,0,-10.4).s().p("AFhBoQgrAAgegeQgfgfAAgrQAAgqAfgfQAegeArAAIBcAAQArAAAfAeQAfAfAAAqQAAArgfAfQgfAegrAAgAm9BoQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAIBdAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAg");
	this.shape_202.setTransform(1184,498.8,0.517,0.517);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgGDYQgbAAgegGQghgFgZgLQgegNgTgTQgYgaABgjIAAgdQABgPAKgJQAJgKAOAAIBpAEQgLgKAAgQIABgtQABgKADgFIhggCQgOgBgJgKQgKgKABgOIAAgeQABgcAWgXQARgTAdgNQAbgLAggGQAfgFAcAAIAJAAQAwABAiALQAgAKASAMQAMAHAKAIQAMALAIAOQAHAOADAQQACAOAAAWQAAAVgDAOQgDAWgOAPIgEAEQADACAEAHQALAPACAXQABANgBAVQAAATgDAPQgDAPgEANQgHAOgJAJQgHAIgMAHQgZARglAKQgfAJgtAAgAigBmQAAAVAPAPQAOAPAXAKQAUAJAeAGQAfAFAWAAIAMAAQAoAAAcgIQAegHAVgPQAKgGAEgFQAFgFAEgIQADgJACgLQABgHABgVIAAggQgBgNgGgIQgGgKgNgHQgMgGgZgHQAUgGAQgGQANgGAHgHQAHgIACgLQACgMAAgTQABgQgCgNQgCgKgFgKQgFgIgHgHIgSgMQgOgJgdgKQgdgJgrgBIgIAAQgcAAgZAEQgcAGgYAJQgWAKgNANQgNAOAAAQIgBAeIBqACIABgcQAAgJAMgIQAMgIAYAAIAEAAQAYACANAGQAOAIAAALIgBAuQgBAVgSAFQgPAEggAAIgSAAIgBAsQAVAAAUACQAQACAJAFQAJADAEAHQADAIAAAKIgCAzQAAANgOAIQgNAGgWABIgCAAQgYgBgOgIQgOgIAAgNIABgbIhqgCgAgTBMIgBATQAJACAKABIABAAIAQgCIABgqIgLgCIgkgCQAMALgBAPgAgOhgIgBATQgBAKgDAFIAHAAQAXAAAJgBIABggQgHgBgLgBIgDAAIgOABg");
	this.shape_203.setTransform(1185.9,557.1,0.517,0.517);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#ECA92F").s().p("AgFDHQgeAAgZgFQgggFgXgLQgagLgRgRQgTgUABgcIAAgeQAAgHAGgFQAFgFAGAAIBrAEQAGAAAFAEQAFAGAAAHIgBAbQAAABAGAEQAJAFAUABIACAAQASABAJgGQAGgDAAgCIABg0QAAgIgBgBIgFgDQgGgDgOgCQgRgCgXAAQgHAAgFgFQgEgFAAgIIABgsQAAgGAFgFQAFgFAHAAIASAAQAdAAANgDIAFgDQACgCAAgFIABguIgFgEQgJgFgVAAIgDAAQgTgBgHAFIgFAEIgBAcQAAAIgFAEQgFAFgHgBIhqgDQgHAAgFgEQgFgFAAgIIABgdQABgWARgTQAPgQAagMQAZgJAegGQAagFAeAAIAJAAQAvACAdAJQAeAJARALQAMAHAIAHQAJAIAHAMQAFALADAOQADAQgBARQgBAXgBAJQgDASgKAKQgIAJgNAGQAPAIAHALQAJAOABAQIAAAhQAAATgDANQgBAKgFAMQgFAMgHAHQgGAGgKAIQgYAPghAJQgfAIgpAAg");
	this.shape_204.setTransform(1185.9,557.1,0.517,0.517);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#ECA92F").ss(5,1,1).p("AANj9QA2DbhiEg");
	this.shape_205.setTransform(1156.7,525,0.517,0.517);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#ECA92F").ss(5,1,1).p("AAvDQQh0jZAdjG");
	this.shape_206.setTransform(1213.7,521.7,0.517,0.517);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#ECA92F").ss(5,1,1).p("Akyi9QAJBdB3CPQB2CPA8gBQBTgRB2iPQB5iQgRhK");
	this.shape_207.setTransform(1184,525.1,0.517,0.517);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#D9A493").ss(3.4,1,1).p("ABzENIhzBPIhyhPQg2gmgZg9Qgag9ANhBIAXh8IAAkLIFvAAIAAELIAXB8QANBBgaA9QgZA9g2Amg");
	this.shape_208.setTransform(1183.9,516.9,0.517,0.517);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,68.7,0,23.6).s().p("AhyENQg2gmgZg9Qgag9ANhCIAXh7IAAkLIFvAAIAAELIAXB7QANBCgaA9QgZA9g2AmIhzBPg");
	this.shape_209.setTransform(1183.9,516.9,0.517,0.517);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#6F047E").ss(2.5,1,1).p("AH5pvQAKgciGghQihgmj2AAQjmAAimA6Qg0ASgnAWIgdASQA2DchjEhIAQB5QALCHgbA/QgIAUAHCJQAEBFAFBBQCGB3C2A1QCiAvCsgLQCggLB9g5QB8g5ArhSQAGhBADhFQAHiKgIgUQgbg/Aqi9IAviyQh1jZAdjGg");
	this.shape_210.setTransform(1185.4,543.2,0.517,0.517);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,72.3,0,-72.3).s().p("AkHKtQi2g1iGh3IgJiGQgHiJAIgUQAbg/gLiHIgQh5QBjkhg2jcIAdgSQAngWA0gSQCmg6DmAAQD2AAChAmQCGAhgKAcQgdDGB1DZIgvCyQgqC9AbA/QAIAUgHCKQgDBFgGBBQgrBSh8A5Qh9A5igALQgiACgiAAQiIAAiCgmg");
	this.shape_211.setTransform(1185.4,543.2,0.517,0.517);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#ECA92F").ss(5,1,1).p("ADXlbQiYBgh9DiQhjCyg1DD");
	this.shape_212.setTransform(1148,584.9,0.517,0.517);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#ECA92F").ss(5,1,1).p("ADWFcQg0jDhkiyQh8jiiXhg");
	this.shape_213.setTransform(1219.9,584.9,0.517,0.517);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#838587").ss(2,1,1).p("AhqgDIDUAH");
	this.shape_214.setTransform(1242.6,673.4,0.517,0.517);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#838587").ss(2,1,1).p("AhoAEIDRgG");
	this.shape_215.setTransform(1241.6,676.8,0.517,0.517);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#838587").ss(2,1,1).p("AhhAMIDDgX");
	this.shape_216.setTransform(1243.4,679.2,0.517,0.517);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#838587").ss(2,1,1).p("AhUANICpgZ");
	this.shape_217.setTransform(1245.4,681.4,0.517,0.517);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#838587").ss(2,1,1).p("AhdARIC6gh");
	this.shape_218.setTransform(1247.9,684.2,0.517,0.517);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#838587").ss(2,1,1).p("AhOATICdgl");
	this.shape_219.setTransform(1249.6,686.2,0.517,0.517);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#201F1F").ss(2,1,1).p("Ak+hoIgKBaQgDBgAhApQBGAKA6AkQAeARAPAQIB6AHQCKAGBagMQBcgPALg4QADgRgFgTIgGgQQh8hdhAgxQgngggWgnIgPgiIggBgIBYBPQAQAOgQATQgPASgfAEQgaADgQgMQg+gzglgdQhGg3gIgFQgEgCgfg+Qgeg6gSgBQgkgDgZAOQgrAZAWBFg");
	this.shape_220.setTransform(1245.2,682.3,0.517,0.517);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#606163","#322F2F"],[0,1],-35.9,-5.2,34,9.6).s().p("AgDDRIh6gHQgPgQgegRQg6gkhGgKQghgpADhgIAKhaQgWhFArgZQAZgOAkADQASABAeA6QAfA+AEACQAIAFBGA3IBjBQQAQAMAagDQAfgEAPgSQAQgTgQgOIhYhPIAghgIAPAiQAWAnAnAgQBAAxB8BdIAGAQQAFATgDARQgLA4hcAPQg9AIhTAAQgoAAgsgCg");
	this.shape_221.setTransform(1245.2,682.3,0.517,0.517);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#201F1F").ss(2,1,1).p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_222.setTransform(1243,677.8,0.517,0.517);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#322F2F","#606163"],[0,1],-23,-6,25.7,4.3).s().p("Ai+AcQgTgYgKgfQgTg+AsgiQAwgkBvgDQBjgDAfARQAUAMgWBNQgMAmgPAjICfCCIiTATg");
	this.shape_223.setTransform(1243,677.8,0.517,0.517);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#60605B").ss(2,1,1).p("Ak3hOIgDAOQgEAWAPASQAPASAcAGQAmAIAYASQBQA6C5gFQAigBAzgGQA8gIAvgiQAvghAFgnIAFghg");
	this.shape_224.setTransform(1245.8,692.8,0.517,0.517);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-30.7,-9.2,28.9,3.4).s().p("AjGAaQgYgSgmgIQgcgGgPgSQgPgSAEgWIADgOIJzADIgFAhQgFAngvAhQgvAig8AIQgzAGgiABIgdAAQijAAhJg1g");
	this.shape_225.setTransform(1245.8,692.8,0.517,0.517);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#838587").ss(2.5,1,1).p("ABqgDIjUAH");
	this.shape_226.setTransform(1127.6,673.4,0.517,0.517);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#838587").ss(2.5,1,1).p("ABpAEIjRgG");
	this.shape_227.setTransform(1128.5,676.8,0.517,0.517);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#838587").ss(2.5,1,1).p("ABiAMIjDgX");
	this.shape_228.setTransform(1126.7,679.2,0.517,0.517);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#838587").ss(2.5,1,1).p("ABVANIipgZ");
	this.shape_229.setTransform(1124.7,681.4,0.517,0.517);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#838587").ss(2.5,1,1).p("ABeARIi7gh");
	this.shape_230.setTransform(1122.2,684.2,0.517,0.517);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#838587").ss(2.5,1,1).p("ABPATIidgl");
	this.shape_231.setTransform(1120.5,686.2,0.517,0.517);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#201F1F").ss(2,1,1).p("AFAhoIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQiLAGhZgMQhdgPgLg4QgDgRAFgTIAGgQIBGg1QBOg6AogfQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFg");
	this.shape_232.setTransform(1125,682.3,0.517,0.517);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#606163","#322F2F"],[0,1],36,-5.2,-33.9,9.6).s().p("AjfDLQhdgPgLg4QgDgRAFgTIAGgQIBGg1IB2hZQAnggAXgnQALgUADgOIAhBgIhZBPQgPAOAPATQAQASAfAEQAaADAPgMQCpiHAIgFQAEgCAfg+QAeg6ASgBQAkgDAZAOQAsAZgWBFIAJBaQADBgghApQhFAKg7AkIgsAhQg0AFhGACQgtACgoAAQhTAAg8gIg");
	this.shape_233.setTransform(1125,682.3,0.517,0.517);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#201F1F").ss(2.5,1,1).p("AC/AcQATgYAJgfQAUg+gsgiQgwgkhwgDQhigDgfARQgVAMAXBNQAMAmAPAjIifCCICTATg");
	this.shape_234.setTransform(1127.2,677.8,0.517,0.517);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#322F2F","#606163"],[0,1],23,-6,-25.7,4.3).s().p("AjgCQICfiCQgPgjgMgmQgXhNAVgMQAfgRBiADQBwADAwAkQAsAigUA+QgJAfgTAYIkMCHg");
	this.shape_235.setTransform(1127.2,677.8,0.517,0.517);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#60605B").ss(2.5,1,1).p("AE4hOIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhQA6i5gFQgkgBgygGQg7gIgvgiQgwghgFgnIgFghg");
	this.shape_236.setTransform(1124.3,692.8,0.517,0.517);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],30.8,-9.2,-28.8,3.4).s().p("AhBBPQgkgBgygGQg7gIgvgiQgwghgFgnIgFghIJzgDIADAOQAEAWgPASQgPASgbAGQgmAIgYASQhKA1ijAAIgcAAg");
	this.shape_237.setTransform(1124.3,692.8,0.517,0.517);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#6F047E").ss(2.5,1,1).p("AHimcQhtAwl1AjQl0gjhsgwQiYBfh9DjQhkCxg0DDIABAAQAegoBTgJQBWgKBtAbQBsAbBBAvQBAAvgKArID3kWQAYgbAigPQAhgPAjAAQAlAAAhAPQAhAPAYAbID4EWQgKgrBAgvQBBgvBsgbQBtgbBWAKQBTAJAeAoIABAAQg1jDhjixQh9jjiYhfg");
	this.shape_238.setTransform(1183.9,588.3,0.517,0.517);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,41.4,0,-41.3).s().p("AB/CIQgYgbgigPQgggPglAAQgjAAghAPQgiAPgYAbIj3EWQAKgshAguQhBgvhsgcQhtgbhWALQhTAJgeAnIgCABQA1jDBjixQB+jiCXhgQBsAvF1AkQF1gkBtgvQCYBgB9DiQBjCxA1DDIgBgBQgfgnhSgJQhWgLhtAbQhsAchCAvQg/AuAKAsg");
	this.shape_239.setTransform(1183.9,588.3,0.517,0.517);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#60605B").ss(2.5,1,1).p("AC5CWIgilZQhhA5g9AZQhRAhhgAKIByEKg");
	this.shape_240.setTransform(1234,670.7,0.517,0.517);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],18.6,0.6,-18.5,0.6).s().p("Ai4hFQBggLBRghQA9gZBhg5IAiFZIj/Aug");
	this.shape_241.setTransform(1234,670.7,0.517,0.517);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#60605B").ss(2.5,1,1).p("AjDCzIAwmTQBvBCAzAYQBZAoBdAKIiIE1g");
	this.shape_242.setTransform(1134.4,669.3,0.517,0.517);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.6,0.1,19.7,0.1).s().p("AjDCzIAwmTQBvBCAzAYQBZAoBcAKIiIE1g");
	this.shape_243.setTransform(1134.4,669.3,0.517,0.517);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aj7vQIF3GxQARAUA1BpQA2BpAFAZICrTxIj1AAIlGvrIAAisIkUoHg");
	this.shape_244.setTransform(1220.9,628,0.517,0.517);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,-97.7,0,97.7).s().p("ACzPRIlGvrIAAisIkUoHICrkDIF4GxQAQAUA2BpQA2BpAFAZICrTxg");
	this.shape_245.setTransform(1220.9,628,0.517,0.517);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#6F047E").ss(3.4,1,1).p("AEKhBQALAqhHAxQhGAxhvAbQhtAchWgLQhVgKgLgrQgKgqBGgwQBHgyBugbQBugcBVALQBWAKAKArg");
	this.shape_246.setTransform(1216.9,606.3,0.517,0.517);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-26.8,0,26.8,0).s().p("AiqB3QhVgKgKgrQgLgqBGgwQBIgyBtgbQBugcBVALQBWAKAKArQALAqhHAxQhGAxhvAbQhOAUhDAAQgaAAgYgDg");
	this.shape_247.setTransform(1216.9,606.3,0.517,0.517);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#BE9075").ss(2.5,1,1).p("AD8vQIl2GxQgRAUg2BpQg2BpgFAZIirTxID1AAIFGvrIAAisIEUoHg");
	this.shape_248.setTransform(1146.8,628,0.517,0.517);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,97.7,0,-97.7).s().p("AmnPRICrzxQAFgZA2hpQA2hpARgUIF2mxICsEDIkUIHIAACsIlGPrg");
	this.shape_249.setTransform(1146.8,628,0.517,0.517);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#6F047E").ss(2.5,1,1).p("AkKhBQgKAqBGAxQBIAxBuAbQBtAcBVgLQBVgKAMgrQAKgqhGgwQhHgyhvgbQhtgchVALQhWAKgLArg");
	this.shape_250.setTransform(1150.8,606.3,0.517,0.517);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-26.8,0,26.8,0).s().p("AgZBmQhtgbhIgxQhGgxALgqQAKgrBVgKQBWgLBtAcQBvAbBGAyQBHAwgKAqQgMArhVAKQgXADgaAAQhDAAhPgUg");
	this.shape_251.setTransform(1150.8,606.3,0.517,0.517);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#BE9075").ss(2.5,1,1).p("ApoLkQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgQAHgQgJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hn");
	this.shape_252.setTransform(1132.2,556,0.517,0.517);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-35.4,-23.7,23.2,9.8).s().p("AohOJIgJgFQgKgGgFgMQgEgMAEgLIAxiTIhIB+QgHAMgOAEQgOAEgMgHQgNgHgEgOQgDgOAHgNIAkg/IA7hnIg7BnQgIAOgQgDQgRgEgCgRQgBgJAGgIICkjBIBCp5IKcpqQA+g5BOgaIEUhfIi/IHIoPEVIjzJ4ICNDgQAJANgEAPQgDAPgNAJQgNAIgOgDQgPgCgJgMIhLhkQgLgPgTAEQgSAEgEASIgmC1QgCAKgIAGQgIAHgKgBQgLAAgIgIQgIgIAAgLIgBjhIgyDqQgEASgQAHQgHADgHAAQgJAAgJgFg");
	this.shape_253.setTransform(1132.2,556,0.517,0.517);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#BE9075").ss(2.5,1,1).p("AJrLmQAIALAPgCQAQgEACgRQABgJgGgIIikjBIhCp5IqcpqQg+g5hNgaIkVhfIC/IHIIQEVIDyJ4IiNDgQgIANADAPQADAPANAJQANAIAOgDQAPgCAJgMIBMhkQALgPASAEQASAEAEASIAmC1QACAKAIAGQAIAHAKgBQAMAAAHgIQAIgIAAgLIABjhIAzDqQAEASAQAHQAQAHAPgJIAJgFQALgGAEgMQAEgMgEgLIgxiTIBIB+QAHAMAOAEQAOAEANgHQAMgHAEgOQAEgOgHgNgAJmLeIADAFQABACABABIgFgIIg4hh");
	this.shape_254.setTransform(1239.6,556,0.517,0.517);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-23.1,9.8,35.5,-23.7).s().p("AIDOLQgQgHgEgSIgzjqIgBDhQAAALgIAIQgHAIgMAAQgKABgIgHQgIgGgCgKIgmi1QgEgSgSgEQgSgEgLAPIhMBkQgJAMgPACQgOADgNgIQgNgJgDgPQgDgPAIgNICNjgIjyp4IoQkVIi/oHIEVBfQBNAaA+A5IKcJqIBCJ5ICkDBQAGAIgBAJQgCARgQAEQgPACgIgLIAjA9QAHANgEAOQgEAOgMAHQgNAHgOgEQgOgEgHgMIhIh+IAxCTQAEALgEAMQgEAMgLAGIgJAFQgJAFgJAAQgGAAgHgDgAJrLmIgFgIIg4hhIA4BhIADAFIACADgAJpLjIgDgFIAFAIIgCgDgAJmLeg");
	this.shape_255.setTransform(1239.6,556,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3,p:{y:540.2}}]},3).to({state:[{t:this.instance_3,p:{y:530.9}}]},2).to({state:[{t:this.shape_63,p:{y:404.4}},{t:this.shape_62,p:{y:404.4}},{t:this.instance_4},{t:this.shape_61,p:{y:597.1}},{t:this.shape_60,p:{y:597.1}},{t:this.shape_59,p:{y:598.4}},{t:this.shape_58,p:{y:598.4}},{t:this.shape_57,p:{y:544.2}},{t:this.shape_56,p:{y:544.2}},{t:this.shape_55,p:{y:567.1}},{t:this.shape_54,p:{y:533.2}},{t:this.shape_53,p:{y:533.2}},{t:this.shape_52,p:{y:428.5}},{t:this.shape_51,p:{y:428.5}},{t:this.shape_50,p:{y:358.2}},{t:this.shape_49,p:{y:533.1}},{t:this.shape_48,p:{y:495.3}},{t:this.shape_47,p:{y:495.3}},{t:this.shape_46,p:{y:461.8}},{t:this.shape_45,p:{y:461.8}},{t:this.shape_44,p:{y:427.4}},{t:this.shape_43,p:{y:354.5}},{t:this.shape_42,p:{y:404.3}},{t:this.shape_41,p:{y:404.3}},{t:this.shape_40,p:{y:442.8}},{t:this.shape_39,p:{y:399.3}},{t:this.shape_38,p:{y:399.3}},{t:this.shape_37,p:{y:391.6}},{t:this.shape_36,p:{y:397.1}},{t:this.shape_35,p:{y:396.2}},{t:this.shape_34,p:{y:407.1}},{t:this.shape_33,p:{y:395.8}},{t:this.shape_32,p:{y:395.8}},{t:this.shape_31,p:{y:402.6}},{t:this.shape_30,p:{y:391.8}},{t:this.shape_29,p:{y:391.8}},{t:this.shape_28,p:{y:566.7}},{t:this.shape_27,p:{y:641.3}},{t:this.shape_26,p:{y:641.3}},{t:this.shape_25,p:{y:659.9}},{t:this.shape_24,p:{y:659.9}},{t:this.shape_23,p:{y:654.5}},{t:this.shape_22,p:{y:654.5}},{t:this.shape_21,p:{y:651.6}},{t:this.shape_20,p:{y:651.6}},{t:this.shape_19,p:{y:647.6}},{t:this.shape_18,p:{y:650.2}},{t:this.shape_17,p:{y:653}},{t:this.shape_16,p:{y:655.3}},{t:this.shape_15,p:{y:657.5}},{t:this.shape_14,p:{y:659.4}},{t:this.shape_13,p:{y:644.2}},{t:this.shape_12,p:{y:644.2}},{t:this.shape_11,p:{y:668}},{t:this.shape_10,p:{y:668}},{t:this.shape_9,p:{y:662.6}},{t:this.shape_8,p:{y:662.6}},{t:this.shape_7,p:{y:659.7}},{t:this.shape_6,p:{y:659.7}},{t:this.shape_5,p:{y:655.7}},{t:this.shape_4,p:{y:658.3}},{t:this.shape_3,p:{y:661.2}},{t:this.shape_2,p:{y:663.5}},{t:this.shape_1,p:{y:665.7}},{t:this.shape,p:{y:667.6}}]},2).to({state:[{t:this.shape_61,p:{y:580.7}},{t:this.shape_60,p:{y:580.7}},{t:this.shape_59,p:{y:581.9}},{t:this.shape_58,p:{y:581.9}},{t:this.shape_57,p:{y:527.7}},{t:this.shape_56,p:{y:527.7}},{t:this.shape_55,p:{y:550.7}},{t:this.shape_54,p:{y:516.8}},{t:this.shape_53,p:{y:516.8}},{t:this.shape_63,p:{y:388}},{t:this.shape_62,p:{y:388}},{t:this.shape_52,p:{y:412.1}},{t:this.shape_51,p:{y:412.1}},{t:this.shape_50,p:{y:341.8}},{t:this.shape_49,p:{y:516.6}},{t:this.shape_48,p:{y:478.8}},{t:this.shape_47,p:{y:478.8}},{t:this.shape_46,p:{y:445.3}},{t:this.shape_45,p:{y:445.3}},{t:this.shape_44,p:{y:411}},{t:this.shape_42,p:{y:387.9}},{t:this.shape_41,p:{y:387.9}},{t:this.shape_43,p:{y:338.1}},{t:this.shape_40,p:{y:426.4}},{t:this.shape_39,p:{y:382.8}},{t:this.shape_38,p:{y:382.8}},{t:this.shape_37,p:{y:375.2}},{t:this.shape_36,p:{y:380.6}},{t:this.shape_35,p:{y:379.8}},{t:this.shape_34,p:{y:390.6}},{t:this.shape_33,p:{y:379.3}},{t:this.shape_32,p:{y:379.3}},{t:this.shape_31,p:{y:386.1}},{t:this.shape_30,p:{y:375.4}},{t:this.shape_29,p:{y:375.4}},{t:this.shape_28,p:{y:550.2}},{t:this.shape_27,p:{y:624.9}},{t:this.shape_26,p:{y:624.9}},{t:this.shape_25,p:{y:643.4}},{t:this.shape_24,p:{y:643.4}},{t:this.shape_23,p:{y:638}},{t:this.shape_22,p:{y:638}},{t:this.shape_21,p:{y:635.1}},{t:this.shape_20,p:{y:635.1}},{t:this.shape_19,p:{y:631.1}},{t:this.shape_18,p:{y:633.7}},{t:this.shape_17,p:{y:636.6}},{t:this.shape_16,p:{y:638.9}},{t:this.shape_15,p:{y:641}},{t:this.shape_14,p:{y:643}},{t:this.shape_13,p:{y:627.8}},{t:this.shape_12,p:{y:627.8}},{t:this.shape_11,p:{y:651.6}},{t:this.shape_10,p:{y:651.6}},{t:this.shape_9,p:{y:646.2}},{t:this.shape_8,p:{y:646.2}},{t:this.shape_7,p:{y:643.3}},{t:this.shape_6,p:{y:643.3}},{t:this.shape_5,p:{y:639.3}},{t:this.shape_4,p:{y:641.9}},{t:this.shape_3,p:{y:644.7}},{t:this.shape_2,p:{y:647}},{t:this.shape_1,p:{y:649.2}},{t:this.shape,p:{y:651.1}}]},2).to({state:[{t:this.shape_61,p:{y:597.1}},{t:this.shape_60,p:{y:597.1}},{t:this.shape_59,p:{y:598.4}},{t:this.shape_58,p:{y:598.4}},{t:this.shape_57,p:{y:544.2}},{t:this.shape_56,p:{y:544.2}},{t:this.shape_55,p:{y:567.1}},{t:this.shape_54,p:{y:533.2}},{t:this.shape_53,p:{y:533.2}},{t:this.shape_63,p:{y:404.4}},{t:this.shape_62,p:{y:404.4}},{t:this.shape_52,p:{y:428.5}},{t:this.shape_51,p:{y:428.5}},{t:this.shape_50,p:{y:358.2}},{t:this.shape_49,p:{y:533.1}},{t:this.shape_48,p:{y:495.3}},{t:this.shape_47,p:{y:495.3}},{t:this.shape_46,p:{y:461.8}},{t:this.shape_45,p:{y:461.8}},{t:this.shape_44,p:{y:427.4}},{t:this.shape_42,p:{y:404.3}},{t:this.shape_41,p:{y:404.3}},{t:this.shape_43,p:{y:354.5}},{t:this.shape_40,p:{y:442.8}},{t:this.shape_39,p:{y:399.3}},{t:this.shape_38,p:{y:399.3}},{t:this.shape_37,p:{y:391.6}},{t:this.shape_36,p:{y:397.1}},{t:this.shape_35,p:{y:396.2}},{t:this.shape_34,p:{y:407.1}},{t:this.shape_33,p:{y:395.8}},{t:this.shape_32,p:{y:395.8}},{t:this.shape_31,p:{y:402.6}},{t:this.shape_30,p:{y:391.8}},{t:this.shape_29,p:{y:391.8}},{t:this.shape_28,p:{y:566.7}},{t:this.shape_27,p:{y:641.3}},{t:this.shape_26,p:{y:641.3}},{t:this.shape_25,p:{y:659.9}},{t:this.shape_24,p:{y:659.9}},{t:this.shape_23,p:{y:654.5}},{t:this.shape_22,p:{y:654.5}},{t:this.shape_21,p:{y:651.6}},{t:this.shape_20,p:{y:651.6}},{t:this.shape_19,p:{y:647.6}},{t:this.shape_18,p:{y:650.2}},{t:this.shape_17,p:{y:653}},{t:this.shape_16,p:{y:655.3}},{t:this.shape_15,p:{y:657.5}},{t:this.shape_14,p:{y:659.4}},{t:this.shape_13,p:{y:644.2}},{t:this.shape_12,p:{y:644.2}},{t:this.shape_11,p:{y:668}},{t:this.shape_10,p:{y:668}},{t:this.shape_9,p:{y:662.6}},{t:this.shape_8,p:{y:662.6}},{t:this.shape_7,p:{y:659.7}},{t:this.shape_6,p:{y:659.7}},{t:this.shape_5,p:{y:655.7}},{t:this.shape_4,p:{y:658.3}},{t:this.shape_3,p:{y:661.2}},{t:this.shape_2,p:{y:663.5}},{t:this.shape_1,p:{y:665.7}},{t:this.shape,p:{y:667.6}}]},2).to({state:[{t:this.shape_61,p:{y:608}},{t:this.shape_60,p:{y:608}},{t:this.shape_59,p:{y:609.2}},{t:this.shape_58,p:{y:609.2}},{t:this.shape_57,p:{y:555}},{t:this.shape_56,p:{y:555}},{t:this.shape_55,p:{y:578}},{t:this.shape_54,p:{y:544.1}},{t:this.shape_53,p:{y:544.1}},{t:this.shape_63,p:{y:415.3}},{t:this.shape_62,p:{y:415.3}},{t:this.shape_52,p:{y:439.4}},{t:this.shape_51,p:{y:439.4}},{t:this.shape_50,p:{y:369.1}},{t:this.shape_49,p:{y:543.9}},{t:this.shape_48,p:{y:506.1}},{t:this.shape_47,p:{y:506.1}},{t:this.shape_46,p:{y:472.6}},{t:this.shape_45,p:{y:472.6}},{t:this.shape_44,p:{y:438.3}},{t:this.shape_42,p:{y:415.2}},{t:this.shape_41,p:{y:415.2}},{t:this.shape_43,p:{y:365.4}},{t:this.shape_40,p:{y:453.7}},{t:this.shape_39,p:{y:410.1}},{t:this.shape_38,p:{y:410.1}},{t:this.shape_37,p:{y:402.5}},{t:this.shape_36,p:{y:407.9}},{t:this.shape_35,p:{y:407.1}},{t:this.shape_34,p:{y:417.9}},{t:this.shape_33,p:{y:406.6}},{t:this.shape_32,p:{y:406.6}},{t:this.shape_31,p:{y:413.4}},{t:this.shape_30,p:{y:402.7}},{t:this.shape_29,p:{y:402.7}},{t:this.shape_28,p:{y:577.5}},{t:this.shape_27,p:{y:652.2}},{t:this.shape_26,p:{y:652.2}},{t:this.shape_25,p:{y:670.7}},{t:this.shape_24,p:{y:670.7}},{t:this.shape_23,p:{y:665.3}},{t:this.shape_22,p:{y:665.3}},{t:this.shape_21,p:{y:662.4}},{t:this.shape_20,p:{y:662.4}},{t:this.shape_19,p:{y:658.4}},{t:this.shape_18,p:{y:661}},{t:this.shape_17,p:{y:663.9}},{t:this.shape_16,p:{y:666.2}},{t:this.shape_15,p:{y:668.3}},{t:this.shape_14,p:{y:670.3}},{t:this.shape_13,p:{y:655.1}},{t:this.shape_12,p:{y:655.1}},{t:this.shape_11,p:{y:678.9}},{t:this.shape_10,p:{y:678.9}},{t:this.shape_9,p:{y:673.5}},{t:this.shape_8,p:{y:673.5}},{t:this.shape_7,p:{y:670.6}},{t:this.shape_6,p:{y:670.6}},{t:this.shape_5,p:{y:666.6}},{t:this.shape_4,p:{y:669.2}},{t:this.shape_3,p:{y:672}},{t:this.shape_2,p:{y:674.3}},{t:this.shape_1,p:{y:676.5}},{t:this.shape,p:{y:678.4}}]},2).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},2).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},12).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},13).wait(1));

	// Layer_2
	this.instance_6 = new lib.ball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1161.8,321.4,0.825,0.825,0,0,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).wait(1).to({regX:29.7,regY:29.7,x:1115.7,y:318.9},0).wait(1).to({x:1092.8,y:292.9},0).wait(1).to({x:1068.6,y:268.2},0).wait(1).to({x:1042.7,y:245.2},0).wait(1).to({x:1014.9,y:224.7},0).wait(1).to({x:984.8,y:207.6},0).wait(1).to({x:952.4,y:195.5},0).wait(1).to({x:918.3,y:190.1},0).wait(1).to({x:883.9,y:192.9},0).wait(1).to({x:851.1,y:203.8},0).wait(1).to({x:821.3,y:221.1},0).wait(1).to({x:794.6,y:243.1},0).wait(1).to({x:770.7,y:268.2},0).wait(1).to({x:756,y:300.2},0).wait(1).to({x:741.4,y:332.2},0).wait(1).to({x:726.7,y:364.2},0).wait(1).to({x:712,y:396.2},0).wait(1).to({x:697.3,y:428.2},0).wait(1).to({x:682.7,y:460.2},0).wait(1).to({x:668,y:492.2},0).wait(1).to({x:642.1,y:463.6},0).wait(1).to({x:608.8,y:444.7},0).wait(1).to({x:572.4,y:452.9},0).wait(1).to({x:547.5,y:482.2},0).wait(1).to({x:531,y:517.1},0).wait(1).to({x:519.1,y:506.4},0).wait(1).to({x:506.3,y:496.1},0).wait(1).to({x:492.1,y:489.6},0).wait(1).to({x:479,y:489.5},0).wait(1).to({x:461.4,y:497},0).wait(6));

	// Layer_3
	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(255,255,255,0)").s().p("EhgrA4QQjUAAAAjcMAAAhpnQAAjcDUAAMDBXAAAQDUAAAADcMAAABpnQAADcjUAAg");
	this.shape_256.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_256).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.player1in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer_2
	this.instance = new lib.player1ball();
	this.instance.parent = this;
	this.instance.setTransform(1185.8,577.3,1,1,0,0,0,77,119.6);

	this.instance_1 = new lib.player1throw1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1186.9,548.8,1,1,0,0,0,58,148.5);

	this.instance_2 = new lib.player1throw2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1186.1,540.2,1,1,0,0,0,45.8,158.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape.setTransform(1177.5,667.6,0.619,0.619,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_1.setTransform(1179.6,665.7,0.619,0.619,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_2.setTransform(1182.1,663.5,0.619,0.619,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#838587").ss(4,1,1).p("AgbAJIA3gR");
	this.shape_3.setTransform(1183.7,661.2,0.619,0.619,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_4.setTransform(1184,658.3,0.619,0.619,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_5.setTransform(1183.5,655.7,0.619,0.619,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi3QgEgHgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_6.setTransform(1181,659.7,0.619,0.619,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAHIgUC3IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_7.setTransform(1181,659.7,0.619,0.619,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIhAC+ICeByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgRhUhDIhUg/IgzhNQgLgZgQgZQghgygYAAQgmACgVgNg");
	this.shape_8.setTransform(1185.4,662.6,0.619,0.619,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIiehyIBAi+IAOANQAVANAmgCQAYAAAhAyQAQAZALAZIAzBNIBUA/QBUBDAEARQAJAjgaAbQgUAVgkAAQgcAAglgNg");
	this.shape_9.setTransform(1185.4,662.6,0.619,0.619,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABQhRABhzg9QhNgphQg8QgRgNgEgVQgEgUAKgTg");
	this.shape_10.setTransform(1185.7,668,0.619,0.619,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,0.9,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgVQgEgUAKgTIAZgtIA2AwQA8A3AfAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hpABIgCAAQhRAAhxg8g");
	this.shape_11.setTransform(1185.7,668,0.619,0.619,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#60605B").ss(3,1,1).p("Ag2CdIgxlSIBHAOQBRAJA3gXIg4Frg");
	this.shape_12.setTransform(1188.6,644.2,0.619,0.619,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.3,0,10.4,0).s().p("Ag2CdIgxlSIBHANQBRAKA3gXIg4Frg");
	this.shape_13.setTransform(1188.6,644.2,0.619,0.619,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_14.setTransform(1195.6,659.4,0.619,0.619,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_15.setTransform(1197.6,657.5,0.619,0.619,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#838587").ss(4,1,1).p("AgYAQIAxgf");
	this.shape_16.setTransform(1200.1,655.3,0.619,0.619,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#838587").ss(4,1,1).p("AgbAKIA3gT");
	this.shape_17.setTransform(1201.7,653,0.619,0.619,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#838587").ss(4,1,1).p("AgjgDIBGAH");
	this.shape_18.setTransform(1202,650.2,0.619,0.619,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#838587").ss(4,1,1).p("AgigDIBFAH");
	this.shape_19.setTransform(1201.5,647.6,0.619,0.619,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#201F1F").ss(4,1,1).p("AhshoQA/BCgHBlIBGBAQBLA8ANgVQAOgVhGg7IhIg2IAUi2QgEgIgJgGQgRgLgSAIQgTAJgVAcQgLAOgHAMg");
	this.shape_20.setTransform(1199,651.6,0.619,0.619,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#606163","#322F2F"],[0,1],-1,16.4,1.3,-16.7).s().p("AASB/IhGhAQAHhlg/hCQAHgMALgOQAVgcATgJQASgIARALQAJAGAEAIIgUC2IBIA2QBGA7gOAVQgDAFgIAAQgVAAg4gsg");
	this.shape_21.setTransform(1199,651.6,0.619,0.619,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#201F1F").ss(4,1,1).p("AifjXIg/C+ICdByIAaAoQAoAtBSAdQBUAeAlgmQAagbgJgjQgEgQhUhDIhUg/IgzhNQgLgagQgZQghgygYABQgmABgVgNg");
	this.shape_22.setTransform(1203.4,654.5,0.619,0.619,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#606163","#322F2F"],[0,1],-1,20.5,1.8,-20.3).s().p("ABTDLQhSgdgogtIgagoIidhyIA/i+IAOANQAVANAmgBQAYgBAhAyQAQAZALAaIAzBNIBUA/QBUBDAEAQQAJAjgaAbQgVAVgjAAQgcAAglgNg");
	this.shape_23.setTransform(1203.4,654.5,0.619,0.619,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#60605B").ss(4,1,1).p("AjOiLIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABQhSABhzg9QhNgphQg8QgRgNgEgUQgEgVAKgTg");
	this.shape_24.setTransform(1203.7,659.9,0.619,0.619,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.1,1,-12.5).s().p("Ag7BQQhNgphQg8QgRgNgEgUQgEgVAKgTIAZgtIA2AwQA9A3AeAlIA9A9QBKA9BIAFQBIAEAGgxQACgQgFgTIgFgQIALAQQAMAUAAARQADA2hoABIgCAAQhRAAhyg8g");
	this.shape_25.setTransform(1203.7,659.9,0.619,0.619,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#60605B").ss(3,1,1).p("AhPCnIgUlrIBGAZQBPAWAygSIhIFsg");
	this.shape_26.setTransform(1206.9,641.3,0.619,0.619,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10,0,10.1,0).s().p("AhQCnIgUlrIBHAZQBPAVAzgRIhJFsg");
	this.shape_27.setTransform(1206.9,641.3,0.619,0.619,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#ECA92F").ss(6,1,1).p("AEfg0Qi7B5jTgSQhDgGg9gTIgvgS");
	this.shape_28.setTransform(1191.3,566.7,0.619,0.619,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#9C701F").ss(3,1,1).p("ADtjnQg/gCjlB/QjlB+gfA2QAHA1AeA6QAPAdAOATQAAgDAJgPQANgWAXgZQBIhPCNhQQCjhcB3gSQAQgCAHgPQAGgPgJgNQgcgqgugrg");
	this.shape_29.setTransform(1212,391.8,0.619,0.619,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ECA92F").s().p("AkWC5Qgeg6gHg1QAfg2Dlh+QDlh/A/ACQAuArAcAqQAJANgGAPQgHAPgQACQh3ASijBcQiNBQhIBPQgXAZgNAWQgJAPAAADQgOgTgPgdg");
	this.shape_30.setTransform(1212,391.8,0.619,0.619,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BE9075").ss(3,1,1).p("ABCA2IgqAQQgYAKgZgLQgZgMgKgaQgKgaALgYQALgZAZgKIA1gU");
	this.shape_31.setTransform(1206.2,402.6,0.619,0.619,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#352B2C").ss(3,1,1).p("AkIglQgBBOAuBbQArBTBGBGQBEBGBFAhQBKAjAzgUQhDiNBRhdIgdALQgZAKgZgLQgZgMgKgaQgKgaALgZQALgZAZgKIA2gUIAoBjIAQgoIhVjcIglgSQgYgLAAgaQAAgaAXgLICchDQAjgPgHggQgGgfglgTQhFgkhBALQhRAOgkBSQg6ANg7ApQh0BRgBCLg");
	this.shape_32.setTransform(1213.5,395.8,0.619,0.619,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4B3A3B").s().p("AAfGEQhFghhEhGQhGhGgrhTQguhbABhOQABiLB0hRQA7gpA6gNQAkhSBRgOQBBgLBFAkQAlATAGAfQAHAggjAPIicBDQgXALAAAaQAAAaAYALIAlASIBVDcIgQAoIgohjIg2AUQgZAKgLAZQgLAZAKAaQAKAaAZAMQAZALAZgKIAdgLQhRBdBDCNQgSAHgVAAQgmAAgwgWg");
	this.shape_33.setTransform(1213.5,395.8,0.619,0.619,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F4137").s().p("AgfAHIA1gUIAKAXQgOAEgNAAQgSAAgSgHg");
	this.shape_34.setTransform(1187,407.1,0.619,0.619,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDARQgGgEgDgIQgEgHACgHQACgIAGgCQAFgCAFAEQAGAFADAIQAEAHgCAHQgCAHgFACIgEABQgEAAgDgDg");
	this.shape_35.setTransform(1193.3,396.2,0.619,0.619,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgOAkQgOgHgGgPQgGgPAGgPQAGgPAOgGQAOgFAPAHQAOAHAGAQQAGAOgGAPQgGAPgPAGQgGACgHAAQgHAAgIgEg");
	this.shape_36.setTransform(1193.9,397.1,0.619,0.619,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5F4137").s().p("AhDArIgGgOIgCgJQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIACgDIALgNIANgLIAfgVIAggNIAdgIIAEgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABIARAQIAGAHIACADIgPAgQAAAAAAAAQAAABgBAAQAAAAAAAAQgBgBAAAAIgDABIgWAGIgNAEIgVAMIgRAOIgGAHIgBACQABAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgIgBIgXADIgDABg");
	this.shape_37.setTransform(1196,391.6,0.619,0.619,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BE9075").ss(2,1,1).p("ABjFMICbg7QAdgMANgcQANgdgLgeIg6ilIA0gTQAWgIAEgXQADgXgSgPIh9hjIiCipIjPACQhfAkgqBfQgpBfAlBhIBQDPQAlBhBeArQBdArBfgkg");
	this.shape_38.setTransform(1201.9,399.3,0.619,0.619,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-11.5,-36.3,14.4,31.5).s().p("AhZFFQhegrglhhIhQjPQglhhAphfQAqhfBfgkIDPgCICCCpIB9BjQASAPgDAXQgEAXgWAIIg0ATIA6ClQALAegNAdQgNAcgdAMIibA7QgrAQgsAAQgyAAgzgXg");
	this.shape_39.setTransform(1201.9,399.3,0.619,0.619,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#ECA92F").ss(6,1,1).p("AB8D+QgvgIg1giQhphEgfiDQgfiBA3hRQAcgpAigP");
	this.shape_40.setTransform(1193.1,442.8,0.619,0.619,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE9075").ss(2.5,1,1).p("AHXtoIhfALQgMABgJAJIiVCKIAAA1Il/G/IAACEIl2HBQgiAPgcApQg4BRAfCCQAgCDBqBEQA1AiAvAIIBylKIJKyaIDTieIBxAAQALAAAHgIQAIgHAAgLQAAgKgIgIQgHgHgKAAIADAAIhfgcQgegJgfAGAGotWQgEADgEADIgsAhQAbgZAZgOQAcgQAZgDIgFABQgBAAAAAAQgZAFgWANgAJxtJIh9AAIhnA4");
	this.shape_41.setTransform(1160.6,404.3,0.619,0.619,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,87.6,0,-87.5).s().p("An0NCQhqhEggiDQgfiCA4hRQAcgpAigPIF2nBIAAiEIF/m/IAAg1ICViKQAJgJAMgBIBfgLQgZAFgWANQgZAOgbAZIAsghIAIgGQAcgQAZgDIgFABQAfgGAeAJIBfAcIgDAAQAKAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAIhxAAIjTCeIpKSaIhyFKQgvgIg1gigAGNsRIBng4IB9AAIh9AAgAHXtoIABAAIAFgBQgZADgcAQQAWgNAZgFgAHXtoIAAAAg");
	this.shape_42.setTransform(1160.6,404.3,0.619,0.619,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BE9075").ss(4,1,1).p("AgpA8IAZhgQAEgRAQgFQAQgEAMALQAMAKgCAQIgBAJg");
	this.shape_43.setTransform(1143.1,354.5,0.619,0.619,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#ECA92F").ss(6,1,1).p("ACWAEIkrgI");
	this.shape_44.setTransform(1207.8,427.4,0.619,0.619,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#6F047E").ss(3.5,1,1).p("AC+omIldgJQhwgFhDBUQhCBUATB7IBTIgIAKDWIAtAZQA8AbBIAMQDnApESh0IgLpTg");
	this.shape_45.setTransform(1202.4,461.8,0.619,0.619,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,56,0,-56).s().p("AhzIlQhIgMg8gbIgtgZIgKjWIhTogQgTh7BChUQBDhUBwAFIFdAJIC9GtIALJTQjLBWizAAQg+AAg9gLg");
	this.shape_46.setTransform(1202.4,461.8,0.619,0.619,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#6F047E").ss(3.5,1,1).p("AlAAcIAAg8IKBhDIgSB2QgXAZg3AXQhvAsiigOQijgOhHgdQgWgJgKgKg");
	this.shape_47.setTransform(1199,495.3,0.619,0.619,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-32.1,0,32.1,0).s().p("AgwBhQijgOhHgdQgWgJgKgKIgGgHIAAg8IKBhDIgTB2QgWAZg3AXQhVAhhyAAQgjAAgngDg");
	this.shape_48.setTransform(1199,495.3,0.619,0.619,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#ECA92F").ss(6,1,1).p("AhMn9IBEFaQBHGPAOES");
	this.shape_49.setTransform(1185.3,533.1,0.619,0.619,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BE9075").ss(4,1,1).p("Ag3A2IA9iHQAEgJAJgEQAJgEAKADQAJADAFAJQAFAIgCAKQgVBnggA7");
	this.shape_50.setTransform(1160.2,358.2,0.619,0.619,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BE9075").ss(2.5,1,1).p("AidjDIgZEjIDqBkICDldg");
	this.shape_51.setTransform(1204.9,428.5,0.619,0.619,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,19.7,0,-19.6).s().p("Ai2BgIAZkjIFUAqIiDFdg");
	this.shape_52.setTransform(1204.9,428.5,0.619,0.619,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#6F047E").ss(3.5,1,1).p("AjfBUQhxhQgtiCQguiIAsiOIA2iwIJvgNIgFDbIAWBDQAaBXAUBhQBAE1gTEuQi7B5jUgSQhCgFg9gTIgvgSg");
	this.shape_53.setTransform(1198.4,533.2,0.619,0.619,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,59.4,0,-59.3).s().p("AADJPQhCgFg9gTIgvgSIg0nRQhxhQgtiCQguiIAsiOIA2iwIJvgNIgFDbIAWBDQAaBXAUBhQBAE1gTEuQijBqi2AAQgbAAgbgDg");
	this.shape_54.setTransform(1198.4,533.2,0.619,0.619,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#ECA92F").ss(6,1,1).p("AiMAAQBGAVBvgOQA6gHAqgM");
	this.shape_55.setTransform(1209.8,567.1,0.619,0.619,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#6F047E").ss(3.5,1,1).p("AiTl+IgDEnQAAFBAUCHQBGAXBwgPQA5gHAqgMIhTpig");
	this.shape_56.setTransform(1210.4,544.2,0.619,0.619,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,38.3,0,-38.2).s().p("AiCFxQgUiHAAlBIADknIDXCCIBTJiQgqAMg5AHQgtAGgkAAQg6AAgrgOg");
	this.shape_57.setTransform(1210.4,544.2,0.619,0.619,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjTrKIB8JEIhMDXIB1MxIBkAYICevgIhctTg");
	this.shape_58.setTransform(1189.1,598.4,0.619,0.619,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,92.2,0,-92.2).s().p("AguOCIh1sxIBMjXIh8pEIFLjPIBcNTIiePgg");
	this.shape_59.setTransform(1189.1,598.4,0.619,0.619,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BE9075").ss(2.5,1,1).p("Aihq2ICAIKIiRDaIAvNDIBsAeIDKv4IhDslg");
	this.shape_60.setTransform(1203.7,597.1,0.619,0.619,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,91.1,0,-91.1).s().p("AiDNxIgvtDICRjaIiAoKIERjYIBDMlIjKP4g");
	this.shape_61.setTransform(1203.7,597.1,0.619,0.619,0,0,180);

	this.instance_3 = new lib.ball();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1161.8,321.4,0.825,0.825,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlZO0IhokqIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIg");
	this.shape_62.setTransform(1178.3,404.4,0.619,0.619,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,94.8,0,-94.7).s().p("AnBKKIAagOIAxooIDBhgIAeikIE+mKIgGjJICKioQAFgGAIgBQAIgCAHAEQAIAGACAJQACAJgGAIIhmCIICEh9QAJgIALABQAMABAHAJQAHAHAAAKQgBAKgGAIIg7BBIAAAOIBKg8QAIgGAKACQAKADAEAJQAFANgKAJIhoBfIBDgnQALgGALAFQALAFADAMQACAKgFAIQgEAIgJADQhGAWgTAOQAAAtgjA3IgkAvIlFLIIkfL+g");
	this.shape_63.setTransform(1178.3,404.4,0.619,0.619,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#838587").ss(4,1,1).p("AgaARIA0gh");
	this.shape_64.setTransform(1170,687.1,0.619,0.619,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_65.setTransform(1172.1,685.1,0.619,0.619,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_66.setTransform(1174.8,682.8,0.619,0.619,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_67.setTransform(1176.5,680.3,0.619,0.619,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_68.setTransform(1176.9,677.3,0.619,0.619,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_69.setTransform(1176.3,674.6,0.619,0.619,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhvQBCBHgHBrIBLBEQBPA/AOgWQAPgWhLg/IhMg5IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAdQgMAPgHANg");
	this.shape_70.setTransform(1173.6,678.8,0.619,0.619,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.4,1.4,-17.8).s().p("AAUCHIhLhEQAHhrhChHQAHgNAMgPQAWgdAUgJQATgJATAMQAJAGAFAIIgWDCIBMA5QBLA/gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_71.setTransform(1173.6,678.8,0.619,0.619,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgdgJglQgFgShZhHIhZhDIg2hSQgMgbgSgbQgig1gZABQgpABgWgNg");
	this.shape_72.setTransform(1178.4,681.9,0.619,0.619,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAiA1QASAbAMAbIA2BSIBZBDQBZBHAFASQAJAlgcAdQgVAVglAAQgeAAgogOg");
	this.shape_73.setTransform(1178.4,681.9,0.619,0.619,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhSgrhVhAQgSgOgFgWQgEgWAKgTg");
	this.shape_74.setTransform(1178.6,687.6,0.619,0.619,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.9,1,-13.2).s().p("Ag+BVQhSgrhVhAQgSgOgFgWQgEgWAKgTIAbgxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_75.setTransform(1178.6,687.6,0.619,0.619,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#9C701F").ss(3,1,1).p("AEki4QhCgRkJBRQkKBQgtAwQgFA5ASBDQAJAiAKAWQAPgYAvghQBdhCCkg0QBtghBagMQBDgJAzAEQARABAKgNQALgOgGgQQgTgxgng4g");
	this.shape_76.setTransform(1209.8,415.3,0.619,0.619,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#ECA92F").s().p("AlRCEQgShDAFg5QAtgwEKhQQEJhRBCARQAnA4ATAxQAGAQgLAOQgKANgRgBQgzgEhDAJQhaAMhtAhQikA0hdBCQgvAhgPAYQgKgWgJgig");
	this.shape_77.setTransform(1209.8,415.3,0.619,0.619,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BE9075").ss(3,1,1).p("ABABDIgwAHQgbAEgXgRQgYgRgEgdQgFgcASgYQARgYAcgEIA8gJ");
	this.shape_78.setTransform(1207.1,428.1,0.619,0.619,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#352B2C").ss(3,1,1).p("Akvh8QgTBSAcBoQAZBfA5BaQA3BXBBAyQBFA0A4gIQgliiBohOIggAFQgdAEgXgRQgWgRgFgdQgEgdAQgYQARgYAdgEIA8gJIAUBvIAYgmIglj3IgjgbQgWgRAGgbQAFgbAbgGICxgiQAogHAAgjQAAgigigcQg/g0hHgEQhWgEg6BNQg+AAhGAdQiLA6ggCQg");
	this.shape_79.setTransform(1210.3,420.7,0.619,0.619,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4B3A3B").s().p("AhcGAQhBgyg3hXQg5hagZhfQgchoAThSQAgiQCLg6QBGgdA+AAQA6hNBWAEQBHAEA/A0QAiAcAAAiQAAAjgoAHIixAiQgbAGgFAbQgGAbAWARIAjAbIAlD3IgYAmIgUhvIg8AJQgdAEgRAYQgQAYAEAdQAFAdAWARQAXARAdgEIAggFQhoBOAlCiIgQABQgxAAg8gtg");
	this.shape_80.setTransform(1210.3,420.7,0.619,0.619,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5F4137").s().p("AAMAMQgZgEgSgLIA8gKIADAaIgDABIgRgCg");
	this.shape_81.setTransform(1187.9,437.1,0.619,0.619,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHARQgGgGgBgJQgBgIADgHQADgHAHgBQAFgBAGAGQAFAGABAJQABAIgDAHQgDAHgHABIgBAAQgFAAgEgFg");
	this.shape_82.setTransform(1191.8,424.2,0.619,0.619,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgXAiQgNgKgCgSQgDgQAJgPQAKgOAQgCQAQgDAOALQANAKACASQADAQgJAPQgKAOgQACIgHABQgMAAgLgJg");
	this.shape_83.setTransform(1192.6,425,0.619,0.619,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5F4137").s().p("AgpAtIgHgBIgOgCIgNAAIgCgDIgDgKQgDgKABgFIgBgKQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAIACgCIAOgKIAQgKIASgIQAIgEALgCIAkgHIAfgBIAEgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIAGAHQAFAFAEAHIAEAJIACADIgXAcQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgaABIgbAEIgXAKIgJAGIgIAGIgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_84.setTransform(1193.4,418.9,0.619,0.619,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BE9075").ss(2,1,1).p("AAMF7ICugaQAhgFAUgbQAUgbgFgiIgXi4IA7gJQAYgDAJgXQAJgXgPgTIhsiDIhhjNIjXgtQhrARhABZQhBBZARBtIAkDpQAQBtBYBCQBYBCBqgRg");
	this.shape_85.setTransform(1200.4,424.6,0.619,0.619,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-5.3,-38.9,6.3,37.2).s().p("Ai2FKQhYhCgQhtIgkjpQgRhtBBhZQBAhZBrgRIDXAtIBhDNIBsCDQAPATgJAXQgJAXgYADIg7AJIAXC4QAFAigUAbQgUAbghAFIiuAaQgVAEgUAAQhTAAhGg1g");
	this.shape_86.setTransform(1200.4,424.6,0.619,0.619,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#ECA92F").ss(6,1,1).p("ACEENQgygIg4glQhwhIghiLQghiJA7hWQASgbAagTIAWgN");
	this.shape_87.setTransform(1196.4,472.4,0.619,0.619,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BE9075").ss(2.5,1,1).p("ADyCfImLg+QhVgOhPAkIhiArIgWANQgZATgTAbQg7BWAhCKQAhCLBxBIQA5AlAyAIIBljfQANgcAagRQAagRAfAAIHCAAQBHAAAlg9QAlg+gjg/Imir9QgsgqgagoQgYgkgFgbQgCgKgIgGQgJgGgKACQgJACgGAHQgFAHAAAKQADA6BFBYQhZgvgnhiQgGgOgPgFQgQgFgNAKQgIAGgEAKQgDAKADAKQAYBMBfBLQhYg9g9g7QgKgJgNgBQgOgBgLAIQgOAJgCASQgCARAMANQBtByBGAcIAJADAhWmoQhHgahJhIQgIgIgKAAQgLgBgJAGQgLAIgCANQgBAOAJAJQAwA0BaAvQAsAXAjANIhDgBQgSgBgJAQQgKAPAJAQQAJAPASABIC4ADIBvCfIAaDmIAtA0AE3DvIhFhQ");
	this.shape_88.setTransform(1172.4,445.7,0.619,0.619,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,70.1,0,-70.1).s().p("AlpKQQhxhIghiLQghiKA7hWQATgbAZgTIAWgNIBigrQBPgkBVAOIGLA+IBFBQIhFhQIgtg0IgajmIhvifIi4gDQgSgBgJgPQgJgQAKgPQAJgQASABIBDABQgjgNgsgXQhagvgwg0QgJgJABgOQACgNALgIQAJgGALABQAKAAAIAIQBJBIBHAaIAJADIgJgDQhGgchthyQgMgNACgRQACgSAOgJQALgIAOABQANABAKAJQA9A7BYA9QhfhLgYhMQgDgKADgKQAEgKAIgGQANgKAQAFQAPAFAGAOQAnBiBZAvQhFhYgDg6QAAgKAFgHQAGgHAJgCQAKgCAJAGQAIAGACAKQAFAbAYAkQAaAoAsAqIGiL9QAjA/glA+QglA9hHAAInCAAQgfAAgaARQgaARgNAcIhlDfQgygIg5glg");
	this.shape_89.setTransform(1172.4,445.7,0.619,0.619,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#ECA92F").ss(6,1,1).p("ACfAFIk9gI");
	this.shape_90.setTransform(1205.4,453.4,0.619,0.619,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#6F047E").ss(3.5,1,1).p("ADKpJIlzgJQh3gFhHBZQhGBZAUCDIBZJBIAKDkIAwAaQA/AdBNANQD1AsEjh8IgLpDg");
	this.shape_91.setTransform(1199.8,490,0.619,0.619,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-41.4,0,41.5,0).s().p("Ah6JHQhNgNg/gdIgwgaIgKjkIhZpBQgUiDBGhZQBHhZB3AFIFzAJIDJH9IALJDQjXBci/AAQhCAAhAgMg");
	this.shape_92.setTransform(1199.8,490,0.619,0.619,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BE9075").ss(2.5,1,1).p("AEYDIIgvqEIiUgaIgtJVIkjAOIgcAOIBvE8IE6hTQA/gRAmg1QAmg1gFhBg");
	this.shape_93.setTransform(1183,440.8,0.619,0.619,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,47.1,0,-47.1).s().p("AkXCbIAcgOIEjgOIAtpVICUAaIAvKEQAFBBgmA1QgmA1g/ARIk6BTg");
	this.shape_94.setTransform(1183,440.8,0.619,0.619,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BE9075").ss(2.5,1,1).p("AinjPIgbE1ID6BqICLlzg");
	this.shape_95.setTransform(1203.8,453.7,0.619,0.619,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,20.9,0,-20.8).s().p("AjCBmIAbk1IFpAsIiKFzg");
	this.shape_96.setTransform(1203.8,453.7,0.619,0.619,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#6F047E").ss(3.5,1,1).p("AlUAaIAAhAIKphHIgODQQgaAGg8ADQh4AGisgPQitgOhLgfQgYgKgLgKg");
	this.shape_97.setTransform(1197.2,525.4,0.619,0.619,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-34.1,0,34.1,0).s().p("AgzBjQitgOhLgfQgYgKgLgKIgGgIIAAhAIKphHIgODQQgaAGg8ADQgiACgnAAQhgAAh7gLg");
	this.shape_98.setTransform(1197.2,525.4,0.619,0.619,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#ECA92F").ss(6,1,1).p("AEPh2QjGCAi/BEQg8AUg0ANIgoAI");
	this.shape_99.setTransform(1178.9,593.3,0.619,0.619,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#ECA92F").ss(6,1,1).p("AjvmuIAJAvQAOA8AVBAQBFDNB3CkQCCC0B1CN");
	this.shape_100.setTransform(1178.5,560.8,0.619,0.619,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#6F047E").ss(3.5,1,1).p("AksBvQh4hVgwiKQgxiQAuiXIA6i7IKbBKIgMDvIAhApQAoA2AkBDQBzDVAdEHQjHCBjABEQg8AUgzANIgoAIg");
	this.shape_101.setTransform(1192.7,563.8,0.619,0.619,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-49.4,0,49.5,0).s().p("AksBvQh4hVgwiKQgxiQAuiXIA6i7IKbBKIgMDvIAhApQAoA2AkBDQBzDVAdEHQjHCBjABDQg8AWgzAMIgoAIg");
	this.shape_102.setTransform(1192.7,563.8,0.619,0.619,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#838587").ss(4,1,1).p("AgZARIA0gh");
	this.shape_103.setTransform(1195.1,678.5,0.619,0.619,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_104.setTransform(1197.3,676.4,0.619,0.619,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#838587").ss(4,1,1).p("AgZARIAzgh");
	this.shape_105.setTransform(1200,674.1,0.619,0.619,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#838587").ss(4,1,1).p("AgdAKIA7gT");
	this.shape_106.setTransform(1201.7,671.7,0.619,0.619,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_107.setTransform(1202,668.7,0.619,0.619,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#838587").ss(4,1,1).p("AglgDIBLAH");
	this.shape_108.setTransform(1201.4,665.9,0.619,0.619,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#201F1F").ss(4,1,1).p("AhyhuQBDBFgIBsIBLBEQBPA/AOgWQAPgWhKg+IhNg6IAWjCQgFgIgJgGQgTgMgTAJQgUAJgWAeQgMAPgHANg");
	this.shape_109.setTransform(1198.8,670.1,0.619,0.619,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#606163","#322F2F"],[0,1],-1,17.5,1.4,-17.7).s().p("AAUCHIhLhEQAIhshDhFQAHgNAMgPQAWgeAUgJQATgJATAMQAJAGAFAIIgWDCIBNA6QBKA+gPAWQgEAGgIAAQgXAAg6gvg");
	this.shape_110.setTransform(1198.8,670.1,0.619,0.619,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#201F1F").ss(4,1,1).p("AipjkIhDDKICnB5IAFAMQAIAPAOAPQArAwBXAeQBaAgAmgnQAcgegJgkQgFgShZhHIhZhDIg2hSQgMgbgRgbQgjg1gZABQgpABgWgNg");
	this.shape_111.setTransform(1203.5,673.2,0.619,0.619,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#606163","#322F2F"],[0,1],-1.1,21.8,1.9,-21.6).s().p("ABYDXQhXgegrgwQgOgPgIgPIgFgMIinh5IBDjKIAPAOQAWANApgBQAZgBAjA1QARAbAMAbIA2BSIBZBDQBZBHAFASQAJAkgcAeQgVAVglAAQgeAAgogOg");
	this.shape_112.setTransform(1203.5,673.2,0.619,0.619,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#60605B").ss(4,1,1).p("AjbiUIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgFgRIAMARQAMAWAAASQADA5hvABQhXABh5hBQhTgshUhAQgSgNgEgWQgFgWALgTg");
	this.shape_113.setTransform(1203.8,679,0.619,0.619,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],-0.8,13.8,1,-13.3).s().p("Ag+BVQhTgshUhAQgSgNgEgWQgFgWALgTIAagxIA6AzQBAA7AhAoIBABAQBPBABMAGQBMAFAHg1QACgRgFgUIgGgRIANARQAMAWAAASQADA5hvABIgDAAQhWAAh3hAg");
	this.shape_114.setTransform(1203.8,679,0.619,0.619,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#60605B").ss(3,1,1).p("AiHCTIBGlEIA8AnQBJAmBFgFIidEbg");
	this.shape_115.setTransform(1206.1,657.1,0.619,0.619,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-13.6,0,13.7,0).s().p("AiHCTIBFlEIA8AnQBJAmBGgFIieEbg");
	this.shape_116.setTransform(1206.1,657.1,0.619,0.619,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#60605B").ss(3,1,1).p("AhrCpIAGlqIBFAWQBPAUA9gLIhsFkg");
	this.shape_117.setTransform(1181.5,668.2,0.619,0.619,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-10.8,0,10.8,0).s().p("AhrCoIAGlpIBFAWQBPAUA9gLIhsFkg");
	this.shape_118.setTransform(1181.5,668.2,0.619,0.619,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#ECA92F").ss(6,1,1).p("AiIA+QBOgGBpg6IBag7");
	this.shape_119.setTransform(1197.7,596.8,0.619,0.619,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#6F047E").ss(3.5,1,1).p("AjqlNIA2EDQBGEaBJB+QBNgGBqg7IBag7g");
	this.shape_120.setTransform(1203.8,580,0.619,0.619,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-23.5,0,23.6,0).s().p("Ai0hKIg2kDIHVIfIhaA7QhqA7hMAGQhKh9hFkbg");
	this.shape_121.setTransform(1203.8,580,0.619,0.619,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BE9075").ss(2.5,1,1).p("AjNqIIBhGkIhhBqIgXPFIBrAZIFex9IhUpKg");
	this.shape_122.setTransform(1174,626.5,0.619,0.619,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,86.9,0,-86.8).s().p("AjkNLIAXvFIBhhqIhhmkIFejbIBUJKIleR9g");
	this.shape_123.setTransform(1174,626.5,0.619,0.619,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhqnAICKCYIioCFIiuMrIBzAfIH6uOIh+m/g");
	this.shape_124.setTransform(1195.3,626.1,0.619,0.619,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67.9,0,-67.9).s().p("Ak2KIICusrICoiFIiKiYIEjjmIB+G/In6OOg");
	this.shape_125.setTransform(1195.3,626.1,0.619,0.619,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_126.setTransform(1163.6,685.5,0.576,0.576,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_127.setTransform(1167.4,684.4,0.576,0.576,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_128.setTransform(1171.8,683.1,0.576,0.576,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_129.setTransform(1175,681.3,0.576,0.576,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#838587").ss(4,1,1).p("AgnAKIBPgT");
	this.shape_130.setTransform(1177.2,678.2,0.576,0.576,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_131.setTransform(1178.3,675.1,0.576,0.576,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBnA6BBB5ICMAnQCOAhgCgfQgDgeiFgiIiFgbIhwjfQgJgHgLgEQgWgIgLAQQgKARgDApQgCAVABASg");
	this.shape_132.setTransform(1170.7,677.5,0.576,0.576,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#606163","#322F2F"],[0,1],4.5,21.3,-6.4,-20.5).s().p("ABVCbIiMgnQhBh5hng6QgBgSACgVQADgpAKgRQALgQAWAIQALAEAJAHIBwDfICFAbQCFAiADAeQABAPghAAQgiAAhKgRg");
	this.shape_133.setTransform(1170.7,677.5,0.576,0.576,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBVAiCDgHQCUgOANg9QAEgWgOgYQgLgUgRgMQgWgQihgkIibgfIhuhGQgagbgegZQg8gygUAJQgiAOgKgNg");
	this.shape_134.setTransform(1172.2,683,0.576,0.576,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.4,-8.7,-26.5).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIADAQQAKANAigOQAUgJA8AyQAeAZAaAbIBuBGICbAfQChAkAWAQQARAMALAUQAOAYgEAWQgNA9iUAOIgrABQhmAAhHgcg");
	this.shape_135.setTransform(1172.2,683,0.576,0.576,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#60605B").ss(4,1,1).p("AliiGIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgugPgagLQgvgUAEgYg");
	this.shape_136.setTransform(1172.1,689.1,0.576,0.576,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.2,17,-5.7,-21.1).s().p("AgRCBQiSgPh0goQgugPgagLQgvgUAEgYIAoiKIBkBDQBwBIA8AiIAjAOQAsARAsALQCQAkBoghQBrgkgpg6QgNgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh3AAQgyAAg3gGg");
	this.shape_137.setTransform(1172.1,689.1,0.576,0.576,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#ECA92F").ss(6,1,1).p("ACWExQg5gKhAgpQh/hSglidQgmibBEhiQAVgeAcgVIAZgP");
	this.shape_138.setTransform(1202.6,482.6,0.576,0.576,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#BE9075").ss(2.5,1,1).p("AESEtIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQhLAphKgrInTkGIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIAtCKAFOlBIgGgJAi2FZIhLgq");
	this.shape_139.setTransform(1178.8,472.2,0.576,0.576,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,62.8,0,-62.8).s().p("AEdJfInTkGIhLgqIBLAqIAGADIhYCKQg4gJhAgqQiAhSgmicQglidBDhgQAVgfAdgVIAZgPIBFAAQBfAABYAjQBYAiBFBAIE2EjIBfi5IABjbIiph7QgPgMABgUQACgVATgIQATgJAQANIA9AtQgXgjgagzQg0hlgLhQQgCgPAKgLQAKgLAPAAQANAAAJAIQAKAHACAMQAUByAxBHQgvhJgaiwQgCgTAMgPQANgPAUAAQAPAAAMAKQAMAKADAPQAUBkAnBsQgmiCAbhXQAEgLAKgIQAJgHAMAAQASAAAMAOQALAPgEARQgMAvADAwQADBBAeA6QgHh/Akg3QAFgJAKgDQAKgDAKAEQAKAFAEALQAEALgEAKQgNAdgBAxQgCA2ANBDIguMkQgFBVhKApQglAUglAAQgmAAglgWgAE/G3IgtiKgAFOlBIgGgJg");
	this.shape_140.setTransform(1178.8,472.2,0.576,0.576,0,0,180);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#9C701F").ss(3,1,1).p("AFKjQQhKgTktBbQktBbgzA3QgEBAAUBMQAKAmALAZQAQgbA1gmQBqhKC5g7QDchDCMAKQATACAMgQQAMgPgHgSQgXg7grg8g");
	this.shape_141.setTransform(1216.7,422.5,0.576,0.576,0,0,180);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#ECA92F").s().p("Al9CWQgUhMAEhAQAzg3EthbQEthbBKATQArA8AXA7QAHASgMAPQgMAQgTgCQiMgKjcBDQi5A7hqBKQg1AmgQAbQgLgZgKgmg");
	this.shape_142.setTransform(1216.7,422.5,0.576,0.576,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#BE9075").ss(3,1,1).p("ABIBMIg1AIQgfAFgbgUQgagUgFggQgFggATgbQATgbAhgFIBEgK");
	this.shape_143.setTransform(1213.9,436,0.576,0.576,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#352B2C").ss(3,1,1).p("AlYiNQgVBeAgB1QAcBsBABlQA/BjBKA4QBOA8A/gKQgpi3B1hYIgkAGQggAFgbgUQgZgUgFghQgFghASgbQATgaAhgFIBFgLIAVB/IAcgrIgrkYIgngfQgZgTAHgeQAGgfAegHIDIgmQAtgIABgpQAAgmgnggQhIg7hPgDQhigFhBBXQhHABhPAgQidBCglCig");
	this.shape_144.setTransform(1217.2,428.2,0.576,0.576,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4B3A3B").s().p("AhoGyQhKg4g/hjQhAhlgchsQggh1AVheQAliiCdhCQBPggBHgBQBBhXBiAFQBPADBIA7QAnAgAAAmQgBApgtAIIjIAmQgeAHgGAfQgHAeAZATIAnAfIArEYIgcArIgVh/IhFALQghAFgTAaQgSAbAFAhQAFAhAZAUQAbAUAggFIAkgGQh1BYApC3IgSACQg4AAhDg0g");
	this.shape_145.setTransform(1217.2,428.2,0.576,0.576,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5F4137").s().p("AANANQgcgEgVgNIBEgKIAFAdIgEAAQgJAAgLgCg");
	this.shape_146.setTransform(1193.6,445.5,0.576,0.576,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgJAUQgGgHgBgKQgCgKAEgHQAEgJAHgBQAGgBAGAGQAGAHACAKQACAKgEAIQgEAIgHABIgCAAQgFAAgGgFg");
	this.shape_147.setTransform(1197.8,431.9,0.576,0.576,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AgZAnQgQgMgDgUQgDgTALgQQALgQATgDQARgDAPAMQAQAMADAUQADATgLAQQgLAQgTADIgGABQgOAAgMgKg");
	this.shape_148.setTransform(1198.7,432.7,0.576,0.576,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#5F4137").s().p("AgyAwIgJgCIgcAAIgBgDIgDgKQgCgJAAgIIAAgJQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIADgDIAPgLIASgLIAUgJIApgLIAUgDQANgBAXAAIADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAQATIAIANIgKALIgKAJIgGAHQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAgBIgDAAQgTAAgKABIgQACQgGABgKADIgOAEIgNAGIgLAHIgJAHIgCACQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape_149.setTransform(1199.4,426.4,0.576,0.576,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#BE9075").ss(2,1,1).p("AAOGtIDEgeQAlgFAXgfQAXgfgFgmIgajRIBCgJQAbgEALgaQAKgbgRgVIh7iUIhtjoIj0gyQh5AShJBlQhIBkASB8IApEIQATB8BjBKQBjBLB5gTg");
	this.shape_150.setTransform(1206.8,432.3,0.576,0.576,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#DBA585","#FDE2CD"],[0,1],-6,-44.1,7.1,42.1).s().p("AjOF1QhjhKgTh8IgpkIQgSh8BIhkQBJhlB5gSID0AyIBtDoIB7CUQARAVgKAbQgLAagbAEIhCAJIAaDRQAFAmgXAfQgXAfglAFIjEAeQgYAEgXAAQheAAhPg8g");
	this.shape_151.setTransform(1206.8,432.3,0.576,0.576,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#ECA92F").ss(6,1,1).p("AC0AFIlngJ");
	this.shape_152.setTransform(1212.1,462.7,0.576,0.576,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#6F047E").ss(3.5,1,1).p("AC5pcIkMgLQiGgFhhBbQhiBbgFCGIgTJNIglDnIA1AdQBHAhBbASQEjA6F8htIA9npg");
	this.shape_153.setTransform(1212.4,497.8,0.576,0.576,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,61.6,0,-61.5).s().p("AkCJUQhbgShHghIg1gdIAmjnIASpNQAFiGBhhbQBihbCGAFIEMALIEhKUIg9HpQj3BHjRAAQhxAAhmgUg");
	this.shape_154.setTransform(1212.4,497.8,0.576,0.576,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#BE9075").ss(2.5,1,1).p("AlfgMIEsCLIFno/ICHBoIkkKeQgeBEhCAhQhBAhhIgQIlohSIA3l2");
	this.shape_155.setTransform(1179,469.3,0.576,0.576,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,44.9,0,-44.8).s().p("AhSG8IlohSIA3l2IAkAAIEsCLIFno/ICHBoIkkKeQgeBEhCAhQgsAWguAAQgXAAgYgFg");
	this.shape_156.setTransform(1179,469.3,0.576,0.576,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BE9075").ss(2.5,1,1).p("Ai9jrIgeFfIEaB4ICdmkg");
	this.shape_157.setTransform(1210.5,463,0.576,0.576,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,23.6,0,-23.5).s().p("AjbBzIAeleIGZAzIidGkg");
	this.shape_158.setTransform(1210.5,463,0.576,0.576,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#ECA92F").ss(6,1,1).p("Ak3DlQAKACBGgbQBVgiBWgxQECiTByjL");
	this.shape_159.setTransform(1185.2,596.6,0.576,0.576,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#6F047E").ss(3.5,1,1).p("AmDgKIAAhJIMHAAIgUCcQgdAGhEAEQiJAGjDgQQjDgRhVgjQgbgLgMgKg");
	this.shape_160.setTransform(1215.2,532.9,0.576,0.576,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],-38.8,0,38.9,0).s().p("Ag9BJQjDgRhVgjQgbgLgMgKIgHgKIAAhJIMHAAIgUCcQgdAGhEAEQgnABgrAAQhuAAiMgLg");
	this.shape_161.setTransform(1215.2,532.9,0.576,0.576,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#ECA92F").ss(6,1,1).p("AkPnnIALA1QAPBEAZBJQBNDoCHC6QCSDLCFCg");
	this.shape_162.setTransform(1195.6,567.8,0.576,0.576,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#6F047E").ss(3.5,1,1).p("ABul1IA4AsQADACAEADIAGAGIAPkPIrzhTIhCDUQg2CuAsCxQAtCvCCCAQHkHdAMACQAKACBGgbQBVgiBWgxQEDiUByjLQiGjWjcjQQg+g7g/gz");
	this.shape_163.setTransform(1205.2,571,0.576,0.576,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#9717E8","#60009C","#9717E8"],[0,1,1],0,67.4,0,-67.3).s().p("AAiKhQgMgCnkndQiCiAgtivQgsixA2iuIBCjUILzBTIgPEPQA/AzA+A7QDcDQCGDWQhyDLkDCUQhWAxhVAiQhBAZgNAAIgCAAgACmlJIAHAFIAGAGIgGgGIgHgFIg4gsg");
	this.shape_164.setTransform(1205.2,571,0.576,0.576,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#60605B").ss(3,1,1).p("AhcBwIAljtIAPATQAWAVAgAFQAiAFAagEQANgBAGgDIhPDRg");
	this.shape_165.setTransform(1181.4,667.7,1,1,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-9.3,0,9.3,0).s().p("AhcBwIAmjuIAOAUQAWAVAgAEQAiAGAagEQANgBAGgDIhPDRg");
	this.shape_166.setTransform(1181.4,667.7,1,1,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#BE9075").ss(2.5,1,1).p("Al8nuIFrEvIhaBkIiWO4IC7AZIG0yUQAXg9gMhAQgLg/grgxIk+lqg");
	this.shape_167.setTransform(1175.8,629.3,0.576,0.576,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,88.6,0,-88.6).s().p("AkBNdICWu4IBahkIlrkwIGBmGIE+FqQArAwALBAQAMBAgXA8Im0SVg");
	this.shape_168.setTransform(1175.8,629.3,0.576,0.576,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#838587").ss(4,1,1).p("AgQAeIAhg7");
	this.shape_169.setTransform(1189.9,673.7,0.576,0.576,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_170.setTransform(1193.6,672.6,0.576,0.576,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#838587").ss(4,1,1).p("AgPAeIAfg7");
	this.shape_171.setTransform(1198,671.3,0.576,0.576,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#838587").ss(4,1,1).p("AgXAXIAvgt");
	this.shape_172.setTransform(1201.3,669.4,0.576,0.576,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#838587").ss(4,1,1).p("AgmAKIBOgT");
	this.shape_173.setTransform(1203.4,666.4,0.576,0.576,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#838587").ss(4,1,1).p("AglAJIBLgR");
	this.shape_174.setTransform(1204.6,663.3,0.576,0.576,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#201F1F").ss(4,1,1).p("Ajfg/QBmA5BBB6ICNAnQCNAhgBgfQgDgeiGgiIiEgbIhwjfQgJgHgLgEQgXgIgKAQQgLARgDApQgBAVABASg");
	this.shape_175.setTransform(1197,665.7,0.576,0.576,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#606163","#322F2F"],[0,1],4.4,21.3,-6.4,-20.5).s().p("ABVCbIiNgnQhBh6hmg5IAAgnQADgpALgRQAKgQAXAIQALAEAJAHIBwDfICEAbQCGAiADAeQAAAPggAAQgjAAhJgRg");
	this.shape_176.setTransform(1197,665.7,0.576,0.576,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#201F1F").ss(4,1,1).p("Ak3jPIgpCzQgNAuAPAmQAPAnAmAKIDaAoIAOALQATANAbALQBWAiCDgHQCUgOAMg9QAFgWgOgYQgMgVgRgLQgWgQihgkIibgfIhthGQgagbgegZQg8gygVAJQghAOgKgNg");
	this.shape_177.setTransform(1198.5,671.2,0.576,0.576,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#606163","#322F2F"],[0,1],4.8,25.3,-8.7,-26.6).s().p("AgTC0QgbgLgTgNIgOgLIjagoQgmgKgPgnQgPgmANguIApizIAEAQQAKANAhgOQAVgJA8AyQAeAZAaAbIBtBGICbAfQChAkAWAQQARALAMAVQAOAYgFAWQgMA9iUAOIgsABQhmAAhHgcg");
	this.shape_178.setTransform(1198.5,671.2,0.576,0.576,0,0,180);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#60605B").ss(4,1,1).p("AljiGIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+Qh0Aui9gTQiSgPh0goQgvgPgZgLQgvgUAEgYg");
	this.shape_179.setTransform(1198.3,677.3,0.576,0.576,0,0,180);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#C0C1BF","#EBEBEC"],[0,1],4.1,17,-5.8,-21.1).s().p("AgRCBQiSgPh0goQgvgPgZgLQgvgUAEgYIAniKIBlBDQBwBIA8AiIAjAOQArARAsALQCRAjBnghQBrgjgpg6QgMgSgagTIgYgOIAhAMQAkAPASASQA6A4iVA+QhRAhh2AAQgyAAg4gGg");
	this.shape_180.setTransform(1198.3,677.3,0.576,0.576,0,0,180);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#60605B").ss(3,1,1).p("AjACxICCmFIARASQAXAVAZAQQBXA0BngNIj/FLg");
	this.shape_181.setTransform(1206.9,655.1,0.576,0.576,0,0,180);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#BFBEB1","#FFFFFF"],[0,1],-19.2,0,19.3,0).s().p("AjACxICDmFIAQASQAXAVAZAQQBXA0BmgNIj9FLg");
	this.shape_182.setTransform(1206.9,655.1,0.576,0.576,0,0,180);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#BE9075").ss(2.5,1,1).p("AhXmZIBtCaIiSBuIkEMLICCAkIJ/tAIiPn7g");
	this.shape_183.setTransform(1195.8,628.8,0.576,0.576,0,0,180);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#DBA585","#FDE2CD"],[0,1],0,67,0,-66.9).s().p("AmAJ6IEEsLICRhuIhsiaIFJkEICPH7Ip/M/g");
	this.shape_184.setTransform(1195.8,628.8,0.576,0.576,0,0,180);

	this.instance_4 = new lib.player1ready();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1185.9,577.3,1,1,0,0,0,87.8,119.6);

	this.instance_5 = new lib.player1win();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1187.5,540.2,1,1,0,0,0,81.8,157.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2,p:{y:540.2}}]},2).to({state:[{t:this.instance_2,p:{y:530.9}}]},2).to({state:[{t:this.shape_63,p:{y:404.4}},{t:this.shape_62,p:{y:404.4}},{t:this.instance_3},{t:this.shape_61,p:{y:597.1}},{t:this.shape_60,p:{y:597.1}},{t:this.shape_59,p:{y:598.4}},{t:this.shape_58,p:{y:598.4}},{t:this.shape_57,p:{y:544.2}},{t:this.shape_56,p:{y:544.2}},{t:this.shape_55,p:{y:567.1}},{t:this.shape_54,p:{y:533.2}},{t:this.shape_53,p:{y:533.2}},{t:this.shape_52,p:{y:428.5}},{t:this.shape_51,p:{y:428.5}},{t:this.shape_50,p:{y:358.2}},{t:this.shape_49,p:{y:533.1}},{t:this.shape_48,p:{y:495.3}},{t:this.shape_47,p:{y:495.3}},{t:this.shape_46,p:{y:461.8}},{t:this.shape_45,p:{y:461.8}},{t:this.shape_44,p:{y:427.4}},{t:this.shape_43,p:{y:354.5}},{t:this.shape_42,p:{y:404.3}},{t:this.shape_41,p:{y:404.3}},{t:this.shape_40,p:{y:442.8}},{t:this.shape_39,p:{y:399.3}},{t:this.shape_38,p:{y:399.3}},{t:this.shape_37,p:{y:391.6}},{t:this.shape_36,p:{y:397.1}},{t:this.shape_35,p:{y:396.2}},{t:this.shape_34,p:{y:407.1}},{t:this.shape_33,p:{y:395.8}},{t:this.shape_32,p:{y:395.8}},{t:this.shape_31,p:{y:402.6}},{t:this.shape_30,p:{y:391.8}},{t:this.shape_29,p:{y:391.8}},{t:this.shape_28,p:{y:566.7}},{t:this.shape_27,p:{y:641.3}},{t:this.shape_26,p:{y:641.3}},{t:this.shape_25,p:{y:659.9}},{t:this.shape_24,p:{y:659.9}},{t:this.shape_23,p:{y:654.5}},{t:this.shape_22,p:{y:654.5}},{t:this.shape_21,p:{y:651.6}},{t:this.shape_20,p:{y:651.6}},{t:this.shape_19,p:{y:647.6}},{t:this.shape_18,p:{y:650.2}},{t:this.shape_17,p:{y:653}},{t:this.shape_16,p:{y:655.3}},{t:this.shape_15,p:{y:657.5}},{t:this.shape_14,p:{y:659.4}},{t:this.shape_13,p:{y:644.2}},{t:this.shape_12,p:{y:644.2}},{t:this.shape_11,p:{y:668}},{t:this.shape_10,p:{y:668}},{t:this.shape_9,p:{y:662.6}},{t:this.shape_8,p:{y:662.6}},{t:this.shape_7,p:{y:659.7}},{t:this.shape_6,p:{y:659.7}},{t:this.shape_5,p:{y:655.7}},{t:this.shape_4,p:{y:658.3}},{t:this.shape_3,p:{y:661.2}},{t:this.shape_2,p:{y:663.5}},{t:this.shape_1,p:{y:665.7}},{t:this.shape,p:{y:667.6}}]},2).to({state:[{t:this.shape_61,p:{y:580.7}},{t:this.shape_60,p:{y:580.7}},{t:this.shape_59,p:{y:581.9}},{t:this.shape_58,p:{y:581.9}},{t:this.shape_57,p:{y:527.7}},{t:this.shape_56,p:{y:527.7}},{t:this.shape_55,p:{y:550.7}},{t:this.shape_54,p:{y:516.8}},{t:this.shape_53,p:{y:516.8}},{t:this.shape_63,p:{y:388}},{t:this.shape_62,p:{y:388}},{t:this.shape_52,p:{y:412.1}},{t:this.shape_51,p:{y:412.1}},{t:this.shape_50,p:{y:341.8}},{t:this.shape_49,p:{y:516.6}},{t:this.shape_48,p:{y:478.8}},{t:this.shape_47,p:{y:478.8}},{t:this.shape_46,p:{y:445.3}},{t:this.shape_45,p:{y:445.3}},{t:this.shape_44,p:{y:411}},{t:this.shape_42,p:{y:387.9}},{t:this.shape_41,p:{y:387.9}},{t:this.shape_43,p:{y:338.1}},{t:this.shape_40,p:{y:426.4}},{t:this.shape_39,p:{y:382.8}},{t:this.shape_38,p:{y:382.8}},{t:this.shape_37,p:{y:375.2}},{t:this.shape_36,p:{y:380.6}},{t:this.shape_35,p:{y:379.8}},{t:this.shape_34,p:{y:390.6}},{t:this.shape_33,p:{y:379.3}},{t:this.shape_32,p:{y:379.3}},{t:this.shape_31,p:{y:386.1}},{t:this.shape_30,p:{y:375.4}},{t:this.shape_29,p:{y:375.4}},{t:this.shape_28,p:{y:550.2}},{t:this.shape_27,p:{y:624.9}},{t:this.shape_26,p:{y:624.9}},{t:this.shape_25,p:{y:643.4}},{t:this.shape_24,p:{y:643.4}},{t:this.shape_23,p:{y:638}},{t:this.shape_22,p:{y:638}},{t:this.shape_21,p:{y:635.1}},{t:this.shape_20,p:{y:635.1}},{t:this.shape_19,p:{y:631.1}},{t:this.shape_18,p:{y:633.7}},{t:this.shape_17,p:{y:636.6}},{t:this.shape_16,p:{y:638.9}},{t:this.shape_15,p:{y:641}},{t:this.shape_14,p:{y:643}},{t:this.shape_13,p:{y:627.8}},{t:this.shape_12,p:{y:627.8}},{t:this.shape_11,p:{y:651.6}},{t:this.shape_10,p:{y:651.6}},{t:this.shape_9,p:{y:646.2}},{t:this.shape_8,p:{y:646.2}},{t:this.shape_7,p:{y:643.3}},{t:this.shape_6,p:{y:643.3}},{t:this.shape_5,p:{y:639.3}},{t:this.shape_4,p:{y:641.9}},{t:this.shape_3,p:{y:644.7}},{t:this.shape_2,p:{y:647}},{t:this.shape_1,p:{y:649.2}},{t:this.shape,p:{y:651.1}}]},2).to({state:[{t:this.shape_61,p:{y:597.1}},{t:this.shape_60,p:{y:597.1}},{t:this.shape_59,p:{y:598.4}},{t:this.shape_58,p:{y:598.4}},{t:this.shape_57,p:{y:544.2}},{t:this.shape_56,p:{y:544.2}},{t:this.shape_55,p:{y:567.1}},{t:this.shape_54,p:{y:533.2}},{t:this.shape_53,p:{y:533.2}},{t:this.shape_63,p:{y:404.4}},{t:this.shape_62,p:{y:404.4}},{t:this.shape_52,p:{y:428.5}},{t:this.shape_51,p:{y:428.5}},{t:this.shape_50,p:{y:358.2}},{t:this.shape_49,p:{y:533.1}},{t:this.shape_48,p:{y:495.3}},{t:this.shape_47,p:{y:495.3}},{t:this.shape_46,p:{y:461.8}},{t:this.shape_45,p:{y:461.8}},{t:this.shape_44,p:{y:427.4}},{t:this.shape_42,p:{y:404.3}},{t:this.shape_41,p:{y:404.3}},{t:this.shape_43,p:{y:354.5}},{t:this.shape_40,p:{y:442.8}},{t:this.shape_39,p:{y:399.3}},{t:this.shape_38,p:{y:399.3}},{t:this.shape_37,p:{y:391.6}},{t:this.shape_36,p:{y:397.1}},{t:this.shape_35,p:{y:396.2}},{t:this.shape_34,p:{y:407.1}},{t:this.shape_33,p:{y:395.8}},{t:this.shape_32,p:{y:395.8}},{t:this.shape_31,p:{y:402.6}},{t:this.shape_30,p:{y:391.8}},{t:this.shape_29,p:{y:391.8}},{t:this.shape_28,p:{y:566.7}},{t:this.shape_27,p:{y:641.3}},{t:this.shape_26,p:{y:641.3}},{t:this.shape_25,p:{y:659.9}},{t:this.shape_24,p:{y:659.9}},{t:this.shape_23,p:{y:654.5}},{t:this.shape_22,p:{y:654.5}},{t:this.shape_21,p:{y:651.6}},{t:this.shape_20,p:{y:651.6}},{t:this.shape_19,p:{y:647.6}},{t:this.shape_18,p:{y:650.2}},{t:this.shape_17,p:{y:653}},{t:this.shape_16,p:{y:655.3}},{t:this.shape_15,p:{y:657.5}},{t:this.shape_14,p:{y:659.4}},{t:this.shape_13,p:{y:644.2}},{t:this.shape_12,p:{y:644.2}},{t:this.shape_11,p:{y:668}},{t:this.shape_10,p:{y:668}},{t:this.shape_9,p:{y:662.6}},{t:this.shape_8,p:{y:662.6}},{t:this.shape_7,p:{y:659.7}},{t:this.shape_6,p:{y:659.7}},{t:this.shape_5,p:{y:655.7}},{t:this.shape_4,p:{y:658.3}},{t:this.shape_3,p:{y:661.2}},{t:this.shape_2,p:{y:663.5}},{t:this.shape_1,p:{y:665.7}},{t:this.shape,p:{y:667.6}}]},2).to({state:[{t:this.shape_61,p:{y:608}},{t:this.shape_60,p:{y:608}},{t:this.shape_59,p:{y:609.2}},{t:this.shape_58,p:{y:609.2}},{t:this.shape_57,p:{y:555}},{t:this.shape_56,p:{y:555}},{t:this.shape_55,p:{y:578}},{t:this.shape_54,p:{y:544.1}},{t:this.shape_53,p:{y:544.1}},{t:this.shape_63,p:{y:415.3}},{t:this.shape_62,p:{y:415.3}},{t:this.shape_52,p:{y:439.4}},{t:this.shape_51,p:{y:439.4}},{t:this.shape_50,p:{y:369.1}},{t:this.shape_49,p:{y:543.9}},{t:this.shape_48,p:{y:506.1}},{t:this.shape_47,p:{y:506.1}},{t:this.shape_46,p:{y:472.6}},{t:this.shape_45,p:{y:472.6}},{t:this.shape_44,p:{y:438.3}},{t:this.shape_42,p:{y:415.2}},{t:this.shape_41,p:{y:415.2}},{t:this.shape_43,p:{y:365.4}},{t:this.shape_40,p:{y:453.7}},{t:this.shape_39,p:{y:410.1}},{t:this.shape_38,p:{y:410.1}},{t:this.shape_37,p:{y:402.5}},{t:this.shape_36,p:{y:407.9}},{t:this.shape_35,p:{y:407.1}},{t:this.shape_34,p:{y:417.9}},{t:this.shape_33,p:{y:406.6}},{t:this.shape_32,p:{y:406.6}},{t:this.shape_31,p:{y:413.4}},{t:this.shape_30,p:{y:402.7}},{t:this.shape_29,p:{y:402.7}},{t:this.shape_28,p:{y:577.5}},{t:this.shape_27,p:{y:652.2}},{t:this.shape_26,p:{y:652.2}},{t:this.shape_25,p:{y:670.7}},{t:this.shape_24,p:{y:670.7}},{t:this.shape_23,p:{y:665.3}},{t:this.shape_22,p:{y:665.3}},{t:this.shape_21,p:{y:662.4}},{t:this.shape_20,p:{y:662.4}},{t:this.shape_19,p:{y:658.4}},{t:this.shape_18,p:{y:661}},{t:this.shape_17,p:{y:663.9}},{t:this.shape_16,p:{y:666.2}},{t:this.shape_15,p:{y:668.3}},{t:this.shape_14,p:{y:670.3}},{t:this.shape_13,p:{y:655.1}},{t:this.shape_12,p:{y:655.1}},{t:this.shape_11,p:{y:678.9}},{t:this.shape_10,p:{y:678.9}},{t:this.shape_9,p:{y:673.5}},{t:this.shape_8,p:{y:673.5}},{t:this.shape_7,p:{y:670.6}},{t:this.shape_6,p:{y:670.6}},{t:this.shape_5,p:{y:666.6}},{t:this.shape_4,p:{y:669.2}},{t:this.shape_3,p:{y:672}},{t:this.shape_2,p:{y:674.3}},{t:this.shape_1,p:{y:676.5}},{t:this.shape,p:{y:678.4}}]},2).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},2).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_5}]},5).wait(1));

	// Layer_3
	this.instance_6 = new lib.ball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1161.8,321.4,0.825,0.825,0,0,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(1).to({regX:29.7,regY:29.7,x:1112.5,y:324.5},0).wait(1).to({x:1086.9,y:304},0).wait(1).to({x:1060.4,y:284.8},0).wait(1).to({x:1033,y:267},0).wait(1).to({x:1004.5,y:250.8},0).wait(1).to({x:974.9,y:236.6},0).wait(1).to({x:944.4,y:224.9},0).wait(1).to({x:912.9,y:215.8},0).wait(1).to({x:880.7,y:210.1},0).wait(1).to({x:848.1,y:207.9},0).wait(1).to({x:815.4,y:209.5},0).wait(1).to({x:783.1,y:215.1},0).wait(1).to({x:751.8,y:224.4},0).wait(1).to({x:721.6,y:237.2},0).wait(1).to({x:692.9,y:252.9},0).wait(1).to({x:665.7,y:271.1},0).wait(1).to({x:640,y:291.5},0).wait(1).to({regX:0,regY:0,x:664.5,y:266.7},0).wait(1).to({regX:29.7,regY:29.7,x:640,y:333.2},0).wait(1).to({y:375.2},0).wait(1).to({y:417.2},0).wait(1).to({y:459.2},0).wait(1).to({y:501.2},0).wait(1).to({regX:0,regY:0,x:664.5,y:476.7},0).wait(4));

	// Layer_4
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0)").s().p("EhgrA4QQjUAAAAjcMAAAhpnQAAjcDUAAMDBXAAAQDUAAAADcMAAABpnQAADcjUAAg");
	this.shape_185.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_185).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.timeBactive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.player2time = new lib.P1stopTimeBoard();
	this.player2time.name = "player2time";
	this.player2time.parent = this;
	this.player2time.setTransform(321.6,-67.6,1,1,0,0,0,60.6,62.2);

	this.timeline.addTween(cjs.Tween.get(this.player2time).wait(1).to({regX:60.7,x:321.7},0).wait(37).to({y:-58.3},0).wait(1).to({y:-49.1},0).wait(1).to({y:-39.8},0).wait(1).to({y:-30.5},0).wait(1).to({y:-21.2},0).wait(1).to({y:-12},0).wait(1).to({y:-2.7},0).wait(1).to({y:6.6},0).wait(1).to({y:15.9},0).wait(1).to({y:25.1},0).wait(1).to({y:34.4},0).wait(1).to({y:43.7},0).wait(1).to({y:53},0).wait(1).to({y:62.2},0).wait(4).to({y:52.3},0).wait(1).to({y:42.3},0).wait(1).to({y:32.3},0).wait(1).to({y:22.3},0).wait(1).to({y:12.3},0).wait(1).to({y:2.3},0).wait(1).to({y:-7.7},0).wait(1).to({y:-17.7},0).wait(1).to({y:-27.6},0).wait(1).to({y:-37.6},0).wait(1).to({y:-47.6},0).wait(1).to({y:-57.6},0).wait(1).to({y:-67.6},0).wait(6));

	// Layer_4
	this.player1time = new lib.P1stopTimeBoard();
	this.player1time.name = "player1time";
	this.player1time.parent = this;
	this.player1time.setTransform(957.8,-67.6,1,1,0,0,0,60.6,62.2);

	this.timeline.addTween(cjs.Tween.get(this.player1time).wait(1).to({regX:60.7,x:957.9,y:-58.3},0).wait(1).to({y:-49.1},0).wait(1).to({y:-39.8},0).wait(1).to({y:-30.5},0).wait(1).to({y:-21.2},0).wait(1).to({y:-12},0).wait(1).to({y:-2.7},0).wait(1).to({y:6.6},0).wait(1).to({y:15.9},0).wait(1).to({y:25.1},0).wait(1).to({y:34.4},0).wait(1).to({y:43.7},0).wait(1).to({y:53},0).wait(1).to({y:62.2},0).wait(4).to({y:53},0).wait(1).to({y:43.7},0).wait(1).to({y:34.4},0).wait(1).to({y:25.1},0).wait(1).to({y:15.9},0).wait(1).to({y:6.6},0).wait(1).to({y:-2.7},0).wait(1).to({y:-12},0).wait(1).to({y:-21.2},0).wait(1).to({y:-30.5},0).wait(1).to({y:-39.8},0).wait(1).to({y:-49.1},0).wait(1).to({y:-58.3},0).wait(1).to({y:-67.6},0).wait(42));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Ehf8A4QQkDAAAAk7MAAAhmoQAAk8EDAAMC/5AAAQEDAAAAE8MAAABmoQAAE7kDAAg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-130.3,1280,850.4);


(lib.namesIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.startBTN = new lib.startBTN();
	this.startBTN.name = "startBTN";
	this.startBTN.parent = this;
	this.startBTN.setTransform(640.5,499.8,0.849,0.849,0,0,0,0,-103.7);
	new cjs.ButtonHelper(this.startBTN, 0, 1, 2, false, new lib.startBTN(), 3);

	this.player1name = new lib.input();
	this.player1name.name = "player1name";
	this.player1name.parent = this;
	this.player1name.setTransform(909.1,396.2,1,1,0,0,0,102,24.1);

	this.player2name = new lib.an_TextInput({'id': 'player2name', 'value':'הכנס', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.player2name.setTransform(329,396.4,1.873,1.361,0,0,0,38.2,17.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.5,1,1).p("AvsjzIfZAAIAAHnI/ZAAg");
	this.shape.setTransform(923.6,395.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDEDED").s().p("AvsD0IAAnnIfZAAIAAHng");
	this.shape_1.setTransform(923.6,395.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("AvsjzIfZAAIAAHnI/ZAAg");
	this.shape_2.setTransform(358.2,395.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDED").s().p("AvsD0IAAnnIfZAAIAAHng");
	this.shape_3.setTransform(358.2,395.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0)").s().p("EhgRA4MQjuAAAAk1MAAAhmtQAAk1DuAAMDAjAAAQDuAAAAE1MAAABmtQAAE1juAAg");
	this.shape_4.setTransform(640,359.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.player2name},{t:this.player1name},{t:this.startBTN}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.namesIN, new cjs.Rectangle(0,0,1280,719.2), null);


// stage content:
(lib.BasketballGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס. עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0
		var mychoice = 0;
		var stage = this;
		
		//המערך של כל המשחק
		var myGame;
		var TempBamaSaver;
		var theRemovedBall = -1; //משמש ללולאת הזזת הכדור מהמסיח הנבחר
		
		// קליטת שמות השחקנים
		var name1 = "";
		var name2 = "";
		var player; //משתנה שמגדיר 1 או 2, התור של מי לשחק
		
		// זמן משחק מצטבר של המחקנים
		var P1TotalTime = 0;
		var P2TotalTime = 0;
		
		// האינטרוול של הטיימר
		// P_timer = המשתנה של האינטרוול, ממוקם בסקריטפ הגלובלי של הגלובלי
		var seconds = 60;
		
		// סימבולים
		var mainStage = new lib.mainStage(); //מסך המשחק המרכזי
		mainStage.name = "mainStage";
		
		var P1stopTimeBoard = new lib.P1stopTimeBoard(); //לוח הזמן של שחקן 1
		P1stopTimeBoard.x = 897.15;
		P1stopTimeBoard.y = 0;
		P1stopTimeBoard.name = "P1stopTimeBoard";
		
		var P2stopTimeBoard = new lib.P2stopTimeBoard(); //לוח הזמן של שחקן 2
		P2stopTimeBoard.x = 261;
		P2stopTimeBoard.y = 0;
		P2stopTimeBoard.name = "P2stopTimeBoard";
		
		var stop_btn1 = new lib.stop_btn(); //כפתור עצירת הזמן של שחקן 1
		stop_btn1.name = "stop_btn1";
		P1stopTimeBoard.addChild(stop_btn1);
		
		var stop_btn2 = new lib.stop_btn(); //כפתור עצירת הזמן של שחקן 2
		stop_btn2.name = "stop_btn2";
		P2stopTimeBoard.addChild(stop_btn2);
		
		var P1time = new createjs.Text(); //תיבת הטקסט המכילה את הזמן של שחקן 1
		P1time.x = 60.78;
		P1time.y = 58.5;
		P1time.color = "#FFFF00";
		P1time.font = "30px Arial";
		P1time.textAlign = "center";
		P1time.name = "P1time";
		
		var P2time = new createjs.Text(); //תיבת הטקסט המכילה את הזמן של שחקן 2
		P2time.x = 60.78;
		P2time.y = 58.5;
		P2time.color = "#FFFF00";
		P2time.font = "30px Arial";
		P2time.textAlign = "center";
		P2time.name = "P2time";
		
		var picGame = new lib.picGame(); //מסך בחירת נושא המשחק
		picGame.name = "picGame";
		stage.addChild(picGame);
		
		var forcombo = new lib.forcombo();
		forcombo.x = 640;
		forcombo.y = 395;
		forcombo.startbtn.alpha = 0.5; //הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
		forcombo.name = "forcombo"; //הגדרת שם לקומבו
		stage.addChild(forcombo);
		
		var namez = new lib.names(); //מסך רישום שמות השחקנים
		namez.name = "signIn";
		
		var namesIN = new lib.namesIN(); //האינ-פוט בו מזינים את שמות השחקנים לצורך קליטה במערכת
		namesIN.name = "namesIN";
		
		var stopGame = new lib.stopGame(); //מסך עצירת המשחק
		stopGame.name = "stopGame";
		
		var stopName1 = new createjs.Text(); //תיבת הטקסט המכילה את שמו של שחקן 1 שעצר את המשחק
		stopName1.x = 509;
		stopName1.y = 279.55;
		stopName1.color = "#000000";
		stopName1.font = "30px Arial";
		stopName1.name = "stopName1";
		
		var stopName2 = new createjs.Text(); //תיבת הטקסט המכילה את שמו של שחקן 2 שעצר את המשחק
		stopName2.x = 509;
		stopName2.y = 279.55;
		stopName2.color = "#000000";
		stopName2.font = "30px Arial";
		stopName2.name = "stopName2";
		
		var time_Out = new lib.timeOut(); //מסך המציג שנגמר הזמן
		time_Out.name = "time_Out";
		
		var basket = new lib.basket();
		basket.x = 640;
		basket.y = 324.20;
		basket.name = "basket";
		
		var checkBTN = new lib.checkBTN(); //בדוק תשובה
		checkBTN.x = 640;
		checkBTN.y = 525;
		mainStage.name = "checkBTN";
		checkBTN.addEventListener("click", checkAnswer);
		
		var nextBTN = new lib.nextBTN(); //המשך לשחקן הבא
		nextBTN.x = 640;
		nextBTN.y = 500;
		nextBTN.name = "nextBTN";
		nextBTN.addEventListener("click", nextAction); //לחיצה על כפתור "המשך לשחקן הבא" מפעילה תמיד את פונקציה זו
		
		var glassA; //סימבול זכוכית מגדלת למסיחים
		var glassQ; //סימבול זכוכית מגדלת לשאלה
		
		var score = new lib.score();
		score.name = "score";
		
		//-----------------------------------------------------סימבולים שחקנים
		var player1ready = new lib.player1ready(); //שחקן 1 לפני בחירת מסיח
		player1ready.x = 1098.10;
		player1ready.y = 457.65;
		mainStage.name = "player1ready";
		
		var player1ball = new lib.player1ball(); //שחקן 1 עם כדור
		player1ball.x = 1108.80;
		player1ball.y = 457.65;
		player1ball.name = "player1ball";
		
		var player1in = new lib.player1in(); //שחקן 1 אנימציית קליעה
		player1in.name = "player1in";
		
		var player1out = new lib.player1out(); //שחקן 1 אנימציית פספוס
		player1out.name = "player1out";
		
		var player1NotPlaying = new lib.player1NotPlaying(); //שחקן 1 פסיבי
		player1NotPlaying.x = 1093;
		player1NotPlaying.y = 0;
		player1NotPlaying.name = "player1NotPlaying";
		//------------------------------------------------------
		var player2ready = new lib.player2ready(); //שחקן 2 לפני בחירת מסיח
		player2ready.x = 6;
		player2ready.y = 457.65;
		player2ready.name = "player2ready";
		
		var player2ball = new lib.player2ball(); //שחקן 2 עם כדור
		player2ball.x = 17;
		player2ball.y = 457.65;
		player2ball.name = "player2ball";
		
		var player2in = new lib.player2in(); //שחקן 2 אנימציית קליעה
		player2in.name = "player2in";
		
		var player2out = new lib.player2out(); //שחקן 2 אנימציית פספוס
		player2out.name = "player2out";
		
		var player2NotPlaying = new lib.player2NotPlaying(); //שחקן 2 פסיבי
		player2NotPlaying.name = "player2NotPlaying";
		//--------------------------------------------------------------
		
		var answered = new Array(12); //מערך של 12 שאלות
		answered.fill(false); //בתחילת המשחק כל התאים במערך הם פולס.
		//false = שאלה שלא נענתה נכונה/ שלא נענתה בכלל  וצריך לחזור עליה
		//true = שאלה שנענתה נכונה ולא חוזרים עליה שוב במשחק
		var randQuestions;
		var Answer;
		var RemoveBall;
		var bama = []; //הגדרה של מערך של במות
		var bamaText;
		var ball = []; //הגדרה של מערך של כדורים
		var canChangeAnswer = true;
		var gamestage; //משתמש כקונטיינר, במה נוספת שעליה נשים את המשתנים הרלוונטים למשחק, ואותם נוכל לאפס בהמשך
		var newgame = true; //אם זה משחק חדש, זה יגריל את תור השחקן בהתחלה (פעם אחת)
		var player1ball_Appears = false; //משתנה של נכון / נכון אשר משמש לבדוק אם כבר הופיע השחקן המחזיר כדור בעת לחיצה על מסיח. אנחנו לא רוצים שהשחקן עם הכדור יופיע הרבה פעמים בכל לחיצה על מסיח, רק פעם אחת
		var player2ball_Appears = false;
		var checkBTN_Appears = false; // גם את הכפתור של "בדוק תשובה" אנחנו רוצים להפעיל רק פעם אחת ולכן נגדיר משתנה של נכון /לא נכון אשר יעזור לנו לשים על הבמה אתת הכפתור רק פעם אחת
		
		var picture; //תמונות של המסיחים
		var imgPicture; //תמונה של השאלה
		var allPictures = []; //מערך המכיל את כל התמונות של המסיחים ומיקומם
		var chosenBamaNum;
		//.......................................... סימבולים ספירת שאלות ושגיאות
		var player1 = []; //מערך של מספר שאלה ומספר הטעויות של שחקן 1
		var player1Count = 0;
		var player2 = []; //מערך של מספר שאלה ומספר הטעויות של שחקן 2
		var player2Count = 0;
		//-------------------------------------------------------------------
		var totalScore1; //חישוב ציון כולל לשחקן 1, מתאפס בכל משחק בתוך הפונקציה
		var totalScore2; // חישוב ציון כולל לשחקן 2, מתאפס בכל משחק בתוך הפונקציה
		var scoreArray1 = new Array(player1.length); //מערך עם כמות השאלות שנענו על ידי השחקן 1, בתוכו יהיו הציונים של כל פריט עליו ענה שחקן 1
		var scoreArray2 = new Array(player2.length); //מערך עם כמות השאלות שנענו על ידי השחקן 2, בתוכו יהיו הציונים של כל פריט שענה עליהן שחקן 2
		var player1Miss; // חישוב מספר השגיאות לשחקן 1, מתאפס בתוך הפונקציה
		var player2Miss; // חישוב מספר שגיאות לשחקן 2, מתאםס בתוך הפונקציה
		//-------------------------------------------------------------------
		
		//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			//שמירת הערך שנבחר בקומבו
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.5;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
		}
		
		// לחיצה על בחר , פסיכו זה למשחק של פסיכולוגיה,והמשחק השני הוא פיתו אתרי אינטרנט. 
		function fl_ClickToPosition() {
			if (mychoice == 1) {
				psycho();
			} else if (mychoice == 2) {
				HTML();
			}
		}
		
		function psycho() {
			//תוכן המשחק הראשון
			myGame = [
				[ //שאלה 1
					["כיצד בא לידי ביטוי העיקרון 'העברה של למידה' לנהיגה ברכב?", false, "noimg", ""],
					[
						["נהיגה במשאית", true, "text", 0],
						["נהיגה מהירה מהממוצע", false, "text", 0],
						["העברת הילוכים", false, "text", 0],
						["נהיגה ממושכת", false, "text", 0]
					]
				],
				[ //שאלה 2
					["מהי מטרת הלמידה הבסיסית ביותר על פי הטקסונומיה של בלום?", false, "noimg", ""],
					[
						["זכירה", true, "text", 0],
						["יצירה", false, "text", 0],
						["ניתוח", false, "text", 0],
						["הבנה", false, "text", 0],
						["יישום", false, "text", 0],
						["הערכה", false, "text", 0]
					]
				],
				[ //שאלה 3
					["על פי סכמות המידע, מהו הפירוש של 'פרוצדורות'?", false, "noimg", ""],
					[
						["שורה של צעדים שביצועם המדויק מבטיח השגת מטרה", true, "text", 0],
						["כללים או חוקים המסבירים חוקיות בעולם", false, "text", 0],
						["פריטי מידע טריוויאליים וקונקרטיים", false, "text", 0]
					]
				],
				[ //שאלה 4
					["על פי עקרונות הגשטאלט, איזה עיקרון מתאים לתמונה זו?", false, "img", lib.people],
					[
						["עיקרון הדמות רקע", true, "text", 0],
						["עיקרון הדמיון", false, "text", 0],
						["עיקרון הפשטות", false, "text", 0],
						["הבנה", false, "text", 0],
						["עיקרון ההמשכיות", false, "text", 0]
					]
				],
				[ //שאלה 5
					["מהו הרצף התפיסתי של מידע מהסביבה?", false, "noimg", ""],
					[
						["חישה, תפיסה וקוגניציה", true, "text", 0],
						["חישה, תפיסה וזיכרון", false, "text", 0],
						["התבוננות, קוגניציה והכלה", false, "text", 0],
						["קשב, חישה ותפיסה", false, "text", 0]
					]
				],
				[ //שאלה 6
					["איזו תופעה מסמל המונח 'אפקט מסיבת הקוקטייל'?", false, "noimg", ""],
					[
						["אדם המפנה קשב לגירוי שמיעתי מסוים תוך סינון רעשי רקע", true, "text", 0],
						["אדם המפנה קשב לכל הגירויים השמיעתיים בו זמנית", false, "text", 0],
						["אדם אשר לא מפנה קשב לגירויים שמיעתיים כלל", false, "text", 0]
					]
				],
				[ //שאלה 7
					["איזה סוג מיומנות מתאים למיומנות של ביצוע תרגילי כפל? ", false, "noimg", ""],
					[
						["מיומנות קוגניטיבית", true, "text", 0],
						["מיומנות מוטורית", false, "text", 0],
						["מיומנות תוך אישית", false, "text", 0],
						["מיומנות בין אישית", false, "text", 0]
					]
				],
				[ //שאלה 8
					["כדי שהכלב שלי יגיע לקערת האוכל בהישמע צליל פעמון, בתחילה אצלצל בפעמון עם הבאת האוכל. האוכל הינו- ", false, "noimg", ""],
					[
						["גירוי בלתי מותנה", true, "text", 0],
						["גירוי מותנה", false, "text", 0]
					]
				],
				[ //שאלה 9
					["איזה סוג מיומנות מתאים למיומנות של מתן שירות טלפוני?", false, "noimg", ""],
					[
						["מיומנות בין אישית", true, "text", 0],
						["מיומנות מוטורית", false, "text", 0],
						["מיומנות תוך אישית", false, "text", 0],
						["מיומנות קוגניטיבית", false, "text", 0]
					]
				],
				[ //שאלה 10
					["מה מסמלת האות הראשונה במודל ה- ARCS? ", false, "noimg", ""],
					[
						["Attention תשומת לב", true, "text", 0],
						["Assessment הערכה", false, "text", 0],
						["Ability  יכולת", false, "text", 0],
						["Agreement הסכמה", false, "text", 0]
					]
				],
				[ //שאלה 11
					["על פי הגישה ההוליסטית לתפיסת צורה, כיצד יהיה כדאי לייצג את האות H?", false, "noimg", ""],
					[
						[lib.HfromR, true, "img", 0],
						[lib.RfromH, false, "img", 0],
						["אף אחת מהן אינה מתאימה", false, "text", 0]
					]
				],
				[ //שאלה 12
					["אדם אשר קיבל קלקול קיבה כשאכל ברוקולי בילדותו ומאז הפסיק לאכול מאכלים ירוקים, ביצע תהליך של למידת-", false, "noimg", ""],
					[
						["הכללה", true, "text", 0],
						["הבחנה", false, "text", 0],
						["תובנה", false, "text", 0],
						["פירוט", false, "text", 0]
					]
				]
			];
		
			names(); // קריאה לרישום שמות השחקנים
		}
		
		function HTML() {
			//יש להכניס אל המערך את התוכן של המשחק השני
			myGame = [
				[ //שאלה 1
					["כיצד נכתוב תג של ירידת שורה?", false, "noimg", ""],
					[
						["<br/>", true, "text", 0],
						["<a>", false, "text", 0],
						["<li>", false, "text", 0],
						["<hr/>", false, "text", 0]
					]
				],
				[ //שאלה 2
					["באתר שאני בונה ישנו גרף שמטרתו להוסיף על התוכן הקיים, ובלעדיו התוכן לא ייפגע. באיזה תג עוטף אשתמש?", false, "noimg", ""],
					[
						["Figure", true, "text", 0],
						["Footer", false, "text", 0],
						["Header", false, "text", 0],
						["Aside", false, "text", 0]
					]
				],
				[ //שאלה 3
					["בכתבה שבה מספרים על מניעת נזקים בעציצים מצורפת התמונה הבאה, לאיזה קטגוריה שייכת התמונה?", false, "img", lib.Q_plant],
					[
						["תמונת אוירה", true, "text", 0],
						["תמונת תוכן", false, "text", 0],
		
					]
				],
				[ //שאלה 4
					["כיצד תראה האופציה-  text-decoration: underline?", false, "noimg", ""],
					[
						[lib.A_downLine, true, "img", 0],
						[lib.A_noLine, false, "img", 0],
						[lib.A_onLine, false, "img", 0],
						[lib.A_overLine, false, "img", 0],
						["אף אחת מהאפשרויות ", false, "text", 0],
						["כולן מתאימות להגדרה זו", false, "text", 0]
					]
				],
				[ //שאלה 5
					["למה משמשת האופציה - list-style-type ?", false, "noimg", ""],
					[
						["הגדרת התבליט של פריט ברשימה", true, "text", 0],
						["הגדרת סגנון כתב הרשימה", false, "text", 0],
						["הגדרת אופן פתיחת הרשימה", false, "text", 0],
					]
				],
				[ //שאלה 6
					["אם נרצה שאלמנט מסוים יישאר קבוע גם בגלילת הדף, איזו אופציה נגדיר לו?", false, "noimg", ""],
					[
						["position: fixed", true, "text", 0],
						["position: static", false, "text", 0],
						["position: relative", false, "text", 0],
						["position: absolute", false, "text", 0],
					]
				],
				[ //שאלה 7
					["איזו הגדרה מתאימה לתמונה שבתוך הכתבה המצורפת?", false, "img", lib.Q_crearNone],
					[
						["clear: none", true, "text", 0],
						["clear: both", false, "text", 0],
						["clear: right", false, "text", 0],
						["clear: left", false, "text", 0],
					]
				],
				[ //שאלה 8
					["איזה מאפיין מתאים לשימוש ב- Framework?", false, "noimg", ""],
					[
						["מאיץ את תהליך הפיתוח", true, "text", 0],
						["מפתח יצירתיות וחשיבה", false, "text", 0],
						["מאפשר גמישות ביצירת תבניות", false, "text", 0],
						["מתאים בעיקר לעבודה יחידנית", false, "text", 0],
					]
				],
				[ //שאלה 9
					["מהו הסדר המתאים לרשימת תפריט ניווט?", false, "noimg", ""],
					[
						["nav ul li", true, "text", 0],
						["nav li ul", false, "text", 0],
						["ul nav li", false, "text", 0],
						["ol nav li", false, "text", 0],
					]
				],
				[ //שאלה 10
					["כיצד אגדיר אלמנט כך שיתמקם על כל השורה עליה הוא נמצא?", false, "noimg", ""],
					[
						["Display: block", true, "text", 0],
						["Display: inline", false, "text", 0],
						["Display: none", false, "text", 0],
						["Display: inline – block", false, "text", 0],
					]
				],
				[ //שאלה 11
					["כאשר ארצה להוסיף שוליים בין המסגרת לשולי הדף, אגדיר את האופציה של-", false, "noimg", ""],
					[
						["Margin", true, "text", 0],
						["Border", false, "text", 0],
						["Padding", false, "text", 0],
						["Width", false, "text", 0],
					]
				],
				[ //שאלה 12
					["איזו דוגמה מתאימה ביותר להיות בתוכן של Aside?", false, "noimg", ""],
					[
						["'אם התעניינת במתכון לפיצה, יכול לעניין אותך גם מתכון לפסטה'", true, "text", 0],
						["'לפניך גרף הממחיש בדיוק רב את הנתונים שבכתבה'", false, "text", 0],
						["'לחץ כאן לכתבות חדשות ופופולאריות שפורסמו באתר שלנו'", false, "text", 0],
					]
				],
			];
		
			names(); // קריאה לרישום שמות השחקנים
		}
		//--------------------------------------------------------------------
		
		function names() { // קריאה לרישום שמות השחקנים
			stage.removeChild(stage.getChildByName("forcombo")); //הסרת הקומבו
			stage.removeChild(stage.getChildByName("picGame")); // הסרת מסך בחירת משחק
			stage.addChild(namez); // הוספת מסך רישום השחקנים
			stage.addChild(namesIN); //הוספה לבמה של תיבת האינפוט
			//הגדרות עבור כפתור 
			namesIN.startBTN.alpha = 0.3;
			// ארוע פוקוס יעלים את הטקסט הכנס לא חובה
			$("#dom_overlay_container").on("focus", "#player1name", myinput_focus1);
			$("#dom_overlay_container").on("focus", "#player2name", myinput_focus2);
		
			//בעת שינוי ערך בקומבו
			function myinput_focus1(evt) {
				if (document.getElementById("player1name").value == "הכנס") {
					document.getElementById("player1name").value = ""
				}
			}
			function myinput_focus2(evt) {
				if (document.getElementById("player2name").value == "הכנס") {
					document.getElementById("player2name").value = ""
				}
			}
			//ארוע לחיצה על מקש 
			$("#dom_overlay_container").on("keyup", "#player1name", myinput_change);
			$("#dom_overlay_container").on("keyup", "#player2name", myinput_change);
		
			function myinput_change(evt) {
				//אם הערך לא השתנה
				if (document.getElementById("player1name").value == "הכנס" || document.getElementById("player2name").value == "הכנס") {
					//ניטרול כפתור "בחר
					namesIN.startBTN.alpha = 0.3;
					namesIN.startBTN.removeEventListener("click", fl_ClickToPosition);
				} else {
					//אחרי שהתיבה לא ריקה נאפשר לחיצה
					namesIN.startBTN.alpha = 1;
					namesIN.startBTN.addEventListener("click", fl_ClickToPosition);
				}
			}
		
			function fl_ClickToPosition() { //לחיצה על התחל תקלוט את השמות כמשתנים, תוריד את המסכים ותעביר למשחק עצמו
				name1 = document.getElementById("player1name").value;
				name2 = document.getElementById("player2name").value;
				//console.log(name1);
				//console.log(name2);
				//מסתיר את האינפוט והכפתור
				stage.removeChild(namesIN)
				stage.removeChild(namez)
		
				startGame();
				//$("#dom_overlay_container").css("display", "none");
			}
		}
		
		function startGame() {
			stage.addChild(mainStage); // הוספת מסך המשחק הראשי
		
			var P1_name = new createjs.Text(); // יצירת תיבת טקסט כדי להזין את שמות השחקנים
			P1_name.x = 1186.5;
			P1_name.y = 56.2;
			P1_name.textAlign = "center";
			P1_name.color = "#FFFFFF";
			P1_name.font = "35px Arial";
			P1_name.fontWeight = "Bold";
			P1_name.name = "P1_name";
			mainStage.addChild(P1_name);
		
			var P2_name = new createjs.Text();
			P2_name.x = 93.5;
			P2_name.y = 56.2;
			P2_name.textAlign = "center";
			P2_name.color = "#FFFFFF";
			P2_name.font = "35px Arial";
			P2_name.fontWeight = "Bold";
			P2_name.name = "P2_name";
			mainStage.addChild(P2_name);
		
			// הזנת שמות השחקנים ע"ג המסך הראשי
			mainStage.getChildByName("P1_name").text = name1;
			mainStage.getChildByName("P2_name").text = name2;
		
			P_timer = setInterval(myTimer, 1000);
			createQuestion();
		}
		
		//--------------------------------------------------------------------
		
		function createQuestion() { //פונקציה של יצירת שאלה חדשה
			gamestage = new createjs.Container(); //הגדרת במה  חדשה שעליה כל המשתנים של המשחק, לצורך איפוס הבמה בהמשך
			stage.addChild(gamestage);
			timeStop = false;
		
			canChangeAnswer = true; //משתנה של נכון/לא נכון שמגדיר האם השחקן יכול לשנות את תשובתו (ללחוץ על המסיחים) או לא. בשלב זה הוא עדיין יכול
			if (newgame == true) { //משתנה של נכון/לא נכון שמגדיר אם אנחנו במשחק חדש או לא
				player = Math.round(Math.random()) + 1; // הגרלת מספר 1 או 2 בשביל להגריל מי ישחק קודם, נוצר פעם אחת רק בתחילת המשחק
				newgame = false; //הופכים אותו לפולס על מנת שהרנדומליות תקרה פעם אחת בתחילת משחק
			}
		
			//הוספת השאלה
			randQuestions = parseInt(Math.random() * (myGame.length)); //שאלה נוצרת בצורה רנדומלית מתוך המערך
			while (answered[randQuestions] == true) { //אם המשנה "אנסוורד" מוגדר כנכון- זה אומר שהשאלה כבר נענתה נכון ולכן תוגרל שאלה חדשה
				randQuestions = parseInt(Math.random() * (myGame.length));
			}
		
			if (player == 1) { //אם תורו של שחקן 1
				var qcount1 = 0;
				var qExists = false;
				for (i = 0; i < player1.length; i++) { //האם השאלה החדשה שונה ממה שכבר הוגרל, שונה מהשאלות שהשחקן הזה כבר ענה עליהן
					if (player1[i][0] != randQuestions) { //בכל פעם תוסיף 1 וכך תעבור על המערך ותבדוק אם השאלה שהוגרלה שונה מהמספרי שאלות שיש במערך
						qcount1++; //סופר כמה שאלות שונות מהשאלה שהגרלתי עכשיו, זאת אומרת, כמות השאלות שיש לי במערך כרגע (שנשאלו)
					} else {
						qExists = true
					}
				}
				//if (qcount1 == player1.length || player1Count == 0) { //player1.length = אורך המערך של השאלות שהוא כבר קיבל, כמות השאלות שהשחקן קיבל
				//qcount1 = כמה שאלות יש לי במערך
				if (qExists == false) {
					player1.push([randQuestions, 0]); //הכנסה של שני התאים למערך, תא אחד שיש בו את מספר השאלה שעכשיו הוגרלה, ותא שני של מספר הטעויות, שישתנה בהמשך הקוד וכרגע הוא אפס
					player1Count++;
				}
		
				gamestage.addChild(player1ready); //הוספת דמות 1- הימנית, מחכה לבחירת השחקן
				gamestage.addChild(player2NotPlaying); //שחקן 2 לא משחק
				P1countdown(); //קריאה לפונקציית הזמן של שחקן 1 - טיימר
		
			} else { //אם תורו של שחקן 2
				var qcount2 = 0;
				var qExists = false;
				for (i = 0; i < player2.length; i++) { //האם השאלה החדשה שונה ממה שכבר הוגרל, שונה מהשאלות שהשחקן הזה כבר ענה עליהן
					if (player2[i][0] != randQuestions) {
						qcount2++; //סופר כמה שאלות שונות מהשאלה שהגרלתי עכשיו
					} else {
						qExists = true
					}
				}
				//if (qcount2 == player2.length || player2Count == 0) { //אם כל השאלות שהיו כבר, שונות מהשאלה החדשה
				if (qExists == false) {
					player2.push([randQuestions, 0]);
					player2Count++;
				}
				//console.log(player2);
		
				gamestage.addChild(player1NotPlaying); //שחקן 1 לא משחק
				gamestage.addChild(player2ready); //הוספת דמות 2- השמאלית, מחכה לבחירת השחקן
				P2countdown(); //קריאה לפונקציית הזמן של שחקן 2 - טיימר
			}
		
			var textQuestion = new createjs.Text(); //ההגדרות של טקסט השאלה
			gamestage.addChild(textQuestion);
			textQuestion.color = "black";
			textQuestion.text = myGame[randQuestions][0][0]
			textQuestion.font = "20px Arial";
			textQuestion.textAlign = "center";
		
			if (myGame[randQuestions][0][2] == "noimg") { //אם בשאלה אין תמונה מקם לי אותה באופן הבא
				textQuestion.x = 640;
				textQuestion.y = 50;
				textQuestion.lineWidth = 250;
			} else { //אם יש תמונה מקם אותה באופן הבא וכמו כן הוסף את התמונה וזכוכית מגדלת עבורה
				textQuestion.x = 690;
				textQuestion.y = 45;
				textQuestion.lineWidth = 180;
		
				imgPicture = new(myGame[randQuestions][0][3]); //הוספת התמונה של השאלה למשחק
				imgPicture.x = 505.3;
				imgPicture.y = 50;
				imgPicture.name = "imgPicture";
				gamestage.addChild(imgPicture);
		
				glassQ = new lib.glass(); //הוספת זכוכית מגדלת לתמונת השאלה
				glassQ.name = "glassQ";
				glassQ.x = 568;
				glassQ.y = 54;
				gamestage.addChild(glassQ);
		
				glassQ.addEventListener("mouseover", glassQ_Over); //מעבר עכבר על זכוכית המגדלת לצורך הגדלת התמונה
				glassQ.addEventListener("mouseout", glassQ_Out); //מעבר עכבר על זכוכית המגדלת לצורך הקטנת התמונה לגודל המקורי
			}
		
			var answers = myGame[randQuestions][1]; //משתנה של "תשובות" לשאלה 
			//randAnswers = מספר המסיחים בשאלה
			randAnswers = answers.sort(function () { //יצירת המסיחים בהגרלה. זוהי פונקציה המסדרת מחדש את המערך של התשובות ובכך מציגה אותם בצורה רנדומלית על הבמה
				return Math.random() - 0.5;
			})
		
			//הלולאה נגמרת באורך כמות המסיחים של השאלה שהוגרלה
			for (i = 0; i < randAnswers.length; i++) {
		
				//יצירה דינאמית של המסיחים
				bama[i] = new lib.bama; //יצירת במה חדשה
		
				bama[i].name = "bama" + i;
		
				/*		bama[i].name = `Bama Number $ {
					i
				}`; */ //שם של הבמה (כל במה, גם צהובה וגם לבנה) 
				// זה הופך משתנה למחרוזת`${}` , להשתמש רק ב'' בשביל שהוא יוכל לקרוא לדולר. הדולר הוא משמש לקריאה של האיי כמספר ולא כאות.
				bama[i].y = 586; //מיקום האורך לא משתנה
				bama[i].x = 198 + ((((randAnswers.length - 6) * -1) * 75) + (150 * i)); // הקו ההתחלתי של המסיחים הוא 198,.
				// לאחר מכן לקחנו את כמות המסיחים והפכנו אותה כך שככל שיש יותר מסיחים- התוצאה תהיה קטנה יותר (לכן גם כפלנו במינוס אחד כדי שהתוצאה תהיה חיובית)
				// לאחר מכן כפלנו ב- 75 כי האיקס של המסיחים צריך להתחיל כל פעם ב-75 יותר ימינה (האיקס גדל ב-75 ככל שמספר המסיחים קטן).
				//לאחר מכן מגדילים ב- 150 כפול אי, מאחר והמרחק בין המסיחים הוא תמיד 150. וכל מסיח שנוסף לוקח עוד 150 ימינה.
		
				gamestage.addChild(bama[i]);
		
				if (myGame[randQuestions][1][i][2] == "text") { //אם בתא השני של המסיחים כתוב טקסט אז תכניס טקסט אבל אם לא תכניס תמונה
					//הגדרת הטקסטים והתמונות של מסיחים (במות)
					bamaText = new createjs.Text();
					bamaText.text = myGame[randQuestions][1][i][0];
					bamaText.name = "bamaText";
					bamaText.lineWidth = 140;
					bamaText.textAlign = "center";
					bamaText.font = "17px Arial";
					bamaText.x = 70;
					bamaText.y = 40;
					bama[i].addChild(bamaText);
		
				} else {
					picture = new(myGame[randQuestions][1][i][0]); //הכנסת תמונה לבמה-תא המסיכים=1, המסיח בתא ה"איי", תמשוך את תא 0 - כל זה כי בתא 2 כתוב אימג' במקום טקסט
					picture.name = "picture" + i;
					picture.x = 70.45;
					picture.y = 72.9;
					bama[i].addChild(picture); //מיקום התמונה בייחס לבמה
		
					allPictures[i] = picture; //יצירת מערך בו יהיו התמונות
					glassA = new lib.glass(); //סימבול זכוכית מגדלת
					glassA.name = "glassA" + i; //מתן שם לסימבול בהתאם למקום ה"איי" של המסיח
					glassA.x = 95;
					glassA.y = 31.80;
					bama[i].addChild(glassA); //מיקום זכוכית המגדלת בייחס לבמה
		
					glassA.addEventListener("mouseover", glassA_Over); //מעבר עכבר על זכוכית המגדלת לצורך הגדלת התמונה
					glassA.addEventListener("mouseout", glassA_Out); //מעבר עכבר על זכוכית המגדלת לצורך הקטנת התמונה לגודל המקורי
				}
		
				//הגדרת הכדורים שמעל הבמות (מסיחים)
				ball[i] = new lib.ball;
		
				ball[i].name = "ball" + i;
		
				/*		ball[i].name = `Ball Nmuber $ {
					i
				}`;*/
				ball[i].x = 40;
				ball[i].y = -40;
				bama[i].addChild(ball[i]);
			}
		
			for (let j = 0; j < randAnswers.length; j++) { //לולאה אשר בודקת מהו מספר המסיח לאחר הופעת המסיחים על הבמה
				let event = bama[j]; //ג'יי הוא משתנה זמני שרץ למען יצירת איוונטים, בכל לולאה גדל ב-1 (כמו איי)
				event.addEventListener('click', function () { //פונקציה בעת לחיצה על מסיח (במה)
					Answer = j; // j- מספר מסיח
					RemoveBall(j); //הפעל פונקציה של הזזת כדור בלחיצה 
					eventOnChosenAnswer(); //הפעל פונקציה של מה שקורה בעת לחיצה על מסיח
				});
			}
		}
		
		function eventOnChosenAnswer() { //פונקציה של לחיצה על מסיח
			if (canChangeAnswer == true) { //אם המשתנה הזה מוגדר כנכון- השחקן עדיין יכול לשנות את הבחירתו
				if (player == 1) { //אם תורו של שחקן 1 
					gamestage.removeChild(player1ready); //הוצאת השחקן העומד ללא כדור 
					if (player1ball_Appears == false) {
						gamestage.addChild(player1ball); //הוספת שחקן 1 עם כדור בידיים
						player1ball_Appears = true; //לאחר לחיצה על מסיח אחד, לא תיתאפשר עוד היווצרות של הדמות הזו. המשתנה הזה שומר שהיא תיווצר פעם אחת
					}
				} else {
					gamestage.removeChild(player2ready); //הוצאת השחקן העומד ללא כדור 
					if (player2ball_Appears == false) {
						gamestage.addChild(player2ball); //הוספת שחקן 2 עם כדור בידיים
						player2ball_Appears = true; //לאחר לחיצה על מסיח אחד, לא תיתאפשר עוד היווצרות של הדמות הזו. המשתנה הזה שומר שהיא תיווצר פעם אחת
					}
				}
				//הוספת כפתור "בדוק תשובה"
				if (checkBTN_Appears == false) {
					gamestage.addChild(checkBTN);
					checkBTN_Appears = true; //לאחר לחיצה על מסיח אחד, לא תתאפשר יצירה של עוד כפתור "בדוק תשובה". הוא יווצר רק פעם אחת
				}
			}
		}
		
		function checkAnswer() { //פונקציה של לחיצה על כפתור "בדיקת תשובה"
			gamestage.removeChild(player1ball); //הוצאת השחקן שמחזיק בכדור
			gamestage.removeChild(player2ball); //הוצאת השחקן שמחזיק בכדור
			gamestage.removeChild(checkBTN); // הוצאת הכפתור של בדוק תשובה
			canChangeAnswer = false; //משתנה של נכון/לא נכון שמגדיר האם השחקן יכול לשנות את תשובתו (ללחוץ על המסיחים) או לא. בשלב זה הוא כבר לא יכול
			timeStop = true; //עצירת הזמן
			seconds = 60; //איפוס הזמן והחזרתו ל60 שניות
		
			if (myGame[randQuestions][1][Answer][1] == true) { //הגדרה אם תופעל פונקציה של נכון / לא נכון בהתאם לתשובה	
				right();
			} else {
				wrong();
			}
		}
		
		function RemoveBall(eventNumber) { // eventNumber = המספר במה הנלחצת 
			if (canChangeAnswer == true) {
		
				if (theRemovedBall >= 0) { // theRemovedBall = מספר במה קודם , המספר של מקום התשובה הקודמת שבחרנו
					gamestage.removeChild(bama[theRemovedBall]); //מוריד מהבמה הראשית את הבמה הקודמת (צהובה)
					bama[theRemovedBall] = TempBamaSaver; //מחזירים לחיים את הבמה כדי להחזיר אותה ללבן ולא צהוב
					bama[theRemovedBall].addChild(ball[theRemovedBall]); //תחזיר לבמה את הכדור שלה
					gamestage.addChild(bama[theRemovedBall]); //להחזיר את הבמה הלבנה
				}
		
				TempBamaSaver = bama[eventNumber]; //TempBamaSaver= שומר את הבמה הנוכחית, שעכשיו לחצתי עליה (את האובייקט עצמו)
				theRemovedBall = eventNumber; // theRemovedBall= שומר את המספר במה הנוכחית שעכשיו לחצתי עליה
				bama[eventNumber].removeChild(ball[eventNumber]); //להוריד את הכדור מהבמה הנוכחית שנלחצה
				gamestage.removeChild(bama[eventNumber]); // להוריד את הבמה הנוכחית שנלחצה
				bama[eventNumber] = addBamaParms(bama[eventNumber], eventNumber); //לך לםונקציה שמוסיפה במה צהובה (כולל הגדרות של מיקום וכו'.. מופיע בהמשך)
				gamestage.addChild(bama[eventNumber]); //הוספת הבמה הצהובה במספר המקום שנלחץ (הוספה לבמה ראשית)
			}
		}
		
		function addBamaParms(bamaP, i) { //פונקצייה שמקבלת במה ומיקום ובונה במה צהובה בהתאם להגדרות מיקום, טקסט וכו' הנדרשות (כמו של הבמה הלבנה)
			tempBama = new lib.bamaWithYellow;
			bamaP = tempBama
			bamaP.name = "bamaP" + i;
			chosenBamaNum = i;
			bamaP.y = 586; //מיקום האורך לא משתנה
			bamaP.x = 198 + ((((randAnswers.length - 6) * -1) * 75) + (150 * i));
		
			if (myGame[randQuestions][1][i][2] == "text") { //אם בתא השני של המסיחים כתוב טקסט אז תכניס טקסט אבל אם לא תכניס תמונה
				//הגדרת הטקסטים והתמונות של מסיחים (במות)
				bamaText = new createjs.Text();
				bamaText.text = myGame[randQuestions][1][i][0];
				bamaText.name = "bamaText";
				bamaText.lineWidth = 140;
				bamaText.textAlign = "center";
				bamaText.font = "17px Arial";
				bamaText.x = 70;
				bamaText.y = 40;
				bamaP.addChild(bamaText);
		
			} else {
				picture = new(myGame[randQuestions][1][i][0]); //הכנסת תמונה לבמה-תא המסיכים=1, המסיח בתא ה"איי", תמשוך את תא 0 - כל זה כי בתא 2 כתוב אימג' במקום טקסט
				picture.name = "picture" + i;
				picture.x = 70.45;
				picture.y = 72.9;
				bamaP.addChild(picture); //מיקום התמונה בייחס לבמה
		
				allPictures[i] = picture; //יצירת מערך בו יהיו התמונות
				glassA = new lib.glass(); //סימבול זכוכית מגדלת
				glassA.name = "glassA" + i; //מתן שם לסימבול בהתאם למקום ה"איי" של המסיח
				glassA.x = 95;
				glassA.y = 31.80;
				bamaP.addChild(glassA); //מיקום זכוכית המגדלת בייחס לבמה
		
				glassA.addEventListener("mouseover", glassA_Over); //מעבר עכבר על זכוכית המגדלת לצורך הגדלת התמונה
				glassA.addEventListener("mouseout", glassA_Out); //מעבר עכבר על זכוכית המגדלת לצורך הקטנת התמונה לגודל המקורי
			}
		
			return bamaP; //להחזיר במה צהובה לפונקציית Event (removeball)
		}
		
		// תחילת הטיימר הקורא לכפתור השחקן הבא בסוף האנימציה - תשובה נכונה
		function right() {
			if (player == 1) {
				player1in = new lib.player1in(); //קריאה חוזרת לסימבולים כי בלעדיהם זה לא עובד - תקף לכל הפונקציה של צודק וטועה
				player1in.name = "player1in";
				gamestage.addChild(player1in); //אנימציה של קליעה לסל שחקן 1
				player1in = setTimeout(nextPlayer, 1500);
				gamestage.addChild(basket);
			} else {
				player2in = new lib.player2in();
				player2in.name = "player2in";
				gamestage.addChild(player2in); //אנימציה של קליעה לסל שחקן 2
				player2in = setTimeout(nextPlayer, 1500);
				gamestage.addChild(basket);
			}
			answered[randQuestions] = true; //משתנה של נכון/לא נכון שעוזר להוציא שאלות מהמאגר לאחר שנענו נכון. השאלה נענתה נכונה ולכן מוגדרת פה כ"נכון".
		}
		
		function wrong() {
			if (player == 1) {
				player1out = new lib.player1out();
				player1out.name = "player1out";
				gamestage.addChild(player1out); // אנימציה של פספוס שחקן 1
				player1out = setTimeout(nextPlayer, 1900);
		
				for (i = 0; i < player1.length; i++) {
					if (player1[i][0] == randQuestions) { //אם השאלה במערך נמצאת במקום של השאלה שהוגרלה עכשיו, תעלה את מספר השאלות השגויות (התא השני) באחד
						var wrongNum = player1[i][1];
						wrongNum++; //העלאה ב-1
						player1[i][1] = wrongNum; //החזרת המשתנה פלוס האחד שהוספנו
					}
				}
			} else {
				player2out = new lib.player2out();
				player2out.name = "player2out";
				gamestage.addChild(player2out); // אנימציה של פספוס שחקן 2
				player2out = setTimeout(nextPlayer, 1900);
		
				for (i = 0; i < player2.length; i++) {
					if (player2[i][0] == randQuestions) { //אם השאלה במערך נמצאת במקום של השאלה שהוגרלה עכשיו, תעלה את מספר השאלות השגויות (התא השני) באחד
						var wrongNum = player2[i][1];
						wrongNum++; //העלאה ב-1
						player2[i][1] = wrongNum; //החזרת המשתנה פלוס האחד שהוספנו
					}
				}
			}
			answered[randQuestions] = false; //משתנה של נכון/לא נכון שעוזר להוציא שאלות מהמאגר לאחר שנענו נכון. השאלה לא נענתה נכון ולכן מוגדרת כ"לא נכון" ונשארת במאגר
		}
		
		function nextPlayer() { //הופעת כפתור המשך בסוף האנימציה
			var answeresTrue = 0
			for (i = 0; i <= answered.length; i++) { //לולאה שבודקת כמה תשובות נכונות נענו
				if (answered[i] == true) {
					answeresTrue++
				}
			}
			if (answeresTrue == 12) {
				playersScore()
			} //אם נענו תשובות נכונות באוך המערך, אז תעבור לחישוב תוצאות ומשם לוח התתוצאות
			else {
				gamestage.addChild(nextBTN);
			}
		}
		
		function P1countdown() { //פונקציית השעון של שחקן 1
			gamestage.addChild(P1stopTimeBoard);
			P1stopTimeBoard.addChild(P1time);
		}
		
		function P2countdown() { //פונקציית השעון של שחקן 2
			gamestage.addChild(P2stopTimeBoard);
			P2stopTimeBoard.addChild(P2time);
		}
		
		function myTimer() { // פונקציית הטיימר עצמה - האינטרוול של השחקנים
			if (timeStop == false) { //אם הזמן לא הוגדר לעצירה תמשיך להוריד שניות מהטיימר
				seconds--
				if (player == 1) {
					P1TotalTime++ //המשתנה שקולט את מסך זמן המשחק הכולל של השחקן
					//console.log(P1TotalTime);
		
					P1stopTimeBoard.getChildByName("P1time").text = seconds;
		
				} else {
					P2TotalTime++ //המשתנה שקולט את מסך זמן המשחק הכולל של השחקן
					//console.log(P2TotalTime);
		
					P2stopTimeBoard.getChildByName("P2time").text = seconds;
				}
			}
			if (seconds <= 0) { //אם הטיימר מגיע לאפס
				stage.addChild(time_Out);
				stage.addChild(nextBTN);
				seconds = 60;
				timeStop = true;
		
				if (player == 1) { //אם היה התור של שחקן 1, הוספת טעות על שאלה זו למערך של שחקן 1
					for (i = 0; i < player1.length; i++) {
						if (player1[i][0] == randQuestions) { //אם השאלה במערך נמצאת במקום של השאלה שהוגרלה עכשיו, תעלה את מספר השאלות השגויות (התא השני) באחד
							var wrongNum = player1[i][1];
							wrongNum++; //העלאה ב-1
							player1[i][1] = wrongNum; //החזרת המשתנה פלוס האחד שהוספנו
						}
					}
				} else { // אם היה התור של שחקן 2, הוספת טעות על שאלה זו למערך של שחקן 2
					for (i = 0; i < player2.length; i++) {
						if (player2[i][0] == randQuestions) { //אם השאלה במערך נמצאת במקום של השאלה שהוגרלה עכשיו, תעלה את מספר השאלות השגויות (התא השני) באחד
							var wrongNum = player2[i][1];
							wrongNum++; //העלאה ב-1
							player2[i][1] = wrongNum; //החזרת המשתנה פלוס האחד שהוספנו
						}
					}
				}
			}
		}
		
		
		function nextAction() { //פונקציה של מעבר לשחקן הבא 
			if (player == 1) { //החלפת שחקן
				player = 2
			} else {
				player = 1
			}
			stage.removeChild(gamestage); //איפוס הקונטיינר שעליו המשתנים שצריך לאפס
			theRemovedBall = -1;
			player1ball_Appears = false; //להגדיר אותו מחדש כלא נכוו, על מנת שהדמות עם הכדור תיווצר מחדש בשאלה הבאה
			player2ball_Appears = false; //להגדיר אותו מחדש כלא נכוו, על מנת שהדמות עם הכדור תיווצר מחדש בשאלה הבאה
			checkBTN_Appears = false; // להגדיר אותו מחדש כלא נכון על מנת שהכפתור יווצר מחדש בשאלה הבאה
			stage.removeChild(time_Out);
			stage.removeChild(nextBTN);
		
			createQuestion();
		}
		
		// לחיצה על הפאוז כדי לעצור את המשחק
		stop_btn1.addEventListener("click", stop_GAME1);
		stop_btn2.addEventListener("click", stop_GAME2);
		
		function stop_GAME1() { //לחיצה על עצירת הזמן עבור שחקן 1
			if (canChangeAnswer == true) {
				timeStop = true;
				stage.addChild(stopGame);
				stopGame.addChild(stopName1); // הוספת ההערה המשתנה ש"שם השחקן" עצר את המשחק	
		
				stopGame.getChildByName("stopName1").text = name1 + " עצר את המשחק";
			}
		}
		
		function stop_GAME2() { //לחיצה על עצירת הזמן עבור שחקן 2
			if (canChangeAnswer == true) {
				timeStop = true;
				stage.addChild(stopGame);
				stopGame.addChild(stopName2); // הוספת ההערה המשתנה ש"שם השחקן" עצר את המשחק	
		
				stopGame.getChildByName("stopName2").text = name2 + " עצר את המשחק";
			}
		}
		
		stopGame.replayBTN.addEventListener("click", replay_GAME); //לחיצה על פליי כדי להמשיך משחק שנעצר
		
		function replay_GAME() { //חזרה למשחק באותה נקודת זמן
			stage.removeChild(stopGame);
			timeStop = false;
		}
		
		function glassA_Over(e) {
			var A_currentHover = e.currentTarget.name.charAt(6);
			var answerPicture;
			if (chosenBamaNum == A_currentHover) {
				answerPicture = gamestage.getChildByName("bamaP" + A_currentHover).getChildByName("picture" + A_currentHover);
			} else {
				answerPicture = gamestage.getChildByName("bama" + A_currentHover).getChildByName("picture" + A_currentHover);
			}
			answerPicture.scaleX = 3.0;
			answerPicture.scaleY = 3.0;
			answerPicture.x = 410.9;
			answerPicture.y = 361.5;
			gamestage.addChild(answerPicture);
		}
		
		function glassQ_Over(e) {
			var Q_currentHover = e.currentTarget.name.charAt(7);
			gamestage.getChildByName("imgPicture" + Q_currentHover).scaleX = 3.0;
			gamestage.getChildByName("imgPicture" + Q_currentHover).scaleY = 3.0;
			gamestage.getChildByName("imgPicture" + Q_currentHover).x = 300;
			gamestage.getChildByName("imgPicture" + Q_currentHover).y = 230;
		}
		
		function glassA_Out(e) {
			var A_currentHoverOut = e.currentTarget.name.charAt(6);
			var answerPictureOUT = gamestage.getChildByName("picture" + A_currentHoverOut);
			answerPictureOUT.scaleX = 1;
			answerPictureOUT.scaleY = 1;
			answerPictureOUT.x = 70.45;
			answerPictureOUT.y = 72.9;
			if (chosenBamaNum == A_currentHoverOut) {
				gamestage.getChildByName("bamaP" + A_currentHoverOut).addChild(answerPictureOUT);
			} else {
				gamestage.getChildByName("bama" + A_currentHoverOut).addChild(answerPictureOUT);
			}
		}
		
		function glassQ_Out(e) {
			var Q_currentHoverOut = e.currentTarget.name.charAt(7);
			gamestage.getChildByName("imgPicture" + Q_currentHoverOut).scaleX = 1;
			gamestage.getChildByName("imgPicture" + Q_currentHoverOut).scaleY = 1;
			gamestage.getChildByName("imgPicture" + Q_currentHoverOut).x = 505.3;
			gamestage.getChildByName("imgPicture" + Q_currentHoverOut).y = 50;
		}
		
		function playersScore() { // פונקציה של חישוב ציונים ושגיאות לשני השחקנים
		
			for (i = 0; i < player1.length; i++) { //player1.length= כמות השאלות שענה עליהן שחקן 1
				var qscore1 = ((100 / (player1.length * (player1[i][1] + 1)))); //חישוב ציון של שאלה אחת, בהתאם לכמות השאלות שענה עליהן ומספר טעויות לפריט זה
				scoreArray1[i] = qscore1; //הכנסת הציון של הפריט הנוכחי לתוך המערך במיקום הנוכחי
			}
		
			totalScore1 = 0 //איפוס הציון הכולל ל-0 לפני החישוב של הלולאה
		
			for (i = 0; i < player1.length; i++) { // (scoreArray1)לולאה המחשבת את סכום כל התאים במערך של הציונים 
				totalScore1 = Math.round(totalScore1 + scoreArray1[i]); // totalScore1= הציון הכולל של שחקן 1. הסכום של כל ציוני הפריטים שעליהם ענה
			}
			player1Miss = 0 //איפוס מספר שגיאות ל-0 לפני ספירת הלולאה
			for (i = 0; i < player1.length; i++) { // לולאה המחשבת את מספר השגיאות של שחקן 1
				player1Miss = player1Miss + player1[i][1]; // player1Miss= כמות פספוסים של שחקן 1, כמות שגיאות
				//player1[i][1]= המקום השני במערך זה הוא מספר הטעויות לכל שאלה
			}
		
			for (i = 0; i < player2.length; i++) { //player2.length= כמות השאלות שענה עליהן שחקן 2
				var qscore2 = ((100 / (player2.length * (player2[i][1] + 1)))); //חישוב ציון של שאלה אחת
				scoreArray2[i] = qscore2; //הכנסת הציון של הפריט הנוכחי לתוך המערך במיקום הנוכחי
			}
		
			totalScore2 = 0 //איפוס הציון הכולל ל-0 לפני החישוב של הלולאה
		
			for (i = 0; i < player2.length; i++) { //(scoreArray2)לולאה המחשבת את סכום כל התאים במערך של הציונים
				totalScore2 = Math.round(totalScore2 + scoreArray2[i]); // totalScore2= הציון הכולל של שחקן 2. הסכום של כל ציוני הפריטים שעליהם ענה
			}
		
			player2Miss = 0 //איפוס מספר שגיאות ל-0 לפני ספירת הלולאה
			for (i = 0; i < player2.length; i++) { // לולאה המחשבת את מספר השגיאות של שחקן 2
				player2Miss = player2Miss + player2[i][1]; // player1Miss= כמות פספוסים של שחקן 2, כמות שגיאות  
				//player2[i][1]= המקום השני במערך זה הוא מספר הטעויות לכל שאלה
			}
			scoreBoard()
		}
		
		// קריאה לפונקציה שיוצרת את לוח התוצאות
		function scoreBoard() {
			stage.addChild(score); //מעבר למסך תוצאות
		
			var textName1 = new createjs.Text(); //יצירת טקסט שם שחקן 1
			stage.addChild(textName1);
			textName1.color = "black";
			textName1.text = name1;
			textName1.font = "60px Arial";
			textName1.fontWeight = "bold";
			textName1.x = 920;
			textName1.y = 136;
			textName1.lineWidth = 275;
			textName1.textAlign = "center";
		
			var textName2 = new createjs.Text(); //יצירת טקסט שם שחקן 2
			stage.addChild(textName2);
			textName2.color = "black";
			textName2.text = name2;
			textName2.font = "60px Arial";
			textName2.fontWeight = "bold";
			textName2.x = 350;
			textName2.y = 136;
			textName2.lineWidth = 275;
			textName2.textAlign = "center";
		
			var textScore1 = new createjs.Text(); //יצירת טקסט של ציון לשחקן 1
			stage.addChild(textScore1);
			textScore1.color = "black";
			textScore1.text = "ציון: " + totalScore1;
			textScore1.font = "30px Arial";
			textScore1.x = 1080;
			textScore1.y = 300;
			textScore1.lineWidth = 500;
			textScore1.textAlign = "right";
		
			var textScore2 = new createjs.Text(); //יצירת טקסט של ציון לשחקן 2
			stage.addChild(textScore2);
			textScore2.color = "black";
			textScore2.text = "ציון: " + totalScore2;
			textScore2.font = "30px Arial";
			textScore2.x = 510;
			textScore2.y = 300;
			textScore2.lineWidth = 500;
			textScore2.textAlign = "right";
		
			var textMiss1 = new createjs.Text(); //יצירת טקסט כמות שגיאות שחקן 1
			stage.addChild(textMiss1);
			textMiss1.color = "black";
			textMiss1.text = "מספר שגיאות: " + player1Miss;
			textMiss1.font = "30px Arial";
			textMiss1.x = 1080;
			textMiss1.y = 360;
			textMiss1.lineWidth = 500;
			textMiss1.textAlign = "right";
		
			var textMiss2 = new createjs.Text(); //יצירת טקסט כמות שגיאות שחקן 2
			stage.addChild(textMiss2);
			textMiss2.color = "black";
			textMiss2.text = "מספר שגיאות: " + player2Miss;
			textMiss2.font = "30px Arial";
			textMiss2.x = 510;
			textMiss2.y = 360;
			textMiss2.lineWidth = 500;
			textMiss2.textAlign = "right";
		
			var textTotalTime1 = new createjs.Text(); //יצירת טקסט זמן מצטבר שחקן 1
			stage.addChild(textTotalTime1);
			textTotalTime1.color = "black";
			textTotalTime1.text = "זמן משחק מצטבר: " + P1TotalTime + " שניות";
			textTotalTime1.font = "30px Arial";
			textTotalTime1.x = 1080;
			textTotalTime1.y = 420;
			textTotalTime1.lineWidth = 500;
			textTotalTime1.textAlign = "right";
		
			var textTotalTime2 = new createjs.Text(); //יצירת טקסט זמן מצטבר שחקן 2
			stage.addChild(textTotalTime2);
			textTotalTime2.color = "black";
			textTotalTime2.text = "זמן משחק מצטבר: " + P2TotalTime + " שניות";
			textTotalTime2.font = "30px Arial";
			textTotalTime2.x = 510;
			textTotalTime2.y = 420;
			textTotalTime2.lineWidth = 500;
			textTotalTime2.textAlign = "right";
		
			if (totalScore1 > totalScore2) {
				var textWin1 = new createjs.Text(); //יצירת טקסט שחקן 1 מנצח
				stage.addChild(textWin1);
				textWin1.color = "black";
				textWin1.text = "WINNER!";
				textWin1.font = "40px Arial";
				textWin1.fontWeight = "bold";
				textWin1.x = 920;
				textWin1.y = 209;
				textWin1.lineWidth = 275;
				textWin1.textAlign = "center";
			}
		
			if (totalScore1 < totalScore2) {
				var textWin2 = new createjs.Text(); //יצירת טקסט שחקן 2 מנצח
				stage.addChild(textWin2);
				textWin2.color = "black";
				textWin2.text = "WINNER!";
				textWin2.font = "40px Arial";
				textWin2.x = 350;
				textWin2.y = 209;
				textWin2.lineWidth = 275;
				textWin2.textAlign = "center";
			}
		
			var endBTN = new lib.endBTN();
			score.addChild(endBTN); //הוספת כפתור סיום אשר מעביר לקומבו לבחירת משחק
			endBTN.x = 640.5;
			endBTN.y = 585.6;
			endBTN.addEventListener("click", chooseNewGame);
		}
		
		function chooseNewGame() {
		
			// איפוס משתנים למשחק חדש
			mychoice = 0; //איפוס הבחירה של הקומבו
			theRemovedBall = -1;
			name1 = ""; //איפוס שם שחקן 1
			name2 = ""; // איפוס שם שחקן 2
			namesIN = new lib.namesIN(); //יצירת אינפוט חדש לשמות שחקנים
			P1TotalTime = 0; //איפוס זמן משחק שחקן1
			P2TotalTime = 0; //איפוס זמן משחק שחקן2
			seconds = 60; //איפוס זמן שאלה
			forcombo.startbtn.alpha = 0.5; //איפוס השקיפות של לחצן כניסה בקומבו
			answered = new Array(12); //מערך שאלות חדש
			answered.fill(false); //כל השאלות במערך של 12 השאלות חוזר להיות 'לא נכון'
			bama = []; //איפוס מערך במות
			ball = []; //איפוס מערך כדורים
			canChangeAnswer = true; //יכול לשנות תשובות
			newgame = true; //משתנה שבמשחק חדש ייצור רנדומליות בין השחקנים (רק בשאלה הראשונה)
			player1ball_Appears = false; //להגדיר אותו מחדש כלא נכוו, על מנת שהדמות עם הכדור תיווצר מחדש בשאלה הבאה
			player2ball_Appears = false; //להגדיר אותו מחדש כלא נכוו, על מנת שהדמות עם הכדור תיווצר מחדש בשאלה הבאה
			checkBTN_Appears = false; // גם את הכפתור של "בדוק תשובה" אנחנו רוצים להפעיל רק פעם אחת ולכן נגדיר משתנה של נכון /לא נכון אשר יעזור לנו לשים על הבמה אתת הכפתור רק פעם אחת
			player1 = []; //איפוס מערך של מספר שאלה ומספר הטעויות של שחקן 1
			player1Count = 0;
			player2 = []; //איפוס מערך של מספר שאלה ומספר הטעויות של שחקן 2
			player2Count = 0;
			scoreArray1 = new Array(player1.length); //איפוס מערך ציונים לשאלות
			scoreArray2 = new Array(player2.length); //איפוס מערך ציונים לשאלות
		
			// יצירת קומבו חדש		
			stage.addChild(picGame);
			forcombo = new lib.forcombo();
			forcombo.x = 640;
			forcombo.y = 395;
			stage.addChild(forcombo);
			forcombo.name = "forcombo"; //הגדרת שם לקומבו
			mycb_change(evt);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'E5CFA262D768674BBD60D8ADB6B4B71B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BasketballGame_atlas_.png", id:"BasketballGame_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E5CFA262D768674BBD60D8ADB6B4B71B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
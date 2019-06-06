(function(canvas, canvasfont, audioblock, battery, webgl, webrtcdevice, gamepad, webvr, timezone, clientrects, clipboard){
		function processFunctions(scope) {
			/* Canvas */
			/*if (canvas != 'false') {
				var fakecanvas = scope.document.createElement('canvas');
				fakecanvas.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_canvas';
				if (canvas == 'random') {
					var fakewidth = fakecanvas.width = Math.floor(Math.random() * 999) + 1;
					var fakeheight = fakecanvas.height = Math.floor(Math.random() * 999) + 1;
				}
				var canvas_a = scope.HTMLCanvasElement;
				var origToDataURL = canvas_a.prototype.toDataURL;
				var origToBlob = canvas_a.prototype.toBlob;
				canvas_a.prototype.toDataURL = function() {
					fakecanvas.title = 'toDataURL';
					document.documentElement.appendChild(fakecanvas);
					if (canvas == 'block') return false;
					else if (canvas == 'blank') {
						fakecanvas.width = this.width;
						fakecanvas.height = this.height;
						return origToDataURL.apply(fakecanvas, arguments);
					} else if (canvas == 'random') {
						return origToDataURL.apply(fakecanvas, arguments);
					}
				};
				canvas_a.prototype.toBlob = function() {
					fakecanvas.title = 'toBlob';
					document.documentElement.appendChild(fakecanvas);
					if (canvas == 'block') return false;
					else if (canvas == 'blank') {
						fakecanvas.width = this.width;
						fakecanvas.height = this.height;
						return origToBlob.apply(fakecanvas, arguments);
					} else if (canvas == 'random') {
						return origToBlob.apply(fakecanvas, arguments);
					}
				};
				var canvas_b = scope.CanvasRenderingContext2D;
				var origGetImageData = canvas_b.prototype.getImageData;
				canvas_b.prototype.getImageData = function() {
					fakecanvas.title = 'getImageData';
					document.documentElement.appendChild(fakecanvas);
					if (canvas == 'block') return false;
					else if (canvas == 'blank') {
						fakecanvas.width = this.width;
						fakecanvas.height = this.height;
						return origGetImageData.apply(fakecanvas.getContext('2d'), arguments);
					} else if (canvas == 'random') {
						return origGetImageData.apply(fakecanvas.getContext('2d'), [Math.floor(Math.random() * fakewidth) + 1, Math.floor(Math.random() * fakeheight) + 1, Math.floor(Math.random() * fakewidth) + 1, Math.floor(Math.random() * fakeheight) + 1]);
					}
				}
				var origGetLineDash = canvas_b.prototype.getLineDash;
				canvas_b.prototype.getLineDash = function() {
					fakecanvas.title = 'getLineDash';
					document.documentElement.appendChild(fakecanvas);
					if (canvas == 'block') return false;
					else if (canvas == 'blank') {
						fakecanvas.width = this.width;
						fakecanvas.height = this.height;
						return origGetLineDash.apply(fakecanvas.getContext('2d'), [0, 0]);
					} else if (canvas == 'random') {
						return origGetLineDash.apply(fakecanvas.getContext('2d'), [Math.floor(Math.random() * fakewidth) + 1, Math.floor(Math.random() * fakeheight) + 1]);
					}
				}
				var canvas_c = scope.WebGLRenderingContext;
				var origReadPixels = canvas_c.prototype.readPixels;
				canvas_c.prototype.readPixels = function() {
					fakecanvas.title = 'readPixels';
					document.documentElement.appendChild(fakecanvas);
					if (canvas == 'block') return false;
					else if (canvas == 'blank') {
						fakecanvas.width = this.width;
						fakecanvas.height = this.height;
						return origReadPixels.apply(fakecanvas.getContext('webgl'), arguments);
					} else if (canvas == 'random') {
						return origReadPixels.apply(fakecanvas.getContext('webgl'), [Math.floor(Math.random() * fakewidth) + 1, Math.floor(Math.random() * fakeheight) + 1, Math.floor(Math.random() * fakewidth) + 1, Math.floor(Math.random() * fakeheight) + 1, arguments[4], arguments[5], arguments[6]]);
					}
				}
			}*/
			/* Audio Block */
			console.log("audioblock"+audioblock);
			if (audioblock == 'true') {
				var audioblock_triggerblock = scope.document.createElement('div');
				audioblock_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_audio';
				var audioblock_a = scope.AudioBuffer;
				audioblock_a.prototype.copyFromChannel = function() {
					audioblock_triggerblock.title = 'copyFromChannel';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
				audioblock_a.prototype.getChannelData = function() {
					audioblock_triggerblock.title = 'getChannelData';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
				var audioblock_b = scope.AnalyserNode;
				audioblock_b.prototype.getFloatFrequencyData = function() {
					audioblock_triggerblock.title = 'getFloatFrequencyData';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
				audioblock_b.prototype.getByteFrequencyData = function() {
					audioblock_triggerblock.title = 'getByteFrequencyData';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
				audioblock_b.prototype.getFloatTimeDomainData = function() {
					audioblock_triggerblock.title = 'getFloatTimeDomainData';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
				audioblock_b.prototype.getByteTimeDomainData = function() {
					audioblock_triggerblock.title = 'getByteTimeDomainData';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
				var audioblock_c = scope;
				audioblock_c.AudioContext = function() {
					audioblock_triggerblock.title = 'AudioContext';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
				audioblock_c.webkitAudioContext = function() {
					audioblock_triggerblock.title = 'webkitAudioContext';
					document.documentElement.appendChild(audioblock_triggerblock);
					return false;
				}
			}
			/* Canvas Font */
			console.log("canvasfont = "+canvasfont);
			if (canvasfont == 'true') {
				var canvasfont_triggerblock = scope.document.createElement('div');
				canvasfont_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_canvasfont';
				var canvasfont_a = scope.CanvasRenderingContext2D;
				canvasfont_a.prototype.measureText = function() {
					canvasfont_triggerblock.title = 'measureText';
					document.documentElement.appendChild(canvasfont_triggerblock);
					return false;
				}
			}
			/* Battery */
			if (battery == 'true') {
				var battery_triggerblock = scope.document.createElement('div');
				battery_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_battery';
				var battery_a = scope.navigator;
				battery_a.getBattery = function() {
					battery_triggerblock.title = 'getBattery';
					document.documentElement.appendChild(battery_triggerblock);
					return void(0);
				}
			}
			/* WebGL */
			/*if (webgl == 'true') {
				var webgl_triggerblock = scope.document.createElement('div');
				webgl_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_webgl';
				var webgl_a = scope.WebGLRenderingContext;
				webgl_a.getSupportedExtensions = function() {
					webgl_triggerblock.title = 'getSupportedExtensions';
					document.documentElement.appendChild(webgl_triggerblock);
					return false;
				}
				webgl_a.getParameter = function() {
					webgl_triggerblock.title = 'getParameter';
					document.documentElement.appendChild(webgl_triggerblock);
					return false;
				}
				webgl_a.getContextAttributes = function() {
					webgl_triggerblock.title = 'getContextAttributes';
					document.documentElement.appendChild(webgl_triggerblock);
					return false;
				}
				webgl_a.getShaderPrecisionFormat = function() {
					webgl_triggerblock.title = 'getShaderPrecisionFormat';
					document.documentElement.appendChild(webgl_triggerblock);
					return false;
				}
				webgl_a.getExtension = function() {
					webgl_triggerblock.title = 'getExtension';
					document.documentElement.appendChild(webgl_triggerblock);
					return false;
				}
			}
			/* WebRTC */
			/*if (webrtcdevice == 'true') {
				var webrtc_triggerblock = scope.document.createElement('div');
				webrtc_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_webrtc';
				var webrtc_a = scope.MediaStreamTrack;
				webrtc_a.getSources = function() {
					webrtc_triggerblock.title = 'getSources';
					document.documentElement.appendChild(webrtc_triggerblock);
					return false;
				}
				webrtc_a.getMediaDevices = function() {
					webrtc_triggerblock.title = 'getMediaDevices';
					document.documentElement.appendChild(webrtc_triggerblock);
					return false;
				}
				var webrtc_b = scope.navigator.mediaDevices;
				webrtc_b.enumerateDevices = function() {
					webrtc_triggerblock.title = 'enumerateDevices';
					document.documentElement.appendChild(webrtc_triggerblock);
					return false;
				}
			}
			/* Gamepad */
			/*if (gamepad == 'true') {
				var gamepad_triggerblock = scope.document.createElement('div');
				gamepad_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_gamepad';
				var gamepad_a = scope.navigator;
				gamepad_a.getGamepads = function() {
					gamepad_triggerblock.title = 'getGamepads';
					document.documentElement.appendChild(gamepad_triggerblock);
					return false;
				}
			}
			/* WebVR */
			/*if (webvr == 'true') {
				var webvr_triggerblock = scope.document.createElement('div');
				webvr_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_webvr';
				var webvr_a = scope.navigator;
				webvr_a.getVRDisplays = function() {
					webvr_triggerblock.title = 'getVRDisplays';
					document.documentElement.appendChild(webvr_triggerblock);
					return false;
				}
			}
			/* Client Rectangles */
			/*if (clientrects == 'true') {
				var clientrects_triggerblock = scope.document.createElement('div');
				clientrects_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_clientrects';
				Element.prototype.getClientRects = function() {
					clientrects_triggerblock.title = 'getClientRects';
					document.documentElement.appendChild(clientrects_triggerblock);
					return [{'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'height': 0, 'width': 0}];
				}
			}
			/* Timezone */
			/*if (timezone != 'false') {
				var timezone_triggerblock = scope.document.createElement('div');
				timezone_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_timezone';
				var timezone_a = scope.Date;
				timezone_a.prototype.getTimezoneOffset = function() {
					timezone_triggerblock.title = 'getTimezoneOffset';
					document.documentElement.appendChild(timezone_triggerblock);
					if (timezone == 'random') return ['720','660','600','570','540','480','420','360','300','240','210','180','120','60','0','-60','-120','-180','-210','-240','-270','-300','-330','-345','-360','-390','-420','-480','-510','-525','-540','-570','-600','-630','-660','-720','-765','-780','-840'][Math.floor(Math.random() * 39)];
					return timezone;
				}
			}
			/* Clipboard */
			/*if (clipboard == 'true') {
				var clipboard_triggerblock = scope.document.createElement('div');
				clipboard_triggerblock.className = 'browsesafe_heedlljjfegnjeijpnkbhpofeejflkea_clipboard';
				var clipboard_a = document;
				var origExecCommand = clipboard_a.execCommand;
				clipboard_a.execCommand = function() {
					clipboard_triggerblock.title = 'execCommand';
					document.documentElement.appendChild(clipboard_triggerblock);
					if (arguments[0] == 'cut' || arguments[0] == 'copy') return false;
					return origExecCommand.apply(this, arguments);
				};
			}*/
		}
		processFunctions(window);
		var iwin = HTMLIFrameElement.prototype.__lookupGetter__('contentWindow'), idoc = HTMLIFrameElement.prototype.__lookupGetter__('contentDocument');
		Object.defineProperties(HTMLIFrameElement.prototype, {
			contentWindow: {
				get: function() {
					var frame = iwin.apply(this);
					if (this.src && this.src.indexOf('//') != -1 && location.host != this.src.split('/')[2]) return frame;
					try { frame.HTMLCanvasElement } catch (err) { /* do nothing*/ }
					processFunctions(frame);
					return frame;
				}
			},
			contentDocument: {
				get: function() {
					if (this.src && this.src.indexOf('//') != -1 && location.host != this.src.split('/')[2]) return idoc.apply(this);
					var frame = iwin.apply(this);
					try { frame.HTMLCanvasElement } catch (err) { /* do nothing*/ }
					processFunctions(frame);
					return idoc.apply(this);
				}
			}
		});
	})('undefined','true','true','true','undefined','undefined','undefined','undefined','undefined','undefined','undefined');
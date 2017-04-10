!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}({"./data/audioPlayer.js":/*!*****************************!*\
  !*** ./data/audioPlayer.js ***!
  \*****************************/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e,i){n(this,t),this.context=e.context,this.audio=e,this.trackList=i,this.currentIndex=0,this.startTime=0,this.currentTrack=null,this.position=0,this.playing=!1,this.volume=.3}return s(t,[{key:"connect",value:function(){var t=this.context.createGain(),e=this.context.createBufferSource(),i=this.trackList[this.currentIndex];t.gain.value=this.volume,e.buffer=this.audio[i],e.connect(t),t.connect(this.context.destination),this.currentTrack=e}},{key:"play",value:function(t){var e=this;this.connect(),this.startTime=this.context.currentTime-(this.position||0),t?this.currentTrack.start(this.context.currentTime,this.position):this.currentTrack.start(),this.playing=!0,this.currentTrack.onended=function(t){t.target===e.currentTrack&&e.next()}}},{key:"stopPlaying",value:function(t){this.currentTrack.stop(0),this.currentTrack=null,this.position=t?this.context.currentTime-this.startTime:0,this.playing=!1}},{key:"next",value:function(){this.playing&&this.stopPlaying(),this.currentIndex=(this.currentIndex+1)%this.trackList.length,this.play()}},{key:"prev",value:function(){this.playing&&this.stopPlaying(),this.currentIndex=(this.trackList.length+this.currentIndex-1)%this.trackList.length,this.play()}},{key:"toggle",value:function(){this.playing?(this.stopPlaying(!0),this.playing=!1):(this.play(!0),this.playing=!0)}}]),t}();e.default=a},"./data/background.js":/*!****************************!*\
  !*** ./data/background.js ***!
  \****************************/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(/*! ./config */"./data/config.js"),h=function(){function t(e,i,s){n(this,t),this.x=0,this.prevX=0,this.width=i,this.height=s,this.endGame=!1,this.bg=e.background_1,this.bgLowerLayer=e.background_2,this.bgMiddleLayer=e.background_3,this.bgUpperLayer=e.background_4,this.bgLowerLayerCoeff=a.OPTIONS.GAME_SPEED,this.bgMiddleLayerCoeff=2*a.OPTIONS.GAME_SPEED,this.bgUpperLayerCoeff=3*a.OPTIONS.GAME_SPEED}return s(t,[{key:"draw",value:function(t,e){t.drawImage(this.bg,0,0,this.width,this.height);var i=this.endGame?this.getX(this.bgLowerLayerCoeff)%this.width:this.getSmoothX(this.bgLowerLayerCoeff,e);t.drawImage(this.bgLowerLayer,this.width-i,0,this.width,this.height),t.drawImage(this.bgLowerLayer,-i,0,this.width,this.height);var n=this.endGame?this.getX(this.bgMiddleLayerCoeff)%this.width:this.getSmoothX(this.bgMiddleLayerCoeff,e);t.drawImage(this.bgMiddleLayer,this.width-n,0,this.width,this.height),t.drawImage(this.bgMiddleLayer,-n,0,this.width,this.height);var s=this.endGame?this.getX(this.bgUpperLayerCoeff)%this.width:this.getSmoothX(this.bgUpperLayerCoeff,e);t.drawImage(this.bgUpperLayer,this.width-s,0,this.width,this.height),t.drawImage(this.bgUpperLayer,-s,0,this.width,this.height)}},{key:"update",value:function(){this.prevX=this.x,this.x+=a.OPTIONS.METER}},{key:"getX",value:function(t){return this.x*t}},{key:"getSmoothX",value:function(t,e){return this.lerp(this.prevX*t,this.getX(t),e)%this.width}},{key:"lerp",value:function(t,e,i){return t+(e-t)*i}}]),t}();e.default=h},"./data/config.js":/*!************************!*\
  !*** ./data/config.js ***!
  \************************/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.OPTIONS={FPS:60,WIDTH:1280,HEIGHT:700,METER:1,GAME_SPEED:1,GROUND_SPEED:350,GRAVITY:1e3,IMPULSE:35e3,SLIDE_DURATION:75,FALLING_JUMP:12,IMAGES:["background_1.jpg","background_2.png","background_3.png","background_4.png","menuScreen.jpg","tileSet.png","wasted.png","congratulation.png"],LEVEL_URL:["level1"],AUDIO:["coin","audio1","audio2","audio3","backSound","dead","drown","wasted","run","slide","jump","woohoo"]}},"./data/gameScene.js":/*!***************************!*\
  !*** ./data/gameScene.js ***!
  \***************************/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),h=i(/*! ./config */"./data/config.js"),o=i(/*! ./helpers */"./data/helpers.js"),r=i(/*! ./menuScene */"./data/menuScene.js"),u=n(r),l=i(/*! ./player */"./data/player.js"),c=n(l),d=i(/*! ./background */"./data/background.js"),f=n(d),p=i(/*! ./map */"./data/map.js"),g=n(p),m=function(){function t(e,i,n,a,r){s(this,t),this.game=e,this.images=i,this.levels=n,this.currentLevel=r,this.audio=a,this.background=new f.default(this.images,h.OPTIONS.WIDTH,h.OPTIONS.HEIGHT),this.map=new g.default(this.images,this.currentLevel),this.player=new c.default(this.images,this.currentLevel,this),this.startGameCount=3.75,this.startGame=!1,this.endGame=!1,this.bgMusic=this.playSound("run",.1),this.wastedDelay=.7,this.wastedSound=null,this.congratulationSound=!1,this.resetButton=new o.Button("TRY AGAIN","#be3034",30,"Impact"),this.resetButton.setY(475),this.exitButton=new o.Button("MAIN MENU","#be3034",30,"Impact"),this.selectedButton=this.resetButton}return a(t,[{key:"render",value:function(t,e,i){e.clearRect(0,0,i.width,i.height),this.background.draw(e,t),this.player.draw(e,i),this.map.draw(e,t),this.startGame||this.prepareScreenDraw(e,i),this.wastedDelay<=0&&this.wastedDraw(e,i),this.map.endMap&&this.player.x>this.game.width&&this.congratulationDraw(e,i)}},{key:"wastedDraw",value:function(t,e){t.drawImage(this.images.wasted,0,0,e.width,e.height),t.fillStyle=this.resetButton.color,t.font=this.resetButton.font,t.shadowColor="#fff",t.shadowBlur=7,t.lineWidth=5,t.fillText(this.selectedButton.text,this.selectedButton.x,this.selectedButton.y),t.shadowBlur=0,this.resetButton.setWidth(t),this.resetButton.setX(this.game.width/2-this.resetButton.width-100),this.exitButton.setX(this.game.width/2+100),this.exitButton.setY(475),this.exitButton.setWidth(t),t.fillText(this.resetButton.text,this.resetButton.x,this.resetButton.y),t.fillText(this.exitButton.text,this.exitButton.x,this.exitButton.y)}},{key:"congratulationDraw",value:function(t,e){t.drawImage(this.images.congratulation,0,0,e.width,e.height),t.fillStyle=this.exitButton.color,t.font=this.exitButton.font;var i="Your score - "+this.player.score;t.fillText(i,this.game.width/2-t.measureText(i).width/2,440),this.exitButton.setWidth(t),this.exitButton.setX(this.game.width/2-this.exitButton.width/2),this.exitButton.setY(500),t.fillText(this.exitButton.text,this.exitButton.x,this.exitButton.y)}},{key:"prepareScreenDraw",value:function(t,e){t.fillStyle="#be3034",t.font="70pt Impact";var i=Math.floor(Math.abs(this.startGameCount))||"RUN";t.fillText(i,e.width/2-t.measureText(i).width/2,e.height/2)}},{key:"update",value:function(e,i){this.startGame?(this.player.isDead&&(this.endGame=!0,this.stopSound(this.bgMusic),this.background.endGame=!0,this.map.endGame=!0,this.wastedDelay-=e,this.wastedDelay<=0&&this.wastedDelay>-e&&(this.wastedSound=this.playSound("wasted",.3)),this.wastedDelay<=0&&(this.game.clicked.pressed&&this.game.checkClickPosition(this.resetButton)?this.changeScene(t):this.game.clicked.pressed&&this.game.checkClickPosition(this.exitButton)&&this.changeScene(u.default),(this.game.checkKeyPress(37)||this.game.checkKeyPress(39))&&this.toggleButton(),this.game.checkKeyPress(13)&&(this.selectedButton===this.resetButton?this.changeScene(t):this.changeScene(u.default)))),this.updateInput(),this.endGame||this.map.endMap||(this.background.update(e,i),this.map.update(e,i)),this.map.endMap&&(this.player.endMap=!0),this.player.x>=this.game.width&&(this.game.clicked.pressed&&this.game.checkClickPosition(this.exitButton)&&this.game.setScene(u.default,this.images,this.levels,this.audio),this.congratulationSound||(this.congratulationSound=!0,this.stopSound(this.bgMusic),this.playSound("woohoo",.3))),this.player.update(e,i,this.map)):this.startGameCount>0?this.startGameCount-=e:(this.startGame=!0,this.bgMusic=this.playSound("backSound",.1,!0))}},{key:"updateInput",value:function(){this.player.setKey("up",this.game.checkKeyPress(38)),this.player.setKey("down",this.game.checkKeyPress(40))}},{key:"toggleButton",value:function(){this.selectedButton===this.resetButton?this.selectedButton=this.exitButton:this.selectedButton=this.resetButton}},{key:"changeScene",value:function(t){this.stopSound(this.wastedSound),this.game.setScene(t,this.images,this.levels,this.audio,this.currentLevel)}},{key:"playSound",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this.audio.context,s=n.createGain(),a=n.createBufferSource();return s.gain.value=e,a.buffer=this.audio[t],a.loop=i,a.connect(s),s.connect(n.destination),a.start(0),a}},{key:"stopSound",value:function(t){t.stop(0)}}]),t}();e.default=m},"./data/helpers.js":/*!*************************!*\
  !*** ./data/helpers.js ***!
  \*************************/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();e.Cell=function(){function t(e,i,s,a,h,o,r){n(this,t),this.x=e,this.y=i,this.dx=s,this.dy=a,this.width=h,this.height=o,this.type=r,this.mapRow=null,this.mapColumn=null}return s(t,[{key:"checkOverlap",value:function(t,e){var i=Math.min(this.x+this.width,t.x+t.width-20),n=Math.max(this.x,t.x+15),s=Math.min(this.y+this.height,t.y+t.height),a=Math.max(this.y,t.y+60);return Math.max(0,i-n)*Math.max(0,s-a)>0}}]),t}(),e.Button=function(){function t(e,i,s,a){n(this,t),this.text=e,this.color=i,this.fontSize=s,this.fontFamily=a,this.font=this.fontSize+"pt "+this.fontFamily,this.height=this.fontSize}return s(t,[{key:"setWidth",value:function(t){this.width=this.width||t.measureText(this.text).width}},{key:"setX",value:function(t){this.x=t}},{key:"setY",value:function(t){this.y=t}}]),t}()},"./data/map.js":/*!*********************!*\
  !*** ./data/map.js ***!
  \*********************/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(/*! ./config */"./data/config.js"),h=i(/*! ./helpers */"./data/helpers.js"),o=function(){function t(e,i){var s=this;n(this,t),this.tileMap=i.tileMap,this.tileWidth=this.tileMap.G_S.w,this.tileHeight=this.tileMap.G_S.h,this.x=0,this.prevX=0,this.y=a.OPTIONS.HEIGHT-this.tileHeight*i.data.length,this.tileSet=e.tileSet,this.currentTile={},this.levelSliceNumber=Math.ceil(a.OPTIONS.WIDTH/this.tileWidth)+1,this.speed=a.OPTIONS.GROUND_SPEED,this.count=0,this.animation=this.tileMap.COI,this.animationFrame=0,this.animationCount=this.animation.frames,this.endGame=!1,this.endMap=!1,this.vectorLevel=i.data.map(function(t,e){return t.map(function(t,i){var n=s.y+e*s.tileHeight,a=new h.Cell(0,n,0,0,s.tileWidth,s.tileHeight,t);return a.mapRow=e,a.mapColumn=i,a})}),this.currentMap=this.vectorLevel.map(function(t){return t.slice(s.count,s.count+s.levelSliceNumber)}),this.updateCurrentMap()}return s(t,[{key:"update",value:function(t,e){var i=this,n=this.x-t*this.speed;n<-this.tileWidth?(this.prevX=this.tileWidth+this.x,this.x=(this.x-t*this.speed)%this.tileWidth,this.count+1+this.levelSliceNumber<this.vectorLevel[0].length?(this.count+=1,this.currentMap=this.vectorLevel.map(function(t){return t.slice(i.count,i.count+i.levelSliceNumber)})):(this.endMap=!0,console.log("end map"))):(this.prevX=this.x,this.x=n),this.updateCurrentMap(),this.animate(e)}},{key:"updateCurrentMap",value:function(){var t=this;this.currentMap.forEach(function(e){e.forEach(function(e,i){e.prevX=t.prevX+i*t.tileWidth,e.x=t.x+i*t.tileWidth})})}},{key:"draw",value:function(t,e){var i=this;this.currentMap.forEach(function(n){n.forEach(function(n){var s=i.endGame?n.x:i.lerp(n.prevX,n.x,e),a=n.type;if(i.currentTile=i.tileMap[a],"COI"===a){var h=i.animation.x+i.animationFrame*i.animation.w;t.drawImage(i.tileSet,h,i.currentTile.y,i.currentTile.w,i.currentTile.h,s,n.y,i.tileWidth,i.tileHeight)}else t.drawImage(i.tileSet,i.currentTile.x,i.currentTile.y,i.currentTile.w,i.currentTile.h,s,n.y,i.tileWidth,i.tileHeight)})})}},{key:"animate",value:function(t){t%(a.OPTIONS.FPS/this.animation.fps)==0&&(this.animationFrame=(this.animationFrame+1)%this.animationCount)}},{key:"checkGroundCollide",value:function(t,e){var i=!1;return this.currentMap[4].slice(1,5).forEach(function(n){var s=t.bottomLeftPoint.x-n.x,a=t.bottomRightPoint.x-n.x,h=t.y+t.height-e*t.dy-n.y,o=n.type;h>=0&&h<10&&"WTR"!==o&&(s<n.width&&s>0||a<n.width&&a>0)&&(i=!0)}),i}},{key:"lerp",value:function(t,e,i){return t+(e-t)*i}},{key:"collectCoin",value:function(t){var e=t.mapRow,i=t.mapColumn;this.vectorLevel[e][i].type="   "}},{key:"checkMapCollide",value:function(t,e){var i=[];return this.currentMap.map(function(n){n.slice(1,5).forEach(function(n){"   "!==n.type&&n.checkOverlap(t,e)&&i.push(n)})}),i}}]),t}();e.default=o},"./data/menuScene.js":/*!***************************!*\
  !*** ./data/menuScene.js ***!
  \***************************/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),h=i(/*! ./gameScene */"./data/gameScene.js"),o=n(h),r=i(/*! ./audioPlayer */"./data/audioPlayer.js"),u=n(r),l=i(/*! ./helpers */"./data/helpers.js"),c=function(){function t(e,i,n,a){s(this,t),this.game=e,this.images=i,this.levels=n,this.audio=a,this.trackList=["audio1","audio2","audio3"],this.trackNames=["Песня смешариков - ОМСК","В.Высоцкий - Я был слесарь 6 разряда","И.Растеряев - Комбайнеры"],this.background=this.images.menuScreen,this.audioPlayer=new u.default(this.audio,this.trackList),this.audioPlayer.play(),this.startButton=new l.Button("START","white",60,"Impact"),this.startButton.setX(this.game.width-450),this.startButton.setY(420)}return a(t,[{key:"render",value:function(t,e,i){e.clearRect(0,0,i.width,i.height),e.drawImage(this.background,0,0,this.game.width,this.game.height),e.fillStyle=this.startButton.color,e.font=this.startButton.font,this.startButton.setWidth(e),e.fillText(this.startButton.text,this.startButton.x,this.startButton.y),e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(735,550,400,130);var n=this.trackNames[this.audioPlayer.currentIndex];e.fillStyle="white",e.font="10pt Helvetica",e.fillText(n,935-e.measureText(n).width/2,585),e.beginPath(),e.moveTo(790,630),e.lineTo(800,640),e.lineTo(800,620),e.fill(),e.beginPath(),e.moveTo(800,630),e.lineTo(810,640),e.lineTo(810,620),e.fill(),this.audioPlayer.playing?(e.beginPath(),e.moveTo(945,630),e.lineTo(925,645),e.lineTo(925,615),e.fill()):(e.fillRect(925,615,10,30),e.fillRect(940,615,10,30)),e.moveTo(1090,630),e.lineTo(1080,640),e.lineTo(1080,620),e.fill(),e.beginPath(),e.moveTo(1080,630),e.lineTo(1070,640),e.lineTo(1070,620),e.fill()}},{key:"update",value:function(t){this.game.clicked.pressed&&this.game.checkClickPosition(this.startButton)&&(this.audioPlayer.stopPlaying(),this.game.setScene(o.default,this.images,this.levels,this.audio,this.levels.level1)),this.game.clicked.pressed&&this.game.checkClickPosition({x:790,y:640,width:20,height:20})&&(this.game.clicked.pressed=!1,this.audioPlayer.prev()),this.game.clicked.pressed&&this.game.checkClickPosition({x:925,y:645,width:20,height:30})&&(this.game.clicked.pressed=!1,this.audioPlayer.toggle()),this.game.clicked.pressed&&this.game.checkClickPosition({x:1070,y:640,width:20,height:20})&&(this.game.clicked.pressed=!1,this.audioPlayer.next())}}]),t}();e.default=c},"./data/player.js":/*!************************!*\
  !*** ./data/player.js ***!
  \************************/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(/*! ./config */"./data/config.js"),r=i(/*! ./helpers */"./data/helpers.js"),u=function(t){function e(t,i,a){n(this,e);var h=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,100,431,0,0,"player"));return h.scene=a,h.startY=h.y,h.ddyPrevious=0,h.images=t,h.player=h.images.tileSet,h.tileMap=i.tileMap,h.width=h.tileMap.playerRun.w,h.height=h.tileMap.playerRun.h,h.input={up:!1,down:!1},h.animation=h.tileMap.playerRun,h.gravity=o.OPTIONS.GRAVITY,h.impulse=o.OPTIONS.IMPULSE,h.slideDuration=o.OPTIONS.SLIDE_DURATION,h.isJumping=!1,h.isSliding=!1,h.slidingSound=null,h.isFalling=!1,h.isDead=!1,h.endMap=!1,h.animationFrame=0,h.animationCount=h.animation.frames,h.score=0,h.bottomLeftPoint={x:h.x+h.width/4,y:h.y+h.height},h.bottomRightPoint={x:h.x+(h.width-h.width/5),y:h.y+h.height},h.input={up:!1,down:!1},h}return a(e,t),h(e,[{key:"draw",value:function(t,e){t.fillStyle="white",t.font="30px Helvetica",t.fillText("Score: "+this.score,10,50);var i=this.animation.x+this.animationFrame*this.animation.w;t.drawImage(this.player,i,this.animation.y,this.animation.w,this.animation.h,this.x,this.y,this.width,this.height)}},{key:"update",value:function(t,e,i){this.isDead||(this.ddy=-this.gravity,i.checkGroundCollide(this,t)&&(this.isSliding||this.startRunning(),this.dy=0,this.ddy=0),!this.input.up||this.isJumping||this.isFalling||this.performJump(),!this.input.down||this.isSliding||this.isJumping||this.isFalling||this.performSlide(),this.ddy<0&&this.ddyPrevious>=0&&this.startFalling(),this.y>this.startY+this.height&&(this.dead(),this.scene.playSound("drown",.5)),this.isSliding&&(this.slideDuration>0?this.slideDuration-=1:this.startRunning()),this.endMap&&(this.dx=500),this.checkCollisions(i,t),this.updatePosition(t),this.ddyPrevious=this.ddy),this.animate(e)}},{key:"updatePosition",value:function(t){this.x=this.x+t*this.dx,this.y=this.y-t*this.dy,this.dy=this.dy+t*this.ddy}},{key:"performJump",value:function(){this.dy=0,this.ddy=this.impulse,this.isJumping=!0,this.isSliding=!1,this.input.up=!1,this.animationFrame=0,this.animation=this.tileMap.playerJump,this.scene.playSound("jump",.2),this.slidingSound&&this.stopSlidingSound()}},{key:"performSlide",value:function(){this.input.down=!1,this.isSliding=!0,this.animation=this.tileMap.playerSlide,this.animationCount=this.animation.frames,this.slideDuration=o.OPTIONS.SLIDE_DURATION,this.slidingSound=this.scene.playSound("slide",.5,!0)}},{key:"startFalling",value:function(){this.isFalling=!0,this.isSliding=!1,this.animationFrame=0,this.animation=this.tileMap.playerFall,this.slidingSound&&this.stopSlidingSound()}},{key:"startRunning",value:function(){this.y=this.startY,this.isJumping=!1,this.isFalling=!1,this.isSliding=!1,this.animation=this.tileMap.playerRun,this.animationCount=this.animation.frames,this.slidingSound&&this.stopSlidingSound()}},{key:"dead",value:function(){this.isJumping=!1,this.isFalling=!1,this.isSliding=!1,this.isDead=!0,this.animation=this.tileMap.playerDead,this.animationCount=this.animation.frames,this.slidingSound&&this.stopSlidingSound()}},{key:"animate",value:function(t){this.isFalling||this.isJumping||this.isDead?t%(o.OPTIONS.FPS/this.animation.fps)==0&&this.animationFrame<this.animation.frames-1&&(this.animationFrame+=1):t%(o.OPTIONS.FPS/this.animation.fps)==0&&(this.animationFrame=(this.animationFrame+1)%this.animationCount)}},{key:"checkCollisions",value:function(t,e){var i=this;t.checkMapCollide(this,e).forEach(function(e){"COI"===e.type?(i.score+=1,i.scene.playSound("coin",.3),t.collectCoin(e)):("BOX"===e.type||/S\d+/.test(e.type)&&!i.isSliding)&&(i.dead(),i.scene.playSound("dead",.3))})}},{key:"stopSlidingSound",value:function(){this.scene.stopSound(this.slidingSound),this.slidingSound=null}},{key:"setKey",value:function(t,e){this.input[t]=e}}]),e}(r.Cell);e.default=u},"./data/preloadScene.js":/*!******************************!*\
  !*** ./data/preloadScene.js ***!
  \******************************/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var i=[],n=!0,s=!1,a=void 0;try{for(var h,o=t[Symbol.iterator]();!(n=(h=o.next()).done)&&(i.push(h.value),!e||i.length!==e);n=!0);}catch(t){s=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(s)throw a}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),h=i(/*! ./config */"./data/config.js"),o=i(/*! ./menuScene */"./data/menuScene.js"),r=function(t){return t&&t.__esModule?t:{default:t}}(o),u=function(){function t(e){n(this,t),this.game=e,this.images=null,this.levels=null,this.audio=null,this.elapsedTime=0,this.logoRevealTime=3,this.textTypingTime=6,this.sceneDisplayTime=10,this.logo="naKolenKe GAMES",this.infoText="No Petroviches were harmed in making this game.\nAlmost all the used materials are either stolen or not.\nNo rights are protected... Mama I'm criminal...",this.loadingCount=0,this.loadingDone=!1,this.assetsLength=h.OPTIONS.IMAGES.length+h.OPTIONS.LEVEL_URL.length+h.OPTIONS.AUDIO.length,this.preload(h.OPTIONS.IMAGES,h.OPTIONS.LEVEL_URL,h.OPTIONS.AUDIO)}return a(t,[{key:"render",value:function(t,e,i){if(e.clearRect(0,0,i.width,i.height),e.fillStyle="black",e.fillRect(0,0,i.width,i.height),e.globalAlpha=Math.min(1,this.elapsedTime/this.logoRevealTime),e.font="80pt Helvetica",e.shadowColor="#fff",e.shadowBlur=7,e.lineWidth=5,e.strokeText(this.logo,(i.width-e.measureText(this.logo).width)/2,i.height/2-100),e.shadowBlur=0,e.fillStyle="#be3034",e.fillText(this.logo,(i.width-e.measureText(this.logo).width)/2,i.height/2-100),this.elapsedTime>=this.logoRevealTime){var n=Math.min(1,(this.elapsedTime-this.logoRevealTime)/this.textTypingTime),s=this.infoText.substr(0,Math.floor(this.infoText.length*n)).split("\n");e.font="20pt Helvetica",e.fillStyle="#bbb",s.forEach(function(t,n){e.fillText(t,(i.width-e.measureText(t).width)/2,i.height/2+40*n+100)})}var a=Math.floor(100*this.loadingCount/this.assetsLength);e.fillStyle="white",e.font="10pt Helvetica";var h=void 0;h=this.loadingDone?"Loading done. You can press ESC for skip":"Loading... ("+a+"%)";var o=e.measureText(h).width;e.fillText(h,i.width/2-o/2,645),e.fillRect(0,650,i.width*a/100,20)}},{key:"update",value:function(t){this.elapsedTime+=t,(this.elapsedTime>=this.sceneDisplayTime||this.game.checkKeyPress(27))&&this.loadingDone&&this.game.setScene(r.default,this.images,this.levels,this.audio)}},{key:"preload",value:function(t,e,i){var n=this,a=[this.loadImages(t),this.loadLevel(e),this.loadAudio(i)];Promise.all(a).then(function(t){var e=s(t,3),i=e[0],a=e[1],h=e[2];n.images=i,n.levels=a,n.audio=h,n.loadingDone=!0})}},{key:"loadImages",value:function(t){var e=this,i={},n=t.map(function(t){return new Promise(function(n,s){var a=document.createElement("img"),h=t.substr(0,t.lastIndexOf("."));i[h]=a,i[h].src="assets/images/"+t,a.onload=function(){e.loadingCount+=1,n()},a.onerror=s})});return Promise.all(n).then(function(){return i})}},{key:"loadLevel",value:function(t){var e=this,i={},n=t.map(function(t){return fetch("./assets/levels/"+t+".json").then(function(t){return t.json()}).then(function(n){e.loadingCount+=1,i[t]=n})});return Promise.all(n).then(function(){return i})}},{key:"loadAudio",value:function(t){var e=this,i=new AudioContext,n={context:i},s=t.map(function(t){return fetch("./assets/audio/"+t+".mp3").then(function(t){return t.arrayBuffer()}).then(function(s){return i.decodeAudioData(s,function(i){e.loadingCount+=1,n[t]=i})})});return Promise.all(s).then(function(){return n})}}]),t}();e.default=u},"./main.js":/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(/*! ./data/config */"./data/config.js"),h=i(/*! ./data/preloadScene */"./data/preloadScene.js"),o=function(t){return t&&t.__esModule?t:{default:t}}(h),r=function(){function t(){n(this,t),this.canvas=document.getElementById("canvas"),this.canvas.width=a.OPTIONS.WIDTH,this.canvas.height=a.OPTIONS.HEIGHT,this.width=this.canvas.width,this.height=this.canvas.height,this.ctx=this.canvas.getContext("2d"),this.keys={},this.clicked={},this.slomo=1,this.activeScene=o.default,this.setup(this.activeScene)}return s(t,[{key:"setScene",value:function(t,e,i,n,s){this.activeScene=new t(this,e,i,n,s)}},{key:"initInput",value:function(){var t=this;this.keys={},document.addEventListener("keydown",function(e){t.keys[e.which]=!0}),document.addEventListener("keyup",function(e){t.keys[e.which]=!1}),this.canvas.addEventListener("mousedown",function(e){t.clicked.pressed=!0,t.clicked.x=e.pageX-t.canvas.offsetLeft,t.clicked.y=e.pageY-t.canvas.offsetTop}),this.canvas.addEventListener("mouseup",function(e){t.clicked.pressed=!1})}},{key:"checkKeyPress",value:function(t){var e=!!this.keys[t];return this.lastKeyState=this.lastKeyState||{},void 0===this.lastKeyState[t]?(this.lastKeyState[t]=e,!1):this.lastKeyState[t]!==e&&(this.lastKeyState[t]=e,e)}},{key:"checkClickPosition",value:function(t){return this.clicked.x>=t.x&&this.clicked.x<=t.x+t.width&&this.clicked.y>=t.y-t.height&&this.clicked.y<=t.y}},{key:"setup",value:function(t,e,i,n){this.setScene(t,e,i,n),this.initInput(),this.start()}},{key:"update",value:function(t,e){this.activeScene.update(t,e)}},{key:"render",value:function(t){this.ctx.save(),this.activeScene.render(t,this.ctx,this.canvas),this.ctx.restore()}},{key:"start",value:function(){var t=this,e=void 0,i=0,n=0,s=performance.now(),h=1/a.OPTIONS.FPS,o=this.slomo,r=o*h,u=function u(){for(e=performance.now(),i+=Math.min(1,(e-s)/1e3);i>r;)i-=r,t.update(h,n),n+=1;t.render(i/o*a.OPTIONS.FPS),s=e,requestAnimationFrame(u)};requestAnimationFrame(u)}}]),t}();new r},0:/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
function(t,e,i){t.exports=i(/*! ./main.js */"./main.js")}});
//# sourceMappingURL=bundle.js.map
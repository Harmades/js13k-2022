function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=i.parcelRequired7fa;function o(e){return Math.floor(e)}function s(e){return Math.ceil(e)}function l(e,t){return Math.min(e,t)}function d(e){return Math.cos(e)}function u(e){return Math.sin(e)}function h(e,t){return Math.pow(e,t)}function p(e){return document.getElementById(e)}null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},i.parcelRequired7fa=a),a.register("dRo73",(function(t,i){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var a={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("dRo73").register(JSON.parse('{"1MGML":"index.064b7741.js","fnLwo":"texture.bca4a932.png"}'));const y=Math.PI;var c;c=JSON.parse('{"frames":{"assets/boss.png":{"frame":{"x":0,"y":0,"w":28,"h":38},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":28,"h":38},"sourceSize":{"w":28,"h":38},"pivot":{"x":0.5,"y":0.5}},"assets/boss2.png":{"frame":{"x":28,"y":0,"w":29,"h":38},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":29,"h":38},"sourceSize":{"w":29,"h":38},"pivot":{"x":0.5,"y":0.5}},"assets/shield.png":{"frame":{"x":0,"y":38,"w":28,"h":28},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":28,"h":28},"sourceSize":{"w":28,"h":28},"pivot":{"x":0.5,"y":0.5}},"assets/cerbere.png":{"frame":{"x":28,"y":38,"w":20,"h":17},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":20,"h":17},"sourceSize":{"w":20,"h":17},"pivot":{"x":0.5,"y":0.5}},"assets/cerbere2.png":{"frame":{"x":57,"y":0,"w":20,"h":18},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":20,"h":18},"sourceSize":{"w":20,"h":18},"pivot":{"x":0.5,"y":0.5}},"assets/friendly_vertical_laser.png":{"frame":{"x":48,"y":38,"w":7,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":16},"sourceSize":{"w":7,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/border2.png":{"frame":{"x":28,"y":55,"w":16,"h":11},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":5,"w":16,"h":11},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/basic_cobble.png":{"frame":{"x":57,"y":18,"w":16,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":16,"h":16},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/vertical_laser.png":{"frame":{"x":55,"y":38,"w":7,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":16},"sourceSize":{"w":7,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/skeleton.png":{"frame":{"x":62,"y":34,"w":13,"h":16},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":13,"h":16},"sourceSize":{"w":15,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/border1.png":{"frame":{"x":0,"y":66,"w":16,"h":14},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":16,"h":14},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/basic_cobble2.png":{"frame":{"x":44,"y":55,"w":16,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":16,"h":16},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/imp.png":{"frame":{"x":62,"y":50,"w":10,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":10,"h":16},"sourceSize":{"w":10,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/zombie.png":{"frame":{"x":73,"y":18,"w":11,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":11,"h":16},"sourceSize":{"w":11,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/power_up_shot.png":{"frame":{"x":16,"y":66,"w":14,"h":12},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":3,"w":14,"h":12},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/floating_eye.png":{"frame":{"x":30,"y":66,"w":14,"h":13},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":13},"sourceSize":{"w":14,"h":13},"pivot":{"x":0.5,"y":0.5}},"assets/power_up_multi_shot.png":{"frame":{"x":60,"y":66,"w":9,"h":13},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":1,"w":9,"h":13},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/power_up_shield.png":{"frame":{"x":77,"y":0,"w":10,"h":12},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":2,"w":10,"h":12},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/friendly_vertical_laser_top.png":{"frame":{"x":77,"y":12,"w":7,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":5},"sourceSize":{"w":7,"h":5},"pivot":{"x":0.5,"y":0.5}},"assets/vertical_laser_top.png":{"frame":{"x":44,"y":71,"w":7,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":5},"sourceSize":{"w":7,"h":5},"pivot":{"x":0.5,"y":0.5}},"assets/friendly_bullet.png":{"frame":{"x":51,"y":71,"w":5,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":5,"h":5},"sourceSize":{"w":5,"h":5},"pivot":{"x":0.5,"y":0.5}},"assets/enemie_bullet.png":{"frame":{"x":75,"y":34,"w":5,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":5,"h":5},"sourceSize":{"w":5,"h":5},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"http://free-tex-packer.com","version":"0.6.7","image":"texture.png","format":"RGBA8888","size":{"w":87,"h":80},"scale":1}}');var f;f=new URL(a("dRo73").resolve("fnLwo"),import.meta.url).toString();const m={debug:!0,width:1200,height:576,worldWidth:400,worldHeight:192,tileSize:16,worldTileWidth:25,worldTileHeight:12,playerSpeedX:100,playerSpeedY:100,playerWidth:15,playerHeight:14,playerOx:3,playerOy:3,playerBulletSpeedX:200,playerBulletSpeedY:100,playerBulletsPoolSize:200,playerSprayOpen:1.2,playerBulletWidth:3,playerBulletHeight:3,playerInvincibleTime:.8,playerBlinkPeriod:.1,playerAnimationTime:.2,enemyWidth:13,enemyHeight:16,enemyOx:0,enemyOy:0,enemyBulletSpeedX:150,enemyBulletSpeedY:50,enemyBulletsPoolSize:50,enemyShootFrequency:1,enemyBulletPoolSize:1e3,enemySprayOpen:1,bossWidth:22,bossHeight:33,bossOx:6,bossOy:3,bossRxMin:100,bossRxMax:200,bossRyMin:100,bossRyMax:200,bossSpeed:300,bossBulletSpeedX:100,bossBulletSpeedY:100,bossBulletsPoolSize:200,bossBigBulletWidth:25,bossBigBulletHeight:25,bossBigBulletExplosionTick:200,bossPatternFrequency:5,bossSprayOpen:2,bossLife:100,bulletWidth:3,bulletHeight:3,bulletOx:1,bulletOy:1,bulletMaxHeight:500,bulletsVariance:20,bulletsMaxdY:200,waveEasyCount:3,waveEasyTimeMin:4,waveEasyTimeMax:6,waveEasyAmplitudeMin:10,waveEasyAmplitudeMax:50,waveEasyFrequencyMin:.1,waveEasyFrequencyMax:.25,waveEasyRxMin:100,waveEasyRxMax:200,waveEasyRyMin:100,waveEasyRyMax:200,waveEasySyMin:0,waveEasySyMax:590,waveMediumCount:3,waveMediumTimeMin:4,waveMediumTimeMax:6,waveMediumAmplitudeMin:10,waveMediumAmplitudeMax:50,waveMediumFrequencyMin:.1,waveMediumFrequencyMax:.25,waveMediumRxMin:100,waveMediumRxMax:200,waveMediumRyMin:100,waveMediumRyMax:200,waveMediumSyMin:0,waveMediumSyMax:590,waveHardCount:3,waveHardTimeMin:4,waveHardTimeMax:6,waveHardAmplitudeMin:10,waveHardAmplitudeMax:50,waveHardFrequencyMin:.1,waveHardFrequencyMax:.25,waveHardRxMin:100,waveHardRxMax:200,waveHardRyMin:100,waveHardRyMax:200,waveHardSyMin:0,waveHardSyMax:590,powerUpMaxCount:5,engineTimeResolution:1,epsilon:.1,delta:.001};let x,w=m.width/m.worldWidth,g=m.height/m.worldHeight;function b(e,i){const n=new Image(t(c).meta.size.w,t(c).meta.size.h);return n.src=e,i&&(n.onload=i),n}function S(e,t,i){const n=p(e);n.width=t,n.height=i;const r=n.getContext("2d");return r.imageSmoothingEnabled=!1,r}function v(e,i){!function({gameCanvas:e,image:i},{x:n,y:r,ox:a,oy:o,sprite:s}){if(!i.complete)return;const l=t(c).frames[s].frame;e.drawImage(i,l.x,l.y,l.w,l.h,(n-a)*w,(r-o)*g,l.w*w,l.h*g)}(e,i),m.debug&&function({gameCanvas:e},{x:t,y:i,w:n,h:r,color:a}){e&&(e.fillStyle=a??"rgba(255, 165, 0, 0.5)"),e.fillRect(t*w,i*g,n*w,r*g)}(e,i)}function M({backgroundCanvas:e,offscreenCanvas:i,image:n},{sprite:r}){if(!n.complete)return;const a=t(c).frames[r].frame;i.drawImage(n,a.x,a.y,a.w,a.h,0,0,i.canvas.width,i.canvas.height);const o=e.createPattern(i.canvas,"repeat");e.fillStyle=o,e.fillRect(0,0,m.width,m.height)}function H(e){e.clearRect(0,0,e.canvas.width,e.canvas.height)}function T(e,t){M(e,t)}function R(e,t){const i=[];for(let n=0;n<t;n++)i.push(e());return i}function P(e,t){return{x:e,y:t}}function z(e,t){return P(e.x+t.x,e.y+t.y)}function E(e=m.bulletHeight,t=m.bulletWidth,i=!1,n){return{x:0,y:0,w:t,h:e,dx:0,dy:0,isActive:!1,dh:0,dhDirection:0,explodeTick:0,shielded:i,sprite:n?"assets/friendly_bullet.png":"assets/enemie_bullet.png",ox:m.bulletOx,oy:m.bulletOy}}function C(e){if(!e.isActive)return;e.x+=e.dx*m.delta;const t=e.h;if(e.h=l(e.h+e.dh,m.bulletMaxHeight),e.h==m.bulletMaxHeight&&(e.dy=-30*u(e.x/m.worldWidth*6*y)),e.y+=e.dy*m.delta-(e.h-t)*e.dhDirection,0!=e.explodeTick&&(e.explodeTick-=1,0==e.explodeTick)){if(null==e.bullets)return void A(e);const t=e.dx/2;for(let i=0;i<4;i++){let n=e.bullets.bullets.find((e=>!e.isActive));if(null==n)return void A(e);W(e.bullets,n,e,P(h(-1,i)*t,h(-1,o(i/2))*t+e.dy))}A(e)}(e.x<0||e.x>m.worldWidth)&&A(e),e.h==m.bulletHeight&&(e.y+e.h/2<0||e.y>m.worldHeight+e.h/2)&&A(e)}function B(e,t){t.isActive&&v(e,t)}function W(e,t,i,n){t.x=i.x,t.y=i.y,t.dx=n.x,t.dy=n.y,t.isActive=!0,t.bullets=e}function A(e){e.isActive=!1,e.dx=0,e.dy=0,e.x=0,e.y=0,null!=e.bullets&&(e.h=e.bullets.bh,e.w=e.bullets.bw,e.shielded=e.bullets.shielded),e.dh=0}function O(...e){return e[Math.floor(Math.random()*e.length)]}function _(e,t){return Math.random()*(t-e)+e}function q(e,t){return e=Math.ceil(e),t=Math.floor(t)+1,Math.floor(Math.random()*(t-e)+e)}function F(){return`rgba(${q(0,255)}, ${q(0,255)}, ${q(0,255)}, 0.5)`}var k;function D(e,t,i,n,r,a,o=!1,s){return{bullets:R((()=>E(r,a,o,s)),e),baseSpeedX:t,baseSpeedY:i,lastRandY:0,sprayOpen:n,shielded:o,bh:r,bw:a}}function Y(e,t){let i=_(-t,t),n=e.lastRandY+i;var r,a;return r=l(m.bulletsMaxdY,n),a=-m.bulletsMaxdY,n=Math.max(r,a),e.lastRandY=n,n}function I(e,t,i,n,r=0){let a=Y(e,r);if(n<x.ConicEnd)for(let o=0;o<=n;o++){let s=e.bullets.find((e=>!e.isActive));if(null==s)return;W(e,s,i,P(t,e.baseSpeedY*d(y*((o+1)/(n+2)))*e.sprayOpen+a)),a=Y(e,r)}if(n==x.Straight){let n=e.bullets.find((e=>!e.isActive));if(null==n)return;n.dh=t/m.playerBulletSpeedX*.2,n.dhDirection=.5,W(e,n,i,P(t,a))}if(n==x.StraightHole){let n=e.bullets.find((e=>!e.isActive));if(null==n)return;if(n.dh=.4,n.dhDirection=0,W(e,n,i,P(t,a+150*n.dh+10)),n=e.bullets.find((e=>!e.isActive)),null==n)return;n.dh=.4,n.dhDirection=1,W(e,n,i,P(t,a-(150*n.dh+10)))}if(n==x.Explosion){let n=e.bullets.find((e=>!e.isActive));if(null==n)return;n.w=m.bossBigBulletWidth,n.h=m.bossBigBulletHeight,n.bullets=e,n.explodeTick=m.bossBigBulletExplosionTick,W(e,n,z(i,P(m.bossBigBulletWidth,-m.bossBigBulletHeight/2)),P(t,a))}if(n==x.UpAndDown){for(let o=0;o<=10;o++){let s=e.bullets.find((e=>!e.isActive));if(null==s)return;W(e,s,z(i,P(m.bossWidth/2,m.bossHeight/2)),P(t*d(y*((o+1)/(n+2)))*.5+a,e.baseSpeedY)),a=Y(e,r)}for(let o=0;o<=10;o++){let s=e.bullets.find((e=>!e.isActive));if(null==s)return;W(e,s,z(i,P(m.bossWidth/2,-m.bossHeight/2)),P(t*d(y*((o+1)/(n+2)))*.5+a,-e.baseSpeedY)),a=Y(e,r)}}}function U(e){for(let t of X(e))C(t)}function L(e,t){for(let i of X(t))B(e,i)}function X(e){return e.bullets.filter((e=>e.isActive))}function G(e){for(let t of e.bullets)A(t)}(k=x||(x={}))[k.Single=0]="Single",k[k.Double=1]="Double",k[k.Triple=2]="Triple",k[k.Quadruple=3]="Quadruple",k[k.Quintuple=4]="Quintuple",k[k.Sixtuple=5]="Sixtuple",k[k.ConicEnd=6]="ConicEnd",k[k.Straight=7]="Straight",k[k.StraightHole=8]="StraightHole",k[k.Explosion=9]="Explosion",k[k.UpAndDown=10]="UpAndDown";const Q={waitTime:2,tx:.8*m.worldWidth-m.bossWidth,ty:.5*m.worldHeight-m.bossHeight/2,dx:5,dy:15,shootPattern:[x.Sixtuple,x.Quintuple,x.Triple,x.UpAndDown],shootCount:[4,3,5,5],shootFrequency:[4,3,2,5],shootSpeed:[200,120,250,50],shootRandom:[150,300,300,150],repeat:3,resetPosOnRepeat:!0},N={waitTime:3,tx:m.worldWidth-m.bossWidth,ty:.2*m.worldHeight,dx:0,dy:60,shootPattern:[x.UpAndDown,x.StraightHole],shootCount:[5,40],shootFrequency:[5,3],shootSpeed:[200,100],repeat:1,shootRandom:[0,20],resetPosOnRepeat:!0},j={waitTime:0,tx:m.worldWidth-m.bossWidth,ty:.5*m.worldHeight-m.bossHeight,dx:-50,dy:0,shootPattern:[x.Explosion,x.Double],shootCount:[10,5],shootFrequency:[3,5],shootSpeed:[500,600],repeat:2,shootRandom:[600,100],resetPosOnRepeat:!0};function $(){const e=F();return{x:.5*m.worldWidth-m.bossWidth/2,y:.5*m.worldHeight-m.bossHeight/2,w:m.bossWidth,h:m.bossHeight,dx:0,dy:0,color:e,bullets:D(m.bossBulletsPoolSize,m.bossBulletSpeedX,m.bossBulletSpeedY,m.bossSprayOpen,m.bulletWidth,m.bulletHeight,void 0,!1),elapsedTime:0,currentPattern:N,shootElapsedTime:0,newPatternTime:0,shootCount:0,targetReached:!1,patternIndex:0,repeatCount:0,life:m.bossLife,sprite:"assets/boss.png",ox:m.bossOx,oy:m.bossOy}}function J(e){U(e.bullets),e.elapsedTime+=m.delta,e.shootElapsedTime+=m.delta;const t=m.bossSpeed;if(0!=e.newPatternTime){if(!(e.elapsedTime>=e.newPatternTime))return;e.newPatternTime=0,e.currentPattern==Q?e.currentPattern=N:e.currentPattern==N?e.currentPattern=j:e.currentPattern==j&&(e.currentPattern=Q)}if(e.targetReached?(e.y>.9*m.worldHeight-m.bossHeight||e.y<.1*m.worldHeight)&&(e.dy*=-1):(e.x>e.currentPattern.tx?e.dx=-t:e.x<e.currentPattern.tx&&(e.dx=t),e.y>e.currentPattern.ty?e.dy=-t:e.y<e.currentPattern.ty&&(e.dy=t)),e.x+=e.dx*m.delta,e.y+=e.dy*m.delta,e.targetReached)if(e.shootCount<e.currentPattern.shootCount[e.patternIndex])e.shootElapsedTime>=1/e.currentPattern.shootFrequency[e.patternIndex]&&(e.shootCount+=1,e.shootElapsedTime=0,null!=e.currentPattern.shootPattern[e.patternIndex]&&I(e.bullets,e.dx-e.currentPattern.shootSpeed[e.patternIndex],z(e,P(0,m.bossHeight/2)),e.currentPattern.shootPattern[e.patternIndex],e.currentPattern.shootRandom[e.patternIndex]));else if(e.shootCount=0,e.bullets.lastRandY=0,e.patternIndex+1==e.currentPattern.shootFrequency.length){if(e.patternIndex=0,e.repeatCount+1==e.currentPattern.repeat)return e.repeatCount=0,e.targetReached=!1,void(e.newPatternTime=e.elapsedTime+e.currentPattern.waitTime);e.repeatCount+=1,e.currentPattern.resetPosOnRepeat&&(e.targetReached=!1)}else e.patternIndex+=1;else if(!(o(e.x)!=e.currentPattern.tx&&s(e.x)!=e.currentPattern.tx||o(e.y)!=e.currentPattern.ty&&s(e.y)!=e.currentPattern.ty))return e.targetReached=!0,e.dx=e.currentPattern.dx,void(e.dy=e.currentPattern.dy)}function V(e,t){L(e,t.bullets),v(e,t)}function K(e){e.x=.5*m.worldWidth-m.bossWidth/2,e.y=.5*m.worldHeight-m.bossHeight/2,e.dx=0,e.dy=0,G(e.bullets),e.elapsedTime=0,e.currentPattern=N,e.shootElapsedTime=0,e.newPatternTime=0,e.shootCount=0,e.targetReached=!1,e.patternIndex=0,e.repeatCount=0}let Z;var ee;let te;function ie(e,t,i,n,r,a,o,s,l=x.Single,d){return{x:m.worldWidth,y:e,sy:e,dx:0,dy:0,w:m.enemyWidth,h:m.enemyHeight,pattern:t,time:n,color:i,dead:!1,amplitude:r,frequency:a,rx:o,ry:s,elapsedTime:0,shootElapsedTime:0,distance:0,direction:Z.Left,bullets:D(m.enemyBulletsPoolSize,m.enemyBulletSpeedX,m.enemyBulletSpeedY,m.enemySprayOpen,m.bulletWidth,m.bulletHeight,void 0,!1),bulletsPattern:l,sprite:d,ox:m.enemyOx,oy:m.enemyOy}}function ne(e){if(U(e.bullets),e.dead)return;const t=e.frequency,i=e.amplitude,n=(m.worldWidth+m.enemyWidth)/e.time;e.elapsedTime+=m.delta,e.shootElapsedTime+=m.delta,e.pattern==te.Circular&&(e.dx=2*y*t*i*d(2*y*t*e.elapsedTime)-n,e.dy=2*y*t*i*u(2*y*t*e.elapsedTime)),e.pattern==te.Rectangular&&(null==e.direction&&(e.direction=Z.Left),e.direction==Z.Left&&(e.distance>=e.rx&&(e.direction=O(Z.Up,Z.Down),e.distance=0),e.dx=-n,e.dy=0,e.distance+=-e.dx*m.delta),e.direction,Z.Right,e.direction==Z.Up&&(e.distance>=e.ry&&(e.direction=Z.Left,e.distance=0),e.dy=-n/2,e.dx=0,e.distance+=-e.dy*m.delta),e.direction==Z.Down&&(e.distance>=e.ry&&(e.direction=Z.Left,e.distance=0),e.dy=n/2,e.dx=0,e.distance+=e.dy*m.delta)),e.pattern==te.Triangular&&(e.y>=e.sy+i&&(e.dy=-4*i*t),(0==e.dy||e.y<=e.sy-i)&&(e.dy=4*i*t),e.dx=-n),e.pattern==te.Straight&&(e.dx=-n),e.x+=e.dx*m.delta,e.y+=e.dy*m.delta,e.shootElapsedTime>=1/m.enemyShootFrequency&&(e.shootElapsedTime=0,I(e.bullets,-n-m.enemyBulletSpeedX,z(e,P(0,m.enemyHeight/2)),e.bulletsPattern))}function re(e,t){L(e,t.bullets),t.dead||v(e,t)}(ee=Z||(Z={}))[ee.Up=0]="Up",ee[ee.Left=1]="Left",ee[ee.Right=2]="Right",ee[ee.Down=3]="Down",function(e){e[e.Straight=0]="Straight",e[e.Triangular=1]="Triangular",e[e.Circular=2]="Circular",e[e.Rectangular=3]="Rectangular"}(te||(te={}));const ae={up:!1,down:!1,left:!1,right:!1,space:!1,shift:!1,m:!1};function oe(e){let t=!0;return()=>ae[e]&&t?(t=!1,!0):(ae[e]||(t=!0),!1)}onkeydown=onkeyup=e=>function(e,t){38!=e&&90!=e&&87!=e||(ae.up=t);39!=e&&68!=e||(ae.right=t);40!=e&&83!=e||(ae.down=t);37!=e&&65!=e&&81!=e||(ae.left=t);16==e&&(ae.shift=t);32==e&&(ae.space=t);77==e&&(ae.m=t)}(e.keyCode,null!=e.type[5]);let se,le,de,ue,he,pe=null,ye=(...e)=>{let t=pe.createBufferSource(),i=pe.createBuffer(e.length,e[0].length,me);return e.map(((e,t)=>i.getChannelData(t).set(e))),t.buffer=i,t.connect(pe.destination),t.start(),t},ce=(e=1,t=.05,i=220,n=0,r=0,a=.1,o=0,s=1,l=0,d=0,u=0,h=0,p=0,y=0,c=0,f=0,m=0,x=1,w=0,g=0)=>{let b,S,v=2*Math.PI,M=l*=500*v/me**2,H=(0<c?1:-1)*v/4,T=i*=(1+2*t*Math.random()-t)*v/me,R=[],P=0,z=0,E=0,C=1,B=0,W=0,A=0;for(d*=500*v/me**3,c*=v/me,u*=v/me,h*=me,p=me*p|0,S=(n=99+me*n)+(w*=me)+(r*=me)+(a*=me)+(m*=me)|0;E<S;R[E++]=A)++W%(100*f|0)||(A=o?1<o?2<o?3<o?Math.sin((P%v)**3):Math.max(Math.min(Math.tan(P),1),-1):1-(2*P/v%2+2)%2:1-4*Math.abs(Math.round(P/v)-P/v):Math.sin(P),A=(p?1-g+g*Math.sin(2*Math.PI*E/p):1)*(0<A?1:-1)*Math.abs(A)**s*e*fe*(E<n?E/n:E<n+w?1-(E-n)/w*(1-x):E<n+w+r?x:E<S-m?(S-E-m)/a*x:0),A=m?A/2+(m>E?0:(E<S-m?1:(S-E)/m)*R[E-m|0]/2):A),b=(i+=l+=d)*Math.sin(z*c-H),P+=b-b*y*(1-1e9*(Math.sin(E)+1)%2),z+=b-b*y*(1-1e9*(Math.sin(E)**2+1)%2),C&&++C>h&&(i+=u,T+=u,C=0),!p||++B%p||(i=T,l=M,C=C||1);return R},fe=.3,me=44100,xe=(e,t,i,n=125)=>{let r,a,o,s,l,d,u,h,p,y,c,f,m,x,w,g=0,b=[],S=[],v=[],M=0,H=0,T=1,R={},P=me/n*60>>2;for(;T;M++)b=[T=h=c=m=0],i.map(((n,c)=>{for(u=t[n][M]||[0,0,0],T|=!!t[n][M],w=m+(t[n][0].length-2-!h)*P,x=c==i.length-1,a=2,s=m;a<u.length+x;h=++a){for(l=u[a],p=a==u.length+x-1&&x||y!=(u[0]||0)|l|0,o=0;o<P&&h;o++>P-99&&p&&(f+=(f<1)/99))d=(1-f)*b[g++]/2||0,S[s]=(S[s]||0)-d*H+d,v[s]=(v[s++]||0)+d*H+d;l&&(f=l%1,H=u[1]||0,(l|=0)&&(b=R[[y=u[g=0]||0,l]]=R[[y,l]]||(r=[...e[y]],r[2]*=2**((l-12)/12),l>0?ce(...r):[])))}m=w}));return[S,v]},we=[[[,0,261,,,2,2,,,,,,,,,,.01],[,0,32,.05,,.2,3,5],[3,0,43,,,.25,,,,,,,,2],[1.6,0,655,,,,3,1.65,,,,,.02,3.8,-.1,,.2],[,0,232,.01,.09,.15,2,,,,,,154.87,,,,.26]],[[[,,4,,,,,,3,,,,,,,,,,,,,,,,,,,,,,,,,,4,,,,,,3,,,,,,,,,,,,,,,,,,,,,,3,,,,],[,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[2,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[4,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,,,,,,,,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,22,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[2,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[4,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,,,,,,,,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,22,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[4,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,,,,,,,,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,15,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,13]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[4,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,,,,,,,,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,22,,,,,,,,],[4,,13,13,13,13,13,13,12,12,12,12,12,12,12,,,,12,12,12,12,,,,,12,12,12,12,12,12,12,12,13,13,13,13,13,13,10,10,10,10,10,10,,,,,10,10,10,10,,,,,,10,10,10,10,10,10,10],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[4,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,,,,,,,,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,15,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,13]]],[0,1,1,2,2,3,3,4,4,5,5,3,3,4,4,5,5,2,2],135,undefined],ge=[[[.5,0,128,,.08,.5,3],[.8,0,32,,.07,.11,2,0,,,.5,.01],[2,0,4e3,,,.03,2,1.25,,,,,.02,6.8,-.3,,.5],[.9,0,32,,,.35,3,2]],[[[1,,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,15,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,21],[,,15,,20,15,,18,,,,,,,21,16,15,,15,,20,15,,20,,,,,,,23,18,15,,],[2,,,,,,,,,,13,13,13,13,,,,,,,,,,,,,1,1,1,1,,,,,]],[[1,,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,15,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,21],[,,15,,20,15,,18,,,,,,,21,16,15,,15,,20,15,,20,,,,,,,23,18,15,,],[2,,,,,,,,,,13,13,13,13,,,,,,,,,,,,,1,1,1,1,,,,,],[3,,20,,,,20,,,,20,,,,20,,15,,13,,,,13,,,,13,,,,13,,16,,]],[[1,,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,15,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,21]]],[2,2,0,0,1,0,1,0,1,0],80],be=[[[1.5,0,130,,,.5,,,,,,,,,,,,.15,.6],[,0,130,.01,.09,.15,2,,,,,,154.87,,,,.26],[1.4,0,32,,,.25,3,5]],[[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[1,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,10,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,13,,],[,,36,32,34,,,,,,29,25,27,,,,,,22,,,,22,,,,,,,,,,,,22,25,24,,,,,,29,32,30,,,,,,25,,,,25,,,,25,,,,25,,,,],[2,,12,,12,,12,,12,,12,,12,,12,,12,,10,,10,,10,,10,,10,,10,,10,,10,,12,,12,,12,,12,,12,,12,,12,,12,,10,,10,,10,,10,,10,,10,,10,,5,,]],[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[1,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,10,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,13,,],[,,36,32,34,,,,,,29,25,27,,,,,,22,,,,22,,,,,,,,,,,,22,25,24,,,,,,29,32,30,,,,,,25,,,,25,,,,25,,,,25,,,,]],[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[,,36,32,34,,,,,,29,25,27,,,,,,22,,,,22,,,,,,,,,,,,22,25,24,,,,,,29,32,30,,,,,,25,,,,25,,,,25,,,,25,,,,]],[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[1,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,10,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,13,,]]],[2,3,3,1,1,0,0,0,0,0,0],120],Se=[[[1.5,0,32,.05,.25,,3,3,,,,,,,,,3,.6],[,0,128,,,.2,2,,,,,,,,,.02,.01],[,0,1024,,,.3,2,.2,-.1,-.15,9,.02,,.1,.12,,.06]],[[[,,13,,13,,,,,,6,,6,,,,,,8,,8,,,,,,3,,3,,,,,,],[1,,25,,25,,25,,25,,18,,18,,18,,18,,12,,12,,12,,12,,3,,3,,3,,3,,],[1,,22,,22,,22,,22,,15,,15,,15,,15,,8,,8,,8,,8,,6,,6,,6,,6,,],[2,,25,22,,,,,,,15,18,,15,,,,,12,,,,,,,,6,,6,6,,3,,,]],[[,,13,,13,,,,,,6,,6,,,,,,8,,8,,,,,,3,,3,,,,,,],[1,,25,,25,,25,,25,,18,,18,,18,,18,,12,,12,,12,,12,,3,,3,,3,,3,,],[1,,22,,22,,22,,22,,15,,15,,15,,15,,8,,8,,8,,8,,6,,6,,6,,6,,],[2,,25,22,,,,,,,15,15,,18,,,,,8,8,,12,,,,,6,,6,6,,3,,,]],[[,,13,,13,,,,,,6,,6,,,,,,8,,8,,,,,,3,,3,,,,,,],[1,,25,,,,,,,,18,,,,18,,,,12,,,,,,,,3,,,,3,,,,],[1,,22,,,,22,,,,15,,,,,,,,8,,,,8,,,,6,,,,,,,,]]],[2,2,0,1,0,1],120];var ve;(ve=he||(he={}))[ve.Speed=0]="Speed",ve[ve.Shield=1]="Shield",ve[ve.Multishot=2]="Multishot";let Me=0,He=0,Te=0,Re=null;function Pe(e){p("ui-shop").style.display=e?"flex":"none"}function ze(e){p("current-money").innerText=e.toString()}window.onPowerUpChanged=function(e,t){const i=Re.player;Fe(i,-t)&&(e==he.Speed&&(Me+=t),e==he.Shield&&(He+=t),e==he.Multishot&&(Te+=t),Me<0&&(Me=0,Fe(i,t)),He<0&&(He=0,Fe(i,t)),Te<0&&(Te=0,Fe(i,t)),p("current-speed").innerText=Me.toString(),p("current-shield").innerText=He.toString(),p("current-multishot").innerText=Te.toString())},window.play=function(){Ke(Ue.Game,Re)};const Ee=oe("space"),Ce=oe("shift");let Be,We=!1,Ae=!1,Oe=["assets/cerbere.png","assets/cerbere2.png"];function _e(e){let t=0,i=0;U(e.bullets),e.invincibleTime>0?e.invincibleTime-=m.delta:e.invincibleTime=0,ae.left&&(t+=-m.playerSpeedX),ae.right&&(t+=m.playerSpeedX),ae.up&&(i+=-m.playerSpeedY),ae.down&&(i+=m.playerSpeedY),Ee()&&function(e){null!=e.bullets.bullets.find((e=>!e.isActive))&&I(e.bullets,e.shootSpeed*m.playerBulletSpeedX,z(e,P(m.playerWidth,m.playerHeight/2)),e.bulletsPattern)}(e),e.dx=t,e.dy=i,Ae||(pe=new window.AudioContext,le=xe(...be),se=[xe(...we),xe(...ge)],de=xe(...Se),Ae=!0),Ae&&Ce()&&(We?ue.stop():(pe?.resume(),ue=ye(...se[q(0,1)]),ue.loop=!0),We=!We),e.x+=e.dx*m.delta,e.y+=e.dy*m.delta,e.x<=0&&(e.x=0),e.x>=m.worldWidth-m.playerWidth&&(e.x=m.worldWidth-m.playerWidth),e.y<=0&&(e.y=0),e.y>=m.worldHeight-m.playerHeight&&(e.y=m.worldHeight-m.playerHeight),0!=e.dx||0!=e.dy?(e.animationTime+=m.delta,e.animationTime>m.playerAnimationTime&&(e.animationTime=0,e.sprite=e.sprite==Oe[0]?Oe[1]:Oe[0])):(e.sprite=Oe[0],e.animationTime=0)}function qe(e){e.x=m.playerWidth,e.y=m.worldHeight/2,e.dx=0,e.dy=0;let t=[Me,He,Te];e.shootSpeed=t[he.Speed]+1,e.shieldCount=t[he.Shield]+1,e.shieldCount==m.powerUpMaxCount&&(e.bullets.shielded=!0),t[he.Multishot]==m.powerUpMaxCount?e.bulletsPattern=x.Straight:e.bulletsPattern=t[he.Multishot]}function Fe(e,t){return!(e.money+t<0)&&(e.money+=t,ze(e.money),!0)}var ke;(ke=Be||(Be={}))[ke.Easy=0]="Easy",ke[ke.Medium=1]="Medium",ke[ke.Hard=2]="Hard";let De=["assets/floating_eye.png","assets/imp.png","assets/skeleton.png","assets/zombie.png"];function Ye(e){const t=[];if(e==Be.Easy){const i=q(3,6);for(let n=0;n<i;n++)t.push(Ie(e))}if(e==Be.Medium){const i=q(5,10);for(let n=0;n<i;n++)t.push(Ie(e))}if(e==Be.Hard){const i=q(9,17);for(let n=0;n<i;n++)t.push(Ie(e))}return{difficulty:e,enemies:t}}function Ie(e){const t=F();if(e==Be.Easy){const e=O(te.Straight,te.Triangular),i=_(m.waveEasyAmplitudeMin,m.waveEasyAmplitudeMax),n=_(m.waveEasyFrequencyMin,m.waveEasyFrequencyMax),r=_(m.waveEasyRxMin,m.waveEasyRxMax),a=_(m.waveEasyRyMin,m.waveEasyRyMax);return ie(_(m.waveEasySyMin,m.waveEasySyMax),e,t,_(m.waveEasyTimeMin,m.waveEasyTimeMax),i,n,r,a,q(x.Single,x.Double),O(...De))}if(e==Be.Medium){const e=O(te.Straight,te.Triangular,te.Rectangular),i=_(m.waveMediumAmplitudeMin,m.waveMediumAmplitudeMax),n=_(m.waveMediumFrequencyMin,m.waveMediumFrequencyMax),r=_(m.waveMediumRxMin,m.waveMediumRxMax),a=_(m.waveMediumRyMin,m.waveMediumRyMax);return ie(_(m.waveMediumSyMin,m.waveMediumSyMax),e,t,_(m.waveMediumTimeMin,m.waveMediumTimeMax),i,n,r,a,q(x.Single,x.Quintuple),O(...De))}if(e==Be.Hard){const e=O(te.Triangular,te.Rectangular,te.Circular),i=_(m.waveHardAmplitudeMin,m.waveHardAmplitudeMax),n=_(m.waveHardFrequencyMin,m.waveHardFrequencyMax),r=_(m.waveHardRxMin,m.waveHardRxMax),a=_(m.waveHardRyMin,m.waveHardRyMax);return ie(_(m.waveHardSyMin,m.waveHardSyMax),e,t,_(m.waveHardTimeMin,m.waveHardTimeMax),i,n,r,a,q(x.Double,x.Sixtuple),O(...De))}throw new Error}let Ue,Le=0,Xe=1,Ge=m.waveEasyCount+m.waveMediumCount+m.waveHardCount+1,Qe=oe("m");function Ne(e){if(Le+=m.delta,(Le>=m.waveEasyTimeMax||e.deadCount==e.entities.length)&&($e(e),Le=0),Xe<Ge)for(let t of e.entities)ne(t);else J(e.boss);Qe()&&$e(e)}function je(e,t){if(Xe<Ge)for(let i of t.entities)re(e,i);else V(e,t.boss)}function $e(e){Xe++;let t=Be.Easy;Xe>3&&Xe<=6&&(t=Be.Medium),Xe>6&&(t=Be.Hard),e.entities=Ye(t).enemies,e.deadCount=0,Le=0,Fe(e.player,1)}var Je;function Ve(e,t){T(e,t.background),t.scene==Ue.Game&&(!function(e,t){o(t.invincibleTime/m.playerBlinkPeriod)%2==0&&v(e,t);for(let i of t.bullets.bullets)i.isActive&&B(e,i)}(e,t.player),je(e,t.enemies))}function Ke(e,t){var i;qe(t.player),i=t.enemies,Xe=1,$e(i),K(t.enemies.boss),t.scene=e,e==Ue.Shop&&Pe(!0),e==Ue.Game&&Pe(!1)}(Je=Ue||(Ue={}))[Je.Shop=0]="Shop",Je[Je.Game=1]="Game",Je[Je.Quest=2]="Quest";let Ze=m.engineTimeResolution,et=performance.now(),tt=et;const it={image:b(f),gameCanvas:S("game-canvas",m.width,m.height),backgroundCanvas:S("background-canvas",m.width,m.height),offscreenCanvas:S("offscreen-canvas",m.tileSize*w,m.tileSize*g)},nt=function(){const e=function(){const e={x:m.playerWidth,dx:0,y:m.worldHeight/2,dy:0,w:m.playerWidth,h:m.playerHeight,bullets:D(m.playerBulletsPoolSize,m.playerBulletSpeedX,m.playerBulletSpeedY,m.playerSprayOpen,m.playerBulletWidth,m.playerBulletHeight,void 0,!0),bulletsPattern:x.Single,shootSpeed:1,shieldCount:0,money:10,sprite:Oe[0],invincibleTime:0,ox:m.playerOx,oy:m.playerOy,animationTime:0};return ze(e.money),e}(),t=function(e){return{entities:Ye(Be.Easy).enemies,deadCount:0,boss:$(),player:e}}(e),i={background:{x:0,y:0,w:0,h:0,sprite:"assets/basic_cobble.png",ox:0,oy:0},player:e,enemies:t,scene:Ue.Shop};return Re=i,i}();!function e(t){window.requestAnimationFrame((t=>e(t)));var i,n=0;t>et+Ze&&(n=o((t-et)/Ze));for(var r=0;r<n;r++)et+=Ze,(i=nt).scene==Ue.Game&&(_e(i.player),Ne(i.enemies));(function({gameCanvas:e,backgroundCanvas:t,offscreenCanvas:i}){H(e),H(t),H(i)})(it),Ve(it,nt),tt=t}(0);
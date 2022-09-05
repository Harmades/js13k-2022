function e(e){return Math.round(e)}function n(e){return Math.cos(e)}function d(e){return Math.sin(e)}function i(e){return document.getElementById(e)}const u=Math.PI;function f(e,n){const d=[];for(let i=0;i<n;i++)d.push(e());return d}const t={debug:!1,width:960,height:640,playerSpeedX:300,playerSpeedY:300,playerWidth:50,playerHeight:50,playerBulletSpeedX:800,enemyBulletSpeedX:200,enemyShootFrequency:1,enemyBulletPoolSize:1e3,bulletWidth:5,bulletHeight:5,enemyWidth:50,enemyHeight:50,waveEasyCount:3,waveEasyTimeMin:4,waveEasyTimeMax:6,waveEasyAmplitudeMin:10,waveEasyAmplitudeMax:50,waveEasyFrequencyMin:.1,waveEasyFrequencyMax:.25,waveEasyRxMin:100,waveEasyRxMax:200,waveEasyRyMin:100,waveEasyRyMax:200,waveEasySyMin:0,waveEasySyMax:590,waveMediumCount:3,waveMediumTimeMin:4,waveMediumTimeMax:6,waveMediumAmplitudeMin:10,waveMediumAmplitudeMax:50,waveMediumFrequencyMin:.1,waveMediumFrequencyMax:.25,waveMediumRxMin:100,waveMediumRxMax:200,waveMediumRyMin:100,waveMediumRyMax:200,waveMediumSyMin:0,waveMediumSyMax:590,waveHardCount:3,waveHardTimeMin:4,waveHardTimeMax:6,waveHardAmplitudeMin:10,waveHardAmplitudeMax:50,waveHardFrequencyMin:.1,waveHardFrequencyMax:.25,waveHardRxMin:100,waveHardRxMax:200,waveHardRyMin:100,waveHardRyMax:200,waveHardSyMin:0,waveHardSyMax:590,engineTimeResolution:1,epsilon:.1,delta:.001};function a(e,n,d=null){const u=null==d?(f="canvas",document.createElement(f)):i(d);var f;u.width=e,u.height=n;return u.getContext("2d")}function r({canvas:n},{x:d,y:i,w:u,h:f},t="#FF0000"){n&&(n.fillStyle=t),n.fillRect(e(d),e(i),u,f)}function l(){return{x:0,y:0,w:t.bulletWidth,h:t.bulletHeight,dx:0,dy:0,isActive:!1}}function o(e){e.isActive&&(e.x+=e.dx*t.delta,e.y+=e.dy*t.delta)}function y(e,n){n.isActive&&r(e,n)}function c(e,n,d){e.x=n.x,e.y=n.y,e.dx=d,e.dy=0,e.isActive=!0}function s(e){e.isActive=!1,e.dx=0,e.dy=0,e.x=0,e.y=0}function M(...e){return e[Math.floor(Math.random()*e.length)]}function h(e,n){return Math.random()*(n-e)+e}function w(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e)+e)}function m(e,n){return{x:e,y:n}}function x(e,n){return m(e.x+n.x,e.y+n.y)}let v;var p;let g;var H;function E(e,n,d,i,u,a,r,o){return{x:t.width,y:e,sy:e,dx:0,dy:0,w:t.enemyWidth,h:t.enemyHeight,pattern:n,time:i,color:d,dead:!1,amplitude:u,frequency:a,rx:r,ry:o,elapsedTime:0,shootElapsedTime:0,distance:0,bullets:f((()=>l()),50)}}function R(e){for(let n of e.bullets)o(n);if(e.dead)return;const i=e.frequency,f=e.amplitude,a=(t.width+t.enemyWidth)/e.time;if(e.elapsedTime+=t.delta,e.shootElapsedTime+=t.delta,e.pattern==g.Circular&&(e.dx=2*u*i*f*n(2*u*i*e.elapsedTime)-a,e.dy=2*u*i*f*d(2*u*i*e.elapsedTime)),e.pattern==g.Rectangular){const n=e.target;null==e.direction&&(e.direction=v.Left,e.target=h(50,150)),e.direction==v.Left&&(e.distance>=n&&(e.direction=M(v.Up,v.Down),e.distance=0,e.target=h(50,150)),e.dx=-a,e.dy=0,e.distance+=-e.dx*t.delta),e.direction,v.Right,e.direction==v.Up&&(e.distance>=n&&(e.direction=v.Left,e.target=h(50,150),e.distance=0),e.dy=-a/2,e.dx=0,e.distance+=-e.dy*t.delta),e.direction==v.Down&&(e.distance>=n&&(e.direction=v.Left,e.target=h(50,150),e.distance=0),e.dy=a/2,e.dx=0,e.distance+=e.dy*t.delta)}if(e.pattern==g.Triangular&&(e.y>=e.sy+f&&(e.dy=-4*f*i),(0==e.dy||e.y<=e.sy-f)&&(e.dy=4*f*i),e.dx=-a),e.pattern==g.Straight&&(e.dx=-a),e.x+=e.dx*t.delta,e.y+=e.dy*t.delta,e.shootElapsedTime>=1/t.enemyShootFrequency){e.shootElapsedTime=0;const n=e.bullets.find((e=>!e.isActive));if(null==n)return;c(n,x(e,m(0,t.enemyHeight/2)),-a-t.enemyBulletSpeedX)}}function S(e,n){for(let d of n.bullets)y(e,d);n.dead||r(e,n,n.color)}let T;var A;function b(e){const n=[];if(e==T.Easy){const d=w(3,6);for(let i=0;i<d;i++)n.push(q(e))}if(e==T.Medium){const d=w(5,10);for(let i=0;i<d;i++)n.push(q(e))}if(e==T.Hard){const d=w(9,17);for(let i=0;i<d;i++)n.push(q(e))}return{difficulty:e,enemies:n}}function q(e){const n=`#${Math.floor(16777215*Math.random()).toString(16)}`;if(e==T.Easy){const e=M(g.Straight,g.Triangular),d=h(t.waveEasyAmplitudeMin,t.waveEasyAmplitudeMax),i=h(t.waveEasyFrequencyMin,t.waveEasyFrequencyMax),u=h(t.waveEasyRxMin,t.waveEasyRxMax),f=h(t.waveEasyRyMin,t.waveEasyRyMax);return E(h(t.waveEasySyMin,t.waveEasySyMax),e,n,h(t.waveEasyTimeMin,t.waveEasyTimeMax),d,i,u,f)}if(e==T.Medium){const e=M(g.Straight,g.Triangular,g.Rectangular),d=h(t.waveMediumAmplitudeMin,t.waveMediumAmplitudeMax),i=h(t.waveMediumFrequencyMin,t.waveMediumFrequencyMax),u=h(t.waveMediumRxMin,t.waveMediumRxMax),f=h(t.waveMediumRyMin,t.waveMediumRyMax);return E(h(t.waveMediumSyMin,t.waveMediumSyMax),e,n,h(t.waveMediumTimeMin,t.waveMediumTimeMax),d,i,u,f)}if(e==T.Hard){const e=M(g.Triangular,g.Rectangular,g.Circular),d=h(t.waveHardAmplitudeMin,t.waveHardAmplitudeMax),i=h(t.waveHardFrequencyMin,t.waveHardFrequencyMax),u=h(t.waveHardRxMin,t.waveHardRxMax),f=h(t.waveHardRyMin,t.waveHardRyMax);return E(h(t.waveHardSyMin,t.waveHardSyMax),e,n,h(t.waveHardTimeMin,t.waveHardTimeMax),d,i,u,f)}throw new Error}(p=v||(v={}))[p.Up=0]="Up",p[p.Left=1]="Left",p[p.Right=2]="Right",p[p.Down=3]="Down",(H=g||(g={}))[H.Straight=0]="Straight",H[H.Triangular=1]="Triangular",H[H.Circular=2]="Circular",H[H.Rectangular=3]="Rectangular",(A=T||(T={}))[A.Easy=0]="Easy",A[A.Medium=1]="Medium",A[A.Hard=2]="Hard";let F=0,C=1;function W(e){C++;let n=T.Easy;C>3&&C<=6&&(n=T.Medium),C>6&&(n=T.Hard),e.entities=b(n).enemies,e.deadCount=0,F=0}function B(e){C=1,W(e)}function X(e,n){e.dead=!0,n.deadCount++}const L={up:!1,down:!1,left:!1,right:!1,space:!1,shift:!1};function D(e){let n=!0;return()=>L[e]&&n?(n=!1,!0):(L[e]||(n=!0),!1)}onkeydown=onkeyup=e=>function(e,n){38!=e&&90!=e&&87!=e||(L.up=n);39!=e&&68!=e||(L.right=n);40!=e&&83!=e||(L.down=n);37!=e&&65!=e&&81!=e||(L.left=n);16==e&&(L.shift=n);32==e&&(L.space=n)}(e.keyCode,null!=e.type[5]);let I,P,U=null,k=(...e)=>{let n=U.createBufferSource(),d=U.createBuffer(e.length,e[0].length,$);return e.map(((e,n)=>d.getChannelData(n).set(e))),n.buffer=d,n.connect(U.destination),n.start(),n},Y=(e=1,n=.05,d=220,i=0,u=0,f=.1,t=0,a=1,r=0,l=0,o=0,y=0,c=0,s=0,M=0,h=0,w=0,m=1,x=0,v=0)=>{let p,g,H=2*Math.PI,E=r*=500*H/$**2,R=(0<M?1:-1)*H/4,S=d*=(1+2*n*Math.random()-n)*H/$,T=[],A=0,b=0,q=0,F=1,C=0,W=0,B=0;for(l*=500*H/$**3,M*=H/$,o*=H/$,y*=$,c=$*c|0,g=(i=99+$*i)+(x*=$)+(u*=$)+(f*=$)+(w*=$)|0;q<g;T[q++]=B)++W%(100*h|0)||(B=t?1<t?2<t?3<t?Math.sin((A%H)**3):Math.max(Math.min(Math.tan(A),1),-1):1-(2*A/H%2+2)%2:1-4*Math.abs(Math.round(A/H)-A/H):Math.sin(A),B=(c?1-v+v*Math.sin(2*Math.PI*q/c):1)*(0<B?1:-1)*Math.abs(B)**a*e*z*(q<i?q/i:q<i+x?1-(q-i)/x*(1-m):q<i+x+u?m:q<g-w?(g-q-w)/f*m:0),B=w?B/2+(w>q?0:(q<g-w?1:(g-q)/w)*T[q-w|0]/2):B),p=(d+=r+=l)*Math.sin(b*M-R),A+=p-p*s*(1-1e9*(Math.sin(q)+1)%2),b+=p-p*s*(1-1e9*(Math.sin(q)**2+1)%2),F&&++F>y&&(d+=o,S+=o,F=0),!c||++C%c||(d=S,r=E,F=F||1);return T},z=.3,$=44100,j=[[[.5,0,196,.05,.5,.6,1],[.8,undefined,24.5,.2,.3,.7,undefined,.5,undefined,undefined,5,undefined,.1,undefined,undefined,undefined,undefined,.8,undefined,.2],[2,0,196,.02,.1,.4,1],[,0,49,undefined,undefined,.2,3,5]],[[[,-1,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,1,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,undefined,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[2,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,15,15,undefined,13,undefined,10,undefined]],[[,-1,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,1,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,undefined,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[2,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,3,undefined,3,undefined,10,undefined,undefined,undefined,8,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,15,15,undefined,13,undefined,10,undefined],[3,undefined,8,undefined,undefined,undefined,8,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,undefined,3,undefined,undefined,15,15,undefined,13,undefined,10,undefined]],[[,-1,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,1,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,undefined,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[2,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,3,undefined,3,undefined,10,undefined,undefined,undefined,8,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,15,15,undefined,13,undefined,10,undefined],[3,undefined,8,undefined,undefined,undefined,8,undefined,10,undefined,undefined,undefined,1,3,undefined,undefined,8,undefined,1,3,undefined,undefined,1,undefined,3,undefined,undefined,15,15,undefined,13,undefined,10,undefined]]],[0,1,2,1,2],110,undefined];function G(){U=new window.AudioContext,I=((e,n,d,i=125)=>{let u,f,t,a,r,l,o,y,c,s,M,h,w,m,x,v=0,p=[],g=[],H=[],E=0,R=0,S=1,T={},A=$/i*60>>2;for(;S;E++)p=[S=y=M=w=0],d.map(((i,M)=>{for(o=n[i][E]||[0,0,0],S|=!!n[i][E],x=w+(n[i][0].length-2-!y)*A,m=M==d.length-1,f=2,a=w;f<o.length+m;y=++f){for(r=o[f],c=f==o.length+m-1&&m||s!=(o[0]||0)|r|0,t=0;t<A&&y;t++>A-99&&c&&(h+=(h<1)/99))l=(1-h)*p[v++]/2||0,g[a]=(g[a]||0)-l*R+l,H[a]=(H[a++]||0)+l*R+l;r&&(h=r%1,R=o[1]||0,(r|=0)&&(p=T[[s=o[v=0]||0,r]]=T[[s,r]]||(u=[...e[s]],u[2]*=2**((r-12)/12),r>0?Y(...u):[])))}w=x}));return[g,H]})(...j)}const J=D("space"),K=D("shift");let N=m(t.playerWidth,t.playerHeight/2),O=!1,Q=!1;function V(e){let n=0,d=0;L.left&&(n+=-t.playerSpeedX),L.right&&(n+=t.playerSpeedX),L.up&&(d+=-t.playerSpeedY),L.down&&(d+=t.playerSpeedY),J()&&function(e){let n=e.bullets.find((e=>!e.isActive));null!=n&&c(n,x(e,N),t.playerBulletSpeedX)}(e),e.dx=n,e.dy=d,Q||(G(),Q=!0),Q&&K()&&(O?P.stop():(U?.resume(),P=k(...I),P.loop=!0),O=!O),e.x+=e.dx*t.delta,e.y+=e.dy*t.delta,e.x<=0&&(e.x=0),e.x>=t.width-t.playerWidth&&(e.x=t.width-t.playerWidth),e.y<=0&&(e.y=0),e.y>=t.height-t.playerHeight&&(e.y=t.height-t.playerHeight),function(e){for(let n of e)o(n)}(e.bullets)}function Z(e){e.x=t.playerWidth,e.y=t.height/2,e.dx=0,e.dy=0}function _(e,n){const d=de(ee(e),ee(n)),i=de(ne(e),ne(n));return null==d||null==i?null:{x:d.x,y:i.x,w:d.y-d.x,h:i.y-i.x}}function ee(e){return{x:e.x,y:e.x+e.w}}function ne(e){return{x:e.y,y:e.y+e.h}}function de(e,n){return e.y<=n.x||n.y<=e.x?null:{x:Math.max(e.x,n.x),y:Math.min(e.y,n.y)}}let ie=t.engineTimeResolution,ue=performance.now(),fe=ue;const te={x:t.playerWidth,dx:0,y:t.height/2,dy:0,w:t.playerWidth,h:t.playerHeight,bullets:f((()=>l()),50)},ae={entities:b(T.Easy).enemies,deadCount:0},re={canvas:a(t.width,t.height,"gameCanvas")};function le(){V(te),function(e){F+=t.delta,(F>=t.waveEasyTimeMax||e.deadCount==e.entities.length)&&(W(e),F=0);for(let n of e.entities)R(n)}(ae),function(e,n){for(let d of function(e){return e.entities.filter((e=>!e.dead))}(n)){for(let i of e.bullets)null!=_(d,i)&&(s(i),X(d,n));for(let i of d.bullets)null!=_(e,i)&&(B(n),Z(e));null!=_(e,d)&&(Z(e),B(n))}}(te,ae)}!function e(n){window.requestAnimationFrame((n=>e(n)));var d,i=0;n>ue+ie&&(d=(n-ue)/ie,i=Math.floor(d));for(var u=0;u<i;u++)ue+=ie,le();(function({canvas:e}){e.clearRect(0,0,t.width,t.height)})(re),function(e,n){r(e,n);for(let d of n.bullets)d.isActive&&y(e,d)}(re,te),function(e,n){for(let d of n.entities)S(e,d)}(re,ae),fe=n}(0);
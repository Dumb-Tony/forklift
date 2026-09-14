const assert = require('node:assert/strict');
const pw = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
(async () => {
 const browser = await pw.chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL || 'msedge'});
 const page = await browser.newPage({viewport:{width:1440,height:1050}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>window.requestAnimationFrame=()=>0);
 await page.goto(process.env.GAME_URL || pathToFileURL(path.resolve('index.html')).href);
 const results=await page.evaluate(()=>{
  const f=forklift,r=(k,t)=>f.replay(k,t),s=()=>f.snapshot(),out={};
  function ensure(v,m){if(!v)throw Error(m+': '+JSON.stringify(s()));}
  function run(k,until,max=20){for(let i=0;i<max*120;i++){r(k,1/120);if(until(s()))return;}throw Error('route timeout '+JSON.stringify(s()));}
  function enter(){r(['KeyW'],.9);r(['Space'],.7);ensure(s().eligible,'aligned pockets');}
  function deliver(){run(['KeyW'],s=>s.truck.y<328);r(['Space'],.7);run(['KeyW','KeyD'],s=>s.truck.a>-.03);r(['Space','KeyA'],.13);r(['Space'],.6);ensure(s().pallet.support,'low turn holds');r(['ArrowUp'],.65);run(['KeyW'],s=>s.truck.x>630);r(['Space'],.8);ensure(s().pallet.support&&!s().won,'held load cannot win');r(['ArrowDown'],1.2);ensure(s().pallet.z===24&&!s().pallet.support&&!s().won,'shelf support but forks still inside');r(['KeyS'],1.6);r(['Space'],.8);r([],1.2);ensure(s().won,'delivery complete');}
  f.reset();r(['ArrowUp'],.8);ensure(!s().pallet.support&&s().pallet.z===0,'distant pickup denied');out.distance='pass';
  f.reset();r(['KeyW','KeyD'],.9);r(['Space'],.7);r(['ArrowUp'],.5);ensure(!s().pallet.support&&s().pallet.z===0,'misaligned pickup denied');out.misaligned=s().message;
  f.reset();enter();r(['ArrowUp','KeyQ'],.45);ensure(s().pallet.support,'clean pickup');deliver();out.clean={time:s().time,drops:s().drops};
  f.reset();enter();r(['ArrowUp','KeyQ'],.45);run(['KeyW'],s=>s.truck.y<328);r(['Space'],.7);r(['ArrowUp'],3.2);run(['KeyW','KeyD'],s=>s.drops>0);r(['Space'],1.5);out.raisedTurn={drops:s().drops,pallet:s().pallet};ensure(s().drops===1&&!s().pallet.support,'high turn drops');ensure(s().pallet.z===0,'dropped cargo settles on floor');
  f.reset();enter();r(['ArrowUp'],2.6);r(['KeyE'],1);r([],1.5);ensure(s().drops===1&&s().pallet.z===0,'forward tilt drops cargo');r(['ArrowDown'],3);r(['KeyQ'],1.45);ensure(s().eligible,'fallen cargo can be aligned');r(['ArrowUp'],.45);ensure(s().pallet.support,'fallen cargo retrieved');deliver();out.recovery={time:s().time,drops:s().drops};
  f.reset();r(['KeyW'],.4);document.getElementById('pause').click();const before=s();r(['KeyW','ArrowUp'],2);ensure(s().time===before.time&&s().truck.y===before.truck.y,'pause freezes');document.getElementById('pause').click();r(['KeyW'],.2);ensure(s().truck.y<before.truck.y,'resume works');window.dispatchEvent(new Event('blur'));ensure(s().paused,'blur pauses');document.getElementById('reset').click();ensure(!s().paused&&!s().won&&s().truck.y===555&&s().pallet.z===0,'reset restores');out.pauseReset='pass';
  return out;
 });
 assert.deepEqual(errors,[]);console.log(JSON.stringify(results,null,2));
 await page.screenshot({path:'tests/desktop.png',fullPage:true});
 for(const [width,height] of [[800,900],[390,844]]){await page.setViewportSize({width,height});await page.evaluate(()=>forklift.replay([],0));assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await page.screenshot({path:`tests/${width}.png`,fullPage:true});}
 // Live event path and real animation loop are checked separately from accelerated replay.
 const live=await browser.newPage();live.on('pageerror',e=>errors.push(e.message));await live.goto(process.env.GAME_URL||pathToFileURL(path.resolve('index.html')).href);await live.keyboard.down('w');await live.waitForTimeout(450);await live.keyboard.up('w');assert.ok((await live.evaluate(()=>forklift.snapshot())).truck.y<555);await live.keyboard.press('p');const stopped=await live.evaluate(()=>forklift.snapshot());await live.waitForTimeout(250);assert.equal((await live.evaluate(()=>forklift.snapshot())).time,stopped.time);await live.keyboard.press('r');assert.equal((await live.evaluate(()=>forklift.snapshot())).truck.y,555);assert.deepEqual(errors,[]);
 console.log('PASS: full clean route, recovery route, high turn risk, pickup gates, placement gates, pause/reset/blur, real keyboard + animation, 3 viewport sizes; zero browser exceptions.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

const WA="639279322948";
const $=id=>document.getElementById(id);
const money=n=>"₱"+Number(n||0).toLocaleString("en-PH",{minimumFractionDigits:2,maximumFractionDigits:2});
const orderKey="plm_orders_v1";
function go(id){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.view)));
$("year").textContent=new Date().getFullYear();

const gemItems=[
 {cat:"Speed Ups",name:"Speed 60 minutes",gems:130},
 {cat:"Speed Ups",name:"Speed 3 Hours",gems:300},
 {cat:"Speed Ups",name:"Speed 8 Hours",gems:650},
 {cat:"Speed Ups",name:"Speed 15 Hours",gems:1000},
 {cat:"Speed Ups",name:"Speed 24 Hours",gems:1500},
 {cat:"Speed Ups",name:"Speed 3 Days",gems:4400},
 {cat:"Speed Ups",name:"Speed 7 Days",gems:10000},
 {cat:"Speed Ups",name:"Speed 30 Days",gems:40000},

 {cat:"Combat",name:"Braveheart",gems:2000},
 {cat:"Combat",name:"Random Relocator",gems:500},
 {cat:"Combat",name:"Relocator",gems:1500},
 {cat:"Combat",name:"Royal Pass",gems:100000},
 {cat:"Combat",name:"Winged Boots 25%",gems:500},
 {cat:"Combat",name:"Winged Boots 50%",gems:900},
 {cat:"Combat",name:"Attack Boost 20% 12h",gems:250},
 {cat:"Combat",name:"Attack Boost 20% 24h",gems:400},
 {cat:"Combat",name:"Army Defence Boost 20% 12h",gems:250},
 {cat:"Combat",name:"Defence Boost 20% 24h",gems:400},
 {cat:"Combat",name:"Army Size Boost 20% 4h",gems:2400},
 {cat:"Combat",name:"Army Size Boost 50% 4h",gems:5000},

 {cat:"Boost",name:"Shield 8 Hours",gems:500},
 {cat:"Boost",name:"Shield 24 Hours",gems:1000},
 {cat:"Boost",name:"Shield 3 Days",gems:3500},
 {cat:"Boost",name:"Shield 7 Days",gems:10000},
 {cat:"Boost",name:"Shield 14 Days",gems:25000},
 {cat:"Boost",name:"Anti-Scout 24h",gems:600},
 {cat:"Boost",name:"Anti-Scout 3d",gems:1200},
 {cat:"Boost",name:"Anti-Scout 7d",gems:3000},
 {cat:"Boost",name:"25% Player EXP Boost 24h",gems:2500},
 {cat:"Boost",name:"Talent Reset",gems:1000},
 {cat:"Boost",name:"Talent Tome",gems:1000},
 {cat:"Boost",name:"Quest Scroll (Admin)",gems:800},
 {cat:"Boost",name:"Quest Scroll (Guild)",gems:1000},
 {cat:"Boost",name:"500 VIP Points",gems:500},
 {cat:"Boost",name:"1000 VIP Points",gems:1000},
 {cat:"Boost",name:"5000 VIP Points",gems:5000},
 {cat:"Boost",name:"10 Lucky Tokens",gems:6600},
 {cat:"Boost",name:"100 Lucky Tokens",gems:60000},
 {cat:"Boost",name:"1000 Holy Stars",gems:2200},
 {cat:"Boost",name:"10000 Holy Stars",gems:20000},

 {cat:"Resources",name:"Gather Boost 50% 24h",gems:600},
 {cat:"Resources",name:"Gather Boost 50% 7d",gems:3360},
 {cat:"Resources",name:"Reduce Upkeep 50% 24h",gems:2000},
 {cat:"Resources",name:"Reduce Upkeep 50% 7d",gems:11200},
 {cat:"Resources",name:"Food 20 Million",gems:10000},
 {cat:"Resources",name:"Food 60 Million",gems:28000},
 {cat:"Resources",name:"Stone 5 Million",gems:10000},
 {cat:"Resources",name:"Stone 15 Million",gems:28000},
 {cat:"Resources",name:"Wood 5 Million",gems:10000},
 {cat:"Resources",name:"Wood 15 Million",gems:28000},
 {cat:"Resources",name:"Ore 5 Million",gems:10000},
 {cat:"Resources",name:"Ore 15 Million",gems:28000},
 {cat:"Resources",name:"Gold 2 Million",gems:10000},
 {cat:"Resources",name:"Gold 6 Million",gems:28000},

 {cat:"Chests",name:"Rare Material Chest",gems:1500},
 {cat:"Chests",name:"Epic Material Chest",gems:3000},
 {cat:"Chests",name:"Legendary Material Chest",gems:3000},
 {cat:"Chests",name:"Rare Jewel Chest",gems:3000},
 {cat:"Chests",name:"Epic Jewel Chest",gems:6000},
 {cat:"Chests",name:"Legendary Jewel Chest",gems:6000},
 {cat:"Chests",name:"Chisel I",gems:400},
 {cat:"Chests",name:"Chisel II",gems:1000},
 {cat:"Chests",name:"Chisel III",gems:2000},
 {cat:"Chests",name:"Chisel IV",gems:3000},
 {cat:"Chests",name:"Chisel V",gems:4000},

 {cat:"Buildings",name:"Archaic Tome",gems:900},
 {cat:"Buildings",name:"Gold Hammer",gems:2000},
 {cat:"Buildings",name:"War Tomes",gems:15},
 {cat:"Buildings",name:"Steel Cuffs",gems:15},
 {cat:"Buildings",name:"Soul Crystal",gems:15},
 {cat:"Buildings",name:"Crystal Pickaxe",gems:20},
 {cat:"Buildings",name:"Finish Demolition",gems:20},

 {cat:"Familiar",name:"Bright Talent Orb",gems:3000},
 {cat:"Familiar",name:"Brilliant Talent Orb",gems:7500},
 {cat:"Familiar",name:"Merge 60 Minutes",gems:260},
 {cat:"Familiar",name:"Merge 3 Hours",gems:600},
 {cat:"Familiar",name:"Merge 8 Hours",gems:1300},
 {cat:"Familiar",name:"Merge 24 Hours",gems:3000},
 {cat:"Familiar",name:"Merge 3 Days",gems:8800},
 {cat:"Familiar",name:"Merge 7 Days",gems:20000},
 {cat:"Familiar",name:"2m Anima",gems:10000},
 {cat:"Familiar",name:"6m Anima",gems:28000},
 {cat:"Familiar",name:"Ancient Core",gems:1000},
 {cat:"Familiar",name:"Chaos Core",gems:7500},
 {cat:"Familiar",name:"10% Pact Merging Boost 1 hour",gems:1000},

 {cat:"Monster Hunt",name:"Monster Hunt ATK Boost 25%",gems:1000},
 {cat:"Monster Hunt",name:"5000 Energy",gems:1125},
 {cat:"Monster Hunt",name:"10000 Energy",gems:2000},
 {cat:"Monster Hunt",name:"20000 Energy",gems:3500},
 {cat:"Monster Hunt",name:"50000 Energy",gems:7500}
];
let gemCat="Speedups",gemQty={};
function renderGems(){
 const cats=[...new Set(gemItems.map(x=>x.cat))];
 $("gemTabs").innerHTML=cats.map(c=>`<button class="tab ${c===gemCat?"active":""}" data-gcat="${c}">${c}</button>`).join("");
 document.querySelectorAll("[data-gcat]").forEach(b=>b.onclick=()=>{gemCat=b.dataset.gcat;renderGems()});
 $("gemCatalog").innerHTML=gemItems.map((x,i)=>({x,i})).filter(o=>o.x.cat===gemCat).map(({x,i})=>`<div class="product"><div class="qty-row"><b>${x.name}</b><span class="muted tiny">${x.gems.toLocaleString()} gems each</span></div><div class="qty-row" style="margin-top:10px"><small class="muted">Price: ${x.gems.toLocaleString()} gems each</small><div class="stepper"><button data-gminus="${i}">−</button><input type="number" min="0" value="${gemQty[i]||0}" data-gqty="${i}"><button data-gplus="${i}">+</button></div></div></div>`).join("");
 document.querySelectorAll("[data-gminus]").forEach(b=>b.onclick=()=>setGem(+b.dataset.gminus,(gemQty[b.dataset.gminus]||0)-1));
 document.querySelectorAll("[data-gplus]").forEach(b=>b.onclick=()=>setGem(+b.dataset.gplus,(gemQty[b.dataset.gplus]||0)+1));
 document.querySelectorAll("[data-gqty]").forEach(inp=>inp.onchange=()=>setGem(+inp.dataset.gqty,+inp.value||0));
 calcGems();
}
function setGem(i,q){gemQty[i]=Math.max(0,Math.floor(q));renderGems()}
function calcGems(){let gems=0;gemItems.forEach((x,i)=>gems+=x.gems*(gemQty[i]||0));let price=+$("gemTier").value;let billedGems=Math.ceil(gems/100000)*100000;let pay=billedGems/100000*price;let items=gemItems.map((x,i)=>({...x,qty:gemQty[i]||0})).filter(x=>x.qty>0);$("totalGems").textContent=gems.toLocaleString();$("totalPay").textContent=money(pay);$("gemBreakdown").innerHTML=items.length?items.map(x=>`<div class="history-item"><b>${x.name} × ${x.qty}</b><small>${x.gems.toLocaleString()} each • ${(x.gems*x.qty).toLocaleString()} gems</small></div>`).join(""):`<p class="muted tiny">Selected items will appear here when quantity is above zero.</p>`;return{gems,billedGems,pay,items}}
$("gemTier").onchange=calcGems;renderGems();

const oldPackages=[["4/4/4/4/4",60],["4/4/4/4/2",50],["4/4/4/4/0",35],["4/0/0/0/0",30],["2/2/2/2/2",40],["2/2/2/2/1",30],["2/2/2/2/0",20],["1/1/1/1/1",15],["1/1/1/1/0",10]];
const newPackages=[["4/4/4/4/4",100],["4/4/4/4/2",80],["4/4/4/4/0",60],["2/2/2/2/2",60],["2/2/2/2/1",50],["2/2/2/2/0",40],["1/1/1/1/1",40],["1/1/1/1/0",30]];
let rssChoice={old:null,new:null};
function buildRss(kind){
 const types=["Food","Stone","Wood","Ore"];
 $(`${kind}RssTypes`).innerHTML=types.map(t=>`<button class="category-btn" data-rsstype="${kind}:${t}">${t}</button>`).join("");
 document.querySelectorAll(`[data-rsstype^="${kind}:"]`).forEach(b=>b.onclick=()=>selectRss(kind,`${b.textContent} (Individual RSS)`,kind==="old"?15:null));
 let packages=kind==="old"?oldPackages:newPackages;
 $(`${kind}RssPackages`).innerHTML=packages.map(([name,price])=>`<button class="product" data-rssp="${kind}:${name}:${price}"><b>${name}</b><strong>${money(price)}</strong><small>Bulk RSS package</small></button>`).join("");
 document.querySelectorAll(`[data-rssp^="${kind}:"]`).forEach(b=>b.onclick=()=>{let [k,name,price]=b.dataset.rssp.split(":");selectRss(k,name,+price)});
}
function selectRss(kind,name,price){rssChoice[kind]={name,price};$(`${kind}RssChoice`).value=name+(price===null?" — price to confirm":` — ${money(price)}`);document.querySelectorAll(`[data-rssp^="${kind}:"]`).forEach(b=>b.classList.toggle("selected",b.dataset.rssp.split(":")[1]===name))}
buildRss("old");buildRss("new");
document.querySelectorAll("[data-step]").forEach(b=>b.onclick=()=>{let el=$(b.dataset.target);el.value=Math.max(1,(+el.value||1)+(+b.dataset.step))});
function saveOrder(o){let arr=JSON.parse(localStorage.getItem(orderKey)||"[]");arr.unshift({...o,date:new Date().toLocaleString()});localStorage.setItem(orderKey,JSON.stringify(arr.slice(0,50)));renderOrders()}
function whatsapp(msg,order){saveOrder(order);window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(msg),"_blank","noopener")}
function rssOrder(kind){
 let s=rssChoice[kind],prefix=kind==="old"?"OLD KD RSS":"NEW KD RSS";
 if(!s)return alert("Please select an RSS package or individual resource.");
 let ign=$(`${kind}RssIgn`).value.trim(),loc=$(`${kind}RssLoc`).value.trim(),proof=$(`${kind}RssProof`).checked,qty=Math.max(1,+$(`${kind}RssQty`).value||1);
 if(!ign)return alert("Please enter your IGN and Kingdom.");
 if(!proof&&!loc)return alert("Please agree to send a location and guild screenshot, or enter your location manually.");
 let total=s.price===null?null:s.price*qty;
 let msg=`PINoy LM SHOP ORDER\nService: ${prefix}\nKingdom range: ${kind==="old"?"KD 1–1959":"KD 1960–2008"}\nSelection: ${s.name}\nQuantity: ${qty}\nPrice: ${total===null?"To confirm":money(total)}\nIGN / KD: ${ign}\nLocation: ${loc||"Will send screenshot showing location and guild"}\nPlease confirm availability and processing.`;
 whatsapp(msg,{service:prefix,selection:s.name,quantity:qty,total,ign});
}
$("oldRssOrder").onclick=()=>rssOrder("old");$("newRssOrder").onclick=()=>rssOrder("new");
let botSelected=null;
let selectedBotPlan={months:1,price:150};
function updateBotPlan(){
 const m=selectedBotPlan.months;
 $("botPeriod").value=String(m);
 $("botPlanLabel").textContent=m===12?"1 Year":`${m} Month${m>1?"s":""}`;
 $("botPlanPrice").textContent=money(selectedBotPlan.price);
}
document.querySelectorAll("[data-months]").forEach(b=>b.onclick=()=>{
 selectedBotPlan={months:+b.dataset.months,price:+b.dataset.planPrice};
 document.querySelectorAll("[data-months]").forEach(x=>x.classList.toggle("active",x===b));
 updateBotPlan();
});
document.querySelectorAll("[data-bot]").forEach(b=>b.onclick=()=>{
 botSelected={name:b.dataset.bot,price:+b.dataset.price};
 $("botChoice").value=botSelected.name+(botSelected.price?` — ${money(botSelected.price)}`:" — PM for price");
 document.querySelectorAll("[data-bot]").forEach(x=>x.classList.toggle("selected",x===b));
 const planWrap=$("botPlans");
 if(planWrap){planWrap.style.opacity=(botSelected.name==="Farm Bot Monthly Renewal"||botSelected.name==="Mega Bot (Farm + War)")?"1":".45";planWrap.style.pointerEvents=(botSelected.name==="Farm Bot Monthly Renewal"||botSelected.name==="Mega Bot (Farm + War)")?"auto":"none";}
 updateBotPlan();
});
$("botOrder").onclick=()=>{
 if(!botSelected)return alert("Please select a bot service.");
 let ign=$("botIgn").value.trim(),kd=$("botKd").value.trim(),email=$("botEmail").value.trim(),pass=$("botPassword").value;
 if(!ign||!kd||!email)return alert("Please complete IGN, Kingdom and IGG Email.");
 if(!email.includes("@"))return alert("Please enter a valid IGG email.");
 if(!$("botRisk").checked)return alert("You must accept USE AT YOUR OWN RISK before ordering.");
 if(!$("botNonRefund").checked)return alert("Please accept the NON-REFUNDABLE policy before ordering.");
 let months=selectedBotPlan.months;
 let isFarmSubscription=botSelected.name==="Farm Bot Monthly Renewal";
 let isSetup=botSelected.name==="Farm Bot Setup + First Month";
 let price=isFarmSubscription?selectedBotPlan.price:(isSetup?170:(botSelected.price?botSelected.price*months:null));
 let savings=isFarmSubscription?150*months-price:0;
 // Never persist or transmit the password from this static page.
 $("botPassword").value="";
 let msg=`PINoy LM SHOP BOT ORDER\nService: ${botSelected.name}\nSubscription: ${months} month(s)\nPrice: ${price===null?"PM for price":money(price)}\nIGN: ${ign}\nKingdom: ${kd}\nIGG Email: ${email}\nRisk acceptance: USE AT YOUR OWN RISK\nPlease contact me for secure credential verification and order processing.`;
 whatsapp(msg,{service:botSelected.name,period:months,price,savings,nonRefundableAccepted:true,ign,kd,email,passwordProvided:!!pass});
 alert("For your safety, the password field has been cleared. Password is not saved or sent to WhatsApp. Arrange any credential verification securely with the shop owner.");
};
$("gemOrder").onclick=()=>{
 let c=calcGems();if(!c.items.length)return alert("Please add at least one item.");
 let ign=$("gemIgn").value.trim(),kd=$("gemKd").value.trim(),guild=$("gemGuild").value.trim();
 if(!ign||!kd||!guild)return alert("Please complete IGN, Kingdom and Guild.");
 if(!$("gemProof").checked)return alert("Please confirm you will send a screenshot showing location and guild.");
 let lines=c.items.map(x=>`${x.name} x${x.qty} = ${(x.gems*x.qty).toLocaleString()} gems`).join("\n");
 let msg=`PINoy LM SHOP GEMS ORDER\nIGN: ${ign}\nKingdom: ${kd}\nGuild: ${guild}\nItems:\n${lines}\nTotal gems: ${c.gems.toLocaleString()}\nRate: ₱${$("gemTier").value} / 100K gems\nBillable gems (rounded up to next 100K): ${c.billedGems.toLocaleString()}\nEstimated payment: ${money(c.pay)}\nI will send screenshot showing in-game location and guild.`;
 whatsapp(msg,{service:"Gems",ign,kd,guild,totalGems:c.gems,billedGems:c.billedGems,total:c.pay,items:c.items});
};
function renderOrders(){let arr=JSON.parse(localStorage.getItem(orderKey)||"[]");$("orderHistory").innerHTML=arr.length?arr.map(o=>`<div class="history-item"><b>${o.service||"Order"} ${o.selection||""}</b><small>${o.date} • ${o.ign||""} ${o.total!==null&&o.total!==undefined?"• "+money(o.total):""}</small></div>`).join(""):`<p class="muted">No local orders yet. Your submitted orders will appear here after you continue to WhatsApp.</p>`}
$("clearOrders").onclick=()=>{if(confirm("Clear the order history stored on this device?")){localStorage.removeItem(orderKey);renderOrders()}};renderOrders();

// Old KD ready-stock code ordering. Stock is a local placeholder and must be maintained by the owner.
const codeStock=[...oldPackages.map(([name,price])=>({name,price,stock:0}))];
let codeSelected=null;
$("codePackages").innerHTML=codeStock.map((p,i)=>`<button class="product" data-code="${i}"><b>${p.name}</b><strong>${money(p.price)}</strong><small>Stock: ${p.stock>0?p.stock:"Check availability"}</small></button>`).join("");
document.querySelectorAll("[data-code]").forEach(b=>b.onclick=()=>{codeSelected=codeStock[+b.dataset.code];$("codeChoice").value=codeSelected.name+" — "+money(codeSelected.price);document.querySelectorAll("[data-code]").forEach(x=>x.classList.toggle("selected",x===b))});
$("codeOrder").onclick=()=>{
 if(!codeSelected)return alert("Please select an Old KD code package.");
 let qty=Math.max(1,+$("codeQty").value||1),ign=$("codeIgn").value.trim();
 if(!ign)return alert("Please enter your IGN and Kingdom.");
 if(codeSelected.stock<qty)return alert("This package is not marked as available in the local stock list. Please message the shop to confirm availability.");
 let total=qty*codeSelected.price;
 whatsapp(`PINOY LM SHOP — OLD KD RSS CODE ORDER\nPackage: ${codeSelected.name}\nQuantity: ${qty}\nTotal: ${money(total)}\nIGN / KD: ${ign}\nPlease confirm stock and delivery.`,{service:"Old KD RSS Code",selection:codeSelected.name,quantity:qty,total,ign});
};

updateBotPlan();

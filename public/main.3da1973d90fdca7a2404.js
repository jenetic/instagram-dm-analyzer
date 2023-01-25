(()=>{"use strict";var e={150:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,':root {\n  --color1: #dd645e;\n  --color2: #f3d6cd;\n  --color3: rgb(53, 73, 126);\n}\n\nbody {\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;\n  margin: auto 1rem;\n  color: var(--color3);\n}\n\nbutton, input {\n  color: var(--color3);\n}\n\nform {\n  margin-top: 1.5rem;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\ntd, th {\n  padding: 0.2rem 0.4rem;\n}\n\nth:hover {\n  color: var(--color1);\n  text-decoration: underline;\n}\n\n#submit-button {\n  background-color: var(--color2);\n  border: none;\n  padding: 0.4rem 1rem;\n  border-radius: 0.2rem;\n}\n\n#submit-button:hover {\n  background-color: var(--color1);\n}\n\n#sidebar input {\n  margin: 1rem 0;\n  padding: 0.5rem 0;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 4px solid var(--color1);\n}\n\n#results {\n  display: grid;\n  grid-template-columns: 30% auto;\n  grid-template-areas: "dm-list main";\n}\n\n#search-threads-input {\n  display: none;\n}\n\n#dm-list {\n  grid-area: dm-list;\n  display: flex;\n  flex-direction: column;\n}\n\n.chat-button {\n  text-align: left;\n}\n\n#main {\n  grid-area: main;\n  margin: 0 1rem;\n}\n\n/* Displaying messages */\n.message-wrapper {\n  margin: 1rem auto;\n}\n\n.message-header {\n  color: var(--color1);\n}\n\n.message-media {\n  color: var(--color1);\n}\n\n.chat-button {\n  border: none;\n  border-bottom: 1px solid var(--color1);\n  background-color: white;\n  padding: 0.5rem 0 0.5rem 0.5rem;\n}\n\n.chat-button:hover {\n  background-color: var(--color2);\n}\n\n#chat-name {\n  margin-left: 0.3rem;\n  font-weight: bold;\n}\n\n#main-header {\n  margin-top: 0.5rem;\n}\n\n#main-header button {\n  padding: 0.4rem 0.7rem;\n  margin: 0.5rem 0.3rem;\n  background-color: var(--color2);\n  border: none;\n  border-radius: 0.2rem;\n}\n\n#main-header button:hover {\n  background-color: var(--color1);\n}\n\n#summary-table {\n  margin-top: 1rem;\n}\n\n#main-content button {\n  padding: 0.1rem 0.5rem;\n  margin: 0rem 0.3rem;\n  background-color: white;\n  border: none;\n  border-radius: 0.2rem;\n  border: 1px solid var(--color1);\n}\n\n#main-content button:hover {\n  background-color: var(--color1);\n}\n\n@media (min-width: 1024px) {\n  #results {\n    display: grid;\n    grid-template-columns: 15% auto;\n    grid-template-areas: "dm-list main";\n  }\n}  \n\n@media (max-width: 500px) {\n  #results {\n    display: flex;\n  }\n}  ',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var m=t(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=t(a[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=new Set(["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","i","his","they","be","at","one","have","this","from","or","had","by","not","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don't","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","won't","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck","hi","hello","sorry","ppl","u","its","maybe","liked","message","yeah","im","ill","okay","thats","dont","wont","ok","bye","yea","tho","ur","gonna","shes","hes","thanks","idk","lmao","lol","doing","cant","wasnt","haha","didnt",""]),n=[],r=function(t){var r={},o={};for(var a in t.forEach((function(n){n.messages.forEach((function(n){if(n.sender_name in r){var t=r[n.sender_name];(!("content"in n)||"content"in n&&"Liked a message"!==n.content)&&t.Messages++,"content"in n&&(t.Texts+=1,t.Words+=n.content.split(" ").length,n.content.split(" ").forEach((function(n){n=n.replace(/[^0-9a-z]/gi,"").toLowerCase(),e.has(n)||(n in o?o[n]++:o[n]=1)}))),"Share"!==n.type||"content"in n||t.Shared++,"photos"in n&&(t.Photos+=n.photos.length),"videos"in n&&(t.Photos+=n.videos.length),n.is_unsent&&t.Unsent++}else r[n.sender_name]={},(t=r[n.sender_name]).Name=n.sender_name,t.Messages=1,"content"in n?(t.Texts=1,t.Words=n.content.split(" ").length,n.content.split(" ").forEach((function(n){n=n.replace(/[^0-9a-z]/gi,"").toLowerCase(),e.has(n)||(n in o?o[n]++:o[n]=1)}))):(t.Texts=0,t.Words=0),"Share"!==n.type||"content"in n?t.Shared=0:t.Shared=1,t.Photos="photos"in n?n.photos.length:0,t.Videos="videos"in n?n.videos.length:0,n.is_unsent?t.Unsent=1:t.Unsent=0})),t[0].participants.forEach((function(e){e.name in r||(r[e.name]={Name:e.name,Messages:0,Texts:0,Words:0,Shared:0,Photos:0,Videos:0,Unsent:0})}))})),r){var i=r[a];i.Other=i.Messages-i.Texts-i.Shared-i.Photos-i.Videos,0===i.Texts?i["Average Words Per Text"]=0:i["Average Words Per Text"]=Math.round(i.Words/i.Texts*100)/100}for(var s in n=[],r)n.push(r[s]);var l=Object.keys(o).sort((function(e,n){return o[n]-o[e]}));return[n,l.slice(0,50)]},o=function(e){return decodeURIComponent(escape(e))},a=function(e,n){void 0===n&&(n=!1);var t=document.createElement("table");t.id="summary-table";var r=document.createElement("tr");r.id="table-header";var a=function(e){var n=document.createElement("th");n.textContent=e,n.onclick=function(){!function(e){var n=document.getElementById("summary-table"),t=[].slice.call(n.rows);t.shift(),t.sort((function(n,t){var r=n.getElementsByClassName(e)[0].textContent,o=t.getElementsByClassName(e)[0].textContent;return parseFloat(r)>parseFloat(o)?-1:parseFloat(r)<parseFloat(o)?1:0})),function(e,n){var t=document.getElementById("table-header");n.innerHTML="",n.appendChild(t),e.forEach((function(e){n.appendChild(e)}))}(t,n)}(e)},r.appendChild(n)};for(var i in e[0])a(i);return t.appendChild(r),e.forEach((function(e){var r=document.createElement("tr");for(var a in e){var i=document.createElement("td");i.textContent="Name"==a?o(e[a]):n?e[a]+"%":e[a],i.className=a,r.appendChild(i)}t.appendChild(r)})),t},i=function(e){e.reverse();var n=document.createElement("div");return e.forEach((function(e){var t=document.createElement("p");t.className="message-header";var r,a,i=document.createElement("p");i.className="message-text",t.textContent=o(e.sender_name)+" at "+(r=e.timestamp_ms,(a=new Date(r)).getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()),"content"in e?i.textContent=o(e.content):(i.className="message-media","photos"in e?i.textContent="sent a photo.":"videos"in e?i.textContent="sent a video.":"Share"!==e.type||"content"in e?i.textContent="sent some non-text media.":i.textContent="shared something");var s=document.createElement("div");s.className="message-wrapper",s.appendChild(t),s.appendChild(i),n.appendChild(s)})),n},s=function(e){return Math.floor(Math.random()*e)},l=t(379),c=t.n(l),d=t(795),u=t.n(d),m=t(569),p=t.n(m),h=t(565),f=t.n(h),g=t(216),v=t.n(g),b=t(589),y=t.n(b),w=t(150),k={};k.styleTagTransform=y(),k.setAttributes=f(),k.insert=p().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=v(),c()(w.Z,k),w.Z&&w.Z.locals&&w.Z.locals;var x=function(e){var t=function(t){var l=document.getElementById("dm-list"),c=document.getElementById("main-header"),d=document.getElementById("main-content"),u=document.createElement("button");u.setAttribute("class","chat-button"),u.textContent=o(e[t][0].title),u.onclick=function(){var l=e[t],u=document.createElement("button");u.textContent="Percentage",u.onclick=function(){var e,t;d.innerHTML="",d.appendChild(m),d.appendChild(u),d.appendChild(a((e={},(t=structuredClone(n)).forEach((function(n){for(var t in n)"Name"!==t&&(t in e?e[t]+=n[t]:e[t]=n[t])})),t.forEach((function(n){for(var t in n)"Name"!==t&&0!==e[t]&&(n[t]=Math.round(n[t]/e[t]*100*1)/1)})),t),!0))};var m=document.createElement("button");m.textContent="Raw Numbers",m.onclick=function(){d.innerHTML="",d.appendChild(m),d.appendChild(u),d.appendChild(a(n))};var p=document.createElement("button");p.textContent="Summary",p.onclick=function(){d.innerHTML="",d.appendChild(m),d.appendChild(u),d.appendChild(a(r(l)[0]))};var h=document.createElement("button");h.textContent="Latest Messages",h.onclick=function(){d.innerHTML="",d.appendChild(i(function(e){var n=e[0];return e.forEach((function(e){e.messages[0].timestamp_ms>n.messages[0].timestamp_ms&&(n=e)})),n.messages.slice(0,10)}(l)))};var f=document.createElement("button");f.textContent="First Messages",f.onclick=function(){d.innerHTML="",d.appendChild(i(function(e){var n=e[0];return e.forEach((function(e){e.messages[0].timestamp_ms<n.messages[0].timestamp_ms&&(n=e)})),n.messages.slice(-10)}(l)))};var g=document.createElement("button");g.textContent="Random Message",g.onclick=function(){d.innerHTML="",d.appendChild(i(function(e){var n=s(e.length),t=s(e[n].messages.length);return e[n].messages.slice(t,t+3)}(l)))};var v=document.createElement("button");v.textContent="Top Words",v.onclick=function(){var e,n;d.innerHTML="",d.appendChild((e=r(l)[1],n=document.createElement("div"),e.forEach((function(e){var t=document.createElement("p");t.textContent=e,n.appendChild(t)})),n))},c.innerHTML="",d.innerHTML="",c.appendChild(p),c.appendChild(h),c.appendChild(f),c.appendChild(g),c.appendChild(v),document.getElementById("chat-name").textContent=o(e[t][0].title),d.appendChild(m),d.appendChild(u),d.appendChild(a(r(e[t])[0]))},document.getElementById("search-threads-input").style.display="block",l.appendChild(u)};for(var l in e)t(l)};document.getElementById("submit-button").addEventListener("click",(function(e){var n,t,r,o,a,i,s;e.preventDefault(),s=document.getElementById("file-input").files,n=Array.from(s).filter((function(e){return"json"===e.name.substring(e.name.length-4)})),t=x,r=void 0,o=void 0,i=function(){var e,r,o,a;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(i){for(e=n.length,r={},o=function(n){var o=new FileReader;o.onload=function(n){var o=n.target.result,a=JSON.parse(o);a.thread_path in r?r[a.thread_path].push(a):r[a.thread_path]=[a],0==--e&&t(r)},o.readAsText(n,"UTF-8")},a=0;a<e;a++)o(n[a]);return[2]}))},new((a=void 0)||(a=Promise))((function(e,n){function t(e){try{l(i.next(e))}catch(e){n(e)}}function s(e){try{l(i.throw(e))}catch(e){n(e)}}function l(n){var r;n.done?e(n.value):(r=n.value,r instanceof a?r:new a((function(e){e(r)}))).then(t,s)}l((i=i.apply(r,o||[])).next())}))}),!1),document.getElementById("search-threads-input").onkeyup=function(){return function(){for(var e=document.getElementById("search-threads-input").value.toLowerCase(),n=document.getElementById("dm-list").getElementsByTagName("button"),t=0;t<n.length;t++)n[t].textContent.toLowerCase().indexOf(e)>-1?n[t].style.display="block":n[t].style.display="none"}()}})()})();
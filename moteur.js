// ===== Moteur du cours : navigation, quiz, révision, lexique =====
const CH=[["🌱","Premiers pas","Débutant"],["🔢","Compter, le temps et les verbes","Débutant"],["👤","Moi et les autres","Débutant"],["🎨","Décrire le monde","Débutant"],["🍽️","La maison et la table","Intermédiaire"],["🏙️","Sortir et acheter","Intermédiaire"],["🌤️","Vie quotidienne","Intermédiaire"],["🚀","Aller plus loin","Avancé"]];
const L=[];
CH.forEach((_,c)=>{L0.filter(l=>l.c===c).forEach(l=>L.push(l));
 L.push({id:"mini"+c,c,mini:1,e:"🎯",n:"Mini-bilan : "+CH[c][1],q:[],h:`<div class="card"><div class="big">🎯</div><h3>Mini-bilan du chapitre ${c+1}</h3><p>8 questions tirées au hasard dans les leçons de ce chapitre.</p></div>`})});
const PG=L0.find(l=>l.id=="pieges");PG.grp="Outils";L.push(PG);
L.push({id:"lexique",custom:1,grp:"Outils",e:"📚",n:"Lexique : tous les mots",q:[]});
L.push({id:"revision",custom:1,grp:"Outils",e:"🔁",n:"Révision du jour",q:[]});
const BL=L0.find(l=>l.bilan);BL.grp="Pour finir";L.push(BL);
let no=0;L.forEach(l=>{if(l.c!=null&&!l.mini)l.no=++no});

// ---------- Outils ----------
const $=id=>document.getElementById(id);
const mel=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const nrm=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const lab=l=>(l.no?"Leçon "+l.no+" : ":"")+l.n;
const chip=l=>l.c!=null?`<div class="chip">${CH[l.c][0]} Chapitre ${l.c+1} · ${CH[l.c][1]} · ${CH[l.c][2]}</div><br>`:"";
const hash=s=>{let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36)};
const qkey=q=>hash(q.q+"|"+(q.t=="qcm"?q.o[q.c]:q.t=="ord"?q.w.join(" "):q.p.map(x=>x.join("=")).join(";")));
let QMAP=null;
const allQ=()=>{if(!QMAP){QMAP={};L.forEach(l=>{if(l.c!=null||l.grp=="Outils")(l.q||[]).forEach(q=>{QMAP[qkey(q)]=q})})}return QMAP};

// ---------- État ----------
let cur=0,mode="cours",qi=0,score=0,qs=[],fait=[],pend=[],cho=[],miss=[],kind="quiz",mt=null;
let res=ld("dz_res2",{}),SR=ld("dz_sr",{});
{const k=L.findIndex(l=>l.id==ld("dz_last",""));if(k>0)cur=k}
const INT=[0,1,3,7,14,30];
function rec(q,ok){const k=qkey(q),s=SR[k]||{b:0,d:0};
 if(ok){s.b=Math.min(5,s.b+1);s.d=Date.now()+INT[s.b]*864e5}else{s.b=1;s.d=Date.now()}
 SR[k]=s;sv("dz_sr",SR)}
const dueKeys=()=>{const m=allQ(),n=Date.now();return Object.keys(SR).filter(k=>m[k]&&SR[k].d<=n)};

// ---------- Menu ----------
function menu(){let h="",last=null;const du=dueKeys().length;
 L.forEach((l,i)=>{const g=l.c!=null?"c"+l.c:l.grp;
  if(g!==last){last=g;
   if(l.c!=null){const gr=L.filter(x=>x.c===l.c),d=gr.filter(x=>res[x.id]!=null).length;
    h+=`<div class="ch"><span>${CH[l.c][0]} Chapitre ${l.c+1} · ${CH[l.c][1]}</span><b>${d}/${gr.length}</b></div>`}
   else h+=`<div class="ch"><span>${l.grp=="Outils"?"🧰":"🏆"} ${l.grp}</span></div>`}
  const badge=l.id=="revision"&&du?`<span class="sc">${du}</span>`:res[l.id]!=null?`<span class="sc">✓ ${res[l.id]}%</span>`:"";
  h+=`<button class="${i==cur?"on":""}"${i==cur?' aria-current="page"':""} onclick="go(${i})"><span>${l.e}</span><span class="lt">${l.no?l.no+". ":""}${l.n}</span>${badge}</button>`});
 $("menu").innerHTML=h;
 const st=L.filter(l=>!l.custom),n=st.filter(l=>res[l.id]!=null).length,p=Math.round(100*n/st.length);
 $("gp").style.width=p+"%";$("gl").textContent=n+" / "+st.length+" étapes · "+p+" %";
 $("pbar").setAttribute("aria-valuenow",p)}
function go(i){cur=i;mode="cours";kind="quiz";sv("dz_last",L[i].id);$("menu").classList.remove("open");$("ov").classList.remove("open");scrollTo(0,0);draw()}
function nav(extra){return `<div class="nav"><button ${cur?"":"disabled"} onclick="go(${cur-1})">← Précédent</button>${extra}</div>`}
function draw(){menu();const l=L[cur];document.title=lab(l)+" – Darija algérien";
 if(mode=="cours"){
  if(l.custom){$("main").innerHTML=`<h2 class="t">${l.e} ${l.n}</h2>`+PAGES[l.id]()+nav(`<button onclick="go(${cur+1})">Suivant →</button>`);if(AFTER[l.id])AFTER[l.id]();return}
  $("main").innerHTML=`<h2 class="t">${chip(l)}${l.e} ${lab(l)}</h2>${l.h}
  ${nav(`<button onclick="start()">🎮 Passer aux activités →</button>`)}
  <p class="foot">ℹ️ Le darija varie d’une région à l’autre : ce cours enseigne l’usage courant, surtout celui d’Alger. Un mot peut se dire autrement ailleurs.</p>`;
 }else if(mode=="quiz")drawQ();else drawEnd();
}
const pool=f=>[].concat(...L.filter(x=>x.c!=null&&x.q&&x.q.length&&f(x)).map(x=>x.q));
function begin(list,k){qs=list;qi=0;score=0;miss=[];kind=k;fait=qs.map(()=>false);mode="quiz";scrollTo(0,0);draw()}
function start(){const l=L[cur];
 begin(l.bilan?mel(pool(()=>true)).slice(0,20):l.mini?mel(pool(x=>x.c===l.c)).slice(0,8):mel(l.q),"quiz")}
function retry(){begin(miss.slice(),"retry")}
function revStart(){const m=allQ();begin(dueKeys().sort((a,b)=>SR[a].d-SR[b].d).slice(0,10).map(k=>m[k]),"review")}

// ---------- Questions ----------
function drawQ(){
 const q=qs[qi],pc=Math.round(100*qi/qs.length);let body="";
 if(q.t=="qcm"){pend=q.fix?q.o.slice():mel(q.o);
  body=pend.map((o,i)=>`<button class="opt" onclick="pick(${i})">${o}</button>`).join("")}
 else if(q.t=="mat"){mt={l:q.p.map((_,i)=>i),r:mel(q.p.map((_,i)=>i)),sel:null,ok:new Set(),err:0};
  body=`<p class="hint">Touche un mot à gauche, puis sa traduction à droite.</p><div class="mat"><div id="ml"></div><div id="mr"></div></div>`}
 else{pend=mel(q.w);cho=[];body=`<div class="ans" id="ans"></div><div class="pool" id="pool"></div><button onclick="chk()">Vérifier ✔</button> <button onclick="clr()">Effacer</button>`}
 if(q.h)body+=` <button id="hb" onclick="this.outerHTML='<p class=tip>💡 ${q.h.replace(/'/g,"’")}</p>'">💡 Indice</button>`;
 const t=kind=="review"?"🔁 Révision du jour":kind=="retry"?"🔁 Mes erreurs":L[cur].e+" "+L[cur].n;
 $("main").innerHTML=`<h2 class="t">${kind=="quiz"?chip(L[cur]):""}${t}</h2>
 <div class="bar" role="progressbar" aria-label="Progression du quiz" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pc}"><i style="width:${pc}%"></i></div><p>Question ${qi+1} / ${qs.length} · Score : ${score}</p>
 <div class="card">${q.big?`<div class="bigemo" aria-hidden="true">${q.big}</div>`:""}<h3>${q.q}</h3>${body}<div id="fb" aria-live="polite"></div></div>
 <div class="nav"><button onclick="go(${cur})">${kind=="review"?"← Retour":"📖 Relire le cours"}</button><button id="nx" disabled onclick="next()">Suivant →</button></div>`;
 if(q.t=="ord")ord();if(q.t=="mat")matDraw();
}
function ord(){
 $("ans").innerHTML=cho.map((w,i)=>`<button onclick="un(${i})">${w}</button>`).join("");
 $("pool").innerHTML=pend.map((w,i)=>`<button onclick="ad(${i})">${w}</button>`).join("")}
function clr(){cho=[];pend=mel(qs[qi].w);ord()}
function ad(i){cho.push(pend.splice(i,1)[0]);ord()}
function un(i){pend.push(cho.splice(i,1)[0]);ord()}
function matDraw(){const q=qs[qi],b=(i,s,f)=>`<button class="mb${mt.ok.has(i)?" ok":""}${s&&mt.sel===i?" sel":""}" data-i="${i}"${mt.ok.has(i)?" disabled":""} onclick="${f}(${i})">${q.p[i][s?0:1]}</button>`;
 $("ml").innerHTML=mt.l.map(i=>b(i,1,"ml")).join("");$("mr").innerHTML=mt.r.map(i=>b(i,0,"mr")).join("")}
function ml(i){mt.sel=i;matDraw()}
function mr(j){const q=qs[qi];if(mt.sel===null)return;
 if(mt.sel===j){mt.ok.add(j);mt.sel=null;matDraw();if(mt.ok.size==q.p.length)fin(mt.err==0)}
 else{mt.err++;mt.sel=null;matDraw();const e=document.querySelector('#mr [data-i="'+j+'"]');if(e){e.classList.add("ko");setTimeout(()=>e.classList.remove("ko"),500)}}}
function pick(i){const q=qs[qi],ok=pend[i]==q.o[q.c];
 document.querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;if(pend[j]==q.o[q.c])b.classList.add("ok");else if(j==i)b.classList.add("ko")});
 fin(ok)}
function chk(){const q=qs[qi];if(!cho.length)return;const ok=cho.join(" ")==q.w.join(" ");$("pool").style.display="none";fin(ok)}
function fin(ok){const q=qs[qi];
 if(!fait[qi]){fait[qi]=true;if(ok)score++;else miss.push(q);if(kind!="retry")rec(q,ok)}
 const rep=q.t=="qcm"?q.o[q.c]:q.t=="ord"?q.w.join(" "):q.p.map(x=>x[0]+" = "+x[1]).join(" ; ");
 $("fb").innerHTML=`<div class="fb ${ok?"ok":"ko"}">${ok?"✅ Bravo ! ":"❌ Pas tout à fait. Bonne réponse : "+rep+". "}${q.ex||""}</div>`+(ok?"":`<p><button onclick="drawQ()">🔄 Réessayer</button></p>`);
 $("nx").disabled=false;$("nx").textContent=qi==qs.length-1?"Voir mon score 🎉":"Suivant →";
 document.querySelectorAll("#main .card button").forEach(b=>{if(!b.textContent.includes("Réessayer"))b.disabled=true})}
function next(){if(qi<qs.length-1){qi++;drawQ()}else{mode="fin";if(kind=="quiz"){res[L[cur].id]=Math.round(100*score/qs.length);sv("dz_res2",res)}scrollTo(0,0);draw()}}
function drawEnd(){const p=Math.round(100*score/qs.length),s=p>=90?"🌟🌟🌟":p>=60?"🌟🌟":"🌟";
 const again=kind=="review"?"":`<button onclick="start()">🔄 Nouvel essai</button>`;
 const back=kind=="review"?`<button onclick="go(${cur})">← Retour à la révision</button>`:`<button onclick="go(${cur})">📖 Relire le cours</button><button ${cur<L.length-1?"":"disabled"} onclick="go(${cur+1})">Suivant →</button>`;
 $("main").innerHTML=`<h2 class="t">${kind=="quiz"?chip(L[cur]):""}${kind=="review"?"🔁 Révision du jour":L[cur].e+" Résultat"}</h2><div class="card"><div class="big">${s}</div>
 <h3 style="text-align:center">${score} / ${qs.length} (${p} %)</h3>
 <p style="text-align:center">${p>=90?"Excellent ! Tu maîtrises cette étape 🎉":p>=60?"Bien joué ! Encore un essai pour viser les 3 étoiles.":"Courage ! Relis le cours puis réessaie, tu vas y arriver 💪"}</p></div>
 <div class="nav">${again}${miss.length?`<button onclick="retry()">🔁 Refaire mes erreurs (${miss.length})</button>`:""}${back}</div>`}

// ---------- Pages spéciales ----------
let LEXC=null;
function lex(){if(LEXC)return LEXC;const seen=new Set(),d=document.createElement("div");LEXC=[];
 L.forEach((l,i)=>{if(!l.h||l.c==null||l.mini)return;d.innerHTML=l.h;
  d.querySelectorAll(".ph").forEach(p=>{const r=p.querySelector("b").textContent.trim(),a=(p.querySelector(".ar")||{}).textContent||"",f=p.querySelector("em").textContent.trim(),k=r+"|"+f;
   if(seen.has(k))return;seen.add(k);LEXC.push({r,a,f,i,n:l.no,s:nrm(r+" "+f)+" "+a})})});
 LEXC.sort((x,y)=>x.r.localeCompare(y.r,"fr"));return LEXC}
function lexGo(v){const t=nrm(v).split(/\s+/).filter(Boolean),all=lex(),r=all.filter(x=>t.every(w=>x.s.includes(w))),sh=r.slice(0,120);
 $("lxn").textContent=t.length?(r.length?r.length+" résultat"+(r.length>1?"s":"")+(r.length>120?" (affine ta recherche pour voir la suite)":""):"Aucun résultat."):all.length+" mots dans le cours. Tape un mot pour chercher.";
 $("lxr").innerHTML=sh.map(x=>`<div class="lx"><div><b>${x.r}</b>${x.a?` <span class="ar" lang="ar">${x.a}</span>`:""}</div><div>${x.f}</div><button class="lk" onclick="go(${x.i})">Leçon ${x.n}</button></div>`).join("")}
const PAGES={
 lexique(){return `<div class="card"><h3>Chercher un mot</h3><input type="text" id="lx" autocomplete="off" autocapitalize="off" aria-label="Chercher un mot" placeholder="En darija ou en français…" oninput="lexGo(this.value)"><p id="lxn" class="foot" aria-live="polite"></p><div id="lxr"></div></div>`},
 revision(){const m=allQ(),now=Date.now(),ks=Object.keys(SR).filter(k=>m[k]),due=ks.filter(k=>SR[k].d<=now).length,mast=ks.filter(k=>SR[k].b>=5).length;
  const fut=ks.filter(k=>SR[k].d>now).map(k=>SR[k].d).sort((a,b)=>a-b)[0];let nx="";
  if(!due&&fut){const j=Math.max(1,Math.ceil((fut-now)/864e5));nx="Prochaine révision dans "+j+" jour"+(j>1?"s":"")+"."}
  return `<div class="card"><h3>Comment ça marche</h3><p>Chaque question réussie revient après 1, 3, 7, 14 puis 30 jours. Une erreur la ramène à aujourd’hui. C’est la méthode la plus efficace pour retenir du vocabulaire.</p></div>
  <div class="card"><div class="stats"><div><b>${ks.length}</b><span>questions vues</span></div><div><b>${due}</b><span>à réviser</span></div><div><b>${mast}</b><span>maîtrisées</span></div></div>
  ${due?`<p><button onclick="revStart()">▶️ Commencer (${Math.min(10,due)} questions)</button></p>`:`<p>${ks.length?"🎉 Rien à réviser aujourd’hui. "+nx:"Fais d’abord quelques leçons : les questions apparaîtront ici."}</p>`}</div>`}
};
const AFTER={lexique(){lexGo("")}};

// ---------- Démarrage ----------
$("burger").onclick=()=>{const o=$("menu").classList.toggle("open");$("ov").classList.toggle("open");$("burger").setAttribute("aria-expanded",o)};
$("ov").onclick=()=>{$("menu").classList.remove("open");$("ov").classList.remove("open");$("burger").setAttribute("aria-expanded","false")};
let dp=null;
addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;$("inst").hidden=false});
$("inst").onclick=()=>{if(dp){dp.prompt();dp=null;$("inst").hidden=true}};
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register("sw.js").catch(()=>{});
draw();

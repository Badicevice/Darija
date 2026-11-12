// ---------- Aides d’écriture du cours ----------
const AUD={"سلام":1,"واش راك؟":2,"لاباس":3,"الحمد لله":4,"إيه":5,"لالا":6,"بصح":7,"صحا":8,"كتاب":15,"يعطيك الصحة":16,"بلا مزية":17,"الله يخليك":18,"سمحلي":19,"معليش":20,"مرحبا":21,"تفضّل":22,"بالسلامة":23,"إن شاء الله":24,"ما شاء الله":25,"بسم الله":26,"ربي معاك":27,"الله يسهّل":28,"الله يرحمو":29,"مبروك":30,"عيد مبارك":31,"أنا":32,"نتا":33,"نتي":34,"هو":35,"هي":36,"حنا":37,"نتوما":38,"هوما":39,"راني":40,"راك":41,"راكي":42,"راه":43,"راها":44,"رانا":45,"راكم":46,"راهم":47,"واش":48,"شكون":49,"وين":50,"كيفاش":51,"وقتاش":52,"علاش":53,"قداش":54,"ولد":55,"بنت":56,"دار":57,"مدرسة":58,"كبير":59,"صغير":60};
const AUDT={"es-salamou 3alaykoum":1001,"wa 3alaykoum es-salam":1002,"wach raki ?":1003,"w nta ?":1004,"b-khir":1005,"kteb":1006,"kateb":1007,"baraka llahou fik":1008,"3la walou":1009,"smahli bezzaf":1010,"ma kan walou":1011,"mou machi mouchkil":1012,"mer7ba bik":1013,"tsba7 3la khir":1014,"nchoufek men ba3d":1015,"llah ybarek fik":1016,"sa7a ramdankoum":1017,"3am sa3id":1018,"3ouqbal lik !":1019,"ana sghir":1020,"hiya jmila":1021,"nta kbir":1022,"rani mrid":1023,"3and men":1024,"m3a men":1025,"wayn rah ?":1026,"shkoun hada ?":1027,"wach hada ?":1028,"rajel":1029,"el-ktab":1030,"el-ktab el-kbir":1031,"el-bent el-kbira":1032,"el-dar → ed-dar":1033,"el-chems → ech-chems":1034,"el-trig → et-trig":1035,"el-rajel → er-rajel":1036,"hada weld":1037,"hadik bent":1038,"had el-bent":1039,"wach rak ?":2};
const SND=(a,r)=>{const n=(a&&AUD[a])||(!a&&r&&AUDT[r]);return n?`<button class="snd" type="button" data-a="${n}" aria-label="Écouter la prononciation">🔊</button>`:""};
const P=(r,a,f)=>`<div class="ph"><b>${r}</b>${a?`<span class="ar" lang="ar">${a}</span>`:""}${SND(a,r)}<em>${f}</em></div>`;
// Schémas : coupe de profil de la bouche (visage tourné vers la gauche) pour chaque son nouveau.
const TGD={
 ref:{t:"M62 128C56 120 56 113 62 111C76 98 100 92 114 99C126 106 130 124 128 150L70 140Z"},
 ch:{t:"M62 128C57 118 57 100 63 93C69 85 78 85 87 89C100 93 116 99 122 110C128 122 129 136 128 150L70 140Z",m:[72,82,9],air:1},
 kh:{t:"M62 128C56 122 56 115 62 113C80 109 100 105 112 97C120 91 128 89 133 97C138 107 134 128 128 150L70 140Z",m:[131,90,9],air:1},
 gh:{t:"M62 128C56 122 56 115 62 113C80 109 100 105 112 97C120 91 128 89 133 97C138 107 134 128 128 150L70 140Z",m:[131,90,9],air:1,v:1},
 q:{t:"M62 128C56 122 56 115 62 113C80 110 100 106 112 96C119 88 128 80 135 88C142 99 135 128 128 150L70 140Z",m:[132,87,9],stop:1},
 h7:{t:"M62 128C56 122 56 115 62 112C80 103 100 99 114 104C130 110 149 117 151 135C152 148 140 155 128 152L70 140Z",m:[154,132,9],air:1},
 a3:{t:"M62 128C56 122 56 115 62 112C80 103 100 99 114 104C130 110 149 117 151 135C152 148 140 155 128 152L70 140Z",m:[154,132,9],air:1,v:1}
};
const TG=(k,lab)=>{const d=TGD[k];let s=`<svg viewBox="0 0 200 190" class="tg" role="img" aria-label="${lab}">`+
 `<rect width="200" height="190" rx="14" fill="#fffaf3"/>`+
 `<path d="M200 0L96 0C70 6 58 30 56 52L34 80L50 87L42 96L47 101L47 107L43 113L52 122L46 140C60 160 90 162 110 160L112 190L200 190Z" fill="#f3cfa8" stroke="#b98a5a" stroke-width="1.5"/>`+
 `<path d="M47 101L58 99C62 88 70 80 84 76C100 72 116 74 127 81C131 84 135 92 136 102C140 97 142 90 143 84C150 86 155 92 156 100L158 178L132 178L128 150L120 132L62 128L56 113L47 107Z" fill="#fff" stroke="#b98a5a" stroke-width="1.5"/>`+
 `<path d="${d.t}" fill="#f28b8b" stroke="#b84a4a" stroke-width="1.5" stroke-linejoin="round"/>`+
 `<path d="M51 97L58 97L56 108Z" fill="#fff" stroke="#777"/><path d="M51 119L58 119L56 109Z" fill="#fff" stroke="#777"/>`;
 if(d.m)s+=`<circle cx="${d.m[0]}" cy="${d.m[1]}" r="${d.m[2]}" fill="#e11d48" fill-opacity=".25" stroke="#e11d48" stroke-width="2"${d.stop?"":' stroke-dasharray="4 3"'}/>`;
 if(d.stop)s+=`<path d="M${d.m[0]-4} ${d.m[1]-4}l8 8m0-8l-8 8" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>`;
 if(d.air)s+=`<path d="M40 104H12m8-6l-8 6l8 6" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 97q-5-4-10 0t-10 0M38 111q-5 4-10 0t-10 0" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>`;
 if(d.v)s+=`<path d="M136 168l4-5l4 10l4-10l4 10l3-5" fill="none" stroke="#d97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
 if(k==="ref")s+=`<g font-size="9" font-family="sans-serif" fill="#1f2937"><text x="100" y="66" text-anchor="middle">palais</text><text x="18" y="98" text-anchor="middle">dents</text><path d="M31 97L51 102" stroke="#1f2937" stroke-width=".8"/><text x="150" y="70" text-anchor="middle">luette</text><path d="M148 73L137 98" stroke="#1f2937" stroke-width=".8"/><text x="92" y="118" text-anchor="middle" fill="#7f1d1d" font-weight="bold">langue</text><text x="180" y="140" text-anchor="middle">gorge</text><path d="M170 138L158 136" stroke="#1f2937" stroke-width=".8"/><text x="20" y="130" text-anchor="middle">lèvres</text><path d="M30 123L43 112" stroke="#1f2937" stroke-width=".8"/></g>`;
 return s+`</svg>`};
const PX=(r,a,d,ex,fr,id)=>`<div class="ph"><b>${r}</b><span class="ar" lang="ar">${a}</span><em>${d}</em>${id?`<button class="snd sndx" type="button" data-a="${id}" aria-label="Écouter le mot d’exemple ${ex}">🔊 <span>mot d’exemple : <strong>${ex}</strong> (${fr})</span></button>`:`<em>ex. : ${ex} (${fr})</em>`}</div>`;
const TF=(k,r,a,txt,ex,id)=>`<figure class="tgf"><figcaption>${r} <span class="ar" lang="ar">${a}</span></figcaption>${TG(k,"Position de la langue pour le son "+r)}<p>${txt}</p>${id?`<button class="snd sndx" type="button" data-a="${id}" aria-label="Écouter le mot d’exemple ${ex}">🔊 <span>exemple : <strong>${ex}</strong></span></button>`:""}</figure>`;

const G=(...p)=>`<div class="grid">${p.join("")}</div>`;
const D=(...l)=>`<div class="dlg">${l.map((x,i)=>`<div class="b ${i%2?"r":""}"><small>${x[0]}</small><b>${x[1]}</b><em>${x[2]}</em></div>`).join("")}</div>`;
const R=t=>`<div class="tip">💡 <b>À retenir :</b> ${t}</div>`;
const S=(n,t,b)=>`<div class="card"><h3><span class="n">${n}</span>${t}</h3>${b}</div>`;
const Z=t=>`<div class="goal">🎯 Objectif : ${t}</div>`;
// ---------- Fabrique de questions ----------
const Q=(q,o,ex,h)=>({t:"qcm",q,o,c:0,ex,h});   // 1re option = bonne réponse (mélangées à l’affichage)
const V=(q,a,ex)=>({t:"qcm",q,o:["Vrai","Faux"],c:a?0:1,ex,fix:1});
const T=(q,a,ex,h)=>({t:"txt",q,a,ex,h});
const O=(q,w,ex,h)=>({t:"ord",q,w,ex,h});
const M=(q,p,ex)=>({t:"mat",q,p,ex});
const C=(q,o,ex,h)=>({t:"qcm",q:"Complète : "+q,o,c:0,ex,h});
const I=(e,q,o,ex)=>({t:"qcm",q,o,c:0,ex,big:e});

// ---------- Schéma du corps humain ----------
const BP=[["cha3r","شعر","les cheveux",160,22,"L",14],["ras","راس","la tête",138,36,"L",36],["wedn","ودن","l’oreille",130,56,"L",58],["raqba","رقبة","le cou",150,90,"L",92],["ktef","كتف","l’épaule",128,112,"L",122],["dra3","ذراع","le bras",104,170,"L",172],["yed","يد","la main",80,258,"L",256],["rokba","ركبة","le genou",138,332,"L",332],["rjel","رجل","la jambe, le pied",130,440,"L",440],["3in","عين","l’œil",170,48,"R",36],["nef","نف","le nez",162,58,"R",58],["fem","فم","la bouche",164,69,"R",80],["sder","صدر","la poitrine",176,130,"R",132],["qalb","قلب","le cœur",172,150,"R",156],["kerch","كرش","le ventre",164,205,"R",206],["sba3","صبع","le doigt",242,262,"R",262]];
function bd(k){const b=BP.find(x=>x[0]==k);document.getElementById("bdi").innerHTML=`<b>${b[0]}</b> <span class="ar" lang="ar" style="display:inline;font-size:1.3rem">${b[1]}</span> = ${b[2]}`;document.querySelectorAll(".bp").forEach(e=>e.classList.toggle("on",e.dataset.k==k))}
function bodySVG(){const f="#d9f2e3",s="#0f5132";
 const limb=(d,w)=>`<path d="${d}" fill="none" stroke="${s}" stroke-width="${w+4}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${f}" stroke-width="${w}" stroke-linecap="round"/>`;
 let v=`<svg viewBox="0 0 320 470" class="body" role="img" aria-label="Schéma du corps humain avec les mots en darija">`+
 limb("M124 110 L98 190 L84 248",16)+limb("M196 110 L222 190 L236 248",16)+limb("M142 232 L138 340 L134 430",22)+limb("M178 232 L182 340 L186 430",22)+
 `<g fill="${f}" stroke="${s}" stroke-width="3" stroke-linejoin="round"><path d="M122 104 Q160 94 198 104 L192 232 Q160 242 128 232 Z"/><rect x="150" y="80" width="20" height="22" rx="6"/><circle cx="160" cy="52" r="30"/><circle cx="82" cy="258" r="10"/><circle cx="238" cy="258" r="10"/><ellipse cx="128" cy="444" rx="16" ry="8"/><ellipse cx="192" cy="444" rx="16" ry="8"/><circle cx="130" cy="54" r="5"/><circle cx="190" cy="54" r="5"/></g>`+
 `<path d="M131 46 Q160 4 189 46 Q160 24 131 46Z" fill="#13261b"/><circle cx="150" cy="48" r="2.6" fill="#13261b"/><circle cx="170" cy="48" r="2.6" fill="#13261b"/><path d="M150 67 Q160 74 170 67" fill="none" stroke="#13261b" stroke-width="2.4" stroke-linecap="round"/>`;
 BP.forEach(p=>{const L=p[5]=="L",x=L?6:314,lx=L?70:250;
  v+=`<g class="bp" data-k="${p[0]}" tabindex="0" role="button" aria-label="${p[0]}" onclick="bd('${p[0]}')" onkeydown="if(event.key=='Enter')bd('${p[0]}')"><line x1="${lx}" y1="${p[6]-4}" x2="${p[3]}" y2="${p[4]}"/><circle cx="${p[3]}" cy="${p[4]}" r="4.5"/><text x="${x}" y="${p[6]}" text-anchor="${L?"start":"end"}">${p[0]}</text></g>`});
 return v+`</svg>`}

const L0=[
{id:"saluer",c:0,n:"Saluer et prendre des nouvelles",e:"🤝",h:Z("dire bonjour, demander « comment vas-tu ? » et répondre.")+
S(1,"Dire bonjour",G(P("salam","سلام","salut, bonjour"),P("es-salamou 3alaykoum","","la paix sur vous (bonjour)"),P("wa 3alaykoum es-salam","","et sur vous la paix (réponse)")))+
S(2,"Demander des nouvelles",G(P("wach rak ?","واش راك؟","comment vas-tu ? (à un homme)"),P("wach raki ?","","comment vas-tu ? (à une femme)"),P("w nta ?","","et toi ?"))+
G(P("labas","لاباس","ça va, pas mal"),P("el-hamdoulillah","الحمد لله","Dieu merci, bien"),P("b-khir","","bien")))+
S(3,"Les petits mots utiles",G(P("ih","إيه","oui"),P("lala","لالا","non"),P("bsah","بصح","mais"),P("saha","صحا","merci, bravo")))+
S(4,"Dialogue",D(["Karim","salam ! wach rak ?","Salut ! Comment vas-tu ?"],["Sofia","labas, el-hamdoulillah. W nta ?","Ça va, Dieu merci. Et toi ?"],["Karim","b-khir, el-hamdoulillah.","Bien, Dieu merci."]))+
R("<b>wach</b> se lit « ouach » (w = ou), <b>labas</b> « labasse », <b>kh</b> et <b>3</b> sont expliqués leçon 2.")+
R("on ajoute souvent <b>ya</b> devant un prénom pour l’appeler : <i>ya Mohammed, wach rak ?</i> = Ô Mohammed, comment vas-tu ?"),
q:[Q("Que veut dire « salam » ?",["salut, bonjour","merci","au revoir"],"salam (سلام) sert à saluer."),
Q("« wach rak ? » signifie :",["comment vas-tu ?","où vas-tu ?","qui es-tu ?"],"wach rak ? = comment vas-tu ?"),
V("« wach rak ? » s’adresse à un homme.",true,"À une femme, on dit « wach raki ? »."),
Q("Tu parles à une femme. Tu dis :",["wach raki ?","wach rak ?","salam rak ?"],"Au féminin, rak devient raki."),
Q("« labas » signifie :",["ça va, pas mal","oui","mais"],"labas = ça va."),
Q("« el-hamdoulillah » veut dire :",["Dieu merci","bonne nuit","pardon"],"On l’utilise pour dire qu’on va bien."),
Q("Comment dit-on « non » ?",["lala","ih","bsah"],"lala = non, ih = oui."),
Q("Comment dit-on « oui » ?",["ih","lala","bsah"],"ih = oui (إيه)."),
Q("« bsah » signifie :",["mais","merci","et"],"bsah = mais."),
Q("Comment dit-on « et toi ? » (à un homme)",["w nta ?","w nti ?","wach rak ?"],"w nta ? = et toi ?"),
O("Remets en ordre : « Ça va, Dieu merci »",["labas,","el-hamdoulillah"],"labas d’abord, puis el-hamdoulillah.")]},

{id:"sons",c:0,n:"Prononcer les sons",e:"🗣️",h:Z("lire et prononcer les sons qui n’existent pas en français.")+
S(1,"Les lettres qui se lisent comme en français",G(P("a, i, ou","","voyelles de base (ou = u)"),P("r","","toujours roulé"),P("s","","toujours un s sourd (jamais z)"),P("g","","toujours dur (comme gare)"),P("w","","comme dans ouate"),P("j","","comme dj")))+
S(2,"Les sons nouveaux",`<p>Le bouton 🔊 de chaque carte fait entendre un <b>mot d’exemple</b> qui contient le son, pas la lettre toute seule.</p>`+G(PX("ch","ش","comme dans chat","chems","soleil",9),PX("kh","خ","comme la jota espagnole","khobz","pain",10),PX("gh","غ","r « parisien »","ghali","cher",11),PX("q","ق","k au fond de la gorge","qal","il a dit",12),PX("7","ح","h soufflé fort","7ajj","pèlerin",13),PX("3","ع","son de gorge serrée","3ali","le prénom Ali",14))+
R("sur Internet et dans les SMS, on écrit <b>7</b> pour ح et <b>3</b> pour ع parce qu’ils ressemblent à ces lettres arabes."))+
S(3,"Où placer la langue ?",`<p>Voici la bouche vue de profil (le visage regarde vers la gauche). Repère d’abord les parties de la bouche :</p><div class="tgref">${TG("ref","Coupe de la bouche : lèvres, dents, palais, luette, langue et gorge")}</div><ul class="tgl"><li><span class="k1"></span><div>rond en pointillé : l’air passe en <b>frottant</b> à cet endroit</div></li><li><span class="k2"></span><div>rond avec une croix : l’air est <b>bloqué</b>, puis relâché d’un coup</div></li><li><span class="k3"></span><div>flèche bleue : on <b>souffle</b></div></li><li><span class="k4"></span><div>zigzag orange : la gorge <b>vibre</b> (on met la voix)</div></li></ul><div class="tgs">`+
TF("ch","ch","ش","Le bout de la langue monte juste derrière les dents du haut. L’air frotte : « chhh ».","chems",9)+
TF("kh","kh","خ","L’arrière de la langue monte vers la luette. L’air frotte, sans la voix.","khobz",10)+
TF("gh","gh","غ","Même position que <b>kh</b>, mais la gorge vibre : on met la voix.","ghali",11)+
TF("q","q","ق","L’arrière de la langue touche la luette et bloque l’air, puis le lâche d’un coup.","qal",12)+
TF("h7","7","ح","La racine de la langue recule vers le fond de la gorge. On souffle fort, sans la voix.","7ajj",13)+
TF("a3","3","ع","Même position que <b>7</b>, mais la gorge vibre : on met la voix.","3ali",14)+`</div>`+R("<b>kh / gh</b> et <b>7 / 3</b> vont par deux : même position de la langue, la seule différence est la voix."))+
S(4,"La racine : le squelette du mot",`<p>Un mot arabe est construit sur 3 consonnes (la <b>racine</b>). Les voyelles changent le sens.</p>`+G(P("kteb","","il a écrit"),P("ktab","كتاب","livre"),P("kateb","","écrivain"))+R("racine <b>k-t-b</b> = l’idée d’écrire.")),
q:[Q("Le chiffre « 3 » représente :",["la lettre ع","la lettre ح","un vrai chiffre"],"3 = ع, son de gorge."),
Q("Le chiffre « 7 » représente :",["la lettre ح","la lettre ع","la lettre ق"],"7 = ح, un h soufflé fort."),
Q("« kh » se prononce comme :",["la jota espagnole","le ch de chat","le th anglais"],"kh (خ) ≈ jota. Exemple : khobz."),
Q("« gh » ressemble à :",["un r parisien","un k","un s"],"gh (غ) = r grasseyé."),
Q("« ch » se lit comme dans :",["chat","kiosque","chaos"],"ch (ش) = ch de chat."),
V("Le « r » est toujours roulé.",true,"Oui : r roulé, jamais le r français."),
V("Le « s » peut se prononcer comme un z.",false,"s est toujours un s sourd."),
Q("Le « g » est :",["toujours dur (gare)","doux (genou)","muet"],"g dur, comme dans gare."),
Q("La racine « k-t-b » donne l’idée de :",["écrire","manger","voyager"],"kteb, ktab, kateb : tout tourne autour de l’écriture."),
Q("« ktab » signifie :",["livre","il a écrit","écrivain"],"ktab = livre."),
Q("Comment dit-on « soleil » ?",["chems","dar","bab"],"chems = soleil (el-chems devient ech-chems).")]},

{id:"politesse",c:0,n:"Politesse et expressions typiques",e:"🙏",h:Z("remercier, s’excuser, souhaiter et réagir avec les formules qu’on entend tous les jours.")+
S(1,"Merci et de rien",G(P("saha","صحا","merci (familier)"),P("ya3tik es-sa7a","يعطيك الصحة","merci (que Dieu te donne la santé)"),P("baraka llahou fik","","merci (que Dieu te bénisse)"),P("bla mziya","بلا مزية","de rien"),P("3la walou","","de rien (pour rien)"),P("llah ykhallik","الله يخليك","s’il te plaît"))+R("<b>ya3tik es-sa7a</b> sert aussi à dire « bon courage » à quelqu’un qui travaille."))+
S(2,"S’excuser et rassurer",G(P("smah li","سمحلي","pardon, excuse-moi"),P("smahli bezzaf","","je suis vraiment désolé"),P("ma3lich","معليش","ce n’est pas grave"),P("ma kan walou","","il n’y a pas de mal"),P("mou machi mouchkil","","pas de problème"))+D(["Karim","smah li, kherjet 3lik el-qahwa !","Pardon, je t’ai renversé du café !"],["Sofia","ma3lich, ma kan walou.","Ce n’est pas grave, il n’y a pas de mal."]))+
S(3,"Accueillir et dire au revoir",G(P("mer7ba","مرحبا","bienvenue"),P("mer7ba bik","","sois le bienvenu"),P("tfaddal","تفضّل","je t’en prie, entre, sers-toi"),P("bslama","بالسلامة","au revoir"),P("tsba7 3la khir","","bonne nuit"),P("nchoufek men ba3d","","à plus tard"))+R("chez quelqu’un, on te dira souvent <b>tfaddal</b> en t’offrant un café ou une place. Tu peux répondre <b>ya3tik es-sa7a</b>."))+
S(4,"Les expressions avec Dieu",`<p>Ces formules sont utilisées par tout le monde, croyant ou non, comme des expressions de tous les jours.</p>`+G(P("in cha Allah","إن شاء الله","si Dieu le veut (pour le futur)"),P("ma cha Allah","ما شاء الله","pour admirer (sans envie)"),P("bismillah","بسم الله","au nom de Dieu (avant de commencer)"),P("rabbi m3ak","ربي معاك","bonne chance (Dieu avec toi)"),P("llah ysahel","الله يسهّل","que Dieu facilite"),P("llah yer7mou","الله يرحمو","paix à son âme")))+
S(5,"Fêtes et félicitations",G(P("mabrouk !","مبروك","félicitations !"),P("llah ybarek fik","","merci (réponse à mabrouk)"),P("3id mbarek","عيد مبارك","bonne fête (de l’Aïd)"),P("sa7a ramdankoum","","bon Ramadan"),P("3am sa3id","","bonne année"),P("3ouqbal lik !","","à toi le tour ! (pour un mariage, une réussite)")))+
R("à <b>mabrouk</b> (félicitations), on répond <b>llah ybarek fik</b>. Et à un célibataire, on ajoute souvent avec un sourire : <b>3ouqbal lik !</b>"),
q:[Q("« ya3tik es-sa7a » signifie :",["merci, bon courage","bon appétit","bonne nuit"],"Mot à mot : que Dieu te donne la santé."),
Q("« bla mziya » signifie :",["de rien","pardon","bienvenue"],"bla mziya = de rien."),
Q("« llah ykhallik » signifie :",["s’il te plaît","au revoir","félicitations"],"Mot à mot : que Dieu te garde."),
Q("« smah li » signifie :",["pardon, excuse-moi","merci","bonne chance"],"smah li = excuse-moi."),
Q("« ma3lich » signifie :",["ce n’est pas grave","je ne sais pas","je n’ai rien"],"ma3lich = pas grave."),
Q("« mer7ba » signifie :",["bienvenue","au revoir","merci"],"mer7ba = bienvenue."),
Q("On te dit « tfaddal » en t’offrant un café. Cela veut dire :",["je t’en prie, sers-toi","fais attention","dépêche-toi"],"tfaddal = je t’en prie."),
Q("« bslama » signifie :",["au revoir","bonjour","pardon"],"bslama = au revoir."),
Q("« in cha Allah » s’utilise pour :",["parler du futur","admirer quelque chose","s’excuser"],"Si Dieu le veut : ghedwa, in cha Allah."),
Q("Pour admirer un bébé sans envie, on dit :",["ma cha Allah","in cha Allah","llah yer7mou"],"ma cha Allah = admiration."),
Q("« rabbi m3ak » signifie :",["bonne chance","de rien","bonne nuit"],"Dieu avec toi = bonne chance."),
Q("On répond à « mabrouk » par :",["llah ybarek fik","bla mziya","ma3lich"],"llah ybarek fik = merci."),
Q("« 3id mbarek » se dit :",["pour la fête de l’Aïd","pour un anniversaire de mariage","pour dire au revoir"],"3id = fête."),
O("Remets en ordre : « Ce n’est pas grave, il n’y a pas de mal »",["ma3lich,","ma kan","walou"],"ma3lich + ma kan walou."),
Q("Comment dit-on « félicitations » ?",["mabrouk","bslama","mer7ba"],"mabrouk = félicitations."),
V("« tsba7 3la khir » veut dire « bonne nuit ».",true,"Mot à mot : réveille-toi dans le bien.")]},

{id:"pronoms",c:0,n:"Moi, toi, lui : « je suis… »",e:"🙋",h:Z("utiliser les pronoms et dire où l’on est ou comment on va.")+
S(1,"Les pronoms",G(P("ana","أنا","je, moi"),P("nta","نتا","tu (homme)"),P("nti","نتي","tu (femme)"),P("houwa","هو","il"),P("hiya","هي","elle"),P("hna","حنا","nous"),P("ntouma","نتوما","vous"),P("houma","هوما","ils, elles")))+
S(2,"« Je suis… » avec ra-",`<p>Pour dire où l’on est ou comment on va, on utilise <b>ra-</b> + la terminaison de la personne.</p>`+G(P("rani","راني","je suis"),P("rak","راك","tu es (m)"),P("raki","راكي","tu es (f)"),P("rah","راه","il est"),P("raha","راها","elle est"),P("rana","رانا","nous sommes"),P("rakoum","راكم","vous êtes"),P("rahoum","راهم","ils sont"))+
D(["","rani fi ed-dar","Je suis à la maison"],["","rah fi el-madrasa","Il est à l’école"])+R("<i>wach rak ?</i> veut dire mot à mot « comment tu es ? ». C’est le même rak !"))+
S(3,"Parfois, pas de verbe du tout",`<p>Pour décrire, on met souvent le pronom puis l’adjectif, sans verbe, et <b>sans article</b> :</p>`+G(P("ana sghir","","je suis petit"),P("hiya jmila","","elle est belle"),P("nta kbir","","tu es grand"),P("rani mrid","","je suis malade"))+R("le féminin s’obtient en ajoutant <b>-a</b> : sghir → sghira.")),
q:[Q("« ana » signifie :",["je, moi","tu","il"],"ana = je."),
Q("« nti » s’adresse à :",["une femme","un homme","un groupe"],"nta = homme, nti = femme."),
Q("« houwa » signifie :",["il","elle","nous"],"houwa = il, hiya = elle."),
Q("« hna » signifie :",["nous","vous","ils"],"hna = nous."),
Q("« rani » signifie :",["je suis","tu es","il est"],"rani = je suis."),
Q("« rak » signifie :",["tu es (homme)","il est","nous sommes"],"rak = tu es (à un homme)."),
Q("« rah » signifie :",["il est","elle est","je suis"],"rah = il est, raha = elle est."),
Q("« rana » signifie :",["nous sommes","vous êtes","ils sont"],"rana = nous sommes."),
V("On dit « raki » à un homme.",false,"raki = tu es, à une femme."),
O("Remets en ordre : « Il est à la maison »",["rah","fi","ed-dar"],"rah (il est) + fi (dans) + ed-dar (la maison).","Sujet-verbe d’abord."),
Q("« hiya jmila » signifie :",["elle est belle","il est beau","je suis belle"],"hiya = elle, jmila = belle (féminin)."),
Q("Comment dit-on « je » ?",["ana","nta","houwa"],"ana = je, moi.")]},

{id:"questions",c:0,n:"Poser des questions",e:"❓",h:Z("comprendre et utiliser les mots pour demander qui, où, comment, pourquoi…")+
S(1,"Les mots interrogatifs",`<p>On les place presque toujours <b>au début</b> de la phrase. Ils ne changent jamais.</p>`+G(P("wach","واش","quoi ? est-ce que"),P("shkoun","شكون","qui ?"),P("wayn","وين","où ?"),P("kifach","كيفاش","comment ?"),P("waqtach","وقتاش","quand ?"),P("3lach","علاش","pourquoi ?"),P("gadach","قداش","combien ?"),P("3and men","","chez qui ?"),P("m3a men","","avec qui ?")))+
S(2,"Exemples",G(P("wayn rah ?","","où est-il ?"),P("shkoun hada ?","","qui est-ce ?"),P("wach hada ?","","qu’est-ce que c’est ?"),P("wach rak ?","","comment vas-tu ?")))+
S(3,"Dialogue au village",D(["Karim","shkoun hada es-sayyed ?","Qui est ce monsieur ?"],["Sofia","hada fellah, saken fi ed-douar m3ana.","C’est un cultivateur, il habite dans le douar avec nous."])+R("<b>sayyed</b> = monsieur, <b>fellah</b> = cultivateur, <b>saken</b> = habitant, <b>douar</b> = groupe de tentes ou de maisons.")),
q:[Q("« wayn » signifie :",["où","quand","pourquoi"],"wayn = où ?"),
Q("« shkoun » signifie :",["qui","quoi","combien"],"shkoun = qui ?"),
Q("« kifach » signifie :",["comment","combien","où"],"kifach = comment ?"),
Q("« 3lach » signifie :",["pourquoi","avec qui","chez qui"],"3lach = pourquoi ?"),
Q("« waqtach » signifie :",["quand","où","comment"],"waqtach = quand ?"),
Q("« gadach » signifie :",["combien","pourquoi","quand"],"gadach = combien ?"),
Q("« 3and men ? » signifie :",["chez qui ?","avec qui ?","d’où ?"],"3and = chez, men = qui."),
V("En darija, le mot interrogatif se place souvent au début de la phrase.",true,"Exemple : wayn rah ?"),
O("Remets en ordre : « Où est-il ? »",["wayn","rah"],"wayn (où) + rah (il est)."),
O("Remets en ordre : « Qui est-ce ? »",["shkoun","hada"],"shkoun (qui) + hada (celui-ci)."),
Q("Comment dit-on « pourquoi » ?",["3lach","kifach","wayn"],"3lach = pourquoi ?"),
Q("« fellah » signifie :",["cultivateur","monsieur","maison"],"fellah = cultivateur.")]},

{id:"article",c:0,n:"Le, ce, cette",e:"🏠",h:Z("dire « le livre », « la grande maison », « ce garçon-ci ».")+
S(1,"Les mots de base",G(P("ktab","كتاب","livre"),P("weld","ولد","garçon"),P("bent","بنت","fille"),P("dar","دار","maison"),P("madrasa","مدرسة","école"),P("rajel","","homme"),P("kbir / kbira","كبير","grand / grande"),P("sghir / sghira","صغير","petit / petite")))+
S(2,"« Le », « la », « les » = el-",`<p>Un seul article pour tout : <b>el</b> (masculin, féminin, singulier, pluriel). L’adjectif vient <b>après</b> le nom et prend aussi l’article.</p>`+G(P("el-ktab","","le livre"),P("el-ktab el-kbir","","le grand livre"),P("el-bent el-kbira","","la grande fille")))+
S(3,"Quand « el » change de forme",`<p>Devant certaines consonnes (d, l, n, r, s, t, ch, z…), le <b>l</b> prend le son de la lettre suivante. On le prononce, il n’y a rien à retenir par cœur : <b>écoute-toi !</b></p>`+G(P("el-dar → ed-dar","","la maison"),P("el-chems → ech-chems","","le soleil"),P("el-trig → et-trig","","la route"),P("el-rajel → er-rajel","","l’homme")))+
S(4,"Ce… -ci et ce… -là",`<table><tr><th></th><th>Près (-ci)</th><th>Loin (-là)</th></tr><tr><td>masculin</td><td>hada</td><td>hadak</td></tr><tr><td>féminin</td><td>hadi</td><td>hadik</td></tr><tr><td>pluriel</td><td>hadou</td><td>haduk</td></tr></table>`+G(P("hada weld","","celui-ci est un garçon"),P("hadik bent","","celle-là est une fille"),P("had el-bent","","cette fille-ci"))+R("avec un nom précédé de « el », on dit <b>had el-…</b> (le « a » final tombe).")),
q:[Q("« el-ktab » se traduit :",["le livre","un livre","ce livre"],"el = le, la, les."),
V("L’article « el » ne s’utilise que pour le masculin.",false,"Un seul article pour tous les genres et nombres."),
O("Remets en ordre : « le grand livre »",["el-ktab","el-kbir"],"Nom puis adjectif, tous deux avec el-."),
O("Remets en ordre : « la grande fille »",["el-bent","el-kbira"],"Au féminin, kbir devient kbira."),
Q("« el-dar » (la maison) se prononce :",["ed-dar","el-dar","en-dar"],"Le l s’assimile au d."),
Q("« el-chems » se prononce :",["ech-chems","el-chems","es-chems"],"Le l s’assimile au ch."),
Q("« hadi » signifie :",["celle-ci","celui-ci","celle-là"],"hadi = féminin, proche."),
Q("« hadak » signifie :",["celui-là","celui-ci","ceux-ci"],"Le k indique l’éloignement."),
Q("« hadou » signifie :",["ceux-ci, celles-ci","celui-là","celle-ci"],"hadou = pluriel proche."),
Q("Complète : « cette fille-ci » = had el-… ?",["bent","weld","dar"],"had el-bent."),
Q("Comment dit-on « maison » ?",["dar","bab","madrasa"],"dar = maison."),
Q("« sghir » signifie :",["petit","grand","joli"],"sghir = petit, kbir = grand.")]},

{id:"neg",c:1,n:"Dire non et compter",e:"🔢",h:Z("nier une phrase et compter de 1 à 10 (niveau intermédiaire).")+
S(1,"La négation : ma … -ch",`<p>Pour dire non, on entoure le mot : <b>ma</b> devant et <b>-ch</b> derrière.</p>`+G(P("rani","","je suis"),P("ma rani-ch","","je ne suis pas"),P("rak","","tu es"),P("ma rak-ch","","tu n’es pas"),P("3andi","","j’ai"),P("ma 3andi-ch","","je n’ai pas"))+D(["","wach rak mrid ?","Tu es malade ?"],["","lala, ma rani-ch mrid.","Non, je ne suis pas malade."])+R("ma + mot + <b>ch</b>. Le « ch » se colle à la fin du mot."))+
S(2,"Les nombres de 1 à 10",G(P("wahed","واحد","1"),P("zouj","زوج","2"),P("tlata","تلاتة","3"),P("arba3a","أربعة","4"),P("khamsa","خمسة","5"),P("setta","ستة","6"),P("seb3a","سبعة","7"),P("tmenya","تمنية","8"),P("tes3a","تسعة","9"),P("3achra","عشرة","10"))+R("pour 2, on dit <b>zouj</b>, pas « tnin ».")),
q:[Q("« ma rani-ch » signifie :",["je ne suis pas","je suis","tu n’es pas"],"ma + rani + ch = je ne suis pas."),
Q("« ma rak-ch » signifie :",["tu n’es pas","il n’est pas","je ne suis pas"],"rak = tu es, ma rak-ch = tu n’es pas."),
V("Pour nier, on place ma avant le mot et -ch après.",true,"C’est la négation ma … -ch."),
Q("« ma 3andi-ch » signifie :",["je n’ai pas","j’ai","tu n’as pas"],"3andi = j’ai (chez moi)."),
O("Remets en ordre : « Je ne suis pas malade »",["ma","rani-ch","mrid"],"ma + rani-ch + mrid."),
Q("« zouj » signifie :",["2","1","4"],"zouj = 2."),
Q("« tlata » signifie :",["3","6","8"],"tlata = 3."),
Q("« khamsa » signifie :",["5","4","9"],"khamsa = 5."),
Q("« tmenya » signifie :",["8","2","7"],"tmenya = 8."),
Q("Comment dit-on « 1 » ?",["wahed","zouj","setta"],"wahed = 1."),
Q("Comment dit-on « dix » ?",["3achra","tes3a","tmenya"],"3achra = 10."),
Q("Comment dit-on « sept » ?",["seb3a","setta","tes3a"],"seb3a = 7.")]},

{id:"nombres",c:1,n:"Nombres et prix",e:"💰",h:Z("compter jusqu’à 1000 et demander ou dire un prix (niveau intermédiaire).")+
S(1,"De 0 à 10 (révision)",G(P("sifr","","0"),P("wahed","واحد","1"),P("zouj","زوج","2"),P("tlata","تلاتة","3"),P("arba3a","أربعة","4"),P("khamsa","خمسة","5"),P("setta","ستة","6"),P("seb3a","سبعة","7"),P("tmenya","تمنية","8"),P("tes3a","تسعة","9"),P("3achra","عشرة","10")))+
S(2,"De 11 à 19 : la terminaison -ach",`<p>On prend le chiffre et on ajoute <b>-ach</b> (qui veut dire « dix »). Seuls 11 et 12 sont à apprendre à part.</p>`+G(P("hdach","","11"),P("tnach","","12"),P("tltach","","13"),P("rb3tach","","14"),P("khmestach","","15"),P("settach","","16"),P("sb3tach","","17"),P("tmentach","","18"),P("ts3tach","","19"))+R("à partir de 13, repère le chiffre au début du mot : <b>rb3</b>tach = 4 + 10, <b>sb3</b>tach = 7 + 10."))+
S(3,"Les dizaines : -in",`<p>Même idée : le chiffre + la terminaison <b>-in</b>.</p>`+G(P("3chrin","","20"),P("tlatin","","30"),P("rb3in","","40"),P("khamsin","","50"),P("settin","","60"),P("sb3in","","70"),P("tmanin","","80"),P("ts3in","","90")))+
S(4,"Les nombres composés, les centaines et les milliers",`<p>Pour 21, 22… on dit <b>l’unité + w (et) + la dizaine</b>, comme en français « un et vingt ».</p>`+G(P("wahed w 3chrin","","21"),P("tlata w tlatin","","33"),P("khamsa w khamsin","","55"))+G(P("miya","مية","100"),P("miyatin","","200"),P("tlat miya","","300"),P("tmen miya","","800"),P("alf","ألف","1000"),P("alfin","الفين","2000"),P("tlat alaf","","3000"),P("khams alaf","","5000")))+
S(5,"Les prix",G(P("dinar","","dinar (DA)"),P("santim","","centime"),P("gadach ?","","combien ?"),P("ghali","","cher"),P("rkhis","","pas cher"))+D(["Client","gadach had el-ktab ?","Combien coûte ce livre ?"],["Vendeur","miya w khamsin dinar.","Cent cinquante dinars."],["Client","ghali !","C’est cher !"])+R("dans la vie courante, on parle souvent en <b>santim</b> (centimes) : 100 DA se dit alors « 3chr alaf » (10 000 centimes). Si on te donne un prix qui te semble énorme, pense aux centimes !")),
q:[Q("« hdach » signifie :",["11","10","12"],"hdach = 11, tnach = 12."),
Q("« tnach » signifie :",["12","11","20"],"tnach = 12."),
Q("« khmestach » signifie :",["15","5","50"],"khmes (5) + tach (10) = 15."),
Q("« sb3tach » signifie :",["17","7","70"],"sb3 (7) + tach = 17."),
Q("« 3chrin » signifie :",["20","30","10"],"3chrin = 20."),
Q("« khamsin » signifie :",["50","15","5"],"khamsin = 50, khmestach = 15."),
Q("Comment dit-on « 40 » ?",["rb3in","arba3a","tlatin"],"rb3in = 40."),
Q("« khamsa w khamsin » signifie :",["55","15","50"],"khamsa (5) w (et) khamsin (50) = 55."),
Q("« miya » signifie :",["100","1000","10"],"miya (مية) = 100."),
Q("« alfin » signifie :",["2000","200","1002"],"alf = 1000, alfin = 2000."),
Q("Comment dit-on « cent » ?",["miya","alf","3chrin"],"miya = 100."),
Q("Comment dit-on « trente » ?",["tlatin","tlata","tltach"],"tlatin = 30."),
Q("« gadach hada ? » signifie :",["combien ça coûte ?","qui est-ce ?","où est-ce ?"],"gadach = combien."),
Q("« rkhis » signifie :",["pas cher","cher","gratuit"],"rkhis = bon marché, ghali = cher."),
O("Remets en ordre : « Combien coûte ce livre ? »",["gadach","had","el-ktab"],"gadach (combien) + had el-ktab (ce livre)."),
V("Dans la vie courante, on donne souvent les prix en centimes (santim).",true,"Oui : 100 DA se dit parfois « 3chr alaf ».")]},

{id:"heure",c:1,n:"L’heure, les jours et le temps",e:"🕐",h:Z("demander et dire l’heure, connaître les jours et les moments de la journée.")+
S(1,"Demander l’heure",G(P("ch7al fi es-sa3a ?","شحال في الساعة؟","quelle heure est-il ?"),P("es-sa3a","الساعة","l’heure, la montre"),P("es-sa3a wa7da","","il est une heure"),P("es-sa3a zouj","","il est deux heures"),P("es-sa3a tlata","","il est trois heures"))+R("<b>ch7al</b> = combien, comme <b>gadach</b>. Les deux s’utilisent selon les régions."))+
S(2,"Et quart, et demie…",G(P("w roub3","","et quart"),P("w nos","","et demie"),P("ghir roub3","","moins le quart"),P("w qsem","","et cinq (minutes)"),P("w 3achra","","et dix"),P("w tolt","","et vingt"))+G(P("es-sa3a tlata w nos","","il est 3 h 30"),P("es-sa3a setta ghir roub3","","il est 5 h 45 (6 h moins le quart)"))+R("<b>roub3</b> = un quart, <b>nos</b> = une moitié, <b>tolt</b> = un tiers (20 minutes)."))+
S(3,"Les jours de la semaine",G(P("el-7ed","الحد","dimanche"),P("et-tnin","التنين","lundi"),P("et-tlata","التلاتا","mardi"),P("el-arb3a","الأربعا","mercredi"),P("el-khmis","الخميس","jeudi"),P("ej-jem3a","الجمعة","vendredi"),P("es-sebt","السبت","samedi"))+R("les jours viennent des nombres : <b>tnin</b> (2e jour), <b>tlata</b> (3e), <b>arb3a</b> (4e)… En Algérie, le week-end est le <b>vendredi</b> et le <b>samedi</b>."))+
S(4,"Les moments de la journée",G(P("es-sba7","الصباح","le matin"),P("ed-dhor","الظهر","midi"),P("el-3achiya","العشية","l’après-midi, la fin de journée"),P("el-lil","الليل","la nuit"),P("en-nhar","النهار","le jour, la journée"),P("sba7 el-khir","صباح الخير","bonjour (le matin)"),P("msa el-khir","مسا الخير","bonsoir")))+
S(5,"Hier, aujourd’hui, demain",G(P("el-bare7","البارح","hier"),P("el-youm","اليوم","aujourd’hui"),P("ghedwa","غدوة","demain"),P("ba3d ghedwa","","après-demain"),P("drok","دركا","maintenant"),P("men ba3d","","après, plus tard"),P("dima","ديما","toujours"),P("simana / chhar / 3am","","semaine / mois / année")))+
S(6,"Dialogue",D(["Sofia","smah li, ch7al fi es-sa3a ?","Excuse-moi, quelle heure est-il ?"],["Karim","es-sa3a 3achra w nos.","Il est dix heures et demie."],["Sofia","ya latif ! 3andi rendez-vous drok !","Oh là là ! J’ai un rendez-vous maintenant !"],["Karim","ma3lich, ro7 ghir b-chwiya.","Pas grave, vas-y doucement."])),
q:[Q("« ch7al fi es-sa3a ? » signifie :",["quelle heure est-il ?","combien ça coûte ?","quel jour sommes-nous ?"],"es-sa3a = l’heure."),
Q("« es-sa3a tlata » signifie :",["il est 3 h","il est 13 h","il reste 3 heures"],"tlata = 3."),
Q("« w nos » signifie :",["et demie","et quart","moins le quart"],"nos = moitié."),
Q("« w roub3 » signifie :",["et quart","et demie","et dix"],"roub3 = un quart."),
Q("« ghir roub3 » signifie :",["moins le quart","et quart","et demie"],"ghir = sauf, moins."),
Q("« el-7ed » signifie :",["dimanche","lundi","samedi"],"el-7ed = dimanche (1er jour)."),
Q("« ej-jem3a » signifie :",["vendredi","jeudi","mercredi"],"ej-jem3a = vendredi."),
Q("« el-khmis » signifie :",["jeudi","mardi","dimanche"],"el-khmis = jeudi (5e jour)."),
V("En Algérie, le week-end tombe le vendredi et le samedi.",true,"Le dimanche est un jour de travail."),
Q("« ghedwa » signifie :",["demain","hier","aujourd’hui"],"ghedwa = demain, el-bare7 = hier."),
Q("« el-youm » signifie :",["aujourd’hui","toujours","la nuit"],"el-youm = aujourd’hui."),
Q("« es-sba7 » signifie :",["le matin","le soir","midi"],"es-sba7 = le matin."),
Q("« drok » signifie :",["maintenant","après","demain"],"drok = maintenant."),
O("Remets en ordre : « Il est 3 h 30 »",["es-sa3a","tlata","w nos"],"es-sa3a + l’heure + w nos."),
Q("Comment dit-on « lundi » ?",["et-tnin","et-tlata","el-arb3a"],"et-tnin = lundi."),
Q("Comment dit-on « la nuit » ?",["el-lil","en-nhar","es-sba7"],"el-lil = la nuit.")]},

{id:"conj",c:1,n:"La conjugaison",e:"🔄",h:Z("conjuguer un verbe au passé, au présent, et dire « j’ai » (niveau intermédiaire).")+
S(1,"Le verbe modèle : kteb « écrire »",`<p>Le verbe est donné à la forme « il » du passé : <b>kteb</b> = il a écrit. Les autres personnes se forment en ajoutant des lettres au début ou à la fin. Nous prenons <b>kteb</b> comme modèle.</p>`)+
S(2,"Le passé (ce qui est fini) : on ajoute à la fin",`<table><tr><th>Personne</th><th>Forme</th><th>Sens</th></tr><tr><td>moi, toi (m)</td><td>ktebt</td><td>j’ai / tu as écrit</td></tr><tr><td>toi (f)</td><td>ktebti</td><td>tu as écrit</td></tr><tr><td>il</td><td>kteb</td><td>il a écrit</td></tr><tr><td>elle</td><td>ketbet</td><td>elle a écrit</td></tr><tr><td>nous</td><td>ktebna</td><td>nous avons écrit</td></tr><tr><td>vous</td><td>ktebtou</td><td>vous avez écrit</td></tr><tr><td>ils, elles</td><td>ketbou</td><td>ils ont écrit</td></tr></table>`+R("à la première et à la deuxième personne (masculin), la forme est la même : <b>ktebt</b>. Le contexte (ou le pronom ana / nta) fait la différence."))+
S(3,"Le présent : on ajoute au début",`<p>Une lettre au début indique qui fait l’action : <b>n-</b> (je), <b>t-</b> (tu, elle), <b>y-</b> (il). Au pluriel et au féminin du tu, on ajoute aussi une fin (<b>-ou</b> ou <b>-i</b>) et le <i>e</i> du milieu tombe.</p><table><tr><th>Personne</th><th>Forme</th><th>Sens</th></tr><tr><td>je</td><td>nekteb</td><td>j’écris</td></tr><tr><td>tu (m)</td><td>tekteb</td><td>tu écris</td></tr><tr><td>tu (f)</td><td>tektbi</td><td>tu écris</td></tr><tr><td>il</td><td>yekteb</td><td>il écrit</td></tr><tr><td>elle</td><td>tekteb</td><td>elle écrit</td></tr><tr><td>nous</td><td>nektbou</td><td>nous écrivons</td></tr><tr><td>vous</td><td>tektbou</td><td>vous écrivez</td></tr><tr><td>ils, elles</td><td>yektbou</td><td>ils écrivent</td></tr></table>`+R("la prononciation de ces formes varie selon les régions (on entend aussi <i>nekettbou</i>). Garde le modèle ci-dessus."))+
S(4,"En train de, futur et négation",G(P("rani nekteb","","je suis en train d’écrire"),P("rayeh nekteb","","je vais écrire"),P("ma nekteb-ch","","je n’écris pas"),P("ma ktebt-ch","","je n’ai pas écrit"))+R("<b>rani</b> (leçon 4) + le présent donne l’action en cours. La négation <b>ma … -ch</b> (leçon 7) s’utilise avec tous les verbes."))+
S(5,"« Avoir » : 3and + la terminaison",`<p>Pour dire « avoir », on utilise <b>3and</b> (chez) avec la terminaison de la personne :</p>`+G(P("3andi","","j’ai"),P("3andek","","tu as"),P("3andou","","il a"),P("3andha","","elle a"),P("3andna","","nous avons"),P("3andkoum","","vous avez"),P("3andhoum","","ils ont"))+D(["","3andek ktab ?","Tu as un livre ?"],["","ih, 3andi ktab.","Oui, j’ai un livre."])),
q:[Q("« kteb » signifie :",["il a écrit","j’écris","livre"],"kteb = il a écrit (forme modèle)."),
Q("« ketbet » signifie :",["elle a écrit","il a écrit","nous avons écrit"],"ketbet = elle a écrit."),
Q("« ktebna » signifie :",["nous avons écrit","ils ont écrit","j’ai écrit"],"-na marque « nous »."),
Q("« ketbou » signifie :",["ils ont écrit","vous avez écrit","il a écrit"],"ketbou = ils ont écrit."),
Q("« ktebti » s’adresse à :",["une femme","un homme","un groupe"],"-ti = tu (féminin)."),
Q("« nekteb » signifie :",["j’écris","il écrit","nous écrivons"],"n- = je."),
Q("« yekteb » signifie :",["il écrit","tu écris","j’écris"],"y- = il."),
Q("« nektbou » signifie :",["nous écrivons","j’écris","ils écrivent"],"n- … -ou = nous."),
Q("« yektbou » signifie :",["ils écrivent","il écrit","nous écrivons"],"y- … -ou = ils."),
Q("« tektbi » s’adresse à :",["une femme","un homme","ils"],"-i = tu (féminin)."),
V("À l’écrit comme à l’oral, « ktebt » peut vouloir dire « j’ai écrit » ou « tu as écrit ».",true,"La forme est identique, le contexte précise."),
O("Remets en ordre : « Je suis en train d’écrire »",["rani","nekteb"],"rani + le présent nekteb."),
O("Remets en ordre : « Je n’écris pas »",["ma","nekteb-ch"],"ma + nekteb + ch."),
Q("« 3andi » signifie :",["j’ai","tu as","il a"],"3andi = j’ai (chez moi)."),
Q("« 3andha » signifie :",["elle a","il a","nous avons"],"-ha = elle."),
Q("Comment dit-on « il a » ?",["3andou","3andha","3andi"],"3andou = il a.")]},

{id:"famille",c:2,n:"La famille",e:"👨‍👩‍👧",h:Z("présenter sa famille, dire « mon, ton, son » et parler de ses frères et sœurs.")+
S(1,"Les membres de la famille",G(P("el-3ayla","العايلة","la famille"),P("yemma","يمّا","maman, ma mère"),P("baba","بابا","papa, mon père"),P("khouya","خويا","mon frère"),P("khti","ختي","ma sœur"),P("jeddi","جدّي","mon grand-père"),P("jeddati / mani","","ma grand-mère"),P("weldi","ولدي","mon fils"),P("benti","بنتي","ma fille"),P("wlad","ولاد","les enfants")))+
S(2,"Oncles, tantes et cousins",`<p>En darija, on distingue le côté du <b>père</b> et le côté de la <b>mère</b> :</p><table><tr><th></th><th>Côté du père</th><th>Côté de la mère</th></tr><tr><td>oncle</td><td>3ammi</td><td>khali</td></tr><tr><td>tante</td><td>3ammti</td><td>khalti</td></tr><tr><td>cousin</td><td>weld 3ammi</td><td>weld khali</td></tr><tr><td>cousine</td><td>bent 3ammi</td><td>bent khalti</td></tr></table>`+R("<b>weld 3ammi</b> = mot à mot « le fils de mon oncle ». On dit aussi <b>3ammi</b> par respect à un monsieur âgé, et <b>khalti</b> à une dame âgée."))+
S(3,"Mon, ton, son : la terminaison",`<p>Comme pour <b>3andi</b> (leçon 10), on colle une terminaison à la fin du nom :</p>`+G(P("ktabi","","mon livre"),P("ktabek","","ton livre"),P("ktabou","","son livre (à lui)"),P("ktabha","","son livre (à elle)"),P("ktabna","","notre livre"),P("ktabkoum","","votre livre"),P("ktabhoum","","leur livre"))+R("si le nom finit par <b>-a</b>, on ajoute un <b>t</b> : khala (tante) → khal<b>ti</b> (ma tante), madrasa → madras<b>ti</b> (mon école)."))+
S(4,"Mari, femme et situation",G(P("rajli","","mon mari"),P("mrati","","ma femme"),P("mzawej / mzawja","","marié / mariée"),P("3azri / 3azba","","célibataire (h / f)"),P("khawa","خاوة","frères et sœurs"),P("khawatat","","sœurs")))+
S(5,"Se présenter",G(P("wach smitek ?","","comment tu t’appelles ?"),P("smiti…","","je m’appelle…"),P("gadach 3andek men khawa ?","","combien de frères et sœurs as-tu ?"),P("3andi zouj khawa","","j’ai deux frères et sœurs"))+D(["Sofia","wach smitek ?","Comment tu t’appelles ?"],["Yacine","smiti Yacine. W nti ?","Je m’appelle Yacine. Et toi ?"],["Sofia","smiti Sofia. Gadach 3andek men khawa ?","Je m’appelle Sofia. Combien as-tu de frères et sœurs ?"],["Yacine","3andi khouya wa7ed w zouj khawatat.","J’ai un frère et deux sœurs."],["Sofia","rabbi y7afedhoum !","Que Dieu les protège !"]))+
R("<b>khawa</b> veut aussi dire « mes frères » au sens large : entre amis, on s’appelle souvent <b>khouya</b> (mon frère) !"),
q:[Q("« yemma » signifie :",["maman","mamie","ma sœur"],"yemma = maman, ma mère."),
Q("« khouya » signifie :",["mon frère","mon oncle","mon fils"],"khouya = mon frère."),
Q("« khti » signifie :",["ma sœur","ma tante","ma fille"],"khti = ma sœur."),
Q("« 3ammi » est :",["l’oncle du côté du père","l’oncle du côté de la mère","le grand-père"],"3ammi = oncle paternel, khali = oncle maternel."),
Q("La sœur de ta mère, c’est :",["khalti","3ammti","khti"],"khalti = tante maternelle."),
Q("« weld 3ammi » signifie :",["mon cousin","mon oncle","mon neveu"],"Mot à mot : le fils de mon oncle."),
Q("« benti » signifie :",["ma fille","ma sœur","mon fils"],"bent = fille, benti = ma fille."),
Q("« ktabha » signifie :",["son livre (à elle)","son livre (à lui)","leur livre"],"-ha = elle."),
Q("« ktabna » signifie :",["notre livre","mon livre","votre livre"],"-na = nous."),
V("« khalti » se forme avec khala + t + i.",true,"Après un -a final, on ajoute un t avant la terminaison."),
Q("« wach smitek ? » signifie :",["comment tu t’appelles ?","comment vas-tu ?","d’où viens-tu ?"],"smiya = le nom, smitek = ton nom."),
Q("Complète : « je m’appelle Sofia » = … Sofia",["smiti","smitek","smitou"],"smiti = je m’appelle (mon nom)."),
Q("Comment dit-on « papa » ?",["baba","yemma","khouya"],"baba = papa."),
O("Remets en ordre : « J’ai deux frères et sœurs »",["3andi","zouj","khawa"],"3andi (j’ai) + zouj (2) + khawa."),
V("Entre amis, on peut s’appeler « khouya ».",true,"khouya = mon frère, au sens propre comme au sens figuré."),
Q("« mzawja » signifie :",["mariée","célibataire","fiancée"],"mzawej (h) / mzawja (f) = marié(e).")]},

{id:"emotions",c:2,n:"Les émotions et l’état",e:"😊",h:Z("dire comment on se sent, demander « qu’est-ce que tu as ? » et parler de ce qu’on aime.")+
S(1,"Comment je me sens",G(P("fer7an / fer7ana","فرحان","content / contente"),P("7zin / 7zina","حزين","triste"),P("3iyyan / 3iyyana","عيّان","fatigué / fatiguée"),P("za3fan / za3fana","زعفان","fâché / fâchée"),P("khayef / khayfa","خايف","qui a peur"),P("mqelleq / mqellqa","","énervé, agacé"))+R("avec <b>rani</b> (leçon 4) : <i>rani fer7an</i> = je suis content, <i>raha 3iyyana</i> = elle est fatiguée."))+
S(2,"Faim, soif, sommeil",G(P("ji3an / ji3ana","جيعان","qui a faim"),P("3atchan / 3atchana","عطشان","qui a soif"),P("fiya en-n3as","","j’ai sommeil"),P("bared / bardana","","qui a froid"),P("mrid / mrida","","malade"),P("rani mli7","","je vais bien"))+R("la plupart de ces mots finissent par <b>-an</b> au masculin et <b>-ana</b> au féminin."))+
S(3,"Qu’est-ce que tu as ?",G(P("wach bik ?","واش بيك؟","qu’est-ce que tu as ? (m)"),P("wach biki ?","","qu’est-ce que tu as ? (f)"),P("ma biya walou","","je n’ai rien"),P("walou","والو","rien"),P("ma 3labalich","ما علاباليش","je ne sais pas"))+D(["Yacine","wach bik ? rak 7zin ?","Qu’est-ce que tu as ? Tu es triste ?"],["Karim","lala, ma biya walou. Rani 3iyyan bark.","Non, je n’ai rien. Je suis juste fatigué."],["Yacine","ro7 terqod chwiya !","Va dormir un peu !"]))+
S(4,"Aimer et vouloir : n7ebb",`<p><b>n7ebb</b> veut dire à la fois « j’aime » et « je veux ». Il se conjugue comme <b>nekteb</b> (leçon 10).</p>`+G(P("n7ebb","نحبّ","j’aime, je veux"),P("t7ebb","","tu aimes"),P("y7ebb","","il aime"),P("ma n7ebb-ch","","je n’aime pas, je ne veux pas"),P("n7ebbek","","je t’aime"),P("3ajbni","عجبني","ça me plaît"))+R("<b>wach t7ebb ?</b> = qu’est-ce que tu veux ? C’est une question qu’on entend partout, au café comme à la maison."))+
S(5,"Petites réactions",G(P("ya latif !","","oh mon Dieu ! (surprise)"),P("ya 7asra !","","quel dommage !"),P("zahfa !","","quelle chance !"),P("sa7it !","","bien joué !"),P("yaw !","","allez ! (pour encourager ou s’impatienter)"))),
q:[Q("« fer7an » signifie :",["content","triste","fâché"],"fer7an = content."),
Q("« 7zin » signifie :",["triste","content","malade"],"7zin = triste."),
Q("« 3iyyan » signifie :",["fatigué","affamé","inquiet"],"3iyyan = fatigué."),
Q("« za3fan » signifie :",["fâché","fatigué","content"],"za3fan = fâché."),
Q("« ji3an » signifie :",["qui a faim","qui a soif","qui a peur"],"ji3an = qui a faim."),
Q("« 3atchan » signifie :",["qui a soif","qui a faim","qui a froid"],"3atchan = qui a soif."),
Q("Le féminin de « fer7an » est :",["fer7ana","fer7ania","fer7ani"],"-an devient -ana."),
Q("« wach bik ? » signifie :",["qu’est-ce que tu as ?","où es-tu ?","comment tu t’appelles ?"],"wach bik ? = qu’est-ce qui ne va pas ?"),
Q("« walou » signifie :",["rien","tout","quelqu’un"],"walou = rien."),
Q("« ma 3labalich » signifie :",["je ne sais pas","je ne veux pas","je n’ai pas"],"Une expression très algérienne !"),
Q("« n7ebb » signifie :",["j’aime, je veux","j’ai","je mange"],"n7ebb = j’aime ou je veux."),
O("Remets en ordre : « Je suis fatigué »",["rani","3iyyan"],"rani (je suis) + 3iyyan."),
O("Remets en ordre : « Je n’aime pas »",["ma","n7ebb-ch"],"La négation ma … -ch."),
V("« wach biki ? » s’adresse à une femme.",true,"bik (m) / biki (f)."),
Q("Comment dit-on « rien » ?",["walou","bezzaf","chwiya"],"walou = rien."),
Q("Comment dit-on « je t’aime » ?",["n7ebbek","ma n7ebb-ch","t7ebb"],"n7ebbek = je t’aime.")]},

{id:"corps",c:2,n:"Le corps humain",e:"🧍",h:Z("nommer les parties du corps grâce au schéma, et dire où tu as mal.")+
S(1,"Le schéma : touche un mot",bodySVG()+`<div id="bdi" class="tip" aria-live="polite">👆 Touche un mot du schéma pour voir sa traduction.</div>`)+
S(2,"La tête et le visage",G(P("ras","راس","la tête"),P("cha3r","شعر","les cheveux"),P("wejh","وجه","le visage"),P("3in","عين","l’œil"),P("wedn","ودن","l’oreille"),P("nef","نف","le nez"),P("fem","فم","la bouche"),P("snan","سنان","les dents"),P("lsan","لسان","la langue")))+
S(3,"Le reste du corps",G(P("raqba","رقبة","le cou"),P("ktef","كتف","l’épaule"),P("dra3","ذراع","le bras"),P("yed","يد","la main"),P("sba3","صبع","le doigt"),P("sder","صدر","la poitrine"),P("qalb","قلب","le cœur"),P("kerch","كرش","le ventre"),P("dhar","ظهر","le dos"),P("rokba","ركبة","le genou"),P("rjel","رجل","la jambe, le pied"))+R("pour les parties du corps qui vont par deux, on ajoute <b>-in</b> : <i>3in → 3inin</i> (les deux yeux), <i>yed → yeddin</i> (les deux mains), <i>rjel → rjelin</i> (les deux jambes). <b>rjel</b> désigne à la fois la jambe et le pied."))+
S(4,"Dire où j’ai mal",G(P("wja3","وجع","douleur"),P("3andi wja3 fi rassi","","j’ai mal à la tête"),P("3andi wja3 fi kerchi","","j’ai mal au ventre"),P("3andi wja3 fi dhahri","","j’ai mal au dos"),P("3andi wja3 fi snani","","j’ai mal aux dents"),P("3andi zoukam","","j’ai un rhume"),P("ro7 3and et-tbib","","va chez le médecin"))+R("<b>fi</b> (dans) + le mot + la terminaison <b>-i</b> (mon, voir leçon 11) : <i>fi rassi</i> = dans ma tête.")+D(["Médecin","wach bik ?","Qu’est-ce que tu as ?"],["Malade","3andi wja3 fi rassi w fi kerchi.","J’ai mal à la tête et au ventre."],["Médecin","ma3lich. Llah ysahel.","Ce n’est pas grave. Que Dieu facilite."])),
q:[Q("« ras » signifie :",["la tête","la main","le ventre"],"ras (راس) = la tête."),
Q("« 3in » signifie :",["l’œil","l’oreille","le nez"],"3in = l’œil, wedn = l’oreille."),
Q("« wedn » signifie :",["l’oreille","l’œil","la bouche"],"wedn = l’oreille."),
Q("« fem » signifie :",["la bouche","le nez","la dent"],"fem = la bouche, nef = le nez."),
Q("« yed » signifie :",["la main","le pied","le bras"],"yed = la main ; le bras se dit dra3."),
Q("« rjel » signifie :",["la jambe, le pied","la main","le genou"],"rjel = jambe et pied."),
Q("« qalb » signifie :",["le cœur","le dos","le ventre"],"qalb = le cœur."),
Q("« kerch » signifie :",["le ventre","le dos","la poitrine"],"kerch = le ventre."),
Q("« dhar » signifie :",["le dos","le cou","le genou"],"dhar = le dos."),
Q("« rokba » signifie :",["le genou","l’épaule","le doigt"],"rokba = le genou."),
Q("« ktef » signifie :",["l’épaule","le coude","le cou"],"ktef = l’épaule."),
Q("« wja3 » signifie :",["douleur","médecin","ventre"],"wja3 = douleur."),
Q("« 3andi wja3 fi rassi » signifie :",["j’ai mal à la tête","j’ai mal au ventre","je suis fatigué"],"rassi = ma tête."),
O("Remets en ordre : « J’ai mal au ventre »",["3andi","wja3","fi","kerchi"],"3andi wja3 fi + le mot + -i.","Commence par « j’ai »."),
Q("Comment dit-on « main » ?",["yed","rjel","ras"],"yed = la main."),
Q("Comment dit-on « tête » ?",["ras","qalb","kerch"],"ras = la tête."),
V("Pour dire « les deux yeux », on dit « 3inin ».",true,"Les parties du corps doubles prennent -in : 3inin, yeddin, rjelin.")]},

{id:"couleurs",c:3,n:"Les couleurs et les adjectifs",e:"🎨",h:Z("décrire les choses avec des couleurs et des adjectifs, et comparer (« plus grand que »).")+
S(1,"Les couleurs (masculin / féminin)",G(P("byed / bayda","أبيض","blanc / blanche"),P("k7el / ka7la","كحل","noir / noire"),P("7mer / 7amra","حمر","rouge"),P("khder / khadra","خضر","vert / verte"),P("zreg / zarqa","زرق","bleu / bleue"),P("sfer / safra","صفر","jaune"))+R("le féminin suit un modèle : <b>7mer → 7amra</b>, <b>zreg → zarqa</b>. On garde les 3 consonnes et on change les voyelles."))+
S(2,"D’autres couleurs",G(P("rmadi","رمادي","gris (couleur de la cendre)"),P("qahwi","قهوي","marron (couleur café)"),P("tchini","","orange (couleur de la tchina, l’orange)"),P("wardi / rose","","rose"),P("mauve","","violet"),P("bnafsaji","","violet (plus rare)"))+R("beaucoup de couleurs viennent du français ou d’un objet : <b>qahwi</b> vient de <b>qahwa</b> (café), <b>rmadi</b> de <b>rmad</b> (cendre)."))+
S(3,"Où placer l’adjectif ?",`<p>Comme en leçon 6, l’adjectif se met <b>après</b> le nom, et il s’accorde au féminin.</p>`+G(P("tomobil 7amra","","une voiture rouge"),P("el-bab el-byed","","la porte blanche"),P("qamja zarqa","","une chemise bleue"),P("el-ktab el-khder","","le livre vert")))+
S(4,"Les adjectifs utiles",G(P("twil / twila","","grand (taille), long"),P("qsir / qsira","","petit (taille), court"),P("jdid / jdida","","neuf, nouveau"),P("qdim / qdima","","vieux, ancien"),P("mli7 / mli7a","","bon, bien"),P("chbab / chbaba","","beau, joli"),P("s3ib / s3iba","","difficile"),P("sahel / sahla","","facile"),P("skhoun","","chaud"),P("bared","","froid")))+
S(5,"Beaucoup, un peu, très",G(P("bezzaf","بزّاف","beaucoup, très"),P("chwiya","شويّة","un peu"),P("ghaya","","super, parfait"),P("chbab bezzaf","","très beau"),P("bared chwiya","","un peu froid"))+R("<b>bezzaf</b> est un des mots les plus typiques d’Algérie : il se place <b>après</b> l’adjectif."))+
S(6,"Comparer : plus … que",`<p>On transforme l’adjectif sur le modèle <b>kbir → kbar</b>, puis on ajoute <b>men</b> (que).</p>`+G(P("kbar men","","plus grand que"),P("sghar men","","plus petit que"),P("twal men","","plus grand (taille) que"),P("khir men","","meilleur que"))+D(["Karim","khouya twal menni.","Mon frère est plus grand que moi."],["Sofia","w nta kbar menou ?","Et toi, tu es plus âgé que lui ?"],["Karim","ih, ana kbar menou b-zouj snin.","Oui, je suis plus âgé de deux ans."])),
q:[Q("« byed » signifie :",["blanc","noir","bleu"],"byed = blanc, k7el = noir."),
Q("« 7mer » signifie :",["rouge","vert","jaune"],"7mer = rouge."),
Q("« zreg » signifie :",["bleu","gris","marron"],"zreg = bleu."),
Q("« khder » signifie :",["vert","jaune","rouge"],"khder = vert."),
Q("Le féminin de « 7mer » est :",["7amra","7mera","7amer"],"7mer → 7amra."),
Q("« qahwi » vient de qahwa et signifie :",["marron","noir","orange"],"qahwi = couleur café."),
O("Remets en ordre : « une voiture rouge »",["tomobil","7amra"],"Le nom puis l’adjectif accordé."),
Q("« jdid » signifie :",["neuf, nouveau","vieux","grand"],"jdid = neuf, qdim = vieux."),
Q("« s3ib » signifie :",["difficile","facile","froid"],"s3ib = difficile, sahel = facile."),
Q("« bezzaf » signifie :",["beaucoup, très","un peu","jamais"],"bezzaf = beaucoup."),
Q("« chwiya » signifie :",["un peu","beaucoup","rien"],"chwiya = un peu."),
V("En darija, l’adjectif se place avant le nom.",false,"Il se place après : qamja zarqa."),
Q("« kbar men » signifie :",["plus grand que","très grand","moins grand que"],"kbir → kbar + men."),
O("Remets en ordre : « très beau »",["chbab","bezzaf"],"bezzaf se place après l’adjectif."),
Q("Comment dit-on « froid » ?",["bared","skhoun","jdid"],"bared = froid, skhoun = chaud."),
Q("Comment dit-on « noir » ?",["k7el","byed","7mer"],"k7el = noir.")]},

{id:"animaux",c:3,n:"Les animaux",e:"🐪",h:Z("nommer les animaux de la maison, de la ferme et de la nature, et les mettre dans une phrase.")+
S(1,"À la maison",G(P("kelb","كلب","chien"),P("qetta","قطة","chat"),P("3asfour","عصفور","oiseau"),P("7mama","حمامة","pigeon"),P("arneb","أرنب","lapin"),P("far","فار","souris"),P("7out","حوت","poisson")))+
S(2,"À la ferme",G(P("baqra","بقرة","vache"),P("kebch","كبش","mouton"),P("ma3za","معزة","chèvre"),P("7mar","حمار","âne"),P("7sen","حصان","cheval"),P("djaja","دجاجة","poule"),P("deek","ديك","coq"))+R("attention : <b>7mar</b> (âne) et <b>7mer</b> (rouge, leçon 14) se ressemblent. Une seule voyelle change !"))+
S(3,"Dans la nature",G(P("jmel","جمل","chameau"),P("assad","أسد","lion"),P("dhib","ذيب","loup"),P("ta3lab","ثعلب","renard"),P("7anch","حنش","serpent"),P("nahla","نحلة","abeille"),P("debbana","ذبانة","mouche"),P("es-sa7ra","الصحراء","le désert"),P("ghaba","غابة","la forêt")))+
S(4,"Les pluriels difficiles",G(P("kelb → klab","","chien → chiens"),P("qetta → qtat","","chat → chats"),P("jmel → jmal","","chameau → chameaux"),P("baqra → bqar","","vache → vaches"),P("kebch → kbech","","mouton → moutons"))+R("il n’y a pas de règle simple : apprends le pluriel en même temps que le mot. Selon les régions, les pluriels peuvent varier."))+
S(5,"Des phrases",G(P("3andi kelb","","j’ai un chien"),P("el-kelb kbir","","le chien est grand"),P("el-qetta ta7t el-korsi","","le chat est sous la chaise"),P("el-jmel fi es-sa7ra","","le chameau est dans le désert"))+D(["Sofia","wach 3andek 7ayawan fi ed-dar ?","Tu as un animal à la maison ?"],["Karim","ih, 3andi qetta sghira w kelb kbir.","Oui, j’ai un petit chat et un grand chien."])+R("<b>7ayawan</b> = animal.")),
q:[Q("« kelb » signifie :",["chien","chat","cheval"],"kelb = chien."),
Q("« qetta » signifie :",["chat","chien","souris"],"qetta = chat."),
Q("« 3asfour » signifie :",["oiseau","poisson","abeille"],"3asfour = oiseau."),
Q("« baqra » signifie :",["vache","chèvre","poule"],"baqra = vache."),
Q("« kebch » signifie :",["mouton","âne","lapin"],"kebch = mouton."),
Q("« 7mar » signifie :",["âne","cheval","chameau"],"7mar = âne."),
Q("Quelle différence entre « 7mar » et « 7mer » ?",["7mar = âne, 7mer = rouge","les deux veulent dire rouge","7mar = rouge, 7mer = âne"],"Une seule voyelle change tout !"),
Q("« 7sen » signifie :",["cheval","âne","chameau"],"7sen = cheval."),
Q("« jmel » signifie :",["chameau","cheval","lion"],"jmel = chameau."),
Q("« djaja » signifie :",["poule","oiseau","abeille"],"djaja = poule."),
Q("« dhib » signifie :",["loup","renard","chien"],"dhib = loup, ta3lab = renard."),
Q("« nahla » signifie :",["abeille","mouche","oiseau"],"nahla = abeille."),
Q("Le pluriel de « kelb » est :",["klab","kelbin","kelbat"],"kelb → klab (pluriel irrégulier)."),
O("Remets en ordre : « J’ai un chien »",["3andi","kelb"],"3andi + kelb."),
O("Remets en ordre : « Le chameau est dans le désert »",["el-jmel","fi","es-sa7ra"],"Pas de verbe : sujet + fi + lieu."),
Q("Comment dit-on « chat » ?",["qetta","kelb","far"],"qetta = chat."),
V("« es-sa7ra » désigne le désert.",true,"Le chameau y vit.")]},

{id:"vetements",c:3,n:"Vêtements, chaussures et accessoires",e:"👕",h:Z("parler de ce qu’on porte, choisir une taille et acheter des chaussures.")+
S(1,"Les vêtements",G(P("qamja","","chemise"),P("tichirt","","t-shirt"),P("pantalon","","pantalon"),P("tricot","","pull"),P("jakita","","veste"),P("kabbout","","manteau"),P("robe","","robe"),P("jupe","","jupe"),P("chourt","","short"))+R("beaucoup de mots viennent du français : <b>pantalon</b>, <b>robe</b>, <b>jupe</b>, <b>tricot</b>… Le pantalon traditionnel s’appelle aussi <b>seroual</b>. Selon les régions, certains mots changent : demande autour de toi !"))+
S(2,"Les tenues traditionnelles",G(P("gandoura","قندورة","tunique légère traditionnelle"),P("burnous","برنوس","grande cape de laine"),P("7ayek","حايك","voile blanc traditionnel (haïk)"),P("karakou","كاراكو","veste brodée (Alger)"),P("chechia","شاشية","bonnet traditionnel")))+
S(3,"Les chaussures",G(P("sebbat","سباط","chaussures"),P("sandala","سندالة","sandales"),P("babouj","بابوج","babouches"),P("basket","","baskets")))+
S(4,"Les accessoires",G(P("nadhdhara","نظارة","lunettes"),P("montra","","montre"),P("chapo","","chapeau"),P("7zam","حزام","ceinture"),P("chal","شال","écharpe, châle"),P("khatem","خاتم","bague"),P("qlada","قلادة","collier"),P("sak","","sac")))+
S(5,"Porter, essayer, acheter",G(P("nelbes","نلبس","je porte, je m’habille"),P("nchri","نشري","j’achète"),P("njarreb","","j’essaie"),P("nomra","","la pointure, la taille"),P("dayeq","ضايق","serré, étroit"),P("wase3","واسع","large"),P("kbir 3liya","","c’est trop grand pour moi"),P("lon","لون","la couleur"))+D(["Client","salam, n7ebb nchri sebbat.","Bonjour, je voudrais acheter des chaussures."],["Vendeur","tfaddal ! ch7al nomrtek ?","Je t’en prie ! Quelle est ta pointure ?"],["Client","rb3in. Njarreb-houm ?","Quarante. Je peux les essayer ?"],["Vendeur","ih, hak.","Oui, tiens."],["Client","dayqin chwiya. 3andek rb3in w wahed ?","Elles sont un peu serrées. Tu as du 41 ?"])+R("les nombres viennent de la leçon 8, les couleurs de la leçon 14 : <i>qamja zarqa</i> = une chemise bleue.")),
q:[Q("« qamja » signifie :",["chemise","pantalon","manteau"],"qamja = chemise."),
Q("« jakita » signifie :",["veste","jupe","robe"],"jakita = veste."),
Q("« kabbout » signifie :",["manteau","chaussure","chapeau"],"kabbout = manteau."),
Q("La « gandoura » est :",["une tunique traditionnelle","une chaussure","un bijou"],"gandoura = tunique légère traditionnelle."),
Q("Le « 7ayek » est :",["un voile traditionnel","un pantalon","un sac"],"7ayek = haïk."),
Q("« sebbat » signifie :",["chaussures","chapeau","ceinture"],"sebbat = chaussures."),
Q("« sandala » signifie :",["sandales","bottes","gants"],"sandala = sandales."),
Q("« nadhdhara » signifie :",["lunettes","montre","collier"],"nadhdhara = lunettes."),
Q("« montra » signifie :",["montre","bague","ceinture"],"montra = montre."),
Q("« 7zam » signifie :",["ceinture","chapeau","sac"],"7zam = ceinture."),
Q("« nelbes » signifie :",["je porte, je m’habille","j’achète","j’essaie"],"nelbes = je porte."),
Q("« nchri » signifie :",["j’achète","je porte","je vends"],"nchri = j’achète."),
Q("« nomra » (en magasin) signifie :",["la pointure, la taille","le prix","la couleur"],"nomra = numéro, pointure."),
Q("« dayeq » signifie :",["serré, étroit","large","neuf"],"dayeq = serré, wase3 = large."),
O("Remets en ordre : « Je voudrais acheter des chaussures »",["n7ebb","nchri","sebbat"],"n7ebb + nchri + sebbat."),
Q("Comment dit-on « chemise » ?",["qamja","sebbat","7zam"],"qamja = chemise."),
V("« kbir 3liya » veut dire « c’est trop grand pour moi ».",true,"3liya = sur moi.")]},

{id:"maison",c:4,n:"La maison et les objets",e:"🛋️",h:Z("nommer les pièces et les objets de la maison, dire « il y a » et situer les choses.")+
S(1,"Les pièces",G(P("ed-dar","الدار","la maison"),P("bit","بيت","pièce, chambre"),P("bit er-rqad","","chambre à coucher"),P("koujina","كوجينة","cuisine"),P("sala / salon","","salon"),P("bit el-ma","","toilettes"),P("hammam","حمّام","salle de bain"),P("stah","سطح","terrasse sur le toit"),P("7ouch","حوش","cour intérieure")))+
S(2,"Les meubles et les objets",G(P("bab","باب","porte"),P("taqa","طاقة","fenêtre"),P("tabla","طابلة","table"),P("korsi","كرسي","chaise"),P("frach","فراش","lit, matelas"),P("mefta7","مفتاح","clé"),P("dhaw","ضو","lumière, électricité"),P("tlaja","تلاجة","frigo"),P("telefoun","","téléphone"))+R("beaucoup de mots viennent du français : <b>tabla</b> (table), <b>koujina</b> (cuisine), <b>forchita</b> (fourchette)…"))+
S(3,"À la cuisine",G(P("kas","كاس","verre"),P("tebsi","طبسي","assiette"),P("mgharfa","مغرفة","cuillère"),P("forchita","فرشيطة","fourchette"),P("mous","موس","couteau"),P("qedra","قدرة","marmite")))+
S(4,"Il y a / il n’y a pas",G(P("kayen","كاين","il y a"),P("ma kan-ch","ما كانش","il n’y a pas"),P("wach kayen … ?","","est-ce qu’il y a … ?"))+D(["","wach kayen el-khobz ?","Il y a du pain ?"],["","ih, kayen fel-koujina.","Oui, il y en a dans la cuisine."],["","w el-7lib ?","Et le lait ?"],["","lala, ma kan-ch.","Non, il n’y en a pas."])+R("<b>fel-</b> = <b>fi</b> (dans) + <b>el</b> (le) : <i>fel-koujina</i> = dans la cuisine."))+
S(5,"Situer : sur, sous, à côté",G(P("fi","في","dans"),P("fouq","فوق","sur, au-dessus"),P("ta7t","تحت","sous"),P("7da","حدا","à côté de"),P("qoddam","قدّام","devant"),P("mora","مورا","derrière"),P("bin","بين","entre"))+G(P("el-mefta7 fouq et-tabla","","la clé est sur la table"),P("el-qetta ta7t el-korsi","","le chat est sous la chaise")))+
R("pas besoin de verbe « être » pour situer : <i>el-mefta7 fouq et-tabla</i> = la clé (est) sur la table."),
q:[Q("« koujina » signifie :",["cuisine","chambre","salon"],"koujina vient du français cuisine."),
Q("« bit » signifie :",["pièce, chambre","maison","porte"],"bit = pièce. bit er-rqad = chambre à coucher."),
Q("« taqa » signifie :",["fenêtre","table","porte"],"taqa = fenêtre."),
Q("« korsi » signifie :",["chaise","lit","clé"],"korsi = chaise."),
Q("« mefta7 » signifie :",["clé","lumière","couteau"],"mefta7 = clé."),
Q("« tlaja » signifie :",["frigo","télévision","fourchette"],"tlaja = frigo (de « glace »)."),
Q("« tebsi » signifie :",["assiette","verre","marmite"],"tebsi = assiette."),
Q("« mous » signifie :",["couteau","cuillère","fourchette"],"mous = couteau."),
Q("« kayen » signifie :",["il y a","il n’y a pas","il est"],"kayen = il y a."),
Q("« ma kan-ch » signifie :",["il n’y a pas","il y a","je ne suis pas"],"Encore la négation ma … -ch !"),
Q("« ta7t » signifie :",["sous","sur","devant"],"ta7t = sous, fouq = sur."),
Q("« 7da » signifie :",["à côté de","derrière","entre"],"7da = à côté de."),
O("Remets en ordre : « La clé est sur la table »",["el-mefta7","fouq","et-tabla"],"Sujet + préposition + lieu, sans verbe."),
O("Remets en ordre : « Il y a du pain dans la cuisine »",["kayen","el-khobz","fel-koujina"],"kayen + la chose + le lieu."),
Q("Comment dit-on « porte » ?",["bab","taqa","mefta7"],"bab = porte."),
V("« fel-koujina » veut dire « dans la cuisine ».",true,"fi + el = fel.")]},

{id:"fruits",c:4,n:"Les fruits et légumes",e:"🍅",h:Z("nommer les légumes, les fruits et les herbes, et dire ceux que tu aimes.")+
S(1,"Les légumes",G(P("tomatich","طماطيش","tomates"),P("batata","بطاطا","pommes de terre"),P("bsel","بصل","oignons"),P("thoum","ثوم","ail"),P("zrodiya","زرودية","carottes"),P("felfel","فلفل","poivrons"),P("qar3a","قرعة","courgette"),P("loubya","لوبيا","haricots"),P("khyar","خيار","concombre"),P("denjal","دنجال","aubergine"),P("krounb","كرنب","chou"),P("lift","لفت","navet")))+
S(2,"Les fruits",G(P("tfa7","تفاح","pommes"),P("tchina","تشينة","oranges"),P("banan","بانان","bananes"),P("3neb","عنب","raisin"),P("dellaa","دلاع","pastèque"),P("bettikh","بطيخ","melon"),P("khokh","خوخ","pêches"),P("tmer","تمر","dattes"),P("karmous","كرموس","figues"),P("limoun","ليمون","citron"),P("frawla","فراولة","fraises"),P("rommane","رمان","grenade"),P("meshmesh","مشمش","abricots"),P("ejjas","إجاص","poires"))+R("<b>bettikh</b> est le melon ; dans certaines régions, on l’emploie aussi pour la pastèque. Les noms de fruits sont souvent <b>collectifs</b> : <i>tfa7</i> = les pommes (ou la pomme en général), <i>tfa7a</i> = une seule pomme."))+
S(3,"Les herbes",G(P("m3dnous","معدنوس","persil"),P("n3na3","نعناع","menthe"),P("kosbor","كسبر","coriandre"))+R("le <b>n3na3</b> parfume le thé à la menthe (<i>atay b-n3na3</i>)."))+
S(4,"Ce que j’aime",G(P("n7ebb tfa7","","j’aime les pommes"),P("ma n7ebb-ch el-bsel","","je n’aime pas les oignons"),P("wach t7ebb ?","","qu’est-ce que tu veux ?"),P("a3tini banan","","donne-moi des bananes"))+D(["Yemma","wach t7ebb takoul ?","Qu’est-ce que tu veux manger ?"],["Weld","n7ebb frawla w tchina.","Je veux des fraises et des oranges."],["Yemma","ma kayen-ch frawla. Kayen tfa7 w banan.","Il n’y a pas de fraises. Il y a des pommes et des bananes."],["Weld","wakha, a3tini banan.","D’accord, donne-moi une banane."])),
q:[Q("« tomatich » signifie :",["tomates","pommes de terre","poivrons"],"tomatich = tomates."),
Q("« bsel » signifie :",["oignons","ail","carottes"],"bsel = oignons, thoum = ail."),
Q("« thoum » signifie :",["ail","oignon","poivron"],"thoum = ail."),
Q("« zrodiya » signifie :",["carottes","courgettes","navets"],"zrodiya = carottes."),
Q("« khyar » signifie :",["concombre","courgette","aubergine"],"khyar = concombre."),
Q("« denjal » signifie :",["aubergine","tomate","chou"],"denjal = aubergine."),
Q("« tfa7 » signifie :",["pommes","oranges","poires"],"tfa7 = pommes."),
Q("« tchina » signifie :",["oranges","citrons","pêches"],"tchina = oranges."),
Q("« limoun » signifie :",["citron","orange","pomme"],"limoun = citron."),
Q("« dellaa » signifie :",["pastèque","melon","figue"],"dellaa = pastèque, bettikh = melon."),
Q("« frawla » signifie :",["fraises","cerises","framboises"],"frawla = fraises."),
Q("« tmer » signifie :",["dattes","figues","raisin"],"tmer = dattes."),
Q("« 3neb » signifie :",["raisin","olives","abricots"],"3neb = raisin."),
Q("« rommane » signifie :",["grenade","poire","pêche"],"rommane = grenade."),
Q("« n3na3 » signifie :",["menthe","persil","coriandre"],"n3na3 = menthe."),
Q("« m3dnous » signifie :",["persil","menthe","ail"],"m3dnous = persil."),
Q("Une seule pomme se dit :",["tfa7a","tfa7in","tfa7"],"tfa7 = les pommes ; tfa7a = une pomme."),
O("Remets en ordre : « Je n’aime pas les oignons »",["ma","n7ebb-ch","el-bsel"],"ma + n7ebb-ch + el-bsel."),
Q("Comment dit-on « pommes de terre » ?",["batata","bsel","tomatich"],"batata = pommes de terre."),
Q("Comment dit-on « banane » ?",["banan","tfa7","3neb"],"banan = bananes.")]},

{id:"aliments",c:4,n:"Aliments, boissons et saveurs",e:"🍯",h:Z("nommer les aliments, les boissons, les desserts et décrire un goût.")+
S(1,"Les aliments de base",G(P("khobz","خبز","pain"),P("ma","ما","eau"),P("7lib","حليب","lait"),P("bid","بيض","œufs"),P("l7em","لحم","viande"),P("djaj","دجاج","poulet"),P("7out","حوت","poisson"),P("khodra","خضرة","légumes"),P("sokkar","سكر","sucre"),P("mel7","ملح","sel")))+
S(2,"Pour cuisiner",G(P("rouz","رز","riz"),P("makarouna","","pâtes"),P("zit","زيت","huile"),P("zebda","زبدة","beurre"),P("jben","جبن","fromage"),P("3sel","عسل","miel"),P("zitoun","زيتون","olives"),P("3dess","عدس","lentilles"),P("7ommos","حمص","pois chiches"),P("kamoun","كمون","cumin"),P("7rissa","","harissa (purée de piment)")))+
S(3,"Les viandes",G(P("l7em ghenmi","","viande de mouton"),P("l7em el-bagri","","viande de bœuf"),P("djaj","دجاج","poulet"),P("merguez","","merguez")))+
S(4,"Les boissons",G(P("ma","ما","eau"),P("ma m3adni","","eau minérale"),P("atay","أتاي","thé"),P("qahwa","قهوة","café"),P("3asir","عصير","jus"),P("limonada","","limonade"),P("gazouz","غزوز","soda"),P("lben","لبن","lait fermenté")))+
S(5,"Les desserts",G(P("7lawiyat","حلويات","pâtisseries"),P("makrout","مقروط","gâteau de semoule aux dattes"),P("baqlawa","بقلاوة","baklava"),P("gato","","gâteau"),P("zlabia","","beignet au miel")))+
S(6,"Les saveurs",G(P("mellah","مالح","salé"),P("7lou","حلو","sucré"),P("7ar","حار","piquant"),P("mor","مر","amer"),P("7amed","حامض","acide"),P("bnin","بنين","délicieux"))+G(P("el-3sel 7lou","","le miel est sucré"),P("el-limoun 7amed","","le citron est acide"),P("el-7rissa 7ara","","la harissa est piquante"))+R("l’adjectif s’accorde : <b>7ar</b> (m) → <b>7ara</b> (f).")),
q:[Q("« khobz » signifie :",["pain","eau","viande"],"khobz = pain."),
Q("« 7lib » signifie :",["lait","miel","sucre"],"7lib = lait."),
Q("« djaj » signifie :",["poulet","poisson","œufs"],"djaj = poulet."),
Q("« 7out » signifie :",["poisson","viande","légumes"],"7out = poisson."),
Q("« bid » signifie :",["œufs","sel","beurre"],"bid = œufs."),
Q("« rouz » signifie :",["riz","pâtes","lentilles"],"rouz = riz."),
Q("« zit » signifie :",["huile","beurre","fromage"],"zit = huile."),
Q("« jben » signifie :",["fromage","beurre","lait"],"jben = fromage."),
Q("« 3sel » signifie :",["miel","sucre","sel"],"3sel = miel."),
Q("« zitoun » signifie :",["olives","pois chiches","lentilles"],"zitoun = olives."),
Q("« 3asir » signifie :",["jus","soda","thé"],"3asir = jus."),
Q("« gazouz » signifie :",["soda","lait fermenté","eau"],"gazouz = soda."),
Q("« lben » signifie :",["lait fermenté","lait","café"],"lben = lait fermenté."),
Q("« 7lawiyat » signifie :",["pâtisseries","légumes","épices"],"7lawiyat = pâtisseries."),
Q("« mellah » signifie :",["salé","sucré","amer"],"mellah = salé."),
Q("« 7lou » signifie :",["sucré","salé","acide"],"7lou = sucré."),
Q("« 7ar » signifie :",["piquant","froid","amer"],"7ar = piquant."),
Q("« mor » signifie :",["amer","acide","sucré"],"mor = amer."),
O("Remets en ordre : « Le citron est acide »",["el-limoun","7amed"],"Sujet + adjectif, sans verbe."),
Q("Comment dit-on « sel » ?",["mel7","sokkar","zit"],"mel7 = sel.")]},

{id:"resto",c:4,n:"Plats typiques, café et restaurant",e:"🍲",h:Z("découvrir les plats typiques, commander au café ou au restaurant et parler des repas.")+
S(1,"Les plats typiques",G(P("kosksi / ta3am","","couscous"),P("chorba","شوربة","soupe"),P("kesra","كسرة","galette de semoule"),P("mhajeb","","crêpes farcies"),P("garantita","","flan de pois chiches"),P("zlabia","","beignet au miel"))+R("<b>chorba</b> est la soupe qu’on mange à chaque repas du Ramadan, et la <b>garantita</b> se vend dans la rue, surtout à Oran."))+
S(2,"Manger et boire",G(P("nakoul","ناكل","je mange"),P("tekoul","","tu manges"),P("kla","كلا","il a mangé"),P("nechrob","نشرب","je bois"),P("chreb","شرب","il a bu"),P("chb3t","","j’ai assez mangé (je suis rassasié)"))+D(["Yemma","yaw, arwa7 takoul !","Allez, viens manger !"],["Weld","wach tayebti, yemma ?","Qu’est-ce que tu as préparé, maman ?"],["Yemma","chorba w kesra.","De la soupe et de la galette."],["Weld","bnin ! saha yeddik !","Délicieux ! Bravo pour ta cuisine !"])+R("<b>saha yeddik</b> = mot à mot « santé à tes mains ». On le dit à la personne qui a cuisiné."))+
S(3,"Au café",G(P("qahwa","قهوة","café"),P("qahwa b-l7lib","","café au lait"),P("nos-nos","","moitié café, moitié lait"),P("atay","أتاي","thé"),P("bla sokkar","","sans sucre"),P("b-chwiya sokkar","","avec un peu de sucre"))+D(["Client","a3tini nos-nos, llah ykhallik.","Un nos-nos, s’il te plaît."],["Serveur","b-sokkar ?","Avec du sucre ?"],["Client","lala, bla sokkar. Saha !","Non, sans sucre. Merci !"]))+
S(4,"Au restaurant",G(P("n7ebb…","","je voudrais…"),P("a3tini…","","donne-moi…"),P("wach kayen ?","","qu’est-ce qu’il y a ? (au menu)"),P("bnin","بنين","délicieux"),P("el-7sab","الحساب","l’addition"),P("bessa7a !","بالصحة","bon appétit ! / à ta santé !"))+R("on dit <b>bessa7a</b> à quelqu’un qui mange ou qui vient de finir. Il répond <b>ya3tik es-sa7a</b> (merci).")),
q:[Q("« chorba » est :",["une soupe","un gâteau","une boisson"],"La chorba, soupe du Ramadan."),
Q("« nakoul » signifie :",["je mange","je bois","je cuisine"],"nakoul = je mange."),
Q("« nechrob » signifie :",["je bois","je mange","je paie"],"nechrob = je bois."),
Q("« bla sokkar » signifie :",["sans sucre","avec du sucre","beaucoup de sucre"],"bla = sans."),
Q("Un « nos-nos », c’est :",["un café moitié lait","un demi-pain","un thé à la menthe"],"nos = moitié : moitié café, moitié lait."),
Q("« bnin » signifie :",["délicieux","cher","froid"],"bnin = délicieux."),
Q("« el-7sab » signifie :",["l’addition","le menu","le serveur"],"el-7sab = le compte, l’addition."),
Q("On dit « saha yeddik » :",["à la personne qui a cuisiné","au serveur qui apporte l’addition","quand on a faim"],"Santé à tes mains !"),
O("Remets en ordre : « Donne-moi un café, s’il te plaît »",["a3tini","qahwa,","llah ykhallik"],"a3tini + la commande + s’il te plaît."),
Q("Comment dit-on « eau » ?",["ma","7lib","atay"],"ma = eau."),
Q("Comment dit-on « thé » ?",["atay","qahwa","3asir"],"atay = thé.")]},

{id:"marche",c:5,n:"Au marché : acheter et marchander",e:"🛒",h:Z("acheter des fruits et légumes, demander un prix au kilo et marchander poliment.")+
S(1,"Les lieux",G(P("es-souq","السوق","le marché"),P("7anout","حانوت","boutique, épicerie"),P("el-bayya3","","le vendeur"),P("el-qadyan","","les courses"))+R("<b>nqedda</b> = je fais les courses : <i>rani rayeh nqedda</i> = je vais faire les courses. Les noms des légumes et des fruits sont dans la leçon 18."))+
S(2,"Les quantités",G(P("kilo","","un kilo"),P("nos kilo","","un demi-kilo"),P("zouj kilo","","deux kilos"),P("wa7da","","une (pièce)"),P("zid","زيد","ajoute, encore"),P("barka","بركا","ça suffit"))+R("pour 2 kilos, on dit <b>zouj kilo</b> : comme toujours, <b>zouj</b> pour 2 !"))+
S(3,"Demander un prix et marchander",G(P("b-gadach el-kilo ?","","à combien le kilo ?"),P("ghali bezzaf !","","c’est trop cher !"),P("naqqes chwiya","","baisse un peu (le prix)"),P("akher kelma ?","","c’est ton dernier prix ?"),P("hak","هاك","tiens (en donnant)"),P("ma 3andi-ch es-sarf","","je n’ai pas de monnaie")))+
S(4,"Dialogue au souq",D(["Client","salam, b-gadach et-tomatich ?","Bonjour, à combien les tomates ?"],["Vendeur","miya w khamsin el-kilo.","Cent cinquante le kilo."],["Client","ghali bezzaf ! naqqes chwiya, llah ykhallik.","C’est trop cher ! Baisse un peu, s’il te plaît."],["Vendeur","khoud-ha b-miya w 3chrin, akher kelma.","Prends-les à cent vingt, dernier prix."],["Client","mli7, a3tini zouj kilo.","D’accord, donne-m’en deux kilos."],["Vendeur","hak. Zid 7aja okhra ?","Tiens. Autre chose ?"],["Client","lala, barka. Ya3tik es-sa7a.","Non, ça suffit. Merci."])),
q:[Q("« es-souq » signifie :",["le marché","la boutique","le vendeur"],"es-souq = le marché."),
Q("« 7anout » signifie :",["boutique, épicerie","marché","monnaie"],"7anout = petite boutique."),
Q("« nos kilo » signifie :",["un demi-kilo","neuf kilos","un kilo"],"nos = moitié."),
Q("« b-gadach el-kilo ? » signifie :",["à combien le kilo ?","combien de kilos ?","où est le kilo ?"],"b-gadach = à combien."),
Q("« naqqes chwiya » signifie :",["baisse un peu","ajoute un peu","donne un peu"],"naqqes = diminue."),
Q("« barka » signifie :",["ça suffit","encore","tiens"],"barka = assez, ça suffit."),
Q("« zid » signifie :",["ajoute, encore","arrête","paie"],"zid = ajoute."),
O("Remets en ordre : « Donne-moi deux kilos »",["a3tini","zouj","kilo"],"a3tini + zouj + kilo."),
O("Remets en ordre : « C’est trop cher ! »",["ghali","bezzaf"],"ghali (cher) + bezzaf (très)."),
Q("Comment dit-on « ça suffit » ?",["barka","zid","hak"],"barka = ça suffit.")]},

{id:"villes",c:5,n:"Ville, village, quartier et rue",e:"🏙️",h:Z("faire la différence entre une ville, un village, un quartier, une rue et une route, et dire d’où tu viens.")+
S(1,"Du plus grand au plus petit",`<div class="stair"><div style="width:100%">el-3asima : la capitale (Dzayer)</div><div style="width:82%">mdina : la ville</div><div style="width:62%">qarya : le village</div><div style="width:42%">douar : le hameau</div></div>`+G(P("wilaya","ولاية","département (il y en a 58)"),P("baladiya","بلدية","commune, mairie"))+R("le <b>douar</b> est un petit groupe de maisons à la campagne (leçon 5, dialogue au village)."))+
S(2,"Dans la ville",G(P("7ay","حي","quartier"),P("7ouma","حومة","quartier populaire"),P("chari3","شارع","grande rue, avenue"),P("zenqa","زنقة","rue, ruelle"),P("trig","طريق","route"),P("blasa","بلاصة","place"),P("jisr","جسر","pont"),P("el-mdina el-qdima","","la vieille ville"),P("el-qasba","القصبة","la casbah")))+
S(3,"À la campagne et dans la nature",G(P("rif","ريف","la campagne"),P("qarya","قرية","village"),P("douar","","hameau"),P("wad","واد","oued, rivière"),P("jbel","جبل","montagne"),P("bher","بحر","mer"),P("sa7ra","صحراء","désert"),P("ghaba","غابة","forêt")))+
S(4,"Rue, avenue ou route ?",`<table><tr><th>Mot</th><th>C’est…</th><th>Exemple</th></tr><tr><td>zenqa</td><td>une petite rue de quartier</td><td>ez-zenqa dyal el-7ouma</td></tr><tr><td>chari3</td><td>une grande rue, une avenue</td><td>chari3 kbir fel-mdina</td></tr><tr><td>trig</td><td>une route qui relie deux endroits</td><td>trig men Dzayer l-Wahran</td></tr></table>`+R("<b>zenqa</b> = petite, <b>chari3</b> = grande, <b>trig</b> = qui relie. Même idée qu’en français : ruelle, avenue, route !"))+
S(5,"D’où viens-tu ? Où habites-tu ?",G(P("Dzayer","الجزائر","Alger"),P("Wahran","وهران","Oran"),P("Qsentina","قسنطينة","Constantine"),P("3annaba","عنابة","Annaba"),P("Tlemsen","تلمسان","Tlemcen"),P("Stif","سطيف","Sétif"))+G(P("men wayn nta ?","","d’où viens-tu ?"),P("ana men Wahran","","je viens d’Oran"),P("rani saken f-Dzayer","","j’habite à Alger (h)"),P("rani sakna f-qarya","","j’habite dans un village (f)"))+D(["Sofia","men wayn nta ?","D’où viens-tu ?"],["Karim","ana men Qsentina, bsah rani saken f-Dzayer.","Je viens de Constantine, mais j’habite à Alger."],["Sofia","w el-3ayla ?","Et ta famille ?"],["Karim","el-3ayla fi qarya sghira, qrib men Stif.","Ma famille est dans un petit village, près de Sétif."])),
q:[Q("« mdina » signifie :",["ville","village","rue"],"mdina = ville."),
Q("« qarya » signifie :",["village","ville","route"],"qarya = village."),
Q("« douar » désigne :",["un hameau, un groupe de maisons rural","une grande ville","une avenue"],"douar = petit groupe de maisons."),
Q("« el-3asima » signifie :",["la capitale","la campagne","le quartier"],"el-3asima = la capitale."),
Q("« 7ay » signifie :",["quartier","pont","place"],"7ay = quartier."),
Q("« 7ouma » désigne :",["un quartier populaire","une route","une montagne"],"7ouma = quartier populaire."),
Q("Quelle est la plus grande rue ?",["chari3","zenqa","douar"],"chari3 = grande rue, avenue ; zenqa = petite rue."),
Q("« trig » désigne :",["une route","un village","une ruelle"],"trig = route."),
Q("« jisr » signifie :",["pont","place","oued"],"jisr = pont."),
Q("« wad » signifie :",["oued, rivière","mer","forêt"],"wad = oued."),
Q("« jbel » signifie :",["montagne","désert","mer"],"jbel = montagne."),
Q("« rif » signifie :",["la campagne","la ville","la rue"],"rif = campagne."),
Q("« wilaya » signifie :",["département","commune","quartier"],"wilaya = département."),
Q("« ana men Wahran » signifie :",["je viens d’Oran","j’habite à Oran","je vais à Oran"],"men = de, depuis."),
O("Remets en ordre : « J’habite à Alger »",["rani","saken","f-Dzayer"],"rani + saken + f- + la ville.","« saken » = habitant."),
Q("Comment dit-on « ville » ?",["mdina","qarya","douar"],"mdina = ville."),
Q("Comment dit-on « village » ?",["qarya","mdina","7ay"],"qarya = village."),
V("« zenqa » désigne une grande avenue.",false,"zenqa = petite rue, chari3 = grande rue.")]},

{id:"deplacer",c:5,n:"Se déplacer et demander son chemin",e:"🧭",h:Z("demander où se trouve un lieu, comprendre les directions et prendre les transports.")+
S(1,"Les lieux en ville",G(P("et-trig","الطريق","la route"),P("ez-zenqa","الزنقة","la rue"),P("el-blasa","البلاصة","la place"),P("el-jame3","الجامع","la mosquée"),P("el-bousta","البوسطة","la poste"),P("el-labitar / sbitar","","l’hôpital"),P("el-farmasyan","","la pharmacie"),P("el-banka","","la banque"),P("la gare","","la gare"),P("el-matar","المطار","l’aéroport")))+
S(2,"Demander son chemin",G(P("wayn kayen… ?","","où se trouve… ?"),P("kifach nrou7 l-… ?","","comment je vais à… ?"),P("qrib","قريب","près"),P("b3id","بعيد","loin"),P("rani tlaft","","je suis perdu"),P("men hna","","par ici"),P("men temma","","par là"))+R("<b>l-</b> = vers, à : <i>nrou7 l-la gare</i> = je vais à la gare, <i>nrou7 l-ed-dar</i> = je rentre à la maison."))+
S(3,"Les directions",G(P("limen","ليمن","à droite"),P("lisser","ليسر","à gauche"),P("nichan / toul","نيشان","tout droit"),P("dour","دور","tourne"),P("qta3","قطع","traverse"),P("7bes","حبس","arrête-toi"),P("fel-coin","","au coin"),P("ba3d el-feu","","après le feu")))+
S(4,"Les transports",G(P("tomobil / loto","","voiture"),P("el-kar","الكار","le bus"),P("taxi","","taxi"),P("el-train","","le train"),P("el-mitro / tramway","","métro / tramway"),P("tiyara","طيارة","avion"),P("b-rjlia","","à pied"))+R("on dit <b>b-</b> + le transport : <i>b-el-kar</i> = en bus, <i>b-taxi</i> = en taxi, <i>b-rjlia</i> = à pied (avec mes pieds)."))+
S(5,"Aller et venir",G(P("nrou7","نروح","je vais"),P("ra7","راح","il est allé"),P("nji","نجي","je viens"),P("ja","جا","il est venu"),P("nerja3","","je reviens, je rentre"),P("nehbet","","je descends"))+D(["Touriste","smah li, wayn kayen el-bousta ?","Excusez-moi, où se trouve la poste ?"],["Passant","ro7 nichan, men ba3d dour limen.","Allez tout droit, puis tournez à droite."],["Touriste","b3ida ?","C’est loin ?"],["Passant","lala, qriba. Khamsa dqayeq b-rjlik.","Non, c’est près. Cinq minutes à pied."],["Touriste","ya3tik es-sa7a !","Merci !"],["Passant","bla mziya, trig es-salama !","De rien, bonne route !"])),
q:[Q("« limen » signifie :",["à droite","à gauche","tout droit"],"limen = à droite."),
Q("« lisser » signifie :",["à gauche","à droite","derrière"],"lisser = à gauche."),
Q("« nichan » signifie :",["tout droit","tourne","arrête-toi"],"nichan = tout droit."),
Q("« dour » signifie :",["tourne","traverse","descends"],"dour = tourne."),
Q("« qrib » signifie :",["près","loin","ici"],"qrib = près, b3id = loin."),
Q("« b3id » signifie :",["loin","près","perdu"],"b3id = loin."),
Q("« el-kar » signifie :",["le bus","la voiture","le train"],"el-kar = le bus."),
Q("« ez-zenqa » signifie :",["la rue","la place","la poste"],"ez-zenqa = la rue."),
Q("« rani tlaft » signifie :",["je suis perdu","je suis arrivé","je suis fatigué"],"tlef = se perdre."),
Q("« nrou7 » signifie :",["je vais","je viens","je reviens"],"nrou7 = je vais, nji = je viens."),
Q("« 7bes » signifie :",["arrête-toi","avance","tourne"],"Pratique en taxi : 7bes hna = arrête-toi ici."),
Q("« b-rjlia » signifie :",["à pied","en voiture","en avion"],"Mot à mot : avec mes pieds."),
O("Remets en ordre : « Où se trouve la poste ? »",["wayn","kayen","el-bousta"],"wayn + kayen + le lieu."),
O("Remets en ordre : « Va tout droit, puis tourne à droite »",["ro7","nichan,","men ba3d","dour","limen"],"ro7 nichan, men ba3d dour limen."),
V("« trig es-salama » se dit pour souhaiter bonne route.",true,"trig = route, salama = sécurité."),
Q("Comment dit-on « près » ?",["qrib","b3id","nichan"],"qrib = près.")]},

{id:"meteo",c:6,n:"La météo et les saisons",e:"🌦️",h:Z("parler du temps qu’il fait, des saisons et des mois.")+
S(1,"Quel temps fait-il ?",G(P("el-jaw","الجو","le temps (météo)"),P("kifach el-jaw ?","","quel temps fait-il ?"),P("el-jaw mli7","","il fait beau"),P("el-jaw skhoun","","il fait chaud"),P("el-jaw bared","","il fait froid"),P("chems","شمس","soleil"),P("chta","شتا","pluie"),P("er-rih","الريح","le vent"),P("el-ghyam","الغيم","les nuages"),P("thelj","ثلج","neige"))+R("<b>chta</b> veut dire à la fois « pluie » et « hiver »."))+
S(2,"Il y a… / il n’y a pas…",G(P("kayen chta","","il pleut (il y a de la pluie)"),P("kayen er-rih","","il y a du vent"),P("kayen thelj","","il neige"),P("ma kayen-ch chta","","il ne pleut pas"),P("ghedwa kayen chta","","demain, il y aura de la pluie"))+R("tu connais déjà <b>kayen</b> et <b>ma kan-ch</b> (leçon 17) : ici, on les réutilise pour la météo."))+
S(3,"J’ai chaud, j’ai froid",G(P("rani skhoun","","j’ai chaud (h)"),P("rani skhouna","","j’ai chaud (f)"),P("rani bared","","j’ai froid (h)"),P("rani bardana","","j’ai froid (f)"),P("rani nelbes el-kabbout","","je mets le manteau")))+
S(4,"Les quatre saisons",G(P("er-rbi3","الربيع","le printemps"),P("es-sif","الصيف","l’été"),P("el-kharif","الخريف","l’automne"),P("ech-chta","الشتا","l’hiver"))+R("après <b>fi</b> (dans, en), l’article s’assimile : <i>fi es-sif</i> = en été, <i>fi ech-chta</i> = en hiver."))+
S(5,"Les mois",`<p>En Algérie, les mois se disent presque toujours <b>en français</b> : janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre. Dis simplement « fi avril » (en avril).</p>`+D(["Karim","kifach el-jaw el-youm ?","Quel temps fait-il aujourd’hui ?"],["Sofia","el-jaw bared, w kayen er-rih.","Il fait froid, et il y a du vent."],["Karim","w ghedwa ?","Et demain ?"],["Sofia","ghedwa kayen chta. Nelbes el-kabbout !","Demain, il pleuvra. Mets ton manteau !"])),
q:[Q("« el-jaw » signifie :",["le temps (météo)","le soleil","la nuit"],"el-jaw = le temps qu’il fait."),
Q("« chta » signifie :",["pluie (et hiver)","neige","vent"],"chta = pluie, mais aussi hiver."),
Q("« er-rih » signifie :",["le vent","la pluie","les nuages"],"er-rih = le vent."),
Q("« thelj » signifie :",["neige","glace","nuage"],"thelj = neige."),
Q("« el-ghyam » signifie :",["les nuages","le soleil","le vent"],"el-ghyam = les nuages."),
Q("« el-jaw skhoun » signifie :",["il fait chaud","il fait froid","il pleut"],"skhoun = chaud."),
Q("« kayen chta » signifie :",["il pleut","il neige","il fait beau"],"kayen = il y a ; chta = pluie."),
Q("« er-rbi3 » est :",["le printemps","l’été","l’automne"],"er-rbi3 = le printemps."),
Q("« es-sif » est :",["l’été","l’hiver","le printemps"],"es-sif = l’été."),
Q("« el-kharif » est :",["l’automne","l’été","l’hiver"],"el-kharif = l’automne."),
V("En Algérie, les mois se disent presque toujours en français.",true,"On dit « avril », « mai », « septembre »…"),
O("Remets en ordre : « Demain, il y aura de la pluie »",["ghedwa","kayen","chta"],"ghedwa + kayen + chta."),
M("Associe chaque mot à sa traduction",[["chems","soleil"],["chta","pluie"],["thelj","neige"],["er-rih","vent"]],"Quatre mots de la météo."),
C("Il fait froid : el-jaw ___",["bared","skhoun","mli7"],"bared = froid."),
I("☀️","Quel mot darija correspond à ce dessin ?",["chems","chta","thelj"],"chems = soleil."),
I("❄️","Quel mot darija correspond à ce dessin ?",["thelj","chta","er-rih"],"thelj = neige.")]},

{id:"etudes",c:6,n:"Les études et le travail",e:"🎓",h:Z("parler de l’école, de l’université, des métiers et de ton travail.")+
S(1,"À l’école et à l’université",G(P("el-qraya","القراية","les études"),P("el-madrasa","المدرسة","l’école"),P("el-jam3a","الجامعة","l’université"),P("el-ostad","الأستاذ","le professeur"),P("et-taleb","الطالب","l’étudiant"),P("et-tilmid","التلميذ","l’élève"),P("el-qism","القسم","la classe"),P("el-imti7an","الامتحان","l’examen"),P("noqta","نقطة","la note"),P("stilo","","stylo")))+
S(2,"Comprendre et se faire comprendre",G(P("nqra","نقرا","j’étudie, je lis"),P("nfehem","نفهم","je comprends"),P("ma fhemt-ch","","je n’ai pas compris"),P("3awed, llah ykhallik","","répète, s’il te plaît"),P("rani nqra fel-jam3a","","j’étudie à l’université"))+R("<b>ma fhemt-ch</b> est la phrase la plus utile pour un débutant : tu connais déjà la négation <b>ma … -ch</b> (leçon 7)."))+
S(3,"Les métiers",G(P("tbib","طبيب","médecin"),P("ostad","أستاذ","professeur"),P("mohandis","مهندس","ingénieur"),P("khabbaz","خباز","boulanger"),P("tabbakh","طباخ","cuisinier"),P("fellah","فلاح","cultivateur"),P("el-bayya3","البياع","le vendeur"),P("chauffeur","","chauffeur"),P("chorti","شرطي","policier")))+
S(4,"Parler de son travail",G(P("wach tkhdem ?","","que fais-tu comme travail ?"),P("ana tbib","","je suis médecin"),P("nekhdem fel-jam3a","","je travaille à l’université"),P("khedma","خدمة","le travail"),P("3andi khedma","","j’ai du travail"),P("ma 3andi-ch khedma","","je n’ai pas de travail"))+D(["Sofia","wach tkhdem ?","Que fais-tu comme travail ?"],["Yacine","ana mohandis, nekhdem f-Dzayer. W nti ?","Je suis ingénieur, je travaille à Alger. Et toi ?"],["Sofia","ana ostada, nekhdem fel-madrasa.","Je suis professeure, je travaille à l’école."])+R("pour dire « je suis + métier », pas de verbe : <i>ana tbib</i> (comme <i>ana sghir</i>, leçon 4).")),
q:[Q("« el-madrasa » signifie :",["l’école","l’université","la classe"],"el-madrasa = l’école."),
Q("« el-jam3a » signifie :",["l’université","l’examen","la classe"],"el-jam3a = l’université."),
Q("« el-ostad » signifie :",["le professeur","l’étudiant","le médecin"],"el-ostad = le professeur."),
Q("« et-taleb » signifie :",["l’étudiant","le professeur","l’élève"],"et-taleb = l’étudiant, et-tilmid = l’élève."),
Q("« el-imti7an » signifie :",["l’examen","la note","la classe"],"el-imti7an = l’examen."),
Q("« nfehem » signifie :",["je comprends","j’étudie","j’écris"],"nfehem = je comprends."),
Q("« ma fhemt-ch » signifie :",["je n’ai pas compris","je ne sais pas","je ne veux pas"],"ma + fhemt + ch."),
Q("« khedma » signifie :",["le travail","l’école","l’examen"],"khedma = le travail."),
Q("« mohandis » signifie :",["ingénieur","médecin","boulanger"],"mohandis = ingénieur."),
Q("« khabbaz » signifie :",["boulanger","cuisinier","cultivateur"],"khabbaz = boulanger."),
Q("« wach tkhdem ? » signifie :",["que fais-tu comme travail ?","où habites-tu ?","comment vas-tu ?"],"tkhdem = tu travailles."),
V("Pour dire « je suis médecin », on dit « ana tbib » (sans verbe).",true,"Le verbe être n’est pas exprimé."),
O("Remets en ordre : « J’étudie à l’université »",["rani","nqra","fel-jam3a"],"rani + nqra + fel-jam3a."),
M("Associe chaque métier à sa traduction",[["tbib","médecin"],["ostad","professeur"],["fellah","cultivateur"],["chorti","policier"]],"Quatre métiers."),
C("— wach tkhdem ? — Ana ___, nekhdem fel-madrasa. (professeur)",["ostad","tbib","khabbaz"],"ostad = professeur."),
I("🩺","Comment dit-on « médecin » ?",["tbib","ostad","mohandis"],"tbib = médecin.")]},

{id:"metiers",c:6,n:"Les métiers et le travail",e:"👷",h:Z("dire quel est ton métier, où tu travailles et poser la question à quelqu’un.")+
S(1,"Les métiers",G(P("el-ostedh","الأستاذ","le professeur"),P("el-mohandes","المهندس","l’ingénieur"),P("el-khebbaz","الخباز","le boulanger"),P("el-jezzar","الجزار","le boucher"),P("el-7ellaq","الحلاق","le coiffeur"),P("el-khayyet","الخياط","le tailleur"),P("el-bennay","البناي","le maçon"),P("el-fellah","الفلاح","l’agriculteur"),P("et-tebbakh","الطباخ","le cuisinier"),P("el-3essas","العساس","le gardien"))+R("beaucoup de noms de métiers suivent le même moule : <b>kh-e-bb-a-z</b>, <b>j-e-zz-a-r</b>, <b>7-e-ll-a-q</b>, <b>t-e-bb-a-kh</b> : la consonne du milieu est doublée. Pour le féminin, on ajoute -a : <i>ostedh → ostedha</i>, <i>mohandes → mohandesa</i>."))+
S(2,"Je suis… / Je travaille comme…",G(P("ana mohandes","","je suis ingénieur"),P("ana ostedha","","je suis professeure"),P("nkhdem mohandes","","je travaille comme ingénieur"),P("ana khebbaz","","je suis boulanger"),P("wach tkhdem ?","","que fais-tu comme travail ?"))+R("pour dire son métier, on peut dire <b>ana</b> + métier, ou <b>nkhdem</b> + métier. Pas besoin de « un » ni de « le » : <i>ana mohandes</i> = je suis ingénieur."))+
S(3,"Où travailles-tu ?",G(P("el-mektab","المكتب","le bureau"),P("es-sherka","الشركة","l’entreprise"),P("el-ma3mal","المعمل","l’usine"),P("el-madrasa","المدرسة","l’école"),P("nkhdem fi es-sherka","","je travaille dans une entreprise"),P("nkhdem fel-madrasa","","je travaille à l’école"),P("nkhdem fel-ma3mal","","je travaille à l’usine"))+R("<b>fi</b> + <b>el</b> se colle : <i>fi + el-madrasa → fel-madrasa</i>."))+
S(4,"Le verbe « travailler »",G(P("nkhdem","","je travaille"),P("tkhdem","","tu travailles"),P("ykhdem","","il travaille"),P("tkhdem","","elle travaille"),P("nkhedmou","","nous travaillons"),P("tkhedmou","","vous travaillez"),P("ykhedmou","","ils travaillent"),P("khdemt","","j’ai travaillé"))+R("c’est le même schéma que dans la leçon 10 : <b>n-</b>, <b>t-</b>, <b>y-</b>, et <b>-ou</b> au pluriel."))+
S(5,"Chercher du travail",G(P("nqelleb 3la khedma","","je cherche du travail"),P("ma nkhdem-ch","","je ne travaille pas"),P("khedma s3iba","","un travail difficile"),P("khedma mli7a","","un bon travail"))+D(["Nadia","salam, ana Nadia. wach tkhdem ?","Salut, je suis Nadia. Que fais-tu comme travail ?"],["Sami","ana mohandes. nkhdem fi sherka kbira. w nti ?","Je suis ingénieur. Je travaille dans une grande entreprise. Et toi ?"],["Nadia","ana ostedha. nkhdem fel-madrasa.","Je suis professeure. Je travaille à l’école."],["Sami","khedma s3iba ?","Un travail difficile ?"],["Nadia","chwiya s3iba, bsah n7eb el-khedma bezzaf.","Un peu difficile, mais j’aime beaucoup mon travail."])),
q:[Q("« el-khebbaz » est :",["le boulanger","le boucher","le coiffeur"],"khebbaz vient de khobz (pain)."),
Q("« el-jezzar » est :",["le boucher","le boulanger","le cuisinier"],"el-jezzar = le boucher."),
Q("« el-7ellaq » est :",["le coiffeur","le tailleur","le maçon"],"el-7ellaq = le coiffeur."),
Q("« el-khayyet » est :",["le tailleur","le coiffeur","le gardien"],"el-khayyet = celui qui coud."),
Q("« el-bennay » est :",["le maçon","le fermier","le professeur"],"el-bennay = celui qui construit."),
Q("« el-fellah » est :",["l’agriculteur","le gardien","l’ingénieur"],"el-fellah = l’agriculteur."),
Q("« et-tebbakh » est :",["le cuisinier","le boucher","le boulanger"],"et-tebbakh = le cuisinier."),
Q("« el-mohandes » est :",["l’ingénieur","le professeur","le médecin"],"el-mohandes = l’ingénieur."),
Q("Une femme professeure dit :",["ana ostedha","ana ostedh","ana ostedhin"],"On ajoute -a pour le féminin."),
Q("Un collègue te demande « wach tkhdem ? ». Que veut-il savoir ?",["ton métier","ton âge","ton adresse"],"tkhdem = tu travailles."),
Q("« nqelleb 3la khedma » signifie :",["je cherche du travail","je n’ai pas de travail","j’ai un bon travail"],"nqelleb 3la = je cherche."),
Q("« es-sherka » désigne :",["l’entreprise","l’usine","le bureau"],"es-sherka = l’entreprise."),
Q("« el-ma3mal » désigne :",["l’usine","l’école","le bureau"],"el-ma3mal = l’usine."),
Q("« ykhedmou » signifie :",["ils travaillent","nous travaillons","je travaille"],"y- … -ou = ils."),
V("Pour dire « je suis ingénieur », il faut ajouter un mot pour « un ».",false,"On dit simplement : ana mohandes."),
O("Remets en ordre : « Je travaille dans une entreprise »",["nkhdem","fi","es-sherka"],"nkhdem + fi + es-sherka."),
M("Associe chaque métier à sa traduction",[["el-khebbaz","boulanger"],["el-jezzar","boucher"],["el-bennay","maçon"],["el-7ellaq","coiffeur"]],"Quatre métiers du quotidien."),
C("Elle est professeure : ana ___",["ostedha","ostedh","mohandes"],"ostedha = professeure."),
C("Je travaille à l’école : nkhdem ___",["fel-madrasa","fel-ma3mal","fel-mektab"],"fi + el-madrasa = fel-madrasa."),
I("🧑‍🍳","Quel métier est-ce ?",["et-tebbakh","el-fellah","el-jezzar"],"et-tebbakh = le cuisinier."),
I("👨‍🌾","Quel métier est-ce ?",["el-fellah","el-khayyet","el-bennay"],"el-fellah = l’agriculteur.")]},

{id:"loisirs",c:6,n:"Les loisirs et le sport",e:"⚽",h:Z("parler de ce que tu aimes faire, du sport et inviter un ami.")+
S(1,"Le sport",G(P("er-ryada","الرياضة","le sport"),P("el-koura","الكورة","le football, le ballon"),P("el-match","","le match"),P("el-fariq","الفريق","l’équipe"),P("el-mal3ab","الملعب","le terrain, le stade"),P("es-sba7a","السباحة","la natation"),P("nel3eb el-koura","","je joue au football"),P("nsba7","","je nage"))+R("<b>nel3eb</b> = je joue (verbe <i>l3eb</i>). Tu joues = <i>tel3eb</i>, il joue = <i>yel3eb</i>."))+
S(2,"Les loisirs",G(P("el-hewaya","الهواية","le loisir, le passe-temps"),P("el-mousiqa","الموسيقى","la musique"),P("nsma3 el-mousiqa","","j’écoute de la musique"),P("el-film","الفيلم","le film"),P("nchouf film","","je regarde un film"),P("es-sinima","السينما","le cinéma"),P("nrou7 l-es-sinima","","je vais au cinéma"),P("nqra","","je lis"),P("nrsem","","je dessine")))+
S(3,"J’aime / je n’aime pas",G(P("wach t7eb ?","","qu’est-ce que tu aimes ?"),P("n7eb el-koura bezzaf","","j’aime beaucoup le football"),P("ma n7eb-ch es-sba7a","","je n’aime pas la natation"),P("sa7bi","صاحبي","mon ami"),P("sa7bti","صاحبتي","mon amie"),P("sa7abi","صحابي","mes amis"),P("m3a sa7abi","","avec mes amis"))+R("<b>m3a</b> = avec. <i>m3a sa7abi</i> = avec mes amis (tu as déjà vu <i>m3a men ?</i> = avec qui ?)."))+
S(4,"Inviter un ami",G(P("tel3eb m3aya ?","","tu joues avec moi ?"),P("t7eb tji ?","","tu veux venir ?"),P("yalla !","","allez, on y va !"),P("nchoufek ghedwa","","à demain (je te vois demain)"))+D(["Karim","wach tdir fel-weekend ?","Que fais-tu ce week-end ?"],["Amine","n7eb nel3eb el-koura m3a sa7abi. t7eb tji ?","J’aime jouer au foot avec mes amis. Tu veux venir ?"],["Karim","yalla ! fi el-mal3ab ?","Allez ! Au terrain ?"],["Amine","iyeh, ghedwa. nchoufek !","Oui, demain. À demain !"])),
q:[Q("« el-koura » signifie :",["le football, le ballon","le sport","la musique"],"el-koura = le ballon, le football."),
Q("« er-ryada » signifie :",["le sport","le jeu","le terrain"],"er-ryada = le sport."),
Q("« el-fariq » signifie :",["l’équipe","le match","le terrain"],"el-fariq = l’équipe."),
Q("« el-mal3ab » signifie :",["le terrain, le stade","l’équipe","le cinéma"],"el-mal3ab = l’endroit où l’on joue."),
Q("« nsba7 » signifie :",["je nage","je joue","je cours"],"es-sba7a = la natation."),
Q("« nel3eb » signifie :",["je joue","je regarde","je lis"],"nel3eb = je joue."),
Q("« el-hewaya » signifie :",["le loisir","la maison","le travail"],"el-hewaya = le passe-temps."),
Q("« nsma3 el-mousiqa » signifie :",["j’écoute de la musique","je lis un livre","je regarde un film"],"nsma3 = j’écoute."),
Q("« nchouf film » signifie :",["je regarde un film","je vais au cinéma","j’écoute un film"],"nchouf = je regarde."),
Q("« es-sinima » signifie :",["le cinéma","le film","la musique"],"es-sinima = le cinéma."),
Q("« wach t7eb ? » signifie :",["qu’est-ce que tu aimes ?","où vas-tu ?","tu es qui ?"],"t7eb = tu aimes."),
Q("« sa7abi » signifie :",["mes amis","mon ami","mon amie"],"sa7bi = mon ami ; sa7abi = mes amis."),
Q("« m3a sa7abi » signifie :",["avec mes amis","sans mes amis","chez mes amis"],"m3a = avec."),
V("« ma n7eb-ch es-sba7a » veut dire : j’aime la natation.",false,"La négation ma … -ch change le sens : je n’aime pas."),
O("Remets en ordre : « J’aime beaucoup le football »",["n7eb","el-koura","bezzaf"],"n7eb + el-koura + bezzaf."),
M("Associe chaque mot à sa traduction",[["el-fariq","équipe"],["el-mal3ab","terrain"],["es-sinima","cinéma"],["el-mousiqa","musique"]],"Quatre mots de loisirs."),
C("J’aime jouer avec mes amis : n7eb nel3eb ___ sa7abi",["m3a","fi","men"],"m3a = avec."),
C("Je n’aime pas la natation : ___ n7eb-ch es-sba7a",["ma","wach","kayen"],"ma … -ch = négation."),
I("⚽","Quel mot darija correspond à ce dessin ?",["el-koura","es-sinima","el-film"],"el-koura = le football, le ballon."),
I("🎬","Quel mot darija correspond à ce dessin ?",["es-sinima","el-mal3ab","er-ryada"],"es-sinima = le cinéma.")]},

{id:"sante",c:6,n:"La santé : médecin et pharmacie",e:"💊",h:Z("expliquer ce qui ne va pas, comprendre les conseils du médecin et aller à la pharmacie.")+
S(1,"Où aller ?",G(P("et-tbib","الطبيب","le médecin"),P("sbitar","سبيطار","l’hôpital"),P("el-farmasyan","","la pharmacie"),P("dwa","دوا","médicament"),P("ordonans","","l’ordonnance"),P("rendez-vous","","rendez-vous")))+
S(2,"Dire ce qui ne va pas",G(P("rani mrid","","je suis malade (h)"),P("rani mrida","","je suis malade (f)"),P("3andi wja3 fi rassi","","j’ai mal à la tête"),P("3andi zoukam","","j’ai un rhume"),P("3andi s3al","","j’ai une toux"),P("3andi 7omma","","j’ai de la fièvre"))+R("tu connais déjà <b>wja3</b> et les parties du corps (leçon 13)."))+
S(3,"Les conseils du médecin",G(P("khoud ed-dwa","","prends le médicament"),P("chreb ma bezzaf","","bois beaucoup d’eau"),P("rta7","","repose-toi"),P("zouj marrat fel-nhar","","deux fois par jour"),P("ba3d el-makla","","après le repas"),P("llah ychafik","","que Dieu te guérisse"))+R("<b>marra</b> = une fois, <b>zouj marrat</b> = deux fois (zouj pour 2, comme toujours !)."))+
S(4,"Dialogue chez le médecin",D(["Médecin","tfaddal, ag3ed. Wach bik ?","Je t’en prie, assieds-toi. Qu’est-ce que tu as ?"],["Malade","3andi wja3 fi rassi w 3andi 7omma.","J’ai mal à la tête et de la fièvre."],["Médecin","men waqtach ?","Depuis quand ?"],["Malade","men el-bare7.","Depuis hier."],["Médecin","khoud had ed-dwa zouj marrat fel-nhar, w rta7. Llah ychafik.","Prends ce médicament deux fois par jour, et repose-toi. Que Dieu te guérisse."],["Malade","ya3tik es-sa7a, doktor.","Merci, docteur."])),
q:[Q("« et-tbib » signifie :",["le médecin","l’hôpital","le médicament"],"et-tbib = le médecin."),
Q("« sbitar » signifie :",["l’hôpital","la pharmacie","l’école"],"sbitar = l’hôpital."),
Q("« dwa » signifie :",["médicament","douleur","médecin"],"dwa = médicament."),
Q("« el-farmasyan » désigne :",["la pharmacie","l’hôpital","le marché"],"el-farmasyan = la pharmacie."),
Q("« 3andi zoukam » signifie :",["j’ai un rhume","j’ai de la fièvre","j’ai mal au dos"],"zoukam = rhume."),
Q("« 3andi s3al » signifie :",["j’ai une toux","j’ai un rhume","j’ai faim"],"s3al = toux."),
Q("« 3andi 7omma » signifie :",["j’ai de la fièvre","j’ai une toux","j’ai peur"],"7omma = fièvre."),
Q("« rta7 ! » signifie :",["repose-toi !","viens !","écoute !"],"rta7 = repose-toi."),
Q("« chreb ma bezzaf » signifie :",["bois beaucoup d’eau","mange beaucoup","dors un peu"],"chreb = bois ; ma = eau ; bezzaf = beaucoup."),
Q("« zouj marrat fel-nhar » signifie :",["deux fois par jour","deux jours par semaine","deux heures par jour"],"marra = fois ; nhar = jour."),
Q("« llah ychafik » signifie :",["que Dieu te guérisse","que Dieu te garde","bon appétit"],"On le dit à un malade."),
Q("« men waqtach ? » signifie :",["depuis quand ?","pourquoi ?","où ça ?"],"men = depuis ; waqtach = quand."),
V("« khoud » veut dire « prends ».",true,"khoud ed-dwa = prends le médicament."),
O("Remets en ordre : « J’ai mal à la tête »",["3andi","wja3","fi","rassi"],"3andi wja3 fi + le mot + -i."),
M("Associe chaque mot à sa traduction",[["zoukam","rhume"],["s3al","toux"],["7omma","fièvre"],["wja3","douleur"]],"Quatre mots de santé."),
C("Le médecin dit : ___ ed-dwa zouj marrat fel-nhar. (prends)",["khoud","rta7","3awed"],"khoud = prends."),
I("💊","Comment dit-on « médicament » ?",["dwa","tbib","sbitar"],"dwa = médicament.")]},

{id:"futur",c:7,n:"Le futur et l’impératif",e:"⏭️",h:Z("parler de ce qu’on va faire et donner des ordres ou des conseils (niveau avancé).")+
S(1,"Le futur proche : rayeh + présent",`<p>Pour dire « je vais faire », on met <b>rayeh</b> (qui va) devant le présent (leçon 10). <b>rayeh</b> s’accorde avec la personne.</p>`+G(P("rani rayeh nekteb","","je vais écrire (h)"),P("rani rayha nekteb","","je vais écrire (f)"),P("rahoum rayhin yektbou","","ils vont écrire"),P("ghedwa rayeh nrou7 l-es-souq","","demain je vais aller au marché"))+R("à l’oral, <b>rani</b> tombe souvent : <i>rayeh nakoul</i> = je vais manger. Dans l’Ouest, on entend aussi <b>ghadi</b> : <i>ghadi nakoul</i>."))+
S(2,"Le futur à la négation",G(P("ma rani-ch rayeh nrou7","","je ne vais pas y aller"),P("ma n-rou7-ch","","je n’y vais pas"),P("ghedwa ma nekhdem-ch","","demain je ne travaille pas"))+R("le présent sert souvent de futur avec un mot de temps : <i>ghedwa nji</i> = demain je viens."))+
S(3,"L’impératif : on enlève le t-",`<p>On part du présent « tu » et on enlève le <b>t-</b> du début :</p><table><tr><th>Présent</th><th>À un homme</th><th>À une femme</th><th>À un groupe</th></tr><tr><td>tekteb (tu écris)</td><td>kteb !</td><td>ktbi !</td><td>ktbou !</td></tr><tr><td>tchouf (tu regardes)</td><td>chouf !</td><td>choufi !</td><td>choufou !</td></tr><tr><td>tgoul (tu dis)</td><td>goul !</td><td>gouli !</td><td>goulou !</td></tr><tr><td>tekoul (tu manges)</td><td>kol !</td><td>kouli !</td><td>koulou !</td></tr></table>`+R("même modèle que <b>nta / nti / ntouma</b> : rien pour un homme, <b>-i</b> pour une femme, <b>-ou</b> pour un groupe."))+
S(4,"Les impératifs les plus courants",G(P("arwa7 !","أرواح","viens !"),P("ro7 !","روح","va ! pars !"),P("ag3ed !","أقعد","assieds-toi !"),P("noud !","نوض","lève-toi !"),P("asber !","أصبر","attends ! patiente !"),P("a3tini !","أعطيني","donne-moi !"),P("sma3 !","سمع","écoute !"),P("ma3lich, khalli !","","laisse tomber !")))+
S(5,"L’ordre à la négation : ma … -ch",`<p>Pour interdire, on garde le présent (avec le <b>t-</b>) et on ajoute <b>ma … -ch</b> :</p>`+G(P("ma tekteb-ch !","","n’écris pas !"),P("ma trou7-ch !","","ne pars pas !"),P("ma tgoul-ch !","","ne dis pas ça !"),P("ma tkhaf-ch !","","n’aie pas peur !")))+
S(6,"Dialogue",D(["Yemma","Yacine, noud ! es-sa3a tmenya !","Yacine, lève-toi ! Il est huit heures !"],["Yacine","asbri chwiya, yemma…","Attends un peu, maman…"],["Yemma","lala ! noud, kol w ro7 l-el-madrasa !","Non ! Lève-toi, mange et va à l’école !"],["Yacine","wakha, rani jay !","D’accord, j’arrive !"])+R("<b>wakha</b> = d’accord. <b>rani jay</b> = j’arrive (je suis en train de venir)."))+"",
q:[Q("« rani rayeh nekteb » signifie :",["je vais écrire","j’ai écrit","j’écris maintenant"],"rayeh + présent = futur proche."),
Q("Une femme dit « je vais manger » :",["rani rayha nakoul","rani rayeh nakoul","rana rayhin nakoul"],"rayha = au féminin."),
Q("« rahoum rayhin yektbou » signifie :",["ils vont écrire","nous allons écrire","ils ont écrit"],"rayhin = pluriel."),
Q("« ghedwa nji » signifie :",["demain je viens","hier je suis venu","je viens maintenant"],"Le présent + un mot de temps = futur."),
Q("Pour former l’impératif, on part de tekteb et :",["on enlève le t-","on ajoute ma … -ch","on ajoute rayeh"],"tekteb → kteb !"),
Q("« chouf ! » signifie :",["regarde !","écoute !","viens !"],"chouf = regarde."),
Q("À une femme, « regarde ! » se dit :",["choufi !","chouf !","choufou !"],"-i pour une femme."),
Q("À un groupe, « dites ! » se dit :",["goulou !","goul !","gouli !"],"-ou pour un groupe."),
Q("« arwa7 ! » signifie :",["viens !","va !","assieds-toi !"],"arwa7 = viens, ro7 = va."),
Q("« ag3ed ! » signifie :",["assieds-toi !","lève-toi !","attends !"],"ag3ed = assieds-toi, noud = lève-toi."),
Q("« asber ! » signifie :",["attends ! patiente !","écoute !","laisse tomber !"],"sber = patience."),
Q("« ma tkhaf-ch ! » signifie :",["n’aie pas peur !","ne pars pas !","ne mange pas !"],"khaf = avoir peur."),
Q("« wakha » signifie :",["d’accord","non","peut-être"],"wakha = d’accord."),
O("Remets en ordre : « Je vais aller au marché »",["rayeh","nrou7","l-es-souq"],"rayeh + nrou7 + l-es-souq."),
O("Remets en ordre : « Ne pars pas ! »",["ma","trou7-ch"],"ma + présent + ch."),
Q("Comment dit-on « mange ! » (à un homme) ?",["kol","chouf","goul"],"tekoul → kol !"),
Q("Comment dit-on « écoute ! » (à un homme) ?",["sma3","kol","ro7"],"sma3 = écoute !")]},

{id:"voyages",c:7,n:"Voyager : gare, aéroport et hôtel",e:"✈️",h:Z("acheter un billet, voyager et réserver une chambre d’hôtel.")+
S(1,"Les lieux et les transports",G(P("el-matar","المطار","l’aéroport"),P("tiyara","طيارة","avion"),P("el-gar","القار","la gare"),P("el-train","","le train"),P("el-kar","الكار","le bus"),P("el-mina","المينا","le port"),P("el-bateau","","le bateau"),P("el-hotel","","l’hôtel")))+
S(2,"Billets et bagages",G(P("tiki","تيكي","billet"),P("el-passport","","le passeport"),P("valiza","","valise"),P("sak","","sac"),P("safar","سفر","voyage"),P("nsafer","نسافر","je voyage"),P("dkhoul","دخول","entrée"),P("khrouj","خروج","sortie"))+R("pour dire « je vais voyager », utilise le futur proche (leçon 29) : <i>rani rayeh nsafer</i>."))+
S(3,"À l’hôtel",G(P("ghorfa","غرفة","chambre"),P("n7ebb ghorfa","","je voudrais une chambre"),P("b-zouj lyali","","pour deux nuits"),P("gadach el-lila ?","","combien la nuit ?"),P("el-ftour","","le petit-déjeuner"),P("el-wifi","","le wifi"),P("el-mefta7","مفتاح","la clé")))+
S(4,"Dialogue à la gare",D(["Client","salam, n7ebb tiki l-Wahran, llah ykhallik.","Bonjour, je voudrais un billet pour Oran, s’il vous plaît."],["Vendeur","waqtach ?","Quand ?"],["Client","ghedwa fes-sba7.","Demain matin."],["Vendeur","mli7. Alf w miya dinar.","D’accord. Mille cent dinars."],["Client","hak. Saha !","Tenez. Merci !"]))+
S(5,"Dialogue à l’hôtel",D(["Client","salam, n7ebb ghorfa b-zouj lyali.","Bonjour, je voudrais une chambre pour deux nuits."],["Réceptionniste","mer7ba bik ! 3andek el-passport ?","Bienvenue ! Vous avez votre passeport ?"],["Client","ih, hak.","Oui, tenez."],["Réceptionniste","tfaddal, hada el-mefta7. El-ftour fes-sba7.","Voici la clé. Le petit-déjeuner est le matin."])),
q:[Q("« el-matar » signifie :",["l’aéroport","la gare","le port"],"el-matar = l’aéroport."),
Q("« el-gar » signifie :",["la gare","l’aéroport","l’hôtel"],"el-gar = la gare."),
Q("« el-mina » signifie :",["le port","la gare","la mer"],"el-mina = le port."),
Q("« tiki » signifie :",["billet","valise","passeport"],"tiki = billet."),
Q("« valiza » signifie :",["valise","sac","clé"],"valiza = valise."),
Q("« safar » signifie :",["voyage","retour","billet"],"safar = voyage."),
Q("« nsafer » signifie :",["je voyage","je reviens","j’arrive"],"nsafer = je voyage."),
Q("« ghorfa » signifie :",["chambre","clé","hôtel"],"ghorfa = chambre."),
Q("« b-zouj lyali » signifie :",["pour deux nuits","deux fois par jour","avec deux amis"],"lyali = les nuits."),
Q("« gadach el-lila ? » signifie :",["combien la nuit ?","quelle heure ?","où est la chambre ?"],"el-lila = la nuit."),
Q("« el-ftour » signifie :",["le petit-déjeuner","le dîner","la clé"],"el-ftour = le petit-déjeuner (et, pendant le Ramadan, le repas de rupture du jeûne)."),
Q("« dkhoul » signifie :",["entrée","sortie","billet"],"dkhoul = entrée, khrouj = sortie."),
V("« khrouj » veut dire « sortie ».",true,"khrouj = sortie."),
O("Remets en ordre : « Je voudrais une chambre »",["n7ebb","ghorfa"],"n7ebb + ghorfa."),
M("Associe chaque mot à sa traduction",[["tiyara","avion"],["el-train","train"],["el-kar","bus"],["el-bateau","bateau"]],"Quatre transports."),
C("salam, n7ebb ___ l-Wahran. (un billet)",["tiki","valiza","ghorfa"],"tiki = billet."),
I("✈️","Comment dit-on « avion » ?",["tiyara","el-kar","el-train"],"tiyara = avion.")]},

{id:"telephone",c:7,n:"Téléphone, internet et réseaux sociaux",e:"📱",h:Z("appeler, envoyer un message, parler d’internet et des réseaux sociaux.")+
S(1,"Le téléphone",G(P("el-portable","","le téléphone portable"),P("telefoun","","téléphone"),P("n3ayet","نعيط","j’appelle"),P("3ayet-li","","appelle-moi"),P("jaweb","جاوب","réponds"),P("messaj","","message"),P("nomra","","numéro"),P("a3tini nomrtek","","donne-moi ton numéro"))+R("<b>nomra</b> veut dire à la fois « numéro » et « pointure » (leçon 16) !"))+
S(2,"Internet et batterie",G(P("internet","","internet"),P("el-wifi","","le wifi"),P("ch-chbaka","الشبكة","le réseau"),P("ma kayen-ch ch-chbaka","","il n’y a pas de réseau"),P("ma 3andi-ch internet","","je n’ai pas internet"),P("el-batri","","la batterie"),P("khawya","خاوية","vide"),P("el-chargeur","","le chargeur"),P("n3emmer el-portable","","je charge mon téléphone")))+
S(3,"Les réseaux sociaux",G(P("fisbouk","","Facebook"),P("instagram","","Instagram"),P("whatsap","","WhatsApp"),P("tswira","تصويرة","photo"),P("nb3at tswira","","j’envoie une photo"),P("nb3at messaj","","j’envoie un message"),P("b3at-li","","envoie-moi"),P("tswira 3ajbetni","","j’ai aimé la photo"))+R("<b>3ajbetni</b> vient de <b>3ajbni</b> (ça me plaît, leçon 12) : <i>tswira 3ajbetni</i> = la photo m’a plu."))+
S(4,"Dialogue au téléphone",D(["Yacine","allo ? salam, wach rak ?","Allô ? Salut, comment vas-tu ?"],["Karim","labas, el-hamdoulillah. W nta ?","Ça va, Dieu merci. Et toi ?"],["Yacine","b-khir. Wayn rak drok ?","Bien. Où es-tu maintenant ?"],["Karim","rani fi ed-dar. Ma kayen-ch ch-chbaka hna.","Je suis à la maison. Il n’y a pas de réseau ici."],["Yacine","mli7, nb3at-lek messaj fel-whatsap.","D’accord, je t’envoie un message sur WhatsApp."],["Karim","mli7. Saha !","D’accord. Merci !"])),
q:[Q("« el-portable » signifie :",["le téléphone portable","le chargeur","la batterie"],"el-portable = le téléphone portable."),
Q("« n3ayet » signifie :",["j’appelle","j’envoie","je réponds"],"n3ayet = j’appelle."),
Q("« 3ayet-li » signifie :",["appelle-moi","réponds-moi","envoie-moi"],"3ayet-li = appelle-moi."),
Q("« jaweb » signifie :",["réponds","appelle","regarde"],"jaweb = réponds."),
Q("« messaj » signifie :",["message","numéro","photo"],"messaj = message."),
Q("« nomra » signifie :",["numéro (et pointure)","batterie","réseau"],"nomra = numéro, pointure."),
Q("« ch-chbaka » signifie :",["le réseau","le wifi","la batterie"],"ch-chbaka = le réseau."),
Q("« ma kayen-ch ch-chbaka » signifie :",["il n’y a pas de réseau","il y a du réseau","je n’ai pas de téléphone"],"ma … -ch = ne … pas."),
Q("« khawya » signifie :",["vide","pleine","cassée"],"el-batri khawya = la batterie est vide."),
Q("« tswira » signifie :",["photo","message","numéro"],"tswira = photo."),
Q("« nb3at messaj » signifie :",["j’envoie un message","je lis un message","j’efface un message"],"nb3at = j’envoie."),
Q("« b3at-li » signifie :",["envoie-moi","appelle-moi","regarde-moi"],"b3at = envoie."),
V("« nomra » peut vouloir dire « numéro » ou « pointure ».",true,"Le contexte précise le sens."),
O("Remets en ordre : « Appelle-moi demain »",["3ayet-li","ghedwa"],"3ayet-li + ghedwa."),
M("Associe chaque mot à sa traduction",[["el-batri","la batterie"],["el-chargeur","le chargeur"],["ch-chbaka","le réseau"],["tswira","photo"]],"Quatre mots du téléphone."),
C("rani fi ed-dar. Ma kayen-ch ___ hna. (le réseau)",["ch-chbaka","el-batri","messaj"],"ch-chbaka = le réseau."),
I("📱","Comment dit-on « téléphone portable » ?",["el-portable","el-wifi","el-chargeur"],"el-portable = téléphone portable.")]},

{id:"fetes",c:7,n:"Fêtes et traditions",e:"🎉",h:Z("comprendre les grandes fêtes d’Algérie et savoir souhaiter une bonne fête.")+
S(1,"Les grandes fêtes",G(P("el-3id","العيد","la fête"),P("3id el-fitr","عيد الفطر","l’Aïd de la fin du Ramadan"),P("el-3id el-kbir","العيد الكبير","l’Aïd du mouton (3id el-adha)"),P("el-kebch","الكبش","le mouton"),P("ramdhan","رمضان","le Ramadan"),P("yennayer","ينّاير","le Nouvel An amazigh"),P("5 juillet","","la fête de l’Indépendance"))+R("Yennayer se fête vers le <b>12 janvier</b> et c’est un jour férié en Algérie depuis 2018."))+
S(2,"Pendant le Ramadan",G(P("es-syam","الصيام","le jeûne"),P("nsoum","نصوم","je jeûne"),P("es-sehour","السحور","le repas avant l’aube"),P("el-ftour","الفطور","le repas de rupture du jeûne"),P("el-bourek","البوراك","le bourek (feuilleté farci)"),P("tmar","تمر","les dattes"),P("qalb el-louz","قلب اللوز","gâteau de semoule et d’amandes"))+R("tu connais déjà <b>chorba</b> (soupe) et <b>zlabia</b> : ce sont deux grands classiques de la table du Ramadan. Attention : <b>el-ftour</b> veut dire « petit-déjeuner » toute l’année, et « repas de rupture du jeûne » pendant le Ramadan."))+
S(3,"Souhaits et réponses",G(P("3id mbarek","","bonne fête"),P("saha aidkoum","","bonne fête (à vous)"),P("kol 3am w ntouma bkhir","","que chaque année vous trouve en bonne santé"),P("w ntouma bkhir","","et vous aussi"),P("ramdan karim","","Ramadan généreux (bon Ramadan)"),P("tqebbel Allah","","que Dieu accepte (nos prières, notre jeûne)"),P("assegas ameggaz","","bonne année (en tamazight)"))+R("on répond à un souhait par <b>w ntouma bkhir</b> (« et vous aussi »). À une seule personne : <i>w nta bkhir</i> (à un homme), <i>w nti bkhir</i> (à une femme)."))+
S(4,"Le mariage",G(P("el-3ors","العرس","le mariage"),P("el-3ris","العريس","le marié"),P("el-3rousa","العروسة","la mariée"),P("el-henna","الحنة","le henné"),P("mabrouk 3lik","","félicitations à toi"),P("mabrouk 3likoum","","félicitations à vous"))+D(["Karim","3id mbarek, Sofia !","Bonne fête, Sofia !"],["Sofia","3id mbarek ! saha aidkoum, kol 3am w ntouma bkhir.","Bonne fête ! Que chaque année vous trouve en bonne santé."],["Karim","w ntouma bkhir. kayen el-kebch ?","Et vous aussi. Il y a le mouton ?"],["Sofia","ah, kayen. ji 3andna ghedwa !","Oui, il y en a. Viens chez nous demain !"])),
q:[Q("« el-3id » signifie :",["la fête","la fin","la maison"],"el-3id = la fête."),
Q("« el-kebch » est :",["le mouton","la chèvre","le bœuf"],"el-kebch = le mouton de l’Aïd."),
Q("« es-syam » signifie :",["le jeûne","le repas","la prière"],"es-syam = le jeûne."),
Q("« nsoum » signifie :",["je jeûne","je mange","je dors"],"nsoum = je jeûne."),
Q("« es-sehour » est :",["le repas avant l’aube","le repas de midi","le dîner tardif"],"es-sehour = avant le début du jeûne."),
Q("« el-bourek » est :",["un feuilleté farci","une soupe","un fruit"],"el-bourek = feuilleté farci."),
Q("« tmar » signifie :",["les dattes","le pain","le lait"],"tmar = les dattes."),
Q("Yennayer est :",["le Nouvel An amazigh","la fête du mouton","la fin du Ramadan"],"Yennayer, vers le 12 janvier."),
Q("« saha aidkoum » est un souhait pour :",["la fête","l’anniversaire","le repas"],"On le dit à l’Aïd."),
Q("On répond à « kol 3am w ntouma bkhir » par :",["w ntouma bkhir","ma kayen-ch","bessa7a"],"w ntouma bkhir = et vous aussi."),
Q("« el-3ors » signifie :",["le mariage","la fête du mouton","l’anniversaire"],"el-3ors = le mariage."),
Q("« el-3rousa » désigne :",["la mariée","le marié","la sœur"],"el-3rousa = la mariée."),
Q("« mabrouk 3lik » signifie :",["félicitations à toi","bonne chance","bon appétit"],"mabrouk = félicitations."),
V("Yennayer est le Nouvel An amazigh.",true,"On le fête vers le 12 janvier."),
V("« el-ftour » veut dire seulement « dîner ».",false,"Petit-déjeuner toute l’année ; repas de rupture du jeûne au Ramadan."),
O("Remets en ordre : « Et vous aussi »",["w","ntouma","bkhir"],"w ntouma bkhir."),
M("Associe chaque mot à sa traduction",[["el-3ris","marié"],["el-3rousa","mariée"],["el-henna","henné"],["el-3ors","mariage"]],"Les mots du mariage."),
C("Réponds à « saha aidkoum » : ___ ntouma bkhir",["w","ma","fi"],"w = et."),
I("🐑","Quel mot darija correspond à ce dessin ?",["el-kebch","tmar","el-bourek"],"el-kebch = le mouton."),
I("🌙","Quel mot darija correspond à ce dessin ?",["ramdhan","yennayer","el-3ors"],"ramdhan = le Ramadan.")]},

{id:"dialogues",c:7,n:"Dialogues de la vie courante",e:"🗨️",h:Z("lire des conversations complètes et les comprendre en situation.")+
S(1,"Dans un taxi",D(["Client","salam, n7ebb nrou7 l-el-matar.","Bonjour, je voudrais aller à l’aéroport."],["Chauffeur","mli7, tfaddal.","D’accord, installe-toi."],["Client","gadach ?","Combien ça coûte ?"],["Chauffeur","alfin dinar.","Deux mille dinars."],["Client","ghali bezzaf ! Naqqes chwiya.","C’est trop cher ! Baisse un peu."],["Chauffeur","mli7, alf w khams miya.","D’accord, mille cinq cents."],["Client","mli7. 7bes hna, llah ykhallik. Hak. Saha !","D’accord. Arrête-toi ici, s’il te plaît. Tiens. Merci !"]))+
S(2,"Chez des amis",D(["Hôte","mer7ba bik ! Tfaddal, dkhol !","Bienvenue ! Entre, je t’en prie !"],["Invité","ya3tik es-sa7a. Kifach rah el-3ayla ?","Merci. Comment va la famille ?"],["Hôte","el-hamdoulillah, kolchi mli7. Ag3ed, rani njib el-qahwa.","Dieu merci, tout va bien. Assieds-toi, je t’apporte le café."],["Invité","ma tet3ab-ch rouhek.","Ne te dérange pas."],["Hôte","bla mziya. Bessa7a !","De rien. À ta santé !"])+R("<b>kolchi</b> = tout, <b>njib</b> = j’apporte, <b>ma tet3ab-ch rouhek</b> = ne te fatigue pas (formule de politesse)."))+
S(3,"Faire connaissance",D(["Sofia","salam ! Wach smitek ?","Salut ! Comment tu t’appelles ?"],["Karim","smiti Karim. W nti ?","Je m’appelle Karim. Et toi ?"],["Sofia","smiti Sofia. Men wayn nta ?","Je m’appelle Sofia. D’où viens-tu ?"],["Karim","ana men Qsentina, bsah rani saken f-Dzayer.","Je viens de Constantine, mais j’habite à Alger."],["Sofia","w wach tkhdem ?","Et que fais-tu comme travail ?"],["Karim","ana mohandis.","Je suis ingénieur."]))+
S(4,"Les phrases à garder en tête",G(P("gadach ?","","combien ?"),P("naqqes chwiya","","baisse un peu"),P("7bes hna","","arrête-toi ici"),P("ma fhemt-ch","","je n’ai pas compris"),P("3awed, llah ykhallik","","répète, s’il te plaît"),P("ya3tik es-sa7a","","merci"))),
q:[Q("Dans le taxi, où veut aller le client ?",["à l’aéroport","à la gare","à l’hôtel"],"« n7ebb nrou7 l-el-matar »."),
Q("Que dit le client quand le prix est trop élevé ?",["ghali bezzaf !","barka !","bslama !"],"ghali bezzaf = c’est trop cher."),
Q("Dans le taxi, que demande le client avec « naqqes chwiya » ?",["de baisser le prix","d’aller plus vite","de s’arrêter"],"naqqes = baisse : il marchande le prix de la course."),
Q("Pour arrêter le taxi, on dit :",["7bes hna","ro7 nichan","dour limen"],"7bes hna = arrête-toi ici."),
Q("Quel prix finit par accepter le client ?",["mille cinq cents (alf w khams miya)","deux mille (alfin)","cent (miya)"],"alf w khams miya = 1500."),
Q("Chez des amis, que veut dire « tfaddal, dkhol ! » ?",["entre, je t’en prie","au revoir","assieds-toi là-bas"],"tfaddal = je t’en prie ; dkhol = entre."),
Q("« kifach rah el-3ayla ? » signifie :",["comment va la famille ?","où est la famille ?","qui est ta famille ?"],"rah = il est ; el-3ayla = la famille."),
Q("« kolchi mli7 » signifie :",["tout va bien","rien ne va","un peu fatigué"],"kolchi = tout."),
Q("« rani njib el-qahwa » signifie :",["je t’apporte le café","je bois du café","j’achète du café"],"njib = j’apporte."),
Q("« ma tet3ab-ch rouhek » signifie :",["ne te dérange pas","ne pars pas","ne mange pas"],"Formule de politesse."),
Q("Karim vient de :",["Constantine (Qsentina)","Oran (Wahran)","Sétif (Stif)"],"« ana men Qsentina »."),
Q("Karim habite à :",["Alger (Dzayer)","Constantine","Oran"],"« rani saken f-Dzayer »."),
Q("Karim est :",["ingénieur","médecin","professeur"],"« ana mohandis »."),
V("Dans le dialogue 3, Sofia et Karim se disent « vous ».",false,"En darija, il n’y a pas de pluriel de politesse : ils se disent « tu »."),
O("Remets en ordre : « Arrête-toi ici, s’il te plaît »",["7bes","hna,","llah ykhallik"],"7bes hna + llah ykhallik."),
M("Associe chaque phrase à son sens",[["gadach ?","combien ?"],["7bes hna","arrête-toi ici"],["ma fhemt-ch","je n’ai pas compris"],["ya3tik es-sa7a","merci"]],"Phrases utiles."),
C("— Kifach rah el-3ayla ? — El-hamdoulillah, ___ mli7.",["kolchi","walou","bezzaf"],"kolchi = tout."),
I("🚕","Comment dit-on « taxi » ?",["taxi","el-kar","el-train"],"taxi se dit comme en français.")]},

{id:"dialogues2",c:7,n:"Dialogues de la vie courante (2)",e:"💬",h:Z("lire d’autres conversations complètes et les comprendre sans traduction mot à mot.")+
S(1,"Mots utiles pour ces dialogues",G(P("tji ?","","tu viens ?"),P("nji","","je viens"),P("ji !","","viens !"),P("3andna","","chez nous"),P("wa9tach ?","","quand ?"),P("yalla","","allez !"))+R("<b>3andi</b> = chez moi / j’ai, <b>3andna</b> = chez nous / nous avons."))+
S(2,"Une invitation au mariage",D(["Sofia","salam Karim ! wach rak ?","Salut Karim ! Comment vas-tu ?"],["Karim","labas. w nti ?","Ça va. Et toi ?"],["Sofia","labas. ghedwa kayen el-3ors 3andna. tji ?","Ça va. Demain il y a le mariage chez nous. Tu viens ?"],["Karim","mabrouk 3lik ! wa9tach ?","Félicitations ! C’est à quelle heure ?"],["Sofia","es-sa3a tmenya.","À huit heures."],["Karim","in cha Allah, nji.","Si Dieu le veut, je viens."]))+
S(3,"Après le match",D(["Karim","kifach kan el-match ?","Comment était le match ?"],["Amine","kan mli7 bezzaf, bsah el-jaw kan bared.","Il était très bien, mais il faisait froid."],["Karim","w nta, rak bared ?","Et toi, tu as froid ?"],["Amine","ah, rani bared bezzaf !","Oui, j’ai très froid !"]))+
S(4,"Faire connaissance au travail",D(["Nadia","salam, ana Nadia. wach tkhdem ?","Salut, je suis Nadia. Que fais-tu comme travail ?"],["Sami","ana mohandes. w nti ?","Je suis ingénieur. Et toi ?"],["Nadia","ana ostedha. nkhdem fel-madrasa.","Je suis professeure. Je travaille à l’école."],["Sami","mli7 ! nchoufek ghedwa.","Très bien ! À demain."]))+
S(5,"Pour l’Aïd",D(["Yacine","3id mbarek, Sara !","Bonne fête, Sara !"],["Sara","3id mbarek ! kol 3am w ntouma bkhir.","Bonne fête ! Que chaque année vous trouve en bonne santé."],["Yacine","w ntouma bkhir. kayen el-ftour 3andkoum ?","Et vous aussi. Il y a le repas chez vous ?"],["Sara","ah, kayen. ji 3andna !","Oui. Viens chez nous !"],["Yacine","bessa7a ! nji ghedwa.","Merci ! Je viens demain."])),
q:[Q("« tji ? » signifie :",["tu viens ?","tu vas ?","tu pars ?"],"tji = tu viens."),
Q("« nji » signifie :",["je viens","je pars","je reste"],"nji = je viens."),
Q("« 3andna » signifie :",["chez nous","chez toi","chez eux"],"-na = nous."),
Q("« wa9tach ? » signifie :",["quand ?","pourquoi ?","où ?"],"wa9tach = quand."),
Q("Dans l’invitation, Sofia invite Karim à :",["un mariage","un match","un cours"],"el-3ors = le mariage."),
Q("« es-sa3a tmenya » signifie :",["il est huit heures","il est neuf heures","il est midi"],"tmenya = 8."),
Q("« in cha Allah, nji » signifie :",["si Dieu le veut, je viens","je ne viens pas","viens demain"],"in cha Allah + nji."),
Q("Après le match, Amine dit que :",["il faisait froid","il pleuvait","il faisait chaud"],"el-jaw kan bared."),
Q("Nadia travaille :",["à l’école","à l’usine","au bureau"],"nkhdem fel-madrasa."),
Q("Sami est :",["ingénieur","professeur","boulanger"],"ana mohandes."),
Q("Pour l’Aïd, Yacine répond :",["w ntouma bkhir","ma kayen-ch","3awed"],"w ntouma bkhir = et vous aussi."),
Q("« ji 3andna ! » signifie :",["viens chez nous !","pars de chez nous !","reste chez toi !"],"ji = viens ; 3andna = chez nous."),
V("« 3andna » veut dire « chez moi ».",false,"-na = nous : chez nous."),
V("« wa9tach » sert à demander l’heure ou le moment.",true,"wa9tach = quand ?"),
O("Remets en ordre : « Demain, je viens »",["ghedwa","nji"],"ghedwa + nji."),
M("Associe chaque mot à sa traduction",[["nji","je viens"],["tji","tu viens"],["3andna","chez nous"],["wa9tach","quand"]],"Des mots des dialogues."),
C("Tu viens ? : ___ ?",["tji","nji","ji"],"tji = tu viens."),
C("À huit heures : es-sa3a ___",["tmenya","tes3a","setta"],"tmenya = 8.")]},

{id:"pieges",tool:1,n:"Pièges fréquents",e:"⚠️",h:Z("éviter les confusions les plus courantes quand on apprend le darija.")+
S(1,"Les mots qui se ressemblent",G(P("7mar ≠ 7mer","","âne ≠ rouge"),P("bsah ≠ bessa7a","","mais ≠ bon appétit"),P("khali ≠ khalti","","oncle maternel ≠ tante maternelle"),P("3ammi ≠ 3ammti","","oncle paternel ≠ tante paternelle"),P("kbir ≠ kbar","","grand ≠ plus grand"),P("tfa7 ≠ tfa7a","","les pommes ≠ une pomme")))+
S(2,"Les terminaisons",G(P("rak ≠ raki","","tu es (h) ≠ tu es (f)"),P("3andi ≠ 3andek","","j’ai ≠ tu as"),P("hada ≠ hadi","","celui-ci ≠ celle-ci"),P("hadi ≠ hadik","","celle-ci ≠ celle-là"),P("nekteb ≠ nektbou","","j’écris ≠ nous écrivons")))+
S(3,"Les oublis classiques",G(P("ma rani-ch","","ne pas oublier le -ch final"),P("zouj ≠ tnin","","2 (nombre) ≠ lundi (2e jour)"),P("rjel","","jambe ET pied"),P("nomra","","numéro ET pointure"),P("chta","","pluie ET hiver"))+R("quand tu hésites, relis l’encadré « À retenir » de la leçon concernée, puis refais le quiz de cette page.")),
q:[Q("Quelle est la différence entre « 7mar » et « 7mer » ?",["7mar = âne, 7mer = rouge","7mar = rouge, 7mer = âne","aucune"],"Une seule voyelle change tout."),
Q("« bsah » signifie :",["mais","bon appétit","merci"],"bsah = mais ; bessa7a = bon appétit."),
Q("« bessa7a » signifie :",["bon appétit","mais","au revoir"],"bessa7a = à ta santé, bon appétit."),
Q("La sœur de ma mère se dit :",["khalti","3ammti","khti"],"khalti = tante maternelle."),
Q("« 3ammi » désigne :",["l’oncle paternel","l’oncle maternel","le cousin"],"3ammi = oncle côté père."),
Q("« kbar men » signifie :",["plus grand que","très grand","plus petit que"],"kbar = plus grand."),
Q("« tfa7a » signifie :",["une pomme","les pommes","un pommier"],"tfa7a = une seule pomme."),
Q("À une femme, on dit :",["wach raki ?","wach rak ?","wach rani ?"],"raki = tu es (f)."),
Q("« 3andek » signifie :",["tu as","j’ai","il a"],"3andek = tu as."),
Q("« hadi » désigne :",["celle-ci (féminin, proche)","celui-ci","celle-là"],"hadi = féminin proche."),
Q("« nektbou » signifie :",["nous écrivons","j’écris","ils écrivent"],"n- … -ou = nous."),
Q("« zouj » signifie :",["2","lundi","20"],"zouj = 2 ; lundi se dit et-tnin."),
Q("« rjel » désigne :",["la jambe et le pied","seulement la main","le genou"],"rjel = jambe, pied."),
Q("« chta » peut signifier :",["pluie ou hiver","neige ou vent","soleil ou lune"],"chta = pluie, hiver."),
V("Pour dire « je ne suis pas », on peut oublier le -ch final.",false,"La négation est ma … -ch : ma rani-ch."),
M("Associe chaque mot à sa traduction",[["7mar","âne"],["7mer","rouge"],["bsah","mais"],["bessa7a","bon appétit"]],"Des mots qui se ressemblent."),
C("— hada weld ? — Non, ___ bent. (celle-ci)",["hadi","hada","hadik"],"hadi = celle-ci (féminin)."),
I("🫏","Comment dit-on « âne » ?",["7mar","7mer","7sen"],"7mar = âne ; 7mer = rouge.")]},

{id:"bilan",n:"Bilan final",e:"🏆",bilan:1,h:`<div class="card"><div class="big">🏆</div><h3>Bilan final</h3><p>20 questions tirées au hasard dans toutes les leçons. À chaque nouvel essai, les questions changent !</p></div>`+S("📌","Aide-mémoire avant le bilan",G(P("salam","سلام","salut"),P("wach rak ?","واش راك؟","comment vas-tu ?"),P("labas","لاباس","ça va"),P("ana / nta / nti","","je / tu (m) / tu (f)"),P("rani / rak / raki","","je suis / tu es (m) / tu es (f)"),P("shkoun ?","شكون","qui ?"),P("wayn ?","وين","où ?"),P("kifach ?","كيفاش","comment ?"),P("3lach ?","علاش","pourquoi ?"),P("el- / ed- / ech-","","le, la, les"),P("hada / hadi","","celui-ci / celle-ci"),P("ma … -ch","","ne … pas"),P("wahed, zouj, tlata","","1, 2, 3"),P("khamsa, 3achra","","5, 10"),P("hdach, 3chrin, miya","","11, 20, 100"),P("gadach ?","","combien ?"),P("kteb / nekteb","","il a écrit / j’écris"),P("3andi","","j’ai"))),q:[]}
];

// ---------- Questions variées ajoutées ----------
const EXTRA={
saluer:[M("Associe chaque mot à sa traduction",[["salam","salut"],["labas","ça va"],["ih","oui"],["bsah","mais"]],"Quatre mots pour commencer."),C("— wach rak ? — ___, el-hamdoulillah.",["labas","bsah","lala"],"labas = ça va.")],
sons:[M("Associe chaque son à sa description",[["ch","comme dans chat"],["kh","comme la jota espagnole"],["gh","comme le r parisien"],["7","h soufflé fort"]],"Quatre sons nouveaux."),I("📖","Comment dit-on « livre » ?",["ktab","kteb","kateb"],"ktab = livre ; kteb = il a écrit ; kateb = écrivain.")],
politesse:[M("Associe chaque formule à son sens",[["bla mziya","de rien"],["smah li","pardon"],["mer7ba","bienvenue"],["bslama","au revoir"]],"Quatre formules de politesse."),C("Quelqu’un te dit « mabrouk ». Tu réponds : ___",["llah ybarek fik","bla mziya","ma3lich"],"llah ybarek fik = merci (réponse à mabrouk).")],
pronoms:[M("Associe chaque pronom à sa traduction",[["ana","je"],["nta","tu (homme)"],["nti","tu (femme)"],["hna","nous"]],"Quatre pronoms."),C("___ fi ed-dar. (Je suis à la maison)",["rani","rak","rah"],"rani = je suis.")],
questions:[M("Associe chaque mot interrogatif à sa traduction",[["wayn","où"],["shkoun","qui"],["kifach","comment"],["3lach","pourquoi"]],"Quatre mots interrogatifs."),C("___ rah ? (Où est-il ?)",["wayn","shkoun","gadach"],"wayn = où.")],
article:[M("Associe chaque expression à sa traduction",[["el-ktab","le livre"],["hada","celui-ci"],["hadik","celle-là"],["had el-bent","cette fille"]],"Article et démonstratifs."),C("el-bent el-___ (la grande fille)",["kbira","kbir","kbar"],"Au féminin : kbira.")],
neg:[M("Associe chaque phrase à sa traduction",[["ma rani-ch","je ne suis pas"],["ma rak-ch","tu n’es pas"],["ma 3andi-ch","je n’ai pas"],["zouj","2"]],"Négation et nombres."),C("Ana ma ___ mrid. (Je ne suis pas malade)",["rani-ch","rani","nekteb-ch"],"ma rani-ch = je ne suis pas.")],
nombres:[M("Associe chaque nombre à sa valeur",[["hdach","11"],["3chrin","20"],["khamsin","50"],["miya","100"]],"Quatre nombres."),I("🖐️","Combien de doigts sur une main ?",["khamsa","arba3a","setta"],"Une main = 5 doigts = khamsa.")],
heure:[M("Associe chaque mot à sa traduction",[["el-7ed","dimanche"],["ej-jem3a","vendredi"],["ghedwa","demain"],["el-bare7","hier"]],"Jours et moments."),C("es-sa3a tlata ___ (3 h 30)",["w nos","w roub3","ghir roub3"],"w nos = et demie.")],
conj:[M("Associe chaque forme à sa traduction",[["kteb","il a écrit"],["nekteb","j’écris"],["yektbou","ils écrivent"],["3andi","j’ai"]],"Passé, présent et « avoir »."),C("___ ktab. (J’ai un livre)",["3andi","3andek","3andou"],"3andi = j’ai.")],
famille:[M("Associe chaque mot à sa traduction",[["yemma","maman"],["baba","papa"],["khouya","mon frère"],["khti","ma sœur"]],"La famille proche."),C("khali est l’oncle du côté de ___",["la mère","le père","la tante"],"khali = oncle maternel.")],
emotions:[M("Associe chaque mot à sa traduction",[["fer7an","content"],["7zin","triste"],["ji3an","qui a faim"],["3atchan","qui a soif"]],"Quatre états."),I("😢","Cette personne est…",["7zin","fer7an","za3fan"],"7zin = triste.")],
corps:[M("Associe chaque mot à sa traduction",[["ras","tête"],["yed","main"],["rjel","jambe, pied"],["qalb","cœur"]],"Quatre parties du corps."),I("👁️","Comment dit-on « œil » ?",["3in","wedn","fem"],"3in = œil.")],
couleurs:[M("Associe chaque couleur à sa traduction",[["byed","blanc"],["k7el","noir"],["7mer","rouge"],["khder","vert"]],"Quatre couleurs."),I("🍃","De quelle couleur est une feuille ?",["khder","zreg","sfer"],"khder = vert.")],
animaux:[M("Associe chaque animal à sa traduction",[["kelb","chien"],["qetta","chat"],["jmel","chameau"],["baqra","vache"]],"Quatre animaux."),I("🐪","Comment dit-on « chameau » ?",["jmel","7mar","7sen"],"jmel = chameau.")],
vetements:[M("Associe chaque mot à sa traduction",[["qamja","chemise"],["sebbat","chaussures"],["nadhdhara","lunettes"],["7zam","ceinture"]],"Vêtements et accessoires."),I("👟","Comment dit-on « chaussures » ?",["sebbat","qamja","chapo"],"sebbat = chaussures.")],
maison:[M("Associe chaque mot à sa traduction",[["bab","porte"],["tabla","table"],["korsi","chaise"],["mefta7","clé"]],"Objets de la maison."),I("🔑","Comment dit-on « clé » ?",["mefta7","bab","taqa"],"mefta7 = clé.")],
fruits:[M("Associe chaque mot à sa traduction",[["tfa7","pommes"],["tchina","oranges"],["limoun","citron"],["3neb","raisin"]],"Quatre fruits."),I("🍅","Comment dit-on « tomates » ?",["tomatich","bsel","batata"],"tomatich = tomates.")],
aliments:[M("Associe chaque mot à sa traduction",[["khobz","pain"],["7lib","lait"],["3sel","miel"],["zitoun","olives"]],"Quatre aliments."),I("🍯","Comment dit-on « miel » ?",["3sel","sokkar","mel7"],"3sel = miel.")],
resto:[M("Associe chaque mot à sa traduction",[["qahwa","café"],["atay","thé"],["el-7sab","l’addition"],["bnin","délicieux"]],"Au café et au restaurant."),C("Pour remercier la personne qui a cuisiné : ___",["saha yeddik","bessa7a","bslama"],"saha yeddik = santé à tes mains.")],
marche:[M("Associe chaque mot à sa traduction",[["es-souq","le marché"],["nos kilo","un demi-kilo"],["barka","ça suffit"],["naqqes","baisse"]],"Au marché."),C("— b-gadach el-kilo ? — ___ ! (C’est trop cher)",["ghali bezzaf","barka","hak"],"ghali bezzaf = c’est trop cher.")],
villes:[M("Associe chaque mot à sa traduction",[["mdina","ville"],["qarya","village"],["chari3","grande rue"],["zenqa","petite rue"]],"Lieux de vie."),I("🏔️","Comment dit-on « montagne » ?",["jbel","wad","bher"],"jbel = montagne.")],
deplacer:[M("Associe chaque mot à sa traduction",[["limen","à droite"],["lisser","à gauche"],["nichan","tout droit"],["qrib","près"]],"Les directions."),I("🚌","Comment dit-on « bus » ?",["el-kar","el-train","taxi"],"el-kar = le bus.")],
futur:[M("Associe chaque ordre à sa traduction",[["kteb !","écris !"],["ro7 !","va !"],["arwa7 !","viens !"],["noud !","lève-toi !"]],"Impératifs courants."),C("rani ___ nekteb (je vais écrire)",["rayeh","ghedwa","ma"],"rayeh + présent = futur proche.")]
};

Object.keys(EXTRA).forEach(id=>L0.find(l=>l.id==id).q.push(...EXTRA[id]));

// Questions gardées par leçon (une par notion de vocabulaire)
const QKEEP={"saluer":[2,3,6,9,10,11],"sons":[0,5,6,7,8,9,10,11],"politesse":[0,2,6,8,12,13,15,16],"pronoms":[2,4,5,7,8,9,10,12],"questions":[4,5,6,7,8,11,12],"article":[1,2,4,5,6,7,8,12],"neg":[2,4,6,7,8,9,10,12],"nombres":[1,2,3,6,9,14,15,16],"heure":[3,7,8,10,11,12,13,16],"conj":[4,7,10,11,14,15,16],"famille":[3,6,7,9,10,11,13,16],"emotions":[3,7,8,9,10,11,13,16],"corps":[1,2,3,7,8,13,16,17],"couleurs":[2,5,6,7,8,9,11,16],"animaux":[2,4,5,7,9,13,16,17],"vetements":[1,2,3,4,6,14,16,17],"maison":[1,2,3,5,6,7,12,15],"fruits":[0,2,3,4,5,9,17,20],"aliments":[2,3,4,5,6,7,18,20],"resto":[0,1,2,3,4,7,8,11],"marche":[1,6,7,10,11],"villes":[2,3,4,7,8,9,14,18],"deplacer":[3,5,6,7,8,12,14,16],"meteo":[0,4,7,8,9,10,11,12],"etudes":[0,3,4,5,6,7,12,13],"metiers":[3,5,6,8,9,14,15,16],"loisirs":[1,4,5,6,8,10,14,15],"sante":[0,1,2,3,7,12,13,14],"futur":[1,2,3,4,5,7,13,17],"voyages":[0,1,2,3,4,12,13,14],"telephone":[0,1,3,4,8,12,13,14],"fetes":[0,1,2,4,13,14,15,16],"dialogues":[0,1,2,4,5,6,13,14],"dialogues2":[4,5,7,8,9,10,14,15],"pieges":[3,4,5,6,7,8,14,15]};
L0.forEach(l=>{const k=QKEEP[l.id];if(k&&l.q)l.q=k.map(i=>l.q[i])});

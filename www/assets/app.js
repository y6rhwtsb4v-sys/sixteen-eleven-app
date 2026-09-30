(function(){
"use strict";
/* ================= THE GLOSSARY =================
   Old words whose meaning has moved since 1611, and the Bible's own terms,
   in plain modern English. Written for Sixteen Eleven rather than copied from
   an old dictionary, so the wording is ours. Where a word carries two senses
   in the KJV the entry says so instead of guessing which one is meant.

   Each entry: [headword, forms (space separated), kind, meaning]
   kind: o = an old word, t = a Bible term. Very common words (yea, verily,
   thee, hath) are left out on purpose: marking them would underline half
   the page. Words that are usually modern in sense but sometimes old (let,
   meet, sore, wax, tale, instant) carry a rule in GLOSS_RULES below, so only
   the old uses are marked. */
var GLOSSARY=[
["abase","abase abased abaseth","o","To humble; to bring someone low."],
["abide","abide abideth abode abiding","o","To stay, remain or dwell; also to endure or put up with."],
["abjects","abjects","o","Outcasts; the lowest and most despised of people."],
["adjure","adjure adjured","o","To charge someone solemnly, as if under oath."],
["advertise","advertise","o","To tell or inform someone."],
["afore","afore aforetime","o","Before; in times past."],
["agone","agone","o","Ago."],
["albeit","albeit","o","Although."],
["alms","alms almsdeeds","o","Gifts given to the poor."],
["amerce","amerce","o","To fine someone."],
["anon","anon","o","At once; immediately."],
["apace","apace","o","Quickly."],
["artificer","artificer artificers","o","A skilled craftsman."],
["assay","assay assayed assaying","o","To try or attempt something."],
["astonied","astonied","o","Astonished; stunned into silence."],
["athirst","athirst","o","Thirsty."],
["avouch","avouch avouched","o","To declare openly; to acknowledge."],
["bakemeats","bakemeats","o","Baked food, such as bread and cakes."],
["beeves","beeves","o","Oxen or cattle."],
["begat","begat beget begetteth begotten","o","Fathered; became the father of."],
["behoved","behoved","o","Was necessary or fitting."],
["beseech","beseech beseeching besought","o","To ask earnestly; to beg."],
["bestead","bestead","o","Placed or situated; “hardly bestead” means hard pressed."],
["betimes","betimes","o","Early; in good time."],
["bewray","bewray bewrayeth","o","To reveal or give away, often without meaning to."],
["bier","bier","o","A frame on which the dead are carried."],
["blains","blains blain","o","Boils or blisters on the skin."],
["bolled","bolled","o","Formed seed pods, of flax ready to ripen."],
["bondmaid","bondmaid bondmaids bondman bondmen","o","A slave, woman or man."],
["bowels","bowels","o","The inward parts; used for deep feeling, especially compassion."],
["bruit","bruit","o","A report or rumour."],
["buckler","buckler bucklers","o","A small round shield."],
["caul","caul cauls","o","A covering or membrane; in the sacrifices, the fat over the liver."],
["chambering","chambering","o","Sexual immorality."],
["chapiter","chapiter chapiters","o","The top of a pillar."],
["chapmen","chapmen","o","Travelling traders."],
["charger","charger chargers","o","A large dish or platter."],
["charity","charity","o","Love, especially the self-giving love of God."],
["churl","churl churlish","o","A mean, grasping person."],
["clave","clave cleave cleaveth","o","To cling closely to. In some verses “cleave” means the opposite: to split apart."],
["clouted","clouted","o","Patched."],
["coast","coast coasts","o","A border or region; the territory within it, not only a seashore."],
["cockatrice","cockatrice cockatrices","o","A venomous serpent."],
["cogitation","cogitation cogitations","o","Thought."],
["comely","comely comeliness","o","Attractive; fitting or proper."],
["compass","compass compassed compasseth","o","To go around; to surround."],
["concupiscence","concupiscence","o","Strong desire, especially wrong desire."],
["confection","confection","o","A compound or blend, such as a perfume."],
["coney","coney conies","o","The rock badger, a small animal living among rocks."],
["conversation","conversation","o","Your way of life and conduct, not only your speech."],
["corn","corn","o","Grain of any kind, such as wheat or barley. Not maize."],
["countervail","countervail","o","To make up for; to equal."],
["cracknels","cracknels","o","Thin, hard cakes."],
["cruse","cruse","o","A small jar or flask."],
["dayspring","dayspring","o","The dawn."],
["dearth","dearth","o","Famine; scarcity."],
["denounce","denounce","o","To announce or declare."],
["deputy","deputy","o","In Acts, a Roman provincial governor."],
["discomfited","discomfit discomfited discomfiture","o","Defeated; thrown into confusion."],
["dissemble","dissemble dissembled","o","To disguise your true intent."],
["divers","divers","o","Various; several different."],
["dote","dote doting","o","To act foolishly; to be obsessed."],
["dropsy","dropsy","o","A swelling of the body with fluid."],
["durst","durst","o","Dared."],
["earing","earing","o","Ploughing."],
["emerods","emerods","o","Tumours or swellings; possibly haemorrhoids."],
["enjoin","enjoin enjoined","o","To command."],
["ensample","ensample ensamples","o","An example."],
["ensign","ensign","o","A banner or standard."],
["entreat","entreat entreated intreat intreated","o","To treat or deal with someone; also to plead with them."],
["eschew","eschew eschewed","o","To avoid; to keep away from."],
["espoused","espouse espoused","o","Engaged to be married."],
["estate","estate","o","Condition or state in life."],
["exactor","exactor exactors","o","A tax collector; an oppressor."],
["fain","fain","o","Gladly; would gladly."],
["feign","feign feigned","o","To pretend."],
["firmament","firmament","o","The expanse of the sky."],
["fitches","fitches","o","A kind of seed, probably black cumin."],
["flagon","flagon flagons","o","A flask; in some verses, a cake of pressed raisins."],
["flux","flux","o","Dysentery."],
["forasmuch","forasmuch","o","Since; seeing that."],
["fray","fray","o","To frighten away."],
["froward","froward frowardness","o","Stubbornly perverse; contrary."],
["fuller","fuller fullers","o","A cleaner and whitener of cloth."],
["gainsay","gainsay gainsaying gainsayers","o","To contradict or oppose."],
["garner","garner garners","o","A granary; a storehouse."],
["gat","gat","o","Got; went."],
["ghost","ghost","o","Spirit. “Gave up the ghost” means died; the Holy Ghost is the Holy Spirit."],
["gin","gin gins","o","A trap or snare."],
["girdle","girdle girdles girded girt","o","A belt or sash; to girdle is to fasten one on."],
["glistering","glistering","o","Glittering; shining."],
["goodman","goodman","o","The master of the house."],
["graven","graven","o","Carved. A graven image is an idol."],
["greaves","greaves","o","Armour for the lower legs."],
["habergeon","habergeon habergeons","o","A coat of mail."],
["haft","haft","o","The handle of a blade."],
["haply","haply","o","Perhaps; by chance."],
["harness","harness","o","Armour."],
["hart","hart harts","o","A male deer."],
["heretofore","heretofore","o","Before this time."],
["hireling","hireling","o","A hired worker."],
["hitherto","hitherto","o","Until now."],
["holden","holden","o","Held."],
["holpen","holpen","o","Helped."],
["husbandman","husbandman husbandmen","o","A farmer."],
["husbandry","husbandry","o","Farming; a field under cultivation."],
["implead","implead","o","To bring charges in court."],
["importunity","importunity","o","Persistence in asking."],
["inditing","inditing","o","Composing; putting into words."],
["infidel","infidel","o","An unbeliever."],
["inquisition","inquisition","o","A careful inquiry or search."],
["instant","instant instantly","o","Urgent and persistent."],
["jot","jot","o","The smallest letter; the least detail."],
["kine","kine","o","Cows; cattle."],
["knop","knop knops","o","An ornamental knob, shaped like a bud."],
["laver","laver lavers","o","A large washing basin."],
["leasing","leasing","o","Lying; falsehood."],
["let","let letteth","o","To hinder or hold back. (Elsewhere “let” means allow, as it does today.)"],
["lewd","lewd lewdness","o","Wicked; vile. Not only in the sexual sense."],
["listeth","listeth listed","o","Wishes; chooses."],
["lively","lively","o","Living."],
["lucre","lucre","o","Money; gain, especially dishonest gain."],
["mammon","mammon","o","Wealth, treated as a rival master."],
["meat","meat meats","o","Food of any kind, not only flesh. A “meat offering” was an offering of grain."],
["meet","meet","o","Fitting; proper; suitable."],
["mete","mete meted","o","To measure out."],
["minish","minish minished","o","To diminish; to reduce."],
["mischief","mischief mischiefs","o","Harm; evil."],
["murrain","murrain","o","A plague on livestock."],
["naught","naught","o","Nothing; also bad or worthless."],
["neesings","neesings","o","Sneezings."],
["nigh","nigh","o","Near."],
["noisome","noisome","o","Harmful; deadly."],
["occupy","occupy occupied","o","To trade or do business; also to use."],
["offend","offend offended offendeth","o","Often “to cause to stumble” or fall into sin."],
["ouches","ouches","o","Settings for precious stones."],
["outlandish","outlandish","o","Foreign."],
["overcharged","overcharged","o","Weighed down."],
["pate","pate","o","The top of the head."],
["peradventure","peradventure","o","Perhaps."],
["perdition","perdition","o","Destruction; ruin."],
["pilled","pilled","o","Peeled."],
["plaister","plaister","o","Plaster."],
["potsherd","potsherd potsherds sherd sherds","o","A broken piece of pottery."],
["prating","prating","o","Chattering; idle talk."],
["prevent","prevent prevented preventest","o","To go before or come before, not to stop."],
["privily","privily","o","Secretly."],
["psaltery","psaltery psalteries","o","A stringed instrument, plucked like a harp."],
["purtenance","purtenance","o","The inner parts of an animal."],
["quaternion","quaternion quaternions","o","A squad of four soldiers."],
["quick","quick","o","Living. “The quick and the dead” are the living and the dead."],
["quicken","quicken quickened quickeneth","o","To make alive."],
["raiment","raiment","o","Clothing."],
["ravening","ravening ravin","o","Greedy for prey; prey itself."],
["reins","reins","o","The kidneys; the inmost self, the seat of feeling."],
["rent","rent","o","Torn."],
["repent","repent repented repenteth","o","To change your mind and turn around. Of God, to relent."],
["requite","requite requited","o","To repay."],
["rereward","rereward","o","The rear guard."],
["ringstraked","ringstraked","o","Marked with stripes or rings."],
["riotous","riotous","o","Wasteful; extravagant."],
["ruddy","ruddy","o","Black."],
["sackbut","sackbut","o","A stringed instrument."],
["scall","scall","o","A scab; a skin disease."],
["scrip","scrip","o","A small bag or pouch."],
["seethe","seethe sod sodden","o","To boil; boiled."],
["shambles","shambles","o","A meat market."],
["shittim","shittim","o","Acacia wood."],
["sith","sith","o","Since."],
["slime","slime","o","Bitumen; natural tar."],
["sore","sore","o","Greatly; very: “sore afraid” is very afraid. Sometimes painful or aching."],
["sottish","sottish","o","Foolish; stupid."],
["stomacher","stomacher","o","A rich garment."],
["strait","strait straitened","o","Narrow; hard pressed."],
["strake","strake","o","Struck; in Acts 27, lowered."],
["stripes","stripe stripes","o","Blows or lashes; the wounds they leave."],
["suborned","suborned","o","Secretly paid to lie."],
["succour","succour succoured","o","To help."],
["suffer","suffer suffered suffereth sufferest","o","Usually “to allow”; sometimes to endure pain."],
["superfluity","superfluity","o","Excess."],
["surfeiting","surfeiting","o","Overindulgence."],
["swaddling","swaddling","o","Strips of cloth for wrapping a newborn."],
["tabret","tabret tabrets","o","A small drum; a tambourine."],
["tache","tache taches","o","A clasp."],
["tale","tale","o","A count or number, as in counting bricks."],
["tarry","tarry tarried tarrieth","o","To wait; to stay."],
["thither","thither","o","There; to that place."],
["tire","tire tires","o","A headdress."],
["tittle","tittle","o","A tiny mark in a letter; the least detail."],
["trow","trow","o","To think; to suppose."],
["twain","twain","o","Two."],
["unction","unction","o","Anointing."],
["unwittingly","unwittingly","o","Unintentionally."],
["usury","usury","o","Interest charged on a loan."],
["vale","vale","o","A valley."],
["vesture","vesture","o","A garment."],
["victuals","victual victuals","o","Food; provisions."],
["wax","wax waxed waxen waxeth","o","To grow or become, as in “waxed old”."],
["wench","wench","o","A young woman; a servant girl."],
["whit","whit","o","The least bit; “every whit” means entirely."],
["wimples","wimples","o","Shawls; cloaks."],
["wist","wist","o","Knew."],
["withal","withal","o","As well; besides."],
["wont","wont","o","Accustomed; in the habit of."],
["wot","wot wotteth","o","Know; knows."],
["wrest","wrest","o","To twist or distort."],
["wroth","wroth","o","Angry."],
["wrought","wrought","o","Worked; made."],
["yesternight","yesternight","o","Last night."],
["abba","abba","t","Father, in Aramaic: a close, familiar word for a father."],
["anathema","anathema","t","Accursed; set apart for destruction."],
["atonement","atonement","t","Reconciliation with God, making sinners “at one” with Him."],
["bath","bath baths","t","A liquid measure of about 22 litres."],
["belial","belial","t","Worthlessness. Later a name for Satan."],
["bushel","bushel","t","A measuring basket for grain."],
["centurion","centurion centurions","t","A Roman officer over a hundred soldiers."],
["cherubims","cherub cherubims","t","Winged heavenly beings who guard God’s holiness."],
["corban","corban","t","A gift dedicated to God."],
["covenant","covenant covenants","t","A binding agreement, such as God’s promises to His people."],
["cubit","cubit cubits","t","About 18 inches, the length of a forearm."],
["emmanuel","emmanuel immanuel","t","“God with us.”"],
["ephah","ephah","t","A dry measure of about 22 litres."],
["ephod","ephod","t","The high priest’s embroidered vest; sometimes an object used in idolatry."],
["farthing","farthing farthings","t","The smallest Roman coin."],
["firstfruits","firstfruits","t","The first part of the harvest, given to God."],
["gentiles","gentile gentiles","t","The nations; people who are not Jewish."],
["golgotha","golgotha","t","“The place of a skull,” where Jesus was crucified."],
["hallowed","hallow hallowed","t","Made holy; set apart for God."],
["hin","hin","t","A liquid measure of about 4 litres."],
["homer","homer","t","A dry measure of about 220 litres."],
["hosanna","hosanna","t","“Save, we pray”; a cry of praise."],
["hyssop","hyssop","t","A small plant used in cleansing rites."],
["jubile","jubile","t","The fiftieth year, when land returned to its owners and slaves were freed."],
["leaven","leaven leavened","t","Yeast. Often a picture of corruption spreading."],
["levites","levite levites","t","Members of the tribe of Levi, who served at the sanctuary."],
["manna","manna","t","The bread from heaven that fed Israel in the wilderness."],
["maranatha","maranatha","t","“Our Lord, come.”"],
["messias","messiah messias","t","The Anointed One; in Greek, Christ."],
["mite","mite mites","t","A very small coin."],
["myrrh","myrrh","t","A fragrant resin used in perfume and burial."],
["omer","omer","t","A dry measure of about 2 litres, a day’s manna."],
["passover","passover","t","The feast remembering Israel’s deliverance from Egypt."],
["pentecost","pentecost","t","The Feast of Weeks, fifty days after Passover."],
["pharisees","pharisee pharisees","t","A Jewish party devoted to strict keeping of the law and its traditions."],
["phylacteries","phylacteries","t","Small boxes holding verses of scripture, worn on the forehead and arm."],
["proselyte","proselyte proselytes","t","A convert to the Jewish faith."],
["publican","publican publicans","t","A tax collector for Rome, widely despised."],
["raca","raca","t","“Empty-head”; an insult."],
["rabbi","rabbi rabboni","t","Teacher; master."],
["sabbath","sabbath sabbaths","t","The seventh day, set apart for rest."],
["sadducees","sadducee sadducees","t","A priestly Jewish party who denied the resurrection."],
["scribes","scribe scribes","t","Experts in copying and teaching the law."],
["selah","selah","t","A word in the Psalms of uncertain meaning, probably a musical pause."],
["seraphims","seraphims","t","“Burning ones”; heavenly beings around God’s throne."],
["shekel","shekel shekels","t","A weight of about 11 grams, and a coin of that weight."],
["span","span","t","About 9 inches: the width of a spread hand."],
["synagogue","synagogue synagogues","t","A place where Jews gathered to pray and read scripture."],
["tabernacle","tabernacle tabernacles","t","The tent where God dwelt among Israel; also any tent or dwelling."],
["talent","talent talents","t","A large weight, about 34 kilograms; also a great sum of money."],
["tares","tares","t","Weeds that look like wheat while they grow."],
["tithe","tithe tithes","t","A tenth, given to God."],
["unleavened","unleavened","t","Made without yeast."],
["urim","urim thummim","t","Objects the high priest used to seek God’s will."]
];

/* Words whose everyday modern sense is the usual one in the KJV too. Only the
   old uses are marked:
     only                - these verses and no others (book chapter:verse)
     before / after      - mark only if the words just before, or just
                           after, match (either one is enough)
     notBefore / notAfter- skip when the words on that side match
     form                - the rule applies to this spelling only */
var GLOSS_RULES={
  let:{only:['Isaiah 43:13','Romans 1:13','2 Thessalonians 2:7','Exodus 5:4']},
  tale:{only:['Exodus 5:8','Exodus 5:18','1 Samuel 18:27','1 Chronicles 9:28']},
  meet:{before:/\b(is|was|be|not|it|help|seemed|seemeth|thought|more|very|were|are|as)\s+$/i,
        after:/^\s+(for|to be|that)\b/i},
  sore:{notBefore:/\b(a|the|his|her|my|thy|any|every|their|of)\s+$/i,
        notAfter:/^\s+(or|and)\s+(sickness|blain|boil)/i},
  wax:{form:'wax',notBefore:/\b(as|like|the|of|is)\s+$/i,notAfter:/^\s+(melteth|melted)/i},
  instant:{form:'instant',notBefore:/\b(an|what|the|that)\s+$/i}
};

/* the build wraps this in an IIFE and adds "use strict" itself */
/* The one-file build inlines its data in <script id="META"> and
   <script id="BIBLE">; the hosted build ships them as files and fetches them.
   Reading the elements unconditionally threw on the hosted build before a
   single line rendered, which is what left it stuck on "Loading the
   scriptures". Absent elements are now simply absent. */
function inlineJSON(id){
  try{
    var el=document.getElementById(id);
    if(!el||!el.textContent) return null;
    return JSON.parse(el.textContent);
  }catch(e){ return null; }
}
var META=inlineJSON('META');
var BIBLE=inlineJSON('BIBLE')||{};
var view=document.getElementById('view'), topbar=document.getElementById('top'),
    nav=document.getElementById('nav'), scrim=document.getElementById('scrim'),
    phone=document.getElementById('phone'),
    drawer=document.getElementById('drawer'), toc=document.getElementById('toc'),
    sheet=document.getElementById('sheet');

/* These index META, so they cannot be built while META is still null. The
   one-file build has it immediately; the hosted build fetches it, and then
   indexData() fills these in before anything renders. */
var ERA={}, SEC={}, BOOKS=[], FACTS=null, ALIAS={};
function buildIndexes(){
  if(!META) return false;
  ERA={}; (META.eras||[]).forEach(function(e){ ERA[e.key]=e; });
  SEC={}; (META.sections||[]).forEach(function(s){ SEC[s.key]=s; });
  BOOKS=META.books||[]; FACTS=META.facts; ALIAS=META.aliases||{};
  return true;
}
function indexData(){ if(buildIndexes()) reindex(); }
buildIndexes();

/* ---------- scripture reference parsing ----------
   Turns free text like "Matthew 19:16-17; Eccl. 12:13; Leviticus 11" into
   resolvable references, so study-sheet entries link straight to the text.
   Anything that will not resolve is kept as a plain label rather than dropped. */
function normName(s){
  return s.toLowerCase().replace(/\./g,'').replace(/\s+/g,' ')
          .replace(/^([123])\s*/,'$1 ').trim();
}
function lookupBook(name){
  var n=normName(name);
  if(ALIAS[n]!==undefined) return ALIAS[n];
  n=n.replace(/s$/,'');
  if(ALIAS[n]!==undefined) return ALIAS[n];
  for(var i=0;i<BOOKS.length;i++)
    if(normName(BOOKS[i].name)===n) return i;
  return -1;
}
function parseRefs(text){
  if(!text) return [];
  var out=[], parts=String(text).split(/[;,]/), lastBook=-1;
  parts.forEach(function(raw){
    var p=raw.trim(); if(!p) return;
    // "Book 12:3-4" | "Book 12" | "12:3" (carries the previous book)
    // book, then a number that may be a chapter or (in one-chapter books) a
    // verse, either of which may carry a range, then an optional :verse[-verse]
    var m=p.match(/^([1-3]?\s*[A-Za-z][A-Za-z\s.']*?)\s*(\d+)(?:\s*[-\u2013]\s*(\d+))?(?::(\d+)(?:\s*[-\u2013]\s*(\d+))?)?$/);
    var bi,c,v1,v2;
    if(m){
      bi=lookupBook(m[1]);
      c=+m[2];
      v1=m[4]?+m[4]:null;
      v2=m[5]?+m[5]:null;
      if(v1===null && m[3]) v2=+m[3];   // a range on the first number
    } else {
      var m2=p.match(/^(\d+):(\d+)(?:\s*[-\u2013]\s*(\d+))?$/);
      if(m2&&lastBook>=0){ bi=lastBook; c=+m2[1]; v1=+m2[2]; v2=m2[3]?+m2[3]:null; }
      else { out.push({label:p, ok:false}); return; }
    }
    if(bi<0||!BOOKS[bi]){ out.push({label:p, ok:false}); return; }
    lastBook=bi;
    var nch=BOOKS[bi].nch;
    // Single-chapter books are cited by bare verse: "2 John 6", "Jude 14-15".
    if(nch===1 && v1===null){ v1=c; c=1; }
    else if(v1===null){ v2=null; }      // "Genesis 1-3" is a chapter span; open the first
    if(!(c>=1&&c<=nch)){ out.push({label:p, ok:false}); return; }
    var label=BOOKS[bi].name+' '+(nch===1
      ? (v1?v1+(v2&&v2!==v1?'-'+v2:''):'')
      : c+(v1?':'+v1+(v2&&v2!==v1?'-'+v2:''):''));
    // Verse divisions in the Apocrypha come from an OCR'd scan and a few are
    // merged, so a real reference can sit past the end of our chapter. Keep the
    // link, aim it at the chapter, and mark it so the label can say why.
    var len=(BIBLE[String(bi)]&&BIBLE[String(bi)][String(c)])
            ? BIBLE[String(bi)][String(c)].length : 0;
    var approx=false;
    if(v1 && len && v1>len){ approx=true; v1=null; v2=null; }
    out.push({b:bi, c:c, v1:v1, v2:v2, ok:true, approx:approx, label:label});
  });
  return out;
}




/* ---------- lazy book loading ----------
   The single-file build has every book already. The hosted build fetches one
   book at a time, so the app can paint after ~100 KB instead of 4.8 MB. Any
   book that has not arrived yet reads as empty rather than throwing, and the
   view is redrawn when it lands. */
var CHCOUNT=null;          /* chapters per book, from index.json */
var LOADING={}, LOADED={};
function bookLoaded(i){ return !!(BIBLE&&BIBLE[String(i)]); }
function allBooksLoaded(){
  if(!CHCOUNT) return true;             /* single-file build: nothing to fetch */
  for(var i=0;i<80;i++) if(!bookLoaded(i)) return false;
  return true;
}
function fetchBook(i){
  if(!CHCOUNT) return Promise.resolve();          /* already inline */
  if(bookLoaded(i)) return Promise.resolve();
  if(LOADING[i]) return LOADING[i];
  var url;
  try{ url=new URL('assets/data/books/'+i+'.json', document.baseURI).href; }
  catch(e){ url='assets/data/books/'+i+'.json'; }
  LOADING[i]=fetch(url).then(function(r){
    if(!r.ok) throw new Error('book '+i+': '+r.status);
    return r.json();
  }).then(function(d){
    BIBLE[String(i)]=d; LOADED[i]=1; delete LOADING[i];
  }).catch(function(e){
    delete LOADING[i];
    throw e;
  });
  return LOADING[i];
}
/* Pull the remaining books in the background, a few at a time, so search and
   cross-references become complete without blocking the first read. */
function backfillBooks(){
  if(!CHCOUNT) return;
  var queue=[];
  for(var i=0;i<80;i++) if(!bookLoaded(i)) queue.push(i);
  if(!queue.length){ renderBackfill(); return; }
  var active=0, done=0, total=queue.length;
  function next(){
    if(!queue.length){
      if(active===0){ S.backfill=0; renderBackfill(); }
      return;
    }
    if(active>=4) return;
    var i=queue.shift(); active++;
    fetchBook(i).catch(function(){}).then(function(){
      active--; done++;
      S.backfill=Math.round(100*done/total);
      if(done%12===0||!queue.length) renderBackfill();
      next();
    });
    next();
  }
  S.backfill=1; renderBackfill();
  next();
}
function renderBackfill(){
  var el=document.getElementById('backfill');
  if(!el) return;
  el.innerHTML=(S.backfill&&S.backfill<100)
    ? '<div class="bf"><span class="spin"></span>Loading the rest of the '+
      'scriptures\u2026 '+S.backfill+'%</div>'
    : '';
}
/* Open a book, fetching it first if necessary. */
function isPhone(){
  try{
    var w=(screen&&screen.width)||window.innerWidth||0;
    var h=(screen&&screen.height)||window.innerHeight||0;
    return Math.min(w,h)>0 && Math.min(w,h)<600;
  }catch(e){ return false; }
}
function lockPortrait(){
  if(S.lockRotate!==true) return false; /* off unless the reader asks for it */
  if(!isPhone()) return false;          /* tablets keep landscape */
  try{
    if(screen&&screen.orientation&&screen.orientation.lock){
      var p=screen.orientation.lock('portrait');
      if(p&&p.catch) p.catch(function(){});
      return true;
    }
  }catch(e){}
  return false;
}

/* ---------- scrolling ----------
   #view is the scroller, but the library panel is tall enough to make the page
   itself scroll on some phones. Resetting only one of them left a newly opened
   book sitting half way down. */
function scrollToTop(instant){
  try{ view.scrollTop=0; }catch(e){}
  try{
    if(typeof window!=='undefined'&&window.scrollTo){
      if(instant) window.scrollTo(0,0);
      else window.scrollTo({top:0,behavior:'smooth'});
    }
  }catch(e){ try{ window.scrollTo(0,0); }catch(e2){} }
  if(!instant){
    try{ view.scrollTo({top:0,behavior:'smooth'}); }catch(e){ view.scrollTop=0; }
  }
  showTopBtn(false);
}
function scrolled(){
  var a=0,b=0;
  try{ a=view.scrollTop||0; }catch(e){}
  try{ b=(window.pageYOffset||document.documentElement.scrollTop||0); }catch(e){}
  return Math.max(a,b);
}
function showTopBtn(on){
  var el=document.getElementById('totop');
  if(!el) return;
  if(el.classList) el.classList.toggle('on', !!on);
}
/* ---------- the floating back arrow ----------
   Scroll down any screen and a small arrow hovers at the top left: one tap
   goes back to whatever you were looking at before. It only shows when there
   is somewhere to go back to, and each side of a tablet has its own. */
function backFloat(pane){
  if(!pane||!pane.querySelector) return null;
  var b=pane.querySelector('.backfloat');
  if(!b&&document.createElement){
    b=document.createElement('button');
    b.className='backfloat'; b.setAttribute('data-a','navback');
    b.setAttribute('aria-label','Go back'); b.setAttribute('title','Go back');
    b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
    if(pane.appendChild) pane.appendChild(b);
  }
  return b;
}
function updateBackFloat(pane, v){
  try{
    var b=backFloat(pane); if(!b||!b.classList) return;
    var top=pane.querySelector('.top');
    var h=(top&&top.offsetHeight&&getComputedStyle(top).display!=='none')?top.offsetHeight:0;
    b.style.top=h?(h+10)+'px':'';      /* no bar: the stylesheet clears the notch */
    var can=pane.getAttribute('data-canback')==='1';
    b.classList.toggle('on', can&&(v.scrollTop||0)>260);
  }catch(e){}
}
function watchBack(){
  ['view','view2'].forEach(function(id){
    var v=document.getElementById(id);
    if(!v||!v.addEventListener||v.__back) return;
    v.__back=1;
    var pane=v.parentNode;
    v.addEventListener('scroll',function(){ updateBackFloat(pane, v); },{passive:true});
  });
}
function watchScroll(){
  watchBack();
  if(S.scrollWatched) return;
  S.scrollWatched=1;
  var tick=function(){ showTopBtn(scrolled()>420); };
  try{ view.addEventListener('scroll',tick,{passive:true}); }catch(e){}
  try{ window.addEventListener('scroll',tick,{passive:true}); }catch(e){}
}

/* ---------- taking notes off the device ----------
   The full backup is JSON, meant for restoring. This is the readable version:
   references, the verse, and what you wrote, in a form you can paste anywhere
   or keep in a file. */
function notesAsText(){
  if(!S.notes.length) return '';
  var out=['Sixteen Eleven \u2014 my notes',
           new Date().toLocaleDateString(),
           ''];
  var list=S.notes.slice().sort(function(a,b){
    if(a.b==null) return 1;
    if(b.b==null) return -1;
    return a.b-b.b || a.c-b.c || a.v-b.v;
  });
  list.forEach(function(n){
    if(n.b==null){
      out.push('Unfiled');
    } else {
      out.push(vRef(n.b,n.c,n.v));
      var t=vText(n.b,n.c,n.v);
      if(t) out.push('  "'+t+'"');
    }
    out.push('  '+String(n.body||'').replace(/\n/g,'\n  '));
    out.push('');
  });
  return out.join('\n');
}
function copyNotes(){
  var t=notesAsText();
  if(!t) return Promise.resolve(false);
  if(navigator.clipboard&&navigator.clipboard.writeText)
    return navigator.clipboard.writeText(t).then(function(){return true;})
      .catch(function(){ return legacyCopy(t); });
  return Promise.resolve(legacyCopy(t));
}
/* Saving a file. A browser downloads it; the store apps cannot download, so
   there it is written to the app's cache and handed to the share sheet, where
   Save to Files, Photos, Mail and the rest live. */
function saveFile(name, blob){
  if(payNative()) return nativeShareFile(name, blob);
  try{
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    a.href=url; a.download=name;
    /* the app's own tap handler must not see this click: it would read it as
       a tap outside whatever is open and close it */
    a.addEventListener('click', function(ev){ ev.stopPropagation(); });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(url); },2000);
    return Promise.resolve({ok:true});
  }catch(e){ return Promise.resolve({ok:false}); }
}
function nativeShareFile(name, blob){
  var C=window.Capacitor, FS, SH;
  try{ FS=C.registerPlugin('Filesystem'); SH=C.registerPlugin('Share'); }catch(e){ return Promise.resolve({ok:false}); }
  return new Promise(function(res, rej){
    var r=new FileReader();
    r.onload=function(){ res(String(r.result).split(',')[1]||''); };
    r.onerror=function(){ rej(r.error); };
    r.readAsDataURL(blob);
  }).then(function(b64){
    return FS.writeFile({path:name, data:b64, directory:'CACHE'});
  }).then(function(w){
    return SH.share({title:name, files:[w.uri]}).catch(function(){ /* closed the sheet */ });
  }).then(function(){ return {ok:true, shared:true}; })
    .catch(function(){ return {ok:false}; });
}
function downloadNotes(){
  var t=notesAsText();
  if(!t) return false;
  try{
    saveFile('sixteen-eleven-notes-'+new Date().toISOString().slice(0,10)+'.txt',
             new Blob([t],{type:'text/plain'}));
    return true;
  }catch(e){ return false; }
}

/* ---------- reading progress ----------
   1,362 chapters is a long way, and until now there was nothing to show how
   far you had come. Chapters are marked read explicitly, or automatically when
   you press Next, which is the honest signal that you finished one. */
function readKey(b,c){ return b+':'+c; }
function isRead(b,c){ return !!S.read[readKey(b,c)]; }
function markRead(b,c,on){
  var k=readKey(b,c);
  if(on===false||(on===undefined&&S.read[k])) delete S.read[k];
  else S.read[k]=Date.now();
  saveRead();
}
function saveRead(){ Store.set('strata:read',S.read); }
/* the earliest chapter of this book still unread */
function firstUnreadIn(b){
  for(var c=1;c<=b.nch;c++) if(!isRead(b.i,c)) return c;
  return 1;
}
function bookProgress(b){
  if(!b||b.user) return {done:0,total:b?b.nch:0,pct:0};
  var n=0;
  for(var c=1;c<=b.nch;c++) if(isRead(b.i,c)) n++;
  return {done:n,total:b.nch,pct:b.nch?Math.round(100*n/b.nch):0};
}
function totalProgress(){
  var done=0,total=0;
  BOOKS.forEach(function(b){
    if(b.user) return;
    total+=b.nch;
    for(var c=1;c<=b.nch;c++) if(isRead(b.i,c)) done++;
  });
  return {done:done,total:total,pct:total?Math.round(100*done/total):0};
}
/* The next chapter you have not read, searched forward from where you are. */
function nextUnread(fromBook,fromCh){
  var order=BOOKS.filter(function(b){return !b.user;});
  var start=0;
  for(var i=0;i<order.length;i++) if(order[i].i===fromBook){ start=i; break; }
  for(var pass=0;pass<2;pass++){
    for(var k=0;k<order.length;k++){
      var b=order[(start+k)%order.length];
      var c0=(pass===0&&b.i===fromBook)?(fromCh||1):1;
      for(var c=c0;c<=b.nch;c++)
        if(!isRead(b.i,c)) return {b:b.i,c:c};
    }
  }
  return null;
}

/* ---------- new version available ----------
   The service worker updates in the background, so without this a reader can
   sit on a stale build indefinitely and never know why a fix has not arrived. */
function showUpdateBar(){
  var el=document.getElementById('updatebar');
  if(!el||S.updateShown) return;
  S.updateShown=true;
  el.innerHTML='<div class="upd"><span>A new version is ready.</span>'+
    '<button data-a="reloadapp">Refresh</button>'+
    '<button class="x" data-a="dismissupd">Later</button></div>';
}

/* ---------- copy and share ----------
   The commonest thing anyone does with a verse is send it to someone, and
   until now the sheet offered everything except that. */
function verseForSharing(b,c,v){
  return '"'+vText(b,c,v)+'"\n\u2014 '+vRef(b,c,v)+' (KJV)';
}
function copyVerse(b,c,v){
  var text=verseForSharing(b,c,v);
  if(navigator.clipboard&&navigator.clipboard.writeText)
    return navigator.clipboard.writeText(text).then(function(){return true;})
      .catch(function(){ return legacyCopy(text); });
  return Promise.resolve(legacyCopy(text));
}
function legacyCopy(text){
  try{
    var ta=document.createElement('textarea');
    ta.value=text; ta.setAttribute('readonly','');
    ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    var ok=document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }catch(e){ return false; }
}
function shareVerse(b,c,v){
  var text=verseForSharing(b,c,v);
  if(navigator.share)
    return navigator.share({text:text}).then(function(){return true;})
      .catch(function(){ return false; });
  return copyVerse(b,c,v);
}

/* ---------- cross-references ----------
   Precomputed from the text: exact shared phrasing plus rare-vocabulary
   overlap. Stored packed (base36, delta-coded keys) and unpacked once. */
var XR=null, OFF=null;
var xrefPending=null;
/* Fetch the cross-reference table the first time a verse is tapped. In the
   single-file build it is already inline and this does nothing. */
function ensureXrefs(then){
  if(XR){ if(then) then(); return; }
  if(META.xrefs){ unpackXrefs(); if(then) then(); return; }
  if(!CHCOUNT){ if(then) then(); return; }
  if(!xrefPending){
    var url;
    try{ url=new URL('assets/data/xrefs.txt', document.baseURI).href; }
    catch(e){ url='assets/data/xrefs.txt'; }
    xrefPending=fetch(url).then(function(r){ return r.ok?r.text():''; })
      .then(function(t){ META.xrefs=t; unpackXrefs(); })
      .catch(function(){ META.xrefs=''; });
  }
  xrefPending.then(function(){ if(then) then(); });
}
function unpackXrefs(){
  if(XR||!META.xrefs) return;
  XR={}; OFF=META.offsets;
  var rows=META.xrefs.split(';'), key=0;
  for(var i=0;i<rows.length;i++){
    var row=rows[i]; if(!row) continue;
    var c=row.indexOf(':');
    key+=parseInt(row.slice(0,c),36);
    var parts=row.slice(c+1).split(','), refs=[];
    for(var j=0;j<parts.length;j++) refs.push(parseInt(parts[j],36));
    XR[key]=refs;
  }
}
/* book/chapter/verse -> the running verse number used by the cross-reference table */
function globalIndex(b,c,v){
  if(!OFF||!OFF[b]||OFF[b][c-1]===undefined) return -1;
  return OFF[b][c-1]+(v-1);
}
function fromGlobal(g){
  if(!OFF) return null;
  for(var b=0;b<OFF.length;b++){
    var row=OFF[b], last=row[row.length-1];
    var end=last+((BIBLE[String(b)]&&BIBLE[String(b)][String(row.length)])||[]).length;
    if(g<end){
      for(var c=row.length-1;c>=0;c--)
        if(g>=row[c]) return {b:b,c:c+1,v:g-row[c]+1};
    }
  }
  return null;
}
function relatedTo(b,c,v){
  unpackXrefs();
  if(!XR) return [];
  var g=globalIndex(b,c,v);
  if(g<0||!XR[g]) return [];
  var out=[];
  XR[g].forEach(function(x){
    var r=fromGlobal(x);
    if(!r) return;
    var t=vText(r.b,r.c,r.v);
    if(t) out.push({b:r.b,c:r.c,v:r.v,text:t});
  });
  return out;
}

var S={tab:'bible', mode:'shelf', book:null, btab:'overview', ch:1,
       cat:'all', apocOpen:false, trackerOpen:false, atlasOpen:false,
       mapEra:null, mapFrame:null, plate:null, plateCache:{}, plateWait:{},
       plateZoom:2, notesCopied:false, notesMsg:'',
       scrollWatched:0, orientTried:0, viewSig:null,
       navStack:[], navAt:-1, navMoving:0,
       voiceManifest:null, voiceManifestTried:0, theme:'auto', liveMsg:'',
       lockRotate:false, swipeInit:0, rsOpen:'type',
       marks:{}, savesTab:'highlights', noteFilter:'All',
       linkDraft:'', linkMsg:'', bmFolder:'All saves',
       immersive:false, scrollSpeed:2, scrollTimer:null,
       openEra:null, q:'', reading:null, hl:{}, notes:[], sheet:null,
       saveQ:'', saveColor:'all', saveSort:'book', editing:null, ready:false,
       speaking:false, speakAt:-1, speakOpts:false, follow:true,
       sheets:[], sheet:null, sheetQ:'', sheetEdit:null, jumpRef:null,
       drawerBook:null,
       voiceMode:'system', kokoroVoice:'bm_george', sysVoiceURI:null,
       readMode:'flow', passages:[], shelf:[], openBook:null, importing:null,
       voiceQuality:'smooth', autoNext:true,
       textSize:2, page:'plain', redLetters:true, readerOpts:false, restoreMsg:'', restoreErr:0, copied:false, updateShown:false,
       backfill:0, awaiting:0, loadError:'', xrDrawn:0, read:{},
       userRefs:{}, refAdding:false, refDraft:'', refMsg:'', searchHist:[], sheetMsg:'',
       filing:false, fileMsg:'', noteDraftOpen:false, editCaret:null,
       sheetDrag:0,
       autoBackup:true, snaps:[], lastSnapFp:'', sessionWatched:0,
       voiceNotice:'', voicePicker:false, pop:null, popCopied:null, popMore:null, popRefAdding:null,
       popFiling:null, popMsg:'', popMsgKey:null, popImaging:null};

/* ---------- colours ---------- */
/* Deepened to match the underlines. Yellow especially: the old #FACC15 could
   not be seen as a rule on warm paper. */
/* The design names its highlights rather than numbering colours: Wheat,
   Sage, Mist, Rose and Heather. The keys stay the same, so every highlight
   already saved keeps its colour. */
var COLORS=[
 {k:'yellow',n:'Wheat',  dot:'#C9A24A',bg:'#E6D19C',night:'#D9A93B'},
 {k:'green', n:'Sage',   dot:'#7FA36B',bg:'#C9D8B6',night:'#6FAE72'},
 {k:'blue',  n:'Mist',   dot:'#6F95B5',bg:'#C3D3DE',night:'#5F97CF'},
 {k:'pink',  n:'Rose',   dot:'#C77B6E',bg:'#E8C3BA',night:'#D46B78'},
 {k:'purple',n:'Heather',dot:'#9A82BF',bg:'#D5C7E0',night:'#9B7FD6'}
];
var CMAP={}; COLORS.forEach(function(c){CMAP[c.k]=c;});

/* ---------- storage ----------
   Tries the artifact store, then browser storage, then memory, so the file
   keeps working whether it is opened here, downloaded, or run offline. */
var Store=(function(){
  var mem={};
  var hasArtifact=(typeof window!=='undefined'&&window.storage&&window.storage.get);
  function ls(){
    try{ if(typeof localStorage==='undefined') return null;
         localStorage.setItem('__t','1'); localStorage.removeItem('__t');
         return localStorage; }catch(e){ return null; }
  }
  var L=ls();
  return {
    get:function(k){
      if(hasArtifact) return window.storage.get(k).then(function(r){
        return r&&r.value?JSON.parse(r.value):null;}).catch(function(){return null;});
      try{ if(L){var v=L.getItem(k); return Promise.resolve(v?JSON.parse(v):null);} }catch(e){}
      return Promise.resolve(mem[k]!==undefined?mem[k]:null);
    },
    set:function(k,v){
      mem[k]=v;
      if(hasArtifact) return window.storage.set(k,JSON.stringify(v)).catch(function(){});
      try{ if(L) L.setItem(k,JSON.stringify(v)); }catch(e){}
      return Promise.resolve();
    }
  };
})();

function saveHl(){ Store.set('strata:highlights',S.hl); }
function saveNotes(){ Store.set('strata:notes',S.notes); }
function saveSheets(){ Store.set('strata:sheets',S.sheets); }
var placeTimer=null;
function savePlace(){
  /* debounced: paging through a chapter should not write on every render */
  if(placeTimer) return;
  placeTimer=setTimeout(function(){
    placeTimer=null;
    Store.set('strata:place',{b:S.reading,c:S.ch,size:S.textSize,page:S.page,pv:2,
      red:S.redLetters!==false});
  },600);
}

/* Ships with the built-in sheets; anything the reader edits is stored and
   replaces them on load, so edits survive but nothing is lost on first run. */
function defaultSheets(){ return JSON.parse(JSON.stringify(META.sheets||[])); }

function loadAll(cb){
  Store.get('strata:highlights').then(function(h){
    S.hl=h||{};
    return Store.get('strata:notes');
  }).then(function(n){
    S.notes=migrateNotes(n);   /* notes written before the fuller shape */
    return Store.get('strata:sheets');
  }).then(function(sh){
    S.sheets=(Array.isArray(sh)&&sh.length)?sh:defaultSheets();
    return Store.get('strata:voice');
  }).then(function(v){
    if(v&&typeof v==='object'){
      S.kokoroVoice=v.kokoro||S.kokoroVoice;
      S.sysVoiceURI=v.sys||null;
      if(v.rate) Speech.setRate(v.rate);
      if(v.readMode) S.readMode=v.readMode;
      if(v.quality) S.voiceQuality=v.quality;
      if(typeof v.autoNext==='boolean') S.autoNext=v.autoNext;
      /* the neural model is never auto-downloaded on launch; the reader opts in */
      S.voiceMode='system';
      S.wantKokoro=(v.mode==='kokoro');
    }
    return Store.get('strata:bookmarks');
  }).then(function(bm){
    if(bm&&typeof bm==='object') S.marks=bm;
    return Store.get('strata:focus');
  }).then(function(fo){
    if(typeof fo==='boolean') S.focus=fo;
    return Store.get('strata:words');
  }).then(function(wm){
    if(typeof wm==='boolean') S.wordMeanings=wm;
    return Store.get('strata:scrollspeed');
  }).then(function(sp){
    if(typeof sp==='number') S.scrollSpeed=sp;
    return Store.get('strata:lockrotate');
  }).then(function(lr){
    if(typeof lr==='boolean') S.lockRotate=lr;
    return Store.get('strata:theme');
  }).then(function(th){
    if(th==='light'||th==='dark'||th==='auto'){ S.theme=th; applyTheme(); }
    return Store.get('strata:searches');
  }).then(function(sh){
    S.searchHist=Array.isArray(sh)?sh:[];
    return Store.get('strata:autobackup');
  }).then(function(ab){
    if(typeof ab==='boolean') S.autoBackup=ab;
    loadSnapshots();
    return Store.get('strata:userrefs');
  }).then(function(ur){
    S.userRefs=(ur&&typeof ur==='object')?ur:{};
    return Store.get('strata:read');
  }).then(function(rd){
    S.read=(rd&&typeof rd==='object')?rd:{};
    return Store.get('strata:split');
  }).then(function(sp){
    /* the tablet's two sides: how wide the left one is, and what the right
       one showed */
    if(sp&&typeof sp==='object'){
      if(typeof sp.ratio==='number') SPLIT.ratio=Math.min(0.68,Math.max(0.32,sp.ratio));
      if(typeof sp.right==='string') SPLIT.right=sp.right;
    }
    return Store.get('strata:place');
  }).then(function(pl){
    if(pl&&typeof pl==='object'){
      if(typeof pl.size==='number') S.textSize=pl.size;
      if(pl.page) S.page=pl.page;
      /* Once, on the move to the redesign: paper was the old default, and the
         design sets the text on the plain ground. Someone who chose Contrast
         keeps it; Paper is still in Aa for anyone who wants it back. */
      if(!pl.pv && S.page==='paper') S.page='plain';
      /* the Contrast page is retired: text size covers what it was for */
      if(S.page==='contrast') S.page='plain';
      if(typeof pl.red==='boolean') S.redLetters=pl.red;
      if(BIBLE&&BIBLE[String(pl.b)]&&BIBLE[String(pl.b)][String(pl.c)]){
        S.book=pl.b; S.reading=pl.b; S.ch=pl.c;
      }
    }
    S.ready=true; cb();
    loadShelf().then(function(){ if(S.shelf.length) render(); });
  }).catch(function(){ S.sheets=defaultSheets(); S.ready=true; cb(); });
}

/* ---------- verse helpers ---------- */
function vKey(b,c,v){ return b+':'+c+':'+v; }
function chapterOf(b, n){
  if(!b) return [];
  if(b.user) return (S.openBook&&S.openBook.id===b.uid)
    ? (S.openBook.chapters[n-1]||[]) : [];
  var ch=BIBLE&&BIBLE[String(b.i)];
  return (ch&&ch[String(n)])||[];
}
function vText(b,c,v){
  var bk=BK(b);
  if(bk&&bk.user) return chapterOf(bk,c)[v-1]||'';
  var ch=BIBLE[String(b)]; if(!ch) return '';
  var arr=ch[String(c)]; return arr?(arr[v-1]||''):'';
}
function vRef(b,c,v){ var x=BK(b); return x?x.name+' '+c+':'+v:'Unfiled'; }
function parseKey(k){ var p=k.split(':'); return {b:+p[0],c:+p[1],v:+p[2]}; }

/* ---------- read aloud ----------
   Two engines behind one interface:

     system  - the browser's built-in SpeechSynthesis. Always available,
               works offline, voices vary by device.
     kokoro  - Kokoro-82M (hexgrad, Apache-2.0) run entirely in the browser
               through kokoro-js and Transformers.js. Much better prosody,
               but the weights (~86 MB at q8) have to be fetched once, so it
               needs a network connection the first time and a browser that
               allows dynamic import of an ES module from a CDN.

   Both speak a chapter verse by verse, so the active verse can be tracked
   and scrolled to either way. If Kokoro cannot load for any reason we fall
   straight back to the system engine and say so rather than going silent. */

var KOKORO_CDN='https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm';
var KOKORO_MODEL='onnx-community/Kokoro-82M-v1.0-ONNX';

/* Shown in the picker before the model is loaded; replaced by the model's own
   list once it reports one. */
var KOKORO_VOICES=[
 /* Deep male narration first. Grades are from the model's own VOICES.md;
    bm_george carries the lowest cited pitch (~138 Hz) and the best overall
    mark of any male voice, which is why it is the default here. */
 {id:'bm_george',  name:'George',  note:'British \u00b7 deep \u00b7 narration', deep:1},
 {id:'bm_fable',   name:'Fable',   note:'British \u00b7 warm', deep:1},
 {id:'am_fenrir',  name:'Fenrir',  note:'American \u00b7 deep', deep:1},
 {id:'am_michael', name:'Michael', note:'American \u00b7 steady', deep:1},
 {id:'am_onyx',    name:'Onyx',    note:'American \u00b7 low', deep:1},
 {id:'bm_lewis',   name:'Lewis',   note:'British \u00b7 gravelly', deep:1},
 {id:'am_adam',    name:'Adam',    note:'American \u00b7 plain', deep:1},
 {id:'am_eric',    name:'Eric',    note:'American', deep:1},
 {id:'am_liam',    name:'Liam',    note:'American', deep:1},
 {id:'am_puck',    name:'Puck',    note:'American \u00b7 bright', deep:1},
 {id:'bm_daniel',  name:'Daniel',  note:'British', deep:1},
 {id:'af_heart',   name:'Heart',   note:'American \u00b7 female'},
 {id:'af_bella',   name:'Bella',   note:'American \u00b7 female'},
 {id:'af_nicole',  name:'Nicole',  note:'American \u00b7 female'},
 {id:'af_sarah',   name:'Sarah',   note:'American \u00b7 female'},
 {id:'bf_emma',    name:'Emma',    note:'British \u00b7 female'},
 {id:'bf_isabella',name:'Isabella',note:'British \u00b7 female'}
];

/* Dynamic import must be constructed at runtime. Written literally, a browser
   that does not support import() inside a classic script fails to PARSE this
   whole file, and nothing runs at all — no app, no error, just a dead page. */
var _dynImport=(function(){
  try{ return new Function('u','return import(u);'); }catch(e){ return null; }
})();

/* ---- Kokoro loader ---- */
var Kokoro=(function(){
  var tts=null, state='idle', err='', loading=null;
  function status(){ return state; }
  function error(){ return err; }
  function ready(){ return state==='ready'&&!!tts; }
  function canTry(){
    /* the neural voice's engine needs BigInt and WebAssembly, which Safari
       only has from 14; on an iPad that stops at iOS 12 it would download
       and then fail, so it is not offered there at all */
    return typeof window!=='undefined' && typeof Audio!=='undefined' && !!_dynImport &&
      typeof BigInt!=='undefined' && typeof WebAssembly!=='undefined';
  }
  function load(onState){
    if(ready()) return Promise.resolve(tts);
    if(loading) return loading;
    if(!canTry()||!_dynImport){
      state='error';
      err=_dynImport?'This browser cannot run the neural voice.'
                    :'This browser cannot load modules on demand, so the neural '+
                     'voice is unavailable. The device voice still works.';
      if(onState) onState(); return Promise.reject(new Error(err));
    }
    state='loading'; err=''; if(onState) onState();
    var webgpu=(typeof navigator!=='undefined'&&navigator.gpu);
    loading=_dynImport(KOKORO_CDN)
      .then(function(mod){
        if(!mod||!mod.KokoroTTS) throw new Error('kokoro-js did not load');
        return mod.KokoroTTS.from_pretrained(KOKORO_MODEL,
          webgpu?{dtype:(S.voiceQuality==='fast'?'q8':'fp32'),device:'webgpu'}
                 :{dtype:(S.voiceQuality==='fast'?'q8':'fp32'),device:'wasm'});
      })
      .then(function(t){
        tts=t; state='ready'; loading=null;
        if(onState) onState();
        return tts;
      })
      .catch(function(e){
        state='error'; loading=null;
        err=(e&&e.message)?e.message:'The neural voice could not be loaded.';
        if(onState) onState();
        throw e;
      });
    return loading;
  }
  /* Returns a playable object URL for one passage. */
  function synth(text, voice, speed){
    if(!ready()) return Promise.reject(new Error('not ready'));
    return Promise.resolve(tts.generate(text,{voice:voice,speed:speed||1}))
      .then(function(audio){ return toURL(audio); });
  }
  function toURL(audio){
    if(!audio) throw new Error('no audio returned');
    if(typeof audio.toBlob==='function')
      return URL.createObjectURL(audio.toBlob());
    /* fall back to building a WAV from the raw samples */
    var data=audio.audio||audio.data, sr=audio.sampling_rate||audio.sampleRate||24000;
    if(!data) throw new Error('no audio samples');
    return URL.createObjectURL(new Blob([wav(data,sr)],{type:'audio/wav'}));
  }
  function wav(samples,sr){
    var n=samples.length, buf=new ArrayBuffer(44+n*2), v=new DataView(buf);
    function str(o,s){ for(var i=0;i<s.length;i++) v.setUint8(o+i,s.charCodeAt(i)); }
    str(0,'RIFF'); v.setUint32(4,36+n*2,true); str(8,'WAVE'); str(12,'fmt ');
    v.setUint32(16,16,true); v.setUint16(20,1,true); v.setUint16(22,1,true);
    v.setUint32(24,sr,true); v.setUint32(28,sr*2,true); v.setUint16(32,2,true);
    v.setUint16(34,16,true); str(36,'data'); v.setUint32(40,n*2,true);
    for(var i=0;i<n;i++){
      var s=Math.max(-1,Math.min(1,samples[i]));
      v.setInt16(44+i*2, s<0?s*0x8000:s*0x7FFF, true);
    }
    return buf;
  }
  function listVoices(){
    if(!ready()||typeof tts.list_voices!=='function') return null;
    try{
      var v=tts.list_voices();
      if(Array.isArray(v)&&v.length) return v;
      if(v&&typeof v==='object'){ var k=Object.keys(v); return k.length?k:null; }
    }catch(e){}
    return null;
  }
  return {load:load, synth:synth, ready:ready, status:status, error:error,
          listVoices:listVoices, canTry:canTry,
          _reset:function(){tts=null;state='idle';err='';loading=null;}};
})();

/* ---- unified player ---- */
var Speech=(function(){
  var synth=(typeof window!=='undefined'&&window.speechSynthesis)?window.speechSynthesis:null;
  var queue=[], idx=0, playing=false, paused=false, onTick=null, onDone=null, onProgress=null;
  var est=null;                   /* timing estimate, for voices that report no words */
  function report(i,f){ if(onProgress&&playing&&!paused) onProgress(i,Math.max(0,Math.min(1,f))); }
  function stopEst(){ if(est){ clearInterval(est); est=null; } }
  var rate=1, voice=null;
  var el=null, urls=[], nextURL=null, token=0;

  function supported(){ return !!synth && typeof SpeechSynthesisUtterance!=='undefined'; }
  function engine(){ return S.voiceMode==='kokoro'&&Kokoro.ready()?'kokoro':'system'; }

  /* -- system -- */
  function sysAt(i){
    if(!supported()||i>=queue.length){ stop(); if(onDone)onDone(); return; }
    idx=i; if(onTick) onTick(idx);
    var u=new SpeechSynthesisUtterance(queue[i]);
    u.rate=rate; if(voice) u.voice=voice;
    /* The voice says which word it has reached, so the page can light the
       verse being heard inside a longer passage. A voice that never says
       falls back to an estimate from the time spoken. */
    var len=Math.max(1,queue[i].length), words=false, t0=Date.now();
    u.onboundary=function(e){
      if(e&&typeof e.charIndex==='number'){ words=true; stopEst(); report(i, e.charIndex/len); }
    };
    stopEst();
    est=setInterval(function(){
      if(words||paused) return;
      report(i, Math.min(.99, (Date.now()-t0)/1000*14.5*rate/len));
    },250);
    u.onend=function(){ stopEst(); if(playing&&!paused) sysAt(i+1); };
    u.onerror=function(){ stopEst(); if(playing&&!paused) sysAt(i+1); };
    try{ synth.speak(u); }catch(e){ stop(); }
  }

  /* -- kokoro -- */
  function audioEl(){
    if(!el&&typeof Audio!=='undefined') el=new Audio();
    return el;
  }
  function revoke(){
    urls.forEach(function(u){ try{ URL.revokeObjectURL(u); }catch(e){} });
    urls=[]; nextURL=null;
  }
  function kokAt(i,pre){
    var mine=token;
    if(i>=queue.length){ stop(); if(onDone)onDone(); return; }
    idx=i; if(onTick) onTick(idx);
    var got=pre?Promise.resolve(pre):Kokoro.synth(queue[i],S.kokoroVoice,rate);
    got.then(function(url){
      if(mine!==token||!playing) { try{URL.revokeObjectURL(url);}catch(e){} return; }
      urls.push(url);
      var a=audioEl(); if(!a){ stop(); return; }
      a.src=url;
      a.ontimeupdate=function(){ if(mine===token&&a.duration) report(i, a.currentTime/a.duration); };
      a.onended=function(){
        if(mine!==token||!playing||paused) return;
        var n=nextURL; nextURL=null; kokAt(i+1,n);
      };
      a.onerror=function(){
        if(mine!==token||!playing||paused) return;
        kokAt(i+1,null);
      };
      var p=a.play();
      if(p&&p.catch) p.catch(function(){});
      /* pre-render the next verse while this one plays */
      if(i+1<queue.length){
        Kokoro.synth(queue[i+1],S.kokoroVoice,rate)
          .then(function(u2){ if(mine===token) { nextURL=u2; urls.push(u2); }
                              else { try{URL.revokeObjectURL(u2);}catch(e){} } })
          .catch(function(){});
      }
    }).catch(function(){
      /* one verse failed to render: fall back to the device voice */
      if(mine!==token) return;
      S.voiceMode='system'; S.voiceNotice='The neural voice stopped responding, '+
        'so playback switched to the device voice.';
      if(supported()) sysAt(i); else { stop(); if(onDone)onDone(); }
      renderSpeakBar();
    });
  }

  function start(lines,from){
    stop();
    queue=lines; playing=true; paused=false; token++;
    if(engine()==='kokoro'){ kokAt(from||0,null); return true; }
    if(!supported()){ playing=false; return false; }
    try{ synth.cancel(); }catch(e){}
    sysAt(from||0);
    return true;
  }
  function pause(){
    if(!playing) return; paused=true; stopEst();
    if(el&&!el.paused){ try{ el.pause(); }catch(e){} }
    /* The phone's own pause is unreliable on iPhone and resumes mid-sentence;
       reading starts again from the verse instead, so the speech is simply
       cancelled here. paused is set first, so its end does not move on. */
    if(engine()!=='kokoro'&&supported()){ try{ synth.cancel(); }catch(e){} }
  }
  function resume(){
    if(!playing) return; paused=false;
    if(engine()==='kokoro'){ var a=audioEl(); if(a){ var p=a.play(); if(p&&p.catch)p.catch(function(){}); } }
    else if(supported()){ try{ synth.resume(); }catch(e){} }
  }
  function stop(){
    playing=false; paused=false; idx=0; token++; stopEst();
    if(supported()){ try{ synth.cancel(); }catch(e){} }
    if(el){ try{ el.pause(); el.removeAttribute('src'); }catch(e){} }
    revoke();
  }
  function voices(){ try{ return synth?synth.getVoices():[]; }catch(e){ return []; } }

  /* Play a list of already-rendered audio files. The same element, ticks and
     completion callback as synthesised speech, so the bar, the follow-along
     highlight and continuing into the next chapter all work unchanged. */
  function playFiles(urls, from, startFrac){
    stop();
    queue = urls.slice();
    idx = Math.max(0, Math.min(from || 0, queue.length - 1));
    playing = true; paused = false;
    if(!el){ el = new Audio(); }
    var seek = startFrac || 0;
    var step = function(){
      if(idx >= queue.length){ playing = false; if(onDone) onDone(); return; }
      if(onTick) onTick(idx);
      try{
        el.src = queue[idx];
        el.playbackRate = rate;
        el.ontimeupdate = function(){ if(el.duration) report(idx, el.currentTime / el.duration); };
        if(seek > 0){ var sf = seek; seek = 0;
          el.onloadedmetadata = function(){ try{ el.currentTime = sf * el.duration; }catch(e){} }; }
        else el.onloadedmetadata = null;
        el.onended = function(){ idx++; step(); };
        el.onerror = function(){ idx++; step(); };
        var pr = el.play();
        if(pr && pr.catch) pr.catch(function(){ playing = false; });
      }catch(e){ playing = false; }
    };
    step();
    return true;
  }

  return {supported:supported, start:start, pause:pause, resume:resume, stop:stop,
    playFiles:playFiles,
    voices:voices, engine:engine,
    isPlaying:function(){return playing;}, isPaused:function(){return paused;},
    at:function(){return idx;},
    setRate:function(r){rate=r;}, getRate:function(){return rate;},
    setVoice:function(v){voice=v;}, getVoice:function(){return voice;},
    onTick:function(f){onTick=f;}, onDone:function(f){onDone=f;},
    onProgress:function(f){onProgress=f;}};
})();

/* Any engine at all? Kokoro can work even where SpeechSynthesis is missing. */
function canRead(){ return Speech.supported()||Kokoro.canTry(); }






/* ---------- automatic local backups ----------
   A browser cannot write a file without a click, so the automatic backup is a
   snapshot kept in the browser's own database. It survives a reload and a
   crash; it does not survive clearing site data, which is exactly why the
   downloadable file still matters. Five are kept, oldest dropped. */
var SNAP_KEEP=5;
function snapshotPayload(){
  return {format:BACKUP_FORMAT, version:1,
          exported:new Date().toISOString(),
          highlights:S.hl, notes:S.notes, sheets:S.sheets, read:S.read,
          userRefs:S.userRefs, textSize:S.textSize};
}
function dataFingerprint(){
  return [Object.keys(S.hl).length, S.notes.length,
          S.sheets.reduce(function(a,x){return a+x.items.length;},0),
          Object.keys(S.read).length,
          Object.keys(S.userRefs).length].join('.');
}
function takeSnapshot(reason){
  if(!S.autoBackup || !Shelf.available()) return Promise.resolve(false);
  var fp=dataFingerprint();
  if(fp===S.lastSnapFp || fp==='0.0.0.0.0') return Promise.resolve(false);
  S.lastSnapFp=fp;
  var rec={id:'s'+Date.now(), when:Date.now(), reason:reason||'session',
           fingerprint:fp, payload:snapshotPayload()};
  return Shelf.snapPut(rec).then(function(){
    return Shelf.snapAll();
  }).then(function(rows){
    rows=(rows||[]).sort(function(a,b){return b.when-a.when;});
    var extra=rows.slice(SNAP_KEEP);
    return Promise.all(extra.map(function(r){ return Shelf.snapDel(r.id); }));
  }).then(function(){ return loadSnapshots(); }).catch(function(){ return false; });
}
function loadSnapshots(){
  if(!Shelf.available()) return Promise.resolve([]);
  return Shelf.snapAll().then(function(rows){
    S.snaps=(rows||[]).sort(function(a,b){return b.when-a.when;});
    return S.snaps;
  }).catch(function(){ S.snaps=[]; return []; });
}
function restoreSnapshot(id){
  var r=S.snaps.filter(function(x){return x.id===id;})[0];
  if(!r) return null;
  return mergeBackup(r.payload);
}
/* save when the app is put away, which is the closest thing to a session end */
function watchSession(){
  if(S.sessionWatched||typeof document==='undefined') return;
  S.sessionWatched=1;
  var save=function(){ takeSnapshot('session'); };
  try{
    document.addEventListener('visibilitychange',function(){
      if(document.visibilityState==='hidden') save();
    });
  }catch(e){}
  try{ window.addEventListener('pagehide',save); }catch(e){}
  try{ window.addEventListener('beforeunload',save); }catch(e){}
}

/* ---------- cross references of your own ----------
   Stored as the reference you typed rather than as resolved numbers, so the
   same parser that reads a study sheet reads these, and a reference that does
   not resolve is kept and shown rather than silently dropped. */
function urefKey(b,c,v){ return b+':'+c+':'+v; }
function userRefs(b,c,v){ return S.userRefs[urefKey(b,c,v)]||[]; }
function addUserRef(b,c,v,raw){
  raw=String(raw||'').trim();
  if(!raw) return {ok:false,msg:'Type a reference, for example Isaiah 53:5.'};
  var parsed=parseRefs(raw);
  var good=parsed.filter(function(r){return r.ok;});
  if(!good.length) return {ok:false,msg:'That does not look like a reference in this Bible.'};
  var k=urefKey(b,c,v);
  var list=S.userRefs[k]||(S.userRefs[k]=[]);
  var added=0;
  good.forEach(function(r){
    if(r.b===b&&r.c===c&&(r.v1||1)===v) return;      /* not itself */
    if(list.indexOf(r.label)===-1){ list.push(r.label); added++; }
  });
  if(!added) return {ok:false,msg:'That one is already here.'};
  saveUserRefs();
  return {ok:true,msg:''};
}
function removeUserRef(b,c,v,label){
  var k=urefKey(b,c,v), list=S.userRefs[k];
  if(!list) return;
  S.userRefs[k]=list.filter(function(x){return x!==label;});
  if(!S.userRefs[k].length) delete S.userRefs[k];
  saveUserRefs();
}
function saveUserRefs(){ Store.set('strata:userrefs',S.userRefs); }

/* ---------- the words of Christ ----------
   Taken from the publisher's own markers rather than guessed at. A verse is
   either wholly spoken (stored as 1) or partly, in which case the spoken runs
   are stored as character offsets into this exact text, so "And he saith unto
   them," stays black and "Follow me" does not. */
function redFor(bi,c,v){
  var R=META.red;
  if(!R) return null;
  var bk=R[String(bi)]; if(!bk) return null;
  var ch=bk[String(c)]; if(!ch) return null;
  var e=ch[String(v)];
  return e===undefined?null:e;
}
/* Wrap the spoken runs. Escaping happens per fragment, so an offset can never
   land inside an entity and split it. */
function redLetter(text, spans){
  /* a verse with nothing spoken in it comes through unmarked rather than
     throwing; the caller should not have to check first */
  if(!spans) return esc(text);
  if(spans===1) return '<span class="wj">'+esc(text)+'</span>';
  var out='', last=0;
  for(var i=0;i<spans.length;i++){
    var a=spans[i][0], b=spans[i][1];
    if(a<last) continue;
    out+=esc(text.slice(last,a));
    out+='<span class="wj">'+esc(text.slice(a,b))+'</span>';
    last=b;
  }
  return out+esc(text.slice(last));
}

/* ---------- the divine name ----------
   The KJV prints the covenant name as LORD in small capitals. The text stores
   it as plain capitals, so it is recased here and rendered as true small caps,
   which is what a Cambridge setting looks like. Applied after escaping, and
   only to whole words, so it can never disturb the markup around it. */
function smallCaps(html){
  return html.replace(/\b(LORD|GOD|JEHOVAH)('S|S)?\b/g, function(m, word, tail){
    return '<span class="sc">' + word.charAt(0) + word.slice(1).toLowerCase() +
           (tail ? tail.toLowerCase() : '') + '</span>';
  });
}

/* ---------- preparing text for the voice ----------
   The King James punctuation is rhetorical, not grammatical: a colon often
   marks a breath, not a sentence end. Read literally that produces a hard
   stop every few words, which is most of what makes narration sound
   mechanical. Small caps LORD also trips some engines into spelling it out. */
function speechText(t){
  if(!t) return '';
  var s=String(t);
  s=s.replace(/\bLORD\b/g,'Lord').replace(/\bGOD\b/g,'God');
  s=s.replace(/\bLORD'S\b/g,"Lord's");
  s=s.replace(/\u00b6/g,' ');                    /* pilcrows */
  /* a colon or semicolon inside a verse is a breath, not a full stop */
  s=s.replace(/([a-z,])\s*:\s+/g,'$1, ');
  s=s.replace(/([a-z])\s*;\s+/g,'$1, ');
  s=s.replace(/\s*--\s*/g,', ');
  s=s.replace(/\s+/g,' ').trim();
  /* A verse can end on a colon or semicolon, which is a hinge into the next
     verse rather than a stop. Appending a full stop after one gave "and
     called:." so the mark is dropped before the sentence is closed. */
  s=s.replace(/[:;,]+$/,'');
  if(s&&!/[.!?]$/.test(s)) s+='.';
  return s;
}

/* Group verses into passages so the voice gets whole sentences to work with.
   Reading one verse at a time makes any engine stop dead at every verse end,
   which is what makes scripture narration sound clipped. Feeding it a few
   verses at once lets the prosody carry across them. */
/* longer blocks read more naturally: the model has more context to place
   stress and cadence, and there are fewer seams between clips */
var FLOW_TARGET=620, FLOW_MAX=1100;
/* Where each verse starts inside a passage, as a fraction of its length, so
   the verse being heard can be lit and followed. The chapter heading counts
   as part of the first verse. */
function marksOf(parts, head){
  var total=head, pos=head, out=[];
  parts.forEach(function(p,k){ total+=p[1]+(k?1:0); });
  total=Math.max(1,total);
  parts.forEach(function(p,k){
    out.push([p[0], k?pos/total:0]);
    pos+=p[1]+1;
  });
  return out;
}
/* Reading starts at verse startV (1 unless picking up where it was paused or
   stopped). Grouping into flowing passages is unchanged from there on. */
function buildPassages(b, ch, startV){
  var vs=chapterOf(b,ch);
  startV=Math.max(1,startV||1);
  var lead=startV===1?b.name+', chapter '+ch+'. ':'';
  var out=[], cur='', from=0, to=0, parts=[];
  function flush(){
    if(!cur) return;
    var head=out.length?'':lead;
    out.push({text:speechText(head+cur), from:from, to:to, marks:marksOf(parts, head.length)});
    cur=''; parts=[];
  }
  for(var i=startV-1;i<vs.length;i++){
    var t=(vs[i]||'').trim();
    if(!t) continue;                       /* verse absent from this book */
    if(S.readMode==='verse'){
      out.push({text:speechText((out.length?'':lead)+t), from:i+1, to:i+1, marks:[[i+1,0]]});
      continue;
    }
    if(!cur){ from=i+1; cur=t; } else { cur+=' '+t; }
    parts.push([i+1, t.length]);
    to=i+1;
    var ends=/[.!?][)"']?\s*$/.test(cur);
    if((cur.length>=FLOW_TARGET&&ends)||cur.length>=FLOW_MAX) flush();
  }
  flush();
  if(!out.length) out.push({text:lead, from:startV, to:startV, marks:[[startV,0]]});
  return out;
}

/* the chapter after this one, rolling into the next book at the end */
function nextChapterFrom(bi,ch){
  var b=BK(bi); if(!b) return null;
  if(ch<b.nch) return {b:bi,c:ch+1};
  var order=BOOKS.filter(function(x){return !x.user;});
  for(var i=0;i<order.length;i++){
    if(order[i].i===bi){
      var nx=order[i+1];
      return nx?{b:nx.i,c:1}:null;
    }
  }
  return null;
}

/* ---------- where reading aloud is, to the verse ----------
   S.speakVerse is the verse being heard. Pausing or stopping remembers it for
   this session; Play then starts again from the start of that verse. A fresh
   start, or a chapter not paused in this session, begins at verse 1. */
function curVerse(){
  if(S.speakVerse) return S.speakVerse;
  var p=S.passages&&S.passages[S.speakAt];
  return p?p.from:1;
}
/* Each chapter remembers, for this session only, the verse it was paused
   or stopped on. Nothing is saved, so a new session starts at verse 1. */
function placeKey(b,c){ return b+':'+c; }
function startVerse(){
  var v=S.places&&S.places[placeKey(S.reading,S.ch)];
  return v||1;
}
function holdPlace(){
  if(S.speaking&&S.speakB!=null){
    S.places=S.places||{}; S.places[placeKey(S.speakB,S.speakC)]=curVerse();
  }
}
/* true when the chapter on screen is the one being read aloud */
function readingHere(){
  if(S.speakB===S.reading&&S.speakC===S.ch) return true;
  /* with two sides, the chapter being read may be on the other one */
  if(LAYOUT!=='split') return false;
  var o=PANES[otherSide(CUR)];
  return !!o&&o.reading===S.speakB&&o.ch===S.speakC;
}
function lastVerse(){
  var vs=chapterOf(BK(S.reading),S.ch)||[];
  for(var i=vs.length;i>0;i--) if(vs[i-1]) return i;
  return 1;
}
function verseAt(p,f){
  var v=p.from;
  (p.marks||[]).forEach(function(m){ if(m[1]<=f+1e-6) v=m[0]; });
  return v;
}
/* the bar's verse and progress, updated in place as the reading moves on */
function updatePlayerPlace(){
  var r=document.querySelector('#player .pl-ref');
  if(r) r.textContent=nowRef();
  var bar=document.querySelector('#player .pl-bar i');
  if(bar&&bar.style) bar.style.width=chapterPct()+'%';
  var iv=document.querySelector('.island .il-v');
  if(iv&&S.speaking) iv.textContent='Verse '+curVerse();
  var ir=document.querySelector('.island .il-ring circle');
  if(ir&&S.speaking) ir.setAttribute('stroke-dashoffset',(RING*(1-chapterPct()/100)).toFixed(2));
  var inx=document.querySelector('.island .il-next');
  if(inx&&S.speaking) inx.removeAttribute('disabled');
  var pv=document.querySelector('#player [data-a="prevverse"]');
  if(pv){ if(curVerse()>1) pv.removeAttribute('disabled'); else pv.setAttribute('disabled',''); }
}
function speakFrom(v){
  var b=BK(S.reading); if(!b) return;
  v=Math.max(1,v||1);
  if(S.places) delete S.places[placeKey(S.reading,S.ch)];   /* taken up again */
  S.paintedVerse=null;
  S.speakB=S.reading; S.speakC=S.ch; /* which chapter is being read */
  if(hasRecording(b.name, S.ch) && playRecorded(b.name, S.ch, v)) return;
  S.passages=buildPassages(b, S.ch, v);
  var lines=S.passages.map(function(p){ return p.text; });
  Speech.onTick(function(i){
    S.speakAt=i; S.speakVerse=S.passages[i]?S.passages[i].from:curVerse();
    paintSpeaking(); updatePlayerPlace();
  });
  Speech.onProgress(function(i,f){
    var p=S.passages[i]; if(!p) return;
    var nv=verseAt(p,f);
    if(nv!==S.speakVerse){ S.speakVerse=nv; paintSpeaking(); updatePlayerPlace(); }
  });
  Speech.onDone(function(){
    /* the chapter was read to the end, so next time it starts at verse 1 */
    if(S.places) delete S.places[placeKey(S.speakB,S.speakC)];
    /* roll straight on into the next chapter rather than stopping dead */
    if(S.autoNext && S.reading!==null){
      var nxt=nextChapterFrom(S.reading,S.ch);
      if(nxt){
        markRead(S.reading,S.ch,true);
        S.book=nxt.b; S.reading=nxt.b; S.ch=nxt.c; S.speakVerse=0;
        S.speakB=nxt.b; S.speakC=nxt.c;   /* moving on is not leaving */
        render();
        setTimeout(function(){ if(S.autoNext) speakFrom(1); },250);
        return;
      }
    }
    S.speaking=false; S.speakAt=-1; S.speakVerse=0; renderSpeakBar(); paintSpeaking();
  });
  /* Only call it speaking if the engine actually is. When speech fails on the
     first line, onDone has already marked it stopped by the time start()
     returns, and setting speaking=true here left the app sure it was reading
     aloud in silence: the pill said Pause, and Pause did nothing. */
  if(Speech.start(lines,0) && Speech.isPlaying()){
    S.speaking=true; S.speakAt=0; S.speakVerse=v;
  } else {
    S.speaking=false; S.speakAt=-1; S.speakVerse=0;
    if(!S.voiceNotice) S.voiceNotice='Read aloud could not start on this device.';
    announce(S.voiceNotice);
  }
  renderSpeakBar();
}
function stopSpeaking(){
  stopAutoScroll();
  holdPlace();
  Speech.stop(); S.speaking=false; S.speakAt=-1; S.speakVerse=0;
  renderSpeakBar(); paintSpeaking();
}
function paintSpeaking(){
  /* only the side that is reading has verses to light */
  if(S.reading===null) return;
  var nodes=((LAYOUT==='split'&&view&&view.querySelectorAll)?view:document).querySelectorAll('.rd .v');
  if(!nodes||!nodes.length) return;
  for(var i=0;i<nodes.length;i++) nodes[i].classList.remove('speaking','near1','near2');
  if(!S.speaking||S.speakAt<0||S.speakB!==S.reading||S.speakC!==S.ch) return;
  /* one verse lit: the one being heard, even inside a longer passage */
  var key=vKey(S.reading,S.ch,curVerse()), pos=-1;
  for(var k=0;k<nodes.length;k++) if(nodes[k].getAttribute('data-vs')===key){ pos=k; break; }
  if(pos<0) return;
  nodes[pos].classList.add('speaking');
  /* the design's falloff: the verse being read at full strength, its
     neighbours at 45%, two away at 28%, the rest at 20% */
  for(var q=0;q<nodes.length;q++){
    var dist=Math.abs(q-pos);
    nodes[q].classList.toggle('near1',dist===1);
    nodes[q].classList.toggle('near2',dist===2);
  }
  /* follow it down the page, once each time it moves on */
  if(S.follow&&S.paintedVerse!==key){
    S.paintedVerse=key;
    try{ bringIntoView(nodes[pos],'center',true); }catch(e){}
  }
}
function renderSpeakBar(){
  /* Twenty-four controls call this. It used to pour the retired speak bar
     back into its old slot, so pausing never changed the pill, and choosing
     verse by verse made that old panel jump back into the page while the
     sheet you tapped never redrew. Now it refreshes the pill and the sheet. */
  var el=document.getElementById('speakbar');
  if(el) el.innerHTML='';
  renderPlayer();
  /* Reading aloud starts long after the chapter was drawn, and this only
     redraws the pill, so the page has to be told directly that it is being
     read — otherwise the verse focus never comes on. */
  try{
    var rs=(LAYOUT==='split')?readerSide():null;
    var root=(rs&&paneEl(rs,2))||document;
    var rd=root.querySelector('.rd');
    var aloud=!!S.speaking && !(Speech.isPaused&&Speech.isPaused());
    var held=!!S.speaking && !aloud;
    var focusing=S.focus!==false && aloud;
    if(rd&&rd.classList){ rd.classList.toggle('aloud', aloud); rd.classList.toggle('held', held);
      rd.classList.toggle('listening', focusing); }
    var was=document.body.classList.contains('focusing');
    document.body.classList.toggle('focusing', focusing);
    /* as the design does when focus begins: bring the verse being read to the
       middle of the clear window */
    if(focusing&&!was) setTimeout(function(){
      var cur=root.querySelector('.rd .v.speaking');
      if(cur) bringIntoView(cur,'center',true);
    },60);
    /* and mark which verse it is on, or every verse dims and none is lit */
    paintSpeaking();
  }catch(e){}
  if(S.readerOpts&&S.reading!==null&&!S.inRender){ S.keepScroll=true; render(); }
}

/* Load Kokoro, then pick up playback where we were. */
function enableKokoro(resumeAfter){
  S.voiceNotice='';
  Kokoro.load(function(){ renderSpeakBar(); }).then(function(){
    S.voiceMode='kokoro'; saveVoice(); renderSpeakBar();
    if(resumeAfter&&S.reading!==null){ speakFrom(curVerse()); }
  }).catch(function(){
    S.voiceMode='system'; renderSpeakBar();
  });
}
function saveVoice(){
  Store.set('strata:voice',{mode:S.voiceMode, kokoro:S.kokoroVoice, sys:S.sysVoiceURI,
    rate:Speech.getRate(), readMode:S.readMode,
    quality:S.voiceQuality, autoNext:S.autoNext});
}
function applySysVoice(uri){
  S.sysVoiceURI=uri;
  var v=Speech.voices().filter(function(x){return x.voiceURI===uri;})[0];
  Speech.setVoice(v||null);
}


function esc(s){return String(s).replace(/[&<>"]/g,function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
var NO_ERA={key:'none',name:'Imported',span:'',color:'#94A3B8',power:'',captivity:'',
            rulers:[],note:''};
function eraOf(b){
  if(!b||!b.eras||!b.eras.length) return NO_ERA;
  return ERA[b.eras[b.eras.length-1]]||NO_ERA;
}
/* Books are addressed by id, not array position: imported books are numbered
   from 1000 so their ids never collide with the 80 books of scripture. */
var BY_ID={};
function reindex(){ BY_ID={}; BOOKS.forEach(function(b){ BY_ID[b.i]=b; }); }
function BK(i){ return BY_ID[i]; }
reindex();   /* BOOKS is already populated in the single-file build */
function factsFor(i){return FACTS.filter(function(f){return f.book===i;});}

var I={
 home:'<path d="M3 10l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2z"/>',
 book:'<path d="M4 4h7a2 2 0 012 2v14a2 2 0 00-2-2H4z"/><path d="M20 4h-7a2 2 0 00-2 2v14a2 2 0 012-2h7z"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 back:'<path d="M15 5l-7 7 7 7"/>',
 next:'<path d="M9 5l7 7-7 7"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 mark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
 pen:'<path d="M5 3h9l5 5v13a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v6h5"/><path d="M8 13h8M8 17h5"/>',
 hilite:'<path d="M15 3.5l5.5 5.5-8 8H7v-5.5z"/><path d="M4 21h9"/><path d="M9.5 11.5l3 3"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
 bible:'<path d="M5 3h13a1 1 0 011 1v16a1 1 0 01-1 1H5a2 2 0 010-4h13"/>'+
   '<path d="M9 3v8l2.5-2L14 11V3"/>',
 trash:'<path d="M4 7h16"/><path d="M9 7V5h6v2"/><path d="M6 7l1 13h10l1-13"/>',
 close:'<path d="M6 6l12 12M18 6L6 18"/>',
 sort:'<path d="M4 7h12M4 12h9M4 17h6"/>',
 fwd:'<path d="M9 5l7 7-7 7"/>',
 down:'<path d="M6 9l6 6 6-6"/>',
 /* show only the text: an eye, per the redesign */
 eye:'<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/>'+
   '<circle cx="12" cy="12" r="3"/>',
 playSolid:'<path d="M7 4.5l12 7.5-12 7.5z" fill="currentColor" stroke-linejoin="round"/>',
 stop:'<rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="currentColor"/>',
 bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
 /* eight even teeth on a proper angular grid; the old one was drawn by
    hand and read as a lopsided star at icon size */
 gear:'<path d="M21.27 10.46 L21.27 13.54 L18.71 14.01 L18.16 15.32 L19.65 17.47 L17.47 19.65 L15.32 18.16 L14.01 18.71 L13.54 21.27 L10.46 21.27 L9.99 18.71 L8.68 18.16 L6.53 19.65 L4.35 17.47 L5.84 15.32 L5.29 14.01 L2.73 13.54 L2.73 10.46 L5.29 9.99 L5.84 8.68 L4.35 6.53 L6.53 4.35 L8.68 5.84 L9.99 5.29 L10.46 2.73 L13.54 2.73 L14.01 5.29 L15.32 5.84 L17.47 4.35 L19.65 6.53 L18.16 8.68 L18.71 9.99 Z"/>'+
   '<circle cx="12" cy="12" r="3.1"/>',
 voice:'<path d="M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3z"/><path d="M5 11a7 7 0 0014 0"/><path d="M12 18v3M8.5 21h7"/>',
 play:'<path d="M7 4.5l12 7.5-12 7.5z"/>',
 pause:'<path d="M8 5v14M16 5v14"/>'
};
function svg(p,c){return '<svg viewBox="0 0 24 24" class="'+(c||'')+'">'+p+'</svg>';}

/* ================= TOP BAR ================= */
/* the name each screen goes by, now that the header says where you are */
var TITLES={library:'Library', study:'Study', topics:'Did you know',
  notes:'Note Gallery', saves:'Saves', bible:'The Bible',
  about:'Settings', search:'Search'};
function renderTop(){
  /* In the design only the reader has a bar at the top. Every other screen's
     own title is its header, so a second, centred title above it was the
     duplication that made Saves say "Saves" twice. */
  var bk=(S.reading!==null)?BK(S.reading):null;
  var h='';
  if(bk){
    var sub='';
    /* a movement's name is .t in the data, which is why this always fell back */
    try{ var mv=moveFor(bk,S.ch); if(mv&&(mv.t||mv.title)) sub=mv.t||mv.title; }catch(e){}
    if(!sub) sub='King James \u00b7 '+S.ch+' of '+bk.nch;
    var pr=bookProgress(bk);
    h+='<button class="ctitle left" data-a="toc" aria-label="Choose a chapter">'+
       '<span class="ct1">'+esc(bk.name)+' '+S.ch+
       '<i class="chev">'+svg(I.down)+'</i></span>'+
       '<span class="ct2">'+esc(sub)+'</span></button>';
    h+='<div class="hprog"><i style="width:'+pr.pct+'%"></i></div>';
    h+='<div class="hact">'+(LAYOUT!=='phone'?'<div class="island"></div>':'')+
       '<button class="icon" data-a="search" aria-label="Search the scriptures">'+
         svg(I.search)+'</button>'+
       '<button class="icon rbaa'+(S.readerOpts?' on':'')+'" data-a="readeropts" '+
         'aria-label="Reading settings" aria-expanded="'+(!!S.readerOpts)+'">Aa</button>'+
       '</div>';
  } else if(S.book!==null){
    h+='<button class="icon" data-nav="library" aria-label="Back to the library">'+
       svg(I.back)+'</button>'+
       '<span class="ctitle plain"><span class="ct1">'+esc(BK(S.book).name)+'</span></span>'+
       '<button class="icon" data-a="search" aria-label="Search the scriptures">'+
       svg(I.search)+'</button>';
  }
  topbar.innerHTML=h;
  try{
    var scr=S.reading!==null?'reader':(S.book!==null?'book':
      (S.tab==='library'&&S.atlasOpen?'atlas':S.tab));
    /* each side says what it is showing; the body carries the first side's,
       which on a phone is the only one */
    var pe=paneEl(CUR);
    if(pe&&pe.setAttribute){ pe.setAttribute('data-screen',scr);
      if(pe.classList) pe.classList.toggle('is-reader', S.reading!==null); }
    if(CUR==='A') document.body.setAttribute('data-screen',scr);
  }catch(e){}
}





/* ================= NAV ================= */
/* The design's tab icons, path for path. They are line drawings at a 1.6
   stroke, so they are drawn here rather than through svg(), which fills. */
var TAB_ICON={
  library:'M4 5h4v14H4zM10 5h4v14h-4zM16.3 5.6l3.4 0.9-3.1 12.9-3.4-0.9z',
  study:'M12 5 3 9.5l9 4.5 9-4.5zM7 11.8v4.4c2.8 2 7.2 2 10 0v-4.4',
  bible:'M6.5 3.5h11v17h-11A1.5 1.5 0 0 1 5 19V5a1.5 1.5 0 0 1 1.5-1.5zM5 19a1.5 1.5 0 0 1 1.5-1.5h11M9 7.5h5',
  notes:'M6 4h12v16H6zM9 9h6M9 12.5h6M9 16h3.5',
  saves:'M7 3.5h10v17l-5-3.8-5 3.8z',
  search:'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM20 20l-4-4'};
function renderNav(){
  if(LAYOUT!=='phone') return renderTabletBar();
  var items=[['library','Library'],['study','Study'],['bible','Bible'],
             ['notes','Notes'],['saves','Saves']];
  nav.innerHTML=items.map(function(it){
    var on=(S.tab===it[0]&&S.book===null&&S.reading===null)||
           (it[0]==='bible'&&S.reading!==null);
    return '<button data-nav="'+it[0]+'" aria-selected="'+on+'">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+TAB_ICON[it[0]]+'"/></svg>'+
      '<span>'+it[1]+'</span></button>';}).join('');
}

/* A tab on the bar. On a phone, leaving the chapter stops reading aloud, as it
   always has; with two sides, a tab chosen for the side that is not reading
   leaves the reading alone. */
function leaveReading(){
  if(LAYOUT==='split'&&S.reading===null) return;
  stopSpeaking();
}
function goTab(k, quiet){
  leaveReading();
  if(S.reading!==null) closePop();
  S.tab=k;S.editing=null;S.apocOpen=false;S.trackerOpen=false;S.wordsOpen=false;
  S.atlasOpen=false;S.mapEra=null;S.plate=null;
  if(S.mode==='mybooks') S.mode='shelf';
  if(k==='bible'){
    if(S.reading===null){
      var last=S.lastRead||{}, bk=BK(last.b);
      if(!bk) bk=BOOKS.filter(function(x){return x.name==='Proverbs';})[0];
      if(bk){ S.book=bk.i; S.reading=bk.i; S.ch=last.c||1; }
    }
  } else { S.book=null;S.reading=null; }
  S.jumpRef=null;
  if(!quiet) render();
}

/* ================= HOME ================= */
var VERSES=[[53,'John',3,16],[22,'Isaiah',41,10],[19,'Psalms',23,1],
            [45,'Ecclesiasticus',6,14],[63,'Philippians',4,13],[26,'Daniel',3,17]];
function bookCard(b,color){
  return '<button class="bk" data-book="'+b.i+'" style="--bc:'+(color||eraOf(b).color)+'">'+
    '<span class="n">'+esc(b.name)+'</span><span class="m">'+b.nch+' ch'+
    (b.apoc?' \u00b7 Apocrypha':'')+'</span></button>';
}

/* ================= LIBRARY ================= */

/* ---------- one head for every screen ----------
   From the redesign: a small eyebrow, the name of the screen in the serif,
   a line saying what is in it, and at most one action. The chips that filter
   it scroll sideways rather than wrapping into a wall. */
function brandRow(){
  return '<div class="brand-row">'+
    '<span class="brand-tile" aria-hidden="true"><i>XVI</i><b></b><i>XI</i></span>'+
    '<span class="brand-word">sixteen eleven</span>'+
    '<span class="brand-act">'+
      '<button class="icon" data-a="search" aria-label="Search the scriptures">'+
        svg(I.search)+'</button>'+
      '<button class="icon" data-a="showabout" aria-label="Settings">'+
        '<svg viewBox="0 0 24 24" class="line"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/>'+
        '<circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg></button>'+
    '</span></div>';
}
function screenHead(opts){
  var h='<div class="shead">';
  if(opts.title){
    h+='<div class="shrow"><div class="shl">';
    if(opts.eyebrow) h+='<div class="sheyebrow">'+esc(opts.eyebrow)+'</div>';
    h+='<h2>'+esc(opts.title)+'</h2>';
    if(opts.sub) h+='<p>'+esc(opts.sub)+'</p>';
    h+='</div>';
    if(opts.action) h+=opts.action;
    h+='</div>';
  }
  if(opts.chips) h+='<div class="shchips">'+opts.chips+'</div>';
  if(opts.rows) h+='<div class="shrows">'+opts.rows+'</div>';
  return h+'</div>';
}
function shAction(action, icon, label, primary){
  return '<button class="shbtn'+(primary?' primary':'')+'" data-a="'+action+'" '+
    'aria-label="'+esc(label)+'" title="'+esc(label)+'">'+svg(icon)+'</button>';
}

function vLibrary(){
  if(S.mode==='sheets'&&(S.sheet||S.sheetEdit)) return vSheets();
  if(S.apocOpen) return vApocrypha();
  if(S.trackerOpen) return vTracker();
  if(S.atlasOpen) return (S.plate?vPlate():vAtlas());
  if(S.wordsOpen) return vWords();
  if(S.mode==='mybooks') return vMyBooksPage();
  if(S.mode==='strata') return vErasPage();

  var h='<div class="libwrap">';
  var shown=BOOKS.filter(function(bk){return !bk.user;}).length;
  h+=brandRow();
  h+=shelfGreeting();
  if(S.cat==='all') h+=continueCard();
  h+=screenHead({
    chips:CATS.filter(function(c){
        return c.key!=='mine'||S.shelf.length;
      }).map(function(c){
        return '<button class="chip'+(S.cat===c.key?' on':'')+'" data-cat="'+c.key+'">'+
          esc(c.name)+'</button>';
      }).join('')
  });

  var list=BOOKS.filter(function(bk){
    if(S.cat==='all') return !bk.user && !(bk.i>=39&&bk.i<=52);
    if(S.cat==='mine') return bk.user;
    if(S.cat==='apoc') return false;
    var c=catOf(bk); return c.key===S.cat;
  });

  h+='<div class="covers">';
  h+=list.map(function(bk){ return coverHTML(bk); }).join('');
  /* after the books, as the design's shelf opens straight onto Genesis */
  if(S.cat==='all'||S.cat==='apoc'){
    h+=coverHTML({apoc:1,name:'The Apocrypha',sub:'14 books'},null,'apoc');
  }
  /* the tracker sits at the end of the shelf as a board of its own */
  if(S.cat==='all'||S.cat==='tracker') h+=trackerCover();
  if(S.cat==='all'||S.cat==='atlas') h+=atlasCover();
  if(S.cat==='all'||S.cat==='words') h+=wordsCover();
  h+='</div>';

  if(S.cat==='mine'&&!S.shelf.length)
    h+='<div class="empty" style="color:var(--ink3)">No books added yet.</div>';
  if(S.cat==='mine'||S.cat==='all')
    h+='<div style="padding:4px 2px 0">'+
       '<button class="btn sec" data-mode="strata" style="margin-bottom:8px">'+
       'Browse by era</button>'+
       '<button class="btn sec" data-mode="mybooks">'+
       'Your own reading</button></div>';

  return h+'</div>';
}

/* A cover painting: WebP where the browser takes it, the JPEG made beside it
   where it does not (Safari before 14, so every iPad on iOS 12). The caller
   writes the <img> and closes the <picture>. */
function coverPicture(art){
  return '<picture><source srcset="assets/covers/'+esc(art)+'.webp" type="image/webp">';
}
function coverHTML(bk, _x, force){
  var cat=force==='apoc'?CATS[7]:catOf(bk);
  var apoc=force==='apoc';
  var motif=apoc?MOTIF.scroll:motifFor(bk);
  var attr=apoc?'data-apoc="1"':'data-book="'+bk.i+'"';
  var pr=apoc?null:bookProgress(bk);
  var art=(COVER_ART&&META.covers&&!bk.user)?META.covers[bk.name]:null;
  var started=!!(pr&&pr.done>0&&pr.done<pr.total)||(!apoc&&S.lastBook===bk.i);
  /* The design's plate: a book-spine corner and a tooled inner border. The
     painting is its face, as you asked, rather than plain leather. The count
     sits under the plate, and a notched red ribbon marks the book you are in. */
  return '<div class="shelfbk">'+
    '<button class="cover'+(apoc?' isapoc':'')+(art?' hasart':'')+
      (pr&&pr.done===pr.total?' finished':'')+'" '+attr+
      ' style="--a:'+cat.tint[0]+';--b:'+cat.tint[1]+'" aria-label="'+esc(bk.name)+'">'+
      (art
        ? coverPicture(art)+'<img class="cart" src="assets/covers/'+esc(art)+'.jpg" alt="" '+
          'loading="lazy" decoding="async" width="360" height="480"></picture>'+
          '<span class="cscrim"></span>'
        : '<span class="cmark"><svg viewBox="0 0 100 100">'+motif+'</svg></span>')+
      '<span class="ctool"></span>'+
      '<span class="cbody"><span class="ct">'+esc(bk.name)+'</span></span>'+
      (started?'<span class="ribbon" aria-hidden="true"></span>':'')+
    '</button>'+
    '<span class="cn">'+esc(apoc?bk.sub:(pr&&pr.done>0&&pr.done<pr.total
        ? pr.done+' of '+pr.total+' ch'
        : bk.nch+(bk.nch===1?' chapter':' chapters')))+'</span>'+
    '</div>';
}

function trackerCover(){
  var tp=totalProgress();
  return '<button class="cover istracker" data-a="opentracker">'+
    '<span class="art mark" aria-hidden="true"><i>XVI</i><b></b><i>XI</i></span>'+
    '<span class="ct">Tracker</span>'+
    '<span class="cn">'+tp.pct+'% read</span>'+
    (tp.done?'<span class="cbar"><i style="width:'+tp.pct+'%"></i></span>':'')+
    '</button>';
}

function vTracker(){
  var tp=totalProgress();
  var h='<div class="libwrap">';
  h+='<button class="back" style="color:var(--blue)" data-a="closetracker">&larr; Library</button>';
  h+='<div class="libhead"><h2>Tracker</h2>'+
     '<p>Every chapter you have marked read, across all eighty books.</p></div>';

  h+='<div class="tkhero"><div class="tkpct">'+tp.pct+'<span>%</span></div>'+
     '<span class="progbar big dark"><i style="width:'+tp.pct+'%"></i></span>'+
     '<p>'+tp.done+' of '+tp.total+' chapters</p>'+
     '<button class="btn" data-a="nextunread">Go to my next unread chapter</button></div>';

  /* by section, so progress reads as a journey rather than a long list */
  var secs={};
  BOOKS.forEach(function(b){
    if(b.user) return;
    var c=catOf(b); if(!c) return;
    var e=secs[c.key]||(secs[c.key]={name:c.name,done:0,total:0,books:[]});
    var p=bookProgress(b);
    e.done+=p.done; e.total+=p.total; e.books.push({b:b,p:p});
  });
  Object.keys(secs).forEach(function(k){
    var e=secs[k], pct=e.total?Math.round(100*e.done/e.total):0;
    h+='<div class="tksec"><div class="tkhead"><span>'+esc(e.name)+'</span>'+
       '<b>'+pct+'%</b></div>'+
       '<span class="progbar dark full"><i style="width:'+pct+'%"></i></span>'+
       '<div class="tkbooks">'+e.books.map(function(x){
         return '<button class="tkbook'+(x.p.pct===100?' done':'')+'" data-book="'+x.b.i+'">'+
           '<span class="tn">'+esc(x.b.name)+'</span>'+
           '<span class="tv">'+x.p.done+'/'+x.p.total+'</span>'+
           '<span class="progbar dark tiny"><i style="width:'+x.p.pct+'%"></i></span>'+
           '</button>';
       }).join('')+'</div></div>';
  });
  return h+'</div>';
}

/* The Apocrypha sits behind one cover, then opens as a list with overviews. */
function vApocrypha(){
  var h='<div class="libwrap">';
  h+='<button class="back" style="color:var(--blue)" data-a="closeapoc">&larr; Library</button>';
  h+='<div class="libhead"><h2>The Apocrypha</h2>'+
     '<p>Fourteen books between the Testaments, carried in the 1611 King James '+
     'and dropped from most later printings.</p></div>';
  /* These had their own renderer, which drew the same scroll motif for all
     fourteen — so every one of them looked identical even after each got its
     own painted cover. They now show their art like any other book. */
  h+=BOOKS.filter(function(b){return b.i>=39&&b.i<=52;}).map(function(b){
    var art=(COVER_ART&&META.covers)?META.covers[b.name]:null;
    return '<button class="apocrow'+(art?' hasart':'')+'" data-book="'+b.i+'">'+
      (art
        ? '<span class="ar">'+coverPicture(art)+'<img src="assets/covers/'+esc(art)+'.jpg" alt="" '+
          'loading="lazy" decoding="async" width="360" height="480"></picture></span>'
        : '<span class="ar"><svg viewBox="0 0 100 100">'+motifFor(b)+'</svg></span>')+
      '<span class="aw"><span class="an">'+esc(b.name)+'</span>'+
      '<span class="am">'+b.nch+(b.nch===1?' chapter':' chapters')+' \u00b7 '+
      esc(eraOf(b).name)+'</span>'+
      '<span class="as">'+esc(b.summary)+'</span></span></button>';
  }).join('');
  return h+'</div>';
}

/* ================= BOOK ================= */
function vBook(){
  var b=BK(S.book);
  var h='<div class="bhead"><h2>'+esc(b.name)+'</h2>'+
        '<div class="full">'+esc(b.full)+'</div><div class="pills">'+
        '<span>'+esc(SEC[b.section].name)+'</span>'+
        b.eras.map(function(k){return '<span>'+esc(ERA[k].name)+'</span>';}).join('')+
        '<span>'+b.nch+' chapters</span></div></div>';
  var tabs=[['overview','Overview'],['timeline','Timeline'],['chapters','Chapters']];
  h+='<div class="tabs">'+tabs.map(function(t){
      return '<button data-btab="'+t[0]+'" aria-selected="'+(S.btab===t[0])+'">'+t[1]+'</button>';
    }).join('')+'</div>';
  h+='<div>'+({overview:tOverview,timeline:tTimeline,chapters:tChapters})[S.btab]()+'</div>';
  return h;
}
function tOverview(){
  var b=BK(S.book);
  var h='<div class="card"><p style="margin:0;font-size:14.5px;line-height:1.6;color:var(--ink)">'+
        esc(b.summary)+'</p></div>';
  var mapEra=(b.eras&&b.eras.length)?b.eras[b.eras.length-1]:null;
  var bplate=mapEra?platesForEra(mapEra)[0]:null;
  if(bplate&&!b.user){
    h+='<button class="minimap" data-plate="'+esc(bplate.id)+'">'+
       '<b>'+esc(bplate.name)+'</b>'+
       '<span class="mmlab">'+esc(bplate.note)+'</span></button>';
  }
  var bp=bookProgress(b);
  h+='<div class="pickhead"><span class="lab">Choose a chapter</span>'+
     '<b>'+(b.user?'':bp.done+' of '+bp.total+' read')+'</b></div>';
  h+='<div class="chg">';
  for(var ci=1;ci<=b.nch;ci++)
    h+='<button class="chb'+(b.chapters[ci]?' rich':'')+
       (isRead(b.i,ci)?' read':'')+'" data-readch="'+ci+'">'+ci+'</button>';
  h+='</div>';
  h+='<button class="btn" data-readch="'+(bp.done&&bp.done<bp.total
      ?firstUnreadIn(b):1)+'" style="margin-bottom:12px">'+
     (bp.done&&bp.done<bp.total?'Continue where I left off':'Read from the beginning')+
     '</button>';
  h+='<div class="card"><div class="lab">Scribe \u2014 who wrote it</div>'+
     '<p style="margin:0;font-size:13.5px;line-height:1.55;color:var(--ink)">'+esc(b.scribe)+'</p></div>';
  h+='<div class="card"><div class="lab">Setting</div><dl class="kv">'+
     '<dt>Written</dt><dd>'+esc(b.written)+'</dd>'+
     (b.power?'<dt>Power</dt><dd>'+esc(b.power)+'</dd>':'')+
     '<dt>Rulers</dt><dd>'+b.rulers.map(esc).join('<br>')+'</dd></dl></div>';
  if(b.captivity) h+='<div class="cap"><div class="lab">Captivity</div><p>'+esc(b.captivity)+'</p></div>';
  h+='<div class="card"><div class="lab">Themes</div><div class="pills">'+
     b.themes.map(function(t){return '<span>'+esc(t)+'</span>';}).join('')+'</div></div>';
  if(b.prophecies.length) h+='<div class="card"><div class="lab">Prophecies</div><ul class="tick">'+
     b.prophecies.map(function(p){return '<li>'+esc(p)+'</li>';}).join('')+'</ul></div>';
  if(b.laws.length) h+='<div class="card"><div class="lab">Laws given here</div><ul class="tick law">'+
     b.laws.map(function(p){return '<li>'+esc(p)+'</li>';}).join('')+'</ul></div>';
  var fx=factsFor(S.book);
  if(fx.length) h+='<div class="h2">Did you know</div>'+fx.map(factHTML).join('');
  return h;
}
function factHTML(f){
  return '<div class="fact"><div class="k">From Josephus</div><h4>'+esc(f.title)+'</h4>'+
    '<p>'+esc(f.text)+'</p><div class="c">'+esc(f.cite)+
    (f.ch?' \u00b7 on '+esc((BK(f.book)||{name:''}).name)+' '+f.ch:'')+'</div></div>';
}
function tTimeline(){
  var b=BK(S.book),h='';
  b.eras.forEach(function(k){
    var e=ERA[k];
    h+='<div class="card" style="border-left:4px solid '+e.color+'">'+
       '<div class="lab">'+esc(e.name)+' \u00b7 '+esc(e.span)+'</div><dl class="kv">'+
       '<dt>Power</dt><dd>'+esc(e.power)+'</dd>'+
       '<dt>Captivity</dt><dd>'+esc(e.captivity)+'</dd>'+
       '<dt>Rulers</dt><dd>'+e.rulers.map(esc).join('<br>')+'</dd></dl>'+
       '<p style="margin:9px 0 0;font-size:13px;color:var(--ink2);line-height:1.5">'+esc(e.note)+'</p></div>';
  });
  if(b.moves.length){
    h+='<div class="h2">Sequence of events</div><div class="tl">'+b.moves.map(function(m){
      return '<div class="tl-i"><div class="tl-r">Chapters '+esc(m.r)+'</div>'+
        '<div class="tl-t">'+esc(m.t)+'</div><div class="tl-n">'+esc(m.n)+'</div></div>';
    }).join('')+'</div>';
  }
  return h;
}
function moveFor(b,n){
  for(var i=0;i<b.moves.length;i++){
    var p=b.moves[i].r.split('\u2013'), lo=parseInt(p[0],10), hi=parseInt(p[1]||p[0],10);
    if(!isNaN(lo)&&n>=lo&&n<=hi) return b.moves[i];
  }
  return null;
}
function tChapters(){
  var b=BK(S.book), n=S.ch;
  var h='<div class="chg">';
  for(var i=1;i<=b.nch;i++)
    h+='<button class="chb'+(b.chapters[i]?' rich':'')+(isRead(b.i,i)?' read':'')+
       '" data-ch="'+i+
       '" aria-selected="'+(i===n)+'">'+i+'</button>';
  h+='</div>';
  var mv=moveFor(b,n), d=b.chapters[n];
  h+='<div class="card chd"><div class="num">'+n+'</div>';
  if(mv) h+='<div class="mv">'+esc(mv.t)+'</div>';
  h+='<div class="tx">'+esc(d||(mv?mv.n:'No chapter note written for this one yet.'))+'</div>';
  h+='<button class="btn" style="margin-top:13px" data-readch="'+n+'">Read chapter '+n+'</button></div>';
  var fx=factsFor(S.book).filter(function(f){return f.ch===n;});
  if(fx.length) h+=fx.map(factHTML).join('');
  return h;
}

/* ================= READER ================= */
/* the read-aloud controls, so the sheet and the speak bar share one source */

/* the speed buttons, with whichever is nearest the current rate shown as
   chosen, so a rate saved from before still lights one up */
var RATES=[0.7,0.85,1,1.15,1.3,1.5];
function nearestRate(){
  var r=Speech.getRate(), best=RATES[0];
  RATES.forEach(function(x){ if(Math.abs(x-r)<Math.abs(best-r)) best=x; });
  return best;
}
function speedSeg(){
  var cur=nearestRate();
  return '<div class="setseg speedseg">'+RATES.map(function(r){
    return '<button data-rate="'+r+'" aria-selected="'+(r===cur)+'">'+r+'\u00d7</button>';
  }).join('')+'</div>';
}
function speakOptionsHTML(noSpeed){
  var h='';
  /* Balanced either way. Without the speed row this used to open with a
     closing tag for a box that was never opened, which the browser took as
     the end of the sheet: every group below Read aloud fell out of it. */
  h+='<div class="sopts">';
  if(!noSpeed){
    h+='<div class="lab">Speed</div><div class="rates">';
    [0.7,0.85,1,1.15,1.3,1.5].forEach(function(r){
      h+='<button data-rate="'+r+'" aria-selected="'+(Speech.getRate()===r)+'">'+r+'\u00d7</button>';
    });
    h+='</div>';
  }
    h+='<div class="lab" style="margin-top:13px">Voice quality</div><div class="rates">'+
       '<button data-vq="smooth" aria-selected="'+(S.voiceQuality!=='fast')+'">Smooth</button>'+
       '<button data-vq="fast" aria-selected="'+(S.voiceQuality==='fast')+'">Faster</button>'+
       '</div>'+
       '<button class="fol" data-a="toggleauto" aria-selected="'+(!!S.autoNext)+'">'+
       (S.autoNext?'\u2713 ':'')+'Keep reading into the next chapter</button>'+
       '<div class="lab" style="margin-top:13px">Delivery</div><div class="rates">'+
       '<button data-read="flow" aria-selected="'+(S.readMode==='flow')+'">Flowing passages</button>'+
       '<button data-read="verse" aria-selected="'+(S.readMode==='verse')+'">Verse by verse</button>'+
       '</div>'+
       '<button class="fol" data-a="togglefollow" aria-selected="'+(!!S.follow)+'">'+
       (S.follow?'\u2713 ':'')+'Scroll to the verse being read</button></div>';
  return h;
}

function currentVoiceName(){
  if(S.voiceMode==='kokoro'&&Kokoro.ready()){
    var v=KOKORO_VOICES.filter(function(x){return x.id===S.kokoroVoice;})[0];
    return 'Neural \u00b7 '+(v?v.name:S.kokoroVoice);
  }
  var sv=Speech.voices().filter(function(x){return x.voiceURI===S.sysVoiceURI;})[0];
  return sv?('Device \u00b7 '+sv.name):'Device \u00b7 standard voice';
}

function kokoroVoiceList(){
  var live=Kokoro.listVoices();
  if(!live) return KOKORO_VOICES;
  var known={}; KOKORO_VOICES.forEach(function(v){ known[v.id]=v; });
  return live.map(function(id){
    return known[id]||{id:id,name:id.replace(/^[abm]+_/,''),note:''};
  });
}

function voicePickerHTML(){
  var h='<div class="sopts vpick">';
  h+='<div class="lab">Neural voice \u2014 Kokoro</div>';
  if(!Kokoro.ready()&&Kokoro.status()!=='loading'){
    h+='<p class="vnote">Kokoro is an 82-million-parameter open-weight model that runs '+
       'entirely on this device. The weights download once (about 86 MB) and are cached '+
       'by the browser after that. It needs a connection the first time.</p>';
    h+='<button class="btn sec" data-a="loadkokoro">Use the neural voice</button>';
  } else {
    h+='<div class="vgrid">'+kokoroVoiceList().map(function(v){
      var sel=(S.voiceMode==='kokoro'&&S.kokoroVoice===v.id);
      return '<button class="vopt" data-kvoice="'+esc(v.id)+'" aria-selected="'+sel+'">'+
        '<span class="vn">'+esc(v.name)+'</span>'+
        (v.note?'<span class="vd">'+esc(v.note)+'</span>':'')+'</button>';
    }).join('')+'</div>';
  }
  var sv=Speech.voices();
  h+='<div class="lab" style="margin-top:14px">Device voices</div>';
  if(!sv.length){
    h+='<p class="vnote">This browser reports no built-in voices.</p>';
  } else {
    h+='<div class="vgrid">'+sv.slice(0,40).map(function(v){
      var sel=(S.voiceMode==='system'&&S.sysVoiceURI===v.voiceURI);
      return '<button class="vopt" data-svoice="'+esc(v.voiceURI)+'" aria-selected="'+sel+'">'+
        '<span class="vn">'+esc(v.name)+'</span>'+
        '<span class="vd">'+esc(v.lang||'')+'</span></button>';
    }).join('')+'</div>';
  }
  h+='</div>';
  return h;
}


/* one group of the reading sheet: a row you tap to open, and its contents */
function rGroup(key, title, body, summary){
  var open=(S.rsOpen===key);
  return '<div class="rsg'+(open?' open':'')+'">'+
    '<button class="rsh" data-rsgroup="'+key+'" aria-expanded="'+open+'">'+
      '<span class="rst">'+esc(title)+'</span>'+
      '<span class="rsv">'+esc(summary||'')+'</span>'+
      '<span class="rsc">'+svg(I.down)+'</span></button>'+
    (open?'<div class="rsb">'+body+'</div>':'')+
    '</div>';
}
function voiceSummary(){
  if(S.voiceMode==='kokoro') return 'Neural';
  return Speech.supported&&Speech.supported()?'Device voice':'Unavailable';
}


/* ---------- the reading pill ----------
   It lived inside the chapter, so it scrolled away with the first verse. It
   has its own fixed layer now, above the tab bar, and is redrawn on its own
   whenever speech starts, pauses or stops — without rebuilding the page. */
function nowRef(){
  var b=BK(S.reading); if(!b) return '';
  if(!S.speaking||S.speakAt<0) return b.name+' '+S.ch;
  var rb=BK(S.speakB)||b;
  return rb.name+' '+S.speakC+':'+curVerse();
}
function chapterPct(){
  if(!S.speaking||S.speakAt<0) return 0;
  return Math.round(Math.min(100,(curVerse()/lastVerse())*100));
}
/* ---------- the header island (tablet design 4b) ----------
   On a tablet the player folds into the chapter's own header as a pill: the
   play button, a ring round it that fills as the chapter is read, the verse
   being read and a step to the next. It takes no room from the text, and the
   bottom edge is left to the tablet bar. Phones keep the bar at the foot. */
var RING=2*Math.PI*18;
function islandHTML(){
  if(S.reading===null||!META) return '';
  var playing=!!(Speech.isPlaying&&Speech.isPlaying());
  var paused=!!(Speech.isPaused&&Speech.isPaused());
  var live=playing||paused, can=canRead()||live;
  if(!can) return '';
  var rate=(Speech.getRate?Speech.getRate():1);
  var pct=live?chapterPct():0;
  var title=live?('Verse '+curVerse()):'Listen';
  var sub=(playing&&!paused)?('Reading · '+rate+'×'):paused?('Paused · '+rate+'×'):'This chapter';
  return '<div class="island'+(live?' live':'')+'" role="group" aria-label="Read aloud">'+
    '<button class="il-play" data-a="'+(paused?'resume':(playing?'pause':'speak'))+'" '+
      'aria-label="'+(paused?'Continue reading aloud':(playing?'Pause reading aloud':'Read this chapter aloud'))+'">'+
      '<svg class="il-ring" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18" '+
      'stroke-dasharray="'+RING.toFixed(2)+'" stroke-dashoffset="'+(RING*(1-pct/100)).toFixed(2)+'" '+
      'transform="rotate(-90 22 22)"/></svg>'+svg(playing&&!paused?I.pause:I.playSolid)+'</button>'+
    '<span class="il-mid"><b class="il-v">'+esc(title)+'</b><small class="il-s">'+esc(sub)+'</small></span>'+
    '<button class="il-next" data-a="nextverse" aria-label="Next verse"'+(live?'':' disabled')+'>'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6v12l9-6zM16 6h2v12h-2z"/></svg></button>'+
    '</div>';
}
function refreshIsland(){
  var els=document.querySelectorAll?document.querySelectorAll('.island'):[];
  if(!els||!els.length) return;
  var r=(LAYOUT==='split')?readerSide():null;
  var h=(r&&r!==CUR)?withPane(r, islandHTML):islandHTML();
  for(var i=0;i<els.length;i++){
    var tmp=document.createElement('div'); tmp.innerHTML=h;
    if(tmp.firstChild) els[i].parentNode.replaceChild(tmp.firstChild, els[i]);
  }
}
function playerHTML(){
  if(LAYOUT!=='phone') return '';          /* a tablet has the header island */
  if(S.reading===null||S.immersive||S.readerOpts||!META) return '';
  var b=BK(S.reading); if(!b) return '';
  var playing=!!(Speech.isPlaying&&Speech.isPlaying());
  var paused=!!(Speech.isPaused&&Speech.isPaused());
  var live=playing||paused;
  var can=canRead()||live;
  /* The design keeps one bar at the foot of the reader the whole time: the
     way in when nothing is playing, and pause, place and progress once it is.
     The eye stays, because you asked for it there. */
  var ref=live?nowRef():(b.name+' '+S.ch);
  var sub=playing&&!paused?('Reading aloud \u00b7 '+(Speech.getRate?Speech.getRate():1)+'\u00d7')
         :paused?'Paused'
         :can?'Listen to this chapter':'Read aloud is not available here';
  return '<div class="player bar'+(live?' live':'')+'" role="toolbar" aria-label="Reading controls">'+
    (can?'<button class="pl-play" data-a="'+(paused?'resume':(playing?'pause':'speak'))+'" '+
      'aria-label="'+(paused?'Continue reading aloud':(playing?'Pause reading aloud':
      'Read this chapter aloud'))+'">'+
      svg(playing&&!paused?I.pause:I.playSolid)+'</button>':'')+
    '<span class="pl-mid">'+
      '<span class="pl-ref">'+esc(ref)+'</span>'+
      '<span class="pl-sub">'+esc(sub)+'</span>'+
      '<span class="pl-bar"><i style="width:'+(live?chapterPct():0)+'%"></i></span>'+
    '</span>'+
    '<button class="pl-step" data-a="prevverse" aria-label="Previous verse"'+
      (live&&curVerse()>1?'':' disabled')+'>'+
      '<svg viewBox="0 0 24 24"><path d="M18 6v12l-9-6zM6 6h2v12H6z"/></svg></button>'+
    '<button class="pl-step" data-a="nextverse" aria-label="Next verse"'+
      (live?'':' disabled')+'>'+
      '<svg viewBox="0 0 24 24"><path d="M6 6v12l9-6zM16 6h2v12h-2z"/></svg></button>'+
    '<button class="pl-eye'+(S.immersive?' on':'')+'" data-a="immersive" '+
      'aria-label="Show only the text">'+svg(I.eye)+'</button>'+
    '</div>';
}

/* ---------- the sky ----------
   The design's own: eighty stars from a seeded generator (Park-Miller, seed
   7), so the sky is identical on every screen and every launch and each star
   sits exactly where the design puts it. They thin out toward the bottom,
   come in three sizes, the largest with a glow, and two in five twinkle at
   their own pace. It is a fixed layer behind the content, so it stays put
   while the page scrolls, and it is not drawn in the reader, as the design
   keeps that page plain. Early morning gets the dawn instead: a warm sun low
   in the top right over the design's gradient. Built once; the stylesheet
   decides which of the two shows. */
function skyStars(){
  var seed=7;
  function r(){ seed=(seed*16807)%2147483647; return seed/2147483647; }
  var out=[];
  for(var i=0;i<80;i++){
    /* the same order of draws as the design, including the second draw for
       size that only happens when the first misses */
    var x=r()*100, y=Math.pow(r(),1.4)*100;
    var z=r()<0.12?2.2:(r()<0.5?1.4:1);
    var o=0.25+r()*0.6, d=3+r()*5, dl=r()*6, tw=r()<0.4;
    out.push({x:x,y:y,z:z,o:o,d:d,dl:dl,tw:tw});
  }
  return out;
}
function ensureSky(){
  if(document.getElementById('sky')) return;
  var el; try{ el=document.createElement('div'); }catch(e){ return; }
  if(!el||!el.style) return;
  el.id='sky'; el.setAttribute('aria-hidden','true');
  /* exactly as the design draws them: each star a small round element at the
     design's position, size and brightness, the largest with its soft glow,
     two in five twinkling */
  el.innerHTML='<div class="sky-night">'+skyStars().map(function(st){
    return '<i class="st'+(st.z>2?' big':'')+(st.tw?' tw':'')+'" style="left:'+st.x.toFixed(3)+
      '%;top:'+(st.y*0.75).toFixed(3)+'%;width:'+st.z+'px;height:'+st.z+'px;opacity:'+
      st.o.toFixed(3)+(st.tw?';animation-duration:'+st.d.toFixed(3)+'s;animation-delay:'+
      st.dl.toFixed(3)+'s':'')+'"></i>';
  }).join('')+'</div><div class="sky-dawn"></div>';
  try{ document.body.insertBefore(el, document.body.firstChild); }catch(e){}
}

function renderPlayer(){
  var el=document.getElementById('player');
  if(!el){
    try{
      el=document.createElement('div'); el.id='player';
      (phone||document.body).appendChild(el);
    }catch(e){ return; }
  }
  /* with two sides the bar belongs to the one that is reading, and sits
     inside it */
  var r=(LAYOUT==='split')?readerSide():null;
  if(LAYOUT==='split'){
    var host=r?paneEl(r):phone;
    try{ if(host&&el.parentNode!==host) host.appendChild(el); }catch(e){}
  } else {
    try{ if(phone&&el.parentNode&&el.parentNode!==phone) phone.appendChild(el); }catch(e){}
  }
  el.innerHTML=(r&&r!==CUR)?withPane(r, playerHTML):playerHTML();
  if(LAYOUT!=='phone') refreshIsland();
}

function vRead(){
  var b=BK(S.reading), n=S.ch;
  if(!bookLoaded(b.i)&&!b.user){
    fetchBook(b.i).then(function(){ render(); }).catch(function(){});
    return '<div class="empty">Loading '+esc(b.name)+'\u2026</div>';
  }
  /* one of your own books, reached some other way than its shelf (a saved
     highlight, the last place read, a note): fetch it from storage first */
  if(b.user&&!(S.openBook&&S.openBook.id===b.uid)){
    openUserBook(b.uid, function(){ render(); });
    return '<div class="empty">Opening '+esc(b.name)+'\u2026</div>';
  }
  var vs=chapterOf(b,n);
  var d=b.chapters[n], mv=moveFor(b,n);
  /* These were the chapter arrows. Chapters turn by swiping now, which frees
     the two best-placed buttons in the app for what people actually reach for:
     the last thing they were looking at, and back to it. */
  var h='';
  h+='<div id="backfill">'+(S.backfill&&S.backfill<100
      ? '<div class="bf"><span class="spin"></span>Loading the rest of the '+
        'scriptures\u2026 '+S.backfill+'%</div>' : '')+'</div>';
  /* The read-aloud bar and the voice row stood permanently above the text
     saying the same thing the sheet says. They are folded into the sheet, and
     what is left is a mini player that appears only while it is reading. */
  h+='<div id="speakbar"></div>';
  h+=narrHint(b,n);

  /* One row of things you touch while reading, and a single button that opens
     everything else. Six stacked control bars above the text was too much. */
  var pr=bookProgress(b);
  /* One floating pill instead of three stacked bars: listen, keep your place,
     and the type controls. It sits over the text rather than pushing it down,
     which is where a reader's thumb already is. */

  if(S.readerOpts){
    /* One sheet, one group open at a time. Six stacked bars of controls made
       the reader feel like a settings screen with some scripture underneath;
       an accordion keeps the choices without the clutter. */
    h+='<div class="rsback" data-a="readeropts" aria-hidden="true"></div>';
    h+='<div class="rsheet" role="dialog" aria-label="Reading settings">';
    h+='<div class="rsgrab"></div>';
    h+=rGroup('type','Text size',
        '<div class="rrow">'+[0,1,2,3,4,5].map(function(k){
          return '<button data-size="'+k+'" aria-selected="'+(S.textSize===k)+'">'+
            ['XS','S','M','L','XL','XXL'][k]+'</button>';}).join('')+'</div>',
        ['XS','S','M','L','XL','XXL'][S.textSize]);
    h+=rGroup('page','Page',
        '<div class="rrow">'+
        '<button data-page="paper" aria-selected="'+(S.page==='paper')+'">Paper</button>'+
        '<button data-page="plain" aria-selected="'+(S.page==='plain')+'">Plain</button>'+
        '</div>'+
        '<div class="rrow" style="margin-top:8px">'+
        '<button class="redtog" data-a="togglered" aria-selected="'+
        (S.redLetters!==false)+'">Words of Christ in red</button></div>'+
        '<div class="rrow" style="margin-top:8px">'+
        '<button class="redtog" data-a="togglewords" aria-selected="'+
        (S.wordMeanings!==false)+'">Underline old words to explain them</button></div>',
        ({paper:'Paper',plain:'Plain'})[S.page]||'Plain');
    h+=rGroup('look','Appearance',
        '<div class="rrow">'+['auto','light','dark'].map(function(t){
          return '<button data-theme="'+t+'" aria-selected="'+((S.theme||'auto')===t)+
            '">'+({auto:'Match device',light:'Early morning',dark:'Night'})[t]+'</button>';}).join('')+
        '</div>',
        ({auto:'Match device',light:'Early morning',dark:'Night'})[S.theme||'auto']);
    var isOn=!!(Speech.isPlaying&&Speech.isPlaying());
    h+=rGroup('voice','Read aloud',
        '<div class="lab">Speed</div>'+speedSeg()+
        '<button class="fol" style="margin-top:12px" data-a="'+(isOn?'stopspeak':'speak')+'">'+
        (isOn?'Stop reading aloud':'Read this chapter aloud')+'</button>'+
        '<div class="lab" style="margin-top:12px">Voice</div>'+
        '<button class="fol" data-a="voicepicker" aria-expanded="'+!!S.voicePicker+'">'+
          esc(currentVoiceName())+' \u00b7 '+(S.voicePicker?'Close':'Change')+'</button>'+
        (S.voicePicker?voicePickerHTML():'')+
        speakOptionsHTML(true),
        nearestRate()+'\u00d7 \u00b7 '+voiceSummary());
    h+=rGroup('chapter','This chapter',
        '<button class="fol'+(isRead(b.i,n)?' on':'')+'" data-markread="'+n+'">'+
        (isRead(b.i,n)?'\u2713 Marked read':'Mark this chapter read')+'</button>',
        isRead(b.i,n)?'Read':'Unread');
    h+=rGroup('screen','Full screen',
        '<button class="fol" data-a="immersive">Read without the app in the way</button>'+
        '<div class="lab" style="margin-top:12px">Scroll while reading</div>'+
        '<div class="rrow">'+['Off','Slow','Steady','Brisk','Fast'].map(function(nm,k){
          return '<button data-scrollspeed="'+k+'" aria-selected="'+
            ((S.scrollSpeed||0)===k)+'">'+nm+'</button>';}).join('')+'</div>',
        ['Off','Slow','Steady','Brisk','Fast'][S.scrollSpeed||0]);
    h+='<button class="rsdone" data-a="readeropts">Done</button>';
    h+='</div>';
  }
  gseen={};              /* each old word is marked once per chapter */
  h+='<div class="rd'+(S.page==='paper'?' paper':'')+
     (S.speaking&&!(Speech.isPaused&&Speech.isPaused())?' aloud':'')+
     (S.speaking&&Speech.isPaused&&Speech.isPaused()?' held':'')+
     (S.focus!==false&&S.speaking&&!(Speech.isPaused&&Speech.isPaused())?' listening':'')+

     (S.immersive?' immersive':'')+'">'+
     (S.immersive?'':'<div class="chop">'+
       '<div class="chop-t">'+esc((b.full||b.name).replace(/\bSaint\b/g,'St.'))+'</div>'+
       '<div class="chop-n">'+n+'</div>'+
       (d?'<div class="chop-s">'+esc(d)+'</div>':'')+
       '</div>')+
     vs.map(function(v,k){
      if(!v) return '';   /* verse belongs to canonical Esther, not this book */
      var key=vKey(b.i,n,k+1), col=S.hl[key];
      var hasNote=S.notes.some(function(x){return x.b===b.i&&x.c===n&&x.v===(k+1);});
      var jump='';
      if(S.jumpRef){
        var jr=parseKey(S.jumpRef.key);
        if(jr.b===b.i&&jr.c===n){
          var lo=jr.v,hi=S.jumpRef.end||jr.v;
          if((k+1)>=lo&&(k+1)<=hi) jump=' jump';
        }
      }
      return '<span class="v'+(col?' hl-'+col:'')+jump+'" data-vs="'+key+'"><sup>'+(k+1)+'</sup>'+
        (function(){
          var spans=S.redLetters===false?null:redFor(b.i,n,k+1);
          var body=spans?redLetter(v,spans):esc(v);
          body=S.page==='paper'?smallCaps(body):body;
          return glossify(body, b.name+' '+n+':'+(k+1), gseen);
        })()+
        (hasNote?'<span class="nb">'+svg(I.pen)+'</span>':'')+'</span>';
    }).join('')+'</div>';
  if(!S.immersive){
    h+=divider('End of chapter');
    var nx=nextChapterFrom(b.i,n);
    if(nx){
      var nb=BK(nx.b);
      h+='<button class="nextcard" data-book="'+nx.b+'" data-goch="'+nx.c+'">'+
         '<span class="ncw"><span class="nck">Next</span>'+
         '<span class="ncn">'+esc(nb?nb.name:'')+' '+nx.c+'</span></span>'+
         '<span class="ncgo">'+svg(I.fwd)+'</span></button>';
    }
    if(n>1)
      h+='<button class="btn gh" data-step="-1" style="margin-top:8px">'+
         'Previous chapter</button>';
  }
  return h;
}

/* ================= TOPICS ================= */
function vProfile(){
  var nHl=Object.keys(S.hl).length;
  var nCh=BOOKS.reduce(function(a,b){return a+Object.keys(b.chapters).length;},0);
  /* The design's Settings: a way back, the title, then grouped cards with
     segmented choices and switches. Everything that was here before (your
     data, backups, restore points, privacy) follows below, restyled to match. */
  function seg(label, btns){
    return '<div class="setrow"><div class="setlab">'+label+'</div><div class="setseg">'+btns+'</div></div>';
  }
  function tog(label, sub, act, on){
    return '<button class="settog" data-a="'+act+'" aria-pressed="'+on+'">'+
      '<span class="settxt"><span class="setlab">'+label+'</span><span class="setsub">'+sub+'</span></span>'+
      '<span class="setsw'+(on?' on':'')+'"><i></i></span></button>';
  }
  var h='<button class="backlink" data-nav="library">\u2190 Library</button>'+
        '<div class="sethead">Settings</div>';
  h+='<div class="setgrp">Appearance</div><div class="setcard">'+
    seg('Theme',[['light','Early morning'],['dark','Night'],['auto','Match device']].map(function(o){
      return '<button data-theme="'+o[0]+'" aria-selected="'+((S.theme||'auto')===o[0])+'">'+o[1]+'</button>';}).join(''))+
    seg('Page',[['plain','Plain'],['paper','Paper']].map(function(o){
      return '<button data-page="'+o[0]+'" aria-selected="'+(S.page===o[0])+'">'+o[1]+'</button>';}).join(''))+
    '</div>';
  h+='<div class="setgrp">Reading</div><div class="setcard">'+
    seg('Text size',['XS','S','M','L','XL','XXL'].map(function(n,k){
      return '<button data-size="'+k+'" aria-selected="'+(S.textSize===k)+'">'+n+'</button>';}).join(''))+
    tog('Words of Christ in red','As in red-letter editions','togglered',S.redLetters!==false)+
    tog('Word meanings','A dotted line under old words; tap one for its meaning','togglewords',S.wordMeanings!==false)+
    tog('Focus while listening','Dim every verse but the one being read','togglefocus',S.focus!==false)+
    tog('Keep the reader upright','Ignore device rotation','togglerotate',!!S.lockRotate)+
    '</div>';
  h+='<div class="setgrp">Read aloud</div><div class="setcard">'+
    '<div class="setrow"><div class="setlab">Speed</div>'+speedSeg()+'</div>'+
    '<div class="setline"><span>Voice</span><span>'+esc(currentVoiceName())+'</span></div>'+
    '<p class="setsub" style="margin:10px 0 2px">The narrated Bible is an AI rendering, made with Chatterbox, '+
    'of the narrator\u2019s own voice. Where a chapter has not been narrated yet, the device\u2019s voice reads it.</p>'+
    '</div>';
  h+=payCard();
  if(PAY.on&&!PAY.offerings&&!PAY.loadingOffers){ PAY.loadingOffers=1;
    payLoadOfferings().then(function(){ if(S.tab==='about'){ S.keepScroll=true; render(); } }); }
  h+='<div class="h2">Your data</div>';
  h+='<div class="card about"><p>Highlights, notes and study sheets are stored on '+
    'this device only. Nothing is uploaded. Clearing site data or switching phones '+
    'loses them, so keep a backup.</p>'+
    '<button class="btn" data-a="exportdata">Download a backup</button>'+
    '<div style="height:8px"></div>'+
    '<button class="fol" data-a="toggleauto-backup" aria-selected="'+(!!S.autoBackup)+'">'+
    (S.autoBackup?'\u2713 ':'')+'Keep a restore point after each session</button>'+
    (S.snaps.length
      ? '<div class="lab" style="margin-top:14px">Restore points</div>'+
        S.snaps.map(function(sn){
          var dt=new Date(sn.when);
          return '<div class="snap"><span class="sw1">'+
            esc(dt.toLocaleDateString()+' '+
                dt.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}))+
            '</span><button data-snap="'+esc(sn.id)+'">Restore</button>'+
            '<button data-snapdl="'+esc(sn.id)+'">Save</button></div>';
        }).join('')
      : '<p class="vnote" style="margin:11px 2px 0">No restore point yet. One is kept '+
        'when you leave the app.</p>')+
    '<div style="height:8px"></div>'+
    '<label class="btn sec" style="display:block;cursor:pointer">Restore from a backup'+
    '<input type="file" id="restorefile" accept=".json,application/json" style="display:none">'+
    '</label>'+
    (S.restoreMsg?'<p style="margin:11px 0 0;font-size:13px;color:'+
      (S.restoreErr?'#B4405A':'#1E7A44')+'">'+esc(S.restoreMsg)+'</p>':'')+
    '</div>';

  /* moved here from the Notes screen, which the design keeps to the notes */
  h+='<div class="h2">Your notes</div><div class="card">'+
     '<div class="shpair">'+
     '<button data-a="copynotes">'+(S.notesCopied?'Copied':'Copy all notes')+'</button>'+
     '<button data-a="savenotes">Save notes to device</button></div>'+
     (S.notesMsg?'<p class="vnote" style="margin:9px 2px 0">'+esc(S.notesMsg)+'</p>':'')+
     '</div>';
  h+='<div class="h2">Privacy</div><div class="card about">'+
    '<p>Nothing you do here is collected, uploaded or tracked. Everything stays '+
    'on this device.</p>'+
    '<a class="btn sec" href="privacy.html" target="_blank" rel="noopener" '+
    'style="display:block;text-decoration:none">Read the privacy policy</a></div>';
  h+='<div class="h2">What this is</div><div class="card about">'+
    '<p><b>The text.</b> The 66 books of the King James Bible, plus the 14 books of the Apocrypha. '+
    'The 1611 printing used the old orthography, where <em>u</em> and <em>v</em> were interchangeable '+
    'and a long <em>\u017f</em> stood for <em>s</em>; this edition carries modernised spelling, so '+
    '<em>haue</em> reads as <em>have</em>, with the wording untouched.</p>'+
    '<p><b>The Apocrypha.</b> All 14 books, from the eBible.org King James + Apocrypha '+
    'release (the standardised 1769 text). An earlier build set these books from a scanned '+
    '1800 printing read by OCR; that version merged hundreds of verse divisions and damaged '+
    'chapter openings, and has been replaced entirely.</p>'+
    '<p><b>A note on numbering.</b> The Rest of Esther continues the canonical book and is '+
    'traditionally printed as chapters 10\u201316. It appears here as chapters 1\u20137, keeping '+
    'each chapter\u2019s own verse numbers. 2 Esdras 7 has 70 verses, the King James numbering; '+
    'the fragment some modern editions insert at 7:36 is not part of this text.</p>'+
    '<p><b>The facts.</b> Drawn from Flavius Josephus, <em>Antiquities of the Jews</em>, in William '+
    'Whiston\u2019s translation, each cited to book and chapter.</p>'+
    '<p><b>Chapter notes.</b> All 80 books have a scribe note, a historical setting and a '+
    'chapter map. Sixteen have a written note on every chapter: the five books of the Law, '+
    'Every chapter has a written note \u2014 all 1,362 of them, across all eighty '+
    'books.</p>'+
    '<p><b>Your highlights and notes</b> are stored on this device only. Nothing is uploaded. '+
    'If you open this file somewhere else, they will not follow you.</p>'+
    '<p><b>Sources.</b> King James Bible and Josephus\u2019s <em>Antiquities</em> from Project Gutenberg; '+
    'the Apocrypha from the Internet Archive. All in the public domain.</p></div>';
  return h;
}

/* ================= SEARCH ================= */


/* ---------- swipe the sheet away ----------
   The grab bar has always looked draggable and never was, so the gesture it
   invites did nothing. Now it works, and the Close button is gone: one way to
   dismiss, not two.

   The awkward part is the sheet's own scrolling regions. The verse text and
   the cross-reference list both scroll, and a drag that starts inside one of
   them must scroll it rather than closing the sheet. So a dismiss drag only
   begins when nothing under the finger has anywhere left to scroll up to. */
var CLOSE_AT=90;
function sheetCanDrag(target){
  /* Never from a field. Dragging to place a cursor in the note box was
     dragging the whole sheet away instead. */
  try{
    var tag=(target&&target.tagName||'').toLowerCase();
    if(tag==='textarea'||tag==='input'||tag==='select'||tag==='button') return false;
    if(target&&target.isContentEditable) return false;
  }catch(e){}
  var el=target;
  while(el && el!==sheet){
    if(el.scrollHeight>el.clientHeight+2 && el.scrollTop>0) return false;
    el=el.parentNode;
  }
  return !(sheet.scrollTop>0);
}
function initSheetDrag(){
  if(S.sheetDrag||!sheet||!sheet.addEventListener) return;
  S.sheetDrag=1;
  var y0=null, dy=0, moved=false;
  function reset(){
    if(sheet.style){ sheet.style.transition=''; sheet.style.transform=''; }
    y0=null; dy=0; moved=false;
  }
  sheet.addEventListener('touchstart',function(e){
    if(!e.touches||e.touches.length!==1){ y0=null; return; }
    if(!sheetCanDrag(e.target)){ y0=null; return; }
    y0=e.touches[0].clientY; dy=0; moved=false;
  },{passive:true});
  sheet.addEventListener('touchmove',function(e){
    if(y0===null||!e.touches||!e.touches.length) return;
    dy=e.touches[0].clientY-y0;
    if(dy<=0){                       /* dragging up: let it be */
      if(moved){ sheet.style.transform=''; moved=false; }
      return;
    }
    moved=true;
    sheet.style.transition='none';
    /* a little resistance so it does not feel weightless */
    sheet.style.transform='translateY('+(dy<CLOSE_AT?dy:CLOSE_AT+(dy-CLOSE_AT)*0.55)+'px)';
  },{passive:true});
  sheet.addEventListener('touchend',function(){
    if(y0===null) return;
    var far=moved&&dy>CLOSE_AT;
    reset();
    if(far) closeSheet();
  });
  sheet.addEventListener('touchcancel',reset);
}

/* ---------- saving a precept to your notes ----------
   One direction only: a study-sheet entry can be copied into the notes, where
   it becomes yours to edit. Editing the note never writes back to the sheet.
   The note carries the question, every reference and the text of each, and is
   filed against the first reference so it opens in the reader. */
function preceptNoteId(sheetId,itemId){ return 'p:'+sheetId+':'+itemId; }
function preceptSaved(sheetId,itemId){
  var src=preceptNoteId(sheetId,itemId);
  return S.notes.filter(function(n){return n.src===src;})[0]||null;
}
function preceptBody(item){
  var lines=[String(item.q||'').trim()];
  var refs=parseRefs(item.refs||'');
  if(refs.length) lines.push('');
  refs.forEach(function(r){
    if(!r.ok){ lines.push(r.label); return; }
    var t=vText(r.b,r.c,r.v1||1);
    lines.push(r.label+(t?' \u2014 '+t:''));
  });
  if(item.note){ lines.push(''); lines.push(item.note); }
  return lines.join('\n');
}

/* ---------- notes: the fuller shape ----------
   The redesign gives a note a title, tags, a category and linked references.
   Notes already written have none of those, and some will arrive later still
   from an old backup file, so every path a note can enter by is migrated
   rather than only the ones taken at startup.

   It is deliberately additive and idempotent: nothing a reader wrote is
   rewritten, reordered or dropped. A title is left empty rather than guessed
   from the first line, because guessing would silently edit their words. */
var NOTE_SCHEMA=2;

/* ---------- references linked to a note ----------
   The note model has carried links since the migration; this is the way to
   put one there. It uses the same parser as the cross references in the verse
   sheet, so "Lk 18:13", "Luke 18.13" and "Luke 18:13" all resolve the same
   way, and a link keeps the verse key so tapping it opens the passage. */
function addNoteLink(note, raw){
  raw=String(raw||'').trim();
  if(!raw) return {ok:false,msg:'Type a reference, for example Luke 18:13.'};
  var good=parseRefs(raw).filter(function(r){ return r.ok; });
  if(!good.length) return {ok:false,msg:'That does not look like a reference in this Bible.'};
  note.links=note.links||[];
  var added=0;
  good.forEach(function(r){
    var v=r.v1||1;
    if(r.b===note.b&&r.c===note.c&&v===note.v) return;      /* not the verse it is on */
    var key=vKey(r.b,r.c,v);
    if(note.links.some(function(l){ return l[2]===key||l[0]===r.label; })) return;
    if(note.links.length>=12) return;
    note.links.push([r.label, vText(r.b,r.c,v)||'', key]);
    added++;
  });
  if(!added) return {ok:false,msg:'That one is already here.'};
  return {ok:true,msg:''};
}

function migrateNote(n){
  if(!n||typeof n!=='object') return null;
  if(!n.id) n.id='n'+Date.now()+Math.floor(Math.random()*999);
  if(typeof n.body!=='string') n.body=n.body==null?'':String(n.body);
  if(typeof n.ts!=='number') n.ts=Date.parse(n.ts)||Date.now();
  if(typeof n.title!=='string') n.title='';
  if(!Array.isArray(n.tags)) n.tags=[];
  n.tags=n.tags.filter(function(t){ return typeof t==='string'&&t.trim(); })
               .map(function(t){ return t.trim().slice(0,28); }).slice(0,8);
  if(typeof n.cat!=='string') n.cat='';
  if(!Array.isArray(n.links)) n.links=[];
  n.links=n.links.filter(function(l){ return Array.isArray(l)&&l.length; }).slice(0,12);
  n.sv=NOTE_SCHEMA;
  return n;
}
function migrateNotes(list){
  if(!Array.isArray(list)) return [];
  var out=[];
  for(var i=0;i<list.length;i++){ var m=migrateNote(list[i]); if(m) out.push(m); }
  return out;
}
function noteTitle(n){
  if(n.title) return n.title;
  if(n.b!=null) return vRef(n.b,n.c,n.v);
  return 'Unfiled note';
}
function allNoteTags(){
  var seen={}, out=[];
  S.notes.forEach(function(n){
    (n.tags||[]).forEach(function(t){ if(!seen[t]){ seen[t]=1; out.push(t); } });
  });
  return out.sort();
}

function savePreceptToNotes(sheetId,item){
  if(preceptSaved(sheetId,item.id)) return {ok:false,msg:'Already in your notes.'};
  var refs=parseRefs(item.refs||'').filter(function(r){return r.ok;});
  var first=refs[0];
  S.notes.push(migrateNote({
    id:'n'+Date.now()+Math.floor(Math.random()*999),
    src:preceptNoteId(sheetId,item.id),
    b:first?first.b:null, c:first?first.c:null, v:first?(first.v1||1):null,
    body:preceptBody(item), ts:Date.now()
  }));
  saveNotes();
  return {ok:true,msg:'Saved to your notes.'};
}

/* ---------- search history ----------
   Search runs on every keystroke, so recording each one would fill the list
   with "j", "je", "jes". Two rules keep it useful: only record once typing
   has settled, and when a new term extends one already stored, replace it
   rather than keeping both. */
var HIST_MAX=12, histTimer=null;
function recordSearch(q){
  q=String(q||'').trim();
  if(q.length<2) return false;
  var low=q.toLowerCase();
  S.searchHist=(S.searchHist||[]).filter(function(x){
    var xl=x.toLowerCase();
    if(xl===low) return false;                 /* no duplicates */
    if(low.indexOf(xl)===0) return false;      /* "jesus" supersedes "jesu" */
    return true;
  });
  S.searchHist.unshift(q);
  if(S.searchHist.length>HIST_MAX) S.searchHist.length=HIST_MAX;
  Store.set('strata:searches',S.searchHist);
  return true;
}
function queueSearchRecord(q){
  if(histTimer) clearTimeout(histTimer);
  histTimer=setTimeout(function(){ histTimer=null; recordSearch(q); }, 1200);
}
function forgetSearch(q){
  S.searchHist=(S.searchHist||[]).filter(function(x){return x!==q;});
  Store.set('strata:searches',S.searchHist);
}
function historyHTML(){
  if(!S.searchHist||!S.searchHist.length) return '';
  return '<div class="hist"><div class="lab">Recent searches'+
    '<button class="histclear" data-a="clearhist">Clear</button></div>'+
    S.searchHist.map(function(q){
      return '<div class="histrow">'+
        '<button class="histgo" data-search="'+esc(q)+'">'+
        svg(I.search)+'<span>'+esc(q)+'</span></button>'+
        '<button class="histx" data-forget="'+esc(q)+'" title="Remove">\u00d7</button>'+
        '</div>';
    }).join('')+'</div>';
}

function vSearch(){
  /* titled like every other screen, now that no bar above says "Search" */
  var f=S.searchFilter||'All';
  return screenHead({title:'Search'})+
    '<div class="search"><svg viewBox="0 0 24 24">'+I.search+
    '</svg><input id="q" placeholder="Search books, notes and text" value="'+esc(S.q)+'">'+
    (S.q?'<button class="sclear" data-a="clearq" aria-label="Clear the search">\u00d7</button>':'')+
    '</div>'+
    '<div class="shchips schips">'+['All','Verses','Notes'].map(function(c){
      return '<button class="chip'+(f===c?' on':'')+'" data-sfilter="'+c+'">'+c+'</button>';
    }).join('')+'</div>'+
    (S.q.trim().length<2?historyHTML():'')+
    '<div id="results"></div>';
}
function runSearch(){
  var out=document.getElementById('results'); if(!out) return;
  var q=S.q.trim();
  if(q.length<2){out.innerHTML='<p class="empty">Type at least two characters to search '+
    '80 books and 36,000 verses.</p>';return;}
  var safe=q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), rx=new RegExp(safe,'i'), res=[];
  BOOKS.forEach(function(b){
    if(rx.test(b.name)||rx.test(b.summary)||rx.test(b.scribe))
      res.push({r:b.name,t:b.summary,i:b.i,c:null});
    Object.keys(b.chapters).forEach(function(n){
      if(rx.test(b.chapters[n])) res.push({r:b.name+' '+n+' \u2014 note',t:b.chapters[n],i:b.i,c:+n});});
    b.prophecies.forEach(function(p){
      if(rx.test(p)) res.push({r:b.name+' \u2014 prophecy',t:p,i:b.i,c:null});});
  });
  FACTS.forEach(function(f){
    if(rx.test(f.title)||rx.test(f.text))
      res.push({r:'Josephus \u2014 '+f.cite,t:f.title,i:f.book,c:f.ch});});
  var pending=!allBooksLoaded();
  var hits=0;
  for(var bi=0;bi<BOOKS.length&&hits<50;bi++){
    var chs=BIBLE[String(bi)];
    for(var cn in chs){
      var vs=chs[cn];
      for(var v=0;v<vs.length;v++){
        if(vs[v]&&rx.test(vs[v])){res.push({r:BOOKS[bi].name+' '+cn+':'+(v+1),t:vs[v],i:bi,c:+cn});
          if(++hits>=50) break;}
      }
      if(hits>=50) break;
    }
  }
  /* your own notes are searchable too, which the design's Notes filter implies */
  S.notes.forEach(function(n){
    var hay=(n.title||'')+' '+(n.body||'');
    if(rx.test(hay)) res.push({r:n.b==null?'Your note':vRef(n.b,n.c,n.v),t:n.title?n.title+' \u2014 '+n.body:n.body,
      i:n.b==null?null:n.b,c:n.c,kind:'Note',nid:n.id});
  });
  res.forEach(function(r){
    if(!r.kind) r.kind=/:\d+$/.test(r.r)?'Verse':/Josephus/.test(r.r)?'Josephus':r.c?'Note':'Book';
  });
  /* verses first, as the design lists them, then notes, then whole books;
     the order within each kind is kept */
  var RANK={Verse:0,Note:1,Book:2,Josephus:3};
  res=res.map(function(r,i){return [r,i];}).sort(function(a,b){
    return (RANK[a[0].kind]-RANK[b[0].kind])||(a[1]-b[1]);}).map(function(x){return x[0];});
  var f=S.searchFilter||'All';
  if(f==='Verses') res=res.filter(function(r){return r.kind==='Verse';});
  if(f==='Notes') res=res.filter(function(r){return r.kind==='Note';});
  if(!res.length){
    out.innerHTML='<p class="empty">Nothing found for \u201c'+esc(q)+'\u201d.'+
      (pending?'<br><br>Some books are still loading, so the text search is not '+
       'complete yet.':'')+'</p>';
    return;}
  /* the design's results: a count, then plain rows, the match in bold */
  var gl=glossLookup(q);
  var glHTML=gl?'<div class="sgloss">'+glossCard(gl.e, q)+'</div>':'';
  out.innerHTML=glHTML+'<p class="scount">'+res.length+(res.length===1?' result':' results')+
      ' for \u201c'+esc(q)+'\u201d</p>'+
    (pending?'<p class="scount">Some books are still loading; results will be complete shortly.</p>':'')+
    res.slice(0,60).map(function(r){
    var t=esc(r.t);
    try{t=t.replace(new RegExp('('+safe+')','ig'),'<b>$1</b>');}catch(e){}
    var go=r.nid?'data-editnote="'+r.nid+'"':
      'data-book="'+r.i+'"'+(r.c?' data-goch="'+r.c+'"':'');
    return '<button class="sres" '+go+'>'+
      '<span class="srow"><span class="sref">'+esc(r.r)+'</span><span class="stype">'+r.kind+'</span></span>'+
      '<span class="stext">'+t+'</span></button>';
  }).join('');
}

/* ================= VERSE ACTION SHEET ================= */
/* ---------- word meanings ----------
   Old words, and the Bible's own terms, carry a faint dotted underline; a tap
   opens their meaning. The underline takes the colour of the text around it,
   so a word stays black in the early morning and white at night, and only
   the words of Christ are ever red. Each word is marked once per chapter,
   where it first appears, so the page stays calm. */
var GLOSS_FORM=null, gseen={};
function glossIndex(){
  if(GLOSS_FORM) return GLOSS_FORM;
  GLOSS_FORM={};
  if(typeof GLOSSARY!=='undefined') GLOSSARY.forEach(function(e,i){
    e[1].split(' ').forEach(function(f){ GLOSS_FORM[f]=i; }); });
  return GLOSS_FORM;
}
function glossRuleOk(e, w, before, after, ref){
  var r=(typeof GLOSS_RULES!=='undefined')&&GLOSS_RULES[e[0]];
  if(!r||(r.form&&r.form!==w)) return true;
  if(r.only) return r.only.indexOf(ref)>-1;
  if((r.before||r.after)&&!((r.before&&r.before.test(before))||(r.after&&r.after.test(after))))
    return false;
  if((r.notBefore&&r.notBefore.test(before))||(r.notAfter&&r.notAfter.test(after))) return false;
  return true;
}
/* Only the text between tags is touched, so the red letters, small capitals
   and escaped characters come through exactly as they were. */
function glossify(html, ref, seen){
  if(S.wordMeanings===false||!html) return html;
  var idx=glossIndex();
  return html.split(/(<[^>]+>)/).map(function(seg){
    if(!seg||seg.charAt(0)==='<') return seg;
    return seg.replace(/&#?[a-z0-9]+;|[A-Za-z]+/gi, function(m, off){
      if(m.charAt(0)==='&') return m;
      var w=m.toLowerCase(), i=idx[w];
      if(i===undefined) return m;
      var e=GLOSSARY[i];
      if(seen[e[0]]) return m;
      var before=seg.slice(Math.max(0,off-24),off), after=seg.slice(off+m.length,off+m.length+24);
      if(!glossRuleOk(e,w,before,after,ref)) return m;
      seen[e[0]]=1;
      return '<span class="gw" data-gw="'+i+'" role="button" tabindex="0">'+m+'</span>';
    });
  }).join('');
}
function glossLookup(word){
  var i=glossIndex()[String(word||'').trim().toLowerCase()];
  return i===undefined?null:{i:i,e:GLOSSARY[i]};
}
function glossCard(e, shown){
  var form=shown&&shown.toLowerCase()!==e[0];
  return '<div class="wdk">'+(e[2]==='t'?'Bible term':'Old word')+'</div>'+
    '<div class="wdh">'+esc(form?shown.toLowerCase():e[0])+'</div>'+
    (form?'<div class="wdf">a form of “'+esc(e[0])+'”</div>':'')+
    '<p class="wdm">'+esc(e[3])+'</p>';
}
function openWordSheet(i, key, shown){
  var e=GLOSSARY[i]; if(!e) return;
  S.sheet=null;
  var h='<div class="grabzone"><div class="grab"></div></div><div class="wdsheet">';
  h+=glossCard(e, shown);
  if(key){
    var p=parseKey(key), t=esc(vText(p.b,p.c,p.v)||'');
    if(shown){
      var safe=shown.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      t=t.replace(new RegExp('\\b('+safe+')\\b'),'<b>$1</b>');
    }
    h+='<div class="wdv"><span class="wdr">'+esc(vRef(p.b,p.c,p.v))+'</span>'+t+'</div>';
    h+='<button class="btn sec" data-vs="'+key+'">Highlight, note or share this verse</button>';
  }
  h+='<button class="btn gh" data-word="'+esc(e[0])+'">Look it up in Word study</button>';
  h+='</div>';
  sheet.innerHTML=h;
  if(sheet.style){ sheet.style.transition=''; sheet.style.transform=''; }
  placeOverlays();
  sheet.classList.add('on'); scrim.classList.add('on');
  initSheetDrag();
}

/* ================= THE VERSE CARD =================
   From the redesign (5a, "anchored popover"). Tapping a verse used to raise a
   sheet that covered the page and hid the verse you tapped. Now a compact card
   points at the verse from just below it: the reference, the five colours,
   Note, Save, Copy and Share in one row, the two nearest related passages, and
   a way to everything else. The rest of the chapter dims but stays readable.
   The full sheet is still there behind "See all related" and "More", with the
   map, your references, folders, filing into a note and the verse image. */
var POP_ICON={
  note:'M6 4h12v16H6zM9 9h6M9 12.5h6M9 16h3.5',
  save:'M7 3.5h10v17l-5-3.8-5 3.8z',
  copy:'M9 9h10v11H9zM5 15V4h10',
  share:'M12 15V3M8 7l4-4 4 4M5 12v8h14v-8',
  image:'M4 5h16v14H4zM4 16l5-5 4 4 2.5-2.5L20 17M15.5 9.5h.01'};
function popAct(a, icon, label, on){
  return '<button class="pact'+(on?' on':'')+'" data-a="'+a+'" aria-label="'+esc(label)+'">'+
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+POP_ICON[icon]+'"/></svg>'+
    '<span>'+esc(label)+'</span></button>';
}
function popHTML(key){
  var p=parseKey(key), cur=S.hl[key];
  var rel=[], mine=[];
  /* your own books have no cross references */
  try{ if(p.b<UB_BASE){ rel=relatedTo(p.b,p.c,p.v); mine=userRefs(p.b,p.c,p.v); } }catch(e){}
  var rows=[];
  mine.forEach(function(lbl){
    var r=parseRefs(lbl)[0];
    if(r&&r.ok) rows.push({b:r.b,c:r.c,v:r.v1||1,text:vText(r.b,r.c,r.v1||1)});
  });
  rows=rows.concat(rel);
  var total=rows.length, ref=vRef(p.b,p.c,p.v);
  var h='<div class="vpop" role="dialog" aria-label="'+esc(ref)+'"><i class="parr" aria-hidden="true"></i>'+
    '<div class="prow"><span class="pref">'+esc(ref)+'</span>'+
    '<span class="pdots" role="group" aria-label="Highlight">'+COLORS.map(function(c){
      return '<button class="pdot'+(cur===c.k?' on':'')+'" data-pcolor="'+c.k+'" '+
        'style="background:'+c.bg+'" aria-pressed="'+(cur===c.k)+'" aria-label="'+esc(c.n)+
        (cur===c.k?' (tap again to remove)':'')+'"></button>';
    }).join('')+'</span>'+
    '<span class="pacts">'+popAct('pnote','note',noteFor(p)?'Your note':'Note')+
      popAct('psave','save',S.marks[key]?'Saved':'Save',!!S.marks[key])+
      popAct('pcopy','copy',S.popCopied===key?'Copied':'Copy',S.popCopied===key)+
      popAct('pshare','share','Share')+
      popAct('pimage','image',S.popImaging===key?'Making\u2026':'Image')+'</span></div>';
  var more=S.popMore===key;
  if(rows.length){
    h+='<div class="prels'+(more?' all':'')+'">'+(more?rows:rows.slice(0,2)).map(function(r){
      var t=r.text||'';
      return '<button class="prel" data-goverse="'+vKey(r.b,r.c,r.v)+'">'+
        '<span class="prr">'+esc(vRef(r.b,r.c,r.v))+'</span>'+
        '<span class="prt">'+esc(t.length>150?t.slice(0,150)+'…':t)+'</span></button>';
    }).join('')+'</div>';
  }
  if(more) h+=popMoreHTML(key, p, mine);
  if(S.popRefAdding===key){
    h+='<div class="prefadd"><input id="prefin" placeholder="Isaiah 53:5" aria-label="Cross reference">'+
       '<button class="btn sec" data-a="psaveref">Add</button>'+
       '<button class="btn gh" data-a="pcancelref">Cancel</button></div>';
  }
  if(S.popMsg&&S.popMsgKey===key) h+='<p class="pmsg" role="status">'+esc(S.popMsg)+'</p>';
  h+='<div class="pfoot"><button class="pmore" data-a="pmore" aria-expanded="'+more+'">'+
      (more?'Less':(total>2?'See all '+total+' related':'More'))+'</button>'+
    (S.popRefAdding===key?'':'<button class="padd" data-a="paddref">+ Add cross reference</button>')+
    '</div></div>';
  return h;
}
/* everything the old verse sheet offered, inside the card: your own
   references, the places on the map, the Saves folder, filing into a note */
function popMoreHTML(key, p, mine){
  var h='<div class="pmore-body">';
  if(mine.length){
    h+='<div class="plab">Your references</div><div class="pmine">'+mine.map(function(lbl){
      return '<span class="pchip">'+esc(lbl)+
        '<button class="pchipx" data-pdelref="'+esc(lbl)+'" aria-label="Remove '+esc(lbl)+'">\u00d7</button></span>';
    }).join('')+'</div>';
  }
  if(p.b<UB_BASE){
    var bkp=BK(p.b);
    var vera=(bkp&&bkp.eras&&bkp.eras.length)?bkp.eras[bkp.eras.length-1]:null;
    var here=[];
    try{ here=placesInVerse(vText(p.b,p.c,p.v), vera); }catch(e){}
    if(here.length){
      var plate=(platesForEra(vera||'roman')[0]||PLATES[0]);
      h+='<div class="plab">On the map</div><div class="pmine">'+here.map(function(pl){
        return '<span class="pchip">'+esc(pl.n)+'</span>'; }).join('')+
        '<button class="pchip go" data-plate="'+esc(plate.id)+'">Open '+esc(plate.name)+'</button></div>';
    }
  }
  if(S.marks[key]){
    var cur=folderOf(key), fs=bookmarkFolders();
    if(fs.indexOf(cur)===-1) fs.unshift(cur);
    h+='<div class="plab">Saved in</div><div class="pmine">'+fs.map(function(f){
      return '<button class="pchip'+(f===cur?' on':'')+'" data-pfolder="'+esc(f)+'" aria-pressed="'+(f===cur)+'">'+esc(f)+'</button>';
    }).join('')+'<span class="pnewf"><input id="pfolderin" placeholder="New folder" maxlength="32" aria-label="New folder">'+
      '<button class="pchip" data-a="pnewfolder" aria-label="Make this folder">+</button></span></div>';
  }
  if(S.notes.length){
    if(S.popFiling===key){
      h+='<div class="plab">File this verse in</div><div class="pfiles">'+S.notes.slice().sort(function(a,b){
          return (b.ts||0)-(a.ts||0); }).slice(0,8).map(function(n){
        return '<button class="pfile" data-pfilenote="'+esc(n.id)+'"><b>'+esc(noteTitle(n))+'</b>'+
          (n.b!==null&&n.b!==undefined?'<span>'+esc(vRef(n.b,n.c,n.v))+'</span>':'')+'</button>';
      }).join('')+'</div>';
    } else {
      h+='<button class="pline" data-a="pfile">File it in one of your notes</button>';
    }
  }
  return h+'</div>';
}
function popRoot(){
  var r=(LAYOUT==='split')?readerSide():null;
  return (r&&paneEl(r,2))||view;
}
function clearPopDom(root){
  root=root||document;
  var old=root.querySelectorAll?root.querySelectorAll('.vpopw'):[];
  for(var i=0;i<old.length;i++) if(old[i].parentNode) old[i].parentNode.removeChild(old[i]);
  var rds=root.querySelectorAll?root.querySelectorAll('.rd.popping'):[];
  for(var j=0;j<rds.length;j++) rds[j].classList.remove('popping');
  var sel=root.querySelectorAll?root.querySelectorAll('.rd .v.popsel'):[];
  for(var k=0;k<sel.length;k++) sel[k].classList.remove('popsel');
}
/* draws the card under its verse, if that verse is on this side's page */
function placePop(reveal){
  var root=popRoot();
  if(!root||!root.querySelector) return;
  clearPopDom(document);
  if(!S.pop) return;
  var v=root.querySelector('.rd .v[data-vs="'+S.pop+'"]');
  if(!v){ if(root.querySelector('.rd')) S.pop=null; return; }
  var w=document.createElement('div');
  w.className='vpopw'; w.innerHTML=popHTML(S.pop);
  if(v.nextSibling) v.parentNode.insertBefore(w,v.nextSibling); else v.parentNode.appendChild(w);
  v.classList.add('popsel');
  var rd=v.parentNode; if(rd&&rd.classList) rd.classList.add('popping');
  var card=w.firstChild;
  /* narrow pages put the colours on a line of their own */
  try{ if(card.clientWidth<520) card.classList.add('compact'); }catch(e){}
  if(reveal) setTimeout(function(){ revealPop(card); },30);
  /* the cross references arrive on first use; draw the related rows then */
  if(!S.popXr){ S.popXr=1; ensureXrefs(function(){ if(S.pop) placePop(reveal); }); }
}
/* scroll just enough that the whole card clears the player and the tab bar */
function revealPop(card){
  try{
    var sc=scrollerOf(card)||card.closest('.pv'); if(!sc) return;
    var r=card.getBoundingClientRect(), s=sc.getBoundingClientRect();
    var reserve=(LAYOUT==='phone')?180:100;
    var bottom=Math.min(s.bottom, window.innerHeight-reserve);
    var over=r.bottom+12-bottom;
    if(over>0){
      var top=r.top-over-s.top;
      if(top<60) over-= (60-top);
      if(over>0) bringIntoViewBy(sc, over);
    }
  }catch(e){}
}
function bringIntoViewBy(sc, dy){
  var from=sc.scrollTop, to=from+dy, t0=null;
  if(!window.requestAnimationFrame){ sc.scrollTop=to; return; }
  function step(t){ if(t0===null) t0=t; var k=Math.min(1,(t-t0)/260), e=1-Math.pow(1-k,3);
    sc.scrollTop=from+dy*e; if(k<1) requestAnimationFrame(step); }
  requestAnimationFrame(step);
}
function openPop(key){
  closeSheet();
  S.pop=key; S.popCopied=null; popReset();
  placePop(true);
}
function popReset(){
  S.popMore=null; S.popRefAdding=null; S.popFiling=null; S.popMsg=''; S.popMsgKey=null; S.popImaging=null;
}
function popSay(msg){ S.popMsg=msg||''; S.popMsgKey=S.pop; if(msg) announce(msg); }
function closePop(){
  if(!S.pop) return false;
  S.pop=null; S.popCopied=null; popReset();
  clearPopDom(document);
  return true;
}

function openSheet(key){
  if(S.sheet!==key){ S.xrDrawn=0; S.refAdding=false; S.refMsg=''; S.refDraft='';
                     S.filing=false; S.fileMsg=''; S.noteDraftOpen=false; }
  S.sheet=key;
  var p=parseKey(key), cur=S.hl[key];
  var note=S.notes.filter(function(x){return x.b===p.b&&x.c===p.c&&x.v===p.v;})[0];
  var h='<div class="grabzone"><div class="grab"></div></div>';
  h+='<div class="ref">'+esc(vRef(p.b,p.c,p.v))+'</div>';
  h+='<div class="vt">'+esc(vText(p.b,p.c,p.v))+'</div>';
  h+='<div class="sws">'+COLORS.map(function(c){
    return '<button class="sw" data-color="'+c.k+'" aria-selected="'+(cur===c.k)+'" '+
      'title="'+esc(c.n)+'"><span class="swt" style="border-bottom-color:'+c.dot+
      (c.k==='yellow'?';background:rgba(224,176,48,.22)':'')+'">Aa</span></button>';
  }).join('')+'</div>';
  ensureXrefs(function(){
    if(S.sheet===key && !S.xrDrawn){ S.xrDrawn=1; openSheet(key); }
  });
  var bkp=BK(p.b);
  var vera=(bkp&&bkp.eras&&bkp.eras.length)?bkp.eras[bkp.eras.length-1]:null;
  var here=placesInVerse(vText(p.b,p.c,p.v), vera);
  if(here.length){
    var plate=(platesForEra(vera||'roman')[0]||PLATES[0]);
    h+='<div class="lab" style="margin-bottom:8px">On the map</div>';
    h+='<div class="chips" style="margin-bottom:6px">'+here.map(function(pl){
      return '<span class="chip pl">'+esc(pl.n)+'</span>';
    }).join('')+'</div>';
    h+='<button class="btn gh" data-plate="'+esc(plate.id)+'" '+
       'style="margin-bottom:14px">Open '+esc(plate.name)+'</button>';
  }
  var mine=userRefs(p.b,p.c,p.v);
  if(mine.length){
    h+='<div class="lab" style="margin-bottom:8px">Your references</div>';
    h+='<div class="rels">'+mine.map(function(lbl){
      var r=parseRefs(lbl)[0];
      var txt=(r&&r.ok)?vText(r.b,r.c,r.v1||1):'';
      return '<div class="rel mine">'+
        ((r&&r.ok)?'<button class="relgo" data-goverse="'+vKey(r.b,r.c,r.v1||1)+'">':'<span class="relgo">')+
        '<span class="rr">'+esc(lbl)+'</span>'+
        (txt?'<span class="rt">'+esc(txt.length>140?txt.slice(0,140)+'\u2026':txt)+'</span>':'')+
        ((r&&r.ok)?'</button>':'</span>')+
        '<button class="relx" data-delref="'+esc(lbl)+'" title="Remove">\u00d7</button>'+
        '</div>';
    }).join('')+'</div>';
  }
  if(S.refAdding){
    h+='<div class="refadd"><input id="refin" placeholder="Isaiah 53:5" value="'+
       esc(S.refDraft||'')+'">'+
       '<button class="btn sec" data-a="saveref">Add</button></div>';
    if(S.refMsg) h+='<p class="vnote" style="margin:-6px 0 12px">'+esc(S.refMsg)+'</p>';
  } else {
    h+='<button class="btn gh" data-a="addref" style="margin-bottom:14px">'+
       'Add a cross reference</button>';
  }

  var rel=relatedTo(p.b,p.c,p.v);
  if(rel.length){
    h+='<div class="lab" style="margin-bottom:8px">Related passages</div>';
    h+='<div class="rels">'+rel.map(function(r){
      return '<button class="rel" data-goverse="'+vKey(r.b,r.c,r.v)+'">'+
        '<span class="rr">'+esc(vRef(r.b,r.c,r.v))+'</span>'+
        '<span class="rt">'+esc(r.text.length>150?r.text.slice(0,150)+'\u2026':r.text)+'</span>'+
        '</button>';
    }).join('')+'</div>';
  }
  h+='<div class="acts">';
  h+='<div class="row2">'+
     '<button class="btn sec" data-a="copyverse">'+(S.copied?'Copied':'Copy')+'</button>'+
     (navigator.share?'<button class="btn sec" data-a="shareverse">Share</button>':'')+
     '<button class="btn sec" data-a="cardverse">Share as image</button>'+
     '</div>';
  if(S.noteDraftOpen){
    h+='<div class="lab" style="margin:12px 0 7px">'+(note?'Your note':'A note on this verse')+'</div>';
    h+='<textarea id="quicknote" class="qn" rows="4" placeholder="Write it here\u2026">'+
       esc(note?note.body:'')+'</textarea>';
    h+='<div class="qnrow">'+
       '<button class="btn" data-a="savequick">Save</button>'+
       (note?'<button class="btn gh" data-a="delquick">Delete</button>':'')+
       '<button class="btn gh" data-a="cancelquick">Cancel</button></div>';
  } else {
    h+='<button class="btn sec" data-a="bookmark">'+
       (S.marks[S.sheet]?'\u2713 Bookmarked':'Bookmark')+'</button>';
    if(S.marks[S.sheet]){
      var cur=folderOf(S.sheet), fs=bookmarkFolders();
      if(fs.indexOf(cur)===-1) fs.unshift(cur);
      h+='<div class="bmfold"><span class="bmfl">Folder</span>'+fs.map(function(f){
          return '<button class="chip'+(f===cur?' on':'')+'" data-bmfolder="'+esc(f)+'">'+
            esc(f)+'</button>';}).join('')+
        '<span class="tagadd"><input id="bmfolderin" placeholder="New folder" maxlength="32">'+
        '<button class="tagaddbtn" data-a="bmnewfolder" aria-label="Make this folder">+</button></span>'+
        '</div>';
    }
    h+='<button class="btn sec" data-a="notefor">'+
       (note?'Edit this note':'Write a note')+'</button>';
  }
  if(S.notes.length){
    if(S.filing){
      h+='<div class="lab" style="margin:14px 0 8px">File this verse in\u2026</div>';
      h+='<div class="filelist">'+S.notes.slice().sort(function(a,b){
          return (b.ts||0)-(a.ts||0); }).slice(0,12).map(function(n){
        return '<button class="filerow" data-filenote="'+esc(n.id)+'">'+
          '<b>'+esc(noteTitle(n))+'</b>'+
          (n.b!==null&&n.b!==undefined?'<span>'+esc(vRef(n.b,n.c,n.v))+'</span>':'')+
          '</button>';
      }).join('')+'</div>';
      h+='<button class="btn gh" data-a="cancelfile">Cancel</button>';
    } else {
      h+='<button class="btn gh" data-a="filenote">File it in one of your notes</button>';
    }
  }
  if(S.fileMsg) h+='<p class="vnote" style="margin:6px 0 12px">'+esc(S.fileMsg)+'</p>';
  if(cur) h+='<button class="btn gh" data-a="unhl">Remove highlight</button>';
  h+='</div>';
  sheet.innerHTML=h;
  if(sheet.style){ sheet.style.transition=''; sheet.style.transform=''; }
  placeOverlays();
  sheet.classList.add('on'); scrim.classList.add('on');
  initSheetDrag();
}
function closeSheet(){
  PAY.open=null;
  if(sheet.style){ sheet.style.transition=''; sheet.style.transform=''; }
  sheet.classList.remove('on'); scrim.classList.remove('on'); S.sheet=null;
}

function setColor(key,col){
  if(S.hl[key]===col) delete S.hl[key]; else S.hl[key]=col;
  saveHl();
}

/* a highlight colour at some strength, for browsers without color-mix()
   (Safari before 16.2, which is every iPad that stops at iOS 12) */
function hexAlpha(hex, a){
  var m=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(String(hex||''));
  if(!m) return 'transparent';
  return 'rgba('+parseInt(m[1],16)+','+parseInt(m[2],16)+','+parseInt(m[3],16)+','+a+')';
}

/* ================= NOTES ================= */
function noteFor(p){
  return S.notes.filter(function(x){return x.b===p.b&&x.c===p.c&&x.v===p.v;})[0];
}
function noteShelf(n){
  if(n.b==null) return 'Unfiled';
  var b=BK(n.b); if(!b) return 'Unfiled';
  return b.apoc?'Apocrypha':(b.i<39?'Old Testament':'New Testament');
}
function vNotes(){
  if(S.editing) return vNoteEdit();
  var all=S.notes.filter(function(n){
    return n.b==null || (BK(n.b) && vText(n.b,n.c,n.v));
  }).sort(function(a,b){return b.ts-a.ts;});
  var f=S.noteFilter||'All';
  var list=all.filter(function(n){
    if(f==='All') return true;
    if(['Old Testament','New Testament','Apocrypha','Unfiled'].indexOf(f)>-1)
      return noteShelf(n)===f;
    return (n.tags||[]).indexOf(f)>-1;          /* a tag tapped on a card */
  });
  var tags=allNoteTags();
  /* The design's head: the name, a red New note, and a line of what is here.
     The filters are the three parts of the Bible, as the design has them; a
     tag tapped on any card filters by that tag instead. */
  var h='<div class="nhead"><h2>Notes</h2>'+
    '<button class="newnote" data-a="newnote">New note</button></div>'+
    '<p class="nsub">'+all.length+(all.length===1?' note':' notes')+' \u00b7 '+
      tags.length+(tags.length===1?' tag':' tags')+'</p>';
  var cats=['All','Old Testament','New Testament','Apocrypha'];
  if(all.some(function(n){return noteShelf(n)==='Unfiled';})) cats.push('Unfiled');
  if(cats.indexOf(f)===-1) cats.push(f);
  h+='<div class="shchips nchips">'+cats.map(function(c){
    return '<button class="chip'+(f===c?' on':'')+'" data-notefilter="'+esc(c)+'">'+
      esc(c)+'</button>';
  }).join('')+'</div>';
  if(!S.notes.length)
    return h+'<div class="empty">No notes yet.<br><br>Tap <b>New note</b>, or open any '+
      'chapter, tap a verse and choose Note.</div>';
  if(!list.length) return h+'<div class="empty">No notes here yet.</div>';
  return h+list.map(noteHTML).join('');
}

function fab(){ return '<button class="fab" data-a="newnote" title="New note">'+svg(I.plus)+'</button>'; }
/* Today, then the weekday for the last week, then the date, as the design has it */
function noteWhen(ts){
  var d=new Date(ts), now=new Date();
  if(d.toDateString()===now.toDateString()) return 'Today';
  var days=Math.floor((new Date(now.toDateString())-new Date(d.toDateString()))/864e5);
  if(days>0&&days<7) return d.toLocaleDateString(undefined,{weekday:'long'});
  return d.toLocaleDateString(undefined,{month:'short',day:'numeric'});
}
function noteHTML(n){
  var when=noteWhen(n.ts);
  var q=n.b==null?'':vText(n.b,n.c,n.v);
  /* The whole card opens the note; its tags filter the list. */
  return '<div class="ncard" role="button" tabindex="0" data-editnote="'+n.id+'">'+
    '<div class="ncrow"><span class="ncref">'+
      esc(n.b==null?'Unfiled':vRef(n.b,n.c,n.v))+'</span>'+
      '<span class="ncdate">'+esc(when)+'</span></div>'+
    '<div class="nctitle">'+esc(n.title||'Untitled')+'</div>'+
    (q?'<div class="ncverse">'+esc(q)+'</div>':'')+
    (n.body?'<div class="ncbody">'+esc(n.body)+'</div>':'')+
    ((n.tags&&n.tags.length)?'<div class="ntags">'+n.tags.map(function(t){
      return '<button class="ntag" data-notefilter="'+esc(t)+'">'+esc(t)+'</button>';
    }).join('')+'</div>':'')+
    '</div>';
}

function vNoteEdit(){
  var e=S.editing;
  var d=new Date(e.ts||Date.now()), now=new Date();
  var when=(d.toDateString()===now.toDateString())?'Today':
    d.toLocaleDateString(undefined,{month:'short',day:'numeric'});
  var h='<div class="nedbar">'+
    '<button class="backlink" data-a="savenote">\u2190 Notes</button>'+
    '<button class="neddone" data-a="savenote">Done</button></div>';
  h+='<div class="ncrow ned"><span class="ncref">'+
     esc(e.b==null?'Unfiled':vRef(e.b,e.c,e.v))+'</span>'+
     '<span class="ncdate">'+esc(when)+'</span></div>';
  if(e.b!=null) h+='<div class="nedverse">'+esc(vText(e.b,e.c,e.v))+'</div>';
  h+='<input class="nedtitle" id="ntitle" placeholder="Title" maxlength="64" value="'+
     esc(e.title||'')+'">';
  h+='<textarea class="nedbody ta" id="nbody" placeholder="Write your note\u2026">'+
     esc(e.body||'')+'</textarea>';

  h+='<div class="nedlab">Tags</div><div class="ntags nedtags">'+
    (e.tags||[]).map(function(t,i){
      return '<button class="ntag" data-deltag="'+i+'" aria-label="Remove the tag '+esc(t)+'">'+
        esc(t)+' <b aria-hidden="true">\u00d7</b></button>';
    }).join('')+
    '<span class="tagadd"><input id="ntagadd" placeholder="Add tag" maxlength="28" value="'+
    esc(S.tagDraft||'')+'">'+
    '<button class="tagaddbtn" data-a="addtag" aria-label="Add this tag">+</button></span></div>';

  h+='<div class="nedlab">Linked verses</div>';
  if((e.links||[]).length)
    h+='<div class="lklist">'+e.links.map(function(l,i){
      return '<div class="lkrow"><span class="lkref">'+esc(l[0])+'</span>'+
        (l[1]?'<span class="lktxt">'+esc(l[1])+'</span>':'')+
        '<button class="lkdel" data-dellink="'+i+'" aria-label="Remove '+esc(l[0])+
        '">'+svg(I.close)+'</button></div>';
    }).join('')+'</div>';
  h+='<div class="lkadd"><input id="nlink" placeholder="Link a verse, e.g. Luke 18:13" '+
     'value="'+esc(S.linkDraft||'')+'">'+
     '<button class="btn sec" data-a="addlink">Add</button></div>';
  if(S.linkMsg) h+='<p class="vnote" style="margin:7px 2px 0">'+esc(S.linkMsg)+'</p>';
  if(e.id) h+='<button class="neddel" data-delnote="'+e.id+'">Delete this note</button>';
  return h;
}


/* ================= SAVES ================= */
/* A bookmark used to be only a timestamp. It now carries a folder too. The
   old shape is read as-is and upgraded when touched, so nothing already
   bookmarked is lost, and a bookmark with no folder falls into the section of
   scripture it sits in, which is what the design's "Sermon on the Mount"
   folder is. */
function markInfo(k){
  var v=S.marks[k];
  if(v==null) return null;
  if(typeof v==='number') return {ts:v,f:''};
  if(typeof v==='object') return {ts:+v.ts||0,f:typeof v.f==='string'?v.f:''};
  return {ts:0,f:''};
}
function defaultFolder(b,c){
  var bk=BK(b);
  /* a section name makes a good folder; a bare "Book II" (the Psalms are
     divided into five books) does not, so that falls back to the book's name */
  try{ var mv=moveFor(bk,c);
    if(mv&&mv.t&&!/^Book\s+[IVXLC]+$/i.test(mv.t)) return mv.t; }catch(e){}
  return bk?bk.name:'Saved';
}
function folderOf(k){
  var i=markInfo(k); if(!i) return '';
  if(i.f) return i.f;
  var p=parseKey(k); return defaultFolder(p.b,p.c);
}
function bookmarkFolders(){
  var seen={}, out=[];
  Object.keys(S.marks).forEach(function(k){ var f=folderOf(k);
    if(f&&!seen[f]){ seen[f]=1; out.push(f); } });
  return out;
}
function bookmarkList(){
  var out=[];
  for(var k in S.marks){
    var p=parseKey(k);
    if(!BK(p.b)) continue;
    var t=vText(p.b,p.c,p.v);
    if(!t) continue;                 /* stale reference: skip, do not show a blank */
    var mi=markInfo(k);
    out.push({key:k,b:p.b,c:p.c,v:p.v,text:t,ts:mi?mi.ts:0,folder:folderOf(k)});
  }
  out.sort(function(a,b){ return (b.ts||0)-(a.ts||0); });
  return out;
}
function savedList(){
  var out=[];
  for(var k in S.hl){
    var p=parseKey(k);
    if(!BK(p.b)||!CMAP[S.hl[k]]) continue;
    var t=vText(p.b,p.c,p.v);
    if(!t) continue;            // stale reference: skip rather than show a blank card
    out.push({key:k,b:p.b,c:p.c,v:p.v,color:S.hl[k],text:t});
  }
  return out;
}
function vSaves(){
  var all=savedList(), bm=bookmarkList();
  var tab=(S.savesTab==='bookmarks')?'bookmarks':'highlights';
  var h=screenHead({title:'Saves'});
  h+='<div class="seg savseg">'+
    [['bookmarks','Bookmarks'],['highlights','Highlights']].map(function(o){
      return '<button data-savestab="'+o[0]+'" aria-selected="'+(tab===o[0])+'">'+o[1]+'</button>';
    }).join('')+'</div>';

  if(tab==='bookmarks'){
    if(!bm.length)
      return h+'<div class="empty">No bookmarks yet.<br><br>Open any chapter, tap a verse '+
        'and choose Bookmark to keep your place in it.</div>';
    /* folders as small tooled plates, as the design draws them */
    var fs=bookmarkFolders(), cur=S.bmFolder||'All saves';
    if(cur!=='All saves'&&fs.indexOf(cur)===-1) cur='All saves';
    h+='<div class="folders">'+['All saves'].concat(fs).map(function(f){
      var n=f==='All saves'?bm.length:bm.filter(function(x){return x.folder===f;}).length;
      return '<button class="folder'+(f===cur?' on':'')+'" data-bmf="'+esc(f)+'">'+
        '<span class="fname">'+esc(f)+'</span>'+
        '<span class="fcount">'+n+(n===1?' verse':' verses')+'</span></button>';
    }).join('')+'</div>';
    var bl=cur==='All saves'?bm:bm.filter(function(x){return x.folder===cur;});
    return h+bl.map(function(x){
      return '<button class="bmrow" data-goverse="'+x.key+'">'+
        '<span class="bmhead"><svg class="bmic" viewBox="0 0 24 24" aria-hidden="true">'+
          '<path d="M7 3.5h10v17l-5-3.8-5 3.8z"/></svg>'+
          '<span class="bmref">'+esc(vRef(x.b,x.c,x.v))+'</span>'+
          '<span class="bmfold2">'+esc(x.folder)+'</span>'+
          '<span class="bmdate">'+esc(noteWhen(x.ts||Date.now()))+'</span></span>'+
        '<span class="bmtext">'+esc(x.text)+'</span></button>';
    }).join('');
  }

  if(!all.length)
    return h+'<div class="empty">Nothing highlighted yet.<br><br>Open any chapter, tap a verse, '+
      'and pick a colour. Highlights are saved on this device and collected here.</div>';
  /* the swatches, each with how many */
  h+='<div class="shchips swchips">'+
    '<button class="chip'+(S.saveColor==='all'?' on':'')+'" data-cf="all">All '+all.length+'</button>'+
    COLORS.map(function(c){
      var n=all.filter(function(x){return x.color===c.k;}).length;
      if(!n) return '';
      return '<button class="chip hue'+(S.saveColor===c.k?' on':'')+'" data-cf="'+c.k+'">'+
        '<i style="background:'+c.dot+'"></i>'+c.n+' '+n+'</button>';
    }).join('')+'</div>';
  var list=S.saveColor==='all'?all:all.filter(function(x){return x.color===S.saveColor;});
  if(!list.length) return h+'<div class="empty">Nothing in that colour yet.</div>';
  /* newest first, the verse drawn as if marked with the swatch */
  return h+list.slice().reverse().map(function(x){
    var c=CMAP[x.color]||COLORS[0];
    return '<button class="hlrow" data-goverse="'+x.key+'">'+
      '<span class="bmhead"><i class="hldot" style="background:'+c.dot+'"></i>'+
        '<span class="bmref">'+esc(vRef(x.b,x.c,x.v))+'</span>'+
        '<span class="bmdate">'+esc(c.n)+'</span></span>'+
      '<span class="hltext"><mark style="--sw:'+c.bg+';--sw55:'+hexAlpha(c.bg,.55)+
        ';--sw28:'+hexAlpha(c.bg,.28)+';--swn:'+hexAlpha(c.night,.32)+'">'+esc(x.text)+'</mark></span></button>';
  }).join('');
}

function findSheet(id){
  return S.sheets.filter(function(x){return x.id===id;})[0];
}
function vStudy(){ return hasStudy()?vSheets():studyTeaser(); }
function vSheets(){
  if(S.sheetEdit) return vSheetEdit();
  if(S.sheet) return vSheetDetail();
  var h=screenHead({
    eyebrow:'Study sheets',
    title:'Study',
    sub:S.sheets.length+(S.sheets.length===1?' sheet':' sheets')+
        ' \u00b7 tap a reference to open it',
    action:shAction('newsheet',I.plus,'New study sheet',true),
    chips:S.sheets.map(function(x){
      return '<button class="chip" data-sheet="'+esc(x.id)+'">'+esc(x.name)+'</button>';
    }).join('')
  });
  if(!S.sheets.length)
    return h+'<div class="empty">No study sheets yet.</div>'+
      '<button class="btn" data-a="newsheet">New study sheet</button>';
  h+=S.sheets.map(function(sh){
    var n=sh.items.length;
    return '<button class="item" data-sheet="'+esc(sh.id)+'"><span class="ic">'+svg(I.grid)+
      '</span><span class="spacer"><span class="tt">'+esc(sh.name)+'</span>'+
      '<span class="dd">'+n+' entr'+(n===1?'y':'ies')+'</span></span>'+
      '<span class="go">'+svg(I.next)+'</span></button>';
  }).join('');
  h+='<div style="height:6px"></div><button class="btn sec" data-a="newsheet">New study sheet</button>';
  return h;
}
function vSheetDetail(){
  var sh=findSheet(S.sheet);
  if(!sh){ S.sheet=null; return vSheets(); }
  var h='<button class="back" data-a="closesheetv">&larr; Study</button>';
  h+='<div class="bhead"><h2>'+esc(sh.name)+'</h2>'+
     (sh.desc?'<div class="full">'+esc(sh.desc)+'</div>':'')+'</div>';
  h+='<div class="search"><svg viewBox="0 0 24 24">'+I.search+
     '</svg><input id="shq" placeholder="Search this sheet" value="'+esc(S.sheetQ)+'"></div>';
  if(S.sheetMsg) h+='<p class="vnote" style="margin:-6px 2px 12px">'+esc(S.sheetMsg)+'</p>';
  var q=S.sheetQ.trim().toLowerCase();
  var items=sh.items;
  if(q) items=items.filter(function(it){
    return it.q.toLowerCase().indexOf(q)>-1 || (it.refs||'').toLowerCase().indexOf(q)>-1;});
  if(!items.length) return h+'<div class="empty">Nothing in this study sheet matches.</div>';
  h+=items.map(function(it){
    var refs=parseRefs(it.refs);
    return '<div class="sq"><div class="sqh"><span class="sqn">'+(it.n||'')+'</span>'+
      '<span class="sqq">'+esc(it.q)+'</span></div>'+
      (it.note?'<div class="snote">'+esc(it.note)+'</div>':'')+
      '<div class="reflist">'+refs.map(function(r){
        return r.ok
          ? '<button class="ref'+(r.approx?' approx':'')+'" data-ref="'+r.b+':'+r.c+':'+(r.v1||1)+
            '" data-refend="'+(r.v2||r.v1||0)+'" title="'+
            (r.approx?'This edition of the Apocrypha merges a few verse divisions, '+
             'so this opens the chapter':'')+'">'+esc(r.label)+(r.approx?' \u00b7 ch':'')+'</button>'
          : '<span class="ref off">'+esc(r.label)+'</span>';
      }).join('')+'</div>'+
      '<div class="sqf">'+
      (preceptSaved(sh.id,it.id)
        ? '<button class="saved" data-opennote="'+esc(preceptNoteId(sh.id,it.id))+
          '">\u2713 In your notes</button>'
        : '<button data-precept="'+esc(it.id)+'">Save to notes</button>')+
      '<button data-edititem="'+esc(it.id)+'">Edit</button>'+
      '<button class="del" data-delitem="'+esc(it.id)+'">Delete</button></div></div>';
  }).join('');
  h+='<div style="height:8px"></div><button class="btn" data-a="newitem">Add an entry</button>';
  h+='<div style="height:8px"></div><button class="btn gh" data-a="delsheet">Delete this sheet</button>';
  return h;
}
function vSheetEdit(){
  var e=S.sheetEdit;
  if(e.kind==='sheet'){
    return '<div class="lab">'+(e.id?'Rename study sheet':'New study sheet')+'</div>'+
      '<input class="sbox2" id="shname" placeholder="Study sheet name" value="'+esc(e.name||'')+'">'+
      '<textarea class="ta" id="shdesc" style="min-height:80px" '+
      'placeholder="Description (optional)">'+esc(e.desc||'')+'</textarea>'+
      '<div style="height:10px"></div><button class="btn" data-a="savesheet">Save</button>'+
      '<div style="height:8px"></div><button class="btn gh" data-a="cancelsheet">Cancel</button>';
  }
  var preview=parseRefs(e.refs||'');
  var bad=preview.filter(function(r){return !r.ok;});
  var h='<div class="lab">'+(e.id?'Edit entry':'New entry')+'</div>';
  h+='<input class="sbox2" id="itq" placeholder="Question" value="'+esc(e.q||'')+'">';
  h+='<textarea class="ta" id="itr" style="min-height:90px" '+
     'placeholder="References, e.g. Matthew 19:16-17; Baruch 4:1">'+esc(e.refs||'')+'</textarea>';
  h+='<div class="card" style="margin-top:10px"><div class="lab">Resolves to</div>'+
     (preview.length?'<div class="reflist">'+preview.map(function(r){
        return '<span class="ref'+(r.ok?'':' off')+'">'+esc(r.label)+'</span>';}).join('')+'</div>'
      :'<p style="margin:0;font-size:13px;color:var(--ink2)">Nothing yet.</p>');
  if(bad.length) h+='<p style="margin:9px 0 0;font-size:12.5px;color:#B4405A">'+
     bad.length+' reference'+(bad.length>1?'s':'')+' could not be matched to a book and chapter. '+
     'They will still be shown, just not tappable.</p>';
  h+='</div>';
  h+='<div style="height:10px"></div><button class="btn" data-a="saveitem">Save entry</button>';
  h+='<div style="height:8px"></div><button class="btn gh" data-a="cancelitem">Cancel</button>';
  return h;
}

/* The Bible tab drops you straight into the text. Browsing lives in the
   Library, so a second book-and-chapter directory was only in the way. */
var MOTIF={
 /* --- creation and covenant --- */
 sunmoon:'<circle cx="36" cy="40" r="17" fill="currentColor" opacity=".95"/>'+
   '<path d="M72 26a17 17 0 100 32 20 20 0 010-32z" fill="currentColor" opacity=".8"/>'+
   '<path d="M8 74q22-12 44 0t40-6" stroke="currentColor" stroke-width="3.5" fill="none" opacity=".65"/>'+
   '<path d="M8 84q22-12 44 0t40-6" stroke="currentColor" stroke-width="3" fill="none" opacity=".45"/>',
 bush:'<path d="M50 84V54" stroke="currentColor" stroke-width="4"/>'+
   '<path d="M50 58c-14 0-22-9-20-19 3 3 7 4 10 2-4-8 0-17 10-20 10 3 14 12 10 20 3 2 7 1 10-2 2 10-6 19-20 19z" fill="currentColor" opacity=".92"/>'+
   '<path d="M32 46c-6-4-8-12-4-18 2 5 6 7 9 6M68 46c6-4 8-12 4-18-2 5-6 7-9 6" stroke="currentColor" stroke-width="3" fill="none" opacity=".7"/>'+
   '<path d="M30 84h40" stroke="currentColor" stroke-width="4" opacity=".55"/>',
 altar:'<rect x="24" y="56" width="52" height="10" fill="currentColor" opacity=".9"/>'+
   '<rect x="30" y="66" width="40" height="18" fill="currentColor" opacity=".55"/>'+
   '<path d="M50 18c8 10 12 16 12 22a12 12 0 01-24 0c0-6 4-12 12-22z" fill="currentColor"/>'+
   '<path d="M50 32c4 6 6 9 6 12a6 6 0 01-12 0c0-3 2-6 6-12z" fill="#fff" opacity=".35"/>',
 tents:'<path d="M28 74L46 34l18 40z" fill="currentColor" opacity=".9"/>'+
   '<path d="M56 74L70 44l14 30z" fill="currentColor" opacity=".6"/>'+
   '<path d="M16 74h68" stroke="currentColor" stroke-width="4"/>'+
   '<circle cx="24" cy="26" r="3" fill="currentColor"/><circle cx="76" cy="22" r="2.5" fill="currentColor"/>'+
   '<circle cx="62" cy="18" r="2" fill="currentColor"/>',
 tablets:'<rect x="16" y="24" width="30" height="56" rx="14" fill="currentColor" opacity=".92"/>'+
   '<rect x="54" y="24" width="30" height="56" rx="14" fill="currentColor" opacity=".75"/>'+
   '<g stroke="#fff" stroke-width="2.6" opacity=".45">'+
   '<path d="M23 40h16M23 50h16M23 60h16M61 40h16M61 50h16M61 60h16"/></g>',
 /* --- conquest and kingdom --- */
 walls:'<rect x="14" y="46" width="72" height="34" fill="currentColor" opacity=".85"/>'+
   '<path d="M14 46v-8h10v8h10v-8h10v8h12v-8h10v8h10v-8h10v8" fill="currentColor"/>'+
   '<rect x="42" y="60" width="16" height="20" rx="8" fill="#fff" opacity=".35"/>',
 sword:'<path d="M50 10l7 12v40l-7 8-7-8V22z" fill="currentColor"/>'+
   '<rect x="30" y="62" width="40" height="7" rx="3.5" fill="currentColor" opacity=".8"/>'+
   '<rect x="45" y="69" width="10" height="16" rx="4" fill="currentColor" opacity=".65"/>'+
   '<circle cx="50" cy="88" r="5" fill="currentColor" opacity=".8"/>',
 wheat:'<path d="M50 88V38" stroke="currentColor" stroke-width="4"/>'+
   '<g fill="currentColor" opacity=".9">'+
   '<ellipse cx="50" cy="20" rx="6" ry="11"/>'+
   '<ellipse cx="38" cy="32" rx="5.5" ry="10" transform="rotate(-24 38 32)"/>'+
   '<ellipse cx="62" cy="32" rx="5.5" ry="10" transform="rotate(24 62 32)"/>'+
   '<ellipse cx="38" cy="48" rx="5.5" ry="10" transform="rotate(-24 38 48)"/>'+
   '<ellipse cx="62" cy="48" rx="5.5" ry="10" transform="rotate(24 62 48)"/></g>',
 crown:'<path d="M18 68h64l6-34-18 12-18-24-18 24-18-12z" fill="currentColor" opacity=".95"/>'+
   '<rect x="18" y="70" width="64" height="10" rx="4" fill="currentColor" opacity=".7"/>'+
   '<circle cx="50" cy="46" r="4" fill="#fff" opacity=".45"/>',
 gate:'<path d="M22 82V44a28 28 0 0156 0v38" fill="none" stroke="currentColor" stroke-width="7"/>'+
   '<path d="M50 82V22" stroke="currentColor" stroke-width="4" opacity=".55"/>'+
   '<path d="M32 60h36" stroke="currentColor" stroke-width="4" opacity=".55"/>',
 scepter:'<path d="M50 88V34" stroke="currentColor" stroke-width="5"/>'+
   '<path d="M50 12l9 12-9 12-9-12z" fill="currentColor"/>'+
   '<circle cx="50" cy="46" r="7" fill="currentColor" opacity=".75"/>',
 /* --- wisdom --- */
 whirl:'<path d="M50 16c20 0 30 12 30 24S66 62 50 62 26 54 26 46s8-14 20-14 16 6 16 12-6 10-12 10-8-4-8-7" '+
   'fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>'+
   '<path d="M20 78q30-10 60 0" stroke="currentColor" stroke-width="4" fill="none" opacity=".5"/>',
 harp:'<path d="M28 84C28 44 46 20 74 14" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>'+
   '<path d="M28 84h46" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>'+
   '<g stroke="currentColor" stroke-width="2.4" opacity=".6">'+
   '<path d="M38 78V38M46 78V32M54 78V28M62 78V24M70 78V20"/></g>',
 lamp:'<path d="M24 58h52c0 12-10 20-26 20S24 70 24 58z" fill="currentColor" opacity=".9"/>'+
   '<path d="M76 58l12-6-4 12" fill="currentColor" opacity=".7"/>'+
   '<path d="M40 58c0-8 4-12 10-12s10 4 10 12" fill="none" stroke="currentColor" stroke-width="3.5" opacity=".7"/>'+
   '<path d="M88 40c4 4 4 10 0 14-4-4-4-10 0-14z" fill="currentColor"/>',
 hourglass:'<path d="M28 14h44M28 86h44" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>'+
   '<path d="M34 14c0 18 16 22 16 36 0-14 16-18 16-36M34 86c0-18 16-22 16-36 0 14 16 18 16 36" '+
   'fill="none" stroke="currentColor" stroke-width="5"/>'+
   '<path d="M42 74q8-8 16 0z" fill="currentColor" opacity=".7"/>',
 vine:'<path d="M50 88C50 60 34 52 34 34a16 16 0 0132 0c0 18-16 26-16 54z" fill="none" stroke="currentColor" stroke-width="5"/>'+
   '<circle cx="50" cy="30" r="8" fill="currentColor" opacity=".85"/>'+
   '<path d="M24 56q10-6 16 2M76 56q-10-6-16 2" stroke="currentColor" stroke-width="4" fill="none" opacity=".6"/>',
 /* --- prophets --- */
 throne:'<path d="M30 84V42a20 20 0 0140 0v42z" fill="currentColor" opacity=".85"/>'+
   '<path d="M22 84h56" stroke="currentColor" stroke-width="5"/>'+
   '<path d="M50 10l6 14h14l-11 9 4 15-13-9-13 9 4-15-11-9h14z" fill="currentColor" opacity=".65"/>',
 branch:'<path d="M50 88V26" stroke="currentColor" stroke-width="4"/>'+
   '<g fill="currentColor" opacity=".85">'+
   '<ellipse cx="36" cy="34" rx="9" ry="6" transform="rotate(-30 36 34)"/>'+
   '<ellipse cx="64" cy="42" rx="9" ry="6" transform="rotate(30 64 42)"/>'+
   '<ellipse cx="36" cy="54" rx="9" ry="6" transform="rotate(-30 36 54)"/></g>'+
   '<circle cx="50" cy="18" r="7" fill="currentColor"/>',
 tears:'<path d="M18 30h64" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".8"/>'+
   '<path d="M30 44l-6 22M50 44l-6 22M70 44l-6 22" stroke="currentColor" stroke-width="4" opacity=".5"/>'+
   '<path d="M50 60c6 9 9 13 9 17a9 9 0 01-18 0c0-4 3-8 9-17z" fill="currentColor"/>',
 wheel:'<circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="6"/>'+
   '<circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="5" opacity=".7"/>'+
   '<g stroke="currentColor" stroke-width="3.5" opacity=".6">'+
   '<path d="M50 20v60M20 50h60M29 29l42 42M71 29L29 71"/></g>'+
   '<circle cx="50" cy="50" r="5" fill="currentColor"/>',
 lion:'<circle cx="50" cy="52" r="22" fill="currentColor" opacity=".9"/>'+
   '<g fill="currentColor" opacity=".55">'+
   '<path d="M50 18l8 10-8 4-8-4zM22 32l11 5-4 9-9-6zM78 32L67 37l4 9 9-6z"/>'+
   '<path d="M14 58l11-2 1 10-10 1zM86 58l-11-2-1 10 10 1zM34 84l6-9 8 5-5 9zM66 84l-6-9-8 5 5 9z"/></g>'+
   '<circle cx="42" cy="48" r="3.5" fill="#fff" opacity=".7"/><circle cx="58" cy="48" r="3.5" fill="#fff" opacity=".7"/>'+
   '<path d="M44 62q6 5 12 0" stroke="#fff" stroke-width="3" fill="none" opacity=".55"/>',
 fish:'<path d="M14 50c14-16 40-20 58-6 6-8 14-10 14-10s-4 10-2 16c2 6 6 14 6 14s-10-2-18-8c-18 12-44 8-58-6z" fill="currentColor" opacity=".9"/>'+
   '<circle cx="34" cy="46" r="3.5" fill="#fff" opacity=".7"/>'+
   '<path d="M20 62q26 10 52-4" stroke="#fff" stroke-width="2.5" fill="none" opacity=".35"/>',
 locust:'<ellipse cx="50" cy="58" rx="14" ry="22" fill="currentColor" opacity=".9"/>'+
   '<path d="M36 44q-18-12-26 2 14 4 22 8zM64 44q18-12 26 2-14 4-22 8z" fill="currentColor" opacity=".6"/>'+
   '<path d="M44 30q-4-14-14-18M56 30q4-14 14-18" stroke="currentColor" stroke-width="3.5" fill="none"/>',
 plumb:'<path d="M50 8v52" stroke="currentColor" stroke-width="4"/>'+
   '<path d="M50 60l10 14-10 16-10-16z" fill="currentColor"/>'+
   '<path d="M18 8h64" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".8"/>',
 mountain:'<path d="M8 80l26-40 16 22 12-18 30 36z" fill="currentColor" opacity=".9"/>'+
   '<path d="M34 40l9 14H25z" fill="#fff" opacity=".35"/>'+
   '<circle cx="74" cy="22" r="8" fill="currentColor" opacity=".6"/>',
 scroll:'<rect x="24" y="20" width="52" height="60" rx="6" fill="currentColor" opacity=".9"/>'+
   '<path d="M24 20a8 8 0 010 16h52a8 8 0 010-16zM24 64a8 8 0 000 16h52a8 8 0 000-16z" fill="currentColor" opacity=".65"/>'+
   '<g stroke="#fff" stroke-width="2.6" opacity=".4"><path d="M34 44h32M34 52h32"/></g>',
 /* --- new testament --- */
 star:'<path d="M50 8l11 26 28 2-21 18 7 27-25-15-25 15 7-27-21-18 28-2z" fill="currentColor"/>'+
   '<circle cx="20" cy="20" r="2.5" fill="currentColor" opacity=".6"/>'+
   '<circle cx="82" cy="26" r="2" fill="currentColor" opacity=".5"/>',
 ox:'<path d="M50 44a20 20 0 100 40 20 20 0 000-40z" fill="currentColor" opacity=".9"/>'+
   '<path d="M30 46C16 40 10 26 14 14c10 2 18 12 20 24M70 46c14-6 20-20 16-32-10 2-18 12-20 24" '+
   'fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>'+
   '<circle cx="42" cy="60" r="3.5" fill="#fff" opacity=".7"/><circle cx="58" cy="60" r="3.5" fill="#fff" opacity=".7"/>',
 eagle:'<path d="M50 24c6 0 10 5 10 11l26-9-20 20 22 6-30 4-8 22-8-22-30-4 22-6-20-20 26 9c0-6 4-11 10-11z" '+
   'fill="currentColor" opacity=".92"/>'+
   '<circle cx="50" cy="32" r="3" fill="#fff" opacity=".6"/>',
 flames:'<path d="M50 12c10 14 16 20 16 30a16 16 0 01-32 0c0-10 6-16 16-30z" fill="currentColor"/>'+
   '<path d="M28 40c6 8 9 12 9 18a9 9 0 01-18 0c0-6 3-10 9-18z" fill="currentColor" opacity=".7"/>'+
   '<path d="M72 40c6 8 9 12 9 18a9 9 0 01-18 0c0-6 3-10 9-18z" fill="currentColor" opacity=".7"/>'+
   '<path d="M20 84h60" stroke="currentColor" stroke-width="4" opacity=".5"/>',
 quill:'<path d="M22 82C34 52 56 24 84 14c2 26-12 50-38 60z" fill="currentColor" opacity=".9"/>'+
   '<path d="M22 82l22-22" stroke="#fff" stroke-width="3" opacity=".45"/>'+
   '<path d="M14 88h30" stroke="currentColor" stroke-width="4" opacity=".6"/>',
 anchor:'<circle cx="50" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="5"/>'+
   '<path d="M50 29v55" stroke="currentColor" stroke-width="5"/>'+
   '<path d="M30 42h40" stroke="currentColor" stroke-width="5"/>'+
   '<path d="M22 60c0 16 13 26 28 26s28-10 28-26" fill="none" stroke="currentColor" stroke-width="5"/>',
 city:'<path d="M18 84V46l16-10 16 10V26l16-10 16 10v58z" fill="currentColor" opacity=".9"/>'+
   '<g fill="#fff" opacity=".35"><rect x="26" y="56" width="8" height="10"/><rect x="42" y="56" width="8" height="10"/>'+
   '<rect x="58" y="40" width="8" height="10"/><rect x="74" y="40" width="8" height="10"/></g>'+
   '<path d="M50 8l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="currentColor" opacity=".55"/>',
 chalice:'<path d="M30 20h40l-4 22a16 16 0 01-32 0z" fill="currentColor" opacity=".92"/>'+
   '<path d="M50 58v18M34 84h32" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
 book:'<rect x="20" y="22" width="60" height="56" rx="5" fill="currentColor" opacity=".9"/>'+
   '<path d="M50 22v56" stroke="#fff" stroke-width="3" opacity=".45"/>'+
   '<g stroke="#fff" stroke-width="2.4" opacity=".35">'+
   '<path d="M28 38h16M28 48h16M28 58h16M56 38h16M56 48h16M56 58h16"/></g>'
};

/* book index -> motif. Chosen for what the book is about, never for who is in it. */
/* book index -> motif, keyed explicitly so a shifted entry is impossible */
var COVER={
  0:'sunmoon',    /* Genesis */
  1:'bush',       /* Exodus */
  2:'altar',      /* Leviticus */
  3:'tents',      /* Numbers */
  4:'tablets',    /* Deuteronomy */
  5:'walls',      /* Joshua */
  6:'sword',      /* Judges */
  7:'wheat',      /* Ruth */
  8:'crown',      /* 1 Samuel */
  9:'crown',      /* 2 Samuel */
 10:'crown',      /* 1 Kings */
 11:'crown',      /* 2 Kings */
 12:'crown',      /* 1 Chronicles */
 13:'crown',      /* 2 Chronicles */
 14:'gate',       /* Ezra */
 15:'gate',       /* Nehemiah */
 16:'scepter',    /* Esther */
 17:'whirl',      /* Job */
 18:'harp',       /* Psalms */
 19:'lamp',       /* Proverbs */
 20:'hourglass',  /* Ecclesiastes */
 21:'vine',       /* Song of Solomon */
 22:'throne',     /* Isaiah */
 23:'branch',     /* Jeremiah */
 24:'tears',      /* Lamentations */
 25:'wheel',      /* Ezekiel */
 26:'lion',       /* Daniel */
 27:'vine',       /* Hosea */
 28:'locust',     /* Joel */
 29:'plumb',      /* Amos */
 30:'mountain',   /* Obadiah */
 31:'fish',       /* Jonah */
 32:'mountain',   /* Micah */
 33:'walls',      /* Nahum */
 34:'whirl',      /* Habakkuk */
 35:'flames',     /* Zephaniah */
 36:'altar',      /* Haggai */
 37:'scroll',     /* Zechariah */
 38:'branch',     /* Malachi */
 39:'gate',       /* 1 Esdras */
 40:'star',       /* 2 Esdras */
 41:'fish',       /* Tobit */
 42:'sword',      /* Judith */
 43:'scepter',    /* Rest of Esther */
 44:'lamp',       /* Wisdom of Solomon */
 45:'scroll',     /* Ecclesiasticus */
 46:'tears',      /* Baruch */
 47:'altar',      /* Song of the Three Children */
 48:'vine',       /* Susanna */
 49:'lion',       /* Bel and the Dragon */
 50:'chalice',    /* Prayer of Manasses */
 51:'sword',      /* 1 Maccabees */
 52:'flames',     /* 2 Maccabees */
 53:'star',       /* Matthew */
 54:'lion',       /* Mark */
 55:'ox',         /* Luke */
 56:'eagle',      /* John */
 57:'flames',     /* Acts */
 58:'scroll',     /* Romans */
 59:'city',       /* 1 Corinthians */
 60:'anchor',     /* 2 Corinthians */
 61:'quill',      /* Galatians */
 62:'anchor',     /* Ephesians */
 63:'chalice',    /* Philippians */
 64:'star',       /* Colossians */
 65:'star',       /* 1 Thessalonians */
 66:'star',       /* 2 Thessalonians */
 67:'scroll',     /* 1 Timothy */
 68:'quill',      /* 2 Timothy */
 69:'scroll',     /* Titus */
 70:'chalice',    /* Philemon */
 71:'altar',      /* Hebrews */
 72:'plumb',      /* James */
 73:'anchor',     /* 1 Peter */
 74:'anchor',     /* 2 Peter */
 75:'lamp',       /* 1 John */
 76:'lamp',       /* 2 John */
 77:'lamp',       /* 3 John */
 78:'sword',      /* Jude */
 79:'city',       /* Revelation */
};

function motifFor(b){
  if(b.user) return MOTIF.book;
  return MOTIF[COVER[b.i]]||MOTIF.scroll;
}

/* four broad shelves, as asked, plus the New Testament groupings */
var CATS=[
 {key:'all',    name:'All'},
 {key:'law',    name:'Law',      from:0,  to:4,  tint:['#3D3A82','#20204A']},
 {key:'history',name:'History',  from:5,  to:16, tint:['#7A4A1E','#3E2410']},
 {key:'wisdom', name:'Wisdom',   from:17, to:21, tint:['#1C5F6B','#0E3238']},
 {key:'prophecy',name:'Prophecy',from:22, to:38, tint:['#6E2334','#38101B']},
 {key:'gospels',name:'Gospels',  from:53, to:57, tint:['#1E4B8F','#0F2648']},
 {key:'letters',name:'Letters',  from:58, to:78, tint:['#2C5546','#152A23']},
 {key:'apoc',   name:'Apocrypha',from:39, to:52, tint:['#8E1520','#4A0A12']},
 {key:'mine',   name:'Your own reading', tint:['#4A5163','#272B36']},
 {key:'tracker',name:'Tracker',  tint:['#FFFDF9','#F1ECE1']},
 {key:'atlas',  name:'Atlas',    tint:['#E6DCC6','#B99F6F']},
 {key:'words',  name:'Word study'}
];
function catOf(b){
  if(b.user) return CATS[8];
  if(b.i>=39&&b.i<=52) return CATS[7];
  for(var i=1;i<CATS.length;i++){
    var c=CATS[i];
    if(c.from!==undefined&&b.i>=c.from&&b.i<=c.to) return c;
  }
  if(b.i===79) return CATS[4];
  return CATS[6];
}


/* ================= USER LIBRARY =================
   Books the reader imports themselves. Three things make this work:

     storage  IndexedDB, not the key-value store used for highlights. Books
              run to megabytes and localStorage caps out around 5 MB.
     parsing  EPUB is a zip of XHTML, so it needs an inflate library. PDF
              needs pdf.js. Both are pulled from a CDN only when someone
              actually imports that format, so the app stays dependency-free
              until then. Plain text needs nothing.
     scope    Imported books live in this browser only. They are never
              uploaded and never leave the device.
*/

var UB_BASE = 1000;              /* user book ids start here; 0-79 are scripture */
/* pdf.js ships with the app (its legacy build, which Safari 12 can run) and
   is loaded only when a PDF is imported, so nothing comes from a CDN */
var PDFJS_LOCAL  = 'assets/vendor/pdfjs/pdf.js';
var PDFJS_WORKER = 'assets/vendor/pdfjs/pdf.worker.js';

/* Load a classic script. Deliberately not dynamic import(): a plain script
   tag works on every engine, including ones that cannot parse import(). */
function loadScript(url){
  return new Promise(function(res, rej){
    if(typeof document==='undefined'||!document.createElement) return rej(new Error('no DOM'));
    var s=document.createElement('script');
    s.src=url; s.async=true;
    s.onload=function(){ res(); };
    s.onerror=function(){ rej(new Error('Could not load '+url)); };
    (document.head||document.documentElement).appendChild(s);
  });
}

/* ---------- IndexedDB ---------- */
var Shelf=(function(){
  var DB='sixteeneleven', OLD='swordforge', STORE='books', SNAP='backups', ver=2, dbp=null;
  function openNamed(name){
    return new Promise(function(res, rej){
      var r=indexedDB.open(name, ver);
      r.onupgradeneeded=function(){
        var d=r.result;
        if(!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE,{keyPath:'id'});
        if(!d.objectStoreNames.contains(SNAP)) d.createObjectStore(SNAP,{keyPath:'id'});
      };
      r.onsuccess=function(){ res(r.result); };
      r.onerror=function(){ rej(r.error||new Error('IndexedDB blocked')); };
    });
  }
  /* The database was called "swordforge" before the rename. Anything in it,
     your restore points and your imported books, is copied into the new one
     on first launch. The old one is deleted only once every record has been
     written and the copy has finished; if anything goes wrong it is left
     exactly as it was and the move is simply tried again next launch.
     Records already in the new database are never overwritten. */
  function oldExists(){
    if(indexedDB.databases) return indexedDB.databases().then(function(list){
      return (list||[]).some(function(x){ return x&&x.name===OLD; }); }).catch(function(){ return true; });
    return Promise.resolve(true);         /* no way to ask: open it and see */
  }
  function moveOld(d){
    return oldExists().then(function(there){
      if(!there) return;
      return new Promise(function(done){
        var r=indexedDB.open(OLD), fresh=false;
        r.onupgradeneeded=function(){ fresh=true; };      /* it was not really there */
        r.onerror=function(){ done(); };
        r.onsuccess=function(){
          var od=r.result;
          var stores=[STORE,SNAP].filter(function(n){ return od.objectStoreNames.contains(n); });
          function drop(){ try{ od.close(); }catch(e){}
            try{ indexedDB.deleteDatabase(OLD); }catch(e){} done(); }
          if(fresh||!stores.length) return drop();
          var got={}, pending=stores.length;
          stores.forEach(function(n){
            var q=od.transaction(n,'readonly').objectStore(n).getAll();
            q.onsuccess=function(){ got[n]=q.result||[]; if(--pending===0) write(); };
            q.onerror=function(){ try{ od.close(); }catch(e){} done(); };   /* keep the old one */
          });
          function write(){
            var t=d.transaction(stores,'readwrite');
            stores.forEach(function(n){
              var os=t.objectStore(n);
              got[n].forEach(function(rec){
                var k=os.getKey?os.getKey(rec.id):os.get(rec.id);
                k.onsuccess=function(){ if(k.result===undefined) os.put(rec); };
              });
            });
            t.oncomplete=drop;                                  /* only now */
            t.onerror=function(){ try{ od.close(); }catch(e){} done(); };
            t.onabort=t.onerror;
          }
        };
      });
    }).catch(function(){});
  }
  function open(){
    if(dbp) return dbp;
    if(typeof indexedDB==='undefined') return (dbp=Promise.reject(new Error('no IndexedDB')));
    dbp=openNamed(DB).then(function(d){
      return moveOld(d).then(function(){ return d; }, function(){ return d; });
    });
    return dbp;
  }
  function tx(mode, fn, which){
    return open().then(function(d){
      return new Promise(function(res, rej){
        var name=which||STORE;
        var t=d.transaction(name, mode), s=t.objectStore(name), out;
        out=fn(s);
        t.oncomplete=function(){ res(out&&out.result!==undefined?out.result:out); };
        t.onerror=function(){ rej(t.error); };
      });
    });
  }
  return {
    put:function(book){ return tx('readwrite', function(s){ return s.put(book); }); },
    get:function(id){ return tx('readonly', function(s){ return s.get(id); }); },
    all:function(){ return tx('readonly', function(s){ return s.getAll(); }); },
    del:function(id){ return tx('readwrite', function(s){ return s.delete(id); }); },
    available:function(){ return typeof indexedDB!=='undefined'; },
    snapPut:function(o){ return tx('readwrite', function(s){ return s.put(o); }, SNAP); },
    snapAll:function(){ return tx('readonly', function(s){ return s.getAll(); }, SNAP); },
    snapDel:function(id){ return tx('readwrite', function(s){ return s.delete(id); }, SNAP); }
  };
})();

/* ---------- shared text helpers ---------- */
function stripTags(h){
  h=h.replace(/<(script|style)[\s\S]*?<\/\1>/gi,' ');
  h=h.replace(/<\/(p|div|h[1-6]|li|br)>/gi,'\n');
  h=h.replace(/<br\s*\/?>/gi,'\n');
  h=h.replace(/<[^>]+>/g,' ');
  return h;
}
function decodeEntities(s){
  return s.replace(/&#(\d+);/g,function(_,n){ return String.fromCharCode(+n); })
          .replace(/&#x([0-9a-f]+);/gi,function(_,n){ return String.fromCharCode(parseInt(n,16)); })
          .replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<')
          .replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'");
}
function paragraphs(text){
  return decodeEntities(text)
    .replace(/\r/g,'')
    .split(/\n+/)
    .map(function(p){ return p.replace(/[ \t\u00a0]+/g,' ').trim(); })
    .filter(function(p){ return p.length>1; });
}
/* Keep chapters a sane size for the reader and for read-aloud. */
function chunkParas(paras, per){
  per=per||90;
  var out=[];
  for(var i=0;i<paras.length;i+=per) out.push(paras.slice(i,i+per));
  return out.length?out:[['(empty)']];
}
function looksLikeHeading(p){
  if(p.length>70) return false;
  return /^(chapter|chap\.|book|part|section|canto|letter|epistle|psalm)\b/i.test(p)
      || /^[IVXLCDM]+\.?$/.test(p.trim())
      || /^\d{1,3}\.?$/.test(p.trim());
}
/* Split on headings when the text has them, otherwise fall back to fixed chunks. */
function splitChapters(paras){
  var idx=[];
  for(var i=0;i<paras.length;i++) if(looksLikeHeading(paras[i])) idx.push(i);
  if(idx.length<3 || idx.length>400) return {chapters:chunkParas(paras), titles:null};
  var chapters=[], titles=[];
  if(idx[0]>0){ chapters.push(paras.slice(0, idx[0])); titles.push('Opening'); }
  for(var k=0;k<idx.length;k++){
    var a=idx[k], b=(k+1<idx.length)?idx[k+1]:paras.length;
    var body=paras.slice(a+1,b);
    if(!body.length) continue;
    chapters.push(body); titles.push(paras[a]);
  }
  return chapters.length?{chapters:chapters, titles:titles}:{chapters:chunkParas(paras), titles:null};
}

/* ---------- importers ---------- */
/* ---------- reading a zip (an EPUB is one) ----------
   Our own small unzip, so importing an EPUB needs nothing from a CDN, works
   offline, and runs on Safari 12. Stored and deflated entries, which is all an
   EPUB uses. The inflater follows RFC 1951 directly. */
var Unzip=(function(){
  function Tree(){ this.table=new Uint16Array(16); this.trans=new Uint16Array(288); }
  function build(t, lengths, off, num){
    var i, sum, offs=new Uint16Array(16);
    for(i=0;i<16;i++) t.table[i]=0;
    for(i=0;i<num;i++) t.table[lengths[off+i]]++;
    t.table[0]=0;
    for(sum=0,i=0;i<16;i++){ offs[i]=sum; sum+=t.table[i]; }
    for(i=0;i<num;i++) if(lengths[off+i]) t.trans[offs[lengths[off+i]]++]=i;
  }
  var LBASE=new Uint16Array(30), LBITS=new Uint8Array(30), DBASE=new Uint16Array(30), DBITS=new Uint8Array(30);
  function bases(bits, base, delta, first){
    var i, sum;
    for(i=0;i<delta;i++) bits[i]=0;
    for(i=0;i<30-delta;i++) bits[i+delta]=(i/delta)|0;
    for(sum=first,i=0;i<30;i++){ base[i]=sum; sum+=1<<bits[i]; }
  }
  bases(LBITS,LBASE,4,3); bases(DBITS,DBASE,2,1);
  LBITS[28]=0; LBASE[28]=258;
  var FIXL=new Tree(), FIXD=new Tree();
  (function(){
    var i;
    for(i=0;i<7;i++) FIXL.table[i]=0;
    FIXL.table[7]=24; FIXL.table[8]=152; FIXL.table[9]=112;
    for(i=0;i<24;i++) FIXL.trans[i]=256+i;
    for(i=0;i<144;i++) FIXL.trans[24+i]=i;
    for(i=0;i<8;i++) FIXL.trans[24+144+i]=280+i;
    for(i=0;i<112;i++) FIXL.trans[24+144+8+i]=144+i;
    for(i=0;i<5;i++) FIXD.table[i]=0;
    FIXD.table[5]=32;
    for(i=0;i<32;i++) FIXD.trans[i]=i;
  })();
  var CLORDER=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
  function inflate(src, size){
    var d={src:src, i:0, tag:0, bits:0, out:new Uint8Array(size||src.length*4), o:0};
    function grow(n){ if(d.o+n<=d.out.length) return; var nb=new Uint8Array(Math.max(d.out.length*2,d.o+n)); nb.set(d.out); d.out=nb; }
    function bit(){ if(!d.bits--){ d.tag=d.src[d.i++]; d.bits=7; } var b=d.tag&1; d.tag>>>=1; return b; }
    function read(num, base){
      if(!num) return base;
      while(d.bits<24){ d.tag|=(d.src[d.i++]||0)<<d.bits; d.bits+=8; }
      var v=d.tag&(0xffff>>>(16-num)); d.tag>>>=num; d.bits-=num; return v+base;
    }
    function sym(t){
      while(d.bits<24){ d.tag|=(d.src[d.i++]||0)<<d.bits; d.bits+=8; }
      var sum=0, cur=0, len=0, tag=d.tag;
      do{ cur=2*cur+(tag&1); tag>>>=1; ++len; sum+=t.table[len]; cur-=t.table[len]; }while(cur>=0);
      d.tag=tag; d.bits-=len; return t.trans[sum+cur];
    }
    function dynamic(lt, dt){
      var lengths=new Uint8Array(320), i, num, hlit=read(5,257), hdist=read(5,1), hclen=read(4,4);
      for(i=0;i<19;i++) lengths[i]=0;
      for(i=0;i<hclen;i++) lengths[CLORDER[i]]=read(3,0);
      var ct=new Tree(); build(ct,lengths,0,19);
      for(num=0;num<hlit+hdist;){
        var s=sym(ct), prev, len;
        if(s===16){ prev=lengths[num-1]; for(len=read(2,3);len;--len) lengths[num++]=prev; }
        else if(s===17){ for(len=read(3,3);len;--len) lengths[num++]=0; }
        else if(s===18){ for(len=read(7,11);len;--len) lengths[num++]=0; }
        else lengths[num++]=s;
      }
      build(lt,lengths,0,hlit); build(dt,lengths,hlit,hdist);
    }
    function block(lt, dt){
      for(;;){
        var s=sym(lt);
        if(s===256) return;
        if(s<256){ grow(1); d.out[d.o++]=s; continue; }
        s-=257;
        var len=read(LBITS[s],LBASE[s]), ds=sym(dt), off=d.o-read(DBITS[ds],DBASE[ds]);
        grow(len);
        for(var k=off;k<off+len;k++) d.out[d.o++]=d.out[k];
      }
    }
    function stored(){
      while(d.bits>8){ d.i--; d.bits-=8; }
      var len=d.src[d.i]|(d.src[d.i+1]<<8); d.i+=4;
      grow(len); for(var k=0;k<len;k++) d.out[d.o++]=d.src[d.i++];
      d.bits=0; d.tag=0;
    }
    var last;
    do{
      last=bit();
      var type=read(2,0);
      if(type===0) stored();
      else if(type===1) block(FIXL,FIXD);
      else if(type===2){ var lt=new Tree(), dt=new Tree(); dynamic(lt,dt); block(lt,dt); }
      else throw new Error('bad deflate data');
    }while(!last);
    return d.out.subarray(0,d.o);
  }
  function u16(b,i){ return b[i]|(b[i+1]<<8); }
  function u32(b,i){ return (b[i]|(b[i+1]<<8)|(b[i+2]<<16))+b[i+3]*16777216; }
  /* every file in the archive, by name, as bytes */
  function unzip(buf){
    var b=new Uint8Array(buf), e=-1;
    for(var i=b.length-22;i>=Math.max(0,b.length-65557);i--)
      if(b[i]===0x50&&b[i+1]===0x4b&&b[i+2]===5&&b[i+3]===6){ e=i; break; }
    if(e<0) throw new Error('not a zip file');
    var n=u16(b,e+10), p=u32(b,e+16), out={}, dec=new TextDecoder('utf-8');
    for(var k=0;k<n;k++){
      if(u32(b,p)!==0x02014b50) throw new Error('damaged zip file');
      var method=u16(b,p+10), csize=u32(b,p+20), usize=u32(b,p+24);
      var fl=u16(b,p+28), xl=u16(b,p+30), cl=u16(b,p+32), lh=u32(b,p+42);
      var name=dec.decode(b.subarray(p+46,p+46+fl));
      p+=46+fl+xl+cl;
      if(/\/$/.test(name)) continue;
      var start=lh+30+u16(b,lh+26)+u16(b,lh+28), data=b.subarray(start,start+csize);
      if(method===0) out[name]=data;
      else if(method===8) out[name]=inflate(data, usize);
      /* anything else (rare in an EPUB) is skipped rather than failing the book */
    }
    return out;
  }
  return {unzip:unzip, inflate:inflate};
})();

/* Safari before 14 has no Blob.text() or Blob.arrayBuffer() */
function fileBytes(file){
  if(file&&typeof file.arrayBuffer==='function') return file.arrayBuffer();
  return new Promise(function(res, rej){
    var r=new FileReader(); r.onload=function(){ res(r.result); };
    r.onerror=function(){ rej(r.error||new Error('The file could not be read.')); };
    r.readAsArrayBuffer(file);
  });
}
function fileText(file){
  return fileBytes(file).then(function(buf){
    var b=new Uint8Array(buf);
    /* UTF-8 unless it has a UTF-16 byte-order mark */
    if(b[0]===0xFF&&b[1]===0xFE) return new TextDecoder('utf-16le').decode(b);
    if(b[0]===0xFE&&b[1]===0xFF) return new TextDecoder('utf-16be').decode(b);
    return new TextDecoder('utf-8').decode(b);
  });
}

function importText(file){
  return fileText(file).then(function(t){
    var s=splitChapters(paragraphs(t));
    return {title:file.name.replace(/\.[^.]+$/,''), author:'', format:'text',
            chapters:s.chapters, titles:s.titles};
  });
}

function importEpub(file){
  return fileBytes(file).then(function(buf){
    var zip=Unzip.unzip(buf);
    var dec=new TextDecoder('utf-8');
    function read(p){ return zip[p]?dec.decode(zip[p]):null; }

    var container=read('META-INF/container.xml');
    if(!container) throw new Error('not a valid EPUB (no container.xml)');
    var opfPath=(container.match(/full-path="([^"]+)"/)||[])[1];
    if(!opfPath) throw new Error('not a valid EPUB (no package file)');
    var opf=read(opfPath);
    if(!opf) throw new Error('not a valid EPUB (package file missing)');

    function attrs(tag){
      var out={}, re=/([\w:-]+)\s*=\s*"([^"]*)"/g, m;
      while((m=re.exec(tag))) out[m[1]]=m[2];
      return out;
    }
    var manifest={};
    (opf.match(/<item\b[^>]*>/g)||[]).forEach(function(t){
      var a=attrs(t); if(a.id) manifest[a.id]={href:a.href||'', type:a['media-type']||''};
    });
    var spine=(opf.match(/<itemref\b[^>]*>/g)||[])
      .map(function(t){ return attrs(t).idref; }).filter(Boolean);

    var base=opfPath.indexOf('/')>-1 ? opfPath.replace(/\/[^/]*$/,'/') : '';
    function resolve(href){
      if(!href) return null;
      href=href.split('#')[0];
      var p=base+href;
      p=p.replace(/[^/]+\/\.\.\//g,'');
      return zip[p]?p:(zip[href]?href:null);
    }

    var title=(opf.match(/<dc:title[^>]*>([\s\S]*?)<\/dc:title>/)||[])[1]||
              file.name.replace(/\.[^.]+$/,'');
    var author=(opf.match(/<dc:creator[^>]*>([\s\S]*?)<\/dc:creator>/)||[])[1]||'';

    var chapters=[], titles=[];
    spine.forEach(function(id){
      var it=manifest[id]; if(!it) return;
      if(it.type && it.type.indexOf('html')===-1 && it.type.indexOf('xml')===-1) return;
      var p=resolve(it.href); if(!p) return;
      var html=dec.decode(zip[p]);
      var head=(html.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i)||[])[1];
      var paras=paragraphs(stripTags(html));
      if(paras.length<2) return;
      chapters.push(paras);
      titles.push(head?decodeEntities(stripTags(head)).replace(/\s+/g,' ').trim().slice(0,70):'');
    });
    if(!chapters.length) throw new Error('no readable text found in this EPUB');

    return {title:decodeEntities(title).trim(), author:decodeEntities(author).trim(),
            format:'epub', chapters:chapters,
            titles:titles.some(function(t){return t;})?titles:null};
  });
}

function importPdf(file, onProgress){
  var lib=(typeof window!=='undefined'&&window.pdfjsLib)?Promise.resolve():loadScript(PDFJS_LOCAL);
  return lib.then(function(){
    if(typeof window==='undefined'||!window.pdfjsLib) throw new Error('the PDF reader could not load');
    window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS_WORKER;
    return fileBytes(file);
  }).then(function(buf){
    return window.pdfjsLib.getDocument({data:new Uint8Array(buf)}).promise;
  }).then(function(pdf){
    var pages=[], n=pdf.numPages;
    function page(i){
      if(i>n) return Promise.resolve();
      if(onProgress) onProgress(i,n);
      return pdf.getPage(i).then(function(pg){ return pg.getTextContent(); })
        .then(function(tc){
          var line='', out=[], lastY=null;
          tc.items.forEach(function(it){
            var y=it.transform?it.transform[5]:null;
            if(lastY!==null && y!==null && Math.abs(y-lastY)>3){ out.push(line); line=''; }
            line+=it.str; lastY=y;
            if(it.hasEOL){ out.push(line); line=''; }
          });
          if(line) out.push(line);
          pages.push(out.join('\n'));
          return page(i+1);
        });
    }
    return page(1).then(function(){
      var text=pages.join('\n\n');
      var paras=paragraphs(text);
      var words=paras.join(' ').split(/\s+/).length;
      if(words<n*10)
        throw new Error('This PDF has almost no selectable text \u2014 it is probably '+
          'a scan of a printed book. Scanned pages would need optical character '+
          'recognition, which this app cannot do.');
      var s=splitChapters(paras);
      return {title:file.name.replace(/\.[^.]+$/,''), author:'', format:'pdf',
              chapters:s.chapters, titles:s.titles};
    });
  });
}

function importFile(file, onProgress){
  var n=(file.name||'').toLowerCase();
  if(/\.epub$/.test(n)) return importEpub(file);
  if(/\.pdf$/.test(n))  return importPdf(file, onProgress);
  if(/\.(txt|md|markdown|text)$/.test(n)) return importText(file);
  return Promise.reject(new Error('Unsupported file type. Import an EPUB, a PDF, or a plain text file.'));
}

/* ---------- shelf state ---------- */
function ubMeta(rec){
  return {id:rec.id, title:rec.title, author:rec.author, format:rec.format,
          nch:rec.chapters.length, added:rec.added, slot:rec.slot,
          size:rec.chapters.reduce(function(a,c){
            return a+c.reduce(function(x,p){return x+p.length;},0);},0)};
}
function loadShelf(){
  if(!Shelf.available()) return Promise.resolve([]);
  return Shelf.all().then(function(rows){
    rows=rows||[];
    rows.sort(function(a,b){ return (b.added||0)-(a.added||0); });
    S.shelf=rows.map(ubMeta);
    registerUserBooks();
    return S.shelf;
  }).catch(function(){ S.shelf=[]; return []; });
}
/* Give each imported book an entry in BOOKS so the reader, highlights, notes
   and read-aloud all treat it like any other book. */
/* Each imported book keeps the same number for good. It used to be its place
   on the shelf, newest first, so importing another book renumbered every one
   before it, and their highlights and notes landed on the wrong book. */
function bookSlots(){
  var used={}, next=0;
  S.shelf.forEach(function(m){ if(typeof m.slot==='number'){ used[m.slot]=1; next=Math.max(next,m.slot+1); } });
  S.shelf.slice().sort(function(a,b){ return (a.added||0)-(b.added||0); }).forEach(function(m){
    if(typeof m.slot!=='number'){ while(used[next]) next++; m.slot=next; used[next]=1; next++; }
  });
  return next;
}
function registerUserBooks(){
  BOOKS=BOOKS.filter(function(b){ return !b.user; });
  bookSlots();
  S.shelf.forEach(function(m){
    BOOKS.push({i:UB_BASE+m.slot, uid:m.id, user:true, name:m.title,
                full:(m.author?m.author+' \u00b7 ':'')+
                     ({epub:'EPUB',pdf:'PDF',text:'Text'}[m.format]||'Imported'),
                section:'mybooks', scribe:'', written:'', eras:[], rulers:[],
                summary:'', themes:[], prophecies:[], laws:[],
                power:null, captivity:null, nch:m.nch, moves:[], chapters:{}});
  });
  reindex();   /* imported books must be findable by id, like scripture */
}

/* ---------- backup and restore ----------
   Highlights, notes and study sheets live only in this browser. Clearing site
   data, switching devices, or the browser reclaiming storage would take all of
   it with no way back, so it has to be exportable. */
function exportData(){
  var payload={
    format:BACKUP_FORMAT, version:1, exported:new Date().toISOString(),
    highlights:S.hl, notes:S.notes, sheets:S.sheets, read:S.read,
    userRefs:S.userRefs,
    place:{b:S.reading,c:S.ch}, textSize:S.textSize
  };
  var text=JSON.stringify(payload,null,1);
  try{
    var d=new Date().toISOString().slice(0,10);
    saveFile('sixteen-eleven-backup-'+d+'.json', new Blob([text],{type:'application/json'}));
    return true;
  }catch(e){ return false; }
}

/* Merge rather than overwrite: restoring on a device that already has notes
   should never silently discard them. */
var BACKUP_FORMAT='sixteen-eleven-backup';
function mergeBackup(data){
  /* backups and restore points made before the rename still carry the old
     name inside them; they are just as good, so both are accepted */
  if(!data||[BACKUP_FORMAT,'sword-forge-backup'].indexOf(data.format)===-1)
    throw new Error('That is not a Sixteen Eleven backup file.');
  var added={hl:0,notes:0,sheets:0,read:0,refs:0};
  if(data.highlights&&typeof data.highlights==='object'){
    for(var k in data.highlights){
      if(!S.hl[k]){ S.hl[k]=data.highlights[k]; added.hl++; }
    }
  }
  if(Array.isArray(data.notes)){
    var have={}; S.notes.forEach(function(n){ have[n.id]=1; });
    data.notes.forEach(function(n){
      var mn=migrateNote(n);   /* an old backup can arrive at any time */
      if(mn&&!have[mn.id]){ S.notes.push(mn); added.notes++; }
    });
  }
  if(Array.isArray(data.sheets)){
    var hs={}; S.sheets.forEach(function(x){ hs[x.id]=x; });
    data.sheets.forEach(function(sh){
      if(!sh||!sh.id) return;
      if(!hs[sh.id]){ S.sheets.push(sh); added.sheets++; }
      else {
        var mine=hs[sh.id], ids={};
        mine.items.forEach(function(it){ ids[it.id]=1; });
        (sh.items||[]).forEach(function(it){
          if(it&&it.id&&!ids[it.id]){ mine.items.push(it); added.sheets++; }
        });
      }
    });
  }
  if(data.userRefs&&typeof data.userRefs==='object'){
    for(var uk in data.userRefs){
      var incoming=data.userRefs[uk]||[];
      var have=S.userRefs[uk]||(S.userRefs[uk]=[]);
      incoming.forEach(function(lbl){
        if(have.indexOf(lbl)===-1){ have.push(lbl); added.refs=(added.refs||0)+1; }
      });
    }
    saveUserRefs();
  }
  if(data.read&&typeof data.read==='object'){
    for(var rk in data.read) if(!S.read[rk]){ S.read[rk]=data.read[rk]; added.read=(added.read||0)+1; }
    saveRead();
  }
  if(typeof data.textSize==='number') S.textSize=data.textSize;
  saveHl(); saveNotes(); saveSheets();
  return added;
}

function importBackup(file){
  return file.text().then(function(t){
    var data;
    try{ data=JSON.parse(t); }
    catch(e){ throw new Error('That file is not readable JSON.'); }
    return mergeBackup(data);
  });
}

/* ================= THE ATLAS =================
   Maps are drawn as SVG from coordinates, not shipped as pictures. That keeps
   the whole atlas around 21 KB, sharp at any size, and \u2014 the part a picture
   could never do \u2014 lets a single place be lit up for a single verse, in the
   colours of the era that verse belongs to.

   Two framings: a regional one for the empires, and a close-up of the Levant,
   which is unreadable at regional scale. Each era picks the frame that suits
   what it is about. */

/* which framing suits each era */

var PLACE_INDEX = null;
function placeIndex(){
  if(PLACE_INDEX) return PLACE_INDEX;
  var M = META.maps;
  PLACE_INDEX = (M && M.places) ? M.places.slice().sort(function(a, b){
    return b.n.length - a.n.length; }) : [];
  return PLACE_INDEX;
}
function placesInVerse(text, era){
  if(!text) return [];
  var seen = {}, out = [];
  placeIndex().forEach(function(p){
    if(seen[p.n]) return;
    var re = new RegExp('\\b' + p.n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if(re.test(text)){ seen[p.n] = 1; out.push(p); }
  });
  /* prefer the era the verse belongs to, but never hide a place because of it */
  if(era) out.sort(function(a, b){
    return (b.e.indexOf(era) > -1) - (a.e.indexOf(era) > -1); });
  return out.slice(0, 4);
}

/* ---------- views ---------- */

/* ---------- filing a verse into a note you choose ----------
   The old flow only went one way: a verse made its own note. What was missing
   was the ordinary thing — you keep a note on a theme, you find a verse that
   belongs in it, you want it filed there. This appends the reference and the
   text to whichever note you pick. */
function noteTitle(n){
  var first=String(n.body||'').split('\n')[0].trim();
  if(first) return first.length>52?first.slice(0,52)+'\u2026':first;
  return (n.b!==null&&n.b!==undefined)?vRef(n.b,n.c,n.v):'Untitled note';
}
function appendVerseToNote(noteId, key){
  var n=S.notes.filter(function(x){return x.id===noteId;})[0];
  if(!n) return {ok:false,msg:'That note could not be found.'};
  var p=parseKey(key), ref=vRef(p.b,p.c,p.v), text=vText(p.b,p.c,p.v);
  if(n.body.indexOf(ref)>-1) return {ok:false,msg:'That verse is already in this note.'};
  var block=ref+'\n'+text;
  n.body=n.body.trim()?(n.body.replace(/\s+$/,'')+'\n\n'+block):block;
  n.ts=Date.now();
  saveNotes();
  return {ok:true,msg:'Filed in \u201c'+noteTitle(n)+'\u201d.'};
}

/* the eras, wrapped in the library panel like everything else reached from it */
function vErasPage(){
  return '<div class="libwrap libplain">'+
    '<button class="back" style="color:var(--blue)" data-a="closeeras">&larr; Library</button>'+
    '<div class="libhead"><h2>The eras</h2>'+
    '<p>Every book placed in the age it belongs to.</p></div>'+
    '<div class="minewrap">'+strataHTML()+'</div></div>';
}
function strataHTML(){
  return META.eras.map(function(e){
    var bks=BOOKS.filter(function(b){return b.eras.indexOf(e.key)>-1;});
    var open=S.openEra===e.key;
    var h='<div class="era"><button class="hd" data-era="'+e.key+'" style="width:100%;text-align:left">'+
      '<span class="swatch" style="background:'+e.color+'"></span>'+
      '<span class="spacer"><span class="nm">'+esc(e.name)+'</span>'+
      '<span class="sp">'+esc(e.span)+'</span>'+
      '<span class="cp"><b>Power:</b> '+esc(e.power)+'</span>'+
      '<span class="cp"><b>Captivity:</b> '+esc(e.captivity)+'</span>'+
      '<span class="cnt">'+(bks.length?bks.length+' book'+(bks.length>1?'s':''):'no book')+'</span>'+
      '</span></button>';
    if(open){
      h+='<div class="body"><div style="font-size:13px;color:var(--ink2);line-height:1.5;margin-bottom:9px">'+
         esc(e.note)+'</div><div class="pills">'+
         e.rulers.map(function(r){return '<span>'+esc(r)+'</span>';}).join('')+'</div>';
      if(bks.length) h+='<div class="bgrid" style="margin-top:11px">'+
         bks.map(function(b){return bookCard(b,e.color);}).join('')+'</div>';
      h+='</div>';
    }
    return h+'</div>';
  }).join('');
}




/* ---------- picking up where you left off ----------
   The commonest thing anyone opens a Bible app to do is carry on from
   yesterday, and until now that took four taps through the shelf. This puts it
   first, with the next unread chapter offered when there is no saved place. */

/* ---------- the top of the shelf ----------
   A line for the time of day, as the design has it, and a verse for the day.
   The verse turns over at midnight and is drawn from a short list that opens
   with the psalm the app is named for. */
var DAILY=[['Psalms',16,11],['Isaiah',41,10],['John',3,16],['Psalms',23,1],
  ['Lamentations',3,22],['Matthew',11,28],['Romans',8,28],['Proverbs',3,5],
  ['Philippians',4,13],['Joshua',1,9],['Psalms',46,10],['Hebrews',4,12]];
function timeOfDay(d){
  var h=d.getHours();
  return h<4?'Night watch':h<9?'Early morning':h<12?'Morning':h<17?'Afternoon':
         h<21?'Evening':'Night watch';
}
function shelfGreeting(){
  var d=new Date();
  var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
  var n=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);
  var pick=DAILY[n%DAILY.length];
  var b=BOOKS.filter(function(x){return x.name===pick[0];})[0];
  var t=b?vText(b.i,pick[1],pick[2]):'';
  if(b&&!t&&!S.dailyFetch){
    S.dailyFetch=1;
    fetchBook(b.i).then(function(){ S.dailyFetch=0; if(S.tab==='library') render(); })
      .catch(function(){ S.dailyFetch=0; });
  }
  var h='<div class="greet">'+timeOfDay(d)+' \u00b7 '+day+'</div>';
  if(t){
    var ref=(pick[0]==='Psalms'?'Psalm':pick[0])+' '+pick[1]+':'+pick[2];
    h+='<button class="daily" data-goverse="'+vKey(b.i,pick[1],pick[2])+'">'+
       '<span class="daily-t">'+esc(t)+'</span>'+
       '<span class="daily-r"><i></i>'+esc(ref)+'</span></button>';
  }
  return h;
}

function continueCard(){
  var b=null, ch=1, resumed=false;
  if(S.reading!==null && BK(S.reading)){ b=BK(S.reading); ch=S.ch||1; resumed=true; }
  else {
    var pl=Store.get('strata:place');
    if(pl && BK(pl.b)){ b=BK(pl.b); ch=pl.c||1; resumed=true; }
  }
  if(!b){
    var n=nextUnread();
    if(n && BK(n.b)){ b=BK(n.b); ch=n.c; }
  }
  if(!b) return '';
  var pr=bookProgress(b);
  var mv=null; try{ mv=moveFor(b,ch); }catch(e){}
  S.lastBook=b.i;
  return '<div class="contwrap">'+
    '<button class="cont" data-book="'+b.i+'" data-goch="'+ch+'">'+
      '<span class="contk">'+(resumed?'Continue reading':'Start reading')+'</span>'+
      '<span class="contt">'+esc(b.name)+' '+ch+'</span>'+
      '<span class="contm">'+esc(mv&&mv.t?mv.t:(pr.done+' of '+pr.total+' chapters read'))+'</span>'+
      '<span class="contbar"><i style="width:'+pr.pct+'%"></i></span>'+
    '</button>'+
    '<button class="contplay" data-a="resumelisten" data-book="'+b.i+'" data-goch="'+ch+'" '+
      'aria-label="Listen to '+esc(b.name)+' '+ch+'">'+
      '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>'+
    '</div>';
}


/* ---------- reading without the app in the way ----------
   Everything but the words goes, and the page creeps upward at a pace you set,
   so a long chapter can be read without touching anything. One tap anywhere
   brings the app back and stops the scroll — there is no hidden gesture to
   learn and no way to get stuck. */
var SCROLL_SPEEDS=[0,14,26,44,70];     /* pixels a second */
function immersiveOn(){
  S.immersive=true; S.readerOpts=false; S.speakOpts=false;
  try{ document.body.classList.add('immersive'); }catch(e){}
  render(); startAutoScroll();
  announce('Full screen reading. Tap anywhere to come back.');
}
function immersiveOff(){
  if(!S.immersive) return false;
  S.immersive=false;
  stopAutoScroll();
  try{ document.body.classList.remove('immersive'); }catch(e){}
  S.keepScroll=true; render();
  return true;
}
function startAutoScroll(){
  stopAutoScroll();
  var px=SCROLL_SPEEDS[S.scrollSpeed||0];
  if(!px) return;
  var el=paneEl(readerSide()||CUR,2)||document.getElementById('view');
  if(!el) return;
  var last=null, acc=0;
  S.scrollTimer=setInterval(function(){
    var now=Date.now();
    if(last===null){ last=now; return; }
    acc+=px*(now-last)/1000; last=now;
    if(acc>=1){
      var step=Math.floor(acc); acc-=step;
      try{
        var before=el.scrollTop;
        el.scrollTop=before+step;
        /* at the end of the chapter, roll into the next one */
        if(el.scrollTop===before && el.scrollHeight-el.clientHeight-before<2){
          if(!turnPage(1)) { stopAutoScroll(); return; }
          el.scrollTop=0;
        }
      }catch(e){ stopAutoScroll(); }
    }
  },50);
}
function stopAutoScroll(){
  if(S.scrollTimer){ clearInterval(S.scrollTimer); S.scrollTimer=null; }
}


/* ---------- from the redesign ---------- */
function roman(n){
  var t=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],
         [50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  var out='';
  for(var i=0;i<t.length;i++) while(n>=t[i][0]){ out+=t[i][1]; n-=t[i][0]; }
  return out||'I';
}
function eyebrow(text){
  return '<div class="eyebrow"><span>'+esc(text)+'</span><i></i></div>';
}
function divider(text){
  return '<div class="divider"><i></i><span>'+esc(text)+'</span><i></i></div>';
}

/* ---------- turning the page ----------
   Chapters used to be two small arrows. They are a swipe now, which is how
   every other reader on a phone works, and it frees the two best-placed
   buttons in the app for history instead. Vertical scrolling has to win, so a
   turn only counts when the movement is clearly sideways and long enough to
   have been meant. */
var TURN_AT=64;
function turnPage(dir){
  var b=BK(S.reading);
  if(!b) return false;
  var n=S.ch+dir;
  if(n<1||n>b.nch) return false;
  if(dir>0) markRead(S.reading,S.ch,true);
  stopSpeaking();
  S.ch=n; savePlace(); render();
  return true;
}
function initPageSwipe(){
  if(typeof document==='undefined') return;
  /* either side can be the reader, so both listen */
  ['view','view2'].forEach(function(id){
    var el=document.getElementById(id);
    if(el&&el.addEventListener&&!el.__swipe){ el.__swipe=1; S.swipeInit=1; swipeOn(el); }
  });
}
function swipeOn(el){
  var x0=null,y0=null,dx=0,dy=0,live=false;
  el.addEventListener('touchstart',function(e){
    if(!e.touches||e.touches.length!==1){ x0=null; return; }
    if(S.reading===null){ x0=null; return; }     /* only inside the reader */
    if(LAYOUT==='split'&&sideOf(e.target)!==CUR){ x0=null; return; }
    x0=e.touches[0].clientX; y0=e.touches[0].clientY; dx=dy=0; live=false;
  },{passive:true});
  el.addEventListener('touchmove',function(e){
    if(x0===null||!e.touches||!e.touches.length) return;
    dx=e.touches[0].clientX-x0; dy=e.touches[0].clientY-y0;
    if(!live && Math.abs(dx)>14 && Math.abs(dx)>Math.abs(dy)*1.6) live=true;
  },{passive:true});
  el.addEventListener('touchend',function(){
    if(x0===null) return;
    var far=live && Math.abs(dx)>TURN_AT && Math.abs(dx)>Math.abs(dy)*1.4;
    x0=null;
    if(far) turnPage(dx<0?1:-1);
  });
  el.addEventListener('touchcancel',function(){ x0=null; });
}

/* ================= THE VERSE CARD =================
   Sharing a verse used to send plain text. This draws the verse as a picture
   instead \u2014 the reference in small capitals over a hairline rule, the words
   set large and centred, the version named below \u2014 and hands it to the phone's
   own share sheet, which is what puts it into Messages, Instagram, or the
   camera roll.

   Nothing is screenshotted. The card is drawn on a canvas at print resolution,
   so it is sharp wherever it lands and it never contains the app's chrome. */

var CARD = {
  w: 1080,           /* drawn at 2x this, so it stays crisp when enlarged */
  padX: 96,
  padTop: 88,
  padBottom: 84,
  ink: '#2B2B2B',
  /* a pastel blue, taken as light as it can go and still clear 3:1 on
     white at display size */
  red: '#5F93BA',
  rule: '#DFDCD5',
  bg: '#FFFFFF',
  serif: '"Iowan Old Style","Palatino Linotype",Palatino,Charter,Cambria,' +
         '"Libre Baskerville","Noto Serif",Georgia,serif'
};

/* Canvas has no small capitals, so they are drawn: the first letter at full
   size, the rest as capitals at about three quarters. */
function smallCapRuns(text) {
  var out = [], words = String(text).split(/(\s+)/);
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (!w) continue;
    if (/^\s+$/.test(w)) { out.push({ t: w, big: true }); continue; }
    /* Numbers keep their size. Small-capping "1:1" shrinks the colon and the
       second digit, which looks like a mistake rather than a style. */
    if (!/[a-z]/i.test(w)) { out.push({ t: w, big: true }); continue; }
    out.push({ t: w.charAt(0).toUpperCase(), big: true });
    if (w.length > 1) out.push({ t: w.slice(1).toUpperCase(), big: false });
  }
  return out;
}

/* Pure so it can be tested without a canvas: measure is injected. */
function wrapLines(text, maxWidth, measure) {
  var words = String(text).split(/\s+/).filter(Boolean);
  var lines = [], cur = '';
  for (var i = 0; i < words.length; i++) {
    var next = cur ? cur + ' ' + words[i] : words[i];
    if (cur && measure(next) > maxWidth) { lines.push(cur); cur = words[i]; }
    else cur = next;
  }
  if (cur) lines.push(cur);
  return lines;
}

/* Long verses need smaller type or the card becomes a wall. */
function cardBodySize(len) {
  if (len < 120) return 62;
  if (len < 240) return 54;
  if (len < 420) return 46;
  if (len < 700) return 40;
  return 34;
}

function drawVerseCard(ref, verse, version) {
  var S2 = 2, C = CARD;
  var cv = document.createElement('canvas');
  var ctx = cv.getContext('2d');
  if (!ctx) return null;

  var body = '\u201c' + String(verse).trim() + '\u201d';
  var bodySize = cardBodySize(body.length);
  var maxW = C.w - C.padX * 2;

  ctx.font = '400 ' + bodySize + 'px ' + C.serif;
  var lines = wrapLines(body, maxW, function (t) { return ctx.measureText(t).width; });

  var refSize = 64, verSize = 34;
  var lineH = Math.round(bodySize * 1.42);
  var h = C.padTop + refSize + 34 + 1 + 56 +
          lines.length * lineH + 58 + verSize + C.padBottom;
  h = Math.max(h, 620);

  cv.width = C.w * S2; cv.height = h * S2;
  ctx.scale(S2, S2);
  ctx.textBaseline = 'alphabetic';

  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, C.w, h);

  /* reference in full capitals, evenly tracked and centred */
  var refCaps = String(ref).toUpperCase();
  var track = 5;
  ctx.font = '400 ' + refSize + 'px ' + C.serif;
  var total = 0, i;
  for (i = 0; i < refCaps.length; i++) total += ctx.measureText(refCaps[i]).width + track;
  total -= track;
  var x = (C.w - total) / 2, yRef = C.padTop + refSize;
  ctx.fillStyle = C.red;
  ctx.textAlign = 'left';
  for (i = 0; i < refCaps.length; i++) {
    ctx.fillText(refCaps[i], x, yRef);
    x += ctx.measureText(refCaps[i]).width + track;
  }

  /* hairline under it, edge to edge like the plate it is copied from */
  var yRule = yRef + 30;
  ctx.strokeStyle = C.rule; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, yRule + 0.5); ctx.lineTo(C.w, yRule + 0.5); ctx.stroke();

  /* the words */
  ctx.fillStyle = C.ink;
  ctx.font = '400 ' + bodySize + 'px ' + C.serif;
  ctx.textAlign = 'center';
  var y = yRule + 56 + bodySize;
  lines.forEach(function (ln) { ctx.fillText(ln, C.w / 2, y); y += lineH; });

  /* the version, in small capitals again */
  var vr = smallCapRuns(version || 'King James Version (KJV)');
  var vsmall = Math.round(verSize * 0.76);
  ctx.textAlign = 'left';
  var vt = 0;
  vr.forEach(function (r) {
    ctx.font = '400 ' + (r.big ? verSize : vsmall) + 'px ' + C.serif;
    vt += ctx.measureText(r.t).width + r.t.length * 2;
  });
  var vx = (C.w - vt) / 2, vy = y + 34;
  ctx.fillStyle = '#4A4A4A';
  vr.forEach(function (r) {
    ctx.font = '400 ' + (r.big ? verSize : vsmall) + 'px ' + C.serif;
    for (var i = 0; i < r.t.length; i++) {
      ctx.fillText(r.t[i], vx, vy);
      vx += ctx.measureText(r.t[i]).width + 2;
    }
  });
  return cv;
}

function cardFileName(ref) {
  return 'sixteen-eleven-' +
    String(ref).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') +
    '.png';
}

/* Hand the picture to the phone. Share sheet where there is one \u2014 that is what
   reaches Messages and the camera roll \u2014 and a download everywhere else. */
function shareVerseCard(b, c, v) {
  var ref = vRef(b, c, v), text = vText(b, c, v);
  var cv;
  try { cv = drawVerseCard(ref, text, 'King James Version (KJV)'); }
  catch (e) { cv = null; }
  if (!cv || !cv.toBlob) return Promise.resolve({ ok: false, msg: 'This browser cannot make the image.' });

  return new Promise(function (res) {
    cv.toBlob(function (blob) {
      if (!blob) return res({ ok: false, msg: 'This browser cannot make the image.' });
      var file = null;
      try { file = new File([blob], cardFileName(ref), { type: 'image/png' }); } catch (e) {}
      if (payNative()) {
        saveFile(cardFileName(ref), blob).then(function (r) {
          res(r.ok ? { ok: true, msg: '' } : { ok: false, msg: 'The image could not be shared.' });
        });
        return;
      }
      if (file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
        navigator.share({ files: [file], title: ref })
          .then(function () { res({ ok: true, msg: '' }); })
          .catch(function () { res({ ok: true, msg: '' }); });  /* cancelled is not an error */
        return;
      }
      try {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = cardFileName(ref);
        /* the app's own tap handler must not see this click: it would read it
           as a tap outside the verse card and close it */
        a.addEventListener('click', function (ev) { ev.stopPropagation(); });
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        res({ ok: true, msg: 'Image saved.' });
      } catch (e) {
        res({ ok: false, msg: 'This browser would not let the app save the image.' });
      }
    }, 'image/png');
  });
}

/* ---------- theme ----------
   Three states, and the default matters: "auto" follows the phone, which is
   what most people expect and what makes a night-time reader dim without
   being asked. */
function systemDark(){
  try{ return !!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches); }
  catch(e){ return false; }
}
function applyTheme(){
  /* Auto used to remove the attribute and leave the rest to a media query.
     The colour tokens followed, but every rule written as [data-theme="dark"]
     did not — which is why the pill and the tab bar stayed cream on a dark
     phone. Auto now resolves to a real light or dark. */
  var t=S.theme||'auto';
  var resolved=(t==='auto')?(systemDark()?'dark':'light'):t;
  try{
    var r=document.documentElement;
    r.setAttribute('data-theme',resolved);
    r.setAttribute('data-theme-choice',t);
    /* the phone's own top bar takes this colour; it was the old navy */
    var ms=document.querySelectorAll('meta[name="theme-color"]');
    for(var mi=0;mi<ms.length;mi++){
      ms[mi].removeAttribute('media');
      ms[mi].setAttribute('content', resolved==='dark'?'#110F0E':'#F4EEE5');
    }
  }catch(e){}
  if(!S.themeWatch){
    S.themeWatch=1;
    try{
      var mq=matchMedia('(prefers-color-scheme: dark)');
      var on=function(){ if((S.theme||'auto')==='auto'){ applyTheme(); render(); } };
      if(mq.addEventListener) mq.addEventListener('change',on);
      else if(mq.addListener) mq.addListener(on);
    }catch(e){}
  }
}
function setTheme(t){
  S.theme=t; Store.set('strata:theme',t); applyTheme(); render();
}

/* ---------- announcements ----------
   Saving a note, restoring a backup, copying a verse: all of it changed the
   screen silently. A screen reader now hears it. */
function announce(msg){
  S.liveMsg=msg;
  try{
    var el=document.getElementById('live');
    if(el){ el.textContent=''; setTimeout(function(){ el.textContent=msg; },30); }
  }catch(e){}
}

/* ---------- a recorded voice ----------
   If chapters have been rendered ahead of time — in your own voice, or any
   other — the app plays those files instead of synthesising. Recorded audio
   is better than anything that will run on a phone, and unlike WebAssembly
   speech it keeps playing when the screen locks, which is the whole reason
   read-aloud is worth having.

   The manifest is fetched once and is small. If it is absent, nothing here
   costs anything and the app synthesises as before. */
/* ---------- Sixteen Eleven Study: what is free, and what is paid ----------
   The scripture, reading aloud with the device voice, highlights, plain notes,
   search, cross references, the glossary, backups: free, always. Study adds
   the depth (word study without limits, study sheets, tags and linked verses,
   bookmark folders, every map, the two-sided desk on a tablet, any number of
   your own books). The narrated Bible is its own purchase, with Psalms and
   John free to hear first; Lifetime includes both.

   Purchases go through the App Store and Google Play by way of RevenueCat
   (@revenuecat/purchases-capacitor). The web app has no store, so nothing is
   locked there. ?paytest=1 turns on a pretend store in any browser, to try
   the paywall and for the tests: it never charges anything. */
var PAY={
  keys:{ios:'appl_REPLACE_WITH_REVENUECAT_IOS_KEY', android:'goog_gOwvMofhSzEqCQkfoFZMNcdtIWL'},
  terms:'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
  privacy:'privacy.html',
  support:'scribe@sixteeneleven.bible',   /* hardship passes; blank hides the line */
  on:false, test:false, plugin:null, ent:{study:false, audio:false},
  offerings:null, busy:false, msg:'', mgmt:null, choice:'annual', why:false
};
var FREE_AUDIO=['Psalms','John'];
var FREE_LOOKUPS=3, FREE_BOOKS=1;
function payNative(){
  try{ return !!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()); }
  catch(e){ return false; }
}
function payPlatform(){
  try{ return window.Capacitor.getPlatform(); }catch(e){ return 'web'; }
}
function payTestMode(){
  try{ return /[?&]paytest=1/.test(location.search)||localStorage.getItem('strata:paytest')==='1'; }
  catch(e){ return false; }
}
function hasStudy(){ return !PAY.on||!!PAY.ent.study; }
function hasAudio(){ return !PAY.on||!!PAY.ent.audio; }
function payInit(){
  if(payNative()){
    PAY.on=true;
    /* what was bought is remembered for a week, so a phone offline in church
       keeps what it paid for */
    Store.get('strata:ent').then(function(c){
      if(c&&c.ent&&c.exp>Date.now()&&!PAY.fresh){ PAY.ent=c.ent; applyLayout(); render(); }
    });
    try{ PAY.plugin=window.Capacitor.registerPlugin('Purchases'); }catch(e){ PAY.plugin=null; }
    if(!PAY.plugin) return;
    var key=PAY.keys[payPlatform()]||PAY.keys.ios;
    Promise.resolve(PAY.plugin.configure({apiKey:key})).then(function(){
      try{ PAY.plugin.addCustomerInfoUpdateListener(function(ci){ payApply(ci); }); }catch(e){}
      return PAY.plugin.getCustomerInfo();
    }).then(function(r){ payApply(r&&(r.customerInfo||r)); }).catch(function(){});
    return;
  }
  if(payTestMode()){
    PAY.on=true; PAY.test=true;
    Store.get('strata:enttest').then(function(e){ if(e){ PAY.ent=e; applyLayout(); render(); } });
  }
}
function payApply(ci){
  if(!ci) return;
  var a=(ci.entitlements&&ci.entitlements.active)||{};
  var was=PAY.ent.study+'/'+PAY.ent.audio;
  PAY.fresh=true;
  PAY.ent={study:!!a.study, audio:!!a.audio};
  PAY.mgmt=ci.managementURL||null;
  Store.set('strata:ent',{ent:PAY.ent, exp:Date.now()+7*864e5});
  if(PAY.ent.study+'/'+PAY.ent.audio!==was){ applyLayout(); S.keepScroll=true; render(); if(PAY.open) drawPaywall(); }
}
/* the pretend store: the same shapes RevenueCat returns */
function payTestOfferings(){
  function p(id, type, prod, price, intro){
    return {identifier:id, packageType:type, product:{identifier:prod, priceString:price,
      introPrice:intro?{periodNumberOfUnits:14, periodUnit:'DAY', price:0}:null}};
  }
  return {current:{identifier:'default', availablePackages:[
      p('$rc_annual','ANNUAL','study_annual','$29.99',true),
      p('$rc_monthly','MONTHLY','study_monthly','$3.99'),
      p('$rc_lifetime','LIFETIME','lifetime_founders','$79.99')]},
    all:{audio:{identifier:'audio', availablePackages:[p('audio','LIFETIME','audio_bible','$19.99')]},
         tips:{identifier:'tips', availablePackages:[p('tip_small','CUSTOM','tip_small','$1.99'),
            p('tip_medium','CUSTOM','tip_medium','$4.99'),p('tip_large','CUSTOM','tip_large','$9.99')]}}};
}
function payLoadOfferings(){
  if(PAY.offerings) return Promise.resolve(PAY.offerings);
  if(PAY.test){ PAY.offerings=payTestOfferings(); return Promise.resolve(PAY.offerings); }
  if(!PAY.plugin) return Promise.resolve(null);
  return Promise.resolve(PAY.plugin.getOfferings()).then(function(o){
    PAY.offerings=o||null; return PAY.offerings; }).catch(function(){ return null; });
}
function payPkg(offering, id){
  var o=PAY.offerings; if(!o) return null;
  var off=offering==='default'?(o.current||(o.all&&o.all['default'])):(o.all&&o.all[offering]);
  var list=(off&&off.availablePackages)||[];
  for(var i=0;i<list.length;i++) if(list[i].identifier===id) return list[i];
  return null;
}
function payPrice(offering, id, fallback){
  var p=payPkg(offering,id);
  return (p&&p.product&&p.product.priceString)||fallback;
}
function payBuy(offering, id){
  var p=payPkg(offering,id);
  if(PAY.busy) return;
  if(!p){ PAY.msg='The store is not answering. Check the connection and try again.'; payRedraw(); return; }
  PAY.busy=true; PAY.msg=''; payRedraw();
  var done=function(ci){
    PAY.busy=false;
    var tip=offering==='tips';
    if(ci) payApply(ci);
    PAY.msg=tip?'Thank you. The lamp stays lit.':'Thank you. It is yours.';
    announce(PAY.msg); payRedraw();
  };
  if(PAY.test){
    setTimeout(function(){
      var pid=p.product.identifier;
      var ent={study:PAY.ent.study||/study|lifetime/.test(pid), audio:PAY.ent.audio||/audio|lifetime/.test(pid)};
      Store.set('strata:enttest',ent);
      done({entitlements:{active:(function(){ var a={}; if(ent.study) a.study={}; if(ent.audio) a.audio={}; return a; })()}});
    },150);
    return;
  }
  Promise.resolve(PAY.plugin.purchasePackage({aPackage:p})).then(function(r){
    done(r&&(r.customerInfo||r));
  }).catch(function(e){
    PAY.busy=false;
    var cancelled=e&&(e.userCancelled||e.code==='1'||e.code===1||/cancel/i.test(String(e.message||'')));
    PAY.msg=cancelled?'':'That did not go through: '+String((e&&e.message)||'the store said no')+'.';
    payRedraw();
  });
}
function payRedraw(){
  if(PAY.open) drawPaywall();
  else { PAY.tipMsg=PAY.msg; S.keepScroll=true; render(); }
}
function payRestore(){
  if(PAY.busy) return;
  PAY.busy=true; PAY.msg=''; payRedraw();
  var fin=function(ci){
    PAY.busy=false; if(ci) payApply(ci);
    PAY.msg=(PAY.ent.study||PAY.ent.audio)?'Your purchases are back.':'No purchases were found for this account.';
    announce(PAY.msg); payRedraw();
  };
  if(PAY.test){ Store.get('strata:enttest').then(function(e){ PAY.ent=e||PAY.ent; fin(null); }); return; }
  if(!PAY.plugin){ fin(null); return; }
  Promise.resolve(PAY.plugin.restorePurchases()).then(function(r){ fin(r&&(r.customerInfo||r)); })
    .catch(function(){ PAY.busy=false; PAY.msg='The store could not be reached.'; payRedraw(); });
}
function payRedeem(){
  try{ if(PAY.plugin&&payPlatform()==='ios') PAY.plugin.presentCodeRedemptionSheet(); }catch(e){}
}

/* Asking for a paid feature: true when it may go ahead, otherwise the
   paywall opens, saying what was asked for. */
function gate(why){
  var ok=(why==='audio')?hasAudio():hasStudy();
  if(!ok) openPaywall(why);
  return ok;
}
var PAYWHY={
  study:['Go deeper with Study','Word study, study sheets, every map and more.'],
  words:['Word study, without limits','You have used today’s '+FREE_LOOKUPS+' free lookups. Study opens every word.'],
  sheets:['Study sheets','Guided studies that walk a theme through the whole Bible.'],
  tags:['Tags and linked verses','Gather notes by theme and tie them to every verse they touch.'],
  folders:['Bookmark folders','Keep your saved verses in folders of your own.'],
  atlas:['The whole atlas','Every map, from the patriarchs to Paul’s journeys.'],
  split:['Two books open at once','On a tablet, read on one side and study on the other.'],
  books:['Your own library','Add as many EPUB, PDF and text books as you like.'],
  audio:['The narrated Bible','All 80 books read aloud in one human voice, offline. Psalms and John are free to hear.']
};
function openPaywall(why){
  PAY.open=why||'study';
  PAY.msg='';
  PAY.choice=(why==='audio')?'audio':'annual';
  closePop&&closePop();
  S.sheet=null;
  drawPaywall();
  payLoadOfferings().then(function(){ if(PAY.open) drawPaywall(); });
}
function closePaywall(){ PAY.open=null; closeSheet(); }
function drawPaywall(){
  if(!PAY.open||!sheet) return;
  var why=PAY.open, t=PAYWHY[why]||PAYWHY.study;
  var audioFirst=(why==='audio');
  var plans=[
    ['annual','default','$rc_annual','Yearly',payPrice('default','$rc_annual','$29.99')+' a year','14 days free, then yearly. Cancel any time.'],
    ['monthly','default','$rc_monthly','Monthly',payPrice('default','$rc_monthly','$3.99')+' a month',''],
    ['lifetime','default','$rc_lifetime','Lifetime (Founders)',payPrice('default','$rc_lifetime','$79.99')+' once','Study for good, and the narrated Bible.']];
  var audio=['audio','audio','audio','Narrated Bible',payPrice('audio','audio','$19.99')+' once','All 80 books in the narrator’s voice, for good.'];
  if(audioFirst) plans=[audio, plans[2], plans[0]];
  var h='<div class="grabzone"><div class="grab"></div></div><div class="paywall" role="dialog" aria-label="'+esc(t[0])+'">';
  h+='<div class="pwhead"><div class="pwkick">Sixteen Eleven '+(audioFirst?'Audio':'Study')+'</div>'+
     '<h2>'+esc(t[0])+'</h2><p>'+esc(t[1])+'</p></div>';
  if(!audioFirst){
    h+='<ul class="pwlist">'+[
      'Word study without limits: Webster’s 1913, where words come from, the thesaurus, Strong’s Hebrew and Greek',
      'Study sheets that walk a theme through the whole Bible',
      'Tags and linked verses in your notes, and bookmark folders',
      'The whole atlas, every era',
      'Two books open at once on a tablet',
      'As many of your own books as you like'
    ].map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('')+'</ul>';
  }
  h+='<div class="pwplans" role="radiogroup" aria-label="Choose a plan">'+plans.map(function(p){
    var on=PAY.choice===p[0];
    return '<button class="pwplan'+(on?' on':'')+'" role="radio" aria-checked="'+on+'" data-pwpick="'+p[0]+'">'+
      '<span class="pwpt"><b>'+esc(p[3])+'</b>'+(p[5]?'<span>'+esc(p[5])+'</span>':'')+'</span>'+
      '<span class="pwpp">'+esc(p[4])+'</span></button>';
  }).join('')+'</div>';
  var pick=plans.filter(function(p){ return p[0]===PAY.choice; })[0]||plans[0];
  var owned=(pick[0]==='audio')?hasAudio()&&PAY.on:(hasStudy()&&PAY.on&&pick[0]!=='lifetime')||(pick[0]==='lifetime'&&PAY.ent.study&&PAY.ent.audio);
  h+='<button class="btn pwbuy" data-pwbuy="'+pick[1]+'|'+pick[2]+'"'+(PAY.busy||owned?' disabled':'')+'>'+
     (owned?'You have this':PAY.busy?'One moment…':(pick[0]==='annual'?'Start 14 days free':'Continue'))+'</button>';
  if(PAY.msg) h+='<p class="pwmsg" role="status">'+esc(PAY.msg)+'</p>';
  h+='<p class="pwfine">'+(pick[0]==='annual'||pick[0]==='monthly'
      ?'Charged to your '+(payPlatform()==='android'?'Google':'Apple')+' account'+(pick[0]==='annual'?' when the 14 days end':'')+
       '. It renews automatically unless you cancel at least 24 hours before the end of the period; manage or cancel it in your account settings.'
      :'One payment, charged to your '+(payPlatform()==='android'?'Google':'Apple')+' account. No subscription.')+'</p>';
  h+='<div class="pwlinks"><button data-a="pwrestore">Restore purchases</button>'+
     (payPlatform()==='ios'?'<button data-a="pwredeem">Have a code?</button>':'')+
     '<a href="'+esc(PAY.terms)+'" target="_blank" rel="noopener">Terms of Use</a>'+
     '<a href="'+esc(PAY.privacy)+'" target="_blank" rel="noopener">Privacy</a></div>';
  h+='<button class="pwwhy" data-a="pwwhy" aria-expanded="'+(!!PAY.why)+'">Why we charge</button>';
  if(PAY.why) h+='<p class="pwwhytext">The King James text is free here and always will be, with no ads and no tracking. '+
     'Study pays for the narration, the maps and the time to keep building, so the app can stay quiet and yours.'+
     (PAY.support?' If money is tight, <a href="mailto:'+esc(PAY.support)+'?subject=Study%20pass">write to us</a> for a free pass.':'')+'</p>';
  h+='<button class="btn gh pwclose" data-a="pwclose">Not now</button></div>';
  sheet.innerHTML=h;
  if(sheet.style){ sheet.style.transition=''; sheet.style.transform=''; }
  placeOverlays();
  sheet.classList.add('on'); scrim.classList.add('on');
  try{ initSheetDrag(); }catch(e){}
}
/* settings: what you have, and the doors to the store */
function payCard(){
  if(!PAY.on) return '';
  var h='<div class="setgrp">Sixteen Eleven Study</div><div class="setcard pwcard">';
  h+='<div class="setline"><span>Study</span><span>'+(PAY.ent.study?'Active':'Free')+'</span></div>';
  h+='<div class="setline"><span>Narrated Bible</span><span>'+(PAY.ent.audio?'Yours':'Psalms and John')+'</span></div>';
  h+='<div class="pwrow">'+
     (PAY.ent.study&&PAY.ent.audio?'':'<button class="btn sec" data-a="pwopen">See the plans</button>')+
     (PAY.mgmt?'<a class="btn gh" href="'+esc(PAY.mgmt)+'" target="_blank" rel="noopener">Manage subscription</a>':'')+
     '<button class="btn gh" data-a="pwrestore2">Restore purchases</button></div>';
  h+='<div class="setlab" style="margin:14px 0 8px">Keep the lamp lit</div>'+
     '<p class="setsub" style="margin:0 0 10px">A tip keeps the app free of ads. It unlocks nothing; it just helps.</p>'+
     '<div class="pwtips">'+[['tip_small','$1.99'],['tip_medium','$4.99'],['tip_large','$9.99']].map(function(t){
       return '<button class="pchip" data-pwtip="'+t[0]+'">'+esc(payPrice('tips',t[0],t[1]))+'</button>';
     }).join('')+'</div>';
  if(PAY.tipMsg) h+='<p class="setsub" role="status">'+esc(PAY.tipMsg)+'</p>';
  return h+'</div>';
}

/* a chapter with narration you have not bought: say so, once, above the text */
function narrHint(b, n){
  if(!PAY.on||hasAudio()||!b||b.user) return '';
  if(FREE_AUDIO.indexOf(b.name)>-1||!recordedRaw(b.name,n)) return '';
  return '<button class="narrhint" data-pwopen="audio"><span>This chapter is narrated.</span> Hear it \u2192</button>';
}
/* the Study tab when Study is not yours: what it is, and the way in */
function studyTeaser(){
  return screenHead({title:'Study'})+
    '<div class="teaser"><p class="tlead">Study sheets walk a theme through the whole Bible: '+
    'covenant, the Passover, the names of God, the kingdom. Each gathers the passages, '+
    'asks the questions and leaves room for your notes.</p>'+
    '<button class="btn" data-pwopen="sheets">Open Study</button>'+
    '<p class="vnote" style="margin-top:12px">Reading, listening, highlights, notes and search stay free.</p></div>';
}
/* three words a day are free */
function wordAllowance(w){
  if(hasStudy()) return true;
  var today=new Date().toISOString().slice(0,10);
  var u=S.wordUse&&S.wordUse.d===today?S.wordUse:{d:today, w:[]};
  if(u.w.indexOf(w)>-1) return true;
  if(u.w.length>=FREE_LOOKUPS) return false;
  u.w.push(w); S.wordUse=u; Store.set('strata:worduse',u);
  return true;
}

var VOICE_BASE='assets/audio/';
/* The recorded voice lives on Cloudflare R2. Its manifest is read from there
   first, so chapters appear as they are uploaded without a new build; the copy
   bundled with the app is the fallback when the CDN cannot be reached. Audio
   plays from wherever the manifest came from unless it names a _base. */
var VOICE_CDN='https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1/';
function loadVoiceManifest(){
  if(S.voiceManifest!==null||S.voiceManifestTried) return Promise.resolve(S.voiceManifest);
  S.voiceManifestTried=1;
  var local;
  try{ local=new URL(VOICE_BASE+'manifest.json', document.baseURI).href; }
  catch(e){ local=VOICE_BASE+'manifest.json'; }
  function get(url, base){
    return fetch(url, {cache:'no-cache'}).then(function(r){
      if(!r.ok) throw new Error('no manifest');
      return r.json();
    }).then(function(j){
      if(!j||typeof j!=='object') throw new Error('bad manifest');
      if(!j._base) j._base=base;
      return j;
    });
  }
  return get(VOICE_CDN+'manifest.json', VOICE_CDN)
    .catch(function(){ return get(local, VOICE_BASE); })
    .then(function(j){ S.voiceManifest=j; return j; })
    .catch(function(){ S.voiceManifest=false; return false; });
}
function recordedFor(bookName, ch){
  if(!hasAudio()&&FREE_AUDIO.indexOf(bookName)<0) return null;
  return recordedRaw(bookName, ch);
}
function recordedRaw(bookName, ch){
  var m=S.voiceManifest;
  if(!m) return null;
  if(bookName.charAt(0)==='_') return null;
  var b=m[bookName]; if(!b) return null;
  var list=b[String(ch)];
  return (list&&list.length)?list:null;
}
function hasRecording(bookName, ch){ return !!recordedFor(bookName, ch); }
/* recorded chapters play as ordinary audio, so the same bar drives both */
function playRecorded(bookName, ch, fromVerse){
  var list=recordedFor(bookName, ch);
  if(!list) return false;
  var vs=chapterOf(BK(S.reading),ch)||[];
  S.passages=list.map(function(x){
    var parts=[];
    for(var n=x.v1;n<=x.v2;n++) if(vs[n-1]) parts.push([n,vs[n-1].length]);
    /* the audio may live on a CDN (Cloudflare R2): the manifest says where */
    var base=(S.voiceManifest&&S.voiceManifest._base)||VOICE_BASE;
    return {text:'', from:x.v1, to:x.v2, file:base+x.f, marks:marksOf(parts,0)};
  });
  var v=Math.max(1,fromVerse||1), at=0, frac=0;
  S.passages.forEach(function(p,k){ if(p.from<=v&&v<=p.to){ at=k;
    (p.marks||[]).forEach(function(m){ if(m[0]===v) frac=m[1]; }); } });
  S.speakAt=at; S.speakVerse=v;
  S.speaking=true;
  Speech.onTick(function(i){ S.speakAt=i; if(i!==at||!frac) S.speakVerse=S.passages[i].from;
    paintSpeaking(); updatePlayerPlace(); });
  Speech.onProgress(function(i,f){ var nv=verseAt(S.passages[i],f);
    if(nv!==S.speakVerse){ S.speakVerse=nv; paintSpeaking(); updatePlayerPlace(); } });
  Speech.playFiles(S.passages.map(function(p){return p.file;}), at, frac);
  renderSpeakBar(); paintSpeaking();
  return true;
}

/* ---------- where you have been ----------
   Back used to mean "up one level", which is not what anyone means by it: if
   you reached a chapter from a search, back should return you to the search.
   Every distinct screen is recorded as you arrive, and back and forward walk
   that list the way a browser does.

   Recording happens inside render(), keyed off the same signature that decides
   whether to reset the scroll, so no handler has to remember to do it. */
var NAV_FIELDS = ['tab','book','reading','ch','btab','mode','cat','apocOpen',
                  'trackerOpen','atlasOpen','plate','sheetV','q','wordsOpen','wsel'];
var NAV_MAX = 40;
function navSnap(){
  var o = {};
  NAV_FIELDS.forEach(function(k){ o[k] = S[k]; });
  o.sheetV = S.sheet;
  return o;
}
function navSame(a, b){
  if(!a || !b) return false;
  return NAV_FIELDS.every(function(k){ return a[k] === b[k]; });
}
function navRecord(){
  if(S.navMoving) return;
  var snap = navSnap();
  if(navSame(snap, S.navStack[S.navAt])) return;
  S.navStack = S.navStack.slice(0, S.navAt + 1);
  S.navStack.push(snap);
  if(S.navStack.length > NAV_MAX) S.navStack.shift();
  S.navAt = S.navStack.length - 1;
}
function navApply(snap){
  NAV_FIELDS.forEach(function(k){ if(k !== 'sheetV') S[k] = snap[k]; });
  S.sheet = snap.sheetV || null;
  S.editing = null; S.sheetEdit = null;
}
function navCanBack(){ return S.navAt > 0; }
function navCanForward(){ return S.navAt < S.navStack.length - 1; }
function navBack(){
  if(!navCanBack()) return false;
  S.navMoving = 1; S.navAt--; navApply(S.navStack[S.navAt]);
  leaveReading(); render(); S.navMoving = 0; return true;
}
function navForward(){
  if(!navCanForward()) return false;
  S.navMoving = 1; S.navAt++; navApply(S.navStack[S.navAt]);
  leaveReading(); render(); S.navMoving = 0; return true;
}

/* ---------- the surveyed plates ----------
   Four maps from churchmaps.info, released by their author entirely into the
   public domain. Shipped as SVG and fetched only when one is opened, so they
   cost nothing until asked for. The relief rasters and the Russian and
   Ukrainian label layers were stripped out: 13 MB of source down to under a
   megabyte for all four.

   These sit alongside the drawn maps rather than replacing them. A plate is
   far better cartography; the drawn maps are the ones that can highlight a
   single place for a single verse and recolour themselves per era. */
/* the maps are separate files, which the one-file build cannot carry */
var PLATES_AVAILABLE=true;
/* cover art lives in separate files, which the one-file build cannot carry */
var COVER_ART=true;
var PLATES = [
  {id:'palestine_new_testament', name:'Palestine in the New Testament',
   eras:['roman'], note:'The land as Jesus and the apostles knew it.'},
  {id:'exodus_and_canaan_conquest', name:'The Exodus and the conquest of Canaan',
   eras:['wilderness','conquest','judges'],
   note:'The route out of Egypt and the taking of the land.'},
  {id:'ancient_world_patriarchs', name:'The ancient world of the patriarchs',
   eras:['primeval','patriarchs','egypt'], note:'From Ur to Canaan to Egypt.'},
  {id:'paul_journeys', name:"Paul's journeys",
   eras:['roman'], note:'Every voyage, across the Roman world.'}
];
function platesForEra(era){
  return PLATES.filter(function(p){ return p.eras.indexOf(era)>-1; });
}
function loadPlate(id){
  if(S.plateCache[id]!==undefined) return Promise.resolve(S.plateCache[id]);
  if(S.plateWait[id]) return S.plateWait[id];
  var url;
  try{ url=new URL('assets/maps/'+id+'.svg', document.baseURI).href; }
  catch(e){ url='assets/maps/'+id+'.svg'; }
  S.plateWait[id]=fetch(url).then(function(r){
    if(!r.ok) throw new Error('plate '+r.status);
    return r.text();
  }).then(function(t){
    S.plateCache[id]=t; delete S.plateWait[id]; return t;
  }).catch(function(e){
    S.plateCache[id]=''; delete S.plateWait[id]; return '';
  });
  return S.plateWait[id];
}
function vPlate(){
  var pl=PLATES.filter(function(x){ return x.id===S.plate; })[0];
  if(!pl){ S.plate=null; return vAtlas(); }
  var h='<div class="libwrap libplain mapfull">';
  h+='<button class="back" style="color:var(--blue)" data-a="closeplate">&larr; Atlas</button>';
  h+='<div class="libhead"><h2>'+esc(pl.name)+'</h2><p>'+esc(pl.note)+'</p></div>';
  if(!PLATES_AVAILABLE){
    return h+'<div class="plateload">The surveyed maps are separate files, so they '+
      'are not carried in the single-file version of the app. They are in the '+
      'hosted version.</div></div>';
  }
  var cached=S.plateCache[pl.id];
  if(cached===undefined){
    h+='<div class="plateload"><span class="spin"></span>Loading the map\u2026<br>'+
       '<small>These are large, detailed maps \u2014 the first open takes a moment, '+
       'then it is cached.</small></div>';
    loadPlate(pl.id).then(function(){ if(S.plate===pl.id){ S.keepScroll=true; render(); } });
  } else if(!cached){
    h+='<div class="plateload">That map could not be loaded. '+
       'Check your connection and try again.</div>';
  } else {
    var z=S.plateZoom||1;
    h+='<div class="platebar">'+
       '<button data-platezoom="out" aria-disabled="'+(z<=1)+'">\u2212</button>'+
       '<span>'+(z*100)+'%</span>'+
       '<button data-platezoom="in" aria-disabled="'+(z>=6)+'">+</button>'+
       '<button class="fit" data-platezoom="fit">Fit</button>'+
       '</div>';
    h+='<div class="plate'+(z>1?' zoomed':'')+'" id="plateframe"><div class="platein" style="width:'+
       (z*100)+'%">'+cached+'</div></div>';
    h+='<p class="vnote" style="margin:12px 2px 0">Use \u2212 and + to zoom, then drag to move. '+
       'Public domain, from churchmaps.info.</p>';
  }
  return h+'</div>';
}

function atlasCover(){
  return '<button class="cover isatlas" data-a="openatlas">' +
    '<span class="art"><svg viewBox="0 0 100 100">' + MOTIF.mountain + '</svg></span>' +
    '<span class="ct">Atlas</span><span class="cn">13 eras</span></button>';
}

function vAtlas(){
  if(S.plate) return vPlate();
  var h = '<div class="libwrap libplain">';
  h += '<button class="back" style="color:var(--blue)" data-a="closeatlas">&larr; Library</button>';
  h += '<div class="libhead"><h2>Atlas</h2>' +
       '<p>The land through thirteen eras, and who ruled it each time. ' +
       'Tap a map to open it.</p></div>';
  h += '<div class="atlasgrid">' + META.eras.filter(function(e){
    return platesForEra(e.key).length > 0;
  }).map(function(e){
    var pl = platesForEra(e.key)[0];
    return '<button class="atlascard" data-plate="' + esc(pl.id) + '">' +
      '<span class="an">' + esc(e.name) + '</span>' +
      '<span class="ad">' + esc(e.span) + '</span>' +
      '<span class="ap">' + esc(pl.name) + '</span>' +
      '</button>';
  }).join('') + '</div>';
  h += '<div class="lab" style="margin-top:22px;color:#D8B25E">Surveyed maps</div>';
  h += '<p class="vnote" style="margin:0 0 10px 2px">Detailed cartography, ' +
       'released into the public domain, from churchmaps.info.</p>';
  h += PLATES.map(function(x){
    return '<button class="plateref" data-plate="' + esc(x.id) + '">' +
      '<b>' + esc(x.name) + '</b><span>' + esc(x.note) + '</span></button>';
  }).join('');
  return h + '</div>';
}

function fmtSize(n){
  return n>1048576 ? (n/1048576).toFixed(1)+' MB' : Math.max(1,Math.round(n/1024))+' KB';
}
/* wraps the shelf in the library panel so it matches everything else reached
   from the library */
/* ================= WORD STUDY =================
   A shelf in the Library for looking a word up properly: what it meant in
   1611 (the glossary), where it came from (Webster's 1913 etymology), what
   Webster says it means, words near it (a thesaurus: Webster's own synonyms
   and WordNet's), and the Hebrew and Greek words the King James translates
   with it (Strong's). Everything is kept to the Bible's own vocabulary and
   fetched a letter at a time, so it costs nothing until it is used and then
   works offline. Old forms find their word: loveth finds love, spake speak. */
var LEX={shard:{}, wait:{}, strongs:null, syn:null, vocab:null};
var LEX_IRREG={hath:'have',hast:'have',doth:'do',dost:'do',didst:'do',saith:'say',spake:'speak',
  brake:'break',gat:'get',begat:'beget',wist:'wit',wot:'wit',shalt:'shall',wilt:'will',art:'be',
  wast:'be',wert:'be',thee:'thou',thy:'thou',thine:'thou',ye:'you',men:'man',women:'woman',
  children:'child',brethren:'brother',sware:'swear',bare:'bear',clave:'cleave',drave:'drive',
  slew:'slay',slain:'slay',smote:'smite',smitten:'smite',bade:'bid',knew:'know',came:'come',
  went:'go',took:'take',gave:'give',saw:'see',stood:'stand',arose:'arise',wrought:'work',
  sought:'seek',brought:'bring',taught:'teach',spoken:'speak',wrote:'write',written:'write',
  forsook:'forsake',fled:'flee',dwelt:'dwell',heard:'hear',told:'tell',held:'hold',found:'find'};
function lexCandidates(w){
  w=String(w||'').toLowerCase().replace(/[^a-z]/g,'');
  var out=[w];
  if(LEX_IRREG[w]) out.push(LEX_IRREG[w]);
  ['eth','est','edst','ed','ing','st','th','es','s','ly','er','ness'].forEach(function(suf){
    if(w.length-suf.length>=2&&w.slice(-suf.length)===suf){
      var b=w.slice(0,-suf.length);
      out.push(b, b+'e');
      if(b.length>2&&b.charAt(b.length-1)===b.charAt(b.length-2)) out.push(b.slice(0,-1));
      if(b.charAt(b.length-1)==='i') out.push(b.slice(0,-1)+'y');
    }
  });
  return out.filter(function(x,i){ return x&&out.indexOf(x)===i; });
}
function lexFetch(name){
  if(LEX.wait[name]) return LEX.wait[name];
  return (LEX.wait[name]=fetchJSON('assets/data/lex/'+name).catch(function(){
    delete LEX.wait[name]; return null; }));
}
function lexShard(letter){
  if(LEX.shard[letter]!==undefined) return Promise.resolve(LEX.shard[letter]);
  return lexFetch('w-'+letter+'.json').then(function(d){ LEX.shard[letter]=d||{}; return LEX.shard[letter]; });
}
function lexExtras(){
  var a=LEX.strongs?Promise.resolve(LEX.strongs):lexFetch('strongs.json').then(function(d){ LEX.strongs=d; return d; });
  var b=LEX.syn?Promise.resolve(LEX.syn):lexFetch('syn.json').then(function(d){ LEX.syn=d; return d; });
  return Promise.all([a,b]);
}
/* every word of the Bible, with how often it occurs */
function lexVocab(){
  if(LEX.vocab&&LEX.vocabN===Object.keys(BIBLE).length) return LEX.vocab;
  var n={};
  Object.keys(BIBLE).forEach(function(bi){
    var chs=BIBLE[bi];
    for(var c in chs){ var vs=chs[c];
      for(var v=0;v<vs.length;v++){ if(!vs[v]) continue;
        var ws=vs[v].toLowerCase().match(/[a-z]+/g)||[];
        for(var k=0;k<ws.length;k++) n[ws[k]]=(n[ws[k]]||0)+1; } }
  });
  LEX.vocab=n; LEX.vocabN=Object.keys(BIBLE).length; LEX.words=Object.keys(n).sort();
  return n;
}
function lexLookup(word){
  var cands=lexCandidates(word);
  var letters=[];
  cands.forEach(function(c){ if(letters.indexOf(c.charAt(0))<0) letters.push(c.charAt(0)); });
  return Promise.all(letters.map(lexShard).concat([lexExtras()])).then(function(){
    var forms=[], seen={};
    cands.forEach(function(c){
      var sh=LEX.shard[c.charAt(0)]||{};
      if(sh[c]&&!seen[c]){ seen[c]=1; forms.push({head:c, entries:sh[c]}); }
    });
    var syn=[], strongs=[], sseen={};
    cands.forEach(function(c){
      ((LEX.syn||{})[c]||[]).forEach(function(x){ if(syn.indexOf(x)<0) syn.push(x); });
      ((LEX.strongs&&LEX.strongs.i[c])||[]).forEach(function(k){ if(!sseen[k]){ sseen[k]=1; strongs.push(k); } });
    });
    return {word:String(word).toLowerCase(), forms:forms, syn:syn.slice(0,28), strongs:strongs.slice(0,16)};
  });
}
function wordsCover(){
  return '<button class="cover iswords" data-a="openwords">'+
    '<span class="wmark" aria-hidden="true">Aa</span>'+
    '<span class="ct">Word study</span><span class="cn">Dictionary</span></button>';
}
function lookWord(w){
  w=String(w||'').toLowerCase().replace(/[^a-z]/g,'');
  if(!w) return;
  if(!wordAllowance(w)){ openPaywall('words'); return; }
  S.wordsOpen=true; S.wq=w; S.wsel=w; S.wres=null; S.wopen=null;
  LEX.pendingFor=w;
  lexLookup(w).then(function(r){ S.wres=r; LEX.pendingFor=null; S.keepScroll=true; render(); })
    .catch(function(){ S.wres={word:w, forms:[], syn:[], strongs:[], failed:1}; LEX.pendingFor=null; render(); });
}
function strongsRow(k, open){
  var e=LEX.strongs&&LEX.strongs.e[k]; if(!e) return '';
  var heb=k.charAt(0)==='H';
  var h='<div class="wsrow'+(open?' open':'')+'"><button class="wshead" data-strong="'+k+'" aria-expanded="'+(!!open)+'">'+
    '<span class="wsnum">'+k+'</span>'+
    '<span class="wslem" lang="'+(heb?'he':'grc')+'" dir="'+(heb?'rtl':'ltr')+'">'+esc(e.l)+'</span>'+
    '<span class="wsx">'+esc(e.x)+'</span>'+
    '<span class="wsdef">'+esc((e.d||'').replace(/^\s+/,'').slice(0,90))+'</span></button>';
  if(open){
    var der=esc(e.r||'').replace(/\b([HG]\d+)\b/g,'<button class="wslink" data-strong="$1">$1</button>');
    h+='<div class="wsbody">'+
      (e.p?'<p><span class="wslab">Say it</span>'+esc(e.p)+'</p>':'')+
      (e.d?'<p><span class="wslab">Meaning</span>'+esc(e.d)+'</p>':'')+
      (e.r?'<p><span class="wslab">Comes from</span>'+der+'</p>':'')+
      (e.k?'<p><span class="wslab">In the King James</span>'+esc(e.k)+'</p>':'')+'</div>';
  }
  return h+'</div>';
}
function vWords(){
  var h='<div class="libwrap wordsp">';
  h+='<button class="back" style="color:var(--blue)" data-a="closewords">&larr; Library</button>';
  h+=screenHead({eyebrow:'Word study', title:'Dictionary',
    sub:'Meaning, where a word comes from, words like it, and the Hebrew and Greek behind it.'});
  h+='<div class="search wsearch"><svg viewBox="0 0 24 24">'+I.search+'</svg>'+
     '<input id="wq" placeholder="Look up a word" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(S.wq||'')+'"></div>';
  var q=(S.wq||'').toLowerCase().replace(/[^a-z]/g,'');
  if(!S.wsel||q!==S.wsel){
    var voc=lexVocab(), list=[];
    if(q.length>=2){
      /* the word itself first, then the commonest words it begins */
      for(var i=0;i<LEX.words.length;i++) if(LEX.words[i].indexOf(q)===0) list.push(LEX.words[i]);
      list.sort(function(a,b){ return (a===q?-1:b===q?1:0)||(voc[b]-voc[a]); });
      list=list.slice(0,16);
    } else list=['charity','conversation','ruddy','meet','prevent','quick','peradventure','wist','suffer','bowels','raiment','firmament'];
    h+='<div class="lab" style="margin:6px 0 10px">'+(q.length>=2?'In the King James':'Try one')+'</div>';
    h+='<div class="wsugg">'+list.map(function(w){
      return '<button class="chip" data-word="'+w+'">'+esc(w)+(voc[w]?'<span class="wcount">'+voc[w]+'</span>':'')+'</button>';
    }).join('')+(q.length>=2&&!list.length?'<p class="vnote">No word in the Bible begins with “'+esc(q)+'”.</p>':'')+'</div>';
    return h+'</div>';
  }
  var w=S.wsel, n=lexVocab()[w]||0;
  h+='<div class="whead"><h3>'+esc(w)+'</h3><span class="wn">'+(n?n+(n===1?' time':' times')+' in the King James':'Not in the King James text')+'</span>'+
     (n?'<button class="chip" data-search="'+esc(w)+'">Find it in the Bible</button>':'')+'</div>';
  var g=glossLookup(w);
  if(g) h+='<div class="wsec"><div class="lab">In 1611</div><div class="wgloss">'+glossCard(g.e, w)+'</div></div>';
  var r=(S.wres&&S.wres.word===w)?S.wres:null;
  if(!r&&LEX.pendingFor!==w){           /* back to a word from history */
    LEX.pendingFor=w;
    lexLookup(w).then(function(res){ S.wres=res; LEX.pendingFor=null; S.keepScroll=true; render(); });
  }
  if(!r){ return h+'<div class="empty"><span class="spin"></span> Looking it up…</div></div>'; }
  if(r.failed) return h+'<div class="empty">The dictionary could not be loaded. It needs a connection the first time.</div></div>';
  var etyms=[];
  r.forms.forEach(function(f){ f.entries.forEach(function(e){ if(e.e&&etyms.indexOf(e.e)<0) etyms.push(e.e); }); });
  if(etyms.length) h+='<div class="wsec"><div class="lab">Where it comes from</div>'+
    etyms.slice(0,3).map(function(t){ return '<p class="wetym">'+esc(t)+'</p>'; }).join('')+'</div>';
  if(r.forms.length){
    h+='<div class="wsec"><div class="lab">Dictionary · Webster’s 1913</div>';
    r.forms.slice(0,3).forEach(function(f){
      f.entries.slice(0,3).forEach(function(e){
        h+='<div class="wentry"><div class="wform">'+esc(f.head)+(e.p?' <i>'+esc(e.p)+'</i>':'')+'</div>'+
          e.d.slice(0,S.wmore?10:4).map(function(d){ return '<p class="wdef">'+esc(d)+'</p>'; }).join('')+'</div>';
      });
    });
    if(!S.wmore&&r.forms.some(function(f){ return f.entries.some(function(e){ return e.d.length>4; }); }))
      h+='<button class="chip" data-a="wmore">Every sense</button>';
    h+='</div>';
  }
  if(r.syn.length) h+='<div class="wsec"><div class="lab">Thesaurus</div><div class="wsugg">'+
    r.syn.map(function(x){ return '<button class="chip" data-word="'+esc(x)+'">'+esc(x)+'</button>'; }).join('')+'</div></div>';
  if(r.strongs.length) h+='<div class="wsec"><div class="lab">Hebrew and Greek · Strong’s</div>'+
    '<p class="vnote">The words the King James translates as “'+esc(w)+'”. Tap one to open it.</p>'+
    r.strongs.map(function(k){ return strongsRow(k, S.wopen===k); }).join('')+'</div>';
  if(!r.forms.length&&!r.syn.length&&!r.strongs.length&&!g)
    h+='<div class="empty">Nothing found for “'+esc(w)+'”.</div>';
  h+='<p class="wcredit">Webster’s Revised Unabridged Dictionary (1913) and Strong’s Hebrew and Greek '+
    'dictionaries are in the public domain; Strong’s in the Open Scriptures edition (CC BY-SA). '+
    'Synonyms from Webster and from Princeton WordNet 3.0.</p>';
  return h+'</div>';
}

function vMyBooksPage(){
  return '<div class="libwrap libplain">'+
    '<button class="back" style="color:var(--blue)" data-a="closemine">&larr; Library</button>'+
    '<div class="libhead"><h2>Your own reading</h2>'+
    '<p>A reader for your own files \u2014 EPUB, PDF or plain text. They are kept '+
    'separately and are never mixed in with scripture. They stay on this '+
    'device.</p></div>'+
    '<div class="minewrap">'+vMyBooks()+'</div></div>';
}
function vMyBooks(){
  var h='';
  if(!Shelf.available())
    return '<div class="empty">This browser will not let the app store books '+
      '(private browsing usually blocks it).</div>';

  if(S.importing){
    var im=S.importing;
    h+='<div class="card"><div class="lab">'+esc(im.title||'Importing')+'</div>'+
       '<p style="margin:0;font-size:13.5px;color:'+(im.error?'#B4405A':'var(--ink2)')+
       ';line-height:1.5">'+esc(im.msg)+'</p>'+
       (im.error?'<div style="height:10px"></div>'+
        '<button class="btn gh" data-a="clearimport">Dismiss</button>':'')+'</div>';
  }

  h+='<label class="btn" data-a="addbook" style="display:block;cursor:pointer">Add a book'+
     '<input type="file" id="bookfile" accept=".epub,.pdf,.txt,.md,.markdown" '+
     'style="display:none"></label>';
  h+='<p class="vnote" style="margin:10px 2px 16px">Your own files, kept apart '+
     'from scripture. EPUB, PDF or plain text. '+
     'Books stay on this device \u2014 nothing is uploaded. A PDF must have real '+
     'text in it; a scan of a printed page cannot be read.</p>';

  if(!S.shelf.length)
    return h+'<div class="empty">No books added yet.</div>';

  h+='<div class="lab">'+S.shelf.length+' book'+(S.shelf.length>1?'s':'')+'</div>';
  h+=S.shelf.map(function(m,k){
    return '<div class="item" style="display:block">'+
      '<button data-userbook="'+esc(m.id)+'" style="display:flex;gap:12px;width:100%;text-align:left">'+
        '<span class="ic">'+svg(I.book)+'</span>'+
        '<span class="spacer"><span class="tt">'+esc(m.title)+'</span>'+
        '<span class="dd">'+(m.author?esc(m.author)+' \u00b7 ':'')+m.nch+
        ' chapter'+(m.nch>1?'s':'')+' \u00b7 '+fmtSize(m.size)+'</span></span>'+
        '<span class="go">'+svg(I.next)+'</span></button>'+
      '<div class="sqf" style="margin-top:9px">'+
        '<button class="del" data-delbook="'+esc(m.id)+'">Remove</button></div></div>';
  }).join('');
  return h;
}

function openUserBook(id, then){
  var m=S.shelf.filter(function(x){return x.id===id;})[0];
  if(!m) return;
  if(S.openBook&&S.openBook.id===id){ if(then) then(); return; }
  Shelf.get(id).then(function(rec){
    if(!rec) throw new Error('missing');
    S.openBook={id:rec.id, chapters:rec.chapters, titles:rec.titles||null};
    if(then) then();
  }).catch(function(){
    S.importing={title:'Could not open',msg:'That book could not be read back from storage.',error:1};
    render();
  });
}

function doImport(file){
  if(!hasStudy()&&S.shelf.length>=FREE_BOOKS){ openPaywall('books'); return; }
  S.importing={title:'Importing '+file.name, msg:'Reading the file\u2026'};
  render();
  importFile(file, function(i,n){
    S.importing={title:'Importing '+file.name, msg:'Reading page '+i+' of '+n+'\u2026'};
    var el=document.getElementById('view');
    if(el) render();
  }).then(function(bk){
    var rec={id:'b'+Date.now()+Math.floor(Math.random()*999),
             title:(bk.title||file.name).slice(0,120),
             author:(bk.author||'').slice(0,120),
             format:bk.format, chapters:bk.chapters, titles:bk.titles,
             added:Date.now(), slot:bookSlots()};
    return Shelf.put(rec).then(function(){ return loadShelf(); }).then(function(){
      S.importing=null;
      render();
    });
  }).catch(function(e){
    S.importing={title:'Import failed', msg:(e&&e.message)||'That file could not be read.',
                 error:1};
    render();
  });
}

/* ================= TOC DRAWER ================= */
function buildTOC(){
  var h='';
  if(!META||!BOOKS.length){
    toc.innerHTML='<div class="sec">Still loading</div>'+
      '<div style="padding:14px 16px;font-size:13px;color:var(--ink2)">'+
      'The books appear here once the scriptures have finished loading.</div>';
    return;
  }
  if(S.drawerBook!==null&&BK(S.drawerBook)){
    var b=BK(S.drawerBook);
    h+='<div class="sec"><button class="dback" data-a="drawerback">&larr; All books</button></div>';
    h+='<div class="dtitle">'+esc(b.name)+'<span>'+b.nch+' chapters</span></div>';
    h+='<div class="dchg">';
    for(var i=1;i<=b.nch;i++)
      h+='<button class="dch'+(b.chapters[i]?' rich':'')+'" data-drawerch="'+i+'">'+i+'</button>';
    h+='</div>';
  } else {
    /* Settings used to sit beneath all eighty books, about four thousand
       pixels down. First, where it can be found. */
    h+='<button class="dset" data-a="showabout">'+svg(I.gear)+
       '<span>Settings, backup and about</span></button>';
    META.sections.forEach(function(sec){
      var bks=BOOKS.filter(function(b){return b.section===sec.key;});
      if(!bks.length) return;
      h+='<div class="sec">'+esc(sec.name)+'</div>';
      h+=bks.map(function(b){
        return '<button data-drawerbook="'+b.i+'">'+esc(b.name)+
               '<span class="dn">'+b.nch+'</span></button>';}).join('');
    });
  }
  toc.innerHTML=h;
}
function openDrawer(o){
  if(o) placeOverlays();
  drawer.classList.toggle('on',o);scrim.classList.toggle('on',o);}

/* ================= TABLETS: ONE SCREEN, OR TWO SIDE BY SIDE =================
   From the tablet design. A phone is exactly as it was. A tablet held upright
   shows one screen, a centred column, with a floating bar at its foot. Turned
   on its side the screen splits in two: the bar sits on the divider, its left
   icons choose the left side and its right icons the right, and the one
   chosen on each side is lit. Picking what the other side already shows
   swaps them; the centre button swaps both. The divider's handle drags, and
   snaps to thirds and halves.

   Each side is a whole screen of the app with a place of its own: which tab,
   which book and chapter, whether a note is open. Only one side's place is in
   S at a time; the other waits in PANES, and is brought in to be drawn or to
   handle a tap made on it, then put back. Between taps S holds the side that
   is reading, whenever one is, because reading aloud runs for minutes on
   timers and speech events, and it has to find its own chapter in S.

   What a tap opens goes to the side that shows that kind of thing: a chapter
   picked in the Library opens on the Bible side, Note on a verse opens on the
   Notes side, and the side you tapped stays where it was. */
var LAYOUT='phone';                 /* 'phone', 'tab' (one screen) or 'split' */
var PANE_KEYS=['tab','mode','book','btab','ch','reading','cat','apocOpen','trackerOpen',
  'wordsOpen','wsel','wq','wopen','atlasOpen','mapEra','mapFrame','plate','openEra','q','editing','editFocusBody','sheet',
  'jumpRef','viewSig','navStack','navAt','keepScroll'];
var PANE_BLANK={tab:'library',mode:'shelf',book:null,btab:'overview',ch:1,reading:null,
  cat:'all',apocOpen:false,trackerOpen:false,wordsOpen:false,wsel:null,wq:'',wopen:null,atlasOpen:false,mapEra:null,mapFrame:null,
  plate:null,openEra:null,q:'',editing:null,editFocusBody:false,sheet:null,jumpRef:null,
  viewSig:null,navStack:[],navAt:-1,keepScroll:false};
var PANE_ID={A:['paneA','top','view'],B:['paneB','top2','view2']};
var PANES={A:null,B:null};          /* the side that is not in S */
var CUR='A';                        /* whose place is in S */
var PANE_HTML={A:null,B:null};      /* what each side last drew */
var SPLIT={ratio:0.5, last:'A', stash:null, right:null};
/* the destinations on the tablet bar, in the phone's order, with Search last
   as the design has it */
var TAB_DEST=[['library','Library'],['study','Study'],['bible','Bible'],
              ['notes','Notes'],['saves','Saves'],['search','Search']];

function otherSide(p){ return p==='A'?'B':'A'; }
function paneEl(p,i){ try{ return document.getElementById(PANE_ID[p][i||0]); }catch(e){ return null; } }
function copyVal(v){ return (v&&typeof v==='object'&&typeof v.slice==='function')?v.slice():v; }
function snapPane(){
  var o={};
  PANE_KEYS.forEach(function(k){ o[k]=copyVal(S[k]); });
  return o;
}
function blankPane(){
  var o={};
  PANE_KEYS.forEach(function(k){ o[k]=copyVal(PANE_BLANK[k]); });
  return o;
}
function loadPane(o){ o=o||blankPane(); PANE_KEYS.forEach(function(k){ S[k]=o[k]; }); }
function switchPane(p){
  if(p===CUR||!PANE_ID[p]) return;
  PANES[CUR]=snapPane();
  loadPane(PANES[p]); PANES[p]=null; CUR=p;
  view=paneEl(p,2)||view; topbar=paneEl(p,1)||topbar;
}
function withPane(p, fn){
  if(p===CUR) return fn();
  var was=CUR; switchPane(p);
  try{ return fn(); } finally { switchPane(was); }
}
/* where a side is, in the bar's terms */
function destOf(o){
  if(!o) return 'library';
  if(o.reading!==null&&o.reading!==undefined) return 'bible';
  if(o.book!==null&&o.book!==undefined) return 'library';
  var t=o.tab||'library';
  return t==='bible'?'library':t;
}
function sideState(p){ return p===CUR?S:PANES[p]; }
function sideDest(p){ return destOf(sideState(p)); }
/* the side that is showing a chapter, if either is */
function readerSide(){
  if(S.reading!==null) return CUR;
  if(LAYOUT==='split'){
    var o=PANES[otherSide(CUR)];
    if(o&&o.reading!==null&&o.reading!==undefined) return otherSide(CUR);
  }
  return null;
}
/* a side opened on one of the bar's destinations */
function paneOn(k){
  var o=blankPane();
  if(k==='bible'){
    var last=S.lastRead||{}, bk=BK(last.b);
    if(!bk) bk=BOOKS.filter(function(x){return x.name==='Proverbs';})[0];
    if(bk){ o.tab='bible'; o.book=bk.i; o.reading=bk.i; o.ch=last.c||1; }
  } else o.tab=k;
  return o;
}

/* ---- a tap, typing, a change: handled on the side it happened on ---- */
var paneDepth=0, paneEntry=null;
function sideOf(el){
  if(LAYOUT!=='split') return null;
  try{
    var p=(el&&el.closest)?el.closest('.pane'):null;
    if(p&&p.id==='paneB') return 'B';
    if(p&&p.id==='paneA') return 'A';
  }catch(e){}
  return null;                      /* the bar, a sheet, the drawer */
}
function inPane(fn){
  return function(ev){
    if(LAYOUT!=='split') return fn.apply(this, arguments);
    paneEnter(sideOf(ev&&ev.target));
    try{ return fn.apply(this, arguments); }
    finally{ paneLeave(); }
  };
}
function paneEnter(p){
  if(paneDepth++>0) return;
  if(p){ SPLIT.last=p; switchPane(p); }
  var v=paneEl(CUR,2);
  paneEntry={p:CUR, before:snapPane(), top:(v&&v.scrollTop)||0};
}
function isVerseKey(k){ return typeof k==='string'&&/^\d+:\d+:\d+$/.test(k); }
function sheetShowing(){ try{ return sheet.classList.contains('on'); }catch(e){ return false; } }
function paneDelta(a, b, dest){
  var out={}, stay={viewSig:1,navStack:1,navAt:1,keepScroll:1};
  PANE_KEYS.forEach(function(k){ if(!stay[k]&&a[k]!==b[k]) out[k]=copyVal(b[k]); });
  if(dest==='bible'){ out.book=b.book; out.reading=b.reading; out.ch=b.ch; }
  return out;
}
function paneLeave(){
  if(--paneDepth>0) return;
  var e=paneEntry; paneEntry=null;
  if(!e||LAYOUT!=='split') return;
  if(CUR!==e.p) switchPane(e.p);
  var q=otherSide(e.p), after=snapPane();
  var was=destOf(e.before), now=destOf(after), there=destOf(PANES[q]);
  if(now!==was&&now===there){
    /* it belongs on the other side, which already shows that kind of thing:
       it goes there, and this side stays where it was */
    var moved=paneDelta(e.before, after, now);
    loadPane(e.before);
    if(isVerseKey(S.sheet)&&!sheetShowing()) S.sheet=null;
    var o=PANES[q]||blankPane();
    for(var k in moved) o[k]=moved[k];
    PANES[q]=o;
    render();
    try{ var v=paneEl(e.p,2); if(v) v.scrollTop=e.top; }catch(err){}
    /* a note sent to the Notes side is ready to be written in */
    if(o.editing&&o.editFocusBody){
      o.editFocusBody=false;
      try{ var nb=document.getElementById('nbody');
        if(nb&&nb.focus){ nb.focus(); var L=(nb.value||'').length;
          if(nb.setSelectionRange) nb.setSelectionRange(L,L); } }catch(err){}
    }
    announce('Opened on the '+(q==='A'?'left':'right'));
  }
  var r=readerSide();
  if(r&&r!==CUR) switchPane(r);
  if(S.speaking&&S.speakB!=null&&!readingHere()) stopSpeaking();
  renderNav(); placeSplit();
}

/* ---- the bar ---- */
function tabIcon(k){
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+TAB_ICON[k]+'"/></svg>';
}
function barButton(k, label, on, attr, title){
  return '<button class="tb'+(on?' on':'')+'" '+attr+' aria-label="'+esc(title)+'" '+
    'title="'+esc(title)+'" aria-pressed="'+(!!on)+'">'+tabIcon(k)+
    '<span>'+esc(label)+'</span></button>';
}
function renderTabletBar(){
  if(LAYOUT==='tab'){
    var cur=destOf(S);
    nav.innerHTML='<div class="tbgrp">'+TAB_DEST.map(function(t){
      return barButton(t[0], t[1], cur===t[0], 'data-nav="'+t[0]+'"', t[1]);
    }).join('')+'</div>';
    return;
  }
  var dl=sideDest('A'), dr=sideDest('B');
  function side(p, cur, word){
    return '<div class="tbgrp '+(p==='A'?'l':'r')+'" role="group" aria-label="The '+word+' side">'+
      TAB_DEST.map(function(t){
        return barButton(t[0], t[1], cur===t[0], 'data-pick="'+p+':'+t[0]+'"',
          'Show '+t[1]+' on the '+word);
      }).join('')+'</div>';
  }
  nav.innerHTML=side('A', dl, 'left')+
    '<button class="tbswap" data-a="swappanes" aria-label="Swap sides" title="Swap sides">'+
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h15l-4-4M20 16H5l4 4"/></svg></button>'+
    side('B', dr, 'right');
}
/* one of the bar's icons, on one side */
function pickSide(p, k){
  if(LAYOUT!=='split') return;
  var q=otherSide(p);
  SPLIT.last=p;
  if(sideDest(q)===k){ swapSides(); return; }
  withPane(p, function(){
    if(destOf(S)===k&&k==='bible') return;      /* already reading: stay put */
    goTab(k, true);
  });
  var r=readerSide(); if(r&&r!==CUR) switchPane(r);
  render(); saveSplit();
}
function swapSides(){
  var va=paneEl('A',2), vb=paneEl('B',2);
  var ta=va?va.scrollTop:0, tb=vb?vb.scrollTop:0;
  var q=otherSide(CUR), mine=snapPane();
  loadPane(PANES[q]); PANES[q]=mine;
  PANE_HTML.A=PANE_HTML.B=null;
  var r=readerSide(); if(r&&r!==CUR) switchPane(r);
  render();
  try{ if(va) va.scrollTop=tb; if(vb) vb.scrollTop=ta; }catch(e){}
  saveSplit();
}

/* ---- the layout, from the size of the screen ---- */
function wantLayout(){
  var w=0,h=0;
  try{ w=window.innerWidth||0; h=window.innerHeight||0; }catch(e){}
  if(w>=900&&w>=h&&h>=480) return hasStudy()?'split':'tab';
  if(w>=700&&h>=560) return 'tab';
  return 'phone';
}
function setBodyLayout(){
  try{
    var c=document.body.classList;
    c.toggle('lay-tab', LAYOUT==='tab');
    c.toggle('lay-split', LAYOUT==='split');
    c.toggle('lay-tablet', LAYOUT!=='phone');
  }catch(e){}
}
function applyLayout(){
  var want=wantLayout();
  if(want===LAYOUT){ placeSplit(); return false; }
  if(LAYOUT==='split') closeSplit();
  LAYOUT=want;
  setBodyLayout();
  if(want==='split') openSplit();
  else placeSplit();
  PANE_HTML.A=PANE_HTML.B=null;
  return true;
}
function openSplit(){
  if(CUR!=='A') switchPane('A');
  var mine=destOf(S), st=SPLIT.stash, want=SPLIT.right;
  if(st&&destOf(st)!==mine) PANES.B=st;
  else if(want&&want!==mine&&want!=='about') PANES.B=paneOn(want);
  else PANES.B=paneOn(mine==='bible'?'notes':'bible');
  SPLIT.stash=null;
  var r=readerSide(); if(r&&r!==CUR) switchPane(r);
}
function closeSplit(){
  /* one side carries on: the one reading aloud, if it is, or else the one
     last touched */
  var r=readerSide();
  var keep=(S.speaking&&r)?r:(SPLIT.last||'A');
  var vk=paneEl(keep,2), top=vk?vk.scrollTop:0;
  if(CUR!=='A') switchPane('A');
  if(keep==='B'){ var a=snapPane(); loadPane(PANES.B); PANES.B=a; }
  SPLIT.stash=PANES.B; PANES.B=null;
  view=paneEl('A',2)||view; topbar=paneEl('A',1)||topbar;
  SPLIT.keepTop=keep==='B'?top:null;
}
function saveSplit(){
  try{ Store.set('strata:split',{ratio:SPLIT.ratio,
    right:LAYOUT==='split'?sideDest('B'):SPLIT.right}); }catch(e){}
  if(LAYOUT==='split') SPLIT.right=sideDest('B');
}
/* sizes the two sides and puts the bar on the divider */
function sizeClass(w){
  return w<440?'narrow':(w<560?'mid':(w<680?'roomy':'wide'));
}
function placeSplit(){
  var a=paneEl('A'), b=paneEl('B');
  if(LAYOUT!=='split'){
    try{ if(a&&a.style) a.style.width=''; if(nav&&nav.style) nav.style.left=''; }catch(e){}
    try{
      if(a&&a.setAttribute){
        if(LAYOUT==='tab') a.setAttribute('data-w', sizeClass(Math.min(a.clientWidth||0, 688)));
        else a.removeAttribute('data-w');
      }
    }catch(e){}
    placeOverlays(); return;
  }
  var W=(phone&&phone.clientWidth)||window.innerWidth||0;
  var lw=Math.round(W*SPLIT.ratio);
  try{
    if(a&&a.style) a.style.width=lw+'px';
    a.setAttribute('data-w', sizeClass(lw));
    if(b) b.setAttribute('data-w', sizeClass(W-lw-1));
    var g=document.querySelector('#divider .grip');
    if(g) g.setAttribute('aria-valuenow', Math.round(SPLIT.ratio*100));
    var nw=(nav&&nav.offsetWidth)||0, half=nw/2+10;
    var cx=Math.min(W-half, Math.max(half, lw));
    if(nav&&nav.style) nav.style.left=Math.round(cx)+'px';
  }catch(e){}
  placeOverlays();
}
/* a sheet, the drawer and the reading settings sit over the side that is
   reading, not across the middle of the screen */
function paneBox(p){
  try{ var el=paneEl(p); var r=el.getBoundingClientRect(); return {left:r.left,width:r.width}; }
  catch(e){ return null; }
}
function placeOverlays(){
  var r=(LAYOUT==='split')?(readerSide()||CUR):null;
  var box=r?paneBox(r):null;
  var els=[sheet, drawer, document.querySelector('#rshost .rsheet')];
  els.forEach(function(el){
    if(!el||!el.style) return;
    if(!box){ el.style.left=''; el.style.right=''; el.style.width=''; el.style.marginLeft=''; return; }
    if(el===drawer){ el.style.left=Math.round(box.left)+'px'; return; }
    var w=Math.min(560, box.width-24);
    el.style.width=Math.round(w)+'px'; el.style.right='auto'; el.style.marginLeft='0';
    el.style.left=Math.round(box.left+(box.width-w)/2)+'px';
  });
}

/* ---- the divider: drag its handle; it snaps to thirds and halves ----
   iPads before iOS 13 have no pointer events, so touch and mouse are handled
   separately. While the finger moves only the line follows it; the two sides
   are laid out again once, when it lifts, which keeps an older iPad smooth. */
function initDivider(){
  var d=document.getElementById('divider');
  if(!d||!d.addEventListener||d.__wired) return;
  d.__wired=1;
  var grip=d.querySelector?d.querySelector('.grip'):null;
  var drag=false, ratio=SPLIT.ratio;
  function W(){ return (phone&&phone.clientWidth)||window.innerWidth||1; }
  function show(x){
    var left=0; try{ left=phone.getBoundingClientRect().left; }catch(e){}
    ratio=Math.min(0.68,Math.max(0.32,(x-left)/W()));
    try{ d.style.transform='translateX('+Math.round((ratio-SPLIT.ratio)*W())+'px)'; }catch(e){}
  }
  function start(ev){
    if(LAYOUT!=='split') return;
    drag=true; ratio=SPLIT.ratio;
    try{ document.body.classList.add('dragging'); }catch(e){}
    if(ev&&ev.preventDefault) ev.preventDefault();
  }
  function end(){
    if(!drag) return;
    drag=false;
    try{ document.body.classList.remove('dragging'); d.style.transform=''; }catch(e){}
    [1/3,0.5,2/3].forEach(function(s){ if(Math.abs(s-ratio)<0.04) ratio=s; });
    SPLIT.ratio=ratio; placeSplit(); saveSplit();
  }
  (grip||d).addEventListener('touchstart',start,{passive:false});
  document.addEventListener('touchmove',function(ev){
    if(!drag||!ev.touches||!ev.touches.length) return;
    ev.preventDefault(); show(ev.touches[0].clientX);
  },{passive:false});
  document.addEventListener('touchend',end);
  document.addEventListener('touchcancel',end);
  (grip||d).addEventListener('mousedown',start);
  document.addEventListener('mousemove',function(ev){ if(drag) show(ev.clientX); });
  document.addEventListener('mouseup',end);
  if(grip){
    grip.addEventListener('keydown',function(ev){
      var k=ev.key, steps=[1/3,0.5,2/3], i=steps.indexOf(SPLIT.ratio);
      if(k!=='ArrowLeft'&&k!=='ArrowRight') return;
      ev.preventDefault();
      if(i<0){ i=1; }
      i=Math.max(0,Math.min(2,i+(k==='ArrowLeft'?-1:1)));
      SPLIT.ratio=steps[i]; placeSplit(); saveSplit();
      announce('The left side is '+(i===0?'a third':i===1?'half':'two thirds')+' of the screen.');
    });
  }
}

/* ---- sizing: rotation, and the height iOS 12 gets wrong ----
   Safari before 15 has no dvh, and its vh is the height with the toolbars
   hidden, so a full-height app ran under the toolbar. The real height is
   measured instead. */
var layoutTimer=null;
function measureHeight(){
  try{ document.documentElement.style.setProperty('--vh',(window.innerHeight*0.01)+'px'); }catch(e){}
}
function onResize(){
  measureHeight();
  if(layoutTimer) clearTimeout(layoutTimer);
  layoutTimer=setTimeout(function(){
    layoutTimer=null;
    if(applyLayout()){
      render();
      if(SPLIT.keepTop!=null){ try{ view.scrollTop=SPLIT.keepTop; }catch(e){} SPLIT.keepTop=null; }
    } else placeSplit();
  },120);
}
function initLayout(){
  measureHeight();
  /* the second side is only opened once the saved place is known
     (openingChapter); until then this just sets the frame */
  LAYOUT=wantLayout();
  setBodyLayout();
  placeSplit();
  initDivider();
  try{
    window.addEventListener('resize',onResize);
    window.addEventListener('orientationchange',onResize);
  }catch(e){}
}

/* ---------- flex gap, where the browser has none ----------
   Safari before 14.1 (every iPad that stops at iOS 12) lays out display:flex
   with no gap between the items, so rows of chips, buttons and icons ran
   together. There, the gaps the stylesheet asks for are put in as margins.
   The browser still reports the gap it was asked for, so the page's own
   computed styles say how much; this only has to place it. Anywhere flex gap
   works, none of this runs. */
var FlexGap=(function(){
  var ok=null, sels=null, queued=false, forced=false;
  /* how much gap an element asked for; the tests swap this for one that
     reads what a browser without flex gap would still report */
  var read=function(cs){
    return [px(cs.getPropertyValue('row-gap')||cs.getPropertyValue('grid-row-gap')),
            px(cs.getPropertyValue('column-gap')||cs.getPropertyValue('grid-column-gap'))];
  };
  function supported(){
    if(forced) return false;
    if(ok!==null) return ok;
    try{
      var d=document.createElement('div');
      d.style.display='flex'; d.style.flexDirection='column'; d.style.setProperty('row-gap','1px');
      d.appendChild(document.createElement('div')); d.appendChild(document.createElement('div'));
      document.body.appendChild(d); ok=(d.scrollHeight===1); document.body.removeChild(d);
    }catch(e){ ok=true; }
    return ok;
  }
  function collect(){
    var list=['[style*="gap:"]'];
    function walk(rules){
      for(var i=0;rules&&i<rules.length;i++){
        var r=rules[i];
        if(!r) continue;
        if(r.cssRules&&!r.selectorText){ walk(r.cssRules); continue; }
        var st=r.style;
        if(!st||!r.selectorText) continue;
        if(st.getPropertyValue('gap')||st.getPropertyValue('row-gap')||st.getPropertyValue('column-gap'))
          list.push(r.selectorText);
      }
    }
    try{ for(var i=0;i<document.styleSheets.length;i++){
      var rules=null; try{ rules=document.styleSheets[i].cssRules; }catch(e){}
      walk(rules); } }catch(e){}
    return list;
  }
  function matches(){
    var out=[];
    try{ return document.querySelectorAll(sels.join(',')); }
    catch(e){
      /* one selector this browser cannot read spoils the list; go one by one */
      sels.forEach(function(x){ try{ var n=document.querySelectorAll(x);
        for(var i=0;i<n.length;i++) out.push(n[i]); }catch(e2){} });
    }
    return out;
  }
  function px(v){ var n=parseFloat(v); return isNaN(n)?0:n; }
  function fix(){
    queued=false;
    if(!sels) sels=collect();
    var els=matches();
    for(var i=0;i<els.length;i++){
      var el=els[i], cs=getComputedStyle(el);
      if(cs.display!=='flex'&&cs.display!=='inline-flex') continue;
      var gg=read(cs), rg=gg[0], cg=gg[1];
      if(!rg&&!cg) continue;
      var col=(cs.flexDirection||'').indexOf('column')===0;
      var wrap=cs.flexWrap&&cs.flexWrap!=='nowrap';
      var n=0;
      for(var k=0;k<el.children.length;k++){
        var c=el.children[k], kc=getComputedStyle(c);
        if(kc.display==='none'||kc.position==='absolute'||kc.position==='fixed') continue;
        if(!c.__gap){ c.__gap={t:px(kc.marginTop),l:px(kc.marginLeft),r:px(kc.marginRight),
          b:px(kc.marginBottom)}; }
        var g=c.__gap;
        if(col){ if(n>0) c.style.marginTop=(g.t+rg)+'px'; }
        else if(wrap){ c.style.marginRight=(g.r+cg)+'px'; c.style.marginBottom=(g.b+rg)+'px'; }
        else if(n>0) c.style.marginLeft=(g.l+cg)+'px';
        n++;
      }
    }
  }
  function queue(){
    if(queued) return; queued=true;
    if(window.requestAnimationFrame) window.requestAnimationFrame(fix); else setTimeout(fix,16);
  }
  function init(){
    if(supported()) return false;
    try{
      new MutationObserver(queue).observe(document.body,{childList:true,subtree:true});
      window.addEventListener('resize',queue);
    }catch(e){}
    queue();
    return true;
  }
  /* for the tests: behave as Safari 12 would, here */
  function force(){ forced=true; ok=false; return init(); }
  return {supported:supported, init:init, run:fix, force:force,
          reader:function(f){ read=f; }};
})();

/* ---- scrolling to something, inside the side that holds it ----
   Before Safari 14, scrollIntoView takes no options, so 'center' became 'top'
   on an older iPad; and with two sides it could scroll the wrong box. This
   works out the scroller and moves it directly. */
var scrollAnim=null;
function scrollerOf(el){
  var p=el?el.parentNode:null;
  while(p&&p.nodeType===1){
    if(p.classList&&p.classList.contains('pv')){
      return (p.scrollHeight>p.clientHeight+1)?p:null;
    }
    p=p.parentNode;
  }
  return null;
}
function bringIntoView(el, where, smooth){
  if(!el) return;
  var sc=scrollerOf(el);
  if(!sc||!el.getBoundingClientRect){
    try{ el.scrollIntoView(smooth?{block:where||'center',behavior:'smooth'}:{block:where||'center'}); }
    catch(e){ try{ el.scrollIntoView(); }catch(e2){} }
    return;
  }
  var r=el.getBoundingClientRect(), s=sc.getBoundingClientRect();
  var y=sc.scrollTop+(r.top-s.top);
  if(where==='center') y-=Math.max(0,(sc.clientHeight-r.height)/2);
  else if(where==='nearest'){
    if(r.top>=s.top&&r.bottom<=s.bottom) return;
    if(r.top>=s.top) y-=sc.clientHeight-r.height;
  }
  y=Math.max(0,Math.min(Math.round(y), sc.scrollHeight-sc.clientHeight));
  if(scrollAnim){ scrollAnim.stop=true; scrollAnim=null; }
  var reduce=false;
  try{ reduce=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
  if(!smooth||reduce||!window.requestAnimationFrame){ sc.scrollTop=y; return; }
  var from=sc.scrollTop, dist=y-from, t0=null, job={stop:false};
  if(Math.abs(dist)<2){ sc.scrollTop=y; return; }
  scrollAnim=job;
  var dur=Math.min(520, 220+Math.abs(dist)*0.25);
  function step(t){
    if(job.stop) return;
    if(t0===null) t0=t;
    var k=Math.min(1,(t-t0)/dur), e=k<0.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
    sc.scrollTop=from+dist*e;
    if(k<1) requestAnimationFrame(step); else if(scrollAnim===job) scrollAnim=null;
  }
  requestAnimationFrame(step);
}

/* ================= RENDER ================= */
function readingAnchor(){
  try{
    if(S.reading===null) return null;
    var vt=view.getBoundingClientRect().top, vs=document.querySelectorAll('.rd .v');
    for(var i=0;i<vs.length;i++){ var r=vs[i].getBoundingClientRect();
      if(r.bottom>vt+8) return {key:vs[i].getAttribute('data-vs'), off:r.top-vt}; }
  }catch(e){}
  return null;
}
function restoreAnchor(a){
  if(!a) return;
  try{
    var el=document.querySelector('.rd .v[data-vs="'+a.key+'"]'); if(!el) return;
    view.scrollTop+= (el.getBoundingClientRect().top-view.getBoundingClientRect().top)-a.off;
  }catch(e){}
}
/* Which field you were typing in, and where. A redraw replaces the fields,
   and the old code always put focus back in the note's body, so text meant
   for the title, a tag or a linked verse landed in the body instead and
   Add tag and Add pressed on an empty box. */
var FIELDS=['ntitle','nbody','ntagadd','nlink','quicknote','bmfolderin','refin'];
function fieldState(){
  try{
    var a=document.activeElement;
    if(a&&a.id&&FIELDS.indexOf(a.id)>-1)
      return {id:a.id, s:a.selectionStart, e:a.selectionEnd, v:a.value};
  }catch(e){}
  return null;
}
function restoreField(f){
  if(!f) return;
  try{
    var el=document.getElementById(f.id); if(!el||!el.focus) return;
    if(typeof f.v==='string'&&el.value!==f.v&&(f.id==='ntagadd'||f.id==='nlink'||f.id==='bmfolderin'))
      el.value=f.v;                     /* half-typed tag or verse survives the redraw */
    el.focus();
    if(el.setSelectionRange&&typeof f.s==='number') el.setSelectionRange(f.s,f.e);
  }catch(e){}
}
function render(){
  var field=fieldState();
  /* Opening a different chapter stops reading aloud and keeps its place, by
     whatever route: the Next chapter card, search, a bookmark, a swipe. The
     Next chapter card used to leave the old chapter reading over the new. */
  /* (with two sides, not in the middle of a tap: what it opens may yet go
     to the other side, and the reading with it; paneLeave checks after) */
  if(!paneDepth&&S.speaking&&S.speakB!=null&&!readingHere()) stopSpeaking();
  renderSide(false);
  /* two sides: the other one is drawn too, from its own place */
  if(LAYOUT==='split') withPane(otherSide(CUR), function(){ renderSide(true); });
  restoreField(field);
  hoistReaderSheet();
  renderNav();
  renderPlayer();
  ensureSky();
  placeSplit();
  ['A','B'].forEach(function(p){ var pe=paneEl(p), v=paneEl(p,2); if(pe&&v) updateBackFloat(pe,v); });
}
function renderSide(quiet){
  /* a change of text size or page reflows the chapter; keep the verse you were
     reading where it was on the screen instead of jumping */
  var anchor=(S.keepScroll&&S.reading!==null)?readingAnchor():null;
  S.inRender=true;
  try{ renderInner(quiet); } finally { S.inRender=false; }
  if(anchor) restoreAnchor(anchor);
}
/* The reading settings sit in their own layer over the page, not inside
   it: inside, they opened at the top of the chapter, out of sight, and the
   reading-aloud fade would have dimmed them too. */
function hoistReaderSheet(){
  try{
    var host=document.getElementById('rshost');
    if(!host&&document.body&&document.body.appendChild){
      host=document.createElement('div'); host.id='rshost'; document.body.appendChild(host); }
    var r=(LAYOUT==='split')?readerSide():null;
    var v=r?paneEl(r,2):view;
    if(host&&host.appendChild&&v&&v.querySelector){
      var was=host.querySelector&&host.querySelector('.rsheet');
      var keep=was?was.scrollTop:0;
      host.innerHTML='';
      var bk=v.querySelector('.rsback'), sh=v.querySelector('.rsheet');
      if(bk) host.appendChild(bk);
      if(sh){
        host.appendChild(sh);
        /* each tap redraws the sheet; without this it jumped back to its top */
        sh.scrollTop=keep;
        if(S.rsReveal){
          S.rsReveal=false;
          var og=sh.querySelector('.rsg.open');
          if(og){ var top=og.offsetTop-6;
            if(top<sh.scrollTop||og.offsetTop+og.offsetHeight>sh.scrollTop+sh.clientHeight)
              sh.scrollTop=Math.max(0,top); }
        }
      }
    }
  }catch(e){}
}
function renderInner(quiet){
  renderTop();
  if(!META||!BIBLE) return;   /* chrome only, until the scriptures arrive */
  var h;
  if(S.reading!==null) h=vRead();
  else if(S.book!==null) h=vBook();
  else {
    var VIEWS={library:vLibrary,study:vStudy,notes:vNotes,
               saves:vSaves,about:vProfile,search:vSearch};
    var fn=VIEWS[S.tab];
    if(!fn){ S.tab='library'; fn=vLibrary; }   /* never crash on an unknown tab */
    h=fn();
  }
  /* the top of the scale was 22px, which is not large text by any
     reasonable measure. It now reaches a size someone with poor sight can
     actually use. */
  var SIZES=['15px','17px','19px','23px','28px','34px'];
  if(phone&&phone.style) phone.style.setProperty('--rdsize',SIZES[S.textSize]||'17px');
  if(S.reading!==null){ S.lastRead={b:S.reading,c:S.ch}; savePlace(); }
  /* the side not being touched is drawn again only if what it shows changed:
     rebuilding it would lose its place and, in the reader, the lit verse */
  var same=!!quiet&&PANE_HTML[CUR]===h&&!S.readerOpts;
  PANE_HTML[CUR]=h;
  if(!same) view.innerHTML=h;
  var sig=[S.tab,S.book,S.reading,S.ch,S.btab,S.mode,S.cat,S.sheet,
           S.apocOpen,S.trackerOpen,S.wordsOpen,S.wsel,S.editing&&S.editing.id,
           S.sheetEdit&&S.sheetEdit.kind,S.bibleBook].join('|');
  if(sig!==S.viewSig&&!quiet&&S.pop) closePop();   /* a new page: the card was for the old one */
  if(!S.keepScroll && sig!==S.viewSig) scrollToTop(true);
  if(sig!==S.viewSig) navRecord();
  S.viewSig=sig;
  S.keepScroll=false;
  try{ var pb=paneEl(CUR); if(pb&&pb.setAttribute) pb.setAttribute('data-canback', navCanBack()?'1':'0'); }catch(e){}
  if(same){ if(S.reading!==null){ paintSpeaking(); placePop(false); } return; }
  if(S.reading!==null) placePop(false);
  if(S.tab==='search'&&S.book===null&&S.reading===null){
    var q=document.getElementById('q');
    if(q){
      q.addEventListener('input',inPane(function(){
        S.q=q.value; queueSearchRecord(S.q); runSearch();
        /* the list only belongs on an empty field, so redraw as it clears */
        var showing=!!document.querySelector('.hist');
        if((S.q.trim().length<2)!==showing){ S.keepScroll=true; render(); }
      }));
      /* not when it is the other side being redrawn: that would pull the
         keyboard up over whatever you were doing */
      if(!quiet) q.focus();
    }
    runSearch();
  }
  var wq=document.getElementById('wq');
  if(wq&&wq.addEventListener){
    wq.addEventListener('input',inPane(function(){
      S.wq=wq.value; S.keepScroll=true; render();
      var e=document.getElementById('wq'); if(e){ e.focus(); e.setSelectionRange(e.value.length,e.value.length); }
    }));
    wq.addEventListener('keydown',inPane(function(ev){
      if(ev.key==='Enter'){ ev.preventDefault(); lookWord(wq.value); render(); }
    }));
    if(!quiet&&S.wordsOpen&&!S.wsel) try{ wq.focus(); }catch(e){}
  }
  var nq=document.getElementById('nq');
  if(nq) nq.addEventListener('input',inPane(function(){S.q=nq.value;S.keepScroll=true;render();
    var e=document.getElementById('nq'); if(e){e.focus();e.setSelectionRange(e.value.length,e.value.length);}}));
  var sq=document.getElementById('sq');
  if(sq) sq.addEventListener('input',inPane(function(){S.saveQ=sq.value;S.keepScroll=true;render();
    var e=document.getElementById('sq'); if(e){e.focus();e.setSelectionRange(e.value.length,e.value.length);}}));
  var rf=document.getElementById('restorefile');
  if(rf) rf.addEventListener('change',function(){
    if(!rf.files||!rf.files[0]) return;
    importBackup(rf.files[0]).then(function(a){
      S.restoreErr=0;
      S.restoreMsg='Restored '+a.hl+' highlight'+(a.hl===1?'':'s')+', '+
        a.notes+' note'+(a.notes===1?'':'s')+' and '+a.sheets+' study entr'+
        (a.sheets===1?'y':'ies')+'.';
      render();
    }).catch(function(e){
      S.restoreErr=1; S.restoreMsg=(e&&e.message)||'That file could not be read.';
      render();
    });
  });
  var tb=document.getElementById('totop');
  if(tb&&!tb.innerHTML) tb.innerHTML=svg(I.up);
  applyTheme();
  watchScroll();
  watchSession();
  initPageSwipe();
  loadVoiceManifest();
  if(!S.orientTried){ S.orientTried=1; lockPortrait(); }
  if(!quiet) showTopBtn(scrolled()>420);
  var bf=document.getElementById('bookfile');
  if(bf) bf.addEventListener('change',function(){
    if(bf.files&&bf.files[0]) doImport(bf.files[0]);
  });
  var shq=document.getElementById('shq');
  if(shq) shq.addEventListener('input',inPane(function(){S.sheetQ=shq.value;S.keepScroll=true;render();
    var e=document.getElementById('shq'); if(e){e.focus();e.setSelectionRange(e.value.length,e.value.length);}}));
  if(S.reading!==null) paintSpeaking();
  /* Keep the note box usable across a redraw. Anything that re-renders while
     you are typing — a background book arriving, the keyboard resizing the
     view — replaces the textarea, and without this the caret is lost and it
     feels as though typing does nothing. */
  [['ntagadd','addtag'],['nlink','addlink'],['bmfolderin','bmnewfolder']].forEach(function(pr){
    var el=document.getElementById(pr[0]);
    if(el&&el.addEventListener) el.addEventListener('keydown',function(ev){
      if(ev.key==='Enter'){ ev.preventDefault();
        var btn=document.querySelector('[data-a="'+pr[1]+'"]'); if(btn) btn.click(); }
    });
  });
  /* everything typed in the editor is kept as it is typed, so a redraw, for
     whatever reason, can never throw away a title or a half-typed tag */
  var ntl=document.getElementById('ntitle');
  if(ntl&&ntl.addEventListener) ntl.addEventListener('input',inPane(function(){
    if(S.editing) S.editing.title=ntl.value; }));
  var nta=document.getElementById('ntagadd');
  if(nta&&nta.addEventListener) nta.addEventListener('input',function(){ S.tagDraft=nta.value; });
  var nli=document.getElementById('nlink');
  if(nli&&nli.addEventListener) nli.addEventListener('input',function(){ S.linkDraft=nli.value; });
  var nb=document.getElementById('nbody');
  if(nb&&nb.addEventListener){
    nb.addEventListener('input',inPane(function(){
      if(S.editing){ S.editing.body=nb.value; S.editCaret=nb.selectionStart; }
    }));
    /* the body only takes focus when the editor first opens, never over a
       field you are typing in */
    if(S.editing&&S.editFocusBody&&!quiet){
      S.editFocusBody=false;
      try{
        nb.focus();
        var at=(typeof S.editCaret==='number')?S.editCaret:(nb.value||'').length;
        if(nb.setSelectionRange) nb.setSelectionRange(at,at);
      }catch(e){}
    }
  }
}

document.addEventListener('keydown',function(ev){
  if(ev.key==='Escape'&&S.pop){ closePop(); return; }
  var t=ev.target;
  if(t&&(t.id==='prefin'||t.id==='pfolderin')&&ev.key==='Enter'){
    ev.preventDefault();
    var pb=document.querySelector(t.id==='prefin'?'.vpop [data-a="psaveref"]':'.vpop [data-a="pnewfolder"]');
    if(pb) pb.click();
    return; }
  if(!t||!t.classList||!t.classList.contains('gw')) return;
  if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); t.click(); }
});
/* every tap is handled on the side of the screen it landed on (inPane) */
document.addEventListener('click',inPane(function(ev){
  /* In full screen the first tap only brings the app back. It must run before
     anything else, or a tap would also open whatever it landed on. */
  if(S.immersive){
    immersiveOff();
    try{ ev.preventDefault(); ev.stopPropagation(); }catch(e){}
    return;
  }
  var t=ev.target.closest('[data-nav],[data-a],[data-mode],[data-era],[data-book],[data-sec],'+
    '[data-btab],[data-ch],[data-readch],[data-step],[data-vs],[data-color],[data-cf],'+
    '[data-ss],[data-goverse],[data-editnote],[data-delnote],[data-open],[data-rate],'+
    '[data-sheet],[data-ref],[data-edititem],[data-delitem],'+
    '[data-drawerbook],[data-drawerch],'+
    '[data-kvoice],[data-svoice],[data-read],[data-userbook],[data-delbook],'+
    '[data-cat],[data-apoc],[data-size],[data-markread],[data-vq],[data-page],'+
    '[data-mapera],[data-mapframe],[data-plate],[data-platezoom],[data-theme],'+
    '[data-scrollspeed],[data-rsgroup],[data-savestab],[data-notefilter],'+
    '[data-dellink],[data-deltag],[data-bmfolder],[data-bmf],[data-sfilter],'+
    '[data-delref],[data-snap],[data-snapdl],[data-search],[data-forget],'+
    '[data-filenote],[data-gw],[data-pick],[data-pcolor],[data-word],[data-strong],'+
    '[data-pdelref],[data-pfolder],[data-pfilenote],'+
    '[data-pwopen],[data-pwpick],[data-pwbuy],[data-pwtip],'+
    '[data-precept],[data-opennote]');
  /* the verse card: a tap anywhere outside it puts it away. A tap on another
     verse moves it there; on the same verse, or elsewhere in the text, that
     tap does nothing more than close it */
  if(S.pop&&!(ev.target&&ev.target.closest&&ev.target.closest('.vpop'))){
    var popWas=S.pop, tv=(t&&t.dataset)?t.dataset.vs:null;
    var inText=!!(ev.target&&ev.target.closest&&ev.target.closest('.rd'));
    closePop();
    if(tv&&tv!==popWas&&/(^|\s)v(\s|$)/.test(t.className||'')){ openPop(tv); return; }
    if(tv===popWas||inText) return;
  }
  if(!t) return;
  var d=t.dataset;

  /* --- Study and the store --- */
  if(d.a==='addbook'&&!hasStudy()&&S.shelf.length>=FREE_BOOKS){
    try{ ev.preventDefault(); }catch(e){}
    openPaywall('books'); return; }
  if(d.pwopen){ openPaywall(d.pwopen); return; }
  if(d.a==='pwopen'){ openPaywall('study'); return; }
  if(d.pwpick){ PAY.choice=d.pwpick; PAY.msg=''; drawPaywall(); return; }
  if(d.pwbuy){ var pb2=d.pwbuy.split('|'); payBuy(pb2[0],pb2[1]); return; }
  if(d.pwtip){ payLoadOfferings().then(function(){ payBuy('tips', d.pwtip); }); return; }
  if(d.a==='pwrestore'||d.a==='pwrestore2'){ payRestore(); return; }
  if(d.a==='pwredeem'){ payRedeem(); return; }
  if(d.a==='pwwhy'){ PAY.why=!PAY.why; drawPaywall(); return; }
  if(d.a==='pwclose'){ closePaywall(); return; }
  if((d.a==='addtag'||d.a==='addlink')&&!gate('tags')) return;
  if((d.bmfolder||d.a==='bmnewfolder'||d.pfolder||d.a==='pnewfolder')&&!gate('folders')) return;
  if(d.plate&&d.plate!==PLATES[0].id&&!gate('atlas')) return;
  if(d.sheet&&!gate('sheets')) return;

  /* --- the verse card --- */
  if(d.vs&&/(^|\s)v(\s|$)/.test(t.className||'')&&t.closest&&t.closest('.rd')){
    openPop(d.vs); return; }
  if(d.pcolor){
    if(!S.pop) return;
    setColor(S.pop,d.pcolor);
    announce(S.hl[S.pop]?'Highlighted.':'Highlight removed.');
    S.keepScroll=true; render(); return; }
  if(d.a==='psave'){
    if(!S.pop) return;
    if(S.marks[S.pop]) delete S.marks[S.pop];
    else { var pq=parseKey(S.pop); S.marks[S.pop]={ts:Date.now(),f:defaultFolder(pq.b,pq.c)}; }
    Store.set('strata:bookmarks',S.marks);
    announce(S.marks[S.pop]?'Saved.':'Removed from Saves.');
    S.keepScroll=true; render(); return; }
  if(d.a==='pcopy'){
    if(!S.pop) return;
    var pk=S.pop, pc=parseKey(pk);
    copyVerse(pc.b,pc.c,pc.v).then(function(ok){
      if(!ok||S.pop!==pk) return;
      S.popCopied=pk; placePop(false); announce('Copied.');
      setTimeout(function(){ if(S.popCopied===pk){ S.popCopied=null; if(S.pop===pk) placePop(false); } },1800);
    });
    return; }
  if(d.a==='pshare'){
    if(!S.pop) return;
    var ps=parseKey(S.pop);
    if(navigator.share) shareVerse(ps.b,ps.c,ps.v);
    else shareVerseCard(ps.b,ps.c,ps.v).then(function(r){ announce((r&&r.msg)||'Image ready.'); });
    return; }
  if(d.a==='pimage'){
    if(!S.pop||S.popImaging) return;
    var pik=S.pop, pi=parseKey(pik);
    S.popImaging=pik; placePop(false);
    shareVerseCard(pi.b,pi.c,pi.v).then(function(r){
      if(S.pop!==pik) return;
      S.popImaging=null; popSay((r&&r.msg)||'Image ready.'); placePop(false);
    });
    return; }
  if(d.a==='pmore'){
    if(!S.pop) return;
    S.popMore=(S.popMore===S.pop)?null:S.pop;
    if(!S.popMore) S.popFiling=null;
    placePop(false); return; }
  if(d.a==='paddref'){
    if(!S.pop) return;
    S.popRefAdding=S.pop; S.popMsg=''; placePop(false);
    var pin=document.getElementById('prefin'); if(pin) try{ pin.focus(); }catch(e){}
    return; }
  if(d.a==='pcancelref'){ S.popRefAdding=null; S.popMsg=''; placePop(false); return; }
  if(d.a==='psaveref'){
    if(!S.pop) return;
    var pr=parseKey(S.pop), prin=document.getElementById('prefin');
    var prr=addUserRef(pr.b,pr.c,pr.v,prin?prin.value:'');
    if(prr.ok){ S.popRefAdding=null; }
    popSay(prr.msg); placePop(false); return; }
  if(d.pdelref){
    if(!S.pop) return;
    var pdr=parseKey(S.pop);
    removeUserRef(pdr.b,pdr.c,pdr.v,d.pdelref);
    popSay('Removed '+d.pdelref+'.'); placePop(false); return; }
  if(d.pfolder||d.a==='pnewfolder'){
    if(!S.pop||!S.marks[S.pop]) return;
    var pfn=d.pfolder;
    if(d.a==='pnewfolder'){ var pfi=document.getElementById('pfolderin'); pfn=(pfi&&pfi.value||'').trim(); }
    if(!pfn) return;
    var pmi=markInfo(S.pop);
    S.marks[S.pop]={ts:pmi.ts||Date.now(),f:pfn.slice(0,32)};
    Store.set('strata:bookmarks',S.marks);
    popSay('Moved to '+pfn+'.'); placePop(false); return; }
  if(d.a==='pfile'){ if(!S.pop) return; S.popFiling=S.pop; S.popMsg=''; placePop(false); return; }
  if(d.pfilenote){
    if(!S.pop) return;
    var pfr=appendVerseToNote(d.pfilenote, S.pop);
    if(pfr.ok) S.popFiling=null;
    popSay(pfr.msg); placePop(false); return; }
  if(d.plate&&S.pop){ closePop(); }
  if(d.a==='pnote'){
    var pn=S.pop; closePop(); if(!pn) return;
    S.sheet=pn; d={a:'notefor'};           /* then exactly as Note in the sheet */
  }

  /* --- bible browser + drawer --- */
  if(d.drawerbook){ S.drawerBook=+d.drawerbook; buildTOC(); return; }
  if(d.a==='drawerback'){ S.drawerBook=null; buildTOC(); return; }
  if(d.drawerch){
    stopSpeaking(); S.jumpRef=null;
    S.book=S.drawerBook; S.reading=S.drawerBook; S.ch=+d.drawerch;
    S.drawerBook=null; openDrawer(false); render(); return; }
  if(d.a==='showabout'){
    openDrawer(false); S.drawerBook=null;
    S.tab='about'; S.book=null; S.reading=null; render(); return; }

  if(d.a==='togglerotate'){
    S.lockRotate=!S.lockRotate; Store.set('strata:lockrotate',S.lockRotate);
    if(S.lockRotate) lockPortrait();
    else { try{ if(screen&&screen.orientation&&screen.orientation.unlock)
                 screen.orientation.unlock(); }catch(e){} }
    announce(S.lockRotate?'The reader will stay upright.':'The screen rotates freely.');
    render(); return; }
  if(d.a==='toggleauto-backup'){
    S.autoBackup=!S.autoBackup; Store.set('strata:autobackup',S.autoBackup);
    if(S.autoBackup) takeSnapshot('manual').then(function(){ render(); });
    render(); return; }
  if(d.snap){
    var got=restoreSnapshot(d.snap);
    S.restoreErr=got?0:1;
    S.restoreMsg=got
      ? ('Restored '+got.hl+' highlight'+(got.hl===1?'':'s')+', '+got.notes+
         ' note'+(got.notes===1?'':'s')+' and '+(got.refs||0)+
         ' reference'+((got.refs||0)===1?'':'s')+'.')
      : 'That restore point could not be read.';
    render(); return; }
  if(d.snapdl){
    var sn=S.snaps.filter(function(x){return x.id===d.snapdl;})[0];
    if(sn) try{
      saveFile('sixteen-eleven-restore-point-'+new Date(sn.when).toISOString().slice(0,10)+'.json',
        new Blob([JSON.stringify(sn.payload,null,1)],{type:'application/json'}));
    }catch(e){}
    return; }
  if(d.a==='exportdata'){
    var ok=exportData();
    S.restoreErr=ok?0:1;
    S.restoreMsg=ok?'Backup downloaded.':'This browser blocked the download.';
    render(); return; }
  /* --- library covers --- */
  if(d.cat==='words'){ S.wordsOpen=true; S.wsel=null; S.wq=''; render(); return; }
  if(d.cat){
    S.cat=d.cat; S.apocOpen=false;
    S.trackerOpen=(d.cat==='tracker');
    S.atlasOpen=(d.cat==='atlas');
    render(); return; }
  if(d.apoc){ S.apocOpen=true; render(); return; }
  if(d.a==='closeapoc'){ S.apocOpen=false; render(); return; }
  if(d.a==='closemine'){ S.mode='shelf'; render(); return; }
  if(d.a==='closeeras'){ S.mode='shelf'; S.openEra=null; render(); return; }
  if(d.a==='opentracker'){ S.trackerOpen=true; render(); return; }
  if(d.a==='openatlas'){ S.atlasOpen=true; S.mapEra=null; render(); return; }
  /* --- word study --- */
  if(d.a==='openwords'){ S.wordsOpen=true; S.wsel=null; S.wq=''; render(); return; }
  if(d.a==='closewords'){ S.wordsOpen=false; render(); return; }
  if(d.word){ closeSheet(); S.tab='library'; S.book=null; S.reading=null;
    lookWord(d.word); render(); return; }
  if(d.strong){ S.wopen=(S.wopen===d.strong?null:d.strong); S.keepScroll=true; render(); return; }
  if(d.a==='wmore'){ S.wmore=true; S.keepScroll=true; render(); return; }
  if(d.a==='closeatlas'){ S.atlasOpen=false; S.mapEra=null; S.plate=null; render(); return; }
  if(d.mapera){
    S.atlasOpen=true; S.mapEra=d.mapera; S.mapFrame=null;
    S.tab='library'; S.book=null; S.reading=null;
    closeSheet(); render(); return; }
  if(d.a==='closemap'){ S.mapEra=null; render(); return; }
  if(d.plate){ S.plateZoom=1; S.atlasOpen=true; S.plate=d.plate; S.tab='library';
    S.book=null; S.reading=null; closeSheet(); render(); return; }
  if(d.a==='closeplate'){ S.plate=null; render(); return; }
  if(d.platezoom){
    var z=S.plateZoom||1;
    if(d.platezoom==='in')  S.plateZoom=Math.min(6, z+1);
    else if(d.platezoom==='out') S.plateZoom=Math.max(1, z-1);
    else S.plateZoom=1;
    S.keepScroll=true; render(); return; }
  if(d.mapframe){ S.mapFrame=d.mapframe; S.keepScroll=true; render(); return; }
  if(d.a==='closetracker'){ S.trackerOpen=false; render(); return; }

  /* --- my books --- */
  if(d.userbook){
    var uid=d.userbook;
    openUserBook(uid, function(){
      var b=BOOKS.filter(function(x){return x.uid===uid;})[0];
      if(!b) return;
      stopSpeaking(); S.jumpRef=null;
      S.book=b.i; S.reading=b.i; S.ch=1; render();
    });
    return; }
  if(d.delbook){
    var did=d.delbook;
    Shelf.del(did).then(loadShelf).then(function(){
      if(S.openBook&&S.openBook.id===did) S.openBook=null;
      render();
    });
    return; }
  if(d.a==='clearimport'){ S.importing=null; render(); return; }
  if(d.a==='totop'){ scrollToTop(false); return; }

  /* --- study sheets --- */
  if(d.sheet){ S.sheet=d.sheet; S.sheetQ=''; render(); return; }
  if(d.a==='closesheetv'){ S.sheet=null; S.sheetQ=''; S.sheetMsg=''; render(); return; }
  if(d.a==='newsheet'){
    S.sheetEdit={kind:'sheet',id:null,name:'',desc:''}; render(); return; }
  if(d.a==='savesheet'){
    var nm=(document.getElementById('shname')||{}).value||'';
    var ds=(document.getElementById('shdesc')||{}).value||'';
    if(!nm.trim()){ S.sheetEdit=null; render(); return; }
    var ed=S.sheetEdit;
    if(ed.id){ var t=findSheet(ed.id); if(t){ t.name=nm; t.desc=ds; } }
    else { S.sheets.push({id:'s'+Date.now(),name:nm,desc:ds,items:[]}); }
    saveSheets(); S.sheetEdit=null; render(); return; }
  if(d.a==='cancelsheet'||d.a==='cancelitem'){ S.sheetEdit=null; render(); return; }
  if(d.a==='delsheet'){
    S.sheets=S.sheets.filter(function(x){return x.id!==S.sheet;});
    saveSheets(); S.sheet=null; render(); return; }
  if(d.a==='newitem'){
    S.sheetEdit={kind:'item',id:null,q:'',refs:''}; render(); return; }
  if(d.precept){
    var shp=findSheet(S.sheet);
    var itp=shp&&shp.items.filter(function(x){return x.id===d.precept;})[0];
    if(itp){ S.sheetMsg=savePreceptToNotes(shp.id,itp).msg; announce(S.sheetMsg); }
    S.keepScroll=true; render(); return; }
  if(d.opennote){
    var nn=S.notes.filter(function(x){return x.src===d.opennote;})[0];
    if(nn){ S.tab='notes'; S.book=null; S.reading=null; S.q=''; S.editing=null; render(); }
    return; }
  if(d.edititem){
    var sh0=findSheet(S.sheet);
    var it0=sh0&&sh0.items.filter(function(x){return x.id===d.edititem;})[0];
    if(it0) S.sheetEdit={kind:'item',id:it0.id,q:it0.q,refs:it0.refs};
    render(); return; }
  if(d.delitem){
    var sh1=findSheet(S.sheet);
    if(sh1) sh1.items=sh1.items.filter(function(x){return x.id!==d.delitem;});
    saveSheets(); render(); return; }
  if(d.a==='saveitem'){
    var q0=(document.getElementById('itq')||{}).value||'';
    var r0=(document.getElementById('itr')||{}).value||'';
    var sh2=findSheet(S.sheet);
    if(!q0.trim()||!sh2){ S.sheetEdit=null; render(); return; }
    var ed2=S.sheetEdit;
    if(ed2.id){
      sh2.items.forEach(function(x){ if(x.id===ed2.id){ x.q=q0; x.refs=r0; } });
    } else {
      var maxn=0; sh2.items.forEach(function(x){ if(+x.n>maxn) maxn=+x.n; });
      sh2.items.push({id:'i'+Date.now(),n:maxn+1,q:q0,refs:r0});
    }
    saveSheets(); S.sheetEdit=null; render(); return; }
  if(d.ref){
    var r=parseKey(d.ref);
    stopSpeaking();
    S.book=r.b; S.reading=r.b; S.ch=r.c;
    S.jumpRef={key:d.ref, end:+(d.refend||0)};
    render();
    setTimeout(function(){
      var el=document.querySelector('[data-vs="'+d.ref+'"]');
      if(el) bringIntoView(el,'center',false);
    },40);
    return; }

  /* --- read aloud --- */
  if(d.a==='speak'){ speakFrom(startVerse()); return; }
  if(d.a==='pause'){ Speech.pause(); holdPlace(); renderSpeakBar(); paintSpeaking(); return; }
  if(d.a==='resume'){ speakFrom(startVerse()); return; }
  if(d.a==='stopspeak'){ stopSpeaking(); return; }
  if(d.a==='readeropts'){
    S.readerOpts=!S.readerOpts;
    S.speakOpts=S.readerOpts; S.voicePicker=false;
    S.keepScroll=true; render(); return; }
  if(d.a==='speakopts'){ S.speakOpts=!S.speakOpts; S.voicePicker=false; renderSpeakBar(); return; }
  if(d.a==='voicepicker'){ S.voicePicker=!S.voicePicker; S.speakOpts=false; renderSpeakBar(); return; }
  if(d.a==='loadkokoro'){ enableKokoro(S.speaking); renderSpeakBar(); return; }
  if(d.kvoice){
    S.kokoroVoice=d.kvoice; S.voiceMode='kokoro'; S.voiceNotice=''; saveVoice();
    if(!Kokoro.ready()){ enableKokoro(S.speaking); renderSpeakBar(); return; }
    if(S.speaking){ speakFrom(curVerse()); }
    renderSpeakBar(); return; }
  if(d.svoice){
    S.voiceMode='system'; applySysVoice(d.svoice); S.voiceNotice=''; saveVoice();
    if(S.speaking){ speakFrom(curVerse()); }
    renderSpeakBar(); return; }
  if(d.a==='togglefollow'){ S.follow=!S.follow; renderSpeakBar(); return; }
  if(d.a==='toggleauto'){ S.autoNext=!S.autoNext; saveVoice(); renderSpeakBar(); return; }
  if(d.vq){
    if(S.voiceQuality===d.vq){ renderSpeakBar(); return; }
    S.voiceQuality=d.vq; saveVoice();
    /* the precision is baked in at load, so the model has to come back */
    var wasOn=S.speaking, at=curVerse();
    stopSpeaking(); Kokoro._reset();
    S.voiceNotice='Reloading the voice at the new quality\u2026';
    renderSpeakBar();
    enableKokoro(false);
    if(wasOn) setTimeout(function(){ if(Kokoro.ready()) speakFrom(at); },400);
    return; }
  if(d.markread){ markRead(S.reading,+d.markread); render(); return; }
  if(d.a==='nextunread'){
    var nu=nextUnread(S.reading,S.ch);
    if(nu){ stopSpeaking(); S.book=nu.b; S.reading=nu.b; S.ch=nu.c; S.tab='bible'; render(); }
    return; }
  if(d.size!==undefined&&d.size!==''){S.keepScroll=true; S.textSize=+d.size; savePlace(); render(); return; }
  if(d.page){S.keepScroll=true; S.page=d.page; savePlace(); render(); return; }
  if(d.theme){S.keepScroll=true; setTheme(d.theme); announce(d.theme==='auto'
      ?'Appearance follows your device.':'Appearance set to '+d.theme+'.'); return; }
  if(d.a==='togglered'){ S.redLetters=(S.redLetters===false); savePlace(); render(); return; }
  if(d.read){
    if(S.readMode===d.read){ renderSpeakBar(); return; }
    var atV=curVerse();
    S.readMode=d.read; saveVoice();
    if(S.speaking) speakFrom(atV);
    renderSpeakBar(); return; }
  if(d.rate){S.keepScroll=true;
    var wasOn=S.speaking&&!Speech.isPaused(), at=curVerse();
    Speech.setRate(parseFloat(d.rate)); saveVoice();
    if(wasOn) speakFrom(at);
    renderSpeakBar(); return; }

  /* --- highlighting --- */
  if(d.gw!==undefined&&d.gw!==''){
    var vhost=t.closest?t.closest('[data-vs]'):null;
    openWordSheet(+d.gw, vhost?vhost.getAttribute('data-vs'):null, t.textContent||'');
    return; }
  /* anywhere else a verse is offered (a word's card), it opens the verse card */
  if(d.vs){ closeSheet(); openPop(d.vs); return; }
  if(d.color){
    var k=S.sheet; if(!k) return;
    setColor(k,d.color); closeSheet(); render(); return;}
  if(d.a==='unhl'){ if(S.sheet){delete S.hl[S.sheet];saveHl();} closeSheet(); render(); return;}
  if(d.a==='reloadapp'){
    if(navigator.serviceWorker&&navigator.serviceWorker.getRegistration){
      navigator.serviceWorker.getRegistration().then(function(reg){
        if(reg&&reg.waiting) reg.waiting.postMessage('skipWaiting');
        location.reload();
      }).catch(function(){ location.reload(); });
    } else location.reload();
    return; }
  if(d.a==='dismissupd'){
    var ub=document.getElementById('updatebar'); if(ub) ub.innerHTML='';
    return; }
  if(d.a==='addref'){ S.refAdding=true; S.refMsg=''; if(S.sheet) openSheet(S.sheet); return; }
  if(d.a==='saveref'){
    if(!S.sheet) return;
    var q=parseKey(S.sheet);
    var el=document.getElementById('refin');
    var res=addUserRef(q.b,q.c,q.v,el?el.value:S.refDraft);
    S.refMsg=res.msg;
    if(res.ok){ S.refAdding=false; S.refDraft=''; }
    openSheet(S.sheet); render(); return; }
  if(d.delref){
    if(!S.sheet) return;
    var w=parseKey(S.sheet);
    removeUserRef(w.b,w.c,w.v,d.delref);
    openSheet(S.sheet); return; }
  if(d.a==='cardverse'){
    if(!S.sheet) return;
    var qc=parseKey(S.sheet);
    S.fileMsg='Making the image\u2026'; openSheet(S.sheet);
    shareVerseCard(qc.b,qc.c,qc.v).then(function(r){
      S.fileMsg=r.msg; announce(r.msg||'Image ready.');
      if(S.sheet) openSheet(S.sheet);
      render();
    });
    return; }
  if(d.a==='copyverse'||d.a==='shareverse'){
    if(!S.sheet) return;
    var q=parseKey(S.sheet);
    (d.a==='shareverse'?shareVerse:copyVerse)(q.b,q.c,q.v).then(function(ok){
      S.copied=!!ok;
      if(S.sheet) openSheet(S.sheet);
      if(ok) setTimeout(function(){ S.copied=false;
        if(S.sheet) openSheet(S.sheet); },1800);
    });
    return; }

  /* --- notes --- */
  if(d.a==='filenote'){ S.filing=true; S.fileMsg=''; if(S.sheet) openSheet(S.sheet); return; }
  if(d.a==='cancelfile'){ S.filing=false; S.fileMsg=''; if(S.sheet) openSheet(S.sheet); return; }
  if(d.filenote){
    if(!S.sheet) return;
    var res=appendVerseToNote(d.filenote, S.sheet);
    S.fileMsg=res.msg; announce(res.msg);
    if(res.ok) S.filing=false;
    openSheet(S.sheet); render(); return; }
  if(d.a==='notefor'&&LAYOUT==='split'&&S.sheet&&isVerseKey(S.sheet)&&
     sideDest(otherSide(CUR))==='notes'){
    /* two sides, and the other is Notes: the note opens there, in the full
       editor, and the chapter stays where it is */
    var np=parseKey(S.sheet), nx=noteFor(np);
    S.tagDraft=''; S.linkDraft=''; S.linkMsg='';
    S.editing=nx?{id:nx.id,b:nx.b,c:nx.c,v:nx.v,body:nx.body,title:nx.title||'',
        tags:(nx.tags||[]).slice(),links:(nx.links||[]).map(function(l){return l.slice();}),
        cat:nx.cat||'',ts:nx.ts}
      :{id:null,b:np.b,c:np.c,v:np.v,body:'',title:'',tags:[],links:[]};
    S.editFocusBody=true;
    closeSheet(); S.tab='notes'; S.book=null; S.reading=null; render(); return; }
  if(d.a==='notefor'){
    S.noteDraftOpen=true; S.fileMsg='';
    if(S.sheet) openSheet(S.sheet);
    setTimeout(function(){
      var t=document.getElementById('quicknote');
      if(t&&t.focus){
        t.focus();
        try{ if(t.setSelectionRange) t.setSelectionRange((t.value||'').length,(t.value||'').length); }catch(e){}
      }
    },30);
    return; }
  if(d.a==='cancelquick'){ S.noteDraftOpen=false; if(S.sheet) openSheet(S.sheet); return; }
  if(d.a==='savequick'){
    if(!S.sheet) return;
    var el=document.getElementById('quicknote');
    var body=el?String(el.value||'').trim():'';
    var q=parseKey(S.sheet), ex=noteFor(q);
    if(!body){
      if(ex){ S.notes=S.notes.filter(function(n){return n.id!==ex.id;}); saveNotes(); }
    } else if(ex){
      ex.body=body; ex.ts=Date.now(); saveNotes();
    } else {
      S.notes.push(migrateNote({id:'n'+Date.now()+Math.floor(Math.random()*999),
        b:q.b,c:q.c,v:q.v,body:body,ts:Date.now()}));
      saveNotes();
    }
    S.noteDraftOpen=false; S.fileMsg=body?'Saved.':'Note removed.';
    announce(S.fileMsg);
    openSheet(S.sheet); render(); return; }
  if(d.a==='delquick'){
    if(!S.sheet) return;
    var w=parseKey(S.sheet), had=noteFor(w);
    if(had){ S.notes=S.notes.filter(function(n){return n.id!==had.id;}); saveNotes(); }
    S.noteDraftOpen=false; S.fileMsg='Note removed.';
    openSheet(S.sheet); render(); return; }
  if(d.a==='notefor_old'){
    var p=parseKey(S.sheet), ex=noteFor(p);
    S.editing=ex?{id:ex.id,b:ex.b,c:ex.c,v:ex.v,body:ex.body}
                :{id:null,b:p.b,c:p.c,v:p.v,body:''};
    closeSheet(); S.tab='notes'; S.book=null; S.reading=null; render(); return;}
  if(d.a==='copynotes'){
    copyNotes().then(function(ok){
      S.notesCopied=!!ok;
      S.notesMsg=ok?'':'This browser would not let the app copy.';
      render();
      if(ok) setTimeout(function(){ S.notesCopied=false; render(); },1800);
    });
    return; }
  if(d.a==='savenotes'){
    var ok=downloadNotes();
    S.notesMsg=ok?'Saved as a text file.':'This browser blocked the download.';
    render(); return; }
  if(d.a==='newnote'){S.editFocusBody=true;
    S.editing={id:null,b:null,c:null,v:null,body:''}; render(); return;}
  if(d.a==='notetag'){
    if(S.editing){
      S.editing.tags=(S.editing.tags||[]);
    }
    return; }
  if(d.notefilter){ S.noteFilter=d.notefilter; S.keepScroll=true; render(); return; }
  if(d.editnote){S.editFocusBody=true;
    var n=S.notes.filter(function(x){return x.id===d.editnote;})[0];
    /* Everything the note holds comes into the editor. It used to copy only
       the verse and body, so the title, tags and linked verses opened blank
       and Done saved them blank: opening a note erased them. */
    if(n){ S.tagDraft=''; S.linkDraft=''; S.linkMsg='';
      S.editing={id:n.id,b:n.b,c:n.c,v:n.v,body:n.body,title:n.title||'',
        tags:(n.tags||[]).slice(),links:(n.links||[]).map(function(l){return l.slice();}),
        cat:n.cat||'',ts:n.ts};
      render(); }
    return;}
  if(d.delnote){
    S.notes=S.notes.filter(function(x){return x.id!==d.delnote;});
    saveNotes(); render(); return;}
  if(d.open){
    var o=S.notes.filter(function(x){return x.id===d.open;})[0];
    if(o&&o.b!=null){S.book=o.b;S.reading=o.b;S.ch=o.c;S.tab='notes';render();}
    return;}
  if(d.a==='addtag'||d.deltag){
    if(!S.editing) return;
    /* keep whatever is being typed across the redraw */
    var tE=document.getElementById('ntitle'); if(tE) S.editing.title=tE.value;
    var bE=document.getElementById('nbody'); if(bE) S.editing.body=bE.value;
    S.editing.tags=S.editing.tags||[];
    if(d.deltag){ S.editing.tags.splice(+d.deltag,1); }
    else {
      var ta=document.getElementById('ntagadd');
      var nt=(ta&&ta.value||S.tagDraft||'').trim();
      if(nt&&S.editing.tags.indexOf(nt)===-1) S.editing.tags.push(nt);
      S.tagDraft='';
    }
    migrateNote(S.editing); S.keepScroll=true; render(); return; }
  if(d.a==='addlink'){
    if(!S.editing) return;
    var li=document.getElementById('nlink');
    var raw=li?li.value:S.linkDraft;
    /* keep what is being typed elsewhere in the form across the redraw */
    var tEl=document.getElementById('ntitle'); if(tEl) S.editing.title=tEl.value;
    var gEl=document.getElementById('ntags'); if(gEl) S.editing.tags=String(gEl.value).split(',');
    var bEl=document.getElementById('nbody'); if(bEl) S.editing.body=bEl.value;
    var r=addNoteLink(S.editing, raw);
    S.linkMsg=r.msg; S.linkDraft=r.ok?'':raw;
    migrateNote(S.editing); S.keepScroll=true; render(); return; }
  if(d.dellink){
    if(!S.editing||!S.editing.links) return;
    S.editing.links.splice(+d.dellink,1);
    S.linkMsg=''; S.keepScroll=true; render(); return; }
  if(d.a==='savenote'){
    var e=S.editing; if(!e) return;
    var body=(document.getElementById('nbody')||{}).value;
    if(body!==undefined) e.body=body;
    var ti=(document.getElementById('ntitle')||{}).value;
    if(ti!==undefined) e.title=ti;
    /* tags are kept by Add tag and the x on each tag; the old comma field is
       gone, and reading it could only ever wipe them */
    if(!(e.body||'').trim()){S.editing=null;render();return;}
    if(e.id){
      var found=false;
      S.notes.forEach(function(x){
        if(x.id===e.id){
          found=true;
          x.body=e.body; x.title=e.title||''; x.tags=e.tags||[];
          x.links=e.links||[]; x.ts=Date.now();
          migrateNote(x);
        }});
      /* An edit whose note is no longer in the list would otherwise vanish on
         save. Keep it instead: losing what someone wrote is the worst outcome
         available here. */
      if(!found) S.notes.push(migrateNote(e));
    } else {
      S.notes.push(migrateNote({id:'n'+Date.now()+Math.floor(Math.random()*999),
        b:e.b,c:e.c,v:e.v,body:e.body,title:e.title||'',tags:e.tags||[],
        links:e.links||[], ts:Date.now()}));
    }
    saveNotes(); S.editing=null; render(); return;}
  if(d.a==='cancelnote'){S.editing=null;S.linkDraft='';S.linkMsg='';render();return;}

  /* --- saves --- */
  if(d.cf){S.saveColor=d.cf;S.tab='saves';S.book=null;S.reading=null;render();return;}
  if(d.ss){S.saveSort=d.ss;render();return;}
  if(d.goverse){
    if(S.tab==='search'&&S.q) recordSearch(S.q);
    closeSheet();
    var g=parseKey(d.goverse);
    S.book=g.b;S.reading=g.b;S.ch=g.c;render();
    setTimeout(function(){
      var el=document.querySelector('[data-vs="'+d.goverse+'"]');
      if(el){bringIntoView(el,'center',false);el.classList.add('sel');
        setTimeout(function(){el.classList.remove('sel');},1600);}
    },40);
    return;}

  if(d.nav){ goTab(d.nav); return; }
  /* two sides: an icon on the bar's left or right half, and the swap */
  if(d.pick){ pickSide(d.pick.charAt(0), d.pick.slice(2)); return; }
  if(d.a==='swappanes'){ swapSides(); return; }
  if(d.rsgroup){ S.rsOpen=(S.rsOpen===d.rsgroup?null:d.rsgroup); S.rsReveal=true;
    S.keepScroll=true; render(); return; }
  if(d.a==='resumelisten'){
    var rb=+d.book, rc=+d.goch||1;
    S.tab='bible'; S.book=rb; S.reading=rb; S.ch=rc; savePlace(); render();
    fetchBook(rb).catch(function(){}).then(function(){
      render(); if(canRead()) speakFrom(startVerse());
    });
    return; }
  if(d.a==='prevverse'){ if(curVerse()>1) speakFrom(curVerse()-1); return; }
  if(d.a==='nextverse'){
    if(curVerse()<lastVerse()) speakFrom(curVerse()+1); else stopSpeaking();
    return; }
  if(d.bmfolder||d.a==='bmnewfolder'){
    if(!S.sheet||!S.marks[S.sheet]) return;
    var fname=d.bmfolder;
    if(d.a==='bmnewfolder'){ var fi=document.getElementById('bmfolderin');
      fname=(fi&&fi.value||'').trim(); }
    if(!fname) return;
    var mi2=markInfo(S.sheet);
    S.marks[S.sheet]={ts:mi2.ts||Date.now(),f:fname.slice(0,32)};
    Store.set('strata:bookmarks',S.marks);
    announce('Moved to '+fname+'.');
    openSheet(S.sheet); return; }
  if(d.bmf){ S.bmFolder=d.bmf; S.keepScroll=true; render(); return; }
  if(d.a==='bookmark'){
    if(!S.sheet) return;
    if(S.marks[S.sheet]) delete S.marks[S.sheet];
    else { var bq=parseKey(S.sheet);
      S.marks[S.sheet]={ts:Date.now(),f:defaultFolder(bq.b,bq.c)}; }
    Store.set('strata:bookmarks',S.marks);
    announce(S.marks[S.sheet]?'Bookmarked.':'Bookmark removed.');
    openSheet(S.sheet); render(); return; }
  if(d.savestab){ S.savesTab=d.savestab; S.keepScroll=true; render(); return; }
  if(d.a==='togglefocus'){
    S.focus=!(S.focus!==false); Store.set('strata:focus',S.focus);
    renderSpeakBar(); S.keepScroll=true; render(); return; }
  if(d.sfilter){ S.searchFilter=d.sfilter; S.keepScroll=true; render(); runSearch(); return; }
  if(d.a==='clearq'){ S.q=''; render(); runSearch();
    var qi=document.getElementById('q'); if(qi&&qi.focus) qi.focus(); return; }
  if(d.a==='togglewords'){
    S.wordMeanings=!(S.wordMeanings!==false); Store.set('strata:words',S.wordMeanings);
    announce(S.wordMeanings?'Old words are underlined.':'Word underlines are off.');
    S.keepScroll=true; render(); return; }
  if(d.a==='immersive'){ immersiveOn(); return; }
  if(d.scrollspeed){
    S.scrollSpeed=+d.scrollspeed; Store.set('strata:scrollspeed',S.scrollSpeed);
    if(S.immersive) startAutoScroll();
    S.keepScroll=true; render(); return; }
  if(d.a==='navback'){ if(!navBack()) closeSheet(); return; }
  if(d.a==='navfwd'){ navForward(); return; }
  if(d.a==='search'){S.tab='search';S.book=null;S.reading=null;render();return;}
  if(d.search){
    S.q=d.search; recordSearch(S.q);
    S.tab='search'; S.book=null; S.reading=null; render(); return; }
  if(d.forget){ forgetSearch(d.forget); S.keepScroll=true; render(); return; }
  if(d.a==='clearhist'){
    S.searchHist=[]; Store.set('strata:searches',[]);
    S.keepScroll=true; render(); return; }
  if(d.a==='settings'){
    if(S.tab==='about'){          /* tap again to come back out */
      if(!navBack()){ S.tab='library'; S.book=null; S.reading=null; render(); }
      return;
    }
    leaveReading();
    S.tab='about'; S.book=null; S.reading=null; S.apocOpen=false; S.trackerOpen=false;
    loadSnapshots().then(render);
    render(); return; }
  if(d.a==='toc'){S.drawerBook=null;buildTOC();openDrawer(true);return;}
  if(d.mode){S.mode=d.mode;S.openEra=null;render();return;}
  if(d.era){S.openEra=(S.openEra===d.era?null:d.era);render();return;}
  if(d.sec){S.tab='library';S.mode='shelf';render();
    var el=[].slice.call(document.querySelectorAll('.h2')).filter(function(x){
      return x.textContent===SEC[d.sec].name;})[0];
    if(el) bringIntoView(el,'start',false);return;}
  if(d.book!==undefined&&d.book!==''){
    openDrawer(false);
    S.book=+d.book; S.ch=d.goch?+d.goch:1;
    if(d.goch){S.reading=S.book;} else {S.reading=null;S.btab='overview';}
    render();return;}
  if(d.btab){S.btab=d.btab;render();return;}
  if(d.ch){S.ch=+d.ch;render();return;}
  if(d.readch){stopSpeaking();S.reading=S.book;S.ch=+d.readch;render();return;}
  if(d.step){
    stopSpeaking();S.jumpRef=null;
    /* moving forward is the honest signal that you finished this chapter */
    if(+d.step>0&&S.reading!==null) markRead(S.reading,S.ch,true);
    S.ch+=(+d.step);render();return;}
}));
scrim.addEventListener('click',inPane(function(){openDrawer(false);S.drawerBook=null;closeSheet();}));
/* Open straight into the text rather than a dashboard. */
/* app shortcuts land here with ?go=... */
function launchIntent(){
  try{
    var m=(location.search||'').match(/[?&]go=(\w+)/);
    return m?m[1]:null;
  }catch(e){ return null; }
}
function openingChapter(){
  var go=launchIntent();
  if(go==='search'){ S.tab='search'; S.book=null; S.reading=null; }
  else if(go==='tracker'){ S.tab='library'; S.trackerOpen=true; S.book=null; S.reading=null; }
  else {
    var pr=BOOKS.filter(function(b){return b.name==='Proverbs';})[0];
    if(pr && S.reading===null && S.book===null){ S.book=pr.i; S.reading=pr.i; S.ch=1; }
  }
  /* turned on its side, the second screen opens beside the first */
  if(LAYOUT==='split'&&!PANES.B&&CUR==='A') openSplit();
  render();
}
/* ---------- start ----------
   With inline data, go straight in. Without it, fetch the index and the first
   book before the first paint, then let the rest arrive in the background. */
function fetchJSON(rel){
  var url;
  try{ url=new URL(rel, document.baseURI).href; }catch(e){ url=rel; }
  return fetch(url).then(function(r){
    if(!r.ok) throw new Error(rel+': '+r.status);
    return r.json();
  });
}
function bootFailed(e){
  try{
    view.innerHTML='<div class="empty">The scriptures could not be loaded.<br>'+
      '<small style="opacity:.75">'+esc(String(e&&e.message||e))+'</small></div>';
  }catch(_){}
}
function start(){
  try{ payInit(); }catch(e){}
  Store.get('strata:worduse').then(function(u){ if(u&&u.d) S.wordUse=u; });
  initLayout();
  try{ FlexGap.init(); }catch(e){}
  if(META){ indexData(); loadAll(openingChapter); return; }
  fetchJSON('assets/data/meta.json').then(function(m){
    META=m;
    return fetchJSON('assets/data/index.json').catch(function(){ return null; });
  }).then(function(ix){
    if(ix) CHCOUNT=ix.books||ix.chapters||ix;
    indexData();
    /* the opening book has to be there before the first render */
    var pr=(META.books||[]).filter(function(b){return b.name==='Proverbs';})[0];
    return pr?fetchBook(pr.i).catch(function(){}):null;
  }).then(function(){
    loadAll(function(){
      openingChapter();
      /* the rest of the scriptures come down quietly behind the first page,
         so the app works offline rather than only for books already opened */
      setTimeout(backfillBooks, 1200);
    });
  }).catch(bootFailed);
}
start();

/* ---------- offline, and knowing when there is an update ----------
   The recovery dropped this entirely: sw.js was still being built and shipped,
   but nothing registered it, so the app had no offline cache and no way to
   tell a reader a new version was waiting. showUpdateBar() was left with no
   caller as a result. */
/* not in the store apps: their files are already on the device, and a store
   update replaces them */
if('serviceWorker' in navigator&&!payNative()){
  window.addEventListener('load',function(){
    navigator.serviceWorker.register('sw.js').then(function(reg){
      function watch(w){
        if(!w) return;
        w.addEventListener('statechange',function(){
          if(w.state==='installed'&&navigator.serviceWorker.controller) showUpdateBar();
        });
      }
      if(reg.waiting&&navigator.serviceWorker.controller) showUpdateBar();
      watch(reg.installing);
      reg.addEventListener('updatefound',function(){ watch(reg.installing); });
    }).catch(function(){});
  });
}

})();

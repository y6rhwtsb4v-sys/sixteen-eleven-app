(function(){
"use strict";
/* ================= THE GLOSSARY =================
   Old words whose meaning has moved since 1611, and the Bible's own terms,
   in plain modern English. Written for Sixteen Eleven rather than copied from
   an old dictionary, so the wording is ours. Where a word carries two senses
   in the KJV the entry says so instead of guessing which one is meant.

   Each entry: [headword, forms (space separated), kind, meaning]
   kind: o = an old word, t = a Bible term. The common old forms (thee,
   thou, hath, unto) are in too: an old word glows only once a chapter, so
   they light the page without crowding it. The big Bible terms (kind t) may
   glow two or three times a chapter, spaced apart; see glossify in app.js. Words that are usually modern in sense but sometimes old (let,
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
["naught","naught nought","o","Nothing; also bad or worthless."],
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
["ruddy","ruddy","o","Clear; of a clear, fresh complexion."],
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
["strake","strake","o","Lowered (a ship’s sail or gear)."],
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
["unction","unction","t","Anointing; in 1 John, the Holy Spirit given to believers."],
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
["urim","urim thummim","t","Objects the high priest used to seek God’s will."],
/* ---- added October 2026: the rest of the old words and old senses, checked
   against Webster’s 1828 and 1913; the wording is ours ---- */
["thee","thee","o","You (one person, as the object: “I will bless thee”)."],
["thou","thou","o","You (one person, as the subject: “thou art”)."],
["thy","thy","o","Your (belonging to one person)."],
["thine","thine","o","Yours; also “your” before a vowel (“thine eyes”)."],
["thyself","thyself","o","Yourself."],
["ye","ye","o","You (more than one person, as the subject)."],
["hath","hath","o","Has."],
["hast","hast","o","Have (with thou: “thou hast”)."],
["hadst","hadst","o","Had (with thou)."],
["doth","doth","o","Does."],
["dost","dost","o","Do (with thou: “dost thou”)."],
["didst","didst diddest","o","Did (with thou)."],
["shalt","shalt","o","Shall (with thou: “thou shalt”)."],
["wilt","wilt","o","Will (with thou: “wilt thou”)."],
["art","art","o","Are (with thou: “thou art”)."],
["wast","wast","o","Were (with thou: “thou wast”)."],
["wert","wert","o","Were (with thou, after if or as)."],
["canst","canst","o","Can (with thou)."],
["couldest","couldest","o","Could (with thou)."],
["shouldest","shouldest","o","Should (with thou)."],
["wouldest","wouldest","o","Would (with thou)."],
["mayest","mayest","o","May (with thou)."],
["mightest","mightest","o","Might (with thou)."],
["oughtest","oughtest","o","Ought (with thou)."],
["saith","saith","o","Says."],
["spake","spake spakest","o","Spoke."],
["unto","unto","o","To; toward."],
["ere","ere","o","Before."],
["lo","lo","o","Look; see (calling attention to what follows)."],
["fro","fro","o","From; away (“to and fro”: back and forth)."],
["alway","alway","o","Always."],
["howbeit","howbeit","o","However; nevertheless."],
["hither","hither","o","Here; to this place."],
["whither","whither","o","Where; to what place."],
["whithersoever","whithersoever","o","Wherever; to whatever place."],
["thitherward","thitherward","o","Toward that place."],
["whence","whence","o","From where; from what place."],
["thence","thence","o","From there; from that place."],
["thenceforth","thenceforth","o","From that time on."],
["wherefore","wherefore","o","Why; or, for this reason, therefore."],
["wherewith","wherewith wherewithal","o","With which; with what."],
["whereof","whereof","o","Of which; of what."],
["wherein","wherein","o","In which; in what."],
["whereby","whereby","o","By which; by what means."],
["whereupon","whereupon","o","Upon which; after which."],
["whereunto","whereunto","o","To which; to what (“whereunto shall I liken”: to what shall I compare)."],
["whereon","whereon","o","On which."],
["whereto","whereto","o","To which; to what end."],
["whereat","whereat","o","At which."],
["whereinto","whereinto","o","Into which."],
["whereabout","whereabout","o","About which; on what business."],
["whereout","whereout","o","Out of which."],
["wherethrough","wherethrough","o","Through which."],
["whensoever","whensoever","o","Whenever."],
["whoso","whoso","o","Whoever."],
["whomsoever","whomsoever","o","Whomever."],
["soever","soever","o","At all; whatever (“what man soever”: whatever man)."],
["thereat","thereat","o","At that; at that place."],
["thereinto","thereinto","o","Into that place."],
["thereout","thereout","o","Out of it."],
["therethrough","therethrough","o","Through it."],
["betwixt","betwixt","o","Between."],
["aught","aught","o","Anything at all."],
["yea","yea","o","Yes; indeed, even more."],
["nay","nay","o","No; not so."],
["verily","verily","o","Truly; certainly."],
["shew","shew shewed shewest sheweth shewing shewn","o","Old spelling of show: to show, reveal, or tell."],
["quoth","quoth","o","Said."],
["sware","sware swarest","o","Swore; took an oath."],
["drave","drave","o","Drove."],
["forbare","forbare forbad","o","Held back from; forbade."],
["forgat","forgat","o","Forgot."],
["trode","trode","o","Trod; walked on."],
["chode","chode","o","Quarrelled; found fault."],
["hungred","hungred","o","Hungry."],
["wit","wit","o","To know (“we do you to wit”: we let you know)."],
["aforehand","aforehand","o","Beforehand; in advance."],
["ambassage","ambassage","o","A delegation of envoys; an embassy."],
["ambushment","ambushment ambushments","o","An ambush; troops lying in wait."],
["arrogancy","arrogancy","o","Arrogance."],
["asswage","asswage asswaged","o","Old spelling of assuage: to ease, or to go down (as a flood)."],
["attent","attent","o","Attentive."],
["aul","aul","o","An awl, a pointed tool for piercing."],
["backbiting","backbiting backbitings backbiteth","o","Slander spoken behind someone’s back."],
["bason","bason basons","o","A basin or bowl."],
["beforetime","beforetime","o","Formerly; in earlier times."],
["betime","betime","o","Early; in good time."],
["bishoprick","bishoprick","o","An office of oversight in the church."],
["brasen","brasen","o","Made of brass or bronze."],
["bridechamber","bridechamber","o","The room where the bride and groom celebrate their wedding."],
["broided","broided","o","Braided."],
["buryingplace","buryingplace","o","A burial place; a tomb."],
["butlership","butlership","o","The office of cupbearer."],
["camphire","camphire","o","Henna, a fragrant flowering shrub."],
["cieled","cieled","o","Panelled or lined with wood (as a ceiling)."],
["clift","clift clifts","o","A cleft in a rock."],
["cloke","cloke","o","A cloak; a covering, also a pretext."],
["collops","collops","o","Folds of fat flesh."],
["cumbrance","cumbrance","o","A burden; a hindrance."],
["daysman","daysman","o","An umpire; one who judges between two parties."],
["deceivableness","deceivableness deceivable","o","Deceitfulness; the power to deceive."],
["dehorted","dehorted","o","Urged not to do something; dissuaded."],
["delightsome","delightsome","o","Delightful."],
["disannul","disannul disannulled disannulleth disannulling","o","To cancel; to make void."],
["doateth","doateth","o","Dotes; is foolishly taken up with."],
["downsitting","downsitting","o","Sitting down; rest."],
["dureth","dureth","o","Lasts; endures."],
["emptiers","emptiers","o","Plunderers; those who lay a place bare."],
["endamage","endamage","o","To damage; to harm."],
["eveningtide","eveningtide","o","Evening time."],
["eyeservice","eyeservice","o","Work done only while being watched."],
["fatling","fatling fatlings","o","A young animal fattened for slaughter."],
["fauchion","fauchion","o","A broad, curved sword."],
["firstling","firstling firstlings","o","The firstborn of a flock or herd."],
["fleshhook","fleshhook fleshhooks","o","A pronged fork for lifting meat from a pot."],
["foreshew","foreshew","o","To show beforehand; to foretell."],
["forsomuch","forsomuch","o","Since; because."],
["gazingstock","gazingstock","o","Someone made a spectacle and stared at with scorn."],
["glede","glede","o","A bird of prey; a kite."],
["graff","graff graffed","o","To graft (a branch into a tree)."],
["grisled","grisled","o","Grey-spotted; dappled."],
["handstaves","handstaves","o","Staffs carried in the hand; clubs."],
["havock","havock","o","Havoc; ruin."],
["headtire","headtire","o","A headdress."],
["hoised","hoised","o","Hoisted; raised."],
["homeborn","homeborn","o","Native; born in the land."],
["horseleach","horseleach","o","A large leech."],
["hough","hough houghed","o","To hamstring (cut the leg tendons of a horse)."],
["hungerbitten","hungerbitten","o","Weakened by hunger."],
["importable","importable","o","Unbearable; too heavy to carry."],
["inclosings","inclosings","o","Settings; enclosures (as for jewels)."],
["inkhorn","inkhorn","o","A small horn or case for ink, carried at the belt."],
["intermeddle","intermeddle intermeddleth","o","To meddle; to share in."],
["intreaty","intreaty intreaties intreating","o","An earnest request; a plea."],
["jeopard","jeopard jeoparded","o","To risk; to put in danger."],
["justle","justle","o","To jostle; to push against."],
["kneadingtroughs","kneadingtroughs","o","Bowls for kneading bread dough."],
["leanfleshed","leanfleshed","o","Thin; lean."],
["liers","liers","o","Those who lie in wait; an ambush."],
["lothe","lothe","o","To loathe; to detest."],
["lunatick","lunatick","o","Prone to seizures or fits; mentally afflicted."],
["magnifical","magnifical","o","Magnificent."],
["marishes","marishes","o","Marshes."],
["menpleasers","menpleasers","o","People who work only to win others’ approval."],
["menstealers","menstealers","o","Kidnappers; slave traders."],
["meteyard","meteyard","o","A measuring rod."],
["morter","morter","o","Mortar."],
["mowings","mowings","o","The mown grass of a field."],
["offscouring","offscouring","o","Refuse; what is scraped off and thrown away."],
["oliveyard","oliveyard oliveyards","o","An olive grove."],
["omnipotency","omnipotency","o","Almighty power."],
["outroads","outroads","o","Raids; forays."],
["overlived","overlived","o","Outlived."],
["overpast","overpast","o","Passed by; over and done."],
["plaistered","plaistered plaistering","o","Plastered."],
["pourtray","pourtray pourtrayed","o","To portray; to carve or draw."],
["pransing","pransing pransings","o","Prancing."],
["pressfat","pressfat","o","The vat of a winepress."],
["prieth","prieth","o","Pries; peers into."],
["pruninghooks","pruninghooks","o","Hooked knives for pruning vines."],
["recompence","recompence recompences","o","Repayment; reward or punishment."],
["reconcilement","reconcilement","o","Reconciliation."],
["remediless","remediless","o","Beyond remedy."],
["revenger","revenger revengers","o","An avenger."],
["rie","rie","o","Rye, or spelt (a kind of grain)."],
["seatward","seatward","o","Toward the seat."],
["sheepmaster","sheepmaster","o","A sheep breeder; a flock owner."],
["shoelatchet","shoelatchet","o","A sandal strap."],
["silverlings","silverlings","o","Silver coins; shekels."],
["sixscore","sixscore","o","One hundred and twenty."],
["slidden","slidden","o","Slid; slipped away."],
["sodering","sodering","o","Soldering; joining metal."],
["stablish","stablish stablished stablisheth","o","To establish; to make firm."],
["stedfast","stedfast stedfastly stedfastness","o","Steadfast; firm and unmoving."],
["strowed","strowed","o","Strewed; scattered."],
["subtil","subtil subtilly subtilty subtilties","o","Subtle: crafty, cunning."],
["submissly","submissly","o","Submissively."],
["suretiship","suretiship","o","Standing as guarantor for another’s debt."],
["surmisings","surmisings","o","Suspicions; evil guesses."],
["swaddlingband","swaddlingband","o","A strip of cloth for wrapping a newborn."],
["tabering","tabering","o","Beating (the breast) like a small drum."],
["tacklings","tacklings","o","A ship’s ropes and rigging."],
["teil","teil","o","The linden or lime tree."],
["thankworthy","thankworthy","o","Worthy of thanks; commendable."],
["thyine","thyine","o","A fragrant hardwood (sandarac tree) used for fine cabinetwork."],
["traffick","traffick","o","Trade; commerce."],
["trucebreakers","trucebreakers","o","People who will not keep an agreement."],
["undersetters","undersetters","o","Supports; brackets underneath."],
["underwritten","underwritten","o","Written below."],
["unnurtured","unnurtured evilnurtured","o","Untrained; badly brought up."],
["unperfect","unperfect","o","Imperfect; unformed."],
["unright","unright","o","Wrong; unrighteous."],
["unwashen","unwashen","o","Unwashed."],
["vail","vail vails","o","A veil."],
["vehemency","vehemency","o","Vehemence; intense force."],
["villany","villany","o","Villainy; wickedness."],
["waitingwoman","waitingwoman","o","A woman who waits on another; an attendant."],
["washpot","washpot","o","A basin for washing."],
["watersprings","watersprings","o","Springs of water."],
["waymarks","waymarks","o","Road markers."],
["weening","weening","o","Thinking; supposing."],
["whoring","whoring whorish","o","Unfaithfulness, especially to God by turning to idols."],
["wilily","wilily","o","Craftily; by a trick."],
["winebibber","winebibber winebibbers","o","A heavy drinker of wine."],
["winefat","winefat","o","The vat of a winepress."],
["withs","withs","o","Flexible willow twigs used as bands."],
["yokefellow","yokefellow","o","A companion in work; a partner."],
["fetcht","fetcht","o","Fetched."],
["overlaid","overlaid","o","Covered over; plated (with gold); in 1 Kings 3:19, lay on and smothered."],
["mixt","mixt","o","Mixed."],
["pluckt","pluckt","o","Plucked."],
["slipt","slipt","o","Slipped."],
["stript","stript","o","Stripped."],
["harlot","harlot harlots","o","A prostitute."],
["vinedressers","vinedressers","o","Workers who tend vines."],
["hoary","hoary","o","Grey or white with age."],
["careful","careful carefulness","o","Full of care: anxious, worried; also taking pains."],
["carriage","carriage carriages","o","Baggage; what is carried."],
["communicate","communicate communicated communicating","o","To share; to give a share of what one has."],
["convince","convince convinced convinceth","o","To prove someone wrong; to convict."],
["cunning","cunning","o","Skilful; expert (as a craftsman)."],
["delicate","delicate delicately delicates","o","Soft, luxurious; dainty food."],
["discover","discover discovered discovereth","o","To uncover; to lay bare."],
["gender","gender gendered gendereth","o","To give birth to; to breed or produce (“they do gender strifes”)."],
["honest","honest honestly honesty","o","Honourable; decent and fitting."],
["incontinent","incontinent incontinency","o","Lacking self-control."],
["nephews","nephews","o","A grandson; a descendant."],
["peculiar","peculiar","o","Belonging especially to one; one’s own treasured possession."],
["alleging","alleging","o","To set out and prove (from scripture)."],
["artillery","artillery","o","Weapons: here, a bow and arrows."],
["debate","debate debates","o","Strife; quarrelling."],
["duke","duke dukes","o","A chief; the head of a tribe or clan."],
["frankly","frankly","o","Freely; without asking anything back."],
["grudge","grudge grudging grudgingly","o","To grumble or complain; unwillingly."],
["hale","hale haling","o","To drag by force."],
["lusty","lusty","o","Strong; vigorous."],
["mansions","mansions","o","Dwelling places; rooms in a house."],
["matrix","matrix","o","The womb."],
["mortify","mortify","o","To put to death."],
["pitiful","pitiful","o","Full of pity; compassionate."],
["presently","presently","o","Soon; at once (“Him therefore I hope to send presently”)."],
["sometimes","sometimes","o","Formerly; once (“ye who sometimes were far off”)."],
["tablets","tablets","o","Pendants or ornaments worn as jewellery."],
["target","target targets","o","A small shield."],
["temperance","temperance temperate","o","Self-control."],
["virtue","virtue","o","Goodness; in the Gospels also power or healing strength (“virtue had gone out of him”)."],
["shewbread","shewbread","t","The bread of the Presence: twelve loaves set before the LORD in the tabernacle each sabbath."],
["teraphim","teraphim","t","Household idols, consulted for omens."],
["tetrarch","tetrarch","t","A ruler of part of a province under Rome."],
["sabachthani","sabachthani","t","Aramaic: “hast thou forsaken me” (from Psalm 22:1)."],
["onycha","onycha","t","A fragrant ingredient of the holy incense."],
["algum","algum almug","t","A precious wood (perhaps red sandalwood) brought from Ophir."],
["bekah","bekah","t","Half a shekel."],
["gerahs","gerahs","t","A small weight: one twentieth of a shekel."],
["cor","cor","t","A large dry measure, about six bushels."],
["maneh","maneh","t","A weight of fifty or sixty shekels (a mina)."],
["ligure","ligure","t","A precious stone in the high priest’s breastplate (perhaps jacinth)."],
["lign","lign","t","“Lign aloes”: aloe wood, a fragrant tree."],
["ospray","ospray","t","The osprey, a fish-eating bird of prey."],
["ossifrage","ossifrage","t","The bearded vulture."],
["pygarg","pygarg","t","A clean animal for food, probably a kind of antelope (Webster’s 1828 took it for a bird)."],
["gier","gier","t","“Gier eagle”: a vulture."],
["palmerworm","palmerworm","t","A locust or caterpillar that strips plants."],
["sycamine","sycamine","t","The mulberry tree."],
["cummin","cummin","t","A seed used as spice, tithed by the Pharisees."],
["holm","holm","t","An evergreen oak."],
/* ---- the big words (Webster 1828 below) ---- */
["righteousness","righteousness righteousnesses","t","Being right with God: a heart and life that agree with his law."],
["righteous","righteous righteously","t","Right with God and just toward others; doing what God commands."],
["unrighteousness","unrighteousness unrighteous","t","Wrongdoing; injustice; breaking God’s law."],
["iniquity","iniquity iniquities","t","Sin; wickedness; a wrong done against God or others."],
["transgression","transgression transgressions transgress transgressed transgresseth transgressor transgressors","t","Breaking a law or command of God; stepping over the line."],
["trespass","trespass trespasses trespassed","t","A wrong done against God or a neighbour; to do such a wrong."],
["grace","grace","t","God’s free, undeserved favour and love."],
["salvation","salvation","t","Being saved: rescued by God from sin and its penalty; also deliverance from enemies."],
["sanctify","sanctify sanctified sanctifieth sanctifying","t","To make holy; to set apart for God."],
["sanctification","sanctification","t","Being made holy: God’s work of setting a person apart from sin for himself."],
["holiness","holiness","t","Being holy: pure, set apart for God, free from sin."],
["justify","justify justified justifieth justifying","t","To declare righteous: God pardons and accepts the sinner as just."],
["justification","justification","t","God’s act of pardoning a sinner and counting him righteous."],
["propitiation","propitiation","t","The sacrifice that satisfies God’s justice and turns away his wrath against sin."],
["redemption","redemption","t","Buying back; setting free by paying the price."],
["redeem","redeem redeemed redeemeth redeemer","t","To buy back; to set free by paying a price."],
["reconcile","reconcile reconciled reconciling","t","To bring back together as friends after being apart."],
["reconciliation","reconciliation","t","Being brought back into peace with God; also the offering that brings it."],
["heathen","heathen","t","The nations other than Israel, who did not know or worship the true God."],
["abomination","abomination abominations abominable","t","Something God hates; a detestable thing, often an idol."],
["sanctuary","sanctuary sanctuaries","t","The holy place where God was worshipped: the tabernacle or temple."],
["statute","statute statutes","t","A law or decree set down by God (or a king)."],
["ordinance","ordinance ordinances","t","A rule or decree God set; also a set rite of worship."],
["testimony","testimony testimonies","t","God’s witness: his law and commandments; also the tablets of the law kept in the ark."],
["inheritance","inheritance inheritances","t","What is handed down to an heir: often the land God gave Israel, or the life he gives his people."],
["circumcision","circumcision circumcise circumcised circumcising","t","The cutting of the foreskin, the sign of God’s covenant with Abraham; in the New Testament also a name for the Jews."],
["uncircumcision","uncircumcision uncircumcised","t","Not circumcised; in the New Testament, a name for the Gentiles."],
["gospel","gospel","t","The good news of Jesus Christ: his life, death and resurrection for sinners."],
["baptism","baptism baptisms baptize baptized baptizing","t","Washing with water as a sign of entering God’s people; also used of suffering."],
["apostle","apostle apostles apostleship","t","One sent: a messenger chosen by Christ to preach the gospel."],
["epistle","epistle epistles","t","A letter."],
["doctrine","doctrine doctrines","t","Teaching; what is taught as true."],
["blasphemy","blasphemy blasphemies blaspheme blasphemed blasphemeth blasphemous blasphemer blasphemers blasphemously blasphemest","t","Speaking against God with contempt or irreverence."],
["idolatry","idolatry idolatries idolater idolaters idolatrous","t","The worship of idols, or of anything that is not God."],
["fornication","fornication fornications fornicator fornicators","t","Sexual sin outside of marriage."],
["whoredom","whoredom whoredoms","t","Sexual unfaithfulness; in the prophets, Israel’s unfaithfulness to God by idols."],
["lasciviousness","lasciviousness","t","Shameless lust; unrestrained indecency."],
["covetousness","covetousness covetous","t","Greedy desire for what one does not have, especially wealth."],
["hypocrisy","hypocrisy hypocrite hypocrites hypocrisies","t","Pretending to be good or godly while not being so."],
["ungodliness","ungodliness ungodly","t","Living without regard for God."],
["vanity","vanity vanities","t","Emptiness; what is fleeting and cannot satisfy (“vanity of vanities”)."],
["sojourn","sojourn sojourned sojourneth sojourning sojourner sojourners","t","To live somewhere for a time as a foreigner, not at home."],
["supplication","supplication supplications","t","Humble, earnest prayer; pleading."],
["intercession","intercession intercessions","t","Pleading with God on behalf of others."],
["mediator","mediator","t","One who stands between two parties to bring them together."],
["oblation","oblation oblations","t","An offering brought to God."],
["consecrate","consecrate consecrated consecration consecrations","t","To set apart as holy for God’s service."],
["purification","purification purifying","t","Cleansing; especially the washing and rites that made a person clean to worship."],
["defile","defile defiled defileth defilement","t","To make unclean or impure, in body, worship or conduct."],
["chasten","chasten chastened chasteneth chastening chastise chastised chastisement","t","To correct and discipline, as a father does, for good."],
["longsuffering","longsuffering","t","Patient endurance; slow to anger under wrong."],
["meekness","meekness meek","t","Gentle humility; strength held under control, not insisting on oneself."],
["tribulation","tribulation tribulations","t","Great trouble and suffering, often from persecution."],
["resurrection","resurrection","t","Rising from the dead to life."],
["immortality","immortality immortal","t","Never dying; life without end."],
["incorruption","incorruption incorruptible","t","Never decaying; the body raised imperishable."],
["regeneration","regeneration","t","New birth; being made new by God."],
["adoption","adoption","t","Being taken in as a son: God receiving believers as his own children."],
["election","election","t","God’s choosing."],
["predestinate","predestinate predestinated","t","To decide beforehand; God appointing ahead of time."],
["foreknowledge","foreknowledge foreknow foreknew","t","Knowing beforehand."],
["glorify","glorify glorified glorifieth glorifying","t","To give glory to; to praise and honour; also to raise to glory."],
["magnify","magnify magnified magnifieth","t","To praise highly; to make great in honour."],
["exhortation","exhortation exhortations exhort exhorted exhorting exhorteth","t","Urging and encouraging someone to do right."],
["edify","edify edified edifieth edifying edification","t","To build up, especially in faith and understanding."],
["admonish","admonish admonished admonishing admonition","t","To warn gently; to correct with counsel."],
["contrite","contrite","t","Broken-hearted over one’s sin; humbly sorry."],
["repentance","repentance","t","Turning from sin to God, with real sorrow for it."],
["backsliding","backsliding backslidings backslider backslidden","t","Turning away from God after following him."],
["reprobate","reprobate reprobates","t","Rejected as worthless; given up in sin."],
["heresy","heresy heresies heretick","t","A self-chosen opinion that splits from the truth; a faction."],
["carnal","carnal carnally","t","Of the flesh: ruled by bodily desires rather than the Spirit."],
["condemnation","condemnation","t","Being judged guilty and sentenced."],
["damnation","damnation","t","Condemnation; God’s judgment against sin."],
["ransom","ransom ransomed","t","The price paid to set someone free."],
["kinsman","kinsman kinsmen kinswoman","t","A relative; under the law, the near relative who could buy back land or marry a widow (as Boaz did)."],
["birthright","birthright","t","The rights of the firstborn son: a double share and the head of the family."],
["firstborn","firstborn","t","The first child born, who had the birthright; the first of the flock, given to God."],
["priesthood","priesthood","t","The office of priest; the priests as a body."],
["mitre","mitre","t","The high priest’s turban, with the gold plate “Holiness to the LORD”."],
["nazarite","nazarite nazarites","t","One under a vow to God: no wine, no razor, no touching the dead."],
["amen","amen","t","So be it; truly."],
["alleluia","alleluia","t","Praise ye the LORD."],
["jehovah","jehovah","t","The name of God, “I AM”, the LORD."],
["sabaoth","sabaoth","t","Hosts, armies: “the Lord of Sabaoth” is the LORD of hosts."],
["godhead","godhead","t","The divine nature; God himself."],
["comforter","comforter","t","The Holy Spirit, sent to help, teach and strengthen."],
["bishop","bishop bishops","t","An overseer of a church; an elder."],
["deacon","deacon deacons","t","A servant of the church, appointed to care for its needs."],
["presbytery","presbytery","t","The elders of a church together."],
["evangelist","evangelist evangelists","t","One who carries the gospel to others; a preacher of it."],
["steward","steward stewards stewardship","t","One trusted to manage another’s house or goods."],
["malefactor","malefactor malefactors","t","A criminal; an evildoer."],
["divination","divination divinations diviner diviners","t","Trying to learn the future or hidden things by omens or spirits, which God forbade."],
["soothsayer","soothsayer soothsayers soothsaying","t","One who claims to tell the future."],
["necromancer","necromancer","t","One who claims to speak with the dead."],
["wizard","wizard wizards","t","A man who practises magic or consults spirits."],
["witchcraft","witchcraft witchcrafts witch","t","The practice of magic and dealing with spirits."],
["sorcery","sorcery sorceries sorcerer sorcerers sorceress","t","Magic worked by calling on spirits."],
["enchantment","enchantment enchantments enchanter enchanters","t","Spells and charms; magic arts."],
["communion","communion","t","Fellowship; sharing together."],
["infirmity","infirmity infirmities","t","Weakness; sickness."],
["bondage","bondage","t","Slavery; being held captive."],
["heir","heir heirs","t","One who will receive an inheritance."],
["guile","guile","t","Deceit; craftiness."],
["variance","variance","t","Quarrelling; discord between people."],
["emulations","emulations","t","Jealous rivalry; striving to outdo others."],
["seditions","seditions sedition","t","Stirring up division and revolt."],
["revellings","revellings","t","Wild, drunken partying."],
["slothful","slothful slothfulness sluggard","t","Lazy; idle."],
["familiar","familiar","t","A “familiar spirit”: a spirit consulted by a medium, as of the dead."],
["offering","offering offerings","t","A gift brought to God in worship."]
/* ---- end of the big words ---- */
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
  instant:{form:'instant',notBefore:/\b(an|what|the|that)\s+$/i},
  art:{form:'art',before:/\bthou\s+$/i,after:/^\s+thou\b/i},
  wit:{form:'wit',before:/\bto\s+$/i},
  hale:{form:'hale',notBefore:/\b(is|was|be)\s+$/i},
  familiar:{form:'familiar',after:/^\s+spirits?\b/i}
};

/* ---- words with more than one meaning ----
   Each sense on its own, with a verse that shows it. The card shows the
   sense that fits the verse tapped, then the others with their own verses.
   How the sense is picked, in order: the verse itself is listed (refs) or
   the word's own form decides (forms: "grudgingly"); then a pattern in the
   verse's wording (when: "gave up the ghost", "Holy Ghost"); then a question
   mark ending the clause (wherefore = why); then the sense marked dflt, or
   the first. Checked against every occurrence in the Bible by
   glossary_work/checksenses.py. */
var GLOSS_SENSES={
  "ghost":[
    {m:"The breath of life. To “give up the ghost” is to breathe one’s last: to die.",ex:["Job 10:18", "Oh that I had given up the ghost"],when:/(up|yielded|gave|give|giveth) (up )?the ghost/},
    {m:"The Holy Ghost: the Holy Spirit, the Spirit of God.",ex:["Matthew 1:18", "she was found with child of the Holy Ghost"],when:/holy ghost/}],
  "abide":[
    {m:"To stay, remain or dwell.",ex:["John 15:4", "Abide in me, and I in you"]},
    {m:"To endure; to bear or stand up under.",ex:["Malachi 3:2", "But who may abide the day of his coming"],when:/(who|can|could|may|not|shall|cannot) (can |may |shall |not )?(be able to )?abide (it|the|his|thy|her|this|their)\b|abide (it|his indignation|the day)/}],
  "bowels":[
    {m:"The inward parts of the body.",ex:["Acts 1:18", "all his bowels gushed out"]},
    {m:"One’s own body, as the source of children: “out of thine own bowels” means your own offspring.",ex:["Genesis 15:4", "he that shall come forth out of thine own bowels"],when:/(out|forth) of (thine|thy|his|my|her) (own )?bowels|offspring of thy bowels|issue of thy bowels/},
    {m:"Deep feeling, especially tender compassion (the heart, as we would say).",ex:["Colossians 3:12", "bowels of mercies"],when:/bowels of (mercies|compassion|christ)|bowels (and|were|be|are|did|shall|is) |my bowels|bowels yearned|your bowels|their bowels|thy bowels and|bowels are refreshed|bowels of the saints|bowels for|mine own bowels|bowels of mine|bowels of jesus/}],
  "comely":[
    {m:"Attractive; pleasant to look at.",ex:["Song of Solomon 1:5", "I am black, but comely"]},
    {m:"Fitting; proper; becoming.",ex:["Psalms 33:1", "praise is comely for the upright"],when:/comely (for (one|the upright|a|you|me|us)|that|to)|is it comely|for that which is comely|praise is comely/}],
  "compass":[
    {m:"To go around; to surround or encircle.",ex:["Joshua 6:3", "ye shall compass the city"]},
    {m:"“Fetch a compass”: to go round by a winding way; to circle round.",ex:["Acts 28:13", "we fetched a compass"],when:/fetch(ed)? a compass/},
    {m:"A circle or circuit; the rim or ledge running round something.",ex:["Proverbs 8:27", "when he set a compass upon the face of the depth"],when:/(a|the) compass (upon|of|thereof)|under the compass/}],
  "entreat":[
    {m:"To plead with; to ask earnestly.",ex:["Exodus 8:8", "Intreat the LORD"]},
    {m:"To treat or deal with someone, well or badly.",ex:["Luke 20:11", "and entreated him shamefully"],when:/(entreat|intreat)(ed)? (him|them|us|her|me|thee|you)?\s?(evil|shamefully|spitefully|well|kindly|courteously|roughly|hardly|despitefully|honourably|as a brother)|evil entreated|evil intreated/}],
  "flagon":[
    {m:"A cake of pressed raisins (the Hebrew is not a vessel of wine).",ex:["Song of Solomon 2:5", "Stay me with flagons"]},
    {m:"A flask or jar.",ex:["Isaiah 22:24", "even to all the vessels of flagons"],refs:["Isaiah 22:24"]}],
  "husbandry":[
    {m:"Farming; working the land.",ex:["2 Chronicles 26:10", "for he loved husbandry"]},
    {m:"A field under cultivation: “ye are God’s husbandry”, his tilled field.",ex:["1 Corinthians 3:9", "ye are God’s husbandry"],refs:["1 Corinthians 3:9"]}],
  "naught":[
    {m:"Nothing. To “come to naught” is to come to nothing; to “set at naught” is to treat as worthless.",ex:["Acts 5:38", "it will come to nought"]},
    {m:"Bad; worthless.",ex:["Proverbs 20:14", "It is naught, it is naught, saith the buyer"],when:/\b(is|be|are|was) (naught|nought)\b|naughty|(water|figs) (is|were) naught/}],
  "occupy":[
    {m:"To trade; to do business with.",ex:["Luke 19:13", "Occupy till I come"]},
    {m:"To use; to put to use.",ex:["Judges 16:11", "new ropes that never were occupied"],refs:["Judges 16:11", "Exodus 38:24"]},
    {m:"To be busy with; to be engaged in.",ex:["Hebrews 13:9", "them that have been occupied therein"],when:/occupied (themselves|in the|therein|about|in his|in their)|kept the \w+ occupied|is occupied in/,refs:["Hebrews 13:9", "Ecclesiastes 1:13", "Ecclesiastes 3:10"]}],
  "offend":[
    {m:"To cause someone to stumble, or to fall away from faith.",ex:["Matthew 5:29", "if thy right eye offend thee"],when:/offend(eth|ed)? (thee|him|them|me|you|us|my|one|any|the weak|thy|this)\b|(be|been|were|was|are|is|not be|shall be|all ye shall be) offended|offended (in him|in me|at|because|in thee)|things that offend|shall many be offended|blessed is he, whosoever shall not be offended/},
    {m:"To do wrong; to sin against.",ex:["James 2:10", "and yet offend in one point"],when:/offend(ed|eth)? against|offend(ed)? in (one point|baal|word|many things)|have (i |we )?offended|i have offended|what have i offended/,refs:["2 Esdras 12:41"],dflt:1}],
  "ravening":[
    {m:"Greedy for prey; ravenous.",ex:["Matthew 7:15", "inwardly they are ravening wolves"]},
    {m:"Greed; plunder (what is seized).",ex:["Luke 11:39", "your inward part is full of ravening"],when:/full of ravening|of ravening/}],
  "reins":[
    {m:"The inmost self: the hidden thoughts and feelings that God searches.",ex:["Psalms 7:9", "trieth the hearts and reins"]},
    {m:"The kidneys.",ex:["Job 16:13", "he cleaveth my reins asunder"],refs:["Job 16:13", "Lamentations 3:13"]},
    {m:"The loins; the waist, where a belt is fastened.",ex:["Isaiah 11:5", "faithfulness the girdle of his reins"],refs:["Isaiah 11:5"]}],
  "sore":[
    {m:"Greatly; very: “sore afraid” is very afraid.",ex:["Luke 2:9", "and they were sore afraid"]},
    {m:"Severe; grievous; hard to bear.",ex:["Genesis 41:56", "the famine waxed sore"],when:/sore (famine|sickness|battle|judgments|plague|plagues|travail|trial|affliction|evil|lamentation|bondage|displeasure|wound|stroke|punishment|dearth|destruction|boils?|botch|diseases)|(famine|battle|sickness|hand|war) (was|waxed|is|be|grew) (very )?sore/}],
  "strait":[
    {m:"Narrow; tight.",ex:["Matthew 7:13", "Enter ye in at the strait gate"]},
    {m:"A hard place; distress, where there is no way out.",ex:["2 Samuel 24:14", "I am in a great strait"],when:/(a|great|in a|in the) strait\b(?! of judea)|in straits|strait(ly)? betwixt|the straits|out of the strait|kept so strait/,forms:["straitened", "straiteneth", "straitness", "straits"]}],
  "suffer":[
    {m:"To allow; to let.",ex:["Matthew 19:14", "Suffer little children"],when:/suffer(ed|est|eth)? (me|him|her|them|us|thee|you|it|not|neither|thy|thine|that|the little|little|no man|none|fools|his|my|our|their|this|to)\b/},
    {m:"To undergo pain, loss or wrong; to endure.",ex:["Matthew 16:21", "and suffer many things"],dflt:1}],
  "tabernacle":[
    {m:"The tent of meeting: the portable sanctuary where God dwelt among Israel in the wilderness.",ex:["Exodus 25:9", "the pattern of the tabernacle"]},
    {m:"The feast of tabernacles: the autumn festival of booths, when Israel lived seven days in shelters of branches.",ex:["John 7:2", "feast of tabernacles was at hand"],when:/feast of (the )?tabernacles|tabernacles\' feast/},
    {m:"A tent or dwelling; a home.",ex:["Job 5:24", "thou shalt know that thy tabernacle shall be in peace"],when:/\b(thy|his|my|their|her|your) tabernacles?\b(?! of the)|tents and tabernacles|in tabernacles|\btabernacles\b/},
    {m:"The body, as the tent the soul lives in.",ex:["2 Corinthians 5:1", "our earthly house of this tabernacle"],refs:["2 Corinthians 5:1", "2 Corinthians 5:4", "2 Peter 1:13", "2 Peter 1:14"]}],
  "talent":[
    {m:"A large weight of metal, about 34 kilograms (75 pounds).",ex:["Exodus 25:39", "Of a talent of pure gold shall he make it"]},
    {m:"A great sum of money (in the parables, many years’ wages).",ex:["Matthew 25:15", "unto one he gave five talents"],refs:["Matthew 18:24", "Matthew 25:15", "Matthew 25:16", "Matthew 25:18", "Matthew 25:20", "Matthew 25:22", "Matthew 25:24", "Matthew 25:25", "Matthew 25:28"]}],
  "virtue":[
    {m:"Goodness; moral excellence.",ex:["2 Peter 1:5", "add to your faith virtue"]},
    {m:"Power; healing strength going out from Jesus.",ex:["Mark 5:30", "that virtue had gone out of him"],when:/virtue (had )?(gone|went) out|went virtue out|there went virtue/}],
  "careful":[
    {m:"Full of care: anxious, worried.",ex:["Philippians 4:6", "Be careful for nothing"],refs:["Daniel 3:16"]},
    {m:"Taking pains; diligent.",ex:["Titus 3:8", "might be careful to maintain good works"],when:/careful (not )?to/}],
  "grudge":[
    {m:"To grumble or complain against.",ex:["James 5:9", "Grudge not one against another"]},
    {m:"“Grudgingly”: unwillingly, resenting it.",ex:["2 Corinthians 9:7", "not grudgingly"],forms:["grudging", "grudgingly"]},
    {m:"A grudge: lasting resentment against someone, as today.",ex:["Leviticus 19:18", "nor bear any grudge"],when:/(a|any|no) grudge/}],
  "delicate":[
    {m:"Soft and pampered; living in luxury.",ex:["Deuteronomy 28:56", "The tender and delicate woman"]},
    {m:"Delicacies; dainty food.",ex:["Jeremiah 51:34", "he hath filled his belly with my delicates"],forms:["delicates"]}],
  "cloke":[
    {m:"A cloak; an outer garment.",ex:["2 Timothy 4:13", "The cloke that I left at Troas"]},
    {m:"A cover or pretext, hiding the truth.",ex:["1 Thessalonians 2:5", "nor a cloke of covetousness"],when:/cloke of|no cloke|for a cloke/}],
  "ephod":[
    {m:"The high priest’s embroidered vest, worn over his robe.",ex:["Exodus 28:6", "they shall make the ephod"]},
    {m:"An object made for worship that became an idol.",ex:["Judges 8:27", "And Gideon made an ephod thereof"],refs:["Judges 8:27", "Judges 17:5", "Judges 18:14", "Judges 18:17", "Judges 18:18", "Judges 18:20"]}],
  "overlaid":[
    {m:"Covered over; plated (with gold or brass).",ex:["Exodus 26:32", "overlaid with gold"]},
    {m:"Lay on and smothered.",ex:["1 Kings 3:19", "because she overlaid it"],refs:["1 Kings 3:19"]}],
  "asswage":[
    {m:"To ease; to soften (grief or pain).",ex:["Job 16:5", "the moving of my lips should asswage your grief"]},
    {m:"To go down; to subside (as a flood).",ex:["Genesis 8:1", "and the waters asswaged"],when:/waters asswaged/}],
  "gat":[
    {m:"Got; gained for oneself.",ex:["Ecclesiastes 2:8", "I gat me men singers"]},
    {m:"Went; took oneself off (“gat him up”: got up and went).",ex:["Genesis 19:27", "And Abraham gat up early"],when:/gat (him|them|her|thee|us|you)\b|gat (me )?(up|down|away|into|out|over|hence|thence|to|unto)\b/}],
  "yea":[
    {m:"Indeed; even; more than that (adding force).",ex:["Psalms 23:4", "Yea, though I walk through the valley"]},
    {m:"Yes.",ex:["Matthew 9:28", "They said unto him, Yea, Lord"],when:/yea, yea|yea, lord|yea and nay|yea; and your nay|said,? yea|saith,? yea|answered,? yea|let your yea/}],
  "wherefore":[
    {m:"Therefore; for this reason.",ex:["Matthew 7:20", "Wherefore by their fruits ye shall know them"]},
    {m:"Why; for what reason (asking).",ex:["Matthew 14:31", "wherefore didst thou doubt?"],when:/(know|knew|ask|asked|enquire|enquired|tell|told|see|consider|understand|perceive|shew) (\w+ )?wherefore/,question:1}],
  "meat":[
    {m:"Food of any kind, not only flesh.",ex:["Genesis 1:29", "to you it shall be for meat"]},
    {m:"A “meat offering” was an offering of grain or flour, with oil and frankincense: no flesh at all.",ex:["Leviticus 2:1", "when any will offer a meat offering unto the LORD"],when:/meat offerings?/}],
  "conversation":[
    {m:"Your way of life and conduct, not only your speech.",ex:["1 Peter 1:15", "so be ye holy in all manner of conversation"]},
    {m:"Citizenship; the commonwealth one belongs to.",ex:["Philippians 3:20", "For our conversation is in heaven"],refs:["Philippians 3:20"]}],
  "whit":[
    {m:"The least bit: “not a whit” is not at all.",ex:["2 Corinthians 11:5", "I was not a whit behind"]},
    {m:"“Every whit”: entirely, wholly.",ex:["John 13:10", "but is clean every whit"],when:/every whit/}],
  "offering":[
    {m:"A gift brought to God in worship: an animal, grain, wine, or anything given to him.",ex:["Genesis 4:3", "an offering unto the LORD"],dflt:1},
    {m:"A burnt offering: an animal burned whole on the altar, given entirely to God.",ex:["Genesis 22:2", "offer him there for a burnt offering"],when:/burnt offerings?/,before:/burnt\s+$/},
    {m:"A peace offering: the fat burned on the altar, a share given to the priest, and the rest eaten by the worshipper and his household, a meal of fellowship and thanks.",ex:["Exodus 24:5", "sacrificed peace offerings of oxen unto the LORD"],when:/peace offerings?/,before:/peace\s+$/},
    {m:"A sin offering: made for sin, its blood put on the altar to make atonement.",ex:["Exodus 29:14", "it is a sin offering"],when:/sin offerings?/,before:/\bsin\s+$/},
    {m:"A trespass offering: made for a wrong that could be put right, with what was taken paid back and a fifth part more.",ex:["Leviticus 5:6", "he shall bring his trespass offering unto the LORD"],when:/trespass offerings?/,before:/trespass\s+$/},
    {m:"A heave offering: a portion lifted up to the LORD and set apart for the priests.",ex:["Leviticus 7:14", "for an heave offering unto the LORD"],when:/heave offerings?/,before:/heave\s+$/},
    {m:"A wave offering: a portion waved before the LORD, then given to the priests.",ex:["Exodus 29:24", "for a wave offering before the LORD"],when:/wave offerings?/,before:/wave\s+$/},
    {m:"A drink offering: wine poured out at the altar with a sacrifice.",ex:["Genesis 35:14", "he poured a drink offering thereon"],when:/drink offerings?/,before:/drink\s+$/},
    {m:"A freewill offering: given gladly, of one’s own accord, beyond what the law required.",ex:["Leviticus 22:23", "that mayest thou offer for a freewill offering"],when:/free ?will offerings?/,before:/free ?will\s+$/},
    {m:"A meat offering: an offering of grain or flour, with oil and frankincense (“meat” meant food, not flesh).",ex:["Leviticus 2:1", "when any will offer a meat offering unto the LORD"],when:/meat offerings?/,before:/meat\s+$/}]
};

/* ---- Webster's 1828 ----
   For the big words of the faith, a line from Noah Webster's American
   Dictionary of the English Language (1828), shown under our own plain
   meaning and labelled as his. Every line is checked word for word against
   the entry by glossary_work/ver1828.py (verse citations inside it left out).
   The 1828 text is in the public domain; these lines are taken from the
   transcription at codeberg.org/cobycat/webster1828 (CC BY-SA 4.0), and this
   list is shared under the same licence. */
var GLOSS_1828={
"righteousness": "Purity of heart and rectitude of life; conformity of heart and life to the divine law.",
"righteous": "Just; accordant to the divine law. Applied to persons, it denotes one who is holy in heart, and observant of the divine commands in practice; as a righteous man.",
"unrighteousness": "Injustice; a violation of the divine law, or of the plain principles of justice and equity; wickedness.",
"iniquity": "A particular deviation from rectitude; a sin or crime; wickedness; any act of injustice.",
"transgression": "The act of passing over or beyond any law or rule of moral duty; the violation of a law or known principle of rectitude; breach of command.",
"trespass": "In a moral sense, to transgress voluntarily any divine law or command; to violate any known rule of duty.",
"grace": "Appropriately, the free unmerited love and favor of God, the spring and source of all the benefits men receive from him.",
"salvation": "Appropriately in theology, the redemption of man from the bondage of sin and liability to eternal death, and the conferring on him everlasting happiness.",
"sanctify": "To separate, set apart or appoint to a holy, sacred or religious use.",
"sanctification": "The act of making holy. In an evangelical sense, the act of God's grace by which the affections of men are purified or alienated from sin and the world, and exalted to a supreme love to God.",
"holiness": "The state of being holy; purity or integrity of moral character; freedom from sin; sanctity.",
"justify": "In theology, to pardon and clear from guilt; to absolve or acquit from guilt and merited punishment, and to accept as righteous on account of the merits of the Savior, or by the application of Christ's atonement to the offender.",
"justification": "In theology, remission of sin and absolution from guilt and punishment; or an act of free grace by which God pardons the sinner and accepts him as righteous, on account of the atonement of Christ.",
"propitiation": "In theology, the atonement or atoning sacrifice offered to God to assuage his wrath and render him propitious to sinners.",
"redemption": "In theology, the purchase of God's favor by the death and sufferings of Christ; the ransom or deliverance of sinners from the bondage of sin and the penalties of God's violated law by the atonement of Christ.",
"redeem": "To purchase back; to ransom; to liberate or rescue from captivity or bondage, or from any obligation or liability to suffer or to be forfeited, by paying an equivalent; as, to redeem prisoners or captured goods; to redeem a pledge.",
"reconcile": "To conciliate anew; to call back into union and friendship the affections which have been alienated; to restore to friendship or favor after estrangement; as, to reconcile men or parties that have been at variance.",
"reconciliation": "In Scripture, the means by which sinners are reconciled and brought into a state of favor with God, after natural estrangement or enmity; the atonement; expiation.",
"heathen": "A pagan; a Gentile; one who worships idols, or is unacquainted with the true God. In the Scriptures, the word seems to comprehend all nations except the Jews or Israelites, as they were all strangers to the true religion, and all addicted to idolatry.",
"abomination": "The object of detestation, a common signification in scripture.",
"sanctuary": "A sacred place; particularly among the Israelites, the most retired part of the temple at Jerusalem, called the Holy of Holies, in which was kept the ark of the covenant, and into which no person was permitted to enter except the high priest, and that only once a year to intercede for the people.",
"ordinance": "A rule established by authority; a permanent rule of action. An ordinance may be a law or statute of sovereign power. In this sense it is often used in the Scriptures.",
"testimony": "In Scripture, the two tables of the law.",
"inheritance": "An estate given or possessed by donation or divine appropriation.",
"circumcision": "To cut off the prepuce or foreskin of males; a ceremony or rite in the Jewish and Mohammedan religions.",
"uncircumcision": "Absence or want of circumcision.",
"gospel": "The history of the birth, life, actions, death, resurrection, ascension and doctrines of Jesus Christ; or a revelation of the grace of God to fallen man through a mediator, including the character, actions, and doctrines of Christ, with the whole scheme of salvation, as revealed by Christ and his apostles.",
"baptism": "The application of water to a person, as a sacrament or religious ceremony, by which he is initiated into the visible church of Christ.",
"apostle": "A person deputed to execute some important business; but appropriately, a disciple of Christ commissioned to preach the gospel.",
"epistle": "A writing, directed or sent, communicating intelligence to a distant person; a letter; a letter missive.",
"doctrine": "In a general sense, whatever is taught.",
"blasphemy": "An indignity offered to God by words or writing; reproachful, contemptuous or irreverent words uttered impiously against Jehovah.",
"idolatry": "The worship of idols, images, or any thing made by hands, or which is not God.",
"fornication": "The incontinence or lewdness of unmarried persons, male or female; also, the criminal conversation of a married man with an unmarried woman.",
"whoredom": "In Scripture, idolatry; the desertion of the worship of the true God, for the worship of idols.",
"lasciviousness": "Looseness; irregular indulgence of animal desires; wantonness; lustfulness.",
"covetousness": "A strong or inordinate desire of obtaining and possessing some supposed good; usually in a bad sense, and applied to an inordinate desire of wealth or avarice.",
"hypocrisy": "Simulation; a feigning to be what one is not; or dissimulation, a concealment of one's real character or motives.",
"ungodliness": "Impiety; wickedness; disregard of God and his commands and neglect of his worship; or any positive act of disobedience or irreverence.",
"vanity": "Emptiness; want of substance to satisfy desire; uncertainty; inanity.",
"sojourn": "To dwell for a time; to dwell or live in a place as a temporary resident, or as a stranger, not considering the place as his permanent habitation.",
"supplication": "Entreaty; humble and earnest prayer in worship.",
"intercession": "The act of interceding; mediation; interposition between parties at variance, with a view to reconciliation; prayer or solicitation to one party in favor of another, sometimes against another.",
"mediator": "One that interposes between parties at variance for the purpose of reconciling them.",
"oblation": "Any thing offered or presented in worship or sacred service; an offering; a sacrifice.",
"consecrate": "To make or declare to be sacred, by certain ceremonies or rites; to appropriate to sacred uses; to set apart, dedicate, or devote, to the service and worship of God; as, to consecrate a church.",
"purification": "In religion, the act or operation of cleansing ceremonially, by removing any pollution or defilement.",
"defile": "To pollute; to make ceremonially unclean.",
"chasten": "To correct by punishment; to punish; to inflict pain for the purpose of reclaiming an offender; as, to chasten a son with a rod.",
"longsuffering": "Bearing injuries or provocation for a long time; patient; not easily provoked.",
"tribulation": "Severe affliction; distresses of life; vexations. In Scripture, it often denotes the troubles and distresses which proceed from persecution.",
"resurrection": "A rising again; chiefly, the revival of the dead of the human race, or their return from the grave, particularly at the general judgment.",
"immortality": "The quality of never ceasing to live or exist; exemption from death and annihilation; life destined to endure without end; as the immortality of the human soul.",
"incorruption": "Incapacity of being corrupted.",
"regeneration": "In theology, new birth by the grace of God; that change by which the will and natural enmity of man to God and his law are subdued, and a principle of supreme love to God and his law, or holy affections, are implanted in the heart.",
"adoption": "God's taking the sinful children of men into his favor and protection.",
"election": "In theology, divine choice; predetermination of God, by which persons are distinguished as objects of mercy, become subjects of grace, are sanctified and prepared for heaven.",
"predestinate": "To predetermine or foreordain; to appoint or ordain beforehand by an unchangeable purpose.",
"foreknowledge": "Knowledge of a thing before it happens; prescience.",
"glorify": "To praise; to magnify and honor in worship; to ascribe honor to, in thought or words.",
"magnify": "To extol; to exalt; to elevate; to raise in estimation.",
"exhortation": "The act or practice of exhorting; the act of inciting to laudable deeds; incitement to that which is good or commendable.",
"edify": "To instruct and improve the mind in knowledge generally, and particularly in moral and religious knowledge, in faith and holiness.",
"admonish": "To warn or notify of a fault; to reprove with mildness.",
"contrite": "Literally, worn or bruised. Hence, broken-hearted for sin; deeply affected with grief and sorrow for having offended God; humble; penitent; as a contrite sinner.",
"repentance": "Real penitence; sorrow or deep contrition for sin, as an offense and dishonor to God, a violation of his holy law, and the basest ingratitude towards a Being of infinite benevolence.",
"backsliding": "The act of apostatizing from faith or practice; a falling insensibly from religion into sin or idolatry.",
"reprobate": "Abandoned in sin; lost to virtue or grace.",
"heresy": "A fundamental error in religion, or an error of opinion respecting some fundamental doctrine of religion.",
"carnal": "Pertaining to flesh; fleshly; sensual; opposed to spiritual; as carnal pleasure.",
"condemnation": "The act of condemning; the judicial act of declaring one guilty, and dooming him to punishment.",
"damnation": "Sentence or condemnation to everlasting punishment in the future state; or the state of eternal torments.",
"ransom": "In Scripture, the price paid for a forfeited life, or for delivery or release from capital punishment.",
"kinsman": "A man of the same race or family; one related by blood.",
"birthright": "Any right or privilege, to which a person is entitled by birth, such as an estate descendible by law to an heir, or civil liberty under a free constitution.",
"firstborn": "The eldest child; the first in the order of birth.",
"priesthood": "The order of men set apart for sacred offices; the order composed of priests.",
"nazarite": "A jew who professed extraordinary purity of life and devotion.",
"amen": "In English, after the oriental manner, it is used at the beginning, but more generally at the end of declarations and prayers, in the sense of, be it firm, be it established.",
"alleluia": "Praise ye Jehovah; give praise to God; a word used in songs or praise, or a term of rejoicing in solemn ascriptions of thanksgiving to God.",
"jehovah": "The Scripture name of the Supreme Being.",
"sabaoth": "Armies",
"godhead": "Godship; deity; divinity; divine nature or essence; applied to the true God, and to heathen deities.",
"comforter": "The title of the Holy Spirit, whom the Father will send in my name--he shall teach you all things.",
"bishop": "In the primitive church, a spiritual overseer; an elder or presbyter; one who had the pastoral care of a church.",
"deacon": "A person in the lowest degree of holy orders. The office of deacon was instituted by the apostles, and seven persons were chosen at first, to serve at the feasts of christians and distribute bread and wine to the communicants, and to minister to the wants of the poor.",
"presbytery": "A body of elders in the christian church.",
"evangelist": "A preacher or publisher of the gospel of Jesus Christ, licensed to preach, but not having charge of a particular church.",
"steward": "A man employed in great families to manage the domestic concerns, superintend the other servants, collect the rents or income, keep the accounts, etc.",
"malefactor": "One who commits a crime; one guilty of violating the laws, in such a manner as to subject him to public prosecution and punishment, particularly to capital punishment; a criminal.",
"divination": "The act of divining; a foretelling future events, or discovering things secret or obscure, by the aid of superior beings, or by other than human means.",
"soothsayer": "A foreteller; a prognosticator; one who undertakes to foretell future events without inspiration.",
"necromancer": "One who pretends to foretell future events by holding converse with departed spirits; a conjurer.",
"wizard": "A conjurer; an enchanter; a sorcerer.",
"witchcraft": "The practices of witches; sorcery; enchantments; intercourse with the devil.",
"sorcery": "Magic; enchantment; witchcraft",
"enchantment": "The act of producing certain wonderful effects by the invocation or aid of demons, or the agency of certain supposed spirits; the use of magic arts, spells or charms; incantation.",
"communion": "Fellowship; intercourse between two persons or more; interchange of transactions, or offices; a state of giving and receiving; agreement; concord.",
"infirmity": "An unsound or unhealthy state of the body; weakness; feebleness.",
"bondage": "Slavery or involuntary servitude; captivity; imprisonment; restraint of a person's liberty by compulsion.",
"heir": "One who is entitled to possess. In Scripture, saints are called heirs of the promise, heirs of righteousness, heirs of salvation, etc., by virtue of the death of Christ, or of God's gracious promises.",
"guile": "Craft; cunning; artifice; duplicity; deceit; usually in a bad sense.",
"variance": "Difference that produces dispute or controversy; disagreement; dissension; discord.",
"emulations": "In a bad sense, a striving to equal or do more than others to obtain carnal favors or honors.",
"seditions": "A factious commotion of the people, a tumultuous assembly of men rising in opposition to law or the administration of justice, and in disturbance of the public peace.",
"revellings": "A feasting with noisy merriment; revelry.",
"slothful": "Inactive; sluggish; lazy; indolent; idle.",
"offering": "That which is presented in divine service; an animal or a portion of bread or corn, or of gold and silver, or other valuable articles, presented to God as an atonement for sin, or as a return of thanks for his favors, or for other religious purpose; a sacrifice; an oblation.",
"gentiles": "In the scriptures, a pagan; a worshipper of false gods; any person not a Jew or a christian; a heathen.",
"atonement": "In theology, the expiation of sin made by the obedience and personal sufferings of Christ.",
"covenant": "A mutual consent or agreement of two or more persons, to do or to forbear some act or thing; a contract; stipulation.",
"unction": "Divine or sanctifying grace."
};

/* the build wraps this in an IIFE and adds "use strict" itself */
/* The one-file build inlines its data in <script id="META"> and
   <script id="BIBLE">; the hosted build ships them as files and fetches them.
   Reading the elements unconditionally threw on the hosted build before a
   single line rendered, which is what left it stuck on "Loading the
   scriptures". Absent elements are now simply absent. */
/* ---- the bridge to the phone's own code ----
   The store app loads this script as it is, without Capacitor's JavaScript
   package, and the bridge the phone injects has no registerPlugin(): that
   lives in the package. Without it the store, the native narrator, sharing
   files and reminders never reached the phone at all. This is the same
   connection the package makes, built from what the bridge does provide:
   the list of native plugins (PluginHeaders) and nativePromise/nativeCallback.
   The phone already defines Capacitor.Plugins.<name> for each of its plugins,
   so registerPlugin() hands that back, and builds the connection itself only
   for a plugin the phone listed but did not define. */
(function capBridge(){
  var C=(typeof window!=='undefined')?window.Capacitor:null;
  if(!C||C.registerPlugin||typeof C.nativePromise!=='function') return;
  var plugins=C.Plugins=C.Plugins||{};
  function header(name){
    var hs=C.PluginHeaders||[];
    for(var i=0;i<hs.length;i++) if(hs[i]&&hs[i].name===name) return hs[i];
    return null;
  }
  function unimplemented(name, m){
    var e=new Error('"'+name+(m?'.'+m+'()':'')+'" is not implemented on '+(C.getPlatform?C.getPlatform():'this phone'));
    e.code='UNIMPLEMENTED'; return Promise.reject(e);
  }
  function register(name){
    /* the phone itself defines Capacitor.Plugins.<name> for each plugin it
       has; use that, and build the connection only where it did not */
    if(plugins[name]) return plugins[name];
    var h=header(name);
    function method(m){
      var mh=null, list=(h&&h.methods)||[];
      for(var i=0;i<list.length;i++) if(list[i].name===m){ mh=list[i]; break; }
      if(!mh) return function(){ return unimplemented(name, h?m:''); };
      if(mh.rtype==='promise') return function(opts){ return C.nativePromise(name, m, opts||{}); };
      /* callback methods: a listener, called each time the phone has news */
      return function(opts, cb){
        if(typeof opts==='function'){ cb=opts; opts={}; }
        var id;
        var p=new Promise(function(res){ id=C.nativeCallback(name, m, opts||{}, cb); res(id); });
        return p;
      };
    }
    function addListener(eventName, cb){
      if(!h) return unimplemented(name, 'addListener');
      var id=C.nativeCallback(name, 'addListener', {eventName:eventName}, cb);
      var remove=function(){
        try{ C.nativeCallback(name, 'removeListener', {eventName:eventName, callbackId:id}, cb); }catch(e){}
        return Promise.resolve();
      };
      var p=Promise.resolve({remove:remove});
      p.remove=remove;
      return p;
    }
    var cache={};
    var proxy=new Proxy({}, {get:function(_, prop){
        if(prop==='then'||prop==='$$typeof'||typeof prop!=='string') return undefined;
      if(prop==='toJSON') return function(){ return {}; };
      if(prop==='addListener') return addListener;
      return cache[prop]||(cache[prop]=method(prop));
    }});
    if(h) plugins[name]=proxy;
    return proxy;
  }
  C.registerPlugin=register;
  if(!C.isPluginAvailable) C.isPluginAvailable=function(n){ return Object.prototype.hasOwnProperty.call(plugins, n)||!!header(n); };
})();

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
  /* the Bible only: an imported book sits at a position in BOOKS that is not
     its id, so a reference to it would open the wrong book (or none) */
  for(var i=0;i<BOOKS.length;i++)
    if(!BOOKS[i].user&&normName(BOOKS[i].name)===n) return BOOKS[i].i;
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
    /* once a frame at most: it reads the bar's height, which is a layout */
    var queued=0;
    v.addEventListener('scroll',function(){ if(queued) return; queued=1;
      (window.requestAnimationFrame||setTimeout)(function(){ queued=0; updateBackFloat(pane, v); }); },{passive:true});
  });
}
function watchScroll(){
  watchBack();
  if(S.scrollWatched) return;
  S.scrollWatched=1;
  var q=0, tick=function(){ if(q) return; q=1;
    (window.requestAnimationFrame||setTimeout)(function(){ q=0; showTopBtn(scrolled()>420); }); };
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
      out.push('General note');
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
    return FS.writeFile({path:name, data:b64, directory:'CACHE', recursive:true});
  }).then(function(w){
    var uri=(w&&w.uri)||'';
    if(!uri) throw new Error('no file');
    return SH.share({title:name, files:[uri]}).then(function(){ return {ok:true, shared:true}; },
      function(e){
        /* closing the sheet is not a failure; anything else is, and then the
           picture is shown instead of nothing happening at all */
        var m=String((e&&(e.message||e.errorMessage))||e||'');
        if(/cancel/i.test(m)) return {ok:true, shared:false};
        throw e;
      });
  }).catch(function(e){ CARD_ERR=CARD_ERR||String((e&&e.message)||e||''); return {ok:false}; });
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
  var k=readKey(b,c), before=S.read[k], now;
  if(on===false||(on===undefined&&S.read[k])){ delete S.read[k]; now=false; }
  else { S.read[k]=Date.now(); now=true; try{ maybeAskReview(); }catch(e){} }
  saveRead();
  if(now||before) try{ goalOnRead(k, now, before); }catch(e){}
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
  if(payNative()){
    try{
      var SH=window.Capacitor.registerPlugin('Share');
      return Promise.resolve(SH.share({text:text, dialogTitle:vRef(b,c,v)}))
        .then(function(){return true;}).catch(function(e){
          /* closing the share sheet is a choice, not a failure: the
             clipboard is left as it was */
          if(/cancel/i.test(String((e&&(e.message||e.errorMessage))||e||''))) return false;
          return copyVerse(b,c,v); });
    }catch(e){}
  }
  if(navigator.share)
    return navigator.share({text:text}).then(function(){return true;})
      .catch(function(){ return false; });
  return copyVerse(b,c,v);
}

/* ---------- sharing a study sheet ----------
   Two ways. As text, for anyone: the question, every verse written out in
   full (so it reads without the app) and the notes. And as a small Sixteen
   Eleven file, the backup format holding just this sheet, which another
   reader adds to their own Study with "Add a shared sheet". Adding the same
   file twice does not double it: the sheet keeps its id, and only entries
   not already there are added. */
function sheetBooks(sh){
  var need={};
  (sh.items||[]).forEach(function(it){ parseRefs(it.refs||'').forEach(function(r){ if(r.ok) need[r.b]=1; }); });
  return Object.keys(need).map(Number);
}
function sheetAsText(sh, all){
  var out=[sh.name];
  if(sh.desc) out.push(sh.desc);
  out.push('');
  (sh.items||[]).forEach(function(it, k){
    out.push((it.n||String(k+1))+'. '+it.q);
    parseRefs(it.refs||'').forEach(function(r){
      if(!r.ok){ out.push('   '+r.label); return; }
      var t=rangeText(r.b, r.c, r.v1||1, r.v2||0, all);
      out.push('   '+r.label+(t?' \u2014 \u201c'+t+'\u201d':''));
    });
    if(it.note) out.push('   Note: '+it.note);
    out.push('');
  });
  out.push('King James Version. Shared from Sixteen Eleven.');
  return out.join('\n');
}
function sheetFile(sh){
  var data={format:BACKUP_FORMAT, version:1, kind:'study-sheet', exported:new Date().toISOString(),
            sheets:[JSON.parse(JSON.stringify(sh))]};
  var name='study-sheet-'+String(sh.name||'sheet').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)+'.json';
  return {name:name, blob:new Blob([JSON.stringify(data,null,1)],{type:'application/json'})};
}
/* ---------- a study sheet as a file: Markdown, plain text or PDF ----------
   The PDF is written here, with no library: Times in its three faces (one of
   the fonts every PDF reader has, so nothing is embedded), set on Letter
   pages with the verses written out in full and the page numbers at the
   foot. Widths are Adobe's own for Times, so the lines wrap where they
   should. Characters outside the Windows Latin set become "?". */
var PDFW={r:[250,333,408,500,500,833,778,180,333,333,500,564,250,333,250,278,500,500,500,500,500,500,500,500,500,500,278,278,564,564,564,444,921,722,667,667,722,611,556,722,722,333,389,722,611,889,722,722,556,722,667,556,611,722,722,944,722,722,611,333,278,333,469,500,333,444,500,444,500,444,333,500,500,278,278,500,278,778,500,500,500,500,333,389,278,500,500,722,500,500,444,480,200,480,541,350,500,350,333,500,444,1000,500,500,333,1000,556,333,889,350,611,350,350,333,333,444,444,350,500,1000,333,980,389,333,722,350,444,722,250,333,500,500,500,500,200,500,333,760,276,500,564,333,760,333,400,564,300,300,333,500,453,250,333,300,310,500,750,750,750,444,722,722,722,722,722,722,889,667,611,611,611,611,333,333,333,333,722,722,722,722,722,722,722,564,722,722,722,722,722,722,556,500,444,444,444,444,444,444,667,444,444,444,444,444,278,278,278,278,500,500,500,500,500,500,500,564,500,500,500,500,500,500,500,500],
  b:[250,333,555,500,500,1000,833,278,333,333,500,570,250,333,250,278,500,500,500,500,500,500,500,500,500,500,333,333,570,570,570,500,930,722,667,722,722,667,611,778,778,389,500,778,667,944,722,778,611,778,722,556,667,722,722,1000,722,722,667,333,278,333,581,500,333,500,556,444,556,444,333,500,556,278,333,556,278,833,556,500,556,556,444,389,333,556,500,722,500,500,444,394,220,394,520,350,500,350,333,500,500,1000,500,500,333,1000,556,333,1000,350,667,350,350,333,333,500,500,350,500,1000,333,1000,389,333,722,350,444,722,250,333,500,500,500,500,220,500,333,747,300,500,570,333,747,333,400,570,300,300,333,556,540,250,333,300,330,500,750,750,750,500,722,722,722,722,722,722,1000,722,667,667,667,667,389,389,389,389,722,722,778,778,778,778,778,570,778,722,722,722,722,722,611,556,500,500,500,500,500,500,722,444,444,444,444,444,278,278,278,278,500,556,500,500,500,500,500,570,500,556,556,556,556,500,556,500],
  i:[250,333,420,500,500,833,778,214,333,333,500,675,250,333,250,278,500,500,500,500,500,500,500,500,500,500,333,333,675,675,675,500,920,611,611,667,722,611,611,722,722,333,444,667,556,833,667,722,611,722,611,500,556,722,611,833,611,556,556,389,278,389,422,500,333,500,500,444,500,444,278,500,500,278,278,444,278,722,500,500,500,500,389,389,278,500,444,667,444,444,389,400,275,400,541,350,500,350,333,500,556,889,500,500,333,1000,500,333,944,350,556,350,350,333,333,556,556,350,500,889,333,980,389,333,667,350,389,556,250,389,500,500,500,500,275,500,333,760,276,500,675,333,760,333,400,675,300,300,333,500,523,250,333,300,310,500,750,750,750,500,611,611,611,611,611,611,889,667,611,611,611,611,333,333,333,333,722,667,722,722,722,722,722,675,722,722,722,722,722,556,611,500,500,500,500,500,500,500,667,444,444,444,444,444,278,278,278,278,500,500,500,500,500,500,500,675,500,500,500,500,500,444,500,444]};
var PDF_MAP={8364: 128, 8218: 130, 402: 131, 8222: 132, 8230: 133, 8224: 134, 8225: 135, 710: 136, 8240: 137, 352: 138, 8249: 139, 338: 140, 381: 142, 8216: 145, 8217: 146, 8220: 147, 8221: 148, 8226: 149, 8211: 150, 8212: 151, 732: 152, 8482: 153, 353: 154, 8250: 155, 339: 156, 382: 158, 376: 159};
function pdfCode(u){
  if((u>=32&&u<127)||(u>=160&&u<256)) return u;
  if(u===0x2009||u===0x200a||u===0x202f) return 32;
  return PDF_MAP[u]||63;
}
function pdfWidth(s, f, size){
  var w=0; for(var i=0;i<s.length;i++) w+=PDFW[f][pdfCode(s.charCodeAt(i))-32]||500;
  return w*size/1000;
}
function pdfWrap(s, f, size, max){
  var out=[], line='';
  String(s).split(/\s+/).forEach(function(word){
    if(!word) return;
    var t=line?line+' '+word:word;
    if(pdfWidth(t,f,size)<=max){ line=t; return; }
    if(line) out.push(line);
    while(pdfWidth(word,f,size)>max){         /* a word longer than the line */
      var k=word.length; while(k>1&&pdfWidth(word.slice(0,k),f,size)>max) k--;
      out.push(word.slice(0,k)); word=word.slice(k);
    }
    line=word;
  });
  if(line) out.push(line);
  return out.length?out:[''];
}
function pdfStr(s){
  var o='(';
  for(var i=0;i<s.length;i++){
    var c=pdfCode(s.charCodeAt(i));
    if(c===40||c===41||c===92) o+='\\'+String.fromCharCode(c);
    else if(c>126) o+='\\'+('00'+c.toString(8)).slice(-3);
    else o+=String.fromCharCode(c);
  }
  return o+')';
}
/* blocks: {t:text, f:'r'|'b'|'i', s:size, gap:space above, ind:indent} */
function makePdf(blocks, title){
  var PW=612, PH=792, M=60, pages=[], cur=null, y=0;
  function page(){ cur=[]; pages.push(cur); y=PH-M; }
  page();
  blocks.forEach(function(b){
    var lh=b.s*1.38, ind=b.ind||0, lines=pdfWrap(b.t, b.f, b.s, PW-2*M-ind);
    y-=(b.gap||0);
    lines.forEach(function(l){
      if(y-lh<M){ page(); }
      y-=lh;
      cur.push('BT /F'+b.f+' '+b.s+' Tf '+(M+ind).toFixed(1)+' '+(y+lh*0.25).toFixed(1)+' Td '+pdfStr(l)+' Tj ET');
    });
  });
  var objs=[], n=pages.length;
  objs[1]='<< /Type /Catalog /Pages 2 0 R >>';
  var kids=[]; for(var i=0;i<n;i++) kids.push((7+2*i)+' 0 R');
  objs[2]='<< /Type /Pages /Kids ['+kids.join(' ')+'] /Count '+n+' >>';
  objs[3]='<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>';
  objs[4]='<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold /Encoding /WinAnsiEncoding >>';
  objs[5]='<< /Type /Font /Subtype /Type1 /BaseFont /Times-Italic /Encoding /WinAnsiEncoding >>';
  objs[6]='<< /Title '+pdfStr(title||'Study sheet')+' /Producer (Sixteen Eleven) >>';
  pages.forEach(function(ops, k){
    var foot='BT /Fr 9 Tf '+((PW-pdfWidth(String(k+1),'r',9))/2).toFixed(1)+' 34 Td '+pdfStr(String(k+1))+' Tj ET';
    var body=ops.concat([foot]).join('\n');
    objs[7+2*k]='<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+PW+' '+PH+'] /Resources << /Font << /Fr 3 0 R /Fb 4 0 R /Fi 5 0 R >> >> /Contents '+(8+2*k)+' 0 R >>';
    objs[8+2*k]='<< /Length '+body.length+' >>\nstream\n'+body+'\nendstream';
  });
  var out='%PDF-1.4\n', offs=[];
  for(var j=1;j<objs.length;j++){ offs[j]=out.length; out+=j+' 0 obj\n'+objs[j]+'\nendobj\n'; }
  var xref=out.length;
  out+='xref\n0 '+objs.length+'\n0000000000 65535 f \n';
  for(j=1;j<objs.length;j++) out+=('000000000'+offs[j]).slice(-10)+' 00000 n \n';
  out+='trailer\n<< /Size '+objs.length+' /Root 1 0 R /Info 6 0 R >>\nstartxref\n'+xref+'\n%%EOF\n';
  return new Blob([out],{type:'application/pdf'});
}
/* the sheet once, for all three files: the question, each passage with its
   verses written out, the note */
function sheetParts(sh){
  return {name:sh.name||'Study sheet', desc:sh.desc||'', items:(sh.items||[]).map(function(it,k){
    return {n:it.n||String(k+1), q:it.q||'', note:it.note||'', refs:parseRefs(it.refs||'').map(function(r){
      return {label:r.label, text:r.ok?rangeText(r.b, r.c, r.v1||1, r.v2||0, true):''}; })};
  })};
}
function sheetAsMarkdown(sh){
  var p=sheetParts(sh), out=['# '+p.name];
  if(p.desc) out.push('', '*'+p.desc+'*');
  p.items.forEach(function(it){
    out.push('', '## '+it.n+'. '+it.q);
    it.refs.forEach(function(r){ out.push('', '> **'+r.label+'**'+(r.text?' \u2014 '+r.text:'')); });
    if(it.note) out.push('', '*Note:* '+it.note);
  });
  out.push('', '---', '', 'King James Version. Made with Sixteen Eleven.', '');
  return out.join('\n');
}
function sheetAsPdf(sh){
  var p=sheetParts(sh), bl=[{t:p.name, f:'b', s:22}];
  if(p.desc) bl.push({t:p.desc, f:'i', s:12.5, gap:4});
  p.items.forEach(function(it){
    bl.push({t:it.n+'. '+it.q, f:'b', s:14, gap:18});
    it.refs.forEach(function(r){
      bl.push({t:r.label, f:'b', s:11, gap:7, ind:14});
      if(r.text) bl.push({t:r.text, f:'r', s:11.5, ind:14});
    });
    if(it.note) bl.push({t:'Note: '+it.note, f:'i', s:11, gap:7, ind:14});
  });
  bl.push({t:'King James Version. Made with Sixteen Eleven.', f:'i', s:9.5, gap:24});
  return makePdf(bl, p.name);
}
function sheetSlug(sh){
  return 'study-sheet-'+(String(sh.name||'sheet').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)||'sheet');
}
/* Save as: a browser downloads it; the store apps hand it to the share sheet
   (Save to Files, Mail, Print and the rest) */
function saveSheetAs(sh, kind){
  return sheetReady(sh).then(function(){
    var name=sheetSlug(sh)+'.'+kind, blob;
    if(kind==='pdf') blob=sheetAsPdf(sh);
    else blob=new Blob([kind==='md'?sheetAsMarkdown(sh):sheetAsText(sh, true)+'\n'],{type:kind==='md'?'text/markdown':'text/plain'});
    return saveFile(name, blob).then(function(r){ return r&&r.ok?(r.shared===false?'':payNative()?'shared':'savedas'):'failed'; });
  });
}
/* the verses must be loaded to be written out */
function sheetReady(sh){
  return Promise.all(sheetBooks(sh).map(function(b){ return fetchBook(b).catch(function(){}); }));
}
function shareSheetText(sh){
  return sheetReady(sh).then(function(){
    var text=sheetAsText(sh);
    if(payNative()){
      try{
        var SH=window.Capacitor.registerPlugin('Share');
        return Promise.resolve(SH.share({title:sh.name, text:text, dialogTitle:sh.name}))
          .then(function(){ return 'shared'; }).catch(function(e){
            if(/cancel/i.test(String((e&&(e.message||e.errorMessage))||e||''))) return '';
            return copyPlain(text).then(function(ok){ return ok?'copied':'failed'; }); });
      }catch(e){}
    }
    if(navigator.share)
      return navigator.share({title:sh.name, text:text}).then(function(){ return 'shared'; })
        .catch(function(e){ return (e&&e.name==='AbortError')?'':copyPlain(text).then(function(ok){ return ok?'copied':'failed'; }); });
    return copyPlain(text).then(function(ok){ return ok?'copied':'failed'; });
  });
}
function copyPlain(text){
  if(navigator.clipboard&&navigator.clipboard.writeText)
    return navigator.clipboard.writeText(text).then(function(){ return true; }).catch(function(){ return legacyCopy(text); });
  return Promise.resolve(legacyCopy(text));
}
function shareSheetFile(sh){
  var f=sheetFile(sh);
  if(payNative()) return nativeShareFile(f.name, f.blob).then(function(r){ return r&&r.ok?'shared':'failed'; });
  var file=null; try{ file=new File([f.blob], f.name, {type:'application/json'}); }catch(e){}
  if(file&&navigator.canShare&&navigator.share){
    var can=false; try{ can=navigator.canShare({files:[file]}); }catch(e){}
    if(can) return navigator.share({files:[file], title:sh.name}).then(function(){ return 'shared'; })
      .catch(function(e){ return (e&&e.name==='AbortError')?'':'failed'; });
  }
  try{ saveFile(f.name, f.blob); return Promise.resolve('saved'); }catch(e){ return Promise.resolve('failed'); }
}
var SHEET_SAY={shared:'', savedas:'Saved to your downloads.', copied:'Copied. Paste it into a message or email.', saved:'Saved. Send the file to someone with Sixteen Eleven; they tap Add a shared sheet in Study.',
  failed:'That did not work on this device.'};
/* a shared sheet arriving: the same merge a backup uses, sheets only */
function importSheetFile(file){
  return fileText(file).then(function(t){
    var data;
    try{ data=JSON.parse(t); }catch(e){ throw new Error('That file is not a study sheet.'); }
    if(!data||!Array.isArray(data.sheets)||!data.sheets.length) throw new Error('That file has no study sheet in it.');
    var before=S.sheets.length;
    var a=mergeBackup({format:BACKUP_FORMAT, version:1, sheets:data.sheets});
    var newSheets=S.sheets.length-before;
    return {sheets:newSheets, entries:a.sheets, name:(cleanSheets(data.sheets)[0]||{}).name||''};
  });
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
      .catch(function(){ META.xrefs=''; })
      .then(function(){
        /* a failed fetch (offline) must not switch cross references off for
           the whole session: the next verse card tries again */
        if(!META.xrefs){ xrefPending=null; S.popXr=0; }
      });
  }
  var pend=xrefPending||Promise.resolve();
  pend.then(function(){ if(then) then(); });
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
       platePins:[], plateFocus:false, plateCenter:null,
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
       textSize:2, page:'paper', redLetters:true, readerOpts:false, restoreMsg:'', restoreErr:0, copied:false, updateShown:false,
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
    /* A write that fails (the phone's storage full, mostly) used to vanish
       silently, so a note said "Saved" and was gone on the next launch. Now
       the key is remembered, retried, and the reader is told until it lands. */
    set:function(k,v){
      mem[k]=v;
      /* what is synced across devices goes up a few seconds after it changes */
      try{ if(typeof SYNC!=='undefined'&&SYNC&&SYNC.on&&!SYNC.applying&&SYNC_KEYS[k]) syncSoon(); }catch(e){}
      if(hasArtifact) return window.storage.set(k,JSON.stringify(v)).then(function(){ storeOk(k); },
        function(e){ storeFailed(k,e); });
      try{ if(L){ L.setItem(k,JSON.stringify(v)); storeOk(k); } }
      catch(e){ storeFailed(k,e); }
      return Promise.resolve();
    },
    failing:function(){ return Object.keys(STORE_FAILED).length>0; },
    retry:function(){
      Object.keys(STORE_FAILED).forEach(function(k){ if(mem[k]!==undefined) Store.set(k,mem[k]); });
    }
  };
})();
var STORE_FAILED={};
function storeOk(k){
  if(!STORE_FAILED[k]) return;
  delete STORE_FAILED[k];
  if(!Object.keys(STORE_FAILED).length) storeWarn(false);
}
function storeFailed(k,e){
  var first=!STORE_FAILED[k];
  STORE_FAILED[k]=Date.now();
  if(first) storeWarn(true);
  if(!storeFailed.timer) storeFailed.timer=setInterval(function(){
    if(!Object.keys(STORE_FAILED).length){ clearInterval(storeFailed.timer); storeFailed.timer=null; return; }
    Store.retry();
  },30000);
}
function storeWarn(on){
  try{
    var el=document.getElementById('storewarn');
    if(!el){ if(!on) return; el=document.createElement('div'); el.id='storewarn'; el.setAttribute('role','alert'); document.body.appendChild(el); }
    el.innerHTML=on?'<span>This phone\u2019s storage is full, so your latest changes are not saved yet. '+
      'Free some space, or download a backup in Settings.</span><button data-a="storeretry">Try again</button>':'';
    el.className=on?'on':'';
  }catch(e){}
}

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
/* "50 Basics" once shipped with the app and was saved into every phone's
   sheets. It is retired: its own entries (b1, b2...) go; anything the reader
   added to it stays, and the sheet stays only if something of theirs is left. */
function dropRetiredSheets(list){
  var changed=false;
  var out=list.filter(function(sh){
    if(!sh||sh.id!=='basics50') return true;
    var keep=(sh.items||[]).filter(function(it){ return !(it&&/^b\d+$/.test(it.id||'')); });
    if(keep.length!==(sh.items||[]).length){ changed=true; sh.items=keep; }
    if(!keep.length){ changed=true; return false; }
    return true;
  });
  if(changed) Store.set('strata:sheets',out);
  return out;
}

function loadAll(cb){
  Store.get('strata:highlights').then(function(h){
    S.hl=cleanHighlights(h);
    return Store.get('strata:notes');
  }).then(function(n){
    S.notes=migrateNotes(n);   /* notes written before the fuller shape */
    return Store.get('strata:sheets');
  }).then(function(sh){
    var cs=cleanSheets(sh);
    S.sheets=cs.length?dropRetiredSheets(cs):defaultSheets();
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
    if(bm&&typeof bm==='object') S.marks=cleanMarks(bm);
    return Store.get('strata:focus');
  }).then(function(fo){
    if(typeof fo==='boolean') S.focus=fo;
    return Store.get('strata:words');
  }).then(function(wm){
    if(typeof wm==='boolean') S.wordMeanings=wm;
    return Store.get('strata:wordmark');
  }).then(function(wk){
    if(wk==='glow'||wk==='line'){ S.wordMark=wk; applyWordMark(); }
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
    return Store.get('strata:searchmode');
  }).then(function(smd){
    if(smd==='words'||smd==='smart') S.searchMode=smd;
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
    return Store.get('strata:goal');
  }).then(function(g){
    try{ goalLoad(g); }catch(e){}
    return Store.get('strata:notepark');
  }).then(function(np){
    if(np&&typeof np==='object'&&Date.now()-(+np.at||0)<7*864e5) NOTEPARK=np;
    return Promise.all([Store.get('strata:sync'), Store.get('strata:syncbase')]);
  }).then(function(sy){
    try{ syncLoad(sy[0], sy[1]); }catch(e){}
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
      /* the page is paper, by day and by night: Plain and Contrast are
         retired, so whatever was saved before reads as paper now */
      S.page='paper';
      if(typeof pl.red==='boolean') S.redLetters=pl.red;
      /* the place is kept whenever the book and chapter exist. The store
         app loads books one by one, so the book may not be in memory yet:
         the reader fetches it as it opens. Before, this required it loaded,
         and every launch fell back to Proverbs 1 and saved over the place. */
      var pb=(typeof pl.b==='number')?BK(pl.b):null;
      if(pb&&!pb.user&&typeof pl.c==='number'&&pl.c>=1&&pl.c<=(pb.nch||0)){
        S.book=pl.b; S.reading=pl.b; S.ch=pl.c; S.lastRead={b:pl.b,c:pl.c};
      }
    }
    S.ready=true;
    /* the first paint has its own guard: an error drawing it used to land in
       the catch below, which replaced the study sheets that had loaded fine
       with the defaults (and the next save made that permanent) */
    try{ cb(); }catch(e){ try{ console.error(e); }catch(_){} }
    loadShelf().then(function(){ if(S.shelf.length) render(); });
  }).catch(function(e){
    /* only fill in what did not load; never replace what did */
    if(!Array.isArray(S.sheets)) S.sheets=defaultSheets();
    if(!S.hl||typeof S.hl!=='object') S.hl={};
    if(!Array.isArray(S.notes)) S.notes=[];
    S.ready=true;
    try{ cb(); }catch(_){}
    loadShelf().then(function(){ if(S.shelf.length) render(); }).catch(function(){});
  });
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

/* ---- the phone's own audio player ----
   In the store app the recorded narration is played natively (see
   native/plugins/narrator). A web page cannot keep reading with the screen
   locked: the phone suspends its script, so it can never start the next clip.
   The native player is given the whole queue and moves on by itself, with
   lock-screen and notification controls. In a browser this is null and the
   <audio> element below does the work as before. */
var Narrator=(function(){
  try{
    var C=(typeof window!=='undefined')?window.Capacitor:null;
    if(C&&C.isNativePlatform&&C.isNativePlatform()&&C.registerPlugin&&
       (!C.isPluginAvailable||C.isPluginAvailable('Narrator')))
      return C.registerPlugin('Narrator');
  }catch(e){}
  return null;
})();

/* ---- unified player ---- */
var Speech=(function(){
  var synth=(typeof window!=='undefined'&&window.speechSynthesis)?window.speechSynthesis:null;
  var queue=[], idx=0, playing=false, paused=false, onTick=null, onDone=null, onProgress=null;
  var onState=null, nat=false, natHooked=false;  /* nat: the native player has the queue */
  var sysErrs=0;
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
    u.onend=function(){ stopEst(); sysErrs=0; if(playing&&!paused) sysAt(i+1); };
    /* A voice that fails on every passage (a network voice offline, a voice
       that has been removed) used to race through the chapter and on into the
       next ones, marking each read. Three failures in a row stop it instead. */
    u.onerror=function(e){
      stopEst();
      var why=e&&e.error;
      if(why==='interrupted'||why==='canceled') return;
      if(++sysErrs>=3){ sysErrs=0; stop();
        setTimeout(function(){ try{ stopSpeaking();
          announce('The voice could not read this. Choose another voice in Read aloud.'); }catch(_){} },0);
        return; }
      if(playing&&!paused) sysAt(i+1); };
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
    if(nat){ try{ Narrator.pause(); }catch(e){} return; }
    if(el&&!el.paused){ try{ el.pause(); }catch(e){} }
    /* The phone's own pause is unreliable on iPhone and resumes mid-sentence;
       reading starts again from the verse instead, so the speech is simply
       cancelled here. paused is set first, so its end does not move on. */
    if(engine()!=='kokoro'&&supported()){ try{ synth.cancel(); }catch(e){} }
  }
  function resume(){
    if(!playing) return; paused=false;
    if(nat){ try{ Narrator.play(); }catch(e){} return; }
    if(engine()==='kokoro'){ var a=audioEl(); if(a){ var p=a.play(); if(p&&p.catch)p.catch(function(){}); } }
    else if(supported()){ try{ synth.resume(); }catch(e){} }
  }
  function stop(){
    playing=false; paused=false; idx=0; token++; stopEst();
    if(nat){ nat=false; try{ Narrator.stop(); }catch(e){} }
    if(supported()){ try{ synth.cancel(); }catch(e){} }
    if(el){ try{ el.pause(); el.removeAttribute('src'); }catch(e){} }
    revoke();
  }
  function voices(){ try{ return synth?synth.getVoices():[]; }catch(e){ return []; } }

  /* Play a list of already-rendered audio files. The same element, ticks and
     completion callback as synthesised speech, so the bar, the follow-along
     highlight and continuing into the next chapter all work unchanged. */
  function natHook(){
    if(natHooked) return; natHooked=true;
    /* the native player reports back; nat is false once the page has moved
       on to something else, so a late event from an old queue is ignored */
    Narrator.addListener('item', function(e){
      if(!nat||!playing) return; idx=(e&&e.index)|0; if(onTick) onTick(idx); });
    Narrator.addListener('progress', function(e){
      if(!nat||!e||!(e.duration>0)) return; report(e.index|0, e.position/e.duration); });
    Narrator.addListener('state', function(e){
      if(!nat||!playing) return;
      var p=!(e&&e.playing);
      if(p!==paused){ paused=p; if(onState) onState(); } });
    Narrator.addListener('ended', function(){
      if(!nat||!playing) return; nat=false; playing=false; if(onDone) onDone(); });
  }
  function playFiles(urls, from, startFrac, meta){
    stop();
    queue = urls.slice();
    idx = Math.max(0, Math.min(from || 0, queue.length - 1));
    playing = true; paused = false;
    if(Narrator){
      natHook(); nat=true;
      Narrator.load({
        items: queue.map(function(u,i){ var m=(meta&&meta[i])||{};
          return {url:u, title:m.title||'', album:m.album||''}; }),
        index: idx, fraction: startFrac||0, rate: rate, artist: 'Sixteen Eleven'
      }).catch(function(){ nat=false; playing=false; if(onState) onState();
        /* the player could not start: the page stops thinking it is reading */
        setTimeout(function(){ try{ stopSpeaking(); announce('The narration could not start. Try again in a moment.'); }catch(_){} },0); });
      if(onTick) onTick(idx);
      return true;
    }
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
    setRate:function(r){rate=r; if(nat){ try{ Narrator.setRate({rate:r}); }catch(e){} }},
    getRate:function(){return rate;},
    onState:function(f){onState=f;}, isNative:function(){return nat;},
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
          userRefs:S.userRefs, marks:S.marks, goal:GOAL, textSize:S.textSize};
}
/* A cheap digest of what would be saved: counts alone missed an edited note
   or a changed colour, so the text itself goes in (as a short hash). */
function dataFingerprint(){
  var n=[Object.keys(S.hl||{}).length, (S.notes||[]).length,
         (S.sheets||[]).reduce(function(a,x){return a+((x&&x.items)||[]).length;},0),
         Object.keys(S.read||{}).length, Object.keys(S.userRefs||{}).length,
         Object.keys(S.marks||{}).length];
  if(n.join('')==='000000') return '0.0.0.0.0';
  var str='';
  try{ str=JSON.stringify([S.hl,S.notes,S.sheets,S.userRefs,S.marks]); }catch(e){}
  var h=5381; for(var i=0;i<str.length;i++) h=((h<<5)+h+str.charCodeAt(i))|0;
  return n.join('.')+'.'+(h>>>0).toString(36);
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
  var save=function(){
    /* a note being written is put away first, so it is in the snapshot too */
    try{ (LAYOUT==='split'?['A','B']:[CUR]).forEach(function(p){
      withPane(p,function(){ if(S.editing) commitNote(S.editing); }); }); }catch(e){}
    takeSnapshot('session'); };
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
/* ---------- saying the hard names ----------
   Phone voices guess at names they have never met, so "Job" came out as a
   job of work, "Pharaoh" as "far-o-ah", "Capernaum" anyhow. These are the
   names, places and old words they most often get wrong, spelt the way they
   are said. Only what the voice hears changes; the page is untouched. Each
   respelling is one word, so the words still line up with the text as it is
   read. The recorded narration is made with the same list
   (voice/render_voice.py), so the two voices agree. Keep them in step. */
var SAY={
  /* people */
  Job:'Jobe', Pharaoh:'Fairoh', Pharaohs:'Fairohs', Melchizedek:'Melkizzedek', Melchisedec:'Melkizzedek',
  Nebuchadnezzar:'Nebbuhkudnezzar', Nebuchadrezzar:'Nebbuhkudrezzar', Belshazzar:'Belshazzer',
  Shadrach:'Shaydrack', Meshach:'Meeshack', Abednego:'Abbednegoh', Methuselah:'Methoozelah',
  Zerubbabel:'Zeruhbabbel', Mephibosheth:'Meffibbosheth', Ahasuerus:'Ahazzyooerus', Artaxerxes:'Artazurkseez',
  Hezekiah:'Hezzekyah', Zedekiah:'Zeddekyah', Gedaliah:'Geddalyah', Hilkiah:'Hilkyah', Jehoshaphat:'Jehoshafat',
  Jehu:'Jeehew', Rehoboam:'Reeuhboam', Jeroboam:'Jerruhboam', Naaman:'Nayuhmun', Gehazi:'Guhhayzye',
  Mordecai:'Mordekye', Haman:'Hayman', Eliphaz:'Ellifaz', Zophar:'Zohfar', Elihu:'Elyhew',
  Asaph:'Aysaff', Jeduthun:'Jedoothun', Malachi:'Malakye', Haggai:'Haggye', Zephaniah:'Zeffanyah',
  Zechariah:'Zekkaryah', Zacharias:'Zakkaryus', Habakkuk:'Habbakuk', Nahum:'Nayhum', Hosea:'Hozayuh',
  Amos:'Aymus', Nehemiah:'Neeuhmyah', Esaias:'Eezayus', Elias:'Eelyus', Eliseus:'Ellisseeus', Elisha:'Eelysha',
  Levi:'Leevye', Esau:'Eesaw', Laban:'Layban', Leah:'Leeuh', Sarai:'Sayrye', Nahor:'Nayhor',
  Terah:'Teeruh', Enoch:'Eenuck', Lamech:'Laymeck', Japheth:'Jayfeth', Aaron:'Airun', Korah:'Koruh',
  Balaam:'Baylum', Balak:'Baylack', Rahab:'Rayhab', Achan:'Aykan', Jephthah:'Jefthuh', Joab:'Joeab',
  Ahithophel:'Ahithofel', Hiram:'Hyrum', Caiaphas:'Kayuhfus', Herodias:'Herohdeeus', Iscariot:'Iskarryot',
  Thaddaeus:'Thaddeeus', Cephas:'Seefus', Nicodemus:'Nickuhdeemus', Zacchaeus:'Zakkeeus', Bartimaeus:'Bartimmeeus',
  Philemon:'Fylemon', Onesimus:'Onessimus', Epaphroditus:'Eppafrodytus', Timotheus:'Timmotheeus',
  Aquila:'Akwilla', Messias:'Messyus', Antiochus:'Anteyokus', Epiphanes:'Ippiffaneez', Maccabeus:'Makkabeeus',
  Maccabees:'Makkabeez', Holofernes:'Holofurneez', Asmodeus:'Azmodeeus', Baruch:'Bayrook', Esdras:'Ezdrus',
  Sirach:'Syrak', Ecclesiastes:'Ekkleezeeasteez', Ecclesiasticus:'Ekkleezeeastikus',
  /* peoples */
  Pharisees:'Farrisees', Pharisee:'Farrisee', Sadducees:'Sadjoosees', Philistines:'Fillistines',
  Philistine:'Fillistine', Chaldeans:'Kaldeeans', Chaldees:'Kaldeez', Canaanites:'Kaynunites',
  Canaanite:'Kaynunite', Jebusites:'Jebbyoosites', Perizzites:'Perrizites', Girgashites:'Gurgashites',
  Moabites:'Moeuhbites', Edomites:'Eedumites', Levites:'Leevites', Medes:'Meeds',
  /* places */
  Canaan:'Kaynun', Capernaum:'Kapernayum', Gethsemane:'Gethsemmanee', Nineveh:'Ninnuhvuh',
  Chaldea:'Kaldeeuh', Moab:'Moeab', Edom:'Eedum', Sion:'Syon', Shiloh:'Shyloh', Beersheba:'Beersheeba',
  Hebron:'Heebron', Shechem:'Sheckem', Sidon:'Sydon', Zidon:'Zydon', Elam:'Eelam', Zoar:'Zohar',
  Ramah:'Raymuh', Gibeah:'Gibbeeuh', Gibeon:'Gibbeeun', Kadesh:'Kaydesh', Ephraim:'Eefrum',
  Manasseh:'Manassuh', Issachar:'Issakar', Zebulun:'Zebbyoolun', Naphtali:'Naftalye', Babel:'Baybel',
  Haran:'Hayran', Mamre:'Mamree', Machpelah:'Makpeeluh', Rameses:'Rammuhseez', Succoth:'Sukkoth',
  Marah:'Mahruh', Elim:'Eelim', Rephidim:'Reffidim', Nebo:'Neeboh', Ophir:'Ohfer', Sheba:'Sheeba',
  Shushan:'Shooshan', Ai:'Ayeye', Ephesus:'Effesus', Philippi:'Fillippye', Thessalonica:'Thessalonyka',
  Colosse:'Kolossee', Laodicea:'Layoddisseeuh', Thyatira:'Thyuhtyruh', Cenchrea:'Senkreeuh',
  /* old words */
  shew:'show', shewed:'showed', shewest:'showest', sheweth:'showeth', shewing:'showing', shewn:'shown',
  shewbread:'showbread', Shew:'Show', Shewed:'Showed', sware:'swair', wroth:'rawth', ere:'air',
  bewray:'beray', bewrayeth:'berayeth', trow:'troe', doth:'duth', yea:'yay', Yea:'Yay',
  victuals:'vittles', sepulchre:'sepulker', sepulchres:'sepulkers', tetrarch:'tetrark',
  phylacteries:'filacteries', cherubims:'chairubims', cherubim:'chairubim', ephod:'eefod',
  cubit:'kyoobit', cubits:'kyoobits', ephah:'eefuh', chapiter:'chappiter', chapiters:'chappiters',
  concupiscence:'konkyoopissence', Selah:'Seelah', Urim:'Yoorim', Thummim:'Thummeem'
};
var SAY_RE=new RegExp('\\b('+Object.keys(SAY).sort(function(a,b){ return b.length-a.length; }).join('|')+')\\b','g');
function sayFix(s){ return String(s).replace(SAY_RE, function(w){ return SAY[w]||w; }); }

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
  return sayFix(s);
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
/* What is said before a chapter, when it is read from the top: the book's
   full title at its first chapter, as the 1611 printing heads it, then the
   short form. voice/render_titles.py says the same words in the recorded
   voice, so the two never disagree. */
var NUM1=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve',
  'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var NUM10=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function numWords(n){
  n=+n; var out=[];
  if(n>=100){ out.push(NUM1[Math.floor(n/100)]+' hundred'); n%=100; }
  if(n>=20) out.push(NUM10[Math.floor(n/10)]+(n%10?'-'+NUM1[n%10]:''));
  else if(n) out.push(NUM1[n]);
  return out.join(' ');
}
function spokenName(name){
  return String(name).replace(/^([123]) /,function(m,d){ return ({'1':'First','2':'Second','3':'Third'})[d]+' '; });
}
function spokenTitle(b, ch){
  if(!b) return '';
  ch=+ch;
  if(b.user) return b.name+(b.nch>1?', chapter '+numWords(ch):'')+'.';
  if(ch===1){
    var full=String(b.full||'').trim();
    var head=(full&&full!==b.name)?full:spokenName(b.name);
    head=spokenName(head.replace(/:\s*Called\b/,', called')).replace(/\s+/g,' ').replace(/\.$/,'');
    if(b.nch===1) return head+'.';
    return head+(b.name==='Psalms'?'. Psalm one.':'. Chapter one.');
  }
  if(b.name==='Psalms') return 'Psalm '+numWords(ch)+'.';
  return spokenName(b.name)+', chapter '+numWords(ch)+'.';
}
function buildPassages(b, ch, startV){
  var vs=chapterOf(b,ch);
  startV=Math.max(1,startV||1);
  var lead=startV===1?spokenTitle(b,ch)+' ':'';
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
  clearTimeout(nextChapterTimer); nextChapterTimer=null;   /* a reading chosen now wins */
  var b=BK(S.reading); if(!b) return;
  v=Math.max(1,v||1);
  if(S.places) delete S.places[placeKey(S.reading,S.ch)];   /* taken up again */
  S.paintedVerse=null;
  S.speakB=S.reading; S.speakC=S.ch; /* which chapter is being read */
  /* only the Bible is narrated: an imported "John.txt" is read in its own words */
  if(!b.user && hasRecording(b.name, S.ch) && playRecorded(b.name, S.ch, v)) return;
  S.passages=buildPassages(b, S.ch, v);
  var lines=S.passages.map(function(p){ return p.text; });
  Speech.onTick(function(i){
    S.speakAt=i; S.speakVerse=S.passages[i]?S.passages[i].from:curVerse();
    Glide.note(i,0);
    paintSpeaking(); updatePlayerPlace();
  });
  Speech.onProgress(function(i,f){
    var p=S.passages[i]; if(!p) return;
    Glide.note(i,f);
    var nv=verseAt(p,f);
    if(nv!==S.speakVerse){ S.speakVerse=nv; paintSpeaking(); updatePlayerPlace(); }
  });
  Speech.onDone(chapterFinished);
  Speech.onState(null);
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
/* The reading reached the end of what it was given. */
function chapterFinished(){
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
      clearTimeout(nextChapterTimer);
      /* the next book may still be downloading: wait for it, or the title
         alone would be read and the chapter marked as heard */
      var go=function(){ nextChapterTimer=null; if(S.autoNext&&S.speaking!==false) speakFrom(1); };
      nextChapterTimer=setTimeout(function(){
        var nb=BK(nxt.b);
        if(nb&&!nb.user&&!bookLoaded(nb.i)){
          nextChapterTimer=-1;
          fetchBook(nb.i).then(function(){ if(nextChapterTimer===-1){ render(); go(); } })
            .catch(function(){ nextChapterTimer=null; S.speaking=false; renderSpeakBar(); paintSpeaking(); });
        } else go();
      },250);
      return;
    }
  }
  S.speaking=false; S.speakAt=-1; S.speakVerse=0; renderSpeakBar(); paintSpeaking();
}
/* the pause before the next chapter starts; stopping inside it must cancel it,
   or the reading starts again by itself a moment later */
var nextChapterTimer=null;
function stopSpeaking(){
  clearTimeout(nextChapterTimer); nextChapterTimer=null;
  stopAutoScroll();
  holdPlace();
  Speech.stop(); Glide.stop(); S.speaking=false; S.speakAt=-1; S.speakVerse=0;
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
    /* the glide follows it continuously; without motion (or the setting to
       reduce it) the verse is simply centred, as before */
    if(!Glide.start()){ try{ bringIntoView(nodes[pos],'center',true); }catch(e){} }
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
    /* a way back to where you came from, always in reach at the top of the
       reader (shown only when there is somewhere to go back to) */
    h+='<button class="icon rback" data-a="navback" aria-label="Go back" title="Go back">'+svg(I.back)+'</button>';
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
      if(pe.classList){ pe.classList.toggle('is-reader', S.reading!==null);
        pe.classList.toggle('pg-paper', S.reading!==null&&S.page==='paper'); } }
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
/* ---------- notes keep their place ----------
   Leaving Notes for the Bible (or anywhere) used to close the note being
   written and drop you at the top of the list. Now the note is saved and
   parked: where the cursor was, whether you were typing, how far down the
   page you were. Coming back to Notes opens it again just so, with the
   keyboard up if it was. The list keeps its scroll the same way. Kept in
   storage too, so it survives the app being closed in the background. */
var NOTEPARK=null;
function noteParkSave(){ Store.set('strata:notepark', NOTEPARK); }
function noteParkLeave(){
  var y=0; try{ y=scrolled(); }catch(e){}
  if(S.editing){
    var nb=document.getElementById('nbody'), nt=document.getElementById('ntitle');
    if(nb) S.editing.body=nb.value;
    if(nt) S.editing.title=nt.value;
    var saved=commitNote(S.editing);
    var act=document.activeElement, was=S.leftFocus||''; S.leftFocus='';
    if(was==='nbody') act=nb; else if(was==='ntitle') act=nt;
    var typing=!!(act&&((nb&&act===nb)||(nt&&act===nt)));
    /* the keyboard is put away before the tab bar can be tapped, so typing
       a moment ago counts as typing */
    if(!typing&&S.noteBlurAt&&Date.now()-S.noteBlurAt<20000){ typing=true; act=(S.noteBlurField==='title')?nt:nb; }
    NOTEPARK={id:(saved&&saved.id)||S.editing.id||null, draft:saved?null:{b:S.editing.b,c:S.editing.c,v:S.editing.v},
      caret:nb&&typeof nb.selectionStart==='number'?nb.selectionStart:(typeof S.editCaret==='number'?S.editCaret:null),
      field:(act===nt)?'title':'body', typing:typing, y:y, at:Date.now()};
    if(!NOTEPARK.id&&!NOTEPARK.draft) NOTEPARK=null;
  } else if(S.tab==='notes'&&S.reading===null){
    NOTEPARK={list:true, y:y, at:Date.now()};
  }
  noteParkSave();
}
function noteParkReturn(){
  var p=NOTEPARK; if(!p) return;
  S.noteBlurAt=0;
  NOTEPARK=null; noteParkSave();
  if(p.list){ noteParkScroll(p.y); return; }
  var n=p.id?S.notes.filter(function(x){ return x.id===p.id; })[0]:null;
  if(p.id&&!n) return;            /* deleted meanwhile (on another device, say) */
  S.editing=n?{id:n.id,b:n.b,c:n.c,v:n.v,body:n.body,title:n.title||'',tags:(n.tags||[]).slice(),
      links:(n.links||[]).map(function(l){ return l.slice(); })}
    :{id:null,b:p.draft.b,c:p.draft.c,v:p.draft.v,body:'',title:'',tags:[],links:[]};
  S.editCaret=(typeof p.caret==='number')?p.caret:null;
  S.editFocusBody=!!(p.typing&&p.field==='body');
  S.noteParkTitle=!!(p.typing&&p.field==='title');
  noteParkScroll(p.y);
}
function noteParkScroll(y){
  if(!y) return;
  /* after the page is drawn: twice, as the note box grows to its text */
  var go=function(){ try{ view.scrollTop=y; }catch(e){} try{ if(window.pageYOffset<y&&document.documentElement.scrollHeight>window.innerHeight) window.scrollTo(0,y); }catch(e){} };
  setTimeout(go,0); setTimeout(go,120);
}
function goTab(k, quiet){
  leaveReading();
  if(S.reading!==null) closePop();
  /* Notes tapped while already in Notes goes to the list, as before (the
     note is saved); from anywhere else, Notes brings back what was left */
  var onNotes=(S.tab==='notes'&&S.reading===null&&S.book===null);
  if(k==='notes'&&onNotes){ if(S.editing) commitNote(S.editing); NOTEPARK=null; noteParkSave(); }
  else if(S.editing||onNotes) noteParkLeave();
  var back=(k==='notes'&&!onNotes);
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
  if(back&&NOTEPARK){ S.keepScroll=true; noteParkReturn(); }
  if(!quiet) render();
  if(S.noteParkTitle){ S.noteParkTitle=false; try{ var nt=document.getElementById('ntitle'); if(nt){ nt.focus(); } }catch(e){} }
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
  if(S.doc) return vDoc();
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
  /* Everything that is not one of the sixty-six comes first, so it is never
     a long scroll past Revelation: the Apocrypha, the Atlas, Word study, the
     Tracker, then the reader's own books. */
  if(S.cat==='all'||S.cat==='apoc') h+=apocCover();
  /* the narration kept on this phone sits up front, where it is seen */
  if(S.cat==='all'||S.cat==='mine') h+=downloadsCover();
  if(S.cat==='all'||S.cat==='atlas') h+=atlasCover();
  if(S.cat==='all'||S.cat==='words') h+=wordsCover();
  if(S.cat==='all'||S.cat==='tracker') h+=trackerCover();
  if(S.cat==='all'||S.cat==='mine') h+=S.shelf.map(docCover).join('');
  h+=list.map(function(bk){ return coverHTML(bk); }).join('');
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
      '<span class="cbody"><span class="ct'+(String(bk.name).split(' ').some(function(w){ return w.length>=11; })?' ctlong':'')+'">'+esc(bk.name)+'</span></span>'+
      (started?'<span class="ribbon" aria-hidden="true"></span>':'')+
    '</button>'+
    '<span class="cn">'+esc(apoc?bk.sub:(pr&&pr.done>0&&pr.done<pr.total
        ? pr.done+' of '+pr.total+' ch'
        : bk.nch+(bk.nch===1?' chapter':' chapters')))+'</span>'+
    '</div>';
}

/* The four boards at the end of the shelf (Apocrypha, Tracker, Atlas, Word
   study) are bound as one set: the same plate as a painted book, in dark
   leather, with a gold-tooled frame, a gold emblem and the title in the
   books' small capitals. Each keeps its own leather colour; the count sits
   under the plate, as it does under every book. */
function specialCover(o){
  return '<div class="shelfbk">'+
    '<button class="cover hasart special sp-'+o.kind+'" '+o.attr+' aria-label="'+esc(o.label||o.title)+'">'+
      '<span class="sleather"></span>'+
      '<span class="semb" aria-hidden="true"><svg viewBox="0 0 100 100">'+o.emblem+'</svg></span>'+
      '<span class="ctool"></span>'+
      '<span class="cbody"><span class="srule" aria-hidden="true"></span>'+
        '<span class="ct">'+esc(o.title)+'</span></span>'+
    '</button>'+
    '<span class="cn">'+esc(o.caption)+'</span></div>';
}
var EMBLEM={
  /* a scroll, rolled at both ends, with a seal */
  scroll:'<g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">'+
    '<rect x="25" y="16" width="50" height="11" rx="5.5"/><rect x="25" y="73" width="50" height="11" rx="5.5"/>'+
    '<path d="M30 27v46M70 27v46"/>'+
    '<path d="M38 37h24M38 44.5h24M38 52h17M38 59.5h21" stroke-width="1.6" opacity=".7"/></g>'+
    '<circle cx="21" cy="21.5" r="3" fill="currentColor"/><circle cx="79" cy="21.5" r="3" fill="currentColor"/>'+
    '<circle cx="21" cy="78.5" r="3" fill="currentColor"/><circle cx="79" cy="78.5" r="3" fill="currentColor"/>'+
    '<path d="M60 66l-3 12 5-3 5 3-3-12" fill="currentColor" opacity=".8"/>'+
    '<circle cx="62" cy="63" r="6.5" fill="currentColor"/>',
  /* a compass rose */
  compass:'<g fill="none" stroke="currentColor" stroke-linecap="round">'+
    '<circle cx="50" cy="50" r="35" stroke-width="2.2"/><circle cx="50" cy="50" r="29" stroke-width="1.2" opacity=".5"/>'+
    '<path d="M27 27l5 5M73 27l-5 5M27 73l5-5M73 73l-5-5" stroke-width="1.8" opacity=".7"/></g>'+
    '<path d="M50 12l6 32 32 6-32 6-6 32-6-32-32-6 32-6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'+
    '<path d="M50 12l6 32-6 6zM88 50l-32 6-6-6zM50 88l-6-32 6-6zM12 50l32-6 6 6z" fill="currentColor"/>'+
    '<circle cx="50" cy="50" r="3" fill="currentColor"/>',
  /* a medallion with an arrow coming down into a tray: kept on the phone */
  download:'<g fill="none" stroke="currentColor"><circle cx="50" cy="50" r="35" stroke-width="2.2"/>'+
    '<circle cx="50" cy="50" r="29.5" stroke-width="1.2" opacity=".5"/></g>'+
    '<path d="M50 11l3 4-3 4-3-4zM50 81l3 4-3 4-3-4zM11 50l4-3 4 3-4 3zM81 50l4-3 4 3-4 3z" fill="currentColor"/>'+
    '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">'+
    '<path d="M50 30v24M40 45l10 10 10-10"/><path d="M34 58v8h32v-8"/></g>',
  /* a medallion with the letterforms */
  letters:'<g fill="none" stroke="currentColor"><circle cx="50" cy="50" r="35" stroke-width="2.2"/>'+
    '<circle cx="50" cy="50" r="29.5" stroke-width="1.2" opacity=".5"/></g>'+
    '<path d="M50 11l3 4-3 4-3-4zM50 81l3 4-3 4-3-4zM11 50l4-3 4 3-4 3zM81 50l4-3 4 3-4 3z" fill="currentColor"/>'+
    '<text x="50" y="60" text-anchor="middle" font-size="27" fill="currentColor">Aa</text>'
};
/* the Tracker's emblem is a dial: the ring fills as chapters are marked
   read, around the house numerals */
function trackerEmblem(tp){
  var r=35, c=2*Math.PI*r, f=tp.total?tp.done/tp.total:0;
  if(f>0) f=Math.max(f,0.015);
  var ticks='';
  for(var k=0;k<24;k++){
    var a=k*Math.PI/12, x1=50+40*Math.sin(a), y1=50-40*Math.cos(a),
        x2=50+(k%6?42.5:44)*Math.sin(a), y2=50-(k%6?42.5:44)*Math.cos(a);
    ticks+='M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1);
  }
  return '<path d="'+ticks+'" stroke="currentColor" stroke-width="1.3" opacity=".55"/>'+
    '<circle cx="50" cy="50" r="'+r+'" fill="none" stroke="currentColor" stroke-width="3" opacity=".22"/>'+
    (f>0?'<circle class="sarc" cx="50" cy="50" r="'+r+'" fill="none" stroke="currentColor" stroke-width="3.4" '+
      'stroke-linecap="round" stroke-dasharray="'+(c*f).toFixed(1)+' '+c.toFixed(1)+'" transform="rotate(-90 50 50)"/>':'')+
    '<text x="50" y="46" text-anchor="middle" font-size="15" fill="currentColor">XVI</text>'+
    '<path d="M39 52h22" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>'+
    '<text x="50" y="69" text-anchor="middle" font-size="15" fill="currentColor">XI</text>';
}
function apocCover(){
  return specialCover({kind:'apoc', attr:'data-apoc="1"', title:'The Apocrypha',
    caption:'14 books', emblem:EMBLEM.scroll});
}
function trackerCover(){
  var tp=totalProgress();
  var cap=tp.pct+'% read';
  if(GOAL.perDay){ var gn=goalToday(); cap=gn>=GOAL.perDay?'Read today \u2713':gn+' of '+GOAL.perDay+' today'; }
  return specialCover({kind:'tracker', attr:'data-a="opentracker"', title:'Tracker',
    label:'Tracker, '+tp.pct+'% read'+(GOAL.perDay?', '+cap:''), caption:cap, emblem:trackerEmblem(tp)});
}

function vTracker(){
  var tp=totalProgress();
  var h='<div class="libwrap">';
  h+='<button class="back" style="color:var(--blue)" data-a="closetracker">&larr; Library</button>';
  h+='<div class="libhead"><h2>Tracker</h2>'+
     '<p>Your daily goal, your reading plans, and every chapter you have marked read, across all eighty books.</p></div>';
  h+=vGoals();
  h+='<div class="lab sgroup" style="margin-top:22px">All eighty books</div>';
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

/* ================= READING GOALS AND PLANS =================
   A daily goal (chapters a day), a streak, the week at a glance, a reminder
   from the phone at the hour you choose, and reading plans that hand you
   each day's portion. All of it lives in the Tracker.

   What counts: a chapter marked read today (by pressing Next, turning the
   page, finishing it aloud, or Mark as read). Each day's count is kept in a
   small log, so reading a chapter again later does not rewrite the past.

   A plan is an ordered list of chapters. Its progress is its own (a chapter
   read before you started does not count), so switching plans and coming
   back carries on where you were. Today's portion is worked out each time:
   the plan's chapters read today, then the next unread ones, up to the daily
   goal. Nothing goes stale overnight.

   Reminders: the next fourteen days are scheduled with the phone's own
   notifications, each one saying that day's portion, and today's is taken
   away once today's goal is met. They are scheduled again whenever the app
   opens or a chapter is read. The website cannot remind you. */
var GOAL={perDay:0, remind:{on:false, h:7, m:30}, active:null, plans:{}, log:{}};
var GOAL_PACES=[1,2,3,4,5,6,8,10];
var PLAN_DEFS=[
  {id:'paul', name:'Paul’s letters', pace:3,
   blurb:'Romans to Philemon: the thirteen letters that bear Paul’s name, in the order the Bible keeps them.',
   books:['Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians',
          '1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon']},
  {id:'wisdom', name:'Daily wisdom', pace:4,
   blurb:'The wisdom books and only those: Psalms, Proverbs, Sirach and the Wisdom of Solomon, woven together so each day draws on them in turn.',
   mix:['Psalms','Proverbs','Ecclesiasticus','Wisdom of Solomon']},
  {id:'history', name:'The history of Israel', pace:4,
   blurb:'From the crossing of the Jordan to the return from exile, Joshua to Esther, then the Maccabees’ fight for the Temple.',
   books:['Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles',
          'Ezra','Nehemiah','Esther','1 Maccabees','2 Maccabees']},
  {id:'prophets', name:'The prophets', pace:3,
   blurb:'Isaiah to Malachi, the major and minor prophets, with Baruch, Jeremiah’s scribe, after Lamentations, where the Greek Bible sets it.',
   books:['Isaiah','Jeremiah','Lamentations','Baruch','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah',
          'Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi']},
  {id:'lastdays', name:'Prophecy of the last days', pace:2,
   blurb:'Daniel’s visions, the prophets on the day of the LORD, Christ on the Mount of Olives in Matthew 24, Paul on his coming, and Revelation.',
   refs:[['Daniel',1,12],['Isaiah',65,66],['Ezekiel',37,39],['Joel',2,3],['Zechariah',12,14],['Matthew',24,25],
         ['Mark',13,13],['Luke',21,21],['1 Thessalonians',4,5],['2 Thessalonians',1,2],['2 Peter',3,3],['Revelation',1,22]]},
  {id:'gospels', name:'The Gospels and Acts', pace:3,
   blurb:'The life of Christ four times told, then the church he left, from the upper room to Rome.',
   books:['Matthew','Mark','Luke','John','Acts']},
  {id:'moses', name:'The books of Moses', pace:4,
   blurb:'Genesis to Deuteronomy: creation, the fathers, the Exodus, the law given at Sinai and the forty years.',
   books:['Genesis','Exodus','Leviticus','Numbers','Deuteronomy']},
  {id:'bible', name:'The whole Bible', pace:4,
   blurb:'Genesis to Revelation, the Old and New Testaments read side by side, so the New is never months away.',
   testaments:true}
];
var PLAN_CACHE={};
function bookNamed(n){ for(var i=0;i<BOOKS.length;i++) if(BOOKS[i].name===n&&!BOOKS[i].user) return BOOKS[i]; return null; }
function chaptersOf(names){
  var out=[];
  names.forEach(function(n){ var b=bookNamed(n); if(b) for(var c=1;c<=b.nch;c++) out.push(b.i+':'+c); });
  return out;
}
/* several lists woven together evenly, so they all end together */
function weave(lists){
  var all=[];
  lists.forEach(function(l, j){ l.forEach(function(k, i){ all.push({k:k, f:(i+0.5)/l.length, j:j}); }); });
  all.sort(function(a,b){ return a.f-b.f||a.j-b.j; });
  return all.map(function(x){ return x.k; });
}
function planKeys(id){
  if(PLAN_CACHE[id]) return PLAN_CACHE[id];
  var p=planDef(id); if(!p) return [];
  var ks=[];
  if(p.books) ks=chaptersOf(p.books);
  else if(p.mix) ks=weave(p.mix.map(function(n){ return chaptersOf([n]); }));
  else if(p.refs) p.refs.forEach(function(r){ var b=bookNamed(r[0]); if(b) for(var c=r[1];c<=Math.min(r[2],b.nch);c++) ks.push(b.i+':'+c); });
  else if(p.testaments){
    var ot=[], nt=[];
    BOOKS.forEach(function(b){ if(b.user||(b.i>=39&&b.i<=52)) return;
      for(var c=1;c<=b.nch;c++) (b.i>=53?nt:ot).push(b.i+':'+c); });
    ks=weave([ot,nt]);
  }
  return (PLAN_CACHE[id]=ks);
}
function planDef(id){ for(var i=0;i<PLAN_DEFS.length;i++) if(PLAN_DEFS[i].id===id) return PLAN_DEFS[i]; return null; }
function planState(id){ return GOAL.plans[id]||(GOAL.plans[id]={start:Date.now(), done:{}}); }

function dayKey(t){ var d=t?new Date(t):new Date(); return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
function sameDay(t){ return !!t&&dayKey(t)===dayKey(); }
function goalToday(){ return GOAL.log[dayKey()]||0; }
/* consecutive days with the goal met, ending today (or yesterday, while
   today is still to do) */
function goalStreak(){
  if(!GOAL.perDay) return 0;
  var d=new Date(), n=0;
  if((GOAL.log[dayKey(d)]||0)<GOAL.perDay) d.setDate(d.getDate()-1);
  while((GOAL.log[dayKey(d)]||0)>=GOAL.perDay){ n++; d.setDate(d.getDate()-1); }
  return n;
}
function goalSave(){ Store.set('strata:goal', GOAL); }
function goalLoad(g){
  if(g&&typeof g==='object'){
    if(typeof g.perDay==='number') GOAL.perDay=Math.max(0,Math.min(20,g.perDay|0));
    if(g.remind&&typeof g.remind==='object') GOAL.remind={on:!!g.remind.on, h:Math.min(23,Math.max(0,g.remind.h|0)), m:Math.min(59,Math.max(0,g.remind.m|0))};
    if(typeof g.active==='string'&&planDef(g.active)) GOAL.active=g.active;
    if(g.plans&&typeof g.plans==='object') GOAL.plans=g.plans;
    if(g.log&&typeof g.log==='object') GOAL.log=g.log;
  }
  /* the days before there was a log: what the read marks still remember */
  if(!Object.keys(GOAL.log).length) Object.keys(S.read||{}).forEach(function(k){
    var t=S.read[k]; if(typeof t==='number'&&t>0){ var dk=dayKey(t); GOAL.log[dk]=(GOAL.log[dk]||0)+1; } });
}
/* called by markRead: the chapter, whether it is now read, and when it was
   read before (if it was) */
function goalOnRead(k, on, before){
  var dk=dayKey();
  if(on){ if(!sameDay(before)) GOAL.log[dk]=(GOAL.log[dk]||0)+1; }
  else if(sameDay(before)) GOAL.log[dk]=Math.max(0,(GOAL.log[dk]||0)-1);
  if(GOAL.active&&planKeys(GOAL.active).indexOf(k)>-1){
    var ps=planState(GOAL.active);
    if(on) ps.done[k]=Date.now(); else delete ps.done[k];
  }
  goalSave(); goalRemindSoon();
}
/* today's portion of the plan: what was read of it today, then the next
   unread, up to the daily goal */
function planToday(id){
  var ks=planKeys(id), ps=planState(id), per=GOAL.perDay||planDef(id).pace;
  var today=ks.filter(function(k){ return sameDay(ps.done[k]); });
  var next=ks.filter(function(k){ return !ps.done[k]; });
  var want=Math.max(0, per-today.length);
  return {read:today, todo:next.slice(0,want), after:next.slice(want), left:next.length, total:ks.length, per:per};
}
/* "Romans 5–8", "Psalms 1; Proverbs 1; Ecclesiasticus 1" */
function portionLabel(keys){
  var parts=[], cur=null;
  keys.forEach(function(k){
    var p=k.split(':'), b=+p[0], c=+p[1];
    if(cur&&cur.b===b&&c===cur.c2+1){ cur.c2=c; return; }
    cur={b:b, c1:c, c2:c}; parts.push(cur);
  });
  return parts.map(function(x){ var bk=BK(x.b); var n=bk?bk.name:'';
    return planBookName(n)+' '+x.c1+(x.c2>x.c1?'–'+x.c2:''); }).join('; ');
}
/* in the plans Ecclesiasticus goes by its other name, Sirach, as the
   Daily wisdom plan calls it */
function planBookName(n){ return n==='Ecclesiasticus'?'Sirach':n; }
function planFinish(left, per){
  if(!left) return '';
  var d=new Date(); d.setDate(d.getDate()+Math.ceil(left/per)-1);
  return d.toLocaleDateString(undefined,{month:'long', day:'numeric'})+(d.getFullYear()!==new Date().getFullYear()?', '+d.getFullYear():'');
}
function daysWord(n){ return n===1?'a day':n+' days'; }

/* ---------- the Tracker's goal card and plans ---------- */
function vGoals(){
  var h='<div class="gcard">';
  var per=GOAL.perDay, n=goalToday();
  if(!per){
    h+='<div class="gk">Daily goal</div><h3 class="gh3">How much would you like to read each day?</h3>'+
       '<p class="gp">Set a goal and the Tracker counts each day, keeps your streak, and can remind you at the hour you choose.</p>';
  } else {
    var f=Math.min(1,n/per), r=30, c=2*Math.PI*r, met=n>=per, st=goalStreak();
    h+='<div class="gtop"><svg class="gring" viewBox="0 0 72 72" aria-hidden="true">'+
       '<circle cx="36" cy="36" r="'+r+'" class="gr0"/>'+
       (f>0?'<circle cx="36" cy="36" r="'+r+'" class="gr1" stroke-dasharray="'+(c*f).toFixed(1)+' '+c.toFixed(1)+'" transform="rotate(-90 36 36)"/>':'')+
       '<text x="36" y="41" text-anchor="middle">'+Math.min(n,99)+'/'+per+'</text></svg>'+
       '<div class="gtxt"><div class="gk">Today</div>'+
       '<div class="gnow">'+(met?'Done for today':n+' of '+per+' chapter'+(per===1?'':'s'))+'</div>'+
       '<div class="gsub">'+(st?st+'-day streak':'Your streak starts today')+'</div></div></div>';
    /* the week: one mark a day, filled when the goal was met */
    var wk='', d=new Date(); d.setDate(d.getDate()-6);
    for(var i=0;i<7;i++){
      var dk=dayKey(d), got=GOAL.log[dk]||0, on=got>=per, tday=(i===6);
      wk+='<span class="gday'+(on?' on':got?' part':'')+(tday?' now':'')+'" title="'+got+'"><i></i><b>'+
          d.toLocaleDateString(undefined,{weekday:'narrow'})+'</b></span>';
      d.setDate(d.getDate()+1);
    }
    h+='<div class="gweek" aria-label="The last seven days">'+wk+'</div>';
  }
  h+='<div class="lab" style="margin-top:14px">Chapters a day</div><div class="gpace" role="radiogroup" aria-label="Chapters a day">'+
     GOAL_PACES.map(function(p){ return '<button role="radio" aria-checked="'+(per===p)+'" data-gpace="'+p+'">'+p+'</button>'; }).join('')+
     '</div>';
  if(per){
    var rm=GOAL.remind, can=!!goalNotes();
    h+='<button class="settog grem" data-a="goalremind" aria-pressed="'+(rm.on&&can)+'"'+(can?'':' disabled')+'>'+
       '<span class="settxt"><span class="setlab">Remind me to read</span><span class="setsub">'+
       (can?(rm.on?'Each day at '+goalTimeText()+', unless you have already read':'A notification from your phone each day')
           :'Reminders come from the Sixteen Eleven app on iPhone and Android')+'</span></span>'+
       '<span class="setsw'+(rm.on&&can?' on':'')+'"><i></i></span></button>';
    if(rm.on&&can) h+='<label class="gtime">At <input type="time" id="goaltime" value="'+('0'+rm.h).slice(-2)+':'+('0'+rm.m).slice(-2)+'"></label>';
    if(S.goalMsg) h+='<p class="gnote" role="status">'+esc(S.goalMsg)+'</p>';
    h+='<button class="btn gh gstop" data-a="goaloff">No daily goal</button>';
  }
  h+='</div>';

  /* the plan you are on, then the others */
  h+='<div class="lab sgroup" style="margin-top:22px">Reading plans</div>';
  if(GOAL.active){
    var p=planDef(GOAL.active), t=planToday(GOAL.active), done=t.total-t.left, pct=Math.round(100*done/t.total);
    h+='<div class="gplan on"><div class="gpk">Your plan</div><div class="gpn">'+esc(p.name)+'</div>'+
       '<span class="progbar dark full"><i style="width:'+pct+'%"></i></span>'+
       '<div class="gpm">'+done+' of '+t.total+' chapters'+(t.left?' · at '+t.per+' a day, done by '+esc(planFinish(t.left,t.per)):' · finished')+'</div>';
    if(t.left||t.read.length){
      h+='<div class="gpt">'+(t.todo.length?'Today':'Today’s reading is done')+'</div><div class="gchips">'+
         t.read.concat(t.todo).map(function(k){ var q=k.split(':'), bk=BK(+q[0]), ok=!!planState(GOAL.active).done[k];
           return '<button class="gchip'+(ok?' done':'')+'" data-book="'+q[0]+'" data-goch="'+q[1]+'">'+(ok?'✓ ':'')+esc((bk?planBookName(bk.name):'')+' '+q[1])+'</button>'; }).join('')+'</div>';
      if(t.todo.length) h+='<button class="btn" data-book="'+t.todo[0].split(':')[0]+'" data-goch="'+t.todo[0].split(':')[1]+'">Read '+esc(portionLabel([t.todo[0]]))+'</button>';
      else if(t.after.length) h+='<button class="btn sec" data-book="'+t.after[0].split(':')[0]+'" data-goch="'+t.after[0].split(':')[1]+'">Keep going: '+esc(portionLabel([t.after[0]]))+'</button>';
    } else h+='<p class="gp">You have read every chapter of this plan. Well done.</p>';
    h+='<button class="btn gh" data-a="planstop">Stop this plan</button></div>';
  }
  PLAN_DEFS.forEach(function(p){
    if(p.id===GOAL.active) return;
    var n=planKeys(p.id).length, pace=GOAL.perDay||p.pace, ps=GOAL.plans[p.id], dn=ps?Object.keys(ps.done).length:0;
    h+='<div class="gplan"><div class="gpn">'+esc(p.name)+'</div><p class="gpb">'+esc(p.blurb)+'</p>'+
       '<div class="gpm">'+n+' chapters · '+daysWord(Math.ceil(n/pace))+' at '+pace+' a day'+(dn?' · '+dn+' read so far':'')+'</div>'+
       '<button class="btn sec" data-plan="'+p.id+'">'+(dn?'Carry on with this plan':'Start this plan')+'</button></div>';
  });
  return h;
}
function goalTimeText(){
  var d=new Date(); d.setHours(GOAL.remind.h, GOAL.remind.m, 0, 0);
  return d.toLocaleTimeString(undefined,{hour:'numeric', minute:'2-digit'});
}
/* the end of a chapter in a plan: the plan's next chapter, when it is not
   simply the next one in the book */
function planNextCard(b, c){
  if(!GOAL.active) return '';
  var k=b+':'+c, ks=planKeys(GOAL.active); if(ks.indexOf(k)<0) return '';
  var ps=planState(GOAL.active), nk=null;
  for(var i=0;i<ks.length;i++) if(!ps.done[ks[i]]&&ks[i]!==k){ nk=ks[i]; break; }
  if(!nk) return '';
  var nx=nextChapterFrom(b,c); if(nx&&(nx.b+':'+nx.c)===nk) return '';
  var q=nk.split(':'), nb=BK(+q[0]);
  return '<button class="nextcard plannext" data-book="'+q[0]+'" data-goch="'+q[1]+'" data-markfrom="'+k+'">'+
    '<span class="ncw"><span class="nck">Next in '+esc(planDef(GOAL.active).name)+'</span>'+
    '<span class="ncn">'+esc((nb?planBookName(nb.name):'')+' '+q[1])+'</span></span>'+
    '<span class="ncgo">'+svg(I.fwd)+'</span></button>';
}

/* ---------- reminders from the phone ---------- */
var GOAL_IDS=[]; (function(){ for(var i=0;i<14;i++) GOAL_IDS.push(16110+i); })();
var GOAL_LN;
function goalNotes(){
  if(GOAL_LN!==undefined) return GOAL_LN;
  GOAL_LN=null;
  try{
    var C=window.Capacitor;
    if(C&&C.isNativePlatform&&C.isNativePlatform()&&C.registerPlugin&&(!C.isPluginAvailable||C.isPluginAvailable('LocalNotifications'))){
      GOAL_LN=C.registerPlugin('LocalNotifications');
      Promise.resolve(GOAL_LN.addListener('localNotificationActionPerformed', function(){
        /* a reminder tapped: straight to today's reading */
        S.tab='library'; S.trackerOpen=true; S.book=null; S.reading=null; S.apocOpen=false; S.atlasOpen=false; S.wordsOpen=false;
        try{ render(); window.scrollTo(0,0); }catch(e){}
      })).catch(function(){});
    }
  }catch(e){ GOAL_LN=null; }
  return GOAL_LN;
}
var goalTimer=null;
function goalRemindSoon(){ clearTimeout(goalTimer); goalTimer=setTimeout(goalSchedule, 400); }
/* what each of the coming days' reminders says */
function goalReminderTexts(){
  var out=[], per=GOAL.perDay||1, rest=null, p=GOAL.active&&planDef(GOAL.active);
  if(p){ var t=planToday(GOAL.active); rest=t.todo.concat(t.after); }
  for(var d=0;d<14;d++){
    var body;
    if(p){
      var take=rest.slice(0, d===0?Math.max(0,per-planToday(GOAL.active).read.length):per);
      rest=rest.slice(take.length);
      body=take.length?p.name+': '+portionLabel(take):'You have finished '+p.name+'. Choose your next plan in the Tracker.';
    } else body=per+' chapter'+(per===1?'':'s')+' today'+(d===0&&goalToday()?' ('+goalToday()+' read so far)':'')+'. Pick up where you left off.';
    out.push({title:d===0&&goalStreak()?'Keep your '+goalStreak()+'-day streak':'Today’s reading', body:body});
  }
  return out;
}
function goalSchedule(){
  var LN=goalNotes(); if(!LN) return Promise.resolve();
  return Promise.resolve(LN.cancel({notifications:GOAL_IDS.map(function(id){ return {id:id}; })})).catch(function(){}).then(function(){
    if(!GOAL.remind.on||!GOAL.perDay) return;
    var texts=goalReminderTexts(), now=Date.now(), list=[];
    for(var d=0;d<14;d++){
      var at=new Date(); at.setDate(at.getDate()+d); at.setHours(GOAL.remind.h, GOAL.remind.m, 0, 0);
      if(at.getTime()<=now+30000) continue;
      if(d===0&&goalToday()>=GOAL.perDay) continue;   /* already read today: no reminder */
      list.push({id:GOAL_IDS[d], title:texts[d].title, body:texts[d].body,
                 schedule:{at:at, allowWhileIdle:true}, extra:{go:'goal'}});
    }
    if(list.length) return LN.schedule({notifications:list});
  }).catch(function(){});
}
function goalRemindOn(){
  var LN=goalNotes(); if(!LN) return;
  Promise.resolve(LN.requestPermissions()).then(function(r){
    var ok=r&&(r.display==='granted');
    GOAL.remind.on=ok;
    S.goalMsg=ok?'':'Notifications are turned off for Sixteen Eleven. Turn them on in your phone’s Settings, then try again.';
    goalSave(); goalSchedule(); S.keepScroll=true; render();
  }).catch(function(){ S.goalMsg='This phone did not allow reminders.'; S.keepScroll=true; render(); });
}
function goalInit(){
  try{ goalSchedule(); }catch(e){}
  try{ document.addEventListener('visibilitychange', function(){
    if(document.visibilityState==='visible'){ goalRemindSoon(); if(S.trackerOpen){ S.keepScroll=true; render(); } } }); }catch(e){}
}

/* ================= SYNC ACROSS DEVICES =================
   No account. Turning sync on makes a sync code on this device, 25 letters
   and digits in five groups (the last one a check, so a mistyped code is
   caught before anything is fetched). Entering the same code on another
   phone, tablet or the website joins it.

   From the code the device derives, with HKDF, an AES-GCM key and an access
   token. Everything is encrypted here before it leaves; the server
   (sync.sixteeneleven.bible, sixteen-eleven-app/sync/worker.js) keeps one
   encrypted file per code and only ever sees the token. It cannot read the
   notes, and without the code nobody can.

   What travels: highlights, notes, study sheets, chapters read, bookmarks,
   your own cross references, the daily goal, reading plans and the reading
   log. Each is a key in a flat map ("h|43:3:16" -> "y", "n|<id>" -> note...).
   A sync is a three-way merge: the map as it was at the last sync (kept
   here), this device's map now, and the server's. A key changed on one side
   only takes that side, so a note deleted on the phone is deleted on the
   iPad too; a key changed on both keeps this device's version, except the
   counts and dates (chapters read, the reading log), which keep the later or
   larger. The write is conditional (If-Match), so two devices syncing at
   once cannot overwrite each other: the loser merges again and retries. */
var SYNC_BASE='https://sync.sixteeneleven.bible/api/sync/';
var SYNC={on:false, code:'', etag:'', last:0, busy:false, msg:'', err:'', base:null, applying:false, t:null, show:false, confirmDel:false, joinErr:''};
var SYNC_KEYS={'strata:highlights':1,'strata:notes':1,'strata:sheets':1,'strata:read':1,
  'strata:bookmarks':1,'strata:userrefs':1,'strata:goal':1};
var B32='0123456789ABCDEFGHJKMNPQRSTVWXYZ';   /* Crockford: no I, L, O, U */

function syncCheckChar(s){
  var t=0; for(var i=0;i<s.length;i++) t=(t*31+B32.indexOf(s[i])+7)%32;
  return B32[t];
}
function syncNewCode(){
  var b=new Uint8Array(24); crypto.getRandomValues(b);
  var s=''; for(var i=0;i<24;i++) s+=B32[b[i]%32];
  return s+syncCheckChar(s);
}
/* as typed: any case, spaces or dashes, O for 0 and I or L for 1 */
function syncNormalize(s){
  s=String(s||'').toUpperCase().replace(/[\s\-_.]/g,'').replace(/O/g,'0').replace(/[IL]/g,'1');
  if(!/^[0-9A-HJKMNP-TV-Z]{25}$/.test(s)) return null;
  return syncCheckChar(s.slice(0,24))===s[24]?s:null;
}
function syncPretty(c){ return c?c.match(/.{1,5}/g).join('-'):''; }
function hex(buf){ return Array.prototype.map.call(new Uint8Array(buf),function(b){ return ('0'+b.toString(16)).slice(-2); }).join(''); }
function syncKeys(code){
  var enc=new TextEncoder(), salt=enc.encode('sixteen-eleven-sync-v1');
  return crypto.subtle.importKey('raw', enc.encode(code), 'HKDF', false, ['deriveBits','deriveKey']).then(function(ikm){
    return Promise.all([
      crypto.subtle.deriveBits({name:'HKDF', hash:'SHA-256', salt:salt, info:enc.encode('auth')}, ikm, 256),
      crypto.subtle.deriveKey({name:'HKDF', hash:'SHA-256', salt:salt, info:enc.encode('encrypt')}, ikm,
        {name:'AES-GCM', length:256}, false, ['encrypt','decrypt'])
    ]);
  }).then(function(r){
    var token=hex(r[0]);
    return crypto.subtle.digest('SHA-256', enc.encode(token)).then(function(d){ return {token:token, id:hex(d), key:r[1]}; });
  });
}
/* one byte of format (1 plain, 2 gzip), twelve of nonce, then the cipher */
function syncSeal(keys, obj){
  var raw=new TextEncoder().encode(JSON.stringify(obj));
  var gz=(typeof CompressionStream!=='undefined')
    ? new Response(new Blob([raw]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer().then(function(b){ return [2,new Uint8Array(b)]; }).catch(function(){ return [1,raw]; })
    : Promise.resolve([1,raw]);
  return gz.then(function(p){
    var iv=crypto.getRandomValues(new Uint8Array(12));
    return crypto.subtle.encrypt({name:'AES-GCM', iv:iv}, keys.key, p[1]).then(function(ct){
      var out=new Uint8Array(13+ct.byteLength); out[0]=p[0]; out.set(iv,1); out.set(new Uint8Array(ct),13); return out;
    });
  });
}
function syncOpen(keys, buf){
  var u=new Uint8Array(buf);
  return crypto.subtle.decrypt({name:'AES-GCM', iv:u.slice(1,13)}, keys.key, u.slice(13)).then(function(pt){
    if(u[0]===2) return new Response(new Blob([pt]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
    return new TextDecoder().decode(pt);
  }).then(function(t){ return JSON.parse(t); });
}

/* ---------- the flat map ---------- */
function syncMap(){
  var m={};
  function put(k,v){ m[k]=JSON.stringify(v); }
  Object.keys(S.hl||{}).forEach(function(k){ put('h|'+k, S.hl[k]); });
  (S.notes||[]).forEach(function(n){ if(n&&n.id) put('n|'+n.id, n); });
  (S.sheets||[]).forEach(function(s){ if(s&&s.id) put('s|'+s.id, s); });
  Object.keys(S.read||{}).forEach(function(k){ put('r|'+k, S.read[k]); });
  Object.keys(S.marks||{}).forEach(function(k){ put('m|'+k, S.marks[k]); });
  Object.keys(S.userRefs||{}).forEach(function(k){ if((S.userRefs[k]||[]).length) put('u|'+k, S.userRefs[k]); });
  if(GOAL.perDay) put('g|perDay', GOAL.perDay);
  if(GOAL.active) put('g|active', GOAL.active);
  Object.keys(GOAL.plans||{}).forEach(function(id){ put('gp|'+id, GOAL.plans[id]); });
  Object.keys(GOAL.log||{}).forEach(function(d){ if(GOAL.log[d]) put('gl|'+d, GOAL.log[d]); });
  return m;
}
function syncMerge(base, local, remote){
  var out={}, keys={};
  [base,local,remote].forEach(function(o){ for(var k in o) keys[k]=1; });
  for(var k in keys){
    var b=base[k], l=local[k], r=remote[k], v;
    if(l===r) v=l;
    else if(l===b) v=r;
    else if(r===b) v=l;
    else {
      var p=k.slice(0,k.indexOf('|'));
      if((p==='r'||p==='gl')&&l!==undefined&&r!==undefined) v=(+JSON.parse(l)>=+JSON.parse(r))?l:r;
      else if(p==='gp'&&l!==undefined&&r!==undefined){
        var a=JSON.parse(l), c=JSON.parse(r), done={};
        [a.done||{}, c.done||{}].forEach(function(d){ for(var x in d) done[x]=Math.max(done[x]||0, d[x]); });
        v=JSON.stringify({start:Math.min(a.start||Date.now(), c.start||Date.now()), done:done});
      }
      else v=(l!==undefined)?l:r;   /* edited here and there: this device's; deleted on one, edited on the other: kept */
    }
    if(v!==undefined) out[k]=v;
  }
  return out;
}
function syncSame(a, b){
  var ka=Object.keys(a), kb=Object.keys(b);
  if(ka.length!==kb.length) return false;
  for(var i=0;i<ka.length;i++) if(a[ka[i]]!==b[ka[i]]) return false;
  return true;
}
/* the merged map back into the app, through the same checks a backup goes
   through, keeping this device's order and adding the new at the end */
function syncApply(m){
  var hl={}, notes={}, sheets={}, read={}, marks={}, refs={}, plans={}, log={}, per=0, active=null;
  for(var k in m){
    var i=k.indexOf('|'), p=k.slice(0,i), key=k.slice(i+1), v;
    try{ v=JSON.parse(m[k]); }catch(e){ continue; }
    if(p==='h') hl[key]=v;
    else if(p==='n') notes[key]=v;
    else if(p==='s') sheets[key]=v;
    else if(p==='r'&&/^\d{1,4}:\d{1,3}$/.test(key)&&typeof v==='number') read[key]=v;
    else if(p==='m') marks[key]=v;
    else if(p==='u'&&validKey(key)&&Array.isArray(v)) refs[key]=v.filter(function(x){ return typeof x==='string'; }).map(function(x){ return x.slice(0,80); });
    else if(p==='gp'&&v&&typeof v==='object') plans[key]={start:+v.start||Date.now(), done:(v.done&&typeof v.done==='object')?v.done:{}};
    else if(p==='gl'&&typeof v==='number') log[key]=v;
    else if(k==='g|perDay') per=Math.max(0,Math.min(20,v|0));
    else if(k==='g|active'&&typeof v==='string'&&planDef(v)) active=v;
  }
  function ordered(list, byId){
    var out=[], seen={};
    (list||[]).forEach(function(x){ if(x&&byId[x.id]!==undefined){ out.push(byId[x.id]); seen[x.id]=1; } });
    Object.keys(byId).sort().forEach(function(id){ if(!seen[id]) out.push(byId[id]); });
    return out;
  }
  SYNC.applying=true;
  try{
    S.hl=cleanHighlights(hl);
    S.notes=migrateNotes(ordered(S.notes, notes));
    S.sheets=cleanSheets(ordered(S.sheets, sheets));
    S.read=read; S.marks=cleanMarks(marks); S.userRefs=refs;
    GOAL.perDay=per; GOAL.active=active; GOAL.plans=plans; GOAL.log=log;
    saveHl(); saveNotes(); saveSheets(); saveRead(); saveUserRefs(); Store.set('strata:bookmarks',S.marks); goalSave();
  } finally { SYNC.applying=false; }
  try{ goalRemindSoon(); }catch(e){}
}

/* ---------- talking to the locker ---------- */
function syncFetch(keys, opt){
  opt=opt||{}; opt.headers=Object.assign({'Authorization':'Bearer '+keys.token}, opt.headers||{});
  opt.cache='no-store';
  return fetch(SYNC_BASE+keys.id, opt);
}
function syncPull(keys){
  return syncFetch(keys).then(function(r){
    if(r.status===404) return {data:null, etag:''};
    if(!r.ok) throw new Error('The sync server answered '+r.status+'.');
    var etag=r.headers.get('ETag')||'';
    return r.arrayBuffer().then(function(b){ return syncOpen(keys,b); }).then(function(d){
      if(!d||d.app!=='sixteen-eleven'||typeof d.map!=='object') throw new Error('That sync data could not be read.');
      return {data:d, etag:etag};
    }, function(e){ throw new Error(e&&e.message&&/read/.test(e.message)?e.message:'That sync data could not be opened with this code.'); });
  });
}
function syncPush(keys, map, etag){
  return syncSeal(keys, {app:'sixteen-eleven', v:1, at:Date.now(), map:map}).then(function(body){
    return syncFetch(keys, {method:'PUT', body:body, headers:etag?{'If-Match':etag}:{'If-None-Match':'*'}});
  }).then(function(r){
    if(r.status===412) return {conflict:true};
    if(!r.ok) throw new Error('The sync server answered '+r.status+'.');
    return {etag:r.headers.get('ETag')||''};
  });
}
function syncSave(){
  Store.set('strata:sync',{on:SYNC.on, code:SYNC.code, etag:SYNC.etag, last:SYNC.last});
  Store.set('strata:syncbase', SYNC.base||null);
}
var syncRunning=null;
function syncNow(){
  if(!SYNC.on||!SYNC.code) return Promise.resolve();
  if(syncRunning) return syncRunning.then(function(){ return syncNow(); });
  SYNC.busy=true; SYNC.err=''; syncPaint();
  var keys, tries=0;
  function round(){
    tries++;
    return syncPull(keys).then(function(rem){
      var local=syncMap(), base=SYNC.base||{};
      var merged=rem.data?syncMerge(base, local, rem.data.map):local;
      if(!syncSame(merged, local)){ syncApply(merged); SYNC.changed=true; }
      if(rem.data&&syncSame(merged, rem.data.map)){ SYNC.etag=rem.etag; return merged; }
      return syncPush(keys, merged, rem.etag).then(function(p){
        if(p.conflict){ if(tries<4) return round(); throw new Error('Another device kept changing at the same moment. Try again.'); }
        SYNC.etag=p.etag; return merged;
      });
    });
  }
  syncRunning=syncKeys(SYNC.code).then(function(k){ keys=k; return round(); }).then(function(merged){
    SYNC.base=merged; SYNC.last=Date.now(); SYNC.msg=''; syncSave();
  }).catch(function(e){
    SYNC.err=(navigator.onLine===false)?'Offline. Your changes will sync when you are back online.':((e&&e.message)||'Sync did not finish.');
  }).then(function(){
    SYNC.busy=false; syncRunning=null;
    /* new notes or highlights from another device show at once, unless
       something is being typed, which a redraw would interrupt */
    var typing=document.activeElement&&/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName||'')||(document.activeElement&&document.activeElement.isContentEditable);
    if(S.tab==='about'||(SYNC.changed&&!typing)){ S.keepScroll=true; try{ render(); }catch(e){} }
    SYNC.changed=false;
  });
  return syncRunning;
}
function syncSoon(ms){ if(!SYNC.on) return; clearTimeout(SYNC.t); SYNC.t=setTimeout(syncNow, ms==null?4000:ms); }
/* the Settings card redraws itself; elsewhere the page is left alone */
function syncPaint(){ if(S.tab==='about'){ S.keepScroll=true; try{ render(); }catch(e){} } }

function syncStart(){            /* "Turn on sync": a new code for this device */
  SYNC.code=syncNewCode(); SYNC.on=true; SYNC.etag=''; SYNC.base={}; SYNC.show=true; SYNC.joinErr='';
  syncSave(); return syncNow();
}
function syncJoin(typed){        /* "I have a sync code" */
  var code=syncNormalize(typed);
  if(!code){ SYNC.joinErr='That is not a sync code. Check each letter: it has 25, in five groups.'; syncPaint(); return Promise.resolve(); }
  SYNC.busy=true; SYNC.joinErr=''; syncPaint();
  return syncKeys(code).then(syncPull).then(function(rem){
    if(!rem.data){ SYNC.busy=false; SYNC.joinErr='Nothing is stored for that code yet. Check it against the code on your other device.'; syncPaint(); return; }
    SYNC.code=code; SYNC.on=true; SYNC.etag=''; SYNC.base={}; SYNC.busy=false;
    syncSave(); return syncNow();
  }, function(e){ SYNC.busy=false; SYNC.joinErr=(navigator.onLine===false)?'You are offline. Connect, then try again.':((e&&e.message)||'That did not work.'); syncPaint(); });
}
function syncOff(deleteCloud){
  var code=SYNC.code;
  var p=(deleteCloud&&code)?syncKeys(code).then(function(k){ return syncFetch(k,{method:'DELETE'}); }).catch(function(){}):Promise.resolve();
  return p.then(function(){
    SYNC.on=false; SYNC.code=''; SYNC.etag=''; SYNC.base=null; SYNC.last=0; SYNC.show=false; SYNC.confirmDel=false; SYNC.err='';
    SYNC.msg=deleteCloud?'Sync is off, and the copy on the server is deleted. Everything stays on this device.':'Sync is off on this device. Everything stays here, and your other devices keep syncing.';
    syncSave(); syncPaint();
  });
}
function syncLoad(v, base){
  if(v&&typeof v==='object'&&v.on&&syncNormalize(v.code)){
    SYNC.on=true; SYNC.code=syncNormalize(v.code); SYNC.etag=v.etag||''; SYNC.last=+v.last||0;
    SYNC.base=(base&&typeof base==='object')?base:{};
  }
}
function syncInit(){
  if(SYNC.on) syncSoon(800);
  try{ document.addEventListener('visibilitychange', function(){ if(document.visibilityState==='visible') syncSoon(600); }); }catch(e){}
  try{ window.addEventListener('online', function(){ syncSoon(500); }); }catch(e){}
}
function syncAgo(t){
  if(!t) return 'not yet';
  var s=Math.round((Date.now()-t)/1000);
  if(s<45) return 'just now';
  if(s<3600) return Math.round(s/60)+' min ago';
  if(s<86400) return Math.round(s/3600)+' h ago';
  return new Date(t).toLocaleDateString();
}
function vSyncCard(){
  var h='<div class="h2">Sync across devices</div><div class="card about synccard">';
  if(!SYNC.on){
    h+='<p>Keep your notes, highlights, study sheets, chapters read, bookmarks, daily goal and reading plans the same on '+
       'your phone, tablet and the website. No account: a private sync code connects them. Everything is encrypted on '+
       'this device before it leaves, so nobody else can read it, us included.</p>'+
       '<button class="btn" data-a="syncstart"'+(SYNC.busy?' disabled':'')+'>Turn on sync</button>'+
       '<div class="lab" style="margin-top:16px">Already syncing on another device?</div>'+
       '<div class="syncjoin"><input id="synccode" type="text" inputmode="text" autocomplete="off" autocapitalize="characters" spellcheck="false" '+
       'placeholder="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX" aria-label="Sync code" maxlength="40">'+
       '<button class="btn sec" data-a="syncjoin"'+(SYNC.busy?' disabled':'')+'>Join</button></div>'+
       (SYNC.joinErr?'<p class="syncerr" role="alert">'+esc(SYNC.joinErr)+'</p>':'')+
       (SYNC.busy?'<p class="vnote" role="status">Connecting…</p>':'')+
       (SYNC.msg?'<p class="vnote" role="status">'+esc(SYNC.msg)+'</p>':'');
  } else {
    h+='<div class="syncstat"><span class="syncdot'+(SYNC.err?' bad':SYNC.busy?' busy':'')+'"></span>'+
       '<span>'+(SYNC.busy?'Syncing…':SYNC.err?esc(SYNC.err):'On · synced '+esc(syncAgo(SYNC.last)))+'</span></div>'+
       '<div class="lab" style="margin-top:14px">Your sync code</div>'+
       '<div class="synccode'+(SYNC.show?'':' hid')+'" aria-live="polite">'+(SYNC.show?esc(syncPretty(SYNC.code)):'•••••-•••••-•••••-•••••-•••••')+'</div>'+
       '<div class="row3 syncbtns">'+
       '<button class="btn sec" data-a="syncshow">'+(SYNC.show?'Hide':'Show')+'</button>'+
       '<button class="btn sec" data-a="synccopy">Copy</button>'+
       '<button class="btn sec" data-a="syncshare">Share</button></div>'+
       '<p class="vnote" style="margin:8px 2px 0">Enter this code on your other devices, in Settings, Sync across devices. '+
       'Keep it safe: it is the only key to your synced notes, and anyone who has it can read them.</p>'+
       (SYNC.msg?'<p class="vnote" role="status">'+esc(SYNC.msg)+'</p>':'')+
       '<button class="btn" data-a="syncnow" style="margin-top:12px"'+(SYNC.busy?' disabled':'')+'>Sync now</button>'+
       '<button class="btn gh" data-a="syncoff">Turn off on this device</button>'+
       (SYNC.confirmDel
         ? '<div class="syncdel"><p>Delete the synced copy from the server? Your other devices stop syncing; what is on each device stays.</p>'+
           '<div class="row2"><button class="btn gh" data-a="syncdelno">Keep it</button><button class="btn" data-a="syncdelyes">Delete</button></div></div>'
         : '<button class="btn gh" data-a="syncdel">Turn off and delete the server copy</button>');
  }
  return h+'</div>';
}
function syncCopy(){
  var t=syncPretty(SYNC.code);
  return copyPlain(t).then(function(ok){ SYNC.msg=ok?'Sync code copied.':'Could not copy; tap Show and write it down.'; syncPaint(); });
}
function syncShare(){
  var text='My Sixteen Eleven sync code: '+syncPretty(SYNC.code)+'\nIn the app: Settings, Sync across devices, then enter this code.';
  if(payNative()){
    try{ var SH=window.Capacitor.registerPlugin('Share');
      return Promise.resolve(SH.share({title:'Sixteen Eleven sync code', text:text})).catch(function(){}); }catch(e){}
  }
  if(navigator.share) return navigator.share({title:'Sixteen Eleven sync code', text:text}).catch(function(){});
  return syncCopy();
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

var PS119=[['ALEPH','\u05d0'],['BETH','\u05d1'],['GIMEL','\u05d2'],['DALETH','\u05d3'],['HE','\u05d4'],['VAU','\u05d5'],
  ['ZAIN','\u05d6'],['CHETH','\u05d7'],['TETH','\u05d8'],['JOD','\u05d9'],['CAPH','\u05db'],['LAMED','\u05dc'],['MEM','\u05de'],
  ['NUN','\u05e0'],['SAMECH','\u05e1'],['AIN','\u05e2'],['PE','\u05e4'],['TZADDI','\u05e6'],['KOPH','\u05e7'],['RESH','\u05e8'],
  ['SCHIN','\u05e9'],['TAU','\u05ea']];
function vRead(){
  var b=BK(S.reading), n=S.ch;
  if(!bookLoaded(b.i)&&!b.user){
    fetchBook(b.i).then(function(){ render(); }).catch(function(){});
    return '<div class="empty">Loading '+esc(b.name)+'\u2026</div>';
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
        '<button class="redtog" data-a="togglered" aria-selected="'+
        (S.redLetters!==false)+'">Words of Christ in red</button></div>'+
        '<div class="rrow" style="margin-top:8px">'+
        '<button class="redtog" data-a="togglewords" aria-selected="'+
        (S.wordMeanings!==false)+'">Mark old words to explain them</button></div>',
        (S.redLetters!==false?'Red letters':'All in black'));
    h+=rGroup('look','Appearance',
        '<div class="rrow">'+['auto','light','dark'].map(function(t){
          return '<button data-settheme="'+t+'" aria-selected="'+((S.theme||'auto')===t)+
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
  gseen=glossSeen(vs.length);   /* how often a word is marked in this chapter */
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
      /* Psalm 119's twenty-two stanzas carry the Hebrew letter each begins
         with, as the King James prints them */
      var st=(n===119&&!b.user&&b.name==='Psalms'&&k%8===0)?PS119[k/8]:null;
      return (st?'<span class="ps119h" aria-hidden="true"><b>'+st[1]+'</b> '+st[0]+'</span>':'')+
        '<span class="v'+(col&&CMAP[col]?' hl-'+col:'')+jump+'" data-vs="'+key+'"><sup>'+(k+1)+'</sup>'+
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
    /* a reading plan's next chapter, when it is elsewhere */
    try{ h+=planNextCard(b.i,n); }catch(e){}
    if(nx){
      var nb=BK(nx.b);
      h+='<button class="nextcard" data-book="'+nx.b+'" data-goch="'+nx.c+'" data-markfrom="'+b.i+':'+n+'">'+
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
      return '<button data-settheme="'+o[0]+'" aria-selected="'+((S.theme||'auto')===o[0])+'">'+o[1]+'</button>';}).join(''))+
    '</div>';
  h+='<div class="setgrp">Reading</div><div class="setcard">'+
    seg('Text size',['XS','S','M','L','XL','XXL'].map(function(n,k){
      return '<button data-size="'+k+'" aria-selected="'+(S.textSize===k)+'">'+n+'</button>';}).join(''))+
    tog('Words of Christ in red','As in red-letter editions','togglered',S.redLetters!==false)+
    tog('Word meanings',(wordMark()==='glow'?'Old words glow softly':'A dotted line under old words')+'; tap one for its meaning','togglewords',S.wordMeanings!==false)+
    (S.wordMeanings!==false?seg('Mark old words',[['glow','Soft glow'],['line','Underline']].map(function(o){
      return '<button data-wordmark="'+o[0]+'" aria-selected="'+(wordMark()===o[0])+'">'+o[1]+'</button>';}).join('')):'')+
    tog('Focus while listening','Dim every verse but the one being read','togglefocus',S.focus!==false)+
    tog('Keep the reader upright','Ignore device rotation','togglerotate',!!S.lockRotate)+
    '</div>';
  h+='<div class="setgrp">Read aloud</div><div class="setcard">'+
    '<div class="setrow"><div class="setlab">Speed</div>'+speedSeg()+'</div>'+
    '<div class="setline"><span>Voice</span><span>'+esc(currentVoiceName())+'</span></div>'+
    audCard()+
    '<p class="setsub" style="margin:10px 0 2px">The narrated Bible is an AI rendering, made with Chatterbox, '+
    'of the narrator\u2019s own voice. Where a chapter has not been narrated yet, the device\u2019s voice reads it.</p>'+
    '</div>';
  if(isTesterBuild()){
    h+='<div class="setgrp">Tester build</div><div class="setcard">'+
      tog('All features unlocked','Study, every narrated book and all books. Turn off to try the paywall and purchases.',
          'toggletester',testerOpen())+
      '</div>';
  }
  h+=payCard();
  if(PAY.on&&!PAY.offerings&&!PAY.loadingOffers){ PAY.loadingOffers=1;
    payLoadOfferings().then(function(){ if(S.tab==='about'){ S.keepScroll=true; render(); } }); }
  h+=vSyncCard();
  h+='<div class="h2">Your data</div>';
  h+='<div class="card about"><p>'+(SYNC.on
      ?'Highlights, notes and study sheets are kept on this device, and an encrypted copy is synced to your other devices. '+
       'A backup file is still worth keeping.'
      :'Highlights, notes and study sheets are stored on '+
    'this device only. Nothing is uploaded. Clearing site data or switching phones '+
    'loses them, so keep a backup, or turn on sync above.')+'</p>'+
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
    '<p><b>The text.</b> The 66 books of the King James Bible, plus the 14 books of the Apocrypha, '+
    'in the 1769 Oxford standard text that most King James Bibles print today. The 1611 printing '+
    'used the old orthography, where <em>u</em> and <em>v</em> were interchangeable and a long '+
    '<em>\u017f</em> stood for <em>s</em>; the 1769 revision modernised the spelling and corrected '+
    'the printers\u2019 errors, so <em>haue</em> reads as <em>have</em>.</p>'+
    '<p><b>The Apocrypha.</b> All 14 books, from the eBible.org King James + Apocrypha '+
    'release (the standardised 1769 text). An earlier build set these books from a scanned '+
    '1800 printing read by OCR; that version merged hundreds of verse divisions and damaged '+
    'chapter openings, and has been replaced entirely.</p>'+
    '<p><b>A note on numbering.</b> The Rest of Esther continues the canonical book and is '+
    'traditionally printed as chapters 10\u201316. It appears here as chapters 1\u20137, keeping '+
    'each chapter\u2019s own verse numbers. 2 Esdras 7 has 70 verses, the King James numbering; '+
    'the fragment some modern editions insert at 7:36 is not part of this text.</p>'+
    '<p><b>The facts.</b> Drawn from Flavius Josephus, <em>Antiquities of the Jews</em> (and, in one '+
    'case, <em>The Jewish War</em>), in William Whiston\u2019s translation, each cited to book and chapter.</p>'+
    '<p><b>Chapter notes.</b> All 80 books have a scribe note, a historical setting and a '+
    'chapter map, and every chapter has a written note \u2014 all 1,362 of them, across all eighty '+
    'books.</p>'+
    '<p><b>The maps.</b> Four are from churchmaps.info, released by their author into the '+
    'public domain, corrected for this app; ten were drawn for it on the same relief. Places '+
    'on the new maps, and the marks for the places a verse names, are from OpenBible.info\u2019s '+
    'Bible geocoding data (CC BY 4.0). Coastlines and rivers checked against Natural Earth '+
    '(public domain). Map lettering in PT Sans and PT Serif (SIL Open Font License).</p>'+
    '<p><b>Your highlights and notes</b> are stored on this device only. Nothing is uploaded. '+
    'If you open this file somewhere else, they will not follow you.</p>'+
    '<p><b>Word meanings.</b> The plain meanings are written for this app. The big words of the faith '+
    'also show a line from Noah Webster\u2019s <em>American Dictionary of the English Language</em> (1828), '+
    'which is in the public domain; the lines are taken from the transcription at '+
    'codeberg.org/cobycat/webster1828 (CC BY-SA 4.0), and the list of them is shared under the same licence.</p>'+
    '<p><b>Sources.</b> King James Bible and Josephus\u2019s <em>Antiquities</em> from Project Gutenberg; '+
    'the Apocrypha from eBible.org. All in the public domain.</p></div>';
  /* which version this is, so a report can say exactly what it was seen on */
  h+='<p class="setver">Sixteen Eleven '+esc(APP_STAMP)+'</p>';
  return h;
}
var APP_STAMP='v107 · Oct 25 10:26';

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
/* ---------- references written into a note ----------
   Any reference typed in a note becomes a link by itself: "John 3:16",
   "1 Cor. 13:4-7", "Deuteronomy 21:16-19", "Ps 23". Abbreviations need a
   chapter and verse, so "is 3" or "am 5" in ordinary prose is left alone; a
   bare chapter needs the book's full, capitalised name. */
var NOTE_REF_RX=null;
function noteRefRx(){
  if(NOTE_REF_RX) return NOTE_REF_RX;
  var names={};
  BOOKS.forEach(function(b){ if(!b.user) names[normName(b.name)]=1; });
  Object.keys(ALIAS||{}).forEach(function(a){ names[a]=1; });
  var alts=Object.keys(names).filter(function(n){ return n&&n.length>=2; })
    .sort(function(a,b){ return b.length-a.length; })
    .map(function(n){
      return n.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')
              .replace(/^([123]) /,'$1\\s*').replace(/ /g,'\\s+');
    });
  NOTE_REF_RX=new RegExp('(^|[^A-Za-z0-9])('+alts.join('|')+')\\.?\\s*(\\d{1,3})'+
    '(?:\\s*:\\s*(\\d{1,3})(?:\\s*[-\\u2013\\u2014]\\s*(\\d{1,3}))?)?(?![0-9A-Za-z])','gi');
  return NOTE_REF_RX;
}
function findRefs(text){
  text=String(text||''); var out=[];
  if(!BOOKS.length||!text) return out;
  var rx=noteRefRx(), m;
  rx.lastIndex=0;
  while((m=rx.exec(text))){
    var name=m[2], c=+m[3], v1=m[4]?+m[4]:null, v2=m[5]?+m[5]:null;
    var bi=lookupBook(name);
    var full=(bi>=0&&BOOKS[bi]&&normName(BOOKS[bi].name)===normName(name));
    var start=m.index+m[1].length, end=m.index+m[0].length;
    if(bi<0||!BOOKS[bi]){ continue; }
    if(v1===null){
      /* a bare chapter only for a full name written with a capital */
      if(!(full||name.replace(/[^a-z]/gi,'').length>=4)||!/^[1-3A-Z]/.test(name)) continue;
      if(BOOKS[bi].nch===1){ v1=c; c=1; }
    }
    else if(!full&&name.replace(/[^a-z]/gi,'').length<=3&&!/^[1-3A-Z]/.test(name)) continue;
    if(!(c>=1&&c<=BOOKS[bi].nch)) continue;
    var len=(BIBLE[String(bi)]&&BIBLE[String(bi)][String(c)])?BIBLE[String(bi)][String(c)].length:0;
    if(v1&&len&&v1>len) continue;
    if(v2&&v2<=v1) v2=null;
    if(v2&&len&&v2>len) v2=len;
    var label=BOOKS[bi].name+' '+(BOOKS[bi].nch===1?(v1||''):c+(v1?':'+v1:''))+(v2?'-'+v2:'');
    out.push({start:start,end:end,b:bi,c:c,v1:v1,v2:v2,label:label});
  }
  return out;
}
/* text with its references as links; everything else escaped as it was */
function linkRefs(text){
  text=String(text||'');
  var refs=findRefs(text), h='', at=0;
  refs.forEach(function(r){
    h+=esc(text.slice(at,r.start));
    h+='<button class="nref" data-ref="'+vKey(r.b,r.c,r.v1||1)+'"'+(r.v2?' data-refend="'+r.v2+'"':'')+'>'+
       esc(text.slice(r.start,r.end))+'</button>';
    at=r.end;
  });
  return h+esc(text.slice(at));
}
/* the verses a note mentions, once each, in the order they are written */
function noteRefList(e){
  var seen={}, out=[];
  findRefs((e.title||'')+'\n'+(e.body||'')).forEach(function(r){
    if(seen[r.label]) return; seen[r.label]=1; out.push(r); });
  return out;
}
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

/* ---------- notes save themselves ----------
   Everything typed in the editor is written to the device a moment after you
   stop, so closing the app, a call coming in, or tapping away loses nothing.
   Done just closes the note. A brand-new note with nothing in it is never
   kept. */
var noteSaveTimer=null;
function noteEmpty(e){
  return !String(e.body||'').trim()&&!String(e.title||'').trim()&&!(e.tags||[]).length&&!(e.links||[]).length;
}
function commitNote(e){
  if(!e) return null;
  if(noteSaveTimer){ clearTimeout(noteSaveTimer); noteSaveTimer=null; }
  var ex=e.id?S.notes.filter(function(x){return x.id===e.id;})[0]:null;
  if(!ex){
    if(noteEmpty(e)) return null;
    if(!e.id) e.id='n'+Date.now()+Math.floor(Math.random()*999);
    ex=migrateNote({id:e.id,b:e.b,c:e.c,v:e.v,ts:Date.now()});
    S.notes.push(migrateNote(ex));
  }
  ex.body=String(e.body||''); ex.title=String(e.title||'');
  ex.tags=(e.tags||[]).slice(); ex.links=(e.links||[]).map(function(l){return l.slice();});
  ex.ts=Date.now(); e.ts=ex.ts;
  migrateNote(ex);
  saveNotes();
  noteSavedSay(Store.failing()?'Not saved: storage is full':'Saved');
  return ex;
}
function queueNoteSave(){
  if(noteSaveTimer) clearTimeout(noteSaveTimer);
  noteSavedSay('');
  /* the note itself, not whatever S.editing is by then: with two sides a
     tap on the other one swaps S before this fires */
  var e=S.editing;
  noteSaveTimer=setTimeout(function(){ noteSaveTimer=null; if(e) commitNote(e); refreshNoteRefs(e); }, 450);
}
function noteSavedSay(t){
  try{ var el=document.getElementById('nsaved'); if(el){ el.textContent=t; el.classList.toggle('on',!!t); } }catch(e){}
}
/* the "Verses in this note" list, redrawn in place so typing is never disturbed */
function refreshNoteRefs(e){
  e=e||S.editing;
  try{ var el=document.getElementById('nrefs'); if(el&&e) el.innerHTML=noteRefsHTML(e); }catch(x){}
}
function noteRefsHTML(e){
  var refs=noteRefList(e), legacy=(e.links||[]);
  var shown={}; refs.forEach(function(r){ shown[r.label]=1; });
  var h='';
  if(!refs.length&&!legacy.length)
    return '<p class="nrefhint">Write a reference anywhere in the note, like John 3:16 or '+
      'Deuteronomy 21:16-19, and it becomes a link here and in the note.</p>';
  h+=refs.map(function(r){
    return '<button class="lkrow nrefrow" data-ref="'+vKey(r.b,r.c,r.v1||1)+'"'+(r.v2?' data-refend="'+r.v2+'"':'')+'>'+
      '<span class="lkref">'+esc(r.label)+'</span>'+
      '<span class="lktxt">'+esc(rangeText(r.b,r.c,r.v1||1,r.v2||0).slice(0,220))+'</span></button>';
  }).join('');
  /* verses linked by hand before links became automatic stay until removed */
  h+=legacy.map(function(l,i){
    if(shown[l[0]]) return '';
    var k=(typeof l[2]==='string'&&validKey(l[2]))?parseKey(l[2]):null;
    return '<div class="lkrow"><'+(k?'button data-goverse="'+esc(l[2])+'"':'span')+' class="lkgo">'+
      '<span class="lkref">'+esc(l[0])+'</span>'+(l[1]?'<span class="lktxt">'+esc(l[1])+'</span>':'')+
      '</'+(k?'button':'span')+'><button class="lkdel" data-dellink="'+i+'" aria-label="Remove '+esc(l[0])+
      '">'+svg(I.close)+'</button></div>';
  }).join('');
  return h;
}
/* What a restore or a stored record may contain. A backup is a file anyone
   could edit, and its values end up in the page, so every key, id and colour
   is checked for its exact shape before it is kept. */
function validKey(k){ return typeof k==='string'&&/^\d{1,4}:\d{1,3}:\d{1,3}$/.test(k); }
function validId(x){ return typeof x==='string'&&/^[\w.:-]{1,64}$/.test(x); }
function cleanHighlights(h){
  var out={};
  if(h&&typeof h==='object') for(var k in h) if(validKey(k)&&typeof h[k]==='string'&&CMAP[h[k]]) out[k]=h[k];
  return out;
}
function cleanMarks(m){
  var out={};
  if(m&&typeof m==='object') for(var k in m){
    var v=m[k]; if(!validKey(k)||!v||typeof v!=='object') continue;
    out[k]={ts:typeof v.ts==='number'?v.ts:Date.now(), f:typeof v.f==='string'?v.f.slice(0,40):''};
  }
  return out;
}
function cleanSheet(sh){
  if(!sh||typeof sh!=='object'||!validId(String(sh.id||''))) return null;
  var items=Array.isArray(sh.items)?sh.items:[];
  return {id:String(sh.id), name:typeof sh.name==='string'?sh.name.slice(0,120):'Study sheet',
    desc:typeof sh.desc==='string'?sh.desc.slice(0,400):'',
    items:items.filter(function(it){ return it&&typeof it==='object'; }).map(function(it,i){
      return {id:validId(String(it.id||''))?String(it.id):('i'+Date.now()+i),
        n:(typeof it.n==='number'&&isFinite(it.n))?it.n:(typeof it.n==='string'&&/^\d{1,6}$/.test(it.n))?+it.n:'',
        q:typeof it.q==='string'?it.q:'', refs:typeof it.refs==='string'?it.refs:'',
        note:typeof it.note==='string'?it.note:''};
    })};
}
function cleanSheets(list){
  if(!Array.isArray(list)) return [];
  return list.map(cleanSheet).filter(Boolean);
}
function migrateNote(n){
  if(!n||typeof n!=='object') return null;
  if(!validId(n.id)) n.id='n'+Date.now()+Math.floor(Math.random()*999);
  /* a note on a verse keeps its place only if the place is whole numbers */
  if(n.b!=null&&!(Number.isFinite(+n.b)&&Number.isFinite(+n.c)&&Number.isFinite(+n.v))){ n.b=null; n.c=null; n.v=null; }
  else if(n.b!=null){ n.b=+n.b; n.c=+n.c; n.v=+n.v; }
  if(typeof n.body!=='string') n.body=n.body==null?'':String(n.body);
  if(typeof n.ts!=='number') n.ts=Date.parse(n.ts)||Date.now();
  if(typeof n.title!=='string') n.title='';
  if(!Array.isArray(n.tags)) n.tags=[];
  n.tags=n.tags.filter(function(t){ return typeof t==='string'&&t.trim(); })
               .map(function(t){ return t.trim().slice(0,28); }).slice(0,8);
  if(typeof n.cat!=='string') n.cat='';
  if(!Array.isArray(n.links)) n.links=[];
  n.links=n.links.filter(function(l){ return Array.isArray(l)&&l.length; }).slice(0,12)
    .map(function(l){ return [String(l[0]==null?'':l[0]).slice(0,80), l[1]==null?'':String(l[1]).slice(0,300),
                               validKey(l[2])?l[2]:'']; });
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
  return 'General note';
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
  var sm=smartOn();
  return screenHead({title:'Search'})+
    '<div class="smodes" role="radiogroup" aria-label="How to search">'+
      '<button role="radio" data-smode="smart" aria-checked="'+sm+'"'+(sm?' class="on"':'')+'>Smart</button>'+
      '<button role="radio" data-smode="words" aria-checked="'+!sm+'"'+(!sm?' class="on"':'')+'>Words</button>'+
    '</div>'+
    '<div class="search"><svg viewBox="0 0 24 24">'+I.search+
    '</svg><input id="q" placeholder="'+(sm?'Describe a verse, or a word, or John 3:16':'A word, a phrase, or John 3:16')+'" '+
      'autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" value="'+esc(S.q)+'">'+
    (S.q?'<button class="sclear" data-a="clearq" aria-label="Clear the search">×</button>':'')+
    '</div>'+
    '<div class="shchips schips">'+['All','Verses','Notes'].map(function(c){
      return '<button class="chip'+(f===c?' on':'')+'" data-sfilter="'+c+'">'+c+'</button>';
    }).join('')+
    '<button class="chip'+(S.searchExact?' on':'')+'" data-a="sexact" aria-pressed="'+!!S.searchExact+'">Exact word</button>'+
    '</div>'+
    (S.q.trim().length<2?historyHTML():'')+
    '<div id="results"></div>';
}

/* ---------- finding every verse a word is in ----------
   Search used to stop at fifty verses and matched letters anywhere, so
   "love" turned up "glove" and never reached most of the Bible. It now finds
   every verse, as whole words, with the word's other forms: love, loved,
   loveth, lovest, loving, lover. Only forms the Bible actually uses are
   counted, so a made-up stem can never match. Exact word turns the forms off. */
var IRREG_OF=null;
function irregularOf(base){
  if(!IRREG_OF){ IRREG_OF={}; Object.keys(LEX_IRREG).forEach(function(k){
    var b=LEX_IRREG[k]; (IRREG_OF[b]=IRREG_OF[b]||[]).push(k); }); }
  return IRREG_OF[base]||[];
}
function wordForms(word){
  word=String(word||'').toLowerCase().replace(/[^a-z']/g,'');
  if(!word) return [];
  var voc=lexVocab(), out=[word], bases=lexCandidates(word.replace(/'/g,''));
  if(LEX_IRREG[word]) bases.push(LEX_IRREG[word]);
  bases.forEach(function(b){
    if(b.length<2) return;
    var f=[b,b+'s',b+'es',b+'ed',b+'d',b+'eth',b+'th',b+'est',b+'st',b+'edst',b+'dst',b+'ing',
           b+'er',b+'ers',b+'r',b+'rs',b+'ly',b+'n',b+'en'];
    if(/e$/.test(b)){ var st=b.slice(0,-1); f.push(st+'ing',st+'ed',st+'eth',st+'est',st+'er',st+'ers'); }
    if(/[^aeiou][aeiou][bdgklmnprt]$/.test(b)){ var dd=b+b.slice(-1);
      f.push(dd+'ed',dd+'eth',dd+'est',dd+'ing',dd+'er',dd+'ers'); }
    if(/[^aeiou]y$/.test(b)){ var yy=b.slice(0,-1);
      f.push(yy+'ies',yy+'ied',yy+'ieth',yy+'iest',yy+'iedst'); }
    f=f.concat(irregularOf(b));
    f.forEach(function(x){ if(voc[x]&&out.indexOf(x)<0) out.push(x); });
  });
  return out;
}
function rxEsc(t){ return String(t).replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
/* what to look for: one word and its forms, a phrase, or every word */
function searchPattern(q){
  var ws=String(q).toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g)||[];
  if(!ws.length) return null;
  if(ws.length===1){
    var forms=S.searchExact?[ws[0]]:wordForms(ws[0]);
    if(!forms.length) forms=[ws[0]];
    return {kind:'word', forms:forms, rx:new RegExp('\\b(?:'+forms.map(rxEsc).join('|')+')\\b','i'),
            mark:new RegExp('\\b(?:'+forms.map(rxEsc).join('|')+')\\b','ig')};
  }
  var phrase=ws.map(rxEsc).join("[^A-Za-z0-9]+");
  return {kind:'phrase', words:ws, rx:new RegExp('\\b'+phrase+'\\b','i'), mark:new RegExp('\\b'+phrase+'\\b','ig'),
          each:ws.map(function(w){ var fs=S.searchExact?[w]:wordForms(w); if(!fs.length) fs=[w];
            return new RegExp('\\b(?:'+fs.map(rxEsc).join('|')+')\\b','i'); }),
          markAll:new RegExp('\\b(?:'+ws.map(function(w){ return (S.searchExact?[w]:wordForms(w)).concat([w]).map(rxEsc).join('|'); }).join('|')+')\\b','ig')};
}
function sectionOfBook(i){ return (i>=39&&i<=52)?'Apocrypha':(i<39?'Old Testament':'New Testament'); }
function findVerses(pat){
  var hits=[], all=false;
  for(var bi=0;bi<BOOKS.length;bi++){
    if(BOOKS[bi].user) continue;
    var chs=BIBLE[String(bi)]; if(!chs) continue;
    var cns=Object.keys(chs).sort(function(a,b){return a-b;});
    for(var ci=0;ci<cns.length;ci++){
      var vs=chs[cns[ci]];
      for(var v=0;v<vs.length;v++){
        var t=vs[v]; if(!t) continue;
        if(pat.rx.test(t)) hits.push({b:bi,c:+cns[ci],v:v+1,t:t});
      }
    }
  }
  /* a phrase that never occurs as written: every verse with all its words */
  if(!hits.length&&pat.kind==='phrase'){
    all=true;
    for(var b2=0;b2<BOOKS.length;b2++){
      if(BOOKS[b2].user) continue;
      var ch2=BIBLE[String(b2)]; if(!ch2) continue;
      for(var c2 in ch2){ var vv=ch2[c2];
        for(var k=0;k<vv.length;k++){ var tt=vv[k]; if(!tt) continue;
          if(pat.each.every(function(r){ return r.test(tt); })) hits.push({b:b2,c:+c2,v:k+1,t:tt}); } }
    }
    hits.sort(function(a,b){ return (a.b-b.b)||(a.c-b.c)||(a.v-b.v); });
  }
  return {hits:hits, all:all};
}
/* the meaning, beside the verses, for a single word */
function searchDefinition(word){
  var gl=glossLookup(word);
  var h=gl?'<div class="sgloss">'+glossCard(gl.e, word)+'</div>':'';
  var r=(S.sdef&&S.sdef.word===word)?S.sdef:null;
  if(!r&&!S.sdefWait){
    S.sdefWait=word;
    lexLookup(word).then(function(res){ S.sdef=res; S.sdefWait=null;
      if((S.q||'').trim().toLowerCase()===word) runSearch(true); })
      .catch(function(){ S.sdefWait=null; });
  }
  if(r&&r.forms.length){
    var f=r.forms[0], m=(f.modern||[])[0], w=(f.entries||[])[0];
    /* Webster's 1913 first: it gives the sense the Bible uses ("a man employed
       in tending sheep"), where the modern list may lead with "a clergyman" */
    var line=(w&&w.d&&w.d[0])?esc(w.d[0].slice(0,220)):m?(m[0]?'<i>'+esc(m[0])+'</i> ':'')+esc(m[1]):'';
    if(line) h+='<div class="sdef"><div class="lab">Meaning</div><p><b>'+esc(f.head)+'</b> — '+line+'</p>'+
      '<button class="chip" data-word="'+esc(word)+'">Full entry, its history and the Hebrew and Greek</button></div>';
  }
  return h;
}
function runSearch(keepPage){
  var out=document.getElementById('results'); if(!out) return;
  var q=S.q.trim();
  if(!keepPage) S.searchShow=100;
  if(q.length<2){out.innerHTML='<p class="empty">Type a word, a phrase or a reference. '+
    'Every one of the 80 books and their 36,000 verses is searched.</p>';return;}
  var f=S.searchFilter||'All', sec=S.searchSec||'All';
  var h='', pending=!allBooksLoaded();
  smartWarm(q);
  /* a reference goes straight to its passage */
  var refs=[];
  try{ refs=findRefs(q); }catch(e){}
  if(!refs.length){ try{ var pr=parseRefs(q).filter(function(r){ return r.ok&&/\d/.test(q); });
    pr.forEach(function(r){ refs.push({b:r.b,c:r.c,v1:r.v1,v2:r.v2,label:r.label}); }); }catch(e){} }
  if(refs.length&&f!=='Notes'){
    h+=refs.slice(0,4).map(function(r){
      var v1=r.v1||1;
      return '<button class="sres sgo" data-ref="'+vKey(r.b,r.c,v1)+'"'+(r.v2?' data-refend="'+r.v2+'"':'')+'>'+
        '<span class="srow"><span class="sref">Go to '+esc(r.label)+'</span><span class="stype">Passage</span></span>'+
        '<span class="stext">'+esc(rangeText(r.b,r.c,v1,r.v2||0).slice(0,240))+'</span></button>';
    }).join('');
  }
  var pat=searchPattern(q);
  var notes=[], books=[];
  var safe=rxEsc(q), loose=new RegExp(safe,'i');
  S.notes.forEach(function(n){
    var hay=(n.title||'')+' '+(n.body||'');
    if(loose.test(hay)||(pat&&pat.rx.test(hay))) notes.push(n);
  });
  if(f==='All'){
    BOOKS.forEach(function(b){
      if(b.user) return;
      if(loose.test(b.name)||loose.test(b.summary||'')||loose.test(b.scribe||'')) books.push({r:b.name,t:b.summary,i:b.i});
      (b.prophecies||[]).forEach(function(p){ if(loose.test(p)) books.push({r:b.name+' — prophecy',t:p,i:b.i}); });
    });
    (FACTS||[]).forEach(function(x){
      if(loose.test(x.title)||loose.test(x.text)) books.push({r:'Josephus — '+x.cite,t:x.title,i:x.book,c:x.ch}); });
  }
  var found=(pat&&f!=='Notes')?findVerses(pat):{hits:[],all:false};
  var counts={'Old Testament':0,'New Testament':0,'Apocrypha':0};
  found.hits.forEach(function(x){ counts[sectionOfBook(x.b)]++; });
  var verses=sec==='All'?found.hits:found.hits.filter(function(x){ return sectionOfBook(x.b)===sec; });
  /* the meaning of a single word sits above its verses */
  if(pat&&pat.kind==='word'&&f!=='Notes'&&!refs.length) h+=searchDefinition(q.toLowerCase().replace(/[^a-z']/g,''));
  var smart=f!=='Notes'&&!refs.length&&smartWanted(q);
  if(!smart&&SMART.dead&&smartOn()&&f!=='Notes'&&!refs.length&&smartWords(q).length>=2)
    h+='<p class="smhow">Smart search is not available on this device. The word search below is complete.</p>';
  if(smart){
    var have=SMART.cache[q.toLowerCase()];
    h+='<div id="smartres" class="smart'+(have?'':' smwait')+'">'+
      (have?smartHTML(q,have):'<div class="lab sgroup">Closest in meaning</div><p class="smhow">Looking for verses that mean this…</p>')+'</div>';
  }
  if(f!=='Notes'&&pat&&!refs.length||found.hits.length){
    var n=found.hits.length;
    h+='<p class="scount"><b>'+n.toLocaleString()+(n===1?' verse':' verses')+'</b>'+
      (found.all?' with all of these words':'')+
      (pat&&pat.kind==='word'&&pat.forms.length>1?' · '+esc(pat.forms.slice(0,8).join(', '))+(pat.forms.length>8?'…':''):'')+
      '</p>';
    if(n) h+='<div class="shchips ssec">'+['All','Old Testament','New Testament','Apocrypha'].map(function(c){
        var k=c==='All'?n:counts[c];
        if(c!=='All'&&!k) return '';
        return '<button class="chip'+(sec===c?' on':'')+'" data-ssec="'+c+'">'+c+' '+k.toLocaleString()+'</button>';
      }).join('')+'</div>';
    if(pending) h+='<p class="scount">Some books are still loading; the count will grow as they arrive.</p>';
  }
  if(f!=='Verses'&&notes.length){
    h+='<div class="lab sgroup">Your notes</div>'+notes.slice(0,20).map(function(nn){
      var t=nn.title?nn.title+' — '+nn.body:nn.body;
      return '<button class="sres" data-editnote="'+esc(nn.id)+'"><span class="srow"><span class="sref">'+
        esc(nn.b==null?'General note':vRef(nn.b,nn.c,nn.v))+'</span><span class="stype">Note</span></span>'+
        '<span class="stext">'+markText(t.slice(0,240),pat,loose)+'</span></button>';
    }).join('');
  }
  if(f!=='Notes'&&verses.length){
    var shown=verses.slice(0,S.searchShow||100);
    h+='<div class="lab sgroup">'+(smart?'Verses with these words':'Verses')+'</div>'+shown.map(function(x){
      return '<button class="sres" data-goverse="'+vKey(x.b,x.c,x.v)+'">'+
        '<span class="srow"><span class="sref">'+esc(BOOKS[x.b].name+' '+x.c+':'+x.v)+'</span></span>'+
        '<span class="stext">'+markText(x.t,pat,null)+'</span></button>';
    }).join('');
    if(verses.length>shown.length)
      h+='<button class="btn sec smore" data-a="smore">Show '+Math.min(100,verses.length-shown.length)+' more of '+
        (verses.length-shown.length).toLocaleString()+'</button>';
  }
  if(f==='All'&&books.length){
    h+='<div class="lab sgroup">In the books’ notes and Josephus</div>'+books.slice(0,20).map(function(r){
      return '<button class="sres" data-book="'+r.i+'"'+(r.c?' data-goch="'+r.c+'"':'')+'>'+
        '<span class="srow"><span class="sref">'+esc(r.r)+'</span></span>'+
        '<span class="stext">'+markText(String(r.t||'').slice(0,240),null,loose)+'</span></button>';
    }).join('');
  }
  if(smart&&!found.hits.length&&pat&&pat.kind==='phrase') h+=smartEachWord(q);
  if(!found.hits.length&&!notes.length&&!books.length&&!refs.length&&!smart){
    h+='<p class="empty">Nothing found for “'+esc(q)+'”.'+
      (pending?'<br><br>Some books are still loading, so the text search is not complete yet.':'')+'</p>';
  }
  out.innerHTML=h;
  if(smart&&!SMART.cache[q.toLowerCase()]) smartQueue(q);
}
/* load the model while the second word is still being typed */
function smartWarm(q){
  if(SMART.warmed||!smartOn()||SMART.dead||!/\S\s+\S?/.test(q)) return;
  SMART.warmed=true; smartAsk({warm:true}).catch(function(){ SMART.warmed=false; });
}
/* ---------- smart search ----------
   Search by meaning as well as by the words. A small model on the phone
   (assets/smart/, run in a worker so typing never stalls) ranks every verse
   by how close it is in meaning to what was typed, so "Aaron's beard
   dripping oil" finds Psalm 133:2, which says "ointment ... ran down upon the
   beard". It only ranks: every line it shows is the King James text, and the
   note under the best match is the app's own chapter note, never written by
   a machine. Nothing leaves the phone.

   It never takes anything away: every verse with the words typed is still
   listed below the best matches, exactly as a word search lists them, and
   Words in the switch above turns the smart part off altogether. */
var SMART={worker:null, id:0, wait:{}, dead:false, cache:{}, timer:0, loadingFor:{}};
function smartOn(){ return S.searchMode!=='words'; }
function smartWords(q){ return (String(q).toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g)||[]); }
/* one word is a word search; smart search is for a phrase, a question or a description */
function smartWanted(q){ return smartOn()&&!SMART.dead&&smartWords(q).length>=2; }
function smartWorker(){
  if(SMART.worker||SMART.dead) return SMART.worker;
  try{
    if(typeof Worker==='undefined'||typeof fetch==='undefined') throw new Error('no workers');
    SMART.worker=new Worker('assets/smart/worker.js');
    SMART.worker.onmessage=function(ev){ var m=ev.data||{}, cb=SMART.wait[m.id];
      delete SMART.wait[m.id]; if(cb) cb(m); };
    SMART.worker.onerror=function(){ smartFail(); };
  }catch(e){ SMART.dead=true; SMART.worker=null; }
  return SMART.worker;
}
function smartFail(){
  SMART.dead=true; try{ if(SMART.worker) SMART.worker.terminate(); }catch(e){} SMART.worker=null;
  Object.keys(SMART.wait).forEach(function(k){ var cb=SMART.wait[k]; delete SMART.wait[k]; cb({error:'stopped'}); });
}
function smartAsk(msg){
  return new Promise(function(res,rej){
    var w=smartWorker(); if(!w) return rej(new Error('unavailable'));
    var id=++SMART.id; msg.id=id;
    SMART.wait[id]=function(m){
      /* twice failing to load (a file missing or out of date) and it stays off */
      if(m.error){ SMART.errs=(SMART.errs||0)+1; if(SMART.errs>=2) smartFail(); rej(new Error(m.error)); }
      else { SMART.errs=0; res(m); } };
    w.postMessage(msg);
  });
}
function smartSearch(q){
  var key=q.toLowerCase();
  if(SMART.cache[key]) return Promise.resolve(SMART.cache[key]);
  return smartAsk({q:q, k:8}).then(function(m){
    var out=(m.hits||[]).filter(function(x){ return BOOKS[x.b]&&!BOOKS[x.b].user; });
    SMART.cache[key]=out; return out;
  });
}
function smartVerseText(x){
  var ch=(BIBLE[String(x.b)]||{})[x.c]; return ch?ch[x.v-1]||'':null;
}
function smartHTML(q, list){
  if(!list.length) return '';
  /* bold only the words that carry the question, not "the" and "that" */
  var keep=smartWords(q).map(function(w){ return w.replace(/'s$/,''); })
    .filter(function(w){ return !SMART_STOP[w]&&w.length>2; });
  var pat=keep.length?{kind:'word', mark:new RegExp('\\b(?:'+keep.map(function(w){
    return wordForms(w).concat([w]).map(rxEsc).join('|'); }).join('|')+')\\b','ig')}:null;
  var need=list.filter(function(x){ return smartVerseText(x)===null; });
  if(need.length&&!SMART.loadingFor[q]){
    SMART.loadingFor[q]=1;
    Promise.all(need.map(function(x){ return fetchBook(x.b).catch(function(){}); }))
      .then(function(){ if((S.q||'').trim()===q) smartFill(q); });
  }
  var top=list[0], tb=BOOKS[top.b], note=tb&&tb.chapters&&tb.chapters[top.c];
  var card=function(x, first){
    var t=smartVerseText(x);
    return '<button class="sres'+(first?' smtop':'')+'" data-goverse="'+vKey(x.b,x.c,x.v)+'">'+
      '<span class="srow"><span class="sref">'+esc(BOOKS[x.b].name+' '+x.c+':'+x.v)+'</span>'+
      (first?'<span class="stype">Best match</span>':'')+'</span>'+
      '<span class="stext">'+(t===null?'Loading…':markText(t,pat,null))+'</span>'+
      (first&&note?'<span class="smnote"><b>'+esc(tb.name+' '+top.c)+'</b> — '+esc(String(note).slice(0,260))+'</span>':'')+
      '</button>';
  };
  return '<div class="lab sgroup">Closest in meaning</div>'+
    list.map(function(x,i){ return card(x,i===0); }).join('')+
    '<p class="smhow">Ranked by meaning, on this phone. Every line is the King James text. '+
    'Every verse with your words is listed below.</p>';
}
function smartFill(q){
  var box=document.getElementById('smartres'); if(!box) return;
  smartSearch(q).then(function(list){
    if((S.q||'').trim()!==q) return;
    var b=document.getElementById('smartres'); if(!b) return;
    b.className='smart'; b.innerHTML=smartHTML(q, list);
  }).catch(function(){
    if((S.q||'').trim()!==q) return;
    var b=document.getElementById('smartres'); if(!b) return;
    b.className='smart'; b.innerHTML=SMART.dead?'<p class="smhow">Smart search is not available on this device. '+
      'The word search below is complete.</p>':'';
  });
}
/* typing: wait for a pause before asking the model */
function smartQueue(q){
  clearTimeout(SMART.timer);
  if(SMART.cache[q.toLowerCase()]){ smartFill(q); return; }
  SMART.timer=setTimeout(function(){ if((S.q||'').trim()===q) smartFill(q); }, 300);
}
var SMART_STOP={};
('a an and the of to in on at by for with is are was were be been it its this that these those what which who whom '+
 'where when how why verse verses bible mention mentions mentioned says say said about does do did there here from as '+
 'into out up down over i me my you your he him his she her they them their we us our or not no so than then').split(' ')
  .forEach(function(w){ SMART_STOP[w]=1; });
/* each word on its own, when no verse has them all, so none of them is lost */
function smartEachWord(q){
  var ws=smartWords(q).filter(function(w){ return !SMART_STOP[w]&&w.length>1; }), seen={}, out=[];
  ws.forEach(function(w){
    var base=w.replace(/'s$/,''); if(seen[base]) return; seen[base]=1;
    var p=searchPattern(base); if(!p) return;
    var n=findVerses(p).hits.length; if(n) out.push([base,n]);
  });
  if(!out.length) return '';
  return '<div class="lab sgroup">Each word on its own</div><div class="shchips seach">'+out.map(function(x){
    return '<button class="chip" data-search="'+esc(x[0])+'">'+esc(x[0])+' '+x[1].toLocaleString()+'</button>'; }).join('')+'</div>';
}

/* the match is found in the plain text and each piece escaped on its own:
   matching inside the escaped text turned "&lt;" into "&<b>lt</b>;" */
function markText(t, pat, loose){
  t=String(t==null?'':t);
  try{
    var rx=pat?(pat.kind==='phrase'&&pat.markAll?pat.markAll:pat.mark):(loose?new RegExp('('+loose.source+')','ig'):null);
    if(rx){
      var g=new RegExp(rx.source, rx.flags.indexOf('g')>-1?rx.flags:rx.flags+'g'), out='', last=0, m;
      while((m=g.exec(t))){
        if(!m[0]){ g.lastIndex++; continue; }
        out+=esc(t.slice(last,m.index))+'<b>'+esc(m[0])+'</b>'; last=m.index+m[0].length;
      }
      return out+esc(t.slice(last));
    }
  }catch(e){}
  return esc(t);
}

/* ================= VERSE ACTION SHEET ================= */
/* ---------- word meanings ----------
   Old words, and the Bible's own terms, carry a faint dotted underline; a tap
   opens their meaning. The underline takes the colour of the text around it,
   so a word stays black in the early morning and white at night, and only
   the words of Christ are ever red. An old word is marked once a chapter,
   where it first appears. The big words of the faith (righteousness,
   Gentiles, propitiation) are marked again further on, since that is where
   people stumble: at most twice a chapter, three times in a chapter of more
   than 40 verses, never twice in a verse and at least GLOSS_GAP verses
   apart, so the page stays calm. */
var GLOSS_FORM=null, gseen={}, GLOSS_GAP=5;
/* what a chapter's marks are counted in: the most times a big word is marked */
function glossSeen(nverses){ return {__cap:nverses>40?3:2}; }
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
  var idx=glossIndex(), vn=+((/:(\d+)$/.exec(ref||'')||[0,0])[1]), cap=seen.__cap||2;
  return html.split(/(<[^>]+>)/).map(function(seg){
    if(!seg||seg.charAt(0)==='<') return seg;
    return seg.replace(/&#?[a-z0-9]+;|[A-Za-z]+/gi, function(m, off){
      if(m.charAt(0)==='&') return m;
      var w=m.toLowerCase(), i=idx[w];
      if(i===undefined) return m;
      var e=GLOSSARY[i], had=seen[e[0]];
      if(had&&(e[2]!=='t'||had.n>=cap||vn-had.v<GLOSS_GAP)) return m;
      var before=seg.slice(Math.max(0,off-24),off), after=seg.slice(off+m.length,off+m.length+24);
      if(!glossRuleOk(e,w,before,after,ref)) return m;
      seen[e[0]]={n:had?had.n+1:1, v:vn};
      var gs=glossSenseAt(e[0], before);
      return '<span class="gw" data-gw="'+i+'"'+(gs>-1?' data-gs="'+gs+'"':'')+' role="button" tabindex="0">'+m+'</span>';
    });
  }).join('');
}
function glossLookup(word){
  var i=glossIndex()[String(word||'').trim().toLowerCase()];
  return i===undefined?null:{i:i,e:GLOSSARY[i]};
}
/* a sense told by the word just before this one ("burnt offering", "peace
   offering"), where one verse names several */
function glossSenseAt(head, before){
  var ss=(typeof GLOSS_SENSES!=='undefined')&&GLOSS_SENSES[head];
  if(!ss) return -1;
  var b=String(before||'').toLowerCase(), any=false, k;
  for(k=0;k<ss.length;k++) if(ss[k].before){ any=true; if(ss[k].before.test(b)) return k; }
  if(!any) return -1;
  /* none of them: the plain sense, whatever else the verse names */
  for(k=0;k<ss.length;k++) if(ss[k].dflt) return k;
  return 0;
}
/* which of a word's meanings this verse uses (GLOSS_SENSES in glossary.js);
   the same order of checks as glossary_work/checksenses.py */
function glossSense(head, text, ref, form){
  var ss=(typeof GLOSS_SENSES!=='undefined')&&GLOSS_SENSES[head];
  if(!ss) return -1;
  var t=String(text||'').toLowerCase().replace(/\u2019/g,"'"), f=String(form||'').toLowerCase(), k;
  for(k=0;k<ss.length;k++) if((ss[k].refs&&ss[k].refs.indexOf(ref)>-1)||(ss[k].forms&&ss[k].forms.indexOf(f)>-1)) return k;
  for(k=0;k<ss.length;k++) if(ss[k].when&&ss[k].when.test(t)) return k;
  for(k=0;k<ss.length;k++) if(ss[k].question){
    var i=t.search(new RegExp('\\b'+f.replace(/[^a-z']/g,'')+'\\b')), m=i>-1?/[.?:;!]/.exec(t.slice(i)):null;
    if(m&&m[0]==='?') return k;
  }
  for(k=0;k<ss.length;k++) if(ss[k].dflt) return k;
  return 0;
}
function glossExample(x, head){
  var forms=(GLOSSARY[glossIndex()[head]]||[0,head])[1].split(' ');
  var q=esc(x.ex[1]), rx=new RegExp('\\b('+forms.map(rxEsc).join('|')+')\\b','i');
  return '<span class="wdr">'+esc(x.ex[0])+'</span> \u201c'+q.replace(rx,'<b>$1</b>')+'\u201d';
}
/* the card: the meaning this verse uses first; then each other meaning on
   its own, with a verse that shows it. Without a verse (search, Word study)
   every meaning is listed, each with its example. */
function glossCard(e, shown, verse){
  var form=shown&&shown.toLowerCase()!==e[0];
  var ss=(typeof GLOSS_SENSES!=='undefined')&&GLOSS_SENSES[e[0]];
  var h='<div class="wdk">'+(e[2]==='t'?'Bible term':'Old word')+'</div>'+
    '<div class="wdh">'+esc(form?shown.toLowerCase():e[0])+'</div>'+
    (form?'<div class="wdf">a form of \u201c'+esc(e[0])+'\u201d</div>':'');
  if(!ss) return h+'<p class="wdm">'+esc(e[3])+'</p>'+gloss1828(e);
  if(verse){
    var pick=(verse.pick!=null&&ss[verse.pick])?+verse.pick:glossSense(e[0], verse.text, verse.ref, shown||e[0]);
    h+='<div class="wdin">In this verse</div><p class="wdm">'+esc(ss[pick].m)+'</p>';
    var others=ss.filter(function(x,k){ return k!==pick; });
    if(others.length) h+='<div class="wdalt"><div class="wdin">'+(others.length===1?'Its other meaning':'Its other meanings')+'</div>'+
      others.map(function(x){ return '<div class="wdo"><p class="wdom">'+esc(x.m)+'</p><p class="wdoe">'+glossExample(x, e[0])+'</p></div>'; }).join('')+'</div>';
    return h+gloss1828(e);
  }
  return h+'<ol class="wdsenses">'+ss.map(function(x){
    return '<li><p class="wdom">'+esc(x.m)+'</p><p class="wdoe">'+glossExample(x, e[0])+'</p></li>'; }).join('')+'</ol>'+gloss1828(e);
}
/* the big words also carry Webster's own definition of 1828, labelled as his */
function gloss1828(e){
  var w=(typeof GLOSS_1828!=='undefined')&&GLOSS_1828[e[0]];
  return w?'<div class="wd1828"><div class="wdin">Webster\u2019s 1828</div><p class="wdw">\u201c'+esc(w)+'\u201d</p></div>':'';
}
function openWordSheet(i, key, shown, gs){
  var e=GLOSSARY[i]; if(!e) return;
  S.sheet=null;
  var h='<div class="grabzone"><div class="grab"></div></div><div class="wdsheet">';
  var pk=key?parseKey(key):null, raw=pk?(vText(pk.b,pk.c,pk.v)||''):'';
  h+=glossCard(e, shown, pk?{text:raw, ref:vRef(pk.b,pk.c,pk.v), pick:(gs===undefined||gs===''?null:+gs)}:null);
  if(key){
    var p=pk, t=esc(raw);
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
    if(r&&r.ok) rows.push({b:r.b,c:r.c,v:r.v1||1,v2:r.v2||0,label:r.label,text:rangeText(r.b,r.c,r.v1||1,r.v2||0)});
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
  if(S.popNoteChoice===key){
    /* Note, when you already have notes: a new one on this verse, or this
       verse added to the end of one you have, in plain words */
    h+='<div class="pnotechoice"><button class="pline" data-a="pnotenew">Start a new note on this verse</button>'+
      '<div class="plab">Or add this verse to a note you already have</div><div class="pfiles">'+
      S.notes.slice().sort(function(a,b){ return (b.ts||0)-(a.ts||0); }).slice(0,8).map(function(n){
        return '<button class="pfile" data-pfilenote="'+esc(n.id)+'"><b>'+esc(noteTitle(n))+'</b>'+
          (n.b!==null&&n.b!==undefined?'<span>'+esc(vRef(n.b,n.c,n.v))+'</span>':'')+'</button>';
      }).join('')+'</div></div>';
  }
  if(rows.length){
    h+='<div class="prels'+(more?' all':'')+'">'+(more?rows:rows.slice(0,2)).map(function(r){
      var t=r.text||'';
      /* a range ("Deuteronomy 21:16-19") opens on its first verse with the
         whole run marked */
      return '<button class="prel" '+(r.v2>r.v
          ? 'data-ref="'+vKey(r.b,r.c,r.v)+'" data-refend="'+r.v2+'"'
          : 'data-goverse="'+vKey(r.b,r.c,r.v)+'"')+'>'+
        '<span class="prr">'+esc(r.label||vRef(r.b,r.c,r.v))+'</span>'+
        '<span class="prt">'+esc(t.length>150?t.slice(0,150)+'…':t)+'</span></button>';
    }).join('')+'</div>';
  }
  if(more) h+=popMoreHTML(key, p, mine);
  if(S.popRefAdding===key){
    /* the box has a line of its own, and the verse it names is shown as you
       type, so you can see what you are about to tie to this one */
    h+='<div class="prefadd"><label class="plab" for="prefin">Cross reference</label>'+
       '<input id="prefin" placeholder="e.g. Isaiah 53:5 or Deuteronomy 21:16-19" '+
         'autocomplete="off" autocapitalize="words" spellcheck="false" value="'+esc(S.prefDraft||'')+'">'+
       '<div class="prefprev" id="prefprev" aria-live="polite">'+refPreviewHTML(S.prefDraft||'')+'</div>'+
       '<div class="prefbtns"><button class="btn sec" data-a="psaveref">Add</button>'+
       '<button class="btn gh" data-a="pcancelref">Cancel</button></div></div>';
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
      var hn=here.map(function(x){ return x.n; });
      var plate=plateForPlaces(vera, hn);
      h+='<div class="plab">On the map</div><div class="pmine">'+here.map(function(pl){
        var one=plateForPlaces(vera, [pl.n]);
        return '<button class="pchip" data-plate="'+esc(one.id)+'" data-pins="'+esc(pl.n)+'">'+esc(pl.n)+'</button>'; }).join('')+
        '<button class="pchip go" data-plate="'+esc(plate.id)+'" data-pins="'+esc(hn.join('|'))+'">Open '+esc(plate.name)+'</button></div>';
    }
  }
  if(S.marks[key]){
    var cur=folderOf(key), fs=bookmarkFolders();
    if(fs.indexOf(cur)===-1) fs.unshift(cur);
    h+='<div class="plab">Saves folder for this verse</div><div class="pmine">'+fs.map(function(f){
      return '<button class="pchip'+(f===cur?' on':'')+'" data-pfolder="'+esc(f)+'" aria-pressed="'+(f===cur)+'">'+esc(f)+'</button>';
    }).join('')+'<span class="pnewf"><input id="pfolderin" placeholder="New folder" maxlength="32" aria-label="New folder">'+
      '<button class="pchip" data-a="pnewfolder" aria-label="Make this folder">+</button></span></div>';
  }
  if(S.notes.length){
    if(S.popFiling===key){
      h+='<div class="plab">Add this verse to which of your notes?</div><div class="pfiles">'+S.notes.slice().sort(function(a,b){
          return (b.ts||0)-(a.ts||0); }).slice(0,8).map(function(n){
        return '<button class="pfile" data-pfilenote="'+esc(n.id)+'"><b>'+esc(noteTitle(n))+'</b>'+
          (n.b!==null&&n.b!==undefined?'<span>'+esc(vRef(n.b,n.c,n.v))+'</span>':'')+'</button>';
      }).join('')+'</div>';
    } else {
      h+='<button class="pline" data-a="pfile">Add this verse to a note you already have</button>';
    }
  }
  return h+'</div>';
}
/* what a typed reference resolves to: the verse (or the first and last of a
   range) in full, or a word on why it does not resolve yet */
/* the words of a verse, or of a short run of verses, numbered when more than one */
/* a passage's verses; past twelve it stops at "…", unless all are wanted
   (a study sheet saved as a file) */
function rangeText(b,c,v1,v2,all){
  if(!v2||v2<=v1) return vText(b,c,v1)||'';
  var t=[], cap=all?1e4:12;
  for(var v=v1;v<=v2&&v<v1+cap;v++){ var x=vText(b,c,v); if(x) t.push(v+' '+x); }
  if(v2>=v1+cap) t.push('\u2026');
  return t.join(' ');
}
function refPreviewHTML(raw){
  raw=String(raw||'').trim();
  if(!raw) return '';
  var rs=[];
  try{ rs=parseRefs(raw); }catch(e){}
  var ok=rs.filter(function(r){ return r.ok; });
  if(!ok.length) return '<p class="prefhint">Type a book, chapter and verse.</p>';
  return ok.slice(0,3).map(function(r){
    var v1=r.v1||1, v2=r.v2&&r.v2>v1?r.v2:v1, t=[];
    for(var v=v1;v<=v2&&v<v1+6;v++){ var x=vText(r.b,r.c,v); if(x) t.push((v2>v1?v+' ':'')+x); }
    if(v2>=v1+6) t.push('\u2026');
    return '<div class="prefv"><b>'+esc(r.label)+'</b><span>'+esc(t.join(' '))+'</span></div>';
  }).join('');
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
  var pin=w.querySelector&&w.querySelector('#prefin');
  if(pin&&pin.addEventListener) pin.addEventListener('input',function(){
    S.prefDraft=pin.value;
    var pv=document.getElementById('prefprev'); if(pv) pv.innerHTML=refPreviewHTML(pin.value);
  });
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
      /* never past the point where the tapped verse would slip under the top
         bar: the verse stays in sight, and a card too tall for what is left
         simply scrolls with the page */
      var vs=S.pop?document.querySelector('.rd [data-vs="'+S.pop+'"]'):null;
      var topBar=document.getElementById('top'), tb=topBar?topBar.getBoundingClientRect().bottom:s.top;
      var limitTop=Math.max(s.top, tb)+8;
      var anchor=vs?vs.getBoundingClientRect().top:r.top;
      var room=anchor-limitTop;
      if(over>room) over=Math.max(0, room);
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
  try{ document.body.classList.add('pop-open'); }catch(e){}
  placePop(true);
}
function popReset(){
  S.popMore=null; S.popRefAdding=null; S.popFiling=null; S.popMsg=''; S.popMsgKey=null; S.popImaging=null; S.popNoteChoice=null;
}
function popSay(msg){ S.popMsg=msg||''; S.popMsgKey=S.pop; if(msg) announce(msg); }
function closePop(){
  if(!S.pop) return false;
  S.pop=null; S.popCopied=null; popReset();
  try{ document.body.classList.remove('pop-open'); }catch(e){}
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
    var hn=here.map(function(x){ return x.n; });
    var plate=plateForPlaces(vera, hn);
    h+='<div class="lab" style="margin-bottom:8px">On the map</div>';
    h+='<div class="chips" style="margin-bottom:6px">'+here.map(function(pl){
      var one=plateForPlaces(vera, [pl.n]);
      return '<button class="chip pl" data-plate="'+esc(one.id)+'" data-pins="'+esc(pl.n)+'">'+esc(pl.n)+'</button>';
    }).join('')+'</div>';
    h+='<button class="btn gh" data-plate="'+esc(plate.id)+'" data-pins="'+esc(hn.join('|'))+'" '+
       'style="margin-bottom:14px">Open '+esc(plate.name)+'</button>';
  }
  var mine=userRefs(p.b,p.c,p.v);
  if(mine.length){
    h+='<div class="lab" style="margin-bottom:8px">Your references</div>';
    h+='<div class="rels">'+mine.map(function(lbl){
      var r=parseRefs(lbl)[0];
      var txt=(r&&r.ok)?rangeText(r.b,r.c,r.v1||1,r.v2||0):'';
      return '<div class="rel mine">'+
        ((r&&r.ok)?'<button class="relgo" '+((r.v2||0)>(r.v1||1)
            ? 'data-ref="'+vKey(r.b,r.c,r.v1||1)+'" data-refend="'+r.v2+'"'
            : 'data-goverse="'+vKey(r.b,r.c,r.v1||1)+'"')+'>':'<span class="relgo">')+
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
      h+='<div class="lab" style="margin:14px 0 8px">Add it to which note?</div>';
      h+='<div class="filelist">'+S.notes.slice().sort(function(a,b){
          return (b.ts||0)-(a.ts||0); }).slice(0,12).map(function(n){
        return '<button class="filerow" data-filenote="'+esc(n.id)+'">'+
          '<b>'+esc(noteTitle(n))+'</b>'+
          (n.b!==null&&n.b!==undefined?'<span>'+esc(vRef(n.b,n.c,n.v))+'</span>':'')+
          '</button>';
      }).join('')+'</div>';
      h+='<button class="btn gh" data-a="cancelfile">Cancel</button>';
    } else {
      h+='<button class="btn gh" data-a="filenote">Add this verse to one of your notes</button>';
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
  PAY.open=null; AUD.sheet=false;
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
/* Is this a verse that exists? A verse whose book is not in memory (one of
   your own books, closed, or a Bible book still downloading) cannot be read
   yet, but it is not stale: it is kept, and shown by its reference. */
function verseKnown(b,c,v){
  var bk=BK(b); if(!bk) return false;
  if(vText(b,c,v)) return true;
  if(bk.user||!bookLoaded(bk.i)) return c>=1&&(!bk.nch||c<=bk.nch)&&v>=1;
  return false;
}
function noteShelf(n){
  if(n.b==null) return 'General';
  var b=BK(n.b); if(!b) return 'General';
  if(b.user) return 'Your books';
  return b.apoc?'Apocrypha':(b.i<39?'Old Testament':'New Testament');
}
function vNotes(){
  if(S.editing) return vNoteEdit();
  var all=S.notes.filter(function(n){
    return n.b==null || verseKnown(n.b,n.c,n.v);
  }).sort(function(a,b){return b.ts-a.ts;});
  var f=S.noteFilter||'All';
  if(f==='Unfiled') f='General';          /* the old name for it */
  var list=all.filter(function(n){
    if(f==='All') return true;
    if(['Old Testament','New Testament','Apocrypha','General'].indexOf(f)>-1)
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
  if(all.some(function(n){return noteShelf(n)==='General';})) cats.push('General');
  if(all.some(function(n){return noteShelf(n)==='Your books';})) cats.push('Your books');
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
  return '<div class="ncard" role="button" tabindex="0" data-editnote="'+esc(n.id)+'">'+
    '<div class="ncrow"><span class="ncref">'+
      esc(n.b==null?'General note':vRef(n.b,n.c,n.v))+'</span>'+
      '<span class="ncdate">'+esc(when)+'</span>'+noteShareBtn(n.id)+'</div>'+
    '<div class="nctitle">'+esc(n.title||'Untitled')+'</div>'+
    (q?'<div class="ncverse">'+esc(q)+'</div>':'')+
    (n.body?'<div class="ncbody">'+linkRefs(n.body)+'</div>':'')+
    ((n.tags&&n.tags.length)?'<div class="ntags">'+n.tags.map(function(t){
      return '<button class="ntag" data-notefilter="'+esc(t)+'">'+esc(t)+'</button>';
    }).join('')+'</div>':'')+
    '</div>';
}

/* ---------- sharing one note ----------
   Every note card has its own Share button, and so does a note while it is
   open. What goes out is the note as a person would read it: the title, the
   verse it is on written out in full, what you wrote, and its tags. On the
   phone it is the system share sheet; in a browser without one, the
   clipboard. */
function noteShareBtn(id, inEditor){
  return '<button class="nshare'+(inEditor?' ined':'')+'" data-sharenote="'+esc(id)+'" aria-label="Share this note" title="Share this note">'+
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+POP_ICON.share+'"/></svg>'+(inEditor?'<span>Share</span>':'')+'</button>';
}
function noteForSharing(n){
  var out=[];
  if(n.title) out.push(n.title);
  if(n.b!=null) out.push('\u201c'+vText(n.b,n.c,n.v)+'\u201d\n\u2014 '+vRef(n.b,n.c,n.v)+' (KJV)');
  if(n.body) out.push(n.body);
  if(n.tags&&n.tags.length) out.push(n.tags.map(function(t){ return '#'+t.replace(/\s+/g,''); }).join(' '));
  out.push('Shared from Sixteen Eleven');
  return out.join('\n\n');
}
function shareNote(id){
  /* an open note is saved first, so what is shared is what is on the screen */
  if(S.editing&&S.editing.id===id){ try{ commitNote(S.editing); }catch(e){} }
  var n=S.notes.filter(function(x){ return x.id===id; })[0];
  if(!n) return Promise.resolve(false);
  var text=noteForSharing(n), title=n.title||(n.b!=null?vRef(n.b,n.c,n.v):'A note');
  var copied=function(){
    var done=function(ok){ announce(ok?'Copied the note. Paste it anywhere.':'Could not share the note.'); return ok; };
    if(navigator.clipboard&&navigator.clipboard.writeText)
      return navigator.clipboard.writeText(text).then(function(){ return done(true); }).catch(function(){ return done(legacyCopy(text)); });
    return Promise.resolve(done(legacyCopy(text)));
  };
  if(payNative()){
    try{
      var SH=window.Capacitor.registerPlugin('Share');
      return Promise.resolve(SH.share({title:title, text:text, dialogTitle:'Share this note'}))
        .then(function(){ return true; }).catch(function(e){
          if(/cancel/i.test(String((e&&(e.message||e.errorMessage))||e||''))) return false;
          return copied(); });
    }catch(e){}
  }
  if(navigator.share)
    return navigator.share({title:title, text:text}).then(function(){ return true; })
      .catch(function(e){ return (e&&e.name==='AbortError')?false:copied(); });
  return copied();
}

function openNoteFor(key){
  var np=parseKey(key), nx=noteFor(np);
  S.tagDraft=''; S.linkDraft=''; S.linkMsg='';
  S.editing=nx?{id:nx.id,b:nx.b,c:nx.c,v:nx.v,body:nx.body,title:nx.title||'',
      tags:(nx.tags||[]).slice(),links:(nx.links||[]).map(function(l){return l.slice();}),
      cat:nx.cat||'',ts:nx.ts}
    :{id:null,b:np.b,c:np.c,v:np.v,body:'',title:'',tags:[],links:[]};
  S.editFocusBody=!nx;
  closeSheet(); closePop();
  if(LAYOUT==='split'&&sideDest(otherSide(CUR))==='notes'){
    S.noteReturn=false; S.tab='notes'; S.book=null; S.reading=null; render(); return;
  }
  /* remember where to come back to */
  S.noteReturn=key;
  S.tab='notes'; S.book=null; S.reading=null; render();
}
function closeNoteEditor(){
  var e=S.editing; if(!e) return;
  commitNote(e);
  /* a note emptied of everything is gone, rather than left as a blank card */
  if(e.id&&noteEmpty(e)){ S.notes=S.notes.filter(function(x){return x.id!==e.id;}); saveNotes(); }
  S.editing=null; S.tagDraft=''; S.linkDraft=''; S.linkMsg='';
  var back=S.noteReturn; S.noteReturn=false;
  if(back&&navCanBack()){
    navBack();
    setTimeout(function(){
      var el=document.querySelector('.rd .v[data-vs="'+back+'"]');
      if(el){ bringIntoView(el,'center',false); }
    },60);
    return;
  }
  render();
}
function vNoteEdit(){
  var e=S.editing;
  var d=new Date(e.ts||Date.now()), now=new Date();
  var when=(d.toDateString()===now.toDateString())?'Today':
    d.toLocaleDateString(undefined,{month:'short',day:'numeric'});
  var h='<div class="nedbar">'+
    '<button class="backlink" data-a="savenote">\u2190 '+(S.noteReturn?'Back':'Notes')+'</button>'+
    '<span class="nsaved" id="nsaved" aria-live="polite"></span>'+
    (e.id?noteShareBtn(e.id,true):'')+
    '<button class="neddone" data-a="savenote">Done</button></div>';
  h+='<div class="ncrow ned"><span class="ncref">'+
     esc(e.b==null?'General note':vRef(e.b,e.c,e.v))+'</span>'+
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
    '<span class="tagadd"><input id="ntagadd" placeholder="Add a tag" maxlength="28" '+
    'enterkeyhint="done" autocapitalize="none" autocomplete="off" value="'+
    esc(S.tagDraft||'')+'">'+
    '<button class="tagaddbtn" data-a="addtag" aria-label="Add this tag">+</button></span></div>';

  /* the verses the note mentions, found as it is written */
  h+='<div class="nedlab">Verses in this note</div><div class="lklist" id="nrefs">'+noteRefsHTML(e)+'</div>';
  if(e.id) h+='<button class="neddel" data-delnote="'+esc(e.id)+'">Delete this note</button>';
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
    if(!verseKnown(p.b,p.c,p.v)) continue;   /* stale reference: skip, do not show a blank */
    var t=vText(p.b,p.c,p.v)||'';
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
    if(!verseKnown(p.b,p.c,p.v)) continue;   // stale reference: skip rather than show a blank card
    var t=vText(p.b,p.c,p.v)||'';
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
      return '<button class="bmrow" data-goverse="'+esc(x.key)+'">'+
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
    return '<button class="hlrow" data-goverse="'+esc(x.key)+'">'+
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
    sub:S.sheets.length
      ? S.sheets.length+(S.sheets.length===1?' sheet':' sheets')+' \u00b7 tap a reference to open it'
      : 'Your own studies',
    action:shAction('newsheet',I.plus,'New study sheet',true),
    chips:S.sheets.map(function(x){
      return '<button class="chip" data-sheet="'+esc(x.id)+'">'+esc(x.name)+'</button>';
    }).join('')
  });
  if(!S.sheets.length)
    return h+'<div class="empty">No study sheets yet. Start one with a question, '+
      'then gather the scriptures that answer it.</div>'+
      '<button class="btn" data-a="newsheet">New study sheet</button>'+sheetImportHTML();
  h+=S.sheets.map(function(sh){
    var n=sh.items.length;
    return '<button class="item" data-sheet="'+esc(sh.id)+'"><span class="ic">'+svg(I.grid)+
      '</span><span class="spacer"><span class="tt">'+esc(sh.name)+'</span>'+
      '<span class="dd">'+n+' entr'+(n===1?'y':'ies')+'</span></span>'+
      '<span class="go">'+svg(I.next)+'</span></button>';
  }).join('');
  h+='<div style="height:6px"></div><button class="btn sec" data-a="newsheet">New study sheet</button>';
  h+=sheetImportHTML();
  return h;
}
function sheetImportHTML(){
  return '<div style="height:8px"></div><button class="btn gh" data-a="sheetimport">Add a shared sheet</button>'+
    '<input type="file" id="sheetfile" accept=".json,application/json" style="display:none">'+
    (S.sheetImportMsg?'<p class="vnote" role="status" style="margin:8px 2px 0">'+esc(S.sheetImportMsg)+'</p>':'');
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
    return '<div class="sq"><div class="sqh"><span class="sqn">'+esc(it.n||'')+'</span>'+
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
  h+='<div class="lab sgroup" style="margin-top:22px">Share this sheet</div><div class="row2">'+
     '<button class="btn sec" data-a="sheetsharetext">As text</button>'+
     '<button class="btn sec" data-a="sheetsharefile">As a Sixteen Eleven file</button></div>'+
     '<p class="vnote" style="margin:8px 2px 0">Text reads anywhere, every verse written out. The file adds the whole sheet '+
     'to another reader\u2019s Study.</p>'+
     '<div class="lab sgroup" style="margin-top:18px">Save as a file</div><div class="row3">'+
     '<button class="btn sec" data-a="sheetsave" data-kind="pdf">PDF</button>'+
     '<button class="btn sec" data-a="sheetsave" data-kind="md">Markdown</button>'+
     '<button class="btn sec" data-a="sheetsave" data-kind="txt">Text</button></div>'+
     '<p class="vnote" style="margin:8px 2px 0">Every verse written out in full: a PDF to print or keep, Markdown for notes apps, '+
     'plain text for anywhere.</p>';
  h+='<div style="height:14px"></div><button class="btn gh" data-a="delsheet">Delete this sheet</button>';
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
        t.onerror=function(){ rej(t.error||new Error('The save failed.')); };
        /* a quota error at commit time fires only abort: without this an
           import or a restore point would wait forever */
        t.onabort=function(){ rej(t.error||new Error('There is not enough space on this phone.')); };
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

/* ================= YOUR OWN BOOKS: A DOCUMENT READER =================
   A book you add is kept exactly as it came, and opens in a reader of its
   own, apart from scripture. It used to be cut into numbered chapters and
   verses and opened in the Bible's reader, which suited no book.

     PDF   the real pages, drawn by pdf.js (shipped with the app) as they come
           into view and let go again far off, so a long book does not fill
           the phone's memory. Zoom with the buttons. Scans work too, since
           the page is shown as printed.
     EPUB  the book's own chapters and formatting, one chapter at a time,
           with its Contents. The chapter's markup is rebuilt from a short
           list of allowed elements, so nothing in a file can run code, load
           anything from the internet or restyle the app; its pictures come
           from inside the book.
     TXT   the text as written, in the reader's type.

   Each book opens where you left it. Books added before this (stored as
   chapters of paragraphs, without the file) still open, as text. */
var DOC_FORMATS={pdf:'PDF', epub:'EPUB', text:'Text'};
var DOC={id:null, rec:null, pdf:null, epub:null, err:'', urls:[], zoom:1, cur:1, shown:0, obs:null, more:null, pos:{}, t:0};
function docFormatOf(name){
  var n=String(name||'').toLowerCase();
  return /\.pdf$/.test(n)?'pdf':/\.epub$/.test(n)?'epub':/\.txt$/.test(n)?'text':null;
}
function pdfLib(){
  var lib=(typeof window!=='undefined'&&window.pdfjsLib)?Promise.resolve():loadScript(PDFJS_LOCAL);
  return lib.then(function(){
    if(!window.pdfjsLib) throw new Error('The PDF reader could not load.');
    window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS_WORKER;
    return window.pdfjsLib;
  });
}
/* the parts of an EPUB: where its chapters are, in reading order, with the
   names its own table of contents gives them */
function epubOpen(buf){
  var zip=Unzip.unzip(buf), dec=new TextDecoder('utf-8');
  function read(p){ return zip[p]?dec.decode(zip[p]):null; }
  var container=read('META-INF/container.xml');
  if(!container) throw new Error('That EPUB could not be read (it has no container.xml).');
  var opfPath=(container.match(/full-path="([^"]+)"/)||[])[1], opf=opfPath&&read(opfPath);
  if(!opf) throw new Error('That EPUB could not be read (its package file is missing).');
  var base=opfPath.indexOf('/')>-1?opfPath.replace(/\/[^/]*$/,'/'):'';
  function attrs(tag){ var o={}, re=/([\w:-]+)\s*=\s*"([^"]*)"/g, m; while((m=re.exec(tag))) o[m[1]]=m[2]; return o; }
  var manifest={}, navHref=null, ncxHref=null;
  (opf.match(/<item\b[^>]*>/g)||[]).forEach(function(t){
    var a=attrs(t); if(!a.id) return;
    manifest[a.id]={href:a.href||'', type:a['media-type']||''};
    if(/(^|\s)nav(\s|$)/.test(a.properties||'')) navHref=a.href;
    if(a['media-type']==='application/x-dtbncx+xml') ncxHref=a.href;
  });
  var titles={};
  function plain(s){ return decodeEntities(stripTags(s||'')).replace(/\s+/g,' ').trim(); }
  var nav=navHref&&read(docResolve(base, navHref));
  if(nav) (nav.match(/<a\b[^>]*href="[^"]+"[^>]*>[\s\S]*?<\/a>/g)||[]).forEach(function(a){
    var h=(a.match(/href="([^"]+)"/)||[])[1], t=plain(a.replace(/^<a\b[^>]*>|<\/a>$/g,''));
    var p=docResolve(docDir(docResolve(base,navHref)), h.split('#')[0]);
    if(t&&!titles[p]) titles[p]=t.slice(0,90);
  });
  var ncx=!nav&&ncxHref&&read(docResolve(base, ncxHref));
  if(ncx) (ncx.match(/<navPoint\b[\s\S]*?<content\b[^>]*>/g)||[]).forEach(function(np){
    var t=plain((np.match(/<text>([\s\S]*?)<\/text>/)||[])[1]), h=(np.match(/src="([^"]+)"/)||[])[1];
    if(!h) return; var p=docResolve(docDir(docResolve(base,ncxHref)), h.split('#')[0]);
    if(t&&!titles[p]) titles[p]=t.slice(0,90);
  });
  var spine=[];
  (opf.match(/<itemref\b[^>]*>/g)||[]).forEach(function(t){
    var a=attrs(t), it=manifest[a.idref]; if(!it) return;
    if(it.type&&it.type.indexOf('html')<0&&it.type.indexOf('xml')<0) return;
    var p=docResolve(base, it.href); if(!zip[p]) return;
    spine.push({path:p, title:titles[p]||''});
  });
  if(!spine.length) throw new Error('No readable chapters were found in that EPUB.');
  var title=plain((opf.match(/<dc:title[^>]*>([\s\S]*?)<\/dc:title>/)||[])[1]);
  var author=plain((opf.match(/<dc:creator[^>]*>([\s\S]*?)<\/dc:creator>/)||[])[1]);
  return {zip:zip, spine:spine, title:title, author:author};
}
function docDir(p){ return p.indexOf('/')>-1?p.replace(/\/[^/]*$/,'/'):''; }
function docResolve(dir, href){
  var p=(dir||'')+decodeURIComponent(String(href||'').split('#')[0]), out=[];
  p.split('/').forEach(function(s){ if(s==='..') out.pop(); else if(s&&s!=='.') out.push(s); });
  return out.join('/');
}
/* the chapter's markup, rebuilt from allowed elements only */
var DOC_TAGS={p:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,em:1,i:1,b:1,strong:1,u:1,small:1,sup:1,sub:1,
  blockquote:1,ul:1,ol:1,li:1,br:1,hr:1,span:1,div:1,section:1,article:1,aside:1,header:1,footer:1,
  figure:1,figcaption:1,table:1,thead:1,tbody:1,tfoot:1,tr:1,td:1,th:1,cite:1,q:1,abbr:1,pre:1,code:1,
  dl:1,dt:1,dd:1,center:1};
var DOC_DROP={script:1,style:1,head:1,title:1,link:1,meta:1,iframe:1,object:1,embed:1,form:1,input:1,
  button:1,select:1,textarea:1,audio:1,video:1,noscript:1,template:1};
var DOC_MIME={jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',gif:'image/gif',webp:'image/webp',svg:'image/svg+xml'};
function epubChapter(e, k){
  var it=e.spine[k], dec=new TextDecoder('utf-8'), src=dec.decode(e.zip[it.path]), dir=docDir(it.path), doc=null;
  try{ doc=new DOMParser().parseFromString(src,'application/xhtml+xml');
       if(doc.getElementsByTagName('parsererror').length) doc=null; }catch(x){ doc=null; }
  if(!doc) doc=new DOMParser().parseFromString(src,'text/html');
  function img(href){
    var p=docResolve(dir, href), bytes=e.zip[p]; if(!bytes) return '';
    var ext=(p.split('.').pop()||'').toLowerCase(); if(!DOC_MIME[ext]) return '';
    var u=URL.createObjectURL(new Blob([bytes],{type:DOC_MIME[ext]})); DOC.urls.push(u); return u;
  }
  function walk(n){
    var out='';
    for(var c=n.firstChild;c;c=c.nextSibling){
      if(c.nodeType===3){ out+=esc(c.nodeValue); continue; }
      if(c.nodeType!==1) continue;
      var tag=String(c.localName||c.nodeName||'').toLowerCase();
      if(DOC_DROP[tag]) continue;
      if(tag==='img'||tag==='image'){
        var h=c.getAttribute('src')||c.getAttribute('href')||c.getAttribute('xlink:href')||
              (c.getAttributeNS?c.getAttributeNS('http://www.w3.org/1999/xlink','href'):'')||'';
        var u=h&&!/^[a-z]+:/i.test(h)?img(h):'';
        if(u) out+='<img src="'+u+'" alt="'+esc(c.getAttribute('alt')||'')+'">';
        continue;
      }
      if(tag==='svg'){ out+=walk(c); continue; }           /* a cover inside an svg: just its image */
      if(tag==='a'){ out+='<span>'+walk(c)+'</span>'; continue; }
      if(!DOC_TAGS[tag]){ out+=walk(c); continue; }
      var at='';
      if((tag==='td'||tag==='th')){
        ['colspan','rowspan'].forEach(function(a){ var v=parseInt(c.getAttribute(a),10); if(v>1&&v<50) at+=' '+a+'="'+v+'"'; }); }
      if(tag==='ol'){ var st=parseInt(c.getAttribute('start'),10); if(st>1) at+=' start="'+st+'"'; }
      var map={section:'div',article:'div',aside:'div',header:'div',footer:'div',center:'div'};
      var t2=map[tag]||tag;
      out+=(tag==='br'||tag==='hr')?'<'+t2+'>':'<'+t2+at+'>'+walk(c)+'</'+t2+'>';
    }
    return out;
  }
  var body=doc.body||doc.getElementsByTagName('body')[0]||doc.documentElement;
  return walk(body);
}

/* ---------- adding a book ---------- */
function docImport(file){
  var fmt=docFormatOf(file.name);
  if(!fmt) return Promise.reject(new Error('Sixteen Eleven opens PDF, EPUB and plain text (.txt) files.'));
  var rec={id:'b'+Date.now()+Math.floor(Math.random()*999), title:file.name.replace(/\.[^.]+$/,'').slice(0,120),
           author:'', format:fmt, added:Date.now(), size:file.size||0, v:2};
  if(fmt==='text') return fileText(file).then(function(t){
    if(!String(t).trim()) throw new Error('That file is empty.');
    rec.text=t; rec.size=t.length; return rec; });
  return fileBytes(file).then(function(buf){
    rec.file=buf; rec.size=buf.byteLength;
    if(fmt==='epub'){
      var e=epubOpen(buf);
      if(e.title) rec.title=e.title.slice(0,120);
      rec.author=(e.author||'').slice(0,120); rec.parts=e.spine.length;
      return rec;
    }
    return pdfLib().then(function(lib){ return lib.getDocument({data:new Uint8Array(buf.slice(0))}).promise; })
      .then(function(pdf){
        rec.pages=pdf.numPages;
        return pdf.getMetadata().then(function(md){
          var inf=(md&&md.info)||{};
          if(inf.Title&&String(inf.Title).trim().length>2&&!/^untitled|\.(docx?|pdf)$/i.test(inf.Title)) rec.title=String(inf.Title).trim().slice(0,120);
          if(inf.Author) rec.author=String(inf.Author).trim().slice(0,120);
        }).catch(function(){}).then(function(){ try{ pdf.destroy(); }catch(x){} return rec; });
      }, function(){ throw new Error('That PDF could not be opened. It may be damaged or password-protected.'); });
  });
}
function doImport(file){
  if(!hasStudy()&&S.shelf.length>=FREE_BOOKS){ openPaywall('books'); return; }
  S.importing={title:'Adding '+file.name, msg:'Reading the file…'};
  render();
  docImport(file).then(function(rec){
    rec.slot=bookSlots();
    return Shelf.put(rec).then(loadShelf).then(function(){ S.importing=null; render(); });
  }).catch(function(e){
    S.importing={title:'Could not add that book', msg:(e&&e.message)||'That file could not be read.', error:1};
    render();
  });
}

/* ---------- the shelf ---------- */
function ubMeta(rec){
  var legacy=!rec.file&&rec.text==null&&Array.isArray(rec.chapters);
  return {id:rec.id, title:rec.title, author:rec.author||'', format:legacy?'text':rec.format, legacy:legacy,
          added:rec.added, slot:rec.slot, pages:rec.pages||0, parts:rec.parts||0,
          size:rec.size||(legacy?rec.chapters.reduce(function(a,c){ return a+c.reduce(function(x,p){ return x+p.length; },0); },0):0)};
}
function registerUserBooks(){
  /* your books are no longer chapters of the Bible's reader */
  BOOKS=BOOKS.filter(function(b){ return !b.user; });
  bookSlots();
  reindex();
}
function docLine(m){
  return (m.author?m.author+' · ':'')+DOC_FORMATS[m.format]+
    (m.format==='pdf'&&m.pages?' · '+m.pages+' page'+(m.pages===1?'':'s'):
     m.format==='epub'&&m.parts?' · '+m.parts+' part'+(m.parts===1?'':'s'):'')+
    ' · '+fmtSize(m.size);
}
function docCover(m){
  var tint={pdf:['#5B2B2B','#2A1414'], epub:['#22324A','#0B1220'], text:['#3A3427','#17140E']}[m.format]||['#333','#111'];
  return '<div class="shelfbk"><button class="cover docbook doc-'+m.format+'" data-doc="'+esc(m.id)+'" '+
    'style="--a:'+tint[0]+';--b:'+tint[1]+'" aria-label="'+esc(m.title)+', '+DOC_FORMATS[m.format]+'">'+
    '<span class="docfmt">'+DOC_FORMATS[m.format]+'</span><span class="ctool"></span>'+
    '<span class="cbody"><span class="ct">'+esc(m.title)+'</span></span></button>'+
    '<span class="cn">'+esc(m.format==='pdf'&&m.pages?m.pages+' pages':(m.author||DOC_FORMATS[m.format]))+'</span></div>';
}

/* ---------- opening one ---------- */
function docPositions(){ return Store.get('strata:docpos').then(function(p){ DOC.pos=(p&&typeof p==='object')?p:{}; }); }
function docSavePos(p){
  if(!DOC.id) return;
  DOC.pos[DOC.id]=p;
  clearTimeout(DOC.t); DOC.t=setTimeout(function(){ Store.set('strata:docpos',DOC.pos); },700);
}
function openDoc(id, from){
  docClose(true);
  S.doc=id; S.docFrom=from||(S.mode==='mybooks'?'mybooks':'library'); S.docToc=false;
  DOC.id=id; DOC.rec=null; DOC.err=''; DOC.zoom=1; DOC.cur=1; DOC.restore=null; DOC.placed=0; DOC.shown=0; DOC.ratio=0;
  render(); scrollToTop(true);
  Promise.all([Shelf.get(id), docPositions()]).then(function(a){
    var rec=a[0]; if(!rec) throw new Error('That book could not be read back from this phone.');
    if(S.doc!==id) return;
    var pos=DOC.pos[id]||{};
    if(rec.file&&rec.format==='pdf')
      return pdfLib().then(function(lib){ return lib.getDocument({data:new Uint8Array(rec.file.slice(0))}).promise; })
        .then(function(pdf){ if(S.doc!==id){ try{ pdf.destroy(); }catch(x){} return; }
          DOC.pdf=pdf; DOC.rec=rec; DOC.cur=Math.min(Math.max(1,pos.p||1),pdf.numPages); DOC.zoom=pos.z||1; render(); });
    if(rec.file&&rec.format==='epub'){
      DOC.epub=epubOpen(rec.file); DOC.rec=rec; DOC.cur=Math.min(Math.max(0,pos.c||0),DOC.epub.spine.length-1); render(); return; }
    DOC.rec=rec;
    DOC.paras=rec.text!=null?paragraphs(rec.text):[].concat.apply([],(rec.chapters||[]).map(function(ch,k){
      var t=rec.titles&&rec.titles[k]; return (t?['§ '+t]:[]).concat(ch); }));
    DOC.cur=Math.min(Math.max(0,pos.i||0),Math.max(0,DOC.paras.length-1));
    render();
  }).catch(function(e){ if(S.doc!==id) return; DOC.err=(e&&e.message)||'That book could not be opened.'; render(); });
}
function docClose(keep){
  if(DOC.obs){ try{ DOC.obs.disconnect(); }catch(x){} DOC.obs=null; }
  if(DOC.more){ try{ DOC.more.disconnect(); }catch(x){} DOC.more=null; }
  if(DOC.pdf){ try{ DOC.pdf.destroy(); }catch(x){} DOC.pdf=null; }
  DOC.urls.forEach(function(u){ try{ URL.revokeObjectURL(u); }catch(x){} }); DOC.urls=[];
  DOC.epub=null; DOC.rec=null; DOC.paras=null; DOC.id=null;
  if(!keep){ S.doc=null; render(); }
}
function vDoc(){
  var m=S.shelf.filter(function(x){ return x.id===S.doc; })[0];
  if(!m){ S.doc=null; return ''; }
  var h='<div class="docv doc-'+m.format+'"><button class="back" style="color:var(--blue)" data-a="docclose">&larr; '+
    (S.docFrom==='mybooks'?'Your own reading':'Library')+'</button>'+
    '<div class="dochead"><h2>'+esc(m.title)+'</h2><div class="docsub">'+esc(docLine(m))+'</div></div>';
  if(DOC.err) return h+'<div class="empty">'+esc(DOC.err)+'</div></div>';
  if(!DOC.rec) return h+'<div class="empty">Opening…</div></div>';
  if(m.format==='pdf'&&DOC.pdf){
    var n=DOC.pdf.numPages;
    h+='<div class="doctools" role="toolbar" aria-label="Pages">'+
      '<span class="docpg" id="docpg" aria-live="polite">Page '+DOC.cur+' of '+n+'</span>'+
      '<button data-a="doczoomout" aria-label="Smaller"'+(DOC.zoom<=1?' disabled':'')+'>−</button>'+
      '<button data-a="doczoomfit" aria-label="Fit the width"'+(DOC.zoom===1?' disabled':'')+'>Fit</button>'+
      '<button data-a="doczoomin" aria-label="Larger"'+(DOC.zoom>=3?' disabled':'')+'>+</button></div>'+
      '<div class="docpages" id="docpages"></div>';
    return h+'</div>';
  }
  if(m.format==='epub'&&DOC.epub){
    var sp=DOC.epub.spine, k=DOC.cur;
    h+='<div class="doctools"><button class="docbtn" data-a="doctoc" aria-expanded="'+!!S.docToc+'">Contents</button>'+
       '<span class="docpg">'+(k+1)+' of '+sp.length+'</span></div>';
    if(S.docToc){
      h+='<ol class="doctoc">'+sp.map(function(it,i){
        return '<li><button data-docch="'+i+'"'+(i===k?' aria-current="true" class="on"':'')+'>'+esc(it.title||('Part '+(i+1)))+'</button></li>'; }).join('')+'</ol>';
    }
    var html='';
    try{ html=epubChapter(DOC.epub, k); }catch(e){ html='<p class="empty">This part could not be shown.</p>'; }
    h+='<div class="docbody" id="docbody">'+html+'</div>'+
       '<div class="docnav">'+(k>0?'<button class="btn sec" data-a="docprev">← '+esc(sp[k-1].title||'Previous')+'</button>':'<span></span>')+
       (k<sp.length-1?'<button class="btn" data-a="docnext">'+esc(sp[k+1].title||'Next')+' →</button>':'')+'</div>';
    return h+'</div>';
  }
  /* text: shown a piece at a time, more as you near the end */
  var ps=DOC.paras||[];
  DOC.shown=Math.min(ps.length, Math.max(DOC.shown||0, DOC.cur+300));
  h+='<div class="docbody doctext" id="doctext">'+docParas(0, DOC.shown)+'</div>'+
     (DOC.shown<ps.length?'<div class="docmore" id="docmore">Loading…</div>':'');
  return h+'</div>';
}
function docParas(a, b){
  var ps=DOC.paras||[], h='';
  for(var i=a;i<b&&i<ps.length;i++)
    h+=/^§ /.test(ps[i])?'<h3 data-i="'+i+'">'+esc(ps[i].slice(2))+'</h3>':'<p data-i="'+i+'">'+esc(ps[i])+'</p>';
  return h;
}
/* after each render: draw the pages, return to the place, keep track of it */
function docAfterRender(){
  if(!S.doc||!DOC.rec) return;
  if(DOC.pdf) return docMountPdf();
  var top=110;
  function firstVisible(sel){
    var els=document.querySelectorAll(sel), lo=0, hi=els.length-1, best=0;
    while(lo<=hi){ var mid=(lo+hi)>>1, r=els[mid].getBoundingClientRect(); if(r.bottom<top){ lo=mid+1; } else { best=mid; hi=mid-1; } }
    return els[best]||null;
  }
  if(DOC.epub){
    var body=document.getElementById('docbody'); if(!body) return;
    var pos=DOC.pos[DOC.id]||{};
    if(DOC.restore!==DOC.cur){ DOC.restore=DOC.cur;
      var blocks=body.children, bi=(pos.c===DOC.cur&&pos.b)||0;
      if(bi&&blocks[bi]) blocks[bi].scrollIntoView({block:'start'}); else scrollToTop(true); }
    docWatchScroll(function(){
      var blocks=body.children, b=0;
      for(var i=0;i<blocks.length;i++){ if(blocks[i].getBoundingClientRect().bottom>=top){ b=i; break; } }
      docSavePos({c:DOC.cur, b:b});
    });
    return;
  }
  var box=document.getElementById('doctext'); if(!box) return;
  if(!DOC.placed){ DOC.placed=1; var el=box.querySelector('[data-i="'+DOC.cur+'"]'); if(el&&DOC.cur) el.scrollIntoView({block:'start'}); }
  var more=document.getElementById('docmore');
  if(more&&typeof IntersectionObserver!=='undefined'){
    if(DOC.more) DOC.more.disconnect();
    DOC.more=new IntersectionObserver(function(es){
      if(!es.some(function(x){ return x.isIntersecting; })) return;
      var ps=DOC.paras||[], a=DOC.shown, b=Math.min(ps.length, a+300);
      box.insertAdjacentHTML('beforeend', docParas(a,b)); DOC.shown=b;
      if(b>=ps.length){ DOC.more.disconnect(); more.parentNode&&more.parentNode.removeChild(more); }
    },{rootMargin:'800px 0px'});
    DOC.more.observe(more);
  }
  docWatchScroll(function(){
    var el=firstVisible('#doctext [data-i]'); if(el) docSavePos({i:+el.getAttribute('data-i')});
  });
}
function docWatchScroll(fn){
  var t=0;
  if(DOC.unscroll) DOC.unscroll();
  function on(){ if(t) return; t=setTimeout(function(){ t=0; fn(); },250); }
  var targets=[window].concat([].slice.call(document.querySelectorAll('.pv')));
  targets.forEach(function(x){ x.addEventListener('scroll',on,{passive:true}); });
  DOC.unscroll=function(){ targets.forEach(function(x){ x.removeEventListener('scroll',on); }); DOC.unscroll=null; };
}
function docMountPdf(){
  var box=document.getElementById('docpages'); if(!box||!DOC.pdf) return;
  var pdf=DOC.pdf, n=pdf.numPages, w=Math.max(200, Math.floor(box.clientWidth*DOC.zoom)), dpr=Math.min(window.devicePixelRatio||1, 3);
  if(DOC.obs){ DOC.obs.disconnect(); }
  var html='';
  for(var i=1;i<=n;i++) html+='<div class="docpage" data-p="'+i+'" style="width:'+w+'px;height:'+Math.round(w*(DOC.ratio||1.294))+'px">'+
    '<span class="docpn">'+i+'</span></div>';
  box.innerHTML=html;
  var seen={};
  function draw(el){
    var p=+el.getAttribute('data-p'); if(el.__drawn||el.__busy) return; el.__busy=1;
    pdf.getPage(p).then(function(pg){
      var v1=pg.getViewport({scale:1}), r=v1.height/v1.width; if(p===1&&!DOC.ratio){ DOC.ratio=r; }
      el.style.height=Math.round(w*r)+'px';
      /* sharp on the phone's screen, but never a canvas too big for it */
      var sc=Math.min(w*dpr/v1.width, 4096/v1.width, 4096/v1.height), vp=pg.getViewport({scale:sc});
      var cv=document.createElement('canvas'); cv.width=Math.floor(vp.width); cv.height=Math.floor(vp.height);
      cv.setAttribute('aria-label','Page '+p);
      return pg.render({canvasContext:cv.getContext('2d'), viewport:vp}).promise.then(function(){
        el.__busy=0; if(!el.isConnected) return; el.__drawn=1; el.appendChild(cv); });
    }).catch(function(){ el.__busy=0; });
  }
  function drop(el){ var c=el.querySelector('canvas'); if(c){ c.width=0; c.height=0; el.removeChild(c); } el.__drawn=0; }
  if(typeof IntersectionObserver==='undefined'){ [].slice.call(box.children,0,6).forEach(draw); return; }
  DOC.obs=new IntersectionObserver(function(es){
    es.forEach(function(x){ if(x.isIntersecting){ seen[x.target.getAttribute('data-p')]=1; draw(x.target); } else { delete seen[x.target.getAttribute('data-p')]; drop(x.target); } });
  },{rootMargin:'1200px 0px'});
  [].forEach.call(box.children,function(el){ DOC.obs.observe(el); });
  var start=box.querySelector('[data-p="'+DOC.cur+'"]');
  if(start&&DOC.cur>1) start.scrollIntoView({block:'start'});
  docWatchScroll(function(){
    var els=box.children, top=110, lo=0, hi=els.length-1, best=0;
    while(lo<=hi){ var mid=(lo+hi)>>1, r=els[mid].getBoundingClientRect(); if(r.bottom<top+40){ lo=mid+1; } else { best=mid; hi=mid-1; } }
    var p=best+1; if(p!==DOC.cur){ DOC.cur=p; var lab=document.getElementById('docpg'); if(lab) lab.textContent='Page '+p+' of '+n; }
    docSavePos({p:p, z:DOC.zoom});
  });
}
function docZoom(z){
  DOC.zoom=Math.max(1,Math.min(3,z)); docSavePos({p:DOC.cur, z:DOC.zoom});
  S.keepScroll=true; render();
}

/* ---------- shelf state ---------- */
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

/* ---------- backup and restore ----------
   Highlights, notes and study sheets live only in this browser. Clearing site
   data, switching devices, or the browser reclaiming storage would take all of
   it with no way back, so it has to be exportable. */
function exportData(){
  var payload={
    format:BACKUP_FORMAT, version:1, exported:new Date().toISOString(),
    highlights:S.hl, notes:S.notes, sheets:S.sheets, read:S.read,
    userRefs:S.userRefs, marks:S.marks, goal:GOAL,
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
  var inHl=cleanHighlights(data.highlights);
  for(var k in inHl){ if(!S.hl[k]){ S.hl[k]=inHl[k]; added.hl++; } }
  /* bookmarks and their folders: before this they were never in a backup */
  var inMk=cleanMarks(data.marks);
  added.marks=0;
  for(var mk in inMk){ if(!S.marks[mk]){ S.marks[mk]=inMk[mk]; added.marks++; } }
  if(added.marks) Store.set('strata:bookmarks',S.marks);
  if(Array.isArray(data.notes)){
    var have={}; S.notes.forEach(function(n){ have[n.id]=1; });
    data.notes.forEach(function(n){
      var mn=migrateNote(n);   /* an old backup can arrive at any time */
      if(mn&&!have[mn.id]){ S.notes.push(mn); added.notes++; }
    });
  }
  if(Array.isArray(data.sheets)){
    var hs={}; S.sheets.forEach(function(x){ hs[x.id]=x; });
    cleanSheets(data.sheets).forEach(function(sh){
      if(!hs[sh.id]){ S.sheets.push(sh); added.sheets++; }
      else {
        var mine=hs[sh.id], ids={};
        if(!Array.isArray(mine.items)) mine.items=[];
        mine.items.forEach(function(it){ ids[it.id]=1; });
        (sh.items||[]).forEach(function(it){
          if(it&&it.id&&!ids[it.id]){ mine.items.push(it); added.sheets++; }
        });
      }
    });
  }
  if(data.userRefs&&typeof data.userRefs==='object'){
    for(var uk in data.userRefs){
      if(!validKey(uk)||!Array.isArray(data.userRefs[uk])) continue;
      var incoming=data.userRefs[uk].filter(function(x){ return typeof x==='string'; }).map(function(x){ return x.slice(0,80); });
      var have=S.userRefs[uk]||(S.userRefs[uk]=[]);
      incoming.forEach(function(lbl){
        if(have.indexOf(lbl)===-1){ have.push(lbl); added.refs=(added.refs||0)+1; }
      });
    }
    saveUserRefs();
  }
  if(data.read&&typeof data.read==='object'){
    for(var rk in data.read) if(/^\d{1,4}:\d{1,3}$/.test(rk)&&typeof data.read[rk]==='number'&&!S.read[rk]){ S.read[rk]=data.read[rk]; added.read=(added.read||0)+1; }
    saveRead();
  }
  if(typeof data.textSize==='number'&&data.textSize>=0&&data.textSize<=5) S.textSize=Math.round(data.textSize);
  /* the goal and plans come back only to a phone that has none of its own */
  if(data.goal&&typeof data.goal==='object'&&!GOAL.perDay&&!GOAL.active&&!Object.keys(GOAL.plans).length){
    try{ GOAL.log={}; goalLoad(data.goal); goalSave(); goalRemindSoon(); added.goal=1; }catch(e){} }
  saveHl(); saveNotes(); saveSheets();
  return added;
}

function importBackup(file){
  /* fileText, not file.text(): Safari before 14 has no Blob.text() */
  return fileText(file).then(function(t){
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
  if(n.title) return n.title;
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
  return {ok:true,msg:'Added to \u201c'+noteTitle(n)+'\u201d.'};
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
  else if(S.lastRead&&BK(S.lastRead.b)&&!BK(S.lastRead.b).user){
    b=BK(S.lastRead.b); ch=S.lastRead.c||1; resumed=true;
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
    '</div>'+todayStrip();
}
/* under Continue reading: today's goal, and today's portion of the plan */
function todayStrip(){
  if(!GOAL.perDay) return '';
  var n=goalToday(), per=GOAL.perDay, met=n>=per, h='';
  if(GOAL.active){
    var t=planToday(GOAL.active), p=planDef(GOAL.active);
    if(!t.left&&!t.read.length) return '';
    var go=t.todo[0]||null, q=go?go.split(':'):null;
    h='<button class="todaystrip'+(met?' met':'')+'" '+(q?'data-book="'+q[0]+'" data-goch="'+q[1]+'"':'data-a="opentracker"')+'>'+
      '<span class="tsk">Today \u00b7 '+esc(p.name)+'</span>'+
      '<span class="tst">'+esc(t.todo.length?portionLabel(t.todo):'Today\u2019s reading is done')+'</span>'+
      '<span class="tsn">'+(met?'\u2713':Math.min(n,per)+' of '+per)+'</span></button>';
  } else {
    h='<button class="todaystrip'+(met?' met':'')+'" data-a="opentracker">'+
      '<span class="tsk">Today\u2019s goal</span>'+
      '<span class="tst">'+(met?'Done for today':n+' of '+per+' chapter'+(per===1?'':'s'))+'</span>'+
      '<span class="tsn">'+(met?'\u2713':n+'/'+per)+'</span></button>';
  }
  return h;
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
  /* Every frame by a fraction of a pixel. Whole pixels twenty times a second
     read as a judder, the slow speeds most of all. The position is kept as a
     fraction because scrollTop rounds; if you move the page yourself it
     carries on from where you left it. */
  if(window.requestAnimationFrame){
    var job={raf:true, on:true, id:0}, prev=null, at=el.scrollTop;
    var frame=function(t){
      if(!job.on) return;
      if(prev===null){ prev=t; at=el.scrollTop; job.id=requestAnimationFrame(frame); return; }
      var dt=Math.min(0.1,(t-prev)/1000); prev=t;
      try{
        /* whole pixels go to the scroll position; the fraction left over is
           a transform on the text, which the phone draws between pixels, so
           even the slowest speed glides instead of stepping */
        var base=Math.floor(at);
        if(Math.abs(el.scrollTop-base)>2){ at=el.scrollTop; base=at; }
        var max=el.scrollHeight-el.clientHeight;
        var rd=el.querySelector('.rd');
        if(at>=max-0.5){
          /* at the end of the chapter, roll into the next one */
          if(rd) rd.style.transform='';
          if(!turnPage(1)){ stopAutoScroll(); return; }
          el.scrollTop=0; at=0;
        } else {
          at=Math.min(max, at+px*dt); base=Math.floor(at);
          if(el.scrollTop!==base) el.scrollTop=base;
          if(rd){ rd.style.willChange='transform'; rd.style.transform='translate3d(0,'+(-(at-base)).toFixed(3)+'px,0)'; }
        }
      }catch(e){ stopAutoScroll(); return; }
      job.id=requestAnimationFrame(frame);
    };
    job.id=requestAnimationFrame(frame);
    S.scrollTimer=job;
    return;
  }
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
  var j=S.scrollTimer;
  if(!j) return;
  if(j.raf){ j.on=false; try{ cancelAnimationFrame(j.id); }catch(e){} }
  else clearInterval(j);
  S.scrollTimer=null;
  try{ [].forEach.call(document.querySelectorAll('.rd'), function(r){ r.style.transform=''; r.style.willChange=''; }); }catch(e){}
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

/* Hand the picture to the phone. It is drawn and turned into a file at once,
   inside the tap, because a browser only lets a page open the share sheet
   while it is still answering the tap; doing it in toBlob's callback came
   too late, and nothing happened. The store apps hand the file to the
   phone's own share sheet. If either way fails, the picture opens on screen
   with Share and Save under it, and pressing on it saves it too. */
function dataUrlBlob(u){
  var parts=String(u).split(','), bin=atob(parts[1]||''), n=bin.length, a=new Uint8Array(n);
  for(var i=0;i<n;i++) a[i]=bin.charCodeAt(i);
  return new Blob([a],{type:(/data:([^;]+)/.exec(parts[0])||[0,'image/png'])[1]});
}
var CARD_IMG=null, CARD_ERR='';
function makeVerseCard(b, c, v){
  var ref=vRef(b,c,v), text=vText(b,c,v), cv=null;
  try{ cv=drawVerseCard(ref, text, 'King James Version (KJV)'); }catch(e){ cv=null; }
  if(!cv||!cv.toDataURL) return null;
  var url=cv.toDataURL('image/png'), blob=dataUrlBlob(url), name=cardFileName(ref), file=null;
  try{ file=new File([blob], name, {type:'image/png'}); }catch(e){}
  return {ref:ref, url:url, blob:blob, name:name, file:file};
}
function shareVerseCard(b, c, v){
  var card=makeVerseCard(b,c,v);
  if(!card) return Promise.resolve({ok:false, msg:'This device could not make the image.'});
  CARD_IMG=card;
  return shareCardImage(card).then(function(r){
    if(!r.ok) showCardImage(card, r.msg);
    return r;
  });
}
function shareCardImage(card){
  if(payNative()){
    /* On iPhone and iPad the picture goes straight to the system's share
       sheet as a picture, through the app's own native code; the file route
       through the Share plugin is the fallback, and the picture on screen
       the last resort. */
    var viaNative=(payPlatform()==='ios'&&Narrator&&Narrator.shareImage)
      ? Promise.resolve(Narrator.shareImage({data:String(card.url).split(',')[1]||''}))
          .then(function(){ return {ok:true}; }, function(e){ CARD_ERR=String((e&&e.message)||e||''); return {ok:false}; })
      : Promise.resolve({ok:false});
    return viaNative.then(function(r){
      if(r.ok) return r;
      return nativeShareFile(card.name, card.blob);
    }).then(function(r){
      return r.ok?{ok:true,msg:''}:{ok:false,msg:'The share sheet would not open, so here is the picture.'};
    });
  }
  if(card.file&&navigator.canShare&&navigator.share){
    var can=false; try{ can=navigator.canShare({files:[card.file]}); }catch(e){}
    if(can) return navigator.share({files:[card.file], title:card.ref})
      .then(function(){ return {ok:true,msg:''}; })
      .catch(function(e){
        if(e&&e.name==='AbortError') return {ok:true,msg:''};     /* closed the sheet */
        return {ok:false,msg:''};
      });
  }
  return Promise.resolve({ok:false,msg:''});
}
/* the picture itself, with what can be done with it */
function showCardImage(card, msg){
  closePop();
  S.sheet=null;
  var h='<div class="grabzone"><div class="grab"></div></div><div class="cardsheet">'+
    '<div class="ref">'+esc(card.ref)+'</div>'+
    '<img class="cardimg" src="'+card.url+'" alt="'+esc(card.ref)+' as a picture">'+
    '<p class="vnote">'+esc(msg||'')+(msg?' ':'')+'Press and hold the picture to save it or share it.</p>'+
    (msg&&CARD_ERR?'<p class="vnote" style="opacity:.6;font-size:12px">('+esc(CARD_ERR.slice(0,120))+')</p>':'')+
    '<div class="row2">'+
      '<button class="btn" data-a="cardshare">Share</button>'+
      '<button class="btn sec" data-a="cardsave">Save</button></div>'+
    '<button class="btn gh" data-a="cardclose">Close</button></div>';
  sheet.innerHTML=h;
  if(sheet.style){ sheet.style.transition=''; sheet.style.transform=''; }
  placeOverlays();
  sheet.classList.add('on'); scrim.classList.add('on');
  initSheetDrag();
}

/* ---------- theme ----------
   Three states, and the default matters: "auto" follows the phone, which is
   what most people expect and what makes a night-time reader dim without
   being asked. */
function systemDark(){
  try{ return !!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches); }
  catch(e){ return false; }
}
/* how an old word with a meaning is marked: a soft glow (the default) or the
   dotted underline. On <html>, so the reader, the tablet's other side and the
   verse card all follow at once without a redraw. */
function wordMark(){ return S.wordMark==='line'?'line':'glow'; }
function applyWordMark(){
  try{ document.documentElement.setAttribute('data-wordmark', wordMark()); }catch(e){}
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
    applyWordMark();
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
  keys:{ios:'appl_UCyRxeMGYyJhDbQyVPxXDXupjoC', android:'goog_gOwvMofhSzEqCQkfoFZMNcdtIWL'},
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
/* Tester builds: the iOS workflow's "unlock all" option adds assets/tester.js,
   which sets window.SE_TESTER. Everything is open, and a switch in Settings
   locks it again to try the paywall. Store builds never have the file. */
function isTesterBuild(){ return window.SE_TESTER===1; }
function testerLocked(){
  try{ return localStorage.getItem('strata:testerlock')==='1'; }catch(e){ return false; }
}
function testerOpen(){ return isTesterBuild()&&!testerLocked(); }
function hasStudy(){ return testerOpen()||!PAY.on||!!PAY.ent.study||promoActive(); }
/* Promotional codes typed into the app. SELAH gives a month of Study, once
   per phone; it is kept on the phone with the day it runs out. */
var PROMOS={SELAH:{days:30, what:'a month of Study'}};
function promoActive(){ return !!(PAY.promo&&PAY.promo.until>Date.now()); }
function promoUntilText(){
  try{ return new Date(PAY.promo.until).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}); }
  catch(e){ return ''; }
}
function redeemPromo(raw){
  var code=String(raw||'').trim().toUpperCase().replace(/\s+/g,'');
  if(!code) return {ok:false, msg:'Type the code first.'};
  var pr=PROMOS[code];
  if(!pr) return {ok:false, msg:'That code is not one we know. Check the spelling, or if it is an App Store code, redeem it with Apple below.'};
  if(PAY.promo&&PAY.promo.code===code){
    return promoActive()?{ok:true, msg:'That code is already in use: Study is yours until '+promoUntilText()+'.'}
                        :{ok:false, msg:'That code has already been used on this phone.'};
  }
  PAY.promo={code:code, from:Date.now(), until:Date.now()+pr.days*864e5};
  Store.set('strata:promo',PAY.promo);
  return {ok:true, msg:code+': '+pr.what+' is yours, until '+promoUntilText()+'.'};
}
function hasAudio(){ return testerOpen()||!PAY.on||!!PAY.ent.audio; }
function payInit(){
  try{ Store.get('strata:promo').then(function(p){
    if(p&&p.code&&p.until){ PAY.promo=p; if(promoActive()){ applyLayout(); render(); } } }); }catch(e){}
  if(payNative()){
    PAY.on=true;
    /* what was bought is remembered for a week, so a phone offline in church
       keeps what it paid for */
    Store.get('strata:ent').then(function(c){
      if(c&&c.ent&&c.exp>Date.now()&&!PAY.fresh){ PAY.ent=c.ent; applyLayout(); render(); }
    });
    PAY.stage='plugin';
    try{ var CP=window.Capacitor;
      if(CP.isPluginAvailable&&!CP.isPluginAvailable('Purchases')) PAY.storeErr='the store plugin is not in this build';
      PAY.plugin=CP.registerPlugin('Purchases'); }catch(e){ PAY.plugin=null; PAY.storeErr='the store plugin would not load: '+String(e&&e.message||e).slice(0,200); }
    if(!PAY.plugin) return;
    var key=PAY.keys[payPlatform()]||PAY.keys.ios;
    /* back from the App Store's code sheet or a purchase elsewhere */
    try{ document.addEventListener('visibilitychange',function(){
      if(document.visibilityState==='visible'&&PAY.redeemWatch&&Date.now()-PAY.redeemWatch<15*60000) payRecheck(); }); }catch(e){}
    PAY.stage='starting the store';
    PAY.ready=payWait(PAY.plugin.configure({apiKey:key}),'starting the store').then(function(){
      PAY.stage='checking what you own';
      try{ PAY.plugin.addCustomerInfoUpdateListener(function(ci){ payApply(ci); }); }catch(e){}
      return payWait(PAY.plugin.getCustomerInfo(),'checking what you own');
    });
    PAY.ready.then(function(r){ payApply(r&&(r.customerInfo||r));
      return payLoadOfferings().then(function(){
        if(/^Connecting/.test(PAY.msg||'')) PAY.msg='';
        if(PAY.open) drawPaywall(); if(WEL.open) drawWelcome(); });
    }).catch(function(e){
      /* the store would not start: keep its words for the paywall's "Details for support" */
      PAY.storeErr=PAY.stage+': '+payErrText(e);
    });
    return;
  }
  if(payTestMode()){
    PAY.on=true; PAY.test=true;
    Store.get('strata:enttest').then(function(e){ if(e){ PAY.ent=e; applyLayout(); render(); } });
  }
}
/* a store call that never answers is reported, not waited on for ever */
function payWait(p, what){
  return new Promise(function(res, rej){
    var t=setTimeout(function(){ rej({message:'no answer after 20 seconds while '+what}); }, 20000);
    Promise.resolve(p).then(function(v){ clearTimeout(t); res(v); }, function(e){ clearTimeout(t); rej(e); });
  });
}
function payErrText(e){
  var u=e&&(e.underlyingErrorMessage||(e.data&&e.data.underlyingErrorMessage))||'';
  var m=(e&&(e.message||e.errorMessage))||e||'unknown';
  if(typeof m==='object'){ try{ m=JSON.stringify(m); }catch(x){ m='unknown'; } }
  return ((e&&e.code!=null?'code '+e.code+': ':'')+m+(u?' ('+u+')':'')).slice(0,300);
}
function payApply(ci){
  if(!ci) return;
  var a=(ci.entitlements&&ci.entitlements.active)||{};
  var was=PAY.ent.study+'/'+PAY.ent.audio;
  PAY.fresh=true;
  /* the yearly Study plan carries the narrated Bible for as long as it runs */
  var subs=[].concat(ci.activeSubscriptions||[]).concat(a.study&&a.study.productIdentifier?[a.study.productIdentifier]:[]);
  var yearly=subs.some(function(id){ return /^study_annual/.test(String(id)); });
  PAY.ent={study:!!a.study, audio:!!a.audio||yearly};
  /* what is held, product by product: the plan buttons and plan changes go by
     this, not by the entitlements (Yearly and Founders both give "study" and
     "audio", but they are not the same thing to buy) */
  var bought=[].concat(ci.allPurchasedProductIdentifiers||[]).concat(
    (ci.nonSubscriptionTransactions||[]).map(function(t){ return t&&(t.productIdentifier||t.productId); }));
  [a.study,a.audio].forEach(function(e){ if(e&&e.productIdentifier) bought.push(e.productIdentifier); });
  var active=[].concat(ci.activeSubscriptions||[]).map(String).filter(function(id){ return /^study_/.test(id); });
  PAY.owned={subs:active, life:bought.some(function(id){ return /^lifetime_founders/.test(String(id)); }),
             audio:bought.some(function(id){ return /^audio_bible/.test(String(id)); })};
  PAY.mgmt=ci.managementURL||null;
  Store.set('strata:ent',{ent:PAY.ent, exp:Date.now()+7*864e5});
  if(PAY.ent.study+'/'+PAY.ent.audio!==was){ applyLayout(); S.keepScroll=true; render(); if(PAY.open) drawPaywall(); }
  if(PAY.ent.audio&&was.split('/')[1]!=='true'&&!payTestMode()) audOffer();
}
/* the pretend store: the same shapes RevenueCat returns */
function payTestOfferings(){
  function p(id, type, prod, price, intro){
    return {identifier:id, packageType:type, product:{identifier:prod, priceString:price,
      introPrice:intro?{periodNumberOfUnits:14, periodUnit:'DAY', price:0}:null}};
  }
  return {current:{identifier:'default', availablePackages:[
      p('$rc_annual','ANNUAL','study_annual','$29.99',true),
      p('$rc_monthly','MONTHLY','study_monthly','$4.99'),
      p('$rc_lifetime','LIFETIME','lifetime_founders','$79.99')]},
    all:{audio:{identifier:'audio', availablePackages:[p('audio','LIFETIME','audio_bible','$19.99')]},
         tips:{identifier:'tips', availablePackages:[p('tip_small','CUSTOM','tip_small','$1.99'),
            p('tip_medium','CUSTOM','tip_medium','$4.99'),p('tip_large','CUSTOM','tip_large','$9.99')]}}};
}
function payLoadOfferings(){
  if(PAY.offerings) return Promise.resolve(PAY.offerings);
  if(PAY.test){ PAY.offerings=payTestOfferings(); if(PAY.trial==null) PAY.trial=true; return Promise.resolve(PAY.offerings); }
  if(!PAY.plugin){ if(!PAY.storeErr) PAY.storeErr='the store plugin did not load'; return Promise.resolve(null); }
  if(PAY.loading) return PAY.loading;
  /* the store must have started before it is asked for prices */
  PAY.loading=Promise.resolve(PAY.ready).catch(function(){}).then(function(){
    return payWait(PAY.plugin.getOfferings(),'loading the prices');
  }).then(function(o){
    PAY.offerings=o||null;
    /* loaded, but with nothing to sell: the store side is not set up */
    var cur=o&&(o.current||(o.all&&o.all['default']));
    PAY.storeErr=!cur?'no current offering in RevenueCat':
      !((cur.availablePackages||[]).length)?'the offering has no packages':'';
    PAY.loading=null;
    return payCheckTrial().then(function(){ return PAY.offerings; });
  }).catch(function(e){
    /* why, in the store's own words, so it can be put right */
    PAY.loading=null;
    PAY.storeErr='prices: '+payErrText(e)+(PAY.storeErr&&!/^prices:/.test(PAY.storeErr)?'; '+PAY.storeErr:'');
    return null;
  });
  return PAY.loading;
}
/* Is the free trial really on offer to this person? Someone who has had it
   before, or is already subscribed, is charged at once, so the paywall must
   not promise fourteen free days. true / false / null (could not tell). */
function payCheckTrial(){
  if(PAY.owned&&PAY.owned.subs&&PAY.owned.subs.length){ PAY.trial=false; return Promise.resolve(); }
  var pk=payPkg('default','$rc_annual'), pr=pk&&pk.product;
  if(payPlatform()==='android'){
    /* Google lists only the offers this account can take */
    var opt=pr&&(pr.defaultOption||null);
    PAY.trial=!!((opt&&opt.freePhase)||(pr&&pr.introPrice&&+pr.introPrice.price===0));
    return Promise.resolve();
  }
  if(!PAY.plugin||!PAY.plugin.checkTrialOrIntroductoryPriceEligibility){ PAY.trial=null; return Promise.resolve(); }
  return payWait(PAY.plugin.checkTrialOrIntroductoryPriceEligibility({productIdentifiers:['study_annual']}),'checking the free trial')
    .then(function(r){
      var e=r&&(r.study_annual||(r.eligibility&&r.eligibility.study_annual));
      var st=e&&(e.status!=null?e.status:e);
      /* RevenueCat: 0 unknown, 1 not eligible, 2 eligible, 3 no offer */
      PAY.trial=(st===2||st==='INTRO_ELIGIBILITY_STATUS_ELIGIBLE')?true
               :(st===1||st===3||st==='INTRO_ELIGIBILITY_STATUS_INELIGIBLE'||st==='INTRO_ELIGIBILITY_STATUS_NO_INTRO_OFFER_EXISTS')?false:null;
    }).catch(function(){ PAY.trial=null; });
}
/* the trial's words, only as far as they are true */
function trialWords(kind){
  var t=PAY.trial;
  if(kind==='plan') return t===true?'Study and the narrated Bible. 14 days free, then yearly. Cancel any time.'
    :t===false?'Study and the narrated Bible, billed yearly. Cancel any time.'
    :'Study and the narrated Bible, billed yearly. First-time subscribers get 14 days free.';
  if(kind==='button') return t===true?'Start 14 days free':'Continue';
  if(kind==='fine') return t===true?' when the 14 days end':t===false?'':' (after the free trial, for a first subscription)';
  if(kind==='welcome') return t===true?'Or try everything free for 14 days':'Or see Yearly and Monthly';
  return '';
}
/* the plan already held, by product rather than by what it unlocks */
function planOwned(id){
  if(!PAY.on) return false;
  var o=PAY.owned;
  if(!o) return id==='audio'?hasAudio():(id==='lifetime'?(PAY.ent.study&&PAY.ent.audio):hasStudy()&&!promoActive());
  var subs=o.subs||[], has=function(re){ return subs.some(function(x){ return re.test(x); }); };
  if(id==='lifetime') return o.life;
  if(id==='annual') return o.life||has(/^study_annual/);
  if(id==='monthly') return o.life||has(/^study_monthly/)||has(/^study_annual/);
  if(id==='audio') return hasAudio();
  return false;
}
function payPkg(offering, id){
  var o=PAY.offerings; if(!o) return null;
  var off=offering==='default'?(o.current||(o.all&&o.all['default'])):(o.all&&o.all[offering]);
  var list=(off&&off.availablePackages)||[];
  for(var i=0;i<list.length;i++) if(list[i].identifier===id) return list[i];
  return null;
}
function payPkgIds(){
  var o=PAY.offerings; if(!o) return '';
  var all=o.all||{}, out=[];
  Object.keys(all).forEach(function(k){ out.push(k+': '+((all[k]&&all[k].availablePackages)||[]).map(function(p){ return p.identifier; }).join(' ')); });
  if(o.current&&o.current.identifier) out.unshift('current '+o.current.identifier);
  return out.join(', ').slice(0,200);
}
function payPrice(offering, id, fallback){
  var p=payPkg(offering,id);
  return (p&&p.product&&p.product.priceString)||fallback;
}
function payBuy(offering, id){
  var p=payPkg(offering,id);
  if(PAY.busy) return;
  if(!p){
    /* ask the store once more before giving up, and say why if it still fails */
    if(PAY.loading){ PAY.msg='Connecting to the App Store\u2026'; payRedraw();
      /* the prices are on their way: buy when they come, or say why not */
      if(!payBuy.waiting){ payBuy.waiting=true; payBuy.retried=true;
        PAY.loading.then(function(){ payBuy.waiting=false; payBuy(offering, id); }); }
      return; }
    if(!payBuy.retried){ payBuy.retried=true; PAY.offerings=null; PAY.msg='Connecting to the App Store\u2026'; payRedraw();
      payLoadOfferings().then(function(){ payBuy(offering, id); }); return; }
    payBuy.retried=false;
    var have=payPkgIds();
    PAY.msg='The store is not answering. Check the connection and try again.'+
      ' (Details for support: '+(PAY.storeErr||('no package "'+id+'" in "'+offering+'"; the store offered '+(have||'nothing')))+')';
    payRedraw(); return; }
  payBuy.retried=false;
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
      var ent={study:PAY.ent.study||/study|lifetime/.test(pid), audio:PAY.ent.audio||/audio|lifetime|study_annual/.test(pid)};
      Store.set('strata:enttest',ent);
      var subs=(PAY.owned&&PAY.owned.subs||[]).slice();
      if(/^study_/.test(pid)){ subs=subs.filter(function(x){ return !/^study_/.test(x); }); subs.push(pid); }
      var held=((PAY.owned&&PAY.owned.life)?['lifetime_founders']:[]).concat((PAY.owned&&PAY.owned.audio)?['audio_bible']:[]);
      if(!/^study_|^tip_/.test(pid)) held.push(pid);
      done({entitlements:{active:(function(){ var a={}; if(ent.study) a.study={}; if(ent.audio) a.audio={}; return a; })()},
            activeSubscriptions:subs, allPurchasedProductIdentifiers:held.concat(subs)});
    },150);
    return;
  }
  var opts={aPackage:p}, pid0=String((p.product&&p.product.identifier)||'');
  var cur=(PAY.owned&&PAY.owned.subs||[]).filter(function(x){ return x.split(':')[0]!==pid0.split(':')[0]; })[0];
  /* Google Play keeps two subscriptions running side by side unless told the
     new one replaces the old; Apple does this by itself within the group */
  if(cur&&/^study_/.test(pid0)&&payPlatform()==='android')
    opts.googleProductChangeInfo={oldProductIdentifier:cur.split(':')[0]};
  var hadSub=cur||(PAY.owned&&PAY.owned.subs||[])[0];
  Promise.resolve(PAY.plugin.purchasePackage(opts)).then(function(r){
    done(r&&(r.customerInfo||r));
    if(/^lifetime/.test(pid0)&&hadSub){
      PAY.msg='Thank you, Founder. Study is yours for good. Your '+(/annual/.test(hadSub)?'yearly':'monthly')+
        ' plan still renews until you cancel it, so cancel it in your subscriptions.';
      PAY.showManage=true; payRedraw();
    }
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
/* A code, such as SELAH for a free month. Apple and Google do not allow an
   app to unlock what it sells with codes of its own, so the code is made in
   App Store Connect and the Play Console and redeemed in the store's own
   sheet, which then reports the free month back here like any purchase.
   iPhone and iPad: Apple's code sheet opens straight away. Android: Google
   takes a custom code inside the purchase sheet, so the monthly plan opens
   with the way to its Redeem link spelled out. */
function payRedeem(){
  if(payPlatform()==='ios'){
    try{ if(PAY.plugin) PAY.plugin.presentCodeRedemptionSheet(); }catch(e){}
    /* Apple's sheet does not say when it closes: look again when the app
       comes back to the front, and once more a little later */
    PAY.redeemWatch=Date.now();
    setTimeout(payRecheck, 20000);
    return;
  }
  if(!PAY.open) openPaywall('study');
  PAY.choice='monthly'; PAY.redeemHelp=true; drawPaywall();
}
function payRecheck(){
  try{ if(PAY.plugin&&PAY.plugin.getCustomerInfo)
    Promise.resolve(PAY.plugin.getCustomerInfo()).then(function(r){ payApply(r&&(r.customerInfo||r)); }).catch(function(){}); }catch(e){}
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
  founders:['Become a Founder','One payment, no subscription: Study and the narrated Bible, yours for good.'],
  trial:['Try Study free','Fourteen days of everything, the narrated Bible included. Cancel any time.'],
  trialno:['Study Yearly','Study and the narrated Bible, every year. Cancel any time.'],
  words:['Word study, without limits','You have used today’s '+FREE_LOOKUPS+' free lookups. Study opens every word.'],
  sheets:['Study sheets','Your own studies: a question, and the scriptures that answer it.'],
  tags:['Tags for your notes','Gather your notes by theme, and find them again by tag.'],
  folders:['Bookmark folders','Keep your saved verses in folders of your own.'],
  atlas:['The whole atlas','Every map, from the patriarchs to Paul’s journeys.'],
  split:['Two books open at once','On a tablet, read on one side and study on the other.'],
  books:['Your own library','Add as many EPUB, PDF and text books as you like.'],
  downloads:['Listen offline','Keep the narrated Bible on this phone and listen with no connection: in church, on a plane, out of signal. Comes with the narrated Bible, Founders Lifetime or Study Yearly.'],
  audio:['The narrated Bible','All 80 books read aloud in one human voice, offline. Psalms and John are free to hear. Yours for good, or with the yearly Study plan.']
};
function openPaywall(why){
  PAY.open=why||'study'; AUD.sheet=false;
  PAY.msg='';
  PAY.choice=(why==='audio'||why==='downloads')?'audio':(why==='trial')?'annual':'lifetime';
  PAY.from=why||'study';
  closePop&&closePop();
  S.sheet=null;
  drawPaywall();
  payLoadOfferings().then(function(){ if(PAY.open) drawPaywall(); });
}
function closePaywall(){
  var from=PAY.from; PAY.from=null;
  PAY.open=null; PAY.showManage=false; PAY.redeemHelp=false; PAY.codeOpen=false; PAY.codeMsg=''; closeSheet();
  if(from==='downloads'&&hasAudio()&&AUD.on){ AUD.offered=true; AUD.offerWaiting=false; Store.set('strata:dloffered',Date.now());
    setTimeout(function(){ if(!PAY.open) openAudioSheet(); },350); return; }
  if(AUD.offerWaiting) audOffer(); }
function drawPaywall(){
  if(!PAY.open||!sheet) return;
  var why=PAY.open, t=PAYWHY[(why==='trial'&&PAY.trial!==true)?'trialno':why]||PAYWHY.study;
  var audioFirst=(why==='audio'||why==='downloads');
  /* Founders Lifetime leads: one payment, nothing recurring, which is what
     most people asked for. Yearly stays beside it for anyone who would rather
     not pay that much at once. */
  var plans=[
    ['lifetime','default','$rc_lifetime','Founders Lifetime',payPrice('default','$rc_lifetime','$79.99')+' once','Study and the narrated Bible, for good. No subscription.'+(foundersOpen()?' '+foundersNote()+'.':''),'Best value'],
    ['annual','default','$rc_annual','Yearly',payPrice('default','$rc_annual','$29.99')+' a year',trialWords('plan')],
    ['monthly','default','$rc_monthly','Monthly',payPrice('default','$rc_monthly','$4.99')+' a month','Study. Cancel any time.']];
  var audio=['audio','audio','audio','Narrated Bible',payPrice('audio','audio','$19.99')+' once','All 80 books in the narrator’s voice, for good.'];
  if(audioFirst) plans=[audio, plans[0], plans[1]];
  var h='<div class="grabzone"><div class="grab"></div></div><div class="paywall" role="dialog" aria-label="'+esc(t[0])+'">';
  h+='<div class="pwhead"><div class="pwkick">Sixteen Eleven '+(audioFirst?'Audio':'Study')+'</div>'+
     '<h2>'+esc(t[0])+'</h2><p>'+esc(t[1])+'</p></div>';
  /* from the welcome, the list was just read: go straight to the plans */
  if(!audioFirst&&why!=='founders'&&why!=='trial'){
    h+='<ul class="pwlist">'+[
      'Founders and Yearly: the narrated Bible too, all 80 books in one voice',
      'Word study without limits: Webster’s 1913, where words come from, the thesaurus, Strong’s Hebrew and Greek',
      'Study sheets: gather the scriptures that answer a question',
      'Tags to gather your notes by theme, and bookmark folders',
      'The whole atlas, every era',
      'Two books open at once on a tablet',
      'As many of your own books as you like'
    ].map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('')+'</ul>';
  }
  h+='<div class="pwplans" role="radiogroup" aria-label="Choose a plan">'+plans.map(function(p){
    var on=PAY.choice===p[0];
    return '<button class="pwplan'+(on?' on':'')+'" role="radio" aria-checked="'+on+'" data-pwpick="'+p[0]+'">'+
      '<span class="pwpt"><b>'+esc(p[3])+(p[6]?' <em class="pwbadge">'+esc(p[6])+'</em>':'')+'</b>'+(p[5]?'<span>'+esc(p[5])+'</span>':'')+'</span>'+
      '<span class="pwpp">'+esc(p[4])+'</span></button>';
  }).join('')+'</div>';
  var pick=plans.filter(function(p){ return p[0]===PAY.choice; })[0]||plans[0];
  var owned=planOwned(pick[0]);
  h+='<button class="btn pwbuy" data-pwbuy="'+pick[1]+'|'+pick[2]+'"'+(PAY.busy||owned?' disabled':'')+'>'+
     (owned?(PAY.owned&&PAY.owned.life&&pick[0]!=='audio'?'You are a Founder':'You have this'):PAY.busy?'One moment…':(pick[0]==='annual'?trialWords('button'):pick[0]==='lifetime'?'Become a Founder':'Continue'))+'</button>';
  /* Founders over a running subscription: the store goes on billing it */
  if(pick[0]==='lifetime'&&!owned&&PAY.owned&&PAY.owned.subs&&PAY.owned.subs.length)
    h+='<p class="pwmsg">You have a Study subscription. Founders replaces it for good; after buying, cancel the subscription so it stops renewing.</p>';
  if(PAY.showManage)
    h+='<a class="btn sec pwmanage" href="'+esc(PAY.mgmt||(payPlatform()==='android'?'https://play.google.com/store/account/subscriptions':'https://apps.apple.com/account/subscriptions'))+
       '" target="_blank" rel="noopener">Manage subscriptions</a>';
  if(PAY.msg) h+='<p class="pwmsg" role="status">'+esc(PAY.msg)+'</p>';
  if(why==='downloads'&&!hasAudio()&&AUD.on)
    h+='<button class="pwlinkbtn pwfreedl" data-a="dlfree">Keep Psalms and John for free</button>';
  if(PAY.codeOpen){
    h+='<div class="pwcode pwcodein"><label for="pwcode"><b>Have a code?</b></label>'+
       '<div class="pwcoderow"><input id="pwcode" placeholder="Code" autocapitalize="characters" '+
       'autocomplete="off" spellcheck="false" maxlength="24" enterkeyhint="done">'+
       '<button class="btn sec" data-a="pwcodego">Redeem</button></div>'+
       (PAY.codeMsg?'<p class="pwmsg" role="status">'+esc(PAY.codeMsg)+'</p>':'')+
       (payNative()?'<button class="pwlinkbtn" data-a="pwredeem">An App Store or Google Play code? Redeem it with '+
         (payPlatform()==='android'?'Google':'Apple')+'</button>':'')+'</div>';
  }
  if(PAY.redeemHelp&&payPlatform()==='android')
    h+='<div class="pwcode"><b>Using a code</b><p>Tap Continue. In Google Play\u2019s sheet, tap the arrow beside '+
       'the payment method, choose <i>Redeem code</i>, and enter your code. A free-month code '+
       'means nothing is charged for the month, and you can cancel before it ends.</p></div>';
  h+='<p class="pwfine">'+(pick[0]==='annual'||pick[0]==='monthly'
      ?'Charged to your '+(payPlatform()==='android'?'Google':'Apple')+' account'+(pick[0]==='annual'?trialWords('fine'):'')+
       '. It renews automatically unless you cancel at least 24 hours before the end of the period; manage or cancel it in your account settings.'
      :'One payment, charged to your '+(payPlatform()==='android'?'Google':'Apple')+' account. No subscription.')+'</p>';
  h+='<div class="pwlinks"><button data-a="pwrestore">Restore purchases</button>'+
     '<button data-a="pwcodeopen">Have a code?</button>'+
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
  var pci=document.getElementById('pwcode');
  if(pci&&pci.addEventListener) pci.addEventListener('keydown',function(ev){
    if(ev.key==='Enter'){ ev.preventDefault(); var b=document.querySelector('[data-a="pwcodego"]'); if(b) b.click(); } });
}
/* ---------- Founders price ----------
   The Founders Lifetime price is a launch price. Until the day below the
   paywall and the welcome say so; after it they simply stop saying it, and the
   store price is raised in App Store Connect and the Play Console. */
var FOUNDERS_UNTIL=new Date(2027,0,1).getTime();
function foundersOpen(){ return Date.now()<FOUNDERS_UNTIL; }
function foundersNote(){ return 'Founders price until January 1'; }

/* ---------- welcome ----------
   Once, on the first open of the store app: a word of welcome under the
   stars, then the page made comfortable (theme, paper, text size, with a
   verse to judge it by), then, if the store is on, the Founders offer with a
   plain way past it. Nothing here is required; every step can be skipped,
   and it never comes back once dismissed. ?welcome=1 shows it anywhere, for
   checking the design. */
var WEL={open:false, step:0, el:null};
function welcomeWanted(){
  try{ if(/[?&]welcome=1/.test(location.search)) return true; }catch(e){}
  return payNative();
}
function maybeWelcome(){
  if(!welcomeWanted()) return;
  var forced=false;
  try{ forced=/[?&]welcome=1/.test(location.search); }catch(e){}
  Store.get('strata:welcomed').then(function(done){
    if(done&&!forced) return;
    WEL.open=true; WEL.step=0; drawWelcome();
  });
}
function welcomeOffer(){ return PAY.on&&!hasStudy(); }
function closeWelcome(then){
  WEL.open=false;
  Store.set('strata:welcomed',Date.now());
  if(WEL.el){ WEL.el.classList.remove('on'); var el=WEL.el; setTimeout(function(){ if(!WEL.open) el.innerHTML=''; },260); }
  try{ document.documentElement.classList.remove('welcoming'); }catch(e){}
  if(then) then();
}
function drawWelcome(){
  if(!WEL.open) return;
  if(!WEL.el){
    WEL.el=document.createElement('div');
    WEL.el.id='welcome';
    WEL.el.setAttribute('role','dialog'); WEL.el.setAttribute('aria-modal','true');
    document.body.appendChild(WEL.el);
    WEL.el.addEventListener('click',function(ev){
      ev.stopPropagation();
      var tg=ev.target, t=tg&&tg.closest?tg.closest('[data-w]'):null; if(!t) return;
      welcomeAct(t.dataset.w, t.dataset.v);
    });
  }
  var steps=welcomeOffer()?3:2, st=WEL.step, h='';
  var dots='<div class="weldots" aria-hidden="true">'+[0,1,2].slice(0,steps).map(function(i){
    return '<i'+(i===st?' class="on"':'')+'></i>'; }).join('')+'</div>';
  if(st===0){
    WEL.el.setAttribute('aria-label','Welcome to Sixteen Eleven');
    h='<div class="welsky"><div class="welin">'+
      '<div class="welmark" aria-hidden="true"><span>XVI</span><i></i><span>XI</span></div>'+
      '<h1>Sixteen Eleven</h1>'+
      '<p class="welsub">The King James Bible, all eighty books with the Apocrypha.</p>'+
      '<blockquote class="welverse">“Look now toward heaven, and tell the stars, if thou be able to number them.”'+
      '<cite>Genesis 15:5</cite></blockquote>'+
      '<ul class="welfree"><li>Free to read, always</li><li>No ads, no account</li><li>Works offline</li></ul>'+
      '</div><div class="welfoot">'+dots+
      '<button class="btn welgo" data-w="next">Begin</button></div></div>';
  } else if(st===1){
    WEL.el.setAttribute('aria-label','Make the page yours');
    var SZ=['15px','17px','19px','23px','28px','34px'];
    var segs=function(key, opts, cur){
      return '<div class="welseg" role="radiogroup">'+opts.map(function(o){
        var on=String(cur)===String(o[0]);
        return '<button role="radio" aria-checked="'+on+'" data-w="'+key+'" data-v="'+o[0]+'">'+o[1]+'</button>';
      }).join('')+'</div>';
    };
    h='<div class="welpage"><div class="welin">'+
      '<div class="welkick">Step 2 of '+steps+'</div><h2>Make the page yours</h2>'+
      '<p class="welsub">You can change these any time in Settings.</p>'+
      '<div class="welpreview paper" style="--wsz:'+(SZ[S.textSize]||'17px')+'">'+
        '<span class="welref">Psalm 119:105</span>'+
        '<p>'+(S.wordMeanings!==false?'<span class="gw">Thy</span>':'Thy')+' word <i>is</i> a lamp '+(S.wordMeanings!==false?'<span class="gw">unto</span>':'unto')+' my feet, and a light unto my path.</p></div>'+
      '<div class="wellab">Theme</div>'+segs('theme',[['light','Early morning'],['dark','Night'],['auto','Match device']],S.theme||'auto')+
      '<div class="wellab">Text size</div>'+segs('size',[[0,'XS'],[1,'S'],[2,'M'],[3,'L'],[4,'XL'],[5,'XXL']],S.textSize)+
      /* old words: on unless turned off, and said to be the better choice */
      '<div class="wellab">Old words <span class="welrec">Recommended on</span></div>'+
      segs('words',[['on','Explain them'],['off','Leave them plain']],S.wordMeanings!==false?'on':'off')+
      (S.wordMeanings!==false?segs('wordmark',[['glow','Soft glow'],['line','Underline']],wordMark()):'')+
      '<p class="welhint">'+(S.wordMeanings!==false?'Words like \u201cthy\u201d and \u201cunto\u201d are marked; tap one to see what it meant in 1611.':
        'Old words will not be marked. Tap Explain them to have their meanings a tap away.')+'</p>'+
      '</div><div class="welfoot">'+dots+
      '<button class="btn welgo" data-w="next">'+(steps>2?'Continue':'Start reading')+'</button></div></div>';
  } else {
    WEL.el.setAttribute('aria-label','Become a Founder');
    h='<div class="welpage"><div class="welin">'+
      '<div class="welkick">Step 3 of 3</div><h2>Become a Founder</h2>'+
      '<p class="welsub">The King James text stays free for everyone. Founders open the deeper tools and the narrated Bible, and keep the lamp lit.</p>'+
      '<div class="welcard"><div class="welcardtop"><b>Founders Lifetime</b>'+(function(){ var pp=payPrice('default','$rc_lifetime',PAY.test?'$79.99':''); return pp?'<span>'+esc(pp)+' once</span>':'<span>One payment</span>'; })()+'</div>'+
        (foundersOpen()?'<div class="welnote">'+esc(foundersNote())+'</div>':'')+
        '<ul><li>The narrated Bible: all 80 books in one voice, offline</li>'+
        '<li>Word study with Webster’s 1913 and Strong’s Hebrew and Greek</li>'+
        '<li>Study sheets, tags, folders and the whole atlas</li>'+
        '<li>One payment. No subscription, ever</li></ul>'+
        '<button class="btn welgo" data-w="founders">Become a Founder</button></div>'+
      '<button class="btn sec weltrial" data-w="trial">'+esc(trialWords('welcome'))+'</button>'+
      '</div><div class="welfoot">'+dots+
      '<button class="btn gh welskip" data-w="done">Not now, start reading</button></div></div>';
  }
  WEL.el.innerHTML=h;
  try{ document.documentElement.classList.add('welcoming'); }catch(e){}
  WEL.el.classList.add('on');
  /* a screen reader starts at the top of the new page, not on the button */
  WEL.el.setAttribute('tabindex','-1');
  try{ WEL.el.focus({preventScroll:true}); }catch(e){}
}
function welcomeAct(w, v){
  var steps=welcomeOffer()?3:2;
  if(w==='next'){ if(WEL.step+1>=steps) closeWelcome(); else { WEL.step++; drawWelcome(); } return; }
  if(w==='done'){ closeWelcome(); return; }
  if(w==='theme'){ setTheme(v); drawWelcome(); return; }
  if(w==='size'){ S.textSize=+v; savePlace(); S.keepScroll=true; render(); drawWelcome(); return; }
  if(w==='words'){ S.wordMeanings=(v==='on'); Store.set('strata:words',S.wordMeanings); S.keepScroll=true; render(); drawWelcome(); return; }
  if(w==='wordmark'){ S.wordMark=(v==='line')?'line':'glow'; Store.set('strata:wordmark',S.wordMark); applyWordMark(); drawWelcome(); return; }
  if(w==='founders'){ closeWelcome(function(){ openPaywall('founders'); }); return; }
  if(w==='trial'){ closeWelcome(function(){ openPaywall('trial'); }); return; }
}

/* ---------- asking for a rating ----------
   Ratings decide where the app sits in the store's search, so it asks, but
   only the store's own small prompt, only after someone has finished three
   chapters on at least two different days, at most three times a year and
   never twice within four months. The store may still decide not to show it. */
function maybeAskReview(){
  if(!payNative()||!Narrator||!Narrator.requestReview) return;
  var keys=Object.keys(S.read||{}); if(keys.length<3) return;
  var days={}; keys.forEach(function(k){ days[new Date(S.read[k]).toDateString()]=1; });
  if(Object.keys(days).length<2) return;
  Store.get('strata:review').then(function(r){
    r=r||{asked:[]};
    var yr=Date.now()-365*864e5, recent=(r.asked||[]).filter(function(t){ return t>yr; });
    if(recent.length>=3) return;
    if(recent.length&&Date.now()-recent[recent.length-1]<120*864e5) return;
    setTimeout(function(){
      if(PAY.open||WEL.open||S.speaking||(sheet&&sheet.classList.contains('on'))) return;
      recent.push(Date.now()); Store.set('strata:review',{asked:recent});
      try{ Promise.resolve(Narrator.requestReview()).catch(function(){}); }catch(e){}
    },1500);
  });
}

/* settings: what you have, and the doors to the store */
function payCard(){
  if(!PAY.on) return '';
  var h='<div class="setgrp">Sixteen Eleven Study</div><div class="setcard pwcard">';
  h+='<div class="setline"><span>Study</span><span>'+(PAY.ent.study?'Active':promoActive()?'Active until '+esc(promoUntilText()):'Free')+'</span></div>';
  h+='<div class="setline"><span>Narrated Bible</span><span>'+(PAY.ent.audio?'Yours':'Psalms and John')+'</span></div>';
  h+='<div class="pwrow">'+
     (PAY.ent.study&&PAY.ent.audio?'':'<button class="btn sec" data-a="pwopen">See the plans</button>')+
     (PAY.mgmt?'<a class="btn gh" href="'+esc(PAY.mgmt)+'" target="_blank" rel="noopener">Manage subscription</a>':'')+
     '<button class="btn gh" data-a="pwrestore2">Restore purchases</button>'+
     (!PAY.ent.study?'<button class="btn gh" data-a="pwcodeopen">Redeem a code</button>':'')+'</div>';
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
    '<div class="teaser"><p class="tlead">Study sheets are yours to build: ask a question, '+
    'gather the scriptures that answer it, and keep your notes beside them. '+
    'Tap any reference to open it.</p>'+
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
    .then(function(j){ try{ Store.set('strata:vman',j); }catch(e){} return j; })
    .catch(function(){ return Store.get('strata:vman').then(function(j){ if(j&&typeof j==='object') return j; throw new Error('none kept'); }); })
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
function recordedPassages(bi, ch, list){
  var vs=chapterOf(BK(bi),ch)||[];
  /* the audio may live on a CDN (Cloudflare R2): the manifest says where */
  var base=(S.voiceManifest&&S.voiceManifest._base)||VOICE_BASE;
  var out=list.map(function(x){
    var parts=[];
    for(var n=x.v1;n<=x.v2;n++) if(vs[n-1]) parts.push([n,vs[n-1].length]);
    return {text:'', from:x.v1, to:x.v2, file:audLocal(x.f)||base+x.f, marks:marksOf(parts,0)};
  });
  /* the chapter's title in the same voice, when it has been recorded; the
     first verse is marked while it plays */
  var t=recordedTitle(bi, ch);
  if(t) out.unshift({text:'', from:0, to:0, file:audLocal(t)||base+t, marks:[], title:1});
  return out;
}
function recordedTitle(bi, ch){
  var m=S.voiceManifest, b=BK(bi);
  if(!m||!m._titles||!b) return null;
  var bt=m._titles[b.name];
  return (bt&&bt[String(ch)])||null;
}
/* ---------- narration on the device ----------
   The text has always been on the phone; the narration streamed from the
   CDN, so it fell silent without a connection. Now any book can be kept on
   the device: Settings > Narration on this phone, or the offer that follows
   buying it. The native plugin does the downloading (straight to a file,
   kept out of iCloud backups) and the player is handed the file instead of
   the web address. A re-recorded clip carries a new ?r= in the manifest, so
   a kept copy older than the manifest's is fetched again.
   Only the store apps keep audio; the website streams as before. */
var AUD={on:false, dir:null, have:{}, want:{}, queue:[], active:0, errs:0, msg:'', sheet:false, inflight:{}, tries:{},
         done:0, total:0, ready:false, offered:false};
var AUD_WORKERS=3;
function audPlain(f){ return String(f||'').split('?')[0]; }
function audInit(){
  if(!payNative()||!Narrator||!Narrator.audioDir) return;
  Promise.resolve(Narrator.audioDir()).then(function(r){
    AUD.dir=(r&&r.uri)||null; if(!AUD.dir) return;
    if(!/\/$/.test(AUD.dir)) AUD.dir+='/';
    AUD.on=true;
    /* the shelf may already be drawn: show the Downloads board's real state */
    if(S.tab==='library'&&S.book===null&&S.reading===null&&!AUD.sheet){ S.keepScroll=true; try{ render(); }catch(e){} }
    return Promise.all([Store.get('strata:dlhave'),Store.get('strata:dlwant'),Store.get('strata:dloffered')]);
  }).then(function(v){
    if(!v) return;
    AUD.have=v[0]||{}; AUD.want=v[1]||{}; AUD.offered=!!v[2]; AUD.ready=true;
    return loadVoiceManifest();
  }).then(function(){ if(AUD.ready) audResume(); }).catch(function(){});
  try{ window.addEventListener('online',function(){ AUD.errs=0; audResume(); }); }catch(e){}
}
/* every file a book needs: its passages and its spoken chapter titles */
function audBookFiles(name){
  var m=S.voiceManifest; if(!m||!m[name]) return [];
  var out=[], b=m[name], t=(m._titles&&m._titles[name])||{};
  Object.keys(b).forEach(function(ch){
    (b[ch]||[]).forEach(function(x){ if(x&&x.f) out.push(x.f); });
    if(t[ch]) out.push(t[ch]);
  });
  return out;
}
function audChapterLocal(bk, c, list){
  if(!AUD.on) return false;
  if(!(list||[]).every(function(x){ return !!audLocal(x.f); })) return false;
  var t=recordedTitle(bk.i, c);
  return !t||!!audLocal(t);
}
function audAllowed(name){ return hasAudio()||FREE_AUDIO.indexOf(name)>-1; }
function audLocal(f){
  if(!AUD.on||!f) return null;
  var p=audPlain(f);
  return AUD.have[p]===f?AUD.dir+p:null;
}
function audBookState(name){
  var fs=audBookFiles(name), n=0;
  fs.forEach(function(f){ if(AUD.have[audPlain(f)]===f) n++; });
  return {have:n, total:fs.length};
}
/* about 2 GB for the whole Bible over 11,539 passages: roughly 168 KB a
   passage, and a spoken chapter title is a few KB */
function audBookMB(name){
  var m=S.voiceManifest; if(!m||!m[name]) return 0;
  var n=0, t=(m._titles&&m._titles[name])?Object.keys(m._titles[name]).length:0;
  Object.keys(m[name]).forEach(function(ch){ n+=(m[name][ch]||[]).length; });
  return n*0.168+t*0.012;
}
function audNarratedBooks(){
  var m=S.voiceManifest; if(!m) return [];
  return BOOKS.filter(function(b){ return !b.user&&m[b.name]; }).map(function(b){ return b.name; });
}
function audSave(){ Store.set('strata:dlhave',AUD.have); Store.set('strata:dlwant',AUD.want); }
var audSaveSoon=(function(){ var t=null; return function(){ if(t) return; t=setTimeout(function(){ t=null; audSave(); },1500); }; })();
function audBuildQueue(){
  var q=[], seen={};
  Object.keys(AUD.want).forEach(function(name){
    if(!audAllowed(name)) return;
    audBookFiles(name).forEach(function(f){
      var p=audPlain(f);
      if(AUD.have[p]===f||seen[p]||AUD.inflight[p]||(AUD.tries[p]||0)>=3) return;
      seen[p]=1; q.push({f:f, p:p, book:name});
    });
  });
  return q;
}
function audResume(){
  if(!AUD.on||!S.voiceManifest) return;
  AUD.queue=audBuildQueue();
  AUD.total=AUD.queue.length+AUD.done;
  if(!AUD.queue.length){ AUD.done=0; AUD.total=0; audRedraw(); return; }
  if(navigator.onLine===false){ AUD.msg='Waiting for a connection.'; audRedraw(); return; }
  AUD.msg='';
  while(AUD.active<AUD_WORKERS&&AUD.queue.length) audWork();
  audRedraw();
}
function audWork(){
  var it=AUD.queue.shift(); if(!it) return;
  if(AUD.have[it.p]===it.f||AUD.inflight[it.p]){ if(AUD.queue.length) audWork(); return; }
  var base=(S.voiceManifest&&S.voiceManifest._base)||VOICE_CDN;
  AUD.active++; AUD.inflight[it.p]=1;
  Promise.resolve(Narrator.download({url:base+it.f, name:it.p})).then(function(){
    AUD.have[it.p]=it.f; AUD.done++; AUD.errs=0; delete AUD.tries[it.p]; audSaveSoon();
  }).catch(function(e){
    /* one missing file must not stop the rest: each file gets three tries,
       then is left out (and tried again on a later launch) */
    AUD.tries[it.p]=(AUD.tries[it.p]||0)+1;
    if(navigator.onLine===false||/offline|network|connection|timed out/i.test(String(e&&e.message||''))) AUD.errs++;
    if(AUD.tries[it.p]<3) AUD.queue.push(it); else AUD.skipped=(AUD.skipped||0)+1;
  }).then(function(){
    AUD.active--; delete AUD.inflight[it.p];
    if(AUD.errs>=6){
      AUD.queue=[]; AUD.msg='Paused: the connection dropped. It carries on by itself when you are back online.';
      audRedraw(); return;
    }
    if(AUD.queue.length&&!AUD.stopped) setTimeout(audWork, AUD.errs?2000:0);
    else if(!AUD.active){
      audSave(); AUD.done=0; AUD.total=0;
      if(AUD.skipped) AUD.msg=AUD.skipped+' passage'+(AUD.skipped===1?'':'s')+' could not be downloaded just now; they will be tried again later.';
      AUD.skipped=0; audRedraw(true);
    }
    audRedraw();
  });
}
function audWant(name){ AUD.want[name]=1; AUD.stopped=false; audSave(); audResume(); }
function audWantAll(){ audNarratedBooks().forEach(function(n){ if(audAllowed(n)) AUD.want[n]=1; }); AUD.stopped=false; audSave(); audResume(); }
function audStop(){
  AUD.stopped=true; AUD.queue=[];
  /* only the books still coming are let go; finished ones stay wanted, so a
     re-recorded passage in them is still fetched later */
  Object.keys(AUD.want).forEach(function(n){ var st=audBookState(n); if(!(st.total&&st.have===st.total)) delete AUD.want[n]; });
  audSave(); AUD.msg='Stopped. What has downloaded stays.'; audRedraw(true); }
function audRemove(names){
  var drop=[];
  names.forEach(function(name){
    delete AUD.want[name];
    audBookFiles(name).forEach(function(f){ var p=audPlain(f); if(AUD.have[p]){ delete AUD.have[p]; drop.push(p); } });
  });
  AUD.queue=AUD.queue.filter(function(it){ return names.indexOf(it.book)<0; });
  audSave();
  if(drop.length) try{ Promise.resolve(Narrator.removeAudio({names:drop})).catch(function(){}); }catch(e){}
  audRedraw(true);
}
function audRemoveAll(){
  AUD.want={}; AUD.have={}; AUD.queue=[]; audSave();
  try{ Promise.resolve(Narrator.removeAudio({all:true})).catch(function(){}); }catch(e){}
  audRedraw(true);
}
function audKeptMB(){
  var mb=0;
  audNarratedBooks().forEach(function(n){ var s=audBookState(n); if(s.total) mb+=audBookMB(n)*s.have/s.total; });
  return mb;
}
function audSizeText(mb){ return mb>=1000?(mb/1000).toFixed(1)+' GB':Math.max(1,Math.round(mb))+' MB'; }
/* a chapter that would need the network while there is none plays in the
   device's voice instead of silence */
function audPlayable(urls){
  if(navigator.onLine!==false) return true;
  return urls.every(function(u){ return /^file:/.test(u)||/^capacitor:/.test(u); });
}
var audRedraw=(function(){ var t=null; return function(now){
  /* the Downloads board's caption on the shelf: only when something finishes,
     so the shelf is not redrawn under a thumb that is scrolling it */
  if(now&&!AUD.sheet&&S.tab==='library'&&S.book===null&&S.reading===null){ S.keepScroll=true; render(); return; }
  if(!AUD.sheet&&S.tab!=='about') return;
  if(now){ if(t){ clearTimeout(t); t=null; } audDraw(); return; }
  if(t) return; t=setTimeout(function(){ t=null; audDraw(); },500);
}; })();
function audDraw(){
  if(AUD.sheet) drawAudioSheet();
  else if(S.tab==='about'){ S.keepScroll=true; render(); }
}
/* Settings: one line and a door */
function audCard(){
  if(!AUD.on) return '';
  var books=audNarratedBooks(), full=0;
  books.forEach(function(n){ var s=audBookState(n); if(s.total&&s.have===s.total) full++; });
  var busy=AUD.queue.length||AUD.active;
  return '<div class="setline"><span>On this phone, for offline</span><span>'+
    (busy?esc(audProgressText()):full?full+' of '+books.length+' books · '+audSizeText(audKeptMB()):'None yet')+'</span></div>'+
    '<button class="btn sec" data-a="dlopen" style="margin-top:10px">Narration on this phone</button>';
}
function audProgressText(){
  var t=AUD.total||1, d=Math.min(AUD.done,t);
  return 'Downloading '+Math.round(d/t*100)+'%';
}
function openAudioSheet(){
  AUD.sheet=true; closePop&&closePop(); S.sheet=null; PAY.open=null;
  drawAudioSheet();
  if(navigator.onLine!==false&&Narrator.freeSpace)
    Promise.resolve(Narrator.freeSpace()).then(function(r){ AUD.free=(r&&r.bytes)||-1; if(AUD.sheet) drawAudioSheet(); }).catch(function(){});
}
function drawAudioSheet(){
  if(!AUD.sheet||!sheet) return;
  var books=audNarratedBooks(), allMB=0, needMB=0;
  books.forEach(function(n){ var mb=audBookMB(n); allMB+=mb;
    var s=audBookState(n); if(audAllowed(n)&&s.total) needMB+=mb*(1-s.have/s.total); });
  var busy=AUD.queue.length||AUD.active;
  var h='<div class="grabzone"><div class="grab"></div></div><div class="dlsheet" role="dialog" aria-label="Narration on this phone">';
  h+='<div class="pwhead"><div class="pwkick">Listen anywhere</div><h2>Narration on this phone</h2>'+
     '<p>Keep the narrated books on this phone to listen with no connection: in church, on a plane, out of signal. '+
     'Best on Wi-Fi; the whole Bible is about '+audSizeText(allMB)+'.</p></div>';
  if(busy){
    var t=AUD.total||1, pc=Math.round(Math.min(AUD.done,t)/t*100);
    h+='<div class="dlbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pc+'"><i style="width:'+pc+'%"></i></div>'+
       '<p class="dlnote">'+esc(audProgressText())+' · you can keep reading while it works</p>'+
       '<button class="btn gh dlwide" data-a="dlstop">Stop downloading</button>';
  } else if(hasAudio()&&needMB>0){
    h+='<button class="btn dlwide" data-a="dlall">Download everything ('+esc(audSizeText(needMB))+')</button>';
  }
  if(AUD.msg) h+='<p class="dlnote" role="status">'+esc(AUD.msg)+'</p>';
  if(AUD.free>0&&needMB*1e6>AUD.free*0.9) h+='<p class="dlnote dlwarn">This phone has about '+esc(audSizeText(AUD.free/1e6))+' free. Choose a few books instead.</p>';
  if(!hasAudio()) h+='<p class="dlnote">Psalms and John are free to keep. The rest come with the narrated Bible, Founders Lifetime or Study Yearly.</p>';
  h+='<div class="dllist">';
  books.forEach(function(n){
    var s=audBookState(n), ok=audAllowed(n), full=s.total&&s.have===s.total, mb=audBookMB(n);
    var queued=!!AUD.want[n]&&!full;
    var btn=!ok?'<button class="dlbtn" data-a="pwopen" data-pwopen="downloads" aria-label="'+esc(n)+': unlock">Unlock</button>'
      :full?'<button class="dlbtn on" data-a="dlremove" data-bk="'+esc(n)+'" aria-label="Remove '+esc(n)+' from this phone">✓ Kept</button>'
      :queued?'<span class="dlbtn wait">'+Math.round(s.have/(s.total||1)*100)+'%</span>'
      :'<button class="dlbtn" data-a="dlbook" data-bk="'+esc(n)+'">Download</button>';
    h+='<div class="dlrow"><span class="dlname">'+esc(n)+'</span><span class="dlsize">'+esc(audSizeText(mb))+'</span>'+btn+'</div>';
  });
  h+='</div>';
  if(Object.keys(AUD.have).length) h+='<button class="btn gh dlwide" data-a="dlremoveall">Remove all narration from this phone</button>';
  h+='<button class="btn gh pwclose" data-a="dlclose">Done</button></div>';
  sheet.innerHTML=h;
  if(sheet.style){ sheet.style.transition=''; sheet.style.transform=''; }
  placeOverlays();
  sheet.classList.add('on'); scrim.classList.add('on');
  try{ initSheetDrag(); }catch(e){}
}
/* after the narration is bought: the offer to keep it, once */
function audOffer(){
  if(!AUD.on||AUD.offered||!hasAudio()) return;
  /* bought from the paywall: wait until it is put away, then offer */
  if(PAY.open||WEL.open){ AUD.offerWaiting=true; return; }
  AUD.offered=true; AUD.offerWaiting=false; Store.set('strata:dloffered',Date.now());
  setTimeout(function(){ if(!PAY.open&&!WEL.open) openAudioSheet(); },600);
}

/* The chapters to hand the native player at once: this one, and while
   "continue" is on, the recorded chapters after it (up to about six hours),
   because with the screen locked the page cannot start the next one itself. */
function recordedSpan(bi, ch){
  var out=[{b:bi, c:ch}];
  if(!Narrator||!S.autoNext) return out;
  var cur=out[0], clips=(recordedFor(BK(bi).name, ch)||[]).length;
  while(out.length<60 && clips<600){
    var nx=nextChapterFrom(cur.b, cur.c); if(!nx) break;
    var bk=BK(nx.b); if(!bk) break;
    var l=recordedFor(bk.name, nx.c); if(!l) break;
    /* with no connection, only what is on the phone can be queued: a remote
       clip would fail, the player would skip it, and chapters would be marked
       read without a word heard */
    if(navigator.onLine===false&&!audChapterLocal(bk, nx.c, l)) break;
    out.push(nx); clips+=l.length; cur=nx;
  }
  return out;
}
function playRecorded(bookName, ch, fromVerse){
  var list=recordedFor(bookName, ch);
  if(!list) return false;
  var bi=S.reading, urls=[], meta=[], segs=[];
  recordedSpan(bi, ch).forEach(function(sc){
    var name=BK(sc.b).name, l=(sc.b===bi&&sc.c===ch)?list:(recordedFor(name, sc.c)||[]);
    var ps=recordedPassages(sc.b, sc.c, l);
    segs.push({b:sc.b, c:sc.c, start:urls.length, list:l});
    ps.forEach(function(p){ urls.push(p.file); meta.push({title:name+' '+sc.c, album:'Sixteen Eleven Bible'}); });
  });
  if(!audPlayable(urls.slice(0, segs.length>1?segs[1].start:urls.length))) return false;
  S.passages=recordedPassages(bi, ch, list);
  var v=Math.max(1,fromVerse||1), at=0, frac=0;
  S.passages.forEach(function(p,k){ if(!p.title&&p.from<=v&&v<=p.to){ at=k;
    (p.marks||[]).forEach(function(m){ if(m[0]===v) frac=m[1]; }); } });
  /* from the top of the chapter, the title comes first */
  if(v===1&&S.passages[0]&&S.passages[0].title){ at=0; frac=0; }
  S.speakAt=at; S.speakVerse=v;
  S.speaking=true;
  function segOf(i){ for(var k=segs.length-1;k>0;k--) if(i>=segs[k].start) return segs[k]; return segs[0]; }
  /* the native player went on into the next chapter by itself */
  function movedOn(sg){
    if(S.places) delete S.places[placeKey(S.speakB,S.speakC)];
    markRead(S.speakB,S.speakC,true);
    var following=(S.reading===S.speakB&&S.ch===S.speakC);
    S.speakB=sg.b; S.speakC=sg.c;
    S.passages=recordedPassages(sg.b, sg.c, sg.list);
    /* the page turns with it, unless you had gone to read something else */
    if(following){ S.book=sg.b; S.reading=sg.b; S.ch=sg.c; S.speakVerse=0; render(); }
  }
  Speech.onTick(function(i){
    var sg=segOf(i);
    if(sg.b!==S.speakB||sg.c!==S.speakC) movedOn(sg);
    var li=i-sg.start;
    S.speakAt=li; Glide.note(li,0);
    if((i!==at||!frac)&&S.passages[li]) S.speakVerse=S.passages[li].title?1:S.passages[li].from;
    paintSpeaking(); updatePlayerPlace(); });
  Speech.onProgress(function(i,f){
    var sg=segOf(i), p=S.passages[i-sg.start]; if(!p||p.title||sg.c!==S.speakC||sg.b!==S.speakB) return;
    Glide.note(i-sg.start,f);
    var nv=verseAt(p,f);
    if(nv!==S.speakVerse){ S.speakVerse=nv; paintSpeaking(); updatePlayerPlace(); } });
  Speech.onDone(chapterFinished);
  /* paused or played from the lock screen: the pill follows */
  Speech.onState(function(){ renderSpeakBar(); paintSpeaking(); });
  function go(){ Speech.playFiles(urls, at, frac, meta); renderSpeakBar(); paintSpeaking(); }
  /* Every chapter read from the top opens with its book and chapter. Until
     the recorded voice has its own title clips, the device voice says the
     title and the recording follows straight after. */
  var said=false;
  if(v===1&&!recordedTitle(bi, ch)&&typeof window!=='undefined'&&window.speechSynthesis&&
     typeof SpeechSynthesisUtterance!=='undefined'){
    try{
      var u=new SpeechSynthesisUtterance(sayFix(spokenTitle(BK(bi), ch)));
      u.rate=Speech.getRate(); if(Speech.getVoice()) u.voice=Speech.getVoice();
      var fin=function(){ if(said) return; said=true; if(S.speaking) go(); };
      u.onend=fin; u.onerror=fin;
      window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
      setTimeout(fin, 9000);          /* a voice that never reports its end */
      renderSpeakBar(); paintSpeaking();
      return true;
    }catch(e){ said=true; }
  }
  go();
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

/* ---------- the plates ----------
   Fourteen maps, each era with its own. Four are churchmaps.info's, released
   by their author entirely into the public domain, rebuilt here: every label
   checked letter by letter against every other and against every town dot,
   town names placed round their own dots, King James spellings, and the
   handful of misplaced towns put where they stood. Ten were drawn for this
   app on the same relief, their places taken from OpenBible.info's
   geocoding (CC BY 4.0) through each relief's fitted projection.

   Each is an SVG of labels and lines over one baked picture of the relief,
   fetched only when opened. pins.json says where each of the app's places
   falls on each plate: the cartographer's own dot where there is one, the
   projected coordinates otherwise. A plate opened from a verse marks the
   places the verse names. */
/* the maps are separate files, which the one-file build cannot carry */
var PLATES_AVAILABLE=true;
/* cover art lives in separate files, which the one-file build cannot carry */
var COVER_ART=true;
var PLATES = [
  {id:"palestine_new_testament", name:"Palestine in the New Testament",
   eras:["roman"], src:"cm", free:true,
   note:"The land as Jesus and the apostles knew it.",
   has:"fffffffffffff07b80000000000"},
  {id:"table_of_nations", name:"The table of nations",
   eras:["primeval"], src:"se",
   note:"The sons of Noah, and the lands of their families.",
   has:"fffffffffffffffffffffbffffd"},
  {id:"ancient_world_patriarchs", name:"The ancient world of the patriarchs",
   eras:["patriarchs", "primeval"], src:"cm",
   note:"From Ur to Canaan to Egypt, 2000 – 1600 BC.",
   has:"fffffffffffffffffffd788fff8"},
  {id:"israel_in_egypt", name:"Israel in Egypt",
   eras:["egypt"], src:"se",
   note:"Joseph, Jacob’s family in Goshen, and the night they went out.",
   has:"ffffffff98000e8000017800000"},
  {id:"exodus_and_canaan_conquest", name:"The Exodus and the conquest of Canaan",
   eras:["wilderness", "egypt"], src:"cm",
   note:"The route out of Egypt and the taking of the land.",
   has:"fffffffffffffffb80017800000"},
  {id:"conquest_of_canaan", name:"The conquest of Canaan",
   eras:["conquest"], src:"se",
   note:"Jericho, Ai, and Joshua’s southern and northern campaigns.",
   has:"fffffffffffff07a00000000000"},
  {id:"twelve_tribes", name:"The twelve tribes and the judges",
   eras:["judges", "conquest"], src:"se",
   note:"Each tribe’s lot, Shiloh, and Dan’s move north.",
   has:"fffffffffffff07a80000000000"},
  {id:"united_kingdom", name:"The kingdom of David and Solomon",
   eras:["united"], src:"se",
   note:"Israel at its widest, and the peoples made to serve it.",
   has:"fffffffffffffefbe0000000008"},
  {id:"divided_kingdom", name:"Israel and Judah, the divided kingdom",
   eras:["divided"], src:"se",
   note:"The two kingdoms and their neighbours, 930 – 722 BC.",
   has:"fffffffffffff8fb80000000000"},
  {id:"assyrian_empire", name:"The Assyrian Empire",
   eras:["assyria", "divided"], src:"se",
   note:"Nineveh’s empire, and Israel carried away.",
   has:"fffffffffffffffffffdf8039e8"},
  {id:"babylonian_empire", name:"The Babylonian Empire",
   eras:["babylon"], src:"se",
   note:"Nebuchadnezzar’s empire, and Judah’s exile.",
   has:"fffffffffffffffffffdf8039e8"},
  {id:"persian_empire", name:"The Persian Empire",
   eras:["persia"], src:"se",
   note:"From India unto Ethiopia, and the return to Jerusalem.",
   has:"fffffffffffffffffffffbffffd"},
  {id:"alexander_four_kingdoms", name:"Alexander and the four kingdoms",
   eras:["greek"], src:"se",
   note:"Alexander’s march, and the empire divided four ways.",
   has:"fffffffffffffffffffffbffffd"},
  {id:"paul_journeys", name:"Paul's journeys",
   eras:["roman"], src:"cm",
   note:"Every voyage, across the Roman world.",
   has:"fffffffffffffffbe3017ffffff"}
];
function plateById(id){
  return PLATES.filter(function(p){ return p.id===id; })[0]||null;
}
function plateFree(id){ var p=plateById(id); return !!(p&&p.free); }
function platesForEra(era){
  return PLATES.filter(function(p){ return p.eras.indexOf(era)>-1; });
}
/* has: one bit per place, in the order of META.maps.places, as hex */
function plateHas(pl, name){
  var M=META&&META.maps, i=-1;
  if(!pl||!pl.has||!M||!M.places) return false;
  for(var k=0;k<M.places.length;k++) if(M.places[k].n===name){ i=k; break; }
  if(i<0) return false;
  var c=parseInt(pl.has.charAt(i>>2),16);
  return !!(c&(8>>(i&3)));
}
/* the plate for some places in a verse of some era: the era's own plate when
   it shows them, else whichever plate shows the most of them */
function plateForPlaces(era, names){
  var own=platesForEra(era||'roman'), best=null, bs=-1;
  PLATES.forEach(function(p){
    var n=names.filter(function(x){ return plateHas(p,x); }).length;
    var sc=n*10+(own.indexOf(p)>-1?5-own.indexOf(p):0);
    if(sc>bs){ bs=sc; best=p; }
  });
  return best||own[0]||PLATES[0];
}
function plateUrl(f){
  try{ return new URL('assets/maps/'+f, document.baseURI).href; }
  catch(e){ return 'assets/maps/'+f; }
}
var PLATE_PINS=null, PLATE_PINS_WAIT=null;
function loadPins(){
  if(PLATE_PINS) return Promise.resolve(PLATE_PINS);
  if(PLATE_PINS_WAIT) return PLATE_PINS_WAIT;
  PLATE_PINS_WAIT=fetch(plateUrl('pins.json')).then(function(r){
    if(!r.ok) throw new Error('pins '+r.status); return r.json();
  }).then(function(j){ PLATE_PINS=j; PLATE_PINS_WAIT=null; return j; })
    .catch(function(){ PLATE_PINS={}; PLATE_PINS_WAIT=null; return PLATE_PINS; });
  return PLATE_PINS_WAIT;
}
function loadPlate(id){
  if(S.plateCache[id]!==undefined) return Promise.resolve(S.plateCache[id]);
  if(S.plateWait[id]) return S.plateWait[id];
  S.plateWait[id]=Promise.all([fetch(plateUrl(id+'.svg')).then(function(r){
    if(!r.ok) throw new Error('plate '+r.status);
    return r.text();
  }), loadPins()]).then(function(t){
    S.plateCache[id]=t[0]; delete S.plateWait[id]; return t[0];
  }).catch(function(e){
    S.plateCache[id]=''; delete S.plateWait[id]; return '';
  });
  return S.plateWait[id];
}
/* the marks for the places a verse names, drawn into the plate itself so they
   move and scale with it; kept the same size on screen at every zoom */
function platePinsSVG(id, z){
  var names=S.platePins||[], P=PLATE_PINS&&PLATE_PINS[id];
  if(!names.length||!P) return '';
  var u=P.vb[2]/(100*(z||1)), out='';
  names.forEach(function(n){
    var q=P.pins[n]; if(!q) return;
    var x=q[0], y=q[1], f=function(v){ return (+v).toFixed(1); };
    out+='<g class="pin" data-pin="'+esc(n)+'">'+
      '<circle class="pinring" cx="'+f(x)+'" cy="'+f(y)+'" r="'+f(u*1.5)+'"/>'+
      '<path class="pinhead" d="M'+f(x)+','+f(y)+' C'+f(x-u*.25)+','+f(y-u*1.3)+' '+f(x-u*1.45)+','+f(y-u*2.1)+' '+
        f(x-u*1.45)+','+f(y-u*3.25)+' A'+f(u*1.45)+','+f(u*1.45)+' 0 1 1 '+f(x+u*1.45)+','+f(y-u*3.25)+
        ' C'+f(x+u*1.45)+','+f(y-u*2.1)+' '+f(x+u*.25)+','+f(y-u*1.3)+' '+f(x)+','+f(y)+'Z" style="stroke-width:'+f(u*.28)+'"/>'+
      '<circle class="pineye" cx="'+f(x)+'" cy="'+f(y-u*3.25)+'" r="'+f(u*.55)+'"/>'+
      /* where the plate has no name of its own for the place, the pin carries one */
      (q[2]?'':'<text class="pinname" x="'+f(x+u*1.9)+'" y="'+f(y-u*2.6)+'" style="font-size:'+f(u*2.3)+
        'px;stroke-width:'+f(u*.55)+'">'+esc(n)+'</text>')+
      '</g>';
  });
  return out?'<g class="pins">'+out+'</g>':'';
}
/* after a redraw: put the marked place, or the middle the reader was looking
   at before a zoom, back in the middle of the window */
function plateKeepCenter(){
  var fr=document.getElementById('plateframe');
  if(fr&&fr.scrollWidth) S.plateCenter=[(fr.scrollLeft+fr.clientWidth/2)/fr.scrollWidth,
                                       (fr.scrollTop+fr.clientHeight/2)/fr.scrollHeight];
}
function focusPlate(){
  if(!S.plate) return;
  var fr=document.getElementById('plateframe');
  if(!fr) return;
  if(S.plateFocus){
    var pins=fr.querySelectorAll('.pin');
    if(!pins.length){ S.plateFocus=false; return; }
    var fb=fr.getBoundingClientRect(), x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
    for(var i=0;i<pins.length;i++){
      var r=pins[i].getBoundingClientRect();
      x0=Math.min(x0,r.left); y0=Math.min(y0,r.top); x1=Math.max(x1,r.right); y1=Math.max(y1,r.bottom);
    }
    fr.scrollLeft+=((x0+x1)/2-fb.left)-fr.clientWidth/2;
    fr.scrollTop+=((y0+y1)/2-fb.top)-fr.clientHeight/2;
    S.plateFocus=false; S.plateCenter=null;
  } else if(S.plateCenter){
    var c=S.plateCenter;
    fr.scrollLeft=c[0]*fr.scrollWidth-fr.clientWidth/2;
    fr.scrollTop=c[1]*fr.scrollHeight-fr.clientHeight/2;
    S.plateCenter=null;
  }
}
function vPlate(){
  var pl=plateById(S.plate);
  if(!pl){ S.plate=null; return vAtlas(); }
  var h='<div class="libwrap libplain mapfull">';
  h+='<button class="back" style="color:var(--blue)" data-a="closeplate">&larr; Atlas</button>';
  h+='<div class="libhead"><h2>'+esc(pl.name)+'</h2><p>'+esc(pl.note)+'</p></div>';
  if(!PLATES_AVAILABLE){
    return h+'<div class="plateload">The maps are separate files, so they '+
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
    var marked=(S.platePins||[]).filter(function(n){
      return PLATE_PINS&&PLATE_PINS[pl.id]&&PLATE_PINS[pl.id].pins[n]; });
    if(marked.length){
      h+='<div class="platemarks"><span class="pmk" aria-hidden="true"></span>'+
         esc(marked.join(' \u00b7 '))+
         '<button data-a="clearpins" aria-label="Clear the marks">\u00d7</button></div>';
    }
    h+='<div class="platebar">'+
       '<button data-platezoom="out" aria-disabled="'+(z<=1)+'">\u2212</button>'+
       '<span>'+(z*100)+'%</span>'+
       '<button data-platezoom="in" aria-disabled="'+(z>=6)+'">+</button>'+
       '<button class="fit" data-platezoom="fit">Fit</button>'+
       '</div>';
    var svg=cached, pins=platePinsSVG(pl.id, z);
    if(pins){ var at=svg.lastIndexOf('</svg>'); if(at>-1) svg=svg.slice(0,at)+pins+svg.slice(at); }
    h+='<div class="plate'+(z>1?' zoomed':'')+'" id="plateframe"><div class="platein" style="width:'+
       (z*100)+'%">'+svg+'</div></div>';
    h+='<p class="vnote" style="margin:12px 2px 0">Use \u2212 and + to zoom, then drag to move. '+
       (pl.src==='cm'?'Public domain, from churchmaps.info, corrected for this app.':
        'Drawn for this app on churchmaps.info\u2019s relief (public domain); '+
        'places from OpenBible.info (CC BY 4.0).')+'</p>';
  }
  return h+'</div>';
}

function eraRank(k){
  for(var i=0;i<META.eras.length;i++) if(META.eras[i].key===k) return i;
  return 99;
}
function atlasCover(){
  return specialCover({kind:'atlas', attr:'data-a="openatlas"', title:'Atlas',
    caption:'13 eras', emblem:EMBLEM.compass});
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
  h += '<div class="lab" style="margin-top:22px;color:#D8B25E">All the maps</div>';
  h += '<p class="vnote" style="margin:0 0 10px 2px">Fourteen maps, from the table of nations to Paul. ' +
       'Four are from churchmaps.info, corrected; ten were drawn for this app on the same reliefs.</p>';
  h += PLATES.slice().sort(function(a, b){
    return eraRank(a.eras[0]) - eraRank(b.eras[0]); }).map(function(x){
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
var LEX={shard:{}, wait:{}, strongs:null, vocab:null};
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
/* The dictionary is every word, not only the Bible's: Webster's 1913 for the
   older senses the King James uses, WordNet for the plain modern meaning,
   split by the first two letters so a lookup fetches one small file. */
function lexKey(w){ w=String(w||''); return w.length>1?w.slice(0,2):w+'_'; }
function lexShard(key){
  if(LEX.shard[key]!==undefined) return Promise.resolve(LEX.shard[key]);
  return lexFetch('d-'+key+'.json').then(function(d){ LEX.shard[key]=d||{}; return LEX.shard[key]; });
}
function lexExtras(){
  return LEX.strongs?Promise.resolve(LEX.strongs):lexFetch('strongs.json').then(function(d){ LEX.strongs=d; return d; });
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
  var keys=[];
  cands.forEach(function(c){ var k=lexKey(c); if(keys.indexOf(k)<0) keys.push(k); });
  return Promise.all(keys.map(lexShard).concat([lexExtras()])).then(function(){
    var forms=[], seen={}, syn=[];
    cands.forEach(function(c){
      var e=(LEX.shard[lexKey(c)]||{})[c];
      if(!e||seen[c]) return;
      seen[c]=1;
      forms.push({head:c, entries:e.w||[], modern:e.n||[]});
      (e.y||[]).forEach(function(x){ if(x!==c&&syn.indexOf(x)<0) syn.push(x); });
    });
    var strongs=[], sseen={};
    cands.forEach(function(c){
      ((LEX.strongs&&LEX.strongs.i[c])||[]).forEach(function(k){ if(!sseen[k]){ sseen[k]=1; strongs.push(k); } });
    });
    return {word:String(word).toLowerCase(), forms:forms, syn:syn.slice(0,28), strongs:strongs.slice(0,16)};
  });
}
/* words beginning with what has been typed: the Bible's own first, the
   commonest of them leading, then the rest of the dictionary */
function lexSuggest(q){
  var sh=LEX.shard[lexKey(q)];
  if(sh===undefined){ lexShard(lexKey(q)).then(function(){ if(S.wordsOpen&&!S.wsel){ S.keepScroll=true; render();
      var e=document.getElementById('wq'); if(e){ e.focus(); try{ e.setSelectionRange(e.value.length,e.value.length); }catch(x){} } } });
    return null; }
  var voc=lexVocab(), bible=[], other=[], seen={};
  Object.keys(sh||{}).concat(LEX.words||[]).forEach(function(w){
    if(seen[w]||w.indexOf(q)!==0) return; seen[w]=1;
    (voc[w]?bible:other).push(w);
  });
  bible.sort(function(a,b){ return (voc[b]-voc[a])||(a<b?-1:1); });
  /* words with a modern meaning are everyday words; Webster-only ones are
     mostly archaic, so they come last */
  var modern=function(w){ var e=(sh||{})[w]; return e&&e.n?0:1; };
  other.sort(function(a,b){ return (modern(a)-modern(b))||(a.length-b.length)||(a<b?-1:1); });
  /* the word itself, then the Bible's commonest, then everyday English */
  var list=(seen[q]?[q]:[]).concat(bible.slice(0,14).filter(function(w){ return w!==q; }));
  return list.concat(other.filter(function(w){ return w!==q; }).slice(0,Math.max(10,24-list.length)));
}
/* Downloads: the narrated books kept on this phone for listening offline.
   Always on the shelf. In the store apps, with the narration owned it opens
   the download manager; without it, the "Listen offline" paywall, which also
   offers the two free books. The website streams and cannot keep files, so
   there it says where downloads are. It used to show only once the app's
   audio folder had answered, and as that answer comes after the first
   drawing of the shelf, it could be missing until something redrew it. */
function downloadsCover(){
  if(!AUD.on) return specialCover({kind:'downloads', attr:'data-a="dlshelf"', title:'Downloads',
    label:'Downloads: narration kept on this phone', caption:'Listen offline', emblem:EMBLEM.download});
  var books=audNarratedBooks(), full=0;
  books.forEach(function(n){ var st=audBookState(n); if(st.total&&st.have===st.total) full++; });
  var busy=AUD.queue.length||AUD.active;
  return specialCover({kind:'downloads', attr:'data-a="dlshelf"', title:'Downloads',
    label:'Downloads: narration kept on this phone',
    caption:busy?audProgressText():full?full+' of '+books.length+' kept':'Listen offline', emblem:EMBLEM.download});
}
function openDownloads(){
  if(!AUD.on) return openDownloadsInfo();
  if(hasAudio()) openAudioSheet();
  else openPaywall('downloads');
}
/* where there is nowhere to keep files: the website, or the app before its
   audio folder is ready */
function openDownloadsInfo(){
  if(!sheet) return;
  S.sheet=null; closePop&&closePop();
  var nat=payNative();
  sheet.innerHTML='<div class="grabzone"><div class="grab"></div></div><div class="dlsheet" role="dialog" aria-label="Downloads">'+
    '<div class="pwhead"><div class="pwkick">Listen anywhere</div><h2>Downloads</h2>'+
    (nat?'<p>Getting the narration folder ready on this phone. Try again in a moment.</p>'
        :'<p>Keeping the narration on your phone, to listen with no connection, is in the Sixteen Eleven app for iPhone and Android. '+
         'Here on the web the narration plays as it streams.</p>')+'</div>'+
    '<button class="btn dlwide" data-a="dlclose">'+(nat?'OK':'Got it')+'</button></div>';
  placeOverlays(); sheet.classList.add('on'); scrim.classList.add('on'); initSheetDrag();
  if(nat&&!AUD.dir) try{ audInit(); }catch(e){}
}
function wordsCover(){
  return specialCover({kind:'words', attr:'data-a="openwords"', title:'Word study',
    caption:'Dictionary', emblem:EMBLEM.letters});
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
    if(q.length>=1){
      list=lexSuggest(q);
      if(list===null){ return h+'<div class="empty"><span class="spin"></span> Looking\u2026</div></div>'; }
    } else list=['charity','conversation','ruddy','meet','prevent','quick','peradventure','wist','suffer','bowels','raiment','firmament'];
    h+='<div class="lab" style="margin:6px 0 10px">'+(q.length>=1?'Words':'Try one')+'</div>';
    h+='<div class="wsugg">'+list.map(function(w){
      return '<button class="chip" data-word="'+w+'">'+esc(w)+(voc[w]?'<span class="wcount" title="times in the King James">'+voc[w]+'</span>':'')+'</button>';
    }).join('')+(q.length>=1&&!list.length?'<p class="vnote">No word in the dictionary begins with “'+esc(q)+'”. '+
      'Press return to look it up anyway.</p>':'')+'</div>';
    if(q.length>=1) h+='<p class="vnote">Numbers are how often a word comes in the King James Bible.</p>';
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
  /* today's meaning first, then the older senses the King James was made with */
  var modern=r.forms.filter(function(f){ return f.modern&&f.modern.length; });
  if(modern.length){
    h+='<div class="wsec"><div class="lab">Meaning today</div>';
    modern.slice(0,2).forEach(function(f){
      h+='<div class="wentry"><div class="wform">'+esc(f.head)+'</div>'+
        f.modern.slice(0,S.wmore?10:5).map(function(m){
          return '<p class="wdef">'+(m[0]?'<i>'+esc(m[0])+'</i> ':'')+esc(m[1])+
            (m[2]?' <span class="wex">\u201c'+esc(m[2])+'\u201d</span>':'')+'</p>'; }).join('')+'</div>';
    });
    h+='</div>';
  }
  var etyms=[];
  r.forms.forEach(function(f){ (f.entries||[]).forEach(function(e){ if(e.e&&etyms.indexOf(e.e)<0) etyms.push(e.e); }); });
  if(etyms.length) h+='<div class="wsec"><div class="lab">Where it comes from</div>'+
    etyms.slice(0,3).map(function(t){ return '<p class="wetym">'+esc(t)+'</p>'; }).join('')+'</div>';
  var old=r.forms.filter(function(f){ return f.entries&&f.entries.length; });
  if(old.length){
    h+='<div class="wsec"><div class="lab">Dictionary · Webster’s 1913</div>';
    old.slice(0,3).forEach(function(f){
      f.entries.slice(0,3).forEach(function(e){
        h+='<div class="wentry"><div class="wform">'+esc(f.head)+(e.p?' <i>'+esc(e.p)+'</i>':'')+'</div>'+
          (e.d||[]).slice(0,S.wmore?10:4).map(function(d){ return '<p class="wdef">'+esc(d)+'</p>'; }).join('')+'</div>';
      });
    });
    h+='</div>';
  }
  if(!S.wmore&&r.forms.some(function(f){ return (f.modern||[]).length>5||(f.entries||[]).some(function(e){ return (e.d||[]).length>4; }); }))
    h+='<button class="chip" data-a="wmore">Every sense</button>';
  if(r.syn.length) h+='<div class="wsec"><div class="lab">Thesaurus</div><div class="wsugg">'+
    r.syn.map(function(x){ return '<button class="chip" data-word="'+esc(x)+'">'+esc(x)+'</button>'; }).join('')+'</div></div>';
  if(r.strongs.length) h+='<div class="wsec"><div class="lab">Hebrew and Greek · Strong’s</div>'+
    '<p class="vnote">The words the King James translates as “'+esc(w)+'”. Tap one to open it.</p>'+
    r.strongs.map(function(k){ return strongsRow(k, S.wopen===k); }).join('')+'</div>';
  if(!r.forms.length&&!r.syn.length&&!r.strongs.length&&!g)
    h+='<div class="empty">Nothing found for “'+esc(w)+'”.</div>';
  h+='<p class="wcredit">Webster’s Revised Unabridged Dictionary (1913) and Strong’s Hebrew and Greek '+
    'dictionaries are in the public domain; Strong’s in the Open Scriptures edition (CC BY-SA). '+
    'Today’s meanings and synonyms from Princeton WordNet 3.0 (WordNet 3.0 \u00a9 2006 Princeton University).</p>';
  return h+'</div>';
}

function vMyBooksPage(){
  return '<div class="libwrap libplain">'+
    '<button class="back" style="color:var(--blue)" data-a="closemine">&larr; Library</button>'+
    '<div class="libhead"><h2>Your own reading</h2>'+
    '<p>Your own books, each opened the way it was made: a PDF as its pages, an EPUB as its '+
    'chapters, a text file as written. Kept apart from scripture, and only on this device.</p></div>'+
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
     '<input type="file" id="bookfile" accept=".pdf,.epub,.txt,application/pdf,application/epub+zip,text/plain" '+
     'style="display:none"></label>';
  h+='<p class="vnote" style="margin:10px 2px 16px">PDF, EPUB or plain text (.txt). '+
     'Books stay on this device; nothing is uploaded.</p>';

  if(!S.shelf.length)
    return h+'<div class="empty">No books added yet.</div>';

  h+='<div class="lab">'+S.shelf.length+' book'+(S.shelf.length>1?'s':'')+'</div>';
  h+=S.shelf.map(function(m,k){
    return '<div class="item" style="display:block">'+
      '<button data-doc="'+esc(m.id)+'" style="display:flex;gap:12px;width:100%;text-align:left">'+
        '<span class="ic">'+svg(I.book)+'</span>'+
        '<span class="spacer"><span class="tt">'+esc(m.title)+'</span>'+
        '<span class="dd">'+esc(docLine(m))+'</span></span>'+
        '<span class="go">'+svg(I.next)+'</span></button>'+
      '<div class="sqf" style="margin-top:9px">'+
        '<button class="del" data-delbook="'+esc(m.id)+'">Remove</button></div></div>';
  }).join('');
  return h;
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
  var dh=document.getElementById('dh');
  if(S.drawerBook!==null&&BK(S.drawerBook)){
    var b=BK(S.drawerBook);
    /* the way back to every book stays in the drawer's head, so it is there
       however far down a long book's chapters you have scrolled */
    if(dh) dh.innerHTML='<button class="dback" data-a="drawerback">&larr; All books</button>'+
      '<div class="dtitle">'+esc(b.name)+'<span>'+b.nch+(b.nch===1?' chapter':' chapters')+'</span></div>';
    h+='<div class="dchg">';
    var here=(S.reading===b.i)?S.ch:0;
    for(var i=1;i<=b.nch;i++)
      h+='<button class="dch'+(b.chapters[i]?' rich':'')+(isRead(b.i,i)?' read':'')+
         (i===here?' cur':'')+'" data-drawerch="'+i+'"'+
         (i===here?' aria-current="true"':'')+'>'+i+'</button>';
    h+='</div>';
  } else {
    if(dh) dh.textContent='The Bible';
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
/* A long book (Psalms has 150) opens with the chapter you are in on screen. */
function scrollDrawerToCurrent(){
  try{
    var c=toc.querySelector('.dch.cur');
    toc.scrollTop=0;
    if(c&&c.offsetTop>toc.clientHeight*0.6) toc.scrollTop=c.offsetTop-toc.clientHeight*0.4;
  }catch(e){}
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
/* the on-screen keyboard: a field has focus and the screen got shorter. On
   a tablet held sideways that shorter screen looked like a phone's, so the
   two sides folded into one under your fingers and the note, or the tag you
   were adding, vanished. While typing, only a change of width relayouts. */
var LAST_W=0;
function typingNow(){
  try{ var a=document.activeElement; if(!a) return false;
    var t=(a.tagName||'').toLowerCase();
    return t==='textarea'||(t==='input'&&!/^(button|checkbox|radio|range|file|submit)$/i.test(a.type||''))||a.isContentEditable;
  }catch(e){ return false; }
}
function kbOpen(on){
  try{ document.body.classList.toggle('kb-open', !!on); }catch(e){}
}
function watchKeyboard(){
  if(S.kbWatched||typeof document==='undefined') return;
  S.kbWatched=1;
  var K=null;
  try{ K=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.Keyboard; }catch(e){}
  if(K&&K.addListener){
    try{
      K.addListener('keyboardWillShow',function(){ kbOpen(true); });
      K.addListener('keyboardDidShow',function(){ kbOpen(true); revealFocus(); });
      K.addListener('keyboardWillHide',function(){ kbOpen(false); });
    }catch(e){}
  } else {
    /* a browser: the visual viewport says how much the keyboard covers */
    var vv=window.visualViewport;
    if(vv&&vv.addEventListener) vv.addEventListener('resize',function(){
      var cover=(window.innerHeight||0)-vv.height;
      kbOpen(typingNow()&&cover>120);
    });
  }
  var touch=false;
  try{ touch=!!(window.matchMedia&&matchMedia('(pointer:coarse)').matches); }catch(e){}
  document.addEventListener('focusout',function(){ setTimeout(function(){ if(!typingNow()) kbOpen(false); },60); });
  /* on a touch screen a field taking focus means the keyboard is coming:
     the floating bars step aside at once rather than covering the field */
  document.addEventListener('focusin',function(){ if(typingNow()){ if(touch&&!K) kbOpen(true); setTimeout(revealFocus,320); } });
}
/* keep the field being typed in clear of the keyboard, inside its own side */
function revealFocus(){
  try{
    var a=document.activeElement; if(!a||!typingNow()) return;
    var sc=a.closest&&a.closest('.pv'); if(!sc) return;
    var r=a.getBoundingClientRect(), s=sc.getBoundingClientRect();
    var vh=(window.visualViewport&&window.visualViewport.height)||window.innerHeight;
    var bottom=Math.min(s.bottom, vh)-16, top=s.top+60;
    if(a.tagName.toLowerCase()==='textarea'&&r.height>vh*0.5){
      /* a long note: bring the caret's line into view, not the box's foot */
      return;
    }
    if(r.bottom>bottom) sc.scrollTop+=r.bottom-bottom;
    else if(r.top<top) sc.scrollTop-=top-r.top;
  }catch(e){}
}
function onResize(){
  measureHeight();
  var w=window.innerWidth||0;
  if(typingNow()&&w===LAST_W){ placeSplit(); return; }
  LAST_W=w;
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
  LAST_W=window.innerWidth||0;
  watchKeyboard();
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

/* ---------- following the reading, smoothly ----------
   Centring each new verse in turn made the page sit still, then hop. Instead,
   while reading aloud with "follow" on, the page glides continuously: a point
   moves through the verse being heard at the pace of the voice, and the page
   eases after it every frame, holding it about 42% down the screen. Progress
   arrives only a few times a second, so between reports the point is carried
   forward at the pace measured so far. A touch or a scroll-wheel on the page
   hands it back to you for four seconds. */
var Glide=(function(){
  var raf=0, last=0, hold=0, pos=null, pi=-1, f=0, fAt=0, speed=0;
  function reduced(){ try{ return matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){ return false; } }
  function note(i, frac){
    var now=Date.now();
    if(i===pi && fAt && frac>f){
      var s=(frac-f)/Math.max(0.05,(now-fAt)/1000);
      speed=speed?speed*0.6+s*0.4:s;
    } else if(i!==pi){ speed=0; }
    pi=i; f=frac||0; fAt=now;
  }
  function frac(){
    if(!fAt) return f;
    return Math.min(1, f+speed*Math.min(0.8,(Date.now()-fAt)/1000));
  }
  /* how far through the current verse the voice is, 0..1 */
  function inVerse(){
    var p=S.passages&&S.passages[S.speakAt];
    if(!p||!p.marks||!p.marks.length||S.speakAt!==pi) return 0;
    var fr=frac(), v=S.speakVerse;
    for(var j=0;j<p.marks.length;j++) if(p.marks[j][0]===v){
      var st=p.marks[j][1], en=(j+1<p.marks.length)?p.marks[j+1][1]:1;
      return en>st?Math.max(0,Math.min(1,(fr-st)/(en-st))):0;
    }
    return 0;
  }
  function node(){
    if(!S.speaking||S.speakB!==S.reading||S.speakC!==S.ch) return null;
    return document.querySelector('.rd .v[data-vs="'+vKey(S.reading,S.ch,curVerse())+'"]');
  }
  function tick(t){
    raf=0;
    if(!S.speaking||!S.follow){ last=0; pos=null; return; }
    var el=node(), sc=el&&scrollerOf(el);
    if(el&&sc&&!Speech.isPaused()&&Date.now()>hold&&el.getBoundingClientRect){
      var r=el.getBoundingClientRect(), s=sc.getBoundingClientRect();
      var max=Math.max(0,sc.scrollHeight-sc.clientHeight);
      var target=sc.scrollTop+(r.top-s.top)+inVerse()*r.height-sc.clientHeight*0.42;
      target=Math.max(0,Math.min(max,target));
      /* the page's own position, kept as a fraction, since scrollTop rounds
         and tiny steps would otherwise be lost; re-read if anything else moved it */
      if(pos===null||Math.abs(sc.scrollTop-pos)>2) pos=sc.scrollTop;
      var dt=last?Math.min(0.1,(t-last)/1000):1/60;
      var d=target-pos;
      /* far away (a jump, a new chapter): catch up quicker */
      var tau=Math.abs(d)>sc.clientHeight?0.18:0.45;
      if(Math.abs(d)>0.3){ pos+=d*(1-Math.exp(-dt/tau)); sc.scrollTop=pos; }
    } else { pos=null; }
    last=t;
    raf=requestAnimationFrame(tick);
  }
  function start(){
    if(reduced()||!window.requestAnimationFrame) return false;
    if(!raf){ last=0; raf=requestAnimationFrame(tick); }
    return true;
  }
  function stop(){ if(raf&&window.cancelAnimationFrame) cancelAnimationFrame(raf); raf=0; pos=null; last=0; }
  function yieldToHand(e){
    /* only a hand on the page itself; the player's buttons do not count */
    var t=e&&e.target;
    if(raf&&t&&t.closest&&t.closest('.pane>.pv')){ hold=Date.now()+4000; pos=null; }
  }
  try{
    document.addEventListener('touchstart',yieldToHand,{passive:true});
    document.addEventListener('wheel',yieldToHand,{passive:true});
  }catch(e){}
  return {note:note, start:start, stop:stop, running:function(){ return !!raf; }};
})();

/* No pinch zoom on the app itself. iPhone ignores user-scalable=no in the
   viewport tag, so a two-finger touch during a swipe could zoom the whole
   page; WebKit's own gesture events are refused, except on a map plate,
   which is meant to be pinched. */
try{
  ['gesturestart','gesturechange'].forEach(function(n){
    document.addEventListener(n,function(e){
      var t=e&&e.target;
      if(t&&t.closest&&t.closest('.plate')) return;
      try{ e.preventDefault(); }catch(x){}
    },{passive:false});
  });
  document.addEventListener('touchmove',function(e){
    if(e.touches&&e.touches.length>1){
      var t=e.target; if(t&&t.closest&&t.closest('.plate')) return;
      try{ e.preventDefault(); }catch(x){}
    }
  },{passive:false});
}catch(e){}

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
var FIELDS=['ntitle','nbody','ntagadd','nlink','quicknote','bmfolderin','refin','q','wq'];
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
  try{ focusPlate(); }catch(e){}
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
  var hadQ=false;
  try{ hadQ=!!(document.activeElement&&document.activeElement.id==='q'&&view.contains(document.activeElement)); }catch(e){}
  if(!same) view.innerHTML=h;
  var sig=[S.tab,S.book,S.reading,S.ch,S.btab,S.mode,S.cat,S.sheet,
           S.apocOpen,S.trackerOpen,S.wordsOpen,S.wsel,S.editing&&S.editing.id,
           S.sheetEdit&&S.sheetEdit.kind,S.bibleBook].join('|');
  var newView=sig!==S.viewSig;
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
        S.q=q.value; S.searchSec='All'; queueSearchRecord(S.q); runSearch();
        /* the list only belongs on an empty field, so redraw as it clears */
        var showing=!!document.querySelector('.hist');
        if((S.q.trim().length<2)!==showing){ S.keepScroll=true; render(); }
      }));
      /* not when it is the other side being redrawn: that would pull the
         keyboard up over whatever you were doing */
      /* and only as the search opens, or while you are typing in it: after
         a result was tapped the keyboard stays down */
      if(!quiet&&(newView||hadQ)){ q.focus();
        /* the caret at the end of what is there, never before it */
        try{ var qe=q.value.length; q.setSelectionRange(qe,qe); }catch(e){} }
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
  try{ docAfterRender(); }catch(e){}
  var sfi=document.getElementById('sheetfile');
  if(sfi&&!sfi.__wired){ sfi.__wired=1; sfi.addEventListener('change',function(){
    if(!sfi.files||!sfi.files[0]) return;
    importSheetFile(sfi.files[0]).then(function(a){
      S.sheetImportMsg=a.sheets?('Added \u201c'+a.name+'\u201d to your study sheets.')
        :a.entries?('Added '+a.entries+' new entr'+(a.entries===1?'y':'ies')+' to \u201c'+a.name+'\u201d.')
        :'You already have everything in that sheet.';
      S.keepScroll=true; render();
    }).catch(function(e){ S.sheetImportMsg=(e&&e.message)||'That file could not be read.'; S.keepScroll=true; render(); });
  }); }
  var rf=document.getElementById('restorefile');
  if(rf) rf.addEventListener('change',function(){
    if(!rf.files||!rf.files[0]) return;
    importBackup(rf.files[0]).then(function(a){
      S.restoreErr=0;
      S.restoreMsg='Restored '+a.hl+' highlight'+(a.hl===1?'':'s')+', '+
        a.notes+' note'+(a.notes===1?'':'s')+', '+(a.marks||0)+' bookmark'+((a.marks||0)===1?'':'s')+
        ' and '+a.sheets+' study entr'+(a.sheets===1?'y':'ies')+'.';
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
  var gti=document.getElementById('goaltime');
  if(gti&&!gti.__wired){ gti.__wired=1; gti.addEventListener('change',function(){
    var m=/^(\d{1,2}):(\d{2})/.exec(gti.value||''); if(!m) return;
    GOAL.remind.h=+m[1]; GOAL.remind.m=+m[2]; goalSave(); goalSchedule(); S.keepScroll=true; render();
  }); }
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
  if(ntl&&ntl.addEventListener){
    ntl.addEventListener('input',inPane(function(){
      if(S.editing){ S.editing.title=ntl.value; queueNoteSave(); } }));
    ntl.addEventListener('blur',function(){ S.noteBlurAt=Date.now(); S.noteBlurField='title'; if(S.editing&&noteSaveTimer) commitNote(S.editing); });
  }
  var nta=document.getElementById('ntagadd');
  if(nta&&nta.addEventListener) nta.addEventListener('input',function(){
    S.tagDraft=nta.value;
    /* a comma finishes a tag, as on most keyboards' tag boxes */
    if(/,/.test(nta.value)){ var btn=document.querySelector('[data-a="addtag"]'); if(btn) btn.click(); }
  });
  var nli=document.getElementById('nlink');
  if(nli&&nli.addEventListener) nli.addEventListener('input',function(){ S.linkDraft=nli.value; });
  var nb=document.getElementById('nbody');
  if(nb&&nb.addEventListener){
    /* the box grows with what is written, so the page scrolls rather than a
       little window inside it, and a tap lands where it is aimed instead of
       the text jumping back to its top */
    var grow=function(){ try{ nb.style.height='auto'; nb.style.height=Math.max(200,nb.scrollHeight+4)+'px'; }catch(e){} };
    grow();
    nb.addEventListener('input',inPane(function(){
      if(S.editing){ S.editing.body=nb.value; S.editCaret=nb.selectionStart; queueNoteSave(); }
      grow();
    }));
    nb.addEventListener('blur',function(){ S.noteBlurAt=Date.now(); S.noteBlurField='body'; if(S.editing&&noteSaveTimer){ commitNote(S.editing); refreshNoteRefs(); } });
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
    '[data-ss],[data-goverse],[data-sharenote],[data-editnote],[data-delnote],[data-open],[data-rate],'+
    '[data-sheet],[data-ref],[data-edititem],[data-delitem],'+
    '[data-drawerbook],[data-drawerch],'+
    '[data-kvoice],[data-svoice],[data-read],[data-userbook],[data-delbook],'+
    '[data-cat],[data-apoc],[data-size],[data-markread],[data-vq],[data-page],'+
    '[data-mapera],[data-mapframe],[data-plate],[data-platezoom],[data-settheme],'+
    '[data-scrollspeed],[data-rsgroup],[data-savestab],[data-notefilter],[data-wordmark],'+
    '[data-dellink],[data-deltag],[data-bmfolder],[data-bmf],[data-sfilter],'+
    '[data-delref],[data-snap],[data-snapdl],[data-search],[data-forget],[data-smode],[data-doc],[data-docch],'+
    '[data-filenote],[data-gw],[data-pick],[data-pcolor],[data-word],[data-strong],'+
    '[data-pdelref],[data-pfolder],[data-pfilenote],'+
    '[data-pwopen],[data-pwpick],[data-pwbuy],[data-pwtip],[data-ssec],'+
    '[data-precept],[data-opennote],[data-gpace],[data-plan]');
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
  /* a tap that takes you somewhere else (a search result, a chapter, another
     side) puts the keyboard away: the field it was typing in is left behind */
  if(typingNow()&&(d.goverse||d.nav||d.pick||d.readch||d.drawerch||d.ch||d.book||d.opennote||d.open||d.ref)){
    try{ var ae=document.activeElement; S.leftFocus=ae&&ae.id||''; if(ae&&!t.contains(ae)&&ae.blur) ae.blur(); }catch(e){}
    kbOpen(false);
  }

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
  if(d.a==='pwcodeopen'){
    /* Apple allows only its own codes in an iPhone app: there, SELAH is an
       App Store offer code, typed into Apple's own sheet */
    if(payPlatform()==='ios'){ payRedeem(); return; }
    if(!PAY.open) openPaywall('study');
    PAY.codeOpen=true; PAY.codeMsg=''; drawPaywall();
    setTimeout(function(){ var ci=document.getElementById('pwcode'); if(ci) try{ ci.focus(); }catch(e){} },60);
    return; }
  if(d.a==='pwcodego'){
    var ce=document.getElementById('pwcode');
    /* In the store apps a code is the store's own: an app may not unlock what
       it sells with codes of its own, and a code kept only on the phone could
       be used again after a reinstall. The store checks it once per account. */
    if(payNative()){
      PAY.codeMsg=payPlatform()==='android'
        ?'Codes are redeemed with Google Play: tap Continue on the monthly plan, then Redeem code in Google\u2019s sheet.'
        :'Codes are redeemed with Apple: enter it in the sheet that opens.';
      announce(PAY.codeMsg); payRedeem(); drawPaywall(); return; }
    var cr=redeemPromo(ce?ce.value:'');
    PAY.codeMsg=cr.msg; announce(cr.msg);
    if(cr.ok&&promoActive()){ applyLayout(); render();
      setTimeout(function(){ if(PAY.open&&PAY.codeOpen) closePaywall(); }, 2600); }
    drawPaywall(); return; }
  if(d.a==='pwwhy'){ PAY.why=!PAY.why; drawPaywall(); return; }
  if(d.a==='pwclose'){ closePaywall(); return; }
  if((d.a==='addtag'||d.a==='addlink')&&!gate('tags')) return;
  if((d.bmfolder||d.a==='bmnewfolder'||d.pfolder||d.a==='pnewfolder')&&!gate('folders')) return;
  if(d.plate&&!plateFree(d.plate)&&!gate('atlas')) return;
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
    if(navigator.share||payNative()) shareVerse(ps.b,ps.c,ps.v);
    else { copyVerse(ps.b,ps.c,ps.v); S.popCopied=S.pop; popSay('Copied, ready to paste.'); placePop(false); }
    return; }
  if(d.a==='pimage'){
    if(!S.pop||S.popImaging) return;
    var pik=S.pop, pi=parseKey(pik);
    S.popImaging=pik; placePop(false);
    shareVerseCard(pi.b,pi.c,pi.v).then(function(r){
      S.popImaging=null;
      if(S.pop!==pik) return;
      popSay(r&&r.ok?'':(r&&r.msg)||''); placePop(false);
    });
    return; }
  if(d.a==='pmore'){
    if(!S.pop) return;
    S.popMore=(S.popMore===S.pop)?null:S.pop;
    if(!S.popMore) S.popFiling=null;
    placePop(false); return; }
  if(d.a==='paddref'){
    if(!S.pop) return;
    S.popRefAdding=S.pop; S.popMsg=''; S.prefDraft=''; placePop(false);
    var pin=document.getElementById('prefin'); if(pin) try{ pin.focus(); }catch(e){}
    return; }
  if(d.a==='pcancelref'){ S.popRefAdding=null; S.popMsg=''; placePop(false); return; }
  if(d.a==='psaveref'){
    if(!S.pop) return;
    var pr=parseKey(S.pop), prin=document.getElementById('prefin');
    var prr=addUserRef(pr.b,pr.c,pr.v,prin?prin.value:'');
    if(prr.ok){ S.popRefAdding=null; S.prefDraft=''; }
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
    if(pfr.ok){ S.popFiling=null; S.popNoteChoice=null; }
    popSay(pfr.msg); placePop(false); return; }
  if(d.plate&&S.pop){ closePop(); }
  if(d.a==='pnote'){
    var pn=S.pop; if(!pn) return;
    /* a verse with its own note opens it; otherwise, with notes already
       written, ask whether this is a new note or an addition to one */
    if(!noteFor(parseKey(pn))&&S.notes.length&&S.popNoteChoice!==pn){
      S.popNoteChoice=pn; S.popMsg=''; placePop(false); return; }
    S.popNoteChoice=null; closePop(); openNoteFor(pn); return;
  }
  if(d.a==='pnotenew'){
    var pn2=S.pop; S.popNoteChoice=null; closePop(); if(pn2) openNoteFor(pn2); return; }

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
  if(d.a==='toggletester'){
    var lockNow=testerOpen();
    try{ localStorage.setItem('strata:testerlock',lockNow?'1':'0'); }catch(e){}
    announce(lockNow?'Locked: the app now behaves as it will in the store.':'All features unlocked.');
    applyLayout(); S.keepScroll=true; render(); return; }
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
  /* --- sync across devices --- */
  if(d.a==='syncstart'){ SYNC.msg=''; syncStart(); return; }
  if(d.a==='syncjoin'){ var sci=document.getElementById('synccode'); SYNC.msg=''; syncJoin(sci?sci.value:''); return; }
  if(d.a==='syncshow'){ SYNC.show=!SYNC.show; syncPaint(); return; }
  if(d.a==='synccopy'){ syncCopy(); return; }
  if(d.a==='syncshare'){ syncShare(); return; }
  if(d.a==='syncnow'){ SYNC.msg=''; syncNow(); return; }
  if(d.a==='syncoff'){ syncOff(false); return; }
  if(d.a==='syncdel'){ SYNC.confirmDel=true; syncPaint(); return; }
  if(d.a==='syncdelno'){ SYNC.confirmDel=false; syncPaint(); return; }
  if(d.a==='syncdelyes'){ syncOff(true); return; }
  /* --- goals and plans --- */
  if(d.gpace){ GOAL.perDay=+d.gpace; S.goalMsg=''; goalSave(); goalRemindSoon(); S.keepScroll=true; render(); return; }
  if(d.a==='goaloff'){ GOAL.perDay=0; GOAL.remind.on=false; goalSave(); goalSchedule(); S.keepScroll=true; render(); return; }
  if(d.a==='goalremind'){
    if(GOAL.remind.on){ GOAL.remind.on=false; S.goalMsg=''; goalSave(); goalSchedule(); S.keepScroll=true; render(); }
    else goalRemindOn();
    return; }
  if(d.plan&&planDef(d.plan)){
    GOAL.active=d.plan; planState(d.plan);
    if(!GOAL.perDay) GOAL.perDay=planDef(d.plan).pace;
    goalSave(); goalRemindSoon(); S.keepScroll=false; render();
    try{ window.scrollTo(0,0); }catch(e){}
    return; }
  if(d.a==='planstop'){ GOAL.active=null; goalSave(); goalRemindSoon(); S.keepScroll=true; render(); return; }
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
  if(d.plate){
    S.platePins=d.pins?String(d.pins).split('|'):[];
    /* opened for a verse's places: a closer look, centred on them */
    S.plateZoom=S.platePins.length?2:1; S.plateFocus=S.platePins.length>0; S.plateCenter=null;
    S.atlasOpen=true; S.plate=d.plate; S.tab='library';
    S.book=null; S.reading=null; closeSheet(); render(); return; }
  if(d.a==='closeplate'){ S.plate=null; S.platePins=[]; render(); return; }
  if(d.a==='clearpins'){ S.platePins=[]; S.keepScroll=true; plateKeepCenter(); render(); return; }
  if(d.platezoom){
    var z=S.plateZoom||1;
    plateKeepCenter();
    if(d.platezoom==='in')  S.plateZoom=Math.min(6, z+1);
    else if(d.platezoom==='out') S.plateZoom=Math.max(1, z-1);
    else { S.plateZoom=1; S.plateCenter=null; }
    /* the first step in from the whole map goes to the marked places */
    if(z===1&&S.plateZoom>1&&(S.platePins||[]).length){ S.plateFocus=true; S.plateCenter=null; }
    S.keepScroll=true; render(); return; }
  if(d.mapframe){ S.mapFrame=d.mapframe; S.keepScroll=true; render(); return; }
  if(d.a==='closetracker'){ S.trackerOpen=false; render(); return; }

  /* --- my books --- */
  if(d.userbook||d.doc){ openDoc(d.doc||d.userbook); return; }
  if(d.a==='docclose'){ var back=S.docFrom; docClose(); if(back==='mybooks'){ S.mode='mybooks'; render(); } return; }
  if(d.a==='doczoomin'){ docZoom(DOC.zoom+0.5); return; }
  if(d.a==='doczoomout'){ docZoom(DOC.zoom-0.5); return; }
  if(d.a==='doczoomfit'){ docZoom(1); return; }
  if(d.a==='doctoc'){ S.docToc=!S.docToc; S.keepScroll=true; render(); return; }
  if(d.docch!=null||d.a==='docprev'||d.a==='docnext'){
    var nk=d.docch!=null?+d.docch:DOC.cur+(d.a==='docnext'?1:-1);
    if(DOC.epub&&nk>=0&&nk<DOC.epub.spine.length){ DOC.urls.forEach(function(u){ try{ URL.revokeObjectURL(u); }catch(x){} }); DOC.urls=[];
      DOC.cur=nk; S.docToc=false; docSavePos({c:nk, b:0}); render(); }
    return; }
  if(d.delbook){
    var did=d.delbook;
    Shelf.del(did).then(loadShelf).then(function(){
      if(S.openBook&&S.openBook.id===did) S.openBook=null;
      if(S.doc===did) docClose(true), S.doc=null;
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
    closePop(); closeSheet();
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
  if(d.a==='resume'){
    /* paused from the lock screen, headphones or a call: the native player
       still holds its place, so it carries on from there, not from verse 1 */
    if(Speech.isNative()&&Speech.isPaused()&&S.speaking){ Speech.resume(); renderSpeakBar(); paintSpeaking(); return; }
    speakFrom(startVerse()); return; }
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
  if(d.a==='storeretry'){ Store.retry(); return; }
  /* --- narration kept on the phone --- */
  if(d.a==='dlopen'){ openAudioSheet(); return; }
  if(d.a==='dlshelf'){ openDownloads(); return; }
  if(d.a==='sheetsharetext'||d.a==='sheetsharefile'){
    var shs=findSheet(S.sheet); if(!shs) return;
    S.sheetMsg='One moment\u2026'; S.keepScroll=true; render();
    (d.a==='sheetsharetext'?shareSheetText(shs):shareSheetFile(shs)).then(function(r){
      S.sheetMsg=SHEET_SAY[r]||''; S.keepScroll=true; render(); });
    return; }
  if(d.a==='sheetsave'&&d.kind){
    var shv=findSheet(S.sheet); if(!shv) return;
    S.sheetMsg='One moment\u2026'; S.keepScroll=true; render();
    saveSheetAs(shv, d.kind).then(function(r){ S.sheetMsg=SHEET_SAY[r]||''; S.keepScroll=true; render(); });
    return; }
  if(d.a==='sheetimport'){ var sf=document.getElementById('sheetfile'); if(sf) sf.click(); return; }
  if(d.a==='dlfree'){ PAY.from=null; PAY.open=null; openAudioSheet(); return; }
  if(d.a==='dlclose'){ closeSheet(); return; }
  if(d.a==='dlall'){ audWantAll(); return; }
  if(d.a==='dlbook'&&d.bk){ audWant(d.bk); return; }
  if(d.a==='dlremove'&&d.bk){ audRemove([d.bk]); return; }
  if(d.a==='dlremoveall'){ audRemoveAll(); return; }
  if(d.a==='dlstop'){ audStop(); return; }
  if(d.a==='nextunread'){
    var nu=nextUnread(S.reading,S.ch);
    if(nu){ stopSpeaking(); S.book=nu.b; S.reading=nu.b; S.ch=nu.c; S.tab='bible'; render(); }
    return; }
  if(d.size!==undefined&&d.size!==''){S.keepScroll=true; S.textSize=+d.size; savePlace(); render(); return; }
  if(d.page){ return; }   /* Plain is retired: the page is always paper */
  if(d.wordmark){ S.wordMark=d.wordmark==='line'?'line':'glow'; Store.set('strata:wordmark',S.wordMark); applyWordMark();
    announce(S.wordMark==='glow'?'Old words glow softly.':'Old words are underlined.');
    S.keepScroll=true; render(); return; }
  /* data-settheme, not data-theme: the root's own data-theme="dark" selector
     matched the Night button too and painted it in dark-mode ink */
  if(d.settheme){S.keepScroll=true; setTheme(d.settheme); announce(d.settheme==='auto'
      ?'Appearance follows your device.':'Appearance set to '+d.settheme+'.'); return; }
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
    openWordSheet(+d.gw, vhost?vhost.getAttribute('data-vs'):null, t.textContent||'', d.gs);
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
  if(d.a==='cardshare'){ if(CARD_IMG) shareCardImage(CARD_IMG); return; }
  if(d.a==='cardsave'){ if(!CARD_IMG) return;
    /* in the app a web download goes nowhere: the share sheet has Save Image */
    if(payNative()) shareCardImage(CARD_IMG);
    else saveFile(CARD_IMG.name, CARD_IMG.blob);
    return; }
  if(d.a==='cardclose'){ closeSheet(); return; }
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
  if(d.a==='notefor'){
    /* Note on a verse opens the whole note editor, with the verse at its head.
       It used to raise the old verse sheet with a small box in it. With two
       sides and Notes on the other, it opens there and the chapter stays put;
       otherwise Back returns to the verse. */
    if(S.sheet&&isVerseKey(S.sheet)) openNoteFor(S.sheet);
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
  if(d.a==='newnote'){S.editFocusBody=true; S.noteReturn=false;
    S.tagDraft=''; S.linkDraft=''; S.linkMsg='';
    S.editing={id:null,b:null,c:null,v:null,body:'',title:'',tags:[],links:[]}; render(); return;}
  if(d.a==='notetag'){
    if(S.editing){
      S.editing.tags=(S.editing.tags||[]);
    }
    return; }
  if(d.notefilter){ S.noteFilter=d.notefilter; S.keepScroll=true; render(); return; }
  if(d.sharenote){ shareNote(d.sharenote); return; }
  if(d.editnote){
    /* an existing note opens without the keyboard, so a tap goes where it lands */
    S.editFocusBody=false; S.noteReturn=false;
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
    if(noteSaveTimer){ clearTimeout(noteSaveTimer); noteSaveTimer=null; }
    S.notes=S.notes.filter(function(x){return x.id!==d.delnote;});
    saveNotes();
    if(S.editing&&S.editing.id===d.delnote){ S.editing=null; S.noteReturn=false; }
    render(); return;}
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
      nt.split(/\s*,\s*/).forEach(function(one){
        one=one.replace(/^#/,'').trim().slice(0,28);
        if(one&&S.editing.tags.indexOf(one)===-1&&S.editing.tags.length<8) S.editing.tags.push(one);
      });
      S.tagDraft='';
      if(ta) ta.value='';
    }
    migrateNote(S.editing); commitNote(S.editing); S.keepScroll=true; render();
    /* keep the tag box ready for the next one */
    if(!d.deltag) setTimeout(function(){ var t2=document.getElementById('ntagadd'); if(t2) try{ t2.focus(); }catch(e){} },0);
    return; }
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
    commitNote(S.editing);
    S.linkMsg=''; S.keepScroll=true; render(); return; }
  if(d.a==='savenote'){
    var e=S.editing; if(!e) return;
    var body=(document.getElementById('nbody')||{}).value;
    if(body!==undefined) e.body=body;
    var ti=(document.getElementById('ntitle')||{}).value;
    if(ti!==undefined) e.title=ti;
    closeNoteEditor(); return;}
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
  if(d.ssec){ S.searchSec=d.ssec; S.searchShow=100; runSearch(true); return; }
  if(d.smode){ S.searchMode=d.smode==='words'?'words':'smart'; Store.set('strata:searchmode',S.searchMode);
    announce(S.searchMode==='words'?'Word search: verses with the words you type.':'Smart search: verses by meaning, and every verse with your words.');
    S.keepScroll=true; render(); return; }
  if(d.a==='sexact'){ S.searchExact=!S.searchExact; S.keepScroll=true; render(); return; }
  if(d.a==='smore'){ S.searchShow=(S.searchShow||100)+100; runSearch(true); return; }
  if(d.a==='clearq'){ S.q=''; render(); runSearch();
    var qi=document.getElementById('q'); if(qi&&qi.focus) qi.focus(); return; }
  if(d.a==='togglewords'){
    S.wordMeanings=!(S.wordMeanings!==false); Store.set('strata:words',S.wordMeanings);
    announce(S.wordMeanings?(wordMark()==='glow'?'Old words glow softly.':'Old words are underlined.'):'Old words are no longer marked.');
    S.keepScroll=true; render(); return; }
  if(d.a==='immersive'){ immersiveOn(); return; }
  if(d.scrollspeed){
    S.scrollSpeed=+d.scrollspeed; Store.set('strata:scrollspeed',S.scrollSpeed);
    if(S.immersive) startAutoScroll();
    S.keepScroll=true; render(); return; }
  if(d.a==='navback'){
    if(navBack()) return;
    /* nowhere recorded to go back to (a tablet side opens straight onto a
       chapter): back still means something, the book's page, then the library */
    if(S.sheet){ closeSheet(); return; }
    if(S.reading!==null){ leaveReading(); S.reading=null; render(); return; }
    if(S.book!==null){ S.book=null; S.tab='library'; render(); return; }
    return; }
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
  /* The book's name at the top opens straight onto its chapters, the one you
     are in marked; All books is one tap above them. */
  if(d.a==='toc'){S.drawerBook=(S.reading!==null&&BK(S.reading))?S.reading:null;
    buildTOC();openDrawer(true);scrollDrawerToCurrent();return;}
  if(d.mode){S.mode=d.mode;S.openEra=null;render();return;}
  if(d.era){S.openEra=(S.openEra===d.era?null:d.era);render();return;}
  if(d.sec){S.tab='library';S.mode='shelf';render();
    var el=[].slice.call(document.querySelectorAll('.h2')).filter(function(x){
      return x.textContent===SEC[d.sec].name;})[0];
    if(el) bringIntoView(el,'start',false);return;}
  if(d.book!==undefined&&d.book!==''){
    openDrawer(false);
    /* Next at the end of a chapter: finishing it is the honest signal it was read */
    if(d.markfrom){ var mf=d.markfrom.split(':'); markRead(+mf[0], +mf[1], true); }
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
  try{ audInit(); }catch(e){}
  setTimeout(function(){ try{ goalInit(); }catch(e){} }, 1500);
  setTimeout(function(){ try{ syncInit(); }catch(e){} }, 1200);
  Store.get('strata:worduse').then(function(u){ if(u&&u.d) S.wordUse=u; });
  initLayout();
  try{ FlexGap.init(); }catch(e){}
  if(META){ indexData(); loadAll(function(){ openingChapter(); try{ maybeWelcome(); }catch(e){} }); return; }
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
      try{ maybeWelcome(); }catch(e){}
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

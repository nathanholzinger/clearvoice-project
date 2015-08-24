// list from https://www.englishwithexperts.com/blog/posts/files/5000MostCommonWords.pdf

var commonWords = [["the",22038615],["be",12545825],["and",10741073],["of",10343885],["a",10144200],["in",6996437],["to",6332195],["have",4303955],["to",3856916],["it",3872477],["I",3978265],["that",3430996],["for",3281454],["You",3081151],["He",2909254],["with",2683014],["on",2485306],["do",2573587],["say",1915138],["this",1885366],["they",1865580],["at",1767638],["but",1776767],["we",1820935],["his",1801708],["from",1635914],["that",1712406],["not",1638830],["by",1490548],["she",1484869],["or",1379320],["as",1296879],["what",1181023],["go",1151045],["their",1083029],["can",1022775],["who",1018283],["get",992596],["if",933542],["would",925515],["her",969591],["all",892102],["my",919821],["make",857168],["about",874406],["know",892535],["will",824568],["as",829018],["up",795534],["one",768232],["time",764657],["there",784528],["year",769254],["so",756550],["think",772787],["when",678626],["which",685982],["them",677870],["some",674193],["me",709623],["people",691468],["take",670745],["out",678603],["into",668172],["just",677711],["see",663645],["him",677707],["your",659622],["come",628254],["could",617932],["now",605997],["than",579757],["like",568850],["other",547799],["how",538893],["then",543977],["its",539719],["our",525107],["two",511027],["more",517536],["these",513864],["want",514972],["way",470401],["look",491707],["first",463566],["also",464606],["new",435993],["because",438539],["day",432773],["more",420170],["use",420781],["no",402222],["man",409760],["find",395203],["here",412315],["thing",400724],["give",384503],["many",385348],["well",411776],["only",379574],["those",378007],["tell",388155],["one",369553],["very",391821],["her",397950],["even",361067],["back",367844],["any",348100],["good",353973],["woman",341422],["through",340921],["us",351088],["life",333085],["child",333849],["there",333433],["work",318210],["down",329409],["may",324569],["after",311902],["should",310265],["call",308050],["world",303506],["over",300349],["school",304183],["still",296953],["try",294023],["in",285035],["as",281483],["last",289843],["ask",284632],["need",276744],["too",280396],["feel",275214],["three",266744],["when",268219],["state",272193],["never",262584],["become",259102],["between",264158],["high",255936],["really",263414],["something",254910],["most",246360],["another",240646],["much",244507],["family",243267],["own",240452],["out",242443],["leave",240482],["put",237480],["old",236577],["while",234555],["mean",242198],["on",236980],["keep",231760],["student",255047],["why",235442],["let",240300],["great",225005],["same",222836],["big",227169],["group",229435],["begin",218617],["seem",219627],["country",223138],["help",216082],["talk",229429],["where",213744],["turn",221392],["problem",217728],["every",212739],["start",213952],["hand",225247],["might",209059],["American",214968],["show",208037],["part",207861],["about",208550],["against",204379],["place",202427],["over",208260],["such",207065],["again",206895],["few",197266],["case",200773],["most",197086],["week",199268],["company",203345],["where",194427],["system",200175],["each",196522],["right",205250],["program",195985],["hear",196070],["so",191893],["question",192070],["during",190729],["work",187533],["play",188328],["government",191314],["run",187325],["small",185463],["number",186005],["off",183854],["always",179474],["move",179388],["like",182341],["night",184511],["live",176144],["Mr",188555],["point",177481],["believe",178397],["hold",177368],["today",183724],["bring",174366],["happen",182714],["next",176306],["without",172448],["before",172769],["large",175611],["all",177317],["million",176895],["must",171043],["home",170527],["under",164766],["water",167666],["room",172472],["write",161824],["mother",169407],["area",165812],["national",166359],["money",164794],["story",163582],["young",160011],["fact",164401],["month",162685],["different",162411],["lot",169570],["right",163259],["study",174069],["book",154013],["eye",169150],["job",154743],["word",152891],["though",152182],["business",154468],["issue",156417],["side",152559],["kind",155032],["four",150646],["head",160131],["far",148621],["black",150718],["long",149050],["both",146338],["little",149658],["house",149251],["yes",157364],["after",142289],["since",141264],["long",142007],["provide",150879],["service",146122],["around",143766],["friend",142697],["important",144194],["father",145051],["sit",147185],["away",144713],["until",140819],["power",141357],["hour",138955],["game",146311],["often",140731],["yet",135484],["line",135986],["political",144437],["end",134104],["among",138192],["ever",135774],["stand",140937],["bad",134910],["lose",134102],["however",142282],["member",134731],["pay",133133],["law",133706],["meet",128737],["car",133571],["city",132684],["almost",127907],["include",133563],["continue",126029],["set",127369],["later",126495],["community",133057],["much",126029],["name",127139],["five",125571],["once",126203],["white",126760],["least",123961],["president",134203],["learn",124346],["real",124187],["change",123183],["team",131489],["minute",126660],["best",124850],["several",124039],["idea",122140],["kid",126428],["body",125165],["information",127331],["nothing",126717],["ago",125252],["right",126278],["lead",122691],["social",132899],["understand",121354],["whether",121921],["back",125006],["watch",124976],["together",119186],["follow",119425],["around",122789],["parent",119610],["only",117700],["stop",121481],["face",127291],["anything",120292],["create",119419],["public",119825],["already",115220],["speak",117358],["others",115771],["read",114094],["level",121704],["allow",114892],["add",117842],["office",114791],["spend",114569],["door",124993],["health",117762],["person",113650],["art",117851],["sure",116186],["such",119125],["war",117804],["history",114904],["party",112962],["within",114599],["grow",110020],["result",116277],["open",111857],["change",112426],["morning",114002],["walk",113787],["reason",106863],["low",108990],["win",111478],["research",114802],["girl",110409],["guy",110409],["early",108171],["food",107728],["before",107448],["moment",109720],["himself",109288],["air",105932],["teacher",116100],["force",108005],["offer",106473],["enough",105880],["both",106361],["education",113731],["across",105559],["although",107925],["remember",106879],["foot",107285],["second",103621],["boy",107447],["maybe",108421],["toward",105984],["able",103171],["age",103402],["off",104122],["policy",107601],["everything",103591],["love",103681],["process",107341],["music",102657],["including",103650],["consider",101987],["appear",100671],["actually",105155],["buy",101105],["probably",99754],["human",101224],["wait",102463],["serve",99660],["market",100435],["die",98376],["send",96613],["expect",95566],["home",97937],["sense",95896],["build",96651],["stay",96933],["fall",96908],["oh",103613],["nation",97212],["plan",95824],["cut",96012],["college",97038],["interest",96620],["death",93222],["course",96224],["someone",95608],["experience",98106],["behind",95047],["reach",92375],["local",92970],["kill",92660],["six",90571],["remain",91319],["effect",95216],["use",96564],["yeah",103389],["suggest",92643],["class",91323],["control",90301],["raise",87036],["care",88862],["perhaps",87060],["little",88697],["late",86421],["hard",86817],["field",87243],["else",87876],["pass",86184],["former",88930],["sell",87865],["major",87487],["sometimes",84845],["require",89280],["along",84926],["development",91995],["themselves",85256],["report",88138],["role",88666],["better",83895],["economic",90392],["effort",86473],["up",85759],["decide",84035],["rate",87224],["strong",83677],["possible",85084],["heart",84536],["drug",86231],["show",86828],["leader",85438],["light",87427],["voice",89379],["wife",83601],["whole",83756],["police",85880],["mind",82808],["finally",81951],["pull",87243],["return",81812],["free",82090],["military",85152],["price",84443],["report",83174],["less",82930],["according",83773],["decision",82429],["explain",80797],["son",80895],["hope",81385],["even",79087],["develop",84835],["view",81338],["relationship",84549],["carry",79513],["town",79821],["road",80987],["drive",80476],["arm",84865],[true,79299],["federal",81826],["break",79310],["better",78334],["difference",82911],["thank",88574],["receive",80250],["value",82942],["international",81610],["building",78487],["action",80009],["full",77547],["model",82973],["join",80609],["season",83743],["society",81192],["because",77116],["tax",80713],["director",79813],["early",75605],["position",77124],["player",81358],["agree",76753],["especially",76304],["record",77509],["pick",77197],["wear",77921],["paper",75383],["special",75298],["space",75395],["ground",74713],["form",78493],["support",76544],["event",75559],["official",79026],["whose",74914],["matter",73842],["everyone",74534],["center",74559],["couple",74871],["site",75932],["end",73099],["project",75446],["hit",73999],["base",75887],["activity",77980],["star",73695],["table",75228],["need",74877],["court",74112],["produce",74169],["eat",73505],["American",73063],["teach",72668],["oil",74386],["half",70930],["situation",72603],["easy",71602],["cost",73512],["industry",73055],["figure",74858],["face",69493],["street",71645],["image",72216],["itself",71093],["phone",71599],["either",69497],["data",76594],["cover",69387],["quite",69966],["picture",69229],["clear",68662],["practice",73745],["piece",68901],["land",69750],["recent",70685],["describe",71377],["product",70883],["doctor",69446],["wall",71390],["patient",72217],["worker",69962],["news",70051],["test",69870],["movie",69387],["certain",67228],["north",68046],["love",67495],["personal",67917],["open",67218],["support",69431],["simply",66712],["third",67037],["technology",69565],["catch",68214],["step",66232],["baby",67881],["computer",67399],["type",68481],["attention",65271],["draw",65198],["film",66724],["Republican",71611],["tree",66630],["source",66862],["red",66217],["nearly",64860],["organization",67278],["choose",64348],["cause",64531],["hair",69564],["look",66194],["point",62980],["century",65667],["evidence",65360],["window",68303],["difficult",63947],["listen",64984],["soon",63168],["culture",67128],["billion",65243],["chance",62682],["brother",63406],["energy",64139],["period",64534],["course",64012],["summer",62503],["less",62154],["realize",61732],["hundred",61266],["available",63187],["plant",63476],["likely",63002],["opportunity",62422],["term",62962],["short",60451],["letter",60369],["condition",63489],["choice",60487],["place",60927],["single",60072],["rule",61062],["daughter",60424],["administration",62071],["south",60630],["husband",60126],["Congress",62841],["floor",62458],["campaign",64172],["material",62440],["population",62999],["well",61219],["call",59543],["economy",60990],["medical",59424],["hospital",58669],["church",59466],["close",60884],["thousand",58307],["risk",60432],["current",61252],["fire",59386],["future",58020],["wrong",58988],["involve",59542],["defense",59701],["anyone",58274],["increase",60442],["security",58914],["bank",58992],["myself",59716],["certainly",59739],["west",58169],["sport",59006],["board",58436],["seek",58495],["per",59432],["subject",61397],["officer",57617],["private",57248],["rest",56714],["behavior",62625],["deal",57462],["performance",59909],["fight",56886],["throw",57784],["top",57743],["quickly",56454],["past",56588],["goal",58728],["second",56022],["bed",60304],["order",56483],["author",58300],["fill",56915],["represent",58744],["focus",57177],["foreign",57540],["drop",56448],["plan",55829],["blood",56351],["upon",57033],["agency",56954],["push",56103],["nature",57929],["color",56978],["no",54602],["recently",55992],["store",56147],["reduce",57029],["sound",56828],["note",57025],["fine",55174],["before",55608],["near",54869],["movement",56201],["page",55937],["enter",54479],["share",54010],["than",55719],["common",55940],["poor",53820],["other",54372],["natural",55526],["race",54838],["concern",55203],["series",54549],["significant",58947],["similar",55901],["hot",54601],["language",55799],["each",53663],["usually",53477],["response",56342],["dead",55111],["rise",53542],["animal",53127],["factor",57612],["decade",53727],["article",54871],["shoot",53038],["east",53010],["save",52067],["seven",52011],["artist",54353],["away",52005],["scene",51248],["stock",54305],["career",52101],["despite",51526],["central",52501],["eight",50871],["thus",57039],["treatment",53390],["beyond",50742],["happy",51669],["exactly",52685],["protect",50649],["approach",53980],["lie",51657],["size",51868],["dog",52347],["fund",53859],["serious",50285],["occur",52768],["media",51798],["ready",50833],["sign",50045],["thought",51509],["list",50678],["individual",54738],["simple",50583],["quality",52224],["pressure",50773],["accept",49952],["answer",49969],["hard",50793],["resource",53398],["identify",53484],["left",50479],["meeting",49916],["determine",52130],["prepare",49208],["disease",51211],["whatever",50200],["success",50541],["argue",51013],["cup",53633],["particularly",50329],["amount",49944],["ability",51476],["staff",50177],["recognize",50042],["indicate",53215],["character",49530],["growth",50904],["loss",49759],["degree",50612],["wonder",50875],["attack",50898],["herself",52915],["region",50914],["television",49673],["box",49667],["TV",49438],["training",49997],["pretty",50385],["trade",49696],["deal",48975],["election",51322],["everybody",51147],["physical",51451],["lay",49358],["general",49657],["feeling",47349],["standard",49876],["bill",49011],["message",47533],["fail",47503],["outside",46628],["arrive",47435],["analysis",53840],["benefit",48594],["name",47375],["sex",47827],["forward",47877],["lawyer",47853],["present",49659],["section",49764],["environmental",51192],["glass",49686],["answer",47661],["skill",50431],["sister",48183],["PM",54765],["professor",46575],["operation",47276],["financial",47803],["crime",48010],["stage",46346],["ok",54697],["compare",48094],["authority",47309],["miss",46525],["design",48605],["sort",47086],["one",45596],["act",45648],["ten",46827],["knowledge",50335],["gun",47305],["station",46299],["blue",47622],["state",47977],["strategy",49126],["little",45469],["clearly",45912],["discuss",46852],["indeed",46184],["force",44931],["truth",45155],["song",45352],["example",47134],["democratic",47299],["check",45760],["environment",47807],["leg",47477],["dark",47565],["public",45684],["various",46777],["rather",44934],["laugh",48567],["guess",48046],["executive",47338],["set",45121],["study",44897],["prove",44304],["hang",46632],["entire",43997],["rock",45225],["design",45946],["enough",44378],["forget",45571],["since",45591],["claim",44259],["note",44720],["remove",44683],["manager",46187],["help",43721],["close",43568],["sound",45311],["enjoy",44020],["network",45122],["legal",44820],["religious",46425],["cold",44649],["form",44646],["final",43589],["main",43707],["science",45726],["green",44673],["memory",43531],["card",43605],["above",44130],["seat",44404],["cell",44831],["establish",45921],["nice",44792],["trial",44489],["expert",43898],["that",43359],["spring",44085],["firm",44704],["Democrat",46905],["radio",43156],["visit",42941],["management",45112],["care",42978],["avoid",42890],["imagine",43487],["tonight",47549],["huge",42582],["ball",43512],["no",44951],["close",42826],["finish",43143],["yourself",43401],["talk",43267],["theory",45553],["impact",43782],["respond",42139],["statement",42941],["maintain",43493],["charge",42353],["popular",42399],["traditional",43681],["onto",43538],["reveal",42605],["direction",41280],["weapon",43158],["employee",42824],["cultural",45673],["contain",42542],["peace",42273],["head",41658],["control",41771],["base",41154],["pain",41350],["apply",42391],["play",41662],["measure",43938],["wide",41233],["shake",45160],["fly",41373],["interview",41594],["manage",40536],["chair",43256],["fish",41488],["particular",42291],["camera",41218],["structure",43638],["politics",41758],["perform",41667],["bit",41915],["weight",41919],["suddenly",43382],["discover",40489],["candidate",43251],["top",41484],["production",42052],["treat",40264],["trip",40423],["evening",40881],["affect",41496],["inside",40856],["conference",40643],["unit",41087],["best",39959],["style",40889],["adult",40705],["worry",40210],["range",41326],["mention",39815],["rather",41558],["far",39967],["deep",40126],["past",39559],["edge",40960],["individual",42325],["specific",42397],["writer",39666],["trouble",39659],["necessary",40776],["throughout",40170],["challenge",40380],["fear",38857],["shoulder",42843],["institution",42153],["middle",40402],["sea",39516],["dream",39613],["bar",39853],["beautiful",40052],["property",40027],["instead",39051],["improve",40214],["stuff",40180],["detail",38750]];
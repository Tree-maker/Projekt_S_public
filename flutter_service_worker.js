'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "634861187cd95de4c014e030b56ce12c",
".git/config": "a134ddbd3307cbbe9e022302cc55b103",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "512c95159a948039b4284b5ea89ae541",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fae1037f62cc1a9152a3bb9ad6a087ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aad366283269368d3568074581c66ed3",
".git/logs/refs/heads/main": "d97fd7fd233c71fcbb99cb198f332b00",
".git/logs/refs/remotes/origin/main": "56ea74d345be49c5b792f0a77462516c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/68abb5bde2de7fb9b4c6f1dcf43a57a3ebd68a": "ce598d7c12f2005e1335bdd79dc34fd7",
".git/objects/09/60e6ed457f77d3a0e454808a7bdb8db7e998c6": "140b4ccb01fde684d8eed154c75e7f62",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/01f53611bfe651208d86cb591eccff6dec93ff": "6214a6dc320e1dba642c3a25f435d66d",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/f235b17c2fc2cb16fa613df2032efe6aa8c8e9": "e6402ba3e95a864c7f793e4e17ab63bc",
".git/objects/11/0780e33366b77648cc981d5939fed009e4b752": "2c1a2d671a7b3509ae01abc298180650",
".git/objects/12/1d74bb8e78c16856a2689b85711f8602ce1c3b": "2b9bb7937114628db7598c0dc9ebfd81",
".git/objects/14/455d113b0a5269bacad15e68b860630b656052": "2f61a12bde91858d4fb308aba5d66618",
".git/objects/15/016e35338281feeaded63db5cbc04237dd6f94": "5bf3926abc30ca5eaf64200d15673d5e",
".git/objects/17/d191c777be2d6801d27f8a3be56f47a57dd51d": "e55af60a7e15f04b2ec6bfb36b57f0ed",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/da8a5e2e12cffba1e7faef2412623f3d6f9d2d": "05e51675aea708c3530126549b454c86",
".git/objects/21/dfdb43b4511e81ae78bb7cccd54dd777e6658e": "4f1dd8818823c8bbd7cd2948427b95e9",
".git/objects/22/e9ffe91be998d490410e8636f82a0a2bee43cd": "949b5fbb961979562db8907f22aa6caf",
".git/objects/26/79d1e3b1e3288d6e470c3d7ea458504ca9678b": "e74a6a82e965afe5c680906f0c53df83",
".git/objects/27/08be6b121e5d4528fb0a5713ec237c3c14d9c6": "06609e1e6d7cbc13957492ce6850eb08",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/b574165222590758eb2f5a199c4bd100cec866": "ee97e55789360bbad6869f3c61408475",
".git/objects/35/767bdc5b5ebabc2604cdb2b56d184c020a4917": "e7296227da539e6ae27a509a5d8fc85d",
".git/objects/36/2ed7af9b08a2ef85285ab491f7eb365bb16243": "db861cf7e5984dd8dac5814d4bb6fd0b",
".git/objects/37/1fdbd8eb70c18fb17213e18aed9df91b25bdb1": "6f3b597b1c7ebfe9ce90c6acc252d6cf",
".git/objects/37/70c7a2678d82a6d843b5c5c203dc6dc2be31c8": "06911015ae66e1fefe82e0b86980ee25",
".git/objects/39/2b5b1ab88c9a69d95ad16818bfd32f5339a479": "46a0987d53a51a0dfa29279c196b8aa1",
".git/objects/39/3a28e6427b7bfa85dcecb3ba216cc19007dc54": "39570b5dd9f73501edc6954edf3f1b3b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/382269df37d1ff9320748e11d9342de0889910": "323010a0f9986018c07f08af6aabc12e",
".git/objects/41/2f69bb20d272deb815dfb6118553cc9076605d": "0d821f81b1e6c563829244c7760ed748",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/82aa6d4bfa1789ef99494bd1107e0dc6f0f07d": "8f246599f681376f00f01f571b0ac8ce",
".git/objects/46/458779fb588d6fe141fa911680896fc6d928c7": "17f6099b6df3abf320acc31d2955ee4b",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/489014e30a0b3896b6a3d216f4fbc3b825be2d": "baa3100191e58976b2995e763522a1fe",
".git/objects/49/5738ab615baf80a4126b86244af744e2e68ab9": "82111f7deadf4d6b5cf070128341cfee",
".git/objects/49/6a5e6f758b6ba84ed8a61fcd568dc86e313249": "4483fe819aa450f646bc646c0e437675",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/02384c0f7ca173c8b8cabc8c33f4711a404e60": "62367e02f6915c52949930e9c6c4cbba",
".git/objects/52/4fb88ede98254d3d6d29a531807cce0f97a608": "6400bdd56ae07e9cf831ebc567b9b6f7",
".git/objects/53/6a68c8ddd6794d96bf6831d84302789f11e9fa": "8c81c9d74521e812597c780e16fbdb0e",
".git/objects/56/b83f200d9212e31201e64864bab561ed9b5c92": "e5b0735c6a88cd22e31e216a8368fb8c",
".git/objects/57/ecf34b39292fcfe1785a217999828e29db857d": "19a7cf653648b8838a553fa03c54671d",
".git/objects/5b/1f179689802d86b628c582958719f1db5cd9ac": "f2226f0bf4de0be303e4c227da48ff3b",
".git/objects/5d/76fff07ff402c3fc5970b7e7ac6e028b14c7a6": "6e15c651c54ae59845a01c8070af5b93",
".git/objects/60/af657da8b530f4c6b2391b88ada211d329364a": "5fb1982539c5322ad48e46fb10c28893",
".git/objects/62/428a01afa8435bd2b2fee0597c4ba9dbdc336a": "b20ea2b77a300760785e8bb255ff33d3",
".git/objects/66/8bd1882a821f769adbce4d533d6396443d9b05": "64e168c2b00fedb2038c86f6320fb4ce",
".git/objects/68/3c717b96ea039dfefb23194e36c6b3097d63d5": "347401cc6d4f91a91f2105e31429de77",
".git/objects/69/2205320515d5f7d91b1f98cbf510455275fb5b": "c6b476389f0cc994a54b2f01343e4971",
".git/objects/71/42db25ed535019e6b3f3d51e56ee62250f6c3a": "d7bb10c01b2cc7ec2dce7ce929538ac5",
".git/objects/71/a210cfa612b783efe758b3415754e58800fa5a": "28cfea6e56da2b04708372fb3fb52282",
".git/objects/72/2e85e47106c63181ec4e6c25cb5426f2fe6be9": "531a2af6ea378c4242b6afaf50b00155",
".git/objects/75/b241aad561a394dfbe927744546dfd2f837ff7": "a87f211edb353fc729ceab68f0e73306",
".git/objects/7f/87b754b54900d918d936a49ec61a7fd3b6d378": "ae2d333086546ea4f49a32b410126558",
".git/objects/81/25c51fdbab4d2a3cf35b1d1ee4dc4c0e22e38b": "faa0e8695af4ebda8009b3f422d05d26",
".git/objects/84/d847ad7323cda1fa13e40fb1921d50bf30225a": "548b85eb804dfbe38e6bc1e1ab807293",
".git/objects/85/0ad02aa6b571d2674a9bbdfed935a9d51bc932": "759378f27dd5d9661a88ce7059947102",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8d/fb2ce8072ad70e7fd558c877977e93f85df6a4": "55789d48f6274cd81b646e70a9a7ce9f",
".git/objects/8e/c25b517048492a26485ff5f1e6608ce9a91de0": "e50371563482d4082fba588ca7439c82",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/148ff808b6679d166a5dd08eaf422d5128b4a9": "136f3feefee189950454f52f6fbe3941",
".git/objects/9a/3dba7414b42f5d5bbd60c44bfd4bd620e4c397": "df0e3e75d25d28101f0809fd1c32f84b",
".git/objects/9a/c34d7ee5a9f35abf7391393a674e9e46673324": "5f572984ee99eb2fb9ce941217668260",
".git/objects/9a/f4bfde35d436db3b9882431fd178e61ab9e53d": "a01927d5462b6ded9a52011178c707b6",
".git/objects/9e/c8e7664c8d49fc91fc3fd57e5a8fbfb405d0e7": "6a1d4c062866469fc4aec9a06c0f6ea9",
".git/objects/a2/ce31287293a91076f1b35f5b9517c9a29a40cf": "6de71ea5d94e54ea59002659666b3a93",
".git/objects/a3/2c450b68de393c5839c2bd5a3abac3d3154d9d": "3b57db540d432d36c23111165267c734",
".git/objects/a4/3d462aad718e598c35ea547af25d156733042b": "e74bd842a1021b390b22127d09685887",
".git/objects/a4/bf5ff6310dba7a46d0449a33de28b18c25405d": "e68813305317d0984b18449436287be3",
".git/objects/ab/ed7c8a9fd422216afb23a09531a4843b74f917": "f693652cb512aa3b43b10243d385d936",
".git/objects/ac/cbec35b388bc357de711a55f5807905c7ef60b": "4482dfbee11961485c6aa1adfefcd111",
".git/objects/b3/2e32cdf8b91c92b4fc44852915d032b05c0224": "b8d028fecd2b6cdb10f12e1be6d76fbd",
".git/objects/b4/39cd0d378c8238b639b0872b6c40c4a7a78e1e": "5a1ca8711a618ce3811c1a3482f4f5ec",
".git/objects/b4/59c42d6e932cc95c32ef0e8041d9805d887d8a": "291baf5dd5341db0bc74107cbc21e174",
".git/objects/b5/8c4cee3a922ad65b6a47bd95053c319b4e7dd7": "35510441e2349604ddf7f848660080b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/de0502a4e0d1ce94dca4461dc557ea781491c9": "038b441a896c6287a01f129b2480c3ee",
".git/objects/c1/062cb090e77d161f519603d6e81c3192f29b11": "8ac06c0723481b5f99a2ac432a4cb7d2",
".git/objects/c2/dd68aff10334ab8e2287812a7d2a57dcc36b2b": "297f734f26fc51871167c8beb0e79c75",
".git/objects/c3/3ef7c296fec2ae9917649c43edca95984a85f3": "41aefb2388ecfd5bd297e6a4df0931bb",
".git/objects/c5/61393cbbee43342f4abba68465f0b472289a03": "9063ed7070bb03bc3e9431a6131cec88",
".git/objects/c5/d90bb572a472dc53d187359ec46ed9b83a63ce": "8a90ca173ed046850b018cefecaa5f76",
".git/objects/c9/0393e8051c213aa0d8658fcf711ee39bbcbff9": "0d6510aeba539037fa1952caad68b1dd",
".git/objects/cd/76eec755ee34cfe2ca2e1d76199e458427cf6e": "c4aed752a9e8bf4b9b3aa9c006193f92",
".git/objects/d0/d8a1f5fa8e0e00cb8a8c5e62aada759b3427f6": "66ad46c0badd2fc58e52f87b22bf1b90",
".git/objects/d4/b52491da6d8b046f7a6d65ff114c3f23752796": "3bf6d2076197f489002c5b028cc12174",
".git/objects/d5/2c52261cead717fdf34f35c943f7d92a400a61": "c53346dda6244e6ed568112c7a411bb6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/ae1a3333d650a8a35d2b1bf19ed959babbc8a7": "cbeb2617700a2aee4ccae17a41b85c1e",
".git/objects/e8/c391bdbe96b8672a994055d4c2fed9e01e7ffe": "214c8749a00c4d1bc016ca565493c8bf",
".git/objects/e9/17d9926b4f164371e16059c1c4e82c137c8f23": "8f85faf81c61f53745ea595852381672",
".git/objects/e9/3f685b57da1de8064fd5fbc1a0485edcdc09b3": "8ec068eb78c59f646d1c5359c0ebb6f7",
".git/objects/e9/43cd43955e52b01822780bc51be1b6f893bcb2": "9fa74c8509c1f0b609b55f51be149db2",
".git/objects/eb/777e3a29a71127b5a97ba6767debdfc9985851": "3a0eb57d29497b557dc491bec5fe38b7",
".git/objects/eb/964edacf79f19f4f8c9273f073dc5e0573c8d3": "aaa118aff8732d73832b1bf03d2e9280",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/024f9a831403442dba7c67cba601e19dee9b7a": "9c67cc14a4dd82de797bd50a42ad91fc",
".git/objects/ee/db02cc538b4fcb6dfd5b4042683c0caf98ac56": "1da83b727e29d511d485a1af68a0a60d",
".git/objects/f2/22ea3b5846d440c9408e67e46eb3cc67c5552e": "6bb9987fb639be3242ecc532ae00d270",
".git/objects/f5/2142477f84e28e3a0377ecfe7c12a99733e532": "d3b85dde5d29490836f14046e9e86b20",
".git/objects/f7/6c7109427beeb449cccc5aa6bb3213e996381c": "e87276cbf2b98ffca66dfa41f79ce076",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fa/e5c7f012ad17ffa05672b9cfabfb510bc4e062": "d1def066a0ed4923f73db374b2ccae28",
".git/objects/fb/2987e9ff7568823eed259bf3767965052f7f73": "fa129116a4243e778927338f0c195d21",
".git/objects/fb/a6aaea9a4889f0b35338b8f0577aaadb11df7f": "31520b4db4a892de9309fe88bedf6ef5",
".git/objects/fd/3ffc77bc061dc3fa7006f96f15504df09b43a4": "acb76be9c9d0be28e870c84357a6e93e",
".git/refs/heads/main": "9002144227ca9c5fbcb2f771838fb5ed",
".git/refs/remotes/origin/main": "9002144227ca9c5fbcb2f771838fb5ed",
"assets/AssetManifest.bin": "4a89ab636f2f22418b75a1e23492c0ab",
"assets/AssetManifest.bin.json": "70cf0bc967f8abe05a2367856867ed80",
"assets/AssetManifest.json": "ebb95fe3c52073fb97e9a96c450439c3",
"assets/assets/configFiles/config.json": "9a8240a205cd706cfbb182eefafd8ca9",
"assets/assets/images/Image1.jpg": "a27f5025374f930a4c3bed42261f524f",
"assets/assets/images/Image10.jpg": "f18141f22decb949cfe8b09363c792b0",
"assets/assets/images/Image11.jpg": "33610273fed1dd84d6c204cb0e0fd160",
"assets/assets/images/Image12.jpg": "fab9618ee169f23db195a1f4a5deb9bf",
"assets/assets/images/Image13.jpg": "10c8f3ef1eeb8890962b467712bee688",
"assets/assets/images/Image14.jpg": "ffa239b72bde091664e289499ca9bfc1",
"assets/assets/images/Image15.jpg": "3e278173b7330de2305adb3aec84d887",
"assets/assets/images/Image16.jpg": "e728d704ac8c970b8120665c8fe01548",
"assets/assets/images/Image17.jpg": "3bd563b83cc899c699f3d5338f3a2d30",
"assets/assets/images/Image18.jpg": "1ffecb201ccd07d0dc1e4381c1539018",
"assets/assets/images/Image19.jpg": "95745c6c37872adff675028a55b32308",
"assets/assets/images/Image2.jpg": "d06728f4388d0f0756a17481a4ee2b21",
"assets/assets/images/Image20.jpg": "6cce8c6bb547309baf6e09adf8f5cbc2",
"assets/assets/images/Image21.jpg": "9112aca5515c5ceb0a14c0c2520221cf",
"assets/assets/images/Image22.jpg": "8892f0e6ca1c7b03b69cc227098a884a",
"assets/assets/images/Image23.jpg": "752fb7284e21b9dfc781c72cdb951598",
"assets/assets/images/Image24.jpg": "6fc25f9312d67e5f92975bb97939b474",
"assets/assets/images/Image3.jpg": "b050597f96e579446aa7ff9c92358433",
"assets/assets/images/Image4.jpg": "cdfe55b47e728334fc08546d9ffd8c60",
"assets/assets/images/Image5.jpg": "a6cf21f760be96af6043d18b8ef7f5d3",
"assets/assets/images/Image6.jpg": "f34fab8f5b1d289d8cd5bde42cbc91ee",
"assets/assets/images/Image7.jpg": "e5be64a5f6755ca0cd3d42c8dffeb288",
"assets/assets/images/Image8.jpg": "3eb5229ef97dab8ec1719d84b19d0f22",
"assets/assets/images/Image9.jpg": "111aacb373630d831792ed44f9085279",
"assets/configFiles/config.json": "a8688b19b332a5a7e1a6deb70108da19",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/images/Image1.jpg": "a27f5025374f930a4c3bed42261f524f",
"assets/images/Image10.jpg": "f18141f22decb949cfe8b09363c792b0",
"assets/images/Image11.jpg": "33610273fed1dd84d6c204cb0e0fd160",
"assets/images/Image12.jpg": "fab9618ee169f23db195a1f4a5deb9bf",
"assets/images/Image13.jpg": "10c8f3ef1eeb8890962b467712bee688",
"assets/images/Image14.jpg": "ffa239b72bde091664e289499ca9bfc1",
"assets/images/Image15.jpg": "3e278173b7330de2305adb3aec84d887",
"assets/images/Image16.jpg": "e728d704ac8c970b8120665c8fe01548",
"assets/images/Image17.jpg": "3bd563b83cc899c699f3d5338f3a2d30",
"assets/images/Image18.jpg": "1ffecb201ccd07d0dc1e4381c1539018",
"assets/images/Image19.jpg": "95745c6c37872adff675028a55b32308",
"assets/images/Image2.jpg": "d06728f4388d0f0756a17481a4ee2b21",
"assets/images/Image20.jpg": "6cce8c6bb547309baf6e09adf8f5cbc2",
"assets/images/Image21.jpg": "9112aca5515c5ceb0a14c0c2520221cf",
"assets/images/Image22.jpg": "8892f0e6ca1c7b03b69cc227098a884a",
"assets/images/Image23.jpg": "752fb7284e21b9dfc781c72cdb951598",
"assets/images/Image24.jpg": "6fc25f9312d67e5f92975bb97939b474",
"assets/images/Image3.jpg": "b050597f96e579446aa7ff9c92358433",
"assets/images/Image4.jpg": "cdfe55b47e728334fc08546d9ffd8c60",
"assets/images/Image5.jpg": "a6cf21f760be96af6043d18b8ef7f5d3",
"assets/images/Image6.jpg": "f34fab8f5b1d289d8cd5bde42cbc91ee",
"assets/images/Image7.jpg": "e5be64a5f6755ca0cd3d42c8dffeb288",
"assets/images/Image8.jpg": "3eb5229ef97dab8ec1719d84b19d0f22",
"assets/images/Image9.jpg": "111aacb373630d831792ed44f9085279",
"assets/NOTICES": "4e166e532c9e4f0a5b2b0beb5cdaa4f4",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "931d3d27837169eda7ea39b162311911",
"/": "931d3d27837169eda7ea39b162311911",
"main.dart.js": "4b3fafc65f49dd047e1a7ef20ab94491",
"manifest.json": "18b05de58f5aeed2ffa6be1246cc43f1",
"version.json": "731e1c91de4103595d12e3ffa1699cac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

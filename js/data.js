// 节气志 - 数据文件
// 二十四节气完整数据：日期、太阳黄经、物候、古籍描述、当代气候数据

const solarTerms = [
  {
    id: "lichun", name: "立春", pinyin: "Lìchūn", season: "spring",
    date: "2月3-5日", longitude: 315,
    phenology: { first: "东风解冻", second: "蛰虫始振", third: "鱼陟负冰" },
    ancient: "立春，正月节。立，建始也。五行之气往者过来者续于此。而春木之气始至，故谓之立也。",
    modernTemp: 3.2, oldTemp: 1.8, tempChange: 1.4, humidity: 55, precipitation: 15,
    phenologyChange: "河流解冻期平均提前约8天",
    aiDialogue: "古人道：'东风解冻，蛰虫始振。'如今立春时节，全国平均气温已达3.2°C，较五十年前升高1.4°C。河流解冻期普遍提前，冬眠动物苏醒时间也有所提前——春天，真的来得更早了。"
  },
  {
    id: "yushui", name: "雨水", pinyin: "Yǔshuǐ", season: "spring",
    date: "2月18-20日", longitude: 330,
    phenology: { first: "獭祭鱼", second: "鸿雁来", third: "草木萌动" },
    ancient: "雨水，正月中。天一生水。春始属木，然生木者必水也，故立春后继之雨水。",
    modernTemp: 5.5, oldTemp: 4.0, tempChange: 1.5, humidity: 60, precipitation: 20,
    phenologyChange: "鸿雁北归时间提前约5-7天",
    aiDialogue: "古人云：'獭祭鱼，鸿雁来，草木萌动。'当代雨水节气，气温已升至5.5°C，较过去升高1.5°C。南方雨季开始提前，鸿雁北归的日期也较五十年前提前了约一周。"
  },
  {
    id: "jingzhe", name: "惊蛰", pinyin: "Jīngzhé", season: "spring",
    date: "3月5-7日", longitude: 345,
    phenology: { first: "桃始华", second: "仓庚鸣", third: "鹰化为鸠" },
    ancient: "惊蛰，二月节。蛰，言发蛰也。万物出乎震，震为雷，故曰惊蛰。是蛰虫惊而出走矣。",
    modernTemp: 9.0, oldTemp: 7.5, tempChange: 1.5, humidity: 58, precipitation: 25,
    phenologyChange: "桃花初花期平均提前约7天",
    aiDialogue: "古人说：'桃始华，仓庚鸣。'如今惊蛰时节，平均气温9.0°C，较过去升高1.5°C。桃花初花日期平均提前了7天，春雷初响的日期也在提前——春天的脚步，越来越快了。"
  },
  {
    id: "chunfen", name: "春分", pinyin: "Chūnfēn", season: "spring",
    date: "3月20-22日", longitude: 0,
    phenology: { first: "玄鸟至", second: "雷乃发声", third: "始电" },
    ancient: "春分，二月中。分者，半也。此当九十日之半，故谓之分。",
    modernTemp: 11.5, oldTemp: 10.0, tempChange: 1.5, humidity: 60, precipitation: 30,
    phenologyChange: "燕子归来日期提前约6天",
    aiDialogue: "古人记：'玄鸟至，雷乃发声。'春分昼夜均分，当代平均气温11.5°C，较过去升高1.5°C。燕子归来的日期提前了约6天，雷电出现时间也有所提前。"
  },
  {
    id: "qingming", name: "清明", pinyin: "Qīngmíng", season: "spring",
    date: "4月4-6日", longitude: 15,
    phenology: { first: "桐始华", second: "田鼠化为鴽", third: "虹始见" },
    ancient: "清明，三月节。按《国语》曰：时有八风，历独指清明风，为三月节。此风气齐万物而生。",
    modernTemp: 14.5, oldTemp: 13.0, tempChange: 1.5, humidity: 62, precipitation: 40,
    phenologyChange: "'清明时节雨纷纷'在北方已不太准确，降水日数减少",
    aiDialogue: "杜牧诗云：'清明时节雨纷纷。'如今清明平均气温14.5°C，升高1.5°C。在北方，清明降水日数有所减少，'雨纷纷'的景象已不如从前典型。但南方春雨依然充沛。"
  },
  {
    id: "guyu", name: "谷雨", pinyin: "Gǔyǔ", season: "spring",
    date: "4月19-21日", longitude: 30,
    phenology: { first: "萍始生", second: "鸣鸠拂其羽", third: "戴胜降于桑" },
    ancient: "谷雨，三月中。自雨水后，土膏脉动，今又雨其谷于水也。雨读作去声，如雨我公田之雨。",
    modernTemp: 17.0, oldTemp: 15.5, tempChange: 1.5, humidity: 65, precipitation: 50,
    phenologyChange: "春播期提前，作物生长季延长",
    aiDialogue: "古人道：'萍始生，鸣鸠拂其羽。'谷雨是春播的关键时节，当代平均气温17.0°C，升高1.5°C。温暖的气候让春播期提前，作物生长季延长，但也增加了病虫害风险。"
  },
  {
    id: "lixia", name: "立夏", pinyin: "Lìxià", season: "summer",
    date: "5月5-7日", longitude: 45,
    phenology: { first: "蝼蝈鸣", second: "蚯蚓出", third: "王瓜生" },
    ancient: "立夏，四月节。立字解见春。夏，假也。物至此时皆假大也。",
    modernTemp: 20.5, oldTemp: 18.8, tempChange: 1.7, humidity: 65, precipitation: 55,
    phenologyChange: "平均入夏日期较50年前提前约5-7天",
    aiDialogue: "古人记：'蝼蝈鸣，蚯蚓出。'立夏意味着夏天的开始。当代平均气温20.5°C，升高1.7°C。更重要的是，全国平均入夏日期较五十年前提前了约5-7天，夏天真的越来越长了。"
  },
  {
    id: "xiaoman", name: "小满", pinyin: "Xiǎomǎn", season: "summer",
    date: "5月20-22日", longitude: 60,
    phenology: { first: "苦菜秀", second: "靡草死", third: "麦秋至" },
    ancient: "小满，四月中。小满者，物致于此小得盈满。",
    modernTemp: 23.0, oldTemp: 21.2, tempChange: 1.8, humidity: 65, precipitation: 60,
    phenologyChange: "小麦成熟期提前，干热风风险增加",
    aiDialogue: "古人云：'苦菜秀，靡草死，麦秋至。'小满时节麦类开始饱满。当代平均气温23.0°C，升高1.8°C。温暖气候使小麦成熟期提前，但干热风等灾害风险也在增加。"
  },
  {
    id: "mangzhong", name: "芒种", pinyin: "Mángzhòng", season: "summer",
    date: "6月5-7日", longitude: 75,
    phenology: { first: "螳螂生", second: "鵙始鸣", third: "反舌无声" },
    ancient: "芒种，五月节。谓有芒之种谷可稼种矣。",
    modernTemp: 25.5, oldTemp: 23.8, tempChange: 1.7, humidity: 68, precipitation: 70,
    phenologyChange: "夏收夏种期提前，农时节奏加快",
    aiDialogue: "古人记：'螳螂生，鵙始鸣。'芒种是夏收夏种的大忙时节。当代平均气温25.5°C，升高1.7°C。气候变暖让农时节奏加快，夏收夏种期整体提前。"
  },
  {
    id: "xiazhi", name: "夏至", pinyin: "Xiàzhì", season: "summer",
    date: "6月21-22日", longitude: 90,
    phenology: { first: "鹿角解", second: "蜩始鸣", third: "半夏生" },
    ancient: "夏至，五月中。《韵会》曰：夏，假也；至，极也。万物于此皆假大而至极也。",
    modernTemp: 27.0, oldTemp: 25.5, tempChange: 1.5, humidity: 70, precipitation: 80,
    phenologyChange: "夏至后高温日数显著增加，极端高温事件增多",
    aiDialogue: "古人道：'鹿角解，蜩始鸣。'夏至是一年中白昼最长的一天。当代平均气温27.0°C，升高1.5°C。夏至后的高温日数显著增加，极端高温事件越来越频繁。"
  },
  {
    id: "xiaoshu", name: "小暑", pinyin: "Xiǎoshǔ", season: "summer",
    date: "7月6-8日", longitude: 105,
    phenology: { first: "温风至", second: "蟋蟀居宇", third: "鹰始鸷" },
    ancient: "小暑，六月节。《说文》曰：暑，热也。就热之中，分为大小，月初为小，月中为大，今则热气犹小也。",
    modernTemp: 28.5, oldTemp: 26.8, tempChange: 1.7, humidity: 75, precipitation: 85,
    phenologyChange: "高温开始时间提前，'温风至'已成常态",
    aiDialogue: "古人记：'温风至，蟋蟀居宇。'小暑意味着炎热开始。当代平均气温28.5°C，升高1.7°C。'温风至'在当代已成常态，高温开始的时间较过去明显提前。"
  },
  {
    id: "dashu", name: "大暑", pinyin: "Dàshǔ", season: "summer",
    date: "7月22-24日", longitude: 120,
    phenology: { first: "腐草为萤", second: "土润溽暑", third: "大雨时行" },
    ancient: "大暑，六月中。解见小暑。",
    modernTemp: 29.5, oldTemp: 27.8, tempChange: 1.7, humidity: 78, precipitation: 90,
    phenologyChange: "极端高温事件集中期，最热节气温度纪录不断刷新",
    aiDialogue: "古人道：'土润溽暑，大雨时行。'大暑是一年中最热的时节。当代平均气温29.5°C，升高1.7°C。大暑前后是极端高温事件最集中的时期，新的高温纪录不断被刷新。"
  },
  {
    id: "liqiu", name: "立秋", pinyin: "Lìqiū", season: "autumn",
    date: "8月7-9日", longitude: 135,
    phenology: { first: "凉风至", second: "白露降", third: "寒蝉鸣" },
    ancient: "立秋，七月节。立字解见春。秋，揫也，物于此而揫敛也。",
    modernTemp: 27.5, oldTemp: 25.8, tempChange: 1.7, humidity: 75, precipitation: 80,
    phenologyChange: "'秋老虎'现象更频繁，立秋后高温持续时间延长",
    aiDialogue: "古人记：'凉风至，白露降。'立秋本应是凉爽的开始。但当代平均气温27.5°C，升高1.7°C。'秋老虎'现象越来越频繁，立秋后高温持续的时间明显延长——秋天，来得越来越晚了。"
  },
  {
    id: "chushu", name: "处暑", pinyin: "Chǔshǔ", season: "autumn",
    date: "8月22-24日", longitude: 150,
    phenology: { first: "鹰乃祭鸟", second: "天地始肃", third: "禾乃登" },
    ancient: "处暑，七月中。处，止也。暑气至此而止矣。",
    modernTemp: 25.0, oldTemp: 23.5, tempChange: 1.5, humidity: 72, precipitation: 70,
    phenologyChange: "暑热结束时间推迟，'秋老虎'延伸至处暑后",
    aiDialogue: "古人云：'暑气至此而止矣。'处暑意味着炎热结束。当代平均气温25.0°C，升高1.5°C。但暑热真正结束的时间有所推迟，'秋老虎'常常延伸至处暑之后。"
  },
  {
    id: "bailu", name: "白露", pinyin: "Báilù", season: "autumn",
    date: "9月7-9日", longitude: 165,
    phenology: { first: "鸿雁来", second: "玄鸟归", third: "群鸟养羞" },
    ancient: "白露，八月节。秋属金，金色白，阴气渐重，露凝而白也。",
    modernTemp: 21.5, oldTemp: 20.0, tempChange: 1.5, humidity: 68, precipitation: 55,
    phenologyChange: "露水日数减少，初露日期推迟",
    aiDialogue: "古人道：'露凝而白也。'白露时节天气转凉，露水凝结。当代平均气温21.5°C，升高1.5°C。由于气候变暖，白露时节的露水日数有所减少，初露日期也在推迟。"
  },
  {
    id: "qiufen", name: "秋分", pinyin: "Qiūfēn", season: "autumn",
    date: "9月22-24日", longitude: 180,
    phenology: { first: "雷始收声", second: "蛰虫坯户", third: "水始涸" },
    ancient: "秋分，八月中。解见春分。",
    modernTemp: 18.0, oldTemp: 16.5, tempChange: 1.5, humidity: 65, precipitation: 45,
    phenologyChange: "秋季降温速率减慢，入秋时间推迟",
    aiDialogue: "古人记：'雷始收声，蛰虫坯户。'秋分昼夜再次均分。当代平均气温18.0°C，升高1.5°C。秋季降温速率有所减慢，全国平均入秋时间较过去推迟。"
  },
  {
    id: "hanlu", name: "寒露", pinyin: "Hánlù", season: "autumn",
    date: "10月8-9日", longitude: 195,
    phenology: { first: "鸿雁来宾", second: "雀入大水为蛤", third: "菊有黄华" },
    ancient: "寒露，九月节。露气寒冷，将凝结也。",
    modernTemp: 14.0, oldTemp: 12.3, tempChange: 1.7, humidity: 62, precipitation: 35,
    phenologyChange: "菊花花期推迟，寒露降温幅度减小",
    aiDialogue: "古人云：'菊有黄华。'寒露时节菊花盛开。当代平均气温14.0°C，升高1.7°C。菊花花期有所推迟，寒露前后的降温幅度也在减小。"
  },
  {
    id: "shuangjiang", name: "霜降", pinyin: "Shuāngjiàng", season: "autumn",
    date: "10月23-24日", longitude: 210,
    phenology: { first: "豺乃祭兽", second: "草木黄落", third: "蛰虫咸俯" },
    ancient: "霜降，九月中。气肃而凝，露结为霜矣。",
    modernTemp: 10.5, oldTemp: 8.5, tempChange: 2.0, humidity: 60, precipitation: 25,
    phenologyChange: "初霜日期平均推迟约10-15天，霜期缩短",
    aiDialogue: "古人记：'气肃而凝，露结为霜矣。'霜降意味着初霜来临。当代平均气温10.5°C，升高2.0°C——这是24节气中升温最显著的之一。全国平均初霜日期推迟了约10-15天，霜期明显缩短。"
  },
  {
    id: "lidong", name: "立冬", pinyin: "Lìdōng", season: "winter",
    date: "11月7-8日", longitude: 225,
    phenology: { first: "水始冰", second: "地始冻", third: "雉入大水为蜃" },
    ancient: "立冬，十月节。立字解见春。冬，终也，万物收藏也。",
    modernTemp: 6.5, oldTemp: 4.2, tempChange: 2.3, humidity: 58, precipitation: 20,
    phenologyChange: "平均入冬日期推迟约7-10天，结冰期缩短",
    aiDialogue: "古人道：'水始冰，地始冻。'立冬本应是水冰地冻的开始。当代平均气温6.5°C，升高2.3°C——升温幅度在24节气中名列前茅。全国平均入冬日期推迟了约7-10天，河流开始结冰的时间也明显推迟。"
  },
  {
    id: "xiaoxue", name: "小雪", pinyin: "Xiǎoxuě", season: "winter",
    date: "11月22-23日", longitude: 240,
    phenology: { first: "虹藏不见", second: "天气上升地气下降", third: "闭塞而成冬" },
    ancient: "小雪，十月中。雨下而为寒气所薄，故凝而为雪。小者未盛之辞。",
    modernTemp: 3.0, oldTemp: 0.8, tempChange: 2.2, humidity: 55, precipitation: 15,
    phenologyChange: "初雪日期平均推迟约15天，降雪量减少",
    aiDialogue: "古人记：'雨下而为寒气所薄，故凝而为雪。'小雪时节应开始降雪。当代平均气温3.0°C，升高2.2°C。全国平均初雪日期推迟了约15天，很多地方小雪时节已不见雪，降雪量也在减少。"
  },
  {
    id: "daxue", name: "大雪", pinyin: "Dàxuě", season: "winter",
    date: "12月6-8日", longitude: 255,
    phenology: { first: "鹖鴠不鸣", second: "虎始交", third: "荔挺出" },
    ancient: "大雪，十一月节。大者，盛也。至此而雪盛矣。",
    modernTemp: 0.0, oldTemp: -2.2, tempChange: 2.2, humidity: 52, precipitation: 12,
    phenologyChange: "大雪节气降雪日数减少，'雪盛'景象减少",
    aiDialogue: "古人云：'至此而雪盛矣。'大雪本应是降雪最盛的时节。当代平均气温0.0°C，升高2.2°C。大雪节气的降雪日数明显减少，很多地方'雪盛'的景象已不如从前典型。"
  },
  {
    id: "dongzhi", name: "冬至", pinyin: "Dōngzhì", season: "winter",
    date: "12月21-23日", longitude: 270,
    phenology: { first: "蚯蚓结", second: "麋角解", third: "水泉动" },
    ancient: "冬至，十一月中。终藏之气，至此而极也。",
    modernTemp: -1.5, oldTemp: -3.8, tempChange: 2.3, humidity: 50, precipitation: 10,
    phenologyChange: "暖冬频率显著增加，冬至低温日数减少",
    aiDialogue: "古人记：'终藏之气，至此而极也。'冬至是一年中白昼最短的一天，也是阴极阳生的转折点。当代平均气温-1.5°C，升高2.3°C。暖冬频率显著增加，冬至前后的极端低温日数明显减少。"
  },
  {
    id: "xiaohan", name: "小寒", pinyin: "Xiǎohán", season: "winter",
    date: "1月5-7日", longitude: 285,
    phenology: { first: "雁北乡", second: "鹊始巢", third: "雉雊" },
    ancient: "小寒，十二月节。月初寒尚小，故云。月半则大矣。",
    modernTemp: -3.0, oldTemp: -5.2, tempChange: 2.2, humidity: 48, precipitation: 8,
    phenologyChange: "小寒不再'小'，极端低温事件减少，喜鹊筑巢提前",
    aiDialogue: "古人道：'月初寒尚小。'小寒本应是寒冷的开始。当代平均气温-3.0°C，升高2.2°C。小寒时节的极端低温事件减少，喜鹊开始筑巢的日期也有所提前——冬天，真的越来越暖了。"
  },
  {
    id: "dahan", name: "大寒", pinyin: "Dàhán", season: "winter",
    date: "1月20-21日", longitude: 300,
    phenology: { first: "鸡乳", second: "征鸟厉疾", third: "水泽腹坚" },
    ancient: "大寒，十二月中。解见前。",
    modernTemp: -2.0, oldTemp: -4.2, tempChange: 2.2, humidity: 48, precipitation: 8,
    phenologyChange: "大寒低温极值升高，结冰期缩短，'小寒胜大寒'更常见",
    aiDialogue: "古人记：'水泽腹坚。'大寒本应是一年中最冷、冰冻最坚实的时节。当代平均气温-2.0°C，升高2.2°C。大寒的低温极值不断升高，河流结冰期缩短。近年来'小寒胜大寒'（小寒比大寒更冷）的情况越来越常见。"
  }
];

// 物候变化汇总
const phenologySummary = [
  { event: "桃花初花", oldDate: "3月15日", newDate: "3月8日", change: -7 },
  { event: "初霜日期", oldDate: "10月25日", newDate: "11月5日", change: 11 },
  { event: "初雪日期", oldDate: "11月20日", newDate: "12月5日", change: 15 },
  { event: "柳树展叶", oldDate: "3月25日", newDate: "3月18日", change: -7 },
  { event: "燕子归来", oldDate: "4月5日", newDate: "3月30日", change: -6 },
  { event: "河流解冻", oldDate: "3月10日", newDate: "3月2日", change: -8 },
  { event: "入冬日期", oldDate: "11月5日", newDate: "11月12日", change: 7 },
  { event: "入夏日期", oldDate: "5月15日", newDate: "5月8日", change: -7 }
];

// 节气扩展数据：诗词、时令、传统色、昼夜时长
const termExtras = {
  lichun:   { poem: {title:"立春偶成", author:"张栻", content:"律回岁晚冰霜少，春到人间草木知。"}, food:"春饼、萝卜、春卷", flower:"梅花", color:{name:"天青", hex:"#8CABBE"}, dayHours:10.8, nightHours:13.2 },
  yushui:   { poem: {title:"春夜喜雨", author:"杜甫", content:"好雨知时节，当春乃发生。随风潜入夜，润物细无声。"}, food:"龙须饼、爆米花", flower:"杏花", color:{name:"黛蓝", hex:"#4A6E8A"}, dayHours:11.3, nightHours:12.7 },
  jingzhe:  { poem: {title:"观田家", author:"韦应物", content:"微雨众卉新，一雷惊蛰始。田家几日闲，耕种从此起。"}, food:"梨、炒豆、煎饼", flower:"桃花", color:{name:"竹青", hex:"#78A66B"}, dayHours:11.8, nightHours:12.2 },
  chunfen:  { poem: {title:"春分日", author:"徐铉", content:"仲春初四日，春色正中分。绿野徘徊月，晴天断续云。"}, food:"春菜、太阳糕、汤圆", flower:"海棠", color:{name:"葱倩", hex:"#5FAB90"}, dayHours:12.0, nightHours:12.0 },
  qingming: { poem: {title:"清明", author:"杜牧", content:"清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。"}, food:"青团、馓子、清明果", flower:"桐花", color:{name:"若草", hex:"#E8E4C9"}, dayHours:12.6, nightHours:11.4 },
  guyu:     { poem: {title:"谷雨", author:"郑板桥", content:"不风不雨正晴和，翠竹亭亭好节柯。最爱晚凉佳客至，一壶新茗泡松萝。"}, food:"香椿、谷雨茶、乌米饭", flower:"牡丹", color:{name:"翠微", hex:"#85B690"}, dayHours:13.1, nightHours:10.9 },
  lixia:    { poem: {title:"山亭夏日", author:"高骈", content:"绿树阴浓夏日长，楼台倒影入池塘。水晶帘动微风起，满架蔷薇一院香。"}, food:"立夏蛋、乌米饭、豌豆糕", flower:"蔷薇", color:{name:"榴花红", hex:"#E05C5C"}, dayHours:13.7, nightHours:10.3 },
  xiaoman:  { poem: {title:"归田园四时乐春夏", author:"欧阳修", content:"南风原头吹百草，草木丛深茅舍小。麦穗初齐稚子娇，桑叶正肥蚕食饱。"}, food:"苦菜、麦饼、樱桃", flower:"虞美人", color:{name:"杏黄", hex:"#F5B864"}, dayHours:14.1, nightHours:9.9 },
  mangzhong:{ poem: {title:"时雨", author:"陆游", content:"时雨及芒种，四野皆插秧。家家麦饭美，处处菱歌长。"}, food:"青梅、煮梅、酸梅汤", flower:"栀子花", color:{name:"鹅黄", hex:"#FFF143"}, dayHours:14.4, nightHours:9.6 },
  xiazhi:   { poem: {title:"夏至避暑北池", author:"韦应物", content:"昼晷已云极，宵漏自此长。未及施政教，所忧变炎凉。"}, food:"夏至面、馄饨、荔枝", flower:"半夏", color:{name:"朱砂", hex:"#FF461F"}, dayHours:14.6, nightHours:9.4 },
  xiaoshu:  { poem: {title:"小暑六月节", author:"元稹", content:"倏忽温风至，因循小暑来。竹喧先觉雨，山暗已闻雷。"}, food:"莲藕、黄鳝、绿豆汤", flower:"凌霄花", color:{name:"绛红", hex:"#C23A2B"}, dayHours:14.3, nightHours:9.7 },
  dashu:    { poem: {title:"大暑", author:"曾几", content:"赤日几时过，清风无处寻。经书聊枕籍，瓜李漫浮沉。"}, food:"仙草、荔枝、羊肉汤", flower:"向日葵", color:{name:"赫赤", hex:"#C93756"}, dayHours:13.9, nightHours:10.1 },
  liqiu:    { poem: {title:"立秋", author:"刘翰", content:"乳鸦啼散玉屏空，一枕新凉一扇风。睡起秋声无觅处，满阶梧桐月明中。"}, food:"西瓜、秋桃、贴秋膘", flower:"桂花(初)", color:{name:"秋香", hex:"#D9A457"}, dayHours:13.3, nightHours:10.7 },
  chushu:   { poem: {title:"早秋曲江感怀", author:"白居易", content:"离离暑云散，袅袅凉风起。池上秋又来，荷花半成子。"}, food:"鸭子、龙眼、白丸子", flower:"荷花", color:{name:"缃色", hex:"#F0C239"}, dayHours:12.8, nightHours:11.2 },
  bailu:    { poem: {title:"蒹葭", author:"诗经", content:"蒹葭苍苍，白露为霜。所谓伊人，在水一方。"}, food:"龙眼、白露茶、番薯", flower:"昙花", color:{name:"月白", hex:"#D6ECF0"}, dayHours:12.3, nightHours:11.7 },
  qiufen:   { poem: {title:"秋分日忆用济", author:"紫静仪", content:"遇节思吾子，吟诗对夕曛。燕将明日去，秋向此时分。"}, food:"秋菜、汤圆、桂花酒", flower:"桂花", color:{name:"鸦青", hex:"#4A4266"}, dayHours:12.0, nightHours:12.0 },
  hanlu:    { poem: {title:"池上", author:"白居易", content:"袅袅凉风动，凄凄寒露零。兰衰花始白，荷破叶犹青。"}, food:"螃蟹、芝麻、花糕", flower:"菊花", color:{name:"黛紫", hex:"#5E4A7E"}, dayHours:11.5, nightHours:12.5 },
  shuangjiang:{poem: {title:"枫桥夜泊", author:"张继", content:"月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。"}, food:"柿子、栗子、牛肉", flower:"芙蓉", color:{name:"黛赭", hex:"#8C5344"}, dayHours:11.0, nightHours:13.0 },
  lidong:   { poem: {title:"立冬", author:"李白", content:"冻笔新诗懒写，寒炉美酒时温。醉看墨花月白，恍疑雪满前村。"}, food:"饺子、羊肉汤、糍粑", flower:"山茶", color:{name:"黛蓝", hex:"#3B2E7E"}, dayHours:10.4, nightHours:13.6 },
  xiaoxue:  { poem: {title:"小雪", author:"戴叔伦", content:"花雪随风不厌看，更多还肯失林峦。愁人正在书窗下，一片飞来一片寒。"}, food:"糍粑、刨汤、腊肉", flower:"水仙", color:{name:"石青", hex:"#1685A1"}, dayHours:10.0, nightHours:14.0 },
  daxue:    { poem: {title:"江雪", author:"柳宗元", content:"千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。"}, food:"红薯粥、羊肉、狗肉", flower:"腊梅", color:{name:"靛蓝", hex:"#065279"}, dayHours:9.7, nightHours:14.3 },
  dongzhi:  { poem: {title:"邯郸冬至夜思家", author:"白居易", content:"邯郸驿里逢冬至，抱膝灯前影伴身。想得家中夜深坐，还应说着远行人。"}, food:"饺子、汤圆、羊肉汤", flower:"雪莲", color:{name:"玄青", hex:"#3D3B4F"}, dayHours:9.6, nightHours:14.4 },
  xiaohan:  { poem: {title:"小寒食舟中作", author:"杜甫", content:"佳辰强饮食犹寒，隐几萧条戴鹖冠。春水船如天上坐，老年花似雾中看。"}, food:"腊八粥、糯米饭、菜饭", flower:"梅花(早)", color:{name:"绀青", hex:"#2E4E7E"}, dayHours:9.8, nightHours:14.2 },
  dahan:    { poem: {title:"苦寒吟", author:"孟郊", content:"天寒色青苍，北风叫枯桑。厚冰无裂文，短日有冷光。"}, food:"糯米饭、八宝饭、年糕", flower:"瑞香", color:{name:"漆黑", hex:"#161823"}, dayHours:10.1, nightHours:13.9 }
};

// 季节颜色
const seasonColors = {
  spring: { primary: "#4caf50", light: "rgba(76,175,80,0.15)", gradient: ["#1b5e20", "#4caf50", "#a5d6a7"] },
  summer: { primary: "#f44336", light: "rgba(244,67,54,0.15)", gradient: ["#b71c1c", "#f44336", "#ef9a9a"] },
  autumn: { primary: "#ff9800", light: "rgba(255,152,0,0.15)", gradient: ["#e65100", "#ff9800", "#ffcc80"] },
  winter: { primary: "#2196f3", light: "rgba(33,150,243,0.15)", gradient: ["#0d47a1", "#2196f3", "#90caf9"] }
};

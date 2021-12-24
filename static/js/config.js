/**
 * 这是学生端的公用配置对象
 * 对应对象为Con 不可改变的对象
 *
 */
const domain = "http://192.168.3.227";
const CON = {
	title: "2021“魅力汉语-德国”",
	msg: "2021“魅力汉语-德国”",
	language: 'china',
    projectId:8,
	api: { //数据请求接口
		visitor: domain + "/toolcms/index/api/visitor.html", //记录访问的游客

	},
	index: { //首页
		title1: "关于我们",
		title2: "About Us",
		item: [{
				name: "熊猫陪我过新年",
				url: '../../static/img/res1.png',
				p: {
					x: 28,
					y: 24,
					w: 35,
					h: 23.2,
					index: 1
				},
				path: "/pages/index/res"

			},
			{
				name: "我与中国的故事",
				url: '../../static/img/yun.png',
				p: {
					x: 0,
					y: 13,
					w: 35,
					h: 23.2,
					index: 2
				},
				path: "/pages/index/yunzhanyan"

			},
			{
				name: "多彩中德文化",
				url: '../../static/img/yinyue.png',
				p: {
					x: 56,
					y: 35,
					w: 35,
					h: 23.2,
					index: 1
				},
				path: "/pages/index/music"

			}


		]

	},
	res: { //资源与服务
		item: [{
				name: "国宝观察日记",
				cover: '../../static/img/liubianxing.png',
				url: '../../static/img/jieshao.png',
				videoUrl: '/pages/index/res1',
				p: {
					x: 10,
					y: 220,
					w: 46.2,
					h: 20,
					index: 2
				},
				path: 3

			}, {
				name: "熊猫与非遗",
				cover: '../../static/img/liubianxing.png',
				url: '../../static/img/shifanke.png',
				videoUrl: '/pages/index/world',
				p: {
					x: 10,
					y: 400,
					w: 46.2,
					h: 20,
					index: 1
				},
				path: 3

			},

			{
				name: "欢乐中国年",
				cover: '../../static/img/liubianxing.png',
				url: '../../static/img/xiazai.png',
				videoUrl: "/pages/index/happy",
				downUrl: 'http://cc-uae.scxhlz.com/down/index.html',
				p: {
					x: 10,
					y: 40,
					w: 46.2,
					h: 20,
					index: 1
				},
				path: 3

			}



		],

		imgArr: [{
				name: "资源与服务",
				url: '../../static/img/tu1.png',


			},
			{
				name: "云展演",
				url: '../../static/img/tu1.png',

			},
			{
				name: "音乐",
				url: '../../static/img/tu1.png',


			},
			{
				name: "thing",
				url: '../../static/img/tu1.png',


			}

		]

	},
	music: {
		"title": {
			"china": "“唱歌学中文”倡导通过组织中文歌曲以及中国音乐文化的教学、表演、交流活动，帮助更多人爱上中文，学习中文和中国文化。在这里，我们和大家分享一系列“中文+音乐”的成功案例，他们中有学习者，有教师，也有学校等机构，希望能和大家一起探讨建立借助文化艺术开展中文教育的新模式。",
			"english": "“Sing & Learn Chinese” aims to help promote Chinese language and culture  and the mutual learning of different languages and cultures . We are here to share a series of successful stories from the students, teachers, and institutions of learning and teaching Chinese in music, arts performance and other cultural exchanges activities,  to explore a new model of Chinese language education  through culture and arts."

		},
		"item": [{
				"name": {
					"china": "<span>趣学中文</span>",
					"english": "<span>Funny Learning of Chinese</span>"
				},
				"desc": {
					"china": "/static/word/practise.html",
					"english": "/static/word/practise-english.html"
				},
				"url": "./static/img/tu2.png",
				"url1": "./static/img/tu.png",
				"video": []

			},
			{
				"name": {
					"china": "轻松学古筝",
					"english": "Easy Steps to Zither"
				},
				"desc": {
					"china": "/static/word/zheng.html",
					"english": "/static/word/zheng-english.html"
				},
				"url": "./static/img/tu2.png",
				"url1": "./static/img/tu.png",
				"video": []
			},
			{
				"name": {
					"china": "魅力北威州",
					"english": "A trip in NRW"
				},
				"desc": {
					"china": "/static/word/01.html",
					"english": "/static/word/01.html"
				},
				"url": "./static/img/tu2.png",
				"url1": "./static/img/tu.png",
				"video": []
			}


		]
	},
	uploadTitle: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;填写姓名和学校，即可获得抽奖号码，此号码将用于2021年2月5日“中国春节文化趣事会”现场抽奖活动。 </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赶快参与吧，更多精美礼品等着你！',
	wenzi: {
		"index": { //首页文字
			"china": "“魅力汉语全球行”是由四川新华出版发行集团主办的特色主题中外文化交流活动。结合中国传统节日，活动已相继在俄罗斯、泰国、菲律宾等国举办，深受当地民众喜爱。 活动采用“科技+文化”创新表现形式，通过体验生动有趣的“欢乐中国年”“趣学中文”“轻松学古筝”内容，以及当地特色文化，促进中外文化交流互鉴。特别鸣谢：Pandaful熊猫社区、四川文化传播有限公司、四川辞书出版社有限公司",
			"english": 'The “Global Travel of Charming Chinese” Activity is hosted by Sichuan Xinhua Publishing and Distribution Group with its core theme on cultural exchanges between China and foreign countries. The events combined with traditional Chinese festivals have been held in Russia, Thailand, the Philippines, etc. and are well received by local people.This activity adopts the innovative form of "science & technology combined with culture" to promote the cultural exchanges and mutual learning between China and foreign countries by experiencing the vivid and interesting contents of "Happy Chinese New Year", "Fun Learning of Chinese", "Easy Steps to Zither" and local characteristic culture.Credit:Pandaful、Sichuan Cultural Communication Co., Ltd.、Sichuan Lexicographical Press Co., Ltd.'
		},
        "int": { //首页文字
      "china": '&emsp;&emsp;小伙伴们听说过春节吗？春节是中国最重要的传统节日，代表着“团圆”“感恩”与“希望”。对中国人来说，过了春节才算正式进入新的一年。2021年时逢农历牛年。牛作为勤劳憨厚的象征，还有着吉祥的寓意，在中文里许多跟牛有关的成语都有着美好的内涵，如：牛气冲天、牛运亨通、牛劲十足！时值2021中国农历新年到来之际，四川新华出版发行集团携手德国埃森市伯乐高级文理中学为海外友人、华人华侨带来一场线上春节联欢。疫情无法阻隔我们彼此的情谊，我们仍能在“云端”相聚，共享新春佳节的欢乐、祥和与温暖。</br>&emsp;&emsp;“魅力汉语全球行”是由四川新华出版发行集团主办的特色主题中外文化交流活动。结合中国传统节日，活动已相继在俄罗斯、泰国、菲律宾等国举办，深受当地民众喜爱。 活动采用“科技+文化”创新表现形式，通过体验生动有趣的“欢乐中国年”“趣学中文”“轻松学古筝”内容，以及当地特色文化，促进中外文化交流互鉴。</br>&emsp;&emsp;特别鸣谢：Pandaful熊猫社区、四川文化传播有限公司、四川辞书出版社有限公司 </br></br>Have you ever heard of the Spring Festival? The Spring Festival is the most important traditional festival in China, symbolizing "reunion" "gratitude" and "hope". For Chinese people, the Spring Festival marks the beginning of a New Year. The year 2021 falls in the Year of the OX. As a symbol of diligence and honesty, the ox also has auspicious connotations. In Chinese language, there are many ox-related idioms that describe the spirit of entrepreneurship, the everlasting fortune and the full of energy. On the arrival of the Chinese Lunar New Year in 2021, Sichuan Xinhua Publishing and Distribution Group and Burggymnasium Essen will bring an online Spring Festival party for overseas friends and Chinese people all over the world. The epidemic cannot prevent us from enhancing our friendship with each other, as we can still get together in the "cloud" to share the joy, peace and warmth of the New Year.The “Global Travel of Charming Chinese” Activity is hosted by Sichuan Xinhua Publishing and Distribution Group with its core theme on cultural exchanges between China and foreign countries. The events combined with traditional Chinese festivals have been held in Russia, Thailand, the Philippines, etc. and are well received by local people.This activity adopts the innovative form of "science & technology combined with culture" to promote the cultural exchanges and mutual learning between China and foreign countries by experiencing the vivid and interesting contents of "Happy Chinese New Year", "Fun Learning of Chinese", "Easy Steps to Zither" and local characteristic culture.Credit:Pandaful，Sichuan Cultural Communication Co., Ltd.，Sichuan Lexicographical Press Co., Ltd.',
      "english": 'Have you ever heard of the Spring Festival? The Spring Festival is the most important traditional festival in China, symbolizing "reunion" "gratitude" and "hope". For Chinese people, the Spring Festival marks the beginning of a New Year. The year 2021 falls in the Year of the OX. As a symbol of diligence and honesty, the ox also has auspicious connotations. In Chinese language, there are many ox-related idioms that describe the spirit of entrepreneurship, the everlasting fortune and the full of energy. On the arrival of the Chinese Lunar New Year in 2021, Sichuan Xinhua Publishing and Distribution Group and Burggymnasium Essen will bring an online Spring Festival party for overseas friends and Chinese people all over the world. The epidemic cannot prevent us from enhancing our friendship with each other, as we can still get together in the "cloud" to share the joy, peace and warmth of the New Year.The “Global Travel of Charming Chinese” Activity is hosted by Sichuan Xinhua Publishing and Distribution Group with its core theme on cultural exchanges between China and foreign countries. The events combined with traditional Chinese festivals have been held in Russia, Thailand, the Philippines, etc. and are well received by local people.This activity adopts the innovative form of "science & technology combined with culture" to promote the cultural exchanges and mutual learning between China and foreign countries by experiencing the vivid and interesting contents of "Happy Chinese New Year", "Fun Learning of Chinese", "Easy Steps to Zither" and local characteristic culture.Credit:Pandaful，Sichuan Cultural Communication Co., Ltd.，Sichuan Lexicographical Press Co., Ltd.'
		
		},
		"res": [{ //资源与服务
			"title": {
				"china": "2021年是中国的牛年。牛位列十二生肖的第二位，它代表诚实、勤恳和力量，还常用于形容好运连连，势不可挡。祝大家牛年大吉、牛气冲天、牛财旺盛！",
				"english": "According to the Chinese calendar, 2021 is the year of OX. The OX , ranks the second in the Chinese  zodiacs, represents honesty, diligence and power. In addition, the OX is also considered as a symbol of everlasting fortune. At last, we sincerely wish you success and happy in the year of the OX."
			},
			"desc": {
				"china": "",
				"english": ""
			}

		}, {
			"title": {
				"china": "在这里，你可以近距离“偷窥”国宝的生活日常，体验世界上最幸福的职业之一熊猫饲养员。",
				"english": "Here, you can take a 'close look' at the daily life of pandas and experience one of the most delightful professions in the world — panda keeper."
			},
			"desc": {
				"china": "",
				"english": ""
			}

		}, {
			"title": {
				"china": "如果将可爱的大熊猫形象与四川非遗文化融合，会擦出什么奇妙的火花呢？赶快来看看吧。",
				"english": "What wonderful sparks will emerge if combine the cute imagine of giant panda with the intangible cultural heritages of Sichuan? Come and have a look."
			},
			"desc": {
				"china": "",
				"english": ""
			}

		}],
		"res1": {
			"content": {
				"china": "/static/word/bole.html",
				"english": "/static/word/bole_english.html"
			}
		},
		"world": {
			"content": {
				"china": "/static/word/world.html",
				"english": "/static/word/world-english.html"
			}
		},
		"happy": {
			"content": {
				"china": "/static/word/bole.html",
				"english": "/static/word/bole-english.html"
			}
		},
		"download": { //软件下载
			"china": "“易汉语”教师端：包含课文内容、歌曲、小游戏、课堂练习、汉语故事小视频和汉字书写练习，可用于教师备课、组织课堂活动、布置课后作业。“易汉语”学生端：学习者使用学生端扫描教材相应配图，即可获得课文小视频， 还可通过听语音、跟读来进行课后练习。学习者可使用软件复习、预习、完成作业，教师可通过后台获取学生完成作业的数据，从而获知学生学习情况。",
			"english": "The teacher version accompanied by text, songs, games, exercises, Chinese story video and Chinese characters writing exercise, which could be used for teaching preparations, organizing in-class activities and assign the after-class tasks.The student version has scanning function which user can scan the corresponding picture on the textbooks to obtain a text video, in order to read after the text recording to practice after class. Learners can review, preview and finish homework while the teachers can obtain their students’ homework finishing data via the background data to get to know student learning information.",
			"url": "http://cc-uae.scxhlz.com/down/index.html"
		}

	},
	banquan: {

		china:{
				z:"主办:",
				cb:"承办:",
				a:"四川新华出版发行集团",
				b:"德国埃森市伯乐高级文理中学",
				c:"四川新华乐知教育科技有限公司"
			},
			english:{
				z:"Sponsor:",
				cb:"Organizer:",
				a:"Sichuan Xinhua Publishing and Distribution Group Co., Ltd.",
				b:"Burggymnasium Essen",
				c:"Sichuan Xinhua Lezhi Educational Technology Co.,Ltd."
			}




	},

	tishi: () => {
		uni.showModal({
			title: "提示",
			content: "网络似乎断开了"


		})
	}



};

export default {
	CON
}

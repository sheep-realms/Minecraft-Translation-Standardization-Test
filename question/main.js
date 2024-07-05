let db_meta = {
    mcVersion: "Java版 1.21",
    update: "2024/7/5"
}

let db_question = [
    {
        name: "Glowstone",
        type: "block",
        correct: "荧石",
        dec: "一种发光的石头",
        wrong: ["萤石", "莹石", "发光石"]
    }, {
        name: "Redstone Repeater",
        type: "block",
        correct: "红石中继器",
        dec: "一种延续红石能量的红石元件",
        wrong: ["红石中续器", "红石中断器", "红石转发器"]
    }, {
        name: "Lava Bucket",
        type: "item",
        correct: "熔岩桶",
        dec: "一桶岩石熔融物",
        wrong: ["岩浆桶", "熔岩", "岩浆"]
    }, {
        name: "Leather Boots",
        type: "item",
        correct: "皮革靴子",
        dec: "一种穿戴在脚上的装备",
        wrong: ["皮革鞋子", "皮革护脚", "皮革战靴"]
    }, {
        name: "Leather Cap",
        type: "item",
        correct: "皮革帽子",
        dec: "一种穿戴在头上的装备",
        wrong: ["皮革头盔", "皮革头套", "皮革兜帽"]
    }, {
        name: "Leather Pants",
        type: "item",
        correct: "皮革裤子",
        dec: "一种穿戴在腿上的装备",
        wrong: ["皮革护腿", "皮革裤腿", "皮革护膝"]
    }, {
        name: "Leather Tunic",
        type: "item",
        correct: "皮革外套",
        dec: "一种穿戴在身上的装备",
        wrong: ["皮革胸甲", "皮革衣服", "皮革上衣"]
    }, {
        name: "Iron Chestplate",
        type: "item",
        correct: "铁胸甲",
        dec: "一种穿戴在身上的装备",
        wrong: ["铁盔甲", "铁外套", "铁上衣"]
    }, {
        name: "Iron Leggings",
        type: "item",
        correct: "铁护腿",
        dec: "一种穿戴在腿上的装备",
        wrong: ["铁裤子", "铁裤腿", "铁护膝"]
    }, {
        name: "Iron Helmet",
        type: "item",
        correct: "铁头盔",
        dec: "一种穿戴在头上的装备",
        wrong: ["铁帽子", "铁头套", "铁头甲"]
    }, {
        name: "Iron Shovel",
        type: "item",
        correct: "铁锹",
        dec: "一种挖掘泥土的工具",
        wrong: ["铁铲", "铁铲子", "铁勺"]
    }, {
        name: "Netherite Ingot",
        type: "item",
        correct: "下界合金锭",
        dec: "一种来自下界的矿物资源",
        wrong: ["下界玄铁锭", "熔岩锭", "下界余烬锭"]
    }, {
        name: "Potion of Regeneration",
        type: "item",
        correct: "再生药水",
        dec: "一种持续恢复生命的药水",
        wrong: ["生命药水", "疗伤药水", "恢复药水"]
    }, {
        name: "Potion of Slowness",
        type: "item",
        correct: "迟缓药水",
        dec: "一种降低移动速度的药水",
        wrong: ["缓慢药水", "缓速药水", "慢速药水"]
    }, {
        name: "Potion of Swiftness",
        type: "item",
        correct: "迅捷药水",
        dec: "一种提高移动速度的药水",
        wrong: ["速度药水", "迅速药水", "快捷药水"]
    }, {
        name: "Potion of Poison",
        type: "item",
        correct: "剧毒药水",
        dec: "一种持续造成伤害的药水，但不致命",
        wrong: ["中毒药水", "烈毒药水", "有毒药水"]
    }, {
        name: "Potion of Fire Resistance",
        type: "item",
        correct: "抗火药水",
        dec: "一种提供火焰伤害免疫的药水",
        wrong: ["防火药水", "耐火药水", "火抗药水"]
    }, {
        name: "Potato",
        type: "item",
        correct: "马铃薯",
        dec: "一种农作物",
        wrong: ["土豆", "洋山芋", "洋番薯"]
    }, {
        name: "Poisonous Potato",
        type: "item",
        correct: "毒马铃薯",
        dec: "一种农作物副产物",
        wrong: ["毒土豆", "发芽的马铃薯", "发芽的土豆"]
    }, {
        name: "Gravel",
        type: "block",
        correct: "沙砾",
        dec: "一种受重力影响的沙石混合物",
        wrong: ["沙粒", "砂砾", "砂粒"]
    }, {
        name: "Prismarine Crystals",
        type: "item",
        correct: "海晶砂粒",
        dec: "一种来自某海洋建筑物的小石子",
        wrong: ["海晶沙粒", "海晶砂砾", "海晶沙砾"]
    }, {
        name: "Ocean Monument",
        type: "structure",
        correct: "海底神殿",
        dec: "一种出现在海洋中的大型建筑物",
        wrong: ["海底神庙", "海洋神殿", "海洋神庙"]
    }, {
        name: "Desert Temple",
        type: "structure",
        correct: "沙漠神殿",
        dec: "一种出现在沙漠中的大型建筑物",
        wrong: ["沙漠神庙", "沙漠遗迹", "沙漠金字塔"]
    }, {
        name: "Jungle Temple",
        type: "structure",
        correct: "丛林神庙",
        dec: "一种出现在热带雨林中的石质建筑物",
        wrong: ["丛林神殿", "丛林遗迹", "丛林地牢"]
    }, {
        name: "End City",
        type: "structure",
        correct: "末地城",
        dec: "一种出现在末地中的奇幻建筑物",
        wrong: ["末影城", "紫影城", "紫颂城"]
    }, {
        name: "Cobblestone",
        type: "block",
        correct: "圆石",
        dec: "一种挖掘石头后的产物",
        wrong: ["原石", "鹅卵石", "园石"]
    }, {
        name: "Cobblestone Slab",
        type: "block",
        correct: "圆石台阶",
        dec: "一种石质的半高方块",
        wrong: ["圆石半砖", "原石台阶", "原石半砖"]
    }, {
        name: "Oak Pressure Plate",
        type: "block",
        correct: "橡木压力板",
        dec: "一种检测物体按压的红石元件",
        wrong: ["橡木踏板", "橡木踩板", "橡木压板"]
    }, {
        name: "Observer",
        type: "block",
        correct: "侦测器",
        dec: "一种检测方块更新的红石元件",
        wrong: ["检测器", "观察者", "观测者"]
    }, {
        name: "Dragon Head",
        type: "block",
        correct: "龙首",
        dec: "一种生物头装饰方块",
        wrong: ["龙头", "末影龙头颅", "末影龙的头"]
    }, {
        name: "Player Head",
        type: "block",
        correct: "玩家的头",
        dec: "一种生物头装饰方块",
        wrong: ["玩家头", "玩家头颅", "人类的头"]
    }, {
        name: "Skeleton Skull",
        type: "block",
        correct: "骷髅头颅",
        dec: "一种生物头装饰方块",
        wrong: ["骷髅的头", "骷髅头", "骷髅头骨"]
    }, {
        name: "Sticky Piston",
        type: "block",
        correct: "黏性活塞",
        dec: "一种推拉方块的红石元件",
        wrong: ["粘性活塞", "粘液活塞", "史莱姆活塞"]
    }, {
        name: "Slime Block",
        type: "block",
        correct: "黏液块",
        dec: "一种可以带动其他方块随活塞一起运动的方块",
        wrong: ["粘液块", "史莱姆块", "史莱姆方块"]
    }, {
        name: "Acacia Log",
        type: "block",
        correct: "金合欢原木",
        dec: "一种出现在气候炎热的草原上的木材",
        wrong: ["合金欢原木", "合欢原木", "相思木原木"]
    }, {
        name: "Warden",
        type: "mob",
        correct: "监守者",
        dec: "一种会追寻振动来源的恐怖怪物",
        wrong: ["坚守者", "循声守卫", "循声兽"]
    }, {
        name: "Deep Dark",
        type: "biome",
        correct: "深暗之域",
        dec: "一种以特殊的黑暗的方块为特征的洞穴生物群系",
        wrong: ["深邃之域", "幽匿之地", "深邃黑暗之地"]
    }, {
        name: "Sculk Sensor",
        type: "block",
        correct: "幽匿感测体",
        dec: "一种可以检测振动并发出红石信号的方块",
        wrong: ["潜声传感器", "幽暗感测体", "深暗感测体"]
    }, {
        name: "Disc Fragment",
        type: "item",
        correct: "唱片残片",
        dec: "一种用于合成相应的音乐唱片的物品",
        wrong: ["唱片碎片", "唱片小片", "唱片裂片"]
    }, {
        name: "Ancient City",
        type: "structure",
        correct: "远古城市",
        dec: "一种生成于某种黑暗的生物群系的大型的地下结构",
        wrong: ["深暗城市", "深邃城市", "上古城市"]
    }, {
        name: "Echo Shard",
        type: "item",
        correct: "回响碎片",
        dec: "一种用于合成追溯指针的物品",
        wrong: ["回响残片", "回声碎片", "回声残片"]
    }, {
        name: "Creeper",
        type: "mob",
        correct: "苦力怕",
        dec: "一种会自爆的绿油油的吉祥物",
        wrong: ["爬行者", "爬山虎", "JJ怪"]
    }, {
        name: "Wither",
        type: "mob",
        correct: "凋灵",
        dec: "一种拥有三个头颅的 BOSS 级怪物",
        wrong: ["凋零", "调灵", "调零"]
    }, {
        name: "Allay",
        type: "mob",
        correct: "悦灵",
        dec: "一种喜欢音乐，乐于帮助玩家寻找物品的生物",
        wrong: ["轻灵", "小安利", "安利"]
    }, {
        name: "Area Effect Cloud",
        type: "entity",
        correct: "区域效果云",
        dec: "一种药水喷洒后形成的实体",
        wrong: ["状态效果云", "药水云", "药水效果云"]
    }, {
        name: "Axolotl",
        type: "mob",
        correct: "美西螈",
        dec: "一种可爱的水生生物",
        wrong: ["墨西哥钝口螈", "蝾螈", "六角恐龙"]
    }, {
        name: "Mooshroom",
        type: "mob",
        correct: "哞菇",
        dec: "一种出现在有大量蘑菇的生物群系的变种牛",
        wrong: ["蘑菇牛", "哞牯", "蘑牯牛"]
    }, {
        name: "Polished Deepslate",
        type: "block",
        correct: "磨制深板岩",
        dec: "一种通过简单打磨工艺制成的石制品",
        wrong: ["錾制深板岩", "磨制深层岩", "錾制深层岩"]
    }, {
        name: "Chiseled Deepslate",
        type: "block",
        correct: "雕纹深板岩",
        dec: "一种通过特殊雕刻工艺制成的石制品",
        wrong: ["磨制深板岩", "錾制深板岩", "磨制深层岩"]
    }, {
        name: "Terracotta",
        type: "block",
        correct: "陶瓦",
        dec: "一种通过粘土烧制硬化后的产物",
        wrong: ["硬化粘土", "硬化黏土", "硬化陶土"]
    }, {
        name: "Elytra",
        type: "item",
        correct: "鞘翅",
        dec: "一种可以让玩家在空中滑翔的装备",
        wrong: ["滑翔翅", "羽翼", "滑翔翼"]
    }, {
        name: "Cooked Beef",
        type: "item",
        correct: "牛排",
        dec: "一种将牛肉烹饪制成的食物",
        wrong: ["熟牛排", "熟牛肉", "牛肉"]
    }, {
        name: "Cooked Porkchop",
        type: "item",
        correct: "熟猪排",
        dec: "一种将猪肉烹饪制成的食物",
        wrong: ["猪排", "熟猪肉", "猪肉"]
    }, {
        name: "Cooked Chicken",
        type: "item",
        correct: "熟鸡肉",
        dec: "一种将鸡肉烹饪制成的食物",
        wrong: ["鸡排", "熟鸡排", "鸡肉"]
    }, {
        name: "Raw Beef",
        type: "item",
        correct: "生牛肉",
        dec: "一种通过牛获取的食材",
        wrong: ["牛肉", "生牛排", "牛排"]
    }, {
        name: "Raw Porkchop",
        type: "item",
        correct: "生猪排",
        dec: "一种通过猪获取的食材",
        wrong: ["猪排", "生猪肉", "猪肉"]
    }, {
        name: "Raw Chicken",
        type: "item",
        correct: "生鸡肉",
        dec: "一种通过鸡获取的食材",
        wrong: ["鸡排", "生鸡排", "鸡肉"]
    }, {
        name: "Savanna",
        type: "biome",
        correct: "热带草原",
        dec: "一种炎热气候下的草原生物群系",
        wrong: ["稀树草原", "萨瓦纳草原", "热带稀树草原"]
    }, {
        name: "Milk Bucket",
        type: "item",
        correct: "奶桶",
        dec: "一桶动物产出乳液",
        wrong: ["牛奶桶", "奶", "牛奶"]
    }, {
        name: "Bucket",
        type: "item",
        correct: "铁桶",
        dec: "一种用于携带流体或某些水生生物的工具",
        wrong: ["桶", "小桶", "铁盆"]
    }, {
        name: "Lightning Rod",
        type: "block",
        correct: "避雷针",
        dec: "一种吸引闪电的红石元件",
        wrong: ["接闪杆", "引雷针", "雷霆之杖"]
    }, {
        name: "Infested Stone",
        type: "block",
        correct: "虫蚀石头",
        dec: "一种被某种虫类生物蛀蚀的石头",
        wrong: ["石头蠹虫刷怪蛋", "被虫蛀的石头", "被虫蚀的石头"]
    }, {
        name: "Charged Creeper",
        type: "mob",
        correct: "闪电苦力怕",
        dec: "一种被雷击中的会自爆的绿油油的吉祥物",
        wrong: ["闪电爬行者", "高压苦力怕", "高压爬行者"]
    }, {
        name: "End Crystal",
        type: "entity",
        correct: "末地水晶",
        dec: "一种可以为末地的 BOSS 治疗的实体",
        wrong: ["末影水晶", "紫影水晶", "紫颂水晶"]
    }, {
        name: "Fishing Bobber",
        type: "entity",
        correct: "浮漂",
        dec: "一种钓鱼时抛出去的实体",
        wrong: ["浮标", "浮球", "鱼钩"]
    }, {
        name: "Pufferfish",
        type: "mob",
        correct: "河豚",
        dec: "一种遇到危险时会充气的有毒鱼类",
        wrong: ["河鲀", "淡水海豚", "淡水鲸"]
    }, {
        name: "Shulker Bullet",
        type: "entity",
        correct: "潜影弹",
        dec: "一种由某种末地怪物发射的追踪弹",
        wrong: ["潜影贝导弹", "潜影球", "漂浮弹"]
    }, {
        name: "Spectator",
        type: "gamemode",
        correct: "旁观模式",
        dec: "一种允许玩家以飞行的方式无障碍穿过和观察世界的游戏模式",
        wrong: ["旁观者模式", "观察模式", "观察者模式"]
    }, {
        name: "Scoreboard",
        type: "gameplay",
        correct: "记分板",
        dec: "一套通过命令操纵的复杂游戏机制",
        wrong: ["记分版", "计分板", "计分版"]
    }, {
        name: "Status Effect",
        type: "gameplay",
        correct: "状态效果",
        dec: "一种作用于实体并对其产生正面或负面影响的游戏机制",
        wrong: ["药水效果", "实体效果", "效果"]
    }, {
        name: "Raid",
        type: "gameplay",
        correct: "袭击",
        dec: "一种在带有特定效果的玩家进入村庄时触发的游戏事件",
        wrong: ["掠夺", "劫掠", "屠村"]
    }, {
        name: "Nether Portal",
        type: "structure",
        correct: "下界传送门",
        dec: "一种连通两个维度的传送门结构",
        wrong: ["地狱传送门", "炼狱传送门", "冥界传送门"]
    }, {
        name: "Dirt Path",
        type: "block",
        correct: "土径",
        dec: "一种村庄的道路方块",
        wrong: ["草径", "路", "路径"]
    }, {
        name: "Powered Rail",
        type: "block",
        correct: "动力铁轨",
        dec: "一种能够使矿车加速或停止的方块",
        wrong: ["充能铁轨", "激活铁轨", "加速铁轨"]
    }, {
        name: "Sandstone",
        type: "block",
        correct: "砂岩",
        dec: "一种常见于沙漠和沙滩的石头",
        wrong: ["沙岩", "沙石", "砂石"]
    }, {
        name: "Pumpkin Stem",
        type: "block",
        correct: "南瓜茎",
        dec: "一种植物的根茎",
        wrong: ["南瓜梗", "南瓜根", "南瓜藤"]
    }, {
        name: "Title Screen",
        type: "gameplay",
        correct: "标题屏幕",
        dec: "在启动游戏显示完 Mojang 徽标之后显示的界面",
        wrong: ["标题画面", "菜单画面", "主菜单"],
    }, {
        name: "Amethyst Bud",
        type: "block",
        correct: "紫晶芽",
        dec: "一种处于初期生长阶段的水晶矿石",
        wrong: ["紫水晶芽", "紫晶簇", "紫水晶簇"],
    }, {
        name: "Ancient Debris",
        type: "block",
        correct: "远古残骸",
        dec: "一种出现在下界的坚硬的稀有矿石",
        wrong: ["远古遗骸", "下界合金矿石", "远古矿石"],
    }, {
        name: "Campfire",
        type: "block",
        correct: "营火",
        dec: "一种简单的烹饪装置",
        wrong: ["篝火", "炭火", "火堆"],
    }, {
        name: "Lily Pad",
        type: "block",
        correct: "睡莲",
        dec: "一种浮于水面的水生植物",
        wrong: ["荷叶", "莲叶", "莲花"],
    }, {
        name: "Snow",
        type: "block",
        correct: "雪",
        dec: "一种覆盖于方块顶部的可物理堆叠的不完整方块",
        wrong: ["雪地", "雪片", "顶层雪"],
    }, {
        name: "Target",
        type: "block",
        correct: "标靶",
        dec: "一种检测弹射物攻击的红石元件",
        wrong: ["靶子", "指标", "目标"],
    }, {
        name: "Minecart With Chest",
        type: "entity",
        correct: "运输矿车",
        dec: "一种装有箱子的行驶于轨道上的载具",
        wrong: ["箱子矿车", "货运矿车", "传输矿车"],
    }, {
        name: "Nether Wart",
        type: "block",
        correct: "下界疣",
        dec: "一种生长在灵魂沙上的植物",
        wrong: ["地狱疣", "下界尤", "地狱尤"],
    }, {
        name: "Nether Fortress",
        type: "structure",
        correct: "下界要塞",
        dec: "一种出现在特定维度的大型建筑结构",
        wrong: ["地狱要塞", "下界堡垒", "地狱堡垒"],
    }, {
        name: "Bricks",
        type: "block",
        correct: "红砖块",
        dec: "一种装饰用的红色的建筑方块",
        wrong: ["砖块", "红砖头块", "砖头块"],
    }, {
        name: "Light",
        type: "block",
        correct: "光源方块",
        dec: "一种隐形的发光方块",
        wrong: ["光", "光方块", "光块"],
    }, {
        name: "Awkward Potion",
        type: "item",
        correct: "粗制的药水",
        dec: "所有主要药水的基础药水",
        wrong: ["粗制药水", "平凡的药水", "平凡药水"],
    }, {
        name: "Feather Falling",
        type: "enchantment",
        correct: "摔落缓冲",
        dec: "一种用于减少摔落伤害的魔咒",
        wrong: ["摔落保护", "掉落保护", "羽落"],
    }, {
        name: "Hay Bale",
        type: "block",
        correct: "干草捆",
        dec: "一种存储了一些小麦的方块",
        wrong: ["干草块", "干草垛", "干草卷"],
    }, {
        name: "Ice Spikes",
        type: "biome",
        correct: "冰刺之地",
        dec: "一种含有大量冰刺的雪原变种生物群系",
        wrong: ["冰刺平原", "冰刺雪原", "冰刺冰原"],
    }, {
        name: "Moss Carpet",
        type: "block",
        correct: "覆地苔藓",
        dec: "一种有苔藓块纹理的类似于地毯的装饰性方块",
        wrong: ["苔藓地毯", "覆盖苔藓", "苔藓片"],
    }, {
        name: "Mycelium",
        type: "block",
        correct: "菌丝体",
        dec: "一种在蘑菇岛生物群系自然生成的泥土变种方块",
        wrong: ["菌丝", "菌丝块", "菌丝方块"],
    }, {
        name: "Speed",
        type: "effect",
        correct: "迅捷",
        dec: "一种提升生物行走速度的状态效果",
        wrong: ["速度", "快速", "迅速"],
    }, {
        name: "Suspicious Stew",
        type: "item",
        correct: "谜之炖菜",
        dec: "一种可以给予玩家各种效果的食物",
        wrong: ["迷之炖菜", "可疑的炖菜", "秘之炖菜"],
    }, {
        name: "Badlands",
        type: "biome",
        correct: "恶地",
        dec: "一种由红沙及各种染色方块构成的稀有的生物群系",
        wrong: ["粘土山", "黏土山", "陶瓦山"],
    }, {
        name: "Bamboo Mosaic",
        type: "block",
        correct: "竹马赛克",
        dec: "一种由竹子作为材料合成的装饰性方块",
        wrong: ["竹编", "竹拼图", "竹像素"],
    }, {
        name: "Bamboo Raft",
        type: "entity",
        correct: "竹筏",
        dec: "一种竹制的水上交通工具",
        wrong: ["竹木船", "竹船", "竹子船"],
    }, {
        name: "Cherry Log",
        type: "block",
        correct: "樱花原木",
        dec: "一种组成树干的方块",
        wrong: ["樱花木原木", "樱木原木", "樱花树原木"],
    }
];

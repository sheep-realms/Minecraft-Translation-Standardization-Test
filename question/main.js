let db_meta = {
    mcVersion: "Java版 1.19",
    update: "2022/9/10"
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
        correct: "錾制深板岩",
        dec: "一种通过特殊切割工艺制成的石制品",
        wrong: ["磨制深板岩", "錾制深层岩", "磨制深层岩"]
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
        name: "Lightning Rod",
        type: "block",
        correct: "避雷针",
        dec: "一种吸引闪电的红石元件",
        wrong: ["接闪杆", "引雷针", "雷霆之杖"]
    }, {
        name: "Infested Stone",
        type: "block",
        correct: "被虫蚀的石头",
        dec: "一种被某种虫类生物蛀蚀的石头",
        wrong: ["石头蠹虫刷怪蛋", "被虫蛀的石头", "有蠹虫的石头"]
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
    }
];

let db_meta = {
    mcVersion: "Java版 1.19",
    update: "2022/9/8"
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
        type: "block",
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
    }
];
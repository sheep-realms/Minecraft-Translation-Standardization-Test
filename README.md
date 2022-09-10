# Minecraft 译名标准化测试
这是一个 Minecraft 译名标准化小测试网页，[点此进行测试](https://sheep-realms.github.io/Minecraft-Translation-Standardization-Test/)。

## 特点
点击【开始测试】即可开始一次全新的测试，点击【继续测试】或者在完成一轮测试后点击【再来几题】会抽取未使用的题目进行测试。

每次测试最多抽取 10 道题目。每轮测试中做错的题目会追加到最后再次测试，直到做对。

测试完成后会给出错题的次数。若题库中仍有未使用的题目，【再来几题】按钮会是可用状态。

## 技术性原理
本软件主要逻辑与 UI 解耦，可在控制台中独立运行。主要逻辑被封装为类 `Questioner`，主要处理加载题库、开始测试、校验回答等业务逻辑。

## 类 Questioner

### 属性
| 属性名 | 预期值 | 描述 | 默认值 |
| - | - | - | - |
| questions | Array | 当前测试中的题目列表 | [] |
| questionsBankBuffer | Array | 题库缓冲区，用于抽取题目 | [] |
| questionsRuntimeIndex | Array | 题目索引，用于控制出题顺序 | [] |
| nowQuestionsIndex | Number | 当前问答索引 | -1 |
| nowLastQuestion | Boolean | 当前问题是否是最后一题 | false |
| wrongCount | Number | 错题次数 | 0 |

### load
加载题库，覆盖题库缓冲区，重置问答索引。
| 参数名 | 预期值 | 描述 | 默认值 |
| - | - | - | - |
| questions | Array | 题目列表 | |

| 返回值 |
| - |
| this.questionsBankBuffer |

<details>
<summary>返回示例</summary>

```
[
    {
        "name": "Glowstone",
        "type": "block",
        "correct": "荧石",
        "dec": "一种发光的石头",
        "wrong": [
            "萤石",
            "莹石",
            "发光石"
        ]
    },
    {
        "name": "Redstone Repeater",
        "type": "block",
        "correct": "红石中继器",
        "dec": "一种延续红石能量的红石元件",
        "wrong": [
            "红石中续器",
            "红石中断器",
            "红石转发器"
        ]
    },
    {
        "name": "Lava Bucket",
        "type": "item",
        "correct": "熔岩桶",
        "dec": "一桶岩石熔融物",
        "wrong": [
            "岩浆桶",
            "熔岩",
            "岩浆"
        ]
    },
    {
        "name": "Leather Boots",
        "type": "item",
        "correct": "皮革靴子",
        "dec": "一种穿戴在脚上的装备",
        "wrong": [
            "皮革鞋子",
            "皮革护脚",
            "皮革战靴"
        ]
    },
    {
        "name": "Leather Cap",
        "type": "item",
        "correct": "皮革帽子",
        "dec": "一种穿戴在头上的装备",
        "wrong": [
            "皮革头盔",
            "皮革头套",
            "皮革兜帽"
        ]
    }
]
```

</details>

### answerRandom
答案随机排序。
| 参数名 | 预期值 | 描述 | 默认值 |
| - | - | - | - |
| answerList | Array | 答案列表 | |

| 返回值 |
| - |
| 随机排序后的答案数组 |

<details>
<summary>返回示例</summary>

```
[
    "C",
    "D",
    "A",
    "B"
]
```

</details>

### start
开始测试，随机抽取指定数量的题目，刷新题目索引，重置问答索引。
| 参数名 | 预期值 | 描述 | 默认值 |
| - | - | - | - |
| limit | Number | 抽取题目数量 | 10 |

| 返回值 |
| - |
| 特定格式的消息 |

注意：该方法不会自动出题，需要执行 `next()` 才能出题。

<details>
<summary>返回示例</summary>

```
{
    "code": "ready",
    "index": -1,
    "indexList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    "progress": "0%",
    "length": 10,
    "questions": [
        {
            "name": "Prismarine Crystals",
            "type": "item",
            "correct": "海晶砂粒",
            "dec": "一种来自某海洋建筑物的小石子",
            "wrong": [
                "海晶沙粒",
                "海晶砂砾",
                "海晶沙砾"
            ],
            "answers": [
                "海晶砂粒",
                "海晶砂砾",
                "海晶沙粒",
                "海晶沙砾"
            ],
            "index": 0
        },
        {
            "name": "Elytra",
            "type": "item",
            "correct": "鞘翅",
            "dec": "一种可以让玩家在空中滑翔的装备",
            "wrong": [
                "滑翔翅",
                "羽翼",
                "滑翔翼"
            ],
            "answers": [
                "羽翼",
                "鞘翅",
                "滑翔翼",
                "滑翔翅"
            ],
            "index": 1
        },
        {
            "name": "Desert Temple",
            "type": "structure",
            "correct": "沙漠神殿",
            "dec": "一种出现在沙漠中的大型建筑物",
            "wrong": [
                "沙漠神庙",
                "沙漠遗迹",
                "沙漠金字塔"
            ],
            "answers": [
                "沙漠神殿",
                "沙漠遗迹",
                "沙漠金字塔",
                "沙漠神庙"
            ],
            "index": 2
        },
        {
            "name": "Milk Bucket",
            "type": "item",
            "correct": "奶桶",
            "dec": "一桶动物产出乳液",
            "wrong": [
                "牛奶桶",
                "奶",
                "牛奶"
            ],
            "answers": [
                "牛奶",
                "奶",
                "牛奶桶",
                "奶桶"
            ],
            "index": 3
        },
        {
            "name": "Scoreboard",
            "type": "gameplay",
            "correct": "记分板",
            "dec": "一套通过命令操纵的复杂游戏机制",
            "wrong": [
                "记分版",
                "计分板",
                "计分版"
            ],
            "answers": [
                "记分板",
                "计分板",
                "计分版",
                "记分版"
            ],
            "index": 4
        },
        {
            "name": "Warden",
            "type": "mob",
            "correct": "监守者",
            "dec": "一种会追寻振动来源的恐怖怪物",
            "wrong": [
                "坚守者",
                "循声守卫",
                "循声兽"
            ],
            "answers": [
                "循声兽",
                "循声守卫",
                "监守者",
                "坚守者"
            ],
            "index": 5
        },
        {
            "name": "Iron Helmet",
            "type": "item",
            "correct": "铁头盔",
            "dec": "一种穿戴在头上的装备",
            "wrong": [
                "铁帽子",
                "铁头套",
                "铁头甲"
            ],
            "answers": [
                "铁头甲",
                "铁帽子",
                "铁头套",
                "铁头盔"
            ],
            "index": 6
        },
        {
            "name": "Potion of Fire Resistance",
            "type": "item",
            "correct": "抗火药水",
            "dec": "一种提供火焰伤害免疫的药水",
            "wrong": [
                "防火药水",
                "耐火药水",
                "火抗药水"
            ],
            "answers": [
                "耐火药水",
                "抗火药水",
                "火抗药水",
                "防火药水"
            ],
            "index": 7
        },
        {
            "name": "Chiseled Deepslate",
            "type": "block",
            "correct": "錾制深板岩",
            "dec": "一种通过特殊切割工艺制成的石制品",
            "wrong": [
                "磨制深板岩",
                "錾制深层岩",
                "磨制深层岩"
            ],
            "answers": [
                "磨制深层岩",
                "錾制深层岩",
                "磨制深板岩",
                "錾制深板岩"
            ],
            "index": 8
        },
        {
            "name": "Wither",
            "type": "mob",
            "correct": "凋灵",
            "dec": "一种拥有三个头颅的 BOSS 级怪物",
            "wrong": [
                "凋零",
                "调灵",
                "调零"
            ],
            "answers": [
                "调灵",
                "凋零",
                "调零",
                "凋灵"
            ],
            "index": 9
        }
    ]
}
```

</details>

### next
下一题，增加问答索引号。若当前是最后一题，则报告测试结束。

| 返回值 |
| - |
| 特定格式的消息 |

<details>
<summary>返回示例</summary>

```
{
    "code": "next",
    "index": 0,
    "progress": "0%",
    "length": 10,
    "question": {
        "name": "Prismarine Crystals",
        "type": "item",
        "correct": "海晶砂粒",
        "dec": "一种来自某海洋建筑物的小石子",
        "wrong": [
            "海晶沙粒",
            "海晶砂砾",
            "海晶沙砾"
        ],
        "answers": [
            "海晶砂粒",
            "海晶砂砾",
            "海晶沙粒",
            "海晶沙砾"
        ],
        "index": 0
    },
    "nowLastQuestion": false
}
```

</details>

### answerCheck
回答检查。
| 参数名 | 预期值 | 描述 | 默认值 |
| - | - | - | - |
| value | Number | 答案的索引号 | |

| 返回值 |
| - |
| 特定格式的消息（由 `answerCorrect()` 和 `answerWrong()` 提供） |

### answerCorrect
返回回答正确。
| 返回值 |
| - |
| 特定格式的消息 |

<details>
<summary>返回示例</summary>

```
{
    "code": "correct",
    "index": 0,
    "progress": "10%",
    "length": 10,
    "question": {
        "name": "Prismarine Crystals",
        "type": "item",
        "correct": "海晶砂粒",
        "dec": "一种来自某海洋建筑物的小石子",
        "wrong": [
            "海晶沙粒",
            "海晶砂砾",
            "海晶沙砾"
        ],
        "answers": [
            "海晶砂粒",
            "海晶砂砾",
            "海晶沙粒",
            "海晶沙砾"
        ],
        "index": 0
    },
    "nowLastQuestion": false
}
```

</details>

### answerWrong
返回回答错误。
| 返回值 |
| - |
| 特定格式的消息 |

<details>
<summary>返回示例</summary>

```
{
    "code": "wrong",
    "index": 0,
    "progress": "9.090909090909092%",
    "length": 11,
    "question": {
        "name": "Prismarine Crystals",
        "type": "item",
        "correct": "海晶砂粒",
        "dec": "一种来自某海洋建筑物的小石子",
        "wrong": [
            "海晶沙粒",
            "海晶砂砾",
            "海晶沙砾"
        ],
        "answers": [
            "海晶砂粒",
            "海晶砂砾",
            "海晶沙粒",
            "海晶沙砾"
        ],
        "index": 0
    },
    "nowLastQuestion": false
}
```

</details>

### end
结束测试，增加问答索引号。
| 返回值 |
| - |
| 特定格式的消息 |

<details>
<summary>返回示例</summary>

```
{
    "code": "end",
    "index": 11,
    "progress": "100%",
    "length": 11
}
```

</details>
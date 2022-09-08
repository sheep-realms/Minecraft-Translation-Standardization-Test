let questioner = new Questioner();

function page_footer() {
    return `
        <div class="footer">
            <div class="footer-page">
                <div class="footer-left">
                    <div class="footer-left-dec">
                        <div>本测试以 Minecraft ${db_meta.mcVersion} 作为译名标准。</div>
                        <div>题库更新时间：${db_meta.update}</div>
                        <div>题目数量：${db_question.length}</div>
                    </div>
                </div>
                <div class="footer-right">
                    <div>© Sheep-realms<div>
                    <div>
                        <a href="https://github.com/sheep-realms/Minecraft-Translation-Standardization-Test">Github</a> | 
                        <a href="https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki:">译名标准化</a>
                    <div>
                </div>
            </div>
        </div>
    `;
}

function page_main() {
    let btnNextStageClass = ""
    if (questioner.questionsBankBuffer.length <= 0) btnNextStageClass = "disable";
    $('#questioner').html(`
        <div class="game-subtitle">Minecraft</div>
        <div class="game-title">译名标准化测试</div>
        <div class="game-dec">译名标准化之路，任重而道远</div>
        <div class="title-menu">
            <div class="questioner-btn title-menu-item questioner-start">开始测试</div>
            <div class="questioner-btn title-menu-item questioner-next-stage ${btnNextStageClass}">继续测试</div>
        </div>
        ${page_footer()}
    `)
}

$(document).on('click', '#questioner .questioner-start', function() {
    questioner.load(db_question);
    questioner.start(10);
    let q = questioner.next();
    page_questioner(q.question, "0%");
});

function qstype(value) {
    let qt = {
        block: "方块",
        item: "物品",
        structure: "结构"
    }
    if (qt[value] != undefined) {
        return qt[value];
    } else {
        return value;
    }
}

function page_questioner(question, progress='0%') {
    $('#questioner').html(`
        <div class="progress">
            <div class="progress-content" style="width:${progress};"></div>
        </div>
        <div class="title">${question.name}</div>
        <div class="type">${qstype(question?.type)}</div>
        <div class="dec">${qstype(question?.dec)}</div>
        <div class="answers"></div>
        <div class="footer disable">
            <div class="footer-page">
                <div class="footer-left">
                    <div class="footer-left-title"></div>
                    <div class="footer-left-dec"></div>
                </div>
                <div class="footer-right">
                    <div class="questioner-btn questioner-next">继续</div>
                </div>
            </div>
        </div>
    `)

    let i = -1;
    question.answers.forEach(e => {
        i++;
        if (i >= 4) return;
        $('#questioner .answers').append(`
            <div class="questioner-btn answer" data-value="${i}">
                <span class="answer-befor">${String.fromCharCode(65 + i)}</span>
                <span class="answer-content">${e}</span>
            </div>
        `)
    });
}

$(document).on('click', '#questioner .answers:not(.disable) .answer', function() {
    let v = $(this).data('value');
    $(this).addClass('sel');
    answerCheck(v);
    $('#questioner .answers').addClass('disable');
});

function answerCheck(value) {
    let data = questioner.answerCheck(value);
    if (data.code == 'correct') {
        $('#questioner .footer-left-title').text('答对啦！');
        $('#questioner .footer').removeClass('disable');
        $('#questioner .footer').addClass('correct');
        $('#questioner .answer.sel').addClass('correct');
    } else if (data.code == 'wrong') {
        $('#questioner .footer-left-title').text('答错啦！');
        $('#questioner .footer-left-dec').text('正确答案是：' + data.question.correct);
        $('#questioner .footer').removeClass('disable');
        $('#questioner .footer').addClass('wrong');
        $('#questioner .answer.sel').addClass('wrong');
    }
    $('#questioner .progress-content').css('width', data.progress);
}

$(document).on('click', '#questioner .footer:not(.disable) .questioner-next', function() {
    $('#questioner .footer').addClass('disable');
    $('#questioner .footer').removeClass('correct');
    $('#questioner .footer').removeClass('wrong');
    let q = questioner.next();
    if (q.code != "end") {
        page_questioner(q.question, q.progress);
    } else {
        page_clear();
    }
});

function page_clear() {
    let dec = "";
    let btnNextStageClass = "";

    if (questioner.wrongCount <= 0) {
        dec = "真棒，没有任何错误！";
    } else {
        dec = "错题 " + questioner.wrongCount + " 次，要牢记标准译名哦！";
    }
    if (questioner.questionsBankBuffer.length == 0) {
        dec += "没有更多条目啦！";
        btnNextStageClass = "disable";
    }

    $('#questioner').html(`
        <div class="game-subtitle">Minecraft 译名标准化测试</div>
        <div class="game-title">测试完毕</div>
        <div class="game-dec">${dec}</div>
        <div class="title-menu">
            <div class="questioner-btn title-menu-item questioner-next-stage ${btnNextStageClass}">再来几题</div>
            <div class="questioner-btn title-menu-item questioner-mianpage">返回到标题画面</div>
        </div>
        ${page_footer()}
    `)
}

$(document).on('click', '#questioner .questioner-next-stage:not(.disable)', function() {
    questioner.start(10);
    let q = questioner.next();
    page_questioner(q.question, "0%");
});

$(document).on('click', '#questioner .questioner-mianpage', function() {
    page_main();
});
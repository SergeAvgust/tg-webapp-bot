let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.hide();


let order = {};
let pizzas = {};
let money = 0;


order['user'] = tg.initDataUnsafe.user

function incrementSum(amount) {
    parseInt(money)
    parseInt(amount)
    money += parseInt(amount);
    m = money.toString()
    if (money > 0) {
        tg.MainButton.setText(m);
        tg.MainButton.show();
    }
    else {
        tg.MainButton.hide();
    }
};

let inner_btns = document.querySelectorAll('.innerBtns')
inner_btns.forEach(btn_div => {
    let add_btn = btn_div.querySelector('.add');
    let rmv_btn = btn_div.querySelector('.rmv');
    let counter_field = btn_div.querySelector('.counter');
    let counter = 0;

    counter_field.innerHTML = counter;

    add_btn.addEventListener('click', () => {
        counter++;
        counter_field.innerHTML = counter;
        pizzas[btn_div.id] = counter;
        p = btn_div.querySelector('.price')
        v = p.getAttribute('data-value')
        incrementSum(v)
    });

    rmv_btn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            counter_field.innerHTML = counter;
            pizzas[btn_div.id] = counter;
            incrementSum(-parseInt(btn_div.querySelector('.price').getAttribute('data-value')))
            if (counter === 0) {delete pizzas[btn_div.id]; }
        }
        
    });


});

tg.MainButton.onClick(function(){
    tg.MainButton.setText('Clicked via onClick');
    order['pizzas'] = pizzas;

    var result= {
        InlineQueryResultArticle:[
          {type:'article',id: '1', title:"RESULT MSG", input_message_content:JSON.stringify(order)}
        ]
    };
    alert(result)
    var qid = tg.initDataUnsafe.query_id;
    tg.answerWebAppQuery(qid, result);
    tg.MainButton.setText('data passed to bot');
    tg.close()
})

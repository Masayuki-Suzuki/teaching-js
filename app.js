(function() {
    // DOMエレメントの取得
    const todoInput = document.getElementById('todoTitle');
    const todoAdd = document.getElementById('addToDo');
    const todoList = document.getElementById('todoList');

    // クリックした時に処理する関数
    const clickHandlar = function(){
        // input#todoTitleの値を取得する
        const title = todoInput.value;

        // アンチパターン
        // todoList.innerHTML += ('<li>' + title + '</li>')

        // liの要素を生成する(まだ反映はされない）
        const newElm = document.createElement('li');
        // 生成したliの中にinputの内容をプレーンテキストとして挿入
        newElm.innerText = title;
        // UIに作成したliを挿入する（ここで画面に反映される）
        todoList.appendChild(newElm);

    }

    todoAdd.addEventListener('click', clickHandlar);

})()

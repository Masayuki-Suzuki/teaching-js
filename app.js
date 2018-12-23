(function() {
    // DOMエレメントの取得
    const doms = {
        todoInput:  document.getElementById('todoTitle'),
        todoAdd: document.getElementById('addToDo'),
        todoList: document.getElementById('todoList'),
        todoForm: document.querySelector('.todo-form'),
    }

    // クリックした時に処理する関数
    const submitHandlar = function(event){
        if (
            ( event.target.id === 'addToDo' || event.key === 'Enter' ) &&
            !event.isComposing
        ) {
            // input#todoTitleの値を取得する
            const title = doms.todoInput.value;

            if (title) {
                // checkbox用のinputの生成
                const checkbox = document.createElement('input');
                // inputのタイプ属性の設定
                checkbox.setAttribute('type', 'checkbox');
                checkbox.classList.add('todoDone')

                // テキスト用のspanの生成
                const textSpan = document.createElement('span');
                // 生成したspanの中にinputの内容をプレーンテキストとして挿入
                textSpan.innerText = title;

                // liの要素を生成する(まだ反映はされない）
                const newElm = document.createElement('li');
                // UIに作成したliを挿入する（ここで画面に反映される）
                doms.todoList.appendChild(newElm);
            }
        }
    }

    const todoClickHandlar = function(event) {
        const target = event.target
        if (target.classList.contains('todoDone')) {
            if (target.checked) {
                target.nextSibling.classList.add('done');
            } else {
                target.nextSibling.classList.remove('done');
            }
        }
    }

    doms.todoForm.addEventListener('click', submitHandlar);
    doms.todoForm.addEventListener('keydown', submitHandlar);
    doms.todoList.addEventListener('click', todoClickHandlar);
})()


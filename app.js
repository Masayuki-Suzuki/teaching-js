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
        // イベント発火対象のidが addTodo or 押されたキーがEnterキー
        // "かつ" 入力が変換中で無い場合
        if (
            ( event.target.id === 'addToDo' || event.key === 'Enter' ) &&
            !event.isComposing // <= !は真偽値を反転させる true <=> false
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

                // Deleteボタンの生成
                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = 'delete'

                // liの要素を生成する(まだ反映はされない）
                const newElm = document.createElement('li');

                // li要素の中に生成したinput, text, buttonを入れ込む
                newElm.appendChild(checkbox);
                newElm.appendChild(textSpan);
                newElm.appendChild(deleteBtn);

                // UIに作成したliを挿入する（ここで画面に反映される）
                doms.todoList.appendChild(newElm);
            }
        }
    }

    // 関数の引数はaddEventListenerから投げられたEventオブジェクトを受け取る
    const todoClickHandlar = function(event) {

        // Eventオブジェクトから、イベントが発火した対象を取得
        const target = event.target

        if (target.classList.contains('todoDone')) {
            // 生成したliの子要素のうち、css class todoDoneを持つ場合
            // 打ち消し線の処理を行う
            if (target.checked) {
                target.nextSibling.classList.add('done');
            } else {
                target.nextSibling.classList.remove('done');
            }
        } else if (target.tagName.toLowerCase() === 'button') {
            // イベント対象がbuttonの場合実行する
           doms.todoList.removeChild(target.parentNode)
        }
    }

    // イベントを登録
    doms.todoForm.addEventListener('click', submitHandlar);
    doms.todoForm.addEventListener('keydown', submitHandlar);
    doms.todoList.addEventListener('click', todoClickHandlar);
})()


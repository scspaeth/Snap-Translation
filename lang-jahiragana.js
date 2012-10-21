/*

    lang-jahiragana.js

	Japanese hiragana translation for SNAP!

	Translated by K Abe and revised by SC Spaeth

	Copyright (C) 2012 by Jens Mönig

	This file is part of Snap!. 

	Snap! is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of
	the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

/*global SnapTranslator*/

/*jslint sloppy: true, browser: true, indent: 4, maxlen: 78 */ // Directive

SnapTranslator.dict.jahiragana = {

/*
	These are superfluous in a fully Unicode compliant system but may keep.
	
    Sonderzeichen:

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/

    // meta information
    'language_name':
        'にほごひらがな',
    'language_translator':
        'K Abe, SC Spaeth',
    'translator_e-mail':
        '',
    'last_changed':
        '2012-10-19',

    // control bar:
    'untitled':
        'Unbenannt',
    'development mode':
        'ハッカーモード',

    // categories:
    'Motion':
        'うごき',
    'Looks':
        'みため',
    'Sound':
        'おと',
    'Pen':
        'ペン',
    'Control':
        'せいぎょ',
    'Sensing':
        'しらべる',
    'Operators':
        'えんざん',
    'Variables':
        'へんすう',
    'Lists':
        'リスト',
    'Other':
        'Andere',

    // editor:
    'draggable':
        'ドラッグかのう',

    // tabs:
    'Scripts':
        'スクリプト',
    'Costumes':
        'コスチューム',
    'Sounds':
        'おと',

    // names:
    'Sprite':
        'スプライト',
    'Stage':
        'ステージ（ズクリプト：０）',

    // rotation styles:
    'don\'t rotate':
        'かいてんしない',
    'can rotate':
        'かいてんする',
    'only face left/right':
        'さゆにほんてんするだけ',

    // new Sprite button:
    'add a new Sprite':
        'ein neues Objekt\nhinzufügen',

    // tab help
    'costumes tab help':
        'Bilder durch hereinziehen von einer anderen\n'
            + 'Webseite or vom Computer importieren',
    'import a sound from your computer\nby dragging it into here':
        'Klänge durch hereinziehen importieren',

    // primitive blocks:
    // motion:
    'Stage selected:\nno motion primitives':
        'ステージ ausgewählt:\nkeine Standardbewegungsblöcke\n'
            + 'vorhanden',

    'move %n steps':
        '%n ぽうごかす',
    'turn %clockwise %n degrees':
        '%clockwise %n どまわす',
    'turn %counterclockwise %n degrees':
        '%counterclockwise %n どまわす',
    'point in direction %dir':
        'どねむける %dir',
    'point towards %dst':
        'へむける %dst',
    'go to x: %n y: %n':
        'xざひょうを %n , yぎひょうを %n',
    'go to %dst':
        'へいく %dst',
    'glide %n secs to x: %n y: %n':
        '%n ぴょうでxざひょうを %n に、yざひょうを %n にかえる',
    'change x by %n':
        'xざひょうを %n ずつかえる',
    'set x to %n':
        'xざひょうを %n にする',
    'change y by %n':
        'yざひょうを %n ずつかえる',
    'set y to %n':
        'yざひょうを %n にする',
    'if on edge, bounce':
        'もしはしについたら、はねかえる',
    'x position':
        'xざひょう',
    'y position':
        'yざひょう',
    'direction':
        'むき',

    // looks:
    'switch to costume %cst':
        'コスチュームを %cst にする', // TODO: verify orders of labels/ parameters
    'next costume':
        'つぎのコスチュームにする',
    'costume #':
        'コスチュームのばんごう',
    'say %s for %n secs':
        '%s と %n びょういう',
    'say %s':
        '%s という', // Changed order of label and parameterスペース　テスート
    'think %s for %n secs':
        '%s と %n びょうかんがえる',
    'think %s':
        '%s とかんがえる', // TODO: Find out how to handle empty labels
    'Hello!':
        'ハロー!',
    'Hmm...':
        'うーん...',
    'change %eff effect by %n':
        '%eff のこうかを %n ずつかえる', // Done. This test worked.
    'set %eff effect to %n':
        '%eff のこうかを %n にする',
    'clear graphic effects':
        'がぞうこうかをなくす',
    'change size by %n':
        'おおきさを %n ずつかえる', // Note: very subtle error here space !=「　」スペース
    'set size to %n %':
        'おおきさを %n % にする', // Note: %にする causes a failure; % にする corrects
    'size':
        'おおきさ',
    'show':
        'ひょうじする',
    'hide':
        'かくす',
    'go to front':
        'まえねだす',
    'go back %n layers':
        '%n ぼんめにいどう',

    'development mode \ndebugging primitives:':
        'ハッカーモード \nDebugging-ブローク', // TODO: Revise translation
    'console log %mult%s':
        'コンソールログ...: %mult%s', // TODO: Finish translation
    'alert %mult%s':
        'Pop-up: %mult%s',

    // sound:
    'play sound %snd':
        '%snd のおとをなるす',
    'play sound %snd until done':
        'おわるまで %snd のおとをならす',
    'stop all sounds':
        'すべてのおとをとめる',

    // pen:
    'clear':
        'けす',
    'pen down':
        'ペンをおろす',
    'pen up':
        'ペンをおげる',
    'set pen color to %clr':
        'ペンのいろを %clr にする',
    'change pen color by %n':
        'ペンのいろを %n ずつかえる',
    'set pen color to %n':
        'ペンのいろを %n にする',
    'change pen shade by %n':
        'ペンのこさを %n ずつかえる',
    'set pen shade to %n':
        'ペンのこさを %n にする',
    'change pen size by %n':
        'ペンのふとさを %n ずつかえる',
    'set pen size to %n':
        'ペンのふとさを %n にする',
    'stamp':
        'スタンプ',

    // control:
    'when %greenflag clicked':
        '%greenflag がクリックされたとき',
    'when %key key pressed':
        '%key キーがおされたとき',
    'when I am clicked':
        'Sprite がクリックされたとき', // TODO: Self-reference adjustment?
    'when I receive %msg':
        '%msg をうけとったとき',
    'broadcast %msg':
        '%msg をおくる',
    'broadcast %msg and wait':
        '%msg をおくってまつ',
    'Message name':
        'メッセージのなまえ:',
    'wait %n secs':
        '%n ぴょうまつ',
    'wait until %b':
        '%b までまつ',
    'forever %c':
        'ずっと %c',
    'repeat %n %c':
        '%n かいくりかえす %c',
    'repeat until %b %c':
        'もし %b なら、ずつと %c',
    'if %b %c':
        'もし %b なる %c',
    'if %b %c else %c':
        'もし %b なる %c でなければ %c',
    'report %s':
        'berichte %s',
    'stop block':
        'stop this Block',
    'stop script':
        'スクリプトをとめる',
    'stop all %stop':
        'すべてをとめる %stop',
    'run %cmdRing %inputs':
        'führe %cmdRing aus %inputs',
    'launch %cmdRing %inputs':
        'starte %cmdRing %inputs',
    'call %repRing %inputs':
        'rufe %repRing auf %inputs',
    'run %cmdRing w/continuation':
        'führe %cmdRing mit Continuation aus',
    'call %cmdRing w/continuation':
        'rufe %cmdRing mit Continuation auf',
    'warp %c':
        'ターボスピード %c',

    // sensing:
    'touching %col ?':
        '%col にふれた',
    'touching %clr ?':
        '%clr いろにふれた',
    'color %clr is touching %clr ?':
        '%clr いろが %clr いろにふれた',
    'ask %s and wait':
        '%s ときいてまつ',
    'what\'s your name?':
        'あなたのなまえはなにですか？',
    'answer':
        'こたえ',
    'mouse x':
        'マウスのxざひょう',
    'mouse y':
        'マウスのyざひょう',
    'mouse down?':
        'マウスがおされた',
    'key %key pressed?':
        '%key キーがおされた',
    'distance to %dst':
        '%dst までのきょり',
    'reset timer':
        'タイマーをリセット',
    'timer':
        'タイマー',
    'http:// %s':
        'http:// %s',

    'filtered for %clr':
        'nach %clr gefiltert',
    'stack size':
        'Stapelgröße',
    'frames':
        'フレーム',

    // operators:
    '%n mod %n':
        '%n を %n でわったあまり', // TODO: Check this translation
    'round %n':
        '%n のまるめる',
    '%fun of %n':
        '%fun von %n', // TODO: Rewrite label texts to accomodate parameters
    'pick random %n to %n':
        '%n から %n までのらんすう',
    '%b and %b':
        '%b かつ %b',
    '%b or %b':
        '%b または %b',
    'not %b':
        '%b ではない',
    'true':
        'true', // TODO: apply standard naming
    'false':
        'false',
    'join %words':
        '[ ]と[ ] %words をつなぐ', // TODO: revise text to conform to expanding number of inputSlots
    'hello':
        'ハロー',
    'world':
        'ワールド',
    'letter %n of %s':
        'Zeichen %n von %s', // TODO: Scratch parameter order not same
    'length of %s':
        '%s のながさ',
    'unicode of %s':
        '%s のUnicodeばんご', // TODO: check the label and parameter order
    'unicode %n as letter':
        'Unicode %n als Buchstabe',
    'is %s a %typ ?':
        'ist %s ein(e) %typ ?',

    'type of %s':
        'Typ von %s',

    // variables:
    'Make a variable':
        'あたらしいへんすうをつくる',
    'Variable name':
        'へんすうのなまえ', // TODO: Check this translation
    'Delete a variable':
        'へんすうをさくじょ', // TODO: Check this translation

    'set %var to %s':
        '%var を %s にする',
    'change %var by %n':
        '%var を %n ずつかえる',
    'show variable %var':
        'ステージうえにひょうじ %var', // TODO: check translation
    'hide variable %var':
        'ステージからビューワをけす %var', // TODO: check translation
    'script variables %scriptVars':
        'スクリプトのへんすう %scriptVars',

    // lists:
    'list %exp':
        'リスト %exp',
    '%s in front of %l':
        '%s am Anfang von %l ', // TODO: adjust for parameter order
    'item %idx of %l':
        '%idx の %l ばんめ', // TODO: adjust for parameter order
    'all but first of %l':
        'alles außer dem ersten von %l ', // TODO: Not in Scratch
    'length of %l':
        '%l のながさ',
    '%l contains %s':
        '%l に %s がふくまれる',
    'thing':
        'なにか？',
    'add %s to %l':
        '%s を %l についか',
    'delete %ida of %l':
        '%ida ばんめを %l からさくじょ',
    'insert %s at %idx of %l':
        '%s の %idx ばんめに %l をそうにゅうする',
    'replace item %idx of %l with %s':
        'ersetze Element %idx in %l durch %s ', // TODO: adjust for parameter order

    // other
    'Make a block':
        'あたらしいブロークをつくる',

    // menus
    // snapMenu
    'About...':
        'Snap!について...',
    'Snap! website':
        'Snap!のWebページ',
    'Download source':
        'ソースコードをダウンロード', // TODO: Check translation
    'Switch back to user mode':
        'ユーザーモードにかえる',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'verlässt Morphic',
    'Switch to dev mode':
        'ハッカーモードに切り替える', // TODO: Check translation 
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'モーフィック\nコンテキストメニューを有効に\n'
        + 'しないユーザーフレンドリー', // TODO: Check revise translation improve line breaks

    // projectMenu
    'Project Notes...':
        'プロジェクトのメモ...',
    'New':
        'しんき',
    'Open...':
        'ひらく...',
    'Save':
        'ほぞんする',
    'Save As...':
        'なまえをつけてほぞん...',
    'Import...':
        'よみこみ...',
    'file menu import hint':
        'lädt ein プロジェクト,\neine Bibliothek mit'
            + 'ブラーク\n'
            + 'ein Kostüm oder einen Klang',
    'Export project as plain text ...':
        '通常のテキストとして、プロジェクトをかきだす...',
    'Export project...':
        'プロジェクトをかきだす...',
    'show project data as XML\nin a new browser window':
        'zeigt das Projekt als XML\nin einem neuen Browserfenster an',
    'Export blocks ...':
        'ブラークをかきだす...',
    'show global custom block definitions as XML\nin a new browser window':
        'zeigt globale Benutzerblockdefinitionen\nals XML im Browser an',

    // settingsMenu
    'Language...':
        'げんごをせってい...',
    'Blurred shadows':
        'Weiche Schatten',
    'uncheck to use solid drop\nshadows and highlights':
        'abschalten für harte Schatten\nund Beleuchtung',
    'check to use blurred drop\nshadows and highlights':
        'einschalten für harte Schatten\nund Beleuchtung',
    'Zebra coloring':
        'シマウマ...', // TODO: revise translation
    'check to enable alternating\ncolors for nested blocks':
        'einschalten ür abwechselnde Farbnuancen\nin Blöcken',
    'uncheck to disable alternating\ncolors for nested block':
        'ausschalten verhindert abwechselnde\nFarbnuancen in Blöcken',
    'Prefer empty slot drops':
        'Leere Platzhalter bevorzugen',
    'settings menu prefer empty slots hint':
        'einschalten um leere Platzhalter\nbeim Platzieren von Blöcken'
            + 'zu bevorzugen',
    'uncheck to allow dropped\nreporters to kick out others':
        'ausschalten um das "Rauskicken"\nvon platzierten Blöcken\n'
            + 'zu ermöglichen',
    'Long form input dialog':
        'Ausführlicher Input-Dialog',
    'check to always show slot\ntypes in the input dialog':
        'einschalten, um immer die Datentypen\nim Input-Dialog zu sehen',
    'uncheck to use the input\ndialog in short form':
        'ausschalten für kurzen\nInput-Dialog',
    'Virtual keyboard':
        'Virtuelle Tastatur',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'ausschalten um die virtuelle\nTastatur auf mobilen Geräten\n'
            + 'zu sperren',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'einschalten um die virtuelle\nTastatur auf mobilen Geräten\n'
            + 'zu ermöglichen',
    'Input sliders':
        'Eingabeschieber',
    'uncheck to disable\ninput sliders for\nentry fields':
        'ausschalten um Schieber\nin Eingabefeldern zu verhindern',
    'check to enable\ninput sliders for\nentry fields':
        'einschalten um Schieber\nin Eingabefeldern zu aktivieren',
    'Clicking sound':
        'Akustisches Klicken',
    'uncheck to turn\nblock clicking\nsound off':
        'ausschalten um akustisches\nKlicken zu deaktivieren',
    'check to turn\nblock clicking\nsound on':
        'einschalten um akustisches\nKlicken zu aktivieren',
    'Thread safe scripts':
        'Threadsicherheit',
    'uncheck to allow\nscript reentrancy':
        'verhindert, dass unvollendete\nSkripte erneut gestartet werden',
    'check to disallow\nscript reentrancy':
        'verhindert, dass unvollendete\nSkripte erneut gestartet werden',

    // inputs
    'with inputs':
        'with インプット', // TODO: revise translation
    'input names:':
        'インプットのなまえ:',
    'Input Names:':
        'インプットのなまえ:',

    // context menus:
    'help':
        'ヘルプ',

    // blocks:
    'help...':
        'ヘルプ...',
    'duplicate':
        'ふくせい',
    'make a copy\nand pick it up':
        'ふくせい\n and pick it up', // TODO: Revise translation
    'delete':
        'さくじょ',
    'script pic...':
        'スクリプトのがぞうをほぞん...',
    'open a new window\nwith a picture of this script':
        'ein neues Browserfenster mit einem\nBild dieses Skripts öffnen',
    'ringify':
        'Umringen',

    // custom blocks:
    'delete block definition...':
        'Blockdefinition さくじょ', // TODO: Revise translation
    'edit...':
        'エディット...',

    // sprites:
    'edit':
        'エディット',
    'export...':
        'かきだす...', // TODO: Check translation

    // scripting area
    'clean up':
        'きれいねする',
    'arrange scripts\nvertically':
        'きれいにする\n vertically', // TODO: Finish translation
    'add comment':
        'コメントをついか',
    'make a block...':
        'Neuen Block bauen...',

    // costumes
    'rename':
        'Umbenennen',
    'export':
        'かきだす', // TODO: Check translation

    // sounds
    'Play sound':
        'おとをならす',
    'Stop sound':
        'すべてのおとをとめる',
    'Stop':
        'とめる',
    'Play':
        'ならす',

    // dialogs
    'Ok':
        'OK',
    'Cancel':
        'キャンセル',
    'Yes':
        'はい',
    'No':
        'いいえ',

    // costume editor
    'Costume Editor':
        'Kostümeditor',
    'click or drag crosshairs to move the rotation center':
        '回転の中心を設定するための十字の位置',

    // project notes
    'Project Notes':
        'プロジェクトのメモ',

    // new project
    'New Project':
        'あたらしいプロジェクト',
    'Replace the current project with a new one?':
        'Das aktuelle Projekt durch ein neues ersetzen?',

    // open project
    'Open Projekt':
        'プロジェクトをよみこむ',

    // save project
    'Save Project As...':
        'なまえをつけてほぞん...',

    // export blocks
    'Export blocks':
        'Blöcke exportieren',
    'this project doesn\'t have any\ncustom global blocks yet':
        'in diesem Projekt gibt es noch keine\nglobalen Blöcke',
    'select':
        'auswählen',
    'all':
        'ぜんぶ',
    'none':
        'nichts',

    // variable dialog
    'for all sprites':
        'すべてのスプライトよう',
    'for this sprite only':
        'こののスプライトよう',

    // block dialog
    'Change block':
        'Block verändern',
    'Command':
        'Befehl',
    'Reporter':
        'Funktion',
    'Predicate':
        'Prädikat',

    // block editor
    'Block Editor':
        'Blockeditor',
    'Apply':
        'Anwenden',

    // input dialog
    'Create input name':
        'Eingabe erstellen',
    'Edit input name':
        'Eingabe bearbeiten',
    'Title text':
        'Beschriftung',
    'Input name':
        'Eingabe',
    'Delete':
        'Löschen',
    'Object':
        'オブジェクト',
    'Number':
        'ばんご',
    'Text':
        'テキスト',
    'List':
        'ルスト',
    'Any type':
        'Beliebig',
    'Boolean (T/F)':
        'ブーリアン (T/F)', // TODO: Check usage T/F
    'Command\n(inline)':
        'Befehl',
    'Command\n(C-shape)':
        'Befehl\n(C-Form)',
    'Any\n(unevaluated)':
        'Beliebig\n(zitiert)',
    'Boolean\n(unevaluated)':
        'ブーリアン\n(zitiert)', // TODO: Finish translation
    'Single input.':
        'Einzeleingabe.',
    'Default Value:':
        'デフォルトち:', // TODO: Check conversion Kanji to hiragana デフォルト値
    'Multiple inputs (value is list of inputs)':
        'Mehrere Eingaben (als Liste)',
    'Upvar - make internal variable visible to caller':
        'Interne Variable außen sichtbar machen',

    // About Snap
    'About Snap':
        'Snapについて',

    // variable watchers
    'normal':
        'むつうのひょうじ',
    'large':
        'おおきなひょうじ',
    'slider':
        'スライダー',
    'slider min...':
        'さいしょうち...',　// TODO: Check to see this is applied correctly
    'slider max...':
        'さいだいち...',
    'Slider minimum value':
        'Minimalwert des Reglers',
    'Slider maximum value':
        'Maximalwert des Reglers',

    // list watchers
    'length: ':
        'ながさ: ',

    // coments
    'add comment here...':
        'コメントをついか。。。',

    // drop downs
    '(90) right':
        '(90) みぎ',
    '(-90) left':
        '(-90) ひだり',
    '(0) up':
        '(0) うえ',
    '(180) down': // TODO: '(180) right': Alert Jens to this typo right -> down
        '(180) した',

    'mouse-pointer':
        'マウスのポインター',
    'edge':
        'はし(端)', // TODO: hashi as in もし端に着いたら、跳ね返る
    'pen trails':
        'ペんtrails', // TODO: Revise translation

    'Turtle':
        'ポインター', // TODO: What does Richtungszeiger mean?

    'ghost':
        'ゆうれい',

    'space':
        'スペース',
    'up arrow':
        'うわむきやじるし',
    'down arrow':
        'したむきやじるし',
    'right arrow':
        'みぎむきやじるし',
    'left arrow':
        'ひだりむきやじるし',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    'new...':
        'あたらしい...', // TODO: Check usage

    'abs':
        'ぜったいち',
    'sqrt':
        'へいほうこん',
    'sin':
        'sin',
    'cos':
        'cos',
    'tan':
        'tan',
    'asin':
        'asin',
    'acos':
        'acos',
    'atan':
        'atan',
    'ln':
        'ln',
    'e^':
        'e^',

    'number':
        'ばんご',
    'text':
        'テキスト',
    'Boolean':
        'ブーリアン',
    'list':
        'ルスト',
    'command':
        'コマンド',
    'reporter':
        'リポーター',
    'predicate':
        'プレディケート', // TODO: Revise for standard usage

    'last':
        'さいご',
    'any':
        'すべて'
};
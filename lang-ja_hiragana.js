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



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

/*jslint sloppy: true, browser: true, indent: 4, maxlen: 78 */ // Directive

SnapTranslator.dict.ja_hiragana = {
 (see <http://0xcc.net/jsescape/>)

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/

    // translations meta information
    'language_name':
        'にほんごひらがな', // the name as it should appear in the language menu
    'language_translator':
        'Kuzuhiro Abe & SC Spaeth', // your name for the Translators tab
    'translator_e-mail':
        '', // optional
    'last_changed':
        '2012-10-21', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':
        'Unbenannt',
    'development mode':
        'Hackermodus',

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

    // new sprite button:
    'add a new Sprite':
        'ein neues Objekt\nhinzufügen',

    // tab help
    'costumes tab help':
        'Bilder durch hereinziehen von einer anderen\n'
            + 'Webseite or vom Computer importieren',
    'import a sound from your computer\nby dragging it into here':
        'Klänge durch hereinziehen importieren',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:
        
            'say %s for %n secs'

        can currently not be changed into
        
            'say %n secs long %s'

        and still work as intended.

        Similarly
        
            'point towards %dst'

        cannot be changed into
        
            'point towards %cst'

        without breaking its functionality.
    */

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
    // snap menu
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

    // settings menu
    'Language...':
        'げんごをせってい...',
    'Blurred shadows':
        'Weiche Schatten',
    'uncheck to use solid drop\nshadows and highlights':
        'abschalten für harte Schatten\nund Beleuchtung',
    'check to use blurred drop\nshadows and highlights':
        'einschalten für harte Schatten\nund Beleuchtung',
    'Zebra coloring':
        'Zebrafarben',
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
    'unringify':
        'Entringen',

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
        'Exportieren',
    'rename costume':
        'Kost\u00fcm umbenennen',

    // sounds
    'Play sound':
        'おとをならす',
    'Stop sound':
        'すべてのおとをとめる',
    'Stop':
        'とめる',
    'Play':
        'Los',
    'rename sound':
        'Klang umbenennen',

    // dialogs
    // buttons
    'OK':
        'OK',
    'Cancel':
        'キャンセル',
    'Yes':
        'はい',
    'No':
        'Nein',

    // help
    'Help':
        'Hilfe',

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

    // block deletion dialog
    'Delete Custom Block':
        'Block L\u00f6schen',
    'block deletion dialog text':
        'Soll dieser Block mit allen seinen Exemplare\n' +
            'wirklich gel\u00f6scht werden?',

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
        '\u00dcber Snap',
    'Back...':
        'Zur\u00fcck...',
    'License...':
        'Lizenz...',
    'Modules...':
        'Komponenten...',
    'Credits...':
        'Mitwirkende...',
    'Translators...':
        '\u00dcbersetzer',
    'License':
        'Lizenz',
    'current module versions:':
        'Komponenten-Versionen',
    'Contributors':
        'Mitwirkende',
    'Translations':
        '\u00dcbersetzungen',

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
    // directions
    '(90) right':
        '(90) みぎ',
    '(-90) left':
        '(-90) ひだり',
    '(0) up':
        '(0) うえ',
    '(180) down': // TODO: '(180) right': Alert Jens to this typo right -> down
        '(180) した',

    // collision detection
    'mouse-pointer':
        'マウスのポインター',
    'edge':
        'はし(端)', // TODO: hashi as in もし端に着いたら、跳ね返る
    'pen trails':
        'ペんtrails', // TODO: Revise translation

    // costumes
    'Turtle':
        'ポインター', // TODO: What does Richtungszeiger mean?

    // graphical effects
    'ghost':
        'ゆうれい',

    // keys
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

    // messages
    'new...':
        'あたらしい...', // TODO: Check usage

    // math functions
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

    // data types
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

    // list indices
    'last':
        'さいご',
    'any':
        'すべて'
};
<script>
    var winwidth=(window.innerWidth)?window.innerWidth:	((document.all)?document.body.offsetWidth:null);
    var winheight=(window.innerHeight)?window.innerHeight:	((document.all)?document.body.offsetHeight:null);
    document.writeln('<br>Текущая кодировка: ',document.characterSet,' <small>(document.characterSet)</small>');
    document.writeln('<br>Разрешение экрана: ',screen.width,' x ',screen.height,' <small>(screen.width, screen.height)</small>');
    document.writeln('<br>Начало рабочей области относительно экрана: ',window.screenLeft,', ',window.screenTop+' <small>(window.screenLeft, window.screenTop)</small>');
    document.writeln('<br>Начало рабочей области относительно окна: ',document.body.clientLeft,', ',document.body.clientTop+' <small>(document.body.clientLeft, document.body.clientTop)</small>');
    document.writeln('<br>Конец рабочей области: ',document.body.clientWidth,', ',document.body.clientHeight+' <small>(document.body.clientWidth, document.body.clientHeight)</small>');
    document.writeln('<br>Свободная область экрана: ',screen.availWidth,', ',screen.availHeight+' <small>(screen.availWidth, screen.availHeight)</small>');
    document.writeln('<br>Внутренний размер окна браузера: ',winwidth,', ',winheight);

    docHeight=(document.body.scrollHeight > document.body.offsetHeight)?document.body.scrollHeight:document.body.offsetHeight;
    document.writeln('<br>Размер документа по вертикали: ',docHeight);

    docWidth=(document.body.scrollWidth > document.body.offsetWidth)?document.body.scrollWidth:document.body.offsetWidth;
    document.writeln('<br>Размер документа по горизонтали: ', docWidth);

    docHeight=document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight
    document.writeln('<br>Высота рабочей области окна браузера: ', docHeight);
    docWidth=document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth
    document.writeln('<br>Ширина рабочей области окна браузера: ', docWidth);
</script>

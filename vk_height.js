// инициализация вк
VK.init(function() { 
     console.log('Init successful 1');
	$('#set-permission').on('click', function(e) {
    		e.preventDefault();
		SetPerms();
	});
	$('#set-widget').on('click', function(e) {
		e.preventDefault();	
		Install();
	});
  }, function() { 
     console.log('Error init');
}, '5.73'); 

function SetPerms(){
	console.log('Запрос прав доступа');
	VK.callMethod("showGroupSettingsBox", 0);	
};

function Install(){
	console.log('Запрос установки виджета');

	VK.callMethod('showAppWidgetPreviewBox', 'text', 'return {' + 
	 '"title": "Цитата",' + 
	 '"text": "Текст цитаты"' + 
	'};');

	VK.addCallback('onAppWidgetPreviewSuccess', function f(data){ 
	 alert("Виджет успешно добавлен"); 
	});
};
// функция дня изменения размера окна в зависимости от содержимого страницы
function autosize(width) {
    //Проверяем элемент body на наличие.
    if (!document.getElementById('body')) {
        alert('error');
        return;
    }
    // Успешно ли подключен ВК скрипт
    if (typeof VK.callMethod != 'undefined') {
        /*
        Вызываем функцию vk js api для управления окном.
        VK.callMethod('функция', параметры)
        В данном случае у нас - VK.callMethod('изменение_размеров_окна', ширина, высота);
        Так же добавляем еще 60 пикселей что бы было небольшое расстояние.
        */
        VK.callMethod('resizeWindow', 840, document.getElementById('body').clientHeight + 60);
    } else {
        alert('error #2');
    }
}

console.log('Перед jquery');
$(document).ready( function(){
    //Вызываем функцию регулировки высоты каждые пол секунды.
    setInterval('autosize(607)', 500); 
});

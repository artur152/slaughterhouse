"use strict";


document.addEventListener("DOMContentLoaded", function() {


  /* Test */
  var str = "JavaScript some stuff!!! from javascript stuff";
  var regexp = /stuff/gi;
  var last = regexp.lastIndex = 20;

  //console.log( str.search(/stuff/gi) ); // search – он всегда ищет только первое совпадение.
  //console.log( str.match(/stuff/ig) ); // match – он просто возвращает все совпадения.
  //console.log( result = regexp.exec(str) );
  //console.log( regexp.exec(str).index ); // match – он просто возвращает все совпадения.

  //var result = str.match(/stu(ff)/i);
  //console.log( result[0] );
  //console.log( result[1] );
  //console.log( result.index );
  //console.log( result.input );


  var mas = '12-33-44';
  var splitter = mas.split(/-/);
  var replace = mas.replace(/-/g,'::');
  //console.log(splitter);
  //console.log(replace);


  //var strq = "ОЙ-Ой-ой";
  //
  //var resultq = strq.match( /ой/i );
  //
  //console.log( resultq[0] );
  //console.log( resultq.index );
  //console.log( resultq.input );


  var strong = "John Cena";
  //console.log(strong.replace(/(John) (Cena)/, '$2, $1'));


  // заменить каждое вхождение "stuff" на результат вызова функции
  var i = 0;
  //console.log("Love some stuff stuff stuff!!!".replace(/stuff/gi, function() {
  //  return ++i;
  //}));


  var st = "John Cena is...";
  //console.log( /javascript/i.test(st) ) // false
  //console.log( st.search(/javascript/i) != -1 ) // false

});

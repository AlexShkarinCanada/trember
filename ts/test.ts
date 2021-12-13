/**
 * Модуль ДОЛЖЕН вернуть массив объектов, полученный из запросов
 * Если при запросе будет ошибка/ки, то модуль ДОЛЖЕН вместо элемента массива возвращать ошибку/ки
 * В случае проблем с сетью модель не должен ронять приложение
 *
 * Дано: кто-то сделал этот весьма нерабочий и некрасивый код для браузера.
 * Нужно:
 * 1. Сделать его рабочим (тестировать можно хоть в консоли, прогнав код через ts, хоть сделать страницу)
 * 2. Сделать его красивым (если есть время и желание, понятие красоты -- личное)
 * 3. Сделать его быстрым (опять таки если есть время и желание и ещё есть, что ускорять)
 */

//  export {};
// import fetch from "node-fetch";
 "use strong";

 console.log('Run..');
 
//   let url :string = 'https://raw.githubusercontent.com/dmfilipenko/timezones.json/master/timezones.json';

//  var load = async (url :string) => {
//    let res =  await fetch(url);
//    const result = res.json();
//   //  console.log('load..', result);
//    return result;
//  }

// async function Get () {
//   console.log('Get..');
// return (
//   await fetch('https://raw.githubusercontent.com/dmfilipenko/timezones.json/master/timezones.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })

// )
// //   await fetch(
// //   "https://raw.githubusercontent.com/dmfilipenko/timezones.json/master/timezones.json"
// // )

// }

// Get();



// console.log('load..', response);

// var load = async (url :string) => {
//   let res =  await fetch(url)
//   // const result = res.json();
//   .then(response => response.json())
//   .then(data => data)  
//   .catch(error => {
//     console.log('err');
//   })
//  //  console.log('load..', result);
//   return res;
// }
 


//  api(url);
  // load (url);
 
 

 /**
  * Делает "веер" запросов и возвращает все результаты в виде массива, сохраняя порядок URL-ов
  * @param additional дополнительные URL-ы для запроса
  */
              function list (additional ?:string) {
                // list.map((url) => load(url));
                          return 
                          (['https://raw.githubusercontent.com/dmfilipenko/timezones.json/master/timezones.json',
                          'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json',
                          additional
                          ]);
                                                  }
 
  let url = list();
  console.log('url..', url);


            let load = async (url: string) => 
            {
                  let res =  await fetch(url);
                  const result = res.json();
                  //console.log('load..', result);
                  return result;
            }

// load(url);
// console.log('load..', load);






<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/tasks', 'TaskController@index');
Route::post('/task', 'TaskController@store');
Route::delete('/task/{task}', 'TaskController@destroy');

Route::get('/react', function () {
  return view('react');
});

Route::get('/api/tasks', 'TaskController@apiIndex');
Route::get('/api/tasksDumb', function() {
  return json_decode('[{"id":13,"user_id":1,"name":"Thanatos","created_at":"2017-07-26 04:25:40","updated_at":"2017-07-26 04:25:40"},{"id":14,"user_id":1,"name":"J=","created_at":"2017-07-26 04:25:46","updated_at":"2017-07-26 04:25:46"},{"id":15,"user_id":1,"name":"Alabama","created_at":"2017-07-26 05:01:29","updated_at":"2017-07-26 05:01:29"},{"id":16,"user_id":1,"name":"Wayland-Yutani","created_at":"2017-07-26 05:01:58","updated_at":"2017-07-26 05:01:58"},{"id":17,"user_id":1,"name":"Ken Master","created_at":"2017-07-26 07:09:26","updated_at":"2017-07-26 07:09:26"},{"id":18,"user_id":1,"name":"Salad","created_at":"2017-07-26 07:21:39","updated_at":"2017-07-26 07:21:39"},{"id":19,"user_id":1,"name":"a","created_at":"2017-07-26 09:08:53","updated_at":"2017-07-26 09:08:53"},{"id":20,"user_id":1,"name":"droid","created_at":"2017-07-26 09:08:59","updated_at":"2017-07-26 09:08:59"},{"id":21,"user_id":1,"name":"gcon","created_at":"2017-07-26 09:09:02","updated_at":"2017-07-26 09:09:02"},{"id":22,"user_id":1,"name":"asdfadsf","created_at":"2017-07-26 09:09:06","updated_at":"2017-07-26 09:09:06"}]');
});
Route::get('/tasks2', 'TaskController@index2');
Route::get('/reactrouter', function(){
 return view('reactRouter');
});

Route::get('/fluxtask', 'TaskController@index3');
Route::get('/shorttxt', function() {
  return view('shortTxt');
});
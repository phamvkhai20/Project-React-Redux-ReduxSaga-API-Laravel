<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'Api\AuthController@login');
    Route::post('signup', 'Api\AuthController@signup');
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'Api\AuthController@logout');
        Route::get('user', 'Api\AuthController@user');
    });
});

Route::group([
    'prefix' => 'product'
],
function(){
    Route::get('/', 'Api\ProductController@index');
    Route::get('/{product}', 'Api\ProductController@show');
    Route::post('add', 'Api\ProductController@store');
    Route::get('/getProductCategory/{id}', 'Api\ProductController@showTheoCategory');
    Route::post('update/{product}', 'Api\ProductController@update');
    Route::get('cart/{arr}', 'Api\ProductController@cart');
    Route::get('deleteList/{arr}', 'Api\ProductController@deleteList');
    Route::post('delete/{product}', 'Api\ProductController@destroy');
});

Route::group([
    'prefix' => 'category'
],
function(){
    Route::get('/', 'Api\CategoryController@index');
    Route::get('/{category}', 'Api\CategoryController@show');
    Route::post('add', 'Api\CategoryController@store');
    Route::post('update/{category}', 'Api\CategoryController@update');
    Route::post('delete/{category}', 'Api\CategoryController@destroy');
});

Route::group([
    'prefix' => 'contact'
],
function(){
    Route::get('/', 'Api\ContactController@index');
    Route::get('/{contact}', 'Api\ContactController@show');
    Route::post('add', 'Api\ContactController@store');
    Route::post('update/{contact}', 'Api\ContactController@update');
    Route::post('delete/{contact}', 'Api\ContactController@destroy');
});

Route::group([
    'prefix' => 'post'
],
function(){
    Route::get('/', 'Api\PostController@index');
    Route::get('/{post}', 'Api\PostController@show');
    Route::post('add', 'Api\PostController@store');
    Route::post('update/{post}', 'Api\PostController@update');
    Route::post('delete/{post}', 'Api\PostController@destroy');
});


Route::group([
    'prefix' => 'order'
],
function(){
    Route::get('/', 'Api\OrderController@index');
    Route::get('/{order}', 'Api\OrderController@show');
    Route::post('add', 'Api\OrderController@store');
    Route::post('update/{order}', 'Api\OrderController@update');
    Route::post('delete/{order}', 'Api\OrderController@destroy');
});



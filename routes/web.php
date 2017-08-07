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

// Homepage
Route::name('home')->get('/', 'PageController@home');
// Authentication
Auth::routes();

// Admin
Route::group(['as' => 'admin.', 'prefix' => 'admin', 'namespace' => 'Admin'], function(){
    // Dashboard route
    Route::name('dashboard.index')->get('/', 'DashboardController@index');
});

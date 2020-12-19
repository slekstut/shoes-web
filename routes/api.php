<?php

use App\Record;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// tutorials

// Route::get('records', function (Request $request) {
//     return Record::all();
// });

// Route::get('record/{id}', function (Request $request, $id) {
//     return Record::findOrFail($id);
// });

// Route::get('records', 'Api\RecordController@index');
// Route::get('records/{id}', 'Api\RecordController@show');

Route::apiResource('records', 'Api\RecordController');

// -----

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::post('register', 'RegisterController@register');
Route::post('login', 'LoginController@login');
Route::post('logout', 'LoginController@logout');

// Route::get('records', 'RecordController@index');
// Route::group(['prefix' => 'record'], function () {
//     Route::post('add', 'RecordController@store');
//     Route::get('edit/{id}', 'RecordController@edit');
//     Route::post('update/{id}', 'RecordController@update');
//     Route::delete('delete/{id}', 'RecordController@destroy');
// });

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('satellites',[ApiController::class, 'satellites']);//função teste com dados fake

Route::get('getids',[ApiController::class, 'getIds']);


Route::get('satellite/{id}',[ApiController::class, 'getSatellite']);

Route::get('store',[ApiController::class, 'idStore']);

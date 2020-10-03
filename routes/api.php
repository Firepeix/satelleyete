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

Route::get('satellites',function (Request $request) {

    $position = new stdClass();
        $position->lat = 45;
        $position->long = -100;
        $position->height = 1000e3;
        $position->id = 1;
        $position->name = 'SAT01';

    return json_encode($position);
} );

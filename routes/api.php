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

        
        $array= [];
        
        
    for ($i=0; $i < 10; $i++) {      
            $array[]= new stdClass();
            $array[$i]->id= $i;
            $array[$i]->lat= 45+($i*10);
            $array[$i]->long= -100;
            $array[$i]->height = 1000e3;
            $array[$i]->name= 'SAT0'.$i;
            $array[$i]->type = ($i % 2 == 0) ?'Comunicação':'Amador';
            $array[$i]->status = ($i % 2 == 0) ? 'Lixo':'Ativo';

    }




    return response()->json($array);
} );

Route::get('convert/{x}/{y}/{z}',function ($x,$y,$z) {

        $x = floatval($x);
        $y = floatval($y);
        $z = floatval($z);
        $earthRadius = 6371;
        $r = sqrt($x*$x + $y*$y + $z*$z);
        $h= $r - $earthRadius;
        $latitude = asin($z/$r)*(180/pi());

        if ($x>0) {
            $longitude = atan($y/$x)*(180/pi());
        
        }
        elseif ($y>0) {
            $longitude = atan($y/$x)*(180/pi())+ 180;
        }else {
            $longitude = atan($y/$x)*(180/pi()) - 180;
        }

        $local = new stdClass();
        $local->latitude = $latitude;
        $local->longitude = $longitude;
        $local->height = $h*1000;

        return response()->json($local);
} );

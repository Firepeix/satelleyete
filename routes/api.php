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

function convert($x,$y,$z) {

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

    return $local;
}

Route::get('getids',function (){

    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories/",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Accept: application/json"
      ),
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);

    $data = json_decode($response);

    $data = $data->Observatory[1];

    $ids= [];

    foreach ($data as $key => $value) {
        $ids[] = new stdClass();

        $ids[$key]->id = $value->Id;
        $ids[$key]->name = $value->Name;
    }

    return response()->json($ids);
}
);


Route::get('satellite/{id}',function ($id='cluster2') {

    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://sscweb.gsfc.nasa.gov/WS/sscr/2/locations/".$id."/20201003T135000Z,20201003T135500Z/gse/",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Accept: application/json"
      ),
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);

    $data = json_decode($response);

    if (isset($data->Result->Data)) {

        $xCoord = $data->Result->Data[1][0]->Coordinates[1][0]->X[1];
        $coords = $data->Result->Data[1][0]->Coordinates[1][0];
    } else {
        return response()->json(["message"=> "no coordenates"], 404);
    }
    

    $points = [];

    foreach ($xCoord as $key => $value) {
       $points[] = convert($coords->X[1][$key],$coords->Y[1][$key],$coords->Z[1][$key]);
    }

        return response()->json($points);
} );

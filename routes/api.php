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


Route::get('satellite/{id}/{begin}/{end}',function ($id,$begin,$end) {

    // $curl = curl_init();

    // curl_setopt_array($curl, array(
    //   CURLOPT_URL => "https://sscweb.gsfc.nasa.gov/WS/sscr/2/locations/".$id."/".$begin.",".$end."/gse/",
    //   CURLOPT_RETURNTRANSFER => true,
    //   CURLOPT_ENCODING => "",
    //   CURLOPT_MAXREDIRS => 10,
    //   CURLOPT_TIMEOUT => 0,
    //   CURLOPT_FOLLOWLOCATION => true,
    //   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //   CURLOPT_CUSTOMREQUEST => "GET",
    //   CURLOPT_HTTPHEADER => array(
    //     "Accept: application/json"
    //   ),
    // ));


    $res= '{
        "Result": {
            "StatusCode": "SUCCESS",
            "StatusSubCode": "SUCCESS",
            "Data": [
                "java.util.ArrayList",
                [
                    {
                        "Id": "cluster2",
                        "Coordinates": [
                            "java.util.ArrayList",
                            [
                                {
                                    "CoordinateSystem": "GSE",
                                    "X": [
                                        "java.util.ArrayList",
                                        [
                                            -23653.40397071068,
                                            -23543.02600134048,
                                            -23432.584020809118,
                                            -23322.08237225141,
                                            -23211.52141526105
                                        ]
                                    ],
                                    "Y": [
                                        "java.util.ArrayList",
                                        [
                                            37156.162588035324,
                                            37101.74455729367,
                                            37047.23379019432,
                                            36992.620274516616,
                                            36937.90214525005
                                        ]
                                    ],
                                    "Z": [
                                        "java.util.ArrayList",
                                        [
                                            68827.6413935978,
                                            68809.48846059256,
                                            68791.15175674812,
                                            68772.63186396472,
                                            68753.93315722747
                                        ]
                                    ],
                                    "Latitude": [
                                        "java.util.ArrayList",
                                        [
                                            57.382843,
                                            57.43812,
                                            57.49344,
                                            57.5488,
                                            57.60421
                                        ]
                                    ],
                                    "Longitude": [
                                        "java.util.ArrayList",
                                        [
                                            122.4806,
                                            122.39729,
                                            122.31358,
                                            122.22948,
                                            122.144966
                                        ]
                                    ],
                                    "LocalTime": [
                                        "java.util.ArrayList",
                                        [
                                            20.165277777777778,
                                            20.15972222222222,
                                            20.154166666666665,
                                            20.148611111111112,
                                            20.143055555555556
                                        ]
                                    ]
                                }
                            ]
                        ],
                        "Time": [
                            "java.util.ArrayList",
                            [
                                [
                                    "java.util.GregorianCalendar",
                                    "2020-10-03T13:50:30.000+0000"
                                ],
                                [
                                    "java.util.GregorianCalendar",
                                    "2020-10-03T13:51:30.000+0000"
                                ],
                                [
                                    "java.util.GregorianCalendar",
                                    "2020-10-03T13:52:30.000+0000"
                                ],
                                [
                                    "java.util.GregorianCalendar",
                                    "2020-10-03T13:53:30.000+0000"
                                ],
                                [
                                    "java.util.GregorianCalendar",
                                    "2020-10-03T13:54:30.000+0000"
                                ]
                            ]
                        ],
                        "RadialLength": [
                            "java.util.ArrayList",
                            [
                                81714.79834570922,
                                81642.87681946652,
                                81570.86609522147,
                                81498.76369618799,
                                81426.57290406153
                            ]
                        ]
                    }
                ]
            ]
        }
    }';
    
    // $response = curl_exec($curl);
    
    // curl_close($curl);

    $data = json_decode($res);

    $xCoord = $data->Result->Data[1][0]->Coordinates[1][0]->X[1];
    $coords = $data->Result->Data[1][0]->Coordinates[1][0];

    $points = [];

    foreach ($xCoord as $key => $value) {
       $points[] = convert($coords->X[1][$key],$coords->Y[1][$key],$coords->Z[1][$key]);
    }

        return response()->json($points);
} );

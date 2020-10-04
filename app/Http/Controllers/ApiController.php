<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return JSON
     */
    public function satellites()
    {
        $array= [];
        
        
        for ($i=0; $i < 10; $i++) {      
                $array[]= new \stdClass();
                $array[$i]->id= $i;
                $array[$i]->lat= 45+($i*10);
                $array[$i]->long= -100;
                $array[$i]->height = 1000e3;
                $array[$i]->name= 'SAT0'.$i;
                $array[$i]->type = ($i % 2 == 0) ?'Comunicação':'Amador';
                $array[$i]->status = ($i % 2 == 0) ? 'Lixo':'Ativo';
    
        }
    
    
    
    
        return response()->json($array);
    }

    public function allSats()
    {
        $client = new \MongoDB\Client('mongodb+srv://root:root@cluster0.hhll7.mongodb.net/?retryWrites=true&w=majority');
        $sate = $client->selectDatabase('satelleyete');
        $coll = $sate->satellite;
        $aa = $coll->find();
        $allSats = $aa->toArray();

        return response()->json($allSat);


    }

    function satellite($id = 'cluster2'){
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
        return ["message"=> "no coordenates"];
    }
    

    $points = [];

    foreach ($xCoord as $key => $value) {
       $points[] = $this->convert($coords->X[1][$key],$coords->Y[1][$key],$coords->Z[1][$key]);
    }

        return $points;
    }

    public function getSatellite($id = 'cluster2'){

        $res = $this->satellite($id);

        return response()->json($res);
    }

    function convert($x=0,$y=0,$z=0){

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

        return [$latitude, $longitude,$h];
    }

    public function getIds(){

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
    
        if(!isset($data->Observatory))
        {        
            return response()->json(["message"=> "no satellites"], 404);
        }

        $data = $data->Observatory[1];
    
        $ids= [];
    
        foreach ($data as $key => $value) {
            $ids[] = new \stdClass();
    
            $ids[$key]->id = $value->Id;
            $ids[$key]->name = $value->Name;
        }
    
        return response()->json($ids);
    }

    public function idStore(){

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
    
        if(!isset($data->Observatory))
        {        
            return response()->json(["message"=> "no satellites"], 404);
        }

        $data = $data->Observatory[1];
    
        $ids= [];

        $client = new \MongoDB\Client(env('DB_QUERY_STRING'));//yes, no proper connection config as of yet

        $sate = $client->selectDatabase('satelleyete');

        $coll = $sate->satellite;
    
        foreach ($data as $key => $value) {
            $ids[] = new \stdClass();

            $res = $this->satellite($value->Id);
            
            $ids[$key]->id= $value->Id;
            $ids[$key]->name= $value->Name;

            if (!isset($res['message'])) {
                $ids[$key]->lat=  $res[0][0];
                $ids[$key]->long= $res[0][1];
                $ids[$key]->height = $res[0][2];
            }
            
            $ids[$key]->type = ($key % 2 == 0) ?'Comunicação':'Amador';
            $ids[$key]->status = ($key % 2 == 0) ? 'Lixo':'Ativo';

            $res = $coll->insertOne($ids[$key]);
        }
    
        return response()->json($ids);
    }


}
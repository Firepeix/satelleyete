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
    public function satellite($id=null)
    {
        $position = new stdClass();
        $position->lat = 45;
        $position->long = -100;
        $position->height = 1000e3;
        $position->id = 1;
        $position->name = 'SAT01';



        return  response()->json($position);
    }

    public function calcStuff($x=39978.72318440195,$y=21106.560468885247,$z=-11467.721613738893){

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
}
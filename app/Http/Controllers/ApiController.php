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
     * @return View
     */
    public function satelite($id=null)
    {
        $position = new stdClass();
        $position->lat = 45;
        $position->long = 45;
        $position->height = 1000e3;
        $position->id = 45;
        $position->name = 'SAT01';



        return response()->json();
    }
}
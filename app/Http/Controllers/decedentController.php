<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
use App\Models\decedent;
use App\Models\c_death;
use App\Models\drivers;
class decedentController extends Controller
{
    //
	public function addDead(){
			
		 $date = Jdate::medate();
		 $staD = $date['ymd']['y'].'01'.'01';
		 $endD = $date['ymd']['y'].'12'.'30';
		 $drivers =	drivers::where('status', '=', 1)->get();
		 $buffer = decedent::select('reg_num')
                     ->where('regdate', '<=', $endD)
					 ->where('regdate', '>=', $staD)
                     ->limit(1)
					 ->orderBy('id', 'DESC')
                     ->get();
			if (count($buffer) == 0 ){
			  $regNum	 = 1;
			}
			else {
			  $regNum = $buffer[0]['reg_num'] + 1;
			}
		
		 $c_death = c_death::all();
		 return view('decedent.addDead', compact('regNum', 'drivers', 'c_death' ));
		  
	}
}

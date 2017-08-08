<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
use App\Models\decedent;
use App\Models\c_death;
use App\Models\drivers;
use App\Models\attachs;
use App\Models\attachments;
use Illuminate\Support\Facades\DB;

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
	
	public function cregNum(){
			$date = Jdate::medate();
			$staD = $date['ymd']['y'].'01'.'01';
		 	$endD = $date['ymd']['y'].'12'.'30';
			$regNum = $_POST['regNum'];
			$inf = decedent::select('reg_num')
                     ->where('reg_num', '=', $regNum)
					 ->where('int_date', '<=', $endD)
					 ->where('int_date', '>=', $staD)
                    
                     ->get();
			
			if ( count($inf) == 0 ){
					$msg =  '';
					$status = true;
			}
			else {
					$msg = 'شماره ثبت دفتری وارد شده تکراری است';
					$status = false;
			}
			echo json_encode(	array('status'=>$status,'msg'=>$msg)); 	
	}
	public function decsave()	{
		
		decedent::decsave($_POST);	
		
	}
	public function decList() 	{
			$num = decedent::where('id', '>=', 1)->count();
			$decedent = decedent::select('*')
                     ->limit(150)
					 ->orderBy('id', 'DESC')
                     ->get();
					
			 return view('decedent.decList', compact('decedent','num'));
		
	}
	public function searchDec(){
	    $num = decedent::where('id', '>=', 1)->count();
	  	$gender   = $_POST['gender'];
		$wcolumn  = $_POST['wcolumn'];
		$orderBy  = str_replace('-',' ',$_POST['orderBy']);
		$verb     = $_POST['verb'];

		$sverb = '';
		if ( $verb != '' ){
				$sverb = "AND $wcolumn LIKE  '%$verb%'";
		}
		$decStart = $_POST['decStart'];
		$start = '';
		if ( $decStart != ''  ){
				$decStart  = explode('/',$decStart);
				$intD = $decStart[0].$decStart[1].$decStart[2];
				$intD = $intD*1;
				$start = " AND int_date >= $intD";
				
		}
		$decEnd = $_POST['decEnd'];
		$end = '';
		if ( $decEnd != ''  ){
				$decEnd  = explode('/',$decEnd);
				$intD = $decEnd[0].$decEnd[1].$decEnd[2];
				$intD = $intD*1;
				$end = " AND int_date <= $intD";
		}
		$males  = '';
		$females = '';
		if ( $gender == '0' ){
			$decedent = DB::select("select * from decedents WHERE (1 =1  $sverb  $start  $end ) ORDER BY $orderBy limit 550");                
		
		}
		else  {
			$decedent = DB::select("select * from decedents WHERE ( gender = $gender $sverb  $start  $end ) ORDER BY $orderBy limit 550"); 
		
		}
		 return view('decedent.searchResult', compact('decedent','num'));
	}
	public function attachs(){
			$inf = decedent::find($_POST['tId']);
			$attachs = attachs::where('status', '=', 1)->get();
			
			$deaddoc = attachments::where('d_id', '=', $_POST['tId'])->get();
			
			return view('decedent.deadDoc', compact('inf', 'attachs', 'deaddoc' ));
	}
	public function SendDeadDoc(){
			
				attachments::saveAttachment($_POST);	
								
			
	}
}

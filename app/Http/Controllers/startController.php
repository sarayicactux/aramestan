<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
use App\Jdate;
class startController extends Controller
{
    public function index(){
	
		//session_destroy();
		//بررسی ورود اعضا 
		if ( isset($_SESSION['admin']) ){
					
		}
		else {
		  		return view('layouts.gust', compact('ads'));
				
		}
		
	
	}
	public function login(){
			
	        //بررسی نام کاربری و رمز عبور وارد شده توسط مدیر
			$c_login = false;
			$msg = 'نام کاربری و رمز عبور صحیح نیست<br /> یا کاربری شما غیر فعال شده';
		    $username = $_POST['username'];
			$password = $_POST['password'];
					$rows = users::where('username', '=', $username)->where('is_active', '=', 1)->limit('1')->get();
					if ( count($rows) != 0 ){
							if ($rows[0]['password'] == $password){
									$_SESSION['admin'] = $rows[0];
									$date = Jdate::medate();
									$user = users::find($rows[0]['id']);
									$user->lastlogin_date = $date['date4'];
									$user->lastlogin_date = date('G:i:s');
									$user->save();
									
									$c_login = true;	
									$msg     = '';
									html::regLogs('ورود به نرم افزار','ورود به نرم افزار',$date);
							}	
									
					}
			echo json_encode( array(
					'status'   => $c_login,
					'error'    => $msg			
			
			));			
	
	}
}

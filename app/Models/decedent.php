<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class decedent extends Model
{
		public function drivers(){
				return $this->belongsTo('app\models\drivers');
		}
		public function c_death(){
				return $this->belongsTo('app\models\c_death');
		}
		public function users(){
				return $this->belongsTo('app\models\users');
		}
    //
}

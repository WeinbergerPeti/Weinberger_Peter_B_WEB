<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Szavak extends Model
{
    protected $table = 'szavak';
    
    protected $primrayKey="temaId";

    protected $fillable = [
        'angol',
        'magyar',
        'temaId',
    ];
}

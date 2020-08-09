<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = "posts";
    protected $fillable = [
        'user_id', 'tieude', 'noi_dung','mo_ta','anh'
    ];
    protected $primaryKey="id";
}

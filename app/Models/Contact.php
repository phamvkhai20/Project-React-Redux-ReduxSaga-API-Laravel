<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = "contacts";
    protected $fillable = [
        'ho_ten', 'so_dien_thoai','email', 'tin_nhan'
    ];
    protected $primaryKey="id";
}

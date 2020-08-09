<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = "orders";
    protected $fillable = [
        'id_user', 'chi_tiet_don','email', 'tong_tien','dia_chi','ho_va_ten','so_dien_thoai','chu_thich','code'
    ];
    protected $primaryKey="id";
}

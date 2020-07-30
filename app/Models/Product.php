<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name_product', 'content', 'image','price','old_price','category_id'
    ];
}

<?php

namespace App\Models;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name_category'
    ];
    protected $primaryKey="id";
    public function product(){
        return $this-> hasMany(Product::class, 'category_id','id');
    }
}

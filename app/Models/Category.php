<?php

namespace App\Models;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = "categories";
    protected $fillable = [
        'name_category','mota','image'
    ];
    protected $primaryKey="id";
    public function product(){
        return $this-> hasMany(Product::class, 'category_id','id');
    }
}

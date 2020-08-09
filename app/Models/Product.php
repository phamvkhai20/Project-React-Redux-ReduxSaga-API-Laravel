<?php

namespace App\Models;
use App\Models\Category;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";
    protected $fillable = [
        'name_product', 'content', 'image','price','old_price','category_id','mota','soluong','album','soluong','user_id'
    ];
    protected $primaryKey="id";
public function category(){
    return $this->belongsTo(Category::class,'category_id');
}
}

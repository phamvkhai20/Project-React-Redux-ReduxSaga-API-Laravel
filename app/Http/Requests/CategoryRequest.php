<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     * 
     */

    public function rules()
    {
        return [
            'name_category' => ['unique:categories,name_category'],
        ];
    }
    public function messages(){
        return [ 
            'unique'=>':attribute đã tồn tại',
        ];
    }
    public function attributes(){
        return [
            'name_category'=> 'Danh mục',
        ];
    }
}

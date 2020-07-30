<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class DangKiRequest extends FormRequest
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
            'password' => 'required|string',
            'name' => ['required','min:3','max:50'],
            'email' => ['required','email','unique:users,email'],
            'cf_password' => ['required','min:6','required_with:password','same:password'],
            'password' => ['required','min:6']
        ];
    }
    public function messages(){
        return [ 
            'required'=>':attribute không được để trống',
            'min'=>':attribute ít nhất 3 kí tự',
            'max'=>':attribute nhiều nhất 50 kí tự',
            'required'=>'Trường :attribute không được để trống',
            'unique'=>'Trường :attribute đã được sử dụng trong hệ thống',
            'required'=>'Trường :attribute không được để trống',
            'email'=>'Trường :attribute không đúng định dạng',
            'required'=>'Trường :attribute không được để trống',
            'min'=>'Trường :attribute ít nhất 6 kí tự',
            'required_with'=>'Trường :attribute phải giống nhau ',
            'some'=>'Trường :attribute phải giống nhau  ',
            'required'=>'Trường :attribute không được để trống',
            'min'=>'Trường :attribute ít nhất 6 kí tự',
        ];
    }
    public function attributes(){
        return [
            'name'=> 'Tên',
            'email'=>'email',
            'password'=>'mật khẩu',
            'cf_password'=>'Nhập lại mật khẩu'
        ];
    }
}

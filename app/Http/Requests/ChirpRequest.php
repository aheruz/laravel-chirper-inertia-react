<?php

namespace App\Http\Requests;

use App\Models\Chirp;
use Illuminate\Foundation\Http\FormRequest;

class ChirpRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'message' => 'required|string|max:255'
        ];
    }
}

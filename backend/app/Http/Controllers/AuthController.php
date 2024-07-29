<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $req)
    {
        $req->validate([
            'username' => 'required',
            'password_hash' => 'required',
        ]);

        $user = UserModel::where('username', $req->username)->first();

        if (! $user || $user->password_hash !== $req->password_hash) {
            return response()->json([
                'message' => 'The provided credentials are incorrect.',
            ], 401);
        }

        $user->tokens()->delete();

        $tokenResult = $user->createToken('auth_token', ['role:' . $user->role]);

        return response()->json([
            'access_token' => $tokenResult->plainTextToken,
            'token_type' => 'Bearer',
            'role' => $user->role,
        ]);
    }
}

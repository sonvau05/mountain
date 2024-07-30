<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;

class AuthController extends Controller
{
    public function login(Request $req)
    {
        $req->validate([
            'username' => 'required',
            'password_hash' => 'required',
        ]);

        $user = UserModel::where('username', $req->username)->first();

        if (!$user || $user->password_hash !== $req->password_hash) {
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

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'username' => 'required',
            'email' => 'required',
            'full_name' => 'required',
            'password_hash' => 'required',
        ]);

        $user = UserModel::create([
            'username' => $validatedData['username'],
            'password_hash' => $validatedData['password_hash'],
            'full_name' => $validatedData['full_name'],
            'email' => $validatedData['email'],
            'role' => 'user',

        ]);

        $tokenResult = $user->createToken('auth_token', ['role:user']);
        $token = $tokenResult;

        return response()->json([
            'access_token' => $token->plainTextToken,
            'token_type' => 'Bearer',
            'role' =>'user',
        ]);
    }
}

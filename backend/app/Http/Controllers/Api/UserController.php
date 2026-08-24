<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3',
            'email' => 'required|email',
            'age' => 'required|integer|min:18',
            'role' => 'required',
            'agree' => 'required|boolean',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);

        // Simulate save
        $validated['id'] = time();

        return response()->json([
            'success' => true,
            'message' => 'User saved successfully',
            'data' => $validated
        ], 201);
    }
}


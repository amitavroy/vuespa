<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Mail\ForgotPassword;
use App\Token;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getUserList()
    {
        return response(['data' => User::all()], 200);
    }

    /**
     * Handling the forgot password email request
     */
    public function forgotPassword(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();

        if (!$user) {
            return response(['data' => 'Check if the email is correct'], 403);
        }

        $token = Token::create([
            'user_id' => $user->id,
            'token' => uniqid(),
            'expire_at' => Carbon::now()->addHour(),
        ]);

        Mail::to($user)->send(new ForgotPassword($token, $request));

        return response(['data' => 'Email sent.'], 200);
    }

    /**
     * Hanlding the request to reset the password
     */
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response(['data' => $validator->errors()], 433);
        }

        $token = $request->input('token');
        $dBToken = DB::table('tokens')
            ->where('token', $token)
            ->where('expire_at', '>', Carbon::now())
            ->first();

        if (!$dBToken) {
            return response(['data' => 'Wrong token.'], 403);
        }

        $user = User::where('id', $dBToken->user_id)->first();
        $user->password = bcrypt($request->input('password'));
        $user->save();

        DB::table('tokens')->where('id', $dBToken->id)->delete();

        return response(['data' => 'Password changed.'], 200);
    }
}

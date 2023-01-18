<?php

namespace App\Http\Controllers;

use App\Models\user;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function userLogin(Request $request){
        $email = $request->userEmail;
        $pass = $request->userPass;
        $modelUser = user::where("email", $email)->where("password", md5($pass))->first();
        // error_log($modelUser);
        $token = "";
        if($modelUser != null){
            $token = Str::random(40);
            $modelUser->token = $token;
            $modelUser->update();

            // $user = user::find($modelUser->id);
            // $user->token = $token;
            // $user->update();

            return response()->json(["token" => $token]);
        }else{
            return response()->json(["token" => "failed to login"]);
        }

    }

    public function userLogout(Request $request){
        $user =  user::where("email", $request->userEmail)->first();
        $user->token = "";
        $user->update();
    }
}

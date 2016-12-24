<?php

namespace App\Http\Controllers;

use App\PrivateMessage;
use Illuminate\Http\Request;

use App\Http\Requests;

class PrivateMessageController extends Controller
{
    public function getPrimateMessages(Request $request)
    {
        $pms = PrivateMessage::where('receiver_id', $request->user()->id)->orderBy('created_at', 'desc')->get();
        return response(['data' => $pms], 200);
    }
}

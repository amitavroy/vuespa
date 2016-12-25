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

    public function getPrivateMessageById(Request $request)
    {
        $pm = PrivateMessage::where('id', $request->input('id'))->first();
        return response(['data' => $pm], 200);
    }

    public function sendPrivateMessage(Request $request)
    {
        $attributes = [
            'sender_id' => $request->user()->id,
            'receiver_id' => $request->input('receiver_id'),
            'message' => $request->input('message'),
            'subject' => $request->input('subject'),
            'read' => 0,
        ];

        $pm = PrivateMessage::create($attributes);
        $data = PrivateMessage::where('id', $pm->id)->first();
        return response(['data' => $data], 201);
    }
}

<?php

namespace App\Http\Controllers;

use App\Chat;
use App\Http\Requests;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function getUserConversationById (Request $request)
    {
        $userId = $request->input('id');
        $authUserId = $request->user()->id;
        $chats = Chat::whereIn('sender_id', [$authUserId,$userId])
            ->whereIn('receiver_id', [$authUserId,$userId])
            ->orderBy('created_at', 'desc')
            ->get();

        return response(['data' => $chats], 200);
    }

    public function saveUserChat (Request $request)
    {
        
    }
}

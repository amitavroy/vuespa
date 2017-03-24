<?php

use Illuminate\Http\Request;

Route::post('forgot-password', 'UserController@forgotPassword');
Route::post('reset-password', 'UserController@resetPassword');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function () {
    Route::get('user-list', 'UserController@getUserList');

    /*Chat urls*/
    Route::post('get-user-conversation', 'ChatController@getUserConversationById');
    Route::post('save-chat', 'ChatController@saveUserChat');

    /*Private Message urls*/
    Route::post('get-private-message-notifications', 'PrivateMessageController@getUserNotifications');
    Route::post('get-private-messages', 'PrivateMessageController@getPrimateMessages');
    Route::post('get-private-message', 'PrivateMessageController@getPrivateMessageById');
    Route::post('get-private-messages-sent', 'PrivateMessageController@getPrivateMessageSent');
    Route::post('send-private-message', 'PrivateMessageController@sendPrivateMessage');
});

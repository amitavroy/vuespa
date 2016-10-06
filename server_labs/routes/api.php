<?php

use Illuminate\Http\Request;

Route::get('test', function () {
	return response([1,2,3,4], 200);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

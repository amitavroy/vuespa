<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sender_id', 'receiver_id', 'chat', 'read'
    ];

    protected $appends = ['sender', 'receiver'];

    // protected $attributes = ['sender', 'receiver'];

    public function getSenderAttribute()
    {
        return User::where('id', $this->sender_id)->first();
    }

    public function getReceiverAttribute()
    {
        return User::where('id', $this->receiver_id)->first();
    }
}

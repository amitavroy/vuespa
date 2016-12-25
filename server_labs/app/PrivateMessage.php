<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class PrivateMessage extends Model
{
    protected $fillable = ['sender_id', 'receiver_id', 'subject', 'message', 'read'];

    protected $appends = ['sender', 'receiver'];

    // protected $attributes = ['sender', 'receiver'];

    /**
     * @param $value
     * @return mixed
     */
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }

    public function getSenderAttribute()
    {
        return User::where('id', $this->sender_id)->first();
    }

    public function getReceiverAttribute()
    {
        return User::where('id', $this->receiver_id)->first();
    }
}

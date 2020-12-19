<?php

namespace App\Http\Controllers\Api;

use App\Record;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\RecordIndexResource;
use App\Http\Resources\RecordShowResource;

class RecordController extends Controller
{
    public function index() {
        return RecordIndexResource::collection(
            Record::all()
        );
    }

    public function show($id) {
        return new RecordShowResource(Record::findOrFail($id));
    }
}

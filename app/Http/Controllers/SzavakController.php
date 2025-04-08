<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Szavak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    public function index()
    {
        $szavak=DB::table('szavak as sz')
        ->select('t.temanev as temanev', 'sz.*')
        ->join('tema as t', 'sz.temaId', 't.id')
        ->get();
        return $szavak;
    }

    public function show($id)
    {
        $szo = Szavak::find($id);
        return $szo;
    }

    public function store(Request $request)
    {
        // dd($request).all();
        $szo= new Szavak();
        $szo->angol = $request->angol;
        $szo->magyar = $request->magyar;
        $szo->temaId = $request->temaId;
        $szo->save();
    }

    public function update(Request $request, $id)
    {
        $szo = Szavak::find($id);
        $szo->angol = $request->angol;
        $szo->angol = $request->angol;
        $szo->magyar = $request->magyar;
        $szo->temaId = $request->temaId;
        $szo->save();
    }

    public function destroy($id)
    {
        Szavak::find($id)->delete();
    }

    public function temaSzures($temanev)
    {
        $szavak=DB::table('szavak as sz')
        ->select('t.temanev as temanev', 'sz.*')
        ->join('tema as t', 'sz.temaId', 't.id')
        ->where('temaId', $temanev) 
        ->get();
        return $szavak;
    }
}
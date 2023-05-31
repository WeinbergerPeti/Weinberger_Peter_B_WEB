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
        $szo= new Szavak();
        $szo->nev = $request->nev;
        $szo->kat_id = $request->kat_id;
        $szo->kep_eleresi_ut = $request->kep_eleresi_ut;
        $szo->leiras = $request->leiras;
        $szo->save();
    }

    public function update(Request $request)
    {
        $szo= new Szavak();
        $szo->nev = $request->nev;
        $szo->kat_id = $request->kat_id;
        $szo->kep_eleresi_ut = $request->kep_eleresi_ut;
        $szo->leiras = $request->leiras;
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

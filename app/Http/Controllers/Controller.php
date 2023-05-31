<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    // public function index()
    // {
    //     $receptek=DB::table('receptek as r')
    //     ->select('k.nev as kategoria_nev', 'r.*')
    //     ->join('kategoria as k', 'r.kat_id', 'k.id')
    //     ->get();
    //     return $receptek;
    // }

    // public function show($id)
    // {
    //     $recept = Receptek::find($id);
    //     return $recept;
    // }

    // public function store(Request $request)
    // {
    //     $recept= new Receptek();
    //     $recept->nev = $request->nev;
    //     $recept->kat_id = $request->kat_id;
    //     $recept->kep_eleresi_ut = $request->kep_eleresi_ut;
    //     $recept->leiras = $request->leiras;
    //     $recept->save();
    // }

    // public function update(Request $request)
    // {
    //     $recept= new Receptek();
    //     $recept->nev = $request->nev;
    //     $recept->kat_id = $request->kat_id;
    //     $recept->kep_eleresi_ut = $request->kep_eleresi_ut;
    //     $recept->leiras = $request->leiras;
    //     $recept->save();
    // }

    // public function destroy($id)
    // {
    //     Receptek::find($id)->delete();
    // }
}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Tema;
use Illuminate\Http\Request;

class TemaController extends Controller
{
    public function index()
    {
        $temak=Tema::all();
        return $temak;
    }

    public function show($id)
    {
        $tema = Tema::find($id);
        return $tema;
    }

    public function store(Request $request)
    {
        $tema= new Tema();
        $tema->nev = $request->nev;
        $tema->kat_id = $request->kat_id;
        $tema->kep_eleresi_ut = $request->kep_eleresi_ut;
        $tema->leiras = $request->leiras;
        $tema->save();
    }

    public function update(Request $request)
    {
        $tema= new Tema();
        $tema->nev = $request->nev;
        $tema->kat_id = $request->kat_id;
        $tema->kep_eleresi_ut = $request->kep_eleresi_ut;
        $tema->leiras = $request->leiras;
        $tema->save();
    }

    public function destroy($id)
    {
        Tema::find($id)->delete();
    }
}

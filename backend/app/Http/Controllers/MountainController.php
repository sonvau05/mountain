<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MountainController extends Controller
{
    public function show()
    {
        $listMountain = DB::table('mountain')
            ->select('id', 'name', 'description', 'latitude', 'longitude', 'altitude', 'country', 'region', 'img')
            ->get();

        return response()->json(['ListMountain' => $listMountain]);
    }

    public function insert(Request $req)
    {
        $data = [
            'name' => $req->input('name'),
            'description' => $req->input('description'),
            'latitude' => $req->input('latitude'),
            'longitude' => $req->input('longitude'),
            'altitude' => $req->input('altitude'),
            'country' => $req->input('country'),
            'region' => $req->input('region'),
        ];

        if ($req->hasFile('img')) {
            $file = $req->file('img');
            $filename = $file->getClientOriginalName();
            $file->storeAs('public/images', $filename);
            $data['img'] = $filename;
        }

        $id = DB::table('mountain')->insertGetId($data);

        $newMountain = DB::table('mountain')->where('id', $id)->first();

        return response()->json(['NewMountain' => $newMountain]);
    }

    public function delete($id)
    {
        $mountain = DB::table('mountain')->where('id', $id)->first();

        DB::table('mountain')->where('id', $id)->delete();

        if ($mountain->img) {
            $imagePath = public_path('storage/images/' . $mountain->img);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        $ListMountain = DB::table('mountain')
            ->select('id', 'name', 'description', 'latitude', 'longitude', 'altitude', 'country', 'region', 'img')
            ->get();
        return response()->json(['ListMountain' => $ListMountain]);
    }

    public function update($id, Request $request)
    {
        $mountain = DB::table('mountain')->where('id', $id)->first();

        $name = $request->input('name');
        $description = $request->input('description');
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        $altitude = $request->input('altitude');
        $country = $request->input('country');
        $region = $request->input('region');

        DB::table('mountain')
            ->where('id', $id)
            ->update([
                'name' => $name,
                'description' => $description,
                'latitude' => $latitude,
                'longitude' => $longitude,
                'altitude' => $altitude,
                'country' => $country,
                'region' => $region
            ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->getClientOriginalName();
            $image->storeAs('public/images', $imageName);

            DB::table('mountain')
                ->where('id', $id)
                ->update(['img' => $imageName]);
        }

        $ListMountain = DB::table('mountain')
            ->select('id', 'name', 'description', 'latitude', 'longitude', 'altitude', 'country', 'region', 'img')
            ->get();

        return response()->json(['ListMountain' => $ListMountain]);
    }
}

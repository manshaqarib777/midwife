<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
            'date' => 'required|date',
            'address' => 'required',
            'message' => 'required',
            'g-recaptcha-response' => 'required|recaptchav3:submit,0.5'
        ]);
        Contact::create($validatedData);
        Mail::send(new ContactFormMail($validatedData));

        return response()->json(['message' => 'Contact form submitted successfully.']);
    }
}

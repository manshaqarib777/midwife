@component('mail::message')
<h3>You have a new contact form submission:</h3>
<p>Name: {{ $contact['name'] }}</p>
<p>Email: {{ $contact['email'] }}</p>
<p>Date: {{ $contact['date'] }}</p>
<p>Address: {{ $contact['address'] }}</p>
<p>Message: {{ $contact['message'] }}</p>
@endcomponent

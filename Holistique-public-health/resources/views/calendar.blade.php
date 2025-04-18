@php
    session()->flush();

@endphp

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Google Calendar Integration</title>
</head>
<body>
    <h1>Google Calendar</h1>

    @if(session('success'))
        <p style="color: green">{{ session('success') }}</p>
    @endif

    @if(session('google_calendar_token'))
        <h2>Your Upcoming Events</h2>
        <ul>
            @foreach($events as $event)
                <li>{{ $event['summary'] ?? 'No Title' }} - {{ $event['start'] }}</li>
            @endforeach
        </ul>
    @else
        <a href="{{ route('google.connect') }}">
            <button>Connect Google Calendar</button>
        </a>
    @endif
</body>
</html>

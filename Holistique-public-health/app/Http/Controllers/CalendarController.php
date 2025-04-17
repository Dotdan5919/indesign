<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google_Client;
use Google_Service_Calendar;

use Google_Service_Calendar_Event;
use Google_Service_Calendar_EventDateTime;

class CalendarController extends Controller
{
    public function showCalendar()
    {
        if (!session()->has('google_calendar_token')) {
            return view('calendar');
        }

        $client = new Google_Client();
        $client->setAccessToken(session('google_calendar_token'));

        if ($client->isAccessTokenExpired()) {
            session()->forget('google_calendar_token');
            return redirect()->route('google.connect');
        }

        $service = new Google_Service_Calendar($client);
        $events = $service->events->listEvents('primary')->getItems();

        $formattedEvents = collect($events)->map(function ($event) {
            return [
                'summary' => $event->getSummary(),
                'start' => optional($event->getStart())->getDateTime() ?? optional($event->getStart())->getDate(),
            ];
        });

        return view('calendar', ['events' => $formattedEvents]);
    }

    public function connectCalendar()
    {
        $client = new Google_Client();
        $client->setAuthConfig(storage_path('app/google-calendar/credentials.json'));
        $client->addScope(Google_Service_Calendar::CALENDAR);
        $client->setRedirectUri(route('google.callback'));
        $client->setAccessType('offline');

        return redirect()->away($client->createAuthUrl());
    }

    public function handleGoogleCallback(Request $request)
    {
        $client = new Google_Client();
        $client->setAuthConfig(storage_path('app/google-calendar/credentials.json'));
        $client->setRedirectUri(route('google.callback'));
        $client->addScope(Google_Service_Calendar::CALENDAR);

        $client->authenticate($request->get('code'));
        $token = $client->getAccessToken();

        session(['google_calendar_token' => $token]);

        return redirect()->route('calendar.show')->with('success', 'Google Calendar connected!');
    }
}

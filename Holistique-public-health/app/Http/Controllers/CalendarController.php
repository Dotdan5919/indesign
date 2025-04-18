<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google_Client;
use Google_Service_Calendar;

use Google_Service_Calendar_Event;
use Google_Service_Calendar_EventDateTime;

use App\Models\event;
use IntlDateFormatter;


class CalendarController extends Controller
{
    public function showCalendar()
    {
        if (!session()->has('google_calendar_token')) {
            return redirect()->back();
        }

        $client = new Google_Client();
        $client->setAccessToken(session('google_calendar_token'));

        if ($client->isAccessTokenExpired()) {
            session()->forget('google_calendar_token');
            return redirect()->route('google.connect'); // if there is no token it redirects you to google
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
    session(['eventId' => request('id')]);

        $client = new Google_Client();
        $client->setAuthConfig(storage_path('app/google-calendar/credentials.json'));
        $client->addScope(Google_Service_Calendar::CALENDAR);
        // dd(route('google.callback'));

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

        return redirect('/event?id='. session('eventId'))->with('connected', 'Google Calendar connected!');
    }


    public function addEventToCalendar()
{



    session(['eventId' => request('id')]);

    $client = new Google_Client();
    $client->setAuthConfig(storage_path('app/google-calendar/credentials.json'));
    $client->setAccessToken(session('google_calendar_token')); // or retrieve from DB if stored there

    if ($client->isAccessTokenExpired()) {
        session()->forget('google_calendar_token');
        return redirect('/event?id='. session('eventId'))->route('google.connect');
    }

$service = new \Google_Service_Calendar($client);

$DBEvent=event::where("id","=",session('eventId'))->first();
$timezone = date_default_timezone_get();
    $event = new Google_Service_Calendar_Event([
        'summary' => $DBEvent->event_name,
        'location' => $DBEvent->address,
        'description' => $DBEvent->description,
        'start' => [
            'dateTime' => $DBEvent->event_date . 'T' . $DBEvent->start_time, // Adjust timezone
            'timeZone' => $timezone,
        ],
        'end' => [
            'dateTime' => $DBEvent->event_date . 'T' . $DBEvent->start_time,
            'timeZone' => $timezone,
        ],
        'reminders' => [
            'useDefault' => false,
            'overrides' => [
                ['method' => 'email', 'minutes' => 24 * 60],
                ['method' => 'popup', 'minutes' => 10],
            ],
        ],
    ]);

    $calendarId = 'primary';
    $createdEvent = $service->events->insert($calendarId, $event);

    return redirect('/event?id='. session('eventId'))->with('success',  $createdEvent->getHtmlLink());
}






}






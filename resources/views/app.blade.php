<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Satelleyete</title>
    </head>
    <body>
    <div id="app" data-api-url="{{env('API_URL')}}">
        <v-app class="v-app-back">
            <main-layout />
        </v-app>
    </div>
    <script src="{{ mix('js/app.js')  }}"></script>
    </body>
</html>

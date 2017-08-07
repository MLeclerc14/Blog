<!doctype html>
<html lang="{{ config('app.locale', 'en') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
        @section('header')
            <title>{{ config('app.name', '') }}</title>
        @show
        <link rel="stylesheet" href="/auth/css/app.css">
    </head>
    <body>
        <div id="app">
            <div class="content">
                @yield('content')
            </div>
        </div>
        <script src="/auth/js/app.js"></script>
    </body>
</html>

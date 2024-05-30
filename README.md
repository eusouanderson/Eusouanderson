<!DOCTYPE html>
<html>
<head>
    <style>
        .grid {
            display: grid;
            grid-template-columns: repeat(7, 20px);
            grid-gap: 2px;
        }
        .cell {
            width: 20px;
            height: 20px;
        }
        .level-0 { background-color: #ebedf0; }
        .level-1 { background-color: #9be9a8; }
        .level-2 { background-color: #40c463; }
        .level-3 { background-color: #30a14e; }
        .level-4 { background-color: #216e39; }
    </style>
</head>
<body>
    <div class="grid">
        <div class="cell level-0"></div>
        <div class="cell level-1"></div>
        <div class="cell level-2"></div>
        <div class="cell level-3"></div>
        <div class="cell level-4"></div>
        <div class="cell level-0"></div>
        <div class="cell level-1"></div>
        <!-- Continue adicionando mais células conforme necessário -->
    </div>
</body>
</html>

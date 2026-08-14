param(
    [string]$Page = "solutions/irrigation-melioration/index.html"
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
$pagePath = Join-Path $projectRoot $Page
$encoding = [System.Text.UTF8Encoding]::new($false)
$html = [System.IO.File]::ReadAllText($pagePath, $encoding)

foreach ($name in @("application-links", "catalog-links")) {
    $includePath = Join-Path $projectRoot "includes/$name.html"
    $fragment = [System.IO.File]::ReadAllText($includePath, $encoding).Trim()
    $start = "<!-- include:${name}:start -->"
    $end = "<!-- include:${name}:end -->"
    $pattern = "(?s)" + [regex]::Escape($start) + ".*?" + [regex]::Escape($end)
    $replacement = "$start`r`n$fragment`r`n$end"

    if ($html -notmatch $pattern) {
        throw "Include markers not found for $name in $Page"
    }

    $html = [regex]::Replace($html, $pattern, [System.Text.RegularExpressions.MatchEvaluator]{ param($match) $replacement }, 1)
}

[System.IO.File]::WriteAllText($pagePath, $html, $encoding)
Write-Host "Commercial includes synchronized in $Page"

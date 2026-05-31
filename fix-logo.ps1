Add-Type -AssemblyName System.Drawing
$srcPath = 'C:\Users\User\Downloads\Site harpy\src\components\harpy-logo.png'
$dstPath = 'C:\Users\User\Downloads\Site harpy\src\components\harpy-logo-dark.png'
$src = [System.Drawing.Image]::FromFile($srcPath)
$dst = New-Object System.Drawing.Bitmap($src.Width, $src.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $src.Height; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        $px = $src.GetPixel($x, $y)
        if ($px.A -lt 30) {
            $dst.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $maxC = [Math]::Max($px.R, [Math]::Max($px.G, $px.B))
            $minC = [Math]::Min($px.R, [Math]::Min($px.G, $px.B))
            $brightness = ($px.R + $px.G + $px.B) / 3
            $sat = if ($maxC -gt 0) { ($maxC - $minC) / $maxC } else { 0 }
            if ($brightness -lt 100 -and $sat -lt 0.40) {
                $dst.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($px.A, 255, 255, 255))
            } else {
                $dst.SetPixel($x, $y, $px)
            }
        }
    }
}
$src.Dispose()
$dst.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dst.Dispose()
Write-Host 'Done'

<?php
shell_exec('d:\downloads\youtube-dl.exe '.$_GET['yt_id'] .' -o c:/%HOMEPATH%/Dropbox/phone/%(title)s.%(ext)s');
echo 'Video letöltve';

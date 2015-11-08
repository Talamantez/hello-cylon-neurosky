# Hello Cyclon Neurosky

As of 8/19/2015, gort [http://gort.io/] had yet to update its CLI.  This small program is a bare-minimum file to use with debugging.



## This is a transcript of a debugging session to use as reference for connecting mindwave mobile to ubuntu 14.04

\s[14:49] == talamantez \s[49a2adbf@gateway/web/freenode/ip.73.162.173.191] has joined #cylon

\s[14:50] <deadprogram> hello, how can i help?

\s[14:50] <talamantez> hi @deadprogram


\s[14:51] <talamantez> I'm running into a bug with Cylon and the mindwave mobile

\s[14:51] <talamantez> I'm able to connect to the device using the gort commands

\s[14:51] <talamantez> but when I run a program, it prints out a few lines and then closes

\s[14:52] <talamantez> the example app I'm running is here: https://github.com/Talamantez/hello-cylon-neurosky/blob/master/app.js

\s[14:53] <talamantez> I'm on Ubuntu 14.04 and node 0.10.33, installed via NVM

\s[14:55] <talamantez> these are the lines that print out before the program quits

\s[14:55] <talamantez>  \s[Robot 1] - Starting connections.

\s[14:55] <talamantez>  Starting connection 'neurosky' on port /dev/rfcomm0.

\s[14:56] <deadprogram> if you want you coupld put then into a gist

\s[14:56] <deadprogram> might be easier to read

\s[14:56] <talamantez> right - good idea - sec

\s[14:56] <deadprogram> kk

\s[14:57] <talamantez> thanks, here is the gist

\s[14:57] <talamantez> https://gist.github.com/Talamantez/1e453d83b7b25a2c7e0c

\s[14:58] <deadprogram> I'm currently updating Gort for Bluez 5.x

\s[14:59] <deadprogram> you might need to use the rfcomm program to connect manually for now

\s[14:59] <deadprogram> what OS/version are you running?

\s[14:59] <deadprogram> oh wait you already said

\s[14:59] <talamantez> ya - Ubuntu 14.04

\s[15:00] <deadprogram> one sec

\s[15:00] <talamantez> k

\s[15:02] <deadprogram> turn on the mindwave, and run `hcitool scan`

\s[15:03] <deadprogram> unless you already know the MAC address for your mindwave

\s[15:03] <deadprogram> you need to run

\s[15:03] <deadprogram> rfcomm connect rfcomm0 <MAC>

\s[15:04] <deadprogram> once running, leave it going, and in a separate terminal, run your cylon program

\s[15:04] <talamantez> okay trying

\s[15:05] <talamantez> Can't connect RFCOMM socket: Invalid exchange

\s[15:07] <deadprogram> you might need to run under sudo, or else make sure your current user has needed permissions

\s[15:07] <talamantez> sudo returns the same error

\s[15:07] <deadprogram> you have the MAC address?

\s[15:08] <talamantez> I think so - that is this number, correct? 20:68:9D:4C:0D:B7

\s[15:08] <deadprogram> substitute it for <MAC> in the above command, if you did not already

\s[15:17] <talamantez> hmmm, still getting the same error

\s[15:19] <talamantez> an 'rfcomm -a' returns 'rfcomm0: 20:68:9D:4C:0D:B7 channel 1 closed '

\s[15:20] <deadprogram> what was your exact rfcomm command you entered before?

\s[15:21] <talamantez> rfcomm connect rfcomm0 20:68:9D:4C:0D:B7

\s[15:21] <talamantez> then I tried rfcomm hci0 connect 20:68:9D:4C:0D:B7

\s[15:21] <deadprogram> you might need the pairing code

\s[15:22] <talamantez> the gort command?

\s[15:23] <deadprogram> did you start by pairing the mindwive with your computer?

\s[15:24] <deadprogram> run

\s[15:24] <deadprogram> bluetooth-agent 0000 &

\s[15:24] <talamantez> I started by turning on the mindwave, then running 'gort scan bluetooth', 'gort bluetooth pair <MAC>', 'got bluetooth connect <MAC>'

\s[15:25] <deadprogram> the error "Invalid exchange" is usually due to not being paired

\s[15:25] <deadprogram> bluetooth-agent 0000 &

\s[15:25] <deadprogram> and then run

\s[15:27] <deadprogram> make sure the mindwave is available to be paired http://support.neurosky.com/kb/mindwave-mobile/how-do-i-put-the-mindwave-mobile-into-
discovery-mode

\s[15:28] <deadprogram> it should only need to be paired once, then should be fine

\s[15:28] <deadprogram> you might need to run rfcomm using sudo

\s[15:29] <deadprogram> sudo rfcomm connect rfcomm0 20:68:9D:4C:0D:B7

\s[15:29] <deadprogram> if it is paired, and the mindwave is on, you should see message from rfcomm to that effect

\s[15:31] <talamantez> hmmm - the gort commands were succeeding to pair and connect - maybe I should restart incase I messed something up

\s[15:31] <talamantez> thanks for your help - I'm going to try again
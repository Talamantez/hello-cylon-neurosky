# Hello Cylon Neurosky

As of 8/19/2015, gort [http://gort.io/] was in the process of updating its CLI for Ubuntu 14.04 for bluetooth devices.  This small program is a bare-minimum file to use with debugging the connection of a Neurosky Mindwave Mobile.


### Transcript of debugging session

<p>[14:49] == talamantez [49a2adbf@gateway/web/freenode/ip.73.162.173.191] has joined #cylon

<p>[14:50] <deadprogram> hello, how can i help?

<p>[14:50] <talamantez> hi @deadprogram


<p>[14:51] <talamantez> I'm running into a bug with Cylon and the mindwave mobile

<p>[14:51] <talamantez> I'm able to connect to the device using the gort commands

<p>[14:51] <talamantez> but when I run a program, it prints out a few lines and then closes

<p>[14:52] <talamantez> the example app I'm running is here: https://github.com/Talamantez/hello-cylon-neurosky/blob/master/app.js

<p>[14:53] <talamantez> I'm on Ubuntu 14.04 and node 0.10.33, installed via NVM

<p>[14:55] <talamantez> these are the lines that print out before the program quits

<p>[14:55] <talamantez>  [Robot 1] - Starting connections.

<p>[14:55] <talamantez>  Starting connection 'neurosky' on port /dev/rfcomm0.

<p>[14:56] <deadprogram> if you want you coupld put then into a gist

<p>[14:56] <deadprogram> might be easier to read

<p>[14:56] <talamantez> right - good idea - sec

<p>[14:56] <deadprogram> kk

<p>[14:57] <talamantez> thanks, here is the gist

<p>[14:57] <talamantez> https://gist.github.com/Talamantez/1e453d83b7b25a2c7e0c

<p>[14:58] <deadprogram> I'm currently updating Gort for Bluez 5.x

<p>[14:59] <deadprogram> you might need to use the rfcomm program to connect manually for now

<p>[14:59] <deadprogram> what OS/version are you running?

<p>[14:59] <deadprogram> oh wait you already said

<p>[14:59] <talamantez> ya - Ubuntu 14.04

<p>[15:00] <deadprogram> one sec

<p>[15:00] <talamantez> k

<p>[15:02] <deadprogram> turn on the mindwave, and run `hcitool scan`

<p>[15:03] <deadprogram> unless you already know the MAC address for your mindwave

<p>[15:03] <deadprogram> you need to run

<p>[15:04] <deadprogram> once running, leave it going, and in a separate terminal, run your cylon program

<p>[15:04] <talamantez> okay trying

<p>[15:05] <talamantez> Can't connect RFCOMM socket: Invalid exchange

<p>[15:07] <deadprogram> you might need to run under sudo, or else make sure your current user has needed permissions

<p>[15:07] <talamantez> sudo returns the same error

<p>[15:07] <deadprogram> you have the MAC address?

<p>[15:08] <talamantez> I think so - that is this number, correct? 20:68:9D:4C:0D:B7

<p>[15:08] <deadprogram> substitute it for <MAC> in the above command, if you did not already

<p>[15:17] <talamantez> hmmm, still getting the same error

<p>[15:19] <talamantez> an 'rfcomm -a' returns 'rfcomm0: 20:68:9D:4C:0D:B7 channel 1 closed '

<p>[15:20] <deadprogram> what was your exact rfcomm command you entered before?

<p>[15:21] <talamantez> rfcomm connect rfcomm0 20:68:9D:4C:0D:B7

<p>[15:21] <talamantez> then I tried rfcomm hci0 connect 20:68:9D:4C:0D:B7

<p>[15:21] <deadprogram> you might need the pairing code

<p>[15:22] <talamantez> the gort command?

<p>[15:23] <deadprogram> did you start by pairing the mindwive with your computer?

<p>[15:24] <deadprogram> run

<p>[15:24] <deadprogram> bluetooth-agent 0000 &

<p>[15:24] <talamantez> I started by turning on the mindwave, then running 'gort scan bluetooth', 'gort bluetooth pair <MAC>', 'got bluetooth connect <MAC>'

<p>[15:25] <deadprogram> the error "Invalid exchange" is usually due to not being paired

<p>[15:25] <deadprogram> bluetooth-agent 0000 &

<p>[15:25] <deadprogram> and then run

<p>[15:27] <deadprogram> make sure the mindwave is available to be paired http://support.neurosky.com/kb/mindwave-mobile/how-do-i-put-the-mindwave-mobile-into-
discovery-mode

<p>[15:28] <deadprogram> it should only need to be paired once, then should be fine

<p>[15:28] <deadprogram> you might need to run rfcomm using sudo

<p>[15:29] <deadprogram> sudo rfcomm connect rfcomm0 20:68:9D:4C:0D:B7

<p>[15:29] <deadprogram> if it is paired, and the mindwave is on, you should see message from rfcomm to that effect`
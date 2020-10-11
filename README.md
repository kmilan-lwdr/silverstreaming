# WebRTC Video/Audio Broadcast

WebRTC PeerToPeer broadcast application that allows the broadcaster to send video and audio stream to all connected users (watchers). 

You can find the tutorial that explains the code and functionality on my [website](https://gabrieltanner.org/blog/webrtc-video-broadcast).

## Getting started

### Starting the application

Start the application using Node:

```bash
# Install dependencies for server
npm install

# Run the server
node server
```

Start the application using Docker:

```bash
# Building the image
docker build --tag webrtcvideobroadcast .

# Run the image in a container
docker run -d -p 4000:4000 webrtcvideobroadcast
```

### Testing the application

The application should now be running on your localhost:4000 and you test it by connecting to localhost:4000/broadcast.html to add a new broadcaster.

After that, you just need to visit localhost:4000 to connect to the server as a client and you should get the video that is streamed from the broadcaster.

## Adding a TURN server

Install a linux-server. Allow traffic to the port you choose (in this case 12779). Install and configure coturn.

```

sudo apt-get update
sudo apt-get install coturn
turnserver --listening-port 12779 --user testuser:testpassword --external-ip PUBLIC_CLOUD_IP/PRIVATE_CLOUD_IP --realm DOMAIN_OR_PUBLIC_IP --verbose

```

Configure your TURN credentials to broadcast.js and watch.js

## Authors

Anna Suo-Anttila, Jermu Toiviainen, Kim Milan, Shujun Liu, Ville Mannila

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

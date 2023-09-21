#!/bin/bash

source "./.env"

netlify deploy --auth $NETLIFY_AUTH_TOKEN  --site discord-arnaizdev --prod

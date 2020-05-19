#!/bin/bash

ACCESS_TOKEN=ce3114a8756b4e0aa94ae6a1133ebb76
ENVIRONMENT=production
LOCAL_USERNAME=$(whoami)
curl https://api.rollbar.com/api/1/deploy/ \
  -F access_token="$ACCESS_TOKEN" \
  -F environment="$ENVIRONMENT" \
  -F revision="$GATSBY_BUILD_TIME" \
  -F local_username="$LOCAL_USERNAME"

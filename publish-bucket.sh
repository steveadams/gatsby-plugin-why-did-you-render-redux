#!/bin/bash

# this script must always be run with -e so errors prevent a deploy
set -uxe

rm -rf ./bucket
cp -r ./public ./bucket

# compress the files before uploading it to google
# https://cloud.google.com/load-balancing/docs/https/adding-a-backend-bucket-to-content-based-load-balancing
# https://cloud.google.com/storage/docs/transcoding
# must serve this without the .gz extension; google respects the accept-encoding header for clients
# gsutil -h "Content-Encoding:gzip" -h "Content-Type:application/javascript; charset=utf-8"

find ./bucket \( -name '*.css' -o -name '*.html' -o -name '*.svg' -o -name '*.js' -o -name '*.map' -o -name '*.json' -o -name '*.xml' \) -exec gzip --verbose --best {} \; -exec mv "{}.gz" "{}" \;

gsutil -m rsync -r -x '\.DS_Store' bucket gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/
gsutil -m acl -r ch -u AllUsers:R gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/

#  || true to ignore errors when no file types are found
# google automatically sets the correct content-type based on the file extension

gsutil -m setmeta \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public, max-age=31536000" \
  gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/**.css

gsutil -m setmeta \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public, max-age=60" \
  gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/**.html || true

gsutil -m setmeta \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public, max-age=31536000" \
  gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/**.svg || true

gsutil -m setmeta \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public, max-age=31536000" \
  gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/**.js || true

gsutil -m setmeta \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public, max-age=31536000" \
  gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/**.map || true

gsutil -m setmeta \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public, max-age=31536000" \
  gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/**.json || true

gsutil -m setmeta \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public, max-age=31536000" \
  gs://ids-gatsby/hashed/"$GATSBY_BUILD_TIME"/**.xml || true

# this is compressed, and won't make sense to gatsby serve and so on
rm -rf ./bucket

# for the case where the google load balancer is misconfigured, make sure nginx will serve /hashed
mkdir -p ./hashed
cp -r ./public ./hashed/"$GATSBY_BUILD_TIME"
mv ./hashed ./public/hashed

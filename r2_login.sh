#!/bin/bash
# Saves the Cloudflare R2 keys on THIS machine only (never in chat, never in the app).
# From the Cloudflare dashboard: R2 > API Tokens > Manage > Create token
# (Object Read & Write, limited to your bucket). It shows an Access Key ID and a
# Secret Access Key. The keys are kept on the pod's saved disk (/workspace) so a
# stop and restart does not lose them.
export RCLONE_CONFIG=/workspace/.rclone.conf
ACC_DEFAULT=7d9e146a648c357c463c6e45c26861f4
read -p "Account ID [$ACC_DEFAULT]: " ACC; ACC=${ACC:-$ACC_DEFAULT}
read -p "Bucket name [sixteen-eleven-audio]: " BUCKET; BUCKET=${BUCKET:-sixteen-eleven-audio}
read -p "Access Key ID: " KEY
read -s -p "Secret Access Key (hidden as you type): " SEC; echo
# A token limited to one bucket may not create or list buckets, so rclone must
# not try (no_check_bucket), and the check below looks inside the bucket only.
rclone config create r2 s3 provider=Cloudflare access_key_id="$KEY" secret_access_key="$SEC" \
  endpoint="https://$ACC.r2.cloudflarestorage.com" acl=private no_check_bucket=true >/dev/null
chmod 600 "$RCLONE_CONFIG"
echo ok > /tmp/r2-check.txt
if rclone copyto /tmp/r2-check.txt "r2:$BUCKET/_check.txt" && rclone cat "r2:$BUCKET/_check.txt" >/dev/null \
   && rclone deletefile "r2:$BUCKET/_check.txt"; then
  echo "R2 is connected: this server can write to, read from and delete in $BUCKET."
else
  echo "Could not use $BUCKET. Check the bucket name and that the token has Object Read & Write on it."
fi

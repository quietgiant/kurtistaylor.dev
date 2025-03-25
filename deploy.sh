ssh bw "cd kurtistaylor.dev && \
git pull && \
chmod -R 755 . && \
sudo systemctl reload caddy"
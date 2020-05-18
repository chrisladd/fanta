#!/usr/bin/env bash

node g_docs.js
git add . && git commit -m 'updates docs' && git push
